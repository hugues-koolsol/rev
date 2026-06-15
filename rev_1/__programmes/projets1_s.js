const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
/*
  =====================================================================================================================
*/
class projets1{
    /*
      =========================== fragment ========================================================================
    */
    async vacuum_et_checkpoint( mat , d ){
        let nom_fichier='bdd_' + this.__ig1.donnees_retournees.chi_id_projet;
        let chemin_bdd=(this.__ig1.options_generales.chemin_des_bdd + nom_fichier) + '.sqlite';
        /* this.__ig1.ma_trace1("chemin_bdd="+chemin_bdd); */
        let __db=null;
        try{
            __db=new Database( chemin_bdd , {"create" : false} );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        try{
            let cmd='';
            cmd+='VACUUM;';
            cmd+='PRAGMA journal_mode = OFF;';
            cmd+='PRAGMA wal_checkpoint(FULL);';
            await __db.exec( cmd );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        let chemin_fichier_wal=(this.__ig1.options_generales.chemin_des_bdd + nom_fichier) + '.sqlite-wal';
        let chemin_fichier_shm=(this.__ig1.options_generales.chemin_des_bdd + nom_fichier) + '.sqlite-shm';
        try{
            if((await this.__ig1.is_file( chemin_fichier_wal ))){
                await Deno.remove( chemin_fichier_wal );
            }
            if((await this.__ig1.is_file( chemin_fichier_shm ))){
                await Deno.remove( chemin_fichier_shm );
            }
        }catch(e){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        try{
            __db.close();
        }catch(e){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        /*
          
        */
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async creer_le_repertoire_racine( mat , d ){
        /* , this.__ig1.donnees_recues , this.__ig1.donnees_retournees , this.__ig1.options_generales ]{ */
        let chi_id_projet=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_projet'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_projet=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_projet >= 3){
            let repertoire_racine_du_projet=this.__ig1.options_generales.repertoire_racine_de_tous_les_projets + 'rev_' + chi_id_projet;
            if((await this.__ig1.is_dir( repertoire_racine_du_projet ))){
                return({"__xst" : __xer ,"__xme" : 'le répertoire racine de ce projet existe déjà'});
            }
            try{
                await Deno.mkdir( repertoire_racine_du_projet , {"mode" : 0o777} );
                this.__ig1.donnees_retournees.__xsi[__xif].push( 'le dossier a été créé du disque [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xsu});
            }catch(e){
                this.__ig1.donnees_retournees.__xsi[__xer].push( 'Erreur lors de la création du dossier [' + this.__ig1.nl2( e ) + ']' );
            }
        }
        return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
    }
    /*
      =========================== fragment ========================================================================
    */
    async sauvegarder_la_base_systeme( mat , d ){
        let chi_id_projet=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_projet' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_projet=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_projet > 0){
            let m=await import( './bdds1_s.js' );
            let o=new m['bdds1']( this.__ig1 );
            let obj=await o.dump_de_la_base( mat , d , chi_id_projet );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
    }
    /*
      =========================== fragment ========================================================================
    */
    async rcopydir( dir1 , dir2 ){
        /*
          copie récursive des fichiers et dossiers de revxxx_1 dans revxxx_2
        */
        if(!(await this.__ig1.is_dir( dir2 ))){
            /* this.__ig1.ma_trace1(dir1,dir2); */
            try{
                /* this.__ig1.ma_trace1('chemin='+chemin); */
                await Deno.mkdir( dir2 , {"mode" : 0o777} );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : 'Erreur lors de la création du dossier [' + this.__ig1.nl2( e ) + ']'});
            }
        }
        let objects=await this.__ig1.scandir( dir1 );
        for(let objet in objects){
            if(objects[objet].type_element === 'd'){
                let obj=await this.rcopydir( dir1 + '/' + objects[objet].nom , dir2 + '/' + objects[objet].nom );
                if(obj.__xst !== __xsu){
                    return({
                            "__xst" : __xer ,
                            "__xme" : 'Erreur INTERNE lors de la copie du dossier de "' + dir1 + '/' + objects[objet].nom + '" vers "' + dir2 + '/' + object + '" [' + this.__ig1.nl2( e ) + ']'
                        });
                }
            }else{
                let nom1=dir1 + '/' + objects[objet].nom;
                let fichier1=nom1.replace( /\.\/rev_1/g , '' );
                try{
                    /* this.__ig1.ma_trace1(dir1 + '/' + objects[objet].nom , dir2 + '/' + objects[objet].nom ); */
                    await Deno.copyFile( dir1 + '/' + objects[objet].nom , dir2 + '/' + objects[objet].nom );
                }catch(e){
                    return({
                            "__xst" : __xer ,
                            "__xme" : 'Erreur INTERNE lors de la copie du fichier de "' + dir1 + '/' + objects[objet].nom + '" vers "' + dir2 + '/' + objects[objet].nom + '" [' + this.__ig1.nl2( e ) + ']'
                        });
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async initialiser_le_clone( mat , d ){
        /*
          fonction utilisée seulement dans rev_2
        */
        this.__ig1.donnees_retournees.chi_id_projet=1;
        if(this.__ig1.donnees_retournees._CA_ !== 2){
            return({"__xst" : __xer ,"__xme" : 'erreur de création du dossier rev_2 ' + this.__ig1.nl2( e )});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        let criteres_1409={"chi_id_projet" : 2};
        let tt1409=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_projets
        WHERE `chi_id_projet` >= :chi_id_projet ;
        */
        /*sql_inclure_fin*/ 1409 , criteres_1409 , this.__ig1.donnees_retournees , __db1 );
        /* this.__ig1.ma_trace1( 'tt1409=' , tt1409 ); */
        if(tt1409.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'erreur lors du begin transaction [' + this.__ig1.nl2() + ']'});
        }
        this.__ig1.donnees_retournees.chi_id_projet=0;
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async initialiser_projet_2( mat , d ){
        /*
          on fabrique un clone du projet 1 sur le projet 2 
          on commence par supprimer tous les fichiers et dossiers sour frev/rev_2 puis on recrée
        */
        let chemin_racine2='../rev_2';
        /* __CHEMIN_ABSOLU_SITE__ . 'rev_2'; */
        try{
            await Deno.remove( chemin_racine2 , {"recursive" : true} );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : 'erreur de suppression du dossier rev_2 ' + this.__ig1.nl2( e )});
        }
        try{
            await Deno.mkdir( chemin_racine2 , {"mode" : 0o777} );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : 'erreur de création du dossier rev_2 ' + this.__ig1.nl2( e )});
        }
        let chemin_racine1='../rev_1';
        let obj=await this.rcopydir( chemin_racine1 , chemin_racine2 , this.__ig1.donnees_retournees );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'la copie récursive des fichiers n\'a pas fonctionné [' + this.__ig1.nl2() + ']'});
        }
        return({"__xst" : __xsu ,"__xme" : 'le projet 2 a été initialisé [' + this.__ig1.nl2() + ']'});
    }
    /*
      =========================== fragment ========================================================================
    */
    async desactiver1( mat , d ){
        this.__ig1.donnees_retournees.chi_id_projet=0;
        this.__ig1.__session_json.__autorisations_serveur={};
        this.__ig1.reecrire_fichier_session();
        await this.__ig1.modifier_valeur_session( 'chi_id_projet' , this.__ig1.donnees_retournees.chi_id_projet );
        await this.__ig1.obtenir_les_menus( mat , d );
        await this.__ig1.obtenir_les_genres( mat , d );
        await this.__ig1.obtenir_les_sql( mat , d );
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async activer1( mat , d ){
        let chi_id_projet=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_projet'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_projet=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.__ig1.donnees_retournees.chi_id_projet=chi_id_projet;
        this.__ig1.__session_json.__autorisations_serveur={};
        this.__ig1.reecrire_fichier_session();
        await this.__ig1.modifier_valeur_session( 'chi_id_projet' , this.__ig1.donnees_retournees.chi_id_projet );
        await this.__ig1.obtenir_les_menus( mat , d );
        await this.__ig1.obtenir_les_genres( mat , d );
        await this.__ig1.obtenir_les_sql( mat , d );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
        if(this.__ig1.donnees_retournees.chi_id_projet > 2){
            /* on va modifier la base 3,4,... */
            let chemin_complet_bdd=this.__ig1.options_generales.chemin_des_bdd + 'bdd_' + this.__ig1.donnees_retournees.chi_id_projet + '.sqlite';
            let __db=new Database( chemin_complet_bdd , {"create" : false} );
            let donnees_sql={
                "n_chp_nom_projet" : form['chp_nom_projet'] ,
                "n_cht_commentaire_projet" : form['cht_commentaire_projet'] ,
                "c_chi_id_projet" : this.__ig1.donnees_retournees.chi_id_projet
            };
            let tt1172=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_projets SET 
               `chp_nom_projet` = :n_chp_nom_projet , 
               `cht_commentaire_projet` = :n_cht_commentaire_projet
            WHERE `chi_id_projet` = :c_chi_id_projet ;
            */
            /*sql_inclure_fin*/ 1172 , donnees_sql , this.__ig1.donnees_retournees , __db );
            if(tt1172.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt1172.__xme});
            }
            await __db.close();
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){
        if(__xva_avant['T0.chi_id_projet'] <= 3){
            return({"__xst" : __xer ,"__xme" : 'ce projet ne peut pas être supprimé [' + this.__ig1.nl2( e ) + ']'});
        }
        let chemin='../rev_' + __xva_avant['T0.chi_id_projet'];
        if(!this.__ig1.is_dir( chemin )){
            return({"__xst" : __xsu});
        }
        let amj=this.__ig1.donnees_retournees.date_heure_serveur;
        /* yyyy-MM-dd HH:mm:ss.SSS */
        let chemin_date=amj.substr( 0 , 4 ) + '/' + amj.substr( 5 , 2 ) + '/' + amj.substr( 8 , 2 ) + '/' + amj.substr( 11 , 2 ) + '_' + amj.substr( 14 , 2 ) + '_' + amj.substr( 17 , 2 );
        let chemin_absolu_sauvegarde='../sauvegarde_fichiers/anciens_projets/rev_' + __xva_avant['T0.chi_id_projet'] + '/' + chemin_date;
        let repertoire_absolu_sauvegarde=chemin_absolu_sauvegarde.substr( 0 , chemin_absolu_sauvegarde.lastIndexOf( '/' ) );
        /* this.__ig1.ma_trace1('repertoire_absolu_sauvegarde='+repertoire_absolu_sauvegarde); */
        if(!(await this.__ig1.is_dir( repertoire_absolu_sauvegarde ))){
            try{
                await Deno.mkdir( repertoire_absolu_sauvegarde , {"mode" : 0o777 ,"recursive" : true} );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : 'erreur de création du répertoire "' + repertoire_absolu_sauvegarde + '" ' + this.__ig1.nl2( e )});
            }
        }
        /* copie de rev_nnn dans la sauvegarde */
        let obj=await this.rcopydir( chemin , chemin_absolu_sauvegarde , this.__ig1.donnees_retournees );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'la copie récursive des fichiers n\'a pas fonctionné [' + this.__ig1.nl2() + ']'});
        }
        /* suppression de l'ancien dossier rev_nnn */
        try{
            /* this.__ig1.ma_trace1('\n\n*******\nchemin='+chemin+'\nchemin_absolu_sauvegarde'+chemin_absolu_sauvegarde); */
            await Deno.remove( chemin , {"recursive" : true} );
            return({"__xst" : __xsu});
        }catch(e){
            return({
                    "__xst" : __xer ,
                    "__xme" : 'erreur de renommage du fichier "' + chemin + '" vers "' + chemin_absolu_sauvegarde + '"' + this.__ig1.nl2( e )
                });
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async action_apres_creer( mat , d , nouvel_id , form , __db1 ){
        let chp_nom_projet=form['chp_nom_projet'];
        /*
          =====================================================================================================
          on peut créer la nouvelle base de description du projet
          =====================================================================================================
        */
        let chemin_base_systeme_du_projet='./__bases_de_donnees/bdd_' + nouvel_id + '.sqlite';
        if((await this.__ig1.is_file( chemin_base_systeme_du_projet ))){
            /*
              pourquoi ce fichier existe ?
            */
            return({"__xst" : __xer ,"__xme" : 'le fichier la base de donnée du projet existe déjà [' + this.__ig1.nl2() + ']'});
        }
        let chemin='../rev_' + nouvel_id;
        /*
          on tente de créer le répertoire racine
        */
        let reprendre_les_fido=false;
        let une_erreur=false;
        /* this.__ig1.ma_trace1( 'chemin=' + chemin ); */
        if((await this.__ig1.is_dir( chemin ))){
            this.__ig1.donnees_retournees.__xsi[__xal].push( 'le dossier racine existe déjà, il faudra éventuellement reprendre ses fichiers et dossiers [' + this.__ig1.nl2() + ']' );
            reprendre_les_fido=true;
        }else{
            try{
                /* this.__ig1.ma_trace1('chemin='+chemin); */
                await Deno.mkdir( chemin , {"mode" : 0o777} );
                this.__ig1.donnees_retournees.__xsi[__xif].push( 'le dossier a été créé du disque [' + this.__ig1.nl2() + ']' );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : 'Erreur lors de la création du dossier [' + this.__ig1.nl2( e ) + ']'});
            }
        }
        let chemin_base_modele='./__bases_de_donnees/bdd_3.sqlite';
        if((await this.__ig1.is_file( chemin_base_modele ))){
            /* this.__ig1.ma_trace1( 'OK' ); */
        }else{
            const currentWorkingDirectory=Deno.cwd();
            this.__ig1.ma_trace1( 'KOKO' , currentWorkingDirectory );
        }
        /*
          on crée un clone de la base système du projet 3 qui contiendra tout le projet nnn
          insérer :
          le dossier racine qui pointe sur lui même
          le projet 
        */
        try{
            await Deno.copyFile( chemin_base_modele , chemin_base_systeme_du_projet );
        }catch(e){
            this.__ig1.ma_trace1( 'e=' , e );
            return({"__xst" : __xer ,"__xme" : 'Erreur lors de la création(copie) de la base système [' + this.__ig1.nl2( e ) + ']'});
        }
        let __db_nouvelle=await this.__ig1.ouvrir_bdd( nouvel_id );
        let criteres_1394={
             /*  */
            "c_chi_id_projet" : 3 ,
            "n_chi_id_projet" : nouvel_id ,
            "n_chp_nom_projet" : chp_nom_projet
        };
        let tt1394=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_projets SET 
           `chi_id_projet` = :n_chi_id_projet , 
           `chp_nom_projet` = :n_chp_nom_projet
        WHERE `chi_id_projet` = :c_chi_id_projet ;
        */
        /*sql_inclure_fin*/ 1394 , criteres_1394 , this.__ig1.donnees_retournees , __db_nouvelle );
        /* this.__ig1.ma_trace1('tt1394=',tt1394); */
        if(tt1394.__xst !== __xsu){
            await __db_nouvelle.close();
            return({"__xst" : __xer ,"__xme" : 'le numéro de projet n\'a pas pu être changé dans la nouvelle base système [' + this.__ig1.nl2() + ']'});
        }
        await __db_nouvelle.close();
        let chemin_3='../rev_3';
        let chemin_nouveau='../rev_' + nouvel_id;
        let obj=await this.rcopydir( chemin_3 , chemin_nouveau , this.__ig1.donnees_retournees );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'la copie récursive des fichiers n\'a pas fonctionné [' + this.__ig1.nl2( e ) + ']'});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /*
          conversion des données numériques update serveur début
          =====================================================================================================
        */
        form['chi_id_projet']=form['chi_id_projet'] === null ? ( null ) : ( parseInt( form['chi_id_projet'] , 10 ) );
        if(isNaN( form['chi_id_projet'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_projet" doit être numérique'});
        }
        /*
          =====================================================================================================
          conversion des données numériques update serveur fin
        */
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        /*
          ici on ne prend pas 
          this.__ig1.options_generales.base_de_travail = 2,3,4,...
          mais
          this.__ig1.options_generales.base_de_reference = 1
        */
        /* this.__ig1.ma_trace1('this.__ig1.options_generales.base_de_reference=',this.__ig1.options_generales.base_de_reference); */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        /* sélection du champ à modifier */
        let criteres_select_1375={"T0_chi_id_projet" : form['chi_id_projet']};
        let tt1375=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 1375 , criteres_select_1375 , this.__ig1.donnees_retournees , __db1 );
        if(tt1375.__xst !== __xsu || tt1375.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1375 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1375[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1384={
             /*  */
            "c_chi_id_projet" : form['chi_id_projet'] ,
            "n_chp_nom_projet" : form['chp_nom_projet'] ,
            "n_cht_commentaire_projet" : form['cht_commentaire_projet'] === '' ? ( null ) : ( form['cht_commentaire_projet'] )
        };
        /* =========================== mise à jour effective ======================== */
        let tt1384=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_projets SET 
           `chp_nom_projet` = :n_chp_nom_projet , 
           `cht_commentaire_projet` = :n_cht_commentaire_projet
        WHERE `chi_id_projet` = :c_chi_id_projet ;
        */
        /*sql_inclure_fin*/ 1384 , criteres_1384 , this.__ig1.donnees_retournees , __db1 );
        if(tt1384.__xst !== __xsu || tt1384.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1384.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1375[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        /*
          pour la modification d'un projet, on retourne systématiquement à la liste
        */
        if(true || retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt1375_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 1375 , criteres_select_1375 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1375_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_projet=null , __db1=null ){
        if(chi_id_projet === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_projet'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_projet=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_projet(' + chi_id_projet + ')))))';
        }
        if(chi_id_projet === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        }
        let tt1375=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 1375 , {"T0_chi_id_projet" : chi_id_projet} , this.__ig1.donnees_retournees , __db1 );
        if(tt1375.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1375.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1375[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1375;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_projet=null ){
        if(chi_id_projet === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_projet'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_projet=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        let criteres_1375={
             /*  */
            "T0_chi_id_projet" : chi_id_projet
        };
        let tt1375=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 1375 , criteres_1375 , this.__ig1.donnees_retournees , __db1 );
        if(tt1375.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1375.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1375;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_projet=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_projet'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_projet=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_projet === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        let critere_1375={"T0_chi_id_projet" : chi_id_projet};
        let tt1375=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 1375 , critere_1375 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1375;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(3)) */
        if(form['chi_id_projet'] <= 3){
            return({"__xst" : __xer ,"__xme" : 'il n\'est pas possible de supprimer cet élément [' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        let criteres_1375={
             /*  */
            "T0_chi_id_projet" : form['chi_id_projet']
        };
        let tt1375=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 1375 , criteres_1375 , this.__ig1.donnees_retournees , __db1 );
        if(tt1375.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1375.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1375[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1382={
             /*  */
            "chi_id_projet" : form['chi_id_projet']
        };
        let tt1382=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_projets
        WHERE (`chi_id_projet` = :chi_id_projet) ;
        */
        /*sql_inclure_fin*/ 1382 , criteres_1382 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1382.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1382.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1375[__xva][0] , __db1 );
        if(__aavc.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : __aavc.__xme});
        }
        /*  */
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_projet=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_projet'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_projet=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_projet === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        let critere_1375={"T0_chi_id_projet" : chi_id_projet};
        let tt1375=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 1375 , critere_1375 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1375;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d ){
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques insert serveur début */
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1377={
            "donnees" : [{
                        "chp_nom_projet" : form['chp_nom_projet'] ,
                        "cht_commentaire_projet" : form['cht_commentaire_projet'] === '' ? ( null ) : ( form['cht_commentaire_projet'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1377=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_projets`(
            `chp_nom_projet` , 
            `cht_commentaire_projet`
        ) VALUES (
            :chp_nom_projet , 
            :cht_commentaire_projet
        );
        */
        /*sql_inclure_fin*/ 1377 , criteres_1377 , this.__ig1.donnees_retournees , __db1 );
        if(tt1377.__xst !== __xsu || tt1377['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1377.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1377['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            /*
              lors de la création d'un projet, on DOIT revenir à l'écran liste
              et activer le projet pour pouvoir le modifier
            */
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async page_creer1( mat , d ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        const nom_du_fichier_db='bdd_1.sqlite';
        const chemin_du_fichier_bdd='./__programmes/' + nom_du_fichier_db;
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_reference );
        let tt1393=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet`
         FROM b1.tbl_projets T0 ORDER BY  T0.chi_id_projet DESC  LIMIT 1 OFFSET 0 
        ;
        */
        /*sql_inclure_fin*/ 1393 , {} , this.__ig1.donnees_retournees , __db1 );
        if(tt1393.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1393.__xme});
        }
        const nouveau_numero_projet=tt1393[__xva][0]['T0.chi_id_projet'] + 1;
        /* this.__ig1.ma_trace1('nouveau_numero_projet=',nouveau_numero_projet); */
        const chemin_base_systeme_du_projet='./__bases_de_donnees/bdd_' + nouveau_numero_projet + '.sqlite';
        /* this.__ig1.ma_trace1('chemin_base_systeme_du_projet=',chemin_base_systeme_du_projet) */
        try{
            const stats=await Deno.lstat( chemin_base_systeme_du_projet );
            /* if(stats.isFile === true || stats.isDirectory === true || stats.isSymlink === true ){ */
            return({
                    "__xst" : __xer ,
                    "__xme" : 'la base de donnée système "bdd_' + nouveau_numero_projet + '" existe donc le projet ne peut être créé. [' + this.__ig1.nl2() + ']'
                });
        }catch(e){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        this.__ig1.donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        const l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        const formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , 'liste1' );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_1374={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1374[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1374[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        /*
          ici, dans la liste on pointe TOUJOURS sur la base 1
        */
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 1 );
        }
        let tt1374=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE (   `T0`.`chi_id_projet` = :T0_chi_id_projet
           AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
           AND `T0`.`cht_commentaire_projet` LIKE :T0_cht_commentaire_projet) 
        ORDER BY `T0`.`chi_id_projet` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1374 , criteres_1374 , this.__ig1.donnees_retournees , __db1 );
        if(tt1374.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1374.__xme});
        }
        if(tt1374.__xst === __xsu && tt1374.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1374['debut']=__debut;
            tt1374=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
             FROM b1.tbl_projets T0
            WHERE (   `T0`.`chi_id_projet` = :T0_chi_id_projet
               AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
               AND `T0`.`cht_commentaire_projet` LIKE :T0_cht_commentaire_projet) 
            ORDER BY `T0`.`chi_id_projet` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1374 , criteres_1374 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1374;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi='projets1';
    __ig1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{projets1 as projets1};