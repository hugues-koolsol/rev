const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_335{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "che_ordre_genre" */
        if(par['n_che_ordre_genre'] === null || par['n_che_ordre_genre']===''){
            this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "ordre" doit être renseigné [' + this.__ig1.nl2() + ']');
            return{__xst:__xer};
        }
        let sql0='UPDATE `tbl_genres` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_che_ordre_genre'] === undefined || par['n_che_ordre_genre'] === '' || par['n_che_ordre_genre'] === null){
                tableau_champs.push( '`che_ordre_genre` = NULL' );
            }else{
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
            /* this.__ig1.ma_trace1(' sql_335= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 335 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_335';
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
export{sql_335 as sql_335};