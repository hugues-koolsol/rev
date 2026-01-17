class sql_345{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0=`
      INSERT  INTO `+(par.base && par.base['b1']?par.base['b1']+'.':'')+`\`tbl_genres\`(
         \`chi_id_genre\` , 
         \`chp_nom_genre\` , 
         \`che_ordre_genre\` , 
         \`chp_prefixe_genre\` , 
         \`chp_espece_genre\` , 
         \`che_longueur_genre\` , 
         \`che_est_primaire_genre\` , 
         \`che_est_incrément_genre\` , 
         \`che_est_obligatoire_genre\` , 
         \`che_a_init_genre\` , 
         \`che_init_est_mot_genre\` , 
         \`cht_valeur_init_genre\` , 
         \`che_est_parmis_genre\` , 
         \`cht_parmis_genre\` , 
         \`cht_fonctions_genre\` , 
         \`che_est_nur_genre\` , 
         \`che_est_tsm_genre\` , 
         \`che_est_tsc_genre\` , 
         \`chd__dtc_genre\` , 
         \`chd__dtm_genre\` , 
         \`che_est_session_genre\` , 
         \`chp_nom_en_session_genre\` , 
         \`che_est_positif_genre\` , 
         \`cht_particularités_genre\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for(let i=0;i < par.donnees.length;i++){
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chi_id_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_nom_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_ordre_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_prefixe_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_espece_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_longueur_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_primaire_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_incrément_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_obligatoire_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_a_init_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_init_est_mot_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_valeur_init_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_parmis_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_parmis_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_fonctions_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_nur_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_tsm_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_tsc_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(donnees_retournees.date_heure_serveur)+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(donnees_retournees.date_heure_serveur)+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_session_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['chp_nom_en_session_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['che_est_positif_genre'])+''+',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1(par.donnees[i]['cht_particularités_genre'])+'';
                liste_des_valeurs+=')';
            }
            sql0+=liste_des_valeurs;
            /* this.__gi1.ma_trace1('sql_345=',sql0); */
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
    moi='sql_345';
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
export{sql_345 as sql_345};
