const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
/*
  =====================================================================================================================
*/
class revs1{
    /*
      =============================================================================================================
    */
    async tout_supprimer( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1360={};
        let tt1360=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_revs
        */
        /*sql_inclure_fin*/ 1360 , criteres_1360 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1360.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1360.__xme});
        }
        await this.filtre1( mat , 1 , __db1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , nouvel_id , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_rev=null ){
        if(chi_id_rev === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_rev'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_rev=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1344={
             /*  */
            "T0_chi_id_rev" : chi_id_rev
        };
        let tt1344=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
        `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
        `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
        `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev`
         FROM b1.tbl_revs T0
        WHERE (   `T0`.`chi_id_rev` = :T0_chi_id_rev)
        ;
        */
        /*sql_inclure_fin*/ 1344 , criteres_1344 , this.__ig1.donnees_retournees , __db1 );
        if(tt1344.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1344.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1344;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d ){
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques début */
        form['chx_source_rev']=form['chx_source_rev'] === null || form['chx_source_rev'] === '' || form['chx_source_rev'] === undefined ? ( null ) : ( parseInt( form['chx_source_rev'] , 10 ) );
        form['chp_id_rev']=form['chp_id_rev'] === null || form['chp_id_rev'] === '' || form['chp_id_rev'] === undefined ? ( null ) : ( parseInt( form['chp_id_rev'] , 10 ) );
        form['chp_niveau_rev']=form['chp_niveau_rev'] === null || form['chp_niveau_rev'] === '' || form['chp_niveau_rev'] === undefined ? ( null ) : ( parseInt( form['chp_niveau_rev'] , 10 ) );
        form['chp_quotee_rev']=form['chp_quotee_rev'] === null || form['chp_quotee_rev'] === '' || form['chp_quotee_rev'] === undefined ? ( null ) : ( parseInt( form['chp_quotee_rev'] , 10 ) );
        form['chp_pos_premier_rev']=form['chp_pos_premier_rev'] === null || form['chp_pos_premier_rev'] === '' || form['chp_pos_premier_rev'] === undefined ? ( null ) : ( parseInt( form['chp_pos_premier_rev'] , 10 ) );
        form['chp_pos_dernier_rev']=form['chp_pos_dernier_rev'] === null || form['chp_pos_dernier_rev'] === '' || form['chp_pos_dernier_rev'] === undefined ? ( null ) : ( parseInt( form['chp_pos_dernier_rev'] , 10 ) );
        form['chp_parent_rev']=form['chp_parent_rev'] === null || form['chp_parent_rev'] === '' || form['chp_parent_rev'] === undefined ? ( null ) : ( parseInt( form['chp_parent_rev'] , 10 ) );
        form['chp_nbr_enfants_rev']=form['chp_nbr_enfants_rev'] === null || form['chp_nbr_enfants_rev'] === '' || form['chp_nbr_enfants_rev'] === undefined ? ( null ) : ( parseInt( form['chp_nbr_enfants_rev'] , 10 ) );
        form['chp_num_enfant_rev']=form['chp_num_enfant_rev'] === null || form['chp_num_enfant_rev'] === '' || form['chp_num_enfant_rev'] === undefined ? ( null ) : ( parseInt( form['chp_num_enfant_rev'] , 10 ) );
        form['chp_profondeur_rev']=form['chp_profondeur_rev'] === null || form['chp_profondeur_rev'] === '' || form['chp_profondeur_rev'] === undefined ? ( null ) : ( parseInt( form['chp_profondeur_rev'] , 10 ) );
        form['chp_pos_ouver_parenthese_rev']=form['chp_pos_ouver_parenthese_rev'] === null || form['chp_pos_ouver_parenthese_rev'] === '' || form['chp_pos_ouver_parenthese_rev'] === undefined ?
          ( 
            null
          ) : ( 
            parseInt( form['chp_pos_ouver_parenthese_rev'] , 10 )
          );
        form['chp_enfant_suivant_rev']=form['chp_enfant_suivant_rev'] === null || form['chp_enfant_suivant_rev'] === '' || form['chp_enfant_suivant_rev'] === undefined ? ( null ) : ( parseInt( form['chp_enfant_suivant_rev'] , 10 ) );
        /* conversion des données numériques fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : afr});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_provenance_rev" : form['chp_provenance_rev'] === '' ? ( null ) : ( form['chp_provenance_rev'] ) ,
                        "chx_source_rev" : form['chx_source_rev'] === '' ? ( null ) : ( form['chx_source_rev'] ) ,
                        "chp_id_rev" : form['chp_id_rev'] ,
                        "chp_valeur_rev" : form['chp_valeur_rev'] === '' ? ( null ) : ( form['chp_valeur_rev'] ) ,
                        "chp_type_rev" : form['chp_type_rev'] ,
                        "chp_niveau_rev" : form['chp_niveau_rev'] ,
                        "chp_quotee_rev" : form['chp_quotee_rev'] ,
                        "chp_pos_premier_rev" : form['chp_pos_premier_rev'] ,
                        "chp_pos_dernier_rev" : form['chp_pos_dernier_rev'] ,
                        "chp_parent_rev" : form['chp_parent_rev'] ,
                        "chp_nbr_enfants_rev" : form['chp_nbr_enfants_rev'] ,
                        "chp_num_enfant_rev" : form['chp_num_enfant_rev'] ,
                        "chp_profondeur_rev" : form['chp_profondeur_rev'] ,
                        "chp_pos_ouver_parenthese_rev" : form['chp_pos_ouver_parenthese_rev'] ,
                        "chp_enfant_suivant_rev" : form['chp_enfant_suivant_rev'] ,
                        "chp_commentaire_rev" : form['chp_commentaire_rev'] === '' ? ( null ) : ( form['chp_commentaire_rev'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1358=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_revs`(
            `chp_provenance_rev` , 
            `chx_source_rev` , 
            `chp_id_rev` , 
            `chp_valeur_rev` , 
            `chp_type_rev` , 
            `chp_niveau_rev` , 
            `chp_quotee_rev` , 
            `chp_pos_premier_rev` , 
            `chp_pos_dernier_rev` , 
            `chp_parent_rev` , 
            `chp_nbr_enfants_rev` , 
            `chp_num_enfant_rev` , 
            `chp_profondeur_rev` , 
            `chp_pos_ouver_parenthese_rev` , 
            `chp_enfant_suivant_rev` , 
            `chp_commentaire_rev`
        ) VALUES (
            :chp_provenance_rev , 
            :chx_source_rev , 
            :chp_id_rev , 
            :chp_valeur_rev , 
            :chp_type_rev , 
            :chp_niveau_rev , 
            :chp_quotee_rev , 
            :chp_pos_premier_rev , 
            :chp_pos_dernier_rev , 
            :chp_parent_rev , 
            :chp_nbr_enfants_rev , 
            :chp_num_enfant_rev , 
            :chp_profondeur_rev , 
            :chp_pos_ouver_parenthese_rev , 
            :chp_enfant_suivant_rev , 
            :chp_commentaire_rev
        );
        */
        /*sql_inclure_fin*/ 1358 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
        if(tt1358.__xst === __xsu){
            if(tt1358['changements'] === 0){
                this.__ig1.donnees_retournees.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xer ,"__xme" : afr});
            }
            let aac=await this.action_apres_creer( mat , d , tt1358['nouvel_id'] , form , __db1 );
            if(aac.__xst === __xer){
                await __db1.exec( 'ROLLBACK;' );
                return({"__xst" : __xer ,"__xme" : aac.__xme});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }else{
                await this.page_modification1( mat , d , tt1358['nouvel_id'] , __db1 );
            }
            return({"__xst" : __xsu});
        }else{
            this.__ig1.donnees_retournees.__xsi[__xer].push( tt1358['__xme'] + '\nl\'insertion a échoué [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer ,"__xme" : afr});
        }
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        this.__ig1.donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        let l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres1359={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres1359[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        /* this.__ig1.ma_trace1('criteres1359=',criteres1359); */
        let tt1359=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
        `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
        `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
        `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
         FROM b1.tbl_revs T0
         LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev
        
        WHERE (   `T0`.`chi_id_rev` = :T0_chi_id_rev
           AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
           AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
           AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
           AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
        ORDER BY `T0`.`chi_id_rev` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1359 , criteres1359 , this.__ig1.donnees_retournees , __db1 );
        if(tt1359.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : afr});
        }
        if(tt1359.__xst === __xsu && tt1359[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres1359['debut']=__debut;
            tt1359=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
            `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
            `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
            `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
             FROM b1.tbl_revs T0
             LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev
            
            WHERE (   `T0`.`chi_id_rev` = :T0_chi_id_rev
               AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
               AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
               AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
               AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
            ORDER BY `T0`.`chi_id_rev` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1359 , criteres1359 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt1359;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        this.fonction_liste='liste1';
        await this.filtre1( mat , d );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='revs1';
    __ig1=null;
    fonction_liste='liste1';
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
export{revs1 as revs1};