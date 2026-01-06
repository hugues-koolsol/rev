class sql_368{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0='UPDATE `tbl_taches` SET \r\n';
        let tableau_champs=[];

        if(par['n_chp_priorite_tache']==='' || par['n_chp_priorite_tache'] === null ){
            tableau_champs.push('`chp_priorite_tache` = NULL');
        }else{
            tableau_champs.push('`chp_priorite_tache` = '+this.__gi1.__fnt1.sq0(par['n_chp_priorite_tache'])+'');
        }
        tableau_champs.push('`chd__dtm_tache` = \''+donnees_retournees.date_heure_serveur+'\' ');

        if(tableau_champs.length===0){
            return {/**/
                "__xst" : 0 ,
                "__xme" : 'aucun champ à mettre à jour' ,
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des taches' ,
            };
        }
        sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
        let where0='';
        where0+=' WHERE 1=1 \r\n';
        where0+=` AND \`chi_id_tache\` = `+this.__gi1.__fnt1.sq1(par['c_chi_id_tache'])+``+'\r\n';
        where0+=` AND \`chx_utilisateur_tache\` = `+this.__gi1.__fnt1.sq1(par['c_chx_utilisateur_tache'])+``+'\r\n';
        sql0+=where0;
        /* this.__gi1.ma_trace1(' sql0= ' + sql0 ); */
        try{
            const res=await this.__db1.exec(sql0);
            return({ "__xst" : 1, 'changements' : res});
        }catch(e){
            return {/**/
                __xst : 0 , 
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des taches' ,
                "exception" : e , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_368';
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
export{sql_368 as sql_368};
