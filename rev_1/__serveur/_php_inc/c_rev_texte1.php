<?php
class c_rev_texte1{
    /*
      =============================================================================================================
    */
    public function __constructor(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
    }
    /*
      =============================================================================================================
    */
    function page1(&$donnees_retournees,&$mat,&$donnees_recues){
        $txt='<h1 style="color:red;">convertion de texte</h1>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_texte_rev1)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_texte_rev1)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_texte_rev1)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_texte_rev1)))" title="aller à la ligne" >ligne</div>';
        $txt .= '    <div class="hug_bouton" style="float:right;" data-hug_click="c_rev_texte1.charger_texte_test1()" title="charger les données de test" >test1 (serveur)</div>';
        $txt .= '    <div class="hug_bouton" style="float:right;" data-hug_click="c_fonctions_js1(importer_un_texte_de_test2(zone_source(vv_txtarea_texte_rev1)))" title="charger les données de test2" >test2</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_texte_rev1" data-editeur1="source_editeur1"  rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(texte1_vers_rev(zone_source(vv_txtarea_texte_rev1),zone_resultat(vv_txtarea_texte_rev2)))" title="convertir en rev avec transformation de html" >texte-&gt;rev</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(vv_txtarea_texte_rev2)))" title="formater le source rev" >(😊)</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_texte_rev2)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_texte_rev2)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_texte_rev2)))" title="vider la zone" >🚫</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_texte_rev2)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_texte_rev2)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_texte_rev2)))" title="aller à la ligne" >ligne</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_texte_rev2" data-editeur1="rev" rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(rev_vers_texte1(zone_source(vv_txtarea_texte_rev2),zone_resultat(vv_txtarea_texte_rev3)))" title="convertir en texte" >rev-&gt;texte</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_texte_rev3)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_texte_rev3)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_texte_rev3)))" title="vider la zone" >🚫</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_texte_rev3)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_texte_rev3)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_texte_rev3)))" title="aller à la ligne" >ligne</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_texte_rev3" data-editeur1="source_editeur1"  rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees[__x_page] .= $txt;
    }
    /*
      =============================================================================================================
    */
    function charger_texte_test1(&$donnees_retournees,&$mat,&$donnees_recues){
        $valeur=<<<EOT
/*provenance = serveur */
hello, world
EOT;
        $valeur_transformee=$valeur;
        $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(vv_txtarea_texte_rev1),contenu(\'' . str_replace('\'','\\\'',str_replace('\\','\\\\',$valeur_transformee)) . '\')))';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/