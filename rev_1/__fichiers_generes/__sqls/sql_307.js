const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_307{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_dossiers\`(
         \`chi_id_dossier\` , 
         \`chp_nom_dossier\` , 
         \`chx_parent_dossier\` , 
         \`chd__dtm_dossier\` , 
         \`chd__dtc_dossier\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chi_id_dossier" */
                if(elem['chi_id_dossier'] === null || elem['chi_id_dossier']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "id" doit être renseignée [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /*
                  === test spécifique sur le champ "chp_nom_dossier" ===
                */
                let __test_1_1=this.__ig1.__fnts_c_et_s.test_du_nom_de_fichier1(elem['chp_nom_dossier'],'nom du dossier');
                if(__test_1_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_1_1.__xme);
                    return{"__xst" : __xer};
                }

                /* test "non nul" sur le champ "chx_parent_dossier" */
                if(elem['chx_parent_dossier'] === null || elem['chx_parent_dossier']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "parent" doit être renseignée [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /*
                  === pas === de test sur le champ "chd__dtm_dossier"
                */
                /*
                  === pas === de test sur le champ "chd__dtc_dossier"
                */
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chi_id_dossier'] , 'chi_id_dossier' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_dossier'] , 'chp_nom_dossier' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_parent_dossier'] , 'chx_parent_dossier' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_307=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 307 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_307';
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
export{sql_307 as sql_307};