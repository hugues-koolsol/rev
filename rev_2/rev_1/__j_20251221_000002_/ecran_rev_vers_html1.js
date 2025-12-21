import {z_ast_js_vers_rev1} from './z_ast_js_vers_rev1.js';
import {z_rev_vers_js1} from './z_rev_vers_js1.js';
import {z_html_vers_rev1} from './z_html_vers_rev1.js';
import {z_rev_vers_html1} from './z_rev_vers_html1.js';
class ecran_rev_vers_html1{
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
    constructor( e ){
        /*
          console.log( 'constructor fonctions 1' , e );
        */
        /*
          pour les js dans le html
        */
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/acorn.js' );
        this.#objet_conversion_ast_js_vers_rev=new z_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , __gi1.__rev1 );
        this.#objet_conversion_rev_vers_js=new z_rev_vers_js1( '#objet_conversion_rev_vers_js' , __gi1.__rev1 );
        /*
          pour le html
        */
        this.#objet_conversion_html_vers_rev=new z_html_vers_rev1( '#objet_conversion_html_vers_rev' , __gi1.__rev1 , this.#objet_conversion_ast_js_vers_rev );
        this.#objet_conversion_rev_vers_html=new z_rev_vers_html1( '#objet_conversion_rev_vers_html' , __gi1.__rev1 , this.#objet_conversion_rev_vers_js );
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
        __gi1.zone_d_edition_en_cours=zone_source;
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
            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} ));
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
            __gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( 'ecran_rev_vers_html1' , t1.value );
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
                    /* __gi1.__rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} ); */
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} ));
                }
            }
        }
        return({"__xst" : __xer});
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
        let t=`<!DOCTYPE html>
<html lang="fr">
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>title</title>
  <link rel="stylesheet" href="" />
  <style type="text/css">
  </style>
 </head>
 <body>
  <!-- content -->
  <script>
  function x2(x){
    return x*2;
  }
  var a=x2(2);
  console.log('a=',a);
  
  </script>
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
  <link rel="stylesheet" href="" />
  <style type="text/css">
  </style>
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
    ecran_rev_html( mat , d ){
        let t='';
        t+='<h1>convertion de rev vers html</h1>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev1' );
        /*
        */
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(ecran_rev_vers_html1),f1(donnees_de_test1()))" title="charger les données de test" >test1</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(ecran_rev_vers_html1),f1(donnees_de_test2()))" title="charger les données de test2" >test2</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && __gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'ecran_rev_vers_html1' )
        ){
            t+=__gi1.stockage_local['zones_sauvegardées']['ecran_rev_vers_html1'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(ecran_rev_vers_html1),f1(html_vers_rev1(zone_source(vv_txtarea_html_rev1),zone_resultat(vv_txtarea_html_rev2),mettre_en_stockage_local(1))))';
        t+='" title="convertir en rev" >html-&gt;rev</div>';
        /*  */
        t+=__gi1.__fnt1.boutons_rev3( 'vv_txtarea_html_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">';
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="m1(n1(ecran_rev_vers_html1),f1(rev_vers_html1(zone_source(vv_txtarea_html_rev2),zone_resultat(vv_txtarea_html_rev3))))" title="convertir en rev">rev-&gt;html</div>';
        /*
        */
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
export{ecran_rev_vers_html1 as ecran_rev_vers_html1};