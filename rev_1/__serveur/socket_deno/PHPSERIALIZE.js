/*
  https://stackoverflow.com/questions/14227388/unserialize-php-array-in-javascript 
*/
const PHPSERIALIZE={
    "stdClass" : function(){
        /* vide */
    } ,
     stringify( val ){
        const hash=new Map( [[Infinity,"d:INF;"],[-Infinity,"d:-INF;"],[NaN,"d:NAN;"],[null,"N;"],[undefined,"N;"]] );
        const utf8length=( str ) => {
            return(str ? ( encodeURI( str ).match( /(%.)?./g ).length ) : ( 0 ));
        };
        const serializeString=( s , delim='"') => {
            return("" + utf8length( s ) + ":" + delim[0] + "" + s + "" + delim[delim.length - 1] + "");
        };
        let ref=0;
        function serialize( val , canReference=true ){
            if(hash.has( val )){
                return(hash.get( val ));
            }
            ref+=canReference;
            if( typeof val === "string"){
                return("s:" + serializeString( val ) + ";");
            }
            if( typeof val === "number"){
                return("" + (Math.round( val ) === val ? ( "i" ) : ( "d" )) + ":" + ("" + val).toUpperCase().replace( /(-?\d)E/ , "$1.0E" ) + ";");
            }
            if( typeof val === "boolean"){
                return("b:" + (+val) + ";");
            }
            const a=Array.isArray( val ) || val.constructor === Object;
            hash.set( val , "" + "rR"[+a] + ":" + ref + ";" );
            if( typeof val.serialize === "function"){
                return("C:" + serializeString( val.constructor.name ) + ":" + serializeString( val.serialize() , "{}" ) + "");
            }
            const vals=Object.entries( val ).filter( ( [k,v] ) => {
                return( typeof v !== "function");} );
            return((a ?
                      ( 
                        "a"
                      ) : ( 
                        "O:" + serializeString( val.constructor.name ) + ""
                      )) + (":" + vals.length + ":{" + vals.map( ( [k,v] ) => {
                            return(serialize( a && /^\d{1,16}$/.test( k ) ? ( +k ) : ( k ) , false ) + serialize( v ));} ).join( "" ) + "}"));
        }
        return(serialize( val ));
    }  ,
    
     /* Provide in second argument the classes that may be instantiated */
     /* e.g.  { MyClass1, MyClass2 } */
     parse( str , allowedClasses={} ){
        allowedClasses.stdClass=PHPSERIALIZE.stdClass;
        /* Always allowed. */
        let offset=0;
        const values=[null];
        const specialNums={"INF" : Infinity ,"-INF" : -Infinity ,"NAN" : NaN};
        const kick=( msg , i=offset) => {
            throw new Error( "Error at " + i + ": " + msg + "\n" + str + "\n" + " ".repeat( i ) + "^" );
        };
        const read=( expected , ret ) => {
            return(expected === str.slice( offset , offset+=expected.length ) ?
                  ( 
                    ret
                  ) : ( 
                    kick( "Expected '" + expected + "'" , offset - expected.length )
                  ));
        };
        function readMatch( regex , msg , terminator=";" ){
            read( ":" );
            const match=regex.exec( str.slice( offset ) );
            if(!match){
                kick( "Exected " + msg + ", but got '" + str.slice( offset ).match( /^[:;{}]|[^:;{}]*/ )[0] + "'" );
            }
            offset+=match[0].length;
            return(read( terminator , match[0] ));
        }
        function readUtf8chars( numUtf8Bytes , terminator="" ){
            const i=offset;
            while(numUtf8Bytes > 0){
                const code=str.charCodeAt( offset++ );
                numUtf8Bytes-=code < 0x80 ? ( 1 ) : ( code < 0x800 || code>>11 === 0x1B ? ( 2 ) : ( 3 ) );
            }
            return(numUtf8Bytes ? ( kick( "Invalid string length" , i - 2 ) ) : ( read( terminator , str.slice( i , offset ) ) ));
        }
        const create=( className ) => {
            return(!className ?
                  ( 
                    {}
                  ) : ( 
                    allowedClasses[className] ?
                      ( 
                        Object.create( allowedClasses[className].prototype )
                      ) : ( 
                        new {[className] : function(){
                                /* vide */
                            }}[className]
                      )
                  ));
        };
        /* Create a mock class for this name */
        const readBoolean=() => {
            return(readMatch( /^[01]/ , "a '0' or '1'" , ";" ));
        };
        const readInt=() => {
            return(+readMatch( /^-?\d+/ , "an integer" , ";" ));
        };
        const readUInt=( terminator ) => {
            return(+readMatch( /^\d+/ , "an unsigned integer" , terminator ));
        };
        const readString=( terminator="") => {
            return(readUtf8chars( readUInt( ':"' ) , '"' + terminator ));
        };
        function readDecimal(){
            const num=readMatch( /^-?(\d+(\.\d+)?(E[+-]\d+)?|INF)|NAN/ , "a decimal number" , ";" );
            return(num in specialNums ? ( specialNums[num] ) : ( +num ));
        }
        function readKey(){
            const typ=str[offset++];
            return(typ === "s" ?
                  ( 
                    readString( ";" )
                  ) : ( 
                    typ === "i" ?
                      ( 
                        readUInt( ";" )
                      ) : ( 
                        kick( "Expected 's' or 'i' as type for a key, but got ${str[offset-1]}" , offset - 1 )
                      )
                  ));
        }
        function readObject( obj ){
            for( let i=0,length=readUInt( ":{" ) ; i < length ; i++ ){
                obj[readKey()]=readValue();
            }
            return(read( "}" , obj ));
        }
        function readArray(){
            const obj=readObject( {} );
            return(Object.keys( obj ).some( ( key , i ) => {
                        return(key != i);} ) ? ( obj ) : ( Object.values( obj ) ));
        }
        function readCustomObject( obj ){
            if( typeof obj.unserialize !== "function"){
                kick( "Instance of " + obj.constructor.name + " does not have an \"unserialize\" method" );
            }
            obj.unserialize( readUtf8chars( readUInt( ":{" ) ) );
            return(read( "}" , obj ));
        }
        function readValue(){
            const typ=str[offset++].toLowerCase();
            const ref=values.push( null ) - 1;
            const val=typ === "n" ?
              ( 
                read( ";" , null )
              ) : ( 
                typ === "s" ?
                  ( 
                    readString( ";" )
                  ) : ( 
                    typ === "b" ?
                      ( 
                        readBoolean()
                      ) : ( 
                        typ === "i" ?
                          ( 
                            readInt()
                          ) : ( 
                            typ === "d" ?
                              ( 
                                readDecimal()
                              ) : ( 
                                typ === "a" ?
                                  ( 
                                    readArray()
                                  ) : ( 
                                    /* Associative array */
                                    typ === "o" ?
                                      ( 
                                        readObject( create( readString() ) )
                                      ) : ( 
                                        /* Object */
                                        typ === "c" ?
                                          ( 
                                            readCustomObject( create( readString() ) )
                                          ) : ( 
                                            /* Custom serialized object */
                                            typ === "r" ?
                                              ( 
                                                values[readInt()]
                                              ) : ( 
                                                /* Backreference */
                                                kick( "Unexpected type " + typ + "" , offset - 1 )
                                              )
                                          )
                                      )
                                  )
                              )
                          )
                      )
                  )
              );
            if(typ !== "r"){
                values[ref]=val;
            }
            return val;
        }
        const val=readValue();
        if(offset !== str.length){
            kick( "Unexpected trailing character" );
        }
        return val;
    } 

};
export{PHPSERIALIZE as PHPSERIALIZE};
/* *************** EXAMPLE USES *********************** */
/* Unserialize a sequential array */
/* console.log(PHPSERIALIZE.parse('a:4:{i:0;s:4:"This";i:1;s:2:"is";i:2;s:2:"an";i:3;s:5:"array";}')); */
/* Unserialize an associative array into an object */
/* console.log(PHPSERIALIZE.parse('a:2:{s:8:"language";s:3:"PHP";s:7:"version";d:7.1;}')); */