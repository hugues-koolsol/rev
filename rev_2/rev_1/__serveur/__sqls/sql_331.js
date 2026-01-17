class sql_331{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0='UPDATE `tbl_genres` SET \r\n';
        let tableau_champs=[];

        if(par['n_chp_nom_genre']==='' || par['n_chp_nom_genre'] === null ){
            tableau_champs.push('`chp_nom_genre` = NULL');
        }else{
            tableau_champs.push('`chp_nom_genre` = \''+this.__gi1.__fnt1.sq0(par['n_chp_nom_genre'])+'\'');
        }
        if(par['n_che_ordre_genre']==='' || par['n_che_ordre_genre'] === null ){
            tableau_champs.push('`che_ordre_genre` = NULL');
        }else{
            tableau_champs.push('`che_ordre_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_ordre_genre'])+'');
        }
        if(par['n_chp_prefixe_genre']==='' || par['n_chp_prefixe_genre'] === null ){
            tableau_champs.push('`chp_prefixe_genre` = NULL');
        }else{
            tableau_champs.push('`chp_prefixe_genre` = \''+this.__gi1.__fnt1.sq0(par['n_chp_prefixe_genre'])+'\'');
        }
        if(par['n_chp_espece_genre']==='' || par['n_chp_espece_genre'] === null ){
            tableau_champs.push('`chp_espece_genre` = NULL');
        }else{
            tableau_champs.push('`chp_espece_genre` = \''+this.__gi1.__fnt1.sq0(par['n_chp_espece_genre'])+'\'');
        }
        if(par['n_che_longueur_genre']==='' || par['n_che_longueur_genre'] === null ){
            tableau_champs.push('`che_longueur_genre` = NULL');
        }else{
            tableau_champs.push('`che_longueur_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_longueur_genre'])+'');
        }
        if(par['n_che_est_primaire_genre']==='' || par['n_che_est_primaire_genre'] === null ){
            tableau_champs.push('`che_est_primaire_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_primaire_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_primaire_genre'])+'');
        }
        if(par['n_che_est_incrément_genre']==='' || par['n_che_est_incrément_genre'] === null ){
            tableau_champs.push('`che_est_incrément_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_incrément_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_incrément_genre'])+'');
        }
        if(par['n_che_est_obligatoire_genre']==='' || par['n_che_est_obligatoire_genre'] === null ){
            tableau_champs.push('`che_est_obligatoire_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_obligatoire_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_obligatoire_genre'])+'');
        }
        if(par['n_che_a_init_genre']==='' || par['n_che_a_init_genre'] === null ){
            tableau_champs.push('`che_a_init_genre` = NULL');
        }else{
            tableau_champs.push('`che_a_init_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_a_init_genre'])+'');
        }
        if(par['n_che_init_est_mot_genre']==='' || par['n_che_init_est_mot_genre'] === null ){
            tableau_champs.push('`che_init_est_mot_genre` = NULL');
        }else{
            tableau_champs.push('`che_init_est_mot_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_init_est_mot_genre'])+'');
        }
        if(par['n_cht_valeur_init_genre']==='' || par['n_cht_valeur_init_genre'] === null ){
            tableau_champs.push('`cht_valeur_init_genre` = NULL');
        }else{
            tableau_champs.push('`cht_valeur_init_genre` = \''+this.__gi1.__fnt1.sq0(par['n_cht_valeur_init_genre'])+'\'');
        }
        if(par['n_che_est_parmis_genre']==='' || par['n_che_est_parmis_genre'] === null ){
            tableau_champs.push('`che_est_parmis_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_parmis_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_parmis_genre'])+'');
        }
        if(par['n_cht_parmis_genre']==='' || par['n_cht_parmis_genre'] === null ){
            tableau_champs.push('`cht_parmis_genre` = NULL');
        }else{
            tableau_champs.push('`cht_parmis_genre` = \''+this.__gi1.__fnt1.sq0(par['n_cht_parmis_genre'])+'\'');
        }
        if(par['n_cht_fonctions_genre']==='' || par['n_cht_fonctions_genre'] === null ){
            tableau_champs.push('`cht_fonctions_genre` = NULL');
        }else{
            tableau_champs.push('`cht_fonctions_genre` = \''+this.__gi1.__fnt1.sq0(par['n_cht_fonctions_genre'])+'\'');
        }
        if(par['n_che_est_nur_genre']==='' || par['n_che_est_nur_genre'] === null ){
            tableau_champs.push('`che_est_nur_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_nur_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_nur_genre'])+'');
        }
        if(par['n_che_est_tsm_genre']==='' || par['n_che_est_tsm_genre'] === null ){
            tableau_champs.push('`che_est_tsm_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_tsm_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_tsm_genre'])+'');
        }
        if(par['n_che_est_tsc_genre']==='' || par['n_che_est_tsc_genre'] === null ){
            tableau_champs.push('`che_est_tsc_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_tsc_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_tsc_genre'])+'');
        }
        tableau_champs.push('`chd__dtm_genre` = \''+donnees_retournees.date_heure_serveur+'\' ');
        tableau_champs.push('`che__nur_genre` = che__nur_genre + 1 ');
        if(par['n_che_est_session_genre']==='' || par['n_che_est_session_genre'] === null ){
            tableau_champs.push('`che_est_session_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_session_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_session_genre'])+'');
        }
        if(par['n_chp_nom_en_session_genre']==='' || par['n_chp_nom_en_session_genre'] === null ){
            tableau_champs.push('`chp_nom_en_session_genre` = NULL');
        }else{
            tableau_champs.push('`chp_nom_en_session_genre` = \''+this.__gi1.__fnt1.sq0(par['n_chp_nom_en_session_genre'])+'\'');
        }
        if(par['n_che_est_positif_genre']==='' || par['n_che_est_positif_genre'] === null ){
            tableau_champs.push('`che_est_positif_genre` = NULL');
        }else{
            tableau_champs.push('`che_est_positif_genre` = '+this.__gi1.__fnt1.sq0(par['n_che_est_positif_genre'])+'');
        }
        if(par['n_cht_particularités_genre']==='' || par['n_cht_particularités_genre'] === null ){
            tableau_champs.push('`cht_particularités_genre` = NULL');
        }else{
            tableau_champs.push('`cht_particularités_genre` = \''+this.__gi1.__fnt1.sq0(par['n_cht_particularités_genre'])+'\'');
        }

        if(tableau_champs.length===0){
            return {/**/
                "__xst" : 0 ,
                "__xme" : 'aucun champ à mettre à jour' ,
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des genres' ,
            };
        }
        sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
        let where0='';
        where0+=' WHERE 1=1 \r\n';
        where0+=` AND \`chi_id_genre\` = `+this.__gi1.__fnt1.sq1(par['c_chi_id_genre'])+``+'\r\n';
        sql0+=where0;
        try{
            /* this.__gi1.ma_trace1(' sql_331= ' + sql0 ); */
            let res=await this.__db1.exec(sql0);
            return({ "__xst" : 1, 'changements' : res});
        }catch(e){
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base<br />':'';
            return {/**/
                __xst : 0 , 
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des genres' ,
                "exception" : e , 
                "__xme" : __xme , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_331';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor(__gi1,__db1){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
}
export{sql_331 as sql_331};
