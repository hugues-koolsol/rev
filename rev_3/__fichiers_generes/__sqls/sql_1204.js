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
    async sql( par ){
        /* test "non nul" sur le champ "chx_parametre_grandeur" */
        if(par['n_chx_parametre_grandeur'] === null || par['n_chx_parametre_grandeur'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "id du paramètre" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "chp_cle_grandeur" ===
        */
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( par['n_chp_cle_grandeur'] , 'cle de la grandeur' );
        if(__test_1_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_1_1.__xme});
        }
        /* test "non nul" sur le champ "cht_rev_grandeur" */
        if(par['n_cht_rev_grandeur'] === null || par['n_cht_rev_grandeur'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "rev de la grandeur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_actif_grandeur" */
        if(par['n_che_actif_grandeur'] === null || par['n_che_actif_grandeur'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "la grandeur est active" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === pas === de test sur le champ "chd__dtc_grandeur"
        */
        /*
          === pas === de test sur le champ "chd__dtm_grandeur"
        */
        /* test "non nul" sur le champ "che__nur_grandeur" */
        if(par['n_che__nur_grandeur'] === null || par['n_che__nur_grandeur'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "fld cntupd parnams" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_grandeurs` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chx_parametre_grandeur'] === undefined || par['n_chx_parametre_grandeur'] === '' || par['n_chx_parametre_grandeur'] === null){
                tableau_champs.push( '`chx_parametre_grandeur` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chx_parametre_grandeur'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "id paramètre" doit être numérique'});
                }
                tableau_champs.push( '`chx_parametre_grandeur` = ' + this.__ig1.__fnt1.sq0( par['n_chx_parametre_grandeur'] , 'n_chx_parametre_grandeur' ) + '' );
            }
            if(par['n_chp_cle_grandeur'] === undefined || par['n_chp_cle_grandeur'] === '' || par['n_chp_cle_grandeur'] === null){
                tableau_champs.push( '`chp_cle_grandeur` = NULL' );
            }else{
                tableau_champs.push( '`chp_cle_grandeur` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_cle_grandeur'] , 'n_chp_cle_grandeur' ) + '\'' );
            }
            if(par['n_cht_rev_grandeur'] === undefined || par['n_cht_rev_grandeur'] === '' || par['n_cht_rev_grandeur'] === null){
                tableau_champs.push( '`cht_rev_grandeur` = NULL' );
            }else{
                tableau_champs.push( '`cht_rev_grandeur` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_rev_grandeur'] , 'n_cht_rev_grandeur' ) + '\'' );
            }
            if(par['n_che_actif_grandeur'] === undefined || par['n_che_actif_grandeur'] === '' || par['n_che_actif_grandeur'] === null){
                tableau_champs.push( '`che_actif_grandeur` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_actif_grandeur'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "actif" doit être numérique'});
                }
                tableau_champs.push( '`che_actif_grandeur` = ' + this.__ig1.__fnt1.sq0( par['n_che_actif_grandeur'] , 'n_che_actif_grandeur' ) + '' );
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
            where0+=` AND \`chi_id_grandeur\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_grandeur'] , 'c_chi_id_grandeur' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1204= ' + sql0 ); */
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