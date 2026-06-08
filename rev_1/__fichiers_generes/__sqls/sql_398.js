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
         \`cht_utilisateur_travail\` , 
         \`chx_projet_travail\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chp_resume_travail" */
                if(elem['chp_resume_travail'] === null || elem['chp_resume_travail'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "résumé du travail" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "cht_rev_travail" ===
                */
                let __test_1_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev(elem['cht_rev_travail'],'description rev du travail');
                if(__test_1_1.__xst !== __xsu){
                    return{"__xst" : __xer ,"__xme" : __test_1_1.__xme};
                }

                /* test "non nul" sur le champ "chx_utilisateur_travail" */
                if(elem['chx_utilisateur_travail'] === null || elem['chx_utilisateur_travail'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur du travail" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === pas === de test sur le champ "chd_dtc_travail"
                */
                /* test "non nul" sur le champ "chp_etat_travail" */
                if(elem['chp_etat_travail'] === null || elem['chp_etat_travail'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === pas === de test sur le champ session "chx_projet_travail"
                */
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_resume_travail'] , 'chp_resume_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_rev_travail'] , 'cht_rev_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_utilisateur_travail'] , 'chx_utilisateur_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_etat_travail'] , 'chp_etat_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_utilisateur_travail'] , 'cht_utilisateur_travail' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.donnees_retournees.chi_id_projet + '';
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
            return({
                    "__xst" : __xsu ,
                    "__xva" : {} ,
                    "sql0" : sql0 ,
                    "changements" : res ,
                    "nouvel_id" : nouvel_id ,
                    "__xme" : ''
                });
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