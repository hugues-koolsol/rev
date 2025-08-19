"use strict";
const CRLF="\r\n";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const NBESPACESREV=3;
const MON_LF='¶' + 'LF' + '¶';
const MON_CR='¶' + 'CR' + '¶';
const MON_CRLF='¶' + 'CR¶' + '¶' + 'LF¶';
const REGEX_LF=new RegExp( MON_LF , 'g' );
const REGEX_CR=new RegExp( MON_CR , 'g' );
const REGEX_CRLF=new RegExp( MON_CRLF , 'g' );
/*
  entête[
  ['id','id'                                 ,''], // 00
  ['val','__xva'                             ,''],
  ['typ','type'                              ,''],
  ['niv','niveau'                            ,''],
  ['coQ','constante quotee'                  ,''],
  ['pre','position du premier caractère'     ,''], // 05
  ['der','position du dernier caractère'     ,''],
  ['pId','Id du parent'                      ,''], // 10 ->  7
  ['nbE','nombre d\'enfants'                 ,''], // 11 ->  8
  ['nuE','numéro enfants'                    ,''], // 12 ->  9
  ['pro','profondeur'                        ,''], // 15 -> 10
  ['pop','position ouverture parenthese'     ,''], // 22 -> 11
  ['pfp','position fermeture parenthese'     ,''], // 23 -> 12
  ['com','commentaire'                       ,''],  
  
  ];
*/
class c_html_vers_rev1{
    #nom_de_la_variable='';
    __m_rev1=null;
    __m_astjs_vers_rev=null;
    /*
      =============================================================================================================
    */
    constructor( nom_de_la_variable , module_rev , module_astjs_vers_rev ){
        this.#nom_de_la_variable=nom_de_la_variable;
        this.__m_rev1=module_rev;
        this.__m_astjs_vers_rev=module_astjs_vers_rev;
    }
    /*
      =============================================================================================================
    */
    get nom_de_la_variable(){
        return this.#nom_de_la_variable;
    }
    /*
      =============================================================================================================
      function #construit_cle 
    */
    #construit_cle( length ){
        let resultat='';
        /* on retire I('I' de [i]ncrément ) O("o" de [o]bjet) l("l" de laitue)  0(zéro) 1(un) car ces lettres peuvent être confondues entre elles */
        const lettres='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz23456789';
        const longueur=lettres.length;
        let counter=0;
        while(counter < length){
            resultat+=lettres.charAt( Math.floor( Math.random() * longueur ) );
            counter++;
        }
        return('_' + resultat);
    }
    /*#
      =======================================================================================
      function asthtml_vers_rev
      
      Construit rev à partir d'un AST html qui ressemble à ça :
      {"type":"BODY",
        "content":[
          {"type":"DIV","content":["a"],"attributes":{"class":"a"}},
          {"type":"DIV","content":["b"],"attributes":{"class":"b"}},
          "\n"
         ]
      }
      
      l'option retirerHtmlHeadEtBody permet de retirer les html,body et head si ils ne sont 
      pas renseignés
      =======================================================================================  
    */
    asthtml_vers_rev( jsonDeHtml , niveau , retirerHtmlHeadEtBody , typeParent , tableau_des_javascript_a_convertir ){
        var i=0;
        var j=0;
        var k=0;
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var dernierEstTexte=false;
        var attributs='';
        var contenu='';
        var obj={"dernierEstTexte" : false};
        var type='';
        var typeScriptNonTraite=false;
        if(jsonDeHtml.type || jsonDeHtml.type === '' && jsonDeHtml.content && jsonDeHtml.content.length > 0){
            type=jsonDeHtml.type.toLowerCase();
            if(jsonDeHtml.type !== ''){
                if(type === 'script'){
                    if(jsonDeHtml.attributes && jsonDeHtml.attributes.type){
                        if(jsonDeHtml.attributes.type.toLowerCase() === 'application/ld+json'
                               || jsonDeHtml.attributes.type.toLowerCase() === 'application/json'
                        ){
                            t+='\n' + esp0 + 'ldPlusJsonDansHtml(';
                            type='ldPlusJsonDansHtml';
                        }else if((jsonDeHtml.attributes.type.toLowerCase() === 'text/javascript'
                                   || jsonDeHtml.attributes.type.toLowerCase() === 'module')
                               && jsonDeHtml.hasOwnProperty( 'content' )
                        ){
                            /*
                              si il y a du contenu ( content existe ), 
                            */
                            t+='\n' + esp0 + 'javascriptDansHtml(';
                            type='javascriptDansHtml';
                        }else if((jsonDeHtml.attributes.type.toLowerCase() === 'text/javascript'
                                   || jsonDeHtml.attributes.type.toLowerCase() === 'module')
                               && !jsonDeHtml.hasOwnProperty( 'content' )
                        ){
                            /*
                              c'est un tag script avec src=""
                            */
                            typeScriptNonTraite=false;
                            type='script';
                            t+='\n' + esp0 + 'script(';
                        }else{
                            typeScriptNonTraite=true;
                            type='script';
                            t+='\n' + esp0 + 'script(';
                            this.__m_rev1.empiler_erreur( {
                                    "__xst" : __xal ,
                                    "__xme" : this.__m_rev1.nl2() + '<br />attention, seuls "text/javascript", "module" et "application/ld+json" sont traités <br />et il existe un type de script non traité <b>"' + jsonDeHtml.attributes.type + '"</b>'
                                } );
                        }
                    }else{
                        /*
                          sans aucun type renseigné, c'est un javascript
                        */
                        t+='\n' + esp0 + 'javascriptDansHtml(';
                        type='javascriptDansHtml';
                    }
                }else{
                    if("#comment" === type){
                        t+='\n' + esp0 + '#(';
                    }else{
                        if(type.toLowerCase() === '#text'){
                            t+='';
                        }else{
                            t+='\n' + esp0 + type + '(';
                        }
                    }
                }
            }
            if(jsonDeHtml.attributes){
                for(var attr in jsonDeHtml.attributes){
                    if(attributs !== ''){
                        attributs+=',';
                    }
                    if(jsonDeHtml.attributes[attr] === null || jsonDeHtml.attributes[attr] === ''){
                        /*
                          certains attributs peuvent être vides, voir exceptions defer et async
                        */
                        attributs+='(\'' + attr.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\',"")';
                    }else{
                        attributs+='(\'' + attr.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\',"' + jsonDeHtml.attributes[attr].replace( /"/g , '&quot;' ) + '")';
                    }
                }
            }
            /*
              ajout des attributs
            */
            t+=attributs;
            if(typeScriptNonTraite && jsonDeHtml.content && jsonDeHtml.content.length > 0){
                contenu=jsonDeHtml.content[0];
                if(contenu.hasOwnProperty( 'content' ) &&  typeof contenu.content === 'string'){
                    contenu=contenu.content;
                }
                contenu=contenu.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' );
                if(attributs !== ''){
                    t+=',';
                }
                t+='@(\'' + contenu + '\')';
                t+=')';
            }else if(type.toLowerCase() === 'ldplusjsondanshtml' && jsonDeHtml.content && jsonDeHtml.content.length > 0){
                if(jsonDeHtml.content[0].content){
                    var chaineJsEquivalente='a=' + jsonDeHtml.content[0].content.replace( /&quot;/g , '"' ).replace( /\\\//g , '/' ) + ';';
                }else{
                    var chaineJsEquivalente='a=' + jsonDeHtml.content[0].replace( /&quot;/g , '"' ).replace( /\\\//g , '/' ) + ';';
                }
                tableau_des_javascript_a_convertir.push( {"type" : "ldplusjsondanshtml" ,"__xva" : chaineJsEquivalente ,"cas" : "ldjson"} );
                var obj=__gi1.convertit_source_javascript_en_rev( chaineJsEquivalente );
                if(obj.__xst === __xsu){
                    let obj1=this.__m_rev1.rev_tm( obj.__xva );
                    if(obj1.__xst === __xsu){
                        var obj2=this.__m_rev1.matrice_vers_source_rev1( obj1.__xva ,  /* parent */ 1 ,  /* retour ligne */ true ,  /* debut */ 3 );
                        if(obj2.__xst === __xsu){
                            t+='' + obj2.__xva + '';
                        }else{
                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'traiteJsonDeHtml' + jsonDeHtml.type} ));
                        }
                    }else{
                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'traiteJsonDeHtml' + jsonDeHtml.type} ));
                    }
                }else{
                    return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'traiteJsonDeHtml' + jsonDeHtml.type} ));
                }
                t+='\n' + esp0 + ')';
            }else if(type.toLowerCase() === 'javascriptdanshtml' && jsonDeHtml.content && jsonDeHtml.content.length > 0){
                if(Array.isArray( jsonDeHtml.content )){
                    for( var i=0 ; i < jsonDeHtml.content.length ; i++ ){
                        if( typeof jsonDeHtml.content[i] === 'string'
                               || jsonDeHtml.content[i].type
                                   && (jsonDeHtml.content[i].type === '#text'
                                       || jsonDeHtml.content[i].type === '#cdata-section')
                        ){
                            if( typeof jsonDeHtml.content[i] === 'string'){
                                var source_js=jsonDeHtml.content[i];
                            }else{
                                var source_js=jsonDeHtml.content[i].content;
                            }
                            if(!(source_js.trim() === '//' || source_js === '\n' || source_js === '')){
                                var cle=this.#construit_cle( 10 );
                                tableau_des_javascript_a_convertir.push( {"type" : "javascriptdanshtml" ,"__xva" : source_js ,"cas" : "js1" ,"cle" : cle} );
                                contenu+='source(#(cle_javascript_a_remplacer,' + cle + '))';
                            }
                        }else if(!jsonDeHtml.content[i].hasOwnProperty( 'type' )){
                            /*
                              il n'y a pas la propriété type, on suppose que c'est un text/javascript
                            */
                            var source_js=jsonDeHtml.content[i].replace( /&amp;/g , '&' );
                            tableau_des_javascript_a_convertir.push( {"type" : "javascriptdanshtml" ,"__xva" : source_js ,"cas" : "js2"} );
                            var obj=__gi1.convertit_source_javascript_en_rev( source_js );
                            if(obj.__xst === __xsu){
                                debugger;
                                if(t.indexOf( 'text/javascript' ) >= 0){
                                    contenu+=obj.__xva;
                                }else{
                                    contenu+='(\'type\' , "text/javascript")' + obj.__xva;
                                }
                            }else{
                                return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'traiteJsonDeHtml ' + jsonDeHtml.type} ));
                            }
                        }else{
                            debugger;
                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'traiteJsonDeHtml' + jsonDeHtml.type} ));
                        }
                    }
                }else{
                    tableau_des_javascript_a_convertir.push( {"type" : "javascriptdanshtml" ,"__xva" : source_js ,"cas" : "js3"} );
                    var obj=__gi1.convertit_source_javascript_en_rev( jsonDeHtml.content );
                    if(obj.__xst === __xsu){
                        contenu+='<![CDATA[' + obj.__xva + ']]>';
                    }else{
                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' traiteJsonDeHtml  ' + jsonDeHtml.type} ));
                    }
                }
                t+='\n' + esp0 + contenu + ')';
            }else if(jsonDeHtml.content && jsonDeHtml.content.length > 0){
                if(Array.isArray( jsonDeHtml.content )){
                    for( var i=0 ; i < jsonDeHtml.content.length ; i++ ){
                        /*
                          =====================================================================
                          entree dans le récursif
                          =====================================================================
                        */
                        obj=this.asthtml_vers_rev( jsonDeHtml.content[i] , niveau + 1 , retirerHtmlHeadEtBody , type , tableau_des_javascript_a_convertir );
                        if(obj.__xst === __xsu){
                            if((attributs !== '' || contenu !== '') && obj.__xva !== ''){
                                contenu+=',';
                            }
                            contenu+=obj.__xva;
                        }else{
                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' traiteJsonDeHtml ' + jsonDeHtml.type} ));
                        }
                    }
                }else{
                    contenu+=jsonDeHtml.content;
                }
                if(type.toLowerCase() === '#text'){
                    if(typeParent === 'style'){
                        if(contenu !== ''){
                            contenu=contenu.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' );
                            if(contenu.substr( 0 , 1 ) !== '\n'){
                                debugger;
                                contenu='\n' + contenu;
                            }
                            /*
                              on supprime les espace en début de ligne
                            */
                            var contenuTab=contenu.split( '\n' );
                            k=9999;
                            for( i=1 ; i < contenuTab.length ; i++ ){
                                for( j=0 ; j < contenuTab[i].length ; j++ ){
                                    if(contenuTab[i].substr( j , 1 ) !== ' '){
                                        if(j < k){
                                            k=j;
                                        }
                                        break;
                                    }
                                }
                            }
                            if(k < 999 && k > 0){
                                for( i=1 ; i < contenuTab.length ; i++ ){
                                    contenuTab[i]=contenuTab[i].substr( k );
                                }
                                contenu=contenuTab.join( '\n' );
                            }
                            t+='\'' + contenu + '\'';
                        }
                    }else if(typeParent === 'textarea' || typeParent === 'pre'){
                        /* on ne remplace pas les LF dans les textarea et les pre */
                        if(contenu !== ''){
                            t='`' + contenu.replace( /`/g , '\\`' ) + '`';
                        }
                    }else{
                        contenu=contenu.replace( /\n/g , ' ' ).replace( /\r/g , ' ' ).trim();
                        if(contenu !== ''){
                            t+='\'' + contenu.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'';
                        }
                    }
                }else{
                    t+=contenu;
                    if(jsonDeHtml.type !== ''){
                        if(obj && obj.dernierEstTexte){
                            t+=')';
                        }else{
                            if(contenu === ''){
                                t+=')';
                            }else{
                                if(jsonDeHtml.type.toLowerCase() === '#comment'){
                                    t+=')';
                                }else{
                                    t+='\n' + esp0 + ')';
                                }
                            }
                        }
                    }
                }
            }else{
                if(type.toLowerCase() === '#text'){
                }else{
                    if(jsonDeHtml.type !== ''){
                        t+=')';
                    }
                }
            }
        }else{
            if(typeParent === '#comment'){
                if(jsonDeHtml.length >= 2 && jsonDeHtml.substr( 0 , 1 ) === ' ' && jsonDeHtml.substr( jsonDeHtml.length - 1 , 1 ) === ' '){
                    contenu=jsonDeHtml.substr( 1 , jsonDeHtml.length - 2 );
                    t+=contenu;
                }else{
                    if(jsonDeHtml.length == 1 && jsonDeHtml.substr( 0 , 1 ) === ' '){
                        /*
                          c'est un commentaire vide
                        */
                    }else{
                        contenu=jsonDeHtml;
                        t+=contenu;
                    }
                }
                dernierEstTexte=true;
            }else if(typeParent === '@'){
                contenu=jsonDeHtml;
                t+=contenu;
            }else if(typeParent === 'script'){
                tableau_des_javascript_a_convertir.push( {"type" : "javascriptdanshtml" ,"__xva" : source_js ,"cas" : "js4"} );
                /* avrif */
                debugger;
                var obj=__gi1.convertit_source_javascript_en_rev( jsonDeHtml );
                if(obj.__xst === __xsu){
                    t+='' + obj.__xva + '';
                }else{
                    t+='#(Erreur de conversion du javascript 0113 )';
                }
            }else{
                try{
                    if(jsonDeHtml.hasOwnProperty( 'content' )){
                        if( typeof jsonDeHtml.content === 'string'){
                            if(typeParent === 'style'){
                                contenu=jsonDeHtml.content;
                            }else{
                                contenu=jsonDeHtml.content.replace( /\r/g , ' ' ).replace( /\n/g , ' ' ).trim();
                            }
                        }else{
                            if(Array.isArray( jsonDeHtml.content ) && jsonDeHtml.content.length === 0){
                                contenu='';
                            }else{
                                debugger;
                            }
                        }
                    }else{
                        if(typeParent === 'style'){
                            contenu=jsonDeHtml;
                        }else if(typeParent === 'textarea' || typeParent === 'pre'){
                            contenu=jsonDeHtml;
                        }else{
                            contenu=jsonDeHtml.replace( /\r/g , ' ' ).replace( /\n/g , ' ' ).trim();
                        }
                    }
                }catch(e){
                    /*
                      dans le cas où le jsonDeHtml n'existe pas
                    */
                    contenu='';
                }
                if(contenu.indexOf( '&' ) >= 0 || contenu.indexOf( '>' ) >= 0 || contenu.indexOf( '<' ) >= 0 || contenu.indexOf( '"' ) >= 0){
                }
                if(contenu !== ''){
                    contenu='"' + contenu.replace( /"/g , '&quot;' ) + '"';
                }
                t+=contenu;
                if(contenu != ''){
                    dernierEstTexte=true;
                }
            }
        }
        if(retirerHtmlHeadEtBody && niveau === 0){
            /*
              le rev retourné inclut toujours une balise html et/ou body et/ou head
              Si ces balises ne contiennent pas d'éléments, on les retire 
            */
            /*
              var tableau1=this.__m_rev1.txt_en_tableau(t);
              var matriceFonction=functionToArray2(tableau1.__xva,false,true,'');
            */
            var matriceFonction=this.__m_rev1.rev_tcm( t );
            if(matriceFonction.__xst === __xsu){
                if(matriceFonction.__xva.length > 1 && matriceFonction.__xva[1][1] === 'html' && matriceFonction.__xva[1][8] <= 2){
                    /*
                      l'élément html est en première position
                      si il n'a aucune propriété, on peut le supprimer
                    */
                    var aDesProps=false;
                    for( var i=0 ; i < matriceFonction.__xva.length && aDesProps === false ; i++ ){
                        if(matriceFonction.__xva[i][7] === 1){
                            if(matriceFonction.__xva[i][1] === ''){
                                aDesProps=true;
                                break;
                            }
                        }
                    }
                    if(aDesProps === false){
                        var nouveauTableau1=this.__m_rev1.baisser_le_niveau_et_supprimer( matriceFonction.__xva , 1 , 0 );
                        /*
                          si le head n'a aucun enfant
                        */
                        if(nouveauTableau1.length >= 2 && nouveauTableau1[1][1] === 'head' && nouveauTableau1[1][8] == 0){
                            var nouveauTableau2=this.__m_rev1.baisser_le_niveau_et_supprimer( nouveauTableau1 , 1 , 0 );
                            if(nouveauTableau2[1][1] === 'body'){
                                var aDesProps=false;
                                for( var i=0 ; i < nouveauTableau2.length && aDesProps === false ; i++ ){
                                    if(nouveauTableau2[i][7] === 1){
                                        if(nouveauTableau2[i][1] === ''){
                                            aDesProps=true;
                                            break;
                                        }
                                    }
                                }
                                if(aDesProps === false){
                                    /*
                                      si le body n'a aucune propriété
                                    */
                                    var nouveauTableau3=this.__m_rev1.baisser_le_niveau_et_supprimer( nouveauTableau2 , 1 , 0 );
                                    var nouveauJsonDeHtml=this.mapMatriceVersJsonDeHtml( nouveauTableau3 );
                                    if(nouveauJsonDeHtml.__xst === __xsu){
                                        var obj1=this.asthtml_vers_rev( nouveauJsonDeHtml.__xva , 0 , false , '' , [] );
                                        if(obj1.__xst === __xsu){
                                            t=obj1.__xva;
                                        }else{
                                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                        }
                                    }else{
                                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                    }
                                }else{
                                    var nouveauJsonDeHtml=this.mapMatriceVersJsonDeHtml( nouveauTableau2 );
                                    if(nouveauJsonDeHtml.__xst === __xsu){
                                        var obj1=this.asthtml_vers_rev( nouveauJsonDeHtml.__xva , 0 , false , '' , [] );
                                        if(obj.__xst === __xsu){
                                            t=obj.__xva;
                                        }else{
                                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                        }
                                    }else{
                                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                    }
                                }
                            }else{
                                var nouveauJsonDeHtml=this.mapMatriceVersJsonDeHtml( nouveauTableau2 );
                                if(nouveauJsonDeHtml === true){
                                    var obj1=this.asthtml_vers_rev( nouveauJsonDeHtml.__xva , 0 , false , '' , [] );
                                    if(obj1.__xst === __xsu){
                                        t=obj1.__xva;
                                    }else{
                                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                    }
                                }else{
                                    return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                }
                            }
                        }else{
                            /*
                              la balise head contient des éléments, 
                              
                              si la balise body ne contient rien, 
                            */
                            var body_est_vide=false;
                            for( var i=nouveauTableau1.length - 1 ; i >= 0 && body_est_vide === false ; i-- ){
                                if(nouveauTableau1[i][1].toLowerCase() === 'body' && nouveauTableau1[i][2] === 'f' && nouveauTableau1[i][3] === 0){
                                    body_est_vide=true;
                                    nouveauTableau1.splice( i , 1 );
                                    t='';
                                    for( var j=0 ; j < nouveauTableau1.length ; j++ ){
                                        if(nouveauTableau1[j][7] === 1){
                                            var obj=this.__m_rev1.matrice_vers_source_rev1( nouveauTableau1 , 1 , true , j );
                                            if(obj.__xst === __xsu){
                                                t+=',' + obj.__xva + '\n';
                                            }else{
                                                return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                            }
                                        }
                                    }
                                    if(t !== false){
                                        t=t.substr( 1 );
                                    }
                                }
                            }
                            if(body_est_vide === true){
                            }else{
                                /*
                                  on reconstruit le source à partir de matriceFonction.__xva
                                  avec des retours de lignes et sans coloration
                                */
                                var nouveauJsonDeHtml=this.mapMatriceVersJsonDeHtml( nouveauTableau1 );
                                var obj1=this.asthtml_vers_rev( nouveauJsonDeHtml.__xva , 0 , false , '' , [] );
                                if(obj1.__xst === __xsu){
                                    t=obj1.__xva;
                                }else{
                                    return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                }
                            }
                        }
                    }else{
                        /*
                          on ne change rien car il y a des propriétés dans la balise html
                        */
                    }
                }else{
                    /*
                      on ne change rien
                    */
                }
            }else{
                return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
            }
        }
        /*
          on retourne du rev
        */
        t=t.replace( REGEX_LF , '\n' ).replace( REGEX_CR , '\n' );
        if(niveau === 0){
            /* utile seulement pour debug */
            return({"__xst" : __xsu ,"__xva" : t ,"dernierEstTexte" : dernierEstTexte});
        }else{
            return({"__xst" : __xsu ,"__xva" : t ,"dernierEstTexte" : dernierEstTexte});
        }
    }
    /*
      =============================================================================================================
      function mapDOM
      fonction trouvée sur le net ( désolé, j'ai perdu la référence )
      A partir d'un html, on reconstruit un équivalent "ast" ( abstract syntax tree )
      =============================================================================================================
    */
    mapDOM( element ){
        var contient_un_doctype=false;
        var treeObject={};
        if( typeof element === 'string'){
            /*
              Dans le cas ou c'est une chaine, on essaie de nettoyer le début
            */
            var posi1=element.toLowerCase().indexOf( '<!doctype html>' );
            if(posi1 >= 0){
                contient_un_doctype=true;
                /* on supprime ce doctype qui peut être n'importe où */
                var chaine_avant=element.substr( 0 , posi1 );
                var chaine_apres=element.substr( posi1 + 15 );
                element=chaine_avant + chaine_apres;
            }
            var l01=element.length;
            for( var i=0 ; i < l01 ; i++ ){
                var c=element.substr( i , 1 );
                if(!(c === '\n' || c === '\r' || c === '\t' || c === ' ')){
                    element=element.substr( i );
                    break;
                }
            }
            var parser=new DOMParser();
            /*
              "application/xml"
              "image/svg+xml"
              "text/html"
            */
            /*
              j'aime les &nbsp;
            */
            var element_a_traiter=element.replace( /&nbsp;/g , '__a_remplacer__&#160;__a_remplacer__' );
            var docNode=parser.parseFromString( '<aaaaa>' + element_a_traiter + '</aaaaa>' , 'application/xml' );
            var elementNoeud=docNode.firstChild;
            if(docNode.getElementsByTagName( 'parsererror' ).length || element.indexOf( '<' ) < 0){
                /*
                  ce n'est pas un xml parfait
                */
                var docNode=parser.parseFromString( element.replace( /&/g , '&amp;' ) , 'text/html' );
                elementNoeud=docNode.firstChild;
                /*
                  =====================================================================================
                  =====================================================================================
                */
                function arbre_HTML( element , object ){
                    object['type']=element.nodeName;
                    var i=0;
                    var nodeList=element.childNodes;
                    if(nodeList !== null){
                        if(nodeList.length){
                            object['content']=[];
                            for( i=0 ; i < nodeList.length ; i=i + 1 ){
                                if(nodeList[i].nodeType == 3){
                                    object['content'].push( nodeList[i].nodeValue );
                                }else{
                                    object['content'].push( {} );
                                    arbre_HTML( nodeList[i] , object["content"][object["content"].length - 1] );
                                }
                            }
                        }else{
                            if(element.nodeValue){
                                object['content']=[];
                                object['content'].push( element.nodeValue );
                            }
                        }
                    }
                    if(element.attributes && element.attributes != null){
                        if(element.attributes.length){
                            object['attributes']={};
                            for( i=0 ; i < element.attributes.length ; i=i + 1 ){
                                if(element.attributes[i].nodeName === '"'){
                                    /*
                                      =============================================
                                      vraiment bizarre un attribut = '"'
                                      =============================================
                                    */
                                    console.log( 'element.attributes[i].nodeName=<' + element.attributes[i].nodeName + '>' );
                                }else{
                                    object['attributes'][element.attributes[i].nodeName]=element.attributes[i].nodeValue;
                                }
                            }
                        }
                    }
                }
                /*
                  =====================================================================================
                  =====================================================================================
                */
                arbre_HTML( elementNoeud , treeObject );
                return({"__xst" : __xsu ,"__xva" : treeObject ,"parfait" : false ,"contient_un_doctype" : contient_un_doctype});
            }else{
                /*
                  c'est un xml parfait, on retire la racine aaaaa et on le traite
                */
                elementNoeud=docNode.firstChild.childNodes;
                /*
                  =====================================================================================
                  =====================================================================================
                */
                function arbre_XML( elements , objet , niveau , remplacer_les_nbsp ){
                    try{
                        var les_contenus=[];
                        for( var i=0 ; i < elements.length ; i++ ){
                            var le_noeud={};
                            var les_attributs={};
                            le_noeud['type']=elements[i].nodeName;
                            if(elements[i].attributes && elements[i].attributes.length > 0){
                                for( var j=0 ; j < elements[i].attributes.length ; j++ ){
                                    les_attributs[elements[i].attributes[j].name]=elements[i].attributes[j].value;
                                }
                                le_noeud['attributes']=les_attributs;
                            }
                            if(elements[i].childNodes && elements[i].childNodes.length > 0){
                                arbre_XML( elements[i].childNodes , le_noeud , niveau + 1 , remplacer_les_nbsp );
                            }else{
                                if(elements[i].data){
                                    if(remplacer_les_nbsp === true){
                                        le_noeud.content=elements[i].data.replace( /__a_remplacer__\u00A0__a_remplacer__/g , "&nbsp;" );
                                        le_noeud.content=le_noeud.content.replace( /__a_remplacer__&#160;__a_remplacer__/g , "&nbsp;" );
                                    }else{
                                        le_noeud.content=elements[i].data;
                                    }
                                }else{
                                    le_noeud.content=null;
                                }
                            }
                            les_contenus.push( le_noeud );
                        }
                        objet.content=JSON.parse( JSON.stringify( les_contenus ) );
                    }catch(e){
                        debugger;
                    }
                }
                /*
                  =====================================================================================
                  =====================================================================================
                */
                treeObject['type']='';
                if(element.indexOf( '&nbsp;' ) >= 0){
                    /*
                      j'aime encore les &nbsp;
                    */
                    arbre_XML( elementNoeud , treeObject , 0 , true );
                }else{
                    arbre_XML( elementNoeud , treeObject , 0 , false );
                }
                return({"__xst" : __xsu ,"__xva" : treeObject ,"parfait" : true ,"contient_un_doctype" : contient_un_doctype});
            }
        }
    }
    /*#
      =============================================================================================================
      function mapMatriceVersJsonDeHtml
      construit un ast à partir d'une matrice rev de html
      <div class="a">a</div><div class="b">b</div>
      [
          [0,""      ,"INIT" ,-1,0 ,0, 0,0,6,0,0, 0,0,""],
          [1,"div"   ,"f"    ,0 ,0,33,35,0,2,1,2,36,0,""],
          [2,""      ,"f"    ,1 ,0,33,35,1,2,1,1,37,0,""],
          [3,"class" ,"c"    ,2 ,0,38,42,2,0,1,0,37,0,""],
          [4,"a"     ,"c"    ,2 ,3,45,45,2,0,2,0,37,0,""],
          [5,"a"     ,"c"    ,1 ,3,50,50,1,0,2,0,37,0,""],
          [6,"div"   ,"f"    ,0 ,0,61,63,0,2,2,2,64,0,""],
          [7,""      ,"f"    ,1 ,0,61,63,6,2,1,1,65,0,""],
          [8,"class" ,"c"    ,2 ,0,66,70,7,0,1,0,65,0,""],
          [9,"b"     ,"c"    ,2 ,3,73,73,7,0,2,0,65,0,""],
          [10,"b"    ,"c"    ,1 ,3,78,78,6,0,2,0,65,0,""]
      ]
      vers
      {
          "type":"BODY",
          "content":[
              {"type":"DIV","content":["a"],"attributes":{"class":"a"}},
              {"type":"DIV","content":["b"],"attributes":{"class":"b"}},
              "\n"
          ]
      }
      =============================================================================================================
    */
    mapMatriceVersJsonDeHtml( matrice ){
        function reconstruit( tab , parentId ){
            var l01=tab.length;
            var un_element={};
            var contenu=[];
            var attrib={};
            var indice=0;
            var i=0;
            var j=0;
            for( indice=parentId + 1 ; indice < l01 && tab[indice][3] > tab[parentId][3] ; indice++ ){
                if(tab[indice][7] === parentId){
                    if(tab[indice][2] === 'f' && tab[indice][1] !== ''){
                        attrib={};
                        var a_des_attributs=false;
                        for( var i=indice + 1 ; i < l01 ; i++ ){
                            if(tab[i][7] === indice && tab[i][1] === '' && tab[i][2] === 'f'){
                                if(tab[i][8] === 1){
                                    attrib[tab[i + 1][1]]=null;
                                    a_des_attributs=true;
                                }else if(tab[i][8] === 2){
                                    attrib[tab[i + 1][1]]=tab[i + 2][1];
                                    a_des_attributs=true;
                                }else{
                                    return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"message" : this.__m_rev1.nl2()} ));
                                }
                            }
                        }
                        if(a_des_attributs === true){
                            un_element['attributes']=JSON.parse( JSON.stringify( attrib ) );
                        }
                        un_element['type']=tab[indice][1];
                        var le_contenu=[];
                        for( var i=indice + 1 ; i < l01 ; i++ ){
                            if(tab[i][7] === indice && tab[i][1] !== ''){
                                if(tab[i][2] === 'c'){
                                    le_contenu.push( {"content" : tab[i][1]} );
                                }else{
                                    attrib={};
                                    var a_des_attributs=false;
                                    for( var j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j++ ){
                                        if(tab[j][7] === i && tab[j][1] === '' && tab[j][2] === 'f'){
                                            if(tab[j][8] === 1){
                                                attrib[tab[j + 1][1]]=null;
                                                a_des_attributs=true;
                                            }else if(tab[j][8] === 2){
                                                attrib[tab[j + 1][1]]=tab[j + 2][1];
                                                a_des_attributs=true;
                                            }else{
                                                return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"message" : this.__m_rev1.nl2()} ));
                                            }
                                        }
                                    }
                                    if(tab[tab[i][7]][1].toLowerCase() === 'javascriptdanshtml'){
                                        var debut=indice + 1;
                                        for( var j=indice + 1 ; j < l01 ; j++ ){
                                            if(tab[j][7] === indice){
                                                if(tab[j][1] === '' && tab[j][2] === 'f'){
                                                }else{
                                                    debut=j;
                                                    break;
                                                }
                                            }
                                        }
                                        var objContenuJs=__m_rev_vers_js1.c_tab_vers_js( tab , {"indice_de_debut" : debut} );
                                        debugger;
                                        /* avrif */
                                        if(objContenuJs.__xst === __xsu){
                                            le_contenu.push( JSON.parse( JSON.stringify( {"type" : 'javascriptdanshtml' ,"content" : objContenuJs.__xva ,"attributes" : attrib} ) ) );
                                        }else{
                                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                        }
                                    }else if(tab[parentId][1].toLowerCase() === 'ldplusjsondanshtml'){
                                        var debut=indice + 1;
                                        for( var j=indice + 1 ; j < l01 ; j++ ){
                                            if(tab[j][7] === indice){
                                                if(tab[j][1] === '' && tab[j][2] === 'f'){
                                                }else{
                                                    debut=j;
                                                    break;
                                                }
                                            }
                                        }
                                        var objContenuJs=__m_rev_vers_js1.c_tab_vers_js( tab , {"indice_de_debut" : debut} );
                                        /* avrif */
                                        debugger;
                                        if(objContenuJs.__xst === __xsu){
                                            var contenu=objContenuJs.__xva.substr( objContenuJs.__xva.indexOf( '=' ) + 1 );
                                            if(contenu.substr( contenu.length - 1 , 1 ) === ';'){
                                                contenu=contenu.substr( 0 , contenu.length - 1 );
                                            }
                                            content.push( contenu );
                                            le_contenu.push( JSON.parse( JSON.stringify( {"type" : 'ldplusjsondanshtml' ,"content" : contenu ,"attributes" : attrib} ) ) );
                                        }else{
                                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                        }
                                    }else{
                                        var obj=reconstruit( tab , i );
                                        if(obj.__xst === __xsu){
                                            if(a_des_attributs === true){
                                                le_contenu.push( JSON.parse( JSON.stringify( {"type" : tab[i][1] ,"content" : obj.content ,"attributes" : attrib} ) ) );
                                                attrib={};
                                            }else{
                                                le_contenu.push( JSON.parse( JSON.stringify( {"type" : tab[i][1] ,"content" : obj.content} ) ) );
                                            }
                                        }else{
                                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"message" : this.__m_rev1.nl2()} ));
                                        }
                                    }
                                }
                            }
                        }
                        if(le_contenu.length > 0){
                            un_element['content']=JSON.parse( JSON.stringify( le_contenu ) );
                        }
                        contenu.push( JSON.parse( JSON.stringify( un_element ) ) );
                        un_element={};
                    }else if(tab[indice][2] === 'c'){
                        un_element['content']=tab[indice][1];
                        contenu.push( JSON.parse( JSON.stringify( un_element ) ) );
                        un_element={};
                    }
                }
            }
            if(parentId !== 0){
                return({"__xst" : __xsu ,"content" : contenu});
            }else{
                return({"__xst" : __xsu ,"content" : {"type" : '' ,"content" : contenu}});
            }
        }
        /*
          =====================================================================================================
          L'appel récursif se fait ici
          =====================================================================================================
        */
        var obj=reconstruit( matrice , 0 );
        if(obj.__xst === __xsu){
            return({"__xst" : __xsu ,"__xva" : obj.content});
        }else{
            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
        }
    }
    /*
      =============================================================================================================
      function TransformHtmlEnRev
    */
    TransformHtmlEnRev( texteHtml , niveau , options ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var supprimer_le_tag_html_et_head=true;
        var doctype='';
        var elementsJson={};
        var i=0;
        var tableau_des_commentaires_js=[];
        try{
            var position_doctype=texteHtml.toUpperCase().indexOf( '<!DOCTYPE' );
            if(position_doctype >= 0){
                if(position_doctype === 0){
                    for( i=1 ; i < texteHtml.length && doctype == '' ; i++ ){
                        if(texteHtml.substr( i , 1 ) === '>'){
                            doctype=texteHtml.substr( 0 , i + 1 );
                            texteHtml=texteHtml.substr( i + 1 );
                        }
                    }
                }
            }
            elementsJson=this.mapDOM( texteHtml );
            if(elementsJson.__xst === __xsu){
                if(elementsJson.parfait === true){
                    supprimer_le_tag_html_et_head=false;
                }else{
                    var supprimer_le_tag_html_et_head=true;
                    if(texteHtml.toLowerCase().indexOf( '<html' ) >= 0){
                        supprimer_le_tag_html_et_head=false;
                    }else{
                        if(texteHtml.toLowerCase().indexOf( '<head' ) < 0 && texteHtml.toLowerCase().indexOf( '<body' ) < 0){
                            /*
                              dans le cas ou on a un html partiel 
                              il faut nettoyer elementJson pour ne prendre que tout ce qui n'est pas html, head body
                            */
                            if(elementsJson.__xva.hasOwnProperty( 'type' )
                                   && elementsJson.__xva.type.toLowerCase() === 'html'
                                   && elementsJson.__xva.hasOwnProperty( 'content' )
                                   && elementsJson.__xva.content instanceof Array
                            ){
                                var nouveau_element={"type" : 'html' ,"content" : []};
                                var nouveau_tableau=[];
                                for(var e01 in elementsJson.__xva.content){
                                    var tr01=elementsJson.__xva.content[e01];
                                    if(tr01.hasOwnProperty( 'type' )
                                           && tr01.type.toLowerCase() === 'head'
                                           && tr01.hasOwnProperty( 'content' )
                                           && tr01.content instanceof Array
                                           && tr01.content.length > 0
                                    ){
                                        for(var e02 in tr01.content){
                                            nouveau_tableau.push( tr01.content[e02] );
                                        }
                                    }else if(tr01.hasOwnProperty( 'type' )
                                           && tr01.type.toLowerCase() === 'body'
                                           && tr01.hasOwnProperty( 'content' )
                                           && tr01.content instanceof Array
                                           && tr01.content.length > 0
                                    ){
                                        for(var e02 in tr01.content){
                                            nouveau_tableau.push( tr01.content[e02] );
                                        }
                                    }
                                }
                                nouveau_element.content=nouveau_tableau;
                                elementsJson.__xva=nouveau_element;
                            }
                        }
                    }
                }
                try{
                    var tableau_de_javascripts_a_convertir=[];
                    var obj=this.asthtml_vers_rev( elementsJson.__xva , 0 , supprimer_le_tag_html_et_head , '' , tableau_de_javascripts_a_convertir );
                    if(obj.__xst === __xsu){
                        if(obj.__xva.trim().indexOf( 'html(' ) == 0){
                            if(doctype.toUpperCase() === '<!DOCTYPE HTML>'){
                                obj.__xva=obj.__xva.replace( /html\(/ , 'html((doctype)' );
                            }else{
                                obj.__xva=obj.__xva.replace( /html\(/ , 'html(#((doctype)?? doctype pas html , normal="<!DOCTYPE html>" ?? )' );
                            }
                        }
                        if(tableau_de_javascripts_a_convertir.length > 0){
                            var parseur_javascript=window.acorn.Parser;
                            for( var indjs=0 ; indjs < tableau_de_javascripts_a_convertir.length ; indjs++ ){
                                try{
                                    tableau_des_commentaires_js=[];
                                    var obj0=parseur_javascript.parse( tableau_de_javascripts_a_convertir[indjs].__xva.replace( /&amp;/g , '&' ) , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : true ,"onComment" : tableau_des_commentaires_js} );
                                }catch(e){
                                    console.log( tableau_de_javascripts_a_convertir[indjs].__xva.replace( /&amp;/g , '&' ) );
                                    if(e.pos){
                                        return(this.__m_rev1.empiler_erreur( {
                                                "__xst" : __xer ,
                                                "__xme" : this.__m_rev1.nl2() + '<br />erreur dans un source javascript contenu dans un html<br />' + e.message ,
                                                "plage" : [e.pos,e.pos]
                                            } ));
                                    }else{
                                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '<br />erreur dans un source javascript contenu dans un html<br />' + e.message} ));
                                    }
                                }
                                if(tableau_des_commentaires_js.length > 0){
                                    /*
                                      il faut retirer les commentaires si ce sont des CDATA ou des <source_javascript_rev> 
                                      car javascriptdanshtml les ajoute.
                                    */
                                    var commentaires_a_remplacer=['<![CDATA[',']]>','<source_javascript_rev>','</source_javascript_rev>'];
                                    for( var nn=0 ; nn < commentaires_a_remplacer.length ; nn++ ){
                                        for( var indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                                            if(tableau_des_commentaires_js[indc].value.trim() === commentaires_a_remplacer[nn]){
                                                tableau_des_commentaires_js.splice( indc , 1 );
                                            }
                                        }
                                    }
                                    for( var indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                                        if(tableau_des_commentaires_js[indc].value.trim() === '' && tableau_des_commentaires_js[indc].type === 'Line'){
                                            tableau_des_commentaires_js.splice( indc , 1 );
                                        }
                                    }
                                }
                                /* on transforme le ast du js en rev */
                                var obj1=this.__m_astjs_vers_rev.traite_ast( obj0.body , tableau_des_commentaires_js , {} );
                                if(obj1.__xst === __xsu){
                                    /* puis on remplace la chaine source() */
                                    var phrase_a_remplacer='#(cle_javascript_a_remplacer,' + tableau_de_javascripts_a_convertir[indjs].cle + ')';
                                    obj.__xva=obj.__xva.replace( phrase_a_remplacer , '' + obj1.__xva + '' );
                                }else{
                                    return(this.__m_rev1.empiler_erreur( {
                                            "__xst" : __xer ,
                                            "__xme" : this.__m_rev1.nl2() + 'il y a un problème dans la transformation de ast js vers rev dans un source javascript'
                                        } ));
                                }
                            }
                            var source_rev=obj.__xva;
                            var une_erreur=false;
                            /*
                              =============================================================
                              console.log('après transformation, source_rev=',source_rev)
                              =============================================================
                            */
                            if(options.hasOwnProperty( 'en_ligne' ) && options.en_ligne === true){
                                sauvegarder_html_en_ligne( source_rev , options.donnees );
                                return;
                            }else if(options.hasOwnProperty( 'source_php' )){
                                console.log( 'options=' , options , 'source_rev=' , source_rev );
                                var chaine_a_remplacer='#(cle_html_dans_php_a_remplacer,' + options.a_convertir.cle + ')';
                                options.source_php=options.source_php.replace( chaine_a_remplacer , source_rev );
                                var nouveau_source=options.source_php;
                                console.log( 'nouveau_source=' , nouveau_source );
                                var param={
                                    "nouveau_source" : options.source_php ,
                                    "fonction_a_appeler" : options.fonction_a_appeler ,
                                    "cle_convertie" : options.a_convertir.cle ,
                                    "convertion_php" : true
                                };
                                document.getElementById( 'txtar2' ).value=nouveau_source;
                                return;
                            }else{
                                if(options.hasOwnProperty( 'zone_html_rev' )){
                                    try{
                                        if(document.getElementById( options.zone_html_rev )){
                                            document.getElementById( options.zone_html_rev ).value=source_rev;
                                        }
                                        var matriceFonction=this.__m_rev1.rev_tm( source_rev );
                                        if(matriceFonction.__xst === __xer){
                                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'conversion en matrice'} ));
                                        }
                                        var obj1=this.__m_rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
                                        if(obj1.__xst === __xsu){
                                            document.getElementById( options.zone_html_rev ).value=obj1.__xva;
                                        }else{
                                            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nettoyage en matrice'} ));
                                        }
                                    }catch(e){
                                        return(this.__m_rev1.empiler_erreur( {
                                                "__xst" : __xer ,
                                                "__xme" : this.__m_rev1.nl2( e ) + 'la zone "' + options.zone_html_rev + '" indiquée en paramètre n\'existe pas dans le document'
                                            } ));
                                    }
                                }
                                return({"__xst" : __xsu ,"__xva" : source_rev});
                            }
                        }else{
                            if(options.hasOwnProperty( 'html_dans_php' )){
                                for( var i=0 ; i < options.tableau_de_html_dans_php_a_convertir.length ; i++ ){
                                    if(options.cle === options.tableau_de_html_dans_php_a_convertir[i].cle){
                                        var a_remplacer='#(cle_html_dans_php_a_remplacer,' + options.cle + ')';
                                        options.html_dans_php=options.html_dans_php.replace( a_remplacer , obj.__xva );
                                    }
                                }
                                return({"__xst" : __xsu ,"__xva" : options.html_dans_php});
                            }else if(options.hasOwnProperty( 'zone_html_rev' )){
                                try{
                                    document.getElementById( options.zone_html_rev ).value=obj.__xva.replace( REGEX_LF , '\n' ).replace( REGEX_CR , '\r' ).replace( /\\\\¶\\\\LF\\\\¶/g , '\n' ).replace( /\\\\¶\\\\CR\\\\¶/g , '\r' );
                                    var matriceFonction=this.__m_rev1.rev_tm( obj.__xva );
                                    if(matriceFonction.__xst === __xer){
                                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                    }
                                    var obj1=this.__m_rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
                                    if(obj1.__xst === __xsu){
                                        document.getElementById( options.zone_html_rev ).value=obj1.__xva;
                                    }else{
                                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                    }
                                }catch(e){
                                    console.error( 'e=' , e );
                                    return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                                }
                                return({"__xst" : __xsu ,"__xva" : obj.__xva});
                            }else{
                                return({"__xst" : __xsu ,"__xva" : obj.__xva});
                            }
                        }
                    }else{
                        return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                    }
                }catch(e){
                    console.error( 'e=' , e );
                    return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2( e )} ));
                }
            }else{
                console.log( 'elementsJson=' , elementsJson );
                return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
            }
            console.log( 'par ici' , elementsJson );
            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
        }catch(e){
            console.log( 'e=' , e );
            return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2( e )} ));
        }
        console.log( 'fin' );
    }
    /*
      =============================================================================================================
      vérifie qu'un html est structurellement correct ( pour intégration dans un rev php )
    */
    #isHTML( str ){
        var i=0;
        var j=0;
        var c0='';
        var cp1='';
        var cm1='';
        var dansTag=false;
        var dansInner=true;
        var dansNomPropriete=false;
        var dansValeurPropriete=false;
        var dansNomTag=false;
        var caractereDebutProp='';
        var nomTag='';
        var dansBaliseFermante=false;
        var tabTags=[];
        var presDe='';
        var dansCdata=false;
        var dansTextArea=false;
        var l01=str.length;
        var niveau=0;
        var i=0;
        for( i=0 ; i < l01 ; i++ ){
            c0=str.substr( i , 1 );
            if(i < l01 - 1){
                cp1=str.substr( i + 1 , 1 );
            }else{
                cp1='';
            }
            if(i > 0 && l01 > 0){
                cm1=str.substr( i - 1 , 1 );
            }else{
                cm1='';
            }
            if(dansCdata === true){
                /*
                  =====================================================================================
                  premier cas spécial : cdata
                  =====================================================================================
                */
                var j=i;
                for( j=i ; j < l01 ; j++ ){
                    if(str.substr( j , 3 ) === ']]' + '>'){
                        i=j + 2;
                        break;
                    }
                }
                dansCdata=false;
                nomTag='';
                dansInner=true;
                dansTag=false;
                continue;
            }else if(dansTextArea === true){
                /*
                  =====================================================================================
                  deuxième cas spécial : textarea
                  =====================================================================================
                */
                var j=i;
                for( j=i ; j < l01 ; j++ ){
                    if(str.substr( j , 11 ).toLowerCase() === '</' + 'textarea>'){
                        i=j - 1;
                        break;
                    }
                }
                dansTextArea=false;
                nomTag='';
                dansInner=true;
                dansTag=false;
                continue;
            }else if(dansTag){
                if(dansNomPropriete){
                    if(c0 === ' ' || c0 === '\r' || c0 === '\n' || c0 === '\t'){
                        /* si on a un propriété du type async dans  <script async src="..."></script> */
                        dansNomPropriete=false;
                    }else if(c0 === '='){
                        if(cp1 === "'" || cp1 === '"'){
                            dansValeurPropriete=true;
                            dansNomPropriete=false;
                            caractereDebutProp=cp1;
                            i++;
                        }else{
                            if(i > 50){
                                presDe=str.substr( i - 50 , i + 10 );
                            }else{
                                presDe=str.substr( 0 , i + 10 );
                            }
                            return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + ' pres de "' + presDe + '"'});
                        }
                    }else{
                    }
                }else if(dansValeurPropriete){
                    if(c0 === caractereDebutProp){
                        if(cm1 === '\\'){
                        }else{
                            dansValeurPropriete=false;
                        }
                    }else{
                    }
                }else if(dansNomTag){
                    if(c0 === ' ' || c0 === '\r' || c0 === '\n' || c0 === '\t'){
                        if(dansCdata === true){
                            var j=i;
                            for( j=i ; j < l01 ; j++ ){
                                if(str.substr( j , 3 ) === ']]' + '>'){
                                    i=j + 2;
                                    break;
                                }
                            }
                            dansNomTag=false;
                            dansTag=false;
                            dansInner=true;
                            nomTag='';
                            continue;
                        }else{
                            if(nomTag.toLowerCase() === 'textarea'){
                                dansTextArea=true;
                            }
                            tabTags.push( nomTag );
                            dansNomTag=false;
                        }
                    }else if(c0 === '>'){
                        if(dansBaliseFermante){
                            dansNomTag=false;
                            dansInner=true;
                            dansTag=false;
                            if(nomTag === tabTags[tabTags.length - 1]){
                                /*
                                  on a bien une balise fermante correspondant à la palise ouvrante précédente
                                */
                                tabTags.pop();
                            }else{
                                return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'les balises html ne sont pas équilibrées'});
                            }
                            nomTag='';
                            dansBaliseFermante=false;
                            niveau--;
                        }else{
                            if(nomTag === ''){
                                if(i > 50){
                                    presDe=str.substr( i - 50 , i + 10 );
                                }else{
                                    presDe=str.substr( 0 , i + 10 );
                                }
                                return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                            }
                            if(nomTag.toLowerCase() === 'textarea'){
                                dansTextArea=true;
                            }
                            tabTags.push( nomTag );
                            dansNomTag=false;
                            dansInner=true;
                            dansTag=false;
                            nomTag='';
                        }
                    }else if(c0 === '=' || c0 === '"' || c0 === '\''){
                        if(i > 50){
                            presDe=str.substr( i - 50 , i + 10 );
                        }else{
                            presDe=str.substr( 0 , i + 10 );
                        }
                        return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                    }else{
                        nomTag+=c0;
                        if(nomTag === '![C' + 'DATA['){
                            dansCdata=true;
                        }
                    }
                }else{
                    if(nomTag === ''){
                        if(c0 === ' ' || c0 === '\r' || c0 === '\n' || c0 === '\t'){
                            if(i > 50){
                                presDe=str.substr( i - 50 , i + 10 );
                            }else{
                                presDe=str.substr( 0 , i + 10 );
                            }
                            return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + ' pres de "' + presDe + '"'});
                        }else{
                            dansNomTag=true;
                            nomTag+=c0;
                        }
                    }else{
                        /*
                          le tag a été fait, maintenant, c'est les propriétés 
                          ou la fin des propriétés ou un / pour une balise auto fermante ( <br /> )
                        */
                        if(c0 === ' ' || c0 === '\r' || c0 === '\n' || c0 === '\t'){
                        }else if(c0 === '/'){
                            if(cp1 === '>'){
                                nomTag='';
                                if(tabTags.length === 0){
                                    if(i > 50){
                                        presDe=str.substr( i - 50 , i + 10 );
                                    }else{
                                        presDe=str.substr( 0 , i + 10 );
                                    }
                                    return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                                }
                                tabTags.pop();
                                niveau--;
                                dansTag=false;
                                dansInner=true;
                                i++;
                            }
                        }else if(c0 === '>'){
                            if(nomTag === ''){
                                if(i > 50){
                                    presDe=str.substr( i - 50 , i + 10 );
                                }else{
                                    presDe=str.substr( 0 , i + 10 );
                                }
                                return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                            }
                            dansTag=false;
                            dansInner=true;
                            if(tabTags.length === 0){
                                if(i > 50){
                                    presDe=str.substr( i - 50 , i + 10 );
                                }else{
                                    presDe=str.substr( 0 , i + 10 );
                                }
                                return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                            }
                            /*
                              pas de pop ici, dans <a b="c">d</a>, on est sur le > avant le d
                            */
                            nomTag='';
                        }else{
                            if(c0 === '=' || c0 === '"' || c0 === '\''){
                                if(i > 50){
                                    presDe=str.substr( i - 50 , i + 10 );
                                }else{
                                    presDe=str.substr( 0 , i + 10 );
                                }
                                return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                            }else{
                                dansNomPropriete=true;
                            }
                        }
                    }
                }
            }else if(dansInner){
                if(c0 === '<'){
                    if(cp1 === '/'){
                        if(tabTags.length === 0){
                            if(i > 50){
                                presDe=str.substr( i - 50 , i + 10 );
                            }else{
                                presDe=str.substr( 0 , i + 10 );
                            }
                            return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                        }
                        dansBaliseFermante=true;
                        i++;
                        dansInner=false;
                        dansTag=true;
                    }else{
                        if(cp1 === '!' && i < l01 - 4 && str.substr( i + 2 , 1 ) === '-' && str.substr( i + 3 , 1 ) === '-'){
                            /*
                              on est dans un commentaire
                            */
                            var fin_de_commentaire_trouve=-1;
                            for( j=i + 4 ; j <= l01 - 3 && fin_de_commentaire_trouve === -1 ; j++ ){
                                if(str.substr( j , 3 ) === '-->'){
                                    fin_de_commentaire_trouve=j;
                                }
                            }
                            if(fin_de_commentaire_trouve > 0){
                                i=fin_de_commentaire_trouve + 2;
                                dansTag=false;
                            }else{
                                niveau+=1;
                                dansInner=false;
                                dansTag=true;
                            }
                        }else{
                            niveau+=1;
                            dansInner=false;
                            dansTag=true;
                        }
                    }
                }else if(c0 === '>'){
                    if(niveau === 0){
                        if(i > 50){
                            presDe=str.substr( i - 50 , i + 10 );
                        }else{
                            presDe=str.substr( 0 , i + 10 );
                        }
                        return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                    }
                }else{
                }
            }else{
                if(c0 === '<'){
                }else if(c0 === '>'){
                    debugger;
                    niveau-=1;
                    if(niveau < 0){
                        if(i > 50){
                            presDe=str.substr( i - 50 , i + 10 );
                        }else{
                            presDe=str.substr( 0 , i + 10 );
                        }
                        return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
                    }
                }
            }
        }
        if(tabTags.length > 0){
            if(i > 50){
                presDe=str.substr( i - 50 , i + 10 );
            }else{
                presDe=str.substr( 0 , i + 10 );
            }
            return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
        }
        if(dansTag){
            if(i > 50){
                presDe=str.substr( i - 50 , i + 10 );
            }else{
                presDe=str.substr( 0 , i + 10 );
            }
            return({"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'pres de "' + presDe + '"'});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    traite_html_de_php( contenu , options_traitement , niveau ){
        let obj=null;
        let t='';
        /*
          =====================================================================================================
          Quand un php contient du html, ou bien ce dernier est un dom valide qui ne contient pas de php
          par exemple ">? <div>que_du_html</div><?php"
          ou bien il contient du php, 
          par exemple ">? <div> <?php echo '';?> </div> <?php"
          Dans ce dernier car la chaine " <div> " n'est pas un html "parfait" ca la balise n'est pas fermée
          dans le flux ( elle sera peut être fermée dans le php )
          =====================================================================================================
        */
        /* debugger */
        var estTraiteSansErreur=false;
        var contient_un_doctype_au_debut=false;
        if(contenu.toLowerCase().indexOf( '<!doctype' ) >= 0){
            contenu=contenu.replace( /<!doctype\s+[^>]*>/i , '<!doctype>' );
            contenu=contenu.replace( '<!doctype>' , '' );
            contient_un_doctype_au_debut=true;
        }
        obj=this.#isHTML( contenu );
        /* contenu stmts[i].value */
        if(obj.__xst === __xsu){
            /* var nettoye=stmts[i].value.replace(/\<\!\-\-(.*)\-\-\>/g,'').trim(); */
            var nettoye=contenu.replace( /<!--[\s\S]*?-->/g , '' ).trim();
        }
        /* recherche d'au moins un tag dans le texte */
        var regex=/(<[a-zA-Z0-9\-_]+)/g;
        var tags_trouves=contenu.match( regex );
        if(obj.__xst === __xsu
               && (contenu.indexOf( '<' ) >= 0
                       && tags_trouves
                       && tags_trouves.length > 0
                   || nettoye === ''
                   || contenu.indexOf( '<' ) < 0
                       && contenu.indexOf( '>' ) < 0)
        ){
            obj=this.TransformHtmlEnRev( contenu , 0 , {} );
            if(obj.__xst === __xsu){
                if(contient_un_doctype_au_debut === true){
                    obj.__xva=obj.__xva.replace( 'html(' , 'html((doctype)' );
                    obj.__xva=obj.__xva.replace( '#((doctype)?? doctype pas html , normal="<!DOCTYPE html>" ?? )' , '' );
                }
                t+='html_dans_php(' + obj.__xva + ')';
            }else{
                return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'transformation html en rev'} ));
            }
        }else{
            /*
              On ne capture pas l'erreur car ce qui est traité ici n'est peut être pas un html "pur"
              dans ce cas tout est remplacé par des "echo" plus bas
            */
            estTraiteSansErreur=false;
            if(options_traitement && options_traitement.hasOwnProperty( 'nettoyer_html' ) && options_traitement.nettoyer_html === true){
            }else{
                return(this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'ce php contient du html en ligne qui n\'est pas complet'} ));
            }
            if(contenu.toLowerCase().indexOf( '<script' ) < 0){
                /*
                  =====================================================================================
                  C'est un html incomplet qui ne contient pas de script, on le transforme en echo
                  =====================================================================================
                */
                debugger;
                var cle=this.#construit_cle( 10 );
                t+='#( === transformation html incomplet en echo voir ci dessous pour la clé = "' + cle + '")';
                this.__m_rev1.empiler_erreur( {"__xst" : __xal ,"__xme" : this.__m_rev1.nl2() + "<br />ATTENTION, html incomplet converti en echo (" + cle + ") !"} );
                t+='\n' + 'appelf(nomf(echo),p(\'' + contenu.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'))';
            }else{
                /*
                  =====================================================================================
                  cas ou le html contenu contient des scripts, 
                  =====================================================================================
                */
                var obj1=this.mapDOM( contenu );
                /*
                  
                */
                if(obj1.__xst === __xsu && obj1.parfait === true){
                    var obj2=this.TransformHtmlEnRev( contenu , 0 , {} );
                    if(obj2.__xst == true){
                        t+='\n' + 'html_dans_php(' + obj2.__xva + ')';
                    }else{
                        var cle=this.#construit_cle( 10 );
                        t+='#( === transformation html incomplet en echo voir ci dessous pour la clé = "' + cle + '")';
                        this.__m_rev1.empiler_erreur( {"__xst" : __xal ,"__xme" : this.__m_rev1.nl2() + "<br />ATTENTION, html incomplet converti en echo (" + cle + ") !"} );
                        this.__m_rev1.empiler_erreur( {"__xst" : __xal ,"__xme" : this.__m_rev1.nl2() + '<br />les scripts ne sont pas validés et peuvent contenir des erreurs'} );
                        t+='appelf(nomf(echo),p(\'' + contenu.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'))';
                    }
                }else{
                    /*
                      si le contenu ne contient pas du HTML en racine, on "echo" 
                    */
                    var cle=this.#construit_cle( 10 );
                    t+='#( === transformation html incomplet en echo voir ci dessous pour la clé = "' + cle + '")';
                    this.__m_rev1.empiler_erreur( {"__xst" : __xal ,"__xme" : this.__m_rev1.nl2() + "<br />ATTENTION, html incomplet converti en echo (" + cle + ") !"} );
                    this.__m_rev1.empiler_erreur( {"__xst" : __xal ,"__xme" : this.__m_rev1.nl2() + '<br />les scripts ne sont pas validés et peuvent contenir des erreurs'} );
                    t+='appelf(nomf(echo),p(\'' + contenu.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'))';
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
}
export{c_html_vers_rev1 as c_html_vers_rev1};