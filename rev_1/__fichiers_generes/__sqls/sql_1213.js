const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1213{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chi_id_grandeur" */
        if(par['n_chi_id_grandeur'] === null || par['n_chi_id_grandeur'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "id de la grandeur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_grandeurs` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chi_id_grandeur'] === undefined || par['n_chi_id_grandeur'] === '' || par['n_chi_id_grandeur'] === null){
                tableau_champs.push( '`chi_id_grandeur` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chi_id_grandeur'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "id" doit être numérique'});
                }
                tableau_champs.push( '`chi_id_grandeur` = ' + this.__ig1.__fnt1.sq0( par['n_chi_id_grandeur'] , 'n_chi_id_grandeur' ) + '' );
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
            /* this.__ig1.ma_trace1(' sql_1213= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1213 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1213';
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
export{sql_1213 as sql_1213};