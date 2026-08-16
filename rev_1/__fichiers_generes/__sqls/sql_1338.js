const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1338{
    /*
      =============================================================================================================
    */
    verifier_coherence( tup ){
        this.__ig1.options_generales.erreur_controlee=true;
        if(!(tup.n_cht_condition_rev_source === null || tup.n_cht_condition_rev_source === '')){
            if(tup.n_cht_notification_ko_source === null || tup.n_cht_notification_ko_source === ''){
                throw new Error( 'si une condition existe alors une notification doit être indiquée' );
            }
        }
        if(tup.n_che_est_fragment_source === 1 && tup.n_chx_dossier_id_source !== null){
            throw new Error( 'si c\'est un fragment alors le dossier ne doit pas être indiqué' );
        }
        this.__ig1.options_generales.erreur_controlee=false;
        return({"__xst" : __xsu});
    }

    /*
      =============================================================================================================
    */
    async sql( tup ){
        /*
          === test spécifique sur le champ "cht_rev_source" ===
        */
        let __test_0_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( tup.n_cht_rev_source , 'rev' );
        if(__test_0_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_0_1.__xme});
        }
        /*
          =====================================================================================================
          ================== appel de la fonction de coherence qui fait un throw ==============================
          =====================================================================================================
        */
        this.verifier_coherence( tup );
        /*
          =====================================================================================================
          ================== appel de la fonction de coherence qui fait un throw ==============================
          =====================================================================================================
        */
        let sql0='UPDATE `tbl_sources` SET \r\n';
        let tableau_champs=[];
        try{
            if(tup.n_cht_rev_source === undefined || tup.n_cht_rev_source === '' || tup.n_cht_rev_source === null){
                tableau_champs.push( '`cht_rev_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_rev_source` = \'' + this.__ig1.__fnt1.sq0( tup.n_cht_rev_source , 'n_cht_rev_source' ) + '\'' );
            }
            if(tup.n_cht_genere_source === undefined || tup.n_cht_genere_source === '' || tup.n_cht_genere_source === null){
                tableau_champs.push( '`cht_genere_source` = NULL' );
            }else{
                tableau_champs.push( '`cht_genere_source` = \'' + this.__ig1.__fnt1.sq0( tup.n_cht_genere_source , 'n_cht_genere_source' ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des sources'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_source\` = ` + this.__ig1.__fnt1.sq1( tup.c_chi_id_source , 'c_chi_id_source' ) + '\r\n';
            sql0+=where0;
        }catch(e){
            return({__xst:__xer , __xme: this.__ig1.nl2(e)});
        }
        /* this.__ig1.ma_trace1(' sql_1338= ' + sql0 ); */
        try{
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1338 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1338';
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
export{sql_1338 as sql_1338};