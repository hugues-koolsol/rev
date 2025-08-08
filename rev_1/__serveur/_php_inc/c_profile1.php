<?php
class c_profile1{
    private $sql0=null;
    /*
      =============================================================================================================
    */
    public function __construct(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_sql0.php');
        $this->sql0=new c_sql0(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
    }
    /*
      =============================================================================================================
    */
    public function formulaire1(&$donnees_retournees,&$mat,&$donnees_recues,$erreur_de_connexion=__xsu){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_profile1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                $conteneur1='';
                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'conteneur1' && $mat[$j][2] === 'f' && $mat[$j][8] === 1){

                        
                        if($mat[$j + 1][2] === 'c'){

                            $conteneur1=$mat[$j + 1][1];

                        }


                    }

                }
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $conteneur1 , true ) . '</pre>' ; exit(0);*/
                switch ($conteneur1){
                    case 'vv_formulaire_de_changement_de_nom_et_de_mot_de_passe':
                    $donnees_retournees[__x_ligne][]=__LINE__;
                        $this->vv_formulaire_de_changement_de_nom_et_de_mot_de_passe($donnees_retournees,$mat,$donnees_recues,$erreur_de_connexion);
                        /* echo __FILE__ . ' ' . __LINE__ . ' <pre>' . htmlentities( var_export($donnees_retournees , true )) .  '</pre>' ; exit(0); //*/
                        break;
                        
                }

            }

        }
    }
    /*
      =============================================================================================================
    */
    function vv_formulaire_de_changement_de_nom_et_de_mot_de_passe(&$donnees_retournees,&$mat,&$donnees_recues,$erreur_de_connexion){
        
        if(!isset($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'])){

            $this->recupere_la_page_des_coordonnees($donnees_retournees,$mat,$donnees_recues,'');
            return;

        }

        
        if(!(isset($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'])
               && isset($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur']))
        ){

            $this->recupere_la_page_des_coordonnees($donnees_retournees,$mat,$donnees_recues,$donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']);
            return;

        }

        
        if($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'] === ''
           || $donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur'] === ''
           || strpos($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'],' ') !== false
           || strpos($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur'],' ') !== false
           || strlen($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']) < 7
           || strlen($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur']) < 7
        ){

            $donnees_retournees[__x_signaux][__xer][]='le nom et le mot de passe doivent être renseignés avec au moins 7 caractères et ne doivent pas contenir le caractère espace';
            $this->recupere_la_page_des_coordonnees($donnees_retournees,$mat,$donnees_recues,$donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']);
            return;

        }

        
        if($GLOBALS[__BDD][1][LIEN_BDD] === null){

            $this->recupere_la_page_des_coordonnees($donnees_retournees,$mat,$donnees_recues,$donnees_recues[__xva]['chp_nom_de_connexion_utilisateur']);
            return;

        }

        $mdp=password_hash($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur'],PASSWORD_BCRYPT,array( 'cost' => 10));
        $chemin_bdd=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_1.sqlite';
        $db_1=new SQLite3($chemin_bdd);
        $tt=/*sql_inclure_deb*/
            /* sql_167()
            UPDATE tbl_utilisateurs SET 
               `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
               `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
            WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_167()*/ 167,
            array( 'n_chp_nom_de_connexion_utilisateur' => $donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'], 'n_chp_mot_de_passe_utilisateur' => $mdp, 'c_chi_id_utilisateur' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial']),
            $donnees_retournees,
            $db_1
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur[' . __LINE__ . ']';
            $this->recupere_la_page_des_coordonnees($donnees_retournees,$mat,$donnees_recues,$donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']);

        }else{

            $donnees_retournees[__x_signaux][__xsu][]=':-)';
            $donnees_retournees[__xst]=__xsu;
            $this->recupere_la_page_des_coordonnees($donnees_retournees,$mat,$donnees_recues,$donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']);
        }

    }
    /*
      =============================================================================================================
    */
    function recupere_la_page_des_coordonnees(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues,$chp_nom_de_connexion_utilisateur='webmaster@example.com'){
        $txt='';
        $tt147=/*sql_inclure_deb*/
            /* sql_147()
            / ***meta(sur_base_de_reference(1))*** /
            SELECT 
            `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
            `T0`.`chi_compteur_socket1_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
             FROM b1.tbl_utilisateurs T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
            
            WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_147()*/ 147,
            array( 'T0_chi_id_utilisateur' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']),
            $donnees_retournees
        );
        
        if($tt147[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Utilisateur non trouvé en base !!!! [' . __LINE__ . ']';

        }else{

            $txt .= '<h1>mon profile</h1>';
            $txt .= '<div id="vv_formulaire_de_changement_de_nom_et_de_mot_de_passe">';
            $txt .= '  <span>nouveau nom</span>';
            $txt .= '  <input type="text" id="vv_chp_nom_de_connexion_utilisateur" value="' . $tt147[__xva][0]['T0.chp_nom_de_connexion_utilisateur'] . '" autocapitalize="off" />';
            $txt .= '  <br />';
            $txt .= '  <span>nouveau mot de passe</span>';
            $txt .= '  <input type="password" id="vv_chp_mot_de_passe_utilisateur" value="" autocomplete="off" />';
            $txt .= '  <div class="hug_bouton" data-hug_click="c_profile1.formulaire1(conteneur1(vv_formulaire_de_changement_de_nom_et_de_mot_de_passe))" title="Cliquez ici pour vous connecter">changer mes coordonnées</div>';
            $txt .= '</div>';
            $txt .= '<p>';
            $txt .= 'Vous vous êtes connecté <b>' . $tt147[__xva][0]['T0.chi_compteur1_utilisateur'] . '</b> fois ;-)';
            $txt .= '<p>';
            $txt .= '<p>';
            $txt .= 'type d\'accès : <b>' . $tt147[__xva][0]['T1.chp_nom_acces'] . '</b> ';
            $txt .= '</p>';
            $tt304=/*sql_inclure_deb*/
                /* sql_304()
                SELECT 
                `T1`.`chp_nom_page` , `T0`.`chi_id_menu`
                 FROM b1.tbl_menus T0
                 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_page_menu
                
                WHERE `T1`.`chx_acces_page` = :T1_chx_acces_page 
                ORDER BY `T0`.`che_ordre_menu` ASC
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_304()*/ 304,
                array( 'T1_chx_acces_page' => $tt147[__xva][0]['T0.chx_acces_utilisateur']),
                $donnees_retournees
            );
            
            if($tt304[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';

            }else{

                
                if(count($tt304[__xva]) > 0){

                    $txt .= '<p>';
                    $txt .= 'liste des menus <b>triables</b>';
                    $txt .= '<ul id="vv_ordre_de_mes_menus" style="border:1px blue solid;max-width:30em;">';
                    foreach($tt304[__xva] as $k1 => $v1){
                        $txt .= '<li id="' . $v1['T0.chi_id_menu'] . '"  style="border:1px red solid;">' . $v1['T1.chp_nom_page'] . '</li>';
                    }
                    $txt .= '</ul>';
                    $txt .= '</p>';
                    
                    if(isset($donnees_retournees[__xva]['maj'])){

                        $donnees_retournees[__xva]['maj'] += ',faire_une_liste_triable2(id(vv_ordre_de_mes_menus))';

                    }else{

                        $donnees_retournees[__xva]['maj']='faire_une_liste_triable2(id(vv_ordre_de_mes_menus))';
                    }


                }

            }

        }

        $donnees_retournees[__x_page] .= $txt;
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/