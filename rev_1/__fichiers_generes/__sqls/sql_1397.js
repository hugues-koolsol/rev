const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1397{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_resume_travail" */
        if(par['n_chp_resume_travail'] === null || par['n_chp_resume_travail'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "résumé du travail" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "cht_rev_travail" ===
        */
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( par['n_cht_rev_travail'] , 'description rev du travail' );
        if(__test_1_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_1_1.__xme});
        }
        /* test "non nul" sur le champ "chx_utilisateur_travail" */
        if(par['n_chx_utilisateur_travail'] === null || par['n_chx_utilisateur_travail'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur du travail" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_etat_travail" */
        if(par['n_chp_etat_travail'] === null || par['n_chp_etat_travail'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_travaux` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_resume_travail'] === undefined || par['n_chp_resume_travail'] === '' || par['n_chp_resume_travail'] === null){
                tableau_champs.push( '`chp_resume_travail` = NULL' );
            }else{
                tableau_champs.push( '`chp_resume_travail` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_resume_travail'] , 'n_chp_resume_travail' ) + '\'' );
            }
            if(par['n_cht_rev_travail'] === undefined || par['n_cht_rev_travail'] === '' || par['n_cht_rev_travail'] === null){
                tableau_champs.push( '`cht_rev_travail` = NULL' );
            }else{
                tableau_champs.push( '`cht_rev_travail` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_rev_travail'] , 'n_cht_rev_travail' ) + '\'' );
            }
            if(par['n_chx_utilisateur_travail'] === undefined || par['n_chx_utilisateur_travail'] === '' || par['n_chx_utilisateur_travail'] === null){
                tableau_champs.push( '`chx_utilisateur_travail` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chx_utilisateur_travail'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "utilisateur" doit être numérique'});
                }
                tableau_champs.push( '`chx_utilisateur_travail` = ' + this.__ig1.__fnt1.sq0( par['n_chx_utilisateur_travail'] , 'n_chx_utilisateur_travail' ) + '' );
            }
            if(par['n_cht_utilisateur_travail'] === undefined || par['n_cht_utilisateur_travail'] === '' || par['n_cht_utilisateur_travail'] === null){
                tableau_champs.push( '`cht_utilisateur_travail` = NULL' );
            }else{
                tableau_champs.push( '`cht_utilisateur_travail` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_utilisateur_travail'] , 'n_cht_utilisateur_travail' ) + '\'' );
            }
            if(par['n_chp_etat_travail'] === undefined || par['n_chp_etat_travail'] === '' || par['n_chp_etat_travail'] === null){
                tableau_champs.push( '`chp_etat_travail` = NULL' );
            }else{
                tableau_champs.push( '`chp_etat_travail` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_etat_travail'] , 'n_chp_etat_travail' ) + '\'' );
            }
            if(par['n_cht_log_travail'] === undefined || par['n_cht_log_travail'] === '' || par['n_cht_log_travail'] === null){
                tableau_champs.push( '`cht_log_travail` = NULL' );
            }else{
                tableau_champs.push( '`cht_log_travail` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_log_travail'] , 'n_cht_log_travail' ) + '\'' );
            }
            if(par['n_chn_duree_travail'] === undefined || par['n_chn_duree_travail'] === '' || par['n_chn_duree_travail'] === null){
                tableau_champs.push( '`chn_duree_travail` = NULL' );
            }else{
                if(isNaN(parseFloat( par['n_chn_duree_travail'] ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "durée" doit être numérique'});
                }
                tableau_champs.push( '`chn_duree_travail` = ' + this.__ig1.__fnt1.sq0( par['n_chn_duree_travail'] , 'n_chn_duree_travail' ) + '' );
            }
            tableau_champs.push( '`chx_projet_travail` = ' + this.__ig1.donnees_retournees.chi_id_projet + '' );
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des travaux'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_travail\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_travail'] , 'c_chi_id_travail' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1397= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1397 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1397';
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
export{sql_1397 as sql_1397};