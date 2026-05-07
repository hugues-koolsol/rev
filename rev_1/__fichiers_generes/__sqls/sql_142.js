const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_142{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_autorisations\`(
         \`chx_acces_autorisation\` , 
         \`chx_source_autorisation\` , 
         \`che_pour_sous_liste_autorisation\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chx_acces_autorisation" */
                if(elem['chx_acces_autorisation'] === null || elem['chx_acces_autorisation']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "acces" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chx_source_autorisation" */
                if(elem['chx_source_autorisation'] === null || elem['chx_source_autorisation']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "source" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_pour_sous_liste_autorisation" */
                if(elem['che_pour_sous_liste_autorisation'] === null || elem['che_pour_sous_liste_autorisation']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "pour accès sous liste" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_acces_autorisation'] , 'chx_acces_autorisation' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_source_autorisation'] , 'chx_source_autorisation' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_pour_sous_liste_autorisation'] , 'che_pour_sous_liste_autorisation' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_142=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 142 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_142';
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
export{sql_142 as sql_142};