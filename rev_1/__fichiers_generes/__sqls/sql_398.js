const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_398{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_travaux\`(
         \`chp_resume_travail\` , 
         \`cht_rev_travail\` , 
         \`chx_utilisateur_travail\` , 
         \`chd_dtc_travail\` , 
         \`chp_etat_travail\` , 
         \`chx_projet_travail\` , 
         \`cht_utilisateur_travail\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                /* test "non nul" sur le champ "chp_resume_travail" */
                if(par.donnees[i]['chp_resume_travail'] === null || par.donnees[i]['chp_resume_travail']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "résumé du travail" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chx_utilisateur_travail" */
                if(par.donnees[i]['chx_utilisateur_travail'] === null || par.donnees[i]['chx_utilisateur_travail']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "utilisateur du travail" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /*
                  === pas === de test sur le champ "chd_dtc_travail"
                */
                /* test "non nul" sur le champ "chp_etat_travail" */
                if(par.donnees[i]['chp_etat_travail'] === null || par.donnees[i]['chp_etat_travail']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "état du travail" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chx_projet_travail" */
                if(par.donnees[i]['chx_projet_travail'] === null || par.donnees[i]['chx_projet_travail']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "référence du projet" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_resume_travail'] , 'chp_resume_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_rev_travail'] , 'cht_rev_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_utilisateur_travail'] , 'chx_utilisateur_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_etat_travail'] , 'chp_etat_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_projet_travail'] , 'chx_projet_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_utilisateur_travail'] , 'cht_utilisateur_travail' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_398=' + sql0 ); */
                res=await this.__db1.exec( sql0 );
                /* this.__ig1.ma_trace1('res=',res); */
                const sql1='SELECT last_insert_rowid() as nouvel_id; ';
                let statement1=await this.__db1.prepare( sql1 );
                let lignes=await statement1.values();
                await statement1.finalize();
                for(let numero_de_ligne in lignes){
                    nouvel_id=lignes[numero_de_ligne][0];
                }
            }
            return({"__xst" : __xsu ,"__xva" : {} ,"sql0" : sql0 ,"changements" : res ,"nouvel_id" : nouvel_id});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 398 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_398';
    __ig1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 , __db1 ){
        this.__ig1=__ig1;
        this.__db1=__db1;
    }
}
export{sql_398 as sql_398};