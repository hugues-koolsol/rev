class v2_menu_pour_acces_1{
    /*
      =============================================================================================================
    */
    constructor(){
        /* console.log('constructor de menu1'); */
    }
    /*
      =============================================================================================================
    */
    obtenir_le_html_des_menus( donnees_retournees ){
        let les_menu1='';
        /* contenu initialisé avec une chaine vide pour indice 0 */
        let les_sous_menus=[''];
        les_menu1+=`<li><div id="menu_1" data-id_auto="52" data-id_menu="24" class="rev_bouton" data-rev_click="m1(n1(projets1),f1(entree_module()))" title="liste des projets">projets</div></li>`;
        if(donnees_retournees.chi_id_projet > 0){
            les_menu1+=`<li><div id="menu_2" data-id_auto="53" data-id_menu="31" class="rev_bouton" data-rev_click="m1(n1(taches1),f1(entree_module(T0_chp_priorite_tache2(99))))" title="Liste des tâches">tâches</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_menu1+=`<li><div id="menu_3" data-id_auto="25" data-id_menu="9" class="rev_bouton" data-rev_click="m1(n1(dossiers1),f1(entree_module()))" title="liste des dossiers et des fichiers">dossiers</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_menu1+=`<li><div id="menu_4" data-id_auto="27" data-id_menu="10" class="rev_bouton" data-rev_click="m1(n1(sources1),f1(entree_module()))" title="liste des sources des programmes">sources</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_menu1+=`<li><div id="menu_5" data-id_auto="28" data-id_menu="22" class="rev_bouton" data-rev_click="m1(n1(genres1),f1(entree_module()))" title="liste des genres de données dans la bdd">genres</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_menu1+=`<li><div id="menu_6" data-id_auto="29" data-id_menu="11" class="rev_bouton" data-rev_click="m1(n1(bdds1),f1(entree_module()))" title="liste des bases">bases</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_menu1+=`<li><div id="menu_7" data-id_auto="30" data-id_menu="12" class="rev_bouton" data-rev_click="m1(n1(requetes1),f1(entree_module()))" title="liste des requêtes sur les bases">requêtes</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_menu1+=`<li><div id="menu_8" data-id_auto="54" data-id_menu="33" class="rev_bouton" data-rev_click="m1(n1(revs1),f1(entree_module()))" title="liste des revs">revs</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_menu1+=`<li><div id="menu_9" data-id_auto="55" data-id_menu="34" class="rev_bouton" data-rev_click="m1(n1(travaux1),f1(entree_module()))" title="liste des travaux">travaux</div></li>`;
        }
        /* ================== */
        les_sous_menus[0]+=`<li><div  id="menu_10"   data-id_auto="46" data-id_menu="32" class="rev_b_svg"  title="coordonnées" data-rev_click="m1(n1(x_ecran_coordonnees1),f1(entree_module()))"><svg class="rev_svg_dans_menu1" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg></div></li>`;
        les_sous_menus[0]+=`<li data-separateur="1">organisation</li>`;
        if(donnees_retournees.chi_id_projet > 0){
            les_sous_menus[0]+=`<li><div  id="menu_13"   data-id_auto="31" data-id_menu="14" class="rev_bouton"  title="liste des groupes" data-rev_click="m1(n1(groupes1),f1(entree_module()))">groupes</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_sous_menus[0]+=`<li><div  id="menu_14"   data-id_auto="32" data-id_menu="15" class="rev_bouton"  title="liste des métiers" data-rev_click="m1(n1(metiers1),f1(entree_module()))">métiers</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_sous_menus[0]+=`<li><div  id="menu_15"   data-id_auto="33" data-id_menu="25" class="rev_bouton"  title="liste des accès" data-rev_click="m1(n1(acces1),f1(entree_module()))">accès</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_sous_menus[0]+=`<li><div  id="menu_16"   data-id_auto="26" data-id_menu="18" class="rev_bouton"  title="liste des autorisations" data-rev_click="m1(n1(autorisations1),f1(entree_module()))">autorisations</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_sous_menus[0]+=`<li><div  id="menu_17"   data-id_auto="34" data-id_menu="19" class="rev_bouton"  title="liste des menus" data-rev_click="m1(n1(menus1),f1(entree_module()))">menus</div></li>`;
        }
        if(donnees_retournees.chi_id_projet === 1 && donnees_retournees._CA_ == 1){
            les_sous_menus[0]+=`<li><div  id="menu_18"   data-id_auto="35" data-id_menu="17" class="rev_bouton"  title="liste des utilisateurs" data-rev_click="m1(n1(utilisateurs1),f1(entree_module()))">utilisateurs</div></li>`;
        }
        les_sous_menus[0]+=`<li data-separateur="1">outils génération</li>`;
        if(donnees_retournees.chi_id_projet > 0){
            les_sous_menus[0]+=`<li><div  id="menu_20"   data-id_auto="36" data-id_menu="26" class="rev_bouton"  title="générer des programmes" data-rev_click="m1(n1(x_ecran_generer_programmes1),f1(entree_module()))">générer</div></li>`;
        }
        if(donnees_retournees.chi_id_projet > 0){
            les_sous_menus[0]+=`<li><div  id="menu_21"   data-id_auto="51" data-id_menu="30" class="rev_bouton"  title="générer les souches" data-rev_click="m1(n1(x_ecran_generer_souches1),f1(entree_module()))">souches</div></li>`;
        }
        les_sous_menus[0]+=`<li data-separateur="1">outils convertions</li>`;
        les_sous_menus[0]+=`<li><div  id="menu_23"   data-id_auto="38" data-id_menu="3" class="rev_bouton"  title="convertion de javascript " data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(entree_module()))">js</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_24"   data-id_auto="37" data-id_menu="2" class="rev_bouton"  title="convertion de rev vers matrice" data-rev_click="m1(n1(x_ecran_rev_vers_matrice1),f1(entree_module()))">matrice</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_25"   data-id_auto="39" data-id_menu="21" class="rev_bouton"  title="html" data-rev_click="m1(n1(x_ecran_rev_vers_html1),f1(entree_module()))">html</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_26"   data-id_auto="40" data-id_menu="4" class="rev_bouton"  title="convertion de php" data-rev_click="m1(n1(x_ecran_rev_vers_php1),f1(entree_module()))">php</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_27"   data-id_auto="41" data-id_menu="5" class="rev_bouton"  title="convertion de sql" data-rev_click="m1(n1(x_ecran_rev_vers_sql1),f1(entree_module()))">sql</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_28"   data-id_auto="42" data-id_menu="6" class="rev_bouton"  title="convertion de css" data-rev_click="m1(n1(x_ecran_rev_vers_css1),f1(entree_module()))">css</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_29"   data-id_auto="44" data-id_menu="7" class="rev_bouton"  title="convertion de textes" data-rev_click="m1(n1(x_ecran_rev_vers_txt1),f1(entree_module()))">txt</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_30"   data-id_auto="45" data-id_menu="27" class="rev_bouton"  title="source vers programme" data-rev_click="m1(n1(x_ecran_source_vers_programme1),f1(entree_module()))">src->pgm</div></li>`;
        /* niveau 0 */
        if(les_sous_menus[0] !== ''){
            les_menu1+='<li><div data-separateur="0" data-libelle_noeud_menu1="0">autres</div>';
            les_menu1+=`<ul id="menu_11" data-id_menu="11">`;
            les_menu1+=les_sous_menus[0];
            les_menu1+=`</ul>`;
            les_menu1+='</li>';
        }
        les_sous_menus.pop();


        if(les_menu1 !== ''){
            les_menu1='<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="v2_menu_pour_acces_1">' + les_menu1 + '</ul>';
        }
        return les_menu1;

    }
}
export{v2_menu_pour_acces_1 as v2_menu_pour_acces_1};

