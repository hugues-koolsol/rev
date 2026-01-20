class sql_376{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0='UPDATE `tbl_requetes` SET \r\n';
        let tableau_champs=[];

        if(par['n_cht_php_requete']==='' || par['n_cht_php_requete'] === null ){
            tableau_champs.push('`cht_php_requete` = NULL');
        }else{
            tableau_champs.push('`cht_php_requete` = \''+this.__gi1.__fnt1.sq0(par['n_cht_php_requete'])+'\'');
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
            /* this.__gi1.ma_trace1(' sql_376= ' + sql0 ); */
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
    moi='sql_376';
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
export{sql_376 as sql_376};
