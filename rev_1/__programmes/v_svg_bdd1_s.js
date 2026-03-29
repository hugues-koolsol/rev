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
class v_svg_bdd1{
    /*
      =============================================================================================================
    */
    async creer_la_base_sur_disque_a_partir_du_shema( mat , d , donnees_recues , donnees_retournees , options_generales ){
        donnees_retournees[__xac]='';
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_371={
             /*  */
            "T0_chi_id_basedd" : donnees_recues[__xva]['id_bdd_de_la_base']
        };
        let tt371=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 371 , criteres_371 , donnees_retournees , __db1 );
        if(tt371[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_bdd='../rev_' + donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + donnees_recues[__xva]['id_bdd_de_la_base'] + '.sqlite';
        if((await this.__gi1.is_file( chemin_bdd ))){
            this.__gi1.__xsi[__xer].push( 'le fichier bdd existe déjà [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let db1temp=null;
        try{
            db1temp=await new Database( chemin_bdd , {"create" : true} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( ' erreur sur new base ' + donnees_recues[__xva]['id_bdd_de_la_base'] + '[' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        await db1temp.exec( 'BEGIN TRANSACTION;' );
        try{
            db1temp.exec( donnees_recues[__xva]['source_sql_de_la_base'] );
        }catch(e){
            await db1temp.exec( 'ROLLBACK;' );
            await db1temp.close();
            this.__gi1.__xsi[__xer].push( ' erreur ssur source de la base [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        await db1temp.exec( 'COMMIT;' );
        await db1temp.close();
        this.__gi1.__xsi[__xif].push( 'La base a été créée [' + this.__gi1.nl2() + ']' );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    
    /*
      =============================================================================================================
      exécute la requête contenue dans $donnees_recues[__xva]['source_sql']
    */
    async analyser_l_index( mat , d , donnees_recues , donnees_retournees , options_generales , __db1){
         /* this.__gi1.ma_trace1('donnees_recues.__xva=',donnees_recues.__xva); */
         try{
          
            let statement=await __db1.prepare( donnees_recues[__xva]['source_sql'] );
            let lignes=await statement.values();
            await statement.finalize();
            let donnees0=[];
            for(let numero_de_ligne in lignes){
                /* this.__gi1.ma_trace1(lignes[numero_de_ligne]); */
                let aa={};
                aa['T0.'+donnees_recues.__xva['primary_key']] = lignes[numero_de_ligne][0];
                aa['T1.'+donnees_recues.__xva['primary_key']] = lignes[numero_de_ligne][1];
                let num_champ=2;
                for(let i in donnees_recues.__xva['liste_des_champs']){
                    aa['T0.'+donnees_recues.__xva['liste_des_champs'][i]] = lignes[numero_de_ligne][num_champ++];
                    aa['T1.'+donnees_recues.__xva['liste_des_champs'][i]] = lignes[numero_de_ligne][num_champ++];
                }
//                this.__gi1.ma_trace1('aa=',aa);
                donnees0.push( aa );
            }
            donnees_retournees.__xva['donnees0']=donnees0;
            donnees_retournees.__xva['liste_des_champs']=donnees_recues.__xva['liste_des_champs'];
            donnees_retournees.__xva['primary_key']=donnees_recues.__xva['primary_key'];
            donnees_retournees.__xva['id_svg_rectangle_de_l_index']=donnees_recues.__xva['id_svg_rectangle_de_l_index'];
            donnees_retournees.__xva['id_svg_conteneur_table']=donnees_recues.__xva['id_svg_conteneur_table'];
            donnees_retournees.__xva['nom_de_la_table']=donnees_recues.__xva['nom_de_la_table'];
            donnees_retournees.__xva['id_svg_de_la_base_en_cours']=donnees_recues.__xva['id_svg_de_la_base_en_cours'];
            donnees_retournees.__xva['operation_table']=donnees_recues[__xva]['operation_table'];
            donnees_retournees.__xva['id_bdd_de_la_base']=donnees_recues[__xva]['id_bdd_de_la_base'];
            donnees_retournees.__xva['liste_des_champs_avec_type']=donnees_recues[__xva]['liste_des_champs_avec_type'];
         }catch(e){
          this.__gi1.ma_trace1(e.stack);
         }
    }
    /*
      =============================================================================================================
      exécute la requête contenue dans $donnees_recues[__xva]['source_sql']
    */
    async operation_table_dans_base( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let id_bdd_de_la_base='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_bdd_de_la_base'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                id_bdd_de_la_base=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
        let criteres_371={
             /*  */
            "T0_chi_id_basedd" : id_bdd_de_la_base
        };
        let tt371=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 371 , criteres_371 , donnees_retournees , __db1 );
        if(tt371[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_bdd='../rev_' + donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + id_bdd_de_la_base + '.sqlite';
        /* this.__gi1.ma_trace1( 'chemin_bdd=' , chemin_bdd ); */
        let db1=null;
        try{
            db1=await new Database( chemin_bdd , {"create" : false} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( ' erreur sur new base ' + id_bdd_de_la_base + '[' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(donnees_recues[__xva]['source_sql'] === ''){
            this.__gi1.__xsi[__xer].push( ' operation_table_dans_base(' + donnees_recues[__xva]['operation_table'] + ') source sql vide [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            await db1.close();
            return({"__xst" : __xer});
        }
        if(donnees_recues[__xva]['operation_table']==='analyser_l_index'){
             await this.analyser_l_index(mat , d , donnees_recues , donnees_retournees , options_generales , db1)
        }else{
            try{
                /* this.__gi1.ma_trace1('donnees_recues[__xva][source_sql]='+donnees_recues[__xva]['source_sql']); */
                db1.exec( donnees_recues[__xva]['source_sql'] );
                this.__gi1.__xsi[__xsu].push( donnees_recues[__xva]['operation_table'] + ' dans la base physique réussie  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xsu;
            }catch(e){
                await db1.close();
                /* this.__gi1.ma_trace1('e='+e.stack); */
                this.__gi1.__xsi[__xer].push( ' ' + donnees_recues[__xva]['operation_table'] + ' dans la base physique impossible  [' + this.__gi1.nl2( e ) + '] <pre>' + donnees_recues[__xva]['source_sql'].replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
                /* donnees_retournees.__xst=__xer; */
                /* return({"__xst" : __xer}); */
            }
        }
        await db1.close();
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1){
            if(donnees_recues[__xva]['operation_table'] === 'creer_une_table'
                   || donnees_recues[__xva]['operation_table'] === 'supprimer_une_table'
                   || donnees_recues[__xva]['operation_table'] === 'supprimer_l_index'
                   || donnees_recues[__xva]['operation_table'] === 'ajouter_l_index'
            ){
                /*
                  =====================================================================================
                  Dans ce cas, il faut aller modifier les autres bases système.
                  =====================================================================================
                */
                let criteres_316={};
                let tt316=await this.__gi1.sql_iii(
                /*sql_inclure_deb*/ /*#
                SELECT 
                `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
                 FROM b1.tbl_projets T0
                WHERE `T0`.`chi_id_projet` > 2
                ;
                */
                /*sql_inclure_fin*/ 316 , criteres_316 , donnees_retournees , __db1 );
                if(tt316[__xst] !== __xsu){
                    this.__gi1.__xsi[__xer].push( 'erreur de 316 [' + this.__gi1.nl2() );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
                for(let k1 in tt316[__xva]){
                    let v1=tt316[__xva][k1];
                    if(v1['T0.chi_id_projet'] > 1){
                        /* let nom_de_fichier_bdd=chemin[__xva]['chemin_absolu'] + 'bdd_' + v1['T0.chi_id_projet'] + '.sqlite'; */
                        let nom_de_fichier_bdd='./__bases_de_donnees/bdd_' + v1['T0.chi_id_projet'] + '.sqlite';
                        this.__gi1.ma_trace1( 'nom_de_fichier_bdd=' + nom_de_fichier_bdd );
                        if((await this.__gi1.is_file( nom_de_fichier_bdd ))){
                            let db1temp=null;
                            try{
                                db1temp=await new Database( nom_de_fichier_bdd , {"create" : false} );
                            }catch(e2){
                                this.__gi1.__xsi[__xer].push( ' erreur sur new db1temp ' + id_bdd_de_la_base + '[' + this.__gi1.nl2( e2 ) + ']' );
                                donnees_retournees.__xst=__xer;
                                return({"__xst" : __xer});
                            }
                            try{
                                db1temp.exec( donnees_recues[__xva]['source_sql'] );
                            }catch(e3){
                                donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
                                this.__gi1.__xsi[__xal].push( ' erreur sql dans "' + nom_de_fichier_bdd + '"  <pre>' + donnees_recues[__xva]['source_sql'] + '</pre> [' + this.__gi1.nl2( e3 ) + ']' );
                            }
                            await db1temp.close();
                        }
                    }
                }
            }
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async reecrire_la_base( mat , d , donnees_recues , donnees_retournees , options_generales , id_bdd_de_la_base , chemin_absolu , source_sql_de_la_base , liste_des_tables , liste_des_tables_champs ){
        let chemin_bdd=chemin_absolu;
        let repertoire=chemin_bdd.substr( 0 , chemin_bdd.lastIndexOf( '/' ) );
        if(!(await this.__gi1.is_file( chemin_bdd ))){
            this.__gi1.__xsi[__xer].push( 'fichier de bdd non trouvé [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_bdd_base_temporaire=repertoire + '/' + 'temporaire_' + donnees_retournees.date_heure_serveur.replace( / /g , '' ) + '.db_temporaire';
        chemin_bdd_base_temporaire=options_generales.chemin_des_bdd + '___________toto.sqlite';
        let db1temp=null;
        try{
            db1temp=await new Database( chemin_bdd_base_temporaire , {"create" : true} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur de création de la bdd temporaire [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          Attention foreign_keys=OFF
        */
        let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA foreign_keys=OFF;','PRAGMA journal_mode=WAL;'];
        for(let i in les_pragma_set){
            try{
                let a=await db1temp.exec( les_pragma_set[i] );
            }catch(e){
                await db1temp.close();
                this.__gi1.__fnt1.supprimer_fichier_sans_sauvegarde( chemin_bdd_base_temporaire , donnees_retournees );
                this.__gi1.__xsi[__xer].push( 'erreur de création des tables de la bdd temporaire [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        let ret1=null;
        try{
            ret1=db1temp.exec( source_sql_de_la_base );
        }catch(e){
            await db1temp.close();
            this.__gi1.__fnt1.supprimer_fichier_sans_sauvegarde( chemin_bdd_base_temporaire , donnees_retournees );
            this.__gi1.__xsi[__xer].push( 'erreur de création des tables de la bdd temporaire [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let sql2='ATTACH DATABASE \'' + this.__gi1.__fnt1.sq0( chemin_bdd ) + '\' as \'source\';';
        /* this.__gi1.ma_trace1('sql2=',sql2); */
        try{
            db1temp.exec( sql2 );
        }catch(e){
            await db1temp.close();
            this.__gi1.__fnt1.supprimer_fichier_sans_sauvegarde( chemin_bdd_base_temporaire , donnees_retournees );
            this.__gi1.__xsi[__xer].push( 'attach impossible [' + this.__gi1.nl2( e ) );
            return({"__xst" : __xer});
        }
        try{
            for(let k1 in liste_des_tables){
                let v1=liste_des_tables[k1];
                let liste_des_champs=liste_des_tables_champs[v1].join( ',' );
                let sql3='INSERT INTO `' + this.__gi1.__fnt1.sq0( v1 ) + '`(' + liste_des_champs + ') SELECT ' + liste_des_champs + ' FROM `source`.`' + this.__gi1.__fnt1.sq0( v1 ) + '`';
                /* this.__gi1.ma_trace1('sql3=',sql3); */
                try{
                    db1temp.exec( sql3 );
                }catch(e){
                    await db1temp.close();
                    this.__gi1.__fnt1.supprimer_fichier_sans_sauvegarde( chemin_bdd_base_temporaire , donnees_retournees );
                    console.log( 'e=' , e , e.stack );
                    this.__gi1.__xsi[__xer].push( 'erreur sql sql3=' + sql3 + ' [' + this.__gi1.nl2( e ) );
                    this.__gi1.__xsi[__xer].push( '<b> les donnees de ' + v1 + ' ne peuvent être copiées [' + this.__gi1.nl2() );
                    return({"__xst" : __xer});
                }
            }
        }catch(e0){
            await db1temp.close();
            this.__gi1.__fnt1.supprimer_fichier_sans_sauvegarde( chemin_bdd_base_temporaire , donnees_retournees );
            this.__gi1.__xsi[__xer].push( 'boucle sur les tables [' + this.__gi1.nl2( e0 ) );
            return({"__xst" : __xer});
        }
        /*
          il faut supprimer les connexions aux bases;
        */
        await db1temp.close();
        let obj1=await this.__gi1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_bdd , donnees_retournees );
        if(obj1.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur 111 sauvegarder_et_supprimer_fichier chemin_bdd="' + chemin_bdd + '" [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        try{
            await Deno.rename( chemin_bdd_base_temporaire , chemin_bdd );
            this.__gi1.__xsi[__xsu].push( 'La base (' + id_bdd_de_la_base + ') a été réécrite  [' + this.__gi1.nl2() + '] ' );
            donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
            return({"__xst" : __xsu});
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'rename fichier temporaire impossible [' + this.__gi1.nl2( e ) );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async reconstruire_la_base_a_partir_du_shema_sur_disque( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let id_bdd_de_la_base=donnees_recues[__xva]['id_bdd_de_la_base'];
        let source_sql_de_la_base=donnees_recues[__xva]['source_sql_de_la_base'];
        let liste_des_tables=donnees_recues[__xva]['liste_des_tables'];
        let liste_des_tables_champs=donnees_recues[__xva]['liste_des_tables_champs'];
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_371={
             /*  */
            "T0_chi_id_basedd" : id_bdd_de_la_base
        };
        let tt371=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 371 , criteres_371 , donnees_retournees , __db1 );
        if(tt371[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_absolu='../rev_' + donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + id_bdd_de_la_base + '.sqlite';
        let liste_des_autres_projets=[];
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1 && id_bdd_de_la_base === 1){
            /*
              Si on est dans rev_1, le projet 1 et que la base est la base 1 
              alors il faudra aussi réécrire les autres bases systèmes
            */
            let criteres_316={};
            let tt316=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
             FROM b1.tbl_projets T0
            WHERE `T0`.`chi_id_projet` > 2
            ;
            */
            /*sql_inclure_fin*/ 316 , criteres_316 , donnees_retournees , __db1 );
            if(tt316[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            for(let i in tt316[__xva]){
                if(id_bdd_de_la_base !== tt316[__xva][i]['T0.chi_id_projet']){
                    liste_des_autres_projets.push( tt316[__xva][i]['T0.chi_id_projet'] );
                }
            }
        }
        await __db1.close();
        let obj=await this.reecrire_la_base( mat , d , donnees_recues , donnees_retournees , options_generales , id_bdd_de_la_base , chemin_absolu , donnees_recues[__xva]['source_sql_de_la_base'] , liste_des_tables , liste_des_tables_champs );
        if(obj.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur de réécriture 1 [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        for(let k1 in liste_des_autres_projets){
            /*
              on traite les bases systèmes des autres projets 
            */
            chemin_absolu='./__bases_de_donnees/bdd_' + liste_des_autres_projets[k1] + '.sqlite';
            this.__gi1.ma_trace1( 'chemin_absolu=' + chemin_absolu );
            let obj1=await this.reecrire_la_base( mat , d , donnees_recues , donnees_retournees , options_generales , liste_des_autres_projets[k1] , chemin_absolu , source_sql_de_la_base , liste_des_tables , liste_des_tables_champs );
            if(obj1.__xst !== __xsu){
                this.__gi1.__xsi[__xer].push( 'erreur de réécriture 2 (' + liste_des_autres_projets[k1] + ') [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async produire_un_tableau_de_la_structure_d_une_bdd_grace_a_un_source_de_structure( mat , d , donnees_recues , donnees_retournees , options_generales , source ){
        let amj=donnees_retournees.date_heure_serveur;
        let chemin_date=amj.substr( 0 , 4 ) + '/' + amj.substr( 5 , 2 ) + '/' + amj.substr( 8 , 2 ) + '/';
        let chemin_fichier_temporaire='../../temporaires_fichiers/' + chemin_date + '/';
        if(!(await this.__gi1.is_dir( chemin_fichier_temporaire ))){
            try{
                await Deno.mkdir( chemin_fichier_temporaire , {"mode" : 0o777 ,"recursive" : true} );
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'erreur de création de répertoire temporaire [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        let fichier_temporaire=(chemin_fichier_temporaire + (await this.__gi1.cle_aleatoire())) + '_utilisateur_' + donnees_retournees.chi_id_utilisateur + '.sqlite';
        let dbtemp=null;
        /* return(this.__gi1.bug1(donnees_retournees,fichier_temporaire)); */
        try{
            dbtemp=await new Database( fichier_temporaire , {"enableForeignKeyConstraints" : true} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur de création de la bdd temporaire [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1( 'source' , source ); */
        try{
            let res0=await dbtemp.exec( source );
        }catch(e){
            this.__gi1.ma_trace1( 'e.stack=' , e.stack );
            this.__gi1.__xsi[__xer].push( 'erreur lors de la création des table dans la base temporaire [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        await dbtemp.close();
        let essayer_auto_increment=true;
        if(donnees_retournees.chi_id_projet > 2){
            essayer_auto_increment=false;
        }
        let ret=await this.obtenir_la_structure_de_la_base_sqlite( mat , d , donnees_recues , donnees_retournees , options_generales , fichier_temporaire , essayer_auto_increment );
        if(ret[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'de récupération de la structure de la base [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        this.__gi1.__fnt1.supprimer_fichier_sans_sauvegarde( fichier_temporaire , donnees_retournees );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu ,"value" : ret['value']});
    }
    /*
      =============================================================================================================
    */
    async obtenir_tableau_sqlite_de_la_table( mat , d , donnees_recues , donnees_retournees , options_generales , nom_de_la_table , db , essayer_auto_increment ){
        let t='';
        /*
          On crée une table temporaire contenant un auto increment car sinon la suite des requêtes sur l'auto increment ne fonctionnent pas
        */
        try{
            let res0=await db.exec( 'create table ____temporaire_____ (id integer primary key autoincrement)' );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur lors de la création de la table temporaire [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let auto_increment=false;
        /*
          si il n'y a aucune table avec autoincrement alors la table sqlite_sequence n'existe pas et ça provoque une erreur
        */
        try{
            let lignes=[];
            let sql='SELECT * FROM sqlite_sequence WHERE name = \'' + nom_de_la_table + '\'';
            let statement=await db.prepare( sql );
            lignes=await statement.values();
            await statement.finalize();
            for(let col of lignes){
                auto_increment=true;
            }
        }catch(e){
            donnees_retournees.__xst=0;
            this.__gi1.__xsi[__xer].push( 'erreur sql = ' + sql + ' [' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        try{
            let res0=await db.exec( 'drop table ____temporaire_____' );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur lors de la suppression de la table temporaire [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let les_champs=[];
        try{
            let lignes=[];
            let sql1='PRAGMA table_info(\'' + nom_de_la_table + '\')';
            /* this.__gi1.ma_trace1('sql1='+sql1); */
            try{
                let statement=await db.prepare( sql1 );
                lignes=await statement.values();
                await statement.finalize();
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'erreur PRAGMA table_info(\'' + nom_de_la_table + '\') [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            for( let i=0 ; i < lignes.length ; i++ ){
                les_champs.push( lignes[i] );
            }
        }catch(e){
            donnees_retournees.__xst=0;
            this.__gi1.__xsi[__xer].push( 'erreur sql1 = PRAGMA table_info(\'' + nom_de_la_table + '\' [' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        /* return( this.__gi1.bug1(donnees_retournees,les_champs)); */
        let liste_des_champs={};
        let liste_des_indexes={};
        let liste_des_champs_non_null=[];
        let a_des_champs_index='';
        for( let i=0 ; i < les_champs.length ; i++ ){
            let arr=les_champs[i];
            if(arr[4] !== null){
                if(arr[4].substr( 0 , 1 ) === '\''){
                    let tt=arr[4].replace( "''" , "'" );
                    tt=tt.substr( 1 , tt.length - 2 );
                    arr[4]=tt;
                }
            }
            liste_des_champs[arr[1]]={
                 /*
                  les champs fournis par sqlite sont :
                  cid	name	type	notnull	dflt_value	pk 
                 */
                "cid" : arr[0] ,
                "name" : arr[1] ,
                "type" : arr[2] ,
                "notnull" : arr[3] ,
                "dflt_value" : arr[4] ,
                "pk" : arr[5] ,
                "auto_increment" : false ,
                "cle_etrangere" : {}
            };
            if(arr[2] === 'INTEGER' && arr[5] === 1){
                /* INTEGER PRIMARY KEY */
                if(auto_increment === true){
                    liste_des_champs[arr[1]]['auto_increment']=true;
                }
                a_des_champs_index=arr[1];
            }else{
                if(arr[3] === 1){
                    /* si on tente un insert, il faut renseigner les champs not_null */
                    liste_des_champs_non_null.push( arr[1] );
                }
            }
        }
        if(essayer_auto_increment === true && auto_increment === false && a_des_champs_index !== ''){
            /* si la base sqlite vient d'être crée, les tables sont vides et */
            /* la table sqlite_sequence qui référence les auto increment n'existe pas */
            /* Donc si cette table est vide, on essaie de créer un enregistrement temporaire */
            let __nbEnregs=0;
            try{
                const r1=db.prepare( 'SELECT COUNT(*) FROM ' + nom_de_la_table ).all();
                __nbEnregs=r1[0]['__nbEnregs'];
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'erreur lors de la création de la table temporaire [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            if(__nbEnregs === 0){
                /* si le nombre d'enregistrements est supérieur à zéro */
                /* alors on aurait du trouver la caractéristique auto increment plus haut. */
                /* Ici on a zéro enregistrement donc on fait le test */
                try{
                    let res0=await db.exec( 'PRAGMA foreign_keys=OFF' );
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'erreur PRAGMA foreign_keys=OFF [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
                let sql2='INSERT INTO `' + nom_de_la_table + '`(`' + a_des_champs_index + '`';
                for(let k1 in liste_des_champs_non_null){
                    sql2+=' , `' + liste_des_champs_non_null[k1] + '`';
                }
                sql2+=') VALUES (1';
                for(k1 in liste_des_champs_non_null){
                    sql2+=' , "1"';
                }
                sql2+=')';
                try{
                    let res0=await db.exec( sql2 );
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'erreur sql2=' + sql2 + ' [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
                let tab1=[];
                try{
                    let statement=await db.prepare( 'SELECT * FROM sqlite_sequence WHERE name = \'' + nom_de_la_table + '\'' );
                    tab1=await statement.values();
                    await statement.finalize();
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'erreur SELECT * FROM sqlite_sequence WHERE name = \'' + nom_de_la_table + '\' [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
                for( let i=0 ; i < tab1.length ; i++ ){
                    liste_des_champs[a_des_champs_index]['auto_increment']=true;
                }
                try{
                    let res0=await db.exec( 'PRAGMA foreign_keys=ON' );
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'PRAGMA foreign_keys=ON [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
                let sql3='DELETE FROM `' + nom_de_la_table + '` WHERE `' + a_des_champs_index + '` = 1';
                try{
                    let res0=await db.exec( sql3 );
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'erreur sql3=' + sql3 + ' [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
                try{
                    let res0=await db.exec( 'PRAGMA foreign_keys=ON' );
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'PRAGMA foreign_keys=ON [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
            }
        }
        /* return(this.__gi1.bug1(donnees_retournees,liste_des_champs)); */
        try{
            let lignes=[];
            let sql='PRAGMA foreign_key_list(\'' + nom_de_la_table + '\') ';
            /* this.__gi1.ma_trace1('sql='+sql); */
            try{
                let statement=await db.prepare( sql );
                lignes=await statement.values();
                await statement.finalize();
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'erreur PRAGMA foreign_key_list(\'' + nom_de_la_table + '\') [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            for( let i=0 ; i < lignes.length ; i++ ){
                let arr=lignes[i];
                liste_des_champs[arr[3]]['cle_etrangere']={
                    "cid" : arr[0] ,
                    "seq" : arr[1] ,
                    "table" : arr[2] ,
                    "from" : arr[3] ,
                    "to" : arr[4] ,
                    "on_update" : arr[5]??null ,
                    "on_delete" : arr[6]??null ,
                    "match" : arr[7]??null
                };
            }
        }catch(e){
            donnees_retournees.__xst=0;
            this.__gi1.__xsi[__xer].push( 'erreur sql = PRAGMA foreign_key_list(\'' + nom_de_la_table + '\' [' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        try{
            let lignes=[];
            let sql='PRAGMA index_list(\'' + nom_de_la_table + '\') ';
            /* this.__gi1.ma_trace1('sql='+sql); */
            try{
                let statement=await db.prepare( sql );
                lignes=await statement.values();
                await statement.finalize();
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'erreur PRAGMA index_list(\'' + nom_de_la_table + '\') [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            for( let i=0 ; i < lignes.length ; i++ ){
                let arr=lignes[i];
                if(arr[3] === 'c'){
                    /* on ne prend que origin = 'c' car ce sont les indexes créés par l'utilisateur */
                    liste_des_indexes[arr[1]]={
                         /* seq	name	unique	origin	partial	on_update	on_delete	match */
                        "seq" : arr[0] ,
                        "name" : arr[1] ,
                        "unique" : arr[2] ,
                        "origin" : arr[3] ,
                        "partial" : arr[4] ,
                        "on_update" : arr[5]??null ,
                        "on_delete" : arr[6]??null ,
                        "match" : arr[7]??null ,
                        "champs" : {}
                    };
                    try{
                        let lignes1=[];
                        try{
                            let statement=await db.prepare( 'PRAGMA index_info(\'' + arr[1] + '\') ' );
                            lignes1=await statement.values();
                            await statement.finalize();
                        }catch(e){
                            this.__gi1.__xsi[__xer].push( 'erreur PRAGMA index_info(\'' + arr[1] + '\') [' + this.__gi1.nl2( e ) + ']' );
                            donnees_retournees.__xst=__xer;
                            return({"__xst" : __xer});
                        }
                        for( let j=0 ; j < lignes1.length ; j++ ){
                            let arr1=lignes1[j];
                            liste_des_indexes[arr[1]]['champs'][arr1[2]]={"seqno" : arr1[0] ,"cid" : arr1[1] ,"name" : arr1[2]};
                        }
                    }catch(e2){
                        donnees_retournees.__xst=0;
                        this.__gi1.__xsi[__xer].push( 'erreur sql = PRAGMA table_info(\'' + nom_de_la_table + '\' [' + this.__gi1.nl2( e2 ) + ']' );
                        return({"__xst" : __xer});
                    }
                }
            }
        }catch(e){
            donnees_retournees.__xst=0;
            this.__gi1.__xsi[__xer].push( 'erreur sql = PRAGMA table_info(\'' + nom_de_la_table + '\' [' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        let tableau={"liste_des_champs" : liste_des_champs ,"liste_des_indexes" : liste_des_indexes};
        /* return(this.__gi1.bug1(donnees_retournees,tableau)); */
        return({"__xst" : __xsu ,"value" : tableau});
    }
    /*
      =============================================================================================================
    */
    async obtenir_la_structure_de_la_base_sqlite( mat , d , donnees_recues , donnees_retournees , options_generales , chemin_base , essayer_auto_increment ){
        let tableauDesTables={};
        let db1=null;
        try{
            db1=new Database( chemin_base , {"create" : false} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( ' erreur d\'ouverture de la base ' + chemin_base + ' [' + this.__gi1.nl2( e ) );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          NE pas prendre les sous tables de CREATE VIRTUAL
        */
        let sql0='SELECT tbl_name FROM sqlite_master WHERE  name NOT LIKE \'sqlite_%\' AND type == \'table\' AND sql LIKE \'%CREATE virtual%\'';
        let lignes0=[];
        try{
            let statement=await db1.prepare( sql0 );
            lignes0=await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=0;
            this.__gi1.__xsi[__xer].push( 'erreur sql0 = ' + sql0 + ' [' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        let complementaire_sans_virtuelles='';
        if(lignes0.length > 0){
            for(let i in lignes0){
                complementaire_sans_virtuelles+=' AND tbl_name <> \'' + lignes0[i][0] + '\'';
                complementaire_sans_virtuelles+=' AND tbl_name NOT LIKE \'' + lignes0[i][0] + '_%\'';
            }
        }
        /* this.__gi1.ma_trace1( 'lignes0=' , lignes0 , 'complementaire_sans_virtuelles=' , complementaire_sans_virtuelles ); */
        let sql='SELECT tbl_name FROM sqlite_master WHERE  name NOT LIKE \'sqlite_%\' AND type == \'table\' ' + complementaire_sans_virtuelles;
        /* AND tbl_name LIKE \'%o%\' */
        let listeDesTables={};
        let lignes=[];
        try{
            let statement=await db1.prepare( sql );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=0;
            this.__gi1.__xsi[__xer].push( 'erreur sql = ' + sql + ' [' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        let tableau_des_tables=[];
        for(let col of lignes){
            tableau_des_tables.push( col[0] );
        }
        /* this.__gi1.ma_trace1( 'tableau_des_tables=' , tableau_des_tables ); */
        await db1.exec( 'BEGIN TRANSACTION;' );
        for(let k1 in tableau_des_tables){
            let v1=tableau_des_tables[k1];
            let obj=await this.obtenir_tableau_sqlite_de_la_table( mat , d , donnees_recues , donnees_retournees , options_generales , v1 , db1 , essayer_auto_increment );
            if(obj[__xst] === __xsu){
                tableauDesTables[v1]=obj['value'];
            }else{
                await db1.exec( 'ROLLBACK;' );
                await db1.close();
                donnees_retournees.__xst=0;
                this.__gi1.__xsi[__xer].push( 'erreur sur la table "' + v1 + '" [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
        }
        await db1.exec( 'ROLLBACK;' );
        await db1.close();
        return({"__xst" : __xsu ,"value" : tableauDesTables});
    }
    /*
      =============================================================================================================
    */
    async comparer_une_base_physique_et_une_base_virtuelle( mat , d , donnees_recues , donnees_retournees , options_generales , id_bdd_de_la_base , source_base_virtuelle ){
        let tableaux_retournes={"tableau1" : {} ,"tableau2" : {}};
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_371={
             /*  */
            "T0_chi_id_basedd" : id_bdd_de_la_base
        };
        let tt371=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 371 , criteres_371 , donnees_retournees , __db1 );
        if(tt371[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_bdd='../rev_' + donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + id_bdd_de_la_base + '.sqlite';
        /* this.__gi1.ma_trace1( 'chemin_bdd=' , chemin_bdd ); */
        if(!(await this.__gi1.is_file( chemin_bdd ))){
            this.__gi1.__xsi[__xer].push( ' fichier de la base de donnée sqlite introuvable pour la base ' + id_bdd_de_la_base + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let essayer_auto_increment=true;
        if(donnees_retournees.chi_id_projet > 2){
            essayer_auto_increment=false;
        }
        let ret=await this.obtenir_la_structure_de_la_base_sqlite( mat , d , donnees_recues , donnees_retournees , options_generales , chemin_bdd , essayer_auto_increment );
        if(ret[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' erreur sur la structure de la base ' + id_bdd_de_la_base + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let tableauDesTables=ret['value'];
        let ret2=await this.produire_un_tableau_de_la_structure_d_une_bdd_grace_a_un_source_de_structure( mat , d , donnees_recues , donnees_retournees , options_generales , source_base_virtuelle );
        if(ret2[__xst] === __xsu){
            tableaux_retournes={"tableau1" : ret['value'] ,"tableau2" : ret2['value']};
        }else{
            this.__gi1.__xsi[__xer].push( 'erreur sur la structure de la base 2 de la zone "genere"e ' + id_bdd_de_la_base + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu ,"__xva" : tableaux_retournes});
    }
    /*
      =============================================================================================================
    */
    async recuperer_les_tableaux_des_bases( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let id_bdd_de_la_base_en_cours='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_bdd_de_la_base_en_cours'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                id_bdd_de_la_base_en_cours=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let obj=await this.comparer_une_base_physique_et_une_base_virtuelle( mat , d , donnees_recues , donnees_retournees , options_generales , id_bdd_de_la_base_en_cours , donnees_recues[__xva]['source_base_sql'] );
        if(obj[__xst] === __xsu){
            donnees_retournees[__xva]=obj[__xva];
            donnees_retournees[__xva]['id_bdd_de_la_base_en_cours']=id_bdd_de_la_base_en_cours;
            let maj='';
            maj+='methode_module_dynamique1(';
            maj+=' nom_du_module2("_js/c_svg_bdd1.js"),';
            maj+=' methode2(afficher_resultat_comparaison_base_physique_et_base_virtuelle),';
            maj+=')';
            if(donnees_retournees[__xva].hasOwnProperty( 'maj' )){
                donnees_retournees[__xva]['maj']+=maj;
            }else{
                donnees_retournees[__xva]['maj']=maj;
            }
            donnees_retournees[__xva]['maj']=maj;
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( 'erreur dans recuperer_les_tableaux_des_bases [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    moi='sources1';
    __gi1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
        /* this.__gi1.ma_trace1('__gi1=',__gi1); */
    }
    /*
      =============================================================================================================
    */
    async executer_sql3( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let id_bdd_de_la_base=0;
        let contexte='';
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_bdd_de_la_base' && mat[i][2] === 'f' && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'contexte' && mat[i][2] === 'f' && mat[i + 1][2] === 'c'){
                contexte=mat[i + 1][1];
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_371={
             /*  */
            "T0_chi_id_basedd" : id_bdd_de_la_base
        };
        let tt371=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 371 , criteres_371 , donnees_retournees , __db1 );
        if(tt371[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let liste_des_projets=[];
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1){
            let criteres_316={};
            let tt316=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
             FROM b1.tbl_projets T0
            WHERE `T0`.`chi_id_projet` > 2
            ;
            */
            /*sql_inclure_fin*/ 316 , criteres_316 , donnees_retournees , __db1 );
            if(tt316[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            liste_des_projets=tt316[__xva];
        }
        for(let i in options_generales.bdd_ouvertes){
            try{
                await options_generales.bdd_ouvertes[i].base.close();
            } catch {}
        }
        let chemin_bdd='../rev_' + donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + id_bdd_de_la_base + '.sqlite';
        if(!(await this.__gi1.is_file( chemin_bdd ))){
            this.__gi1.__xsi[__xer].push( ' le fichier de la base n\'existe pas [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let db1temp=null;
        try{
            db1temp=new Database( chemin_bdd , {"create" : false} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( ' erreur d\'ouverture de la base ' + chemin_bdd + ' [' + this.__gi1.nl2( e ) );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA journal_mode=WAL;'];
        let la_requete=donnees_recues[__xva]['source_sql'];
        if(la_requete.indexOf( 'ADD COLUMN' ) >= 0){
            let regex=/\/\*[\s\S]*?\*\//g;
            la_requete=la_requete.replace( regex , '' ).replace( /\n/g , ' ' ).replace( /\r/g , ' ' );
            this.__gi1.ma_trace1( 'la_requete=' + la_requete );
            les_pragma_set.push( 'PRAGMA foreign_keys=OFF;' );
        }else{
            /*
              ajouter une colonne aver reference non nulle et valeur par défaut ne fonctionne pas 
              par exemple si on ajoute un champ chx_id_dossier à le table projet avec comme valeur par défaut 1
              on a une erreur !
            */
            this.__gi1.ma_trace1( ' on ajoute foreign key' );
            les_pragma_set.push( 'PRAGMA foreign_keys=ON;' );
        }
        for(let i in les_pragma_set){
            let a=await db1temp.exec( les_pragma_set[i] );
        }
        try{
            this.__gi1.ma_trace1( 'Exécution de la requête' );
            let b=await db1temp.exec( la_requete );
            await db1temp.close();
            this.__gi1.__xsi[__xsu].push( 'la base ' + id_bdd_de_la_base + ' a bien été modifiée contexte(' + contexte + ')' );
        }catch(e){
            if(e.stack.indexOf( 'duplicate column name' ) >= 0 && la_requete.indexOf( 'ADD COLUMN' ) >= 0){
                this.__gi1.ma_trace1( 'e=' , e , '\n la_requete=' + la_requete );
                this.__gi1.__xsi[__xal].push( 'la colonne existe déjà dans la base ' + id_bdd_de_la_base + ' contexte(' + contexte + ')' );
            }else if(e.stack.indexOf( 'no such column' ) >= 0 && la_requete.indexOf( 'DROP COLUMN' ) >= 0){
                /* si la colonne a déjà été supprimée, ce n'est pas vraiment une erreur */
                this.__gi1.__xsi[__xal].push( 'la colonne a déjà été supprimée de la base ' + id_bdd_de_la_base + ' contexte(' + contexte + ')' );
                await db1temp.close();
            }else{
                this.__gi1.ma_trace1( 'bug dans la requête ' + la_requete + e.stack );
                await db1temp.close();
                this.__gi1.__xsi[__xer].push( ' erreur d\'exécution de la requête de la base ' + chemin_bdd + ' <pre>' + la_requete + '</pre> [' + this.__gi1.nl2( e ) );
                if(la_requete.indexOf( 'DROP' ) >= 0 && la_requete.indexOf( 'COLUMN' ) >= 0){
                    this.__gi1.__xsi[__xer].push( ' <b>REMARQUE : </b><br /> si la colonne à supprimer est la dernière de la table, il faut la déplacer en avant dernière position pour la supprimer ' );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        if(donnees_retournees._CA_ === 1
               && donnees_retournees.chi_id_projet === 1
               && liste_des_projets.length > 0
               && id_bdd_de_la_base === 1
        ){
            /*
              Si on est en train de modifier la base principale, alors il faut aussi modifier les bases des autres projets.
            */
            if(contexte === 'ajouter_en_bdd_le_champ'
                   || contexte === 'supprimer_en_bdd_le_champ'
                   || contexte === 'renommer_en_bdd_un_champ'
            ){
                this.__gi1.ma_trace1( 'liste_des_projets=' , liste_des_projets , 'donnees_retournees._CA_=' + donnees_retournees._CA_ , 'donnees_retournees.chi_id_projet=' + donnees_retournees.chi_id_projet , 'contexte=' + contexte );
                for(let k1 in liste_des_projets){
                    let v1=liste_des_projets[k1];
                    chemin_bdd=options_generales.chemin_des_bdd + 'bdd_' + v1['T0.chi_id_projet'] + '.sqlite';
                    if((await this.__gi1.is_file( chemin_bdd ))){
                        try{
                            db1temp=new Database( chemin_bdd , {"create" : false} );
                        }catch(e){
                            this.__gi1.__xsi[__xer].push( ' erreur d\'ouverture de la base ' + chemin_bdd + ' [' + this.__gi1.nl2( e ) );
                            donnees_retournees.__xst=__xer;
                            return({"__xst" : __xer});
                        }
                        try{
                            let b=await db1temp.exec( la_requete );
                            await db1temp.close();
                            this.__gi1.__xsi[__xsu].push( 'la base ' + v1['T0.chi_id_projet'] + ' a bien été modifiée contexte(' + contexte + ')' );
                        }catch(e){
                            if(e.stack.indexOf( 'duplicate column name' ) >= 0 && la_requete.indexOf( 'ADD COLUMN' ) >= 0){
                                this.__gi1.ma_trace1( 'e=' , e , '\n la_requete=' + la_requete );
                                this.__gi1.__xsi[__xal].push( 'la colonne existe déjà dans la base ' + v1['T0.chi_id_projet'] + ' contexte(' + contexte + ')' );
                                await db1temp.close();
                            }else if(e.stack.indexOf( 'no such column' ) >= 0 && la_requete.indexOf( 'DROP COLUMN' ) >= 0){
                                this.__gi1.ma_trace1( 'e=' , e , '\n la_requete=' + la_requete );
                                this.__gi1.__xsi[__xal].push( 'la colonne a déjà été supprimée de la base ' + v1['T0.chi_id_projet'] + ' contexte(' + contexte + ')' );
                                await db1temp.close();
                            }else{
                                await db1temp.close();
                                this.__gi1.__xsi[__xer].push( ' erreur d\'exécution de la requête de la base ' + chemin_bdd + ' <pre>' + la_requete + '</pre> [' + this.__gi1.nl2( e ) );
                                donnees_retournees.__xst=__xer;
                                return({"__xst" : __xer});
                            }
                        }
                    }
                }
            }
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async enregistrer_le_modele_de_la_base( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_356={
             /*  */
            "n_chp_rev_travail_basedd" : donnees_recues[__xva]['source_rev_de_la_base'] ,
            "c_chi_id_basedd" : donnees_recues[__xva]['id_bdd_de_la_base']
        };
        let tt356=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_bdds SET 
           `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
        WHERE `chi_id_basedd` = :c_chi_id_basedd ;
        */
        /*sql_inclure_fin*/ 356 , criteres_356 , donnees_retournees , __db1 );
        if(tt356[__xst] !== __xsu || tt356['changements'] !== 1){
            if(tt356['__xme'] !== ''){
                this.__gi1.__xsi[__xer].push( tt356['__xme'] + ' [' + this.__gi1.nl2() );
            }else{
                this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
            }
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          Construction du fichier des dépendances.
          il faut frendre toutes les bases du projet et chercher les champs 
          references et reference_externe
        */
        let tt372=await this.__gi1.sql_iii(372 , {} , donnees_retournees , __db1 );
        if(tt372[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
//        this.__gi1.ma_trace1(tt372.__xva);
        let les_dependances_json={};        
        for( let i in tt372.__xva){
            let id_basedd=tt372.__xva[i]['T0.chi_id_basedd'];
            let rev_basedd=tt372.__xva[i]['T0.chp_rev_travail_basedd'];
            /* this.__gi1.ma_trace1('id_basedd='+id_basedd+' , rev_basedd=' + rev_basedd.substr(0,200)); */
            let omat=this.__gi1.__rev1.rev_tm(rev_basedd);
            if(omat.__xst!==__xsu){
                this.__gi1.__xsi[__xer].push( 'erreur d\'écriture du fichier js des dependances [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let mat1=omat.__xva;
            for(let i=0;i<10;i++){
//                this.__gi1.ma_trace1(mat1[i]);
            }
            let l01=mat1.length;
            for(let i=1 ; i < l01 ; i=mat1[i][12]){
                if(mat1[i][1]==='créer_table' && mat1[i][2]==='f'){
                    for(let j=i+1 ; j < l01 ; j=mat1[j][12]){
                        if(mat1[j][1]==='champs' && mat1[j][2]==='f'){
                            for(let k=j+1 ; k < l01 ; k=mat1[k][12]){
                                if(mat1[k][1]==='champ' && mat1[k][2]==='f'){
                                    for(let l=k+1 ; l < l01 ; l=mat1[l][12]){
                                        if(mat1[l][1]==='references' && mat1[l][2]==='f' ){
                                            if( !(mat1[l][8] === 2 && mat1[l+1][2] === 'c' && mat1[l+2][2] === 'c') ){
                                                this.__gi1.__xsi[__xer].push( 'un champ "references" ne contient pas le bon nombre d\'arguments [' + this.__gi1.nl2() );
                                                donnees_retournees.__xst=__xer;
                                                return({"__xst" : __xer});
                                            }
                                            let id_bdd_de_la_base_parente=id_basedd;
                                            let nom_de_la_table_parente=mat1[l+1][1];
                                            let nom_du_champ_parent=mat1[l+2][1];
                                            let id_base_enfant=id_basedd;
                                            let nom_de_la_table_enfant='';
                                            let nom_du_champ_enfant='';
                                            /*
                                              on a trouvé une référence interne et on va rechercher le nom de la table / champ enfant
                                            */
                                            for(let m=i+1 ; m < l01 ; m=mat1[m][12]){
                                                if(mat1[m][1]==='nom_de_la_table' && mat1[m][2]==='f' ){
                                                    if( !(mat1[m][8]===1 && mat1[m+1][2]==='c')){
                                                        this.__gi1.__xsi[__xer].push( 'le champ "nom_de_la_table" ne contient pas le bon nombre d\'argument [' + this.__gi1.nl2() );
                                                        donnees_retournees.__xst=__xer;
                                                        return({"__xst" : __xer});
                                                    }
                                                    nom_de_la_table_enfant=mat1[m+1][1];
                                                }
                                            }
                                            for(let m=k+1 ; m < l01 ; m=mat1[m][12]){
                                                if(mat1[m][1]==='nom_du_champ' && mat1[m][2]==='f' ){
                                                    if( !(mat1[m][8]===1 && mat1[m+1][2]==='c')){
                                                        this.__gi1.__xsi[__xer].push( 'le champ "nom_du_champ" ne contient pas le bon nombre d\'argument [' + this.__gi1.nl2() );
                                                        donnees_retournees.__xst=__xer;
                                                        return({"__xst" : __xer});
                                                    }
                                                    nom_du_champ_enfant=mat1[m+1][1];
                                                }
                                            }
                                            /*
                                              this.__gi1.ma_trace1('reference interne : ' + id_bdd_de_la_base_parente+'/'+nom_de_la_table_parente+'/'+nom_du_champ_parent + ' ' + id_base_enfant + '/' + nom_de_la_table_enfant + '/' + nom_du_champ_enfant );
                                            */
                                            if(!les_dependances_json.hasOwnProperty(nom_de_la_table_parente+'_'+nom_du_champ_parent)){
                                                 les_dependances_json[nom_de_la_table_parente+'_'+nom_du_champ_parent]={
                                                     "id_bdd_de_la_base_parente": id_bdd_de_la_base_parente ,
                                                     "table_parente": nom_de_la_table_parente,
                                                     "champ_parent": nom_du_champ_parent,
                                                     "dependances": [
                                                       {
                                                         "table_dependante": nom_de_la_table_enfant,
                                                         "champ_dependant": nom_du_champ_enfant,
                                                         "id_bdd_de_la_base_dependante": id_base_enfant
                                                       }
                                                      ]
                                                 }
                                            }else{
                                                 les_dependances_json[nom_de_la_table_parente+'_'+nom_du_champ_parent]['dependances'].push({
                                                     "table_dependante": nom_de_la_table_enfant,
                                                     "champ_dependant": nom_du_champ_enfant,
                                                     "id_bdd_de_la_base_dependante": id_base_enfant
                                                 });
                                            }
                                            
                                            
                                        }else if(mat1[l][1]==='meta' && mat1[l][2]==='f' ){
                                            for(let m=l+1 ; m < l01 ; m=mat1[m][12]){
                                                if(mat1[m][1]==='reference_externe' && mat1[m][2]==='f' ){
                                                    if( !(mat1[m][8] === 3 && mat1[m+1][2] === 'c' && mat1[m+2][2] === 'c' && mat1[m+2][2] === 'c') ){
                                                        this.__gi1.__xsi[__xer].push( 'un champ "reference_externe" ne contient pas le bon nombre d\'arguments [' + this.__gi1.nl2() );
                                                        donnees_retournees.__xst=__xer;
                                                        return({"__xst" : __xer});
                                                    }
                                                    let id_bdd_de_la_base_parente=parseInt(mat1[m+1][1],10);
                                                    let nom_de_la_table_parente=mat1[m+2][1];
                                                    let nom_du_champ_parent=mat1[m+3][1];
                                                    let id_base_enfant=id_basedd;
                                                    let nom_de_la_table_enfant='';
                                                    let nom_du_champ_enfant='';
                                                    /*
                                                      on a trouvé une référence externe et on va rechercher le nom de la table / champ enfant
                                                    */
                                                    for(let n=i+1 ; n < l01 ; n=mat1[n][12]){
                                                        if(mat1[n][1]==='nom_de_la_table' && mat1[n][2]==='f' ){
                                                            if( !(mat1[n][8]===1 && mat1[n+1][2]==='c')){
                                                                this.__gi1.__xsi[__xer].push( 'le champ "nom_de_la_table" ne contient pas le bon nombre d\'argument [' + this.__gi1.nl2() );
                                                                donnees_retournees.__xst=__xer;
                                                                return({"__xst" : __xer});
                                                            }
                                                            nom_de_la_table_enfant=mat1[n+1][1];
                                                        }
                                                    }
                                                    for(let n=k+1 ; n < l01 ; n=mat1[m][12]){
                                                        if(mat1[n][1]==='nom_du_champ' && mat1[n][2]==='f' ){
                                                            if( !(mat1[n][8]===1 && mat1[n+1][2]==='c')){
                                                                this.__gi1.__xsi[__xer].push( 'le champ "nom_du_champ" ne contient pas le bon nombre d\'argument [' + this.__gi1.nl2() );
                                                                donnees_retournees.__xst=__xer;
                                                                return({"__xst" : __xer});
                                                            }
                                                            nom_du_champ_enfant=mat1[n+1][1];
                                                        }
                                                    }
                                                    /*
                                                      this.__gi1.ma_trace1('reference externe : ' + id_bdd_de_la_base_parente+'/'+nom_de_la_table_parente+'/'+nom_du_champ_parent + ' ' + id_base_enfant + '/' + nom_de_la_table_enfant + '/' + nom_du_champ_enfant );
                                                    */
                                                    if(!les_dependances_json.hasOwnProperty(nom_de_la_table_parente+'_'+nom_du_champ_parent)){
                                                         les_dependances_json[nom_de_la_table_parente+'_'+nom_du_champ_parent]={
                                                             "id_bdd_de_la_base_parente": id_bdd_de_la_base_parente ,
                                                             "table_parente": nom_de_la_table_parente,
                                                             "champ_parent": nom_du_champ_parent,
                                                             "dependances": [
                                                               {
                                                                 "table_dependante": nom_de_la_table_enfant,
                                                                 "champ_dependant": nom_du_champ_enfant,
                                                                 "id_bdd_de_la_base_dependante": id_base_enfant
                                                               },
                                                             ]
                                                         }
                                                    }else{
                                                         les_dependances_json[nom_de_la_table_parente+'_'+nom_du_champ_parent]['dependances'].push({
                                                             "table_dependante": nom_de_la_table_enfant,
                                                             "champ_dependant": nom_du_champ_enfant,
                                                             "id_bdd_de_la_base_dependante": id_base_enfant
                                                         });
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
            /* this.__gi1.ma_trace1('les_dependances_json=',les_dependances_json); */
            
        }
        let chemin_fichier__liste_des_dependances='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_dependances_bases.json';
        let contenu_fichier__liste_des_dependances='' + JSON.stringify( les_dependances_json , null , 2 ) + ''; // donnees_recues[__xva]['tableau_des_dependances']
        try{
            await this.__gi1.file_put_contents( chemin_fichier__liste_des_dependances , contenu_fichier__liste_des_dependances );
        }catch{
            this.__gi1.__xsi[__xer].push( 'erreur d\'écriture du fichier js des dependances [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(donnees_retournees.chi_id_projet >= 4){
            let chi_id_basedd=0;
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
                }
            }
            if(chi_id_basedd > 0){
                let m=await import( './bdds1_s.js' );
                let o=new m['bdds1']( this.__gi1 );
                let obj=await o.enregistrer_la_matrice_dans_la_table_rev( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
                if(obj[__xst] !== __xsu){
                    this.__gi1.__xsi[__xer].push( 'erreur de sauvegarde de matrice de la base [' + this.__gi1.nl2() );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
            }else{
                this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        this.__gi1.__xsi[__xsu].push( 'le schéma de la base a bien été sauvegardée et le fichier des dépendances reconstruit' );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
}
export{v_svg_bdd1 as v_svg_bdd1};