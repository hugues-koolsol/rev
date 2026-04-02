const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
/*
  =====================================================================================================================
*/
class projets1{
    /* function sauvegarder_la_base_systeme */
    async sauvegarder_la_base_systeme( mat , d , donnees_recues , donnees_retournees , options_generales ){
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
        let m=await import( './bdds1_s.js' );
        let o=new m['bdds1']( this.__gi1 );
        let obj=await o.dump_de_la_base( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_projet );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      copie récursive des fichiers et dossiers de revxxx_1 dans revxxx_2
    */
    async rcopydir( dir1 , dir2 , donnees_retournees ){
        /* this.__gi1.ma_trace1(dir1,dir2); */
        if(!(await this.__gi1.is_dir( dir2 ))){
            /* this.__gi1.ma_trace1(dir1,dir2); */
            try{
                /* this.__gi1.ma_trace1('chemin='+chemin); */
                await Deno.mkdir( dir2 , {"mode" : 0o777} );
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'Erreur lors de la création du dossier [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        let objects=await this.__gi1.scandir( dir1 );
        for(let objet in objects){
            if(objects[objet].type_element === 'd'){
                let obj=await this.rcopydir( dir1 + '/' + objects[objet].nom , dir2 + '/' + objects[objet].nom , donnees_retournees );
                if(obj[__xst] !== __xsu){
                    this.__gi1.__xsi[__xer].push( 'Erreur INTERNE lors de la copie du dossier de "' + dir1 + '/' + objects[objet].nom + '" vers "' + dir2 + '/' + object + '" [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
            }else{
                let nom1=dir1 + '/' + objects[objet].nom;
                let fichier1=nom1.replace( /\.\/rev_1/g , '' );
                try{
                    /* this.__gi1.ma_trace1(dir1 + '/' + objects[objet].nom , dir2 + '/' + objects[objet].nom ); */
                    await Deno.copyFile( dir1 + '/' + objects[objet].nom , dir2 + '/' + objects[objet].nom );
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'Erreur INTERNE lors de la copie du fichier de "' + dir1 + '/' + objects[objet].nom + '" vers "' + dir2 + '/' + objects[objet].nom + '" [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
            }
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      fonction utilisée seulement dans rev_2
    */
    async initialiser_le_clone( mat , d , donnees_recues , donnees_retournees , options_generales ){
        donnees_retournees.chi_id_projet=1;
        if(donnees_retournees._CA_ !== 2){
            this.__gi1.__xsi[__xer].push( 'erreur de création du dossier rev_2 ' + this.__gi1.nl2( e ) );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_reference , donnees_retournees , options_generales );
        let criteres_409={"chi_id_projet" : 2};
        let tt409=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_projets
        WHERE `chi_id_projet` >= :chi_id_projet ;
        */
        /*sql_inclure_fin*/ 409 , criteres_409 , donnees_retournees , __db1 );
        /* this.__gi1.ma_trace1( 'tt409=' , tt409 ); */
        if(tt409[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors du begin transaction [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.chi_id_projet=0;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      on fabrique un clone du projet 1 sur le projet 2 
    */
    async initialiser_projet_2( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /*
          on commence par supprimer tous les fichiers et dossiers sour frev/rev_2 puis on recrée
        */
        let chemin_racine2='../rev_2';
        /* __CHEMIN_ABSOLU_SITE__ . 'rev_2'; */
        try{
            await Deno.remove( chemin_racine2 , {"recursive" : true} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur de suppression du dossier rev_2 ' + this.__gi1.nl2( e ) );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        try{
            await Deno.mkdir( chemin_racine2 , {"mode" : 0o777} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur de création du dossier rev_2 ' + this.__gi1.nl2( e ) );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_racine1='../rev_1';
        let obj=await this.rcopydir( chemin_racine1 , chemin_racine2 , donnees_retournees );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'la copie récursive des fichiers n\'a pas fonctionné [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        this.__gi1.__xsi[__xsu].push( 'le projet 2 a été initialisé [' + this.__gi1.nl2() + ']' );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async desactiver1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        donnees_retournees.chi_id_projet=0;
        await this.__gi1.modifier_valeur_session( options_generales , 'chi_id_projet' , donnees_retournees.chi_id_projet );
        await this.__gi1.modifier_valeur_session( options_generales , 'chemin_des_bdd' , '' );
        await this.__gi1.obtenir_les_menus( mat , d , donnees_recues , donnees_retournees , options_generales );
        await this.__gi1.obtenir_les_genres( mat , d , donnees_recues , donnees_retournees , options_generales );
        await this.__gi1.obtenir_les_sql( mat , d , donnees_recues , donnees_retournees , options_generales );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async activer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
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
        donnees_retournees.chi_id_projet=0;
        donnees_retournees['chi_id_projet']=chi_id_projet;
        await this.__gi1.modifier_valeur_session( options_generales , 'chi_id_projet' , donnees_retournees.chi_id_projet );
        await this.__gi1.modifier_valeur_session( options_generales , 'chemin_des_bdd' , './__programmes/' );
        await this.__gi1.obtenir_les_menus( mat , d , donnees_recues , donnees_retournees , options_generales );
        await this.__gi1.obtenir_les_genres( mat , d , donnees_recues , donnees_retournees , options_generales );
        await this.__gi1.obtenir_les_sql( mat , d , donnees_recues , donnees_retournees , options_generales );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /* this.__gi1.ma_trace1( '__xva_avant' , __xva_avant ); */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        if(donnees_retournees.chi_id_projet > 2){
            /* on va modifier la base 3,4,... */
            let chemin_complet_bdd=options_generales.chemin_des_bdd + 'bdd_' + donnees_retournees.chi_id_projet + '.sqlite';
            let __db=new Database( chemin_complet_bdd , {"create" : false} );
            let donnees_sql={
                "n_chp_nom_projet" : form['chp_nom_projet'] ,
                "n_cht_commentaire_projet" : form['cht_commentaire_projet'] ,
                "c_chi_id_projet" : donnees_retournees.chi_id_projet
            };
            let tt305=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_projets SET 
               `chp_nom_projet` = :n_chp_nom_projet , 
               `cht_commentaire_projet` = :n_cht_commentaire_projet
            WHERE `chi_id_projet` = :c_chi_id_projet ;
            */
            /*sql_inclure_fin*/ 305 , donnees_sql , donnees_retournees , __db );
            if(tt305[__xst] !== __xsu){
                if(tt305['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt305['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            await __db.close();
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        if(__xva_avant['T0.chi_id_projet'] <= 3){
            this.__gi1.__xsi[__xer].push( 'ce projet ne peut pas être supprimé [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin='../rev_' + __xva_avant['T0.chi_id_projet'];
        if(!this.__gi1.is_dir( chemin )){
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }
        let amj=donnees_retournees.date_heure_serveur;
        /* yyyy-MM-dd HH:mm:ss.SSS */
        let chemin_date=amj.substr( 0 , 4 ) + '/' + amj.substr( 5 , 2 ) + '/' + amj.substr( 8 , 2 ) + '/' + amj.substr( 11 , 2 ) + '_' + amj.substr( 14 , 2 ) + '_' + amj.substr( 17 , 2 );
        let chemin_absolu_sauvegarde='../sauvegarde_fichiers/anciens_projets/rev_' + __xva_avant['T0.chi_id_projet'] + '/' + chemin_date;
        let repertoire_absolu_sauvegarde=chemin_absolu_sauvegarde.substr( 0 , chemin_absolu_sauvegarde.lastIndexOf( '/' ) );
        /* this.__gi1.ma_trace1('repertoire_absolu_sauvegarde='+repertoire_absolu_sauvegarde); */
        if(!(await this.__gi1.is_dir( repertoire_absolu_sauvegarde ))){
            try{
                await Deno.mkdir( repertoire_absolu_sauvegarde , {"mode" : 0o777 ,"recursive" : true} );
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'erreur de création du répertoire "' + repertoire_absolu_sauvegarde + '" ' + this.__gi1.nl2( e ) );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        /* copie de rev_nnn dans la sauvegarde */
        let obj=await this.rcopydir( chemin , chemin_absolu_sauvegarde , donnees_retournees );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'la copie récursive des fichiers n\'a pas fonctionné [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* suppression de l'ancien dossier rev_nnn */
        try{
            /* this.__gi1.ma_trace1('\n\n*******\nchemin='+chemin+'\nchemin_absolu_sauvegarde'+chemin_absolu_sauvegarde); */
            await Deno.remove( chemin , {"recursive" : true} );
            return({"__xst" : __xsu});
        }catch(e){
            this.__gi1.ma_trace1( 'e=' , e );
            this.__gi1.__xsi[__xer].push( 'erreur de renommage du fichier "' + chemin + '" vers "' + chemin_absolu_sauvegarde + '"' + this.__gi1.nl2( e ) );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , nouvel_id , form , __db1 ){
        let chp_nom_projet=form['chp_nom_projet'];
        /*
          =====================================================================================================
          on peut créer la nouvelle base de description du projet
          =====================================================================================================
        */
        let chemin_base_systeme_du_projet='./__bases_de_donnees/bdd_' + nouvel_id + '.sqlite';
        if((await this.__gi1.is_file( chemin_base_systeme_du_projet ))){
            /*
              pourquoi ce fichier existe ?
            */
            this.__gi1.__xsi[__xer].push( 'le fichier la base de donnée du projet existe déjà [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin='../rev_' + nouvel_id;
        /*
          on tente de créer le répertoire racine
        */
        let reprendre_les_fido=false;
        let une_erreur=false;
        /* this.__gi1.ma_trace1( 'chemin=' + chemin ); */
        if((await this.__gi1.is_dir( chemin ))){
            this.__gi1.__xsi[__xal].push( 'le dossier racine existe déjà, il faudra éventuellement reprendre ses fichiers et dossiers [' + this.__gi1.nl2() + ']' );
            reprendre_les_fido=true;
        }else{
            try{
                /* this.__gi1.ma_trace1('chemin='+chemin); */
                await Deno.mkdir( chemin , {"mode" : 0o777} );
                this.__gi1.__xsi[__xif].push( 'le dossier a été créé du disque [' + this.__gi1.nl2() + ']' );
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'Erreur lors de la création du dossier [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        let chemin_base_modele='./__bases_de_donnees/bdd_3.sqlite';
        if((await this.__gi1.is_file( chemin_base_modele ))){
            /* this.__gi1.ma_trace1( 'OK' ); */
        }else{
            const currentWorkingDirectory=Deno.cwd();
            this.__gi1.ma_trace1( 'KOKO' , currentWorkingDirectory );
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
            this.__gi1.ma_trace1( 'e=' , e );
            this.__gi1.__xsi[__xer].push( 'Erreur lors de la création(copie) de la base système [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db_nouvelle=await this.__gi1.ouvrir_bdd( nouvel_id , donnees_retournees , options_generales );
        let criteres_394={
             /*  */
            "c_chi_id_projet" : 3 ,
            "n_chi_id_projet" : nouvel_id ,
            "n_chp_nom_projet" : chp_nom_projet
        };
        let tt394=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_projets SET 
           `chi_id_projet` = :n_chi_id_projet , 
           `chp_nom_projet` = :n_chp_nom_projet
        WHERE `chi_id_projet` = :c_chi_id_projet ;
        */
        /*sql_inclure_fin*/ 394 , criteres_394 , donnees_retournees , __db_nouvelle );
        /* this.__gi1.ma_trace1('tt394=',tt394); */
        if(tt394[__xst] !== __xsu){
            await __db_nouvelle.close();
            this.__gi1.__xsi[__xer].push( 'le numéro de projet n\'a pas pu être changé dans la nouvelle base système [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        await __db_nouvelle.close();
        let chemin_3='../rev_3';
        let chemin_nouveau='../rev_' + nouvel_id;
        let obj=await this.rcopydir( chemin_3 , chemin_nouveau , donnees_retournees );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'la copie récursive des fichiers n\'a pas fonctionné [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_projet']=form['chi_id_projet'] === null ? ( null ) : ( parseInt( form['chi_id_projet'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_projet'] === null || form['chp_nom_projet'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        /*
          ici on ne prend pas 
          options_generales.base_de_travail = 2,3,4,...
          mais
          options_generales.base_de_reference = 1
        */
        /* this.__gi1.ma_trace1('options_generales.base_de_reference=',options_generales.base_de_reference); */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_reference , donnees_retournees , options_generales );
        /* sélection du champ à modifier */
        let criteres_select_375={"T0_chi_id_projet" : form['chi_id_projet']};
        let tt375=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 375 , criteres_select_375 , donnees_retournees , __db1 );
        if(tt375[__xst] !== __xsu || tt375[__xva].length !== 1){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt375[__xva][0] , __db1 );
        if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "c_chi_id_projet" : form['chi_id_projet'] ,
            "n_chp_nom_projet" : form['chp_nom_projet'] ,
            "n_cht_commentaire_projet" : form['cht_commentaire_projet'] === '' ? ( null ) : ( form['cht_commentaire_projet'] )
        };
        /* this.__gi1.ma_trace1('donnees_sql',donnees_sql); */
        /* await __db1.exec( 'BEGIN TRANSACTION;' ); */
        let tt384=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_projets SET 
           `chp_nom_projet` = :n_chp_nom_projet , 
           `cht_commentaire_projet` = :n_cht_commentaire_projet
        WHERE `chi_id_projet` = :c_chi_id_projet ;
        */
        /*sql_inclure_fin*/ 384 , donnees_sql , donnees_retournees , __db1 );
        /* this.__gi1.ma_trace1('tt384',tt384); */
        if(tt384[__xst] !== __xsu){
            if(tt384['__xme'] !== ''){
                this.__gi1.__xsi[__xer].push( tt384['__xme'] + ' [' + this.__gi1.nl2() );
            }else{
                this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
            }
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt375[__xva][0] , __db1 );
        if(__taam[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur après modification [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1('apres'); */
        donnees_retournees[__xva]['page_modification1']=tt375;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_projet=null , __db1=null ){
        if(chi_id_projet === null){
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
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_projet(' + chi_id_projet + ')))))';
        }
        if(chi_id_projet === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_reference , donnees_retournees , options_generales );
        }
        let tt375=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 375 , {"T0_chi_id_projet" : chi_id_projet} , donnees_retournees , __db1 );
        if(tt375[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt375[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt375;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(1)) */
        if(form['chi_id_projet'] <= 3){
            this.__gi1.__xsi[__xer].push( 'il n\'est pas possible de supprimer cet élément [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_reference , donnees_retournees , options_generales );
        let criteres_375={
             /*  */
            "T0_chi_id_projet" : form['chi_id_projet']
        };
        let tt375=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 375 , criteres_375 , donnees_retournees , __db1 );
        if(tt375[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt375[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_382={
             /*  */
            "chi_id_projet" : form['chi_id_projet']
        };
        let tt382=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_projets
        WHERE (`chi_id_projet` = :chi_id_projet) ;
        */
        /*sql_inclure_fin*/ 382 , criteres_382 , donnees_retournees , __db1 );
        if(tt382[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt375[__xva][0] , __db1 );
        if(aac[__xst] === __xer){
            this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
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
        if(chi_id_projet === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_reference , donnees_retournees , options_generales );
        let critere_375={"T0_chi_id_projet" : chi_id_projet};
        let tt375=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 375 , critere_375 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt375;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques début */
        /* conversion des données numériques fin */
        if(form['chp_nom_projet'] === null || form['chp_nom_projet'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_reference , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_nom_projet" : form['chp_nom_projet'] ,
                        "cht_commentaire_projet" : form['cht_commentaire_projet'] === '' ? ( null ) : ( form['cht_commentaire_projet'] )
                    }]
        };
        /*  */
        /* this.__gi1.ma_trace1('donnees_sql=',donnees_sql); */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt377=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_projets`(
            `chp_nom_projet` , 
            `cht_commentaire_projet`
        ) VALUES (
            :chp_nom_projet , 
            :cht_commentaire_projet
        );
        */
        /*sql_inclure_fin*/ 377 , donnees_sql , donnees_retournees , __db1 );
        if(tt377[__xst] === __xsu){
            if(tt377['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt377['nouvel_id'] , form , __db1 );
            if(aac[__xst] === __xer){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                /*
                  lors de la création d'un projet, on DOIT revenir à l'écran liste
                  et activer le projet pour pouvoir le modifier
                */
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt377['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        const nom_du_fichier_db='bdd_1.sqlite';
        const chemin_du_fichier_bdd='./__programmes/' + nom_du_fichier_db;
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_reference , donnees_retournees , options_generales );
        let tt393=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet`
         FROM b1.tbl_projets T0 ORDER BY  T0.chi_id_projet DESC  LIMIT 1 OFFSET 0 
        ;
        */
        /*sql_inclure_fin*/ 393 , {} , donnees_retournees , __db1 );
        if(tt393[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        const nouveau_numero_projet=tt393[__xva][0]['T0.chi_id_projet'] + 1;
        /* this.__gi1.ma_trace1('nouveau_numero_projet=',nouveau_numero_projet); */
        const chemin_base_systeme_du_projet='./__bases_de_donnees/bdd_' + nouveau_numero_projet + '.sqlite';
        /* this.__gi1.ma_trace1('chemin_base_systeme_du_projet=',chemin_base_systeme_du_projet) */
        try{
            const stats=await Deno.lstat( chemin_base_systeme_du_projet );
            /* if(stats.isFile === true || stats.isDirectory === true || stats.isSymlink === true ){ */
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'la base de donnée système "bdd_' + nouveau_numero_projet + '" existe donc le projet ne peut être créé. [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }catch(e){
            /* this.__gi1.__xsi[__xer].push(this.__gi1.nl2()); */
            /* return {__xst:__xer}; */
        }
        donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){
        let l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__gi1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres374={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres374[i]=formulaire[i];
            }
        }
        /*
          ici, dans la liste on pointe TOUJOURS sur la base 1
        */
        __db1=await this.__gi1.ouvrir_bdd( 1 , donnees_retournees , options_generales );
        let tt374=await this.__gi1.sql_iii(
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
        /*sql_inclure_fin*/ 374 , criteres374 , donnees_retournees , __db1 );
        if(tt374.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt374[__xst] === __xsu && tt374[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres374['debut']=__debut;
            let tt374=await this.__gi1.sql_iii(
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
            /*sql_inclure_fin*/ 374 , criteres374 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt374;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        this.fonction_liste='liste1';
        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        this.fonction_liste='sous_liste1';
        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='projets1';
    __gi1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
    */
}
export{projets1 as projets1};