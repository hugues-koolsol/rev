const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_345{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0=`
      INSERT  INTO \`tbl_genres\`(
         \`chi_id_genre\` , 
         \`chp_nom_genre\` , 
         \`che_ordre_genre\` , 
         \`chp_prefixe_genre\` , 
         \`chp_espece_genre\` , 
         \`che_longueur_genre\` , 
         \`che_est_primaire_genre\` , 
         \`che_est_incrément_genre\` , 
         \`che_est_obligatoire_genre\` , 
         \`che_a_init_genre\` , 
         \`che_init_est_mot_genre\` , 
         \`cht_valeur_init_genre\` , 
         \`che_est_parmis_genre\` , 
         \`cht_parmis_genre\` , 
         \`cht_fonctions_genre\` , 
         \`che_est_nur_genre\` , 
         \`che_est_tsm_genre\` , 
         \`che_est_tsc_genre\` , 
         \`chd__dtc_genre\` , 
         \`chd__dtm_genre\` , 
         \`che__nur_genre\` , 
         \`che_est_session_genre\` , 
         \`chp_nom_en_session_genre\` , 
         \`che_est_positif_genre\` , 
         \`cht_particularités_genre\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chi_id_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_nom_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_ordre_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_prefixe_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_espece_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_longueur_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_primaire_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_incrément_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_obligatoire_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_a_init_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_init_est_mot_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['cht_valeur_init_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_parmis_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['cht_parmis_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['cht_fonctions_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_nur_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_tsm_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_tsc_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      '+this.__gi1.__fnt1.sq1('0') + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_session_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_nom_en_session_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['che_est_positif_genre'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['cht_particularités_genre'] ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__gi1.ma_trace1( 'sql_345=' + sql0 ); */
                res=await this.__db1.exec( sql0 );
                /* this.__gi1.ma_trace1('res=',res); */
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
            return(this.__gi1.traite_erreur_sql( 345 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_345';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 , __db1 ){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
}
export{sql_345 as sql_345};