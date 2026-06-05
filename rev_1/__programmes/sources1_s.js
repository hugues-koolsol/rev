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
    async vv_sources_nouveau_numero1( mat , d ){
        let chi_id_source_ancienne=0;
        let chi_id_source_nouvelle=0;
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(form['vv_nouveau_numero_de_source'] && this.__ig1.est_num( form['vv_nouveau_numero_de_source'] )){
            chi_id_source_nouvelle=parseInt( form['vv_nouveau_numero_de_source'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : ' le nouveau numéro doit être numérique [' + this.__ig1.nl2() + ']'});
        }
        if(form['vv_ancien_numero_de_source'] && this.__ig1.est_num( form['vv_ancien_numero_de_source'] )){
            chi_id_source_ancienne=parseInt( form['vv_ancien_numero_de_source'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : 'l\'ancien numéro doit être numérique [' + this.__ig1.nl2() + ']'});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_415={
             /*  */
            "c_chi_id_source" : chi_id_source_ancienne ,
            "n_chi_id_source" : chi_id_source_nouvelle
        };
        let tt415=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_sources SET 
           `chi_id_source` = :n_chi_id_source
        WHERE `chi_id_source` = :c_chi_id_source ;
        */
        /*sql_inclure_fin*/ 415 , criteres_select_415 , this.__ig1.donnees_retournees , __db1 );
        if(tt415.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt415.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async remplacer_une_chaine_par_une_autre_en_arriere_plan( mat , d ){
        /* this.__ig1.ma_trace1('d='+d+',mat',mat); */
        let chi_id_source=0;
        let vv_chaine_remplacee='';
        let vv_chaine_qui_la_remplace='';
        /* ('__ig1') */
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'vv_chaine_remplacee' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                vv_chaine_remplacee=mat[i + 1][1];
            }else if(mat[i][1] === 'vv_chaine_qui_la_remplace' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                vv_chaine_qui_la_remplace=mat[i + 1][1];
            }
        }
        if(chi_id_source === 0){
            return({"__xst" : __xer ,"__xme" : 'le paramètre chi_id_source est à zéro ' + this.__ig1.nl2()});
        }
        if(vv_chaine_remplacee === ''){
            return({"__xst" : __xer ,"__xme" : 'le paramètre vv_chaine_remplacee est vide ' + this.__ig1.nl2()});
        }
        /* this.__ig1.ma_trace1( 'chi_id_source=' + chi_id_source ); */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* this.__ig1.ma_trace1('__db1=',__db1); */
        let criteres_select_419={"T0_chi_id_source" : chi_id_source};
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
        /* this.__ig1.ma_trace1( 'tt419[__xva][0]=' , tt419 ); */
        if(tt419.__xst !== __xsu || tt419[__xva].length !== 1){
            return({"__xst" : __xer ,"__xme" : tt419.__xme});
        }
        if(tt419[__xva][0]['T0.che_binaire_source'] === 1){
            /* on ne compile pas les binaires */
            return({"__xst" : __xsu});
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__ig1 );
        let chemin=await o.construire_chemin( tt419[__xva][0]['T0.chx_dossier_id_source'] , __db1 );
        if(chemin.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
        }
        let chemin_fichier=chemin[__xva]['chemin_absolu'] + tt419[__xva][0]['T0.chp_nom_source'];
        /* this.__ig1.ma_trace1( 'chemin_fichier=' + chemin_fichier ); */
        let contenu_disque='';
        if((await this.__ig1.is_file( chemin_fichier ))){
            try{
                contenu_disque=await this.__ig1.file_get_contents( chemin_fichier );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : ' erreur de récupération du contenu du fichier ' + chi_id_source + '[' + this.__ig1.nl2( e ) + ']'});
            }
        }else{
            return({
                    "__xst" : __xer ,
                    "__xme" : ' fichier physique ' + tt419[__xva][0]['T0.chp_nom_source'] + ' non trouvé sur disque [' + this.__ig1.nl2() + ']'
                });
        }
        const repl0=new RegExp( vv_chaine_remplacee , 'g' );
        /*
          remplacement de la chaine
        */
        let nouveau_contenu=contenu_disque.replace( repl0 , vv_chaine_qui_la_remplace );
        this.__ig1.ma_trace1( "contenu_disque=" , contenu_disque.substr( 0 , 1000 ) );
        this.__ig1.ma_trace1( "nouveau_contenu=" , nouveau_contenu.substr( 0 , 1000 ) );
        try{
            await this.__ig1.file_put_contents( chemin_fichier , nouveau_contenu );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : ' erreur ecriture du fichier ' + chi_id_source + '[' + this.__ig1.nl2( e ) + ']'});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async exporter_dans_base_de_prod1( mat , d ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_419={"T0_chi_id_source" : chi_id_source};
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
        if(tt419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt419.__xme});
        }
        /* this.__ig1.ma_trace1('tt419[__xva]=',tt419[__xva]); */
        let sql0=`
            UPDATE tbl_sources SET 
                chi_id_source = ` + chi_id_source + ` , 
                chx_dossier_id_source = ` + tt419[__xva][0]['T0.chx_dossier_id_source'] + ` , 
                chp_nom_source = ` + this.__ig1.__fnt1.sq1( tt419[__xva][0]['T0.chp_nom_source'] ) + ` ,  
                cht_commentaire_source = ` + this.__ig1.__fnt1.sq1( tt419[__xva][0]['T0.cht_commentaire_source'] ) + ` ,  
                che_binaire_source = ` + tt419[__xva][0]['T0.che_binaire_source'] + ` ,  
                che_autorisation_globale_source = ` + tt419[__xva][0]['T0.che_autorisation_globale_source'] + ` ,
                che_pour_util_source = ` + tt419[__xva][0]['T0.che_pour_util_source'] + `
            WHERE chi_id_source = ` + tt419[__xva][0]['T0.chi_id_source'] + ` ;
                
            INSERT OR IGNORE INTO tbl_sources( 
                \`chi_id_source\` , 
                \`chx_dossier_id_source\` , 
                \`chp_nom_source\` , 
                \`cht_commentaire_source\` , 
                \`che_binaire_source\` , 
                \`che_autorisation_globale_source\` ,
                \`che_pour_util_source\`
            ) values(
                ` + tt419[__xva][0]['T0.chi_id_source'] + ` , 
                ` + tt419[__xva][0]['T0.chx_dossier_id_source'] + ` , 
                ` + this.__ig1.__fnt1.sq1( tt419[__xva][0]['T0.chp_nom_source'] ) + ` , 
                ` + this.__ig1.__fnt1.sq1( tt419[__xva][0]['T0.cht_commentaire_source'] ) + ` ,
                ` + tt419[__xva][0]['T0.che_binaire_source'] + ` , 
                ` + tt419[__xva][0]['T0.che_autorisation_globale_source'] + ` ,
                ` + tt419[__xva][0]['T0.che_pour_util_source'] + ` 
            );`;
        /* this.__ig1.ma_trace1('this.__ig1.options_generales=',this.__ig1.options_generales); */
        let chemin_bdd=(await this.__ig1.options_generales.chemin_absolu_projet) + '__bases_de_donnees/bdd_1.sqlite';
        this.__ig1.ma_trace1( 'chemin_bdd=' + chemin_bdd );
        let __db_1=null;
        try{
            __db_1=await this.__ig1.ouvrir_bdd_temp( chemin_bdd );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2( e ) + ']'});
        }
        try{
            await __db_1.exec( sql0 );
            await __db_1.close();
        }catch(e){
            await __db_1.close();
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2( e ) + ']'});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer_ce_source_du_disque1( mat , d ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source > 0){
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let criteres_select_419={"T0_chi_id_source" : chi_id_source};
            let tt419=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
            `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
            if(tt419.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt419.__xme});
            }
            if(tt419[__xva][0]['T0.chx_dossier_id_source'] === null){
                return({"__xst" : __xer ,"__xme" : tt419.__xme});
            }
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__ig1 );
            let chemin=await o.construire_chemin( tt419[__xva][0]['T0.chx_dossier_id_source'] , __db1 );
            let chemin_fichier='';
            if(chemin.__xst === __xsu){
                chemin_fichier=chemin[__xva]['chemin_absolu'] + tt419[__xva][0]['T0.chp_nom_source'];
            }else{
                return({"__xst" : __xer ,"__xme" : 'erreur sur la construction du chemin pour le source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'});
            }
            if((await this.__ig1.is_file( chemin_fichier ))){
                let obj2=await this.__ig1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_fichier , this.__ig1.donnees_retournees );
                this.__ig1.ma_trace1( "chemin_fichier=" + chemin_fichier );
                if(obj2.__xst === __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xif].push( 'le fichier  a été supprimé du disque et sauvegardé  [' + this.__ig1.nl2() + ']' );
                    return({"__xst" : __xsu});
                }
            }else{
                this.__ig1.donnees_retournees.__xsi[__xif].push( 'le fichier est déjà absent du disque  [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xsu});
            }
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'erreur de suppression de fichier  [' + this.__ig1.nl2() + ']' );
        }else{
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'erreur de suppression de fichier  [' + this.__ig1.nl2() + ']' );
        }
        return({"__xst" : __xer ,"__xme" : 'erreur de suppression de fichier  [' + this.__ig1.nl2() + ']'});
    }
    /*
      =============================================================================================================
    */
    async ecrire_ce_source_sur_disque1( mat , d ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source > 0){
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let criteres_select_419={"T0_chi_id_source" : chi_id_source};
            let tt419=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
            `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
            if(tt419.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt419.__xme});
            }
            if(tt419[__xva][0]['T0.chx_dossier_id_source'] === null){
                return({"__xst" : __xer ,"__xme" : 'le dossier n\'est pas renseigné pour le source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'});
            }
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__ig1 );
            let chemin=await o.construire_chemin( tt419[__xva][0]['T0.chx_dossier_id_source'] , __db1 );
            let chemin_fichier='';
            if(chemin.__xst === __xsu){
                chemin_fichier=chemin[__xva]['chemin_absolu'] + tt419[__xva][0]['T0.chp_nom_source'];
            }else{
                return({"__xst" : __xer ,"__xme" : 'erreur sur la construction du chemin pour le source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'});
            }
            if(tt419[__xva][0]['T0.cht_genere_source'] === null){
                return({
                        "__xst" : __xer ,
                        "__xme" : 'le contenu généré est NULL, Veuillez enregistrer ce source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'
                    });
            }
            try{
                if(tt419[__xva][0]['T0.che_binaire_source'] === 1){
                    let tableau=tt419[__xva][0]['T0.cht_genere_source'].split( '\n' );
                    /* this.__ig1.ma_trace1('tableau=',tableau); */
                    if(tableau.length > 0){
                        if(tableau[0].substr( 8 , 1 ) === 'h'){
                            let tab=[];
                            for( let i=0 ; i < tableau.length ; i++ ){
                                let elem=tableau[i];
                                if(!elem.substr( 8 , 1 ) === 'h'){
                                    return({"__xst" : __xer ,"__xme" : 'erreur en ligne ' + i + ' le source n\'a pu être écrit sur le disque [' + this.__ig1.nl2( e ) + ']'});
                                }
                                elem=elem.substr( 10 , 49 ).replace( /\-\-/g , ' ' ).replace( / /g , ',' ).replace( /,,/g , '' );
                                /* this.__ig1.ma_trace1('elem="'+elem+'"'); */
                                elem=elem.split( ',' );
                                for( let j=0 ; j < elem.length ; j++ ){
                                    if(elem[j] !== ''){
                                        let k='0x' + elem[j];
                                        let c=parseInt( k , 16 );
                                        tab.push( c );
                                        /* this.__ig1.ma_trace1('k='+k+',c='+c); */
                                    }
                                }
                            }
                            /* this.__ig1.ma_trace1('tab=',tab); */
                            let source_binaire=new Uint8Array( tab );
                            try{
                                await Deno.writeFile( chemin_fichier , source_binaire , {"mode" : 0o777} );
                            }catch(e){
                                this.ma_trace1( 'chemin_fichier=' + chemin_fichier , 'e=' , e );
                                return({"__xst" : __xer ,"__xme" : 'erreur ecriture du fichier binaire  [' + this.__ig1.nl2( e ) + ']'});
                            }
                            return({"__xst" : __xsu});
                        }else{
                            return({"__xst" : __xer ,"__xme" : 'le tableau doit commencer par une adresse et "h"  [' + this.__ig1.nl2( e ) + ']'});
                        }
                    }else{
                        return({"__xst" : __xer ,"__xme" : 'il n\'y a rien à écrire  [' + this.__ig1.nl2( e ) + ']'});
                    }
                }else{
                    let source_dans_navigateur=tt419[__xva][0]['T0.cht_genere_source'];
                    source_dans_navigateur=source_dans_navigateur.replace( /\r\n/g , '\n' );
                    source_dans_navigateur=source_dans_navigateur.replace( /\n/g , '\r\n' );
                    await this.__ig1.file_put_contents( chemin_fichier , source_dans_navigateur );
                    this.__ig1.donnees_retournees.__xsi[__xif].push( 'le fichier  a été écrit dans le disque ' );
                    return({"__xst" : __xsu});
                }
            }catch(e){
                return({
                        "__xst" : __xer ,
                        "__xme" : '0 le source n\'a pu être écrit sur le disque "' + chi_id_source + '" , "' + chemin_fichier + '"  [' + this.__ig1.nl2( e ) + ']'
                    });
            }
        }else{
            return({"__xst" : __xer ,"__xme" : '1 le source n\'a pu être écrit sur le disque ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'});
        }
    }
    /*
      =============================================================================================================
    */
    async lire_ce_source_du_disque1( mat , d ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source > 0){
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let criteres_select_419={"T0_chi_id_source" : chi_id_source};
            let tt419=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
            `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
            if(tt419.__xst !== __xsu){
                return({
                        "__xst" : __xer ,
                        "__xme" : 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'
                    });
            }
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__ig1 );
            let chemin=await o.construire_chemin( tt419[__xva][0]['T0.chx_dossier_id_source'] , __db1 );
            let chemin_fichier='';
            if(chemin.__xst === __xsu){
                chemin_fichier=chemin[__xva]['chemin_absolu'] + tt419[__xva][0]['T0.chp_nom_source'];
            }else{
                return({"__xst" : __xer ,"__xme" : 'erreur sur la construction du chemin pour le source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'});
            }
            if((await this.__ig1.is_file( chemin_fichier ))){
                if(tt419[__xva][0]['T0.che_binaire_source'] === 1){
                    try{
                        const contenu=await Deno.readFile( chemin_fichier );
                        let position=0;
                        let ligne='';
                        let tout='';
                        /* this.__ig1.ma_trace1('chemin_fichier='+chemin_fichier+',contenu=',Array.from(contenu)); */
                        let tab=Array.from( contenu );
                        for( let i=0 ; i < tab.length ; i++ ){
                            if(i > 0 && i% 16 === 0){
                                let le_num=position.toString( 16 );
                                ligne=('0'.repeat( 8 - le_num.length ) + le_num) + 'h ' + ligne;
                                ligne+=' |';
                                for( let j=position ; j < position + 16 ; j++ ){
                                    if(tab[j] >= 33 && tab[j] < 127){
                                        ligne+=String.fromCharCode( tab[j] );
                                    }else{
                                        ligne+=' ';
                                    }
                                    if(j > 0 && (j - 7)% 16 === 0){
                                        ligne+='--';
                                    }
                                }
                                ligne+='|';
                                /*
                                  0         1         2         3         4         5         6 
                                  0123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
                                  00000000h 89 50 4e 47 0d 0a 1a 0a--00 00 00 0d 49 48 44 52  | PNG    --    IHDR|
                                */
                                tout+=ligne + '\n';
                                /* this.__ig1.ma_trace1('ligne='+ligne); */
                                ligne='';
                                position+=16;
                            }
                            let c=tab[i].toString( 16 );
                            if(c.length === 1){
                                c='0' + c;
                            }
                            ligne+=c;
                            if(i > 0 && (i - 7)% 16 === 0){
                                /* on ajoute un espace au milieu des valeurs hexa */
                                ligne+='--';
                            }else{
                                ligne+=' ';
                            }
                            /* this.__ig1.ma_trace1('c='+c); */
                        }
                        if(ligne !== ''){
                            let le_num=position.toString( 16 );
                            ligne=('0'.repeat( 8 - le_num.length ) + le_num) + 'h ' + ligne;
                            if(ligne.length < 59){
                                ligne+=' '.repeat( 59 - ligne.length );
                            }
                            ligne+=' |';
                            for( let j=position ; j < position + 16 && j < tab.length ; j++ ){
                                if(tab[j] >= 33 && tab[j] < 127){
                                    ligne+=String.fromCharCode( tab[j] );
                                }else{
                                    ligne+=' ';
                                }
                                if(j > 0 && (j - 7)% 16 === 0){
                                    ligne+='--';
                                }
                            }
                            ligne+='|';
                            tout+=ligne + '\n';
                        }
                        if(tout.substr( tout.length - 1 , 1 ) === '\n'){
                            tout=tout.substr( 0 , tout.length - 1 );
                        }
                        this.__ig1.donnees_retournees[__xva]['contenu_du_fichier']=tout;
                        return({"__xst" : __xsu});
                    }catch(e){
                        return({
                                "__xst" : __xer ,
                                "__xme" : 'le source n\'a pu être lu du disque "' + chi_id_source + '" , "' + chemin_fichier + '"  [' + this.__ig1.nl2( e ) + ']'
                            });
                    }
                }else{
                    try{
                        let contenu=await this.__ig1.file_get_contents( chemin_fichier );
                        this.__ig1.donnees_retournees[__xva]['contenu_du_fichier']=contenu;
                        return({"__xst" : __xsu});
                    }catch(e){
                        return({
                                "__xst" : __xer ,
                                "__xme" : 'le source n\'a pu être lu du disque "' + chi_id_source + '" , "' + chemin_fichier + '"  [' + this.__ig1.nl2( e ) + ']'
                            });
                    }
                }
            }else{
                return({"__xst" : __xer ,"__xme" : 'le source n\'a pu être lu du disque ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
      met une liste de js dans la table tbl_cron
    */
    async remplacer_une_chaine_par_une_autre( mat , d ){
        /* this.__ig1.ma_trace1('this.__ig1.donnees_recues=',this.__ig1.donnees_recues); */
        let __dbn=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_402={"T0_chi_id_source" : '(' + this.__ig1.donnees_recues.__xva.liste_des_chi_id_source.join( ',' ) + ')'};
        let tt402=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`chx_dossier_id_source` , `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , 
        `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`cht_condition_rev_source` , `T0`.`cht_condition_js_source`
         FROM b1.tbl_sources T0
        WHERE (   `T0`.`chi_id_source` IN :T0_chi_id_source
           AND `T0`.`chp_nom_source` LIKE '%.js'
           AND `T0`.`che_binaire_source` = 0)
        ;
        */
        /*sql_inclure_fin*/ 402 , criteres_select_402 , this.__ig1.donnees_retournees , __dbn );
        if(tt402.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'les données n\'ont pas pu être récupérées  [' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1( 'tt402.__xva=' , tt402.__xva ); */
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__ig1 );
        for(let i in tt402.__xva){
            let chemin=await o.construire_chemin( tt402.__xva[i]['T0.chx_dossier_id_source'] , __dbn );
            if(chemin.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
            }
            let chemin_fichier=chemin[__xva]['chemin_absolu'] + tt402[__xva][i]['T0.chp_nom_source'];
            let rev_du_travail='';
            rev_du_travail+='pm1(m1(n1(' + this.moi + '),f1(remplacer_une_chaine_par_une_autre_en_arriere_plan(';
            rev_du_travail+='chi_id_source(' + tt402.__xva[i]['T0.chi_id_source'] + '),';
            rev_du_travail+='vv_chaine_remplacee(\'' + this.__ig1.donnees_recues.__xva.vv_chaine_remplacee.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            rev_du_travail+='vv_chaine_qui_la_remplace(\'' + this.__ig1.donnees_recues.__xva.vv_chaine_qui_la_remplace.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')))))';
            let donnees_sql={
                "donnees" : [{
                            "chp_resume_travail" : 'compilation ' + chemin_fichier ,
                            "cht_rev_travail" : rev_du_travail ,
                            "chx_utilisateur_travail" : this.__ig1.donnees_retournees.chi_id_utilisateur ,
                            "cht_utilisateur_travail" : this.__ig1.donnees_retournees.chp_nom_de_connexion_utilisateur ,
                            "chp_etat_travail" : 'en_file_d_attente' ,
                            "chx_projet_travail" : this.__ig1.donnees_retournees.chi_id_projet ,
                            "chd_dtc_travail" : this.__ig1.donnees_retournees.date_heure_serveur
                        }]
            };
            /*  */
            let tt398=await this.__ig1.sql_iii(
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
            /*sql_inclure_fin*/ 398 , donnees_sql , this.__ig1.donnees_retournees , __dbn );
            if(tt398.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt398.__xme});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      met une liste de js dans la table tbl_cron
    */
    async compiler_cette_liste_de_js_en_cron2( mat , d ){
        /* this.__ig1.ma_trace1('this.__ig1.donnees_recues=',this.__ig1.donnees_recues); */
        let __dbn=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_402={"T0_chi_id_source" : '(' + this.__ig1.donnees_recues.__xva.liste_des_chi_id_source.join( ',' ) + ')'};
        /* this.__ig1.ma_trace1( 'criteres_select_402=' , criteres_select_402 ); */
        let tt402=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`chx_dossier_id_source` , `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , 
        `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`cht_condition_rev_source` , `T0`.`cht_condition_js_source`
         FROM b1.tbl_sources T0
        WHERE (   `T0`.`chi_id_source` IN :T0_chi_id_source
           AND `T0`.`chp_nom_source` LIKE '%.js'
           AND `T0`.`che_binaire_source` = 0)
        ;
        */
        /*sql_inclure_fin*/ 402 , criteres_select_402 , this.__ig1.donnees_retournees , __dbn );
        if(tt402.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt402.__xme});
        }
        /* this.__ig1.ma_trace1( 'tt402.__xva=' , tt402.__xva ); */
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__ig1 );
        for(let i in tt402.__xva){
            /*
              pour les fragments on ne fait rien
            */
            if(tt402.__xva[i]['T0.chx_dossier_id_source'] !== null){
                let chemin=await o.construire_chemin( tt402.__xva[i]['T0.chx_dossier_id_source'] , __dbn );
                if(chemin.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : chemin.__xme});
                }
                let chemin_fichier=chemin[__xva]['chemin_absolu'] + tt402[__xva][i]['T0.chp_nom_source'];
                let donnees_sql={
                    "donnees" : [{
                                "chp_resume_travail" : 'compilation ' + chemin_fichier ,
                                "cht_rev_travail" : 'pm1(m1(n1(sources1),f1(compiler_source_js_par_id_en_arriere_plan(chi_id_source(' + tt402.__xva[i]['T0.chi_id_source'] + ')))))' ,
                                "chx_utilisateur_travail" : this.__ig1.donnees_retournees.chi_id_utilisateur ,
                                "cht_utilisateur_travail" : this.__ig1.donnees_retournees.chp_nom_de_connexion_utilisateur ,
                                "chp_etat_travail" : 'en_file_d_attente' ,
                                "chx_projet_travail" : this.__ig1.donnees_retournees.chi_id_projet ,
                                "chd_dtc_travail" : this.__ig1.donnees_retournees.date_heure_serveur
                            }]
                };
                /*  */
                let tt398=await this.__ig1.sql_iii(
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
                /*sql_inclure_fin*/ 398 , donnees_sql , this.__ig1.donnees_retournees , __dbn );
                if(tt398.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : tt398.__xme});
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async compiler_texte_js_vers_ast( mat , d , texte_js ){
        let tableau_des_commentaires_js=[];
        let ast=null;
        /* this.__ig1.ma_trace1( "texte_js",( typeof texte_js === 'String' ? ( texte_js.substr(0,50) ) : (texte_js) ) ); */
        let js_moins_commentaires_sql=texte_js;
        let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
        js_moins_commentaires_sql=js_moins_commentaires_sql.replace( regex , '' );
        /* obj=this.#parseur_javascript.parse( js_moins_commentaires_sql , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} ); */
        try{
            ast=acorn.parse( js_moins_commentaires_sql , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : 'Erreur d\'interprétation du source par acorn [' + this.__ig1.nl2( e ) + ']'});
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
        /* this.__ig1.ma_trace1('ast=',ast); */
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
    async compiler_source_js_par_id_en_arriere_plan( mat , d ){
        /* this.__ig1.ma_trace1('d='+d+',mat',mat); */
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            return({"__xst" : __xer ,"__xme" : 'le paramètre chi_id_source est à zéro ' + this.__ig1.nl2()});
        }
        /* this.__ig1.ma_trace1( 'chi_id_source=' + chi_id_source ); */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* this.__ig1.ma_trace1('__db1=',__db1); */
        let criteres_select_419={"T0_chi_id_source" : chi_id_source};
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
        /* this.__ig1.ma_trace1( 'tt419[__xva][0]=' , tt419 ); */
        if(tt419.__xst !== __xsu || tt419[__xva].length !== 1){
            return({"__xst" : __xer ,"__xme" : tt419.__xme});
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__ig1 );
        let chemin=await o.construire_chemin( tt419[__xva][0]['T0.chx_dossier_id_source'] , __db1 );
        if(chemin.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
        }
        let chemin_fichier=chemin[__xva]['chemin_absolu'] + tt419[__xva][0]['T0.chp_nom_source'];
        /* this.__ig1.ma_trace1( 'chemin_fichier=' + chemin_fichier ); */
        let contenu_disque='';
        if((await this.__ig1.is_file( chemin_fichier ))){
            try{
                contenu_disque=await this.__ig1.file_get_contents( chemin_fichier );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : ' erreur de récupération du contenu du fichier ' + chi_id_source + '[' + this.__ig1.nl2( e ) + ']'});
            }
        }else{
            if(this.__ig1.donnees_retournees.chi_id_projet > 2 && tt419[__xva][0]['T0.cht_genere_source'] !== ''){
                contenu_disque=tt419[__xva][0]['T0.cht_genere_source'];
            }else{
                return({
                        "__xst" : __xer ,
                        "__xme" : ' fichier physique ' + tt419[__xva][0]['T0.chp_nom_source'] + ' non trouvé sur disque [' + this.__ig1.nl2() + ']'
                    });
            }
        }
        if(contenu_disque === ''){
            return({"__xst" : __xer ,"__xme" : ' fichier physique ' + tt419[__xva][0]['T0.chp_nom_source'] + ' vide [' + this.__ig1.nl2() + ']'});
        }
        /*
          =====================================================================================================
          transformation du texte du js en ast 
        */
        let obj0=await this.compiler_texte_js_vers_ast( mat , d , contenu_disque );
        if(obj0.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ' erreur de compilation de texte js [' + this.__ig1.nl2() + ']'});
        }
        /*
          =====================================================================================================
          transformation de l'ast du js en rev 
        */
        let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj0.__xva.ast.body , obj0.__xva.tableau_des_commentaires_js , {} );
        if(obj1.__xst !== __xsu){
            /* this.__ig1.__rev1.empiler _ erreur( {"__xst" : __xer ,"__xme" : this.__ig1.__rev1.nl2()} ); */
            return({"__xst" : __xer ,"__xme" : ' erreur de transformation du js en rev ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
        }
        /*
          =====================================================================================================
          transformation du rev du js en js 
        */
        let obj2=this.#objet_conversion_rev_vers_js.c_rev_vers_js( obj1.__xva , {} );
        if(obj2.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ' erreur de transformation du rev du js en js ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
        }
        /*
          =====================================================================================================
          réécriture du source sur disque
        */
        let ret=null;
        try{
            await this.__ig1.file_put_contents( chemin_fichier , obj2.__xva );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : ' erreur d\'ecriture du fichier ' + chi_id_source + '[' + this.__ig1.nl2( e ) + ']'});
        }
        /*
          =====================================================================================================
          dans l'environnement principal et pour le projet 1, on n'enregistre pas la matrice des sources.
          et on supprime les genérés et rev de la table source
          =====================================================================================================
        */
        /* this.__ig1.ma_trace1('this.__ig1.donnees_retournees._CA_='+this.__ig1.donnees_retournees._CA_,'this.__ig1.donnees_retournees.chi_id_projet='+this.__ig1.donnees_retournees.chi_id_projet); */
        if(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet <= 3){
            let criteres_select_338={
                 /*  */
                "c_chi_id_source" : chi_id_source ,
                "n_cht_genere_source" : '' ,
                "n_cht_rev_source" : ''
            };
            let tt338=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_sources SET 
               `cht_rev_source` = :n_cht_rev_source , 
               `cht_genere_source` = :n_cht_genere_source
            WHERE `chi_id_source` = :c_chi_id_source ;
            */
            /*sql_inclure_fin*/ 338 , criteres_select_338 , this.__ig1.donnees_retournees , __db1 );
            if(tt338.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'erreur lors de l\'enregistrement du source   [' + this.__ig1.nl2() + ']'});
            }
        }else{
            let criteres_select_338={
                 /*  */
                "c_chi_id_source" : chi_id_source ,
                "n_cht_genere_source" : obj2.__xva ,
                "n_cht_rev_source" : obj1.__xva
            };
            let tt338=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_sources SET 
               `cht_rev_source` = :n_cht_rev_source , 
               `cht_genere_source` = :n_cht_genere_source
            WHERE `chi_id_source` = :c_chi_id_source ;
            */
            /*sql_inclure_fin*/ 338 , criteres_select_338 , this.__ig1.donnees_retournees , __db1 );
            if(tt338.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt338.__xme});
            }
        }
        if(this.__ig1.donnees_retournees._CA_ === 1
                   && this.__ig1.donnees_retournees.chi_id_projet > 3
               || this.__ig1.donnees_retournees._CA_ === 2
        ){
            let obj1=await this.sauvegarder_une_matrice_de_source( mat , d , chi_id_source , obj2.matriceFonction , __db1 );
            if(obj1.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2() + ']'});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sauvegarder_une_matrice_de_source( mat , d , chi_id_source , matrice_source , __db1 ){
        let criteres_353={
             /*  */
            "chp_provenance_rev" : 'source' ,
            "chx_source_rev" : chi_id_source
        };
        let tt353=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_revs
        WHERE (`chp_provenance_rev` = :chp_provenance_rev
           AND `chx_source_rev` = :chx_source_rev) ;
        */
        /*sql_inclure_fin*/ 353 , criteres_353 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt353.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt353.__xme});
        }
        /*
          =====================================================================================================
          dans l'environnement principal et pour le projet 1, on n'enregistre pas la matrice des sources. 
          =====================================================================================================
        */
        if(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet === 1){
            return({"__xst" : __xsu});
        }
        let matrice=[];
        /* this.__ig1.ma_trace1('ici',this.__ig1.__rev1); */
        if(matrice_source === null){
            let obj_matrice=await this.__ig1.__rev1.rev_tcm( this.__ig1.donnees_recues[__xva]['rev_du_disque'] );
            if(obj_matrice.__xst === __xsu){
                matrice=obj_matrice[__xva];
            }else{
                return({"__xst" : __xer ,"__xme" : ' erreur de convertion en matrice [' + this.__ig1.nl2() + ']'});
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
                let tt358=await this.__ig1.sql_iii(
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
                /*sql_inclure_fin*/ 358 , a_sauvegarder , this.__ig1.donnees_retournees , __db1 );
                if(tt358.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : tt358.__xme});
                }
                a_sauvegarder.donnees=[];
            }
        }
        /* this.__ig1.ma_trace1('a_sauvegarder.donnees.length=',a_sauvegarder.donnees.length); */
        if(a_sauvegarder.donnees.length > 0){
            let tt358=await this.__ig1.sql_iii(
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
            /*sql_inclure_fin*/ 358 , a_sauvegarder , this.__ig1.donnees_retournees , __db1 );
            if(tt358.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt358.__xme});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      utile seulement dans rev_2
      permet de copier des fichiers de l'environnement 1 vers l'environnement 2 et inversement
    */
    async importer_ou_exporter( mat , d , projet_source , projet_cible ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_419={"T0_chi_id_source" : chi_id_source};
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
        if(tt419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt419.__xme});
        }
        if(tt419[__xva][0]['T0.chx_dossier_id_source'] === null){
            return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2() + ']'});
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__ig1 );
        let chemin=await o.construire_chemin( tt419[__xva][0]['T0.chx_dossier_id_source'] , __db1 );
        if(chemin.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
        }
        let chemin_fichier_rev_2=chemin[__xva]['chemin_absolu'] + tt419[__xva][0]['T0.chp_nom_source'];
        let chemin_fichier_destin='';
        let chemin_fichier_source='';
        /* this.__ig1.ma_trace1('projet_source='+projet_source); */
        if(projet_source === '../rev_2/'){
            chemin_fichier_source=chemin_fichier_rev_2;
            chemin_fichier_destin=chemin_fichier_rev_2.replace( projet_source , projet_cible );
        }else if(projet_source === '../rev_1/'){
            chemin_fichier_source=chemin_fichier_rev_2.replace( projet_cible , projet_source );
            chemin_fichier_destin=chemin_fichier_rev_2;
        }else if(projet_source === '../rev_3/'){
            chemin_fichier_source=chemin_fichier_rev_2.replace( projet_cible , projet_source );
            chemin_fichier_destin=chemin_fichier_rev_2;
        }else{
            return({"__xst" : __xer ,"__xme" : 'erreur les projets source et cible ne peuvent être que rev_1 ou rev_2 [' + this.__ig1.nl2() + ']'});
        }
        try{
            await Deno.copyFile( chemin_fichier_source , chemin_fichier_destin );
        }catch(e){
            return({
                    "__xst" : __xer ,
                    "__xme" : 'erreur copie fichier  de "' + chemin_fichier_source + '" vers "' + chemin_fichier_destin + '" [' + this.__ig1.nl2( e ) + ']'
                });
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      utile seulement dans rev_2
      Copie un fichier de l'environnement deux vers l'environnement un.
    */
    async exporter_dans_rev_un( mat , d ){
        let obj=await this.importer_ou_exporter( mat , d , '../rev_2/' , '../rev_1/' );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'les source n\'a pas pu être transféré de rev_2 vers rev_1  [' + this.__ig1.nl2() + ']'});
        }else{
            return({"__xst" : __xsu ,"__xme" : 'le source a été transféré de rev_2 vers rev_1  [' + this.__ig1.nl2() + ']'});
        }
    }
    /*
      =============================================================================================================
      utile seulement dans rev_2
      Copie un fichier de l'environnement un vers l'environnement deux.
    */
    async importer_de_rev_un( mat , d ){
        let origine=1;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'origine' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                origine=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let cible='../rev_2/';
        if(this.__ig1.donnees_retournees._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet > 2){
            cible='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/';
        }
        let obj=await this.importer_ou_exporter( mat , d , '../rev_' + origine + '/' , cible );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'les source n\'a pas pu être transféré de rev_1 vers rev_2  [' + this.__ig1.nl2() + ']'});
        }else{
            this.__ig1.donnees_retournees.__xsi[__xif].push( 'le source a été transféré de rev_1 vers rev_2  [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    async enregistrer_un_source_compile1( mat , d ){
        /* $this.__ig1.donnees_retournees.__xsi[__xdv][]='<pre>'.var_export( $this.__ig1.donnees_recues , true ).'</pre> [' . __LINE__ . ']'; */
        let pas_de_message_de_succes=this.__ig1.donnees_recues['pas_de_message_de_succes']??0;
        let source_compile='';
        let rev_du_disque='';
        if(this.__ig1._CA_ === 1 && this.__ig1.donnees_retournees.chi_id_projet <= 3){
            /*
              pas besoin de mettre le source pour le projet 1
            */
            this.__ig1.donnees_recues[__xva]['enregistrer_la_matrice']=__xer;
        }else{
            source_compile=this.__ig1.donnees_recues[__xva]['source_compile'];
            rev_du_disque=this.__ig1.donnees_recues[__xva]['rev_du_disque'];
        }
        let chi_id_source=this.__ig1.donnees_recues[__xva]['contenu_bdd']['T0.chi_id_source'];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_338={
             /*  */
            "c_chi_id_source" : chi_id_source ,
            "n_cht_genere_source" : source_compile ,
            "n_cht_rev_source" : rev_du_disque
        };
        let tt338=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_sources SET 
           `cht_rev_source` = :n_cht_rev_source , 
           `cht_genere_source` = :n_cht_genere_source
        WHERE `chi_id_source` = :c_chi_id_source ;
        */
        /*sql_inclure_fin*/ 338 , criteres_select_338 , this.__ig1.donnees_retournees , __db1 );
        if(tt338.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'erreur lors de l\'enregistrement du source   [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer ,"__xme" : tt338.__xme});
        }
        if(this.__ig1.donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source'] === null){
            return({"__xst" : __xer ,"__xme" : 'le rev du source a bien été compilé [' + this.__ig1.nl2() + ']'});
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__ig1 );
        let chemin=await o.construire_chemin( this.__ig1.donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source'] , __db1 );
        if(chemin.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
        }
        let chemin_fichier=chemin[__xva]['chemin_absolu'] + this.__ig1.donnees_recues[__xva]['contenu_bdd']['T0.chp_nom_source'];
        try{
            await this.__ig1.file_put_contents( chemin_fichier , this.__ig1.donnees_recues[__xva]['source_compile'] );
            if(pas_de_message_de_succes === 1){
                this.__ig1.donnees_retournees.__xsi[__xsu].push( 'le source du disque a bien été compilé et réécrit [' + this.__ig1.nl2() + ']' );
            }
            if(this.__ig1.donnees_recues[__xva].hasOwnProperty( 'bouton_compiler' )
                   && this.__ig1.donnees_recues[__xva]['bouton_compiler'] !== ''
            ){
                this.__ig1.donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(' + this.__ig1.donnees_recues[__xva]['bouton_compiler'] + '),classNameSet(\'hug_bouton yy__xsi_1\')))';
            }
        }catch(e){
            return({"__xst" : __xer ,"__xme" : 'le source a bien été enregistré mais n\'a pas pu être écrit sur disque [' + this.__ig1.nl2( e ) + ']'});
        }
        /*
          =====================================================================================================
        */
        let obj1=await this.sauvegarder_une_matrice_de_source( mat , d , chi_id_source , this.__ig1.donnees_recues.__xva.matrice_source , __db1 );
        if(obj1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2() + ']'});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async charger_source_pour_compilation1( mat , d ){
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
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_419={"T0_chi_id_source" : chi_id_source};
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
        if(tt419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt419.__xme});
        }
        let contenu_disque='';
        if(tt419[__xva][0]['T0.chx_dossier_id_source'] !== null){
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__ig1 );
            let chemin=await o.construire_chemin( tt419[__xva][0]['T0.chx_dossier_id_source'] , __db1 );
            let chemin_fichier='';
            if(chemin.__xst === __xsu){
                chemin_fichier=chemin[__xva]['chemin_absolu'] + tt419[__xva][0]['T0.chp_nom_source'];
            }else{
                return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin pour le source ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
            }
            if((await this.__ig1.is_file( chemin_fichier ))){
                try{
                    contenu_disque=await this.__ig1.file_get_contents( chemin_fichier );
                }catch(e){
                    return({"__xst" : __xer ,"__xme" : ' erreur de récupération du contenu du fichier ' + chi_id_source + '[' + this.__ig1.nl2( e ) + ']'});
                }
            }else{
                if(this.__ig1.donnees_retournees.chi_id_projet > 2 && tt419[__xva][0]['T0.cht_genere_source'] !== ''){
                    contenu_disque=tt419[__xva][0]['T0.cht_genere_source'];
                }else{
                    return({
                            "__xst" : __xer ,
                            "__xme" : ' fichier physique ' + tt419[__xva][0]['T0.chp_nom_source'] + ' non trouvé sur disque [' + this.__ig1.nl2() + ']'
                        });
                }
            }
        }
        this.__ig1.donnees_retournees[__xva]['ne_pas_retablir_les_elements_masques']=__xsu;
        this.__ig1.donnees_retournees[__xva]['contenu_disque']=contenu_disque;
        this.__ig1.donnees_retournees[__xva]['contenu_bdd']=tt419[__xva][0];
        this.__ig1.donnees_retournees[__xva]['bouton_compiler']=bouton_compiler;
        this.__ig1.donnees_retournees[__xva]['pas_de_message_de_succes']=pas_de_message_de_succes;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_source=null ){
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_419={
             /*  */
            "T0_chi_id_source" : chi_id_source
        };
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_419 , this.__ig1.donnees_retournees , __db1 );
        if(tt419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt419;
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
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__ig1 );
        if(__xva_avant['T0.chx_dossier_id_source'] === null || form['chx_dossier_id_source'] === null){
            return({"__xst" : __xsu});
        }
        let dossier_ancien=await o.construire_chemin( __xva_avant['T0.chx_dossier_id_source'] , __db1 );
        if(dossier_ancien.__xst === __xsu){
            if(!(await this.__ig1.is_dir( dossier_ancien[__xva]['chemin_absolu'] ))){
                /*
                  le dossier de ce source n'existe pas encore donc on ne fait rien
                */
            }else{
                let ancien_chemin=dossier_ancien[__xva]['chemin_absolu'] + __xva_avant['T0.chp_nom_source'];
                if(!(await this.__ig1.is_file( ancien_chemin ))){
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
                                return({"__xst" : __xer ,"__xme" : 'erreur lors du renommage du fichier [' + this.__ig1.nl2() + ']'});
                            }
                        }
                    }else{
                        let dossier_nouveau=await o.construire_chemin( form['chx_dossier_id_source'] , __db1 );
                        if(dossier_nouveau.__xst === __xsu){
                            if((await this.__ig1.is_dir( dossier_nouveau[__xva]['chemin_absolu'] ))){
                                let nouveau_chemin=dossier_nouveau[__xva]['chemin_absolu'] + form['chp_nom_source'];
                                try{
                                    await Deno.rename( ancien_chemin , nouveau_chemin );
                                }catch(e){
                                    return({"__xst" : __xer ,"__xme" : 'attention, le fichier physique n\'a pas pu être ronommé [' + this.__ig1.nl2() + ']'});
                                }
                            }
                        }
                    }
                }
            }
        }
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
    */
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_source']=form['chi_id_source'] === null ? ( null ) : ( parseInt( form['chi_id_source'] , 10 ) );
        form['che_binaire_source']=form['che_binaire_source'] === null ? ( null ) : ( parseInt( form['che_binaire_source'] , 10 ) );
        form['chx_dossier_id_source']=form['chx_dossier_id_source'] === null ? ( null ) : ( parseInt( form['chx_dossier_id_source'] , 10 ) );
        form['che_autorisation_globale_source']=form['che_autorisation_globale_source'] === null ?
          ( 
            null
          ) : ( 
            parseInt( form['che_autorisation_globale_source'] , 10 )
          );
        form['che_pour_util_source']=form['che_pour_util_source'] === null ? ( null ) : ( parseInt( form['che_pour_util_source'] , 10 ) );
        /* conversion des données numériques fin */
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* sélection du champ à modifier */
        let criteres_select_419={"T0_chi_id_source" : form['chi_id_source']};
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
        if(tt419.__xst !== __xsu || tt419[__xva].length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [419 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , form , tt419[__xva][0] , __db1 );
        if(__actions_et_tests_avant_modifier.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __actions_et_tests_avant_modifier.__xme});
        }
        let criteres_308={
            "c_chi_id_source" : form['chi_id_source'] ,
            "n_chp_nom_source" : form['chp_nom_source'] ,
            "n_che_binaire_source" : form['che_binaire_source'] ,
            "n_chx_dossier_id_source" : form['chx_dossier_id_source'] ,
            "n_cht_rev_source" : form['cht_rev_source'] === '' ? ( null ) : ( form['cht_rev_source'] ) ,
            "n_cht_genere_source" : form['cht_genere_source'] === '' ? ( null ) : ( form['cht_genere_source'] ) ,
            "n_cht_commentaire_source" : form['cht_commentaire_source'] === '' ? ( null ) : ( form['cht_commentaire_source'] ) ,
            "n_che_autorisation_globale_source" : form['che_autorisation_globale_source'] ,
            "n_cht_condition_rev_source" : form['cht_condition_rev_source'] === '' ? ( null ) : ( form['cht_condition_rev_source'] ) ,
            "n_cht_condition_js_source" : form['cht_condition_js_source'] === '' ? ( null ) : ( form['cht_condition_js_source'] ) ,
            "n_cht_notification_ko_source" : form['cht_notification_ko_source'] === '' ? ( null ) : ( form['cht_notification_ko_source'] ) ,
            "n_chp_usage_source" : form['chp_usage_source'] ,
            "n_che_pour_util_source" : form['che_pour_util_source']
        };
        /* =========================== mise à jour effective ======================== */
        let tt308=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_sources SET 
           `chp_nom_source` = :n_chp_nom_source , 
           `che_binaire_source` = :n_che_binaire_source , 
           `chx_dossier_id_source` = :n_chx_dossier_id_source , 
           `cht_rev_source` = :n_cht_rev_source , 
           `cht_genere_source` = :n_cht_genere_source , 
           `cht_commentaire_source` = :n_cht_commentaire_source , 
           `che_autorisation_globale_source` = :n_che_autorisation_globale_source , 
           `cht_condition_rev_source` = :n_cht_condition_rev_source , 
           `cht_condition_js_source` = :n_cht_condition_js_source , 
           `cht_notification_ko_source` = :n_cht_notification_ko_source , 
           `chp_usage_source` = :n_chp_usage_source , 
           `che_pour_util_source` = :n_che_pour_util_source
        WHERE `chi_id_source` = :c_chi_id_source ;
        */
        /*sql_inclure_fin*/ 308 , criteres_308 , this.__ig1.donnees_retournees , __db1 );
        if(tt308.__xst !== __xsu || tt308.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt308.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt419[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                let d=1;
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt419_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt419_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_source=null , __db1=null ){
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
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_source(' + chi_id_source + ')))))';
        }
        if(chi_id_source === null){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        /* this.__ig1.ma_trace1("chi_id_source=",chi_id_source); */
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , {"T0_chi_id_source" : chi_id_source} , this.__ig1.donnees_retournees , __db1 );
        if(tt419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt419.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt419[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt419;
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
        let criteres_419={
             /*  */
            "T0_chi_id_source" : form['chi_id_source']
        };
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_419 , this.__ig1.donnees_retournees , __db1 );
        if(tt419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt419.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt419[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_421={
             /*  */
            "chi_id_source" : form['chi_id_source']
        };
        let tt421=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_sources
        WHERE `chi_id_source` = :chi_id_source ;
        */
        /*sql_inclure_fin*/ 421 , criteres_421 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt421.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt421.__xme});
        }
        let aac=await this.actions_apres_supprimer( mat , d , form , tt419[__xva][0] , __db1 );
        if(aac.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : aac.__xme});
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_419={"T0_chi_id_source" : chi_id_source};
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , critere_419 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt419;
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
        form['chx_dossier_id_source']=form['chx_dossier_id_source'] === null || form['chx_dossier_id_source'] === '' || form['chx_dossier_id_source'] === undefined ? ( null ) : ( parseInt( form['chx_dossier_id_source'] , 10 ) );
        form['che_binaire_source']=form['che_binaire_source'] === null || form['che_binaire_source'] === '' || form['che_binaire_source'] === undefined ? ( 0 ) : ( parseInt( form['che_binaire_source'] , 10 ) );
        /* conversion des données numériques fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let donnees_sql={
            "donnees" : [{
                        "chx_dossier_id_source" : form['chx_dossier_id_source'] ,
                        "chp_nom_source" : form['chp_nom_source'] ,
                        "cht_commentaire_source" : form['cht_commentaire_source'] === '' ? ( null ) : ( form['cht_commentaire_source'] ) ,
                        "cht_rev_source" : form['cht_rev_source'] === '' ? ( null ) : ( form['cht_rev_source'] ) ,
                        "cht_genere_source" : form['cht_genere_source'] === '' ? ( null ) : ( form['cht_genere_source'] ) ,
                        "che_binaire_source" : form['che_binaire_source'] ,
                        "chp_usage_source" : form['chp_usage_source']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt420=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_sources`(
            `chx_dossier_id_source` , 
            `chp_nom_source` , 
            `cht_commentaire_source` , 
            `cht_rev_source` , 
            `cht_genere_source` , 
            `che_binaire_source` , 
            `chp_usage_source`
        ) VALUES (
            :chx_dossier_id_source , 
            :chp_nom_source , 
            :cht_commentaire_source , 
            :cht_rev_source , 
            :cht_genere_source , 
            :che_binaire_source , 
            :chp_usage_source
        );
        */
        /*sql_inclure_fin*/ 420 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
        if(tt420.__xst !== __xsu || tt420['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : 'l\'insertion a échoué [' + tt420.__xme + ']'});
        }
        let aac=await this.action_apres_creer( mat , d , tt420['nouvel_id'] , form , __db1 );
        if(aac.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : aac.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt420['nouvel_id'] , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d ){
        /*
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
          m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1(m1(n1('+this.moi+'),f1(page_creer1())))
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
        let criteres418={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres418[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt418=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
           AND `T0`.`chi_id_source` = :T0_chi_id_source
           AND `T0`.`chi_id_source` > :T0_chi_id_source2
           AND `T0`.`chi_id_source` <= :T0_chi_id_source3
           AND `T0`.`che_binaire_source` = :T0_che_binaire_source
           AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
           AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
           AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
           AND `T0`.`che_pour_util_source` = :T0_che_pour_util_source) 
        ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 418 , criteres418 , this.__ig1.donnees_retournees , __db1 );
        if(tt418.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt418.__xme});
        }
        if(tt418.__xst === __xsu && tt418[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres418['debut']=__debut;
            tt418=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`cht_condition_rev_source` , 
            `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
               AND `T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chi_id_source` > :T0_chi_id_source2
               AND `T0`.`chi_id_source` <= :T0_chi_id_source3
               AND `T0`.`che_binaire_source` = :T0_che_binaire_source
               AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
               AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
               AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
               AND `T0`.`che_pour_util_source` = :T0_che_pour_util_source) 
            ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 418 , criteres418 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt418;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        const __nbMax=40;
        let criteres_418={};
        criteres_418['quantitee']=__nbMax;
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        return(await this.__ig1.generique_sous_liste2( mat , d , 418 , criteres_418 , __nbMax , __db1 ));
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
    moi='sources1';
    __ig1=null;
    fonction_liste='liste1';
    __js_vers_ast=null;
    #objet_conversion_ast_js_vers_rev=null;
    #objet_conversion_rev_vers_js=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
        /* this.__ig1.ma_trace1( ' constructor de ' + this.moi ); */
        this.#objet_conversion_ast_js_vers_rev=new w_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , this.__ig1 );
        this.#objet_conversion_rev_vers_js=new w_rev_vers_js1( '#objet_conversion_rev_vers_js' , this.__ig1 );
    }
    /*
      =============================================================================================================
    */
}
export{sources1 as sources1};