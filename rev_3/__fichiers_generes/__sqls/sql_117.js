const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_117{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_sources\`(
         \`chp_nom_source\` , 
         \`che_binaire_source\` , 
         \`cht_commentaire_source\` , 
         \`che_contient_version_source\` , 
         \`che_autorisation_globale_source\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chp_nom_source" */
                if(elem['chp_nom_source'] === null || elem['chp_nom_source']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "nom" doit être renseignée [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /*
                  === test spécifique sur le champ "chp_nom_source" ===
                */
                let __test_0_1=this.__ig1.__fnts_c_et_s.test_du_nom_technique1(elem['chp_nom_source'],'nom');
                if(__test_0_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_0_1.__xme);
                    return{"__xst" : __xer};
                }

                /* test "non nul" sur le champ "che_binaire_source" */
                if(elem['che_binaire_source'] === null || elem['che_binaire_source']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "binaire" doit être renseignée [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_contient_version_source" */
                if(elem['che_contient_version_source'] === null || elem['che_contient_version_source']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "contient version" doit être renseignée [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_autorisation_globale_source" */
                if(elem['che_autorisation_globale_source'] === null || elem['che_autorisation_globale_source']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "autorisation globale" doit être renseignée [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_source'] , 'chp_nom_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_binaire_source'] , 'che_binaire_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_commentaire_source'] , 'cht_commentaire_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_contient_version_source'] , 'che_contient_version_source' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_autorisation_globale_source'] , 'che_autorisation_globale_source' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_117=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 117 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_117';
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
export{sql_117 as sql_117};