import {w_ast_js_vers_rev1} from '/f0?n0=w_ast_js_vers_rev1_.js';
import {w_rev_vers_js1} from '/f0?n0=w_rev_vers_js1_.js';
import {w_html_vers_rev1} from '/f0?n0=w_html_vers_rev1_.js';
import {w_rev_vers_html1} from '/f0?n0=w_rev_vers_html1_.js';
import {w_ast_phpparseur_vers_rev1} from '/f0?n0=w_ast_phpparseur_vers_rev1_.js';
import {w_rev_vers_php1} from '/f0?n0=w_rev_vers_php1_.js';
/* import {z_ast_phpnikic_vers_rev1} from './z_ast_phpnikic_vers_rev1.js'; */
class x_ecran_rev_vers_php1{
    __gi1=null;
    moi='x_ecran_rev_vers_php1';
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
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
        /* console.log( 'constructor fonctions 1' , e ); */
        /*
          pour les js dans le html
        */
        this.__gi1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/acorn1.js' );
        /*
          pour le php
        */
        this.__gi1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/php_parser1.js' );
        this.#objet_conversion_ast_js_vers_rev=new w_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , __gi1 );
        this.#objet_conversion_rev_vers_js=new w_rev_vers_js1( '#objet_conversion_rev_vers_js' , __gi1 );
        /*
          pour le html dans le php
        */
        this.#objet_conversion_html_vers_rev=new w_html_vers_rev1( '#objet_conversion_html_vers_rev' , __gi1 , this.#objet_conversion_ast_js_vers_rev );
        this.#objet_conversion_rev_vers_html=new w_rev_vers_html1( '#objet_conversion_rev_vers_html' , __gi1 , this.#objet_conversion_rev_vers_js );
        /*
          phpparseur
        */
        this.#objet_conversion_astphpparseur_vers_rev1=new w_ast_phpparseur_vers_rev1( '#objet_conversion_astphpparseur_vers_rev1' , __gi1 , this.#objet_conversion_html_vers_rev );
        this.#objet_conversion_rev_vers_php=new w_rev_vers_php1( '#objet_conversion_rev_vers_php' , __gi1 , this.#objet_conversion_rev_vers_html );
        /*
          nicki
        */
        /* this.#objet_conversion_astphpnikic_vers_rev1=new z_ast_phpnikic_vers_rev1( '#objet_conversion_astphpnikic_vers_rev1new' , this.__gi1.__rev1 , this.#objet_conversion_html_vers_rev ); */
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
        this.__gi1.zone_d_edition_en_cours=zone_source;
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
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} );
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
            this.__gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( 'x_ecran_rev_vers_php1' , t1.value );
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
                        if(this.__gi1.est_num( tt )){
                            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
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
                            return({"__xst" : __xer ,"__xme" : this.__gi1.nl2() + '<br />erreur lors de la convertion du php' , cumul_message  , cumul_message });
                        }else{
                            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.nl2() + '<br />erreur lors de la convertion du php'} ));
                        }
                    }
                }catch(e2){
                    return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.nl2( e2 ) + '<br />erreur lors de la convertion du php'} ));
                }
            }
        }
        return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.nl2() + '<br />erreur lors de la convertion du php'} ));
    }
    /*
      =============================================================================================================
    */
    sauvegarder_contenu_en_localstorage( nom_de_la_zone , valeur ){
        if(!this.__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )){
            this.__gi1.stockage_local['zones_sauvegardées']={};
        }
        this.__gi1.stockage_local['zones_sauvegardées'][nom_de_la_zone]=valeur;
        localStorage.setItem( this.__gi1.cle_lst0 , JSON.stringify( this.__gi1.stockage_local ) );
    }
    /*
      =============================================================================================================
    */
    donnees_de_test2( mat , i ){
        let t=`<?php
print('hella');`;
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
print('hello');
`;
        document.getElementById( 'vv_txtarea_php_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let t='';
        t+='<h1>convertion de rev vers php</h1>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_php_rev1' );
        /*  */
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(x_ecran_rev_vers_php1),f1(donnees_de_test1()))" title="charger les données de test" >test1</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(x_ecran_rev_vers_php1),f1(donnees_de_test2()))" title="charger les données de test2" >test2</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_php_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(this.__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && this.__gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'x_ecran_rev_vers_php1' )
        ){
            t+=this.__gi1.stockage_local['zones_sauvegardées']['x_ecran_rev_vers_php1'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        /*  */
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(x_ecran_rev_vers_php1),f1(';
        t+='php1_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),mettre_en_stockage_local(1),options(nettoyer_html(1)))';
        t+='))" title="cvt avec nettoyage" >php-&gt;rev</div>';
        /*  */
        t+='    <div class="rev_bouton yy__3" data-rev_click="';
        t+='m1(n1(x_ecran_rev_vers_php1),f1(php1_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),mettre_en_stockage_local(1),options(nettoyer_html(0)))))';
        t+='" title="cvt sans nettoyage" >php-&gt;rev</div>';
        /*  */
        t+=this.__gi1.__fnt1.boutons_rev3( 'vv_txtarea_php_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_php_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="m1(n1(x_ecran_rev_vers_php1),f1(rev_vers_php1(zone_source(vv_txtarea_php_rev2),zone_resultat(vv_txtarea_html_rev3),mettre_en_stockage_local(1))))" title="convertir en rev" >rev-&gt;php</div>';
        /*  */
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev3' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev3" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        this.__gi1.maj_contenu_principal( t );
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'cvt php' );
        return({"__xst" : __xsu});
    }
}
export{x_ecran_rev_vers_php1 as x_ecran_rev_vers_php1};