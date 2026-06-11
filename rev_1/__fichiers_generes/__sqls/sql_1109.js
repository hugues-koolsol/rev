const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1109{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_nom_de_connexion_utilisateur" */
        if(par['n_chp_nom_de_connexion_utilisateur'] === null || par['n_chp_nom_de_connexion_utilisateur'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom de connexion de l\'utilisateur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_utilisateurs` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_nom_de_connexion_utilisateur'] === undefined || par['n_chp_nom_de_connexion_utilisateur'] === '' || par['n_chp_nom_de_connexion_utilisateur'] === null){
                tableau_champs.push( '`chp_nom_de_connexion_utilisateur` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_de_connexion_utilisateur` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_de_connexion_utilisateur'] , 'n_chp_nom_de_connexion_utilisateur' ) + '\'' );
            }
            if(par['n_chp_mot_de_passe_utilisateur'] === undefined || par['n_chp_mot_de_passe_utilisateur'] === '' || par['n_chp_mot_de_passe_utilisateur'] === null){
                tableau_champs.push( '`chp_mot_de_passe_utilisateur` = NULL' );
            }else{
                tableau_champs.push( '`chp_mot_de_passe_utilisateur` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_mot_de_passe_utilisateur'] , 'n_chp_mot_de_passe_utilisateur' ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des utilisateurs'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_utilisateur\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_utilisateur'] , 'c_chi_id_utilisateur' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1109= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1109 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1109';
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
export{sql_1109 as sql_1109};