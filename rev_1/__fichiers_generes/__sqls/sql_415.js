const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_415{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chi_id_source" */
        if(par['n_chi_id_source'] === null || par['n_chi_id_source']===''){
            this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "id" doit être renseigné [' + this.__ig1.nl2() + ']');
            return{__xst:__xer};
        }
        let sql0='UPDATE `tbl_sources` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chi_id_source'] === undefined || par['n_chi_id_source'] === '' || par['n_chi_id_source'] === null){
                tableau_champs.push( '`chi_id_source` = NULL' );
            }else{
                tableau_champs.push( '`chi_id_source` = ' + this.__ig1.__fnt1.sq0( par['n_chi_id_source'] , 'n_chi_id_source' ) + '' );
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
            /* this.__ig1.ma_trace1(' sql_415= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 415 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_415';
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
export{sql_415 as sql_415};