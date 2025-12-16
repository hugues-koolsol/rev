<?php
class c_requetes1{
    private $sql0=null;
    private $moi='c_requetes1';
    private $fonction_liste='liste1';
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
    /*
      =============================================================================================================
    */
    public function sauvegarder_une_matrice_de_requete(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* suppression des anciennes données de la table rev */
        $tt=/*sql_inclure_deb*/
            /* sql_353()
            / ***meta(ne_pas_tester_les_dependances_de_suppression(1))*** /
            
            DELETE FROM b1.tbl_revs
            WHERE (`chp_provenance_rev` = :chp_provenance_rev
               AND `chx_source_rev` = :chx_source_rev) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_353()*/ 353,
            array(/**/
                'chp_provenance_rev' => 'sql',
                'chx_source_rev' => $donnees_recues[__xva]['chi_id_requete']
            ),
            $donnees_retournees
        );
        
        if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $id_requete =  <pre> ' . var_export(  $donnees_recues[__xva]['cht_matrice_requete'] , true ) . '</pre>' ; exit(0);*/
        $a_sauvegarder=array();
        for( $i=0 ; $i < count($donnees_recues[__xva]['cht_matrice_requete']) ; $i++ ){
            
            $tab=$donnees_recues[__xva]['cht_matrice_requete'][$i];
            /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev*/
            $a_sauvegarder[]=array(
                'chp_provenance_rev' => 'sql',
                'chx_source_rev' => $donnees_recues[__xva]['chi_id_requete'],
                'chp_id_rev' => $tab[0],
                'chp_valeur_rev' => $tab[1],
                'chp_type_rev' => $tab[2],
                'chp_niveau_rev' => $tab[3],
                'chp_quotee_rev' => $tab[4],
                'chp_pos_premier_rev' => $tab[5],
                'chp_pos_dernier_rev' => $tab[6],
                'chp_parent_rev' => $tab[7],
                'chp_nbr_enfants_rev' => $tab[8],
                'chp_num_enfant_rev' => $tab[9],
                'chp_profondeur_rev' => $tab[10],
                'chp_pos_ouver_parenthese_rev' => $tab[11],
                'chp_enfant_suivant_rev' => $tab[12],
                'chp_commentaire_rev' => $tab[13]
            );
        }
        $tt=/*sql_inclure_deb*/
            /* sql_358()
            INSERT INTO b1.`tbl_revs`(
                `chp_provenance_rev` , 
                `chx_source_rev` , 
                `chp_id_rev` , 
                `chp_valeur_rev` , 
                `chp_type_rev` , 
                `chp_niveau_rev` , 
                `chp_quotee_rev` , 
                `chp_pos_premier_rev` , 
                `chp_pos_dernier_rev` , 
                `chp_parent_rev` , 
                `chp_nbr_enfants_rev` , 
                `chp_num_enfant_rev` , 
                `chp_profondeur_rev` , 
                `chp_pos_ouver_parenthese_rev` , 
                `chp_enfant_suivant_rev` , 
                `chp_commentaire_rev`
            ) VALUES (
                :chp_provenance_rev , 
                :chx_source_rev , 
                :chp_id_rev , 
                :chp_valeur_rev , 
                :chp_type_rev , 
                :chp_niveau_rev , 
                :chp_quotee_rev , 
                :chp_pos_premier_rev , 
                :chp_pos_dernier_rev , 
                :chp_parent_rev , 
                :chp_nbr_enfants_rev , 
                :chp_num_enfant_rev , 
                :chp_profondeur_rev , 
                :chp_pos_ouver_parenthese_rev , 
                :chp_enfant_suivant_rev , 
                :chp_commentaire_rev
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_358()*/ 358,
            $a_sauvegarder,
            $donnees_retournees
        );
    }
    /*
      =============================================================================================================
    */
    function enregistrer_une_requete_compile_en_ligne1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        
        if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues[__xva]['contenu_bdd_requete'] , true ) . '</pre>' ; exit(0);*/
            $tt343=/*sql_inclure_deb*/
                /* sql_343()
                UPDATE b1.tbl_requetes SET 
                   `cht_sql_requete` = :n_cht_sql_requete , 
                   `cht_php_requete` = :n_cht_php_requete
                WHERE `chi_id_requete` = :c_chi_id_requete ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_343()*/ 343,
                array(/**/
                    'c_chi_id_requete' => $donnees_recues[__xva]['chi_id_requete'],
                    'n_cht_sql_requete' => $donnees_recues[__xva]['cht_sql_requete'],
                    'n_cht_php_requete' => ''
                ),
                $donnees_retournees
            );

        }else{

            $tt343=/*sql_inclure_deb*/
                /* sql_343()
                UPDATE b1.tbl_requetes SET 
                   `cht_sql_requete` = :n_cht_sql_requete , 
                   `cht_php_requete` = :n_cht_php_requete
                WHERE `chi_id_requete` = :c_chi_id_requete ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_343()*/ 343,
                array(/**/
                    'c_chi_id_requete' => $donnees_recues[__xva]['chi_id_requete'],
                    'n_cht_sql_requete' => $donnees_recues[__xva]['cht_sql_requete'],
                    'n_cht_php_requete' => $donnees_recues[__xva]['cht_php_requete']
                ),
                $donnees_retournees
            );
        }

        
        if($tt343[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur lors de l\'enregistrement de la requête [' . __LINE__ . ']';
            return;

        }

        $chemin_fichier=$_SESSION[_CA_]['chemin_des_sql'] . 'sql_' . $donnees_recues[__xva]['chi_id_requete'] . '.php';
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_fichier , true ) . '</pre>' ; exit(0);*/
        
        if($this->ecrire_php_sur_disque($mat,$d,$donnees_retournees,$donnees_recues,$chemin_fichier,$donnees_recues[__xva]['cht_php_requete'])
        ){

            
            if($GLOBALS[DEVER_SRV] >= 1){

                $donnees_retournees[__xsi][__xsu][]='le sql a bien été compilé et réécrit [' . __LINE__ . ']';

            }


        }else{

            $donnees_retournees[__xsi][__xal][]='le sql a bien été enregistré mais n\'a pas pu être écrit sur disque [' . __LINE__ . ']';
        }

        
        if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            /* on n'enregistre pas le rev */

        }else{

            $this->sauvegarder_une_matrice_de_requete($mat,$d,$donnees_retournees,$donnees_recues);
        }

        /*
          $donnees_retournees[__xsi][__xal][]='<pre>'.var_export( $donnees_recues[__xva] , true ).'</pre> [' . __LINE__ . ']'; // ['cht_matrice_requete']
        */
        $donnees_retournees[__xst]=__xsu;
        return;
    }
    /*
      =============================================================================================================
    */
    function recuperer_requete_et_base_pour_compilation_en_ligne(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*&$donnees_retournees,/_*matrice*_/&$mat,&$donnees_recues,$chi_id_requete,$bouton_compiler,$rafraichir_liste]{*/
        $chi_id_requete=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_requete' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_requete=(int)($mat[$i + 1][1]);

            }

        }
        $tt373=/*sql_inclure_deb*/
            /* sql_373()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_373()*/ 373,
            array( 'T0_chi_id_requete' => $chi_id_requete),
            $donnees_retournees
        );
        $tt171=/*sql_inclure_deb*/
            /* sql_171()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
             FROM b1.tbl_bdds T0
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_171()*/ 171,
            array(),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( ($tt[__xst] === __xsu && $tt171[__xst] === __xsu) , true ) . '</pre>' ; exit(0);*/
        
        if($tt373[__xst] === __xsu && $tt171[__xst] === __xsu){

            $bases_du_projet=array();
            foreach($tt171[__xva] as $k1 => $v1){
                $bases_du_projet[$v1['T0.chi_id_basedd']]=$v1;
            }
            /* $donnees_retournees[__xva]['ne_pas_retablir_les_elements_masques']=__xsu;*/
            $donnees_retournees[__xva]['requete']=$tt373[__xva][0];
            $donnees_retournees[__xva]['les_bases_du_projet']=$bases_du_projet;
            /* $donnees_retournees[__xva]['rafraichir_liste']=$rafraichir_liste;*/
            /* $tt171[__xva];*/
            /* $donnees_retournees[__xva]['bouton_compiler']=$bouton_compiler;*/
            $donnees_retournees[__xst]=__xsu;

        }else{

            $donnees_retournees[__xsi][__xer][]='erreur sql 171 pour $chi_id_requete=' . $chi_id_requete . ' [' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    function ecrire_php_sur_disque(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chemin_fichier,$contenu){
        
        if($GLOBALS[DEVER_SRV] >= 2){

            $donnees_retournees[__xsi][__xdv][]='ecrire_php_sur_disque [' . __LINE__ . ']';

        }

        
        if(substr($contenu,0,5) !== '<?php'){

            $contenu='<?php' . PHP_EOL . $contenu;

        }

        $contenu=str_replace("\r\n","\n",$contenu);
        $contenu=str_replace("\r","",$contenu);
        $contenu=str_replace("\n","\r\n",$contenu);
        
        if((@file_put_contents($chemin_fichier,$contenu))){

            require_once(__RACINE_PGMS__ . 'c_concevoir_une_requete1.php');
            $c_concevoir_une_requete1=new c_concevoir_une_requete1($mat,$d,$donnees_retournees,$donnees_recues);
            $c_concevoir_une_requete1->construire_le_js_des_requetes($donnees_retournees);
            return true;

        }else{

            return false;
        }

    }
    /*
      =============================================================================================================
    */
    function ecrire_le_php_de_la_requete_sur_disque(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$id_requete,$source_php_requete){
        
        if($id_requete === 0){

            return array( __xst => __xsu);

        }

        $chemin_fichier=__RACINE_PGMS__ . '__sqls/sql_' . $id_requete . '.php';
        
        if($this->ecrire_php_sur_disque($mat,$d,$donnees_retournees,$donnees_recues,$chemin_fichier,$source_php_requete)){

            return array( __xst => __xsu);

        }else{

            $donnees_retournees[__xsi][__xer][]='erreur ouverture fichier sql_' . $id_requete . '.php [' . __LINE__ . ']';
        }

        return array( __xst => __xer);
    }
    /*
      =============================================================================================================
    */
    function supprimer_php_du_sql_du_disque(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nom_fichier,$recalculer=true){
        sauvegarder_et_supprimer_fichier($nom_fichier);
        
        if($recalculer === true){

            require_once(__RACINE_PGMS__ . 'c_concevoir_une_requete1.php');
            $c_concevoir_une_requete1=new c_concevoir_une_requete1($mat,$d,$donnees_retournees,$donnees_recues);
            $c_concevoir_une_requete1->construire_le_js_des_requetes($donnees_retournees);

        }

    }
    /*
      =============================================================================================================
    */
    function vv_requetes_nouveau_numero1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_requete_ancienne=0;
        $chi_id_requete_nouvelle=0;
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        
        if(isset($form['vv_nouveau_numero_de_requete']) && is_numeric($form['vv_nouveau_numero_de_requete'])){

            $chi_id_requete_nouvelle=(int)($form['vv_nouveau_numero_de_requete']);

        }else{

            $donnees_retournees[__xsi][__xer][]='le nouveau numéro doit être numérique [' . __LINE__ . ']';
            return;
        }

        
        if(isset($form['vv_ancien_numero_de_requete']) && is_numeric($form['vv_ancien_numero_de_requete'])){

            $chi_id_requete_ancienne=(int)($form['vv_ancien_numero_de_requete']);

        }else{

            $donnees_retournees[__xsi][__xer][]='l\'ancien numéro doit être numérique [' . __LINE__ . ']';
            return;
        }

        $tt1=/*sql_inclure_deb*/
            /* sql_373()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_373()*/ 373,
            array( 'T0_chi_id_requete' => $chi_id_requete_ancienne),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='Erreur de sélection de la requête[' . __LINE__ . ']';
            return;

        }

        $tt2=/*sql_inclure_deb*/
            /* sql_373()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_373()*/ 373,
            array( 'T0_chi_id_requete' => $chi_id_requete_nouvelle),
            $donnees_retournees
        );
        
        if($tt2[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='Erreur de sélection de la requête[' . __LINE__ . ']';
            return;

        }

        
        if(count($tt2[__xva]) >= 1){

            $donnees_retournees[__xsi][__xer][]='la requête portant le numéro ' . $chi_id_requete_nouvelle . ' existe déjà [' . __LINE__ . ']';
            return;

        }

        /*
          $donnees_retournees[__xsi][__xer][]='<pre>.' . var_export( $tt1[__xva][0] , true ) .'</pre> [' . __LINE__ . ']';
          return;
        */
        $nom_fichier_ancien=__RACINE_PGMS__ . '__sqls/sql_' . $chi_id_requete_ancienne . '.php';
        $contenu='';
        
        if(is_null($tt1[__xva][0]['T0.cht_php_requete'])){

            /*
              dans le projet rev1/1,
            */
            $contenu=@file_get_contents($nom_fichier_ancien);
            
            if($contenu === false){

                $donnees_retournees[__xsi][__xer][]='erreur de lecture du fichier sur disque [' . __LINE__ . ']';
                return;

            }


        }else{

            $contenu=$tt1[__xva][0]['T0.cht_php_requete'];
        }

        $nouveau_php=str_replace('sql_' . $chi_id_requete_ancienne . '(','sql_' . $chi_id_requete_nouvelle . '(',$contenu);
        /*
          $donnees_retournees[__xsi][__xer][]='<pre>.' . $nouveau_php.'</pre> [' . __LINE__ . ']';
          return;
        */
        $tt3=/*sql_inclure_deb*/
            /* sql_351()
            UPDATE b1.tbl_requetes SET 
               `chi_id_requete` = :n_chi_id_requete , 
               `cht_php_requete` = :n_cht_php_requete
            WHERE `chi_id_requete` = :c_chi_id_requete ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_351()*/ 351,
            array(/**/
                'n_cht_php_requete' => $nouveau_php,
                'n_chi_id_requete' => $chi_id_requete_nouvelle,
                'c_chi_id_requete' => $chi_id_requete_ancienne
            ),
            $donnees_retournees
        );
        
        if($tt3[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='Erreur de rumérotation de la requête[' . __LINE__ . ']';
            return;

        }

        /* $donnees_retournees[__xsi][__xal][]=' la requête ' . $chi_id_requete_ancienne . ' a été supprimée du disque [' . __LINE__ . ']';*/
        $this->supprimer_php_du_sql_du_disque($mat,$d,$donnees_retournees,$donnees_recues,$nom_fichier_ancien,false);
        $this->ecrire_le_php_de_la_requete_sur_disque($mat,$d,$donnees_retournees,$donnees_recues,$chi_id_requete_nouvelle,$nouveau_php);
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre><pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);
        */
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        require_once(__RACINE_PGMS__ . 'c_concevoir_une_requete1.php');
        $c_concevoir_une_requete1=new c_concevoir_une_requete1($mat,$d,$donnees_retournees,$donnees_recues);
        $c_concevoir_une_requete1->construire_le_js_des_requetes($donnees_retournees);
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_et_tests_avant_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_et_tests_avant_modifier" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function test_avant_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        /*
          =====================================================================================================
          par exemple, avant le suppression d'un dossier, on vérifie qu'il est vide
        */
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "test_avant_supprimer" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_supprimer" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        require_once(__RACINE_PGMS__ . 'c_concevoir_une_requete1.php');
        $c_concevoir_une_requete1=new c_concevoir_une_requete1($mat,$d,$donnees_retournees,$donnees_recues);
        $c_concevoir_une_requete1->construire_le_js_des_requetes($donnees_retournees);
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "tests_avant_creer" [' . __LINE__ . ']';*/
        /* return array(__xst => __xer);*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function action_apres_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nouvel_id,&$form){
        /*
          =====================================================================================================
        */
        /* afr avec $nouvel_id */
        /*
          =====================================================================================================
        */
        require_once(__RACINE_PGMS__ . 'c_concevoir_une_requete1.php');
        $c_concevoir_une_requete1=new c_concevoir_une_requete1($mat,$d,$donnees_retournees,$donnees_recues);
        $c_concevoir_une_requete1->construire_le_js_des_requetes($donnees_retournees);
    }
    /*
      =============================================================================================================
    */
    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        
        if(is_null($form['chp_type_requete']) || $form['chp_type_requete'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "type" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_souche_requete']) || $form['che_est_souche_requete'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est souche" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt354=/*sql_inclure_deb*/
            /* sql_354()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_354()*/ 354,
            array(/**/
                'T0_chi_id_requete' => $form['chi_id_requete']
            ),
            $donnees_retournees
        );
        
        if($tt354[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt354[__xst] === __xsu && count($tt354[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt354[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt355=/*sql_inclure_deb*/
                /* sql_355()
                UPDATE b1.tbl_requetes SET 
                   `che_est_souche_requete` = :n_che_est_souche_requete , 
                   `chp_type_requete` = :n_chp_type_requete , 
                   `cht_rev_requete` = :n_cht_rev_requete , 
                   `cht_sql_requete` = :n_cht_sql_requete , 
                   `cht_php_requete` = :n_cht_php_requete , 
                   `cht_commentaire_requete` = :n_cht_commentaire_requete
                WHERE `chi_id_requete` = :c_chi_id_requete ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_355()*/ 355,
                array(
                    /**/
                    'c_chi_id_requete' => $tt354[__xva][0]['T0.chi_id_requete'],
                    'n_che_est_souche_requete' => $form['che_est_souche_requete'],
                    'n_chp_type_requete' => $form['chp_type_requete'],
                    'n_cht_rev_requete' => $form['cht_rev_requete'],
                    'n_cht_sql_requete' => $form['cht_sql_requete'],
                    'n_cht_php_requete' => $form['cht_php_requete'],
                    'n_cht_commentaire_requete' => $form['cht_commentaire_requete']
                ),
                $donnees_retournees
            );
            
            if($tt355[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt354[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt354=/*sql_inclure_deb*/
                /* sql_354()
                SELECT 
                `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
                `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
                 FROM b1.tbl_requetes T0
                WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_354()*/ 354,
                array(/**/
                    'T0_chi_id_requete' => $form['chi_id_requete']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt354;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt354;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_requete=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_requete)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_requete'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_requete=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_requete , true ) . '</pre>' ; exit(0);*/
        $tt354=/*sql_inclure_deb*/
            /* sql_354()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_354()*/ 354,
            array(/**/
                'T0_chi_id_requete' => $chi_id_requete
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt354 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt354;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_requete('.$chi_id_requete.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_requete=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_requete)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_requete'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_requete=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_requete(' . $chi_id_requete . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_requete , true ) . '</pre>' ; exit(0);*/
        $tt354=/*sql_inclure_deb*/
            /* sql_354()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_354()*/ 354,
            array(/**/
                'T0_chi_id_requete' => $chi_id_requete
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt354 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt354;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        $tt354=/*sql_inclure_deb*/
            /* sql_354()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_354()*/ 354,
            array(/**/
                'T0_chi_id_requete' => $form['chi_id_requete']
            ),
            $donnees_retournees
        );
        
        if($tt354[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt354[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt352=/*sql_inclure_deb*/
            /* sql_352()
            DELETE FROM b1.tbl_requetes
            WHERE `chi_id_requete` = :chi_id_requete ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_352()*/ 352,
            array(/**/
                'chi_id_requete' => $tt354[__xva][0]['T0.chi_id_requete']
            ),
            $donnees_retournees
        );
        
        if($tt352[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt354[__xva][0]);
        
        if(isset($form['__mat_liste_si_ok'])){

            $mat1=json_decode($form['__mat_liste_si_ok'],true);
            $d=1;
            $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

        }

    }
    /*
      =============================================================================================================
    */
    function page_confirmation_supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $chi_id_requete=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_requete'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_requete=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_requete , true ) . '</pre>' ; exit(0);*/
        $tt354=/*sql_inclure_deb*/
            /* sql_354()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
            `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_354()*/ 354,
            array(/**/
                'T0_chi_id_requete' => $chi_id_requete
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt354 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt354;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function creer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $d . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        
        if(is_null($form['chp_type_requete']) || $form['chp_type_requete'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "type" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(
                    /**/
                    'chp_type_requete' => $form['chp_type_requete'],
                    'cht_rev_requete' => $form['cht_rev_requete'],
                    'cht_sql_requete' => $form['cht_sql_requete'],
                    'cht_php_requete' => $form['cht_php_requete'],
                    'cht_commentaire_requete' => $form['cht_commentaire_requete'],
                    'che_est_souche_requete' => 1
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt390=/*sql_inclure_deb*/
            /* sql_390()
            INSERT INTO b1.`tbl_requetes`(
                `chp_type_requete` , 
                `cht_rev_requete` , 
                `cht_sql_requete` , 
                `cht_php_requete` , 
                `cht_commentaire_requete` , 
                `che_est_souche_requete`
            ) VALUES (
                :chp_type_requete , 
                :cht_rev_requete , 
                :cht_sql_requete , 
                :cht_php_requete , 
                :cht_commentaire_requete , 
                :che_est_souche_requete
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_390()*/ 390,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt390[__xst] === __xsu && $tt390['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt390['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt390['nouvel_id']);
                return;

            }

            
            if(isset($form['__mat_liste_si_ok'])){

                $mat1=json_decode($form['__mat_liste_si_ok'],true);
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat1 , true ) . '</pre>' ; exit(0);*/
                $d=1;
                $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

            }


        }

    }
    /*
      =============================================================================================================
    */
    function filtre1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $__nbMax=40;
        $form=$GLOBALS['__fnt1']->debut_filtre1($mat,$d,$donnees_retournees,$donnees_recues,$this->fonction_liste);
        
        if(!isset($form['$__num_page'])){

            $__num_page=0;

        }else{

            $__num_page=(int)($form['$__num_page']);
        }

        $__debut=$__num_page * $__nbMax;
        $criteres350=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres350[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres350 , true ) . '</pre>' ; exit(0);*/
        $tt350=/*sql_inclure_deb*/
            /* sql_350()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
            `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
             FROM b1.tbl_requetes T0
            WHERE ( / *** *** / `T0`.`chi_id_requete` = :T0_chi_id_requete
               AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete
               AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
               AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
               AND `T0`.`cht_commentaire_requete` LIKE :T0_cht_commentaire_requete
               AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2) 
            ORDER BY `T0`.`chi_id_requete` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_350()*/ 350,
            $criteres350,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt350[__xst]===__xsu && count($tt350[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt350[__xst] === __xsu && count($tt350[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres350['debut']=$__debut;
            $tt350=/*sql_inclure_deb*/
                /* sql_350()
                SELECT 
                `T0`.`chi_id_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
                `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
                 FROM b1.tbl_requetes T0
                WHERE ( / *** *** / `T0`.`chi_id_requete` = :T0_chi_id_requete
                   AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete
                   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
                   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
                   AND `T0`.`cht_commentaire_requete` LIKE :T0_cht_commentaire_requete
                   AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2) 
                ORDER BY `T0`.`chi_id_requete` DESC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_350()*/ 350,
                $criteres350,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt350 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt350 = <pre>' . var_export( $tt350 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['$__nbMax']=$__nbMax;
        $donnees_retournees[__xva]['$__debut']=$__debut;
        $donnees_retournees[__xva]['$__num_page']=$__num_page;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_retournees[__xac] , true ) . '</pre>' ; exit(0);*/
        /* */
        $donnees_retournees[__xac]='';
        $donnees_retournees[__xac] .= 'pm1(';
        $donnees_retournees[__xac] .= ' m1(';
        $donnees_retournees[__xac] .= '  n1(' . __CLASS__ . ')';
        $donnees_retournees[__xac] .= '  f1(';
        $donnees_retournees[__xac] .= '   ' . $this->fonction_liste . '(';
        foreach($form as $k1 => $v1){
            $donnees_retournees[__xac] .= critere_liste($form,$k1);
        }
        $donnees_retournees[__xac] .= '   )';
        $donnees_retournees[__xac] .= '  )';
        $donnees_retournees[__xac] .= ' )';
        $donnees_retournees[__xac] .= ')';
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $donnees_retournees[__xac]  . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $this->fonction_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva][$this->fonction_liste]=$tt350;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function sous_liste1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $this->fonction_liste='sous_liste1';
        $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
        return;
    }
    /*
      =============================================================================================================
    */
    function liste1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $this->fonction_liste='liste1';
        $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
        return;
    }
}