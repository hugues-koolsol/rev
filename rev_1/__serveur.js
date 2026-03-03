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
            contenu+='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"><rect x="-50" y="-50" width="100" height="100" fill="lime" /></svg>';
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
        options_generales=null;
        /* __gi1.ma_trace1(options_http); */
        return(new Response( JSON.stringify( donnees_retournees ) , entetes_reponse_http ));
        /*  */
    }} );
/*
  .aac;AAC audio;audio/aac
  .abw;AbiWord document;application/x-abiword
  .apng;Animated Portable Network Graphics (APNG) image;image/apng
  .arc;Archive document (multiple files embedded);application/x-freearc
  .avif;AVIF image;image/avif
  .avi;AVI: Audio Video Interleave;video/x-msvideo
  .azw;Amazon Kindle eBook format;application/vnd.amazon.ebook
  .bin;Any kind of binary data;application/octet-stream
  .bmp;Windows OS/2 Bitmap Graphics;image/bmp
  .bz;BZip archive;application/x-bzip
  .bz2;BZip2 archive;application/x-bzip2
  .cda;CD audio;application/x-cdf
  .csh;C-Shell script;application/x-csh
  .css;Cascading Style Sheets (CSS);text/css
  .csv;Comma-separated values (CSV);text/csv
  .doc;Microsoft Word;application/msword
  .docx;Microsoft Word (OpenXML);application/vnd.openxmlformats-officedocument.wordprocessingml.document
  .eot;MS Embedded OpenType fonts;application/vnd.ms-fontobject
  .epub;Electronic publication (EPUB);application/epub+zip
  .gz;GZip Compressed Archive;application/gzip. Note, Windows and macOS upload .gz files with the non-standard MIME type application/x-gzip.
  .gif;Graphics Interchange Format (GIF);image/gif
  .htm, .html;HyperText Markup Language (HTML);text/html
  .ico;Icon format;image/vnd.microsoft.icon
  .ics;iCalendar format;text/calendar
  .jar;Java Archive (JAR);application/java-archive
  .jpeg, .jpg;JPEG images;image/jpeg
  .js;JavaScript;text/javascript (Specifications: HTML and RFC 9239)
  .json;JSON format;application/json
  .jsonld;JSON-LD format;application/ld+json
  .md;Markdown;text/markdown
  .mid, .midi;Musical Instrument Digital Interface (MIDI);audio/midi, audio/x-midi
  .mjs;JavaScript module;text/javascript
  .mp3;MP3 audio;audio/mpeg
  .mp4;MP4 video;video/mp4
  .mpeg;MPEG Video;video/mpeg
  .mpkg;Apple Installer Package;application/vnd.apple.installer+xml
  .odp;OpenDocument presentation document;application/vnd.oasis.opendocument.presentation
  .ods;OpenDocument spreadsheet document;application/vnd.oasis.opendocument.spreadsheet
  .odt;OpenDocument text document;application/vnd.oasis.opendocument.text
  .oga;Ogg audio;audio/ogg
  .ogv;Ogg video;video/ogg
  .ogx;Ogg;application/ogg
  .opus;Opus audio in Ogg container;audio/ogg
  .otf;OpenType font;font/otf
  .png;Portable Network Graphics;image/png
  .pdf;Adobe Portable Document Format (PDF);application/pdf
  .php;Hypertext Preprocessor (Personal Home Page);application/x-httpd-php
  .ppt;Microsoft PowerPoint;application/vnd.ms-powerpoint
  .pptx;Microsoft PowerPoint (OpenXML);application/vnd.openxmlformats-officedocument.presentationml.presentation
  .rar;RAR archive;application/vnd.rar
  .rtf;Rich Text Format (RTF);application/rtf
  .sh;Bourne shell script;application/x-sh
  .svg;Scalable Vector Graphics (SVG);image/svg+xml
  .tar;Tape Archive (TAR);application/x-tar
  .tif, .tiff;Tagged Image File Format (TIFF);image/tiff
  .ts;MPEG transport stream;video/mp2t
  .ttf;TrueType Font;font/ttf
  .txt;Text, (generally ASCII or ISO 8859-n);text/plain
  .vsd;Microsoft Visio;application/vnd.visio
  .wav;Waveform Audio Format;audio/wav
  .weba;WEBM audio;audio/webm
  .webm;WEBM video;video/webm
  .webmanifest;Web application manifest;application/manifest+json
  .webp;WEBP image;image/webp
  .woff;Web Open Font Format (WOFF);font/woff
  .woff2;Web Open Font Format (WOFF);font/woff2
  .xhtml;XHTML;application/xhtml+xml
  .xls;Microsoft Excel;application/vnd.ms-excel
  .xlsx;Microsoft Excel (OpenXML);application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
  .xml;XML;application/xml is recommended as of RFC 7303 (section 4.1), but text/xml is still used sometimes. You can assign a specific MIME type to a file with .xml extension depending on how its contents are meant to be interpreted. For instance, an Atom feed is application/atom+xml, but application/xml serves as a valid default.
  .xul;XUL;application/vnd.mozilla.xul+xml
  .zip;ZIP archive;application/zip. Note, Windows uploads .zip files with the non-standard MIME type application/x-zip-compressed.
  .3gp;3GPP audio/video container;video/3gpp or audio/3gpp if it doesn't contain video
  .3g2;3GPP2 audio/video container;video/3gpp2 or audio/3gpp2 if it doesn't contain video
  .7z;7-zip archive;application/x-7z-compressed
*/