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
    async sql( par ){
        /* test "non nul" sur le champ "cht_libelle_menu" */
        if(par['n_cht_libelle_menu'] === null || par['n_cht_libelle_menu'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "libelle" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* test "non nul" sur le champ "chp_titre_menu" */
        if(par['n_chp_titre_menu'] === null || par['n_chp_titre_menu'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "titre" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* test "non nul" sur le champ "chx_autorisation_menu" */
        if(par['n_chx_autorisation_menu'] === null || par['n_chx_autorisation_menu'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "autorisation" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* test "non nul" sur le champ "chp_methode_menu" */
        if(par['n_chp_methode_menu'] === null || par['n_chp_methode_menu'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "methode" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let sql0='UPDATE `tbl_menus` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_cht_libelle_menu'] === undefined || par['n_cht_libelle_menu'] === '' || par['n_cht_libelle_menu'] === null){
                tableau_champs.push( '`cht_libelle_menu` = NULL' );
            }else{
                tableau_champs.push( '`cht_libelle_menu` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_libelle_menu'] , 'n_cht_libelle_menu' ) + '\'' );
            }
            if(par['n_chp_titre_menu'] === undefined || par['n_chp_titre_menu'] === '' || par['n_chp_titre_menu'] === null){
                tableau_champs.push( '`chp_titre_menu` = NULL' );
            }else{
                tableau_champs.push( '`chp_titre_menu` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_titre_menu'] , 'n_chp_titre_menu' ) + '\'' );
            }
            if(par['n_chx_autorisation_menu'] === undefined || par['n_chx_autorisation_menu'] === '' || par['n_chx_autorisation_menu'] === null){
                tableau_champs.push( '`chx_autorisation_menu` = NULL' );
            }else{
                tableau_champs.push( '`chx_autorisation_menu` = ' + this.__ig1.__fnt1.sq0( par['n_chx_autorisation_menu'] , 'n_chx_autorisation_menu' ) + '' );
            }
            if(par['n_chp_methode_menu'] === undefined || par['n_chp_methode_menu'] === '' || par['n_chp_methode_menu'] === null){
                tableau_champs.push( '`chp_methode_menu` = NULL' );
            }else{
                tableau_champs.push( '`chp_methode_menu` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_methode_menu'] , 'n_chp_methode_menu' ) + '\'' );
            }
            if(par['n_cht_condition_menu'] === undefined || par['n_cht_condition_menu'] === '' || par['n_cht_condition_menu'] === null){
                tableau_champs.push( '`cht_condition_menu` = NULL' );
            }else{
                tableau_champs.push( '`cht_condition_menu` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_condition_menu'] , 'n_cht_condition_menu' ) + '\'' );
            }
            if(par['n_cht_initialisation_menu'] === undefined || par['n_cht_initialisation_menu'] === '' || par['n_cht_initialisation_menu'] === null){
                tableau_champs.push( '`cht_initialisation_menu` = NULL' );
            }else{
                tableau_champs.push( '`cht_initialisation_menu` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_initialisation_menu'] , 'n_cht_initialisation_menu' ) + '\'' );
            }
            if(par['n_cht_condition_js_menu'] === undefined || par['n_cht_condition_js_menu'] === '' || par['n_cht_condition_js_menu'] === null){
                tableau_champs.push( '`cht_condition_js_menu` = NULL' );
            }else{
                tableau_champs.push( '`cht_condition_js_menu` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_condition_js_menu'] , 'n_cht_condition_js_menu' ) + '\'' );
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
            where0+=` AND \`chi_id_menu\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_menu'] , 'c_chi_id_menu' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_148= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 148 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_148';
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
export{sql_148 as sql_148};