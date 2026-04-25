const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
/*
  =====================================================================================================================
*/
class x_ecran_generer_programmes1{
    /*
      =============================================================================================================
    */
    async recuperer_zone_travail_pour_les_bases2( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_171={};
        let tt171=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 171 , criteres_171 , this.__ig1.donnees_retournees , __db1 );
        if(tt171[__xst] !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( '[' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        this.__ig1.donnees_retournees[__xva]['les_bases_du_projet']=tt171[__xva];
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='x_ecran_generer_programmes1';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{x_ecran_generer_programmes1 as x_ecran_generer_programmes1};