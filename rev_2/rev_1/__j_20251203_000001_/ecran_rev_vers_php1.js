import {z_ast_js_vers_rev1} from './z_ast_js_vers_rev1.js';
import {z_rev_vers_js1} from './z_rev_vers_js1.js';
import {z_html_vers_rev1} from './z_html_vers_rev1.js';
import {z_rev_vers_html1} from './z_rev_vers_html1.js';
import {z_ast_phpparseur_vers_rev1} from './z_ast_phpparseur_vers_rev1.js';
import {z_rev_vers_php1} from './z_rev_vers_php1.js';
import {z_ast_phpnikic_vers_rev1} from './z_ast_phpnikic_vers_rev1.js';
class ecran_rev_vers_php1{
    moi='ecran_rev_vers_php1';
    /*
      =============================================================================================================
    */
    /*
      pour les js dans le html
    */
    #parseur_javascript=null;
    #objet_conversion_ast_js_vers_rev=null;
    #objet_conversion_rev_vers_js=null;
    /*
      pour le html dans le php
    */
    #objet_conversion_html_vers_rev=null;
    #objet_conversion_rev_vers_html=null;
    /*
      pour le php
    */
    #parseur_phpparseur=null;
    #objet_conversion_astphpparseur_vers_rev1=null;
    #objet_conversion_astphpnikic_vers_rev1=null;
    #objet_conversion_rev_vers_php=null;
    /*
      =============================================================================================================
    */
    constructor( e ){
        /* console.log( 'constructor fonctions 1' , e ); */
        /*
          pour les js dans le html
        */
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/acorn.js' );
        /*
          pour le php
        */
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/php_parser.js' );
        this.#objet_conversion_ast_js_vers_rev=new z_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , __gi1.__rev1 );
        this.#objet_conversion_rev_vers_js=new z_rev_vers_js1( '#objet_conversion_rev_vers_js' , __gi1.__rev1 );
        /*
          pour le html dans le php
        */
        this.#objet_conversion_html_vers_rev=new z_html_vers_rev1( '#objet_conversion_html_vers_rev' , __gi1.__rev1 , this.#objet_conversion_ast_js_vers_rev );
        this.#objet_conversion_rev_vers_html=new z_rev_vers_html1( '#objet_conversion_rev_vers_html' , __gi1.__rev1 , this.#objet_conversion_rev_vers_js );
        /*
          phpparseur
        */
        this.#objet_conversion_astphpparseur_vers_rev1=new z_ast_phpparseur_vers_rev1( '#objet_conversion_astphpparseur_vers_rev1' , __gi1.__rev1 , this.#objet_conversion_html_vers_rev );
        this.#objet_conversion_rev_vers_php=new z_rev_vers_php1( '#objet_conversion_rev_vers_php' , __gi1.__rev1 , this.#objet_conversion_rev_vers_html );
        /*
          nicki
        */
        this.#objet_conversion_astphpnikic_vers_rev1=new z_ast_phpnikic_vers_rev1( '#objet_conversion_astphpnikic_vers_rev1new' , __gi1.__rev1 , this.#objet_conversion_html_vers_rev );
    }
    /*
      =============================================================================================================
    */
    traite_astnikic1( mat , d , le_message_du_serveur ){
        try{
            let json_de_ast=JSON.parse( le_message_du_serveur.__xva.ast_nikic_de_php );
            let options=le_message_du_serveur.__xva.options;
            let obj=this.#objet_conversion_astphpnikic_vers_rev1.traite_ast_nikic( json_de_ast , options );
            if(obj.__xst === __xsu){
                document.getElementById( options.zone_resultat ).value=obj.__xva;
                return({"__xst" : __xsu});
            }else{
                let cumul_message=__xsu;
                if(obj.hasOwnProperty( 'cumul_message' ) && obj.cumul_message === __xer){
                    cumul_message=__xer;
                    return({"__xst" : __xal ,"__xme" : 'erreur lors de la convertion nikic du php<br />' + __gi1.__rev1.nl2() ,"cumul_message" : cumul_message});
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xal ,"__xme" : 'erreur lors de la convertion nikic du php<br />' + __gi1.__rev1.nl2()} ));
                }
            }
        }catch(e){
            this.ecran_rev_php();
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    php2_vers_rev( mat , d ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=0;
        let moi=this.moi;
        let options={"nettoyer_html" : 0};
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
                options.zone_source=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_resultat=mat[i + 1][1];
                options.zone_resultat=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mettre_en_stockage_local=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && mat[i][1] === 'moi' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                moi=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'options'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        if(mat[j][1] === 'nettoyer_html'){
                            options[mat[j][1]]=parseInt( mat[j + 1][1] , 10 );
                        }else{
                            options[mat[j][1]]=mat[j + 1][1];
                        }
                    }
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            __gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( 'ecran_rev_vers_php1' , t1.value );
                }
                let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
                let php_moins_commentaires_sql=t1.value.replace( regex , '' );
                let cmd='pm1(m1(n1(c_sources1),f1(ast_nicki1(moi(' + moi + ')))))';
                __gi1.__worker.postMessage( {"__xac" : cmd ,"__xva" : {"php_source" : t1.value ,"options" : options}} );
                return({"__xst" : __xsu});
            }
        }
        return(__gi1.ajoute_message( {"__xst" : __xal ,"__xme" : __gi1.__rev1.nl2() + '<br />erreur lors de la convertion du php'} ));
    }
    /*
      =============================================================================================================
    */
    rev_vers_php1( mat , d ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_resultat=mat[i + 1][1];
            }
        }
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        __gi1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        /* on transforme le rev en php */
        let obj1=this.#objet_conversion_rev_vers_php.c_rev_vers_php( t1.value , {} );
        if(obj1.__xst === __xsu){
            t2.value=obj1.__xva;
            return({"__xst" : __xsu});
        }else{
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    php1_vers_rev( mat , d ){
        if(this.#parseur_phpparseur === null){
            try{
                this.#parseur_phpparseur=window.PhpParser.Engine( {"parser" : {"extractDoc" : true} ,"ast" : {"withPositions" : true}} );
            }catch(e){
                return({"__xst" : __xer});
            }
        }
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=0;
        let options={"nettoyer_html" : 0};
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_resultat=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mettre_en_stockage_local=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && mat[i][1] === 'options'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && mat[j][1] === 'nettoyer_html' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        options.nettoyer_html=parseInt( mat[j + 1][1] , 10 );
                    }
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            __gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( 'ecran_rev_vers_php1' , t1.value );
                }
                let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
                let php_moins_commentaires_sql=t1.value.replace( regex , '' );
                let ast_de_php=null;
                try{
                    ast_de_php=this.#parseur_phpparseur.parseCode( php_moins_commentaires_sql );
                }catch(e1){
                    if(e1.message.indexOf( 'on line ' )){
                        let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                        console.log( tt );
                        if(__gi1.est_num( tt )){
                            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }
                try{
                    let obj1=this.#objet_conversion_astphpparseur_vers_rev1.traite_ast( ast_de_php , options );
                    if(obj1.__xst === __xsu){
                        t2.value=obj1.__xva;
                        return({"__xst" : __xsu});
                    }else{
                        let cumul_message=__xsu;
                        if(obj1.hasOwnProperty( 'cumul_message' ) && obj1.cumul_message === __xer){
                            cumul_message=__xer;
                            return({"__xst" : __xer ,"__xme" : __gi1.nl2() + '<br />erreur lors de la convertion du php' , cumul_message  , cumul_message });
                        }else{
                            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2() + '<br />erreur lors de la convertion du php'} ));
                        }
                    }
                }catch(e2){
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2( e2 ) + '<br />erreur lors de la convertion du php'} ));
                }
            }
        }
        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2() + '<br />erreur lors de la convertion du php'} ));
    }
    /*
      =============================================================================================================
    */
    sauvegarder_contenu_en_localstorage( nom_de_la_zone , valeur ){
        if(!__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )){
            __gi1.stockage_local['zones_sauvegardées']={};
        }
        __gi1.stockage_local['zones_sauvegardées'][nom_de_la_zone]=valeur;
        localStorage.setItem( __gi1.cle_lst0 , JSON.stringify( __gi1.stockage_local ) );
    }
    /*
      =============================================================================================================
    */
    donnees_de_test2( mat , i ){
        let t=`<?php
echo 'hella';`;
        document.getElementById( 'vv_txtarea_php_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    donnees_de_test1( mat , i ){
        let t=`<!-- provenance = serveur -->
<script>
var a=1;
</script>
<div>bla bla</div><?php
/* provenance = serveur*/
echo 'hello';
`;
        document.getElementById( 'vv_txtarea_php_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ecran_rev_php( mat , d ){
        let t='';
        t+='<h1>convertion de rev vers php</h1>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=__gi1.__fnt1.boutons_edition1( 'vv_txtarea_php_rev1' );
        /*  */
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(ecran_rev_vers_php1),f1(donnees_de_test1()))" title="charger les données de test" >test1</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(ecran_rev_vers_php1),f1(donnees_de_test2()))" title="charger les données de test2" >test2</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_php_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && __gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'ecran_rev_vers_php1' )
        ){
            t+=__gi1.stockage_local['zones_sauvegardées']['ecran_rev_vers_php1'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(ecran_rev_vers_php1),f1(';
        t+='php1_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),mettre_en_stockage_local(1),options(nettoyer_html(1)))';
        t+='))" title="cvt avec nettoyage" >php-&gt;rev</div>';
        /*  */
        t+='    <div class="rev_bouton yy__3" data-rev_click="';
        t+='m1(n1(ecran_rev_vers_php1),f1(php1_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),mettre_en_stockage_local(1),options(nettoyer_html(0)))))';
        t+='" title="cvt sans nettoyage" >php-&gt;rev</div>';
        t+='    <div class="rev_bouton yy__2" data-rev_click="';
        t+='m1(n1(ecran_rev_vers_php1),f1(php2_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),mettre_en_stockage_local(1),options(nettoyer_html(1)))))';
        t+='" title="nikic avec nettoyage" >php-&gt;rev</div>';
        /*  */
        t+='    <div class="rev_bouton yy__4" data-rev_click="';
        t+='m1(n1(ecran_rev_vers_php1),f1(php2_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),mettre_en_stockage_local(1),options(nettoyer_html(0)))))';
        t+='" title="nikic sans nettoyage" >php-&gt;rev</div>';
        t+=__gi1.__fnt1.boutons_rev3( 'vv_txtarea_php_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_php_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="m1(n1(ecran_rev_vers_php1),f1(rev_vers_php1(zone_source(vv_txtarea_php_rev2),zone_resultat(vv_txtarea_html_rev3),mettre_en_stockage_local(1))))" title="convertir en rev" >rev-&gt;php</div>';
        /*  */
        t+=__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev3' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev3" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        __gi1.maj_contenu_principal( t );
        __gi1.maj_hash( mat , 0 );
        return({"__xst" : __xsu});
    }
}
export{ecran_rev_vers_php1 as ecran_rev_vers_php1};