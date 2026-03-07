const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
/*
  =====================================================================================================================
*/
class bdds1{
    /*
      =============================================================================================================
    */
    async enregistrer_la_matrice_dans_la_table_rev( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){
        let chi_id_basedd=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(!(this.__gi1.est_num( chi_id_basedd ) && chi_id_basedd > 0)){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let criteres_357={"T0_chi_id_basedd" : chi_id_basedd};
        let tt357=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
        ;
        */
        /*sql_inclure_fin*/ 357 , criteres_357 , donnees_retournees , __db1 );
        if(tt357[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_353={"chp_provenance_rev" : 'base' ,"chx_source_rev" : chi_id_basedd};
        /* suppression des anciennes données de la table rev */
        let tt353=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_revs
        WHERE (`chp_provenance_rev` = :chp_provenance_rev
           AND `chx_source_rev` = :chx_source_rev) ;
        */
        /*sql_inclure_fin*/ 353 , criteres_353 , donnees_retournees , __db1 );
        if(tt353[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1){
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }
        let obj_matrice=await this.__gi1.__rev1.rev_tcm( tt357[__xva][0]['T0.chp_rev_travail_basedd'] );
        if(obj_matrice[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        const repl0=new RegExp( '¶' + 'LF¶' , 'g' );
        let matrice=obj_matrice[__xva];
        let a_sauvegarder={"donnees" : []};
        for( let i=0 ; i < matrice.length ; i++ ){
            /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev */
            a_sauvegarder.donnees.push( {
                    "chp_provenance_rev" : 'base' ,
                    "chx_source_rev" : chi_id_basedd ,
                    "chp_id_rev" : matrice[i][0] ,
                    "chp_valeur_rev" : matrice[i][1].replace( repl0 , "\n" ) ,
                    "chp_type_rev" : matrice[i][2] ,
                    "chp_niveau_rev" : matrice[i][3] ,
                    "chp_quotee_rev" : matrice[i][4] ,
                    "chp_pos_premier_rev" : matrice[i][5] ,
                    "chp_pos_dernier_rev" : matrice[i][6] ,
                    "chp_parent_rev" : matrice[i][7] ,
                    "chp_nbr_enfants_rev" : matrice[i][8] ,
                    "chp_num_enfant_rev" : matrice[i][9] ,
                    "chp_profondeur_rev" : matrice[i][10] ,
                    "chp_pos_ouver_parenthese_rev" : matrice[i][11] ,
                    "chp_enfant_suivant_rev" : matrice[i][12] ,
                    "chp_commentaire_rev" : matrice[i][13]
                } );
        }
        let tt358=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_revs`(
            `chp_provenance_rev` , 
            `chx_source_rev` , 
            `chp_id_rev` , 
            `chp_valeur_rev` , 
            `chp_type_rev` , 
            `chp_niveau_rev` , 
            `chp_quotee_rev` , 
            `chp_pos_premier_rev` , 
            `chp_pos_dernier_rev` , 
            `chp_parent_rev` , 
            `chp_nbr_enfants_rev` , 
            `chp_num_enfant_rev` , 
            `chp_profondeur_rev` , 
            `chp_pos_ouver_parenthese_rev` , 
            `chp_enfant_suivant_rev` , 
            `chp_commentaire_rev`
        ) VALUES (
            :chp_provenance_rev , 
            :chx_source_rev , 
            :chp_id_rev , 
            :chp_valeur_rev , 
            :chp_type_rev , 
            :chp_niveau_rev , 
            :chp_quotee_rev , 
            :chp_pos_premier_rev , 
            :chp_pos_dernier_rev , 
            :chp_parent_rev , 
            :chp_nbr_enfants_rev , 
            :chp_num_enfant_rev , 
            :chp_profondeur_rev , 
            :chp_pos_ouver_parenthese_rev , 
            :chp_enfant_suivant_rev , 
            :chp_commentaire_rev
        );
        */
        /*sql_inclure_fin*/ 358 , a_sauvegarder , donnees_retournees , __db1 );
        this.__gi1.__xsi[__xif].push( 'la table rev a été enrichie' );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async dump_de_la_base( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_projet=null ){
        let chi_id_basedd=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let db=null;
        let chemin_bdd='';
        let chemin_fichier_definition_de_la_base='';
        let chemin_fichier_definition_des_index='';
        let chemin_fichier_insert_seulement='';
        if(chi_id_projet !== null){
            /*
              Cas où on fait une sauvegarde de la base du projet.
            */
            let chemin_bdd='../rev_1/__bases_de_donnees/bdd_' + chi_id_projet + '.sqlite';
            db=await this.__gi1.ouvrir_bdd_temp( chemin_bdd , donnees_retournees , options_generales );
            chemin_fichier_definition_de_la_base='../rev_1/__fichiers_generes/bdd_' + chi_id_projet + '.sqlite.systeme_structure.sql';
            chemin_fichier_definition_des_index='../rev_1/__fichiers_generes/bdd_' + chi_id_projet + '.sqlite.systeme_index.sql';
            chemin_fichier_insert_seulement='../rev_1/__fichiers_generes/bdd_' + chi_id_projet + '.sqlite.systeme_donnees.sql';
        }else{
            db=await this.__gi1.ouvrir_bdd( chi_id_basedd , donnees_retournees , options_generales );
            if(chi_id_basedd === 0){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__gi1 );
            if(donnees_retournees._CA_ === 2){
                chemin_fichier_definition_de_la_base='../rev_2/__fichiers_generes/bdd_' + chi_id_basedd + '.sqlite.v2_structure.sql';
                chemin_fichier_definition_des_index='../rev_2/__fichiers_generes/bdd_' + chi_id_basedd + '.sqlite.v2_index.sql';
            }else{
                chemin_fichier_definition_de_la_base='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/bdd_' + chi_id_basedd + '.sqlite.v2_structure.sql';
                chemin_fichier_definition_des_index='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/bdd_' + chi_id_basedd + '.sqlite.v2_index.sql';
            }
            if(donnees_retournees._CA_ === 2){
                chemin_fichier_insert_seulement='../rev_2/__fichiers_generes/bdd_' + chi_id_basedd + '.sqlite.v2_donnees.sql';
            }else{
                chemin_fichier_insert_seulement='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/bdd_' + chi_id_basedd + '.sqlite.v2_donnees.sql';
            }
        }
        let tableau_des_tables1=[];
        try{
            let statement=await db.prepare( 'SELECT name FROM sqlite_master WHERE type =\'table\' AND name NOT LIKE \'sqlite_%\';' );
            tableau_des_tables1=await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=0;
            this.__gi1.__xsi[__xer].push( 'erreur de récupération des tables de la base [' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : 0});
        }
        /* return(this.__gi1.bug1(donnees_retournees,tableau_des_tables1)); */
        let les_tables=[];
        for( let i=0 ; i < tableau_des_tables1.length ; i++ ){
            les_tables.push( tableau_des_tables1[i][0] );
        }
        /*
          =====================================================================================================
          Écriture de la définition des tables.
          =====================================================================================================
        */
        const pointeur_definition_de_la_base=await Deno.create( chemin_fichier_definition_de_la_base );
        const writer_definition_de_la_base=pointeur_definition_de_la_base.writable.getWriter();
        for( let i=0 ; i < les_tables.length ; i++ ){
            let definition_de_la_table='';
            const sql1='SELECT sql FROM sqlite_master WHERE name = \'' + les_tables[i] + '\';';
            let statement1=await db.prepare( sql1 );
            let lignes1=await statement1.values();
            await statement1.finalize();
            for(let numero_de_ligne in lignes1){
                definition_de_la_table=lignes1[numero_de_ligne][0] + ';\r\n\r\n';
            }
            await writer_definition_de_la_base.write( new TextEncoder().encode( '\r\n/*\r\n' + "=".repeat( 80 ) + ' TABLE ' + les_tables[i] + ' \r\n*/\r\n' ) );
            await writer_definition_de_la_base.write( new TextEncoder().encode( '\r\n' + definition_de_la_table + '\r\n\r\n' ) );
        }
        await writer_definition_de_la_base.close();
        /*
          =====================================================================================================
          Écriture de la définition des index.
          =====================================================================================================
        */
        const pointeur_definition_des_index=await Deno.create( chemin_fichier_definition_des_index );
        const writer_definition_des_index=pointeur_definition_des_index.writable.getWriter();
        let sql_insertion_des_index='';
        const sql1="SELECT name , tbl_name FROM sqlite_master WHERE type ='index' AND name NOT LIKE 'sqlite_%';";
        let statement1=await db.prepare( sql1 );
        let lignes1=await statement1.values();
        await statement1.finalize();
        /* return(this.__gi1.bug1(donnees_retournees,lignes1)); */
        for(let i in lignes1){
            const sql2="SELECT sql FROM sqlite_master WHERE tbl_name='" + lignes1[i][1] + "' and name='" + lignes1[i][0] + "';";
            let statement1=await db.prepare( sql2 );
            let lignes2=await statement1.values();
            await statement1.finalize();
            for(let j in lignes2){
                await writer_definition_des_index.write( new TextEncoder().encode( lignes2[j] + ";" + '\r\n\r\n' ) );
            }
        }
        await writer_definition_des_index.close();
        /*
          =====================================================================================================
          ecriture séquentielle des INSERT INTO
          =====================================================================================================
        */
        const pointeur_fichier_des_insert_seulement=await Deno.create( chemin_fichier_insert_seulement );
        const writer_insert_seulement=pointeur_fichier_des_insert_seulement.writable.getWriter();
        let chaine_insert_seulement='';
        await writer_insert_seulement.write( new TextEncoder().encode( chaine_insert_seulement ) );
        for(let k1 in les_tables){
            let v1=les_tables[k1];
            let debut_de_insert="INSERT INTO " + v1 + " ( ";
            const sql22="PRAGMA table_info(" + v1 + ")";
            let statement22=await db.prepare( sql22 );
            let lignes22=await statement22.values();
            await statement22.finalize();
            /* [[0,"chi_id_rev","INTEGER",1,null,1],[1,"chp_provenance_rev","VARCHAR(64)",0,"NULL",0], */
            /* return(this.__gi1.bug1(donnees_retournees,lignes2)); */
            let liste_des_champs=[];
            for( let i=0 ; i < lignes22.length ; i++ ){
                debut_de_insert+=' ' + lignes22[i][1] + ' , ';
                liste_des_champs.push( lignes22[i][1] );
            }
            debut_de_insert=debut_de_insert.slice( 0 , -2 ) + ") VALUES";
            const sql1="SELECT count(*) as __nb_enregs FROM " + v1 + "";
            let statement1=await db.prepare( sql1 );
            let nb_enregs=0;
            for(const row of statement1){
                nb_enregs=row.__nb_enregs;
            }
            statement1.finalize();
            if(nb_enregs > 0){
                /*
                  On écrit des blocs d'insert.
                */
                const nombre_d_enregistrements_par_bloc=1000;
                let offset=0;
                let continuer=true;
                do{
                    chaine_insert_seulement='';
                    const sql2="SELECT * FROM " + v1 + ' LIMIT ' + nombre_d_enregistrements_par_bloc + ' OFFSET ' + offset + ';';
                    let statement2=await db.prepare( sql2 );
                    for(let row2 of statement2){
                        let le_insert=[];
                        for(let elt in row2){
                            if(row2[elt] === null){
                                le_insert.push( 'NULL' );
                            }else{
                                le_insert.push( '\'' + String( row2[elt] ).replace( /\'/g , '\'\'' ) + '\'' );
                            }
                        }
                        chaine_insert_seulement+='\r\n' + "(" + le_insert.join( "," ) + "),";
                    }
                    statement2.finalize();
                    if(offset > nb_enregs){
                        continuer=false;
                    }
                    if(chaine_insert_seulement !== ''){
                        if(offset === 0){
                            await writer_insert_seulement.write( new TextEncoder().encode( '\r\n\r\n/*' + "=".repeat( 120 ) + '*/\r\n' ) );
                        }
                        await writer_insert_seulement.write( new TextEncoder().encode( '\r\n/*' + "=".repeat( 80 ) + ' DEBUT BLOC TABLE ' + v1 + ' offset ' + offset + ' */\r\n' ) );
                        await writer_insert_seulement.write( new TextEncoder().encode( debut_de_insert ) );
                        chaine_insert_seulement=chaine_insert_seulement.substr( 0 , chaine_insert_seulement.length - 1 ) + ';';
                        await writer_insert_seulement.write( new TextEncoder().encode( chaine_insert_seulement ) );
                        await writer_insert_seulement.write( new TextEncoder().encode( '\r\n/*' + "=".repeat( 80 ) + ' FIN BLOC TABLE ' + v1 + ' offset ' + offset + ' */\r\n' ) );
                        chaine_insert_seulement='';
                    }
                    offset+=nombre_d_enregistrements_par_bloc;
                }while(continuer === true);
            }
        }
        await writer_insert_seulement.close();
        await db.close();
        this.__gi1.__xsi[__xsu].push( ' le dump de la base "' + chi_id_basedd + '" a été réalisé [' + this.__gi1.nl2() + ']' );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recuperer_les_revs_des_bases( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let les_bases_a_editer='';
        if(donnees_recues[__xva].hasOwnProperty( 'les_bases_a_editer' )){
            les_bases_a_editer=donnees_recues[__xva]['les_bases_a_editer'];
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_171={};
        let tt171=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 171 , criteres_171 , donnees_retournees , __db1 );
        if(tt171[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['les_bases_du_projet']=[];
        if(tt171[__xva].length > 0){
            donnees_retournees[__xva]['les_bases_du_projet']=tt171[__xva];
        }
        donnees_retournees[__xac]='';
        await this.__gi1.obtenir_les_genres( mat , d , donnees_recues , donnees_retournees , options_generales );
        donnees_retournees[__xac]+='m1(n1(' + this.moi + '),f1(apres_recuperer_les_revs_des_bases(les_bases_a_editer(\'' + les_bases_a_editer + '\'))))';
        /* ,sans_maj_de_hash() */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_basedd'] ,  donnees_retournees , options_generales , __db1 );
          if(obj[__xst] === __xsu){
              return({"__xst" : __xsu});
          }else{
              return({"__xst" : __xer});
          }
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /* this.__gi1.__xsi[__xdv][]=' ajouter ou pas des "actions_apres_modifier" [' + __LINE__ + ']'; */
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
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_basedd']=form['chi_id_basedd'] === null ? ( null ) : ( parseInt( form['chi_id_basedd'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_fournisseur_basedd'] === null || form['chp_fournisseur_basedd'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "fournisseur" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        /* sélection du champ à modifier */
        let criteres_select_371={"T0_chi_id_basedd" : form['chi_id_basedd']};
        let tt371=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 371 , criteres_select_371 , donnees_retournees , __db1 );
        if(tt371[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt371[__xst] === __xsu && tt371[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt371[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let donnees_sql={
                "c_chi_id_basedd" : form['chi_id_basedd'] ,
                "n_chp_commentaire_basedd" : form['chp_commentaire_basedd'] === '' ? ( null ) : ( form['chp_commentaire_basedd'] ) ,
                "n_chp_rev_travail_basedd" : form['chp_rev_travail_basedd'] === '' ? ( null ) : ( form['chp_rev_travail_basedd'] ) ,
                "n_chp_fournisseur_basedd" : form['chp_fournisseur_basedd']
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt362=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_bdds SET 
               `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
               `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
               `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
            WHERE `chi_id_basedd` = :c_chi_id_basedd ;
            */
            /*sql_inclure_fin*/ 362 , donnees_sql , donnees_retournees , __db1 );
            if(tt362[__xst] !== __xsu){
                if(tt362['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt362['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt371[__xva][0] , __db1 );
            if(__taam[__xst] !== __xsu){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'erreur après modification [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true){
                if(form['__mat_liste_si_ok']){
                    let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                    let d=1;
                    await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales );
                }
                return({"__xst" : __xsu});
            }
            let tt371_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
             FROM b1.tbl_bdds T0
            WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
            ;
            */
            /*sql_inclure_fin*/ 371 , criteres_select_371 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt371_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt371;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_basedd=null , __db1=null ){
        if(chi_id_basedd === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_basedd'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_basedd(' + chi_id_basedd + ')))))';
        }
        if(chi_id_basedd === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt371=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 371 , {"T0_chi_id_basedd" : chi_id_basedd} , donnees_retournees , __db1 );
        if(tt371[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt371[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt371;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_basedd=null ){
        if(chi_id_basedd === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_basedd'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_371={
             /*  */
            "T0_chi_id_basedd" : chi_id_basedd
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
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt371;
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
        if(form['chi_id_basedd'] <= 1){
            this.__gi1.__xsi[__xer].push( 'il n\'est pas possible de supprimer cet élément [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_371={
             /*  */
            "T0_chi_id_basedd" : form['chi_id_basedd']
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
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt371[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_364={
             /*  */
            "chi_id_basedd" : form['chi_id_basedd']
        };
        let tt364=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_bdds
        WHERE `chi_id_basedd` = :chi_id_basedd ;
        */
        /*sql_inclure_fin*/ 364 , criteres_364 , donnees_retournees , __db1 );
        /*  */
        if(tt364[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt371[__xva][0] , __db1 );
        if(aac[__xst] === __xer){
            this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*  */
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
        let chi_id_basedd=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_basedd === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_371={"T0_chi_id_basedd" : chi_id_basedd};
        let tt371=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 371 , critere_371 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt371;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(form['chp_fournisseur_basedd'] === null || form['chp_fournisseur_basedd'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "fournisseur" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_commentaire_basedd" : form['chp_commentaire_basedd'] === '' ? ( null ) : ( form['chp_commentaire_basedd'] ) ,
                        "chp_fournisseur_basedd" : form['chp_fournisseur_basedd']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt363=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_bdds`(
            `chp_commentaire_basedd` , 
            `chp_fournisseur_basedd`
        ) VALUES (
            :chp_commentaire_basedd , 
            :chp_fournisseur_basedd
        );
        */
        /*sql_inclure_fin*/ 363 , donnees_sql , donnees_retournees , __db1 );
        if(tt363[__xst] === __xsu){
            if(tt363['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt363['nouvel_id'] , form , __db1 );
            if(aac[__xst] === __xer){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt363['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt363['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__gi1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres361={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres361[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt361=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd`
         FROM b1.tbl_bdds T0
        WHERE (   `T0`.`chi_id_basedd` = :T0_chi_id_basedd) 
        ORDER BY `T0`.`chi_id_basedd` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 361 , criteres361 , donnees_retournees , __db1 );
        if(tt361.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt361[__xst] === __xsu && tt361[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres361['debut']=__debut;
            let tt361=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd`
             FROM b1.tbl_bdds T0
            WHERE (   `T0`.`chi_id_basedd` = :T0_chi_id_basedd) 
            ORDER BY `T0`.`chi_id_basedd` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 361 , criteres361 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt361;
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
    moi='bdds1';
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
export{bdds1 as bdds1};