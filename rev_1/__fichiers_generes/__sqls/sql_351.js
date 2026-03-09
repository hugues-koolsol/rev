const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_351{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='UPDATE `tbl_requetes` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chi_id_requete'] === undefined || par['n_chi_id_requete'] === '' || par['n_chi_id_requete'] === null){
                tableau_champs.push( '`chi_id_requete` = NULL' );
            }else{
                tableau_champs.push( '`chi_id_requete` = ' + this.__gi1.__fnt1.sq0( par['n_chi_id_requete'] ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des requetes'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_requete\` = ` + this.__gi1.__fnt1.sq1( par['c_chi_id_requete'] ) + '\r\n';
            sql0+=where0;
            /* this.__gi1.ma_trace1(' sql_351= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 351 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_351';
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
export{sql_351 as sql_351};