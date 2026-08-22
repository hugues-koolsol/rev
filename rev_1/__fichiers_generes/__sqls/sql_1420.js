const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1420{
    /*
      =============================================================================================================
    */
    verifier_coherence( tup ){
        this.__ig1.options_generales.erreur_controlee=true;
        if(!(tup.cht_condition_rev_source === null || tup.cht_condition_rev_source === '')){
            if(tup.cht_notification_ko_source === null || tup.cht_notification_ko_source === ''){
                throw new Error( 'si une condition existe alors une notification doit être indiquée' );
            }
        }
        if(tup.che_est_fragment_source === 1 && tup.chx_dossier_id_source !== null){
            throw new Error( 'si c\'est un fragment alors le dossier ne doit pas être indiqué' );
        }
        this.__ig1.options_generales.erreur_controlee=false;
        return({"__xst" : __xsu});
    }

    /*
      =============================================================================================================
    */
    async sql( les_tups ){
        let sql0=`
      INSERT  INTO \`tbl_sources\`(
         \`chx_dossier_id_source\` , 
         \`chp_nom_source\` , 
         \`che_est_fragment_source\` , 
         \`che_pour_util_source\` , 
         \`cht_genere_source\` , 
         \`cht_commentaire_source\` , 
         \`cht_rev_source\` , 
         \`che_binaire_source\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < les_tups.donnees.length ; i++ ){
                const tup=les_tups.donnees[i];
                /* test "non nul" sur le champ "chp_nom_source" */
                if(tup.chp_nom_source === null || tup.chp_nom_source === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du source" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "chp_nom_source" ===
                */
                let __test_1_1=this.__ig1.__fnts_c_et_s.test_du_nom_technique1(tup.chp_nom_source , 'nom du source');
                if(__test_1_1.__xst !== __xsu){
                    return{"__xst" : __xer ,"__xme" : __test_1_1.__xme};
                }

                /* test "non nul" sur le champ "che_est_fragment_source" */
                if(tup.che_est_fragment_source === null || tup.che_est_fragment_source === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est fragment" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_pour_util_source" */
                if(tup.che_pour_util_source === null || tup.che_pour_util_source === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "pour util" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "cht_rev_source" ===
                */
                let __test_6_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev(tup.cht_rev_source , 'rev');
                if(__test_6_1.__xst !== __xsu){
                    return{"__xst" : __xer ,"__xme" : __test_6_1.__xme};
                }

                /* test "non nul" sur le champ "che_binaire_source" */
                if(tup.che_binaire_source === null || tup.che_binaire_source === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  =====================================================================================================
                  ================== appel de la fonction de coherence qui fait un throw ==============================
                  =====================================================================================================
                */
                this.verifier_coherence( tup );
                /*
                  =====================================================================================================
                  ================== appel de la fonction de coherence qui fait un throw ==============================
                  =====================================================================================================
                */
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( tup.chx_dossier_id_source , 'chx_dossier_id_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( tup.chp_nom_source , 'chp_nom_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( tup.che_est_fragment_source , 'che_est_fragment_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( tup.che_pour_util_source , 'che_pour_util_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( tup.cht_genere_source , 'cht_genere_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( tup.cht_commentaire_source , 'cht_commentaire_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( tup.cht_rev_source , 'cht_rev_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( tup.che_binaire_source , 'che_binaire_source' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_1420=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 1420 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1420';
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
export{sql_1420 as sql_1420};