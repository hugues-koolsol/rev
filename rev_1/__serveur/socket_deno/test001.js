/* define command used to create the subprocess */
const command=new Deno.Command( "./aaa.bat" , {"args" : ["sess_5d2plrlrvlrf7u7af7ek9srcmd"]} );
/* create subprocess and collect output */
const { code  , stdout  , stderr }=await command.output();
const a=new TextDecoder().decode( stderr );
if(a === ''){
    console.assert( code === 0 );
    let aout=new TextDecoder().decode( stdout );
    let bb=aout.split( '\n' );
    let retour=bb[bb.length - 1];
    if(retour === 'erreur'){
    }else{
        let cc=JSON.parse( retour );
        console.log( 'cc=' , cc );
    }
}else{
    console.log( err );
}