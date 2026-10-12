const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1223{
    /*
      ================================update=============================================================================
    */
    async sql( tup ){
        let sql0='UPDATE `tbl_televersements` SET \r\n';
        let tableau_champs=[];
        try{
            if(tup.n_chp_comm_fichier_televersement === undefined || tup.n_chp_comm_fichier_televersement === '' || tup.n_chp_comm_fichier_televersement === null){
                tableau_champs.push( '`chp_comm_fichier_televersement` = NULL' );
            }else{
                tableau_champs.push( '`chp_comm_fichier_televersement` = \'' + this.__ig1.__fnt1.sq0( tup.n_chp_comm_fichier_televersement , 'n_chp_comm_fichier_televersement' ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des televersements'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_televersement\` = ` + this.__ig1.__fnt1.sq1( tup.c_chi_id_televersement , 'c_chi_id_televersement' ) + '\r\n';
            sql0+=where0;
        }catch(e){
            return({__xst:__xer , __xme: this.__ig1.nl2(e)});
        }
        /* this.__ig1.ma_trace1(' sql_1223= ' + sql0 ); */
        try{
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1223 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1223';
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
export{sql_1223 as sql_1223};