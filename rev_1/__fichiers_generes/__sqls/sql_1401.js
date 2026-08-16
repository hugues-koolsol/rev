const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1401{
    /*
      =============================================================================================================
    */
    async sql( tup ){
        /* test "non nul" sur le champ "chp_etat_travail" */
        if(tup.n_chp_etat_travail === null || tup.n_chp_etat_travail === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_travaux` SET \r\n';
        let tableau_champs=[];
        try{
            if(tup.n_chp_etat_travail === undefined || tup.n_chp_etat_travail === '' || tup.n_chp_etat_travail === null){
                tableau_champs.push( '`chp_etat_travail` = NULL' );
            }else{
                tableau_champs.push( '`chp_etat_travail` = \'' + this.__ig1.__fnt1.sq0( tup.n_chp_etat_travail , 'n_chp_etat_travail' ) + '\'' );
            }
            if(tup.n_cht_log_travail === undefined || tup.n_cht_log_travail === '' || tup.n_cht_log_travail === null){
                tableau_champs.push( '`cht_log_travail` = NULL' );
            }else{
                tableau_champs.push( '`cht_log_travail` = \'' + this.__ig1.__fnt1.sq0( tup.n_cht_log_travail , 'n_cht_log_travail' ) + '\'' );
            }
            if(tup.n_chn_duree_travail === undefined || tup.n_chn_duree_travail === '' || tup.n_chn_duree_travail === null){
                tableau_champs.push( '`chn_duree_travail` = NULL' );
            }else{
                if(isNaN(parseFloat( tup.n_chn_duree_travail ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "durée" doit être numérique'});
                }
                tableau_champs.push( '`chn_duree_travail` = ' + this.__ig1.__fnt1.sq0( tup.n_chn_duree_travail , 'n_chn_duree_travail' ) + '' );
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
            where0+=` AND \`chi_id_travail\` = ` + this.__ig1.__fnt1.sq1( tup.c_chi_id_travail , 'c_chi_id_travail' ) + '\r\n';
            sql0+=where0;
        }catch(e){
            return({__xst:__xer , __xme: this.__ig1.nl2(e)});
        }
        /* this.__ig1.ma_trace1(' sql_1401= ' + sql0 ); */
        try{
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1401 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1401';
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
export{sql_1401 as sql_1401};