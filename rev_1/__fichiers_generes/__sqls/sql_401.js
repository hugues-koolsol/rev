const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_401{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_etat_travail" */
        if(par['n_chp_etat_travail'] === null || par['n_chp_etat_travail'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "état du travail" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let sql0='UPDATE `tbl_travaux` SET \r\n';
        let tableau_champs=[];
        try{
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
                tableau_champs.push( '`chn_duree_travail` = ' + this.__ig1.__fnt1.sq0( par['n_chn_duree_travail'] , 'n_chn_duree_travail' ) + '' );
            }
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
            /* this.__ig1.ma_trace1(' sql_401= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 401 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_401';
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
export{sql_401 as sql_401};