<?php
$t[4]='<div data-id_menu="4" class="hug_bouton" data-hug_click="c_taches1.page_liste_des_taches1(T0_chp_priorite_tache2(99))indice_menu(4)" title="">tâches</div>';
$t[5]='<div data-id_menu="5" class="hug_bouton" data-hug_click="c_rev_mat1.page1(),maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_rev1\'))))indice_menu(5)" title="">matrice</div>';
$t[7]='<div data-id_menu="7" class="hug_bouton" data-hug_click="c_rev_html1.page1(),maj_interface2(modifier( id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_html_rev1\'))))indice_menu(7)" title="">html</div>';
$t[6]='<div data-id_menu="6" class="hug_bouton" data-hug_click="c_rev_js1.page1(),maj_interface2(modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_js_rev1\'))))indice_menu(6)" title="">js</div>';
$t[8]='<div data-id_menu="8" class="hug_bouton" data-hug_click="c_rev_php1.page1(),maj_interface2(modifier( id(vv_txtarea_php_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_php_rev1\'))))indice_menu(8)" title="">php</div>';
$t[9]='<div data-id_menu="9" class="hug_bouton" data-hug_click="c_rev_sql1.page1(),maj_interface2(modifier( id(vv_txtarea_sql_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_sql_rev1\'))))indice_menu(9)" title="">sql</div>';
$t[10]='<div data-id_menu="10" class="hug_bouton" data-hug_click="c_rev_css1.page1(),maj_interface2(modifier(id(vv_txtarea_css_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_css_rev1\'))))indice_menu(10)" title="">css</div>';
$t[11]='<div data-id_menu="11" class="hug_bouton" data-hug_click="c_rev_texte1.page1(),maj_interface2(modifier(id(vv_txtarea_texte_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_texte_rev1\'))))indice_menu(11)" title="">txt</div>';
$t[12]='<div data-id_menu="12" class="hug_bouton" data-hug_click="c_projets1.page_projets_liste1()indice_menu(12)" title=""><span style="color:red;background:yellow;">projets</span></div>';

if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[13]='<div data-id_menu="13" class="hug_bouton" data-hug_click="c_dossiers1.page_dossiers_liste1()indice_menu(13)" title="">fido</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[14]='<div data-id_menu="14" class="hug_bouton" data-hug_click="c_sources1.page_liste_des_sources1()indice_menu(14)" title="">sources</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[15]='<div data-id_menu="15" class="hug_bouton" data-hug_click="c_bases1.page_liste_des_bases1(),indice_menu(15)" title="">bases</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[16]='<div data-id_menu="16" class="hug_bouton" data-hug_click="c_requetes1.page_liste_des_requetes1()indice_menu(16)" title="">requêtes</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[17]='<div data-id_menu="17" class="hug_bouton" data-hug_click="c_revs1.page_liste_des_revs1()indice_menu(17)" title="">(😊)</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[18]='<div data-id_menu="18" class="hug_bouton" data-hug_click="c_groupes1.page_liste_des_groupes1(),indice_menu(18)" title="">groupes</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[19]='<div data-id_menu="19" class="hug_bouton" data-hug_click="c_metiers1.page_liste_des_metiers1()indice_menu(19)" title="">métiers</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[21]='<div data-id_menu="21" class="hug_bouton" data-hug_click="c_acces1.page_liste_des_acces1()indice_menu(21)" title="">accès</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[22]='<div data-id_menu="22" class="hug_bouton" data-hug_click="c_utilisateurs1.page_liste_des_utilisateurs1()indice_menu(22)" title="">utilisateurs</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[23]='<div data-id_menu="23" class="hug_bouton" data-hug_click="c_autorisations1.page_liste_des_autorisations1()indice_menu(23)" title="">autorisations</div>';

}


if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

    $t[24]='<div data-id_menu="24" class="hug_bouton" data-hug_click="c_menus1.page_liste_des_menus1()indice_menu(24)" title="">menus</div>';

}

$t[25]='<div data-id_menu="24" class="hug_bouton" data-hug_click="c_profile1.recupere_la_page_des_coordonnees()indice_menu(25)" title=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -7  20 21">
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
            </svg>
</div>';