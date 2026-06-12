const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1335{
    /*
      =============================================================================================================
    */
    verifier_coherence( par ){
        this.__ig1.options_generales.erreur_controlee=true;
        if((par.n_chp_espece_genre
                   || par.n_che_longueur_genre)
               && par.n_chp_espece_genre.toUpperCase() === 'VARCHAR'
               && par.n_che_longueur_genre === null
        ){
            throw new Error( 'une longueur doit être indiquée pour le l\'espèce VARCHAR' );
        }
        if((par.n_chp_espece_genre
                   || par.n_che_longueur_genre)
               && par.n_chp_espece_genre.toUpperCase() === 'DECIMAL'
               && par.n_che_longueur_genre === null
        ){
            throw new Error( 'une longueur doit être indiquée pour le l\'espèce DECIMAL' );
        }
        this.__ig1.options_generales.erreur_controlee=false;
        return({"__xst" : __xsu});
    }

    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "che_ordre_genre" */
        if(par['n_che_ordre_genre'] === null || par['n_che_ordre_genre'] === ''){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "ordre" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        /*
          =====================================================================================================
          ================== appel de la fonction de coherence qui fait un throw ==============================
          =====================================================================================================
        */
        this.verifier_coherence(par);
        /*
          =====================================================================================================
          ================== appel de la fonction de coherence qui fait un throw ==============================
          =====================================================================================================
        */
        let sql0='UPDATE `tbl_genres` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_che_ordre_genre'] === undefined || par['n_che_ordre_genre'] === '' || par['n_che_ordre_genre'] === null){
                tableau_champs.push( '`che_ordre_genre` = NULL' );
            }else{
                if(isNaN(parseInt( par['n_che_ordre_genre'] , 10 ))){
                    return({"__xst" : __xer ,"__xme" : 'le champ "ordre" doit être numérique'});
                }
                tableau_champs.push( '`che_ordre_genre` = ' + this.__ig1.__fnt1.sq0( par['n_che_ordre_genre'] , 'n_che_ordre_genre' ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des genres'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_genre\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_genre'] , 'c_chi_id_genre' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_1335= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1335 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_1335';
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
export{sql_1335 as sql_1335};