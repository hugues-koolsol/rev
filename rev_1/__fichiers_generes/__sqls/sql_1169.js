const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1169{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chi_id_televersement" */
        if(par['n_chi_id_televersement'] === null || par['n_chi_id_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "id" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_bdd_televersement" */
        if(par['n_che_bdd_televersement'] === null || par['n_che_bdd_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "ref bdd" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_nom_table_televersement" */
        if(par['n_chp_nom_table_televersement'] === null || par['n_chp_nom_table_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom de la table" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_id_element_televersement" */
        if(par['n_che_id_element_televersement'] === null || par['n_che_id_element_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "id element" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chx_utilisateur_televersement" */
        if(par['n_chx_utilisateur_televersement'] === null || par['n_chx_utilisateur_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_champ_cle_televersement" */
        if(par['n_chp_champ_cle_televersement'] === null || par['n_chp_champ_cle_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "champ cle" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_nom_original_televersement" */
        if(par['n_chp_nom_original_televersement'] === null || par['n_chp_nom_original_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom original" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_poids_televersement" */
        if(par['n_che_poids_televersement'] === null || par['n_che_poids_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "poids" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_nom_fichier_sur_disque_televersement" */
        if(par['n_chp_nom_fichier_sur_disque_televersement'] === null || par['n_chp_nom_fichier_sur_disque_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom fichier sur disque" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_nom_du_dossier_televersement" */
        if(par['n_chp_nom_du_dossier_televersement'] === null || par['n_chp_nom_du_dossier_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du dossier" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_televersements` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chi_id_televersement'] === undefined || par['n_chi_id_televersement'] === '' || par['n_chi_id_televersement'] === null){
                tableau_champs.push( '`chi_id_televersement` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chi_id_televersement'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "id" doit être numérique'});
                }
                tableau_champs.push( '`chi_id_televersement` = ' + this.__ig1.__fnt1.sq0( par['n_chi_id_televersement'] , 'n_chi_id_televersement' ) + '' );
            }
            if(par['n_che_bdd_televersement'] === undefined || par['n_che_bdd_televersement'] === '' || par['n_che_bdd_televersement'] === null){
                tableau_champs.push( '`che_bdd_televersement` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_bdd_televersement'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "ref bdd" doit être numérique'});
                }
                tableau_champs.push( '`che_bdd_televersement` = ' + this.__ig1.__fnt1.sq0( par['n_che_bdd_televersement'] , 'n_che_bdd_televersement' ) + '' );
            }
            if(par['n_chp_nom_table_televersement'] === undefined || par['n_chp_nom_table_televersement'] === '' || par['n_chp_nom_table_televersement'] === null){
                tableau_champs.push( '`chp_nom_table_televersement` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_table_televersement` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_table_televersement'] , 'n_chp_nom_table_televersement' ) + '\'' );
            }
            if(par['n_che_id_element_televersement'] === undefined || par['n_che_id_element_televersement'] === '' || par['n_che_id_element_televersement'] === null){
                tableau_champs.push( '`che_id_element_televersement` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_id_element_televersement'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "id element" doit être numérique'});
                }
                tableau_champs.push( '`che_id_element_televersement` = ' + this.__ig1.__fnt1.sq0( par['n_che_id_element_televersement'] , 'n_che_id_element_televersement' ) + '' );
            }
            if(par['n_chx_utilisateur_televersement'] === undefined || par['n_chx_utilisateur_televersement'] === '' || par['n_chx_utilisateur_televersement'] === null){
                tableau_champs.push( '`chx_utilisateur_televersement` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chx_utilisateur_televersement'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "utilisateur" doit être numérique'});
                }
                tableau_champs.push( '`chx_utilisateur_televersement` = ' + this.__ig1.__fnt1.sq0( par['n_chx_utilisateur_televersement'] , 'n_chx_utilisateur_televersement' ) + '' );
            }
            if(par['n_chp_champ_cle_televersement'] === undefined || par['n_chp_champ_cle_televersement'] === '' || par['n_chp_champ_cle_televersement'] === null){
                tableau_champs.push( '`chp_champ_cle_televersement` = NULL' );
            }else{
                tableau_champs.push( '`chp_champ_cle_televersement` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_champ_cle_televersement'] , 'n_chp_champ_cle_televersement' ) + '\'' );
            }
            if(par['n_chp_nom_original_televersement'] === undefined || par['n_chp_nom_original_televersement'] === '' || par['n_chp_nom_original_televersement'] === null){
                tableau_champs.push( '`chp_nom_original_televersement` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_original_televersement` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_original_televersement'] , 'n_chp_nom_original_televersement' ) + '\'' );
            }
            if(par['n_che_poids_televersement'] === undefined || par['n_che_poids_televersement'] === '' || par['n_che_poids_televersement'] === null){
                tableau_champs.push( '`che_poids_televersement` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_poids_televersement'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "poids" doit être numérique'});
                }
                tableau_champs.push( '`che_poids_televersement` = ' + this.__ig1.__fnt1.sq0( par['n_che_poids_televersement'] , 'n_che_poids_televersement' ) + '' );
            }
            if(par['n_chp_nom_fichier_sur_disque_televersement'] === undefined || par['n_chp_nom_fichier_sur_disque_televersement'] === '' || par['n_chp_nom_fichier_sur_disque_televersement'] === null){
                tableau_champs.push( '`chp_nom_fichier_sur_disque_televersement` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_fichier_sur_disque_televersement` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_fichier_sur_disque_televersement'] , 'n_chp_nom_fichier_sur_disque_televersement' ) + '\'' );
            }
            if(par['n_chp_nom_du_dossier_televersement'] === undefined || par['n_chp_nom_du_dossier_televersement'] === '' || par['n_chp_nom_du_dossier_televersement'] === null){
                tableau_champs.push( '`chp_nom_du_dossier_televersement` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_du_dossier_televersement` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_du_dossier_televersement'] , 'n_chp_nom_du_dossier_televersement' ) + '\'' );
            }
            if(par['n_cht_comm_glob_televersement'] === undefined || par['n_cht_comm_glob_televersement'] === '' || par['n_cht_comm_glob_televersement'] === null){
                tableau_champs.push( '`cht_comm_glob_televersement` = NULL' );
            }else{
                tableau_champs.push( '`cht_comm_glob_televersement` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_comm_glob_televersement'] , 'n_cht_comm_glob_televersement' ) + '\'' );
            }
            if(par['n_chp_comm_fichier_televersement'] === undefined || par['n_chp_comm_fichier_televersement'] === '' || par['n_chp_comm_fichier_televersement'] === null){
                tableau_champs.push( '`chp_comm_fichier_televersement` = NULL' );
            }else{
                tableau_champs.push( '`chp_comm_fichier_televersement` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_comm_fichier_televersement'] , 'n_chp_comm_fichier_televersement' ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des televersements'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_televersement\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_televersement'] , 'c_chi_id_televersement' ) + '\r\n';
            sql0+=where0;
        }catch(e){
            return({__xst:__xer , __xme: this.__ig1.nl2(e)});
        }
        /* this.__ig1.ma_trace1(' sql_1169= ' + sql0 ); */
        try{
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1169 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1169';
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
export{sql_1169 as sql_1169};