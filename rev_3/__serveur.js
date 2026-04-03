/*
  deno run --watch --allow-net --allow-read --allow-write --allow-ffi --allow-env .\__serveur.js
  //  --allow-sys pour Deno.memoryUsage()
  // --allow-ffi pour les accès à sqlite3
  // --allow-import pour acorn ( import * as acorn from "https://cdn.skypack.dev/acorn";   )
  // doc sqlite3
  https://github.com/denodrivers/sqlite3/blob/main/doc.md
*/
const __version='_2026_03_02_010207_';
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
console.log( 'repertoire_racine_de_tous_les_projets=' + repertoire_racine_de_tous_les_projets );
/* console.log('repertoire_racine_de_tous_les_projets=',repertoire_racine_de_tous_les_projets); */
/* console.log('repertoire_du_pgm_serveur='+repertoire_du_pgm_serveur); */
let repertoire_des_programmes='__programmes/';
repertoire_du_pgm_serveur=repertoire_du_pgm_serveur + '/';
/* console.log('repertoire_du_pgm_serveur=',repertoire_du_pgm_serveur); */
const _CA_=parseInt( repertoire_du_pgm_serveur.substr( repertoire_du_pgm_serveur.lastIndexOf( '_' ) + 1 ) , 10 );
console.log( '%c===============\n' , 'color:red;' );
const m__gi1=await import( './' + repertoire_des_programmes + '__gi1_s.js?__version=' + __version );
const le_port=_CA_ + 8000;
console.log( '_CA_=' + _CA_ + ',repertoire_du_pgm_serveur=' + repertoire_du_pgm_serveur + ',le_port=' + le_port );
/*
  =====================================================================================================================
*/
const le_serveur=Deno.serve( {
    "port" : le_port ,
     onListen( { port  , hostname } ){
        console.log( `aaaaServeur démaré sur http://` + hostname + `:` + port );
    }  ,
    
     onError( err ){
        console.log( 'err serveur=' , err );
        return(new Response( 'erreur' , {"status" : 200 ,"headers" : {"content-type" : "text/html; charset=utf-8"}} ));
    } 

} , async ( req1 ) => {
    /* console.log('req1.headers.get("upgrade")=',req1.headers.get("upgrade")); // null pour http , websocket pour websocket */
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
            contenu+='<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />';
            contenu+='<meta name="description" content="description" />';
            contenu+='<title id="vv_titre1">V3</title>';
            contenu+='<style id="vv_style1"></style>';
            contenu+='<link rel="icon" type="image/svg+xml" href=\'';
            contenu+='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"><rect x="-50" y="-50" width="100" height="100" fill="hotpink" /></svg>';
            contenu+='\'>';
            contenu+='<script type="text/javascript">';
            contenu+='var __gi0=null;';
            contenu+='const __version=\'' + __version + '\';';
            contenu+='const __xer=0;const __xsu=1;const __xal=2;const __xif=3;const __xdv=4;const _CA_=' + _CA_ + ';';
            contenu+='</script>';
            contenu+='</head>';
            contenu+='<body>';
            contenu+='<script type="module" src="f0?n0=__gi1_c.js&__version=' + __version + '"></script>';
            contenu+='</body>';
            contenu+='</html>';
            const encoder=new TextEncoder();
            const data=encoder.encode( contenu );
            const le_md5_binaire=await crypto.subtle.digest( "MD5" , data );
            const le_etag='W/"' + encodeHex( le_md5_binaire ) + '"';
            return(new Response( contenu , {"status" : 200 ,"headers" : {"content-type" : "text/html; charset=utf-8" ,"Last-Modified" : last_modified ,"Etag" : le_etag}} ));
            /*  */
            /* "Cache-Control" : "public" , */
        }else if(pathname1 === "/f0"){
            /* console.log( 'req1=' , req1 ); */
            try{
                let n0=url1.searchParams.get( "n0" );
                let content_type='text/javascript; charset=UTF-8';
                let chemin_du_fichier='';
                if(n0.slice( -4 ) === '_.js' || n0.slice( -5 ) === '_c.js'){
                    chemin_du_fichier='./__programmes/' + n0;
                }else{
                    /* console.log( 'req1=' , req1 ); */
                    chemin_du_fichier='./__fichiers_binaires/' + n0;
                    if(chemin_du_fichier.slice( -4 ) === '.gif'){
                        content_type='image/gif';
                    }else if(chemin_du_fichier.slice( -4 ) === '.png'){
                        content_type='image/png';
                    }else if(chemin_du_fichier.slice( -4 ) === '.jpg'){
                        content_type='image/jpeg';
                    }else{
                        return(new Response( "404: Not Found :  ce type de fichier n'est pas pris en compte" , {"status" : 404} ));
                    }
                }
                const contenu_fichier=await Deno.readFile( chemin_du_fichier );
                /*
                  const stats_de_ce_fichier=await Deno.stat( chemin_du_fichier );
                  const last_modified=stats_de_ce_fichier.mtime?.toUTCString();
                  const le_md5_binaire=await crypto.subtle.digest( "MD5" , contenu_fichier );
                  //  const le_etag='W/"' + encodeHex( le_md5_binaire ) + '"';
                  const le_etag='"' + encodeHex( le_md5_binaire ) + '"';
                */
                return(new Response( contenu_fichier , {"status" : 200 ,"headers" : {"Content-Type" : content_type ,"Cache-Control" : "public, max-age=31536000"}} ));
                /* "Last-Modified" : last_modified , */
                /* "ETag" : le_etag , */
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
            "__xst" : /* statut __xer:0:erreur , à priori en erreur */0 ,
            "date_heure_serveur" : date_heure_serveur ,
            "__xva" : /* valeurs */{} ,
            "__xac" : /* actions au format rev */'' ,
             /* liste des signaux __xer:0:erreur, __xsu:1:succès, __xal:2:alarme, __xif:3:info, __xdv:4:déverminage */
             /* "__xsi" : {"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []} , */
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
            "chemin_absolu_projet" : '' ,
            "repertoire_racine_de_tous_les_projets" : repertoire_racine_de_tous_les_projets ,
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
                    if(_CA_ > 2){
                        donnees_retournees.chi_id_projet=_CA_;
                    }
                    if(donnees_retournees.chi_id_projet === 0){
                        /*
                          ce cas ne peut arriver que si on est sur le projet principal
                        */
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
                        }else{
                            options_generales.chemin_absolu_projet='../rev_' + donnees_retournees.chi_id_projet + '/';
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
        let __deverminage=0;
        let donnees_recues=null;
        if(req1.body){
            const json_body=await req1.json();
            /* console.log( "json_body.__xac:" , json_body.__xac ); */
            /* console.log( "json_body.__xva:" , json_body.__xva ); */
            /* console.log("json_body.mat:", json_body.mat); */
            donnees_retournees["__xac"]=json_body.__xac;
            donnees_recues=json_body;
            __deverminage=donnees_recues[__xva].hasOwnProperty( '__parametres' ) ?
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
                /* __gi1.ma_trace1(donnees_recues.__xac); */
                let ret=await __gi1.appel_fonction( mat , 1 , donnees_recues , donnees_retournees , options_generales );
                /* __gi1.ma_trace1('donnees_retournees',donnees_retournees); */
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
        let entetes_reponse_http={"headers" : /* "status" : 200, */headers};
        for(let i in options_generales.bdd_ouvertes){
            try{
                await options_generales.bdd_ouvertes[i].base.close();
            } catch {}
        }
        if(__deverminage > 0){
            let repertoire_des_bdd=repertoire_du_pgm_serveur + '__bases_de_donnees/';
            for await (const dirEntry of Deno.readDir( repertoire_des_bdd )){
                if(dirEntry.name.indexOf( 'sqlite-wal' ) >= 0){
                    console.log( '%c\nATTENTION base non fermée ' + dirEntry.name , 'color:red;background-color:yellow;' );
                    donnees_retournees.__xsi["4"].push( 'ATTENTION base non fermée <br />' + dirEntry.name + '<br />__xac=' + JSON.stringify( donnees_recues.__xac ) );
                }
            }
        }
        options_generales=null;
        /* __gi1.ma_trace1(options_http); */
        return(new Response( JSON.stringify( donnees_retournees ) , entetes_reponse_http ));
        /*  */
    }} );