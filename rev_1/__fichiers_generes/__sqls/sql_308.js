const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_308{
    /*
      =============================================================================================================
    */
    async sql( par ){
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
                tableau_champs.push( '`che_binaire_source` = ' + this.__ig1.__fnt1.sq0( par['n_che_binaire_source'] , 'n_che_binaire_source' ) + '' );
            }
            if(par['n_chx_dossier_id_source'] === undefined || par['n_chx_dossier_id_source'] === '' || par['n_chx_dossier_id_source'] === null){
                tableau_champs.push( '`chx_dossier_id_source` = NULL' );
            }else{
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
            /* this.__ig1.ma_trace1(' sql_308= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 308 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_308';
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
export{sql_308 as sql_308};