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
function obtenir_les_menus(&$donnees_retournees){

    $t=array();
    
    if(isset($_SESSION[__X_CLE_APPLICATION]['chx_groupe_utilisateur_courant'])
       && isset($_SESSION[__X_CLE_APPLICATION]['chx_metier_utilisateur_courant'])
    ){

        /*
          $t[]='<select><option>outils</option><option>matrice</option><option>html</option><option>js</option><option>php</option><option>sql</option><option>css</option><option>texte</option></select>';
        */
        $nom_fichier=REPERTOIRE_DU_PROJET . DIRECTORY_SEPARATOR . 'g_' . $_SESSION[__X_CLE_APPLICATION]['chx_groupe_utilisateur_courant'] . '_m_' . $_SESSION[__X_CLE_APPLICATION]['chx_metier_utilisateur_courant'] . '.php';
        
        if(is_file($nom_fichier)){

            include_once($nom_fichier);

        }


    }

    if(isset($_SESSION[__X_CLE_APPLICATION]['chx_acces_utilisateur'])){
     
        $nom_fichier=REPERTOIRE_DU_SERVEUR.DIRECTORY_SEPARATOR.'menu_acces_'.$_SESSION[__X_CLE_APPLICATION]['chx_acces_utilisateur'].'.php';

        if(is_file($nom_fichier)){

            include_once($nom_fichier);
            $donnees_retournees[__xmenu]=$le_menu;

        }

     
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

            $donnees_retournees[__xbo]=obtenir_les_menus($donnees_retournees);
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
                            
                            if(isset($donnees_retournees[__xva]['maj'])){

                                $donnees_retournees[__xva]['maj'] .= 'allumer_menu(' . $tt3 . ')';

                            }else{

                                $donnees_retournees[__xva]['maj']='allumer_menu(' . $tt3 . ')';
                            }

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
            
            /*
              récupération des données pour le développement
            */
            if(isset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'])){
                $chemin_fichier___liste_des_sql=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'] . DIRECTORY_SEPARATOR . '__liste_des_sql.php';
                
                if(is_file($chemin_fichier___liste_des_sql)){

                    include($chemin_fichier___liste_des_sql);
                    $donnees_retournees[__xva]['__liste_des_sql']=$__liste_des_sql;
                    /* $tableau_contenu_js;*/

                }else{

                    $donnees_retournees[__xva]['__liste_des_sql']=array();
                }

                $chemin_fichier__liste_des_genres=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'] . DIRECTORY_SEPARATOR . '__liste_des_genres.php';
                
                if(is_file($chemin_fichier__liste_des_genres)){

                    include($chemin_fichier__liste_des_genres);
                    $donnees_retournees[__xva]['__liste_des_genres']=$__liste_des_genres;
                    /* $tableau_contenu_js;*/

                }else{

                    $donnees_retournees[__xva]['__liste_des_genres']=array();
                }
            }
            

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