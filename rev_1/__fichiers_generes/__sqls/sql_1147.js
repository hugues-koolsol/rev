const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1147{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_menus\`(
         \`chp_titre_menu\` , 
         \`chx_autorisation_menu\` , 
         \`chp_methode_menu\` , 
         \`cht_libelle_menu\` , 
         \`cht_condition_menu\` , 
         \`cht_condition_js_menu\` , 
         \`cht_initialisation_menu\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chp_titre_menu" */
                if(elem['chp_titre_menu'] === null || elem['chp_titre_menu'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "titre" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chx_autorisation_menu" */
                if(elem['chx_autorisation_menu'] === null || elem['chx_autorisation_menu'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_methode_menu" */
                if(elem['chp_methode_menu'] === null || elem['chp_methode_menu'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "methode" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "cht_libelle_menu" */
                if(elem['cht_libelle_menu'] === null || elem['cht_libelle_menu'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "libelle" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "cht_condition_menu" ===
                */
                let __test_4_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev(elem['cht_condition_menu'],'condition au format rev');
                if(__test_4_1.__xst !== __xsu){
                    return{"__xst" : __xer ,"__xme" : __test_4_1.__xme};
                }

                /*
                  === test spécifique sur le champ "cht_initialisation_menu" ===
                */
                let __test_6_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev(elem['cht_initialisation_menu'],'initialisation');
                if(__test_6_1.__xst !== __xsu){
                    return{"__xst" : __xer ,"__xme" : __test_6_1.__xme};
                }

                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_titre_menu'] , 'chp_titre_menu' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_autorisation_menu'] , 'chx_autorisation_menu' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_methode_menu'] , 'chp_methode_menu' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_libelle_menu'] , 'cht_libelle_menu' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_condition_menu'] , 'cht_condition_menu' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_condition_js_menu'] , 'cht_condition_js_menu' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_initialisation_menu'] , 'cht_initialisation_menu' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_1147=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 1147 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1147';
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
export{sql_1147 as sql_1147};