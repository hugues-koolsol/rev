const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_356{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='UPDATE `tbl_bdds` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_rev_travail_basedd'] === undefined || par['n_chp_rev_travail_basedd'] === '' || par['n_chp_rev_travail_basedd'] === null){
                tableau_champs.push( '`chp_rev_travail_basedd` = NULL' );
            }else{
                tableau_champs.push( '`chp_rev_travail_basedd` = \'' + this.__gi1.__fnt1.sq0( par['n_chp_rev_travail_basedd'] ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des bdds'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_basedd\` = ` + this.__gi1.__fnt1.sq1( par['c_chi_id_basedd'] ) + '\r\n';
            sql0+=where0;
            /* this.__gi1.ma_trace1(' sql_356= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 356 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_356';
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
export{sql_356 as sql_356};