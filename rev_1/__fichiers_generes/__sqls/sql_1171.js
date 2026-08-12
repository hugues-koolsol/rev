const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1171{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_nom_fichier_sur_disque_televersement" */
        if(par['n_chp_nom_fichier_sur_disque_televersement'] === null || par['n_chp_nom_fichier_sur_disque_televersement'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom fichier sur disque" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_televersements` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_nom_fichier_sur_disque_televersement'] === undefined || par['n_chp_nom_fichier_sur_disque_televersement'] === '' || par['n_chp_nom_fichier_sur_disque_televersement'] === null){
                tableau_champs.push( '`chp_nom_fichier_sur_disque_televersement` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_fichier_sur_disque_televersement` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_fichier_sur_disque_televersement'] , 'n_chp_nom_fichier_sur_disque_televersement' ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des televersements'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_televersement\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_televersement'] , 'c_chi_id_televersement' ) + '\r\n';
            sql0+=where0;
        }catch(e){
            return({__xst:__xer , __xme: this.__ig1.nl2(e)});
        }
        /* this.__ig1.ma_trace1(' sql_1171= ' + sql0 ); */
        try{
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1171 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1171';
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
export{sql_1171 as sql_1171};