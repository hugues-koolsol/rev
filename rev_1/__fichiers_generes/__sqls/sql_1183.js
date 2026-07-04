const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1183{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_parametres\`(
         \`chp_cle_parametre\` , 
         \`chp_nom_parametre\` , 
         \`che_pour_admin_parametre\` , 
         \`cht_commentaire_parametre\` , 
         \`chd__dtc_parametre\` , 
         \`chd__dtm_parametre\` , 
         \`che__nur_parametre\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chp_cle_parametre" */
                if(elem['chp_cle_parametre'] === null || elem['chp_cle_parametre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "cle du paramètre" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_nom_parametre" */
                if(elem['chp_nom_parametre'] === null || elem['chp_nom_parametre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du paramètre" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_pour_admin_parametre" */
                if(elem['che_pour_admin_parametre'] === null || elem['che_pour_admin_parametre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "pour admin du parametre" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === pas === de test sur le champ "chd__dtc_parametre"
                */
                /*
                  === pas === de test sur le champ "chd__dtm_parametre"
                */
                /*
                  === pas === de test sur le champ "che__nur_parametre"
                */
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_cle_parametre'] , 'chp_cle_parametre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_parametre'] , 'chp_nom_parametre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_pour_admin_parametre'] , 'che_pour_admin_parametre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_commentaire_parametre'] , 'cht_commentaire_parametre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      '+this.__ig1.__fnt1.sq1('0') + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_1183=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 1183 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1183';
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
export{sql_1183 as sql_1183};