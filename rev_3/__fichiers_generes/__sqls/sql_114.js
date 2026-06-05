const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_114{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0='';
        let obj1=await this.__ig1.tester_les_dependances1( {"table_parente" : 'tbl_taches' ,"champ_parent" : 'chi_id_tache' ,"id_enregistrement" : par['chi_id_tache'] ,"__db1" : this.__db1} );
        if(obj1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xva" : {} ,"__xme" : 'cet enregistrement possède des dépendants et ne peut être supprimé' ,"sql0" : sql0});
        }
        try{
            sql0=`DELETE FROM tbl_taches
              WHERE (\`chi_id_tache\` = ` + this.__ig1.__fnt1.sq1( par['chi_id_tache'] , 'chi_id_tache' ) + `
                   AND \`chx_utilisateur_tache\` = ` + this.__ig1.donnees_retournees.chi_id_utilisateur + `) ;
            `;
            /* this.__ig1.ma_trace1('sql_' , sql0 ); */
            const res=await this.__db1.exec( sql0 );
            /* this.__ig1.ma_trace1('res=',res) */
            return({"__xst" : __xsu ,"__xva" : {} ,"sql0" : sql0 ,"changements" : res});
        }catch(e){
            if(e.stack.indexOf( 'FOREIGN KEY' ) >= 0){
                await this.__ig1.afficher_les_dependances1( {"table_parente" : 'tbl_taches' ,"champ_parent" : 'chi_id_tache' ,"id_enregistrement" : par['chi_id_tache'] ,"__db1" : this.__db1} );
            }
            return(this.__ig1.traite_erreur_sql( 114 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_114';
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
export{sql_114 as sql_114};