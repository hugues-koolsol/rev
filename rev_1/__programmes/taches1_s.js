const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
/*
  =====================================================================================================================
*/
class taches1{
    /*
      =============================================================================================================
    */
    async retrancher_01( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_tache='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_tache'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_tache=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_tache > 0){
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let tt112=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
            if(tt112[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let tt158=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_taches SET 
               `chp_priorite_tache` = (chp_priorite_tache-1)
            WHERE (   `chi_id_tache` = :c_chi_id_tache
               AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
               AND `chp_priorite_tache` >= 1) ;
            */
            /*sql_inclure_fin*/ 158 , {"c_chi_id_tache" : chi_id_tache ,"c_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
            if(tt158[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }
        this.__gi1.__xsi[__xer].push( 'chi_id_tache=' + chi_id_tache + '[' + this.__gi1.nl2() + ']' );
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async ajouter_01_a_la_tache( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_tache='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_tache'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_tache=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_tache > 0){
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let tt112=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
            if(tt112[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let tt159=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_taches SET 
               `chp_priorite_tache` = (chp_priorite_tache+1)
            WHERE (   `chi_id_tache` = :c_chi_id_tache
               AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
               AND `chp_priorite_tache` < 99) ;
            */
            /*sql_inclure_fin*/ 159 , {"c_chi_id_tache" : chi_id_tache ,"c_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
            if(tt159[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }
        this.__gi1.__xsi[__xer].push( 'chi_id_tache=' + chi_id_tache + '[' + this.__gi1.nl2() + ']' );
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async priorite_a( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let valeur=0;
        let chi_id_tache=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_tache'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_tache=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'valeur'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                valeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(this.__gi1.est_num( chi_id_tache ) && chi_id_tache >= 0){
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let tt112=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
            if(tt112[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let tt157=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_taches SET 
               `chp_priorite_tache` = :n_chp_priorite_tache , 
               `chd__dtm_tache` = :n_chd__dtm_tache
            WHERE (   `chi_id_tache` = :c_chi_id_tache
               AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
            */
            /*sql_inclure_fin*/ 157 , {"c_chi_id_tache" : chi_id_tache ,"c_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur ,"n_chp_priorite_tache" : valeur} , donnees_retournees , __db1 );
            if(tt157[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    async réordonner1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt155=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (   `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
           AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache) 
        ORDER BY `T0`.`chp_priorite_tache` ASC
        ;
        */
        /*sql_inclure_fin*/ 155 , {"T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur ,"T0_chp_priorite_tache" : 50} , donnees_retournees , __db1 );
        if(tt155[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let nouvelle_priorite=1;
        for(let k1 in tt155[__xva]){
            if(nouvelle_priorite < 50){
                let tt156=await this.__gi1.sql_iii(
                /*sql_inclure_deb*/ /*#
                UPDATE b1.tbl_taches SET 
                   `chp_priorite_tache` = :n_chp_priorite_tache
                WHERE (chi_id_tache = :c_chi_id_tache
                   AND chx_utilisateur_tache = :c_chx_utilisateur_tache) ;
                */
                /*sql_inclure_fin*/ 156 , {
                    "n_chp_priorite_tache" : nouvelle_priorite ,
                    "c_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur ,
                    "c_chi_id_tache" : tt155[__xva][k1]['T0.chi_id_tache']
                } , donnees_retournees , __db1 );
                if(tt156[__xst] === __xer){
                    this.__gi1.__xsi[__xer].push( 'erreur de modification sur les priorités [' + this.__gi1.nl2() + ']' );
                    return;
                }
            }
            nouvelle_priorite++;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(!form.hasOwnProperty( 'chp_texte_tache' ) || form['chp_texte_tache'] === null || form['chp_texte_tache'].trim() === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "texte" doit être renseignée ' );
            return({"__xst" : __xer});
        }
        if(!form.hasOwnProperty( 'chp_priorite_tache' )
               || form['chp_priorite_tache'] === null
               || !this.__gi1.est_num( form['chp_priorite_tache'] )
        ){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "priorite" doit être renseignée ' );
            return({"__xst" : __xer});
        }
        const __test=this.__gi1.__fnt1.entier_compris_entre( 0 , 99 , form['chp_priorite_tache'] , "priorite" );
        if(__test[__xst] !== __xsu){
            this.__gi1.ma_trace1( __test );
            this.__gi1.__xsi[__xer].push( __test['__xme'] );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt112=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : form['chi_id_tache'] ,"T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
        if(tt112[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*
          __actions_et_tests_avant_modifier=this->actions_et_tests_avant_modifier(mat,d,donnees_retournees,donnees_recues,form,tt112[__xva][0]);
        */
        let donnees_sql={
            "c_chi_id_tache" : form['chi_id_tache'] ,
            "c_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur ,
            "n_chp_texte_tache" : form['chp_texte_tache'] ,
            "n_chp_priorite_tache" : form['chp_priorite_tache']
        };
        let tt113=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_taches SET 
           `chp_texte_tache` = :n_chp_texte_tache , 
           `chp_priorite_tache` = :n_chp_priorite_tache , 
           `chd__dtm_tache` = :n_chd__dtm_tache
        WHERE (`chi_id_tache` = :c_chi_id_tache
           AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
        */
        /*sql_inclure_fin*/ 113 , donnees_sql , donnees_retournees , __db1 );
        /* this.__gi1.ma_trace1(tt113); */
        if(tt113[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            /* this.__gi1.ma_trace1( 'ici' ); */
            await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_tache=null , __db1=null ){
        if(chi_id_tache === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_tache'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_tache=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_tache(' + chi_id_tache + ')))))';
        }
        if(chi_id_tache === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt112=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
        if(tt112[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt112;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_tache=null ){
        if(chi_id_tache === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_tache'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_tache=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_112={
             /*  */
            "T0_chi_id_tache" : chi_id_tache ,
            "T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur
        };
        let tt112=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , criteres_112 , donnees_retournees , __db1 );
        if(tt112[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt112;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        const chemin_du_fichier_bdd='./__bases_de_donnees/bdd_' + donnees_retournees.chi_id_projet + '.sqlite';
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt112=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : form['chi_id_tache'] ,"T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
        if(tt112[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let tt114=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_taches
        WHERE (`chi_id_tache` = :chi_id_tache
           AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;
        */
        /*sql_inclure_fin*/ 114 , {"chi_id_tache" : form['chi_id_tache'] ,"chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
        if(tt114[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_tache=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_tache'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_tache=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_tache === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        const chemin_du_fichier_bdd='./__bases_de_donnees/bdd_' + donnees_retournees.chi_id_projet + '.sqlite';
        let tt112=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt112;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(!form.hasOwnProperty( 'chp_texte_tache' ) || form['chp_texte_tache'] === null || form['chp_texte_tache'].trim() === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "texte" doit être renseignée ' );
            return({"__xst" : __xer});
        }
        if(!form.hasOwnProperty( 'chp_priorite_tache' )
               || form['chp_priorite_tache'] === null
               || !this.__gi1.est_num( form['chp_priorite_tache'] )
        ){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "priorite" doit être renseignée ' );
            return({"__xst" : __xer});
        }
        const __test=this.__gi1.__fnt1.entier_compris_entre( 0 , 99 , form['chp_priorite_tache'] , "priorite" );
        if(__test[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( __test['__xme'] );
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chx_utilisateur_tache" : donnees_retournees.chi_id_utilisateur ,
                        "chp_texte_tache" : form['chp_texte_tache'] ,
                        "chp_priorite_tache" : form['chp_priorite_tache']
                    }]
        };
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt111=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_taches`(
            `chx_utilisateur_tache` , 
            `chp_texte_tache` , 
            `chp_priorite_tache` , 
            `chd__dtm_tache` , 
            `chd__dtc_tache`
        ) VALUES (
            :chx_utilisateur_tache , 
            :chp_texte_tache , 
            :chp_priorite_tache , 
            :chd__dtm_tache , 
            :chd__dtc_tache
        );
        */
        /*sql_inclure_fin*/ 111 , donnees_sql , donnees_retournees , __db1 );
        if(tt111[__xst] === __xsu){
            if(tt111['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                /* this.__gi1.ma_trace1( 'ici' ); */
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt111['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt111['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){
        const __nbMax=40;
        let __num_page=0;
        const formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres110={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres110[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        criteres110['T0_chx_utilisateur_tache']=donnees_retournees.chi_id_utilisateur;
        let tt110=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
        `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (   `T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
           AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
           AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
           AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
        ORDER BY `T0`.`chp_priorite_tache` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 110 , criteres110 , donnees_retournees , __db1 );
        if(tt110.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt110[__xst] === __xsu && tt110[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres110['debut']=__debut;
            let tt110=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
            `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (   `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
               AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
               AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
               AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
            ORDER BY `T0`.`chp_priorite_tache` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 110 , criteres110 , donnees_retournees , __db1 );
        }
        /* this.__gi1.ma_trace1('tt110=',tt110) */
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt110;
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
    moi='taches1';
    __gi1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
    }
}
export{taches1 as taches1};