<?php
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="4" class="hug_bouton" data-hug_click="c_taches1.page_liste_des_taches1(T0_chp_priorite_tache2(99))indice_menu(4)" title="">tâches</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="5" class="hug_bouton" data-hug_click="c_rev_mat1.page1(),maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_rev1\'))))indice_menu(5)" title="">matrice</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="6" class="hug_bouton" data-hug_click="c_rev_js1.page1(),maj_interface2(modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_js_rev1\'))))indice_menu(6)" title="">js</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="7" class="hug_bouton" data-hug_click="c_rev_html1.page1(),maj_interface2(modifier( id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_html_rev1\'))))indice_menu(7)" title="">html</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="8" class="hug_bouton" data-hug_click="c_rev_php1.page1(),maj_interface2(modifier( id(vv_txtarea_php_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_php_rev1\'))))indice_menu(8)" title="">php</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="9" class="hug_bouton" data-hug_click="c_rev_sql1.page1(),maj_interface2(modifier( id(vv_txtarea_sql_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_sql_rev1\'))))indice_menu(9)" title="">sql</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="10" class="hug_bouton" data-hug_click="c_rev_css1.page1(),maj_interface2(modifier(id(vv_txtarea_css_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_css_rev1\'))))indice_menu(10)" title="">css</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="11" class="hug_bouton" data-hug_click="c_rev_texte1.page1(),maj_interface2(modifier(id(vv_txtarea_texte_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_texte_rev1\'))))indice_menu(11)" title="">txt</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="12" class="hug_bouton" data-hug_click="c_projets1.page_projets_liste1()indice_menu(12)" title="">projets</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="13" class="hug_bouton" data-hug_click="c_dossiers1.page_dossiers_liste1()indice_menu(13)" title="">fido</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="14" class="hug_bouton" data-hug_click="c_sources1.page_liste_des_sources1()indice_menu(14)" title="">sources</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="15" class="hug_bouton" data-hug_click="c_bases1.page_liste_des_bases1(),indice_menu(15)" title="">bases</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="16" class="hug_bouton" data-hug_click="c_requetes1.page_liste_des_requetes1()indice_menu(16)" title="">requêtes</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="17" class="hug_bouton" data-hug_click="c_revs1.page_liste_des_revs1()indice_menu(17)" title="">revs</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="18" class="hug_bouton" data-hug_click="c_groupes1.page_liste_des_groupes1(),indice_menu(18)" title="">groupes</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="19" class="hug_bouton" data-hug_click="c_metiers1.page_liste_des_metiers1()indice_menu(19)" title="">métiers</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="20" class="hug_bouton" data-hug_click="c_utilisateurs1.page_liste_des_utilisateurs1()indice_menu(20)" title="">utilisateurs</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="21" class="hug_bouton" data-hug_click="c_acces1.page_liste_des_acces1()indice_menu(21)" title="">accès</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="22" class="hug_bouton" data-hug_click="c_pages1.page_liste_des_pages1()indice_menu(22)" title="">pages</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){
    $t[]='<div data-id_menu="23" class="hug_bouton" data-hug_click="c_menus1.page_liste_des_menus1()indice_menu(23)" title="">menus</div>';
}
if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){
    $t[]='<div data-id_menu="24" class="hug_bouton" data-hug_click="c_profile1.recupere_la_page_des_coordonnees()indice_menu(24)" title="">profile</div>';
}
