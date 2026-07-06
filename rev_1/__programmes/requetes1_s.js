const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
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
    async exporter_requete_de_1_vers_3( mat , d ){
        let chi_id_requete=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete === 0){
            return({"__xst" : __xer ,"__xme" : 'le paramètre chi_id_requete est à zéro ' + this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        /*
          =====================================================================================================
          récupération de la requête dans 1
        */
        let criteres_1373_1={"T0_chi_id_requete" : chi_id_requete};
        let tt1373_1=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1373 , criteres_1373_1 , this.__ig1.donnees_retournees , __db1 );
        if(tt1373_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1373_1.__xme});
        }
        this.__ig1.ma_trace1( "tt1373_1" , tt1373_1 );
        let __db3=await this.__ig1.ouvrir_bdd( 3 );
        /*
          =====================================================================================================
          essai de lecture de la requête dans 3
        */
        let criteres_1373_3={"T0_chi_id_requete" : chi_id_requete};
        let tt1373_3=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1373 , criteres_1373_3 , this.__ig1.donnees_retournees , __db3 );
        if(tt1373_3.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1373_3.__xme});
        }
        this.__ig1.ma_trace1( "tt1373_3" , tt1373_3 );
        if(tt1373_3.__xva.length === 0){
            /*
              c'est un insert
            */
            let criteres_1423={
                "donnees" : [{
                            "chi_id_requete" : tt1373_1.__xva[0]['T0.chi_id_requete'] ,
                            "chp_type_requete" : tt1373_1.__xva[0]['T0.chp_type_requete'] ,
                            "cht_rev_requete" : tt1373_1.__xva[0]['T0.cht_rev_requete'] ,
                            "cht_sql_requete" : tt1373_1.__xva[0]['T0.cht_sql_requete'] ,
                            "cht_commentaire_requete" : tt1373_1.__xva[0]['T0.cht_commentaire_requete'] ,
                            "che_est_souche_requete" : tt1373_1.__xva[0]['T0.che_est_souche_requete'] ,
                            "chp_table_reference_requete" : tt1373_1.__xva[0]['T0.chp_table_reference_requete']
                        }]
            };
            /*  */
            let tt1423=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            INSERT INTO b1.`tbl_requetes`(
                `chi_id_requete` , 
                `cht_commentaire_requete` , 
                `chp_type_requete` , 
                `cht_rev_requete` , 
                `cht_sql_requete` , 
                `che_est_souche_requete` , 
                `chp_table_reference_requete`
            ) VALUES (
                :chi_id_requete , 
                :cht_commentaire_requete , 
                :chp_type_requete , 
                :cht_rev_requete , 
                :cht_sql_requete , 
                :che_est_souche_requete , 
                :chp_table_reference_requete
            );
            */
            /*sql_inclure_fin*/ 1423 , criteres_1423 , this.__ig1.donnees_retournees , __db3 );
            if(tt1423.__xst === __xsu && tt1423['changements'] === 1){
                return({"__xst" : __xsu});
            }
        }else{
            /*
              c'est un update
            */
            let criteres_1355={
                 /*  */
                "c_chi_id_requete" : chi_id_requete ,
                "n_che_est_souche_requete" : tt1373_1.__xva[0]['T0.che_est_souche_requete'] ,
                "n_chp_type_requete" : tt1373_1.__xva[0]['T0.chp_type_requete'] ,
                "n_cht_rev_requete" : tt1373_1.__xva[0]['T0.cht_rev_requete'] ,
                "n_cht_sql_requete" : tt1373_1.__xva[0]['T0.cht_sql_requete'] ,
                "n_cht_commentaire_requete" : tt1373_1.__xva[0]['T0.cht_commentaire_requete'] ,
                "n_chp_table_reference_requete" : tt1373_1.__xva[0]['T0.chp_table_reference_requete']
            };
            /* =========================== mise à jour effective ======================== */
            let tt1355=await this.__ig1.sql_iii(
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
            /*sql_inclure_fin*/ 1355 , criteres_1355 , this.__ig1.donnees_retournees , __db3 );
            if(tt1355.__xst === __xsu && tt1355.changements === 1){
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async importer_requete_de_1( mat , d ){
        let chi_id_requete=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete === 0){
            return({"__xst" : __xer ,"__xme" : 'le paramètre chi_id_requete est à zéro ' + this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        /*
          =====================================================================================================
          récupération de la requête
        */
        let criteres_1373_1={"T0_chi_id_requete" : chi_id_requete};
        let tt1373_1=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1373 , criteres_1373_1 , this.__ig1.donnees_retournees , __db1 );
        if(tt1373_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1373_1.__xme});
        }
        /*
          =====================================================================================================
          on met à jour la base 3
        */
        let __db3=await this.__ig1.ouvrir_bdd( 3 );
        let criteres_1355={
             /*  */
            "c_chi_id_requete" : chi_id_requete ,
            "n_che_est_souche_requete" : tt1373_1.__xva[0]['T0.che_est_souche_requete'] ,
            "n_chp_type_requete" : tt1373_1.__xva[0]['T0.chp_type_requete'] ,
            "n_cht_rev_requete" : tt1373_1.__xva[0]['T0.cht_rev_requete'] === '' ? ( null ) : ( tt1373_1.__xva[0]['T0.cht_rev_requete'] ) ,
            "n_cht_sql_requete" : tt1373_1.__xva[0]['T0.cht_sql_requete'] === '' ? ( null ) : ( tt1373_1.__xva[0]['T0.cht_sql_requete'] ) ,
            "n_cht_commentaire_requete" : tt1373_1.__xva[0]['T0.cht_commentaire_requete'] === '' ? ( null ) : ( tt1373_1.__xva[0]['T0.cht_commentaire_requete'] ) ,
            "n_chp_table_reference_requete" : tt1373_1.__xva[0]['T0.chp_table_reference_requete'] === '' ?
              ( 
                null
              ) : ( 
                tt1373_1.__xva[0]['T0.chp_table_reference_requete']
              )
        };
        /* =========================== mise à jour effective ======================== */
        let tt1355=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 1355 , criteres_1355 , this.__ig1.donnees_retournees , __db3 );
        if(tt1355.__xst !== __xsu || tt1355.changements !== 1){
            return({"__xst" : __xer ,"__xme" : tt1355.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async compiler_requete_par_id( mat , d , __db1=null ){
        /* ,  this.__ig1.donnees_recues ,  this.__ig1.donnees_retournees ,  this.__ig1.options_generales ]{ */
        /* this.__ig1.ma_trace1('d='+d+',mat',mat); */
        let chi_id_requete=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete === 0){
            return({"__xst" : __xer ,"__xme" : 'le paramètre chi_id_requete est à zéro ' + this.__ig1.nl2()});
        }
        /* this.__ig1.ma_trace1( 'chi_id_requete=' + chi_id_requete ); */
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        /*
          =====================================================================================================
          récupération de la requête
        */
        let criteres_1373_1={"T0_chi_id_requete" : chi_id_requete};
        let tt1373_1=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1373 , criteres_1373_1 , this.__ig1.donnees_retournees , __db1 );
        if(tt1373_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1373.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['les_bases_du_projet']={};
        let criteres_select_1302={};
        let tt1302=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 1302 , criteres_select_1302 , this.__ig1.donnees_retournees , __db1 );
        if(tt1302.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1302.__xme});
        }
        let bases_du_projet={};
        for(let k1 in tt1302[__xva]){
            bases_du_projet[tt1302[__xva][k1]['T0.chi_id_basedd']]=tt1302[__xva][k1];
        }
        /*
          =====================================================================================================
          les données à passer au module de construction du js de la requête
        */
        let les_bases_et_la_requete={
            "__xva" : {
                 /*  */
                "les_bases_du_projet" : bases_du_projet ,
                "chi_id_requete" : chi_id_requete ,
                "requete" : tt1373_1[__xva][0]
            }
        };
        /*
          =====================================================================================================
          construction du js de la requête
        */
        let obj0=await this._rev_de_sql_vers_js1.compiler_requete_vers_js1( [] , 0 , les_bases_et_la_requete );
        if(obj0.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        /*
          =====================================================================================================
          réécriture de la requête sql sur disque
        */
        let chemin_fichier='';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + chi_id_requete + '.js';
        }else{
            chemin_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + chi_id_requete + '.js';
        }
        let contenu=obj0.source_js.replace( /\r\n/g , '\n' ).replace( /\r/g , '' ).replace( /\n/g , '\r\n' );
        try{
            await this.__ig1.file_put_contents( chemin_fichier , contenu );
        }catch(e){
            return({
                    "__xst" : __xer ,
                    "__xme" : 'ecriture du fichier sql_' + chi_id_requete + '<br /><b>Le répertoire existe-t-il ?</b> [' + this.__ig1.nl2()
                });
        }
        /*
          =====================================================================================================
          dans l'environnement principal et pour le projet 1, on n'enregistre pas la matrice des sources.
          et on supprime les genérés et rev de la table source
          =====================================================================================================
        */
        await this.concevoir_une_requete1_s.sauvegarder_une_matrice_de_requete( mat , d , chi_id_requete , __db1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      met une liste de js dans la table tbl_cron
    */
    async compiler_cette_liste_de_sql_en_cron2( mat , d ){
        /* this.__ig1.ma_trace1('this.__ig1.donnees_recues=',this.__ig1.donnees_recues); */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1405={"T0_chi_id_requete" : '(' + this.__ig1.donnees_recues.__xva.liste_des_chi_id_requete.join( ',' ) + ')'};
        /* this.__ig1.ma_trace1( 'criteres_select_1405=' , criteres_select_1405 ); */
        let tt1405=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` IN :T0_chi_id_requete 
        ORDER BY `T0`.`chi_id_requete` DESC  
        LIMIT 1000 OFFSET 0 
        ;
        */
        /*sql_inclure_fin*/ 1405 , criteres_select_1405 , this.__ig1.donnees_retournees , __db1 );
        if(tt1405.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1405.__xme});
        }
        /* this.__ig1.ma_trace1( 'tt1405.__xva=' , tt1405.__xva ); */
        for(let i in tt1405.__xva){
            let donnees_sql={
                "donnees" : [{
                            "chp_resume_travail" : 'compilation  ' + tt1405.__xva[i]['T0.chp_type_requete'] + ' sql_' + tt1405.__xva[i]['T0.chi_id_requete'] + ' ' + tt1405.__xva[i]['T0.chp_table_reference_requete'] + '' ,
                            "cht_rev_travail" : 'pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(' + tt1405.__xva[i]['T0.chi_id_requete'] + ')))))' ,
                            "chx_utilisateur_travail" : this.__ig1.donnees_retournees.chi_id_utilisateur ,
                            "cht_utilisateur_travail" : this.__ig1.donnees_retournees.chp_nom_de_connexion_utilisateur ,
                            "chp_etat_travail" : 'en_file_d_attente' ,
                            "chx_projet_travail" : this.__ig1.donnees_retournees.chi_id_projet ,
                            "chd_dtc_travail" : this.__ig1.donnees_retournees.date_heure_serveur
                        }]
            };
            /* this.__ig1.ma_trace1('ici donnees_sql=',donnees_sql); */
            /*  */
            let tt1398=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            INSERT INTO b1.`tbl_travaux`(
                `chp_resume_travail` , 
                `cht_rev_travail` , 
                `chx_utilisateur_travail` , 
                `chd_dtc_travail` , 
                `chp_etat_travail` , 
                `cht_utilisateur_travail` , 
                `chx_projet_travail`
            ) VALUES (
                :chp_resume_travail , 
                :cht_rev_travail , 
                :chx_utilisateur_travail , 
                :chd_dtc_travail , 
                :chp_etat_travail , 
                :cht_utilisateur_travail , 
                chi_id_projet
            );
            */
            /*sql_inclure_fin*/ 1398 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
            if(tt1398.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt1398.__xme});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async enregistrer_une_requete_compile_en_ligne1( mat , d ){
        let criteres_1343={};
        if(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet <= 3){
            criteres_1343={
                "c_chi_id_requete" : this.__ig1.donnees_recues[__xva]['chi_id_requete'] ,
                "n_cht_sql_requete" : this.__ig1.donnees_recues[__xva]['cht_sql_requete'] ,
                "n_chp_table_reference_requete" : this.__ig1.donnees_recues[__xva]['chp_table_reference_requete']
            };
        }else{
            criteres_1343={
                "c_chi_id_requete" : this.__ig1.donnees_recues[__xva]['chi_id_requete'] ,
                "n_cht_sql_requete" : this.__ig1.donnees_recues[__xva]['cht_sql_requete'] ,
                "n_chp_table_reference_requete" : this.__ig1.donnees_recues[__xva]['chp_table_reference_requete']
            };
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tt1343=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_requetes SET 
           `cht_sql_requete` = :n_cht_sql_requete , 
           `chp_table_reference_requete` = :n_chp_table_reference_requete
        WHERE `chi_id_requete` = :c_chi_id_requete ;
        */
        /*sql_inclure_fin*/ 1343 , criteres_1343 , this.__ig1.donnees_retournees , __db1 );
        if(tt1343.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1343['__xme'] + '\nl\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let chemin_fichier='';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + this.__ig1.donnees_recues[__xva]['chi_id_requete'] + '.js';
        }else{
            chemin_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + this.__ig1.donnees_recues[__xva]['chi_id_requete'] + '.js';
        }
        let contenu=this.__ig1.donnees_recues[__xva]['source_js'].replace( /\r\n/g , '\n' ).replace( /\r/g , '' ).replace( /\n/g , '\r\n' );
        try{
            await this.__ig1.file_put_contents( chemin_fichier , contenu );
        }catch(e){
            return({
                    "__xst" : __xer ,
                    "__xme" : 'ecriture du fichier sql_' + this.__ig1.donnees_recues[__xva]['chi_id_requete'] + '<br /><b>Le répertoire existe-t-il ?</b> [' + this.__ig1.nl2()
                });
        }
        if(!(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet === 1)){
            await this.concevoir_une_requete1_s.sauvegarder_une_matrice_de_requete( mat , d , this.__ig1.donnees_recues[__xva]['chi_id_requete'] , __db1 );
        }
        await this.concevoir_une_requete1_s.construire_le_js_contenant_la_liste_des_requetes( mat , d , __db1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recuperer_requete_et_base_pour_compilation_en_ligne( mat , d ){
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete === 0){
            return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1373_1={"T0_chi_id_requete" : chi_id_requete};
        let tt1373_1=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1373 , criteres_1373_1 , this.__ig1.donnees_retournees , __db1 );
        if(tt1373_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1373_1.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['les_bases_du_projet']={};
        let criteres_select_1302={};
        let tt1302=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 1302 , criteres_select_1302 , this.__ig1.donnees_retournees , __db1 );
        if(tt1302.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1302.__xme});
        }
        let bases_du_projet={};
        for(let k1 in tt1302[__xva]){
            bases_du_projet[tt1302[__xva][k1]['T0.chi_id_basedd']]=tt1302[__xva][k1];
        }
        this.__ig1.donnees_retournees[__xva]['requete']=tt1373_1[__xva][0];
        this.__ig1.donnees_retournees[__xva]['les_bases_du_projet']=bases_du_projet;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async vv_requetes_nouveau_numero1( mat , d ){
        let chi_id_requete_ancienne=0;
        let chi_id_requete_nouvelle=0;
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(form['vv_nouveau_numero_de_requete'] && this.__ig1.est_num( form['vv_nouveau_numero_de_requete'] )){
            chi_id_requete_nouvelle=parseInt( form['vv_nouveau_numero_de_requete'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : ' le nouveau numéro doit être numérique [' + this.__ig1.nl2() + ']'});
        }
        if(form['vv_ancien_numero_de_requete'] && this.__ig1.est_num( form['vv_ancien_numero_de_requete'] )){
            chi_id_requete_ancienne=parseInt( form['vv_ancien_numero_de_requete'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : 'l\'ancien numéro doit être numérique [' + this.__ig1.nl2() + ']'});
        }
        /*
          Récupération de la requête actuelle.
        */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1373_1={"T0_chi_id_requete" : chi_id_requete_ancienne};
        let tt1373_1=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1373 , criteres_1373_1 , this.__ig1.donnees_retournees , __db1 );
        if(tt1373_1.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'Erreur de sélection de la requête ancienne [' + this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : tt1373_1.__xme});
        }
        /*
          Essai de récupération de la nouvelle requête.
        */
        let criteres_1373_2={"T0_chi_id_requete" : chi_id_requete_nouvelle};
        let tt1373_2=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1373 , criteres_1373_2 , this.__ig1.donnees_retournees , __db1 );
        if(tt1373_2.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'Erreur de sélection de la requête nouvelle [' + this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : tt1373_2.__xme});
        }
        if(tt1373_2[__xva].length >= 1){
            /*
              c'est une erreur si la requête existe déjà en base.
            */
            return({"__xst" : __xer ,"__xme" : 'la requête portant le numéro ' + chi_id_requete_nouvelle + ' existe déjà [' + this.__ig1.nl2()});
        }
        let chemin_fichier_ancien='';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier_ancien='../rev_2/__fichiers_generes/__sqls/sql_' + chi_id_requete_ancienne + '.js';
        }else{
            chemin_fichier_ancien='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + chi_id_requete_ancienne + '.js';
        }
        let contenu='';
        /*
          Le contenu de la requête est 
          soit sur disque, 
          soit en base de données pour les environnements autres que un.
        */
        try{
            contenu=await this.__ig1.file_get_contents( chemin_fichier_ancien );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : 'erreur de lecture du fichier sur disque [' + this.__ig1.nl2()});
        }
        const repl0=new RegExp( 'sql_' + chi_id_requete_ancienne , 'g' );
        let nouveau_js=contenu.replace( repl0 , 'sql_' + chi_id_requete_nouvelle );
        /*
          Mise à jour de la base de données.
        */
        let criteres_1351={};
        if(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet === 1){
            criteres_1351={"c_chi_id_requete" : chi_id_requete_ancienne ,"n_chi_id_requete" : chi_id_requete_nouvelle};
        }else{
            criteres_1351={"c_chi_id_requete" : chi_id_requete_ancienne ,"n_chi_id_requete" : chi_id_requete_nouvelle};
        }
        let tt1351=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_requetes SET 
           `chi_id_requete` = :n_chi_id_requete
        WHERE `chi_id_requete` = :c_chi_id_requete ;
        */
        /*sql_inclure_fin*/ 1351 , criteres_1351 , this.__ig1.donnees_retournees , __db1 );
        if(tt1351.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1351.__xme});
        }
        /*
          Suppression de l'ancien fichier et création du nouveau fichier.
        */
        this.__ig1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_fichier_ancien , this.__ig1.donnees_retournees );
        let chemin_fichier_nouveau='';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier_nouveau='../rev_2/__fichiers_generes/__sqls/sql_' + chi_id_requete_nouvelle + '.js';
        }else{
            chemin_fichier_nouveau='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + chi_id_requete_nouvelle + '.js';
        }
        try{
            this.__ig1.file_put_contents( chemin_fichier_nouveau , nouveau_js );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : 'l\'écriture du fichier a échoué [' + this.__ig1.nl2( e ) + ']'});
        }
        this.__ig1.donnees_recues['chi_id_requete']=chi_id_requete_nouvelle;
        await this.concevoir_une_requete1_s.sauvegarder_une_matrice_de_requete( mat , d , chi_id_requete_nouvelle , __db1 );
        await this.concevoir_une_requete1_s.construire_le_js_contenant_la_liste_des_requetes( mat , d , __db1 );
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
        this.__ig1.donnees_recues['chi_id_requete']=__xva_avant['T0.chi_id_requete'];
        let ret1=await this.concevoir_une_requete1_s.sauvegarder_une_matrice_de_requete( mat , d , __xva_avant['T0.chi_id_requete'] , __db1 );
        if(ret1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ret1.__xme});
        }
        await this.concevoir_une_requete1_s.construire_le_js_contenant_la_liste_des_requetes( mat , d , __db1 );
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
        let chemin_fichier='';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier='../rev_2/__fichiers_generes/__sqls/sql_' + __xva_avant['T0.chi_id_requete'] + '.js';
        }else{
            chemin_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__sqls/sql_' + __xva_avant['T0.chi_id_requete'] + '.js';
        }
        let obj2=await this.__ig1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_fichier , this.__ig1.donnees_retournees );
        if((await this.__ig1.is_file( chemin_fichier ))){
            if(obj2.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'la suppression du fichier n\'a pas fonctionné [' + this.__ig1.nl2()});
            }
        }
        await this.concevoir_une_requete1_s.construire_le_js_contenant_la_liste_des_requetes( mat , d , __db1 );
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
    */
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /*
          conversion des données numériques update serveur début
          =====================================================================================================
        */
        form['chi_id_requete']=form['chi_id_requete'] === null ? ( null ) : ( parseInt( form['chi_id_requete'] , 10 ) );
        if(isNaN( form['chi_id_requete'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_requete" doit être numérique'});
        }
        form['che_est_souche_requete']=form['che_est_souche_requete'] === null ? ( null ) : ( parseInt( form['che_est_souche_requete'] , 10 ) );
        if(isNaN( form['che_est_souche_requete'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est souche" doit être numérique'});
        }
        /*
          =====================================================================================================
          conversion des données numériques update serveur fin
        */
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* sélection du champ à modifier */
        let criteres_select_1354={"T0_chi_id_requete" : form['chi_id_requete']};
        let tt1354=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1354 , criteres_select_1354 , this.__ig1.donnees_retournees , __db1 );
        if(tt1354.__xst !== __xsu || tt1354.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1354 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1354[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1355={
             /*  */
            "c_chi_id_requete" : form['chi_id_requete'] ,
            "n_che_est_souche_requete" : form['che_est_souche_requete'] ,
            "n_chp_type_requete" : form['chp_type_requete'] ,
            "n_cht_rev_requete" : form['cht_rev_requete'] === '' ? ( null ) : ( form['cht_rev_requete'] ) ,
            "n_cht_sql_requete" : form['cht_sql_requete'] === '' ? ( null ) : ( form['cht_sql_requete'] ) ,
            "n_cht_commentaire_requete" : form['cht_commentaire_requete'] === '' ? ( null ) : ( form['cht_commentaire_requete'] ) ,
            "n_chp_table_reference_requete" : form['chp_table_reference_requete'] === '' ? ( null ) : ( form['chp_table_reference_requete'] )
        };
        /* =========================== mise à jour effective ======================== */
        let tt1355=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 1355 , criteres_1355 , this.__ig1.donnees_retournees , __db1 );
        if(tt1355.__xst !== __xsu || tt1355.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1355.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1354[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt1354_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1354 , criteres_select_1354 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1354_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_requete=null , __db1=null ){
        if(chi_id_requete === null){
            const l01=mat.length;
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
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_requete(' + chi_id_requete + ')))))';
        }
        if(chi_id_requete === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1354=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1354 , {"T0_chi_id_requete" : chi_id_requete} , this.__ig1.donnees_retournees , __db1 );
        if(tt1354.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1354.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1354[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1354;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_requete=null ){
        if(chi_id_requete === null){
            const l01=mat.length;
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1354={
             /*  */
            "T0_chi_id_requete" : chi_id_requete
        };
        let tt1354=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1354 , criteres_1354 , this.__ig1.donnees_retournees , __db1 );
        if(tt1354.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1354.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1354;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_requete=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1354={"T0_chi_id_requete" : chi_id_requete};
        let tt1354=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1354 , critere_1354 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1354;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1354={
             /*  */
            "T0_chi_id_requete" : form['chi_id_requete']
        };
        let tt1354=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1354 , criteres_1354 , this.__ig1.donnees_retournees , __db1 );
        if(tt1354.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1354.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1354[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1352={
             /*  */
            "chi_id_requete" : form['chi_id_requete']
        };
        let tt1352=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_requetes
        WHERE `chi_id_requete` = :chi_id_requete ;
        */
        /*sql_inclure_fin*/ 1352 , criteres_1352 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1352.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1352.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1354[__xva][0] , __db1 );
        if(__aavc.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : __aavc.__xme});
        }
        /*  */
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
        let chi_id_requete=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let liste_des_sources_utilisant_cette_requete={};
        let critere_1411={"T0_chp_valeur_rev" : chi_id_requete};
        let tt1411=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chx_source_rev` , `T0`.`chp_parent_rev`
         FROM b1.tbl_revs T0
        WHERE (`T0`.`chp_provenance_rev` = 'source'
           AND `T0`.`chp_valeur_rev` = :T0_chp_valeur_rev
           AND `T0`.`chp_type_rev` = 'c')
        ;
        */
        /*sql_inclure_fin*/ 1411 , critere_1411 , this.__ig1.donnees_retournees , __db1 );
        if(tt1411.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1411.__xme});
        }
        if(tt1411[__xva].length > 0){
            let liste_des_chx_source_rev='';
            let liste_des_chp_parent_rev_de_id_requete='';
            for(let i in tt1411[__xva]){
                liste_des_chx_source_rev+=',' + tt1411[__xva][i]['T0.chx_source_rev'];
                liste_des_chp_parent_rev_de_id_requete+=',' + tt1411[__xva][i]['T0.chp_parent_rev'];
            }
            liste_des_chx_source_rev='(' + liste_des_chx_source_rev.substr( 1 ) + ')';
            liste_des_chp_parent_rev_de_id_requete='(' + liste_des_chp_parent_rev_de_id_requete.substr( 1 ) + ')';
            if(liste_des_chx_source_rev !== ''){
                /*
                  recherche des parents de ces "p"
                */
                let critere_1412={"T0_chx_source_rev" : liste_des_chx_source_rev ,"T0_chp_id_rev" : liste_des_chp_parent_rev_de_id_requete};
                let tt1412=await this.__ig1.sql_iii(
                /*sql_inclure_deb*/ /*#
                SELECT 
                `T0`.`chp_parent_rev`
                 FROM b1.tbl_revs T0
                WHERE (`T0`.`chp_provenance_rev` = 'source'
                   AND `T0`.`chp_valeur_rev` = 'p'
                   AND `T0`.`chp_type_rev` = 'f'
                   AND `T0`.`chx_source_rev` IN :T0_chx_source_rev
                   AND `T0`.`chp_id_rev` IN :T0_chp_id_rev)
                ;
                */
                /*sql_inclure_fin*/ 1412 , critere_1412 , this.__ig1.donnees_retournees , __db1 );
                if(tt1412.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : tt1412.__xme});
                }
                let liste_des_parents_des_p_chp_parent_rev='';
                for(let i in tt1412[__xva]){
                    liste_des_parents_des_p_chp_parent_rev+=',' + tt1412[__xva][i]['T0.chp_parent_rev'];
                }
                if(liste_des_parents_des_p_chp_parent_rev !== ''){
                    liste_des_parents_des_p_chp_parent_rev='(' + liste_des_parents_des_p_chp_parent_rev.substr( 1 ) + ')';
                    let critere_1413={"T0_chx_source_rev" : liste_des_chx_source_rev ,"T0_chp_parent_rev" : liste_des_parents_des_p_chp_parent_rev};
                    let tt1413=await this.__ig1.sql_iii(
                    /*sql_inclure_deb*/ /*#
                    SELECT 
                    `T0`.`chp_id_rev`
                     FROM b1.tbl_revs T0
                    WHERE (`T0`.`chp_provenance_rev` = 'source'
                       AND `T0`.`chp_valeur_rev` = 'nomf'
                       AND `T0`.`chp_type_rev` = 'f'
                       AND `T0`.`chx_source_rev` IN :T0_chx_source_rev
                       AND `T0`.`chp_parent_rev` IN :T0_chp_parent_rev)
                    ;
                    */
                    /*sql_inclure_fin*/ 1413 , critere_1413 , this.__ig1.donnees_retournees , __db1 );
                    if(tt1413.__xst !== __xsu){
                        return({"__xst" : __xer ,"__xme" : tt1413.__xme});
                    }
                    /* this.__ig1.ma_trace1('tt1413[__xva]=',tt1413[__xva]); */
                    let liste_des_nomf_chp_id_rev='';
                    for(let i in tt1413[__xva]){
                        liste_des_nomf_chp_id_rev+=',' + tt1413[__xva][i]['T0.chp_id_rev'];
                    }
                    if(liste_des_nomf_chp_id_rev !== ''){
                        liste_des_nomf_chp_id_rev='(' + liste_des_nomf_chp_id_rev.substr( 1 ) + ')';
                        /* this.__ig1.ma_trace1('liste_des_nomf_chp_id_rev='+liste_des_nomf_chp_id_rev); */
                        let critere_1414={"T0_chx_source_rev" : liste_des_chx_source_rev ,"T0_chp_parent_rev" : liste_des_nomf_chp_id_rev};
                        let tt1414=await this.__ig1.sql_iii(
                        /*sql_inclure_deb*/ /*#
                        SELECT 
                        `T0`.`chp_id_rev` , `T0`.`chx_source_rev`
                         FROM b1.tbl_revs T0
                        WHERE (`T0`.`chp_provenance_rev` = 'source'
                           AND `T0`.`chp_valeur_rev` = 'sql_iii'
                           AND `T0`.`chp_type_rev` = 'c'
                           AND `T0`.`chx_source_rev` IN :T0_chx_source_rev
                           AND `T0`.`chp_parent_rev` IN :T0_chp_parent_rev)
                        ;
                        */
                        /*sql_inclure_fin*/ 1414 , critere_1414 , this.__ig1.donnees_retournees , __db1 );
                        if(tt1414.__xst !== __xsu){
                            return({"__xst" : __xer ,"__xme" : tt1414.__xme});
                        }
                        /* this.__ig1.ma_trace1('tt1414[__xva]=',tt1414[__xva]); */
                        for(let i in tt1414[__xva]){
                            if(!liste_des_sources_utilisant_cette_requete.hasOwnProperty( tt1414[__xva][i]['T0.chx_source_rev'] )){
                                liste_des_sources_utilisant_cette_requete[tt1414[__xva][i]['T0.chx_source_rev']]=1;
                            }else{
                                liste_des_sources_utilisant_cette_requete[tt1414[__xva][i]['T0.chx_source_rev']]+=1;
                            }
                        }
                    }
                }
            }
        }
        let la_requete_est_utilisee_dans_un_source=false;
        for(let i in liste_des_sources_utilisant_cette_requete){
            la_requete_est_utilisee_dans_un_source=true;
            this.__ig1.donnees_retournees.__xsi[__xal].push( 'id_du source = ' + i + ' , ' + liste_des_sources_utilisant_cette_requete[i] + ' fois' );
        }
        if(la_requete_est_utilisee_dans_un_source === true){
            return({"__xst" : __xer ,"__xme" : 'la requête ' + chi_id_requete + ' est utilisée dans des sources'});
        }
        let critere_1354={"T0_chi_id_requete" : chi_id_requete};
        let tt1354=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
        `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
         FROM b1.tbl_requetes T0
        WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
        ;
        */
        /*sql_inclure_fin*/ 1354 , critere_1354 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1354;
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
        /* conversion des données numériques insert serveur début */
        form['che_est_souche_requete']=form['che_est_souche_requete'] === null || form['che_est_souche_requete'] === '' || form['che_est_souche_requete'] === undefined ? ( 0 ) : ( parseInt( form['che_est_souche_requete'] , 10 ) );
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1390={
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
        let tt1390=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 1390 , criteres_1390 , this.__ig1.donnees_retournees , __db1 );
        if(tt1390.__xst !== __xsu || tt1390['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1390.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1390['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1390['nouvel_id'] , __db1 );
        }
        return({"__xst" : __xsu});
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
        let criteres_1350={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1350[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1350[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1350=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 1350 , criteres_1350 , this.__ig1.donnees_retournees , __db1 );
        if(tt1350.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1350.__xme});
        }
        if(tt1350.__xst === __xsu && tt1350.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1350['debut']=__debut;
            tt1350=await this.__ig1.sql_iii(
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
            /*sql_inclure_fin*/ 1350 , criteres_1350 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1350;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi='requetes1';
    __ig1=null;
    concevoir_une_requete1_s=null;
    _rev_de_sql_vers_js1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.concevoir_une_requete1_s=new x_ecran_concevoir_une_requete1_s( __ig1 );
        this._rev_de_sql_vers_js1=new _rev_de_sql_vers_js1( __ig1 );
        this.__ig1=__ig1;
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