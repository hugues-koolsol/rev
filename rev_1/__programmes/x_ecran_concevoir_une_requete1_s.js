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
    async sauvegarder_une_matrice_de_requete( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_requete , __db1 ){
        /* let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales ); */
        let criteres_353={"chp_provenance_rev" : 'sql' ,"chx_source_rev" : chi_id_requete};
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
            this.__gi1.__xsi[__xer].push( '[' + tt353['__xme'] + ' ' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(false && donnees_recues._CA_ === 1 && donnees_recues.chi_id_projet === 1){
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }
        let tt354=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 354 , {"T0_chi_id_requete" : chi_id_requete} , donnees_retournees , __db1 );
        if(tt354[__xst] !== __xsu || tt354[__xva].length !== 1){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let cht_rev_requete=tt354[__xva][0]['T0.cht_rev_requete'];
        let obj_matrice=await this.__gi1.__rev1.rev_tcm( cht_rev_requete );
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
        /* this.__gi1.ma_trace1('ici a_sauvegarder.donnees=',a_sauvegarder.donnees); */
        if(a_sauvegarder.donnees.length > 0){
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
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async construire_le_js_contenant_la_liste_des_requetes( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 ){
        let criteres_385={"nb_max" : 9999};
        let tt385=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`che_est_souche_requete` , 
        `T0`.`cht_rev_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` < :nb_max 
        ORDER BY `T0`.`chi_id_requete` ASC
        ;
        */
        /*sql_inclure_fin*/ 385 , criteres_385 , donnees_retournees , __db1 );
        if(tt385[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __liste_des_sql={};
        for(let k1 in tt385[__xva]){
            let v1=tt385[__xva][k1];
            __liste_des_sql[v1['T0.chi_id_requete']]={
                "cht_sql_requete" : v1['T0.cht_sql_requete'] ,
                "cht_commentaire_requete" : v1['T0.cht_commentaire_requete'] ,
                "chp_type_requete" : v1['T0.chp_type_requete'] ,
                "che_est_souche_requete" : v1['T0.che_est_souche_requete'] ,
                "cht_rev_requete" : v1['T0.cht_rev_requete']
            };
        }
        /* this.__gi1.ma_trace1('__liste_des_sql',__liste_des_sql); */
        let chemin_fichier___liste_des_sql='';
        if(donnees_retournees._CA_ === 2){
            chemin_fichier___liste_des_sql='../rev_2/__fichiers_generes/__liste_des_sql.json';
        }else{
            /* chemin_fichier___liste_des_sql='../../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_sql.json'; */
            chemin_fichier___liste_des_sql='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_sql.json';
        }
        try{
            await this.__gi1.file_put_contents( chemin_fichier___liste_des_sql , JSON.stringify( __liste_des_sql , null , 2 ) );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur lors de l\'écriture de __liste_des_sql[' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees['__liste_des_sql']=__liste_des_sql;
        donnees_retournees[__xac]+='m1(n1(_developpement1_),f1(maj_liste_des_sql()))';
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async enregistrer_la_requete_en_base( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let criteres_390={
            "donnees" : [{
                        "chp_type_requete" : donnees_recues[__xva]['type'] ,
                        "cht_rev_requete" : donnees_recues[__xva]['rev'] ,
                        "cht_sql_requete" : donnees_recues[__xva]['sql'] ,
                        "cht_commentaire_requete" : donnees_recues[__xva]['cht_commentaire_requete'] ,
                        "che_est_souche_requete" : donnees_recues[__xva]['che_est_souche_requete'] ,
                        "chp_table_reference_requete" : donnees_recues[__xva]['chp_table_reference_requete']
                    }]
        };
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt390=await this.__gi1.sql_iii(
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
        /*sql_inclure_fin*/ 390 , criteres_390 , donnees_retournees , __db1 );
        if(tt390[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( tt390['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        const repl0=new RegExp( 'sql_' + donnees_recues[__xva]['chi_id_requete'] , 'g' );
        let nouveau_js=donnees_recues[__xva]['js'].replace( repl0 , 'sql_' + tt390['nouvel_id'] );
        /* this.__gi1.ma_trace1( 'nouveau_js=' , nouveau_js ); */
        let chemin_fichier='';
        if(donnees_retournees._CA_ === 2){
            chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + tt390['nouvel_id'] + '.js';
        }else{
            chemin_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + tt390['nouvel_id'] + '.js';
        }
        this.__gi1.ma_trace1( 'chemin_fichier=' + chemin_fichier );
        let contenu=nouveau_js.replace( "\r\n" , "\n" );
        contenu=contenu.replace( "\r" , "" , contenu );
        contenu=contenu.replace( "\n" , "\r\n" , contenu );
        try{
            await this.__gi1.file_put_contents( chemin_fichier , contenu );
            this.__gi1.ma_trace1( 'chemin_fichier=' + chemin_fichier );
        }catch(e){
            this.__gi1.ma_trace1( 'chemin_fichier=' + chemin_fichier );
            this.__gi1.__xsi[__xer].push( 'ecriture du fichier sql_' + donnees_recues[__xva]['chi_id_requete'] + ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        await this.sauvegarder_une_matrice_de_requete( mat , d , donnees_recues , donnees_retournees , options_generales , tt390['nouvel_id'] , __db1 );
        await this.construire_le_js_contenant_la_liste_des_requetes( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier_la_requete_en_base( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let matrice='';
        let criteres_355={
            "c_chi_id_requete" : donnees_recues[__xva]['chi_id_requete'] ,
            "n_chp_type_requete" : donnees_recues[__xva]['type'] ,
            "n_cht_rev_requete" : donnees_recues[__xva]['rev'] ,
            "n_cht_sql_requete" : donnees_recues[__xva]['sql'] ,
            "n_cht_matrice_requete" : matrice ,
            "n_cht_commentaire_requete" : donnees_recues[__xva]['cht_commentaire_requete'] ,
            "n_che_est_souche_requete" : donnees_recues[__xva]['che_est_souche_requete'] ,
            "n_chp_table_reference_requete" : donnees_recues[__xva]['chp_table_reference_requete']
        };
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt355=await this.__gi1.sql_iii(
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
        /*sql_inclure_fin*/ 355 , criteres_355 , donnees_retournees , __db1 );
        if(tt355[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt355[__xst] === __xsu){
            let chemin_fichier='';
            /* this.__gi1.ma_trace1( 'donnees_retournees._CA_=' + donnees_retournees._CA_ ); */
            if(donnees_retournees._CA_ === 2){
                chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + donnees_recues[__xva]['chi_id_requete'] + '.js';
            }else{
                chemin_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + donnees_recues[__xva]['chi_id_requete'] + '.js';
            }
            let contenu=donnees_recues[__xva]['js'].replace( "\r\n" , "\n" );
            contenu=contenu.replace( "\r" , "" , contenu );
            contenu=contenu.replace( "\n" , "\r\n" , contenu );
            try{
                await this.__gi1.file_put_contents( chemin_fichier , contenu );
            }catch(e){
                this.__gi1.__xsi[__xer].push( 'erreur modifier_la_requete_en_base [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }else{
            this.__gi1.__xsi[__xer].push( '  [' + this.__gi1.nl2() );
        }
        await this.construire_le_js_contenant_la_liste_des_requetes( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(!(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1)){
            await this.sauvegarder_une_matrice_de_requete( mat , d , donnees_recues , donnees_retournees , options_generales , donnees_recues[__xva]['chi_id_requete'] , __db1 );
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async charger_la_requete( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let requete={};
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        if(chi_id_requete > 0){
            let criteres_354={"T0_chi_id_requete" : chi_id_requete};
            let tt354=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
            `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/ 354 , criteres_354 , donnees_retournees , __db1 );
            if(tt354[__xst] === __xsu && tt354[__xva].length === 1){
                requete=tt354[__xva][0];
            }
        }
        donnees_retournees.__xva['requete']=requete;
        /*
          on récupère les rev de toutes les bases du projet actif
        */
        donnees_retournees.__xva['les_bases_du_projet']={};
        let criteres_select_171={};
        let tt171=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 171 , criteres_select_171 , donnees_retournees , __db1 );
        if(tt171[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xva['les_bases_du_projet']=tt171[__xva];
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='x_ecran_concevoir_une_requete1';
    __gi1=null;
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
export{x_ecran_concevoir_une_requete1 as x_ecran_concevoir_une_requete1};