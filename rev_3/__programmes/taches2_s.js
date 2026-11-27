const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
/*
  =====================================================================================================================
*/
class taches2{
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , fo1 , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , fo1 , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recup_chi_id_tache( criteres_select_2022 , __db1 ){
        let tt2022=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 2022 , criteres_select_2022 , __db1 );
        return tt2022;
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_tache=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_tache' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_tache=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_tache === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let critere_2022={"T0_chi_id_tache" : chi_id_tache};
        let tt2022=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 2022 , critere_2022 , __db1 );
        this.__ig1.donnees_retournees.__xva['page_voir1']=tt2022;
        let __aetapv=await this.actions_et_tests_apres_page_voir( mat , d , tt2022.__xva[0] , __db1 );
        if(__aetapv.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __aetapv.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues.__xva['__co1'];
        let fo1=this.__ig1.donnees_recues.__xva['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let tt2022=await this.recup_chi_id_tache( {"T0_chi_id_tache" : fo1.chi_id_tache} , __db1 );
        if(tt2022.__xst !== __xsu || tt2022.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : suppression impossible [2022 ' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , fo1 , tt2022.__xva[0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_2025={
             /*  */
            "chi_id_tache" : fo1.chi_id_tache
        };
        let tt2025=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_taches
        WHERE `chi_id_tache` = :chi_id_tache ;
        */
        /*sql_inclure_fin*/ 2025 , criteres_2025 , __db1 );
        /*  */
        if(tt2025.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt2025.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , fo1 , tt2022.__xva[0] , __db1 );
        if(__aavc.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : __aavc.__xme});
        }
        /*  */
        if(fo1.__mat_liste_si_ok !== ''){
            let mat1=JSON.parse( fo1.__mat_liste_si_ok );
            await this.filtre1( mat1 , 1 , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_tache=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_tache' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_tache=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_tache === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let tt2022=await this.recup_chi_id_tache( {"T0_chi_id_tache" : chi_id_tache} , __db1 );
        if(tt2022.__xst !== __xsu || tt2022.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : suppression impossible [2022 ' + this.__ig1.nl2() + ']'});
        }
        this.__ig1.donnees_retournees.__xva['page_confirmation_supprimer1']=tt2022;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        const l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        const formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , 'liste1' );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_2021={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        if(formulaire.hasOwnProperty( '__ordre_de_tri_de_la_liste1' ) && formulaire.__ordre_de_tri_de_la_liste1 !== ''){
            formulaire.__ordre_de_tri_de_la_liste1=formulaire.__ordre_de_tri_de_la_liste1.replace( /&quot;/g , '"' );
        }
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_2021[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_2021[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 1 );
        }
        let tt2021=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T0`.`chd__dtm_tache` , 
        `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
           AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
           AND `T0`.`che_priorite_tache` = :T0_che_priorite_tache
           AND `T0`.`che_priorite_tache` < :T0_che_priorite_tache2
           AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur) 
        ORDER BY `T0`.`che_priorite_tache` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 2021 , criteres_2021 , __db1 );
        if(tt2021.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt2021.__xme});
        }
        if(tt2021.__xst === __xsu && tt2021.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_2021['debut']=__debut;
            tt2021=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T0`.`chd__dtm_tache` , 
            `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
               AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
               AND `T0`.`che_priorite_tache` = :T0_che_priorite_tache
               AND `T0`.`che_priorite_tache` < :T0_che_priorite_tache2
               AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur) 
            ORDER BY `T0`.`che_priorite_tache` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 2021 , criteres_2021 , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__champs_sortie_pour_tri1']={"`T0`.`che_priorite_tache`" : "ASC"};
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees.__xva['__debut']=__debut;
        this.__ig1.donnees_retournees.__xva['__num_page']=__num_page;
        this.__ig1.donnees_retournees.__xac='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees.__xac+='))))';
        this.__ig1.donnees_retournees.__xva['liste1']=tt2021;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        if(!this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            this.__ig1.donnees_recues.__xva['__complements_sous_liste']={};
        }
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi='taches2';
    __ig1=null;
    __variables_module={};
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{taches2 as taches2};