const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_2004{
    /*
      ================================update=============================================================================
    */
    async sql( tup ){
        /* test "non nul" sur le champ "chp_nom_acteur" */
        if(tup.n_chp_nom_acteur === null || tup.n_chp_nom_acteur === ''){
            return({"__xst" : __xer ,"__xme" : this.moi + ' : la valeur pour "nom de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chp_prenom_acteur" */
        if(tup.n_chp_prenom_acteur === null || tup.n_chp_prenom_acteur === ''){
            return({"__xst" : __xer ,"__xme" : this.moi + ' : la valeur pour "prénom de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /* test "non nul" sur le champ "chx_statut_acteur" */
        if(tup.n_chx_statut_acteur === null || tup.n_chx_statut_acteur === ''){
            return({"__xst" : __xer ,"__xme" : this.moi + ' : la valeur pour "statut de l\'acteur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_acteurs` SET \r\n';
        let tableau_champs=[];
        try{
            if(tup.n_chp_nom_acteur === undefined || tup.n_chp_nom_acteur === '' || tup.n_chp_nom_acteur === null){
                tableau_champs.push( '`chp_nom_acteur` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_acteur` = \'' + this.__ig1.__fnt1.sq0( tup.n_chp_nom_acteur , 'n_chp_nom_acteur' ) + '\'' );
            }
            if(tup.n_chp_prenom_acteur === undefined || tup.n_chp_prenom_acteur === '' || tup.n_chp_prenom_acteur === null){
                tableau_champs.push( '`chp_prenom_acteur` = NULL' );
            }else{
                tableau_champs.push( '`chp_prenom_acteur` = \'' + this.__ig1.__fnt1.sq0( tup.n_chp_prenom_acteur , 'n_chp_prenom_acteur' ) + '\'' );
            }
            if(tup.n_chx_statut_acteur === undefined || tup.n_chx_statut_acteur === '' || tup.n_chx_statut_acteur === null){
                tableau_champs.push( '`chx_statut_acteur` = NULL' );
            }else{
                if(isNaN(parseInt( tup.n_chx_statut_acteur , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "statut" doit être numérique'});
                }
                tableau_champs.push( '`chx_statut_acteur` = ' + this.__ig1.__fnt1.sq0( tup.n_chx_statut_acteur , 'n_chx_statut_acteur' ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des acteurs'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chx_utilisateur_acteur\` = ` + this.__ig1.__fnt1.sq1( tup.c_chx_utilisateur_acteur , 'c_chx_utilisateur_acteur' ) + '\r\n';
            sql0+=where0;
        }catch(e){
            return({__xst:__xer , __xme: this.__ig1.nl2(e)});
        }
        /* this.__ig1.ma_trace1(' sql_2004= ' + sql0 ); */
        try{
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'pas d\'enregistrement à modifier'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 2004 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_2004';
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
export{sql_2004 as sql_2004};