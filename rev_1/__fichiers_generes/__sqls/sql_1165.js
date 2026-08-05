const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1165{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_televersements\`(
         \`che_bdd_televersement\` , 
         \`chp_nom_table_televersement\` , 
         \`che_id_element_televersement\` , 
         \`chx_utilisateur_televersement\` , 
         \`chp_champ_cle_televersement\` , 
         \`chp_nom_original_televersement\` , 
         \`che_poids_televersement\` , 
         \`chp_nom_fichier_sur_disque_televersement\` , 
         \`chp_nom_du_dossier_televersement\` , 
         \`cht_comm_glob_televersement\` , 
         \`chp_comm_fichier_televersement\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "che_bdd_televersement" */
                if(elem['che_bdd_televersement'] === null || elem['che_bdd_televersement'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "ref bdd" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_nom_table_televersement" */
                if(elem['chp_nom_table_televersement'] === null || elem['chp_nom_table_televersement'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom de la table" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_id_element_televersement" */
                if(elem['che_id_element_televersement'] === null || elem['che_id_element_televersement'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "id element" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === pas === de test sur le champ session "chx_utilisateur_televersement"
                */
                /* test "non nul" sur le champ "chp_champ_cle_televersement" */
                if(elem['chp_champ_cle_televersement'] === null || elem['chp_champ_cle_televersement'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "champ cle" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_nom_original_televersement" */
                if(elem['chp_nom_original_televersement'] === null || elem['chp_nom_original_televersement'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom original" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_poids_televersement" */
                if(elem['che_poids_televersement'] === null || elem['che_poids_televersement'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "poids" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_nom_fichier_sur_disque_televersement" */
                if(elem['chp_nom_fichier_sur_disque_televersement'] === null || elem['chp_nom_fichier_sur_disque_televersement'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom fichier sur disque" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_nom_du_dossier_televersement" */
                if(elem['chp_nom_du_dossier_televersement'] === null || elem['chp_nom_du_dossier_televersement'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du dossier" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_bdd_televersement'] , 'che_bdd_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_table_televersement'] , 'chp_nom_table_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_id_element_televersement'] , 'che_id_element_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.donnees_retournees.chi_id_utilisateur + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_champ_cle_televersement'] , 'chp_champ_cle_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_original_televersement'] , 'chp_nom_original_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_poids_televersement'] , 'che_poids_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_fichier_sur_disque_televersement'] , 'chp_nom_fichier_sur_disque_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_du_dossier_televersement'] , 'chp_nom_du_dossier_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_comm_glob_televersement'] , 'cht_comm_glob_televersement' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_comm_fichier_televersement'] , 'chp_comm_fichier_televersement' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_1165=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 1165 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1165';
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
export{sql_1165 as sql_1165};