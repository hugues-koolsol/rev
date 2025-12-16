<?php
$les_menu1='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu1.='<li><div id="menu_1" data-id_menu="23" class="rev_bouton" data-rev_click="m1(n1(c_taches1),f1(liste_du_menu0(T0_chp_priorite_tache2(99))))" title="Liste des tâches">tâches</div></li>'.PHP_EOL;
}
$les_menu1.='<li><div id="menu_2" data-id_menu="24" class="rev_bouton" data-rev_click="m1(n1(c_projets1),f1(liste_du_menu0()))" title="liste des projets">projets</div></li>'.PHP_EOL;
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu1.='<li><div id="menu_3" data-id_menu="9" class="rev_bouton" data-rev_click="m1(n1(c_dossiers1),f1(liste_du_menu0()))" title="liste des dossiers et des fichiers">dossiers</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu1.='<li><div id="menu_4" data-id_menu="10" class="rev_bouton" data-rev_click="m1(n1(c_sources1),f1(liste_du_menu0()))" title="liste des sources des programmes">sources</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu1.='<li><div id="menu_5" data-id_menu="22" class="rev_bouton" data-rev_click="m1(n1(c_genres1),f1(liste_du_menu0()))" title="liste des types de bonnées dans la bdd">genres</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu1.='<li><div id="menu_6" data-id_menu="11" class="rev_bouton" data-rev_click="m1(n1(c_bdds1),f1(liste_du_menu0()))" title="liste des bases">bases</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu1.='<li><div id="menu_7" data-id_menu="12" class="rev_bouton" data-rev_click="m1(n1(c_requetes1),f1(liste_du_menu0()))" title="liste des requêtes sur les bases">requêtes</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu1.='<li><div id="menu_8" data-id_menu="28" class="rev_bouton" data-rev_click="m1(n1(c_revs1),f1(liste_du_menu0()))" title="liste des revs">revs</div></li>'.PHP_EOL;
}
/*
  ==================
*/
$le_sous_menu1_0='';
/*
  ==================
*/
$le_sous_menu1_1='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu1_1.='
    <li><div id="menu_11"  class="rev_bouton" data-rev_click="m1(n1(c_groupes1),f1(liste_du_menu0()))">groupes</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu1_1.='
    <li><div id="menu_12"  class="rev_bouton" data-rev_click="m1(n1(c_metiers1),f1(liste_du_menu0()))">métiers</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu1_1.='
    <li><div id="menu_13"  class="rev_bouton" data-rev_click="m1(n1(c_acces1),f1(liste_du_menu0()))">accès</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu1_1.='
    <li><div id="menu_14"  class="rev_bouton" data-rev_click="m1(n1(c_autorisations1),f1(liste_du_menu0()))">autorisations</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] === 1){
    $le_sous_menu1_1.='
    <li><div id="menu_15"  class="rev_bouton" data-rev_click="m1(n1(c_utilisateurs1),f1(liste_du_menu0()))">utilisateurs</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu1_1.='
    <li><div id="menu_16"  class="rev_bouton" data-rev_click="m1(n1(c_menus1),f1(liste_du_menu0()))">menus</div></li>'.PHP_EOL;
}
/* niveau 1 */
if($le_sous_menu1_1!==''){
    $le_sous_menu1_0.='<li><div data-libelle_noeud_menu1="1">organisation</div>';
    $le_sous_menu1_0.='<ul id="menu_10" data-id_menu="10">
';
    $le_sous_menu1_0.=$le_sous_menu1_1.PHP_EOL;
    $le_sous_menu1_0.='</ul>'.PHP_EOL;
    $le_sous_menu1_0.='</li>'.PHP_EOL;
}
/*
  ==================
*/
$le_sous_menu1_1='';
/*
  ==================
*/
$le_sous_menu1_2='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0 && isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_19"  class="rev_bouton" data-rev_click="m1(n1(ecran_generer_programmes),f1(page_generer_le_programme1()))">générer</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_20"  class="rev_bouton" data-rev_click="m1(n1(ecran_source_vers_programme),f1(point_d_entree()))">source</div></li>'.PHP_EOL;
}
/* niveau 2 */
if($le_sous_menu1_2!==''){
    $le_sous_menu1_1.='<li><div data-libelle_noeud_menu1="2">générations</div>';
    $le_sous_menu1_1.='<ul id="menu_18" data-id_menu="18">
';
    $le_sous_menu1_1.=$le_sous_menu1_2.PHP_EOL;
    $le_sous_menu1_1.='</ul>'.PHP_EOL;
    $le_sous_menu1_1.='</li>'.PHP_EOL;
}
/*
  ==================
*/
$le_sous_menu1_2='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_22"  class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_matrice1),f1(ecran_matrice()))">matrice</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_23"  class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_html1),f1(ecran_rev_html()))">html</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_24"  class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_js1),f1(ecran_rev_js()))">js</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_25"  class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_php1),f1(ecran_rev_php()))">php</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_26"  class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_sql1),f1(ecran_rev_sql()))">sql</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_27"  class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_css1),f1(ecran_rev_css()))">css</div></li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_2.='
    <li><div id="menu_28"  class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_txt1),f1(ecran_rev_txt()))">txt</div></li>'.PHP_EOL;
}
/* niveau 2 */
if($le_sous_menu1_2!==''){
    $le_sous_menu1_1.='<li><div data-libelle_noeud_menu1="2">convertions</div>';
    $le_sous_menu1_1.='<ul id="menu_21" data-id_menu="21">
';
    $le_sous_menu1_1.=$le_sous_menu1_2.PHP_EOL;
    $le_sous_menu1_1.='</ul>'.PHP_EOL;
    $le_sous_menu1_1.='</li>'.PHP_EOL;
}
/* niveau 1 */
if($le_sous_menu1_1!==''){
    $le_sous_menu1_0.='<li><div data-libelle_noeud_menu1="1">outils</div>';
    $le_sous_menu1_0.='<ul id="menu_17" data-id_menu="17">
';
    $le_sous_menu1_0.=$le_sous_menu1_1.PHP_EOL;
    $le_sous_menu1_0.='</ul>'.PHP_EOL;
    $le_sous_menu1_0.='</li>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu1_0.='
    <li><div id="menu_29"  class="rev_b_svg" data-rev_click="m1(n1(ecran_coordonnees1),f1(ecran_coordonnees1()))"><svg class="rev_svg_dans_menu1" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="30"></circle><path d=" M -40 45 C -30 20 30 20 40 45"></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:1;"></path></svg></div></li>'.PHP_EOL;
}
/* niveau 0 */
if($le_sous_menu1_0!==''){
    $les_menu1.='<li><div data-libelle_noeud_menu1="0">autres</div>';
    $les_menu1.='<ul id="menu_9" data-id_menu="9">
';
    $les_menu1.=$le_sous_menu1_0.PHP_EOL;
    $les_menu1.='</ul>'.PHP_EOL;
    $les_menu1.='</li>'.PHP_EOL;
}

if($les_menu1!==''){
    $les_menu1='<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="menu_pour_acces_1_">'.$les_menu1.'</ul>';
}

