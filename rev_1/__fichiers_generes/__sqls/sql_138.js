const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_138{
    /*
      =============================================================================================================
    */
    async sql( par ){
        /* test "non nul" sur le champ "chp_nom_acces" */
        if(par['n_chp_nom_acces'] === null || par['n_chp_nom_acces'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "nom" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* test "non nul" sur le champ "chx_groupe_acces" */
        if(par['n_chx_groupe_acces'] === null || par['n_chx_groupe_acces'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "groupe" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* test "non nul" sur le champ "chx_metier_acces" */
        if(par['n_chx_metier_acces'] === null || par['n_chx_metier_acces'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "metier" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* test "non nul" sur le champ "che_actif_acces" */
        if(par['n_che_actif_acces'] === null || par['n_che_actif_acces'] === ''){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'la valeur pour "actif" doit être renseignée [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*
          dans la définition de la table : fonctions_spéciales1(ne_pas_modifier(0))
        */
        if(par.hasOwnProperty( 'c_chi_id_acces' ) && [0].includes( par['c_chi_id_acces'] )){
            return({"__xst" : __xer ,"__xme" : 'Vous ne pouvez pas modifier cet enregistrement car il y a une règle "ne_pas_modifier"'});
        }
        let sql0='UPDATE `tbl_acces` SET \r\n';
        let tableau_champs=[];
        try{
            if(par['n_chp_nom_acces'] === undefined || par['n_chp_nom_acces'] === '' || par['n_chp_nom_acces'] === null){
                tableau_champs.push( '`chp_nom_acces` = NULL' );
            }else{
                tableau_champs.push( '`chp_nom_acces` = \'' + this.__ig1.__fnt1.sq0( par['n_chp_nom_acces'] , 'n_chp_nom_acces' ) + '\'' );
            }
            if(par['n_chx_groupe_acces'] === undefined || par['n_chx_groupe_acces'] === '' || par['n_chx_groupe_acces'] === null){
                tableau_champs.push( '`chx_groupe_acces` = NULL' );
            }else{
                tableau_champs.push( '`chx_groupe_acces` = ' + this.__ig1.__fnt1.sq0( par['n_chx_groupe_acces'] , 'n_chx_groupe_acces' ) + '' );
            }
            if(par['n_chx_metier_acces'] === undefined || par['n_chx_metier_acces'] === '' || par['n_chx_metier_acces'] === null){
                tableau_champs.push( '`chx_metier_acces` = NULL' );
            }else{
                tableau_champs.push( '`chx_metier_acces` = ' + this.__ig1.__fnt1.sq0( par['n_chx_metier_acces'] , 'n_chx_metier_acces' ) + '' );
            }
            if(par['n_che_actif_acces'] === undefined || par['n_che_actif_acces'] === '' || par['n_che_actif_acces'] === null){
                tableau_champs.push( '`che_actif_acces` = NULL' );
            }else{
                tableau_champs.push( '`che_actif_acces` = ' + this.__ig1.__fnt1.sq0( par['n_che_actif_acces'] , 'n_che_actif_acces' ) + '' );
            }
            if(tableau_champs.length === 0){
                return({
                         /*  */
                        "__xst" : __xer ,
                        "__xme" : 'aucun champ à mettre à jour' ,
                        "sql0" : sql0 ,
                        "texte_requete" : 'la modification dans la table des acces'
                    });
            }
            sql0+=tableau_champs.join( ',' + '\r\n' + '    ' ) + '\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            /*
              dans la définition de la table : fonctions_spéciales1(ne_pas_modifier(0))
            */
            where0+=' AND `chi_id_acces` NOT IN (0) ';
            where0+=` AND \`chi_id_acces\` = ` + this.__ig1.__fnt1.sq1( par['c_chi_id_acces'] , 'c_chi_id_acces' ) + '\r\n';
            sql0+=where0;
            /* this.__ig1.ma_trace1(' sql_138= ' + sql0 ); */
            let res=await this.__db1.exec( sql0 );
            /* si c'est une requete souche la maj DOIT se faire */
            if(res === 0){
                return({"__xst" : __xer ,"changements" : res ,"__xme" : 'aucun changement effectué (contraintes)'});
            }
            return({"__xst" : __xsu ,"changements" : res});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 138 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_138';
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
export{sql_138 as sql_138};