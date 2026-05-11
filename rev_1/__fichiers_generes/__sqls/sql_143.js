const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_143{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chx_acces_autorisation" */
        if(par['n_chx_acces_autorisation'] === null || par['n_chx_acces_autorisation'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "acces" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* test "non nul" sur le champ "chx_source_autorisation" */
        if(par['n_chx_source_autorisation'] === null || par['n_chx_source_autorisation'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "source" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* test "non nul" sur le champ "che_pour_sous_liste_autorisation" */
        if(par['n_che_pour_sous_liste_autorisation'] === null || par['n_che_pour_sous_liste_autorisation'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "pour accès sous liste" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let sql0='UPDATE `tbl_autorisations` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chx_acces_autorisation'] === undefined || par['n_chx_acces_autorisation'] === '' || par['n_chx_acces_autorisation'] === null){
                tableau_champs.push( '`chx_acces_autorisation` = NULL' );
            }else{
                tableau_champs.push( '`chx_acces_autorisation` = ' + this.__ig1.__fnt1.sq0( par['n_chx_acces_autorisation'] , 'n_chx_acces_autorisation' ) + '' );
            }
            if(par['n_chx_source_autorisation'] === undefined || par['n_chx_source_autorisation'] === '' || par['n_chx_source_autorisation'] === null){
                tableau_champs.push( '`chx_source_autorisation` = NULL' );
            }else{
                tableau_champs.push( '`chx_source_autorisation` = ' + this.__ig1.__fnt1.sq0( par['n_chx_source_autorisation'] , 'n_chx_source_autorisation' ) + '' );
            }
            if(par['n_che_pour_sous_liste_autorisation'] === undefined || par['n_che_pour_sous_liste_autorisation'] === '' || par['n_che_pour_sous_liste_autorisation'] === null){
                tableau_champs.push( '`che_pour_sous_liste_autorisation` = NULL' );
            }else{
                tableau_champs.push( '`che_pour_sous_liste_autorisation` = ' + this.__ig1.__fnt1.sq0( par['n_che_pour_sous_liste_autorisation'] , 'n_che_pour_sous_liste_autorisation' ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des autorisations'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_autorisation\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_autorisation'] , 'c_chi_id_autorisation' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_143= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 143 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_143';
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
export{sql_143 as sql_143};