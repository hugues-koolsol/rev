const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1184{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_cle_parametre" */
        if(par['n_chp_cle_parametre'] === null || par['n_chp_cle_parametre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "cle du paramètre" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_nom_parametre" */
        if(par['n_chp_nom_parametre'] === null || par['n_chp_nom_parametre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du parametre" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_pour_admin_parametre" */
        if(par['n_che_pour_admin_parametre'] === null || par['n_che_pour_admin_parametre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "pour admin du parametre" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "cht_rev_parametre" ===
        */
        let __test_3_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( par['n_cht_rev_parametre'] , 'rev du parametre' );
        if(__test_3_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_3_1.__xme});
        }
        /*
          === pas === de test sur le champ "chd__dtc_parametre"
        */
        /*
          === pas === de test sur le champ "chd__dtm_parametre"
        */
        /* test "non nul" sur le champ "che__nur_parametre" */
        if(par['n_che__nur_parametre'] === null || par['n_che__nur_parametre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "fld cntupd parnams" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_parametres` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_cle_parametre'] === undefined || par['n_chp_cle_parametre'] === '' || par['n_chp_cle_parametre'] === null){
                tableau_champs.push( '`chp_cle_parametre` = NULL' );
            }else{
                tableau_champs.push( '`chp_cle_parametre` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_cle_parametre'] , 'n_chp_cle_parametre' ) + '\'' );
            }
            if(par['n_chp_nom_parametre'] === undefined || par['n_chp_nom_parametre'] === '' || par['n_chp_nom_parametre'] === null){
                tableau_champs.push( '`chp_nom_parametre` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_parametre` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_parametre'] , 'n_chp_nom_parametre' ) + '\'' );
            }
            if(par['n_che_pour_admin_parametre'] === undefined || par['n_che_pour_admin_parametre'] === '' || par['n_che_pour_admin_parametre'] === null){
                tableau_champs.push( '`che_pour_admin_parametre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_pour_admin_parametre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "pour admin" doit être numérique'});
                }
                tableau_champs.push( '`che_pour_admin_parametre` = ' + this.__ig1.__fnt1.sq0( par['n_che_pour_admin_parametre'] , 'n_che_pour_admin_parametre' ) + '' );
            }
            if(par['n_cht_rev_parametre'] === undefined || par['n_cht_rev_parametre'] === '' || par['n_cht_rev_parametre'] === null){
                tableau_champs.push( '`cht_rev_parametre` = NULL' );
            }else{
                tableau_champs.push( '`cht_rev_parametre` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_rev_parametre'] , 'n_cht_rev_parametre' ) + '\'' );
            }
            if(par['n_cht_commentaire_parametre'] === undefined || par['n_cht_commentaire_parametre'] === '' || par['n_cht_commentaire_parametre'] === null){
                tableau_champs.push( '`cht_commentaire_parametre` = NULL' );
            }else{
                tableau_champs.push( '`cht_commentaire_parametre` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_commentaire_parametre'] , 'n_cht_commentaire_parametre' ) + '\'' );
            }
            tableau_champs.push( '`chd__dtc_parametre` = \'' + this.__ig1.donnees_retournees.date_heure_serveur + '\' ' );
            tableau_champs.push( '`chd__dtm_parametre` = \'' + this.__ig1.donnees_retournees.date_heure_serveur + '\' ' );
            tableau_champs.push('`che__nur_parametre` = che__nur_parametre + 1 ');
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des parametres'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            /* ATTENTION : pas de condition */
            where0+=' WHERE 1 ';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1184= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1184 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1184';
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
export{sql_1184 as sql_1184};