<?php
require_once('__definitions.php');
$donnees_retournees=array(
    /*statut de la réponse, à priori faux*/
    __xst => __xer,
    /*utilisateur connecté, à priori faux*/
    __x_authentifie => __xer,
    /*signaux d'erreur */
    __x_signaux => array(
            __xer => array(),
            __xsu => array(),
            __xal => array(),
            __xif => array(),
            __xdv => array()
        ),
    /*action*/
    __x_action => '',
    /*page*/
    __x_page => '',
    /*données retournées au client */
    __xva => array(),
    /* fichier traitant le programme */
    __x_fichier => '',
    /* ligne dans le fichier */
    __x_ligne => [],
    /* numéro d'erreur absolu */
    __xnu => 0,
    /* boutons */
    __xbo => '',
    /* boutons */
    __X_VERSION => ''
);
/*
  =====================================================================================================================
*/
function obtenir_les_menus(){

    $t=array();
    
    if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){

        /* 10 3 11*/
        /* 10 '<div class="hug_bouton" data-hug_click="c_divers1.ajoute_a_valeur_session(variable(compteur_session_php1),valeur(-1))" title="">👎-1</div>',*/
        /* 11 '<div class="hug_bouton" data-hug_click="c_divers1.ajoute_a_valeur_session(variable(compteur_session_php1),valeur(1))" title="">+1👍</div>',*/
        $t[]='<div data-id_menu="10" class="hug_bouton" data-hug_click="c_taches1.page_liste_des_taches1(T0_chp_priorite_tache2(99),indice_menu(10))" title="tâches">tâches</div>' . PHP_EOL;
        $t[]='<div data-id_menu="50" class="hug_bouton" data-hug_click="c_rev_mat1.page1(),indice_menu(50),maj_interface2(modifier( id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_rev1\'))))" title="convertir un source rev en matrice">mat</div>';
        $t[]='<div data-id_menu="51" class="hug_bouton" data-hug_click="c_rev_js1.page1(),indice_menu(51),maj_interface2(modifier( id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_js_rev1\'))))" title="js &lt;-&gt; rev">js</div>';
        $t[]='<div data-id_menu="52" class="hug_bouton" data-hug_click="c_rev_html1.page1(),indice_menu(52),maj_interface2(modifier( id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_html_rev1\'))))" title="html &lt;-&gt; rev">html</div>';
        $t[]='<div data-id_menu="53" class="hug_bouton" data-hug_click="c_rev_php1.page1(),indice_menu(53),maj_interface2(modifier( id(vv_txtarea_php_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_php_rev1\'))))" title="php &lt;-&gt; rev">php</div>';
        $t[]='<div data-id_menu="54" class="hug_bouton" data-hug_click="c_rev_sql1.page1(),indice_menu(54),maj_interface2(modifier( id(vv_txtarea_sql_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_sql_rev1\'))))" title="sql &lt;-&gt; rev">sql</div>';
        $t[]='<div data-id_menu="55" class="hug_bouton" data-hug_click="c_rev_css1.page1(),indice_menu(55),maj_interface2(modifier( id(vv_txtarea_css_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_css_rev1\'))))" title="css &lt;-&gt; rev">css</div>';
        $t[]='<div data-id_menu="61" class="hug_bouton" data-hug_click="c_rev_texte1.page1(),indice_menu(61),maj_interface2(modifier( id(vv_txtarea_texte_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_texte_rev1\'))))" title="texte &lt;-&gt; rev">txt</div>';
        $t[]='<div data-id_menu="56" class="hug_bouton" data-hug_click="c_projets1.page_projets_liste1(indice_menu(56))" title="projets">projets</div>' . PHP_EOL;
        
        if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

            $t[]='<div data-id_menu="57" class="hug_bouton" data-hug_click="c_dossiers1.page_dossiers_liste1(indice_menu(57))" title="fichiers et dossiers">fido</div>' . PHP_EOL;
            $t[]='<div data-id_menu="60" class="hug_bouton" data-hug_click="c_sources1.page_liste_des_sources1(indice_menu(60))" title="sources">sources</div>' . PHP_EOL;
            $t[]='<div data-id_menu="58" class="hug_bouton" data-hug_click="c_bases1.page_liste_des_bases1(indice_menu(58))" title="bases de données">bases</div>' . PHP_EOL;
            $t[]='<div data-id_menu="59" class="hug_bouton" data-hug_click="c_requetes1.page_liste_des_requetes1(indice_menu(59))" title="requêtes">requêtes</div>' . PHP_EOL;
            $t[]='<div data-id_menu="62" class="hug_bouton" data-hug_click="c_revs1.page_liste_des_revs1(indice_menu(62))" title="sources">revs</div>' . PHP_EOL;
            $t[]='<div data-id_menu="63" class="hug_bouton" data-hug_click="c_groupes1.page_liste_des_groupes1(indice_menu(63))" title="sources">groupes</div>' . PHP_EOL;
            $t[]='<div data-id_menu="65" class="hug_bouton" data-hug_click="c_metiers1.page_liste_des_metiers1(indice_menu(65))" title="metiers">metiers</div>' . PHP_EOL;
            $t[]='<div data-id_menu="64" class="hug_bouton" data-hug_click="c_utilisateurs1.page_liste_des_utilisateurs1(indice_menu(64))" title="sources">utilisateurs</div>' . PHP_EOL;
            $t[]='<div data-id_menu="66" class="hug_bouton" data-hug_click="c_acces1.page_liste_des_acces1(indice_menu(66))" title="acces">acces</div>' . PHP_EOL;
            $t[]='<div data-id_menu="67" class="hug_bouton" data-hug_click="c_pages1.page_liste_des_pages1(indice_menu(67))" title="pages">pages</div>' . PHP_EOL;

        }

        $t[]='<div data-id_menu="11" class="hug_bouton" style="min-width:2em;" data-hug_click="c_profile1.recupere_la_page_des_coordonnees(),indice_menu(11)" title="mes coordonnées"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -7  20 21"><g style="stroke:rgb(0, 0, 255);fill:transparent;stroke-width:1;"><circle cx="0" cy="0" r="6"></circle><path d=" M -8 11 C -6 6 6 6 8 11 "></path><circle cx="-2" cy="-1" r="1"></circle><circle cx="2" cy="-1" r="1"></circle><path d="M -2 2 C -3 4 3 4 2 2 "></path><path d="M 0 0 V 2 "></path><path d="M -3 -1   H -6    "></path><path d="M 3 -1   H 6    "></path><path d="M -1 -1 c 0 -1 2 -1 2 0 "></path></g></svg></div>';

    }else{

    }
    if(isset($_COOKIE[__X_CLE_APPLICATION])){

        $tcok=json_decode($_COOKIE[__X_CLE_APPLICATION],true);
        
        if(isset($tcok['aspect'])
           && isset($tcok['aspect']['utiliser_les_sockets'])
           && $tcok['aspect']['utiliser_les_sockets'] === 1
        ){

            $t[]='<div data-id_menu="4" id="vv_etat_chausette" class="hug_bouton yy__x_signaux_0" data-hug_click="c_worker1.connecter_la_chausette()" title="état de la connexion" style="" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5  30 30"><path d=" M 5 25 L 25 5 L 16 19 L 35 15 L 15 35 L 24 21  z" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:yellow;fill:orange;stroke-width:1;"></path></svg>
                        </div>' . PHP_EOL;

        }


    }

    return $t;

}

if(is_file(REPERTOIRE_DU_SERVEUR . DIRECTORY_SEPARATOR . '__version.txt')){

    $donnees_retournees[__X_VERSION]=@file_get_contents(REPERTOIRE_DU_SERVEUR . DIRECTORY_SEPARATOR . '__version.txt');

}

demarre_services($donnees_retournees);
/*
  =====================================================================================================================
*/

if(isset($_POST) && count($_POST) > 0 && isset($_GET[__obj]) && isset($_POST[__obj])){

    $donnees_recues=json_decode($_POST['__obj'],true);
    
    if(isset($donnees_recues[__x_action])){

        $donnees_retournees[__x_action]=$donnees_recues[__x_action];
        /*
          =====================================================================================================
          la première page est une exception
          =====================================================================================================
        */
        
        if(substr($donnees_recues[__x_action],0,34) === 'recuperation_de_la_premiere_page()'){

            $mat=array();
            /* la première page [F5 ou CTRL-F5] ou l'arrivée sur le site est une exception */
            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_accueil1.php');
            $obj_accueil=new c_accueil1($donnees_retournees,$mat,$donnees_recues);
            /* =============== */
            /* à priori */
            /* =============== */
            $fonction_a_appeler='c_accueil1.recupere_la_page_d_accueil()';
            
            if(isset($donnees_recues['__xva'])){

                $href='';
                
                if(!is_string($donnees_recues['__xva'])){

                    
                    if(isset($donnees_recues['__xva']['href'])){

                        $href=$donnees_recues['__xva']['href'];

                    }


                }else{

                    $href=$donnees_recues['__xva'];
                }

                /*#
                if($href !== ''){

                    $pos=strpos($href,'#');
                    
                    if($pos !== false){

                        $nom_de_fonction=substr($href,$pos + 1);
                        
                        // echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $nom_de_fonction , true ) . '</pre>' ; exit(0);
                        $nom_de_fonction_sans_parentheses=substr($nom_de_fonction,0,strpos($nom_de_fonction,'('));
                        
                        if(method_exists($obj_accueil,$nom_de_fonction_sans_parentheses)){

                            echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $nom_de_fonction , true ) . '</pre>' ; exit(0);
                            $donnees_retournees['fonction_a_appeler']='c_pagesxxxxxx1.' . $nom_de_fonction;
                            $fonction_a_appeler='c_pages1.' . $nom_de_fonction;
                            // echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $fonction_a_appeler , true ) . '</pre>' ; exit(0);

                        }


                    }


                }
                */


            }

            /* $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . '<pre>' . var_export($donnees_recues , true) . '</pre>';*/
            $donnees_recues['fonction_a_appeler']=$fonction_a_appeler;
            /*
              on récupère les menus du haut et bas et un contenu qui est à priori ( voir plus haut ) recupere_la_page_d_accueil, 
              et éventuellement la page d'accueil
            */
            $donnees_retournees[__xva][__xme]=$obj_accueil->recupere_de_la_page_initiale($donnees_retournees,$mat,$donnees_recues);
            $donnees_retournees[__xst]=__xsu;
            
            if(!isset($donnees_retournees[__xva]['redirection'])){

                $donnees_retournees[__xva]['redirection']=$fonction_a_appeler;

            }

            $donnees_retournees[__xbo]=obtenir_les_menus();
            /*
              il faut "allumer" le bouton du menu
            */
            $tab_trouve_1=array();
            $a_chercher1=substr($donnees_retournees[__xva]['redirection'],0,strpos($donnees_retournees[__xva]['redirection'],'('));
            foreach($donnees_retournees[__xbo] as $k1 => $v1){
                
                if(strpos($v1,$a_chercher1) !== false){

                    $tab_trouve_1[]=$v1;
                    /* indice_menu afr*/
                    /* $donnees_retournees[__x_signaux][__xdv][]='<pre>' . enti1(var_export($donnees_retournees[__xbo] , true )) .'</pre> [' . __LINE__ . ']'; */

                }

            }
            
            if(count($tab_trouve_1) === 0){

                /*
                  on n'a pas trouvé un menu , à priori on met la page d'accueil ...
                */
                
                if(!isset($donnees_retournees[__xva]['maj'])){

                    $donnees_retournees[__xva]['maj']='allumer_menu(1)';

                }else{

                    $donnees_retournees[__xva]['maj'] .= 'allumer_menu(1)';
                }

                /*
                  ... mais c'est peut être une sous page.
                */
                
                if(strpos($a_chercher1,'.') !== false){

                    $a_chercher1=substr($a_chercher1,0,strpos($a_chercher1,'.'));
                    foreach($donnees_retournees[__xbo] as $k1 => $v1){
                        
                        if(strpos($v1,$a_chercher1) !== false){

                            $tt=$v1;
                            
                            if(strpos($tt,'indice_menu(') !== false){

                                $tt2=substr($tt,strpos($tt,'indice_menu(') + 12);
                                
                                if(strpos($tt2,')') !== false){

                                    $tt3=substr($tt2,0,strpos($tt2,')'));
                                    
                                    if(is_numeric($tt3)){

                                        $tt3=(int)($tt3);
                                        $donnees_retournees[__xva]['maj'] .= 'allumer_menu(' . $tt3 . ')';
                                        /* this.#id_menu*/

                                    }


                                }


                            }

                            break;

                        }

                    }

                }


            }else if(count($tab_trouve_1) === 1){

                $tt=$tab_trouve_1[0];
                
                if(strpos($tt,'indice_menu(') !== false){

                    $tt2=substr($tt,strpos($tt,'indice_menu(') + 12);
                    
                    if(strpos($tt2,')') !== false){

                        $tt3=substr($tt2,0,strpos($tt2,')'));
                        
                        if(is_numeric($tt3)){

                            $tt3=(int)($tt3);
                            $donnees_retournees[__xva]['maj']='allumer_menu(' . $tt3 . ')';
                            /* this.#id_menu*/

                        }


                    }


                }


            }else{

                $donnees_retournees[__x_signaux][__xdv][]='<pre>' . enti1(var_export($donnees_retournees[__xbo],true)) . '</pre> [' . __LINE__ . ']';
            }

            /*
              le __x_action a peut être été mis à jour , on force ici
            */
            $donnees_retournees[__x_action]='recuperation_de_la_premiere_page()';

        }else{

            /*
              toutes les autres pages, commandes, fonctions .... sont traitées ici
            */
            $donnees_retournees[__x_ligne][]=__LINE__;
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
            traite_autre_fonction($donnees_recues,$donnees_retournees);
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
        }


    }


}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($donnees_retournees,JSON_FORCE_OBJECT) ;
exit(0);