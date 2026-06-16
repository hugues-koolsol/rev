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
class bdds1{
    /*
      =============================================================================================================
    */
    async forcer_fermeture_fichier_wal( mat , d ){
        let chi_id_basedd=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let chemin_complet_bdd=this.__ig1.options_generales.repertoire_racine_de_tous_les_projets + 'rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__bases_de_donnees/' + 'bdd_' + chi_id_basedd + '.sqlite';
        /* this.ma_trace1("chemin_complet_bdd="+chemin_complet_bdd); */
        try{
            let __db=new Database( chemin_complet_bdd , {"create" : false} );
            await __db.exec( "PRAGMA wal_checkpoint(FULL);" );
            await __db.exec( "VACUUM;" );
            __db.close();
            this.__ig1.ma_trace1( "all good !" );
        }catch(e){
            this.__ig1.ma_trace1( "e" , e.stack );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async enregistrer_la_matrice_dans_la_table_rev( mat , d , __db1=null ){
        let chi_id_basedd=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(!(this.__ig1.est_num( chi_id_basedd ) && chi_id_basedd > 0)){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let criteres_1357={"T0_chi_id_basedd" : chi_id_basedd};
        let tt1357=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
        ;
        */
        /*sql_inclure_fin*/ 1357 , criteres_1357 , this.__ig1.donnees_retournees , __db1 );
        if(tt1357.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1357.__xme});
        }
        let criteres_1353={"chp_provenance_rev" : 'base' ,"chx_source_rev" : chi_id_basedd};
        /* suppression des anciennes données de la table rev */
        let tt1353=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_revs
        WHERE (`chp_provenance_rev` = :chp_provenance_rev
           AND `chx_source_rev` = :chx_source_rev) ;
        */
        /*sql_inclure_fin*/ 1353 , criteres_1353 , this.__ig1.donnees_retournees , __db1 );
        if(tt1353.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet === 1){
            return({"__xst" : __xsu});
        }
        let obj_matrice=await this.__ig1.__rev1.rev_tcm( tt1357[__xva][0]['T0.chp_rev_travail_basedd'] );
        if(obj_matrice.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
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
        let tt1358=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 1358 , a_sauvegarder , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees.__xsi[__xif].push( 'la table rev a été enrichie' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async dump_de_la_base( mat , d , chi_id_projet=null ){
        /* chi_id_projet est <> de null dans le cas ou on fait une saugegarde de la base système */
        this.__ig1.asynchrone=true;
        this.asynchrone_dump_de_la_base( mat , d , chi_id_projet , true );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async asynchrone_dump_de_la_base( mat , d , chi_id_projet=null , asynchrone=false ){
        /* attention, cette fonction asynchrone DOIT être incluse dans un try/catch */
        try{
            if(asynchrone === true){
                await this.__ig1.sleep3( 200 );
            }
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
            let chemin_sauvegarde='';
            let db=null;
            let chemin_bdd='';
            let chemin_fichier_definition_de_la_base='';
            let chemin_fichier_definition_des_index='';
            let chemin_fichier_insert_seulement='';
            let les_tables_virtuelles=[];
            /* this.__ig1.ma_trace1("chi_id_projet=",chi_id_projet); */
            if(chi_id_projet !== null){
                /*
                  =====================================================================================
                  chi_id_projet est <> de null dans le cas ou on fait une sauvegarde de la base système 
                  à partir de la liste des projets
                  =====================================================================================
                */
                let chemin_bdd='../rev_1/__bases_de_donnees/bdd_' + chi_id_projet + '.sqlite';
                db=await this.__ig1.ouvrir_bdd_temp( chemin_bdd );
                let chemin_sauvegarde='../rev_1/__fichiers_generes/__sauvegarde_des_bases/';
                if(!(await this.__ig1.is_dir( chemin_sauvegarde ))){
                    await Deno.mkdir( chemin_sauvegarde , {"mode" : 0o777} );
                }
                chemin_fichier_definition_de_la_base=chemin_sauvegarde + 'bdd_' + chi_id_projet + '.sqlite.systeme_structure.sql';
                chemin_fichier_definition_des_index=chemin_sauvegarde + 'bdd_' + chi_id_projet + '.sqlite.systeme_index.sql';
                chemin_fichier_insert_seulement=chemin_sauvegarde + 'bdd_' + chi_id_projet + '.sqlite.systeme_donnees.sql';
            }else{
                /*
                  on ne fait pas de sauvegarde des tables virtuelles 
                  il faut donc aller les repérer
                */
                let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
                /* sélection du champ à modifier */
                let criteres_select_1371={"T0_chi_id_basedd" : chi_id_basedd};
                let tt1371=await this.__ig1.sql_iii(
                /*sql_inclure_deb*/ /*#
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
                 FROM b1.tbl_bdds T0
                WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
                ;
                */
                /*sql_inclure_fin*/ 1371 , criteres_select_1371 , this.__ig1.donnees_retournees , __db1 );
                __db1.close();
                if(tt1371.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : 'base non trouvée [' + this.__ig1.nl2() + ']'});
                }
                /* this.__ig1.ma_trace1("tt1371=" , tt1371 ); */
                let le_rev_de_la_base=tt1371.__xva[0]['T0.chp_rev_travail_basedd'];
                /* this.__ig1.ma_trace1("le_rev_de_la_base",le_rev_de_la_base); */
                let obj1=this.__ig1.__rev1.rev_tm( le_rev_de_la_base );
                if(obj1.__xst !== 1){
                    return({"__xst" : __xer ,"__xme" : 'erreur de transformation du rev de la base en matrice [' + this.__ig1.nl2() + ']'});
                }
                let l01=obj1.__xva.length;
                for( let i=1 ; i < l01 ; i=obj1.__xva[i][12] ){
                    if(obj1.__xva[i][1] === 'créer_table' && obj1.__xva[i][2] === 'f'){
                        let nom_de_la_table='';
                        for( let j=i + 1 ; j < l01 ; j=obj1.__xva[j][12] ){
                            if(obj1.__xva[j][1] === 'nom_de_la_table'
                                   && obj1.__xva[j][2] === 'f'
                                   && obj1.__xva[j][8] === 1
                                   && obj1.__xva[j + 1][2] === 'c'
                            ){
                                nom_de_la_table=obj1.__xva[j + 1][1];
                            }
                        }
                        for( let j=i + 1 ; j < l01 ; j=obj1.__xva[j][12] ){
                            if(obj1.__xva[j][1] === 'meta' && obj1.__xva[j][2] === 'f'){
                                for( let k=j + 1 ; k < l01 ; k=obj1.__xva[k][12] ){
                                    if(obj1.__xva[k][1] === 'est_table_virtuelle'
                                           && obj1.__xva[k][2] === 'f'
                                           && obj1.__xva[k][8] === 1
                                           && obj1.__xva[k + 1][2] === 'c'
                                    ){
                                        les_tables_virtuelles.push( nom_de_la_table );
                                        les_tables_virtuelles.push( nom_de_la_table + '_data' );
                                        les_tables_virtuelles.push( nom_de_la_table + '_idx' );
                                        les_tables_virtuelles.push( nom_de_la_table + '_content' );
                                        les_tables_virtuelles.push( nom_de_la_table + '_docsize' );
                                        les_tables_virtuelles.push( nom_de_la_table + '_config' );
                                    }
                                }
                            }
                        }
                    }
                }
                let chemin_de_la_base=this.__ig1.options_generales.repertoire_racine_de_tous_les_projets + 'rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + chi_id_basedd + '.sqlite';
                if(!(await this.__ig1.is_file( chemin_de_la_base ))){
                    return({"__xst" : __xer ,"__xme" : 'base non trouvée [' + this.__ig1.nl2() + ']'});
                }
                if(chi_id_basedd === 0){
                    return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
                }
                db=await this.__ig1.ouvrir_bdd_temp( chemin_de_la_base );
                let m=await import( './dossiers1_s.js' );
                let o=new m['dossiers1']( this.__ig1 );
                if(this.__ig1.donnees_retournees._CA_ === 2){
                    chemin_sauvegarde='../rev_2/__fichiers_generes/__sauvegarde_des_bases/';
                    chemin_fichier_definition_de_la_base=chemin_sauvegarde + 'bdd_' + chi_id_basedd + '.sqlite.v2_structure.sql';
                    chemin_fichier_definition_des_index=chemin_sauvegarde + 'bdd_' + chi_id_basedd + '.sqlite.v2_index.sql';
                    chemin_fichier_insert_seulement=chemin_sauvegarde + 'bdd_' + chi_id_basedd + '.sqlite.v2_donnees.sql';
                }else{
                    chemin_sauvegarde='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__sauvegarde_des_bases/';
                    chemin_fichier_definition_de_la_base=chemin_sauvegarde + 'bdd_' + chi_id_basedd + '.sqlite.v2_structure.sql';
                    chemin_fichier_definition_des_index=chemin_sauvegarde + 'bdd_' + chi_id_basedd + '.sqlite.v2_index.sql';
                    chemin_fichier_insert_seulement=chemin_sauvegarde + 'bdd_' + chi_id_basedd + '.sqlite.v2_donnees.sql';
                }
                if(!(await this.__ig1.is_dir( chemin_sauvegarde ))){
                    await Deno.mkdir( chemin_sauvegarde , {"mode" : 0o777} );
                }
            }
            let tableau_des_tables1=[];
            try{
                let statement=await db.prepare( 'SELECT name FROM sqlite_master WHERE type =\'table\' AND name NOT LIKE \'sqlite_%\';' );
                tableau_des_tables1=await statement.values();
                await statement.finalize();
            }catch(e){
                this.__ig1.donnees_retournees.__xsi[__xer].push( 'erreur de récupération des tables de la base [' + this.__ig1.nl2( e ) + ']' );
                return({"__xst" : 0});
            }
            /* return(this.__ig1.bug1(this.__ig1.donnees_retournees,tableau_des_tables1)); */
            let les_tables=[];
            for( let i=0 ; i < tableau_des_tables1.length ; i++ ){
                if(!les_tables_virtuelles.includes( tableau_des_tables1[i][0] )){
                    les_tables.push( tableau_des_tables1[i][0] );
                }
            }
            /*
              =============================================================================================
              Écriture de la définition des tables.
              =============================================================================================
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
              =============================================================================================
              Écriture de la définition des index.
              =============================================================================================
            */
            const pointeur_definition_des_index=await Deno.create( chemin_fichier_definition_des_index );
            const writer_definition_des_index=pointeur_definition_des_index.writable.getWriter();
            let sql_insertion_des_index='';
            const sql1="SELECT name , tbl_name FROM sqlite_master WHERE type ='index' AND name NOT LIKE 'sqlite_%';";
            let statement1=await db.prepare( sql1 );
            let lignes1=await statement1.values();
            await statement1.finalize();
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
              =============================================================================================
              ecriture séquentielle des INSERT INTO
              =============================================================================================
            */
            let les_champs_des_tables={};
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
                let liste_des_champs=[];
                for( let i=0 ; i < lignes22.length ; i++ ){
                    debut_de_insert+=' ' + lignes22[i][1] + ' , ';
                    liste_des_champs.push( lignes22[i][1] );
                }
                les_champs_des_tables[les_tables[k1]]=liste_des_champs;
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
                            await writer_insert_seulement.write( new TextEncoder().encode( '\r\n/*' + "=".repeat( 80 ) + ' DEBUT BLOC TABLE ' + v1 + ' offset ' + offset + ' (' + nb_enregs + ') */\r\n' ) );
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
            /*
              création des csv des tables
            */
            if(this.__ig1.donnees_retournees._CA_ === 1
                       && chi_id_projet !== null
                   || this.__ig1.donnees_retournees._CA_ === 1
                       && chi_id_projet === 1
                   || this.__ig1.donnees_retournees._CA_ === 1
                       && this.__ig1.donnees_retournees.chi_id_projet === 1
            ){
                /*
                  dans le cas de la sauvegarde de la base système d'un autre projet , on ne fait pas de sauvegarde csv 
                */
            }else{
                for(let k1 in les_tables){
                    let v1=les_tables[k1];
                    let chemin_fichier_csv_seulement=chemin_sauvegarde + 'csv_bdd_' + chi_id_basedd + '_table_' + les_tables[k1] + '.csv';
                    const pointeur_fichier_csv_seulement=await Deno.create( chemin_fichier_csv_seulement );
                    const writer_fichier_csv_seulement=pointeur_fichier_csv_seulement.writable.getWriter();
                    let la_preliere_ligne='';
                    for( let i=0 ; i < les_champs_des_tables[les_tables[k1]].length ; i++ ){
                        la_preliere_ligne+=',"' + les_champs_des_tables[les_tables[k1]][i] + '"';
                    }
                    la_preliere_ligne=la_preliere_ligne.substr( 1 );
                    await writer_fichier_csv_seulement.write( new TextEncoder().encode( la_preliere_ligne + '\r\n' ) );
                    const sql1="SELECT count(*) as __nb_enregs FROM " + v1 + "";
                    let statement1=await db.prepare( sql1 );
                    let nb_enregs=0;
                    for(const row of statement1){
                        nb_enregs=row.__nb_enregs;
                    }
                    statement1.finalize();
                    if(nb_enregs > 0){
                        const nombre_d_enregistrements_par_bloc=1000;
                        let offset=0;
                        let continuer=true;
                        do{
                            chaine_insert_seulement='';
                            let les_lignes='';
                            const sql2="SELECT * FROM " + v1 + ' LIMIT ' + nombre_d_enregistrements_par_bloc + ' OFFSET ' + offset + ';';
                            let statement2=await db.prepare( sql2 );
                            for(let row2 of statement2){
                                let le_insert=[];
                                for(let elt in row2){
                                    if(row2[elt] === null){
                                        chaine_insert_seulement+=',NULL';
                                    }else{
                                        chaine_insert_seulement+=',"' + String( row2[elt] ).replace( /"/g , '""' ) + '"';
                                    }
                                }
                                if(chaine_insert_seulement !== ''){
                                    les_lignes+=chaine_insert_seulement.substr( 1 ) + '\r\n';
                                }
                                chaine_insert_seulement='';
                            }
                            statement2.finalize();
                            if(offset > nb_enregs){
                                continuer=false;
                            }
                            if(les_lignes !== ''){
                                await writer_fichier_csv_seulement.write( new TextEncoder().encode( les_lignes ) );
                                les_lignes='';
                            }
                            offset+=nombre_d_enregistrements_par_bloc;
                        }while(continuer === true);
                    }
                    await writer_fichier_csv_seulement.close();
                }
            }
            await db.close();
            if(asynchrone === true){
                this.__ig1.envoyer_un_message_a_l_utilisateur( {"__xst" : __xsu ,"__xme" : 'le dump de la base "' + chi_id_basedd + '" a été réalisé'} );
            }
            this.__ig1.donnees_retournees.__xsi[__xsu].push( ' le dump de la base "' + chi_id_basedd + '" a été réalisé [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xsu});
        }catch(e){
            if(this.__ig1.asynchrone === true){
                let le_message='erreur de dump';
                if(this.__ig1.__deverminage > 0){
                    le_message+=this.formatter_erreur_catch( e );
                }
                if(asynchrone === true){
                    this.__ig1.envoyer_un_message_a_l_utilisateur( {"__xst" : __xer ,"__xme" : le_message} );
                }
            }
            this.__ig1.ma_trace1( "e.stack" , e.stack );
            return({"__xst" : __xer ,"__xme" : 'erreur lors de la sauvegarde'});
        }
    }
    /*
      =============================================================================================================
    */
    formatter_erreur_catch( e ){
        const repl0=new RegExp( this.__ig1.options_generales.repertoire_du_pgm_serveur , 'g' );
        let le_message='pile erreur 1=\n' + e.stack.replace( repl0 , '' ).replace( /https\:\/\/deno/g , 'deno' ).replace( /file\:\/\/\/\//g , '' );
        le_message=le_message.replace( /\?__version=\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}_\d{3}/g , '' );
        return('<pre>' + le_message + '</pre>');
    }
    /*
      =============================================================================================================
    */
    async recuperer_les_revs_des_bases( mat , d ){
        let les_bases_a_editer='';
        if(this.__ig1.donnees_recues[__xva].hasOwnProperty( 'les_bases_a_editer' )){
            les_bases_a_editer=this.__ig1.donnees_recues[__xva]['les_bases_a_editer'];
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1171={};
        let tt1171=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 1171 , criteres_1171 , this.__ig1.donnees_retournees , __db1 );
        if(tt1171.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1171.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['les_bases_du_projet']=[];
        if(tt1171[__xva].length > 0){
            this.__ig1.donnees_retournees[__xva]['les_bases_du_projet']=tt1171[__xva];
        }
        this.__ig1.donnees_retournees[__xac]='';
        await this.__ig1.obtenir_les_genres( mat , d );
        this.__ig1.donnees_retournees[__xac]+='m1(n1(' + this.moi + '),f1(apres_recuperer_les_revs_des_bases(les_bases_a_editer(\'' + les_bases_a_editer + '\'))))';
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
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
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , nouvel_id , form , __db1 ){
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
        form['chi_id_basedd']=form['chi_id_basedd'] === null ? ( null ) : ( parseInt( form['chi_id_basedd'] , 10 ) );
        if(isNaN( form['chi_id_basedd'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_basedd" doit être numérique'});
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* sélection du champ à modifier */
        let criteres_select_1371={"T0_chi_id_basedd" : form['chi_id_basedd']};
        let tt1371=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 1371 , criteres_select_1371 , this.__ig1.donnees_retournees , __db1 );
        if(tt1371.__xst !== __xsu || tt1371.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1371 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1371[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1362={
             /*  */
            "c_chi_id_basedd" : form['chi_id_basedd'] ,
            "n_chp_commentaire_basedd" : form['chp_commentaire_basedd'] === '' ? ( null ) : ( form['chp_commentaire_basedd'] ) ,
            "n_chp_rev_travail_basedd" : form['chp_rev_travail_basedd'] === '' ? ( null ) : ( form['chp_rev_travail_basedd'] ) ,
            "n_chp_fournisseur_basedd" : form['chp_fournisseur_basedd']
        };
        /* =========================== mise à jour effective ======================== */
        let tt1362=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_bdds SET 
           `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
           `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
           `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
        WHERE `chi_id_basedd` = :c_chi_id_basedd ;
        */
        /*sql_inclure_fin*/ 1362 , criteres_1362 , this.__ig1.donnees_retournees , __db1 );
        if(tt1362.__xst !== __xsu || tt1362.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1362.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1371[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt1371_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 1371 , criteres_select_1371 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1371_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_basedd=null , __db1=null ){
        if(chi_id_basedd === null){
            const l01=mat.length;
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
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_basedd(' + chi_id_basedd + ')))))';
        }
        if(chi_id_basedd === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1371=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 1371 , {"T0_chi_id_basedd" : chi_id_basedd} , this.__ig1.donnees_retournees , __db1 );
        if(tt1371.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1371.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1371[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1371;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_basedd=null ){
        if(chi_id_basedd === null){
            const l01=mat.length;
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1371={
             /*  */
            "T0_chi_id_basedd" : chi_id_basedd
        };
        let tt1371=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 1371 , criteres_1371 , this.__ig1.donnees_retournees , __db1 );
        if(tt1371.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1371.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1371;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_basedd=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1371={"T0_chi_id_basedd" : chi_id_basedd};
        let tt1371=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 1371 , critere_1371 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1371;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(1)) */
        if(form['chi_id_basedd'] <= 1){
            return({"__xst" : __xer ,"__xme" : 'il n\'est pas possible de supprimer cet élément [' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1371={
             /*  */
            "T0_chi_id_basedd" : form['chi_id_basedd']
        };
        let tt1371=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 1371 , criteres_1371 , this.__ig1.donnees_retournees , __db1 );
        if(tt1371.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1371.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1371[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1364={
             /*  */
            "chi_id_basedd" : form['chi_id_basedd']
        };
        let tt1364=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_bdds
        WHERE `chi_id_basedd` = :chi_id_basedd ;
        */
        /*sql_inclure_fin*/ 1364 , criteres_1364 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1364.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1364.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1371[__xva][0] , __db1 );
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
        let chi_id_basedd=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1371={"T0_chi_id_basedd" : chi_id_basedd};
        let tt1371=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
         FROM b1.tbl_bdds T0
        WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
        ;
        */
        /*sql_inclure_fin*/ 1371 , critere_1371 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1371;
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1363={
            "donnees" : [{
                        "chp_commentaire_basedd" : form['chp_commentaire_basedd'] === '' ? ( null ) : ( form['chp_commentaire_basedd'] ) ,
                        "chp_fournisseur_basedd" : form['chp_fournisseur_basedd']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1363=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_bdds`(
            `chp_commentaire_basedd` , 
            `chp_fournisseur_basedd`
        ) VALUES (
            :chp_commentaire_basedd , 
            :chp_fournisseur_basedd
        );
        */
        /*sql_inclure_fin*/ 1363 , criteres_1363 , this.__ig1.donnees_retournees , __db1 );
        if(tt1363.__xst !== __xsu || tt1363['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1363.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1363['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1363['nouvel_id'] , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
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
        let criteres_1361={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1361[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1361[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1361=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd`
         FROM b1.tbl_bdds T0
        WHERE (   `T0`.`chi_id_basedd` = :T0_chi_id_basedd) 
        ORDER BY `T0`.`chi_id_basedd` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1361 , criteres_1361 , this.__ig1.donnees_retournees , __db1 );
        if(tt1361.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1361.__xme});
        }
        if(tt1361.__xst === __xsu && tt1361.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1361['debut']=__debut;
            tt1361=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd`
             FROM b1.tbl_bdds T0
            WHERE (   `T0`.`chi_id_basedd` = :T0_chi_id_basedd) 
            ORDER BY `T0`.`chi_id_basedd` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1361 , criteres_1361 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1361;
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
    moi='bdds1';
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
export{bdds1 as bdds1};