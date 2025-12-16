<?php
class _connexion1{
    private $sql0=null;
    private $moi='_connexion1';
    /*
      =============================================================================================================
    */
    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        require_once('c__sql0.php');
        $this->sql0=new c__sql0($donnees_retournees,$mat,$donnees_recues);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function deconnexion1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_contenu(id(vv_se_deconnecter),type_cible(style),valeur(nom_du_style(display),valeur_de_style(none)))))';
        $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_menu()))';
        unset($_SESSION[_CA_]);
        $donnees_retournees[__xva]['chi_id_utilisateur']=0;
        $donnees_retournees[__xva]['chi_id_acces']=0;
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees[__xva]['__liste_des_genres']=array();
        $donnees_retournees[__xac] .= 'm1(n1(_fonctions1),f1(maj_liste_des_genres()))';
    }
    /*
      =============================================================================================================
    */
    function page_connexion1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues[__xva]['__fo1'] , true ) . '</pre>' ; exit(0);*/
        
        if(isset($donnees_recues[__xva]['__fo1']['vv_formulaire_de_connexion'])){

            $form=$donnees_recues[__xva]['__fo1']['vv_formulaire_de_connexion'];
            $tt101=/*sql_inclure_deb*/
                /* sql_101()
                / ***meta(sur_base_principale(1))*** /
                SELECT 
                `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T0`.`chx_acces_utilisateur`
                 FROM b1.tbl_utilisateurs T0
                WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
                LIMIT 1 OFFSET 0 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_101()*/ 101,
                array( 'T0_chp_nom_de_connexion_utilisateur' => $form['vv_chp_nom_de_connexion_utilisateur']),
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt101 , true ) . '</pre>' ; exit(0);*/
            
            if(count($tt101[__xva]) === 1
               && password_verify($form['vv_chp_mot_de_passe_utilisateur'],$tt101[__xva][0]['T0.chp_mot_de_passe_utilisateur'])
            ){

                /*
                  si l'utilisateur était déjà connecté
                */
                $ancien_session_chi_id_utilisateur=$_SESSION[_CA_]['chi_id_utilisateur']??0;
                unset($_SESSION[_CA_]);
                $_SESSION[_CA_]['chi_id_utilisateur']=$tt101[__xva][0]['T0.chi_id_utilisateur'];
                $_SESSION[_CA_]['chi_id_utilisateur_initial']=$tt101[__xva][0]['T0.chi_id_utilisateur'];
                $_SESSION[_CA_]['chi_id_acces']=$tt101[__xva][0]['T0.chx_acces_utilisateur'];
                $_SESSION[_CA_]['chi_id_projet']=0;
                $_SESSION[_CA_]['chp_nom_de_connexion_utilisateur']=$form['vv_chp_nom_de_connexion_utilisateur'];
                $donnees_retournees[__xva]['chi_id_utilisateur']=$tt101[__xva][0]['T0.chx_acces_utilisateur'];
                $donnees_retournees[__xva]['chi_id_acces']=$tt101[__xva][0]['T0.chx_acces_utilisateur'];
                $donnees_retournees[__xva]['chi_id_projet']=0;
                $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_contenu(id(vv_se_deconnecter),type_cible(style),valeur(nom_du_style(display),valeur_de_style(block)))))';
                $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_menu()))';
                
                if(strpos($form['vv_redirection'],'_connexion1') === false
                   && strpos($form['vv_redirection'],'page_connexion1') === false
                   && $ancien_session_chi_id_utilisateur === 0
                ){

                    /* pm1(m1(n1(c_projets1),f1(liste1($__num_page('0')))))*/
                    /*[n1[_connexion1],f1[page_connexion1[]*/
                    $donnees_retournees[__xac] .= substr($form['vv_redirection'],1);
                    $donnees_retournees[__xva]['redirection']=substr($form['vv_redirection'],1);

                }

                $tt107=/*sql_inclure_deb*/
                    /* sql_107()
                    UPDATE b1.tbl_utilisateurs SET 
                       `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
                    WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_107()*/ 107,
                    array( 'c_chi_id_utilisateur' => $_SESSION[_CA_]['chi_id_utilisateur']),
                    $donnees_retournees
                );
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__xva]['chi_id_utilisateur']=0;
                $donnees_retournees[__xva]['chi_id_acces']=0;
                ajoute_message($donnees_retournees,__xer,'la combinaison de nom et du mot de passe est incorrecte [' . __LINE__ . ']');
                unset($_SESSION[_CA_]);
                $donnees_retournees[__xva]['__liste_des_genres']=array();
                $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_contenu(id(vv_se_deconnecter),type_cible(style),valeur(nom_du_style(display),valeur_de_style(none)))))';
                $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_menu()))';
                $donnees_retournees[__xac] .= 'm1(n1(_fonctions1),f1(maj_liste_des_genres()))';
                /*
                  =====================================================================================
                  le code ci dessous pourra être commenté après création du premier utilisateur 
                  =====================================================================================
                  on regarde le nombre d'enregs dans la table utilisateur, 
                  si = 0 alors on crée le premier utilisateur avec un mot de passe temporaire
                  
                */
                $tt103=/*sql_inclure_deb*/
                    /* sql_103()
                    SELECT 
                    COUNT( * )
                     FROM b1.tbl_utilisateurs T0
                    ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(103,array( 'T0_chp_nom_de_connexion_utilisateur' => $form['vv_chp_nom_de_connexion_utilisateur']),$donnees_retournees);
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt103[__xva][0][0] , true ) . '</pre>' ; exit(0);*/
                
                if($tt103[__xva][0][0] === 0){

                    /* insertion des groupes dev et admin */
                    $tt104=/*sql_inclure_deb*/
                        /* sql_104()
                        INSERT INTO b1.`tbl_groupes`(
                            `chi_id_groupe` , 
                            `chp_nom_groupe` , 
                            `chx_parent_groupe`
                        ) VALUES (
                            :chi_id_groupe , 
                            :chp_nom_groupe , 
                            :chx_parent_groupe
                        );
                        */
                        /*sql_inclure_fin*/
                        $this->sql0->sql_iii(104,array(/**/
                            array( 'chi_id_groupe' => 1, 'chp_nom_groupe' => 'dev', 'chx_parent_groupe' => 1),
                            array( 'chi_id_groupe' => 2, 'chp_nom_groupe' => 'admin', 'chx_parent_groupe' => 2)
                        ),$donnees_retournees);
                    
                    if($tt104[__xst] !== __xsu){

                        $donnees_retournees[__xsi][__xer][]=__METHOD__ . '[' . __LINE__ . ']';
                        return;

                    }

                    /* insertion des métiers dev et admin */
                    $tt105=/*sql_inclure_deb*/
                        /* sql_105()
                        INSERT INTO b1.`tbl_metiers`(
                            `chi_id_metier` , 
                            `chp_nom_metier` , 
                            `chx_parent_metier`
                        ) VALUES (
                            :chi_id_metier , 
                            :chp_nom_metier , 
                            :chx_parent_metier
                        );
                        */
                        /*sql_inclure_fin*/
                        $this->sql0->sql_iii(105,array(/**/
                            array( 'chi_id_metier' => 1, 'chp_nom_metier' => 'dev', 'chx_parent_metier' => 1),
                            array( 'chi_id_metier' => 2, 'chp_nom_metier' => 'admin', 'chx_parent_metier' => 2)
                        ),$donnees_retournees);
                    
                    if($tt105[__xst] !== __xsu){

                        $donnees_retournees[__xsi][__xer][]=__METHOD__ . '[' . __LINE__ . ']';
                        return;

                    }

                    /* insertion de l'accès racine*/
                    $tt106=/*sql_inclure_deb*/
                        /* sql_106()
                        INSERT INTO b1.`tbl_acces`(
                            `chi_id_acces` , 
                            `chp_nom_acces` , 
                            `chx_groupe_acces` , 
                            `chx_metier_acces`
                        ) VALUES (
                            :chi_id_acces , 
                            :chp_nom_acces , 
                            :chx_groupe_acces , 
                            :chx_metier_acces
                        );
                        */
                        /*sql_inclure_fin*/
                        $this->sql0->sql_iii(106,array(/**/
                            array( 'chi_id_acces' => 1, 'chx_groupe_acces' => 1, 'chx_metier_acces' => 1, 'chp_nom_acces' => 'dev_dev'),
                            array( 'chi_id_acces' => 2, 'chx_groupe_acces' => 2, 'chx_metier_acces' => 2, 'chp_nom_acces' => 'admin_admin')
                        ),$donnees_retournees);
                    
                    if($tt106[__xst] !== __xsu){

                        $donnees_retournees[__xsi][__xer][]=__METHOD__ . '[' . __LINE__ . ']';
                        return;

                    }

                    $chp_nom_de_connexion_utilisateur='admin_' . ((int)(mt_rand() * 3));
                    $chp_mot_de_passe_utilisateur=password_hash($GLOBALS[__date_ms],PASSWORD_BCRYPT,array( 'cost' => 10));
                    
                    if($_SERVER['HTTP_HOST'] === 'localhost'){

                        /*
                          sur localhost on donne un mot de passe "facile" mais c'est la responsabilite du développeur de changer ce mot de passe
                        */
                        $chp_nom_de_connexion_utilisateur='admin';
                        $chp_mot_de_passe_utilisateur=password_hash('admin',PASSWORD_BCRYPT,array( 'cost' => 10));

                    }

                    $tt102=/*sql_inclure_deb*/
                        /* sql_102()
                        INSERT INTO b1.`tbl_utilisateurs`(
                            `chi_id_utilisateur` , 
                            `chp_nom_de_connexion_utilisateur` , 
                            `chp_mot_de_passe_utilisateur` , 
                            `chx_acces_utilisateur` , 
                            `chd__dtm_utilisateur` , 
                            `chd__dtc_utilisateur`
                        ) VALUES (
                            :chi_id_utilisateur , 
                            :chp_nom_de_connexion_utilisateur , 
                            :chp_mot_de_passe_utilisateur , 
                            :chx_acces_utilisateur , 
                            :chd__dtm_utilisateur , 
                            :chd__dtc_utilisateur
                        );
                        */
                        /*sql_inclure_fin*/
                        $this->sql0->sql_iii(102,array(/**/
                            array( 'chi_id_utilisateur' => 1, 'chp_nom_de_connexion_utilisateur' => $chp_nom_de_connexion_utilisateur, 'chp_mot_de_passe_utilisateur' => $chp_mot_de_passe_utilisateur, 'chx_acces_utilisateur' => 1),
                            array( 'chi_id_utilisateur' => 2, 'chp_nom_de_connexion_utilisateur' => 'admin', 'chp_mot_de_passe_utilisateur' => 'ne_fonctionne_pas', 'chx_acces_utilisateur' => 2)
                        ),$donnees_retournees);
                    
                    if($tt102[__xst] === __xsu){

                        
                        if($_SERVER['HTTP_HOST'] === 'localhost'){

                            $tt='';
                            $tt .= 'ATTENTION, c\'est votre responsabilité de changer ce mot de passe RAPIDEMENT';
                            $donnees_retournees[__xsi][__xal][]=$tt;

                        }

                        $tt='';
                        $tt .= 'le premier utilisateur a été créé avec ';
                        $tt .= '<p> nom="' . $chp_nom_de_connexion_utilisateur . '"<br />"' . $GLOBALS[__date_ms] . '" </p>';
                        $tt .= '<b class="yy__0">Veuillez faire un copier/coller de ces informations temporaires</b>';
                        $donnees_retournees[__xsi][__xal][]=$tt;

                    }


                }

            }


        }else{

            /* affichage du formulaire */
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
        }

        
        if(isset($_SESSION[_CA_]['chi_id_acces']) && $_SESSION[_CA_]['chi_id_acces'] > 0){

            $fichier_acces=__CHEMIN_ABSOLU_PROJET__ . '____menus1_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php';
            
            if(is_file($fichier_acces)){

                include(__CHEMIN_ABSOLU_PROJET__ . '____menus1_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php');
                $donnees_retournees[__xva]['$les_menu1']=$les_menu1;

            }else{

                $donnees_retournees[__xva]['$les_menu1']='';
            }


        }

        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/