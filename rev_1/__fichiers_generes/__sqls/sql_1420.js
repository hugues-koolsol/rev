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
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_sources\`(
         \`chx_dossier_id_source\` , 
         \`chp_nom_source\` , 
         \`chp_usage_source\` , 
         \`cht_genere_source\` , 
         \`cht_commentaire_source\` , 
         \`cht_rev_source\` , 
         \`che_binaire_source\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chp_nom_source" */
                if(elem['chp_nom_source'] === null || elem['chp_nom_source'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du source" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "chp_nom_source" ===
                */
                let __test_1_1=this.__ig1.__fnts_c_et_s.test_du_nom_technique1(elem['chp_nom_source'],'nom du source');
                if(__test_1_1.__xst !== __xsu){
                    return{"__xst" : __xer ,"__xme" : __test_1_1.__xme};
                }

                /* test "non nul" sur le champ "chp_usage_source" */
                if(elem['chp_usage_source'] === null || elem['chp_usage_source'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "usage du source" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "cht_rev_source" ===
                */
                let __test_5_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev(elem['cht_rev_source'],'rev');
                if(__test_5_1.__xst !== __xsu){
                    return{"__xst" : __xer ,"__xme" : __test_5_1.__xme};
                }

                /* test "non nul" sur le champ "che_binaire_source" */
                if(elem['che_binaire_source'] === null || elem['che_binaire_source'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_dossier_id_source'] , 'chx_dossier_id_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_source'] , 'chp_nom_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_usage_source'] , 'chp_usage_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_genere_source'] , 'cht_genere_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_commentaire_source'] , 'cht_commentaire_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_rev_source'] , 'cht_rev_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_binaire_source'] , 'che_binaire_source' ) + '';
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