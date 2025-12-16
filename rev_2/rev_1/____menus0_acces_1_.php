<?php
$les_menu0='';
$les_menu0.='<div id="menu_1" data-id_menu="24" class="rev_bouton" data-rev_click="m1(n1(c_projets1),f1(liste_du_menu0()))" title="liste des projets">projets</div>'.PHP_EOL;
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu0.='<div id="menu_2" data-id_menu="23" class="rev_bouton" data-rev_click="m1(n1(c_taches1),f1(liste_du_menu0(T0_chp_priorite_tache2(99))))" title="Liste des tâches">tâches</div>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu0.='<div id="menu_3" data-id_menu="9" class="rev_bouton" data-rev_click="m1(n1(c_dossiers1),f1(liste_du_menu0()))" title="liste des dossiers et des fichiers">dossiers</div>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu0.='<div id="menu_4" data-id_menu="10" class="rev_bouton" data-rev_click="m1(n1(c_sources1),f1(liste_du_menu0()))" title="liste des sources des programmes">sources</div>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu0.='<div id="menu_5" data-id_menu="22" class="rev_bouton" data-rev_click="m1(n1(c_genres1),f1(liste_du_menu0()))" title="liste des types de bonnées dans la bdd">genres</div>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu0.='<div id="menu_6" data-id_menu="11" class="rev_bouton" data-rev_click="m1(n1(c_bdds1),f1(liste_du_menu0()))" title="liste des bases">bases</div>'.PHP_EOL;
}
/*
  ==================
*/
$le_sous_menu0='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] === 1){
    $le_sous_menu0.='
    <option id="menu_10" data-action_option="m1(n1(c_utilisateurs1),f1(liste_du_menu0()))"">utilisateurs</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu0.='
    <option id="menu_11" data-action_option="m1(n1(c_autorisations1),f1(liste_du_menu0()))"">autorisations</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu0.='
    <option id="menu_12" data-action_option="m1(n1(c_metiers1),f1(liste_du_menu0()))"">métiers</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu0.='
    <option id="menu_13" data-action_option="m1(n1(c_groupes1),f1(liste_du_menu0()))"">groupes</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu0.='
    <option id="menu_14" data-action_option="m1(n1(c_menus1),f1(liste_du_menu0()))"">menus</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
    $le_sous_menu0.='
    <option id="menu_15" data-action_option="m1(n1(c_acces1),f1(liste_du_menu0()))"">accès</option>'.PHP_EOL;}
if($le_sous_menu0!==''){
    $les_menu0.='<select id="menu_9" data-id_menu="9" data-select_dans_menu="1" data-rev_change="m1(n1(__interface1),f1(change_option_de_select(nom_du_select(menu_9))))">
  <option>organisation</option>
';
    $les_menu0.=$le_sous_menu0.PHP_EOL;
    $les_menu0.='</select>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu0.='<div id="menu_7" data-id_menu="12" class="rev_bouton" data-rev_click="m1(n1(c_requetes1),f1(liste_du_menu0()))" title="liste des requêtes sur les bases">requêtes</div>'.PHP_EOL;
}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){
   $les_menu0.='<div id="menu_8" data-id_menu="28" class="rev_bouton" data-rev_click="m1(n1(c_revs1),f1(liste_du_menu0()))" title="liste des revs">revs</div>'.PHP_EOL;
}
/*
  ==================
*/
$le_sous_menu0='';
/*
  ==================
*/
$le_sous_menu0='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0 && isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_18" data-action_option="m1(n1(ecran_generer_programmes),f1(page_generer_le_programme1()))"">générer</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_19" data-action_option="m1(n1(ecran_source_vers_programme),f1(point_d_entree()))"">source</option>'.PHP_EOL;}
if($le_sous_menu0!==''){
    $les_menu0.='<select id="menu_17" data-id_menu="17" data-select_dans_menu="1" data-rev_change="m1(n1(__interface1),f1(change_option_de_select(nom_du_select(menu_17))))">
  <option>générations</option>
';
    $les_menu0.=$le_sous_menu0.PHP_EOL;
    $les_menu0.='</select>'.PHP_EOL;
}
/*
  ==================
*/
$le_sous_menu0='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_21" data-action_option="m1(n1(ecran_rev_vers_matrice1),f1(ecran_matrice()))"">matrice</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_22" data-action_option="m1(n1(ecran_rev_vers_html1),f1(ecran_rev_html()))"">html</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_23" data-action_option="m1(n1(ecran_rev_vers_js1),f1(ecran_rev_js()))"">js</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_24" data-action_option="m1(n1(ecran_rev_vers_php1),f1(ecran_rev_php()))"">php</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_25" data-action_option="m1(n1(ecran_rev_vers_sql1),f1(ecran_rev_sql()))"">sql</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_26" data-action_option="m1(n1(ecran_rev_vers_css1),f1(ecran_rev_css()))"">css</option>'.PHP_EOL;}
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_27" data-action_option="m1(n1(ecran_rev_vers_txt1),f1(ecran_rev_txt()))"">txt</option>'.PHP_EOL;}
if($le_sous_menu0!==''){
    $les_menu0.='<select id="menu_20" data-id_menu="20" data-select_dans_menu="1" data-rev_change="m1(n1(__interface1),f1(change_option_de_select(nom_du_select(menu_20))))">
  <option>convertions</option>
';
    $les_menu0.=$le_sous_menu0.PHP_EOL;
    $les_menu0.='</select>'.PHP_EOL;
}
if($le_sous_menu0!==''){
    $les_menu0.='<select id="menu_16" data-id_menu="16" data-select_dans_menu="1" data-rev_change="m1(n1(__interface1),f1(change_option_de_select(nom_du_select(menu_16))))">
  <option>outils</option>
';
    $les_menu0.=$le_sous_menu0.PHP_EOL;
    $les_menu0.='</select>'.PHP_EOL;
}
/*
  ==================
*/
$le_sous_menu0='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
    $le_sous_menu0.='
    <option id="menu_29" data-action_option="m1(n1(ecran_coordonnees1),f1(ecran_coordonnees1()))""><svg style="height:25px;width:25px;" class="rev_bouton" xmlns="http://www.w3.org/2000/svg" viewBox="-9 -10  20 21">
    <g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:1;">
        <circle cx="0" cy="0" r="6"></circle>
        <path d=" M -8 11 C -6 6 6 6 8 11 "></path>
        <circle cx="-2" cy="-1" r="1"></circle>
        <circle cx="2" cy="-1" r="1"></circle>
        <path d="M -2 2 C -3 4 3 4 2 2 "></path>
        <path d="M 0 0 V 2 "></path>
        <path d="M -3 -1   H -6    "></path>
        <path d="M 3 -1   H 6    "></path>
        <path d="M -1 -1 c 0 -1 2 -1 2 0 "></path>
    </g>
</svg></option>'.PHP_EOL;}
if($le_sous_menu0!==''){
    $les_menu0.='<select id="menu_28" data-id_menu="28" data-select_dans_menu="1" data-rev_change="m1(n1(__interface1),f1(change_option_de_select(nom_du_select(menu_28))))">
  <option>autres</option>
';
    $les_menu0.=$le_sous_menu0.PHP_EOL;
    $les_menu0.='</select>'.PHP_EOL;
}

