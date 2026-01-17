class sql_362{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0='UPDATE `tbl_bdds` SET \r\n';
        let tableau_champs=[];

        if(par['n_chx_dossier_id_basedd']==='' || par['n_chx_dossier_id_basedd'] === null ){
            tableau_champs.push('`chx_dossier_id_basedd` = NULL');
        }else{
            tableau_champs.push('`chx_dossier_id_basedd` = '+this.__gi1.__fnt1.sq0(par['n_chx_dossier_id_basedd'])+'');
        }
        if(par['n_chp_commentaire_basedd']==='' || par['n_chp_commentaire_basedd'] === null ){
            tableau_champs.push('`chp_commentaire_basedd` = NULL');
        }else{
            tableau_champs.push('`chp_commentaire_basedd` = \''+this.__gi1.__fnt1.sq0(par['n_chp_commentaire_basedd'])+'\'');
        }
        if(par['n_chp_rev_travail_basedd']==='' || par['n_chp_rev_travail_basedd'] === null ){
            tableau_champs.push('`chp_rev_travail_basedd` = NULL');
        }else{
            tableau_champs.push('`chp_rev_travail_basedd` = \''+this.__gi1.__fnt1.sq0(par['n_chp_rev_travail_basedd'])+'\'');
        }
        if(par['n_chp_fournisseur_basedd']==='' || par['n_chp_fournisseur_basedd'] === null ){
            tableau_champs.push('`chp_fournisseur_basedd` = NULL');
        }else{
            tableau_champs.push('`chp_fournisseur_basedd` = \''+this.__gi1.__fnt1.sq0(par['n_chp_fournisseur_basedd'])+'\'');
        }

        if(tableau_champs.length===0){
            return {/**/
                "__xst" : 0 ,
                "__xme" : 'aucun champ à mettre à jour' ,
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des bdds' ,
            };
        }
        sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
        let where0='';
        where0+=' WHERE 1=1 \r\n';
        where0+=` AND \`chi_id_basedd\` = `+this.__gi1.__fnt1.sq1(par['c_chi_id_basedd'])+``+'\r\n';
        sql0+=where0;
        try{
            /* this.__gi1.ma_trace1(' sql_362= ' + sql0 ); */
            let res=await this.__db1.exec(sql0);
            return({ "__xst" : 1, 'changements' : res});
        }catch(e){
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base<br />':'';
            return {/**/
                __xst : 0 , 
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des bdds' ,
                "exception" : e , 
                "__xme" : __xme , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_362';
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
export{sql_362 as sql_362};
