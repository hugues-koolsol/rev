const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
class x_ecran_generer_souches1{
    /*
      =============================================================================================================
    */
    moi='x_ecran_generer_souches1';
    __gi1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
    */
    async charger_les_requetes_souches( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_basedd=0;
        let nom_de_la_table='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        if(chi_id_basedd > 0 && nom_de_la_table !== ''){
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let criteres_391={
                 /*  */
                "T0_chp_table_reference_requete" : nom_de_la_table ,
                "T0_che_est_souche_requete" : 1
            };
            let tt391=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
            `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
             FROM b1.tbl_requetes T0
            WHERE (`T0`.`chp_table_reference_requete` = :T0_chp_table_reference_requete
               AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete)
            ;
            */
            /*sql_inclure_fin*/ 391 , criteres_391 , donnees_retournees , __db1 );
            if(tt391[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            donnees_retournees[__xva]['requetes']=tt391[__xva];
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        return;
    }
    /*
      =============================================================================================================
    */
    async recuperer_zone_travail_pour_les_bases2( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /*
          on récupère les rev de toutes les bases du projet actif
        */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_171={};
        let tt171=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 171 , criteres_171 , donnees_retournees , __db1 );
        if(tt171[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['les_bases_du_projet']=tt171[__xva];
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
}
export{x_ecran_generer_souches1 as x_ecran_generer_souches1};