const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
import {x_ecran_concevoir_une_requete1 as x_ecran_concevoir_une_requete1_s} from './x_ecran_concevoir_une_requete1_s.js';
import {_rev_de_sql_vers_js1} from './_rev_de_sql_vers_js1_.js';
/*
  éventuellement, indégrer ceci :
  import {w_rev_vers_sql1} from './w_rev_vers_sql1_.js';
  import sqlParser from "https://esm.sh/sql-parser-cst";
  
*/
/*
  =====================================================================================================================
*/
class requetes1{
    /*
      =============================================================================================================
    */
    async compiler_requete_par_id( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* this.__gi1.ma_trace1('d='+d+',mat',mat); */
        let chi_id_requete=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete === 0){
            this.__gi1.__xsi[__xer].push( 'le paramètre chi_id_requete est à zéro ' + this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1( 'chi_id_requete=' + chi_id_requete ); */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        /*
          =====================================================================================================
          récupération de la requête
        */
        let criteres_373_1={"T0_chi_id_requete" : chi_id_requete};
        let tt373_1=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 373 , criteres_373_1 , donnees_retournees , __db1 );
        if(tt373_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur de sélection de la requête [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['les_bases_du_projet']={};
        let criteres_select_171={};
        let tt171=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 171 , criteres_select_171 , donnees_retournees , __db1 );
        if(tt171[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(!(tt373_1[__xst] === __xsu && tt171[__xst] === __xsu)){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let bases_du_projet={};
        for(let k1 in tt171[__xva]){
            bases_du_projet[tt171[__xva][k1]['T0.chi_id_basedd']]=tt171[__xva][k1];
        }
        /*
          =====================================================================================================
          les données à passer au module de construction du js de la requête
        */
        let donnees_recues_a_transmettre={
            "__xva" : {
                 /*  */
                "les_bases_du_projet" : bases_du_projet ,
                "chi_id_requete" : chi_id_requete ,
                "requete" : tt373_1[__xva][0]
            }
        };
        /*
          =====================================================================================================
          construction du js de la requête
        */
        let obj0=await this._rev_de_sql_vers_js1.compiler_requete_vers_js1( [] , 0 , donnees_recues_a_transmettre );
        if(obj0.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
          réécriture de la requête sql sur disque
        */
        let chemin_fichier='';
        if(donnees_retournees._CA_ === 2){
            chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + chi_id_requete + '.js';
        }else{
            chemin_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + chi_id_requete + '.js';
        }
        let contenu=obj0.source_js.replace( "\r\n" , "\n" );
        contenu=contenu.replace( "\r" , "" , contenu );
        contenu=contenu.replace( "\n" , "\r\n" , contenu );
        try{
            await this.__gi1.file_put_contents( chemin_fichier , contenu );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'ecriture du fichier sql_' + chi_id_requete + '<br /><b>Le répertoire existe-t-il ?</b> [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
          dans l'environnement principal et pour le projet 1, on n'enregistre pas la matrice des sources.
          et on supprime les genérés et rev de la table source
          =====================================================================================================
        */
        await this.concevoir_une_requete1_s.sauvegarder_une_matrice_de_requete( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_requete , __db1 );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      met une liste de js dans la table tbl_cron
    */
    async compiler_cette_liste_de_sql_en_cron2( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* this.__gi1.ma_trace1('donnees_recues=',donnees_recues); */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_405={"T0_chi_id_requete" : '(' + donnees_recues.__xva.liste_des_chi_id_requete.join( ',' ) + ')'};
        /* this.__gi1.ma_trace1( 'criteres_select_405=' , criteres_select_405 ); */
        let tt405=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` IN :T0_chi_id_requete 
        ORDER BY `T0`.`chi_id_requete` DESC  
        LIMIT 1000 OFFSET 0 
        ;
        */
        /*sql_inclure_fin*/ 405 , criteres_select_405 , donnees_retournees , __db1 );
        if(tt405.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1( 'tt405.__xva=' , tt405.__xva ); */
        for(let i in tt405.__xva){
            let donnees_sql={
                "donnees" : [{
                            "chp_resume_travail" : 'compilation  ' + tt405.__xva[i]['T0.chp_type_requete'] + ' sql_' + tt405.__xva[i]['T0.chi_id_requete'] + ' ' + tt405.__xva[i]['T0.chp_table_reference_requete'] + '' ,
                            "cht_rev_travail" : 'pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(' + tt405.__xva[i]['T0.chi_id_requete'] + ')))))' ,
                            "chx_utilisateur_travail" : donnees_retournees.chi_id_utilisateur ,
                            "cht_utilisateur_travail" : donnees_retournees.chp_nom_de_connexion_utilisateur ,
                            "chp_etat_travail" : 'en_file_d_attente' ,
                            "chx_projet_travail" : donnees_retournees.chi_id_projet ,
                            "chd_dtc_travail" : donnees_retournees.date_heure_serveur
                        }]
            };
            /* this.__gi1.ma_trace1('ici donnees_sql=',donnees_sql); */
            /*  */
            let tt398=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            INSERT INTO b1.`tbl_travaux`(
                `chp_resume_travail` , 
                `cht_rev_travail` , 
                `chx_utilisateur_travail` , 
                `chd_dtc_travail` , 
                `chp_etat_travail` , 
                `chx_projet_travail` , 
                `cht_utilisateur_travail`
            ) VALUES (
                :chp_resume_travail , 
                :cht_rev_travail , 
                :chx_utilisateur_travail , 
                :chd_dtc_travail , 
                :chp_etat_travail , 
                :chx_projet_travail , 
                :cht_utilisateur_travail
            );
            */
            /*sql_inclure_fin*/ 398 , donnees_sql , donnees_retournees , __db1 );
            if(tt398[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async enregistrer_une_requete_compile_en_ligne1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let criteres_343={};
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet <= 3){
            criteres_343={
                "c_chi_id_requete" : donnees_recues[__xva]['chi_id_requete'] ,
                "n_cht_sql_requete" : donnees_recues[__xva]['cht_sql_requete'] ,
                "n_chp_table_reference_requete" : donnees_recues[__xva]['chp_table_reference_requete']
            };
        }else{
            criteres_343={
                "c_chi_id_requete" : donnees_recues[__xva]['chi_id_requete'] ,
                "n_cht_sql_requete" : donnees_recues[__xva]['cht_sql_requete'] ,
                "n_chp_table_reference_requete" : donnees_recues[__xva]['chp_table_reference_requete']
            };
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt343=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_requetes SET 
           `cht_sql_requete` = :n_cht_sql_requete , 
           `chp_table_reference_requete` = :n_chp_table_reference_requete
        WHERE `chi_id_requete` = :c_chi_id_requete ;
        */
        /*sql_inclure_fin*/ 343 , criteres_343 , donnees_retournees , __db1 );
        if(tt343[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( tt343['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_fichier='';
        if(donnees_retournees._CA_ === 2){
            chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + donnees_recues[__xva]['chi_id_requete'] + '.js';
        }else{
            chemin_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + donnees_recues[__xva]['chi_id_requete'] + '.js';
        }
        let contenu=donnees_recues[__xva]['source_js'].replace( "\r\n" , "\n" );
        contenu=contenu.replace( "\r" , "" , contenu );
        contenu=contenu.replace( "\n" , "\r\n" , contenu );
        try{
            await this.__gi1.file_put_contents( chemin_fichier , contenu );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'ecriture du fichier sql_' + donnees_recues[__xva]['chi_id_requete'] + '<br /><b>Le répertoire existe-t-il ?</b> [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(!(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1)){
            await this.concevoir_une_requete1_s.sauvegarder_une_matrice_de_requete( mat , d , donnees_recues , donnees_retournees , options_generales , donnees_recues[__xva]['chi_id_requete'] , __db1 );
        }
        await this.concevoir_une_requete1_s.construire_le_js_contenant_la_liste_des_requetes( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recuperer_requete_et_base_pour_compilation_en_ligne( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete === 0){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_373_1={"T0_chi_id_requete" : chi_id_requete};
        let tt373_1=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 373 , criteres_373_1 , donnees_retournees , __db1 );
        if(tt373_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur de sélection de la requête ancienne [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1(tt373_1[__xva]); */
        donnees_retournees[__xva]['les_bases_du_projet']={};
        let criteres_select_171={};
        let tt171=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 171 , criteres_select_171 , donnees_retournees , __db1 );
        if(tt171[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt373_1[__xst] === __xsu && tt171[__xst] === __xsu){
            let bases_du_projet={};
            for(let k1 in tt171[__xva]){
                bases_du_projet[tt171[__xva][k1]['T0.chi_id_basedd']]=tt171[__xva][k1];
            }
            donnees_retournees[__xva]['requete']=tt373_1[__xva][0];
            donnees_retournees[__xva]['les_bases_du_projet']=bases_du_projet;
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async vv_requetes_nouveau_numero1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_requete_ancienne=0;
        let chi_id_requete_nouvelle=0;
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(form['vv_nouveau_numero_de_requete'] && this.__gi1.est_num( form['vv_nouveau_numero_de_requete'] )){
            chi_id_requete_nouvelle=parseInt( form['vv_nouveau_numero_de_requete'] , 10 );
        }else{
            this.__gi1.__xsi[__xer].push( ' le nouveau numéro doit être numérique [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['vv_ancien_numero_de_requete'] && this.__gi1.est_num( form['vv_ancien_numero_de_requete'] )){
            chi_id_requete_ancienne=parseInt( form['vv_ancien_numero_de_requete'] , 10 );
        }else{
            this.__gi1.__xsi[__xer].push( 'l\'ancien numéro doit être numérique [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          Récupération de la requête actuelle.
        */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_373_1={"T0_chi_id_requete" : chi_id_requete_ancienne};
        let tt373_1=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 373 , criteres_373_1 , donnees_retournees , __db1 );
        if(tt373_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur de sélection de la requête ancienne [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          Essai de récupération de la nouvelle requête.
        */
        let criteres_373_2={"T0_chi_id_requete" : chi_id_requete_nouvelle};
        let tt373_2=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 373 , criteres_373_2 , donnees_retournees , __db1 );
        if(tt373_2[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur de sélection de la requête nouvelle [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt373_2[__xva].length >= 1){
            /*
              c'est une erreur si la requête existe déjà en base.
            */
            this.__gi1.__xsi[__xer].push( 'la requête portant le numéro ' + chi_id_requete_nouvelle + ' existe déjà [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_fichier_ancien='';
        if(donnees_retournees._CA_ === 2){
            chemin_fichier_ancien='../rev_2/__fichiers_generes/__sqls/sql_' + chi_id_requete_ancienne + '.js';
        }else{
            chemin_fichier_ancien='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + chi_id_requete_ancienne + '.js';
        }
        let contenu='';
        /*
          Le contenu de la requête est 
          soit sur disque, 
          soit en base de données pour les environnements autres que un.
        */
        try{
            contenu=await this.__gi1.file_get_contents( chemin_fichier_ancien );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur de lecture du fichier sur disque [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        const repl0=new RegExp( 'sql_' + chi_id_requete_ancienne , 'g' );
        let nouveau_js=contenu.replace( repl0 , 'sql_' + chi_id_requete_nouvelle );
        /*
          Mise à jour de la base de données.
        */
        let criteres_351={};
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1){
            criteres_351={"c_chi_id_requete" : chi_id_requete_ancienne ,"n_chi_id_requete" : chi_id_requete_nouvelle};
        }else{
            criteres_351={"c_chi_id_requete" : chi_id_requete_ancienne ,"n_chi_id_requete" : chi_id_requete_nouvelle};
        }
        let tt351=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_requetes SET 
           `chi_id_requete` = :n_chi_id_requete
        WHERE `chi_id_requete` = :c_chi_id_requete ;
        */
        /*sql_inclure_fin*/ 351 , criteres_351 , donnees_retournees , __db1 );
        if(tt351[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( tt351['__xme'] + 'la renumérotation a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          Suppression de l'ancien fichier et création du nouveau fichier.
        */
        this.__gi1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_fichier_ancien , donnees_retournees );
        let chemin_fichier_nouveau='';
        if(donnees_retournees._CA_ === 2){
            chemin_fichier_nouveau='../rev_2/__fichiers_generes/__sqls/sql_' + chi_id_requete_nouvelle + '.js';
        }else{
            chemin_fichier_nouveau='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + chi_id_requete_nouvelle + '.js';
        }
        try{
            this.__gi1.file_put_contents( chemin_fichier_nouveau , nouveau_js );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'l\'écriture du fichier a échoué [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_recues['chi_id_requete']=chi_id_requete_nouvelle;
        await this.concevoir_une_requete1_s.sauvegarder_une_matrice_de_requete( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_requete_nouvelle , __db1 );
        await this.concevoir_une_requete1_s.construire_le_js_contenant_la_liste_des_requetes( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        donnees_recues['chi_id_requete']=__xva_avant['T0.chi_id_requete'];
        let ret1=await this.concevoir_une_requete1_s.sauvegarder_une_matrice_de_requete( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant['T0.chi_id_requete'] , __db1 );
        if(ret1.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        await this.concevoir_une_requete1_s.construire_le_js_contenant_la_liste_des_requetes( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
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
    async actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        let chemin_fichier='';
        if(donnees_retournees._CA_ === 2){
            chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + __xva_avant['T0.chi_id_requete'] + '.js';
        }else{
            chemin_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + __xva_avant['T0.chi_id_requete'] + '.js';
        }
        let obj2=await this.__gi1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_fichier , donnees_retournees );
        if((await this.__gi1.is_file( chemin_fichier ))){
            if(obj2.__xst !== __xsu){
                this.__gi1.__xsi[__xer].push( 'la suppression du fichier n\'a pas fonctionné [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        await this.concevoir_une_requete1_s.construire_le_js_contenant_la_liste_des_requetes( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
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
    */
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_requete']=form['chi_id_requete'] === null ? ( null ) : ( parseInt( form['chi_id_requete'] , 10 ) );
        form['che_est_souche_requete']=form['che_est_souche_requete'] === null ? ( null ) : ( parseInt( form['che_est_souche_requete'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['che_est_souche_requete'] === null || form['che_est_souche_requete'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "requête souche ?" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_type_requete'] === null || form['chp_type_requete'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "type de requête" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        /* sélection du champ à modifier */
        let criteres_select_354={"T0_chi_id_requete" : form['chi_id_requete']};
        let tt354=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 354 , criteres_select_354 , donnees_retournees , __db1 );
        if(tt354[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt354[__xst] === __xsu && tt354[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt354[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let donnees_sql={
                "c_chi_id_requete" : form['chi_id_requete'] ,
                "n_che_est_souche_requete" : form['che_est_souche_requete'] ,
                "n_chp_type_requete" : form['chp_type_requete'] ,
                "n_cht_rev_requete" : form['cht_rev_requete'] === '' ? ( null ) : ( form['cht_rev_requete'] ) ,
                "n_cht_sql_requete" : form['cht_sql_requete'] === '' ? ( null ) : ( form['cht_sql_requete'] ) ,
                "n_cht_commentaire_requete" : form['cht_commentaire_requete'] === '' ? ( null ) : ( form['cht_commentaire_requete'] ) ,
                "n_chp_table_reference_requete" : form['chp_table_reference_requete'] === '' ? ( null ) : ( form['chp_table_reference_requete'] )
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt355=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_requetes SET 
               `che_est_souche_requete` = :n_che_est_souche_requete , 
               `chp_type_requete` = :n_chp_type_requete , 
               `cht_rev_requete` = :n_cht_rev_requete , 
               `cht_sql_requete` = :n_cht_sql_requete , 
               `cht_commentaire_requete` = :n_cht_commentaire_requete , 
               `chp_table_reference_requete` = :n_chp_table_reference_requete
            WHERE `chi_id_requete` = :c_chi_id_requete ;
            */
            /*sql_inclure_fin*/ 355 , donnees_sql , donnees_retournees , __db1 );
            if(tt355[__xst] !== __xsu){
                if(tt355['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt355['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt354[__xva][0] , __db1 );
            if(__taam[__xst] !== __xsu){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'erreur après modification [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true){
                if(form['__mat_liste_si_ok']){
                    let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                    let d=1;
                    await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales );
                }
                return({"__xst" : __xsu});
            }
            let tt354_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
            `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/ 354 , criteres_select_354 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt354_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt354;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_requete=null , __db1=null ){
        if(chi_id_requete === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_requete'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_requete=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_requete(' + chi_id_requete + ')))))';
        }
        if(chi_id_requete === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt354=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 354 , {"T0_chi_id_requete" : chi_id_requete} , donnees_retournees , __db1 );
        if(tt354[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt354[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt354;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_requete=null ){
        if(chi_id_requete === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_requete'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_requete=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_354={
             /*  */
            "T0_chi_id_requete" : chi_id_requete
        };
        let tt354=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 354 , criteres_354 , donnees_retournees , __db1 );
        if(tt354[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt354;
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
        let criteres_354={
             /*  */
            "T0_chi_id_requete" : form['chi_id_requete']
        };
        let tt354=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 354 , criteres_354 , donnees_retournees , __db1 );
        if(tt354[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt354[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_352={
             /*  */
            "chi_id_requete" : form['chi_id_requete']
        };
        let tt352=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_requetes
        WHERE `chi_id_requete` = :chi_id_requete ;
        */
        /*sql_inclure_fin*/ 352 , criteres_352 , donnees_retournees , __db1 );
        /*  */
        if(tt352[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt354[__xva][0] , __db1 );
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
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_354={"T0_chi_id_requete" : chi_id_requete};
        let tt354=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 354 , critere_354 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt354;
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
        form['che_est_souche_requete']=form['che_est_souche_requete'] === null || form['che_est_souche_requete'] === '' || form['che_est_souche_requete'] === undefined ? ( 0 ) : ( parseInt( form['che_est_souche_requete'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_type_requete'] === null || form['chp_type_requete'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "type de requête" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_souche_requete'] === null || form['che_est_souche_requete'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "requête souche ?" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_type_requete" : form['chp_type_requete'] ,
                        "cht_rev_requete" : form['cht_rev_requete'] === '' ? ( null ) : ( form['cht_rev_requete'] ) ,
                        "cht_sql_requete" : form['cht_sql_requete'] === '' ? ( null ) : ( form['cht_sql_requete'] ) ,
                        "cht_commentaire_requete" : form['cht_commentaire_requete'] === '' ? ( null ) : ( form['cht_commentaire_requete'] ) ,
                        "che_est_souche_requete" : form['che_est_souche_requete'] ,
                        "chp_table_reference_requete" : form['chp_table_reference_requete'] === '' ? ( null ) : ( form['chp_table_reference_requete'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt390=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_requetes`(
            `chp_type_requete` , 
            `cht_rev_requete` , 
            `cht_sql_requete` , 
            `cht_commentaire_requete` , 
            `che_est_souche_requete` , 
            `chp_table_reference_requete`
        ) VALUES (
            :chp_type_requete , 
            :cht_rev_requete , 
            :cht_sql_requete , 
            :cht_commentaire_requete , 
            :che_est_souche_requete , 
            :chp_table_reference_requete
        );
        */
        /*sql_inclure_fin*/ 390 , donnees_sql , donnees_retournees , __db1 );
        if(tt390[__xst] === __xsu){
            if(tt390['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt390['nouvel_id'] , form , __db1 );
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
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt390['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt390['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
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
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__gi1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres350={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres350[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt350=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
        `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE (   `T0`.`chi_id_requete` = :T0_chi_id_requete
           AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete
           AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
           AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
           AND `T0`.`cht_commentaire_requete` LIKE :T0_cht_commentaire_requete
           AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2
           AND `T0`.`chp_table_reference_requete` LIKE :T0_chp_table_reference_requete) 
        ORDER BY `T0`.`chi_id_requete` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 350 , criteres350 , donnees_retournees , __db1 );
        if(tt350.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt350[__xst] === __xsu && tt350[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres350['debut']=__debut;
            let tt350=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`chp_table_reference_requete`
             FROM b1.tbl_requetes T0
            WHERE (   `T0`.`chi_id_requete` = :T0_chi_id_requete
               AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete
               AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
               AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
               AND `T0`.`cht_commentaire_requete` LIKE :T0_cht_commentaire_requete
               AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2
               AND `T0`.`chp_table_reference_requete` LIKE :T0_chp_table_reference_requete) 
            ORDER BY `T0`.`chi_id_requete` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 350 , criteres350 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt350;
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
    moi='requetes1';
    __gi1=null;
    fonction_liste='liste1';
    concevoir_une_requete1_s=null;
    _rev_de_sql_vers_js1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.concevoir_une_requete1_s=new x_ecran_concevoir_une_requete1_s( __gi1 );
        this._rev_de_sql_vers_js1=new _rev_de_sql_vers_js1( __gi1 );
        this.__gi1=__gi1;
        let options_pour_le_parseur_si_on_l_utilise={
            "dialect" : /* obligatoire */"sqlite" ,
            "includeSpaces" : /* Adds spaces/tabs */true ,
            "includeNewlines" : /* Adds newlines */true ,
            "includeComments" : /* Adds comments */true ,
            "includeRange" : /* Adds source code location data */true
        };
        /* const cst=sqlParser.parse( "SELECT * FROM users WHERE id = 1;" , options_pour_le_parseur_si_on_l_utilise );        console.log( cst ); */
    }
    /*
      =============================================================================================================
    */
}
export{requetes1 as requetes1};