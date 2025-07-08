<?php
class c_connexion1{
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
    function traite_vv_formulaire_de_connexion(&$donnees_retournees,&$mat,&$donnees_recues,$erreur_de_connexion){
        
        if(!isset($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'])){

            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues,__xer,'');
            return;

        }

        
        if(!(isset($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'])
               && isset($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur']))
        ){

            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues,__xer,$donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']);
            return;

        }

        $tt=/*sql_inclure_deb*/
            /* sql_1()
            SELECT 
            `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T0`.`chx_groupe_utilisateur`
             FROM b1.tbl_utilisateurs T0
            WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
            LIMIT 1 OFFSET 0 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_1()*/ 1,
            array( 'T0_chp_nom_de_connexion_utilisateur' => $donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues,__xer,$donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']);
            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur sql';
            return;

        }

        
        if(password_verify($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur'],$tt[__xva][0]['T0.chp_mot_de_passe_utilisateur'])
        ){

            /*
              On se sert de chi_id_utilisateur_initial dans la partie technique de l'application
            */
            $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial']=$tt[__xva][0]['T0.chi_id_utilisateur'];
            /*
              On se sert de chi_id_utilisateur_courant dans la partie fonctionnelle de l'application
            */
            $_SESSION[__X_CLE_APPLICATION]['bidon']='bidon|bidon "et" encore bidon';
            $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']=$tt[__xva][0]['T0.chi_id_utilisateur'];
            $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial']=$tt[__xva][0]['T0.chi_id_utilisateur'];
            $_SESSION[__X_CLE_APPLICATION]['chx_groupe_utilisateur_courant']=$tt[__xva][0]['T0.chx_groupe_utilisateur'];
            $_SESSION[__X_CLE_APPLICATION]['chx_groupe_utilisateur_initial']=$tt[__xva][0]['T0.chx_groupe_utilisateur'];
            $_SESSION[__X_CLE_APPLICATION]['chx_metier_utilisateur_courant']=$tt[__xva][0]['T0.chx_metier_utilisateur'];
            $_SESSION[__X_CLE_APPLICATION]['chx_metier_utilisateur_initial']=$tt[__xva][0]['T0.chx_metier_utilisateur'];
            $_SESSION[__X_CLE_APPLICATION][__xva]['compteur_session_php1']=0;
            $donnees_retournees[__x_ligne]=__LINE__;
            $donnees_retournees[__x_authentifie]=__xsu;
            $donnees_retournees[__xbo]=obtenir_les_menus();
            $donnees_retournees[__xst]=__xsu;
            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues);
            $tt=/*sql_inclure_deb*/
                /* sql_72()
                UPDATE b1.tbl_utilisateurs SET 
                   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
                WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_72()*/ 72,
                array( 'c_chi_id_utilisateur' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial']),
                $donnees_retournees
            );

        }else{

            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues,__xer,$donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']);
            return;
        }

    }
    /*
      =============================================================================================================
    */
    public function formulaire1(&$donnees_retournees,&$mat,&$donnees_recues,$erreur_de_connexion=__xsu){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if(strpos($mat[$i][1],'formulaire1') !== false && $mat[$i][2] === 'f'){

                $conteneur1='';
                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'conteneur1' && $mat[$j][2] === 'f' && $mat[$j][8] === 1){

                        
                        if($mat[$j + 1][2] === 'c'){

                            $conteneur1=$mat[$j + 1][1];

                        }


                    }

                }
                switch ($conteneur1){
                    case 'vv_formulaire_de_connexion':
                    $donnees_retournees[__x_ligne][]=__LINE__;
                        $this->traite_vv_formulaire_de_connexion($donnees_retournees,$mat,$donnees_recues,$erreur_de_connexion);
                        /* echo __FILE__ . ' ' . __LINE__ . ' <pre>' . htmlentities( var_export($donnees_retournees , true )) .  '</pre>' ; exit(0); //*/
                        break;
                        
                        
                }

            }

        }
    }
    /*
      =============================================================================================================
    */
    public function recupere_la_page_de_connexion(&$donnees_retournees,&$mat,&$donnees_recues,$erreur_de_connexion=__xsu,$nom_de_connexion='webmaster@example.com'){
        $connecte=false;
        $txt='<h1 style="color:red;">connexion</h1>';
        
        if(isset($donnees_retournees[__x_authentifie])){

            
            if($donnees_retournees[__x_authentifie] === __xsu){

                $txt .= '<h2 style="color:blue;">Vous êtes connecté</h1>';
                $connecte=true;

            }else{

                
                if($donnees_retournees[__x_action] === 'connexion()'){

                    $txt .= '<h2 style="color:red;">la connexion a échoué</h1>';

                }

            }


        }

        
        if($connecte === true){

            $txt .= '<div class="hug_bouton" data-hug_click="c_connexion1.se_deconnecter()" title="déconnexion">déconnexion</div>';
            $txt .= '<div class="hug_bouton" data-hug_click="c_accueil1.recupere_la_page_d_accueil()" title="accueil">accueil</div>';

        }else{

            
            if($erreur_de_connexion === __xer){

                $txt .= '<div>';
                $txt .= '<div class="yy__x_signaux_2"> ⚠ Il y a eu une erreur de connexion avec ce nom, réessayez</div>';
                $txt .= '</div>';

            }

            $txt .= '<div id="vv_formulaire_de_connexion">';
            $txt .= '  <span>nom</span>';
            $txt .= '  <input type="text" id="vv_chp_nom_de_connexion_utilisateur" autocomplete="off" name="nom" value="' . $nom_de_connexion . '" autocapitalize="off" />';
            $txt .= '  <br />';
            $txt .= '  <span>mot de passe</span>';
            $txt .= '  <input type="password" autocomplete="off" id="vv_chp_mot_de_passe_utilisateur" value="" />';
            $txt .= '  <div class="hug_bouton" data-hug_click="c_connexion1.formulaire1(conteneur1(vv_formulaire_de_connexion))" title="Cliquez ici pour vous connecter">connexion</div>';
            $txt .= '</div>';
            $txt .= 'ou bien revenir ici: <div class="hug_bouton" data-hug_click="c_accueil1.recupere_la_page_d_accueil()" title="affiche la page d\'accueil">Accueil</div>';
        }

        $donnees_retournees[__x_page] .= $txt;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function se_deconnecter(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        unset($_SESSION[__X_CLE_APPLICATION]);
        $donnees_retournees[__x_authentifie]=__xer;
        $donnees_retournees[__xst]=__xsu;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(!(isset($donnees_retournees[__xva]['en_cours_d_initialisation'])
               && $donnees_retournees[__xva]['en_cours_d_initialisation'] === true)
        ){

            $donnees_retournees[__x_signaux][__xif][]='Vous êtes déconnecté';

        }

        $donnees_retournees[__xbo]=obtenir_les_menus();
        $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues);
    }

}
/*
  =====================================================================================================================
*/