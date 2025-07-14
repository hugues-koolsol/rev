<?php
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="4" class="hug_bouton" data-hug_click="c_taches1.page_liste_des_taches1(T0_chp_priorite_tache2(99)),indice_menu(4)" title="">tâches</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="6" class="hug_bouton" data-hug_click="c_rev_js1.charger_js_test1(),indice_menu(6)" title="">js</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']);
/*
  appelf(
  nomf(isset),
  p( tableau( nomt($_SESSION[__X_CLE_APPLICATION]) , p( 'chi_id_projet' ) ))
  )
*/){
    $t[]='<div data-id_menu="5" class="hug_bouton" data-hug_click="c_rev_mat1.charger_rev_test1(),maj_interface2(
 modifier(
  id(vv_txtarea_rev1),
  composante(value),
  avec(
   valeur_de_localstorage(\'zones_sauvegardées\',\'ls_rev1\')
  )
 )
),indice_menu(5)" title="">matrice</div>';
}
