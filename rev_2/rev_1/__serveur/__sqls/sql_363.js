class sql_363{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0=`
      INSERT  INTO `+(par.base && par.base['b1']?par.base['b1']+'.':'')+`\`tbl_bdds\`(
         \`chx_dossier_id_basedd\` , 
         \`chp_commentaire_basedd\` , 
         \`chp_fournisseur_basedd\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for(let i=0;i < par.donnees.length;i++){
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chx_dossier_id_basedd'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_commentaire_basedd'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_fournisseur_basedd'])+'';
                liste_des_valeurs+=')';
            }
            sql0+=liste_des_valeurs;
            /* this.__gi1.ma_trace1('sql_363=',sql0); */
            let res=await this.__db1.exec(sql0);
            /* this.__gi1.ma_trace1('res=',res); */
            const sql1='SELECT last_insert_rowid() as nouvel_id; ';
            let statement1=await this.__db1.prepare( sql1 );
            let lignes = await statement1.values();
            await statement1.finalize();
            let nouvel_id=0;
            for(let numero_de_ligne in lignes){
                nouvel_id=lignes[numero_de_ligne][0];
            }

            return {
                __xst  : 1,
                __xva  : {},
                'sql0'    : sql0,
                'changements' : res,
                'nouvel_id' : nouvel_id
            };
        }catch(e){
            donnees_retournees['__xsi']['__xer'].push(this.__gi1.nl2());
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base<br />':'';
            /* this.__gi1.ma_trace1('e=',e); */
            return {
                __xst  : 0,
                __xme  : __xme,
                __xva  : {},
                'sql0'    : sql0,
            };
        }

    }
    /*
      =============================================================================================================
    */
    moi='sql_363';
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
export{sql_363 as sql_363};
