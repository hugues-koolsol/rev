const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1188{
    /*
      =============================================================================================================
    */
    async sql( tup ){
        /* test "non nul" sur le champ "chp_cle_grandeur" */
        if(tup.n_chp_cle_grandeur === null || tup.n_chp_cle_grandeur === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "cle de la grandeur" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let sql0='UPDATE `tbl_grandeurs` SET \r\n';
        let tableau_champs=[];
        try{
            if(tup.n_chp_cle_grandeur === undefined || tup.n_chp_cle_grandeur === '' || tup.n_chp_cle_grandeur === null){
                tableau_champs.push( '`chp_cle_grandeur` = NULL' );
            }else{
                tableau_champs.push( '`chp_cle_grandeur` = \'' + this.__ig1.__fnt1.sq0( tup.n_chp_cle_grandeur , 'n_chp_cle_grandeur' ) + '\'' );
            }
            if(tup.n_chc_couleur_texte_grandeur === undefined || tup.n_chc_couleur_texte_grandeur === '' || tup.n_chc_couleur_texte_grandeur === null){
                tableau_champs.push( '`chc_couleur_texte_grandeur` = NULL' );
            }else{
                tableau_champs.push( '`chc_couleur_texte_grandeur` = \'' + this.__ig1.__fnt1.sq0( tup.n_chc_couleur_texte_grandeur , 'n_chc_couleur_texte_grandeur' ) + '\'' );
            }
            if(tup.n_chc_couleur_fond_grandeur === undefined || tup.n_chc_couleur_fond_grandeur === '' || tup.n_chc_couleur_fond_grandeur === null){
                tableau_champs.push( '`chc_couleur_fond_grandeur` = NULL' );
            }else{
                tableau_champs.push( '`chc_couleur_fond_grandeur` = \'' + this.__ig1.__fnt1.sq0( tup.n_chc_couleur_fond_grandeur , 'n_chc_couleur_fond_grandeur' ) + '\'' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des grandeurs'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_grandeur\` = ` + this.__ig1.__fnt1.sq1( tup.c_chi_id_grandeur , 'c_chi_id_grandeur' ) + '\r\n';
            sql0+=where0;
        }catch(e){
            return({__xst:__xer , __xme: this.__ig1.nl2(e)});
        }
        /* this.__ig1.ma_trace1(' sql_1188= ' + sql0 ); */
        try{
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1188 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1188';
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
export{sql_1188 as sql_1188};