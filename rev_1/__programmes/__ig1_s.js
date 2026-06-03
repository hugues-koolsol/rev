/* SERVEUR */
const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
/* clef de session rev */
const prefixe_nom_fichier_session='csr_rev_';
import {getCookies} from "https://deno.land/std/http/cookie.ts";
import {crypto} from "jsr:@std/crypto";
import {__fnt1} from "./__fnt1_s.js";
import {__rev1} from "./__rev1_.js";
import {__fnts_c_et_s} from './__fnts_c_et_s_.js';
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
import {format as formater_la_date} from "jsr:@std/datetime";
/*
  Interface Globale coté serveur
*/
class __ig1{
    /* Clé Application */
    moi='__ig1';
    _CA_=0;
    __le_port=0;
    __version='';
    /* module des fonctions générales */
    __fnt1=null;
    __fnts_c_et_s=null;
    /* module de convertions des sources rev */
    __rev1=null;
    repertoire_racine_de_tous_les_projets='';
    repertoire_du_pgm_serveur='';
    repertoire_des_programmes='__programmes/';
    /* 0 1 ou 2 */
    __deverminage=0;
    /*  */
    /* les signaux de type 0:erreur/1:succès/2:alarme/3:information/4:déverminage */
    __xsi={0 : [] ,1 : [] ,2 : [] ,3 : [] ,4 : []};
    __liste_des_genres={};
    __liste_des_sql={};
    objet_des_modules_charges={"__ig1" : this};
    autorisations_verifiees=false;
    /* nom_de_la_cle_de_session */
    __ndlcs='';
    __socket=null;
    __session_json={};
    donnees_retournees={
        "_CA_" : 0 ,
        "__xst" : /* statut __xer:0:erreur , à priori en erreur */0 ,
        "date_heure_serveur" : '0000_00_00_00_00_00_000' ,
        "__xva" : /* valeurs */{} ,
        "__xac" : /* actions au format rev */'' ,
         /* liste des signaux __xer:0:erreur, __xsu:1:succès, __xal:2:alarme, __xif:3:info, __xdv:4:déverminage */
         /* "__xsi" : {"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []} , */
        "__xsi" : {0 : [] ,1 : [] ,2 : [] ,3 : [] ,4 : []} ,
        "chi_id_acces" : 0 ,
        "chi_id_utilisateur" : 0 ,
        "chi_id_projet" : 0 ,
        "chp_nom_de_connexion_utilisateur" : '' ,
        "__version" : '2000_01_01_00_00_00_000' ,
        "__liste_des_bases" : []
    };
    options_generales={
        "set-cookie" : [] ,
        "cookies" : {} ,
        "cle_de_session" : '' ,
        "repertoire_du_pgm_serveur" : '' ,
        "bdd_ouvertes" : {} ,
        "chemin_des_bdd" : '' ,
        "chemin_absolu_projet" : '' ,
        "repertoire_racine_de_tous_les_projets" : '' ,
        "base_de_reference" : 0 ,
        "base_de_travail" : 0 ,
        "erreur_controlee" : false
    };
    donnees_recues=null;
    asynchrone=false;
    /*
      =============================================================================================================
    */
    constructor( _CA_ , __le_port , __version , repertoire_du_pgm_serveur , repertoire_racine_de_tous_les_projets , __socket=null , __liste_des_bases=[1] ){
        /* , repertoire_du_pgm_serveur , repertoire_des_programmes , repertoire_racine_de_tous_les_projets , __deverminage ]{ */
        /* console.log('dans __ig1_s.constructor , _CA_='+_CA_+',__le_port='+__le_port+',__version='+__version) */
        this._CA_=_CA_;
        this.__le_port=__le_port;
        this.__version=__version;
        this.repertoire_du_pgm_serveur=repertoire_du_pgm_serveur;
        this.repertoire_racine_de_tous_les_projets=repertoire_racine_de_tous_les_projets;
        this.__fnt1=new __fnt1( [] , 0 , this );
        this.__rev1=new __rev1( this );
        this.__fnts_c_et_s=new __fnts_c_et_s( [] , 0 , this , 'serveur' );
        this.objet_des_modules_charges['__fnt1']=this.__fnt1;
        this.objet_des_modules_charges['__rev1']=this.__rev1;
        this.__ndlcs='cle_de_session_rev_' + _CA_ + '_websocket';
        this.__liste_des_bases=__liste_des_bases;
        this.__socket=__socket;
    }
    /*
      =============================================================================================================
    */
    reecrire_fichier_session(){
        /* this.ma_trace1("this.__session_json",this.__session_json); */
        try{
            Deno.writeTextFile( './__sessions/' + this.options_generales.cle_de_session + '.json' , JSON.stringify( this.__session_json ) );
        }catch(e){
            console.error( 'e=' , e );
        }
    }
    /*
      =============================================================================================================
    */
    async appel_fonction( mat , d ){
        /* , donnees_recues , donnees_retournees , options_generales ]{ */
        /* this.ma_trace1("this.donnees_recues=",this.donnees_recues.__xac); */
        let continuer=true;
        let l01=mat.length;
        let pm1_trouve=false;
        let les_autorisations_verifiees={"__ig1_s.js" : true ,"__fnt1_s.js" : true ,"_connexion1_s.js" : true};
        for( let i=1 ; i < l01 && continuer === true ; i=mat[i][12] ){
            /* this.ma_trace1('mat[i][1]='+mat[i][1]); */
            if(mat[i][1] === 'pm1' && mat[i][2] === 'f'){
                pm1_trouve=true;
                let m1_trouve=false;
                for( let j=i + 1 ; j < l01 && continuer === true ; j=mat[j][12] ){
                    if(mat[j][1] === 'm1' && mat[j][2] === 'f'){
                        m1_trouve=true;
                        let n1='';
                        for( let k=j + 1 ; k < l01 && continuer === true ; k=mat[k][12] ){
                            if(mat[k][1] === 'n1' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                                n1=mat[k + 1][1];
                            }
                        }
                        /* this.ma_trace1( 'n1="' + n1 + '"' ); // __ig1 */
                        if(n1 !== ''){
                            /* this.ma_trace1('this.autorisations_verifiees=',this.autorisations_verifiees); */
                            /* this.ma_trace1( 'continuer="' + continuer + '"' ); */
                            for( let k=j + 1 ; k < l01 && continuer === true ; k=mat[k][12] ){
                                let position_f1=0;
                                let nom_de_la_fonction_a_appeler='';
                                if(mat[k][1] === 'f1' && mat[k][2] === 'f'){
                                    for( let l=k + 1 ; l < l01 && continuer === true ; l=mat[l][12] ){
                                        if(mat[l][1] !== '' && mat[l][2] === 'f'){
                                            position_f1=l;
                                            let nom_de_la_fonction_a_appeler=mat[position_f1][1];
                                            /* this.ma_trace1('\n\nn1="'+n1+'"' , 'nom_de_la_fonction_a_appeler=' , nom_de_la_fonction_a_appeler ); */
                                            /* this.ma_trace1('objet_des_modules_charges=',this.objet_des_modules_charges); */
                                            let m=null;
                                            let nom_du_fichier='';
                                            let cle_pour_json_du_fichier='';
                                            if(n1.slice( -1 ) === '_'){
                                                nom_du_fichier='./' + n1 + '.js';
                                                cle_pour_json_du_fichier=n1 + '.js';
                                            }else{
                                                nom_du_fichier='./' + n1 + '_s.js';
                                                cle_pour_json_du_fichier=n1 + '_s.js';
                                            }
                                            let controler_les_autorisations=true;
                                            /* this.ma_trace1("cle_pour_json_du_fichier="+cle_pour_json_du_fichier); */
                                            if(les_autorisations_verifiees.hasOwnProperty( cle_pour_json_du_fichier )
                                                   && les_autorisations_verifiees[cle_pour_json_du_fichier] === true
                                            ){
                                                controler_les_autorisations=false;
                                                /* this.ma_trace1('autorisation OK pour "'+cle_pour_json_du_fichier+'"'); */
                                            }
                                            if(controler_les_autorisations === true){
                                                /*
                                                  this.ma_trace1("là cle_pour_json_du_fichier=" , cle_pour_json_du_fichier );
                                                */
                                                if(this.__session_json.__autorisations_serveur.hasOwnProperty( cle_pour_json_du_fichier )){
                                                    /*
                                                      on a déjà mis cette autorisation en session 
                                                    */
                                                    let elem=this.__session_json.__autorisations_serveur[cle_pour_json_du_fichier];
                                                    /*
                                                      this.ma_trace1("on a déjà mis cette autorisation en session , elem.che_pour_sous_liste_autorisation="+elem.che_pour_sous_liste_autorisation);
                                                    */
                                                    if(elem.che_pour_sous_liste_autorisation === 1){
                                                        if(nom_de_la_fonction_a_appeler === 'sous_liste2'){
                                                            controler_les_autorisations=false;
                                                            /* this.ma_trace1("autorisation déjà controlée"); */
                                                        }
                                                    }else{
                                                        if(elem.cht_condition_js_source === null){
                                                            controler_les_autorisations=false;
                                                            /* this.ma_trace1("autorisation déjà controlée"); */
                                                        }else{
                                                            let a=eval( elem.cht_condition_js_source );
                                                            if(a && a === true){
                                                                controler_les_autorisations=false;
                                                                /* this.ma_trace1("autorisation déjà controlée"); */
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            if(controler_les_autorisations === true){
                                                /* this.ma_trace1('à vérifier pour "'+cle_pour_json_du_fichier+'" session=' , this.__session_json); */
                                                let chemin_des_autorisations='./__fichiers_generes/___autorisations1_pour_acces_' + this.donnees_retournees.chi_id_acces + '_serveur.json';
                                                /* this.ma_trace1('chemin_des_autorisations='+chemin_des_autorisations); */
                                                try{
                                                    let contenu_texte=await this.file_get_contents( chemin_des_autorisations );
                                                    let contenu_json=JSON.parse( contenu_texte );
                                                    /* this.ma_trace1('contenu_json=',contenu_json); */
                                                    if(contenu_json.hasOwnProperty( cle_pour_json_du_fichier )){
                                                        let elem=contenu_json[cle_pour_json_du_fichier];
                                                        /* this.ma_trace1("elem[" + cle_pour_json_du_fichier + "]=" , elem ); */
                                                        /* http://localhost:6003/#pm1(m1(n1(autorisations1),f1(liste1(__num_page(0))))) */
                                                        if(elem.che_pour_sous_liste_autorisation === 1){
                                                            /* this.ma_trace1( "vérifier nom_de_la_fonction_a_appeler=" + nom_de_la_fonction_a_appeler ); */
                                                            if(nom_de_la_fonction_a_appeler === 'sous_liste2'){
                                                                /*
                                                                  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
                                                                */
                                                                les_autorisations_verifiees[cle_pour_json_du_fichier]=true;
                                                                this.__session_json.__autorisations_serveur[cle_pour_json_du_fichier]=elem;
                                                                this.reecrire_fichier_session();
                                                                /*
                                                                  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
                                                                */
                                                            }else{
                                                                return({"__xst" : __xer ,"__xme" : '<b>1autorisation non référencée ' + m1 + '.' + n1 + '</b>' + this.nl2()});
                                                            }
                                                        }else if(elem.che_pour_sous_liste_autorisation === 0){
                                                            if(elem.cht_condition_js_source === null){
                                                                /*
                                                                  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
                                                                */
                                                                les_autorisations_verifiees[cle_pour_json_du_fichier]=true;
                                                                this.__session_json.__autorisations_serveur[cle_pour_json_du_fichier]=elem;
                                                                this.reecrire_fichier_session();
                                                                /*
                                                                  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
                                                                */
                                                            }else{
                                                                let a=eval( elem.cht_condition_js_source );
                                                                /* this.ma_trace1("this.donnees_retournees.chi_id_projet" , this.donnees_retournees.chi_id_projet , elem.cht_condition_js_source , a); */
                                                                if(a && a === true){
                                                                    /*
                                                                      = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
                                                                    */
                                                                    les_autorisations_verifiees[cle_pour_json_du_fichier]=true;
                                                                    this.__session_json.__autorisations_serveur[cle_pour_json_du_fichier]=elem;
                                                                    this.reecrire_fichier_session();
                                                                    /*
                                                                      = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
                                                                    */
                                                                }else{
                                                                    if(elem.cht_notification_ko_source !== null && elem.cht_notification_ko_source){
                                                                        this.donnees_retournees.__xsi[__xer].push( elem.cht_notification_ko_source );
                                                                    }
                                                                    return({"__xst" : __xer ,"__xme" : 'erreur autorisation serveur 2 ' + this.nl2()});
                                                                }
                                                            }
                                                        }
                                                    }else{
                                                        return({"__xst" : __xer ,"__xme" : '<b>3:autorisation serveur non référencée ' + n1 + '</b>'});
                                                    }
                                                }catch(e){
                                                    return({"__xst" : __xer ,"__xme" : 'erreur autorisation serveur 4 ' + this.nl2( e )});
                                                }
                                            }
                                            /* this.ma_trace1('nom_du_fichier='+nom_du_fichier,this.objet_des_modules_charges); */
                                            if(this.objet_des_modules_charges[n1] !== undefined){
                                            }else{
                                                let chemin_du_module='';
                                                if(this.options_generales.mode_cron){
                                                    chemin_du_module=this.repertoire_du_pgm_serveur + '/' + this.repertoire_des_programmes + nom_du_fichier;
                                                }else{
                                                    chemin_du_module=this.repertoire_du_pgm_serveur + '/' + this.repertoire_des_programmes + nom_du_fichier;
                                                }
                                                /* this.ma_trace1('chemin_du_module'+chemin_du_module); */
                                                let le_module_existe=await this.is_file( chemin_du_module );
                                                /* this.ma_trace1('le_module_existe='+(le_module_existe?'true':'false')); */
                                                if(le_module_existe === false){
                                                    /* this.ma_trace1('le fichier "' + chemin_du_module + '" n\'a pas été trouvé sur disque'); */
                                                    this.donnees_retournees.__xsi[__xdv].push( 'SERVEUR : le fichier "' + nom_du_fichier + '" est introuvable ' + this.nl2() );
                                                    continuer=false;
                                                    continue;
                                                }else{
                                                    try{
                                                        m=await import( nom_du_fichier );
                                                        /* this.ma_trace1('le module est importé de '+nom_du_fichier); */
                                                        /* this.donnees_retournees.__xsi[__xif].push('chargement du module module "'+nom_du_fichier+'" pour la fonction '+nom_de_la_fonction_a_appeler+'()' + this.nl2()); *_/ */
                                                    }catch(e){
                                                        const repl0=new RegExp( this.options_generales.repertoire_du_pgm_serveur , 'g' );
                                                        this.ma_trace1( 'pile erreur 0=' , e.stack.replace( repl0 , '' ) );
                                                        this.donnees_retournees.__xsi[__xdv].push( 'debug erreur de chargement du module "' + nom_du_fichier + '" pour la fonction ' + nom_de_la_fonction_a_appeler + '()' + this.nl2( e ) );
                                                        continue;
                                                    }
                                                    try{
                                                        let o=new m[n1]( this );
                                                        /* this.ma_trace1('o=',o); */
                                                        this.objet_des_modules_charges[n1]=o;
                                                    }catch(e){
                                                        this.donnees_retournees.__xsi[__xdv].push( ' erreur new ' + n1 + ' ' + this.nl2( e ) );
                                                        this.ma_trace1( ' erreur new ' + n1 + ' ' + this.nl2( e ) );
                                                        continuer=false;
                                                        continue;
                                                    }
                                                }
                                            }
                                            if(continuer === true){
                                                let ret=null;
                                                try{
                                                    /*
                                                      = = = = = = = = = = = = = = = = = = = = = = = = = =
                                                      = = = = = = = =  TRAITEMENT CENTRAL = = = = = = = = 
                                                      = = = = = = = = = = = = = = = = = = = = = = = = = =
                                                    */
                                                    ret=await this.objet_des_modules_charges[n1][nom_de_la_fonction_a_appeler]( mat , position_f1 );
                                                    /*
                                                      = = = = = = = = = = = = = = = = = = = = = = = = = =
                                                      = = = = = = = = = = = = = = = = = = = = = = = = = =
                                                      = = = = = = = = = = = = = = = = = = = = = = = = = =
                                                    */
                                                    /* this.ma_trace1('après appel de la fonction '+nom_de_la_fonction_a_appeler+' du module, ret=',ret); */
                                                    if(ret === undefined){
                                                        this.donnees_retournees.__xsi[__xer].push( 'SERVEUR : il manque "return({__xst:__xsu});" à ' + n1 + '_s.' + nom_de_la_fonction_a_appeler + '() ' );
                                                        continuer=false;
                                                    }else{
                                                        if(ret.hasOwnProperty( '__xme' ) && ret.__xme !== ''){
                                                            this.donnees_retournees.__xsi[ret.__xst].push( ret.__xme );
                                                            ret.__xme='';
                                                        }
                                                        if(ret.__xst !== __xsu && ret.__xst === __xer){
                                                            continuer=false;
                                                        }else{
                                                            this.donnees_retournees.__xst=ret.__xst;
                                                        }
                                                    }
                                                }catch(e){
                                                    /* this.ma_trace1("e=",e.stack); */
                                                    if(e.message.indexOf( 'is not a function' ) >= 0){
                                                        this.donnees_retournees.__xsi[__xer].push( 'la fonction serveur "' + n1 + '.' + nom_de_la_fonction_a_appeler + '" n\'a pas été trouvée' );
                                                        continuer=false;
                                                        continue;
                                                    }
                                                    const repl0=new RegExp( this.options_generales.repertoire_du_pgm_serveur , 'g' );
                                                    let le_message='pile erreur 1=\n' + e.stack.replace( repl0 , '' ).replace( /https\:\/\/deno/g , 'deno' ).replace( /file\:\/\/\/\//g , '' );
                                                    le_message=le_message.replace( /\?__version=\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}_\d{3}/g , '' );
                                                    if(this.options_generales.erreur_controlee === false){
                                                        this.ma_trace1( le_message );
                                                    }
                                                    if(this.options_generales.erreur_controlee === false){
                                                        this.donnees_retournees.__xsi[__xer].push( 'SERVEUR : <b>' + nom_du_fichier + '.' + nom_de_la_fonction_a_appeler + '()</b> n\'existe pas ou bien contient une erreur<br />' + this.nl2( e ) );
                                                    }else{
                                                        this.donnees_retournees.__xsi[__xer].push( e.message );
                                                    }
                                                    continuer=false;
                                                    continue;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if(m1_trouve === false){
                    this.donnees_retournees.__xsi[__xdv].push( 'pas de m1 trouvé dans pm1() ' + this.donnees_recues.__xac + ' ' + this.nl2() );
                    continuer=false;
                }
            }
        }
        if(pm1_trouve === false){
            if('pm1(m1(n1(__ig1),f1(init0())))' === this.donnees_recues.__xac){
                this.donnees_retournees.__xva['init0']=true;
                this.__session_json.__autorisations_serveur={};
                this.reecrire_fichier_session();
            }else{
                this.donnees_retournees.__xsi[__xdv].push( 'pas de pm1 trouvé ' + this.donnees_recues.__xac + ' ' + this.nl2() + ' ' );
                continuer=false;
            }
        }
        /* this.ma_trace1('continuer='+continuer); */
        if(continuer === true){
            return({"__xst" : __xsu});
        }else{
            if(this.donnees_retournees.__xst !== __xsu){
                return({"__xst" : this.donnees_retournees.__xst});
            }else{
                return({"__xst" : __xer ,"__xme" : this.nl2()});
            }
        }
    }
    /*
      =============================================================================================================
    */
    async generique_sous_liste2( mat , d , id_sql , criteres_xxx , __nbMax , __db1=null ){
        let module_appelant1='';
        let module_appele1='';
        let nom_champ_dans_parent2='';
        let nom_libelle_dans_parent2='';
        let l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }else if(mat[i][1] === 'module_appelant1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                module_appelant1=mat[i + 1][1];
            }else if(mat[i][1] === 'module_appele1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                module_appele1=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_champ_dans_parent2' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_champ_dans_parent2=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_libelle_dans_parent2' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_libelle_dans_parent2=mat[i + 1][1];
            }
        }
        let __num_page=0;
        let formulaire=this.__fnt1.debut_filtre1( mat , d , 'sous_liste2' );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        criteres_xxx['debut']=__debut;
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_xxx[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.ouvrir_bdd( this.options_generales.base_de_travail );
        }
        let ttxxx=await this.sql_iii( id_sql , criteres_xxx , this.donnees_retournees , __db1 );
        if(ttxxx.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : this.nl2()});
        }
        if(ttxxx.__xst === __xsu && ttxxx[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres_xxx['debut']=__debut;
            ttxxx=await this.__ig1.sql_iii( id_sql , criteres_xxx , this.__ig1.donnees_retournees , __db1 );
        }
        this.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.donnees_retournees[__xva]['__debut']=__debut;
        this.donnees_retournees[__xva]['__num_page']=__num_page;
        this.donnees_retournees[__xac]='pm1(m1(n1(' + module_appelant1 + '),f1(sous_liste2(' + option_de_13;
        for(let i in formulaire){
            this.donnees_retournees[__xac]+=this.__fnt1.critere_liste( formulaire , i );
        }
        this.donnees_retournees[__xac]+=',module_appelant1(' + module_appelant1 + ')';
        this.donnees_retournees[__xac]+=',module_appele1(' + module_appele1 + ')';
        this.donnees_retournees[__xac]+=',nom_champ_dans_parent2(' + nom_champ_dans_parent2 + ')';
        this.donnees_retournees[__xac]+=',nom_libelle_dans_parent2(' + nom_libelle_dans_parent2 + ')';
        this.donnees_retournees[__xac]+='))))';
        this.donnees_retournees[__xva]['criteres2']=criteres_xxx;
        this.donnees_retournees[__xva]['sous_liste2']=ttxxx;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async traiter_message_socket( evenement , req1 , la_liste_des_clients ){
        /* console.log('repertoire_racine_de_tous_les_projets='+repertoire_racine_de_tous_les_projets) */
        const date_heure_serveur=formater_la_date( new Date() , "yyyy-MM-dd HH:mm:ss.SSS" , {"timeZone" : 'Europe/Paris'} );
        /* console.log('date_heure_serveur='+date_heure_serveur); */
        const cookies=getCookies( req1.headers );
        this.donnees_retournees={
            "_CA_" : this._CA_ ,
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
            "__version" : this.__version ,
            "__liste_des_bases" : this.__liste_des_bases
        };
        this.options_generales={
            "set-cookie" : [] ,
            "cookies" : cookies ,
            "cle_de_session" : '' ,
            "repertoire_du_pgm_serveur" : this.repertoire_du_pgm_serveur ,
            "bdd_ouvertes" : {} ,
            "chemin_des_bdd" : './__bases_de_donnees/' ,
            "chemin_absolu_projet" : '' ,
            "repertoire_racine_de_tous_les_projets" : this.repertoire_racine_de_tous_les_projets ,
            "base_de_reference" : 1 ,
            "base_de_travail" : 1
        };
        /* this.ma_trace1('this.__ndlcs='+this.__ndlcs+',cookies=',cookies); */
        if(cookies.hasOwnProperty( this.__ndlcs )
               && cookies[this.__ndlcs] !== ''
               && cookies[this.__ndlcs].substr( 0 , String( (prefixe_nom_fichier_session + this._CA_) + '_' ).length ) === (prefixe_nom_fichier_session + this._CA_) + '_'
        ){
            /* options_http.headers.cle_de_session=cookies.cle_de_session; */
            this.options_generales.cle_de_session=cookies[this.__ndlcs];
            /* this.ma_trace1('this.options_generales.cle_de_session='+this.options_generales.cle_de_session); */
            try{
                const text_json=await Deno.readTextFile( './__sessions/' + cookies[this.__ndlcs] + '.json' );
                try{
                    this.__session_json=JSON.parse( text_json );
                    /*
                      sessions
                    */
                    if(this.__session_json.hasOwnProperty( 'chi_id_acces' )){
                        this.donnees_retournees.chi_id_acces=this.__session_json.chi_id_acces;
                    }
                    if(this.__session_json.hasOwnProperty( 'chi_id_utilisateur' )){
                        this.donnees_retournees.chi_id_utilisateur=this.__session_json.chi_id_utilisateur;
                    }
                    /* this.ma_trace1('this.donnees_retournees.chi_id_utilisateur='+this.donnees_retournees.chi_id_utilisateur); */
                    if(this.__session_json.hasOwnProperty( 'chi_id_projet' )){
                        this.donnees_retournees.chi_id_projet=this.__session_json.chi_id_projet;
                    }
                    if(this.__session_json.hasOwnProperty( 'chp_nom_de_connexion_utilisateur' )){
                        this.donnees_retournees.chp_nom_de_connexion_utilisateur=this.__session_json.chp_nom_de_connexion_utilisateur;
                    }
                    /*
                      options générales
                    */
                    if(this._CA_ > 2){
                        this.donnees_retournees.chi_id_projet=this._CA_;
                    }
                    if(this.donnees_retournees.chi_id_projet === 0){
                        /*
                          ce cas ne peut arriver que si on est sur le projet principal
                        */
                        if(this._CA_ === 1){
                            this.options_generales.chemin_absolu_projet='../rev_1/';
                            this.options_generales.chemin_des_bdd='./__bases_de_donnees/';
                        }else if(this._CA_ === 2){
                            this.options_generales.chemin_des_bdd='./__bases_de_donnees/';
                            this.options_generales.chemin_absolu_projet='../rev_2/';
                        }
                    }else{
                        if(this._CA_ === 1){
                            this.options_generales.chemin_absolu_projet='../rev_' + this.donnees_retournees.chi_id_projet + '/';
                            this.options_generales.chemin_des_bdd='./__bases_de_donnees/';
                            this.options_generales.base_de_travail=this.donnees_retournees.chi_id_projet;
                        }else if(this._CA_ === 2){
                            this.options_generales.chemin_absolu_projet='../rev_2/';
                            this.options_generales.chemin_des_bdd='./__bases_de_donnees/';
                        }else{
                            this.options_generales.chemin_absolu_projet='../rev_' + this.donnees_retournees.chi_id_projet + '/';
                            this.options_generales.chemin_des_bdd='./__bases_de_donnees/';
                        }
                    }
                    /* console.log('this.donnees_retournees',this.donnees_retournees); */
                }catch(e){
                    console.log( 'erreur làààààà87634=' , e.stack );
                    return this.donnees_retournees;
                }
            }catch(e){
                /*
                  pas de problème, il n'y a pas de session en cours
                */
            }
        }
        this.options_generales.chemin_racine_du_projet='./';
        if(this._CA_ === 1 || this._CA_ === 2){
            this.options_generales.chemin_racine_de_tous_les_projets='../../';
        }
        let __deverminage=0;
        this.donnees_recues=null;
        let json_body=null;
        try{
            json_body=JSON.parse( evenement.data );
            if(json_body.__xva.hasOwnProperty( '__parametres' )){
                this.__deverminage=json_body.__xva.__parametres.__deverminage.valeur;
            }
        }catch(e){
            console.log( 'erreur reception_serveur raaah 568 534=' , e.stack );
            return this.donnees_retournees;
        }
        /* this.ma_trace1("reçu : " + evenement.data); */
        /* this.ma_trace1("json_body : " , json_body); */
        this.donnees_retournees.__xac=json_body.__xac;
        this.donnees_recues=json_body;
        try{
            /* this.ma_trace1(json_body.mat); */
            /*
              =============================================================================================
              ============================== APPEL CENTRAL ================================================
              =============================================================================================
            */
            let ret=await this.appel_fonction( json_body.mat , 1 );
            /*
              =============================================================================================
              =============================================================================================
              =============================================================================================
            */
            for(let ref_base in this.options_generales.bdd_ouvertes){
                try{
                    await this.options_generales.bdd_ouvertes[ref_base].base.close();
                } catch {}
            }
            if(__deverminage > 0){
                let repertoire_des_bdd=this.repertoire_du_pgm_serveur + '__bases_de_donnees/';
                for await (const dirEntry of Deno.readDir( repertoire_des_bdd )){
                    if(dirEntry.name.indexOf( 'sqlite-wal' ) >= 0){
                        console.log( '%c\nATTENTION base non fermée ' + dirEntry.name , 'color:red;background-color:yellow;' );
                        this.donnees_retournees.__xsi[__xal].push( 'ATTENTION base non fermée <br />' + dirEntry.name + '<br />__xac=' + JSON.stringify( this.donnees_recues.__xac ) );
                    }
                }
            }
            if(ret.__xst === __xsu){
                return this.donnees_retournees;
            }else{
                if(this.options_generales.erreur_controlee === false){
                    this.ma_trace1( '__deverminage evenement.data=' , evenement.data.substr( 0 , 400 ) + '\n ... ' );
                }else{
                    if(ret.hasOwnProperty( '__xme' ) && ret.__xme !== ''){
                        this.donnees_retournees.__xsi[ret.__xst].push( ret.__xme );
                    }
                }
                return this.donnees_retournees;
            }
        }catch(e123456){
            for(let ref_base in this.options_generales.bdd_ouvertes){
                try{
                    await this.options_generales.bdd_ouvertes[ref_base].base.close();
                } catch {}
            }
            if(this.options_generales.erreur_controlee === false){
                this.ma_trace1( 'erreur dans appel_fonction=' , e123456.stack );
            }
            return({"__xst" : __xer ,"__xme" : this.nl2()});
        }
    }
    /*
      =============================================================================================================
    */
    async contenu_de_get( req1 ){
        try{
            const url0=new URL( req1.url );
            const chemin_get0=url0.pathname;
            /* console.log(chemin_get0); */
            if(chemin_get0 === "/f0"){
                let n0=url0.searchParams.get( "n0" );
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
                let contenu_fichier='';
                let entetes_reponse_http={};
                try{
                    contenu_fichier=await Deno.readFile( chemin_du_fichier );
                    entetes_reponse_http={"status" : 200 ,"headers" : {"Content-Type" : content_type ,"Cache-Control" : "public, max-age=31536000"}};
                }catch(e){
                    entetes_reponse_http={"status" : 404};
                }
                return({"__xst" : __xsu ,"__xva" : {"contenu" : contenu_fichier ,"entetes_reponse_http" : entetes_reponse_http}});
            }else if(chemin_get0 === "/"){
                let __le_serveur=url0.hostname;
                /* console.log( '__ig1_s contenu_de_get url0=' , url0.hostname ); */
                let contenu='<!DOCTYPE html>';
                contenu+='<html lang="fr">';
                contenu+='<head id="vv_head1">';
                contenu+='<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />';
                contenu+='<meta id="vv_content1" name="description" content="rev_' + this._CA_ + '" />';
                contenu+='<title id="vv_titre1">rev_' + this._CA_ + '</title>';
                contenu+='<style id="vv_style1" type="text/css"></style>';
                contenu+='<link id="vv_icon1" rel="icon" type="image/svg+xml" href=\'';
                if(this._CA_ === 1){
                    contenu+='data:image/svg+xml,';
                    contenu+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">';
                    contenu+='<rect x="-50" y="-50" width="100" height="100" fill="bisque" />';
                    contenu+='<text x="-30.5" y="40.5" style="font-size:106;stroke-width:4;stroke:black;fill:blue;font-family:Verdana;">a</text>';
                    contenu+='</svg>';
                }else if(this._CA_ === 2){
                    contenu+='data:image/svg+xml,';
                    contenu+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">';
                    contenu+='<rect x="-50" y="-50" width="100" height="100" fill="lightblue" />';
                    contenu+='<text x="-30.5" y="40.5" style="font-size:106;stroke-width:4;stroke:black;fill:blue;font-family:Verdana;" >2</text>';
                    contenu+='</svg>';
                }else{
                    contenu+='data:image/svg+xml,';
                    contenu+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">';
                    contenu+='<rect x="-50" y="-50" width="100" height="100" fill="yellow" />';
                    contenu+='<text x="-20.5" y="20.5" style="font-size:80;stroke-width:4;stroke:black;fill:blue;font-family:Verdana;">' + this._CA_ + '</text>';
                    contenu+='</svg>';
                }
                contenu+='\'>';
                contenu+='<script type="text/javascript">\r\n';
                contenu+='var __ig0=null;\r\n';
                contenu+='const __version=\'' + this.__version + '\';\r\n';
                contenu+='const __le_serveur=\'' + __le_serveur + '\';\r\n';
                contenu+='const __le_port=\'' + this.__le_port + '\';\r\n';
                contenu+='const _CA_=' + this._CA_ + ';\r\n';
                contenu+='const __xer=0;const __xsu=1;const __xal=2;const __xif=3;const __xdv=4;\r\n';
                contenu+='</script>\r\n';
                contenu+='</head>';
                contenu+='<body id="vv_le_body1"></body>\r\n';
                contenu+='<script type="module" src="f0?n0=__ig1_c.js&__version=' + this.__version + '"></script>';
                contenu+='</html>';
                const date_heure_serveur=formater_la_date( new Date() , "yyyy-MM-dd HH:mm:ss.SSS" , {"timeZone" : 'Europe/Paris'} );
                /* console.log("__ig1_s contenu_de_get date_heure_serveur" , date_heure_serveur ); // */
                const cookies=getCookies( req1.headers );
                let la_cle=(prefixe_nom_fichier_session + this._CA_) + '_' + date_heure_serveur.substr( 0 , 10 ) + '_' + (await crypto.randomUUID());
                if(cookies.hasOwnProperty( this.__ndlcs )
                       && cookies[this.__ndlcs] !== ''
                       && cookies[this.__ndlcs].substr( 0 , String( (prefixe_nom_fichier_session + this._CA_) + '_' ).length ) === (prefixe_nom_fichier_session + this._CA_) + '_'
                ){
                    /* console.log("cookie trouve") */
                    la_cle=cookies[this.__ndlcs];
                }
                let le_cookie='cle_de_session_rev_' + this._CA_ + '_websocket=' + la_cle + '; Secure; HttpOnly; SameSite=Strict; Path=/;';
                const headers=new Headers();
                headers.append( "status" , "200" );
                headers.append( "Content-Type" , "text/html; charset=utf-8" );
                headers.append( "Set-Cookie" , le_cookie );
                let entetes_reponse_http={"headers" : headers};
                return({"__xst" : __xsu ,"__xva" : {"contenu" : contenu ,"entetes_reponse_http" : entetes_reponse_http}});
            }
            return({"__xst" : __xer ,"__xme" : this.nl2()});
        }catch(e){
            let text_erreur='Erreur, consultez la maintenance [' + this.nl2( e ) + ']';
            const headers=new Headers();
            headers.append( "status" , "200" );
            headers.append( "Content-Type" , "text/html; charset=utf-8" );
            let entetes_reponse_http={"headers" : headers};
            return({"__xst" : __xsu ,"__xva" : {"contenu" : text_erreur ,"entetes_reponse_http" : entetes_reponse_http}});
        }
    }
    /*
      =============================================================================================================
    */
    async sleep3( ms ){
        return(new Promise( ( resolve ) => {
                setTimeout( resolve , ms );} ));
    }
    /*
      =============================================================================================================
    */
    ajoute_message( obj ){
        this.donnees_retournees.__xsi[obj.__xst].push( obj.__xme );
        /* this.ma_trace1( 'dans ajoute_message, obj=' , obj ); */
        return({"__xst" : obj.__xst});
    }
    /*
      =============================================================================================================
    */
    cle_aleatoire(){
        return(crypto.randomUUID());
    }
    /*
      =============================================================================================================
    */
    ma_trace1( ...p ){
        if(this.__deverminage === 0){
            return;
        }
        console.log( '%c===============================================================================================' , 'background-color:white;color:black;' );
        let tab=(new Error()).stack.split( '\n' );
        let e=tab[2];
        e=e.replace( /\?__version=\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}_\d{3}/ , '' );
        e=e.replace( /file\:\/\/\// , '' ).replace( this.repertoire_du_pgm_serveur , '' ).replace( /    at/ , '' );
        e=e.substr( e.indexOf( '.' ) );
        e=e.replace( /__programmes\// , '' );
        console.log( '%c->' + e , 'color:red;background-color:white;' );
        for(let a of p){
            console.log( a );
        }
        console.log( '' );
    }
    /*
      =============================================================================================================
    */
    async afficher_les_dependances1( obj1 ){
        let chemin_fichier__liste_des_dependances='../rev_' + this.donnees_retournees._CA_ + '/__fichiers_generes/__liste_des_dependances_bases.json';
        let contenu_texte_fichier__liste_des_dependances=await this.file_get_contents( chemin_fichier__liste_des_dependances );
        let contenu_json_fichier__liste_des_dependances=JSON.parse( contenu_texte_fichier__liste_des_dependances );
        if(contenu_json_fichier__liste_des_dependances.hasOwnProperty( obj1.table_parente + '_' + obj1.champ_parent )){
            let les_dependances=contenu_json_fichier__liste_des_dependances[obj1.table_parente + '_' + obj1.champ_parent]['dependances'];
            for(let i in les_dependances){
                let sql1='SELECT count( * ) FROM ' + les_dependances[i]['table_dependante'] + ' WHERE ' + les_dependances[i]['champ_dependant'] + ' = ' + obj1['id_enregistrement'];
                /* this.ma_trace1('sql1='+sql1); */
                let statement1=await obj1.__db1.prepare( sql1 );
                let lignes=await statement1.values();
                await statement1.finalize();
                for(let numero_de_ligne in lignes){
                    if(lignes[numero_de_ligne][0] > 0){
                        this.donnees_retournees.__xsi[__xer].push( '<b>Il existe des enregistrements dépendants dans la table des ' + les_dependances[i]['table_dependante'].replace( 'tbl_' , '' ) + '</b>' );
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    async tester_les_dependances1( obj1 ){
        let les_erreurs=0;
        let chemin_fichier__liste_des_dependances='../rev_' + this.donnees_retournees._CA_ + '/__fichiers_generes/__liste_des_dependances_bases.json';
        let contenu_texte_fichier__liste_des_dependances=await this.file_get_contents( chemin_fichier__liste_des_dependances );
        let contenu_json_fichier__liste_des_dependances=JSON.parse( contenu_texte_fichier__liste_des_dependances );
        if(contenu_json_fichier__liste_des_dependances.hasOwnProperty( obj1.table_parente + '_' + obj1.champ_parent )){
            let les_dependances=contenu_json_fichier__liste_des_dependances[obj1.table_parente + '_' + obj1.champ_parent]['dependances'];
            /* this.ma_trace1('les_dependances=',les_dependances); */
            for(let i in les_dependances){
                let sql1='';
                if(this.donnees_retournees._CA_ === 1){
                    sql1='SELECT count( * ) FROM b' + this.donnees_retournees.chi_id_projet + '.' + les_dependances[i]['table_dependante'] + ' WHERE ' + les_dependances[i]['champ_dependant'] + ' = ' + obj1['id_enregistrement'];
                }else{
                    sql1='SELECT count( * ) FROM b' + les_dependances[i]['id_bdd_de_la_base_dependante'] + '.' + les_dependances[i]['table_dependante'] + ' WHERE ' + les_dependances[i]['champ_dependant'] + ' = ' + obj1['id_enregistrement'];
                }
                /* this.ma_trace1('sql1='+sql1); */
                let statement1=await obj1.__db1.prepare( sql1 );
                let lignes=await statement1.values();
                await statement1.finalize();
                for(let numero_de_ligne in lignes){
                    if(lignes[numero_de_ligne][0] > 0){
                        let tt='<b>Il existe des enregistrements dépendants dans la table des ' + les_dependances[i]['table_dependante'].replace( 'tbl_' , '' ) + '</b>';
                        /* this.ma_trace1('tt=',tt); */
                        this.donnees_retournees.__xsi[__xer].push( tt );
                        les_erreurs++;
                    }
                }
            }
        }
        if(les_erreurs > 0){
            return({"__xst" : __xer ,"__xme" : this.nl2()});
        }else{
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    traiter_open_socket( req1 , socket ){
        const cookies=getCookies( req1.headers );
        let la_cle='';
        if(cookies.hasOwnProperty( this.__ndlcs )
               && cookies[this.__ndlcs] !== ''
               && cookies[this.__ndlcs].substr( 0 , String( (prefixe_nom_fichier_session + this._CA_) + '_' ).length ) === (prefixe_nom_fichier_session + this._CA_) + '_'
        ){
            /* console.log( "cookie trouve" ); */
            la_cle=cookies[this.__ndlcs];
        }
        let le_machin={
            "__xst" : __xsu ,
            "chi_id_acces" : 0 ,
            "chi_id_projet" : 0 ,
            "chi_id_utilisateur" : 0 ,
            "__xsi" : {0 : [] ,1 : [] ,2 : [] ,3 : [] ,4 : []} ,
            "__xva" : {} ,
            "__xac" : 'pm1(m1(n1(__ig1),f1(connexion_socket_etablie())))'
        };
        this.__socket.send( JSON.stringify( le_machin ) );
    }
    /*
      =============================================================================================================
    */
    async contenu_de_post( req1 ){
        const contentType=req1.headers.get( "content-type" ) || "";
        const nom_du_fichier=req1.headers.get( "x-nom_du_fichier" ) || "";
        const nom_original=req1.headers.get( "x-nom_original" ) || "";
        const _CA_=req1.headers.get( "x-_CA_" ) || 0;
        const chi_id_acces=req1.headers.get( "x-chi_id_acces" ) || 0;
        const chi_id_utilisateur=req1.headers.get( "x-chi_id_utilisateur" ) || 0;
        const chi_id_projet=req1.headers.get( "x-chi_id_projet" ) || 0;
        const numero_morceau_de_fichier=req1.headers.get( "x-numero_morceau_de_fichier" ) || 0;
        const nombre_de_morceaux=req1.headers.get( "x-nombre_de_morceaux" ) || 0;
        this.__deverminage=req1.headers.get( "x-__deverminage" ) || 0;
        const cookies=getCookies( req1.headers );
        let la_cle=null;
        if(cookies.hasOwnProperty( this.__ndlcs )
               && cookies[this.__ndlcs] !== ''
               && cookies[this.__ndlcs].substr( 0 , String( (prefixe_nom_fichier_session + this._CA_) + '_' ).length ) === (prefixe_nom_fichier_session + this._CA_) + '_'
        ){
            /* console.log("cookie trouve") */
            la_cle=cookies[this.__ndlcs];
        }
        if(la_cle === null){
            const headers=new Headers();
            headers.append( "status" , "200" );
            headers.append( "Content-Type" , "text/html; charset=utf-8" );
            let entetes_reponse_http={"headers" : headers};
            return({
                    "__xst" : __xer ,
                    "__xva" : {"contenu" : 'erreur_dans_serveur(message(\'cookie non trouvé\'))' ,"entetes_reponse_http" : entetes_reponse_http}
                });
        }
        /* this.ma_trace1("la_cle=",la_cle); */
        let chemin_session='../rev_' + this._CA_ + '/__sessions/' + la_cle + '.json';
        if(!(await this.is_file( chemin_session ))){
            const headers=new Headers();
            headers.append( "status" , "200" );
            headers.append( "Content-Type" , "text/html; charset=utf-8" );
            let entetes_reponse_http={"headers" : headers};
            return({
                    "__xst" : __xer ,
                    "__xva" : {"contenu" : 'erreur_dans_serveur(message(\'session non trouvée\'))' ,"entetes_reponse_http" : entetes_reponse_http}
                });
        }
        if(!(_CA_ > 0 && chi_id_acces > 0 && chi_id_utilisateur > 0 && chi_id_projet > 0)){
            const headers=new Headers();
            headers.append( "status" , "200" );
            headers.append( "Content-Type" , "text/html; charset=utf-8" );
            let entetes_reponse_http={"headers" : headers};
            return({
                    "__xst" : __xer ,
                    "__xva" : {"contenu" : 'erreur_dans_serveur(message(\'il manque des paramètres\'))' ,"entetes_reponse_http" : entetes_reponse_http}
                });
        }
        /*
          this.ma_trace1('nom_du_fichier=' + nom_du_fichier + '\nnom_original=' + nom_original + '\n_CA_=' + _CA_ + '\nchi_id_acces=' + chi_id_acces + '\nchi_id_utilisateur=' + chi_id_utilisateur )
          this.ma_trace1('chi_id_projet=' + chi_id_projet )
        */
        /* https://docs.deno.com/api/web/~/Body */
        let aaa=await req1.arrayBuffer();
        let chemin_fichier='../rev_' + chi_id_projet + '/__fichiers_binaires/' + this.nettoyer_chaine_pour_id_vv( nom_original + '-' + nom_du_fichier ) + '.txt';
        if(!(await this.is_file( chemin_fichier ))){
            /*
              si le fichier n'existe pas on le crée ...
            */
            await Deno.writeFile( chemin_fichier , new Uint8Array( aaa ) , {"mode" : 0o777 ,"create" : true} );
        }else{
            /*
              ... sinon on ajoute le contenu
            */
            /* this.ma_trace1("on ajoute au fichier"); */
            await Deno.writeFile( chemin_fichier , new Uint8Array( aaa ) , {"mode" : 0o777 ,"append" : true} );
        }
        let le_cookie='cle_de_session_rev_' + this._CA_ + '_websocket=' + la_cle + '; Secure; HttpOnly; SameSite=Strict; Path=/;';
        const headers=new Headers();
        headers.append( "status" , "200" );
        headers.append( "Content-Type" , "text/html; charset=utf-8" );
        headers.append( "Set-Cookie" , le_cookie );
        let entetes_reponse_http={"headers" : headers};
        let le_json_de_retour={
            "contenu" : 'ok_dans_serveur(nom_du_fichier(' + nom_du_fichier + '),numero_morceau_de_fichier(' + numero_morceau_de_fichier + '),nombre_de_morceaux(' + nombre_de_morceaux + '))' ,
            "entetes_reponse_http" : entetes_reponse_http
        };
        return({"__xst" : __xsu ,"__xva" : le_json_de_retour});
    }
    /*
      =============================================================================================================
    */
    traite_erreur_sql( numero_de_requete , e , chaine_sql , objet_dependances ){
        let __xme='';
        if(e.stack.indexOf( 'API misuse' ) >= 0){
            console.log( '%c\nATTENTION API MISUSE, un await est il manquant quelquepart avant sql_' + numero_de_requete + ' ?\n\n' + e.stack , 'color:red;background-color:yellow;' );
        }
        let a=RegExp( this.repertoire_du_pgm_serveur , 'g' );
        let le_message='';
        if(this.options_generales.erreur_controlee === true){
            le_message=e.message;
        }else{
            let no_such_table='no such table';
            if(e.stack.indexOf( no_such_table ) >= 0){
                le_message=e.stack.substr( 0 , e.stack.indexOf( '\n' ) );
            }else{
                le_message=e.stack.replace( /\n/g , '\n' ).replace( a , '' ).replace( /\(file\:\/\//g , '' ).replace( / at/g , '<br />' ) + '<hr />';
                le_message=le_message.replace( /__programmes\// , '' );
                le_message=le_message.replace( /\?__version=\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}_\d{3}/g , '' );
            }
        }
        if(this.__deverminage === 0){
            if(this.options_generales.erreur_controlee === true){
                this.donnees_retournees.__xsi[__xer].push( le_message );
            }else{
                this.donnees_retournees.__xsi[__xer].push( 'Il y a une erreur dans le programme, veuillez appeler la maintenance' );
            }
        }else if(this.__deverminage === 1){
            this.donnees_retournees.__xsi[__xdv].push( this.nl2( e ) );
        }else if(this.__deverminage === 2){
            this.donnees_retournees.__xsi[__xdv].push( le_message );
            /*
              dans le cas d'un appel asynchrone
            */
            if(this.options_generales.erreur_controlee === false){
                this.ma_trace1( "e8478324" , le_message );
            }
        }
        if(this.__deverminage > 0){
            if(this.options_generales.erreur_controlee === false){
                this.donnees_retournees.__xsi[__xer].push( 'aaaaaaa<b>' + le_message + 'xxxxxxxxx</b><br><br> erreur sql_' + numero_de_requete + '=' + chaine_sql.replace( /\n/g , '<br />' ) );
            }
        }
        if(e.stack.indexOf( 'UNIQUE constraint' ) >= 0){
            __xme+='<b>doublon</b>';
        }
        let obj={"__xst" : __xer ,"__xme" : __xme ,"__xva" : {} ,"sql0" : chaine_sql};
        return obj;
    }
    /*
      =============================================================================================================
    */
    async sql_iii( numero_de_sql , par , donnees_retournees , db=null ){
        let la_classe_sql='sql_' + numero_de_sql;
        let nom_du_fichier='/__fichiers_generes/__sqls/' + la_classe_sql + '.js';
        if(!this.is_file( '..' + nom_du_fichier )){
            return({"__xst" : __xer ,"__xme" : 'Le fichier sql_' + numero_de_sql + ' n\'a pas été trouvé [' + this.nl2( e ) + ']'});
        }
        try{
            /* this.ma_trace1('nom_du_fichier='+nom_du_fichier); */
            let m=await import( '..' + nom_du_fichier );
            let o=new m[la_classe_sql]( this , db );
            let ret=o.sql( par , donnees_retournees );
            return ret;
        }catch(e){
            return({"__xst" : __xer ,"__xme" : 'Le sql_' + numero_de_sql + ' comporte une erreur [' + this.nl2( e ) + ']'});
        }
    }
    /*
      =============================================================================================================
    */
    async ouvrir_bdd( chi_id_basedd , reouvrir_la_base=false , pour_connexion=false ){
        /* this.ma_trace1("ouvrir_bdd chi_id_basedd="+chi_id_basedd); */
        if(pour_connexion === true){
        }else{
            if(this.donnees_retournees.chi_id_utilisateur === 0){
                this.donnees_retournees.__xsi[__xer].push( ' Vous n\'etes pas connecté ' );
                throw new Error( 'veuillez utiliser le formulaire de connexion' );
            }
        }
        if(this.donnees_retournees._CA_ === 2){
            chi_id_basedd=1;
        }
        if(reouvrir_la_base === true && this.options_generales.bdd_ouvertes.hasOwnProperty( chi_id_basedd )){
            await this.options_generales.bdd_ouvertes[chi_id_basedd].base.close();
        }
        if(reouvrir_la_base === false
               && this.options_generales.bdd_ouvertes.hasOwnProperty( chi_id_basedd )
               && this.options_generales.bdd_ouvertes[chi_id_basedd] !== null
        ){
            return this.options_generales.bdd_ouvertes[chi_id_basedd].base;
        }
        let chemin_complet_bdd='./__bases_de_donnees/' + 'bdd_' + chi_id_basedd + '.sqlite';
        try{
            /* this.ma_trace1("on ouvre Effectivement la base chemin_complet_bdd="+chemin_complet_bdd); */
            let __db=new Database( chemin_complet_bdd , {"create" : false} );
            let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA foreign_keys=ON;','PRAGMA journal_mode=WAL;','attach database "' + chemin_complet_bdd + '" as b' + chi_id_basedd + ''];
            /* this.ma_trace1("les_pragma_set=",les_pragma_set); */
            if(this.donnees_retournees._CA_ > 2 && this.donnees_retournees.__liste_des_bases.length > 0){
                for( let i=0 ; i < this.donnees_retournees.__liste_des_bases.length ; i++ ){
                    if(chi_id_basedd !== this.donnees_retournees.__liste_des_bases[i]){
                        let chemin_complet_bdd1=this.options_generales.chemin_des_bdd + 'bdd_' + this.donnees_retournees.__liste_des_bases[i] + '.sqlite';
                        les_pragma_set.push( 'attach database "' + chemin_complet_bdd1 + '" as b' + this.donnees_retournees.__liste_des_bases[i] );
                    }
                }
            }
            for(let i in les_pragma_set){
                let a=await __db.exec( les_pragma_set[i] );
            }
            this.options_generales.bdd_ouvertes[chi_id_basedd]={"base" : __db ,"ouverte" : true};
            return __db;
        }catch(e){
            this.ma_trace1( 'impossible d\'ouvrir la base ' + chemin_complet_bdd , this.donnees_retournees._CA_ , e.stack );
            throw new Error( 'erreur sur ' + chemin_complet_bdd );
        }
    }
    /*
      =============================================================================================================
    */
    async ouvrir_bdd_temp( chemin_complet_bdd ){
        try{
            let __db=new Database( chemin_complet_bdd , {"create" : false} );
            let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA foreign_keys=ON;','PRAGMA journal_mode=WAL;'];
            for(let i in les_pragma_set){
                let a=await __db.exec( les_pragma_set[i] );
            }
            return __db;
        }catch(e){
            this.ma_trace1( e.stack );
            throw new Error( 'erreur sur ' + chemin_complet_bdd );
        }
    }
    /*
      =============================================================================================================
    */
    async file_put_contents( chemin_du_fichier , contenu ){
        const encoder=new TextEncoder();
        const data=encoder.encode( contenu );
        try{
            await Deno.writeFile( chemin_du_fichier , data , {"mode" : 0o777} );
        }catch(e){
            this.ma_trace1( 'chemin_du_fichier=' + chemin_du_fichier , 'e=' , e );
        }
    }
    /*
      =============================================================================================================
    */
    async file_get_contents( chemin_du_fichier ){
        const decoder=new TextDecoder( "utf-8" );
        const data=await Deno.readFile( chemin_du_fichier );
        return(decoder.decode( data ));
    }
    /*
      =============================================================================================================
    */
    async scandir( nom_du_dossier ){
        let liste=[];
        try{
            for await (let dirEntry of Deno.readDir( nom_du_dossier )){
                /* this.ma_trace1('dirEntry=',dirEntry); */
                if(dirEntry.isDirectory === true){
                    liste.push( {"type_element" : 'd' ,"nom" : dirEntry.name} );
                }else if(dirEntry.isFile === true){
                    liste.push( {"type_element" : 'f' ,"nom" : dirEntry.name} );
                }
            }
        } catch {}
        return liste;
    }
    /*
      =============================================================================================================
    */
    async is_file( nom_du_fichier ){
        try{
            let fileInfo=await Deno.lstat( nom_du_fichier );
            return fileInfo.isFile;
        }catch(e){
            return false;
        }
    }
    /*
      =============================================================================================================
    */
    async is_dir( nom_du_dossier ){
        try{
            let fileInfo=await Deno.lstat( nom_du_dossier );
            return fileInfo.isDirectory;
        }catch(e){
            return false;
        }
    }
    /*
      =============================================================================================================
    */
    async modifier_valeur_session( cle , valeur ){
        let la_cle=this.options_generales.cle_de_session;
        let session_texte=await Deno.readTextFile( './__sessions/' + la_cle + '.json' );
        let session_json=JSON.parse( session_texte );
        session_json[cle]=valeur;
        await Deno.writeTextFile( './__sessions/' + la_cle + '.json' , JSON.stringify( session_json ) );
    }
    /*
      =============================================================================================================
    */
    async obtenir_les_menus( mat , d ){
        /* , donnees_recues , this.donnees_retournees , options_generales ]{ */
        this.donnees_retournees[__xac]+='m1(n1(__ig1),f1(maj_menu()))';
        this.donnees_retournees[__xva]['les_menu1']='';
        let chemin_fichier0='/__fichiers_generes/__v2_menu_pour_acces_' + this.donnees_retournees.chi_id_acces + '.js';
        let chemin_fichier1='.' + chemin_fichier0;
        if(this.donnees_retournees.chi_id_acces >= 0 && (await this.is_file( chemin_fichier1 ))){
            let modume_menu=await import( '..' + chemin_fichier0 + '?v=' + crypto.randomUUID() );
            let o=new modume_menu['v2_menu_pour_acces_' + this.donnees_retournees.chi_id_acces]( this );
            this.donnees_retournees[__xva]['les_menu1']=o.obtenir_le_html_des_menus( this.donnees_retournees );
        }
        chemin_fichier1='./__fichiers_generes/___autorisations1_pour_acces_' + this.donnees_retournees.chi_id_acces + '_client.json';
        if((await this.is_file( chemin_fichier1 ))){
            let contenu_fichier=await Deno.readTextFile( chemin_fichier1 );
            /* this.ma_trace1("contenu_fichier=",contenu_fichier); */
            this.donnees_retournees[__xva]['__liste_des_autorisations1']=JSON.parse( contenu_fichier );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async retablir_la_connexion_au_ws( mat , d , donnees_recues , donnees_retournees , options_generales ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async obtenir_les_sql( mat , d ){
        /* this.ma_trace1('ici this.donnees_retournees=',this.donnees_retournees); */
        if(this.donnees_retournees.chi_id_projet === 0){
            this.__liste_des_sql={};
            this.donnees_retournees['__liste_des_sql']={};
        }else{
            let chemin_fichier__liste_des_sql='';
            if(this.donnees_retournees._CA_ === 2){
                chemin_fichier__liste_des_sql='../rev_2/__fichiers_generes/__liste_des_sql.json';
            }else{
                chemin_fichier__liste_des_sql='../rev_' + this.donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_sql.json';
            }
            try{
                /* this.ma_trace1('chemin_fichier__liste_des_sql='+chemin_fichier__liste_des_sql); */
                let contenu_texte=await this.file_get_contents( chemin_fichier__liste_des_sql );
                let contenu_json=JSON.parse( contenu_texte );
                this.donnees_retournees['__liste_des_sql']=contenu_json;
                this.__liste_des_sql=contenu_json;
            }catch(e){
                /* this.ma_trace1( 'par ici' ); */
                this.donnees_retournees.__xsi[__xdv].push( 'SERVEUR : le fichier des sql "' + chemin_fichier__liste_des_sql + '" n\'a pas pu être lu<br />' + this.nl2( e ) );
                this.donnees_retournees['__liste_des_sql']={};
            }
        }
    }
    /*
      =============================================================================================================
    */
    async obtenir_les_genres( mat , d ){
        /* , donnees_recues , this.donnees_retournees , options_generales ]{ */
        /* this.ma_trace1('ici this.donnees_retournees.chi_id_projet='+this.donnees_retournees.chi_id_projet); */
        if(this.donnees_retournees.chi_id_projet === 0){
            this.donnees_retournees['__liste_des_genres']={};
            this.__liste_des_genres={};
        }else{
            let chemin_fichier__liste_des_genres='';
            if(this.donnees_retournees._CA_ === 2){
                chemin_fichier__liste_des_genres='../rev_2/__fichiers_generes/__liste_des_genres.json';
            }else{
                chemin_fichier__liste_des_genres='../rev_' + this.donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_genres.json';
            }
            try{
                let contenu_texte=await this.file_get_contents( chemin_fichier__liste_des_genres );
                let contenu_json=JSON.parse( contenu_texte );
                this.donnees_retournees['__liste_des_genres']=contenu_json;
                this.__liste_des_genres=contenu_json;
            }catch(e){
                this.donnees_retournees.__xsi[__xdv].push( 'SERVEUR : le fichier des genres n\'a pas pu être lu<br />' + this.nl2( e ) );
            }
        }
    }
    /*
      =============================================================================================================
    */
    async init0( mat , d ){
        /* , this.donnees_recues , this.donnees_retournees , this.options_generales ]{ */
        let une_erreur_ou_hash_vide=true;
        if(this.donnees_recues['mat_hash'].length > 0){
            await this.appel_fonction( this.donnees_recues['mat_hash'] , 1 );
            this.donnees_retournees[__xac]+=this.donnees_recues[__xva]['__hash'].substr( 1 );
            this.donnees_retournees[__xac]+='m1(n1(__ig1),f1(maj_hash_init(' + this.donnees_recues[__xva]['__hash'].substr( 1 ) + ')))';
            if(this.donnees_retournees[__xac].indexOf( 'init0()' ) < 0){
                this.donnees_retournees[__xac]+=',m1(n1(__ig1),f1(init0()))';
            }
            une_erreur_ou_hash_vide=false;
        }
        if(une_erreur_ou_hash_vide === true){
            this.donnees_retournees[__xac]='m1(n1(' + this.moi + '),f1(affiche_page_d_accueil()))';
            this.donnees_retournees[__xac]+='m1(n1(' + this.moi + '),f1(maj_hash_init(m1(n1(' + this.moi + '),f1(affiche_page_d_accueil())))))';
        }
        await this.obtenir_les_menus( mat , d );
        if(this.donnees_retournees._CA_ === 1 || this.donnees_retournees._CA_ === 2){
            await this.obtenir_les_genres( mat , d );
            await this.obtenir_les_sql( mat , d );
        }
        /* console.clear(); */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    est_num( mot ){
        if( typeof mot === 'number'){
            return true;
        }
        if( typeof mot !== 'string'){
            return false;
        }
        var le_test=!isNaN( mot ) && !isNaN( parseFloat( mot ) );
        return le_test;
    }
    /*
      =============================================================================================================
    */
    nettoyer_chaine_pour_id_vv( txt ){
        let o='';
        for( let i=0 ; i < txt.length ; i++ ){
            let c=txt.substr( i , 1 );
            if(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9' || c == '_'){
                o+=c;
            }else{
                o+='_';
            }
        }
        return o;
    }
    /*
      =============================================================================================================
    */
    arrayBufferToArray( buffer , TypedArrayConstructor=Uint8Array ){
        if(!(buffer instanceof ArrayBuffer)){
            throw new TypeError( "Expected an ArrayBuffer" );
        }
        if( typeof TypedArrayConstructor !== "function"){
            throw new TypeError( "Expected a valid TypedArray constructor" );
        }
        return(Array.from( new TypedArrayConstructor( buffer ) ));
    }
    /*
      =============================================================================================================
    */
    envoyer_un_message_a_l_utilisateur( obj_le_message ){
        let aa={
            "_CA_" : this._CA_ ,
            "__xst" : 1 ,
            "__xva" : obj_le_message.hasOwnProperty( '__xva' ) ? ( obj_le_message ) : ( {} ) ,
            "__xac" : "" ,
            "__xsi" : /* m1(n1(__ig1),f1(affiche_les_messages())) */{0 : [] ,1 : [] ,2 : [] ,3 : [] ,4 : []} ,
            "chi_id_acces" : this.donnees_retournees.chi_id_acces ,
            "chi_id_utilisateur" : this.donnees_retournees.chi_id_utilisateur ,
            "chi_id_projet" : this.donnees_retournees.chi_id_projet ,
            "__version" : this.__version
        };
        if(obj_le_message.hasOwnProperty( '__xme' )
               && obj_le_message.__xme !== ''
               && obj_le_message.hasOwnProperty( '__xst' )
               && obj_le_message.__xst >= 0
               && obj_le_message.__xst <= 4
        ){
            aa.__xsi[obj_le_message.__xst].push( obj_le_message.__xme );
        }else{
            aa.__xsi[__xer].push( 'un message incomplet vous est envoyé par le serveur ' + JSON.stringify( obj_le_message ) );
        }
        try{
            this.__socket.send( JSON.stringify( aa ) );
        } catch {}
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    formatter_erreur_serveur( str ){
        let o=str;
        const repl0=new RegExp( this.repertoire_du_pgm_serveur , 'g' );
        o=o.replace( repl0 , '' );
        const repl1=new RegExp( 'file:////' , 'g' );
        o=o.replace( repl1 , '' );
        o=o.replace( /\n/g , '<br />\n' );
        return o;
    }
    /*
      =============================================================================================================
    */
    nl2( e_originale ){
        var e=null;
        if(e_originale !== undefined){
            e=e_originale;
        }else{
            e=new Error();
        }
        if(!e.stack){
            try{
                /* IE ?? */
                throw e;
            }catch(e){
                if(!e.stack){
                    /* IE < 10 ? */
                    if(e.message){
                        let message=e.message;
                        if(e.lineno){
                            message+=' ^G ' + e.lineno;
                        }
                        if(e.filename){
                            message+=' ' + e.filename;
                        }
                        return message;
                    }else{
                        return 0;
                    }
                }
            }
        }
        var nom_fonction='';
        /* Un grand merci à https://rgx.tools/ */
        if(e_originale !== undefined){
            var stack=e.stack.toString().split( /\r\n|\n/ );
            /* We want our caller's frame. It's index into |stack| depends on the */
            /* browser and browser version, so we need to search for the second frame: */
            var modele_champ_erreur=/:(\d+):(?:\d+)[^\d]*$/;
            var modele_champ_erreur2=/:(\d+):(\d+).*$/;
            var continuer=50;
            do{
                var ligne_erreur=stack.shift();
                try{
                    if(ligne_erreur.indexOf( ' at ' ) >= 0){
                        if(modele_champ_erreur2.exec( ligne_erreur ) !== null){
                            continuer=-1;
                        }
                    }
                }catch(e3){
                    continuer=-2;
                }
                continuer--;
            }while(continuer > 0 && stack.length > 0);
            if(continuer === -2){
                /* at nom_fonction (http://localhost/a/b/c/js/fichier.js:25:15) */
                /* var texte_erreur=stack.shift(); */
                var texte_erreur=ligne_erreur;
                var nom_fichier=texte_erreur.match( /\/([^\/:]+):/ )[1];
                nom_fonction='';
                if(texte_erreur.match( / at ([^\.]+) \(/ ) === null){
                    if(texte_erreur.match( / at ([^]+) \(/ ) === null){
                        if(texte_erreur.match( /([^]+)\/([^]+)/ )[2] !== null){
                            nom_fonction='erreur javascript ' + texte_erreur.match( /([^]+)\/([^]+)/ )[2];
                        }
                    }else{
                        nom_fonction=texte_erreur.match( / at ([^]+) \(/ )[1];
                    }
                }else{
                    nom_fonction=texte_erreur.match( / at ([^\.]+) \(/ )[1];
                }
                var libelle_erreur='';
                try{
                    libelle_erreur='<br />' + e.stack.toString().split( /\r\n|\n/ )[0];
                } catch {}
                var numero_de_ligne=modele_champ_erreur.exec( texte_erreur )[1];
                return((libelle_erreur == '' ? ( '' ) : ( '<b>' + libelle_erreur + '</b><br />' )) + '^G ' + numero_de_ligne + ' ' + nom_fichier + ' ' + nom_fonction + ' ');
            }else{
                /* console.error( e_originale ); */
                return('Voir la console pour le numéro de ligne <br /> ' + e.stack.toString());
            }
        }else{
            var stack=e.stack.toString().split( /\r\n|\n/ );
            /* We want our caller's frame. It's index into |stack| depends on the */
            /* browser and browser version, so we need to search for the second frame: */
            var modele_champ_erreur=/:(\d+):(?:\d+)[^\d]*$/;
            do{
                var ligne_erreur=stack.shift();
            }while(!modele_champ_erreur.exec( ligne_erreur ) && stack.length);
            /* at nom_fonction (http://localhost/a/b/c/js/fichier.js:25:15) */
            var texte_erreur=stack.shift();
            var nom_fichier=texte_erreur.match( /\/([^\/:]+):/ )[1];
            if(texte_erreur.match( / at ([^\.]+) \(/ ) === null){
                if(texte_erreur.match( / at ([^]+) \(/ ) === null){
                    /*
                      dans firefox, il n'y a pas de " at ":
                      #traite_inline@http://www.exemple.fr/toto.js:290:31
                    */
                    if(texte_erreur.match( /([^]+)@/ )){
                        nom_fonction=texte_erreur.match( /([^]+)@/ )[1];
                    }
                }else{
                    nom_fonction=texte_erreur.match( / at ([^]+) \(/ )[1];
                }
            }else{
                nom_fonction=texte_erreur.match( / at ([^\.]+) \(/ )[1];
            }
            var numero_de_ligne=modele_champ_erreur.exec( texte_erreur )[1];
            return('^G ' + nom_fichier + ' ' + nom_fonction + ' ' + numero_de_ligne + ' ');
        }
    }
}
export{__ig1 as __ig1};