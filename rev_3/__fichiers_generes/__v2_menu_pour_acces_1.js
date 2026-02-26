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
        les_menu1+=`<li><div id="menu_1" data-id_auto="10" data-id_menu="8" class="rev_b_svg" data-rev_click="m1(n1(x_ecran_coordonnees1),f1(entree_module()))" title="mes coordonnées"><svg class="rev_svg_dans_menu1" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg></div></li>`;
        les_menu1+=`<li><div id="menu_2" data-id_auto="1" data-id_menu="1" class="rev_bouton" data-rev_click="m1(n1(taches1),f1(entree_module()))" title="tâches">mes tâches</div></li>`;
        les_menu1+=`<li><div id="menu_3" data-id_auto="11" data-id_menu="10" class="rev_bouton" data-rev_click="m1(n1(taches2),f1(entree_module()))" title="les tâches">les tâches</div></li>`;
        /* ================== */
        les_sous_menus[0]+=`<li><div  id="menu_5"   data-id_auto="9" data-id_menu="9" class="rev_bouton"  title="groupes" data-rev_click="m1(n1(groupes1),f1(entree_module()))">groupes</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_6"   data-id_auto="5" data-id_menu="5" class="rev_bouton"  title="métier" data-rev_click="m1(n1(metiers1),f1(entree_module()))">métier</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_7"   data-id_auto="7" data-id_menu="7" class="rev_bouton"  title="accès" data-rev_click="m1(n1(acces1),f1(entree_module()))">accès</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_8"   data-id_auto="3" data-id_menu="3" class="rev_bouton"  title="utilisateurs" data-rev_click="m1(n1(utilisateurs1),f1(entree_module()))">utilisateurs</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_9"   data-id_auto="2" data-id_menu="2" class="rev_bouton"  title="sources" data-rev_click="m1(n1(sources1),f1(entree_module()))">sources</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_10"   data-id_auto="4" data-id_menu="4" class="rev_bouton"  title="autorisations" data-rev_click="m1(n1(autorisations1),f1(entree_module()))">autorisations</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_11"   data-id_auto="6" data-id_menu="6" class="rev_bouton"  title="menus" data-rev_click="m1(n1(menus1),f1(entree_module()))">menus</div></li>`;
        /* niveau 0 */
        if(les_sous_menus[0] !== ''){
            les_menu1+='<li><div data-separateur="0" data-libelle_noeud_menu1="0">organisation</div>';
            les_menu1+=`<ul id="menu_4" data-id_menu="4">`;
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

