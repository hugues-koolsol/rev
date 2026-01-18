class sql_355{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0='UPDATE `tbl_requetes` SET \r\n';
        let tableau_champs=[];

        if(par['n_che_est_souche_requete']==='' || par['n_che_est_souche_requete'] === null ){
            tableau_champs.push('`che_est_souche_requete` = NULL');
        }else{
            tableau_champs.push('`che_est_souche_requete` = '+this.__gi1.__fnt1.sq0(par['n_che_est_souche_requete'])+'');
        }
        if(par['n_chp_type_requete']==='' || par['n_chp_type_requete'] === null ){
            tableau_champs.push('`chp_type_requete` = NULL');
        }else{
            tableau_champs.push('`chp_type_requete` = \''+this.__gi1.__fnt1.sq0(par['n_chp_type_requete'])+'\'');
        }
        if(par['n_cht_rev_requete']==='' || par['n_cht_rev_requete'] === null ){
            tableau_champs.push('`cht_rev_requete` = NULL');
        }else{
            tableau_champs.push('`cht_rev_requete` = \''+this.__gi1.__fnt1.sq0(par['n_cht_rev_requete'])+'\'');
        }
        if(par['n_cht_sql_requete']==='' || par['n_cht_sql_requete'] === null ){
            tableau_champs.push('`cht_sql_requete` = NULL');
        }else{
            tableau_champs.push('`cht_sql_requete` = \''+this.__gi1.__fnt1.sq0(par['n_cht_sql_requete'])+'\'');
        }
        if(par['n_cht_php_requete']==='' || par['n_cht_php_requete'] === null ){
            tableau_champs.push('`cht_php_requete` = NULL');
        }else{
            tableau_champs.push('`cht_php_requete` = \''+this.__gi1.__fnt1.sq0(par['n_cht_php_requete'])+'\'');
        }
        if(par['n_cht_commentaire_requete']==='' || par['n_cht_commentaire_requete'] === null ){
            tableau_champs.push('`cht_commentaire_requete` = NULL');
        }else{
            tableau_champs.push('`cht_commentaire_requete` = \''+this.__gi1.__fnt1.sq0(par['n_cht_commentaire_requete'])+'\'');
        }
        if(par['n_chp_table_reference_requete']==='' || par['n_chp_table_reference_requete'] === null ){
            tableau_champs.push('`chp_table_reference_requete` = NULL');
        }else{
            tableau_champs.push('`chp_table_reference_requete` = \''+this.__gi1.__fnt1.sq0(par['n_chp_table_reference_requete'])+'\'');
        }
        if(par['n_cht_js_requete']==='' || par['n_cht_js_requete'] === null ){
            tableau_champs.push('`cht_js_requete` = NULL');
        }else{
            tableau_champs.push('`cht_js_requete` = \''+this.__gi1.__fnt1.sq0(par['n_cht_js_requete'])+'\'');
        }

        if(tableau_champs.length===0){
            return {/**/
                "__xst" : 0 ,
                "__xme" : 'aucun champ à mettre à jour' ,
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des requetes' ,
            };
        }
        sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
        let where0='';
        where0+=' WHERE 1=1 \r\n';
        where0+=` AND \`chi_id_requete\` = `+this.__gi1.__fnt1.sq1(par['c_chi_id_requete'])+``+'\r\n';
        sql0+=where0;
        try{
            /* this.__gi1.ma_trace1(' sql_355= ' + sql0 ); */
            let res=await this.__db1.exec(sql0);
            return({ "__xst" : 1, 'changements' : res});
        }catch(e){
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base<br />':'';
            return {/**/
                __xst : 0 , 
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des requetes' ,
                "exception" : e , 
                "__xme" : __xme , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_355';
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
export{sql_355 as sql_355};
