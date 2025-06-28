<?php
class c_rev_html1{
    /*
      =============================================================================================================
    */
    public function __constructor(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
    }
    /*
      =============================================================================================================
    */
    function page1(&$donnees_retournees,&$mat,&$donnees_recues){
        $txt='<h1 style="color:red;">convertion de HTML</h1>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_html_rev1)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_html_rev1)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_html_rev1)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_html_rev1)))" title="aller à la ligne" >ligne</div>';
        $txt .= '    <div class="hug_bouton" style="float:right;" data-hug_click="c_rev_html1.charger_html_test1()" title="charger les données de test" >test1</div>';
        $txt .= '    <div class="hug_bouton" style="float:right;" data-hug_click="c_fonctions_js1(importer_un_html_de_test2(zone_source(vv_txtarea_html_rev1)))" title="charger les données de test2" >test2</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_html_rev1" data-editeur1="source_editeur1"  rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(html1_vers_rev(zone_source(vv_txtarea_html_rev1),zone_resultat(vv_txtarea_html_rev2)))" title="convertir en rev" >HTML-&gt;rev</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(vv_txtarea_html_rev2)))" title="formater le source rev" >(😊)</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_html_rev2)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_html_rev2)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_html_rev2)))" title="vider la zone" >🚫</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_html_rev2)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_html_rev2)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_html_rev2)))" title="aller à la ligne" >ligne</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_html_rev2" data-editeur1="rev" rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(rev_vers_html1(zone_source(vv_txtarea_html_rev2),zone_resultat(vv_txtarea_html_rev3)))" title="convertir en html" >rev-&gt;html</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_html_rev3)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_html_rev3)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_html_rev3)))" title="vider la zone" >🚫</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_html_rev3)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_html_rev3)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_html_rev3)))" title="aller à la ligne" >ligne</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_html_rev3" data-editeur1="source_editeur1"  rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees[__x_page] .= $txt;
    }
    /*
      =============================================================================================================
    */
    function charger_html_test1(&$donnees_retournees,&$mat,&$donnees_recues){
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
<!DOCTYPE html>
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
</html>
EOT;
        $valeur_transformee=$valeur;
        /* $valeur_transformee=str_replace('\\','\\\\' , $valeur_transformee);*/
        /*
          $valeur_transformee=str_replace('\\\'','\\\\\'' , $valeur_transformee);
          $valeur_transformee=str_replace('\\','\\\\' , $valeur_transformee);
          $valeur_transformee=str_replace('\'','\\\'' , $valeur_transformee);
        */
        $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(vv_txtarea_html_rev1),contenu(\'' . str_replace('\'','\\\'',str_replace('\\','\\\\',$valeur_transformee)) . '\')))';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/