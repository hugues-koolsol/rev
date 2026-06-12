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
class x_ecran_concevoir_une_requete1{
    /*
      =============================================================================================================
    */
    async sauvegarder_une_matrice_de_requete( mat , d , chi_id_requete , __db1 ){
        /* let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales ); */
        let criteres_1353={"chp_provenance_rev" : 'sql' ,"chx_source_rev" : chi_id_requete};
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
            return({"__xst" : __xer ,"__xme" : '[' + tt1353['__xme'] + ' ' + this.__ig1.nl2() + ']'});
        }
        if(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet === 1){
            return({"__xst" : __xsu});
        }
        let tt1354=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1354 , {"T0_chi_id_requete" : chi_id_requete} , this.__ig1.donnees_retournees , __db1 );
        if(tt1354.__xst !== __xsu || tt1354[__xva].length !== 1){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        let cht_rev_requete=tt1354[__xva][0]['T0.cht_rev_requete'];
        let obj_matrice=await this.__ig1.__rev1.rev_tcm( cht_rev_requete );
        let a_sauvegarder={"donnees" : []};
        for( let i=0 ; i < obj_matrice.__xva.length ; i++ ){
            let tab=obj_matrice.__xva[i];
            /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev */
            a_sauvegarder.donnees.push( {
                    "chp_provenance_rev" : 'sql' ,
                    "chx_source_rev" : chi_id_requete ,
                    "chp_id_rev" : tab[0] ,
                    "chp_valeur_rev" : tab[1] ,
                    "chp_type_rev" : tab[2] ,
                    "chp_niveau_rev" : tab[3] ,
                    "chp_quotee_rev" : tab[4] ,
                    "chp_pos_premier_rev" : tab[5] ,
                    "chp_pos_dernier_rev" : tab[6] ,
                    "chp_parent_rev" : tab[7] ,
                    "chp_nbr_enfants_rev" : tab[8] ,
                    "chp_num_enfant_rev" : tab[9] ,
                    "chp_profondeur_rev" : tab[10] ,
                    "chp_pos_ouver_parenthese_rev" : tab[11] ,
                    "chp_enfant_suivant_rev" : tab[12] ,
                    "chp_commentaire_rev" : tab[13]
                } );
        }
        /* this.__ig1.ma_trace1('ici a_sauvegarder.donnees=',a_sauvegarder.donnees); */
        if(a_sauvegarder.donnees.length > 0){
            let tt358=await this.__ig1.sql_iii(
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
            /*sql_inclure_fin*/ 358 , a_sauvegarder , this.__ig1.donnees_retournees , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async construire_le_js_contenant_la_liste_des_requetes( mat , d , __db1 ){
        let criteres_1385={"nb_max" : 9999};
        let tt1385=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`che_est_souche_requete` , 
        `T0`.`cht_rev_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` < :nb_max 
        ORDER BY `T0`.`chi_id_requete` ASC
        ;
        */
        /*sql_inclure_fin*/ 1385 , criteres_1385 , this.__ig1.donnees_retournees , __db1 );
        if(tt1385.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1385.__xme});
        }
        let __liste_des_sql={};
        for(let k1 in tt1385[__xva]){
            let v1=tt1385[__xva][k1];
            __liste_des_sql[v1['T0.chi_id_requete']]={
                "cht_sql_requete" : v1['T0.cht_sql_requete'].replace( /\r\n/g , '\n' ).replace( /\r/g , '' ).replace( /\n/g , '\r\n' ) ,
                "cht_commentaire_requete" : v1['T0.cht_commentaire_requete'] ,
                "chp_type_requete" : v1['T0.chp_type_requete'] ,
                "che_est_souche_requete" : v1['T0.che_est_souche_requete'] ,
                "cht_rev_requete" : v1['T0.cht_rev_requete'] ,
                "chp_table_reference_requete" : v1['T0.chp_table_reference_requete']
            };
        }
        /* this.__ig1.ma_trace1('__liste_des_sql',__liste_des_sql); */
        let chemin_fichier___liste_des_sql='';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier___liste_des_sql='../rev_2/__fichiers_generes/__liste_des_sql.json';
        }else{
            /* chemin_fichier___liste_des_sql='../../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_sql.json'; */
            chemin_fichier___liste_des_sql='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_sql.json';
        }
        try{
            await this.__ig1.file_put_contents( chemin_fichier___liste_des_sql , JSON.stringify( __liste_des_sql , null , 2 ) );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : 'erreur lors de l\'écriture de __liste_des_sql[' + this.__ig1.nl2( e ) + ']'});
        }
        this.__ig1.donnees_retournees['__liste_des_sql']=__liste_des_sql;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async enregistrer_la_requete_en_base( mat , d ){
        let criteres_1390={
            "donnees" : [{
                        "chp_type_requete" : this.__ig1.donnees_recues[__xva]['type'] ,
                        "cht_rev_requete" : this.__ig1.donnees_recues[__xva]['rev'] ,
                        "cht_sql_requete" : this.__ig1.donnees_recues[__xva]['sql'] ,
                        "cht_commentaire_requete" : this.__ig1.donnees_recues[__xva]['cht_commentaire_requete'] ,
                        "che_est_souche_requete" : this.__ig1.donnees_recues[__xva]['che_est_souche_requete'] ,
                        "chp_table_reference_requete" : this.__ig1.donnees_recues[__xva]['chp_table_reference_requete']
                    }]
        };
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        let tt1390=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_requetes`(
            `chp_type_requete` , 
            `cht_rev_requete` , 
            `cht_sql_requete` , 
            `cht_commentaire_requete` , 
            `che_est_souche_requete` , 
            `chp_table_reference_requete`
        ) VALUES (
            :chp_type_requete , 
            :cht_rev_requete , 
            :cht_sql_requete , 
            :cht_commentaire_requete , 
            :che_est_souche_requete , 
            :chp_table_reference_requete
        );
        */
        /*sql_inclure_fin*/ 1390 , criteres_1390 , this.__ig1.donnees_retournees , __db1 );
        if(tt1390.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1390.__xme});
        }
        const repl0=new RegExp( 'sql_' + this.__ig1.donnees_recues[__xva]['chi_id_requete'] , 'g' );
        let nouveau_js=this.__ig1.donnees_recues[__xva]['js'].replace( repl0 , 'sql_' + tt1390['nouvel_id'] );
        /* this.__ig1.ma_trace1( 'nouveau_js=' , nouveau_js ); */
        let chemin_fichier='';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + tt1390['nouvel_id'] + '.js';
        }else{
            chemin_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + tt1390['nouvel_id'] + '.js';
        }
        this.__ig1.ma_trace1( 'chemin_fichier=' + chemin_fichier );
        let contenu=nouveau_js.replace( "\r\n" , "\n" );
        contenu=contenu.replace( "\r" , "" , contenu );
        contenu=contenu.replace( "\n" , "\r\n" , contenu );
        try{
            await this.__ig1.file_put_contents( chemin_fichier , contenu );
        }catch(e){
            return({
                    "__xst" : __xer ,
                    "__xme" : 'ecriture du fichier sql_' + this.__ig1.donnees_recues[__xva]['chi_id_requete'] + ' [' + this.__ig1.nl2( e )
                });
        }
        await this.sauvegarder_une_matrice_de_requete( mat , d , tt1390['nouvel_id'] , __db1 );
        await this.construire_le_js_contenant_la_liste_des_requetes( mat , d , __db1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier_la_requete_en_base( mat , d ){
        let matrice='';
        let criteres_1355={
            "c_chi_id_requete" : this.__ig1.donnees_recues[__xva]['chi_id_requete'] ,
            "n_chp_type_requete" : this.__ig1.donnees_recues[__xva]['type'] ,
            "n_cht_rev_requete" : this.__ig1.donnees_recues[__xva]['rev'] ,
            "n_cht_sql_requete" : this.__ig1.donnees_recues[__xva]['sql'] ,
            "n_cht_matrice_requete" : matrice ,
            "n_cht_commentaire_requete" : this.__ig1.donnees_recues[__xva]['cht_commentaire_requete'] ,
            "n_che_est_souche_requete" : this.__ig1.donnees_recues[__xva]['che_est_souche_requete'] ,
            "n_chp_table_reference_requete" : this.__ig1.donnees_recues[__xva]['chp_table_reference_requete']
        };
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        let tt1355=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_requetes SET 
           `che_est_souche_requete` = :n_che_est_souche_requete , 
           `chp_type_requete` = :n_chp_type_requete , 
           `cht_rev_requete` = :n_cht_rev_requete , 
           `cht_sql_requete` = :n_cht_sql_requete , 
           `cht_commentaire_requete` = :n_cht_commentaire_requete , 
           `chp_table_reference_requete` = :n_chp_table_reference_requete
        WHERE `chi_id_requete` = :c_chi_id_requete ;
        */
        /*sql_inclure_fin*/ 1355 , criteres_1355 , this.__ig1.donnees_retournees , __db1 );
        if(tt1355.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1355.__xme});
        }
        if(tt1355.__xst === __xsu){
            let chemin_fichier='';
            /* this.__ig1.ma_trace1( 'this.__ig1.donnees_retournees._CA_=' + this.__ig1.donnees_retournees._CA_ ); */
            if(this.__ig1.donnees_retournees._CA_ === 2){
                chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + this.__ig1.donnees_recues[__xva]['chi_id_requete'] + '.js';
            }else{
                chemin_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + this.__ig1.donnees_recues[__xva]['chi_id_requete'] + '.js';
            }
            let contenu=this.__ig1.donnees_recues[__xva]['js'].replace( /\r\n/g , '\n' ).replace( /\r/g , '' ).replace( /\n/g , '\r\n' );
            try{
                await this.__ig1.file_put_contents( chemin_fichier , contenu );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2( e )});
            }
        }else{
            return({"__xst" : __xer ,"__xme" : tt1355.__xme});
        }
        await this.construire_le_js_contenant_la_liste_des_requetes( mat , d , __db1 );
        if(!(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet === 1)){
            await this.sauvegarder_une_matrice_de_requete( mat , d , this.__ig1.donnees_recues[__xva]['chi_id_requete'] , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async charger_la_requete( mat , d ){
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let requete={};
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        if(chi_id_requete > 0){
            let criteres_1354={"T0_chi_id_requete" : chi_id_requete};
            let tt1354=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
            `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/ 1354 , criteres_1354 , this.__ig1.donnees_retournees , __db1 );
            if(tt1354.__xst === __xsu && tt1354[__xva].length === 1){
                requete=tt1354[__xva][0];
            }
        }
        this.__ig1.donnees_retournees.__xva['requete']=requete;
        /*
          on récupère les rev de toutes les bases du projet actif
        */
        this.__ig1.donnees_retournees.__xva['les_bases_du_projet']={};
        let criteres_select_1302={};
        let tt1302=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 1302 , criteres_select_1302 , this.__ig1.donnees_retournees , __db1 );
        if(tt1302.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1302.__xme});
        }
        this.__ig1.donnees_retournees.__xva['les_bases_du_projet']=tt1302[__xva];
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='x_ecran_concevoir_une_requete1';
    __ig1=null;
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
export{x_ecran_concevoir_une_requete1 as x_ecran_concevoir_une_requete1};