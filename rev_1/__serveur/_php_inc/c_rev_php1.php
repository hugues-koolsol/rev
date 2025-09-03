<?php
$a=realpath(dirname(__FILE__));
/* require($a . '../../../../phplib/vendor/autoload.php');*/
require(REPERTOIRE_RACINE_DES_BIBLIOTHEQUES_PHP . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php');
use PhpParser\Error;
use PhpParser\NodeDumper;
use PhpParser\ParserFactory;
function recuperer_ast_de_php2(&$donnees_retournees,&$source_php,&$donnees_recues){

    $parser=(new ParserFactory())->createForNewestSupportedVersion();
    try{
        $contenu=preg_replace('/\/\\*sql_' . 'inclure_deb\\*\/(.*?)\/\\*sql_' . 'inclure_fin\\*\//us','',$source_php);
        $ast=$parser->parse($contenu);
        /*
          sans le JSON_INVALID_UTF8_IGNORE, le source
          $a = "\x80" ;
          retourne false
        */
        $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' conversion nikic OK';
        $donnees_retournees['__xva']['ast_nikic_de_php']=json_encode($ast,JSON_INVALID_UTF8_IGNORE);
        $donnees_retournees[__xst]=__xsu;
    }catch(Error $error){
        
        if(isset($donnees_recues['__xva']['options']['zone_source']) && strpos($error->getMessage(),'on line ') !== false){

            $tt=substr($error->getMessage(),strpos($error->getMessage(),'on line ') + 8);
            $bouton='<div class="hug_bouton yy__x_signaux___xer" data-hug_click="interface1.placer_le_curseur_en_lig1(ligne(' . $tt . '),zone(\'' . $donnees_recues['__xva']['options']['zone_source'] . '\'))" >lig ' . $tt . '</div>';
            $donnees_retournees[__x_signaux][__xer][]=$bouton . ' ' . __LINE__ . ' ' . $error->getMessage();

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' ' . $error->getMessage();
        }

        $donnees_retournees[__x_signaux][__xif][]=htmlentities(var_export($donnees_recues['__xva']['options'],true),ENT_COMPAT,'utf-8');
        return;
    }

}
class c_rev_php1{
    /*
      =============================================================================================================
    */
    public function __constructor(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
    }
    /*
      =============================================================================================================
    */
    function convertir_source_php_vers_ast_nikic(&$donnees_retournees,&$mat,&$donnees_recues){
        recuperer_ast_de_php2($donnees_retournees,$donnees_recues['__xva']['php_moins_commentaires_sql'],$donnees_recues);
        $donnees_retournees['__xva']['options']=$donnees_recues[__xva]['options'];
        $donnees_retournees[__x_action]='c_fonctions_js1(retour_convertir_source_php_vers_ast_nikic())';
        /* $donnees_retournees[__xst]=__xsu;*/
        /* $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' hello '.htmlentities(var_export($donnees_recues,true),ENT_COMPAT,'UTF-8');*/
    }
    /*
      =============================================================================================================
    */
    function page1(&$donnees_retournees,&$mat,&$donnees_recues){
        $txt='<h1 style="color:red;">convertion de PHP</h1>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_php_rev1)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_php_rev1)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_php_rev1)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_php_rev1)))" title="aller à la ligne" >ligne</div>';
        $txt .= '    <div class="hug_bouton" style="float:right;" data-hug_click="c_rev_php1.charger_php_test1()" title="charger les données de test" >test1</div>';
        $txt .= '    <div class="hug_bouton" style="float:right;" data-hug_click="c_fonctions_js1(importer_un_php_de_test2(zone_source(vv_txtarea_php_rev1)))" title="charger les données de test2" >test2</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_php_rev1" data-editeur1="source_editeur1"  rows="10"  cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(php1_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),options(nettoyer_html(true))))" title="convertir en rev avec transformation de html" >php-&gt;rev</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(php1_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),options(nettoyer_html(false))))" title="convertir en rev sans transformation de html" >php-&gt;rev</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" id="vv_bouton_php1" data-hug_click="c_fonctions_js1(php2_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),options(nettoyer_html(true),retablir_bouton1(vv_bouton_php1)))),masquer_bouton1(vv_bouton_php1)" title="convertir nikic en rev avec transformation de html" >php-&gt;rev</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_4" id="vv_bouton_php2" data-hug_click="c_fonctions_js1(php2_vers_rev(zone_source(vv_txtarea_php_rev1),zone_resultat(vv_txtarea_php_rev2),options(nettoyer_html(false),retablir_bouton1(vv_bouton_php2)))),,masquer_bouton1(vv_bouton_php2)" title="convertir nikic en rev sans transformation de html" >php-&gt;rev</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(vv_txtarea_php_rev2)))" title="formater le source rev" >(😊)</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_php_rev2)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_php_rev2)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_php_rev2)))" title="vider la zone" >🚫</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_php_rev2)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_php_rev2)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_php_rev2)))" title="aller à la ligne" >ligne</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_php_rev2" data-editeur1="rev" rows="10"  cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(rev_vers_php1(zone_source(vv_txtarea_php_rev2),zone_resultat(vv_txtarea_php_rev3)))" title="convertir en php" >rev-&gt;php</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_php_rev3)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_php_rev3)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_php_rev3)))" title="vider la zone" >🚫</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_php_rev3)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_php_rev3)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_php_rev3)))" title="aller à la ligne" >ligne</div>';
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_php_rev3" data-editeur1="source_editeur1"  rows="10"  cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees[__x_page] .= $txt;
    }
    /*
      =============================================================================================================
    */
    function charger_php_test1(&$donnees_retournees,&$mat,&$donnees_recues){
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
<!-- provenance = serveur -->
<script>
var a=1;
</script>
<div>bla bla</div><?php
/* provenance = serveur*/
echo 'hello';

EOT;
        $valeur_transformee=$valeur;
        /* $valeur_transformee=str_replace('\\','\\\\' , $valeur_transformee);*/
        /*
          $valeur_transformee=str_replace('\\\'','\\\\\'' , $valeur_transformee);
          $valeur_transformee=str_replace('\\','\\\\' , $valeur_transformee);
          $valeur_transformee=str_replace('\'','\\\'' , $valeur_transformee);
        */
        $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(vv_txtarea_php_rev1),contenu(\'' . str_replace('\'','\\\'',str_replace('\\','\\\\',$valeur_transformee)) . '\')))';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/