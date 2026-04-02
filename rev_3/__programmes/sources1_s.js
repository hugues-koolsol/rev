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
class sources1{
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_source'] ,  donnees_retournees , options_generales , __db1 );
          if(obj[__xst] === __xsu){
              return({"__xst" : __xsu});
          }else{
              return({"__xst" : __xer});
          }
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        if(donnees_retournees.chi_id_utilisateur >= 2){
            this.__gi1.__xsi[__xer].push( 'seul l\'utilisateur dev peut supprimer des sources disponibles  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , nouvel_id , form , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_source=null ){
        if(chi_id_source === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_source'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_source=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_116={
             /*  */
            "T0_chi_id_source" : chi_id_source
        };
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_116 , donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt116;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_116={
             /*  */
            "T0_chi_id_source" : form['chi_id_source']
        };
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_116 , donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt116[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_118={
             /*  */
            "chi_id_source" : form['chi_id_source']
        };
        let tt118=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_sources
        WHERE `chi_id_source` = :chi_id_source ;
        */
        /*sql_inclure_fin*/ 118 , criteres_118 , donnees_retournees , __db1 );
        /*  */
        if(tt118[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt116[__xva][0] , __db1 );
        if(aac[__xst] === __xer){
            this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*  */
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_source=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_116={"T0_chi_id_source" : chi_id_source};
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 116 , critere_116 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt116;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques début */
        form['che_binaire_source']=form['che_binaire_source'] === null || form['che_binaire_source'] === '' || form['che_binaire_source'] === undefined ? ( 0 ) : ( parseInt( form['che_binaire_source'] , 10 ) );
        form['che_contient_version_source']=form['che_contient_version_source'] === null || form['che_contient_version_source'] === '' || form['che_contient_version_source'] === undefined ?
          ( 
            0
          ) : ( 
            parseInt( form['che_contient_version_source'] , 10 )
          );
        form['che_autorisation_globale_source']=form['che_autorisation_globale_source'] === null || form['che_autorisation_globale_source'] === '' || form['che_autorisation_globale_source'] === undefined ?
          ( 
            0
          ) : ( 
            parseInt( form['che_autorisation_globale_source'] , 10 )
          );
        /* conversion des données numériques fin */
        if(form['chp_nom_source'] === null || form['chp_nom_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_0_1=this.__gi1.__fnt1.test_du_nom_technique1( form['chp_nom_source'] , 'nom' );
        if(__test_0_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de  "nom" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['che_binaire_source'] === null || form['che_binaire_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "binaire" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_contient_version_source'] === null || form['che_contient_version_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "contient version" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_autorisation_globale_source'] === null || form['che_autorisation_globale_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "autorisation globale" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_nom_source" : form['chp_nom_source'] ,
                        "che_binaire_source" : form['che_binaire_source'] ,
                        "cht_commentaire_source" : form['cht_commentaire_source'] === '' ? ( null ) : ( form['cht_commentaire_source'] ) ,
                        "che_contient_version_source" : form['che_contient_version_source'] ,
                        "che_autorisation_globale_source" : form['che_autorisation_globale_source']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt117=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_sources`(
            `chp_nom_source` , 
            `che_binaire_source` , 
            `cht_commentaire_source` , 
            `che_contient_version_source` , 
            `che_autorisation_globale_source`
        ) VALUES (
            :chp_nom_source , 
            :che_binaire_source , 
            :cht_commentaire_source , 
            :che_contient_version_source , 
            :che_autorisation_globale_source
        );
        */
        /*sql_inclure_fin*/ 117 , donnees_sql , donnees_retournees , __db1 );
        if(tt117[__xst] === __xsu){
            if(tt117['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt117['nouvel_id'] , form , __db1 );
            if(aac[__xst] === __xer){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt117['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt117['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){
        let l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__gi1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_115={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_115[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt115=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , 
        `T0`.`che_autorisation_globale_source` , `T0`.`chx_dossier_id_source`
         FROM b1.tbl_sources T0
        WHERE (`T0`.`chp_nom_source` LIKE :T0_chp_nom_source
           AND `T0`.`chi_id_source` = :T0_chi_id_source
           AND `T0`.`chi_id_source` > :T0_chi_id_source2
           AND `T0`.`chi_id_source` <= :T0_chi_id_source3
           AND `T0`.`che_binaire_source` = :T0_che_binaire_source
           AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
           AND `T0`.`che_contient_version_source` = :T0_che_contient_version_source
           AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source) 
        ORDER BY `T0`.`chi_id_source` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 115 , criteres_115 , donnees_retournees , __db1 );
        if(tt115.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt115[__xst] === __xsu && tt115[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres_115['debut']=__debut;
            let tt115=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , 
            `T0`.`che_autorisation_globale_source` , `T0`.`chx_dossier_id_source`
             FROM b1.tbl_sources T0
            WHERE (`T0`.`chp_nom_source` LIKE :T0_chp_nom_source
               AND `T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chi_id_source` > :T0_chi_id_source2
               AND `T0`.`chi_id_source` <= :T0_chi_id_source3
               AND `T0`.`che_binaire_source` = :T0_che_binaire_source
               AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
               AND `T0`.`che_contient_version_source` = :T0_che_contient_version_source
               AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source) 
            ORDER BY `T0`.`chi_id_source` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 115 , criteres_115 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt115;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        this.fonction_liste='liste1';
        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        this.fonction_liste='sous_liste1';
        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='sources1';
    __gi1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
    */
}
export{sources1 as sources1};