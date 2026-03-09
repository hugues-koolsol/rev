const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_404{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='';
        try{
            sql0=`DELETE FROM tbl_travaux
              WHERE \`chp_etat_travail\` = ` + this.__gi1.__fnt1.sq1( par['chp_etat_travail'] ) + ` ;
            `;
            /* this.__gi1.ma_trace1('sql_' , sql0 ); */
            const res=await this.__db1.exec( sql0 );
            /* this.__gi1.ma_trace1('res=',res) */
            return({"__xst" : __xsu ,"__xva" : {} ,"sql0" : sql0 ,"changements" : res});
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 404 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_404';
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
export{sql_404 as sql_404};