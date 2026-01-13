class sql_394{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0='UPDATE `tbl_projets` SET \r\n';
        let tableau_champs=[];

        if(par['n_chi_id_projet']==='' || par['n_chi_id_projet'] === null ){
            tableau_champs.push('`chi_id_projet` = NULL');
        }else{
            tableau_champs.push('`chi_id_projet` = '+this.__gi1.__fnt1.sq0(par['n_chi_id_projet'])+'');
        }
        if(par['n_chp_nom_projet']==='' || par['n_chp_nom_projet'] === null ){
            tableau_champs.push('`chp_nom_projet` = NULL');
        }else{
            tableau_champs.push('`chp_nom_projet` = \''+this.__gi1.__fnt1.sq0(par['n_chp_nom_projet'])+'\'');
        }

        if(tableau_champs.length===0){
            return {/**/
                "__xst" : 0 ,
                "__xme" : 'aucun champ à mettre à jour' ,
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des projets' ,
            };
        }
        sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
        let where0='';
        where0+=' WHERE 1=1 \r\n';
        where0+=` AND \`chi_id_projet\` = `+this.__gi1.__fnt1.sq1(par['c_chi_id_projet'])+``+'\r\n';
        sql0+=where0;
        try{
            /* this.__gi1.ma_trace1(' sql_394= ' + sql0 ); */
            let res=await this.__db1.exec(sql0);
            return({ "__xst" : 1, 'changements' : res});
        }catch(e){
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base<br />':'';
            return {/**/
                __xst : 0 , 
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des projets' ,
                "exception" : e , 
                "__xme" : __xme , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_394';
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
export{sql_394 as sql_394};
