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
  Je n'aime pas importer un module externe mais pour l'instant, ça ira car d'un autre
  coté, acorn est browserifié dans l'interface client
  Méthode recommandée par microsoft copilot
*/
import  * as acorn from "https://esm.sh/acorn@8";
/*  */
import {w_ast_js_vers_rev1} from './w_ast_js_vers_rev1_.js';
import {w_rev_vers_js1} from './w_rev_vers_js1_.js';
/*
  =====================================================================================================================
*/
class sources1{
    /*
      =============================================================================================================
    */
    async exporter_dans_base_de_prod1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_116={"T0_chi_id_source" : chi_id_source};
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1('tt116[__xva]=',tt116[__xva]); */
        let sql0=`
            UPDATE tbl_sources SET 
                chi_id_source = ` + chi_id_source + ` , 
                chx_dossier_id_source = ` + tt116[__xva][0]['T0.chx_dossier_id_source'] + ` , 
                chp_nom_source = ` + this.__gi1.__fnt1.sq1( tt116[__xva][0]['T0.chp_nom_source'] ) + ` ,  
                cht_commentaire_source = ` + this.__gi1.__fnt1.sq1( tt116[__xva][0]['T0.cht_commentaire_source'] ) + ` ,  
                che_binaire_source = ` + tt116[__xva][0]['T0.che_binaire_source'] + ` ,  
                che_contient_version_source = ` + tt116[__xva][0]['T0.che_contient_version_source'] + ` ,  
                che_autorisation_globale_source = ` + tt116[__xva][0]['T0.che_autorisation_globale_source'] + `
            WHERE chi_id_source = ` + tt116[__xva][0]['T0.chi_id_source'] + ` ;
                
            INSERT OR IGNORE INTO tbl_sources( 
                \`chi_id_source\` , 
                \`chx_dossier_id_source\` , 
                \`chp_nom_source\` , 
                \`cht_commentaire_source\` , 
                \`che_binaire_source\` , 
                \`che_contient_version_source\` , 
                \`che_autorisation_globale_source\` 
            ) values(
                ` + tt116[__xva][0]['T0.chi_id_source'] + ` , 
                ` + tt116[__xva][0]['T0.chx_dossier_id_source'] + ` , 
                ` + this.__gi1.__fnt1.sq1( tt116[__xva][0]['T0.chp_nom_source'] ) + ` , 
                ` + this.__gi1.__fnt1.sq1( tt116[__xva][0]['T0.cht_commentaire_source'] ) + ` ,
                ` + tt116[__xva][0]['T0.che_binaire_source'] + ` , 
                ` + tt116[__xva][0]['T0.che_contient_version_source'] + ` , 
                ` + tt116[__xva][0]['T0.che_autorisation_globale_source'] + ` 
            );`;
        /* this.__gi1.ma_trace1('options_generales=',options_generales); */
        let chemin_bdd=(await options_generales.chemin_absolu_projet) + '__bases_de_donnees/bdd_1.sqlite';
        this.__gi1.ma_trace1( 'chemin_bdd=' + chemin_bdd );
        let __db_1=null;
        try{
            __db_1=await this.__gi1.ouvrir_bdd_temp( chemin_bdd , donnees_retournees , options_generales );
        }catch(e){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        try{
            await __db_1.exec( sql0 );
            await __db_1.close();
        }catch(e){
            await __db_1.close();
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer_ce_source_du_disque1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        /*
          this.__gi1.__xsi[__xdv][]='mat =<pre>' . var_export( chi_id_source  , true ) . '</pre>';
        */
        if(chi_id_source > 0){
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let criteres_select_116={"T0_chi_id_source" : chi_id_source};
            let tt116=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
            if(tt116[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            if(tt116[__xva][0]['T0.chx_dossier_id_source'] === null){
                this.__gi1.__xsi[__xer].push( 'le dossier n\'est pas renseigné pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__gi1 );
            let chemin=await o.construire_chemin( tt116[__xva][0]['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
            let chemin_fichier='';
            if(chemin[__xst] === __xsu){
                chemin_fichier=chemin[__xva]['chemin_absolu'] + tt116[__xva][0]['T0.chp_nom_source'];
            }else{
                this.__gi1.__xsi[__xer].push( 'erreur sur la construction du chemin pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            if((await this.__gi1.is_file( chemin_fichier ))){
                let obj2=await this.__gi1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_fichier , donnees_retournees );
                if(obj2.__xst === __xsu){
                    this.__gi1.__xsi[__xif].push( 'le fichier  a été supprimé du disque et sauvegardé  [' + this.__gi1.nl2() + ']' );
                    donnees_retournees.__xst=__xsu;
                    return({"__xst" : __xsu});
                }
            }else{
                this.__gi1.__xsi[__xif].push( 'le fichier est déjà absent du disque  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xsu;
                return({"__xst" : __xsu});
            }
            this.__gi1.__xsi[__xer].push( 'erreur de suppressio de fichier  [' + this.__gi1.nl2() + ']' );
        }else{
            this.__gi1.__xsi[__xer].push( 'erreur de suppressio de fichier  [' + this.__gi1.nl2() + ']' );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async ecrire_ce_source_sur_disque1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source > 0){
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let criteres_select_116={"T0_chi_id_source" : chi_id_source};
            let tt116=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
            if(tt116[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            if(tt116[__xva][0]['T0.chx_dossier_id_source'] === null){
                this.__gi1.__xsi[__xer].push( 'le dossier n\'est pas renseigné pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__gi1 );
            let chemin=await o.construire_chemin( tt116[__xva][0]['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
            let chemin_fichier='';
            if(chemin[__xst] === __xsu){
                chemin_fichier=chemin[__xva]['chemin_absolu'] + tt116[__xva][0]['T0.chp_nom_source'];
            }else{
                this.__gi1.__xsi[__xer].push( 'erreur sur la construction du chemin pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            if(tt116[__xva][0]['T0.cht_genere_source'] === null){
                this.__gi1.__xsi[__xer].push( 'le contenu généré est NULL, Veuillez enregistrer ce source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            try{
                let source_dans_navigateur=tt116[__xva][0]['T0.cht_genere_source'];
                source_dans_navigateur=source_dans_navigateur.replace( /\r\n/g , '\n' );
                source_dans_navigateur=source_dans_navigateur.replace( /\n/g , '\r\n' );
                await this.__gi1.file_put_contents( chemin_fichier , source_dans_navigateur );
                this.__gi1.__xsi[__xif].push( 'le fichier  a été écrit dans le disque ' );
                donnees_retournees.__xst=__xsu;
                return({"__xst" : __xsu});
            }catch(e){
                debugger;
                this.__gi1.__xsi[__xer].push( '0 le source n\'a pu être écrit sur le disque "' + chi_id_source + '" , "' + chemin_fichier + '"  [' + this.__gi1.nl2( e ) + ']' );
                return({"__xst" : __xer});
            }
        }else{
            this.__gi1.__xsi[__xer].push( '1 le source n\'a pu être écrit sur le disque ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async lire_ce_source_du_disque1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source > 0){
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let criteres_select_116={"T0_chi_id_source" : chi_id_source};
            let tt116=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
            if(tt116[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__gi1 );
            let chemin=await o.construire_chemin( tt116[__xva][0]['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
            let chemin_fichier='';
            if(chemin[__xst] === __xsu){
                chemin_fichier=chemin[__xva]['chemin_absolu'] + tt116[__xva][0]['T0.chp_nom_source'];
            }else{
                this.__gi1.__xsi[__xer].push( 'erreur sur la construction du chemin pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            if((await this.__gi1.is_file( chemin_fichier ))){
                try{
                    let contenu=await this.__gi1.file_get_contents( chemin_fichier );
                    donnees_retournees[__xva]['contenu_du_fichier']=contenu;
                    donnees_retournees.__xst=__xsu;
                    return({"__xst" : __xsu});
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'le source n\'a pu être lu du disque "' + chi_id_source + '" , "' + chemin_fichier + '"  [' + this.__gi1.nl2( e ) + ']' );
                    return({"__xst" : __xer});
                }
            }else{
                this.__gi1.__xsi[__xer].push( 'le source n\'a pu être lu du disque ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      met une liste de js dans la table tbl_cron
    */
    async compiler_cette_liste_de_js_en_cron2( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* this.__gi1.ma_trace1('donnees_recues=',donnees_recues); */
        let __dbn=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_402={"T0_chi_id_source" : '(' + donnees_recues.__xva.liste_des_chi_id_source.join( ',' ) + ')'};
        /* this.__gi1.ma_trace1( 'criteres_select_402=' , criteres_select_402 ); */
        let tt402=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`chx_dossier_id_source`
         FROM b1.tbl_sources T0
        WHERE (   `T0`.`chi_id_source` IN :T0_chi_id_source
           AND `T0`.`chp_nom_source` LIKE '%.js'
           AND `T0`.`che_binaire_source` = 0)
        ;
        */
        /*sql_inclure_fin*/ 402 , criteres_select_402 , donnees_retournees , __dbn );
        if(tt402.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1( 'tt402.__xva=' , tt402.__xva ); */
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__gi1 );
        for(let i in tt402.__xva){
            /*
              {
              "T0.chi_id_source": 565,
              "T0.chp_nom_source": "groupes1_c.js",
              "T0.chx_dossier_id_source": 2
              },            
            */
            let chemin=await o.construire_chemin( tt402.__xva[i]['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __dbn );
            if(chemin[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let chemin_fichier=chemin[__xva]['chemin_absolu'] + tt402[__xva][i]['T0.chp_nom_source'];
            let donnees_sql={
                "donnees" : [{
                            "chp_resume_travail" : 'compilation ' + chemin_fichier ,
                            "cht_rev_travail" : 'pm1(m1(n1(sources1),f1(compiler_source_js_par_id(chi_id_source(' + tt402.__xva[i]['T0.chi_id_source'] + ')))))' ,
                            "chx_utilisateur_travail" : donnees_retournees.chi_id_utilisateur ,
                            "cht_utilisateur_travail" : donnees_retournees.chp_nom_de_connexion_utilisateur ,
                            "chp_etat_travail" : 'en_file_d_attente' ,
                            "chx_projet_travail" : donnees_retournees.chi_id_projet ,
                            "chd_dtc_travail" : donnees_retournees.date_heure_serveur
                        }]
            };
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
            /*sql_inclure_fin*/ 398 , donnees_sql , donnees_retournees , __dbn );
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
    async compiler_texte_js_vers_ast( mat , d , donnees_recues , donnees_retournees , options_generales , texte_js ){
        let tableau_des_commentaires_js=[];
        let ast=null;
        let js_moins_commentaires_sql=texte_js;
        let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
        js_moins_commentaires_sql=js_moins_commentaires_sql.replace( regex , '' );
        /* obj=this.#parseur_javascript.parse( js_moins_commentaires_sql , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} ); */
        try{
            ast=acorn.parse( js_moins_commentaires_sql , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'Erreur d\'interprétation du source par acorn [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let commentaires_a_remplacer=['<![CDATA[',']]>','<source_javascript_rev>','</source_javascript_rev>'];
        for( let nn=0 ; nn < commentaires_a_remplacer.length ; nn++ ){
            for( let indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                if(tableau_des_commentaires_js[indc].value.trim() === commentaires_a_remplacer[nn]){
                    tableau_des_commentaires_js.splice( indc , 1 );
                }
            }
        }
        for( let indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
            if(tableau_des_commentaires_js[indc].value.trim() === '' && tableau_des_commentaires_js[indc].type === 'Line'){
                tableau_des_commentaires_js.splice( indc , 1 );
            }
        }
        /* this.__gi1.ma_trace1('ast=',ast); */
        donnees_retournees.__xst=__xsu;
        return({
                "__xst" : __xsu ,
                "__xva" : {
                     /*  */
                    "ast" : ast ,
                    "tableau_des_commentaires_js" : tableau_des_commentaires_js
                }
            });
    }
    /*
      =============================================================================================================
    */
    async compiler_source_js_par_id( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* this.__gi1.ma_trace1('d='+d+',mat',mat); */
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            this.__gi1.__xsi[__xer].push( 'le paramètre chi_id_source est à zéro ' + this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1( 'chi_id_source=' + chi_id_source ); */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        /* this.__gi1.ma_trace1('__db1=',__db1); */
        let criteres_select_116={"T0_chi_id_source" : chi_id_source};
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
        /* this.__gi1.ma_trace1( 'tt116[__xva][0]=' , tt116 ); */
        if(tt116[__xst] !== __xsu || tt116[__xva].length !== 1){
            this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__gi1 );
        let chemin=await o.construire_chemin( tt116[__xva][0]['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
        if(chemin[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_fichier=chemin[__xva]['chemin_absolu'] + tt116[__xva][0]['T0.chp_nom_source'];
        /* this.__gi1.ma_trace1( 'chemin_fichier=' + chemin_fichier ); */
        let contenu_disque='';
        if((await this.__gi1.is_file( chemin_fichier ))){
            try{
                contenu_disque=await this.__gi1.file_get_contents( chemin_fichier );
            }catch(e){
                this.__gi1.__xsi[__xer].push( ' erreur de récupération du contenu du fichier ' + chi_id_source + '[' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }else{
            this.__gi1.__xsi[__xer].push( ' fichier physique ' + tt116[__xva][0]['T0.chp_nom_source'] + ' non trouvé sur disque [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(contenu_disque === ''){
            this.__gi1.__xsi[__xer].push( ' fichier physique ' + tt116[__xva][0]['T0.chp_nom_source'] + ' vide [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
          transformation du texte du js en ast 
        */
        let obj0=await this.compiler_texte_js_vers_ast( mat , d , donnees_recues , donnees_retournees , options_generales , contenu_disque );
        if(obj0.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( ' erreur de compilation de texte js [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
          transformation de l'ast du js en rev 
        */
        let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj0.__xva.ast.body , obj0.__xva.tableau_des_commentaires_js , {} );
        if(obj1.__xst !== __xsu){
            /* this.__gi1.__rev1.empiler _ erreur( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} ); */
            this.__gi1.__xsi[__xer].push( ' erreur de transformation du js en rev ' + chi_id_source + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
          transformation du rev du js en js 
        */
        let obj2=this.#objet_conversion_rev_vers_js.c_rev_vers_js( obj1.__xva , {} );
        if(obj2.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( ' erreur de transformation du rev du js en js ' + chi_id_source + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
          réécriture du source sur disque
        */
        let ret=null;
        try{
            await this.__gi1.file_put_contents( chemin_fichier , obj2.__xva );
        }catch(e){
            this.__gi1.__xsi[__xer].push( ' erreur d\'ecriture du fichier ' + chi_id_source + '[' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
          dans l'environnement principal et pour le projet 1, on n'enregistre pas la matrice des sources.
          et on supprime les genérés et rev de la table source
          =====================================================================================================
        */
        /* this.__gi1.ma_trace1('donnees_retournees._CA_='+donnees_retournees._CA_,'donnees_retournees.chi_id_projet='+donnees_retournees.chi_id_projet); */
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet <= 3){
            let criteres_select_338={
                 /*  */
                "c_chi_id_source" : chi_id_source ,
                "n_cht_genere_source" : '' ,
                "n_cht_rev_source" : ''
            };
            let tt338=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_sources SET 
               `cht_rev_source` = :n_cht_rev_source , 
               `cht_genere_source` = :n_cht_genere_source
            WHERE `chi_id_source` = :c_chi_id_source ;
            */
            /*sql_inclure_fin*/ 338 , criteres_select_338 , donnees_retournees , __db1 );
            if(tt338[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'erreur lors de l\'enregistrement du source   [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }else{
            let criteres_select_338={
                 /*  */
                "c_chi_id_source" : chi_id_source ,
                "n_cht_genere_source" : obj2.__xva ,
                "n_cht_rev_source" : obj1.__xva
            };
            let tt338=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_sources SET 
               `cht_rev_source` = :n_cht_rev_source , 
               `cht_genere_source` = :n_cht_genere_source
            WHERE `chi_id_source` = :c_chi_id_source ;
            */
            /*sql_inclure_fin*/ 338 , criteres_select_338 , donnees_retournees , __db1 );
            if(tt338[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'erreur lors de l\'enregistrement du source   [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        await this.sauvegarder_une_matrice_de_source( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_source , obj2.matriceFonction , __db1 );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sauvegarder_une_matrice_de_source( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_source , matrice_source , __db1 ){
        let criteres_353={
             /*  */
            "chp_provenance_rev" : 'source' ,
            "chx_source_rev" : chi_id_source
        };
        let tt353=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_revs
        WHERE (`chp_provenance_rev` = :chp_provenance_rev
           AND `chx_source_rev` = :chx_source_rev) ;
        */
        /*sql_inclure_fin*/ 353 , criteres_353 , donnees_retournees , __db1 );
        /*  */
        if(tt353[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression des anciennes données de la table rev [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
          dans l'environnement principal et pour le projet 1, on n'enregistre pas la matrice des sources. 
          =====================================================================================================
        */
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1){
            return({"__xst" : __xsu});
        }
        let matrice=[];
        /* this.__gi1.ma_trace1('ici',this.__gi1.__rev1); */
        if(matrice_source === null){
            let obj_matrice=await this.__gi1.__rev1.rev_tcm( donnees_recues[__xva]['rev_du_disque'] );
            if(obj_matrice[__xst] === __xsu){
                matrice=obj_matrice[__xva];
                /* this.__gi1.ma_trace1( 'matrice.length=' + matrice.length ); */
                /* matrice=[]; */
                /* this.__gi1.__xsi[__xal].push( ' la matrice est trop grosse pour être passé en POST :<br />conversion dans le serveur (' + matrice.length + ') [' + this.__gi1.nl2() + ']' ); */
            }else{
                this.__gi1.__xsi[__xal].push( ' erreur de convertion en matrice [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }else{
            matrice=matrice_source;
        }
        const repl0=new RegExp( '¶' + 'LF¶' , 'g' );
        let a_sauvegarder={"donnees" : []};
        let lng=matrice.length;
        for( let i=0 ; i < lng ; i++ ){
            /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev */
            a_sauvegarder.donnees.push( {
                    "chp_provenance_rev" : 'source' ,
                    "chx_source_rev" : chi_id_source ,
                    "chp_id_rev" : matrice[i][0] ,
                    "chp_valeur_rev" : matrice[i][1].replace( repl0 , "\n" ) ,
                    "chp_type_rev" : matrice[i][2] ,
                    "chp_niveau_rev" : matrice[i][3] ,
                    "chp_quotee_rev" : matrice[i][4] ,
                    "chp_pos_premier_rev" : matrice[i][5] ,
                    "chp_pos_dernier_rev" : matrice[i][6] ,
                    "chp_parent_rev" : matrice[i][7] ,
                    "chp_nbr_enfants_rev" : matrice[i][8] ,
                    "chp_num_enfant_rev" : matrice[i][9] ,
                    "chp_profondeur_rev" : matrice[i][10] ,
                    "chp_pos_ouver_parenthese_rev" : matrice[i][11] ,
                    "chp_enfant_suivant_rev" : matrice[i][12] ,
                    "chp_commentaire_rev" : matrice[i][13]
                } );
            if(i > 0 && i% 10000 === 0){
                let tt358=await this.__gi1.sql_iii(
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
                /*sql_inclure_fin*/ 358 , a_sauvegarder , donnees_retournees , __db1 );
                a_sauvegarder.donnees=[];
            }
        }
        if(a_sauvegarder.donnees.length > 0){
            let tt358=await this.__gi1.sql_iii(
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
            /*sql_inclure_fin*/ 358 , a_sauvegarder , donnees_retournees , __db1 );
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      fonction utile seulement dans rev_2
      permet de copier des fichiers de l'environnement 1 vers l'environnement 2 et inversement
    */
    async importer_ou_exporter( mat , d , donnees_recues , donnees_retournees , options_generales , projet_source , projet_destination ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_116={"T0_chi_id_source" : chi_id_source};
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt116[__xva][0]['T0.chx_dossier_id_source'] === null){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__gi1 );
        let chemin=await o.construire_chemin( tt116[__xva][0]['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
        if(chemin[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_fichier_rev_2=chemin[__xva]['chemin_absolu'] + tt116[__xva][0]['T0.chp_nom_source'];
        let chemin_fichier_destin='';
        let chemin_fichier_source='';
        /* this.__gi1.ma_trace1('projet_source='+projet_source); */
        if(projet_source === '../rev_2/'){
            chemin_fichier_source=chemin_fichier_rev_2;
            chemin_fichier_destin=chemin_fichier_rev_2.replace( projet_source , projet_destination );
        }else if(projet_source === '../rev_1/'){
            chemin_fichier_source=chemin_fichier_rev_2.replace( projet_destination , projet_source );
            chemin_fichier_destin=chemin_fichier_rev_2;
        }else{
            this.__gi1.__xsi[__xer].push( 'erreur les projets sources et destination ne peuvent être que rev_1 ou rev_2 [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1('chemin_fichier_source='+chemin_fichier_source,'chemin_fichier_destin='+chemin_fichier_destin); */
        try{
            await Deno.copyFile( chemin_fichier_source , chemin_fichier_destin );
        }catch(e){
            this.__gi1.__xsi[__xer].push( 'erreur copie fichier  de "' + chemin_fichier_source + '" vers "' + chemin_fichier_destin + '" [' + this.__gi1.nl2( e ) + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      fonction utile seulement dans rev_2
      Copie un fichier de l'environnement deux vers l'environnement un.
    */
    async exporter_dans_rev_un( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let obj=await this.importer_ou_exporter( mat , d , donnees_recues , donnees_retournees , options_generales , '../rev_2/' , '../rev_1/' );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'les source n\'a pas pu être transféré de rev_2 vers rev_1  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }else{
            this.__gi1.__xsi[__xif].push( 'le source a été transféré de rev_2 vers rev_1  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
      fonction utile seulement dans rev_2
      Copie un fichier de l'environnement un vers l'environnement deux.
    */
    async importer_de_rev_un( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let destination='../rev_2/';
        if(donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet > 2){
            destination='../rev_' + donnees_retournees.chi_id_projet + '/';
        }
        let obj=await this.importer_ou_exporter( mat , d , donnees_recues , donnees_retournees , options_generales , '../rev_1/' , destination );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'les source n\'a pas pu être transféré de rev_1 vers rev_2  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }else{
            this.__gi1.__xsi[__xif].push( 'le source a été transféré de rev_1 vers rev_2  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    async enregistrer_un_source_compile1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* $this.__gi1.__xsi[__xdv][]='<pre>'.var_export( $donnees_recues , true ).'</pre> [' . __LINE__ . ']'; */
        let pas_de_message_de_succes=donnees_recues['pas_de_message_de_succes']??0;
        let source_compile='';
        let rev_du_disque='';
        if(this.__gi1._CA_ === 1 && donnees_retournees.chi_id_projet <= 3){
            /*
              pas besoin de mettre le source pour le projet 1
            */
            donnees_recues[__xva]['enregistrer_la_matrice']=__xer;
        }else{
            source_compile=donnees_recues[__xva]['source_compile'];
            rev_du_disque=donnees_recues[__xva]['rev_du_disque'];
        }
        let chi_id_source=donnees_recues[__xva]['contenu_bdd']['T0.chi_id_source'];
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_338={
             /*  */
            "c_chi_id_source" : chi_id_source ,
            "n_cht_genere_source" : source_compile ,
            "n_cht_rev_source" : rev_du_disque
        };
        let tt338=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_sources SET 
           `cht_rev_source` = :n_cht_rev_source , 
           `cht_genere_source` = :n_cht_genere_source
        WHERE `chi_id_source` = :c_chi_id_source ;
        */
        /*sql_inclure_fin*/ 338 , criteres_select_338 , donnees_retournees , __db1 );
        if(tt338[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de l\'enregistrement du source   [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source'] === null){
            this.__gi1.__xsi[__xif].push( 'le rev du source a bien été compilé [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xer});
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__gi1 );
        let chemin=await o.construire_chemin( donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
        if(chemin[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_fichier=chemin[__xva]['chemin_absolu'] + donnees_recues[__xva]['contenu_bdd']['T0.chp_nom_source'];
        try{
            await this.__gi1.file_put_contents( chemin_fichier , donnees_recues[__xva]['source_compile'] );
            if(pas_de_message_de_succes === 1){
                this.__gi1.__xsi[__xsu].push( 'le source du disque a bien été compilé et réécrit [' + this.__gi1.nl2() + ']' );
            }
            if(donnees_recues[__xva].hasOwnProperty( 'bouton_compiler' ) && donnees_recues[__xva]['bouton_compiler'] !== ''){
                donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(' + donnees_recues[__xva]['bouton_compiler'] + '),classNameSet(\'hug_bouton yy__xsi_1\')))';
            }
        }catch(e){
            this.__gi1.__xsi[__xal].push( 'le source a bien été enregistré mais n\'a pas pu être écrit sur disque [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          =====================================================================================================
        */
        await this.sauvegarder_une_matrice_de_source( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_source , donnees_recues.__xva.matrice_source , __db1 );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async charger_source_pour_compilation1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_source=0;
        let bouton_compiler='';
        let pas_de_message_de_succes=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'bouton_compiler' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                bouton_compiler=mat[i + 1][1];
            }else if(mat[i][1] === 'pas_de_message_de_succes' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                pas_de_message_de_succes=mat[i + 1][1];
            }
        }
        if(chi_id_source === 0){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_116={"T0_chi_id_source" : chi_id_source};
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let contenu_disque='';
        if(tt116[__xva][0]['T0.chx_dossier_id_source'] !== null){
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__gi1 );
            let chemin=await o.construire_chemin( tt116[__xva][0]['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
            let chemin_fichier='';
            if(chemin[__xst] === __xsu){
                chemin_fichier=chemin[__xva]['chemin_absolu'] + tt116[__xva][0]['T0.chp_nom_source'];
            }else{
                this.__gi1.__xsi[__xer].push( ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            if((await this.__gi1.is_file( chemin_fichier ))){
                try{
                    contenu_disque=await this.__gi1.file_get_contents( chemin_fichier );
                }catch(e){
                    this.__gi1.__xsi[__xer].push( ' erreur de récupération du contenu du fichier ' + chi_id_source + '[' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
            }else{
                this.__gi1.__xsi[__xer].push( ' fichier physique ' + tt116[__xva][0]['T0.chp_nom_source'] + ' non trouvé sur disque [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        donnees_retournees[__xva]['ne_pas_retablir_les_elements_masques']=__xsu;
        donnees_retournees[__xva]['contenu_disque']=contenu_disque;
        donnees_retournees[__xva]['contenu_bdd']=tt116[__xva][0];
        donnees_retournees[__xva]['bouton_compiler']=bouton_compiler;
        donnees_retournees[__xva]['pas_de_message_de_succes']=pas_de_message_de_succes;
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
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
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
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__gi1 );
        let dossier_ancien=await o.construire_chemin( __xva_avant['T0.chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
        if(dossier_ancien[__xst] === __xsu){
            if(!(await this.__gi1.is_dir( dossier_ancien[__xva]['chemin_absolu'] ))){
                /*
                  le dossier de ce source n'existe pas encore donc on ne fait rien
                */
            }else{
                let ancien_chemin=dossier_ancien[__xva]['chemin_absolu'] + __xva_avant['T0.chp_nom_source'];
                if(!(await this.__gi1.is_file( ancien_chemin ))){
                    /*
                      le fichier source n'existe pas encore donc on ne fait rien
                    */
                }else{
                    if(parseInt( form['chx_dossier_id_source'] , 10 ) === __xva_avant['T0.chx_dossier_id_source']){
                        /*
                          si on ne fait que renommer le fichier dans le même dossier
                        */
                        if(form['chp_nom_source'] !== __xva_avant['T0.chp_nom_source']){
                            try{
                                await Deno.rename( ancien_chemin , dossier_ancien[__xva]['chemin_absolu'] + form['chp_nom_source'] );
                            }catch(e){
                                this.__gi1.__xsi[__xer].push( 'erreur lors du renommage du fichier [' + this.__gi1.nl2() + ']' );
                                donnees_retournees.__xst=__xer;
                                return({"__xst" : __xer});
                            }
                        }
                    }else{
                        let dossier_nouveau=await o.construire_chemin( form['chx_dossier_id_source'] , donnees_retournees , options_generales , __db1 );
                        if(dossier_nouveau[__xst] === __xsu){
                            if((await this.__gi1.is_dir( dossier_nouveau[__xva]['chemin_absolu'] ))){
                                let nouveau_chemin=dossier_nouveau[__xva]['chemin_absolu'] + form['chp_nom_source'];
                                try{
                                    await Deno.rename( ancien_chemin , nouveau_chemin );
                                }catch(e){
                                    this.__gi1.__xsi[__xer].push( 'attention, le fichier physique n\'a pas pu être ronommé [' + this.__gi1.nl2() + ']' );
                                    donnees_retournees.__xst=__xer;
                                    return({"__xst" : __xer});
                                }
                            }
                        }
                    }
                }
            }
        }
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
    */
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_source']=form['chi_id_source'] === null ? ( null ) : ( parseInt( form['chi_id_source'] , 10 ) );
        form['che_binaire_source']=form['che_binaire_source'] === null ? ( null ) : ( parseInt( form['che_binaire_source'] , 10 ) );
        form['chx_dossier_id_source']=form['chx_dossier_id_source'] === null ? ( null ) : ( parseInt( form['chx_dossier_id_source'] , 10 ) );
        form['che_contient_version_source']=form['che_contient_version_source'] === null ?
          ( 
            null
          ) : ( 
            parseInt( form['che_contient_version_source'] , 10 )
          );
        form['che_autorisation_globale_source']=form['che_autorisation_globale_source'] === null ?
          ( 
            null
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
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de "nom" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['che_binaire_source'] === null || form['che_binaire_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "binaire" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_dossier_id_source'] === null || form['chx_dossier_id_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "dossier id" doit être renseigné [' + this.__gi1.nl2() + ']' );
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
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        /* sélection du champ à modifier */
        let criteres_select_116={"T0_chi_id_source" : form['chi_id_source']};
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt116[__xst] === __xsu && tt116[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt116[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let donnees_sql={
                "c_chi_id_source" : form['chi_id_source'] ,
                "n_chp_nom_source" : form['chp_nom_source'] ,
                "n_che_binaire_source" : form['che_binaire_source'] ,
                "n_chx_dossier_id_source" : form['chx_dossier_id_source'] ,
                "n_cht_rev_source" : form['cht_rev_source'] === '' ? ( null ) : ( form['cht_rev_source'] ) ,
                "n_cht_genere_source" : form['cht_genere_source'] === '' ? ( null ) : ( form['cht_genere_source'] ) ,
                "n_cht_commentaire_source" : form['cht_commentaire_source'] === '' ? ( null ) : ( form['cht_commentaire_source'] ) ,
                "n_che_contient_version_source" : form['che_contient_version_source'] ,
                "n_che_autorisation_globale_source" : form['che_autorisation_globale_source']
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt163=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_sources SET 
               `chp_nom_source` = :n_chp_nom_source , 
               `che_binaire_source` = :n_che_binaire_source , 
               `chx_dossier_id_source` = :n_chx_dossier_id_source , 
               `cht_rev_source` = :n_cht_rev_source , 
               `cht_genere_source` = :n_cht_genere_source , 
               `cht_commentaire_source` = :n_cht_commentaire_source , 
               `che_contient_version_source` = :n_che_contient_version_source , 
               `che_autorisation_globale_source` = :n_che_autorisation_globale_source
            WHERE `chi_id_source` = :c_chi_id_source ;
            */
            /*sql_inclure_fin*/ 163 , donnees_sql , donnees_retournees , __db1 );
            if(tt163[__xst] !== __xsu){
                if(tt163['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt163['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt116[__xva][0] , __db1 );
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
            let tt116_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/ 116 , criteres_select_116 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt116_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt116;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_source=null , __db1=null ){
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
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_source(' + chi_id_source + ')))))';
        }
        if(chi_id_source === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt116=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 116 , {"T0_chi_id_source" : chi_id_source} , donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt116[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt116;
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
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
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
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
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
        form['chx_dossier_id_source']=form['chx_dossier_id_source'] === null || form['chx_dossier_id_source'] === '' || form['chx_dossier_id_source'] === undefined ? ( null ) : ( parseInt( form['chx_dossier_id_source'] , 10 ) );
        form['che_binaire_source']=form['che_binaire_source'] === null || form['che_binaire_source'] === '' || form['che_binaire_source'] === undefined ? ( 0 ) : ( parseInt( form['che_binaire_source'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chx_dossier_id_source'] === null || form['chx_dossier_id_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "dossier id" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_nom_source'] === null || form['chp_nom_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test=this.__gi1.__fnt1.test_du_nom_technique1( form['chp_nom_source'] , 'nom' );
        if(__test[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de  "nom" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['che_binaire_source'] === null || form['che_binaire_source'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "binaire" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chx_dossier_id_source" : form['chx_dossier_id_source'] ,
                        "chp_nom_source" : form['chp_nom_source'] ,
                        "cht_commentaire_source" : form['cht_commentaire_source'] === '' ? ( null ) : ( form['cht_commentaire_source'] ) ,
                        "cht_rev_source" : form['cht_rev_source'] === '' ? ( null ) : ( form['cht_rev_source'] ) ,
                        "cht_genere_source" : form['cht_genere_source'] === '' ? ( null ) : ( form['cht_genere_source'] ) ,
                        "che_binaire_source" : form['che_binaire_source']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt117=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_sources`(
            `chx_dossier_id_source` , 
            `chp_nom_source` , 
            `cht_commentaire_source` , 
            `cht_rev_source` , 
            `cht_genere_source` , 
            `che_binaire_source`
        ) VALUES (
            :chx_dossier_id_source , 
            :chp_nom_source , 
            :cht_commentaire_source , 
            :cht_rev_source , 
            :cht_genere_source , 
            :che_binaire_source
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
        /*
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
          m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1(m1(n1('+this.moi+'),f1(page_creer1())))
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
        let criteres115={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres115[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt115=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
           AND `T0`.`chi_id_source` = :T0_chi_id_source
           AND `T0`.`chi_id_source` > :T0_chi_id_source2
           AND `T0`.`chi_id_source` <= :T0_chi_id_source3
           AND `T0`.`che_binaire_source` = :T0_che_binaire_source
           AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
           AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
           AND `T0`.`che_contient_version_source` = :T0_che_contient_version_source
           AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source) 
        ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 115 , criteres115 , donnees_retournees , __db1 );
        if(tt115.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt115[__xst] === __xsu && tt115[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres115['debut']=__debut;
            let tt115=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
               AND `T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chi_id_source` > :T0_chi_id_source2
               AND `T0`.`chi_id_source` <= :T0_chi_id_source3
               AND `T0`.`che_binaire_source` = :T0_che_binaire_source
               AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
               AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
               AND `T0`.`che_contient_version_source` = :T0_che_contient_version_source
               AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source) 
            ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 115 , criteres115 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
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
    __js_vers_ast=null;
    #objet_conversion_ast_js_vers_rev=null;
    #objet_conversion_rev_vers_js=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
        /* this.__gi1.ma_trace1( ' constructor de ' + this.moi ); */
        this.#objet_conversion_ast_js_vers_rev=new w_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , this.__gi1 );
        this.#objet_conversion_rev_vers_js=new w_rev_vers_js1( '#objet_conversion_rev_vers_js' , this.__gi1 );
    }
    /*
      =============================================================================================================
    */
}
export{sources1 as sources1};