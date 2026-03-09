const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_397{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='UPDATE `tbl_travaux` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_resume_travail'] === undefined || par['n_chp_resume_travail'] === '' || par['n_chp_resume_travail'] === null){
                tableau_champs.push( '`chp_resume_travail` = NULL' );
            }else{
                tableau_champs.push( '`chp_resume_travail` = \'' + this.__gi1.__fnt1.sq0( par['n_chp_resume_travail'] ) + '\'' );
            }
            if(par['n_cht_rev_travail'] === undefined || par['n_cht_rev_travail'] === '' || par['n_cht_rev_travail'] === null){
                tableau_champs.push( '`cht_rev_travail` = NULL' );
            }else{
                tableau_champs.push( '`cht_rev_travail` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_rev_travail'] ) + '\'' );
            }
            tableau_champs.push( '`chd_dtc_travail` = \'' + donnees_retournees.date_heure_serveur + '\' ' );
            if(par['n_chp_etat_travail'] === undefined || par['n_chp_etat_travail'] === '' || par['n_chp_etat_travail'] === null){
                tableau_champs.push( '`chp_etat_travail` = NULL' );
            }else{
                tableau_champs.push( '`chp_etat_travail` = \'' + this.__gi1.__fnt1.sq0( par['n_chp_etat_travail'] ) + '\'' );
            }
            if(par['n_chx_projet_travail'] === undefined || par['n_chx_projet_travail'] === '' || par['n_chx_projet_travail'] === null){
                tableau_champs.push( '`chx_projet_travail` = NULL' );
            }else{
                tableau_champs.push( '`chx_projet_travail` = ' + this.__gi1.__fnt1.sq0( par['n_chx_projet_travail'] ) + '' );
            }
            if(par['n_cht_log_travail'] === undefined || par['n_cht_log_travail'] === '' || par['n_cht_log_travail'] === null){
                tableau_champs.push( '`cht_log_travail` = NULL' );
            }else{
                tableau_champs.push( '`cht_log_travail` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_log_travail'] ) + '\'' );
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
            where0+=` AND \`chi_id_travail\` = ` + this.__gi1.__fnt1.sq1( par['c_chi_id_travail'] ) + '\r\n';
            sql0+=where0;
            /* this.__gi1.ma_trace1(' sql_397= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 397 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_397';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 , __db1 ){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
}
export{sql_397 as sql_397};