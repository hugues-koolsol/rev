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
    async recupere_elements_pour_générer_les_programmes( mat , d ){
        /* this.__ig1.ma_trace1("this.__ig1.donnees_recues=",this.__ig1.donnees_recues); */
        let chi_id_basedd_de_reference=this.__ig1.donnees_recues.__xva.chi_id_basedd_de_reference;
        let table_de_reference=this.__ig1.donnees_recues.__xva.table_de_reference;
        let incice_de_la_classe=this.__ig1.donnees_recues.__xva.incice_de_la_classe;
        let nom_de_la_classe='';
        if(table_de_reference.substr( 0 , 4 ) === 'tbl_'){
            nom_de_la_classe=table_de_reference.substr( 4 ) + incice_de_la_classe;
        }else{
            nom_de_la_classe=table_de_reference + incice_de_la_classe;
        }
        let nom_source_serveur=nom_de_la_classe + '_s.js';
        let nom_source_client=nom_de_la_classe + '_c.js';
        /* this.__ig1.ma_trace1("nom_source_serveur="+nom_source_serveur); */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_417={"T0_chp_nom_source" : nom_source_serveur};
        let tt417=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T0`.`chp_nom_source`
         FROM b1.tbl_sources T0
        WHERE (`T0`.`chp_nom_source` = :T0_chp_nom_source
           AND `T0`.`chp_usage_source` = 'fragment'
           AND `T0`.`chx_dossier_id_source` IS NULL)
        ;
        */
        /*sql_inclure_fin*/ 417 , critere_417 , this.__ig1.donnees_retournees , __db1 );
        if(tt417.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt147.__xme});
        }
        let rev_fragment=null;
        /* this.__ig1.ma_trace1("tt417.__xva",tt417.__xva); */
        if(tt417.__xva.length === 1){
            rev_fragment={};
            rev_fragment[tt417.__xva[0]['T0.chp_nom_source']]=tt417.__xva[0]['T0.cht_rev_source'];
        }
        let critere2_417={"T0_chp_nom_source" : nom_source_client};
        let tt417_2=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T0`.`chp_nom_source`
         FROM b1.tbl_sources T0
        WHERE (`T0`.`chp_nom_source` = :T0_chp_nom_source
           AND `T0`.`chp_usage_source` = 'fragment'
           AND `T0`.`chx_dossier_id_source` IS NULL)
        ;
        */
        /*sql_inclure_fin*/ 417 , critere2_417 , this.__ig1.donnees_retournees , __db1 );
        if(tt417_2.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt417_2.__xme});
        }
        if(tt417_2.__xva.length === 1){
            if(rev_fragment === null){
                rev_fragment={};
            }
            rev_fragment[tt417_2.__xva[0]['T0.chp_nom_source']]=tt417_2.__xva[0]['T0.cht_rev_source'];
        }
        this.__ig1.donnees_retournees.__xva['rev_fragment']=rev_fragment;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async integrer_un_source_genere_dans_la_table_source( mat , d ){
        let nom_du_source=this.__ig1.donnees_recues.__xva.nom_du_source;
        /* this.__ig1.ma_trace1( "nom_du_source=" , nom_du_source ); */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_416={"T0_chp_nom_source" : nom_du_source};
        let tt416=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source`
         FROM b1.tbl_sources T0
        WHERE (`T0`.`chp_nom_source` = :T0_chp_nom_source
           AND `T0`.`chx_dossier_id_source` IS NOT NULL)
        ;
        */
        /*sql_inclure_fin*/ 416 , critere_416 , this.__ig1.donnees_retournees , __db1 );
        if(tt416.__xst !== __xsu || tt416.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let chemin_source='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__programmes/' + nom_du_source;
        try{
            await Deno.writeTextFile( chemin_source , this.__ig1.donnees_recues.__xva.cht_genere_source );
            /* this.__ig1.ma_trace1("ok" + chemin_source); */
        }catch(e){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2( e ) + ']'});
        }
        return({"__xst" : __xsu});
    }
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
        if(tt171.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2( e ) + ']'});
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