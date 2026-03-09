const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_388{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0=`
          COMMIT;
        `;
    /* this.__gi1.ma_trace1(' sql0 = ' + sql0 ); */
    try{
            let ret=this.__db1.exec($sql0);
            return({ "__xst" : __xsu, 'changements' : res});;
        }catch(e){
            if(e.stack.indexOf('API misuse')>=0){
                console.log('%c\nATTENTION API MISUSE, un await est il manquant quelquepart ?\n\n'+e.stack,'color:red;background-color:yellow;')
            }
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base ':'erreur SQL';
            return {/**/
                "__xst" : __xer ,
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
    moi='sql_388';
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
export{sql_388 as sql_388};