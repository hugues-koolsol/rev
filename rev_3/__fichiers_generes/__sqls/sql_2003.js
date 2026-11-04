const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_2003{
    /*
      ================================insert=============================================================================
    */
    async sql( les_tups ){
        let sql0=`
      INSERT  INTO \`tbl_acteurs\`(
         \`chx_utilisateur_acteur\` , 
         \`chp_nom_acteur\` , 
         \`chp_prenom_acteur\` , 
         \`chx_statut_acteur\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < les_tups.donnees.length ; i++ ){
                const tup=les_tups.donnees[i];
                /* test "non nul" sur le champ "chx_utilisateur_acteur" */
                if(tup.chx_utilisateur_acteur === null || tup.chx_utilisateur_acteur === ''){
                    return({"__xst" : __xer ,"__xme" : this.moi + ' : le champ "id de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_nom_acteur" */
                if(tup.chp_nom_acteur === null || tup.chp_nom_acteur === ''){
                    return({"__xst" : __xer ,"__xme" : this.moi + ' : le champ "nom de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_prenom_acteur" */
                if(tup.chp_prenom_acteur === null || tup.chp_prenom_acteur === ''){
                    return({"__xst" : __xer ,"__xme" : this.moi + ' : le champ "prénom de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chx_statut_acteur" */
                if(tup.chx_statut_acteur === null || tup.chx_statut_acteur === ''){
                    return({"__xst" : __xer ,"__xme" : this.moi + ' : le champ "statut de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                if(tup.chx_utilisateur_acteur !== null && isNaN( parseInt( tup.chx_utilisateur_acteur , 10 ) ) ){
                    return({"__xst" : __xer ,"__xme" : this.moi + ' : la valeur pour "id acteur" doit être numérique '+(i === 0 ? '' : ' pour i="'+i+'"')});
                }
                if(tup.chx_statut_acteur !== null && isNaN( parseInt( tup.chx_statut_acteur , 10 ) ) ){
                    return({"__xst" : __xer ,"__xme" : this.moi + ' : la valeur pour "statut" doit être numérique '+(i === 0 ? '' : ' pour i="'+i+'"')});
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( tup.chx_utilisateur_acteur , 'chx_utilisateur_acteur' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( tup.chp_nom_acteur , 'chp_nom_acteur' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( tup.chp_prenom_acteur , 'chp_prenom_acteur' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( tup.chx_statut_acteur , 'chx_statut_acteur' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_2003=' + sql0 ); */
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
            if(this.__ig1.options_generales.erreur_controlee === true){
                this.__ig1.ma_trace1("e.message=",e.message);
                return({__xst : __xer , __xme : e.message});
            }else{
                return(this.__ig1.traite_erreur_sql( 2003 , e , sql0 , {} ));
            }
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_2003';
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
export{sql_2003 as sql_2003};