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
    function traite_vv_formulaire_de_connexion(&$donnees_retournees,&$mat,&$donnees_recues,$erreur_de_connexion){
     


     
       if($donnees_recues[__xva]['vv_se_souvenir_de_moi']===true && isset($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'])){
        
           require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_cookies1.php');
           $cook=new c_cookies1();
           $t1=array();
           $t2=null;
           $t3=array('__x_action'=>'c_cookies1.enregistrer(enregistre_moi(\''.str_replace('\'','\\\'',str_replace('\\','\\\\',$donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'])).'\'))');
           $cook->enregistrer($t1,$t2,$t3);
        
       }

        
        if(!isset($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'])){

            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues);
            return;

        }
        
        //echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);

        
        if(!(isset($donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur'])
               && isset($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur']))
        ){

            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues);
            return;

        }

        $tt=/*sql_inclure_deb*/
            /* sql_101()
            SELECT 
            `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T0`.`chx_acces_utilisateur`
             FROM b1.tbl_utilisateurs T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
            
            WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
            LIMIT 1 OFFSET 0 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_101()*/ 101,
            array( 'T0_chp_nom_de_connexion_utilisateur' => $donnees_recues[__xva]['vv_chp_nom_de_connexion_utilisateur']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues);
            $donnees_retournees[__x_signaux][__xer][]='erreur sql [' . __LINE__ . ']';
            return;

        }
        
//        echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( count($tt[__xva])===1 && password_verify($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur'],$tt[__xva][0]['T0.chp_mot_de_passe_utilisateur']) , true ) . '</pre>' ; exit(0);

        
        if(count($tt[__xva])===1 && password_verify($donnees_recues[__xva]['vv_chp_mot_de_passe_utilisateur'],$tt[__xva][0]['T0.chp_mot_de_passe_utilisateur'])
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
            $_SESSION[__X_CLE_APPLICATION]['chx_groupe_utilisateur_courant']=$tt[__xva][0]['T1.chx_groupe_acces'];
            $_SESSION[__X_CLE_APPLICATION]['chx_groupe_utilisateur_initial']=$tt[__xva][0]['T1.chx_groupe_acces'];
            $_SESSION[__X_CLE_APPLICATION]['chx_metier_utilisateur_courant']=$tt[__xva][0]['T1.chx_metier_acces'];
            $_SESSION[__X_CLE_APPLICATION]['chx_metier_utilisateur_initial']=$tt[__xva][0]['T1.chx_metier_acces'];
            $_SESSION[__X_CLE_APPLICATION]['chx_acces_utilisateur']=$tt[__xva][0]['T0.chx_acces_utilisateur'];
            
            $donnees_retournees[__x_ligne]=__LINE__;
            $donnees_retournees[__x_authentifie]=__xsu;
            $donnees_retournees[__xbo]=obtenir_les_menus($donnees_retournees);
            $tt=/*sql_inclure_deb*/
                /* sql_172()
                UPDATE b1.tbl_utilisateurs SET 
                   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
                WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_172()*/ 172,
                array( 'c_chi_id_utilisateur' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial']),
                $donnees_retournees
            );
            
            if(isset($donnees_recues[__xva]['vv_redirection']) && $donnees_recues[__xva]['vv_redirection'] !== '' && 'c_connexion1.formulaire1(conteneur1(vv_formulaire_de_connexion))' !== $donnees_recues[__xva]['vv_redirection']){

                $donnees_recues[__x_action]=$donnees_recues[__xva]['vv_redirection'];
                $donnees_recues[__xva]=array();
                traite_autre_fonction($donnees_recues,$donnees_retournees);
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__xst]=__xsu;
                $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues);
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='⚠ Il y a eu une erreur de connexion avec ce nom, réessayez [' . __LINE__ . ']';
            $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues);
            return;
        }

    }
    /*
      =============================================================================================================
    */
    public function recupere_la_page_de_connexion(&$donnees_retournees,&$mat,&$donnees_recues){
        //echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);
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

        $nom_de_connexion='';
        if($connecte === true){

            $txt .= '<div class="hug_bouton" data-hug_click="c_connexion1.se_deconnecter()" title="déconnexion">déconnexion</div>';
            $txt .= '<div class="hug_bouton" data-hug_click="c_accueil1.recupere_la_page_d_accueil()" title="accueil">accueil</div>';

        }else{

            
            if(isset($_COOKIE[__X_CLE_APPLICATION])){

                $tcok=json_decode($_COOKIE[__X_CLE_APPLICATION],true);
                if(isset($tcok['enregistre_moi'])){
                    $nom_de_connexion=$tcok['enregistre_moi'];
                }
            }
            

            $txt .= '<table border="1" id="vv_formulaire_de_connexion" style="width:300px;">';
            $txt .= ' <tr>';
            $txt .= '  <td style="text-align:right;">nom&nbsp;</td>';
            $txt .= '  <td><input type="text" id="vv_chp_nom_de_connexion_utilisateur" name="nom" value="' . $nom_de_connexion . '" autocapitalize="off" /></td>';
            $txt .= ' </tr>';
            $txt .= ' <tr>';
            $txt .= '  <td style="text-align:right;">mot de passe&nbsp;</td>';
            $txt .= '  <td><input type="password" autocomplete="off" id="vv_chp_mot_de_passe_utilisateur" value="" /></td>';
            $txt .= ' </tr>';
            $txt .= ' <tr>';
            $txt .= '  <td>se souvenir &nbsp;<br />de mon nom&nbsp;</td>';
            $txt .= '  <td style="text-align:center;"><input type="checkbox" id="vv_se_souvenir_de_moi"  /></td>';
            $redirection='';
            
            if(!($donnees_recues['__x_action'] === 'c_connexion1.recupere_la_page_de_connexion()'
                   || $donnees_recues['__x_action'] === 'c_connexion1.se_deconnecter()')
            ){

                $redirection=$donnees_recues['__x_action'];

            }

            $txt .= ' </tr>';
            $txt .= ' <tr>';
            $txt .= '  <td colspan="2" style="text-align:center;">';
            $txt .= '   <input type="hidden" autocomplete="off" id="vv_redirection" value="' . enti1($redirection) . '" />';
            $txt .= '   <div class="hug_bouton" data-hug_click="c_connexion1.formulaire1(conteneur1(vv_formulaire_de_connexion))" title="Cliquez ici pour vous connecter">connexion</div>';
            $txt .= '  </td>';
            $txt .= ' </tr>';
            $txt .= '</table>';
            $txt .= '<div style="text-align:center;margin-top:20px;">';
            $txt .= 'ou bien aller ici: <div class="hug_bouton" data-hug_click="c_accueil1.recupere_la_page_d_accueil()" title="affiche la page d\'accueil">Accueil</div>';
            $txt .= '</div>';
//            $txt .= '<div>'.var_export($nom_de_connexion,true).'</div>'; 
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
        
        if(isset($donnees_retournees[__xva]['en_cours_d_initialisation'])
           && $donnees_retournees[__xva]['en_cours_d_initialisation'] === true
        ){

            $donnees_retournees[__x_signaux][__xif][]='Vous êtes déconnecté';

        }

        $donnees_retournees[__xbo]=obtenir_les_menus($donnees_retournees);
        $this->recupere_la_page_de_connexion($donnees_retournees,$mat,$donnees_recues);
    }
}
/*
  =====================================================================================================================
*/