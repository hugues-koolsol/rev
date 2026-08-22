const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1204{
    /*
      =============================================================================================================
    */
    async sql( tup ){
        /* test "non nul" sur le champ "chx_parametre_grandeur" */
        if(tup.n_chx_parametre_grandeur === null || tup.n_chx_parametre_grandeur === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "id du paramètre" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_cle_grandeur" */
        if(tup.n_chp_cle_grandeur === null || tup.n_chp_cle_grandeur === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "cle de la grandeur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "cht_rev_grandeur" ===
        */
        let __test_2_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( tup.n_cht_rev_grandeur , 'rev de la grandeur' );
        if(__test_2_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_2_1.__xme});
        }
        /* test "non nul" sur le champ "che_actif_grandeur" */
        if(tup.n_che_actif_grandeur === null || tup.n_che_actif_grandeur === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "la grandeur est active" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === pas === de test sur le champ "chd__dtc_grandeur"
        */
        /*
          === pas === de test sur le champ "chd__dtm_grandeur"
        */
        /* test "non nul" sur le champ "che__nur_grandeur" */
        if(tup.n_che__nur_grandeur === null || tup.n_che__nur_grandeur === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour " nur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_grandeurs` SET \r\n';
        let tableau_champs=[];
        try{
            if(tup.n_chx_parametre_grandeur === undefined || tup.n_chx_parametre_grandeur === '' || tup.n_chx_parametre_grandeur === null){
                tableau_champs.push( '`chx_parametre_grandeur` = NULL' );
            }else{
                if(isNaN(parseInt( tup.n_chx_parametre_grandeur , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "id paramètre" doit être numérique'});
                }
                tableau_champs.push( '`chx_parametre_grandeur` = ' + this.__ig1.__fnt1.sq0( tup.n_chx_parametre_grandeur , 'n_chx_parametre_grandeur' ) + '' );
            }
            if(tup.n_chp_cle_grandeur === undefined || tup.n_chp_cle_grandeur === '' || tup.n_chp_cle_grandeur === null){
                tableau_champs.push( '`chp_cle_grandeur` = NULL' );
            }else{
                tableau_champs.push( '`chp_cle_grandeur` = \'' + this.__ig1.__fnt1.sq0( tup.n_chp_cle_grandeur , 'n_chp_cle_grandeur' ) + '\'' );
            }
            if(tup.n_cht_rev_grandeur === undefined || tup.n_cht_rev_grandeur === '' || tup.n_cht_rev_grandeur === null){
                tableau_champs.push( '`cht_rev_grandeur` = NULL' );
            }else{
                tableau_champs.push( '`cht_rev_grandeur` = \'' + this.__ig1.__fnt1.sq0( tup.n_cht_rev_grandeur , 'n_cht_rev_grandeur' ) + '\'' );
            }
            if(tup.n_che_actif_grandeur === undefined || tup.n_che_actif_grandeur === '' || tup.n_che_actif_grandeur === null){
                tableau_champs.push( '`che_actif_grandeur` = NULL' );
            }else{
                if(isNaN(parseInt( tup.n_che_actif_grandeur , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "actif" doit être numérique'});
                }
                tableau_champs.push( '`che_actif_grandeur` = ' + this.__ig1.__fnt1.sq0( tup.n_che_actif_grandeur , 'n_che_actif_grandeur' ) + '' );
            }
            tableau_champs.push( '`chd__dtc_grandeur` = \'' + this.__ig1.donnees_retournees.date_heure_serveur + '\' ' );
            tableau_champs.push( '`chd__dtm_grandeur` = \'' + this.__ig1.donnees_retournees.date_heure_serveur + '\' ' );
            tableau_champs.push('`che__nur_grandeur` = che__nur_grandeur + 1 ');
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des grandeurs'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_grandeur\` = ` + this.__ig1.__fnt1.sq1( tup.c_chi_id_grandeur , 'c_chi_id_grandeur' ) + '\r\n';
            sql0+=where0;
        }catch(e){
            return({__xst:__xer , __xme: this.__ig1.nl2(e)});
        }
        /* this.__ig1.ma_trace1(' sql_1204= ' + sql0 ); */
        try{
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1204 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1204';
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
export{sql_1204 as sql_1204};