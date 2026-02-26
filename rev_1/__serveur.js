/*
  deno run --watch --allow-net --allow-read --allow-write --allow-ffi --allow-env .\__serveur.js
  //  --allow-sys pour Deno.memoryUsage()
  // --allow-ffi pour les accès à sqlite3
  // --allow-import pour acorn ( import * as acorn from "https://cdn.skypack.dev/acorn";   )
  // doc sqlite3
  https://github.com/denodrivers/sqlite3/blob/main/doc.md
*/
const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';

import {format as formater_la_date} from "jsr:@std/datetime";
import {getCookies} from "https://deno.land/std/http/cookie.ts";
import {crypto} from "jsr:@std/crypto";
import {encodeHex} from "jsr:@std/encoding/hex";
/* import  * as podule from "node:process"; */
/*
  hdftest
  /* 
  le gestionnaire de la base est celui çi 
  import {Database} from "https://deno.land/x/sqlite3/mod.ts";
  car j'ai eu des problèmes avec les autres gestionnaires pour les ordres
  PRAGMA journal_mode=WAL;
  attach database ...
  
  
*/
console.clear();
let repertoire_du_pgm_serveur=Deno.cwd().replace( /\\/g , '/' );
/* console.log('repertoire_du_pgm_serveur=',repertoire_du_pgm_serveur); */
let repertoire_racine_de_tous_les_projets=repertoire_du_pgm_serveur.substr( 0 , repertoire_du_pgm_serveur.lastIndexOf( '/' ) ) + '/';
console.log('repertoire_racine_de_tous_les_projets='+repertoire_racine_de_tous_les_projets)
/* console.log('repertoire_racine_de_tous_les_projets=',repertoire_racine_de_tous_les_projets); */
/* console.log('repertoire_du_pgm_serveur='+repertoire_du_pgm_serveur); */
let repertoire_des_programmes='__programmes/';
repertoire_du_pgm_serveur=repertoire_du_pgm_serveur + '/';
/* console.log('repertoire_du_pgm_serveur=',repertoire_du_pgm_serveur); */
const _CA_=parseInt( repertoire_du_pgm_serveur.substr( repertoire_du_pgm_serveur.lastIndexOf( '_' ) + 1 ) , 10 );
console.log( '%c===============\n' , 'color:red;' );
const __version='__j_20251231_000002_';
const m__gi1=await import( './' + repertoire_des_programmes + '__gi1_s.js?__version=' + __version );
const le_port=_CA_ + 8000;
console.log( '_CA_=' + _CA_ + ',repertoire_du_pgm_serveur=' + repertoire_du_pgm_serveur + ',le_port=' + le_port );
/*
  =====================================================================================================================
*/
const le_serveur=Deno.serve( {
    "port" : le_port ,
     onListen( { port  , hostname } ){
        console.log( `aaaaServer started at http://` + hostname + `:` + port );
        /* ... more info specific to your server .. */
    }  ,
     onError( err ){
        console.log( 'err serveur=' , err );
        /* ... more info specific to your server .. */
        return(new Response( 'erreur' , {"status" : 200 ,"headers" : {"content-type" : "text/html; charset=utf-8" }} ));

    } 

} , async ( req1 ) => {
    /* console.log('req1.headers.get("upgrade")=',req1.headers.get("upgrade")); // null pour http , websocket pour websocket  */
    /* console.log('req1=',req1); */
    /* console.log(Deno.memoryUsage()); // il faut  --allow-sys pour ceci */
    if(req1.method === 'GET'){
        const url1=new URL( req1.url );
        const pathname1=url1.pathname;
        /* console.log( '%c======= GET ===\n' , 'color:red;' ); */
        /* console.log( 'req1=' , req1 ); */
        /* console.log( 'url1=' , url1 ); */
        /* console.log( 'pathname1=' + pathname1 ); */
        if(pathname1 === "/"){
            /* console.log(req1.headers); */
            const stats_de_ce_fichier=await Deno.stat( "./__serveur.js" );
            const last_modified=stats_de_ce_fichier.mtime?.toUTCString();
            /* return(new Response( "304 Not Modified" , {"status" : 304} )); */
            let contenu='<!DOCTYPE html>';
            contenu+='<html lang="fr">';
            contenu+='<head id="vv_head">';
            contenu+='<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="description" content="description" />';
            contenu+='<title id="vv_titre1">V3</title><style id="vv_style1"></style>';
            contenu+='<script type="text/javascript">';
            contenu+='var __gi0=null;';
            contenu+='const __version=\'' + __version + '\';';
            contenu+='const __xer=0;const __xsu=1;const __xal=2;const __xif=3;const __xdv=4;const _CA_='+_CA_+';';
            contenu+='</script>  </head><body><script type="module" src="f0?n0=__gi1_c.js&version=' + __version + '"></script></body></html>';
            const encoder=new TextEncoder();
            const data=encoder.encode( contenu );
            const le_md5_binaire=await crypto.subtle.digest( "MD5" , data );
            const le_etag='W/"' + encodeHex( le_md5_binaire ) + '"';
            return(new Response( contenu , {"status" : 200 ,"headers" : {"content-type" : "text/html; charset=utf-8" ,"Last-Modified" : last_modified ,"Etag" : le_etag}} ));
            /*  */
            /* "Cache-Control" : "public" , */
        }else if(pathname1 === "/hdftest"){
            /*
              
              
            */
            console.log( 'hdftest' );
            const stats_de_ce_fichier=await Deno.stat( "./__serveur.js" );
            console.log( 'stats_de_ce_fichier=' , stats_de_ce_fichier );
            const last_modified=stats_de_ce_fichier.mtime?.toUTCString();
            console.log( 'last_modified=' , last_modified );
            console.log( 'jour=' , new Date( last_modified ).toLocaleDateString( "en-En" , {"weekday" : 'short'} ) );
            /*
              const date_serveur=await Deno.FileInfo("./__serveur.js");
              console.log('date_serveur=',date_serveur)
            */
            const message="Hello, Deno!";
            const encoder=new TextEncoder();
            const data=encoder.encode( message );
            let a=await crypto.subtle.digest( "MD5" , data );
            console.log( 'a=' + encodeHex( a ) );
            /*
              
              
            */
        }else if(pathname1 === "/favicon.ico"){
            const filePath="./__programmes/favicon.ico";
            const file=await Deno.readFile( filePath );
            return(new Response( file , {"status" : 200 ,"headers" : {"content-type" : "image/vnd.microsoft.icon" ,"Cache-Control" : "public, max-age=36000"}} ));
        }else if(pathname1 === "/f0"){
            /* console.log( 'req1=' , req1 ); */
            try{
                let n0=url1.searchParams.get( "n0" );
                /* console.log('DANS __serveur1 n0='+n0); */
                const chemin_du_fichier='./__programmes/' + n0;
                /* console.log('DANS __serveur1 chemin_du_fichier='+chemin_du_fichier); */
                const stats_de_ce_fichier=await Deno.stat( chemin_du_fichier );
                const last_modified=stats_de_ce_fichier.mtime?.toUTCString();
                const contenu_fichier=await Deno.readFile( chemin_du_fichier );
                const le_md5_binaire=await crypto.subtle.digest( "MD5" , contenu_fichier );
                const le_etag='W/"' + encodeHex( le_md5_binaire ) + '"';
                /* console.log('contenu_fichier=',contenu_fichier); */
                return(new Response( contenu_fichier , {"status" : 200 ,"headers" : {"content-type" : "text/javascript; charset=UTF-8" ,"Last-Modified" : last_modified ,"Etag" : le_etag}} ));
            }catch(e){
                return(new Response( "404: Not Found" , {"status" : 404} ));
            }
            return(new Response( "404: Not Found" , {"status" : 404} ));
        }
        return(new Response( "404: Not Found" , {"status" : 404} ));
    }else if(req1.method === 'POST'){
        /* console.log('repertoire_racine_de_tous_les_projets='+repertoire_racine_de_tous_les_projets) */
        const date_heure_serveur=formater_la_date( new Date() , "yyyy-MM-dd HH:mm:ss.SSS" , {"timeZone" : 'Europe/Paris'} );
        /* console.log('date_heure_serveur='+date_heure_serveur); */
        const cookies=getCookies( req1.headers );
        const donnees_retournees={
            "_CA_" : _CA_ ,
             /* statut __xer:0:erreur , à priori en erreur */
            "__xst" : 0 ,
            "date_heure_serveur" : date_heure_serveur ,
             /* valeurs */
            "__xva" : {} ,
             /* actions au format rev */
            "__xac" : '' ,
             /* liste des signaux __xer:0:erreur, __xsu:1:succès, __xal:2:alarme, __xif:3:info, __xdv:4:déverminage */
            //"__xsi" : {"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []} ,
            "__xsi" : {0 : [] ,1 : [] ,2 : [] ,3 : [] ,4 : []} ,
            "chi_id_acces" : 0 ,
            "chi_id_utilisateur" : 0 ,
            "chi_id_projet" : 0 ,
            "chp_nom_de_connexion_utilisateur" : '' ,
            "__version" : __version
        };
        let options_generales={
            "set-cookie" : [] ,
            "cookies" : cookies ,
            "cle_de_session" : '' ,
            "repertoire_du_pgm_serveur" : repertoire_du_pgm_serveur ,
            "bdd_ouvertes" : {} ,
            "chemin_des_bdd" : '' ,
            "chemin_absolu_projet" : '',
            "repertoire_racine_de_tous_les_projets" : repertoire_racine_de_tous_les_projets,
            "base_de_reference" : 1 ,
            "base_de_travail" : 1
        };
        if(cookies.hasOwnProperty( 'cle_de_session_rev_' + _CA_ )
               && cookies['cle_de_session_rev_' + _CA_] !== ''
               && cookies['cle_de_session_rev_' + _CA_].substr( 0 , String( 'rev_' + _CA_ ).length ) === 'rev_' + _CA_
        ){
            /* options_http.headers.cle_de_session=cookies.cle_de_session; */
            options_generales.cle_de_session=cookies['cle_de_session_rev_' + _CA_];
            try{
                const text_json=await Deno.readTextFile( './__sessions/' + cookies['cle_de_session_rev_' + _CA_] + '.json' );
                try{
                    let session_json=JSON.parse( text_json );
                    /*
                      sessions
                    */
                    if(session_json.hasOwnProperty( 'chi_id_acces' )){
                        donnees_retournees.chi_id_acces=session_json.chi_id_acces;
                    }
                    if(session_json.hasOwnProperty( 'chi_id_utilisateur' )){
                        donnees_retournees.chi_id_utilisateur=session_json.chi_id_utilisateur;
                    }
                    if(session_json.hasOwnProperty( 'chi_id_projet' )){
                        donnees_retournees.chi_id_projet=session_json.chi_id_projet;
                    }
                    if(session_json.hasOwnProperty( 'chp_nom_de_connexion_utilisateur' )){
                        donnees_retournees.chp_nom_de_connexion_utilisateur=session_json.chp_nom_de_connexion_utilisateur;
                    }
                    /*
                      options générales
                    */
                    if(donnees_retournees.chi_id_projet === 0){
                        if(_CA_ === 1){
                            options_generales.chemin_absolu_projet='../rev_1/';
                            options_generales.chemin_des_bdd='./__bases_de_donnees/';
                        }else if(_CA_ === 2){
                            options_generales.chemin_des_bdd='./__bases_de_donnees/';
                            options_generales.chemin_absolu_projet='../rev_2/';
                        }
                    }else{
                        if(_CA_ === 1){
                            options_generales.chemin_absolu_projet='../rev_' + donnees_retournees.chi_id_projet + '/';
                            options_generales.chemin_des_bdd='./__bases_de_donnees/';
                            options_generales.base_de_travail=donnees_retournees.chi_id_projet;
                        }else if(_CA_ === 2){
                            options_generales.chemin_absolu_projet='../rev_2/';
                            options_generales.chemin_des_bdd='./__bases_de_donnees/';
                        }
                    }
                    /* console.log('donnees_retournees',donnees_retournees); */
                }catch(e){
                    console.error( 'e=' , e );
                }
                /* console.log('text_json='+text_json); */
            }catch(e){
                /*
                */
            }
        }
        
        options_generales.chemin_racine_du_projet='./';
        if(_CA_ === 1 || _CA_ === 2){
            options_generales.chemin_racine_de_tous_les_projets='../../';
        }
        if(req1.body){
            const json_body=await req1.json();
            /* console.log( "json_body.__xac:" , json_body.__xac ); */
            /* console.log( "json_body.__xva:" , json_body.__xva ); */
            /* console.log("json_body.mat:", json_body.mat); */
            donnees_retournees["__xac"]=json_body.__xac;
            let donnees_recues=json_body;
            let __deverminage=donnees_recues[__xva].hasOwnProperty( '__parametres' ) ?
              ( 
                donnees_recues[__xva]['__parametres'].hasOwnProperty( '__deverminage' ) ?
                  ( 
                    donnees_recues[__xva]['__parametres']['__deverminage']['valeur']
                  ) : ( 
                    0
                  )
              ) : ( 
                0
              );
            const __gi1=new m__gi1['__gi1']( _CA_ , repertoire_du_pgm_serveur , repertoire_des_programmes , repertoire_racine_de_tous_les_projets , __deverminage );
            const mat=json_body.mat;
            /* let ret=await __gi1.appel_fonction(mat , 1 , donnees_recues , donnees_retournees , options_generales ); */
            try{
                let ret=await __gi1.appel_fonction( mat , 1 , donnees_recues , donnees_retournees , options_generales );
//                __gi1.ma_trace1('donnees_retournees',donnees_retournees);
            }catch(eeeee){
                console.log( 'eeeee=' , eeeee );
            }
            donnees_retournees.__xsi=__gi1.__xsi;
        }
        const headers=new Headers();
        headers.append( "status" , "200" );
        headers.append( "Content-Type" , "application/json; charset=utf-8" );
        headers.append( "Cache-Control" , "no-store" );
        /* console.log( options_http.headers['set-cookie'] ); */
        for(let i in options_generales['set-cookie']){
            headers.append( "Set-Cookie" , options_generales['set-cookie'][i] );
        }
        /* options_http.headers=headers; */
        let entetes_reponse_http={
             /* "status" : 200, */
            "headers" : headers
        };
        for(let i in options_generales.bdd_ouvertes){
            try{
                await options_generales.bdd_ouvertes[i].base.close();
            } catch {}
        }
        options_generales=null;
        /* __gi1.ma_trace1(options_http); */
        return(new Response( JSON.stringify( donnees_retournees ) , entetes_reponse_http ));
        /*  */
    }} );