const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_111{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_taches\`(
         \`chx_utilisateur_tache\` , 
         \`chp_texte_tache\` , 
         \`chp_priorite_tache\` , 
         \`chd__dtm_tache\` , 
         \`chd__dtc_tache\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chx_utilisateur_tache" */
                if(elem['chx_utilisateur_tache'] === null || elem['chx_utilisateur_tache'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_texte_tache" */
                if(elem['chp_texte_tache'] === null || elem['chp_texte_tache'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "texte" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_priorite_tache" */
                if(elem['chp_priorite_tache'] === null || elem['chp_priorite_tache'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "priorite de la tâche" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "chp_priorite_tache" ===
                */
                let __test_2_1=this.__ig1.__fnts_c_et_s.test_entier_compris_entre(0,99,elem['chp_priorite_tache'],'priorite de la tâche');
                if(__test_2_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_2_1.__xme);
                    return{"__xst" : __xer};
                }

                /*
                  === pas === de test sur le champ "chd__dtm_tache"
                */
                /*
                  === pas === de test sur le champ "chd__dtc_tache"
                */
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_utilisateur_tache'] , 'chx_utilisateur_tache' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_texte_tache'] , 'chp_texte_tache' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_priorite_tache'] , 'chp_priorite_tache' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_111=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 111 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_111';
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
export{sql_111 as sql_111};