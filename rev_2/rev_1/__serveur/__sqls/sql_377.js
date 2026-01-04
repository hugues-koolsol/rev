class sql_377{
    /*
      =============================================================================================================
    */
    moi='sql_377';
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
      INSERT  INTO \`tbl_projets\`(
         \`chp_nom_projet\` , 
         \`cht_commentaire_projet\` , 
         \`chx_dossier_requetes_projet\` , 
         \`chx_dossier_menus_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_menus_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_menus_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_menus_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_menus_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_menus_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_bdds_projet\` , 
         \`chx_dossier_bdds_projet\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for(let i=0;i < par.length;i++){
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par[i]['chp_nom_projet'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par[i]['cht_commentaire_projet'])+''+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1'+',';
                liste_des_valeurs+='\r\n      1';
                liste_des_valeurs+=')';
            }
            sql0+=liste_des_valeurs;
            this.__gi1.ma_trace1('sql_377=',sql0);
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
            this.__gi1.ma_trace1('e=',e);
            return {
                __xst  : 0,
                __xva  : {},
                'sql0'    : sql0,
            };
        }

    }
}
export{sql_377 as sql_377};
