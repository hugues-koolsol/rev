const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_522{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_acteurs\`(
         \`chx_utilisateur_acteur\` , 
         \`chp_nom_acteur\` , 
         \`chp_prenom_acteur\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chx_utilisateur_acteur" */
                if(elem['chx_utilisateur_acteur'] === null || elem['chx_utilisateur_acteur'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_nom_acteur" */
                if(elem['chp_nom_acteur'] === null || elem['chp_nom_acteur'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_prenom_acteur" */
                if(elem['chp_prenom_acteur'] === null || elem['chp_prenom_acteur'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "prénom de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_utilisateur_acteur'] , 'chx_utilisateur_acteur' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_acteur'] , 'chp_nom_acteur' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_prenom_acteur'] , 'chp_prenom_acteur' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_522=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 522 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_522';
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
export{sql_522 as sql_522};