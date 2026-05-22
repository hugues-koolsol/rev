const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_340{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "che_est_souche_requete" */
        if(par['n_che_est_souche_requete'] === null || par['n_che_est_souche_requete'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "requête souche ?" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          === pas === de test sur le champ "chd__dtm_requete"
        */
        /* test "non nul" sur le champ "che__nur_requete" */
        if(par['n_che__nur_requete'] === null || par['n_che__nur_requete'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour " nur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_requetes` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_che_est_souche_requete'] === undefined || par['n_che_est_souche_requete'] === '' || par['n_che_est_souche_requete'] === null){
                tableau_champs.push( '`che_est_souche_requete` = NULL' );
            }else{
                tableau_champs.push( '`che_est_souche_requete` = ' + this.__ig1.__fnt1.sq0( par['n_che_est_souche_requete'] , 'n_che_est_souche_requete' ) + '' );
            }
            tableau_champs.push( '`chd__dtm_requete` = \'' + this.__ig1.donnees_retournees.date_heure_serveur + '\' ' );
            tableau_champs.push('`che__nur_requete` = che__nur_requete + 1 ');
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des requetes'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_requete\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_requete'] , 'c_chi_id_requete' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_340= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 340 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_340';
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
export{sql_340 as sql_340};