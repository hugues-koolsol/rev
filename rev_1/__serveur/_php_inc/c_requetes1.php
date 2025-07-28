<?php
class c_requetes1{
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
      traitement des formulaires des requetes
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_requetes1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                $conteneur1='';
                $action1='';
                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'conteneur1' && $mat[$j + 1][2] === 'c'){

                        $conteneur1=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'action1' && $mat[$j + 1][2] === 'c'){

                        $action1=$mat[$j + 1][1];
                    }

                }
                
                if($action1 !== ''){

                    
                    if($action1 === 'page_requetes_modifier1'
                       || $action1 === 'page_requetes_creer1'
                       || $action1 === 'page_requetes_supprimer1'
                       || $action1 === 'page_liste_des_requetes1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_requetes_creer1'
                   || $conteneur1 === 'vv_requetes_supprimer1'
                   || $conteneur1 === 'vv_requetes_filtre1'
                   || $conteneur1 === 'vv_requetes_nouveau_numero1'
                ){

                    $this->$conteneur1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );

                }else{

                    $donnees_retournees[__x_signaux][__xal][]='traitement à réaliser pour $donnees_recues ' . var_export($donnees_recues,true) . ' [' . __LINE__ . ']';
                }

                break;

            }

        }
    }
    /*
      =============================================================================================================
    */
    function construire_le_js_des_requetes(&$donnees_retournees){
        
        if(!isset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'])){

            $donnees_retournees[__x_signaux][__xal][]=' le dossier des requetes nèst pas défini [' . __LINE__ . ']';
            return;

        }

        $tt149=/*sql_inclure_deb*/
            /* sql_149()
            SELECT 

            `T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete`
             FROM b1.tbl_requetes T0
            WHERE ( / *** *** / `T0`.`chx_projet_requete` = :T0_chx_projet_requete

               AND `T0`.`chi_id_requete` < :nb_max

               AND 1 = 1) 

            ORDER BY `T0`.`chi_id_requete` ASC
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_149()*/ 149,
            array(/**/
                'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'nb_max' => 99999
            ),
            $donnees_retournees
        );
        
        if($tt149[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection de la requête [' . __LINE__ . ']';
            return;

        }

        $tableau_contenu_js=[];
        foreach($tt149[__xva] as $k1 => $v1){
            $tableau_contenu_js[$v1['T0.chi_id_requete']]=array(/**/
                'cht_sql_requete' => $v1['T0.cht_sql_requete'],
                'cht_commentaire_requete' => $v1['T0.cht_commentaire_requete']
            );
        }
        /*
          {
          "1":"SELECT \r\n`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur`\n FROM b1.tbl_utilisateurs T0\nWHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  \r\nLIMIT 1 OFFSET 0 \n;",
          "2":"SELECT \r\n`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , \r\n`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`\n FROM b1.tbl_requetes T0\nWHERE ( \/* *\/ `T0`.`chi_id_requete` = :T0_chi_id_requete\r\n   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete\r\n   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete\r\n   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete) \r\nORDER BY `T0`.`chi_id_requete` DESC  \r\nLIMIT :quantitee OFFSET :debut \n;",
          "3":"UPDATE b1.tbl_requetes SET \r\n   `chi_id_requete` = :n_chi_id_requete , \r\n   `cht_php_requete` = :n_cht_php_requete\nWHERE (`chi_id_requete` = :c_chi_id_requete\r\n   AND `chx_projet_requete` = :c_chx_projet_requete) ;",
          "4":"\/*meta(tester_les_dependances_dans_le_php(1))*\/\r\n\r\nDELETE FROM b1.tbl_requetes\nWHERE (`chi_id_requete` = :chi_id_requete\r\n   AND `chx_projet_requete` = :chx_projet_requete) ;"
          }
        */
        $chemin_fichier_php_des_sql=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'] . DIRECTORY_SEPARATOR . 'rev_php_des_sql.php';
        
        if((@file_put_contents($chemin_fichier_php_des_sql,'<?' . 'php' . PHP_EOL . '$php_des_sql=' . var_export($tableau_contenu_js,true) . ';')) === false
        ){

            $donnees_retournees[__x_signaux][__xal][]=' erreur lors de l\'écriture de php_des_sql [' . __LINE__ . ']';

        }

        $donnees_retournees[__xva]['php_des_sql']=$tableau_contenu_js;
        /*
          $donnees_retournees[__x_signaux][__xer][]='<pre>' . $contenu_json . '</pre> [' . __LINE__ . ']';
          
          
          
          
        */
    }
    /*
      =============================================================================================================
    */
    function supprimer_php_du_sql_du_disque(&$donnees_retournees,$nom_fichier,$recalculer=true){
        
        if(!isset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'])){

            $donnees_retournees[__x_signaux][__xal][]=' le dossier des requetes nèst pas défini [' . __LINE__ . ']';
            return;

        }

        supprimer_fichier($nom_fichier,false);
        
        if($recalculer === true){

            $this->construire_le_js_des_requetes($donnees_retournees);

        }

    }
    /*
      =============================================================================================================
    */
    function ecrire_php_sur_disque($chemin_fichier,$contenu,&$donnees_retournees){
        
        if(!isset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'])){

            $donnees_retournees[__x_signaux][__xal][]=' le dossier des requetes nèst pas défini [' . __LINE__ . ']';
            return;

        }

        
        if($GLOBALS[DEVER_SRV] >= 2){

            $donnees_retournees[__x_signaux][__xdv][]='ecrire_php_sur_disque [' . __LINE__ . ']';

        }

        
        if(substr($contenu,0,5) !== '<?php'){

            $contenu='<?php' . PHP_EOL . $contenu;

        }

        
        if((@file_put_contents($chemin_fichier,$contenu))){

            $this->construire_le_js_des_requetes($donnees_retournees);
            return true;

        }else{

            return false;
        }

    }
    /*
      =============================================================================================================
    */
    function ecrire_ce_phql_sur_disque(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xal][]= '<pre>'.var_export($mat,true).'</pre> [' . __LINE__ .']';*/
        $chi_id_requete=0;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_requetes1.ecrire_ce_phql_sur_disque' && $mat[$i][2] === 'f' && $mat[$i][8] > 0){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'chi_id_requete' && $mat[$j + 1][2] === 'c' && $mat[$j][2] === 'f'){

                        $chi_id_requete=(int)($mat[$j + 1][1]);
                        break;

                    }

                }

            }

        }
        /*
          $donnees_retournees[__x_signaux][__xal][]= '<pre>'.var_export($chi_id_requete,true).'</pre> [' . __LINE__ .']';
        */
        
        if($chi_id_requete > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_132()
                / ***meta(sur_base_de_reference(1))*** /

                SELECT 

                `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

                `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
                 FROM b1.tbl_requetes T0
                WHERE ( / *** *** / `T0`.`chi_id_requete` = :T0_chi_id_requete

                   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_132()*/ 132,
                array( 'T0_chi_id_requete' => $chi_id_requete, 'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection de la requête [' . __LINE__ . ']';
                return;

            }

            /*
              $donnees_retournees[__x_signaux][__xal][]= '<pre>'.var_export($tt[__xva][0],true).'</pre> [' . __LINE__ .']';
              return;
            */
            $obj=$this->ecrire_le_php_de_la_requete_sur_disque($chi_id_requete,$tt[__xva][0]['T0.cht_php_requete'],$donnees_retournees);
            $donnees_retournees[__xst]=$obj[__xst];
            /* $donnees_retournees[__x_signaux][__xal][]= '<pre>'.var_export($obj[__xst],true).'</pre> [' . __LINE__ .']';*/
            /* return array( __xst => $obj[__xst] );*/

        }

    }
    /*
      =============================================================================================================
    */
    function ecrire_le_php_de_la_requete_sur_disque($id_requete,$source_php_requete,&$donnees_retournees){
        
        if($id_requete === 0){

            return array( __xst => __xsu);

        }

        $chemin_fichier=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'] . DIRECTORY_SEPARATOR . 'sql_' . $id_requete . '.php';
        
        if($this->ecrire_php_sur_disque($chemin_fichier,$source_php_requete,$donnees_retournees)){

            return array( __xst => __xsu);

        }else{

            $donnees_retournees[__x_signaux][__xer][]='erreur ouverture fichier sql_' . $id_requete . '.php [' . __LINE__ . ']';
        }

        return array( __xst => __xer);
    }
    /*
      =============================================================================================================
    */
    function modifier_la_requete_en_base(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*&$data]{*/
        
        if(__X_CLE_APPLICATION === 'rev' . '_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            $matrice='';
            $php='';

        }else{

            $matrice=json_encode($donnees_recues[__xva]['cht_matrice_requete']);
            $php=$donnees_recues[__xva]['php'];
        }

        $a_modifier=array(
            'c_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
            'c_chi_id_requete' => $donnees_recues[__xva]['chi_id_requete'],
            'n_chp_type_requete' => $donnees_recues[__xva]['type'],
            'n_cht_rev_requete' => $donnees_recues[__xva]['rev'],
            'n_cht_sql_requete' => $donnees_recues[__xva]['sql'],
            'n_cht_php_requete' => $php,
            'n_cht_matrice_requete' => $matrice,
            'n_cht_commentaire_requete' => $donnees_recues[__xva]['cht_commentaire_requete']
        );
        $tt=/*sql_inclure_deb*/
            /* sql_109()
            UPDATE b1.tbl_requetes SET 

               `chp_type_requete` = :n_chp_type_requete , 

               `cht_rev_requete` = :n_cht_rev_requete , 

               `cht_sql_requete` = :n_cht_sql_requete , 

               `cht_php_requete` = :n_cht_php_requete , 

               `cht_commentaire_requete` = :n_cht_commentaire_requete , 

               `cht_matrice_requete` = :n_cht_matrice_requete
            WHERE (`chi_id_requete` = :c_chi_id_requete

               AND `chx_projet_requete` = :c_chx_projet_requete) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_109()*/ 109,
            $a_modifier,
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $obj=$this->ecrire_le_php_de_la_requete_sur_disque($donnees_recues[__xva]['chi_id_requete'],$donnees_recues[__xva]['php'],$donnees_retournees);
            
            if($obj[__xst] === __xsu){

                $donnees_retournees[__xst]=__xsu;
                
                if($donnees_recues[__xva]['retour_a_la_liste'] === 1){

                    $mat=array();
                    $this->page_liste_des_requetes1($donnees_retournees,$mat,$donnees_recues);

                }


            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='erreur modifier_la_requete_en_base [' . __LINE__ . ']';
        }

        $this->sauvegarder_une_matrice_de_requete($donnees_retournees,$mat,$donnees_recues);
    }
    /*
      =============================================================================================================
    */
    public function enregistrer_la_requete_en_base(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*&$data]{*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues[__xva] <pre>'.var_export($donnees_recues[__xva],true).'</pre>';
          return;
        */
        $a_inserer=array( array(
                    'chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'chp_type_requete' => $donnees_recues[__xva]['type'],
                    'cht_rev_requete' => $donnees_recues[__xva]['rev'],
                    'cht_sql_requete' => $donnees_recues[__xva]['sql'],
                    'cht_php_requete' => $donnees_recues[__xva]['php'],
                    'cht_commentaire_requete' => $donnees_recues[__xva]['cht_commentaire_requete']
                ));
        $tt107=/*sql_inclure_deb*/
            /* sql_107()
            INSERT INTO b1.`tbl_requetes`(

                `chx_projet_requete` , 

                `chp_type_requete` , 

                `cht_rev_requete` , 

                `cht_sql_requete` , 

                `cht_php_requete` , 

                `cht_commentaire_requete`

            ) VALUES (

                :chx_projet_requete , 

                :chp_type_requete , 

                :cht_rev_requete , 

                :cht_sql_requete , 

                :cht_php_requete , 

                :cht_commentaire_requete

            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_107()*/ 107,
            $a_inserer,
            $donnees_retournees
        );
        
        if($tt107[__xst] === __xsu){

            /* $tt107['nouvel_id'];*/
            /*
              lors de la création dans l'interface, l'id est égal à 0 ou bien nnn si on part d'une requête existante
            */
            $nouveau_php=str_replace('function sql_' . $donnees_recues[__xva]['chi_id_requete'] . '(','function sql_' . $tt107['nouvel_id'] . '(',$donnees_recues[__xva]['php']);
            $tt135=/*sql_inclure_deb*/
                /* sql_135()
                / ***meta(sur_base_de_reference(1))*** /

                

                UPDATE b1.tbl_requetes SET 

                   `cht_php_requete` = :n_cht_php_requete
                WHERE (`chi_id_requete` = :c_chi_id_requete

                   AND `chx_projet_requete` = :c_chx_projet_requete) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_135()*/ 135,
                array(/**/
                    'c_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'c_chi_id_requete' => $tt107['nouvel_id'],
                    'n_cht_php_requete' => $nouveau_php
                ),
                $donnees_retournees
            );
            
            if($tt135[__xst] === __xsu){

                $obj_ecrire=$this->ecrire_le_php_de_la_requete_sur_disque($tt107['nouvel_id'],$nouveau_php,$donnees_retournees);
                
                if($tt135[__xst] === __xsu){

                    $donnees_retournees[__xst]=__xsu;
                    $donnees_retournees[__x_signaux][__xsu][]='Requête sauvegardée [' . __LINE__ . ']';
                    $donnees_recues[__xva]['chi_id_requete']=$tt107['nouvel_id'];
                    $this->sauvegarder_une_matrice_de_requete($donnees_retournees,$mat,$donnees_recues);

                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    public function sauvegarder_une_matrice_de_requete(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* suppression des anciennes données de la table rev */
        $tt=/*sql_inclure_deb*/
            /* sql_105()
            DELETE FROM b1.tbl_revs
            WHERE (`chx_projet_rev` = :chx_projet_rev

               AND `chp_provenance_rev` = :chp_provenance_rev

               AND `chx_source_rev` = :chx_source_rev) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_105()*/ 105,
            array(/**/
                'chx_projet_rev' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'chp_provenance_rev' => 'sql',
                'chx_source_rev' => $donnees_recues[__xva]['chi_id_requete']
            ),
            $donnees_retournees
        );
        
        if(__X_CLE_APPLICATION === 'rev' . '_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $id_requete =  ' . $id_requete . '<pre> ' . var_export(  $matrice , true ) . '</pre>' ; exit(0);*/
        $a_sauvegarder=array();
        for( $i=0 ; $i < count($donnees_recues[__xva]['cht_matrice_requete']) ; $i++ ){
            
            $tab=$donnees_recues[__xva]['cht_matrice_requete'][$i];
            /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev*/
            $a_sauvegarder[]=array(
                'chx_projet_rev' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
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
            /* sql_112()
            INSERT INTO b1.`tbl_revs`(

                `chx_projet_rev` , 

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

                :chx_projet_rev , 

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
             /*sql_112()*/ 112,
            $a_sauvegarder,
            $donnees_retournees
        );
    }
    /*
      =============================================================================================================
    */
    public function recuperer_les_bases_du_projet_en_cours(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=/*sql_inclure_deb*/
            /* sql_127()
            / ***meta(sur_base_de_reference(1))*** /
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_commentaire_basedd` , 
                                   `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , 
            `T1`.`chx_parent_dossier` , `T2`.`chi_id_projet` , `T2`.`chp_nom_projet` , `T2`.`chp_commentaire_projet`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
             LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
            
            WHERE `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_127()*/ 127,
            array(/**/
                'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xal][]='[' . __LINE__ . ']';
            return;

        }

        $donnees_retournees[__xva]['donnees_des_bases_du_projet']=$tt[__xva];
        /*
          $donnees_retournees[__x_signaux][__xal][]= '[' . __LINE__ .']<pre>'.var_export( $donnees_recues , true ).'</pre>';
          return
        */
        $donnees_retournees[__xva]['chi_id_requete_initiale']='';
        $donnees_retournees[__xva]['cht_rev_requete_initiale']='';
        $donnees_retournees[__xva]['chp_type_requete_initiale']='';
        $donnees_retournees[__xva]['cht_commentaire_requete_initiale']='';
        
        if($donnees_recues[__xva]['id_requete'] > 0){

            $tt106=/*sql_inclure_deb*/
                /* sql_106()
                SELECT 

                `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

                `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
                 FROM b1.tbl_requetes T0
                WHERE (`T0`.`chi_id_requete` = :T0_chi_id_requete

                   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_106()*/ 106,
                array(/**/
                    'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'T0_chi_id_requete' => $donnees_recues[__xva]['id_requete']
                ),
                $donnees_retournees
            );
            
            if($tt106[__xst] === __xsu){

                $donnees_retournees[__xva]['chi_id_requete_initiale']=$donnees_recues[__xva]['id_requete'];
                $donnees_retournees[__xva]['cht_rev_requete_initiale']=$tt106[__xva][0]['T0.cht_rev_requete'];
                $donnees_retournees[__xva]['chp_type_requete_initiale']=$tt106[__xva][0]['T0.chp_type_requete'];
                $donnees_retournees[__xva]['cht_commentaire_requete_initiale']=$tt106[__xva][0]['T0.cht_commentaire_requete'];

            }else{

                $donnees_retournees[__x_signaux][__xal][]='[' . __LINE__ . ']';
                return;
            }


        }

        $donnees_retournees[__xva]['maj']='methode_module_dynamique1(nom_du_module2("_js/c_requete_sql1.js"),methode2(traiter_donnees_bases))';
        $donnees_retournees[__xva]['fonction_appelee_apres_chargement']=$donnees_recues[__xva]['fonction_appelee_apres_chargement'];
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function vv_requetes_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);
        */
        /*
          <>:"/\|?*^, 
          ., ..
          Filenames cannot end in a space or dot.
          CON, PRN, AUX, NUL , COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9,LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9
          
          
        */
        $page_liste_des_requetes1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_requetes1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_requetes1=true;

            }

        }
        $donnees_retournees[__xst]=__xsu;
        $donnees_sql=array( array(
                    /**/
                    'chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'cht_commentaire_requete' => '',
                    /* $donnees_recues[__xva]['cht_commentaire_requete'],*/
                    'chp_fournisseur_requetedd' => 'sqlite'
                    /* $donnees_recues[__xva]['chp_fournisseur_requetedd'],*/
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=$this->sql0->sql_17($donnees_sql,$donnees_retournees);
        
        if($tt[__xst] !== __xsu){

            $code_erreur=$tt['code_erreur']??0;
            
            if($code_erreur === 19){

                $donnees_retournees[__x_signaux][__xer][]=' Cette requete existe déjà [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de la création de cette requete [' . __LINE__ . ',sql(' . $code_erreur . ')] ';
            }

            return;

        }else if($tt['changements'] === 1){

            
            if($page_liste_des_requetes1 === true){

                $this->page_liste_des_requetes1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_requete(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_requetes_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_requetes1.formulaire1(action1(page_requetes_modifier1),chi_id_requete(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_requetes_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txtPar='__num_page(0)';
        $nouvelles_valeurs=array( '__num_page' => 0);
        foreach($donnees_recues[__xva] as $k0 => $v0){
            
            if($k0 !== '__num_page'){

                $nouvelles_valeurs[$k0]=$v0;
                
                if(is_numeric($v0)){

                    $txtPar .= ',' . $k0 . '(' . $v0 . ')';

                }else{

                    $txtPar .= ',' . $k0 . '(\'' . str_replace('\'','\\\'',$v0) . '\')';
                }


            }

        }
        $_SESSION[__X_CLE_APPLICATION]['c_requetes1.page_liste_des_requetes1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_requetes1.page_liste_des_requetes1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_requetes1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_requetes_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /* $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);*/
        /*si l'utilisateur bidouille l'id dans l'interface*/
        
        if($donnees_recues[__xva]['chi_id_requete'] === 1){

            $donnees_retournees[__x_signaux][$tt[__xst]][]=' vous ne pouvez pas supprimer la requete 1 [' . __LINE__ . ']';

        }

        $tt=/*sql_inclure_deb*/
            /* sql_106()
            SELECT 

            `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

            `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
             FROM b1.tbl_requetes T0
            WHERE (`T0`.`chi_id_requete` = :T0_chi_id_requete

               AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_106()*/ 106,
            array( 'T0_chi_id_requete' => $donnees_recues[__xva]['chi_id_requete'], 'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt[__xva] , true ) . '</pre>' ; exit(0);*/
            $tt=/*sql_inclure_deb*/
                /* sql_104()
                / ***meta(tester_les_dependances_dans_le_php(1))*** /

                

                DELETE FROM b1.tbl_requetes
                WHERE (`chi_id_requete` = :chi_id_requete

                   AND `chx_projet_requete` = :chx_projet_requete) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_104()*/ 104,
                array( 'chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'], 'chi_id_requete' => $tt[__xva][0]['T0.chi_id_requete']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                
                if($tt['code_erreur'] === 19){

                    $donnees_retournees[__x_signaux][$tt[__xst]][]=__LINE__ . ' vous ne pouvez pas supprimer cette requete car un élément en dépend';

                }else{

                    $donnees_retournees[__x_signaux][$tt[__xst]][]=__LINE__ . ' erreur lors de la suppression';
                }


            }else{

                
                if($tt['changements'] === 1){

                    $chemin_fichier=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'] . DIRECTORY_SEPARATOR . 'sql_' . $donnees_recues[__xva]['chi_id_requete'] . '.php';
                    $this->supprimer_php_du_sql_du_disque($donnees_retournees,$chemin_fichier,true);
                    $donnees_retournees[__x_signaux][__xal][]=' la requête ' . $donnees_recues[__xva]['chi_id_requete'] . ' a été supprimée du disque [' . __LINE__ . ']';
                    /* $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' la suppression a été effectuée en bdd';*/
                    $this->page_liste_des_requetes1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune suppression efféctuée';
                }

            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune suppression efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function page_requetes_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $chi_id_requete=0;
        /*
          
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . '<pre>'.var_export($mat , true).'</pre>';
          return;
        */
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_requetes1.formulaire1' && $mat[$i][2] === 'f'){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'chi_id_requete' && $mat[$j + 1][2] === 'c' && $mat[$j][2] === 'f'){

                        $chi_id_requete=(int)($mat[$j + 1][1]);
                        break;

                    }

                }

            }

        }
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . '<pre>'.var_export($chi_id_requete , true).'</pre>';
          return;
        */
        $o1='';
        $o1 .= '<h1>concevoir une requete <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_requetes1.formulaire1(action1(page_liste_des_requetes1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_requetes_creer1">' . PHP_EOL;
        /* */
        $o1 .= '</div>' . PHP_EOL;
        $o1 .= <<<EOT
<div id="div_de_travail" style="max-width:100%;">Veuillez patienter</div>
<div class="yy_conteneur_txtara">
    <textarea class="txtar1" id="txtar2" rows="10" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
</div>

<div style="margin-top:10px;">
    <b>php : </b>
    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(txtar3)))" title="agrandir la zone">🖐</div>
    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(txtar3)))" title="retrecir la zone">👊</div>
    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(txtar3)))" title="aller à la ligne">ligne</div>
</div>
<div class="yy_conteneur_txtara">
    <textarea class="txtar1" id="txtar3" rows="10" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
</div>
<div>
    <b>initialisation</b>
    <a href="javascript:__gi1.reduire_la_text_area(&quot;init&quot;);" title="réduire la zone">👊</a>
    <a href="javascript:__gi1.agrandir_la_text_area(&quot;init&quot;);" title="agrandir la zone">🖐</a>
</div>
<div class="yy_conteneur_txtara">
    <textarea class="txtar1" id="init" rows="10" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
</div>
EOT;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees[__xva]['maj']='' . 'maj_interface1(' . 'charger_module1(' . 'chemin_module1("_js/c_requete_sql1.js"),' . 'initialisation1(' . '(module_js1,c_requete_sql1.js),' . '(nom_module1,c_requete_sql1)' . '(div_de_travail,div_de_travail)' . '(chi_id_requete,' . $chi_id_requete . ')' . '(methode_initiale,init0)' . ')' . ')' . ')';
        $donnees_retournees[__x_action]='c_requetes1.formulaire1(action1(page_requetes_creer1),chi_id_requete(' . $chi_id_requete . '))';
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_requetes_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . ' TODO $chi_id_requete '.var_export($chi_id_requete,true);
          return;
        */
        $o1='';
        $chi_id_requete='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_requete' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_requete=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_requete) && $chi_id_requete > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_106()
                SELECT 

                `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

                `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
                 FROM b1.tbl_requetes T0
                WHERE (`T0`.`chi_id_requete` = :T0_chi_id_requete

                   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_106()*/ 106,
                array( 'T0_chi_id_requete' => $chi_id_requete, 'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer une requete <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_requetes1.formulaire1(action1(page_liste_des_requetes1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_requetes_supprimer1">' . PHP_EOL;
                $o1 .= '   confirmez voous la suppression de la requete id=<b>' . $tt[__xva][0]['T0.chi_id_requete'] . '</b> ';
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>sql</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <pre>' . $tt[__xva][0]['T0.cht_sql_requete'] . '</pre>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_requete'] . '" id="chi_id_requete" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_requetes1.formulaire1(conteneur1(vv_requetes_supprimer1),page_liste_des_requetes1())" title="" >Je confirme la suppression</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }

    }
    /*
      =============================================================================================================
    */
    function page_requetes_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xif][]='TODO $donnees_recues '.var_export($donnees_recues,true);
          return;
        */
        $o1='';
        $chi_id_requete='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_requete' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_requete=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_requete) && $chi_id_requete > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_132()
                / ***meta(sur_base_de_reference(1))*** /

                SELECT 

                `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

                `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
                 FROM b1.tbl_requetes T0
                WHERE ( / *** *** / `T0`.`chi_id_requete` = :T0_chi_id_requete

                   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_132()*/ 132,
                array( 'T0_chi_id_requete' => $chi_id_requete, 'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection du dossier[' . __LINE__ . ']';
                return;

            }

            $o1 .= '<h1>';
            $o1 .= '<div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_requetes1.formulaire1(action1(page_requetes_creer1),chi_id_requete(' . $chi_id_requete . '))" title="editer la requête">SQL</div>';
            $o1 .= 'modifier une requete <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_requetes1.formulaire1(action1(page_liste_des_requetes1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
            $o1 .= '<div id="vv_requetes_modifier1">' . PHP_EOL;
            /**/
            $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_requete'] . '" id="chi_id_requete" />' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>id</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <b>' . $chi_id_requete . '</b>  ' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>rev</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            /**/
            $o1 .= '    <div>' . PHP_EOL;
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_rev_requete)))" title="formater le source rev" >(😊)</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(insérer_un_commentaire1(zone_source(cht_rev_requete)))" title="insérer un commentaire" >#(😎)</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_rev_requete)))" title="agrandir la zone" >🖐</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_rev_requete)))" title="retrecir la zone" >👊</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_rev_requete)))" title="vider la zone" >🚫</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_rev_requete)))" title="copier le contenu" >📋</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_rev_requete)))" title="aller à la position" >position</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_rev_requete)))" title="aller à la ligne" >ligne</div>';
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="cht_rev_requete" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_rev_requete']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>sql</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            /**/
            $o1 .= '    <div>' . PHP_EOL;
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_sql_requete)))" title="agrandir la zone" >🖐</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_sql_requete)))" title="retrecir la zone" >👊</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_sql_requete)))" title="vider la zone" >🚫</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_sql_requete)))" title="copier le contenu" >📋</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_sql_requete)))" title="aller à la position" >position</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_sql_requete)))" title="aller à la ligne" >ligne</div>';
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="cht_sql_requete" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_sql_requete']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>php</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            /**/
            $o1 .= '    <div>' . PHP_EOL;
            $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_requetes1.ecrire_ce_phql_sur_disque(chi_id_requete(' . $tt[__xva][0]['T0.chi_id_requete'] . '))" title="écrire ce source php sur dique" >Ecrire sur disque</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_php_requete)))" title="agrandir la zone" >🖐</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_php_requete)))" title="retrecir la zone" >👊</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_php_requete)))" title="vider la zone" >🚫</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_php_requete)))" title="copier le contenu" >📋</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_php_requete)))" title="aller à la position" >position</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_php_requete)))" title="aller à la ligne" >ligne</div>';
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="cht_php_requete" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_php_requete']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>commentaire</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="cht_commentaire_requete" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_commentaire_requete']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '</div>' . PHP_EOL;
            $donnees_retournees[__x_page] .= $o1;
            $donnees_retournees[__xst]=__xsu;

        }

    }
    /*
      =============================================================================================================
    */
    function vv_requetes_nouveau_numero1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $chi_id_requete_ancienne=0;
        $chi_id_requete_nouvelle=0;
        
        if(isset($donnees_recues[__xva]['vv_nouveau_numero_de_requete'])
           && is_numeric($donnees_recues[__xva]['vv_nouveau_numero_de_requete'])
        ){

            $chi_id_requete_nouvelle=(int)($donnees_recues[__xva]['vv_nouveau_numero_de_requete']);

        }else{

            $donnees_retournees[__x_signaux][__xer][]='le nouveau numéro doit être numérique [' . __LINE__ . ']';
            return;
        }

        
        if(isset($donnees_recues[__xva]['vv_ancien_numero_de_requete'])
           && is_numeric($donnees_recues[__xva]['vv_ancien_numero_de_requete'])
        ){

            $chi_id_requete_ancienne=(int)($donnees_recues[__xva]['vv_ancien_numero_de_requete']);

        }else{

            $donnees_retournees[__x_signaux][__xer][]='l\'ancien numéro doit être numérique [' . __LINE__ . ']';
            return;
        }

        $tt1=/*sql_inclure_deb*/
            /* sql_132()
            / ***meta(sur_base_de_reference(1))*** /

            SELECT 

            `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

            `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
             FROM b1.tbl_requetes T0
            WHERE ( / *** *** / `T0`.`chi_id_requete` = :T0_chi_id_requete

               AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_132()*/ 132,
            array( 'T0_chi_id_requete' => $chi_id_requete_ancienne, 'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection de la requête[' . __LINE__ . ']';
            return;

        }

        $tt2=/*sql_inclure_deb*/
            /* sql_132()
            / ***meta(sur_base_de_reference(1))*** /

            SELECT 

            `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

            `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
             FROM b1.tbl_requetes T0
            WHERE ( / *** *** / `T0`.`chi_id_requete` = :T0_chi_id_requete

               AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_132()*/ 132,
            array( 'T0_chi_id_requete' => $chi_id_requete_nouvelle, 'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt2[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection de la requête[' . __LINE__ . ']';
            return;

        }

        
        if(count($tt2[__xva]) >= 1){

            $donnees_retournees[__x_signaux][__xer][]='la requête portant le numéro ' . $chi_id_requete_nouvelle . ' existe déjà [' . __LINE__ . ']';
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xer][]='<pre>.' . var_export( $tt1[__xva][0] , true ) .'</pre> [' . __LINE__ . ']';
          return;
        */
        $nom_fichier_ancien=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'] . DIRECTORY_SEPARATOR . 'sql_' . $chi_id_requete_ancienne . '.php';
        $contenu='';
        
        if(is_null($tt1[__xva][0]['T0.cht_php_requete'])){

            /*
              dans le projet rev1/1,
            */
            $contenu=@file_get_contents($nom_fichier_ancien);
            
            if($contenu === false){

                $donnees_retournees[__x_signaux][__xer][]='erreur de lecture du fichier sur disque [' . __LINE__ . ']';
                return;

            }


        }else{

            $contenu=$tt1[__xva][0]['T0.cht_php_requete'];
        }

        $nouveau_php=str_replace('sql_' . $chi_id_requete_ancienne . '(','sql_' . $chi_id_requete_nouvelle . '(',$contenu);
        /*
          $donnees_retournees[__x_signaux][__xer][]='<pre>.' . $nouveau_php.'</pre> [' . __LINE__ . ']';
          return;
        */
        $tt3=/*sql_inclure_deb*/
            /* sql_103()
            UPDATE b1.tbl_requetes SET 

               `chi_id_requete` = :n_chi_id_requete , 

               `cht_php_requete` = :n_cht_php_requete
            WHERE (`chi_id_requete` = :c_chi_id_requete

               AND `chx_projet_requete` = :c_chx_projet_requete) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_103()*/ 103,
            array(
                /**/
                'n_cht_php_requete' => $nouveau_php,
                'n_chi_id_requete' => $chi_id_requete_nouvelle,
                'c_chi_id_requete' => $chi_id_requete_ancienne,
                'c_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt3[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur de rumérotation de la requête[' . __LINE__ . ']';
            return;

        }

        $donnees_retournees[__x_signaux][__xal][]=' la requête ' . $chi_id_requete_ancienne . ' a été supprimée du disque [' . __LINE__ . ']';
        $this->supprimer_php_du_sql_du_disque($donnees_retournees,$nom_fichier_ancien,false);
        $this->ecrire_le_php_de_la_requete_sur_disque($chi_id_requete_nouvelle,$nouveau_php,$donnees_retournees);
        /*
          
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre><pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);
        */
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees['__x_action']='maj_interface2(fermer_sous_fenetre1(c_requetes1.page_liste_des_requetes1()))';
        /* c_requetes1.formulaire1(action1(page_requetes_modifier1),chi_id_requete(' . $tt['nouvel_id'] . '))';*/
        /* $donnees_retournees[__x_page] .= $o1;*/
    }
    /*
      =============================================================================================================
    */
    function page_nouveau_numero1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>Attribuer un nouveau numéro</h1>';
        $chi_id_requete=0;
        $l01=count($mat);
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_requetes1.page_nouveau_numero1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'chi_id_requete' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_requete=(int)($mat[$j + 1][1]);

                    }

                }

            }

        }
        
        if($chi_id_requete === 0){

            $o1 .= 'le numéro actuel est <b>' . $chi_id_requete . '</b>';
            $donnees_retournees[__x_page] .= $o1;
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        $o1 .= 'le numéro actuel est <b>' . $chi_id_requete . '</b>';
        $o1 .= '<br />';
        $o1 .= '<div id="vv_requetes_nouveau_numero1">';
        $o1 .= '    <input type="hidden" id="vv_ancien_numero_de_requete" value="' . $chi_id_requete . '" />';
        $o1 .= '    le nouveau numéro sera : <input type="text" id="vv_nouveau_numero_de_requete" value="' . $chi_id_requete . '" />';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(affecte(zone(vv_nouveau_numero_de_requete,valeur),plus( zone(vv_nouveau_numero_de_requete,valeur) , 100 )))">+100</div>';
        $o1 .= '    <br />';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_requetes1.formulaire1(conteneur1(vv_requetes_nouveau_numero1))">attribuer ce nouveau numéro</div>';
        $o1 .= '</div>';
        /*
          $o1.='<pre>'.var_export($mat,true).'</pre>';
        */
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function enregistrer_une_requete_compile1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        
        if(__X_CLE_APPLICATION === 'rev' . '_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            $tt=/*sql_inclure_deb*/
                /* sql_109()
                UPDATE b1.tbl_requetes SET 

                   `chp_type_requete` = :n_chp_type_requete , 

                   `cht_rev_requete` = :n_cht_rev_requete , 

                   `cht_sql_requete` = :n_cht_sql_requete , 

                   `cht_php_requete` = :n_cht_php_requete , 

                   `cht_commentaire_requete` = :n_cht_commentaire_requete , 

                   `cht_matrice_requete` = :n_cht_matrice_requete
                WHERE (`chi_id_requete` = :c_chi_id_requete

                   AND `chx_projet_requete` = :c_chx_projet_requete) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_109()*/ 109,
                array(
                    /**/
                    'c_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'c_chi_id_requete' => $donnees_recues[__xva]['contenu_bdd_requete']['T0.chi_id_requete'],
                    'n_cht_sql_requete' => $donnees_recues[__xva]['cht_sql_requete'],
                    'n_cht_php_requete' => '',
                    'n_cht_matrice_requete' => ''
                ),
                $donnees_retournees
            );

        }else{

            $tt=/*sql_inclure_deb*/
                /* sql_109()
                UPDATE b1.tbl_requetes SET 

                   `chp_type_requete` = :n_chp_type_requete , 

                   `cht_rev_requete` = :n_cht_rev_requete , 

                   `cht_sql_requete` = :n_cht_sql_requete , 

                   `cht_php_requete` = :n_cht_php_requete , 

                   `cht_commentaire_requete` = :n_cht_commentaire_requete , 

                   `cht_matrice_requete` = :n_cht_matrice_requete
                WHERE (`chi_id_requete` = :c_chi_id_requete

                   AND `chx_projet_requete` = :c_chx_projet_requete) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_109()*/ 109,
                array(
                    /**/
                    'c_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'c_chi_id_requete' => $donnees_recues[__xva]['contenu_bdd_requete']['T0.chi_id_requete'],
                    'n_cht_sql_requete' => $donnees_recues[__xva]['cht_sql_requete'],
                    'n_cht_php_requete' => $donnees_recues[__xva]['cht_php_requete']
                ),
                $donnees_retournees
            );
        }

        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de l\'enregistrement de la requête [' . __LINE__ . ']';
            return;

        }

        $chemin_fichier=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'] . DIRECTORY_SEPARATOR . 'sql_' . $donnees_recues[__xva]['contenu_bdd_requete']['T0.chi_id_requete'] . '.php';
        
        if($this->ecrire_php_sur_disque($chemin_fichier,$donnees_recues[__xva]['cht_php_requete'],$donnees_retournees)){

            
            if($GLOBALS[DEVER_SRV] >= 1){

                $donnees_retournees[__x_signaux][__xsu][]='le sql a bien été compilé et réécrit [' . __LINE__ . ']';

            }

            
            if(isset($donnees_recues[__xva]['bouton_compiler']) && $donnees_recues[__xva]['bouton_compiler'] !== ''){

                $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(' . $donnees_recues[__xva]['bouton_compiler'] . '),classNameSet(\'hug_bouton yy__x_signaux_1\')))';

            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]='le sql a bien été enregistré mais n\'a pas pu être écrit sur disque [' . __LINE__ . ']';
        }

        
        if(__X_CLE_APPLICATION === 'rev' . '_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            /* on n'enregistre pas le rev */

        }else{

            $this->sauvegarder_une_matrice_de_requete($donnees_retournees,$mat,$donnees_recues);
        }

        /*
          $donnees_retournees[__x_signaux][__xal][]='<pre>'.var_export( $donnees_recues[__xva] , true ).'</pre> [' . __LINE__ . ']'; // ['cht_matrice_requete']
        */
        $donnees_retournees[__xst]=__xsu;
        return;
    }
    /*
      =============================================================================================================
    */
    function compiler_requete1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $chi_id_requete=0;
        $bouton_compiler='';
        $l01=count($mat);
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_requetes1.compiler_requete1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        /* $donnees_retournees[__x_signaux][__xdv][]='$mat[$j][1] ='.json_encode( $mat[$j][1] . ' ' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/
                        
                        if($mat[$j][1] === 'chi_id_requete'){

                            $chi_id_requete=$mat[$j + 1][1];

                        }else if($mat[$j][1] === 'bouton_compiler'){

                            $bouton_compiler=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        
        if($chi_id_requete > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_132()
                / ***meta(sur_base_de_reference(1))*** /

                SELECT 

                `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

                `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
                 FROM b1.tbl_requetes T0
                WHERE ( / *** *** / `T0`.`chi_id_requete` = :T0_chi_id_requete

                   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_132()*/ 132,
                array( 'T0_chi_id_requete' => $chi_id_requete, 'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            $tt2=/*sql_inclure_deb*/
                /* sql_171()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
                 FROM b1.tbl_bdds T0
                WHERE (`T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_171()*/ 171,
                array( 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu && $tt2[__xst] === __xsu){

                $bases_du_projet=array();
                foreach($tt2[__xva] as $k1 => $v1){
                    $bases_du_projet[$v1['T0.chi_id_basedd']]=$v1;
                }
                $donnees_retournees[__xva]['ne_pas_retablir_les_elements_masques']=__xsu;
                $donnees_retournees[__xva]['contenu_bdd_requete']=$tt[__xva][0];
                $donnees_retournees[__xva]['bases_du_projet']=$bases_du_projet;
                /* $tt2[__xva];*/
                $donnees_retournees[__xva]['bouton_compiler']=$bouton_compiler;
                $donnees_retournees[__x_action]='c_fonctions_js1(compiler_requete1(chi_id_requete(' . $chi_id_requete . ')))';
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sql 171 pour $chi_id_requete=' . $chi_id_requete . ' [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='entrée bdd non trouvé $chi_id_requete=' . $chi_id_requete . ' [' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    function le_repertoire_des_requetes_est_il_defini(){
        $tt134=/*sql_inclure_deb*/
            /* sql_134()
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
            `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier`
             FROM b1.tbl_projets T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
            
             LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet
            
            WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_134()*/ 134,
            array( 'T0_chi_id_projet' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt134[__xst] === __xsu){

            
            if($tt134[__xva][0]['T0.chx_dossier_requetes_projet'] !== null){

                
                if(!isset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'])){

                    require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
                    $obj_doss=new c_dossiers1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );
                    $chemin_racine2=$obj_doss->construire_chemin($tt134[__xva][0]['T0.chx_dossier_requetes_projet']);
                    
                    if($chemin_racine2[__xst] === __xsu){

                        $_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']=$chemin_racine2[__xva]['chemin_absolu'];

                    }


                }

                return array( __xst => __xsu);

            }


        }

        return array( __xst => __xer);
    }
    /*
      =============================================================================================================
    */
    function page_liste_des_requetes1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          le répertoire de requetes est-il défini ?
        */
        $ret=$this->le_repertoire_des_requetes_est_il_defini();
        
        if($ret[__xst] === __xer){

            $o1='';
            $o1 .= '<h1>Le dossier des requetes n\'est pas défini</h1>';
            $o1 .= '<div class="hug_bouton yy__x_signaux___xsu" data-hug_click="';
            $o1 .= 'c_projets1.formulaire1(action1(page_projets_editer1),chi_id_projet(' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . '))';
            $o1 .= '" title="editer la requête">Editer le projet</div>';
            $donnees_retournees[__x_page]=$o1;
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        $__nbMax=20;
        $par=array();
        $par['T0_chi_id_requete']='';
        $par['T0_chi_id_requete2']='';
        $par['T0_chp_type_requete']='';
        $par['T0_cht_rev_requete']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_requetes1.page_liste_des_requetes1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        /* $donnees_retournees[__x_signaux][__xdv][]='$mat[$j][1] ='.json_encode( $mat[$j][1] . ' ' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/
                        
                        if($mat[$j][1] === '__num_page'){

                            $numpage=$mat[$j + 1][1];
                            $par_mat['__num_page']=$mat[$j + 1][1];
                            $par['__num_page']=$mat[$j + 1][1];

                        }else if($mat[$j][1] === 'indice_menu'){

                            $numpage=0;
                            $par_mat['__num_page']=0;
                            $provenance_menu=true;
                            $par['__num_page']=0;

                        }else if($mat[$j + 1][1] !== ''){

                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $par , true ) . '</pre>' ; exit(0);
        */
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_requetes1.page_liste_des_requetes1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_requetes1.page_liste_des_requetes1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_requetes1.page_liste_des_requetes1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_requetes1.page_liste_des_requetes1']=$par;
        }

        $par['T0_chi_id_requete']=$par['T0_chi_id_requete']??'';
        $par['T0_chi_id_requete2']=$par['T0_chi_id_requete2']??'';
        $fonction1='c_requetes1.page_liste_des_requetes1';
        $nom_filtre='vv_requetes_filtre1';
        $o1='<h1>Liste des requetes</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_requete" value="' . $par['T0_chi_id_requete'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id &lt;=</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_requete2" value="' . $par['T0_chi_id_requete2'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>rev</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_cht_rev_requete" value="' . $par['T0_cht_rev_requete'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>type</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chp_type_requete" value="' . $par['T0_chp_type_requete'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_requetes1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_102()
            SELECT 

            `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 

            `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
             FROM b1.tbl_requetes T0
            WHERE ( / *** *** / `T0`.`chi_id_requete` = :T0_chi_id_requete

               AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete

               AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete

               AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete

               AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2) 

            ORDER BY `T0`.`chi_id_requete` DESC  

            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_102()*/ 102,
            array(
                'T0_chi_id_requete' => $par['T0_chi_id_requete'] === '' ? '' : $par['T0_chi_id_requete'],
                'T0_chi_id_requete2' => $par['T0_chi_id_requete2'] === '' ? '' : $par['T0_chi_id_requete2'],
                'T0_chx_projet_requete' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'T0_chp_type_requete' => $par['T0_chp_type_requete'] === '' ? '' : '' . $par['T0_chp_type_requete'] . '',
                'T0_cht_rev_requete' => $par['T0_cht_rev_requete'] === '' ? '' : '' . $par['T0_cht_rev_requete'] . '',
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des requetes [' . __LINE__ . ']';
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $tt '.var_export($tt,true);
        */
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_requetes1.formulaire1(action1(page_requetes_creer1),chi_id_requete(0))" title="nouvelle requete" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>type</th>';
        $lsttbl .= '<th>commentaire</th>';
        $lsttbl .= '<th>sql</th>';
        $lsttbl .= '<th>rev</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_requetes1.formulaire1(action1(page_requetes_creer1),chi_id_requete(' . $v0['T0.chi_id_requete'] . '))" title="editer la requête">SQL</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_requetes1.formulaire1(action1(page_requetes_modifier1),chi_id_requete(' . $v0['T0.chi_id_requete'] . '))" >✎</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux_1" data-hug_click="interface1.affiche_sous_fenetre1(c_requetes1.page_nouveau_numero1( sans_menus1() chi_id_requete(' . $v0['T0.chi_id_requete'] . ')))" title="attribuer un autre numéro" >#°</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xer" data-hug_click="c_requetes1.formulaire1(action1(page_requetes_supprimer1),chi_id_requete(' . $v0['T0.chi_id_requete'] . '))" >🗑</div>';
            $lsttbl .= '  <div id="vv_bouton_compiler_' . $v0['T0.chi_id_requete'] . '" class="hug_bouton yy__x_signaux___xdv" data-hug_click="c_requetes1.compiler_requete1(chi_id_requete(' . $v0['T0.chi_id_requete'] . '),bouton_compiler(vv_bouton_compiler_' . $v0['T0.chi_id_requete'] . '))" >compiler</div>';
            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_requete'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . $v0['T0.chp_type_requete'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . $v0['T0.cht_commentaire_requete'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td id="req_' . $v0['T0.chi_id_requete'] . '" style="text-align:left;" title="' . enti1($v0['T0.cht_sql_requete']) . '">';
            $cmd='c_fonctions_js1(affiche_requete_de_liste1(req_' . $v0['T0.chi_id_requete'] . '))';
            $lsttbl .= '<div  class="hug_bouton" data-hug_click="' . $cmd . '">O</div>' . enti1(mb_substr($v0['T0.cht_sql_requete'],0,30)) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;" title="' . enti1($v0['T0.cht_rev_requete']) . '">';
            $lsttbl .= '' . enti1(mb_substr($v0['T0.cht_rev_requete'],0,30)) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_requetes1.page_liste_des_requetes1()';
        $donnees_retournees[__xst]=__xsu;
    }
}