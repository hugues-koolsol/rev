const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_133{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_nom_groupe" */
        if(par['n_chp_nom_groupe'] === null || par['n_chp_nom_groupe']===''){
            this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "nom du groupe" doit être renseigné [' + this.__ig1.nl2() + ']');
            return{__xst:__xer};
        }
        /*
          === test spécifique sur le champ "chp_nom_groupe" ===
        */
        let __test_0_1=this.__ig1.__fnts_c_et_s.test_du_nom_technique1(par['n_chp_nom_groupe'],'nom du groupe');
        if(__test_0_1.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push(__test_0_1.__xme);
            return{"__xst" : __xer};
        }
        let sql0='UPDATE `tbl_groupes` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_nom_groupe'] === undefined || par['n_chp_nom_groupe'] === '' || par['n_chp_nom_groupe'] === null){
                tableau_champs.push( '`chp_nom_groupe` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_groupe` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_groupe'] , 'n_chp_nom_groupe' ) + '\'' );
            }
            if(par['n_chx_parent_groupe'] === undefined || par['n_chx_parent_groupe'] === '' || par['n_chx_parent_groupe'] === null){
                tableau_champs.push( '`chx_parent_groupe` = NULL' );
            }else{
                tableau_champs.push( '`chx_parent_groupe` = ' + this.__ig1.__fnt1.sq0( par['n_chx_parent_groupe'] , 'n_chx_parent_groupe' ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des groupes'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_groupe\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_groupe'] , 'c_chi_id_groupe' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_133= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 133 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_133';
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
export{sql_133 as sql_133};