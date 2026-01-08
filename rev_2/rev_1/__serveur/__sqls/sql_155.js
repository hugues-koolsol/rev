class sql_155{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0='UPDATE `tbl_dossiers` SET \r\n';
        let tableau_champs=[];

        if(par['n_chp_nom_dossier']==='' || par['n_chp_nom_dossier'] === null ){
            tableau_champs.push('`chp_nom_dossier` = NULL');
        }else{
            tableau_champs.push('`chp_nom_dossier` = \''+this.__gi1.__fnt1.sq0(par['n_chp_nom_dossier'])+'\'');
        }
        if(par['n_chx_parent_dossier']==='' || par['n_chx_parent_dossier'] === null ){
            tableau_champs.push('`chx_parent_dossier` = NULL');
        }else{
            tableau_champs.push('`chx_parent_dossier` = '+this.__gi1.__fnt1.sq0(par['n_chx_parent_dossier'])+'');
        }
        if(par['n_che_contient_genere_dossier']==='' || par['n_che_contient_genere_dossier'] === null ){
            tableau_champs.push('`che_contient_genere_dossier` = NULL');
        }else{
            tableau_champs.push('`che_contient_genere_dossier` = '+this.__gi1.__fnt1.sq0(par['n_che_contient_genere_dossier'])+'');
        }
        if(par['n_che_pour_les_js_dossier']==='' || par['n_che_pour_les_js_dossier'] === null ){
            tableau_champs.push('`che_pour_les_js_dossier` = NULL');
        }else{
            tableau_champs.push('`che_pour_les_js_dossier` = '+this.__gi1.__fnt1.sq0(par['n_che_pour_les_js_dossier'])+'');
        }

        if(tableau_champs.length===0){
            return {/**/
                "__xst" : 0 ,
                "__xme" : 'aucun champ à mettre à jour' ,
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des dossiers' ,
            };
        }
        sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
        let where0='';
        where0+=' WHERE 1=1 \r\n';
        where0+=` AND \`chi_id_dossier\` = `+this.__gi1.__fnt1.sq1(par['c_chi_id_dossier'])+``+'\r\n';
        sql0+=where0;
        /* this.__gi1.ma_trace1(' sql0= ' + sql0 ); */
        try{
            const res=await this.__db1.exec(sql0);
            return({ "__xst" : 1, 'changements' : res});
        }catch(e){
            return {/**/
                __xst : 0 , 
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des dossiers' ,
                "exception" : e , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_155';
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
export{sql_155 as sql_155};
