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
    async exporter_dans_base_de_prod1( mat , d ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            this.__ig1.donnees_retournees.__xsi[__xer].push( '[' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_116={"T0_chi_id_source" : chi_id_source};
        let tt116=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_select_116 , this.__ig1.donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /* this.__ig1.ma_trace1('tt116[__xva]=',tt116[__xva]); */
        let sql0=`
            UPDATE tbl_sources SET 
                chi_id_source = ` + chi_id_source + ` , 
                chx_dossier_id_source = ` + tt116[__xva][0]['T0.chx_dossier_id_source'] + ` , 
                chp_nom_source = ` + this.__ig1.__fnt1.sq1( tt116[__xva][0]['T0.chp_nom_source'] ) + ` ,  
                cht_commentaire_source = ` + this.__ig1.__fnt1.sq1( tt116[__xva][0]['T0.cht_commentaire_source'] ) + ` ,  
                che_binaire_source = ` + tt116[__xva][0]['T0.che_binaire_source'] + ` ,  
                che_autorisation_globale_source = ` + tt116[__xva][0]['T0.che_autorisation_globale_source'] + `
            WHERE chi_id_source = ` + tt116[__xva][0]['T0.chi_id_source'] + ` ;
                
            INSERT OR IGNORE INTO tbl_sources( 
                \`chi_id_source\` , 
                \`chx_dossier_id_source\` , 
                \`chp_nom_source\` , 
                \`cht_commentaire_source\` , 
                \`che_binaire_source\` , 
                \`che_autorisation_globale_source\` 
            ) values(
                ` + tt116[__xva][0]['T0.chi_id_source'] + ` , 
                ` + tt116[__xva][0]['T0.chx_dossier_id_source'] + ` , 
                ` + this.__ig1.__fnt1.sq1( tt116[__xva][0]['T0.chp_nom_source'] ) + ` , 
                ` + this.__ig1.__fnt1.sq1( tt116[__xva][0]['T0.cht_commentaire_source'] ) + ` ,
                ` + tt116[__xva][0]['T0.che_binaire_source'] + ` , 
                ` + tt116[__xva][0]['T0.che_autorisation_globale_source'] + ` 
            );`;
        /* this.__ig1.ma_trace1('this.__ig1.options_generales=',this.__ig1.options_generales); */
        let chemin_bdd=(await this.__ig1.options_generales.chemin_absolu_projet) + '__bases_de_donnees/bdd_1.sqlite';
        this.__ig1.ma_trace1( 'chemin_bdd=' + chemin_bdd );
        let __db_1=null;
        try{
            __db_1=await this.__ig1.ouvrir_bdd_temp( chemin_bdd );
        }catch(e){
            this.__ig1.donnees_retournees.__xsi[__xer].push( '[' + this.__ig1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        try{
            await __db_1.exec( sql0 );
            await __db_1.close();
        }catch(e){
            await __db_1.close();
            this.__ig1.donnees_retournees.__xsi[__xer].push( '[' + this.__ig1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
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
        let criteres_116={
             /*  */
            "T0_chi_id_source" : form['chi_id_source']
        };
        let tt116=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 116 , criteres_116 , this.__ig1.donnees_retournees , __db1 );
        if(tt116[__xst] !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( '[' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*  */
        let criteres_118={
             /*  */
            "chi_id_source" : form['chi_id_source']
        };
        let tt118=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_sources
        WHERE `chi_id_source` = :chi_id_source ;
        */
        /*sql_inclure_fin*/ 118 , criteres_118 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt118[__xst] !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
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
            this.__ig1.donnees_retournees.__xsi[__xer].push( this.__ig1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_116={"T0_chi_id_source" : chi_id_source};
        let tt116=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 116 , critere_116 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt116;
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
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt115=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 115 , criteres115 , this.__ig1.donnees_retournees , __db1 );
        if(tt115.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt115[__xst] === __xsu && tt115[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres115['debut']=__debut;
            tt115=await this.__ig1.sql_iii(
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
            /*sql_inclure_fin*/ 115 , criteres115 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt115;
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
    async sous_liste1( mat , d ){
        this.fonction_liste='sous_liste1';
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