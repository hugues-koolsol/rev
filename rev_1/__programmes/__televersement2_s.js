const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
/*
  =====================================================================================================================
*/
class __televersement2{
    /*
      =============================================================================================================
    */
    moi='__televersement2';
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
    async recuperer_la_liste( che_id_element_televersement , chp_nom_table_televersement , che_bdd_televersement , chp_champ_cle_televersement , __db1 ){
        let criteres_1166={
            "T0_che_id_element_televersement" : che_id_element_televersement ,
            "T0_chp_nom_table_televersement" : chp_nom_table_televersement ,
            "T0_che_bdd_televersement" : che_bdd_televersement ,
            "T0_chp_champ_cle_televersement" : chp_champ_cle_televersement
        };
        let tt1166=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_televersement` , `T0`.`chp_nom_du_dossier_televersement` , `T0`.`chp_nom_fichier_sur_disque_televersement` , `T0`.`chp_nom_original_televersement` , `T0`.`cht_comm_glob_televersement` , 
        `T0`.`chp_comm_fichier_televersement`
         FROM b1.tbl_televersements T0
        WHERE (   `T0`.`che_bdd_televersement` = :T0_che_bdd_televersement
           AND `T0`.`chp_nom_table_televersement` = :T0_chp_nom_table_televersement
           AND `T0`.`che_id_element_televersement` = :T0_che_id_element_televersement
           AND `T0`.`chp_champ_cle_televersement` = :T0_chp_champ_cle_televersement) 
        ORDER BY `T0`.`chi_id_televersement` DESC  
        LIMIT 500 OFFSET 0 
        ;
        */
        /*sql_inclure_fin*/ 1166 , criteres_1166 , this.__ig1.donnees_retournees , __db1 );
        return tt1166;
    }
    /*
      =============================================================================================================
    */
    async enregistrer_televersement_standard1( mat , d ){
        let chi_id_basedd=0;
        let nom_de_la_table_referente='';
        let id_element=0;
        let nom_champ_cle='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_element' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_element=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table_referente' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table_referente=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_champ_cle' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_champ_cle=mat[i + 1][1];
            }
        }
        if(nom_champ_cle !== '' && nom_de_la_table_referente !== '' && id_element > 0 && chi_id_basedd > 0){
            let __db1=await this.__ig1.ouvrir_bdd( 1 );
            /* this.__ig1.ma_trace1("this.__ig1.donnees_recues" , this.__ig1.donnees_recues.__xva.les_fichiers_televerses ); */
            /*#
              les_fichiers_televerses: [
                 {
                    nom_du_fichier: "5b5d6bed-c8f3-425d-8c9c-ed7083a1b810",
                    nom_fichier_sur_disque1: "t_C3_A9l_C3_A9charger_20_2__pdf_5b5d6bed_c8f3_425d_8c9c_ed7083a1b810.txt",
                    nom_original: "télécharger (2).pdf",
                    poids_du_fichier: 2306,
                    repertoire_fichier1: "/__fichiers_binaires/televersements/2026/08/03/"
                 },
                 {
                    nom_du_fichier: "63fd2597-23e5-4ade-9598-5dea1074e9c1",
                    nom_fichier_sur_disque1: "t_C3_A9l_C3_A9charger_20_1__pdf_63fd2597_23e5_4ade_9598_5dea1074e9c1.txt",
                    nom_original: "télécharger (1).pdf",
                    poids_du_fichier: 1521,
                    repertoire_fichier1: "/__fichiers_binaires/televersements/2026/08/03/"
                 }
              ],
            */
            for(let i in this.__ig1.donnees_recues.__xva.les_fichiers_televerses){
                let criteres_1165={
                    "donnees" : [{
                                "che_bdd_televersement" : chi_id_basedd ,
                                "chp_nom_table_televersement" : nom_de_la_table_referente ,
                                "che_id_element_televersement" : id_element ,
                                "chp_champ_cle_televersement" : nom_champ_cle ,
                                "chp_nom_original_televersement" : this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_original ,
                                "che_poids_televersement" : this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].poids_du_fichier ,
                                "chp_nom_fichier_sur_disque_televersement" : this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_fichier_sur_disque1 ,
                                "chp_nom_du_dossier_televersement" : this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].repertoire_fichier1 ,
                                "cht_comm_glob_televersement" : this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].vv_commentaire_global_sur_le_televersement ,
                                "chp_comm_fichier_televersement" : this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].commentaire_fichier_
                            }]
                };
                let tt1165=await this.__ig1.sql_iii(
                /*sql_inclure_deb*/ /*#
                INSERT INTO b1.`tbl_televersements`(
                    `che_bdd_televersement` , 
                    `chp_nom_table_televersement` , 
                    `che_id_element_televersement` , 
                    `chx_utilisateur_televersement` , 
                    `chp_champ_cle_televersement` , 
                    `chp_nom_original_televersement` , 
                    `che_poids_televersement` , 
                    `chp_nom_fichier_sur_disque_televersement` , 
                    `chp_nom_du_dossier_televersement` , 
                    `cht_comm_glob_televersement` , 
                    `chp_comm_fichier_televersement`
                ) VALUES (
                    :che_bdd_televersement , 
                    :chp_nom_table_televersement , 
                    :che_id_element_televersement , 
                    chi_id_utilisateur , 
                    :chp_champ_cle_televersement , 
                    :chp_nom_original_televersement , 
                    :che_poids_televersement , 
                    :chp_nom_fichier_sur_disque_televersement , 
                    :chp_nom_du_dossier_televersement , 
                    :cht_comm_glob_televersement , 
                    :chp_comm_fichier_televersement
                );
                */
                /*sql_inclure_fin*/ 1165 , criteres_1165 , this.__ig1.donnees_retournees , __db1 );
                if(tt1165.__xst !== __xsu || tt1165['changements'] !== 1){
                    return({"__xst" : __xer ,"__xme" : tt1165.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
                }
                let nouveau_nom='';
                let ancien_nom=this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_fichier_sur_disque1;
                let cle=this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_du_fichier.replace( /-/g , '_' );
                const repl0=new RegExp( cle , 'g' );
                nouveau_nom=ancien_nom.replace( repl0 , '' );
                nouveau_nom='id_' + tt1165['nouvel_id'] + '_b_' + chi_id_basedd + '_t_' + nom_de_la_table_referente.replace( /_/g , '' ) + '_e_' + id_element + '_' + nouveau_nom;
                /* console.log('nouveau_nom="' + nouveau_nom + '"\nnom_du_fichier="' + this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_du_fichier + '"' ); */
                /* this.__ig1.ma_trace1("tt1165=",tt1165); */
                let criteres_1171={
                     /*  */
                    "c_chi_id_televersement" : tt1165['nouvel_id'] ,
                    "n_chp_nom_fichier_sur_disque_televersement" : nouveau_nom
                };
                await __db1.exec( 'BEGIN TRANSACTION;' );
                let tt1171=await this.__ig1.sql_iii(
                /*sql_inclure_deb*/ /*#
                UPDATE b1.tbl_televersements SET 
                   `chp_nom_fichier_sur_disque_televersement` = :n_chp_nom_fichier_sur_disque_televersement
                WHERE `chi_id_televersement` = :c_chi_id_televersement ;
                */
                /*sql_inclure_fin*/ 1171 , criteres_1171 , this.__ig1.donnees_retournees , __db1 );
                if(tt1171.__xst !== __xsu || tt1171['changements'] !== 1){
                    await __db1.exec( 'COMMIT;' );
                    /* pas grave */
                    /* return({"__xst" : __xer ,"__xme" : tt1171.__xme}); */
                }else{
                    try{
                        const currentWorkingDirectory=Deno.cwd().replace( /\\/g , '/' );
                        Deno.renameSync( currentWorkingDirectory + this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].repertoire_fichier1 + this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_fichier_sur_disque1 , currentWorkingDirectory + this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].repertoire_fichier1 + nouveau_nom );
                        await __db1.exec( 'COMMIT;' );
                    }catch(e){
                        await __db1.exec( 'ROLLBACK;' );
                        this.__ig1.ma_trace1( "e" , e.stack );
                    }
                }
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let chi_id_televersement=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_televersement' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_televersement=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_televersement === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let criteres_1168={
             /*  */
            "T0_chi_id_televersement" : chi_id_televersement
        };
        let tt1168=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_televersement` , `T0`.`che_bdd_televersement` , `T0`.`chp_nom_table_televersement` , `T0`.`che_id_element_televersement` , `T0`.`chx_utilisateur_televersement` , 
        `T0`.`chp_champ_cle_televersement` , `T0`.`chp_nom_original_televersement` , `T0`.`che_poids_televersement` , `T0`.`chp_nom_fichier_sur_disque_televersement` , `T0`.`chp_nom_du_dossier_televersement` , 
        `T0`.`cht_comm_glob_televersement` , `T0`.`chp_comm_fichier_televersement`
         FROM b1.tbl_televersements T0
        WHERE `T0`.`chi_id_televersement` = :T0_chi_id_televersement
        ;
        */
        /*sql_inclure_fin*/ 1168 , criteres_1168 , this.__ig1.donnees_retournees , __db1 );
        if(tt1168.__xst !== __xsu || tt1168.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : tt1168.__xme});
        }
        if(!this.__ig1.donnees_retournees.chi_id_utilisateur === tt1168[__xva][0]['T0.chx_utilisateur_televersement']){
            return({"__xst" : __xer ,"__xme" : "ce n'est pas vous qui avez téléversé ce fichier en conséquence, vous ne pouvez par le supprimer"});
        }
        /* this.__ig1.ma_trace1("tt1168.__xva=",tt1168.__xva); */
        await this.__ig1.__fnt1.supprimer_fichier_sans_sauvegarde( tt1168[__xva][0]['T0.chp_nom_du_dossier_televersement'] + tt1168[__xva][0]['T0.chp_nom_fichier_sur_disque_televersement'] , false );
        /*  */
        let criteres_1170={
             /*  */
            "chi_id_televersement" : chi_id_televersement
        };
        let tt1170=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_televersements
        WHERE `chi_id_televersement` = :chi_id_televersement ;
        */
        /*sql_inclure_fin*/ 1170 , criteres_1170 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1170.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1170.__xme});
        }
        /*  */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_televersement=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_televersement' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_televersement=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_televersement === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let critere_1168={"T0_chi_id_televersement" : chi_id_televersement};
        let tt1168=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_televersement` , `T0`.`che_bdd_televersement` , `T0`.`chp_nom_table_televersement` , `T0`.`che_id_element_televersement` , `T0`.`chx_utilisateur_televersement` , 
        `T0`.`chp_champ_cle_televersement` , `T0`.`chp_nom_original_televersement` , `T0`.`che_poids_televersement` , `T0`.`chp_nom_fichier_sur_disque_televersement` , `T0`.`chp_nom_du_dossier_televersement` , 
        `T0`.`cht_comm_glob_televersement` , `T0`.`chp_comm_fichier_televersement`
         FROM b1.tbl_televersements T0
        WHERE `T0`.`chi_id_televersement` = :T0_chi_id_televersement
        ;
        */
        /*sql_inclure_fin*/ 1168 , critere_1168 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1168;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{__televersement2 as __televersement2};