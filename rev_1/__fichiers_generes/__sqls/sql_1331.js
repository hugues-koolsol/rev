const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1331{
    /*
      =============================================================================================================
    */
    verifier_coherence( par ){
        this.__ig1.options_generales.erreur_controlee=true;
        if((par.n_chp_espece_genre
                   || par.n_che_longueur_genre)
               && par.n_chp_espece_genre.toUpperCase() === 'VARCHAR'
               && par.n_che_longueur_genre === null
        ){
            throw new Error( 'une longueur doit être indiquée pour le l\'espèce VARCHAR' );
        }
        if((par.n_chp_espece_genre
                   || par.n_che_longueur_genre)
               && par.n_chp_espece_genre.toUpperCase() === 'DECIMAL'
               && par.n_che_longueur_genre === null
        ){
            throw new Error( 'une longueur doit être indiquée pour le l\'espèce DECIMAL' );
        }
        this.__ig1.options_generales.erreur_controlee=false;
        return({"__xst" : __xsu});
    }

    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_nom_genre" */
        if(par['n_chp_nom_genre'] === null || par['n_chp_nom_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du genre" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_ordre_genre" */
        if(par['n_che_ordre_genre'] === null || par['n_che_ordre_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "ordre" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_prefixe_genre" */
        if(par['n_chp_prefixe_genre'] === null || par['n_chp_prefixe_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "prefixe" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "chp_prefixe_genre" ===
        */
        let __test_2_1=this.__ig1.__fnts_c_et_s.test_doit_contenir_n_caracteres( 3 , par['n_chp_prefixe_genre'] , 'prefixe' );
        if(__test_2_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_2_1.__xme});
        }
        /* test "non nul" sur le champ "chp_espece_genre" */
        if(par['n_chp_espece_genre'] === null || par['n_chp_espece_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "espece" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "che_longueur_genre" ===
        */
        let __test_4_1=this.__ig1.__fnts_c_et_s.test_longueur_de_champ_dans_genre( par['n_che_longueur_genre'] , 'longueur du genre' );
        if(__test_4_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_4_1.__xme});
        }
        /* test "non nul" sur le champ "che_est_primaire_genre" */
        if(par['n_che_est_primaire_genre'] === null || par['n_che_est_primaire_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est primaire" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_est_incrément_genre" */
        if(par['n_che_est_incrément_genre'] === null || par['n_che_est_incrément_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est incrément" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_est_obligatoire_genre" */
        if(par['n_che_est_obligatoire_genre'] === null || par['n_che_est_obligatoire_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est obligatoire" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_a_init_genre" */
        if(par['n_che_a_init_genre'] === null || par['n_che_a_init_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "a init" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_init_est_mot_genre" */
        if(par['n_che_init_est_mot_genre'] === null || par['n_che_init_est_mot_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "init est mot" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_est_parmis_genre" */
        if(par['n_che_est_parmis_genre'] === null || par['n_che_est_parmis_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est parmis" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "cht_fonctions_genre" ===
        */
        let __test_13_1=this.__ig1.__fnts_c_et_s.test_fonctions_de_c_fonctions1( par['n_cht_fonctions_genre'] , 'fonctions' );
        if(__test_13_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_13_1.__xme});
        }
        /* test "non nul" sur le champ "che_est_nur_genre" */
        if(par['n_che_est_nur_genre'] === null || par['n_che_est_nur_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est nur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_est_tsm_genre" */
        if(par['n_che_est_tsm_genre'] === null || par['n_che_est_tsm_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est tsm" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_est_tsc_genre" */
        if(par['n_che_est_tsc_genre'] === null || par['n_che_est_tsc_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est tsc" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === pas === de test sur le champ "chd__dtm_genre"
        */
        /* test "non nul" sur le champ "che__nur_genre" */
        if(par['n_che__nur_genre'] === null || par['n_che__nur_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour " nur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "che_est_positif_genre" */
        if(par['n_che_est_positif_genre'] === null || par['n_che_est_positif_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est positif" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === test spécifique sur le champ "cht_particularités_genre" ===
        */
        let __test_20_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( par['n_cht_particularités_genre'] , 'particularités' );
        if(__test_20_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __test_20_1.__xme});
        }
        /*
          =====================================================================================================
          ================== appel de la fonction de coherence qui fait un throw ==============================
          =====================================================================================================
        */
        this.verifier_coherence(par);
        /*
          =====================================================================================================
          ================== appel de la fonction de coherence qui fait un throw ==============================
          =====================================================================================================
        */
        let sql0='UPDATE `tbl_genres` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_nom_genre'] === undefined || par['n_chp_nom_genre'] === '' || par['n_chp_nom_genre'] === null){
                tableau_champs.push( '`chp_nom_genre` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_genre` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_genre'] , 'n_chp_nom_genre' ) + '\'' );
            }
            if(par['n_che_ordre_genre'] === undefined || par['n_che_ordre_genre'] === '' || par['n_che_ordre_genre'] === null){
                tableau_champs.push( '`che_ordre_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_ordre_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "ordre" doit être numérique'});
                }
                tableau_champs.push( '`che_ordre_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_ordre_genre'] , 'n_che_ordre_genre' ) + '' );
            }
            if(par['n_chp_prefixe_genre'] === undefined || par['n_chp_prefixe_genre'] === '' || par['n_chp_prefixe_genre'] === null){
                tableau_champs.push( '`chp_prefixe_genre` = NULL' );
            }else{
                tableau_champs.push( '`chp_prefixe_genre` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_prefixe_genre'] , 'n_chp_prefixe_genre' ) + '\'' );
            }
            if(par['n_chp_espece_genre'] === undefined || par['n_chp_espece_genre'] === '' || par['n_chp_espece_genre'] === null){
                tableau_champs.push( '`chp_espece_genre` = NULL' );
            }else{
                tableau_champs.push( '`chp_espece_genre` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_espece_genre'] , 'n_chp_espece_genre' ) + '\'' );
            }
            if(par['n_che_longueur_genre'] === undefined || par['n_che_longueur_genre'] === '' || par['n_che_longueur_genre'] === null){
                tableau_champs.push( '`che_longueur_genre` = NULL' );
            }else{
                tableau_champs.push( '`che_longueur_genre` = \'' + this.__ig1.__fnt1.sq0( par['n_che_longueur_genre'] , 'n_che_longueur_genre' ) + '\'' );
            }
            if(par['n_che_est_primaire_genre'] === undefined || par['n_che_est_primaire_genre'] === '' || par['n_che_est_primaire_genre'] === null){
                tableau_champs.push( '`che_est_primaire_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_est_primaire_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "est primaire" doit être numérique'});
                }
                tableau_champs.push( '`che_est_primaire_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_primaire_genre'] , 'n_che_est_primaire_genre' ) + '' );
            }
            if(par['n_che_est_incrément_genre'] === undefined || par['n_che_est_incrément_genre'] === '' || par['n_che_est_incrément_genre'] === null){
                tableau_champs.push( '`che_est_incrément_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_est_incrément_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "est incrément" doit être numérique'});
                }
                tableau_champs.push( '`che_est_incrément_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_incrément_genre'] , 'n_che_est_incrément_genre' ) + '' );
            }
            if(par['n_che_est_obligatoire_genre'] === undefined || par['n_che_est_obligatoire_genre'] === '' || par['n_che_est_obligatoire_genre'] === null){
                tableau_champs.push( '`che_est_obligatoire_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_est_obligatoire_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "est obligatoire" doit être numérique'});
                }
                tableau_champs.push( '`che_est_obligatoire_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_obligatoire_genre'] , 'n_che_est_obligatoire_genre' ) + '' );
            }
            if(par['n_che_a_init_genre'] === undefined || par['n_che_a_init_genre'] === '' || par['n_che_a_init_genre'] === null){
                tableau_champs.push( '`che_a_init_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_a_init_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "a init" doit être numérique'});
                }
                tableau_champs.push( '`che_a_init_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_a_init_genre'] , 'n_che_a_init_genre' ) + '' );
            }
            if(par['n_che_init_est_mot_genre'] === undefined || par['n_che_init_est_mot_genre'] === '' || par['n_che_init_est_mot_genre'] === null){
                tableau_champs.push( '`che_init_est_mot_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_init_est_mot_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "init est mot" doit être numérique'});
                }
                tableau_champs.push( '`che_init_est_mot_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_init_est_mot_genre'] , 'n_che_init_est_mot_genre' ) + '' );
            }
            if(par['n_cht_valeur_init_genre'] === undefined || par['n_cht_valeur_init_genre'] === '' || par['n_cht_valeur_init_genre'] === null){
                tableau_champs.push( '`cht_valeur_init_genre` = NULL' );
            }else{
                tableau_champs.push( '`cht_valeur_init_genre` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_valeur_init_genre'] , 'n_cht_valeur_init_genre' ) + '\'' );
            }
            if(par['n_che_est_parmis_genre'] === undefined || par['n_che_est_parmis_genre'] === '' || par['n_che_est_parmis_genre'] === null){
                tableau_champs.push( '`che_est_parmis_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_est_parmis_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "est parmis" doit être numérique'});
                }
                tableau_champs.push( '`che_est_parmis_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_parmis_genre'] , 'n_che_est_parmis_genre' ) + '' );
            }
            if(par['n_cht_parmis_genre'] === undefined || par['n_cht_parmis_genre'] === '' || par['n_cht_parmis_genre'] === null){
                tableau_champs.push( '`cht_parmis_genre` = NULL' );
            }else{
                tableau_champs.push( '`cht_parmis_genre` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_parmis_genre'] , 'n_cht_parmis_genre' ) + '\'' );
            }
            if(par['n_cht_fonctions_genre'] === undefined || par['n_cht_fonctions_genre'] === '' || par['n_cht_fonctions_genre'] === null){
                tableau_champs.push( '`cht_fonctions_genre` = NULL' );
            }else{
                tableau_champs.push( '`cht_fonctions_genre` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_fonctions_genre'] , 'n_cht_fonctions_genre' ) + '\'' );
            }
            if(par['n_che_est_nur_genre'] === undefined || par['n_che_est_nur_genre'] === '' || par['n_che_est_nur_genre'] === null){
                tableau_champs.push( '`che_est_nur_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_est_nur_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "est nur" doit être numérique'});
                }
                tableau_champs.push( '`che_est_nur_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_nur_genre'] , 'n_che_est_nur_genre' ) + '' );
            }
            if(par['n_che_est_tsm_genre'] === undefined || par['n_che_est_tsm_genre'] === '' || par['n_che_est_tsm_genre'] === null){
                tableau_champs.push( '`che_est_tsm_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_est_tsm_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "est tsm" doit être numérique'});
                }
                tableau_champs.push( '`che_est_tsm_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_tsm_genre'] , 'n_che_est_tsm_genre' ) + '' );
            }
            if(par['n_che_est_tsc_genre'] === undefined || par['n_che_est_tsc_genre'] === '' || par['n_che_est_tsc_genre'] === null){
                tableau_champs.push( '`che_est_tsc_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_est_tsc_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "est tsc" doit être numérique'});
                }
                tableau_champs.push( '`che_est_tsc_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_tsc_genre'] , 'n_che_est_tsc_genre' ) + '' );
            }
            tableau_champs.push( '`chd__dtm_genre` = \'' + this.__ig1.donnees_retournees.date_heure_serveur + '\' ' );
            tableau_champs.push('`che__nur_genre` = che__nur_genre + 1 ');
            if(par['n_che_est_positif_genre'] === undefined || par['n_che_est_positif_genre'] === '' || par['n_che_est_positif_genre'] === null){
                tableau_champs.push( '`che_est_positif_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_est_positif_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "est positif" doit être numérique'});
                }
                tableau_champs.push( '`che_est_positif_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_positif_genre'] , 'n_che_est_positif_genre' ) + '' );
            }
            if(par['n_cht_particularités_genre'] === undefined || par['n_cht_particularités_genre'] === '' || par['n_cht_particularités_genre'] === null){
                tableau_champs.push( '`cht_particularités_genre` = NULL' );
            }else{
                tableau_champs.push( '`cht_particularités_genre` = \'' + this.__ig1.__fnt1.sq0( par['n_cht_particularités_genre'] , 'n_cht_particularités_genre' ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des genres'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_genre\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_genre'] , 'c_chi_id_genre' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1331= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1331 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1331';
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
export{sql_1331 as sql_1331};