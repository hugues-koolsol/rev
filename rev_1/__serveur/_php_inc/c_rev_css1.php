<?php
class c_rev_css1{
    /*
      =============================================================================================================
    */
    public function __constructor(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
    }
    /*
      =============================================================================================================
    */
    function page1(&$donnees_retournees,&$mat,&$donnees_recues){
        $txt='<h1 style="color:red;">convertion de css</h1>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_css_rev1)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_css_rev1)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_css_rev1)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_css_rev1)))" title="aller à la ligne" >ligne</div>';
        $txt .= '    <div class="hug_bouton" style="float:right;" data-hug_click="c_rev_css1.charger_css_test1()" title="charger les données de test" >test1</div>';
        $txt .= '    <div class="hug_bouton" style="float:right;" data-hug_click="c_fonctions_js1(importer_un_css_de_test2(zone_source(vv_txtarea_css_rev1)))" title="charger les données de test2" >test2</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_css_rev1" data-editeur1="source_editeur1"  rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(css1_vers_rev(zone_source(vv_txtarea_css_rev1),zone_resultat(vv_txtarea_css_rev2)))" title="convertir en rev avec transformation de html" >css-&gt;rev</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(vv_txtarea_css_rev2)))" title="formater le source rev" >(😊)</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_css_rev2)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_css_rev2)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_css_rev2)))" title="vider la zone" >🚫</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_css_rev2)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_css_rev2)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_css_rev2)))" title="aller à la ligne" >ligne</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_css_rev2" data-editeur1="rev" rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(rev_vers_css1(zone_source(vv_txtarea_css_rev2),zone_resultat(vv_txtarea_css_rev3)))" title="convertir en css" >rev-&gt;css</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_css_rev3)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_css_rev3)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_css_rev3)))" title="vider la zone" >🚫</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_css_rev3)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_css_rev3)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_css_rev3)))" title="aller à la ligne" >ligne</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_css_rev3" data-editeur1="source_editeur1"  rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees[__x_page] .= $txt;
    }
    /*
      =============================================================================================================
    */
    function charger_css_test1(&$donnees_retournees,&$mat,&$donnees_recues){
        /* hella("l'autre \"exemple\"")*/
        /* $valeur='hello(\'h\\\' deux anti slash \\\\ \\0 \'),hello("\\"i deux anti slash \\\\ \\"")';*/
        /*
          $valeur=<<<EOT
          hello('\\'h deux anti slash \\\\   '),hello(" \\"i deux anti slash \\\\ \\" \\0 \\n ")
          EOT;
        */
        /*
          $valeur=<<<EOT
          hello(' \\\\  \\' h deux anti slash  '),hello(" \\" i deux anti slash \\\\ ")
          hello(' \\\\ \\' h deux anti slash  '),hello(" \\" i deux anti slash \\\\ ")
          EOT;
        */
        /*
          "àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
          n'ont pas le même aspect car ils ont un encodage différent.
          J'aimerais bien que les navigateurs fassent la même chose.
        */
        $valeur=<<<EOT
/*provenance = serveur */
/* mon css*/
@-ms-viewport {width: device-width;}
*,*::before,*::after {box-sizing: border-box;}
html{/*fond*/background:linear-gradient(to bottom, #ECEFF1 0%, #DBDEE0 100%);/*hauteur*/min-height:100%;}
@media print {
 a[href]:after {content: none !important;}
 @page {size: auto;margin-bottom: 0;}
}
EOT;
        $valeur_transformee=$valeur;
        /* $valeur_transformee=str_replace('\\','\\\\' , $valeur_transformee);*/
        /*
          $valeur_transformee=str_replace('\\\'','\\\\\'' , $valeur_transformee);
          $valeur_transformee=str_replace('\\','\\\\' , $valeur_transformee);
          $valeur_transformee=str_replace('\'','\\\'' , $valeur_transformee);
        */
        $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(vv_txtarea_css_rev1),contenu(\'' . str_replace('\'','\\\'',str_replace('\\','\\\\',$valeur_transformee)) . '\')))';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/