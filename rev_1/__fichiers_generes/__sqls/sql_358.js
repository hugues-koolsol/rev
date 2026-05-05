const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_358{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_revs\`(
         \`chp_provenance_rev\` , 
         \`chx_source_rev\` , 
         \`chp_id_rev\` , 
         \`chp_valeur_rev\` , 
         \`chp_type_rev\` , 
         \`chp_niveau_rev\` , 
         \`chp_quotee_rev\` , 
         \`chp_pos_premier_rev\` , 
         \`chp_pos_dernier_rev\` , 
         \`chp_parent_rev\` , 
         \`chp_nbr_enfants_rev\` , 
         \`chp_num_enfant_rev\` , 
         \`chp_profondeur_rev\` , 
         \`chp_pos_ouver_parenthese_rev\` , 
         \`chp_enfant_suivant_rev\` , 
         \`chp_commentaire_rev\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                /* test "non nul" sur le champ "chp_id_rev" */
                if(par.donnees[i]['chp_id_rev'] === null || par.donnees[i]['chp_id_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "id" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_type_rev" */
                if(par.donnees[i]['chp_type_rev'] === null || par.donnees[i]['chp_type_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "type" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_niveau_rev" */
                if(par.donnees[i]['chp_niveau_rev'] === null || par.donnees[i]['chp_niveau_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "niveau" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_quotee_rev" */
                if(par.donnees[i]['chp_quotee_rev'] === null || par.donnees[i]['chp_quotee_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "quotee" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_pos_premier_rev" */
                if(par.donnees[i]['chp_pos_premier_rev'] === null || par.donnees[i]['chp_pos_premier_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "pos premier" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_pos_dernier_rev" */
                if(par.donnees[i]['chp_pos_dernier_rev'] === null || par.donnees[i]['chp_pos_dernier_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "pos dernier" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_parent_rev" */
                if(par.donnees[i]['chp_parent_rev'] === null || par.donnees[i]['chp_parent_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "parent" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_nbr_enfants_rev" */
                if(par.donnees[i]['chp_nbr_enfants_rev'] === null || par.donnees[i]['chp_nbr_enfants_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "nbr enfants" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_num_enfant_rev" */
                if(par.donnees[i]['chp_num_enfant_rev'] === null || par.donnees[i]['chp_num_enfant_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "num enfant" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_profondeur_rev" */
                if(par.donnees[i]['chp_profondeur_rev'] === null || par.donnees[i]['chp_profondeur_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "profondeur" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_pos_ouver_parenthese_rev" */
                if(par.donnees[i]['chp_pos_ouver_parenthese_rev'] === null || par.donnees[i]['chp_pos_ouver_parenthese_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "pos ouver parenthese" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_enfant_suivant_rev" */
                if(par.donnees[i]['chp_enfant_suivant_rev'] === null || par.donnees[i]['chp_enfant_suivant_rev']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "enfant suivant" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_provenance_rev'] , 'chp_provenance_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chx_source_rev'] , 'chx_source_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_id_rev'] , 'chp_id_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_valeur_rev'] , 'chp_valeur_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_type_rev'] , 'chp_type_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_niveau_rev'] , 'chp_niveau_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_quotee_rev'] , 'chp_quotee_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_pos_premier_rev'] , 'chp_pos_premier_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_pos_dernier_rev'] , 'chp_pos_dernier_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_parent_rev'] , 'chp_parent_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_nbr_enfants_rev'] , 'chp_nbr_enfants_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_num_enfant_rev'] , 'chp_num_enfant_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_profondeur_rev'] , 'chp_profondeur_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_pos_ouver_parenthese_rev'] , 'chp_pos_ouver_parenthese_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chp_enfant_suivant_rev'] , 'chp_enfant_suivant_rev' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_commentaire_rev'] , 'chp_commentaire_rev' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_358=' + sql0 ); */
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
            return(this.__ig1.traite_erreur_sql( 358 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_358';
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
export{sql_358 as sql_358};