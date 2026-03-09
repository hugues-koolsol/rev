const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_163{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='UPDATE `tbl_sources` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_nom_source'] === undefined || par['n_chp_nom_source'] === '' || par['n_chp_nom_source'] === null){
                tableau_champs.push( '`chp_nom_source` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_source` = \'' + this.__gi1.__fnt1.sq0( par['n_chp_nom_source'] ) + '\'' );
            }
            if(par['n_che_binaire_source'] === undefined || par['n_che_binaire_source'] === '' || par['n_che_binaire_source'] === null){
                tableau_champs.push( '`che_binaire_source` = NULL' );
            }else{
                tableau_champs.push( '`che_binaire_source` = ' + this.__gi1.__fnt1.sq0( par['n_che_binaire_source'] ) + '' );
            }
            if(par['n_chx_dossier_id_source'] === undefined || par['n_chx_dossier_id_source'] === '' || par['n_chx_dossier_id_source'] === null){
                tableau_champs.push( '`chx_dossier_id_source` = NULL' );
            }else{
                tableau_champs.push( '`chx_dossier_id_source` = ' + this.__gi1.__fnt1.sq0( par['n_chx_dossier_id_source'] ) + '' );
            }
            if(par['n_cht_rev_source'] === undefined || par['n_cht_rev_source'] === '' || par['n_cht_rev_source'] === null){
                tableau_champs.push( '`cht_rev_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_rev_source` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_rev_source'] ) + '\'' );
            }
            if(par['n_cht_genere_source'] === undefined || par['n_cht_genere_source'] === '' || par['n_cht_genere_source'] === null){
                tableau_champs.push( '`cht_genere_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_genere_source` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_genere_source'] ) + '\'' );
            }
            if(par['n_cht_commentaire_source'] === undefined || par['n_cht_commentaire_source'] === '' || par['n_cht_commentaire_source'] === null){
                tableau_champs.push( '`cht_commentaire_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_commentaire_source` = \'' + this.__gi1.__fnt1.sq0( par['n_cht_commentaire_source'] ) + '\'' );
            }
            if(par['n_che_contient_version_source'] === undefined || par['n_che_contient_version_source'] === '' || par['n_che_contient_version_source'] === null){
                tableau_champs.push( '`che_contient_version_source` = NULL' );
            }else{
                tableau_champs.push( '`che_contient_version_source` = ' + this.__gi1.__fnt1.sq0( par['n_che_contient_version_source'] ) + '' );
            }
            if(par['n_che_autorisation_globale_source'] === undefined || par['n_che_autorisation_globale_source'] === '' || par['n_che_autorisation_globale_source'] === null){
                tableau_champs.push( '`che_autorisation_globale_source` = NULL' );
            }else{
                tableau_champs.push( '`che_autorisation_globale_source` = ' + this.__gi1.__fnt1.sq0( par['n_che_autorisation_globale_source'] ) + '' );
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
            where0+=` AND \`chi_id_source\` = ` + this.__gi1.__fnt1.sq1( par['c_chi_id_source'] ) + '\r\n';
            sql0+=where0;
            /* this.__gi1.ma_trace1(' sql_163= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 163 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_163';
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
export{sql_163 as sql_163};