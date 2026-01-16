class sql_379{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0=`
          BEGIN TRANSACTION;
        `;
    /* this.__gi1.ma_trace1(' sql0 = ' + sql0 ); */
    try{
            let ret=this.__db1.exec($sql0);
            return({ "__xst" : 1, 'changements' : res});;
        }catch(e){
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base<br />':'erreur SQL';
            return {/**/
                __xst : 0 ,
                "sql0" : sql0 ,
                "texte_requete" : '' ,
                    "exception" : e ,
                "__xme" : __xme ,
            };

        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_379';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor(__gi1,__db1){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
}
export{sql_379 as sql_379};
