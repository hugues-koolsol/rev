<?php
class c_rev_mat1{
    /*
      =============================================================================================================
    */
    public function __constructor(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
    }
    /*
      =============================================================================================================
    */
    function page1(&$donnees_retournees,&$mat,&$donnees_recues){
        $txt='<h1 style="color:red;">convertion de rev vers matrice</h1>';
        $txt .= '<div class="yy_conteneur_txtara">';
        $txt .= '  <div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_rev_mat1.charger_rev_test1()" title="charger les données de test" >test1</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(importer_un_rev_de_test2(zone_source(vv_txtarea_rev1)))" title="charger les données de test2" >test2</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(importer_un_rev_de_test3(zone_source(vv_txtarea_rev1)))" title="charger les données de test2" >test3</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(vv_txtarea_rev1)))" title="formater le source rev" >(😊)</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(insérer_un_commentaire1(zone_source(vv_txtarea_rev1)))" title="insérer un commentaire" >#(😎)</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(vv_txtarea_rev1)))" title="aller à la position" >position</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(vv_txtarea_rev1)))" title="aller à la ligne" >ligne</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(vv_txtarea_rev1)))" title="copier le contenu" >📋</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_rev1)))" title="agrandir la zone" >🖐</div>';
        $txt .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_rev1)))" title="retrecir la zone" >👊</div>';
        $txt .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(vv_txtarea_rev1)))" title="vider la zone" >🚫</div>';
        /* */
        $txt .= '  </div>';
        $txt .= '  <textarea  id="vv_txtarea_rev1" data-editeur1="rev" rows="10" , cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $txt .= '</div>';
        $txt .= '<div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(zone_rev_vers_zone_matrice2(zone_source(vv_txtarea_rev1),zone_resultat(vv_matrice1)))" title="transformer en matrice" >rev-&gt;mat</div>';
        $txt .= '<div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(masquer_ou_afficher(zone(vv_matrice1)))" title="masquer ou afficher" >masquer/afficher</div>';
        $txt .= '<div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(zone_rev_vers_zone_tableau2(zone_source(vv_txtarea_rev1),zone_resultat(vv_tableau1)))" title="transformer en tableau" >rev-&gt;tab</div>';
        $txt .= '<div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(masquer_ou_afficher(zone(vv_tableau1)))" title="masquer ou afficher" >masquer/afficher</div>';
        /*
          les translate3d(0, 0, 0); çi dessous permettent d'optimiser le vitesse du scroll particulièrement dans chrome
        */
        $txt .= '<div id="vv_matrice1" style="overflow-x:scroll;border:var(--t_border) lightgreen inset;transform: translate3d(0, 0, 0);"></div>';
        $txt .= '<div id="vv_tableau1" style="overflow-x:scroll;border:var(--t_border) blue inset;transform: translate3d(0, 0, 0);"></div>';
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees[__x_page] .= $txt;
    }
    /*
      =============================================================================================================
    */
    function charger_rev_test1(&$donnees_retournees,&$mat,&$donnees_recues){
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
#(début aaaa  debut),
a(
  #(test , 👍,𤭢,àà),
  b(
    xx(
      y(
        #(dedans
          commentaire bloc
        ),
        t,
        v),
      #(aa),
      xx(
        #(dedans
          commentaire bloc
        )),
      #( bb),
      5,
      #(cc
      )
    ),
    #(comment 1),
    y(
      ' dd&nbsp;',
      #( bla
blu),
      ee,
      2,
      #( @ )
    ),
    #( comment 2 ),
    a(b())
  ),
  #(Iñtërnâtiônàà̀lizætiøn ☃ 💩 ❤ 😁 👍),
  f(g),
  #(👍😁💥💪👎☀🌞🟥🟩"àà")
)
a( p(/ " \\' \\" \\n \\r \\\\r \\\\n \\\\\\\\ /g) , p(" \\\\ \\" \\\\\\" \\n \\r '") , p(' \\\\ \\' \\n \\r "  ') ),
#(
p('\\\\\\' \\' \\r \\n ')


        a( p(/ " \\' \\" \\n \\r \\\\r \\\\n \\\\\\\\ /g) , p(" \\\\ \\" \\n \\r '") , p(' \\\\ \\n \\r "  ') ),

appelf(nomf(f),p(/\\\\\\\\n/g),p('\\\\n'),p('\\\\r'))
      affecte(sql , "\\r\\n \\" \\\\\\\\
      select * from toto
      "),

      affecte(sql , '\\n \\r \\\\r \\\\n 
      select * from toto
      '),

)
EOT;
        $valeur_transformee=$valeur;
        /* $valeur_transformee=str_replace('\\','\\\\' , $valeur_transformee);*/
        /*
          $valeur_transformee=str_replace('\\\'','\\\\\'' , $valeur_transformee);
          $valeur_transformee=str_replace('\\','\\\\' , $valeur_transformee);
          $valeur_transformee=str_replace('\'','\\\'' , $valeur_transformee);
        */
        $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(vv_txtarea_rev1),value(' . $valeur_transformee . ')))';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/