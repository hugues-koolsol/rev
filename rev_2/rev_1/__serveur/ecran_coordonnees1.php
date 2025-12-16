<?php
class ecran_coordonnees1{
    private $sql0=null;
    private $moi='ecran_coordonnees1';
    /*
      =============================================================================================================
    */
    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $form=$donnees_recues[__xva]['__fo1'][$donnees_recues[__xva]['__co1']];
        
        if($form['chp_mot_de_passe_utilisateur'] !== $form['chp_mot_de_passe_utilisateur2']){

            $donnees_retournees[__xsi][__xer][]='les deux mots de passe ne correspondent pas [' . __LINE__ . ']';
            return;

        }

        
        if(strlen($form['chp_mot_de_passe_utilisateur']) < 7){

            $donnees_retournees[__xsi][__xer][]='le mot de passe doit comporter au moins 7 caractères [' . __LINE__ . ']';
            return;

        }

        
        if(strlen($form['chp_nom_de_connexion_utilisateur']) < 5){

            $donnees_retournees[__xsi][__xer][]='le nom de connexion doit comporter au moins 5 caractères [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(strpos($form['chp_nom_de_connexion_utilisateur'],' ') !== false
           || strpos($form['chp_mot_de_passe_utilisateur'],' ') !== false
           || strlen($form['chp_nom_de_connexion_utilisateur']) < 5
           || strlen($form['chp_mot_de_passe_utilisateur']) < 7
        ){

            $donnees_retournees[__xsi][__xer][]='le mot de passe doit comporter au moins 7 caractères [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
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
            array( 'T0_chp_nom_de_connexion_utilisateur' => $form['chp_nom_de_connexion_utilisateur_ancien']),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( count($tt101[__xva]) , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( password_verify($form['chp_mot_de_passe_utilisateur3'],$tt101[__xva][0]['T0.chp_mot_de_passe_utilisateur']) , true ) . '</pre>' ; exit(0);*/
        
        if(count($tt101[__xva]) === 1
           && password_verify($form['chp_mot_de_passe_utilisateur3'],$tt101[__xva][0]['T0.chp_mot_de_passe_utilisateur']) === true
        ){

            $mdp=password_hash($form['chp_mot_de_passe_utilisateur'],PASSWORD_BCRYPT,array( 'cost' => 10));
            $chemin_bdd=__RACINE_PGMS__ . '__bdd_sqlite/bdd_1.sqlite';
            $db_1=new SQLite3($chemin_bdd);
            $tt=/*sql_inclure_deb*/
                /* sql_109()
                / ***meta(sur_base_principale(1))*** /
                
                UPDATE b1.tbl_utilisateurs SET 
                   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
                   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
                WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_109()*/ 109,
                array( 'n_chp_nom_de_connexion_utilisateur' => $form['chp_mot_de_passe_utilisateur'], 'n_chp_mot_de_passe_utilisateur' => $mdp, 'c_chi_id_utilisateur' => $_SESSION[_CA_]['chi_id_utilisateur_initial']),
                $donnees_retournees
            );
            /* ,            $db_1 */

        }else{

            $donnees_retournees[__xsi][__xer][]='votre ancien mot de passe de correspond pas [' . __LINE__ . ']';
            return;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function recupérer_mes_coordonnées(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $tt108=/*sql_inclure_deb*/
            /* sql_108()
            / ***meta(sur_base_principale(1))*** /
            SELECT 
            `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , 
            `T1`.`chp_nom_acces`
             FROM b1.tbl_utilisateurs T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
            
            WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_108()*/ 108,
            array( 'T0_chi_id_utilisateur' => $_SESSION[_CA_]['chi_id_utilisateur']),
            $donnees_retournees
        );
        $donnees_retournees[__xva]=$tt108;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        
        if(!isset($_SESSION[_CA_]) || $_SESSION[_CA_]['chi_id_utilisateur'] === 0){

            echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export(__LINE__,true) . '</pre>' ;
            exit(0);

        }

        require_once(__RACINE_PGMS__ . 'c__sql0.php');
        $this->sql0=new c__sql0($donnees_retournees,$mat,$donnees_recues);
        $donnees_retournees[__xst]=__xsu;
    }
}