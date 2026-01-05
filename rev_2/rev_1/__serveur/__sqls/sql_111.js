class sql_111{
    /*
      =============================================================================================================
    */
    moi='sql_111';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor(__gi1,__db1){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0=`
      INSERT  INTO `+(par.base && par.base['b1']?par.base['b1']+'.':'')+`\`tbl_taches\`(
         \`chx_utilisateur_tache\` , 
         \`chp_texte_tache\` , 
         \`chp_priorite_tache\` , 
         \`chd__dtm_tache\` , 
         \`chd__dtc_tache\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for(let i=0;i < par.length;i++){
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chx_utilisateur_tache'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_texte_tache'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_priorite_tache'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(donnees_retournees.date_heure_serveur)+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(donnees_retournees.date_heure_serveur)+'';
                liste_des_valeurs+=')';
            }
            sql0+=liste_des_valeurs;
            /* this.__gi1.ma_trace1('sql_111=',sql0); */
            const res=await this.__db1.exec(sql0);
            /* this.__gi1.ma_trace1('res=',res); */
            return {
                __xst  : 1,
                __xva  : {},
                'sql0'    : sql0,
                'changements' : res
            };
        }catch(e){
            donnees_retournees['__xsi']['__xer'].push(this.__gi1.nl2());
            /* this.__gi1.ma_trace1('e=',e); */
            return {
                __xst  : 0,
                __xva  : {},
                'sql0'    : sql0,
            };
        }

    }
}
export{sql_111 as sql_111};
