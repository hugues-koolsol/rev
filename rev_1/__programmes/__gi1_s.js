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
/*  */
import {__fnt1} from "./__fnt1_.js";
import {__rev1} from "./__rev1_.js";
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
import {crypto} from "jsr:@std/crypto";
class __gi1{
    moi='__gi1';
    /* clé de l'application */
    _CA_=0;
    /* module des fonctions générales */
    __fnt1=null;
    /* module de convertions des sources rev */
    __rev1=null;
    repertoire_racine_de_tous_les_projets='';
    repertoire_du_pgm_serveur='';
    repertoire_des_programmes='';
    /* 0 1 ou 2 */
    __deverminage=0;
    /*  */
    /* les signaux de type 0:erreur/1:succès/alarme/information/déverminage */
    __xsi={0 : [] ,1 : [] ,2 : [] ,3 : [] ,4 : []};
    __liste_des_genres={};
    __liste_des_sql={};
    objet_des_modules_charges={"__gi1" : this};
    autorisations_verifiees=false;
    /*
      =============================================================================================================
    */
    constructor( _CA_ , repertoire_du_pgm_serveur , repertoire_des_programmes , repertoire_racine_de_tous_les_projets , __deverminage ){
        /* console.log('constructor de '+this.moi) */
        this.__fnt1=new __fnt1( [] , 0 , this );
        this.__rev1=new __rev1( this );
        this.objet_des_modules_charges['__fnt1']=this.__fnt1;
        this.objet_des_modules_charges['__rev1']=this.__rev1;
        this._CA_=_CA_;
        this.repertoire_du_pgm_serveur=repertoire_du_pgm_serveur;
        this.repertoire_des_programmes=repertoire_des_programmes;
        this.repertoire_racine_de_tous_les_projets=repertoire_racine_de_tous_les_projets;
        this.__deverminage=__deverminage;
    }
    /*
      =============================================================================================================
    */
    ajoute_message( obj ){
        this.ma_trace1( 'dans ajoute_message, obj=' , obj );
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
    bug1( donnees_retournees , ...elts ){
        let s='';
        for(let x of elts){
            if( typeof x === 'string'){
                s+=x.replace( /&/g , '&amp;' ).replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /\r/g , '' ).replace( /\n/g , '<br />' );
            }else if( typeof x === 'object'){
                s+=JSON.stringify( x );
            }else{
                console.log(  typeof x , x );
                s+=x;
            }
        }
        let e=new Error();
        let chaine_position=e.stack.split( '\n' )[2];
        let pos1=chaine_position.indexOf( '/rev_' + donnees_retournees._CA_ + '/' );
        let pos2=chaine_position.substr( 0 , pos1 ).lastIndexOf( '(' );
        let chaine_position1=chaine_position.substr( 0 , pos2 );
        let pos3=chaine_position.lastIndexOf( ':' );
        let pos4=chaine_position.substr( 0 , pos3 ).lastIndexOf( ':' );
        let chaine_position2=chaine_position.substr( pos4 ).replace( /\)/ , '' );
        let endroit=chaine_position1 + chaine_position2;
        donnees_retournees.__xsi[__xer].push( s + endroit );
        this.ma_trace1( donnees_retournees );
        return({"__xst" : __xer ,"__xme" : s});
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
        e=e.replace( /file\:\/\/\// , '' ).replace( this.repertoire_du_pgm_serveur , '' ).replace( /    at/ , '' );
        e=e.substr( e.indexOf( '.' ) );
        e=e.replace( /__programmes\// , '' );
        console.log( '->' + e );
        for(let a of p){
            console.log( a );
        }
        console.log( '' );
    }
    /*
      =============================================================================================================
    */
    async afficher_les_dependances1( obj1 , donnees_retournees ){
        let chemin_fichier__liste_des_dependances='../rev_' + donnees_retournees._CA_ + '/__fichiers_generes/__liste_des_dependances_bases.json';
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
                        donnees_retournees.__xsi[__xer].push( '<b>Il existe des enregistrements dépendants dans la table des ' + les_dependances[i]['table_dependante'].replace( 'tbl_' , '' ) + '</b>' );
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    async tester_les_dependances1( obj1 , donnees_retournees ){
        let les_erreurs=0;
        let chemin_fichier__liste_des_dependances='../rev_' + donnees_retournees._CA_ + '/__fichiers_generes/__liste_des_dependances_bases.json';
        let contenu_texte_fichier__liste_des_dependances=await this.file_get_contents( chemin_fichier__liste_des_dependances );
        let contenu_json_fichier__liste_des_dependances=JSON.parse( contenu_texte_fichier__liste_des_dependances );
        if(contenu_json_fichier__liste_des_dependances.hasOwnProperty( obj1.table_parente + '_' + obj1.champ_parent )){
            let les_dependances=contenu_json_fichier__liste_des_dependances[obj1.table_parente + '_' + obj1.champ_parent]['dependances'];
            /* this.ma_trace1('les_dependances=',les_dependances); */
            for(let i in les_dependances){
                let sql1='SELECT count( * ) FROM ' + les_dependances[i]['table_dependante'] + ' WHERE ' + les_dependances[i]['champ_dependant'] + ' = ' + obj1['id_enregistrement'];
                /* this.ma_trace1('sql1='+sql1); */
                let statement1=await obj1.__db1.prepare( sql1 );
                let lignes=await statement1.values();
                await statement1.finalize();
                for(let numero_de_ligne in lignes){
                    if(lignes[numero_de_ligne][0] > 0){
                        let tt='<b>Il existe des enregistrements dépendants dans la table des ' + les_dependances[i]['table_dependante'].replace( 'tbl_' , '' ) + '</b>';
                        /* this.ma_trace1('tt=',tt); */
                        this.__xsi[__xer].push( tt );
                        les_erreurs++;
                    }
                }
            }
        }
        if(les_erreurs > 0){
            return({"__xst" : __xer});
        }else{
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    async sql_iii( numero_de_sql , par , donnees_retournees , db=null ){
        let la_classe_sql='sql_' + numero_de_sql;
        let nom_du_fichier='/__fichiers_generes/__sqls/' + la_classe_sql + '.js';
        if(!this.is_file( '..' + nom_du_fichier )){
            this.__xsi[__xer].push( 'Le fichier sql_' + numero_de_sql + ' n\'a pas été trouvé [' + this.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        try{
            /* this.ma_trace1('nom_du_fichier='+nom_du_fichier); */
            let m=await import( '..' + nom_du_fichier );
            let o=new m[la_classe_sql]( this , db );
            let ret=o.sql( par , donnees_retournees );
            return ret;
        }catch(e){
            this.__xsi[__xer].push( 'Le sql_' + numero_de_sql + ' comporte une erreur [' + this.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async ouvrir_bdd( chi_id_projet , donnees_retournees , options_generales , reouvrir_la_base=false ){
        if(donnees_retournees.chi_id_utilisateur === 0){
            donnees_retournees.__xsi[__xer].push( ' Vous n\'etes pas connecté ' );
            throw new Error( 'veuillez utiliser le formulaire de connexion' );
        }
        this.ma_trace1('reouvrir_la_base',reouvrir_la_base);
        this.ma_trace1('chi_id_projet=',chi_id_projet,'options_generales=',options_generales);
        if(reouvrir_la_base === true && options_generales.bdd_ouvertes.hasOwnProperty( chi_id_projet )){
            await options_generales.bdd_ouvertes[chi_id_projet].base.close();
        }
        if(reouvrir_la_base === false && options_generales.bdd_ouvertes.hasOwnProperty( chi_id_projet )){
            this.ma_trace1('condition OK chi_id_projet=',chi_id_projet);
            return options_generales.bdd_ouvertes[chi_id_projet].base;
        }
        /*
          if(options_generales.bdd_ouvertes.hasOwnProperty(chi_id_projet)){
          this.ma_trace1('déjà ouverte '+chi_id_projet);
          return options_generales.bdd_ouvertes[chi_id_projet].base;
          }
        */
        let chemin_complet_bdd=options_generales.chemin_des_bdd + 'bdd_' + chi_id_projet + '.sqlite';
        try{
            let __db=new Database( chemin_complet_bdd , {"create" : false} );
            let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA foreign_keys=ON;','PRAGMA journal_mode=WAL;','attach database "' + chemin_complet_bdd + '" as b' + chi_id_projet + ''];
            for(let i in les_pragma_set){
                let a=await __db.exec( les_pragma_set[i] );
            }
            options_generales.bdd_ouvertes[chi_id_projet]={"base" : __db ,"ouverte" : true};
            return __db;
        }catch(e){
            console.log( e.stack );
            throw new Error( 'erreur sur ' + chemin_complet_bdd );
        }
    }
    /*
      =============================================================================================================
    */
    async ouvrir_bdd_temp( chemin_complet_bdd , donnees_retournees , options_generales ){
        try{
            let __db=new Database( chemin_complet_bdd , {"create" : false} );
            let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA foreign_keys=ON;','PRAGMA journal_mode=WAL;'];
            for(let i in les_pragma_set){
                let a=await __db.exec( les_pragma_set[i] );
            }
            return __db;
        }catch(e){
            console.log( e.stack );
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
    async modifier_valeur_session( options_generales , cle , valeur ){
        let la_cle=options_generales.cle_de_session;
        /* this.ma_trace1('modifier_valeur_session',options_generales,cle,valeur); */
        let session_texte=await Deno.readTextFile( './__sessions/' + la_cle + '.json' );
        let session_json=JSON.parse( session_texte );
        session_json[cle]=valeur;
        await Deno.writeTextFile( './__sessions/' + la_cle + '.json' , JSON.stringify( session_json ) );
        /* console.log('session_texte=',session_texte); */
    }
    /*
      =============================================================================================================
    */
    async obtenir_les_menus( mat , d , donnees_recues , donnees_retournees , options_generales ){
        donnees_retournees[__xac]+='m1(n1(__gi1),f1(maj_menu()))';
        donnees_retournees[__xva]['les_menu1']='';
        let chemin_fichier0='/__fichiers_generes/__v2_menu_pour_acces_' + donnees_retournees.chi_id_acces + '.js';
        let chemin_fichier1='.' + chemin_fichier0;
        if(donnees_retournees.chi_id_acces > 0 && (await this.is_file( chemin_fichier1 ))){
            let modume_menu=await import( '..' + chemin_fichier0 + '?v=' + crypto.randomUUID() );
            let o=new modume_menu['v2_menu_pour_acces_' + donnees_retournees.chi_id_acces];
            donnees_retournees[__xva]['les_menu1']=o.obtenir_le_html_des_menus( donnees_retournees );
        }
    }
    /*
      =============================================================================================================
    */
    async appel_fonction( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* this.ma_trace1('dans appel_fonction'); */
        let continuer=true;
        let l01=mat.length;
        for( let i=1 ; i < l01 && continuer === true ; i=mat[i][12] ){
            /* this.ma_trace1('mat[i][1]='+mat[i][1]); */
            if(mat[i][1] === 'pm1' && mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 && continuer === true ; j=mat[j][12] ){
                    if(mat[j][1] === 'm1' && mat[j][2] === 'f'){
                        let n1='';
                        for( let k=j + 1 ; k < l01 && continuer === true ; k=mat[k][12] ){
                            if(mat[k][1] === 'n1' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                                n1=mat[k + 1][1];
                            }
                        }
                        /* this.ma_trace1( 'n1="' + n1 + '"' ); */
                        if(n1 !== ''){
                            /* this.ma_trace1('this.autorisations_verifiees=',this.autorisations_verifiees); */
                            if(this.autorisations_verifiees !== true){
                                if(donnees_retournees.chi_id_utilisateur === 1){
                                    /* l'utilisateur 1 a droit à tout */
                                    this.autorisations_verifiees=true;
                                }else{
                                    let chemin_des_autorisations='./__fichiers_generes/___autorisations1_pour_acces_' + donnees_retournees.chi_id_acces + '_.json';
                                    try{
                                        let contenu_texte=await this.file_get_contents( chemin_des_autorisations );
                                        let contenu_json=JSON.parse( contenu_texte );
                                        if(contenu_json.hasOwnProperty( n1 )){
                                            this.autorisations_verifiees=true;
                                        }
                                    }catch(e){
                                        this.__xsi[__xdv].push( 'erreur de lecture du fichier des autorisations ' + this.nl2( e ) );
                                        this.ma_trace1( 'erreur de lecture du fichier des autorisations ' + this.nl2( e ) );
                                        continuer=false;
                                    }
                                }
                            }
                            if(this.autorisations_verifiees === false){
                                this.__xsi[__xdv].push( 'SERVEUR : accès non autorisé à "' + n1 + '" êtes vous connecté ?<a class="yy__1" href="./#pm1(m1(n1(_connexion1),f1(page_connexion1())))">connexion</a>' );
                                continuer=false;
                            }
                            for( let k=j + 1 ; k < l01 && continuer === true ; k=mat[k][12] ){
                                let position_f1=0;
                                let nom_de_la_fonction_a_appeler='';
                                if(mat[k][1] === 'f1' && mat[k][2] === 'f'){
                                    for( let l=k + 1 ; l < l01 && continuer === true ; l=mat[l][12] ){
                                        if(mat[l][1] !== '' && mat[l][2] === 'f'){
                                            position_f1=l;
                                            let nom_de_la_fonction_a_appeler=mat[position_f1][1];
                                            /* this.ma_trace1('\n\nn1="'+n1+'"' , 'nom_de_la_fonction_a_appeler=' , nom_de_la_fonction_a_appeler , 'objet_des_modules_charges=',this.objet_des_modules_charges); */
                                            let m=null;
                                            let nom_du_fichier='';
                                            if(n1.slice( -1 ) === '_'){
                                                nom_du_fichier='./' + n1 + '.js';
                                            }else{
                                                nom_du_fichier='./' + n1 + '_s.js';
                                            }
                                            /* this.ma_trace1('nom_du_fichier='+nom_du_fichier,this.objet_des_modules_charges[n1]); */
                                            if(this.objet_des_modules_charges[n1] !== undefined){
                                            }else{
                                                /*
                                                  console.log('this.repertoire_du_pgm_serveur='+this.repertoire_du_pgm_serveur)
                                                  console.log('this.repertoire_des_programmes='+this.repertoire_des_programmes)
                                                */
                                                let chemin_du_module='';
                                                if(options_generales.mode_cron){
                                                    chemin_du_module=this.repertoire_du_pgm_serveur + '/' + this.repertoire_des_programmes + nom_du_fichier;
                                                }else{
                                                    chemin_du_module=this.repertoire_du_pgm_serveur + '/' + this.repertoire_des_programmes + nom_du_fichier;
                                                }
                                                /* this.ma_trace1('chemin_du_module'+chemin_du_module); */
                                                let le_module_existe=await this.is_file( chemin_du_module );
                                                /* this.ma_trace1('le_module_existe='+(le_module_existe?'true':'false')); */
                                                if(le_module_existe === false){
                                                    /* this.ma_trace1('le fichier "' + chemin_du_module + '" n\'a pas été trouvé sur disque'); */
                                                    this.__xsi[__xdv].push( 'SERVEUR : le fichier "' + nom_du_fichier + '" est introuvable ' + this.nl2() );
                                                    continuer=false;
                                                    continue;
                                                }else{
                                                    try{
                                                        m=await import( nom_du_fichier );
                                                        /* this.ma_trace1('le module est importé de '+nom_du_fichier); */
                                                        /* this.__xsi[__xif].push('chargement du module module "'+nom_du_fichier+'" pour la fonction '+nom_de_la_fonction_a_appeler+'()' + this.nl2()); *_/ */
                                                    }catch(e){
                                                        const repl0=new RegExp( options_generales.repertoire_du_pgm_serveur , 'g' );
                                                        this.ma_trace1( 'pile erreur 0=' , e.stack.replace( repl0 , '' ) );
                                                        this.__xsi[__xdv].push( 'debug erreur de chargement du module "' + nom_du_fichier + '" pour la fonction ' + nom_de_la_fonction_a_appeler + '()' + this.nl2( e ) );
                                                        continue;
                                                    }
                                                    try{
                                                        let o=new m[n1]( this );
                                                        /* this.ma_trace1('o=',o); */
                                                        this.objet_des_modules_charges[n1]=o;
                                                    }catch(e){
                                                        this.__xsi[__xdv].push( ' erreur new ' + n1 + ' ' + this.nl2( e ) );
                                                        this.ma_trace1( ' erreur new ' + n1 + ' ' + this.nl2( e ) );
                                                        continuer=false;
                                                        continue;
                                                    }
                                                }
                                                /* console.log( 'this.objet_des_modules_charges=',this.objet_des_modules_charges ); */
                                            }
                                            /* this.ma_trace1('continuer=',(continuer?'true':'false')); */
                                            if(continuer === true){
                                                let ret=null;
                                                try{
                                                    ret=await this.objet_des_modules_charges[n1][nom_de_la_fonction_a_appeler]( mat , position_f1 , donnees_recues , donnees_retournees , options_generales );
                                                    /* this.ma_trace1('après appel de la fonction du module, ret=',ret); */
                                                    if(ret === undefined){
                                                        this.__xsi[__xer].push( 'SERVEUR : il manque "return({__xst:__xsu});" à ' + n1 + '_s.' + nom_de_la_fonction_a_appeler + '() ' );
                                                        continuer=false;
                                                    }else{
                                                        /* console.log('ret=',ret,this.nl2()); */
                                                        if(ret.__xst !== __xsu){
                                                            if(ret.__xst === __xer){
                                                                continuer=false;
                                                            }
                                                        }else{
                                                            donnees_retournees.__xst=ret.__xst;
                                                        }
                                                    }
                                                }catch(e){
                                                    const repl0=new RegExp( options_generales.repertoire_du_pgm_serveur , 'g' );
                                                    this.ma_trace1( 'pile erreur 1=' , e.stack.replace( repl0 , '' ) );
                                                    this.__xsi[__xer].push( 'SERVEUR : ' + nom_du_fichier + '.' + nom_de_la_fonction_a_appeler + '() n\'existe pas ou bien contient une erreur<br />' + this.nl2( e ) );
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
            }
        }
        /* this.ma_trace1('continuer='+continuer); */
        if(continuer === true){
            return({"__xst" : __xsu});
        }else{
            if(donnees_retournees.__xst !== __xsu){
                return({"__xst" : donnees_retournees.__xst});
            }else{
                return({"__xst" : __xer});
            }
        }
    }
    /*
      =============================================================================================================
    */
    async obtenir_les_sql( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* this.ma_trace1('ici donnees_retournees=',donnees_retournees); */
        if(donnees_retournees.chi_id_projet === 0){
            this.__liste_des_sql={};
            donnees_retournees['__liste_des_sql']={};
            donnees_retournees[__xac]+='m1(n1(_developpement1_),f1(maj_liste_des_sql()))';
        }else{
            let chemin_fichier__liste_des_sql='';
            if(donnees_retournees._CA_ === 2){
                chemin_fichier__liste_des_sql='../rev_2/__fichiers_generes/__liste_des_sql.json';
            }else{
                chemin_fichier__liste_des_sql='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_sql.json';
            }
            try{
                /* this.ma_trace1('chemin_fichier__liste_des_sql='+chemin_fichier__liste_des_sql); */
                let contenu_texte=await this.file_get_contents( chemin_fichier__liste_des_sql );
                let contenu_json=JSON.parse( contenu_texte );
                donnees_retournees['__liste_des_sql']=contenu_json;
                this.__liste_des_sql=contenu_json;
                donnees_retournees[__xac]+='m1(n1(_developpement1_),f1(maj_liste_des_sql()))';
            }catch(e){
                /* this.ma_trace1( 'par ici' ); */
                this.__xsi[__xdv].push( 'SERVEUR : le fichier des sql n\'a pas pu être lu<br />' + this.nl2( e ) );
                donnees_retournees['__liste_des_sql']={};
                donnees_retournees[__xac]+='m1(n1(_developpement1_),f1(maj_liste_des_sql()))';
            }
        }
    }
    /*
      =============================================================================================================
    */
    async obtenir_les_genres( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* this.ma_trace1('ici donnees_retournees.chi_id_projet='+donnees_retournees.chi_id_projet); */
        if(donnees_retournees.chi_id_projet === 0){
            donnees_retournees['__liste_des_genres']={};
            this.__liste_des_genres={};
            donnees_retournees[__xac]+='m1(n1(_developpement1_),f1(maj_liste_des_genres()))';
        }else{
            let chemin_fichier__liste_des_genres='';
            if(donnees_retournees._CA_ === 2){
                chemin_fichier__liste_des_genres='../rev_2/__fichiers_generes/__liste_des_genres.json';
            }else{
                chemin_fichier__liste_des_genres='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_genres.json';
            }
            try{
                let contenu_texte=await this.file_get_contents( chemin_fichier__liste_des_genres );
                let contenu_json=JSON.parse( contenu_texte );
                donnees_retournees['__liste_des_genres']=contenu_json;
                this.__liste_des_genres=contenu_json;
                donnees_retournees[__xac]+='m1(n1(_developpement1_),f1(maj_liste_des_genres()))';
            }catch(e){
                this.__xsi[__xdv].push( 'SERVEUR : le fichier des genres n\'a pas pu être lu<br />' + this.nl2( e ) );
            }
        }
    }
    /*
      =============================================================================================================
    */
    async init0( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let une_erreur_ou_hash_vide=true;
        if(donnees_recues['mat_hash'].length > 0){
            await this.appel_fonction( donnees_recues['mat_hash'] , 1 , donnees_recues , donnees_retournees , options_generales );
            donnees_retournees[__xac]+=donnees_recues[__xva]['__hash'].substr( 1 );
            donnees_retournees[__xac]+='m1(n1(__gi1),f1(maj_hash_init(' + donnees_recues[__xva]['__hash'].substr( 1 ) + ')))';
            if(donnees_retournees[__xac].indexOf( 'init0()' ) < 0){
                donnees_retournees[__xac]+=',m1(n1(__gi1),f1(init0()))';
            }
            une_erreur_ou_hash_vide=false;
        }
        if(une_erreur_ou_hash_vide === true){
            donnees_retournees[__xac]='m1(n1(' + this.moi + '),f1(affiche_page_d_accueil()))';
            donnees_retournees[__xac]+='m1(n1(' + this.moi + '),f1(maj_hash_init(m1(n1(' + this.moi + '),f1(affiche_page_d_accueil())))))';
        }
        /* this.__xsi[__xdv].push('debug ' + donnees_retournees.chi_id_utilisateur + this.nl2()); */
        donnees_retournees.__xst=__xsu;
        await this.obtenir_les_menus( mat , d , donnees_recues , donnees_retournees , options_generales );
        if(donnees_retournees._CA_ === 1 || donnees_retournees._CA_ === 2){
            await this.obtenir_les_genres( mat , d , donnees_recues , donnees_retournees , options_generales );
            await this.obtenir_les_sql( mat , d , donnees_recues , donnees_retournees , options_generales );
        }
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
export{__gi1 as __gi1};