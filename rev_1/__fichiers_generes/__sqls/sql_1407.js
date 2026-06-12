const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1407{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /*
          === test spécifique sur le champ "chp_nom_dossier" ===
        */
        let __test_0_1=this.__ig1.__fnts_c_et_s.test_du_nom_de_fichier1( par['n_chp_nom_dossier'] , 'nom du dossier' );
        if(__test_0_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_0_1.__xme});
        }
        /* test "non nul" sur le champ "chx_parent_dossier" */
        if(par['n_chx_parent_dossier'] === null || par['n_chx_parent_dossier'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "parent" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_dossiers` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_nom_dossier'] === undefined || par['n_chp_nom_dossier'] === '' || par['n_chp_nom_dossier'] === null){
                tableau_champs.push( '`chp_nom_dossier` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_dossier` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_dossier'] , 'n_chp_nom_dossier' ) + '\'' );
            }
            if(par['n_chx_parent_dossier'] === undefined || par['n_chx_parent_dossier'] === '' || par['n_chx_parent_dossier'] === null){
                tableau_champs.push( '`chx_parent_dossier` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chx_parent_dossier'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "parent" doit être numérique'});
                }
                tableau_champs.push( '`chx_parent_dossier` = ' + this.__ig1.__fnt1.sq0( par['n_chx_parent_dossier'] , 'n_chx_parent_dossier' ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des dossiers'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_dossier\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_dossier'] , 'c_chi_id_dossier' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1407= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1407 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1407';
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
export{sql_1407 as sql_1407};