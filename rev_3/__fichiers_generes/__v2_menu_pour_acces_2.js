class v2_menu_pour_acces_2{
    /*
      =============================================================================================================
    */
    __ig1=null;
    constructor(__ig1){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
    obtenir_le_html_des_menus( donnees_retournees ){
        let les_menu1='';
        /* contenu initialisé avec une chaine vide pour indice 0 */
        let les_sous_menus=[''];
        les_menu1+=`<li><button id="menu_1" data-id_auto="12" data-id_menu="11" data-id_source="88" class="yy_svg1" rev_clic1="m1(n1(x_ecran_coordonnees1),f1(entree_module()))" title="mes coordonnées"><svg class="rev_svg_dans_menu1" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg></button></li>`;
        les_menu1+=`<li><button id="menu_2" data-id_auto="13" data-id_menu="12" data-id_source="1011" class="yy_b1" rev_clic1="m1(n1(taches1),f1(entree_module()))" title="tâches">mes tâches</button></li>`;
        les_menu1+=`<li><button id="menu_3" data-id_auto="47" data-id_menu="20" data-id_source="1016" class="yy_b1" rev_clic1="m1(n1(acteurs1),f1(entree_module()))" title="utilisateurs">acteurs</button></li>`;
        /* ================== */
        les_sous_menus[0]+=`<li><button  id="menu_11"   data-id_auto="59" data-id_menu="22" data-id_source="1019" class="yy_b1"  title="param1" rev_clic1="m1(n1(parametres1),f1(entree_module()))">param1</button></li>`;
        les_sous_menus[0]+=`<li><button  id="menu_5"   data-id_auto="25" data-id_menu="13" data-id_source="94" class="yy_b1"  title="groupes" rev_clic1="m1(n1(groupes1),f1(entree_module()))">groupes</button></li>`;
        les_sous_menus[0]+=`<li><button  id="menu_6"   data-id_auto="27" data-id_menu="14" data-id_source="96" class="yy_b1"  title="métier" rev_clic1="m1(n1(metiers1),f1(entree_module()))">métier</button></li>`;
        les_sous_menus[0]+=`<li><button  id="menu_7"   data-id_auto="29" data-id_menu="15" data-id_source="99" class="yy_b1"  title="accès" rev_clic1="m1(n1(acces1),f1(entree_module()))">accès</button></li>`;
        les_sous_menus[0]+=`<li><button  id="menu_8"   data-id_auto="31" data-id_menu="16" data-id_source="105" class="yy_b1"  title="autorisations" rev_clic1="m1(n1(autorisations1),f1(entree_module()))">autorisations</button></li>`;
        les_sous_menus[0]+=`<li><button  id="menu_9"   data-id_auto="33" data-id_menu="18" data-id_source="107" class="yy_b1"  title="menus" rev_clic1="m1(n1(menus1),f1(entree_module()))">menus</button></li>`;
        les_sous_menus[0]+=`<li><button  id="menu_10"   data-id_auto="36" data-id_menu="19" data-id_source="101" class="yy_b1"  title="utilisateurs" rev_clic1="m1(n1(utilisateurs1),f1(entree_module()))">utilisateurs</button></li>`;
        /* niveau 0 */
        if(les_sous_menus[0] !== ''){
            les_menu1+='<li><div data-separateur="0" data-libelle_noeud_menu1="0">admin</div>';
            les_menu1+=`<ul id="menu_4" data-id_menu="4">`;
            les_menu1+=les_sous_menus[0];
            les_menu1+=`</ul>`;
            les_menu1+='</li>';
        }
        les_sous_menus.pop();


        if(les_menu1 !== ''){
            les_menu1='<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="v2_menu_pour_acces_2">' + les_menu1 + '</ul>';
        }
        return les_menu1;

    }
}
export{v2_menu_pour_acces_2 as v2_menu_pour_acces_2};

