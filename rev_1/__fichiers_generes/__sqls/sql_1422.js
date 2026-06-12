const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1422{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_nom_source" */
        if(par['n_chp_nom_source'] === null || par['n_chp_nom_source'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du source" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "chp_nom_source" ===
        */
        let __test_0_1=this.__ig1.__fnts_c_et_s.test_du_nom_technique1( par['n_chp_nom_source'] , 'nom du source' );
        if(__test_0_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_0_1.__xme});
        }
        /* test "non nul" sur le champ "che_binaire_source" */
        if(par['n_che_binaire_source'] === null || par['n_che_binaire_source'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "cht_rev_source" ===
        */
        let __test_3_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( par['n_cht_rev_source'] , 'rev' );
        if(__test_3_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_3_1.__xme});
        }
        /* test "non nul" sur le champ "che_autorisation_globale_source" */
        if(par['n_che_autorisation_globale_source'] === null || par['n_che_autorisation_globale_source'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation globale" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "cht_condition_rev_source" ===
        */
        let __test_7_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( par['n_cht_condition_rev_source'] , 'condition au format rev' );
        if(__test_7_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_7_1.__xme});
        }
        /* test "non nul" sur le champ "chp_usage_source" */
        if(par['n_chp_usage_source'] === null || par['n_chp_usage_source'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "usage du source" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_pour_util_source" */
        if(par['n_che_pour_util_source'] === null || par['n_che_pour_util_source'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "pour util" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_sources` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_nom_source'] === undefined || par['n_chp_nom_source'] === '' || par['n_chp_nom_source'] === null){
                tableau_champs.push( '`chp_nom_source` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_source` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_source'] , 'n_chp_nom_source' ) + '\'' );
            }
            if(par['n_che_binaire_source'] === undefined || par['n_che_binaire_source'] === '' || par['n_che_binaire_source'] === null){
                tableau_champs.push( '`che_binaire_source` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_binaire_source'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "binaire" doit être numérique'});
                }
                tableau_champs.push( '`che_binaire_source` = ' + this.__ig1.__fnt1.sq0( par['n_che_binaire_source'] , 'n_che_binaire_source' ) + '' );
            }
            if(par['n_chx_dossier_id_source'] === undefined || par['n_chx_dossier_id_source'] === '' || par['n_chx_dossier_id_source'] === null){
                tableau_champs.push( '`chx_dossier_id_source` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chx_dossier_id_source'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "dossier id" doit être numérique'});
                }
                tableau_champs.push( '`chx_dossier_id_source` = ' + this.__ig1.__fnt1.sq0( par['n_chx_dossier_id_source'] , 'n_chx_dossier_id_source' ) + '' );
            }
            if(par['n_cht_rev_source'] === undefined || par['n_cht_rev_source'] === '' || par['n_cht_rev_source'] === null){
                tableau_champs.push( '`cht_rev_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_rev_source` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_rev_source'] , 'n_cht_rev_source' ) + '\'' );
            }
            if(par['n_cht_genere_source'] === undefined || par['n_cht_genere_source'] === '' || par['n_cht_genere_source'] === null){
                tableau_champs.push( '`cht_genere_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_genere_source` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_genere_source'] , 'n_cht_genere_source' ) + '\'' );
            }
            if(par['n_cht_commentaire_source'] === undefined || par['n_cht_commentaire_source'] === '' || par['n_cht_commentaire_source'] === null){
                tableau_champs.push( '`cht_commentaire_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_commentaire_source` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_commentaire_source'] , 'n_cht_commentaire_source' ) + '\'' );
            }
            if(par['n_che_autorisation_globale_source'] === undefined || par['n_che_autorisation_globale_source'] === '' || par['n_che_autorisation_globale_source'] === null){
                tableau_champs.push( '`che_autorisation_globale_source` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_autorisation_globale_source'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "autorisation globale" doit être numérique'});
                }
                tableau_champs.push( '`che_autorisation_globale_source` = ' + this.__ig1.__fnt1.sq0( par['n_che_autorisation_globale_source'] , 'n_che_autorisation_globale_source' ) + '' );
            }
            if(par['n_cht_condition_rev_source'] === undefined || par['n_cht_condition_rev_source'] === '' || par['n_cht_condition_rev_source'] === null){
                tableau_champs.push( '`cht_condition_rev_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_condition_rev_source` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_condition_rev_source'] , 'n_cht_condition_rev_source' ) + '\'' );
            }
            if(par['n_cht_condition_js_source'] === undefined || par['n_cht_condition_js_source'] === '' || par['n_cht_condition_js_source'] === null){
                tableau_champs.push( '`cht_condition_js_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_condition_js_source` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_condition_js_source'] , 'n_cht_condition_js_source' ) + '\'' );
            }
            if(par['n_cht_notification_ko_source'] === undefined || par['n_cht_notification_ko_source'] === '' || par['n_cht_notification_ko_source'] === null){
                tableau_champs.push( '`cht_notification_ko_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_notification_ko_source` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_notification_ko_source'] , 'n_cht_notification_ko_source' ) + '\'' );
            }
            if(par['n_chp_usage_source'] === undefined || par['n_chp_usage_source'] === '' || par['n_chp_usage_source'] === null){
                tableau_champs.push( '`chp_usage_source` = NULL' );
            }else{
                tableau_champs.push( '`chp_usage_source` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_usage_source'] , 'n_chp_usage_source' ) + '\'' );
            }
            if(par['n_che_pour_util_source'] === undefined || par['n_che_pour_util_source'] === '' || par['n_che_pour_util_source'] === null){
                tableau_champs.push( '`che_pour_util_source` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_pour_util_source'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "pour util" doit être numérique'});
                }
                tableau_champs.push( '`che_pour_util_source` = ' + this.__ig1.__fnt1.sq0( par['n_che_pour_util_source'] , 'n_che_pour_util_source' ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des sources'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_source\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_source'] , 'c_chi_id_source' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1422= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1422 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1422';
    __ig1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 , __db1 ){
        this.__ig1=__ig1;
        this.__db1=__db1;
    }
}
export{sql_1422 as sql_1422};