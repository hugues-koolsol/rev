const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_148{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='UPDATE `tbl_menus` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_cht_libelle_menu'] === undefined || par['n_cht_libelle_menu'] === '' || par['n_cht_libelle_menu'] === null){
                tableau_champs.push( '`cht_libelle_menu` = NULL' );
            }else{
                tableau_champs.push( '`cht_libelle_menu` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_libelle_menu'] ) + '\'' );
            }
            if(par['n_chp_titre_menu'] === undefined || par['n_chp_titre_menu'] === '' || par['n_chp_titre_menu'] === null){
                tableau_champs.push( '`chp_titre_menu` = NULL' );
            }else{
                tableau_champs.push( '`chp_titre_menu` = \'' + this.__gi1.__fnt1.sq0( par['n_chp_titre_menu'] ) + '\'' );
            }
            if(par['n_chx_autorisation_menu'] === undefined || par['n_chx_autorisation_menu'] === '' || par['n_chx_autorisation_menu'] === null){
                tableau_champs.push( '`chx_autorisation_menu` = NULL' );
            }else{
                tableau_champs.push( '`chx_autorisation_menu` = ' + this.__gi1.__fnt1.sq0( par['n_chx_autorisation_menu'] ) + '' );
            }
            if(par['n_chp_methode_menu'] === undefined || par['n_chp_methode_menu'] === '' || par['n_chp_methode_menu'] === null){
                tableau_champs.push( '`chp_methode_menu` = NULL' );
            }else{
                tableau_champs.push( '`chp_methode_menu` = \'' + this.__gi1.__fnt1.sq0( par['n_chp_methode_menu'] ) + '\'' );
            }
            if(par['n_cht_condition_menu'] === undefined || par['n_cht_condition_menu'] === '' || par['n_cht_condition_menu'] === null){
                tableau_champs.push( '`cht_condition_menu` = NULL' );
            }else{
                tableau_champs.push( '`cht_condition_menu` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_condition_menu'] ) + '\'' );
            }
            if(par['n_cht_initialisation_menu'] === undefined || par['n_cht_initialisation_menu'] === '' || par['n_cht_initialisation_menu'] === null){
                tableau_champs.push( '`cht_initialisation_menu` = NULL' );
            }else{
                tableau_champs.push( '`cht_initialisation_menu` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_initialisation_menu'] ) + '\'' );
            }
            if(par['n_cht_condition_js_menu'] === undefined || par['n_cht_condition_js_menu'] === '' || par['n_cht_condition_js_menu'] === null){
                tableau_champs.push( '`cht_condition_js_menu` = NULL' );
            }else{
                tableau_champs.push( '`cht_condition_js_menu` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_condition_js_menu'] ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des menus'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_menu\` = ` + this.__gi1.__fnt1.sq1( par['c_chi_id_menu'] ) + '\r\n';
            sql0+=where0;
            /* this.__gi1.ma_trace1(' sql_148= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 148 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_148';
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
export{sql_148 as sql_148};