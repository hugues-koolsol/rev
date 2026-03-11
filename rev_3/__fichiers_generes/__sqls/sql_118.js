const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_118{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let obj1=await this.__gi1.tester_les_dependances1( {"table_parente" : 'tbl_sources' ,"champ_parent" : 'chi_id_source' ,"id_enregistrement" : par['chi_id_source'] ,"__db1" : this.__db1} , donnees_retournees );
        if(obj1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xva" : {} ,"__xme" : 'cet enregistrement possède des dépendants et ne peut être supprimé' ,"sql0" : sql0});
        }
        let sql0='';
        try{
            sql0=`DELETE FROM tbl_sources
              WHERE \`chi_id_source\` = ` + this.__gi1.__fnt1.sq1( par['chi_id_source'] ) + ` ;
            `;
            /* this.__gi1.ma_trace1('sql_' , sql0 ); */
            const res=await this.__db1.exec( sql0 );
            /* this.__gi1.ma_trace1('res=',res) */
            return({"__xst" : __xsu ,"__xva" : {} ,"sql0" : sql0 ,"changements" : res});
        }catch(e){
            if(e.stack.indexOf( 'FOREIGN KEY' ) >= 0){
                await this.__gi1.afficher_les_dependances1( {"table_parente" : 'tbl_sources' ,"champ_parent" : 'chi_id_source' ,"id_enregistrement" : par['chi_id_source'] ,"__db1" : this.__db1} , donnees_retournees );
            }
            return(this.__gi1.traite_erreur_sql( 118 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_118';
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
export{sql_118 as sql_118};