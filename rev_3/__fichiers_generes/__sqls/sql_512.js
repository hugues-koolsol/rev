const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_512{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_texte_tache" */
        if(par['n_chp_texte_tache'] === null || par['n_chp_texte_tache'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "texte" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_priorite_tache" */
        if(par['n_chp_priorite_tache'] === null || par['n_chp_priorite_tache'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "priorite de la tâche" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "chp_priorite_tache" ===
        */
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_entier_compris_entre( 0 , 99 , par['n_chp_priorite_tache'] , 'priorite de la tâche' );
        if(__test_1_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_1_1.__xme});
        }
        /*
          === pas === de test sur le champ "chd__dtm_tache"
        */
        /* test "non nul" sur le champ "chx_utilisateur_tache" */
        if(par['n_chx_utilisateur_tache'] === null || par['n_chx_utilisateur_tache'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_taches` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_texte_tache'] === undefined || par['n_chp_texte_tache'] === '' || par['n_chp_texte_tache'] === null){
                tableau_champs.push( '`chp_texte_tache` = NULL' );
            }else{
                tableau_champs.push( '`chp_texte_tache` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_texte_tache'] , 'n_chp_texte_tache' ) + '\'' );
            }
            if(par['n_chp_priorite_tache'] === undefined || par['n_chp_priorite_tache'] === '' || par['n_chp_priorite_tache'] === null){
                tableau_champs.push( '`chp_priorite_tache` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chp_priorite_tache'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "priorite" doit être numérique'});
                }
                tableau_champs.push( '`chp_priorite_tache` = ' + this.__ig1.__fnt1.sq0( par['n_chp_priorite_tache'] , 'n_chp_priorite_tache' ) + '' );
            }
            tableau_champs.push( '`chd__dtm_tache` = \'' + this.__ig1.donnees_retournees.date_heure_serveur + '\' ' );
            if(par['n_chx_utilisateur_tache'] === undefined || par['n_chx_utilisateur_tache'] === '' || par['n_chx_utilisateur_tache'] === null){
                tableau_champs.push( '`chx_utilisateur_tache` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_chx_utilisateur_tache'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "utilisateur" doit être numérique'});
                }
                tableau_champs.push( '`chx_utilisateur_tache` = ' + this.__ig1.__fnt1.sq0( par['n_chx_utilisateur_tache'] , 'n_chx_utilisateur_tache' ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des taches'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_tache\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_tache'] , 'c_chi_id_tache' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_512= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 512 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_512';
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
export{sql_512 as sql_512};