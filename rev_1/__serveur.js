/*
  Basé sur l'exemple décrit ici
  // https://www.youtube.com/watch?v=FC4IrkHEg4A
  // deno run --watch --allow-read --allow-net --allow-env --allow-ffi --allow-write serveur.js
  // deno --allow-read --allow-net serveur.js
*/
/* console.clear(); */
import {getCookies} from "https://deno.land/std/http/cookie.ts";
const __xer=0;
const __xsu=1;
const stats_de_ce_fichier=await Deno.stat( "./__serveur.js" );
const __version=String( stats_de_ce_fichier.mtime?.toJSON() ).replace( 'T' , '_' ).replace( /\:/g , '_' ).replace( /-/g , '_' ).replace( /\./g , '_' ).substr( 0 , 23 );
/* Interface Globale */
const m__ig1=await import( './__programmes/__ig1_s.js?__version=' + __version );
let repertoire_du_pgm_serveur=Deno.cwd().replace( /\\/g , '/' );
let repertoire_racine_de_tous_les_projets=repertoire_du_pgm_serveur.substr( 0 , repertoire_du_pgm_serveur.lastIndexOf( '/' ) ) + '/';
/* clé application */
const _CA_=parseInt( repertoire_du_pgm_serveur.substr( repertoire_du_pgm_serveur.lastIndexOf( '_' ) + 1 ) , 10 );
const __le_port=_CA_ + 7000;
console.log( '_CA_=' + _CA_ + ',port=' + __le_port );
Deno.serve( {
        "port" : __le_port ,
         onListen( { port  , hostname } ){
            /* console.log( `aaaaServeur démaré sur http://` + hostname + `:` + port ); */
        }  ,
        
         onError( err ){
            console.log( 'errrrrrreurrrrrrrrr  serveur=' , err.stack );
            return(new Response( 'erreur : ' + err.stack , {"status" : 200 ,"headers" : {"content-type" : "text/html; charset=utf-8"}} ));
        } 
    
    } , async ( req1 ) => {
        if(req1.headers.get( "upgrade" ) !== "websocket"){
            /*
              si ce n'est pas un websocket
            */
            if(req1.method === 'GET'){
                const __ig1=new m__ig1['__ig1']( _CA_ , __le_port , __version , repertoire_du_pgm_serveur , repertoire_racine_de_tous_les_projets );
                let le_contenu_de_get=await __ig1.contenu_de_get( req1 );
                if(le_contenu_de_get.__xst === __xsu){
                    return(new Response( le_contenu_de_get.__xva.contenu , le_contenu_de_get.__xva.entetes_reponse_http ));
                }
            }else{
                const __ig1=new m__ig1['__ig1']( _CA_ , __le_port , __version , repertoire_du_pgm_serveur , repertoire_racine_de_tous_les_projets );
                let le_contenu_de_post=await __ig1.contenu_de_post( req1 );
                return(new Response( le_contenu_de_post.__xva.contenu , le_contenu_de_post.__xva.entetes_reponse_http ));
            }
            return(new Response( null , {"status" : 501} ));
        }
        const { socket  , response }=Deno.upgradeWebSocket( req1 );
        const __ig1=new m__ig1['__ig1']( _CA_ , __le_port , __version , repertoire_du_pgm_serveur , repertoire_racine_de_tous_les_projets );
        socket.addEventListener( "open" , () => {
                /* console.log('dans serveur, open ws ') */
                let traitement_open_socket=__ig1.traiter_open_socket( req1 , socket );} );
        socket.addEventListener( "message" , async ( evenement ) => {
                let traitement_mesage_socket=await __ig1.traiter_message_socket( evenement , req1 );
                /* console.log('dans serveur ', traitement_mesage_socket ) */
                if(traitement_mesage_socket.__xst === __xsu){
                    socket.send( JSON.stringify( traitement_mesage_socket ) );
                }else{
                    socket.send( JSON.stringify( traitement_mesage_socket ) );
                }} );
        return response;} );