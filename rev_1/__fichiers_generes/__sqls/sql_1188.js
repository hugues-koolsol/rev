const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1188{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /*
          === test spécifique sur le champ "chp_cle_grandeur" ===
        */
        let __test_0_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( par['n_chp_cle_grandeur'] , 'cle de la grandeur' );
        if(__test_0_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_0_1.__xme});
        }
        let sql0='UPDATE `tbl_grandeurs` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_cle_grandeur'] === undefined || par['n_chp_cle_grandeur'] === '' || par['n_chp_cle_grandeur'] === null){
                tableau_champs.push( '`chp_cle_grandeur` = NULL' );
            }else{
                tableau_champs.push( '`chp_cle_grandeur` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_cle_grandeur'] , 'n_chp_cle_grandeur' ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des grandeurs'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_grandeur\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_grandeur'] , 'c_chi_id_grandeur' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1188= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1188 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1188';
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
export{sql_1188 as sql_1188};