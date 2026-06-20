/*
  Basé sur l'exemple décrit ici
  // https://www.youtube.com/watch?v=FC4IrkHEg4A
  // deno run --watch --allow-read --allow-net --allow-env --allow-ffi --allow-write __serveur.js
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
const __le_port=_CA_ + 6000;
let __liste_des_bases=[1];
if(_CA_ > 2){
    try{
        const text_json=await Deno.readTextFile( './__fichiers_generes/__liste_des_bases.json' );
        __liste_des_bases=JSON.parse( text_json );
    } catch {}
}
console.log( '__serveur.js _CA_=' + _CA_ + ',port=' + __le_port );
const les_clients_du_ws=[];
Deno.serve( {
        "port" : __le_port ,
         onListen( { port  , hostname } ){
            /* console.log( '__serveur.js aaaaServeur démaré sur http://' + hostname + ':' + port ); */
        }  ,
        
         onError( err ){
            console.log( '__serveur.js errrrrrreurrrrrrrrr  serveur=' , err.stack );
            return(new Response( 'erreur : ' + err.stack , {"status" : 200 ,"headers" : {"content-type" : "text/html; charset=utf-8"}} ));
        } 
    
    } , async ( req1 ) => {
        if(req1.headers.get( "upgrade" ) !== "websocket"){
            let __ig1=new m__ig1['__ig1']( _CA_ , __le_port , __version , repertoire_du_pgm_serveur , repertoire_racine_de_tous_les_projets );
            /*
              si ce n'est pas un websocket
            */
            if(req1.method === 'GET'){
                let le_contenu_de_get=await __ig1.contenu_de_get( req1 );
                if(le_contenu_de_get.__xst === __xsu){
                    __ig1=null;
                    return(new Response( le_contenu_de_get.__xva.contenu , le_contenu_de_get.__xva.entetes_reponse_http ));
                }
            }else{
                let le_contenu_de_post=await __ig1.contenu_de_post( req1 );
                __ig1=null;
                return(new Response( le_contenu_de_post.__xva.contenu , le_contenu_de_post.__xva.entetes_reponse_http ));
            }
            return(new Response( null , {"status" : 501} ));
        }
        let cookies=getCookies( req1.headers );
        const { socket  , response }=Deno.upgradeWebSocket( req1 );
        socket.addEventListener( "close" , () => {
                for(let i in les_clients_du_ws){
                    /* console.log( 'les_clients_du_ws[i]=' , les_clients_du_ws[i]); */
                    if(les_clients_du_ws[i].socket === socket){
                        /* console.log('on a un match sur i=',i) */
                        les_clients_du_ws.splice( i , 1 );
                    }
                }
                /* console.log( 'dans __serveur.js les_clients_du_ws.length après fermeture=' + les_clients_du_ws.length ); */
        } );
        socket.addEventListener( "open" , () => {
                let __ig1=new m__ig1['__ig1']( _CA_ , __le_port , __version , repertoire_du_pgm_serveur , repertoire_racine_de_tous_les_projets , socket , __liste_des_bases );
                let traitement_open_socket=__ig1.traiter_open_socket( socket , cookies );
                les_clients_du_ws.push( {"socket" : socket ,"cookies" : cookies} );
                /*#
                  for( let i in les_clients_du_ws){
                      console.log( 'les_clients_du_ws[i]=' , les_clients_du_ws[i]);
                  }
                */
                __ig1=null;
                /* console.log( 'dans __serveur.js les_clients_du_ws.length=' + les_clients_du_ws.length ) */
        } );
        socket.addEventListener( "message" , async ( evenement ) => {
                let __ig1=new m__ig1['__ig1']( _CA_ , __le_port , __version , repertoire_du_pgm_serveur , repertoire_racine_de_tous_les_projets , socket , __liste_des_bases );
                let traitement_mesage_socket=await __ig1.traiter_message_socket( evenement , cookies );
                if(traitement_mesage_socket.__xst === __xsu){
                    socket.send( JSON.stringify( traitement_mesage_socket ) );
                }else{
                    socket.send( JSON.stringify( traitement_mesage_socket ) );
                }
                __ig1=null;
        } );
        return response;
    } );