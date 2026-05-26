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
    async retrancher_01( mat , d ){
        /* ,  this.__ig1.donnees_recues ,  this.__ig1.donnees_retournees ,  this.__ig1.options_generales */
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
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let tt112=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
            if(tt112[__xst] !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt112.__xme});
            }
            let tt158=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_taches SET 
               `chp_priorite_tache` = (chp_priorite_tache-1)
            WHERE (   `chi_id_tache` = :c_chi_id_tache
               AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
               AND `chp_priorite_tache` >= 1) ;
            */
            /*sql_inclure_fin*/ 158 , {"c_chi_id_tache" : chi_id_tache ,"c_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
            if(tt158[__xst] !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt158.__xme});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : 'chi_id_tache=' + chi_id_tache + '[' + this.__ig1.nl2() + ']'});
    }
    /*
      =============================================================================================================
    */
    async ajouter_01_a_la_tache( mat , d ){
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
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let tt112=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
            if(tt112[__xst] !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt112.__xme});
            }
            let tt159=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_taches SET 
               `chp_priorite_tache` = (chp_priorite_tache+1)
            WHERE (   `chi_id_tache` = :c_chi_id_tache
               AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
               AND `chp_priorite_tache` < 99) ;
            */
            /*sql_inclure_fin*/ 159 , {"c_chi_id_tache" : chi_id_tache ,"c_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
            if(tt159[__xst] !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt159.__xme});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : 'chi_id_tache=' + chi_id_tache + '[' + this.__ig1.nl2() + ']'});
    }
    /*
      =============================================================================================================
    */
    async priorite_a( mat , d ){
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
        if(this.__ig1.est_num( chi_id_tache ) && chi_id_tache >= 0){
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let tt112=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
            if(tt112[__xst] !== __xsu){
                return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
            }
            let tt157=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_taches SET 
               `chp_priorite_tache` = :n_chp_priorite_tache , 
               `chd__dtm_tache` = :n_chd__dtm_tache
            WHERE (   `chi_id_tache` = :c_chi_id_tache
               AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
            */
            /*sql_inclure_fin*/ 157 , {
                "c_chi_id_tache" : chi_id_tache ,
                "c_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur ,
                "n_chp_priorite_tache" : valeur
            } , this.__ig1.donnees_retournees , __db1 );
            if(tt157[__xst] !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt157.__xme});
            }
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    async réordonner1( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tt155=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 155 , {"T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur ,"T0_chp_priorite_tache" : 50} , this.__ig1.donnees_retournees , __db1 );
        if(tt155[__xst] !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt115.__xme});
        }
        let nouvelle_priorite=1;
        for(let k1 in tt155[__xva]){
            if(nouvelle_priorite < 50){
                let tt156=await this.__ig1.sql_iii(
                /*sql_inclure_deb*/ /*#
                UPDATE b1.tbl_taches SET 
                   `chp_priorite_tache` = :n_chp_priorite_tache
                WHERE (chi_id_tache = :c_chi_id_tache
                   AND chx_utilisateur_tache = :c_chx_utilisateur_tache) ;
                */
                /*sql_inclure_fin*/ 156 , {
                    "n_chp_priorite_tache" : nouvelle_priorite ,
                    "c_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur ,
                    "c_chi_id_tache" : tt155[__xva][k1]['T0.chi_id_tache']
                } , this.__ig1.donnees_retournees , __db1 );
                if(tt156[__xst] === __xer){
                    this.__ig1.donnees_retournees.__xsi[__xer].push( 'erreur de modification sur les priorités [' + this.__ig1.nl2() + ']' );
                    return;
                }
            }
            nouvelle_priorite++;
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d ){
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_112={"T0_chi_id_tache" : form['chi_id_tache'] ,"T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur};
        let tt112=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , criteres_select_112 , this.__ig1.donnees_retournees , __db1 );
        if(tt112[__xst] !== __xsu || tt112[__xva].length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [112 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let criteres_113={
             /*  */
            "c_chi_id_tache" : form['chi_id_tache'] ,
            "c_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur ,
            "n_chp_texte_tache" : form['chp_texte_tache'] ,
            "n_chp_priorite_tache" : form['chp_priorite_tache']
        };
        /* =========================== mise à jour effective ======================== */
        let tt113=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_taches SET 
           `chp_texte_tache` = :n_chp_texte_tache , 
           `chp_priorite_tache` = :n_chp_priorite_tache , 
           `chd__dtm_tache` = :n_chd__dtm_tache
        WHERE (`chi_id_tache` = :c_chi_id_tache
           AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
        */
        /*sql_inclure_fin*/ 113 , criteres_113 , this.__ig1.donnees_retournees , __db1 );
        if(tt113.__xst !== __xsu || tt113.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt113.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt112_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , criteres_select_112 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt112_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_tache=null , __db1=null ){
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
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_tache(' + chi_id_tache + ')))))';
        }
        if(chi_id_tache === null){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt112=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
        if(tt112[__xst] !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt112.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt112;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_tache=null ){
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_112={
             /*  */
            "T0_chi_id_tache" : chi_id_tache ,
            "T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur
        };
        let tt112=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , criteres_112 , this.__ig1.donnees_retournees , __db1 );
        if(tt112[__xst] !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt112.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt112;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        const chemin_du_fichier_bdd='./__bases_de_donnees/bdd_' + this.__ig1.donnees_retournees.chi_id_projet + '.sqlite';
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tt112=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : form['chi_id_tache'] ,"T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
        if(tt112[__xst] !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt112.__xme});
        }
        let tt114=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_taches
        WHERE (`chi_id_tache` = :chi_id_tache
           AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;
        */
        /*sql_inclure_fin*/ 114 , {"chi_id_tache" : form['chi_id_tache'] ,"chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
        if(tt114[__xst] !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt114.__xme});
        }
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        const chemin_du_fichier_bdd='./__bases_de_donnees/bdd_' + this.__ig1.donnees_retournees.chi_id_projet + '.sqlite';
        let tt112=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
        ;
        */
        /*sql_inclure_fin*/ 112 , {"T0_chi_id_tache" : chi_id_tache ,"T0_chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt112;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d ){
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        let donnees_sql={
            "donnees" : [{
                        "chx_utilisateur_tache" : this.__ig1.donnees_retournees.chi_id_utilisateur ,
                        "chp_texte_tache" : form['chp_texte_tache'] ,
                        "chp_priorite_tache" : form['chp_priorite_tache']
                    }]
        };
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let tt111=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 111 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
        if(tt111[__xst] !== __xsu || tt111['changements'] !== 1){
            return({"__xst" : __xer ,"__xme" : tt111.__xme});
        }
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            /* this.__ig1.ma_trace1( 'ici' ); */
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt111['nouvel_id'] , __db1 );
        }
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
        const formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );
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
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        criteres110['T0_chx_utilisateur_tache']=this.__ig1.donnees_retournees.chi_id_utilisateur;
        let tt110=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 110 , criteres110 , this.__ig1.donnees_retournees , __db1 );
        if(tt110.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt110.__xme});
        }
        if(tt110[__xst] === __xsu && tt110[__xva].length === 0 && __debut > 0){
            /* this.__ig1.ma_trace1("__debut=",__debut); */
            __debut=0;
            __num_page=0;
            criteres110['debut']=__debut;
            tt110=await this.__ig1.sql_iii(
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
            /*sql_inclure_fin*/ 110 , criteres110 , this.__ig1.donnees_retournees , __db1 );
        }
        /* this.__ig1.ma_trace1('tt110=',tt110) */
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt110;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        this.fonction_liste='liste1';
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi='taches1';
    __ig1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
}
export{taches1 as taches1};