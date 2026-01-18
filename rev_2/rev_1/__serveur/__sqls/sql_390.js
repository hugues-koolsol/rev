class sql_390{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0=`
      INSERT  INTO `+(par.base && par.base['b1']?par.base['b1']+'.':'')+`\`tbl_requetes\`(
         \`chp_type_requete\` , 
         \`cht_rev_requete\` , 
         \`cht_sql_requete\` , 
         \`cht_php_requete\` , 
         \`cht_commentaire_requete\` , 
         \`che_est_souche_requete\` , 
         \`chp_table_reference_requete\` , 
         \`cht_js_requete\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for(let i=0;i < par.donnees.length;i++){
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_type_requete'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_rev_requete'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_sql_requete'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_php_requete'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_commentaire_requete'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_souche_requete'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_table_reference_requete'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_js_requete'])+'';
                liste_des_valeurs+=')';
            }
            sql0+=liste_des_valeurs;
            /* this.__gi1.ma_trace1('sql_390=',sql0); */
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
    moi='sql_390';
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
export{sql_390 as sql_390};
