import {w_ast_js_vers_rev1} from './f0?n0=w_ast_js_vers_rev1_.js';
import {w_rev_vers_js1} from './f0?n0=w_rev_vers_js1_.js';
import {w_html_vers_rev1} from './f0?n0=w_html_vers_rev1_.js';
import {w_rev_vers_html1} from './f0?n0=w_rev_vers_html1_.js';
class x_ecran_rev_vers_html1{
    /*
      =============================================================================================================
    */
    /*
      pour les js dans le html
    */
    #module_acorn_charge=null;
    #parseur_javascript=null;
    #objet_conversion_ast_js_vers_rev=null;
    #objet_conversion_rev_vers_js=null;
    /*
      pour le html
    */
    #objet_conversion_html_vers_rev=null;
    #objet_conversion_rev_vers_html=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
        /*
          console.log( 'constructor fonctions 1' , e );
        */
        /*
          pour les js dans le html
        */
        this.__gi1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/acorn1_c.js' );
        this.#objet_conversion_ast_js_vers_rev=new w_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , __gi1 );
        this.#objet_conversion_rev_vers_js=new w_rev_vers_js1( '#objet_conversion_rev_vers_js' , __gi1 );
        /*
          pour le html
        */
        this.#objet_conversion_html_vers_rev=new w_html_vers_rev1( '#objet_conversion_html_vers_rev' , __gi1 , this.#objet_conversion_ast_js_vers_rev );
        this.#objet_conversion_rev_vers_html=new w_rev_vers_html1( '#objet_conversion_rev_vers_html' , __gi1 , this.#objet_conversion_rev_vers_js );
    }
    /*
      =============================================================================================================
    */
    rev_vers_html1( mat , d ){
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
        /* on transforme le rev en html */
        var obj1=this.#objet_conversion_rev_vers_html.c_rev_vers_html( t1.value , {} );
        if(obj1.__xst === __xsu){
            t2.value=obj1.__xva;
            return({"__xst" : __xsu});
        }else{
            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} ));
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    html_vers_rev1( mat , d ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_resultat=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mettre_en_stockage_local=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.__gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( 'x_ecran_rev_vers_html1' , t1.value );
                }
                var source_html=t1.value;
                for( var i=0 ; i < t1.value.length ; i++ ){
                    var c=source_html.substr( i , 1 );
                    if(!(c == ' ' || c == '\n' || c == '\r' || c == '\t')){
                        source_html=source_html.substr( i );
                        break;
                    }
                }
                /* on transforme le html en rev */
                var obj1=this.#objet_conversion_html_vers_rev.TransformHtmlEnRev( source_html , 0 , {} );
                if(obj1.__xst === __xsu){
                    t2.value=obj1.__xva;
                    return({"__xst" : __xsu});
                }else{
                    /* this.__gi1.__rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} ); */
                    return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} ));
                }
            }
        }
        return({"__xst" : __xer});
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
        let t=`<!DOCTYPE html>
<html lang="fr">
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>title</title>
  <link rel="stylesheet" href="" /><style type="text/css"></style>
  <script>
  function x2(x){
    return x*2;
  }
  var a=x2(2);
  console.log('a=',a);
  
  </script>
 </head>
 <body>
  <!-- content -->
 </body>
</html>`;
        document.getElementById( 'vv_txtarea_html_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    donnees_de_test1( mat , i ){
        let t=`<!DOCTYPE html>
<html lang="fr">
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>title</title>
  <link rel="stylesheet" href="" /><style type="text/css"></style>
 </head>
 <body>
  <!-- content -->
 </body>
</html>`;
        document.getElementById( 'vv_txtarea_html_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let t='';
        t+='<h1>convertion de rev vers html</h1>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev1' );
        /*
        */
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(x_ecran_rev_vers_html1),f1(donnees_de_test1()))" title="charger les données de test" >test1</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(x_ecran_rev_vers_html1),f1(donnees_de_test2()))" title="charger les données de test2" >test2</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(this.__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && this.__gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'x_ecran_rev_vers_html1' )
        ){
            t+=this.__gi1.stockage_local['zones_sauvegardées']['x_ecran_rev_vers_html1'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(x_ecran_rev_vers_html1),f1(html_vers_rev1(zone_source(vv_txtarea_html_rev1),zone_resultat(vv_txtarea_html_rev2),mettre_en_stockage_local(1))))';
        t+='" title="convertir en rev" >html-&gt;rev</div>';
        /*  */
        t+=this.__gi1.__fnt1.boutons_rev3( 'vv_txtarea_html_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">';
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="m1(n1(x_ecran_rev_vers_html1),f1(rev_vers_html1(zone_source(vv_txtarea_html_rev2),zone_resultat(vv_txtarea_html_rev3))))" title="convertir en rev">rev-&gt;html</div>';
        /*
        */
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev3' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev3" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        this.__gi1.maj_contenu_principal( t );
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'cvt html' );
        return({"__xst" : __xsu});
    }
}
export{x_ecran_rev_vers_html1 as x_ecran_rev_vers_html1};