<?php
class c_concevoir_une_requete1{
    private $sql0=null;
    private $moi='c_concevoir_une_requete1';
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
    public function enregistrer_la_requete_en_base(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*&$data]{*/
        /*
          $donnees_retournees[__xsi][__xal][]=__LINE__.' TODO $donnees_recues[__xva] <pre>'.var_export($donnees_recues[__xva],true).'</pre>';
          return;
        */
        $a_inserer=array( array(
                    'chp_type_requete' => $donnees_recues[__xva]['type'],
                    'cht_rev_requete' => $donnees_recues[__xva]['rev'],
                    'cht_sql_requete' => $donnees_recues[__xva]['sql'],
                    'cht_php_requete' => $donnees_recues[__xva]['php'],
                    'cht_commentaire_requete' => $donnees_recues[__xva]['cht_commentaire_requete'],
                    'che_est_souche_requete' => $donnees_recues[__xva]['che_est_souche_requete']
                ));
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
            $a_inserer,
            $donnees_retournees
        );
        
        if($tt390[__xst] === __xsu){

            /* $tt390['nouvel_id'];*/
            /*
              lors de la création dans l'interface, l'id est égal à 0 ou bien nnn si on part d'une requête existante
            */
            $nouveau_php=str_replace('function sql_' . $donnees_recues[__xva]['chi_id_requete'] . '(','function sql_' . $tt390['nouvel_id'] . '(',$donnees_recues[__xva]['php']);
            $tt376=/*sql_inclure_deb*/
                /* sql_376()
                UPDATE b1.tbl_requetes SET 
                   `cht_php_requete` = :n_cht_php_requete
                WHERE `chi_id_requete` = :c_chi_id_requete ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_376()*/ 376,
                array(/**/
                    'c_chi_id_requete' => $tt390['nouvel_id'],
                    'n_cht_php_requete' => $nouveau_php
                ),
                $donnees_retournees
            );
            
            if($tt376[__xst] === __xsu){

                $obj_ecrire=$this->ecrire_le_php_de_la_requete_sur_disque($tt390['nouvel_id'],$nouveau_php,$donnees_retournees);
                
                if($tt376[__xst] === __xsu){

                    $donnees_retournees[__xst]=__xsu;
                    $donnees_retournees[__xsi][__xsu][]='Requête sauvegardée [' . __LINE__ . ']';
                    $donnees_recues[__xva]['chi_id_requete']=$tt390['nouvel_id'];
                    $this->sauvegarder_une_matrice_de_requete($mat,$d,$donnees_retournees,$donnees_recues);

                }


            }else{

                $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . ']';
        }

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

        /* echo __FILE__ . ' ' . __LINE__ . ' $id_requete =  ' . $id_requete . '<pre> ' . var_export(  $matrice , true ) . '</pre>' ; exit(0);*/
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
    function construire_le_js_des_requetes(&$donnees_retournees){
        $tt385=/*sql_inclure_deb*/
            /* sql_385()
            SELECT 
            `T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`che_est_souche_requete` , 
            `T0`.`cht_rev_requete`
             FROM b1.tbl_requetes T0
            WHERE `T0`.`chi_id_requete` < :nb_max 
            ORDER BY `T0`.`chi_id_requete` ASC
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_385()*/ 385,
            array(/**/
                'nb_max' => 99999
            ),
            $donnees_retournees
        );
        
        if($tt385[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='Erreur de sélection de la requête [' . __LINE__ . ']';
            return;

        }

        $__liste_des_sql=[];
        foreach($tt385[__xva] as $k1 => $v1){
            $__liste_des_sql[$v1['T0.chi_id_requete']]=array(
                /**/
                'cht_sql_requete' => $v1['T0.cht_sql_requete'],
                'cht_commentaire_requete' => $v1['T0.cht_commentaire_requete'],
                'chp_type_requete' => $v1['T0.chp_type_requete'],
                'che_est_souche_requete' => $v1['T0.che_est_souche_requete'],
                'cht_rev_requete' => $v1['T0.cht_rev_requete']
            );
        }
        $chemin_fichier___liste_des_sql=$_SESSION[_CA_]['chemin_des_sql'] . '__liste_des_sql.php';
        
        if((@file_put_contents($chemin_fichier___liste_des_sql,'<?' . 'php' . PHP_EOL . '$__liste_des_sql=' . var_export($__liste_des_sql,true) . ';')) === false
        ){

            $donnees_retournees[__xsi][__xal][]=' erreur lors de l\'écriture de __liste_des_sql [' . __LINE__ . ']';

        }

        $donnees_retournees[__xva]['__liste_des_sql']=$__liste_des_sql;
    }
    /*
      =============================================================================================================
    */
    function ecrire_php_sur_disque($chemin_fichier,$contenu,&$donnees_retournees){
        
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

            $this->construire_le_js_des_requetes($donnees_retournees);
            return true;

        }else{

            return false;
        }

    }
    /*
      =============================================================================================================
      afr, c'est un doublon avec la fonction qui est dans c_requetes.ecrire_php_sur_disque
      =============================================================================================================
    */
    function ecrire_le_php_de_la_requete_sur_disque($id_requete,$source_php_requete,&$donnees_retournees){
        
        if($id_requete === 0){

            return array( __xst => __xsu);

        }

        $chemin_fichier=$_SESSION[_CA_]['chemin_des_sql'] . 'sql_' . $id_requete . '.php';
        
        if($this->ecrire_php_sur_disque($chemin_fichier,$source_php_requete,$donnees_retournees)){

            return array( __xst => __xsu);

        }else{

            $donnees_retournees[__xsi][__xer][]='erreur ouverture fichier sql_' . $id_requete . '.php [' . __LINE__ . ']';
        }

        return array( __xst => __xer);
    }
    /*
      =============================================================================================================
    */
    function modifier_la_requete_en_base(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*&$data]{*/
        
        if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            $matrice='';
            $php='';

        }else{

            $matrice=json_encode($donnees_recues[__xva]['cht_matrice_requete']);
            $php=$donnees_recues[__xva]['php'];
        }

        $a_modifier=array(
            'c_chi_id_requete' => $donnees_recues[__xva]['chi_id_requete'],
            'n_chp_type_requete' => $donnees_recues[__xva]['type'],
            'n_cht_rev_requete' => $donnees_recues[__xva]['rev'],
            'n_cht_sql_requete' => $donnees_recues[__xva]['sql'],
            'n_cht_php_requete' => $php,
            'n_cht_matrice_requete' => $matrice,
            'n_cht_commentaire_requete' => $donnees_recues[__xva]['cht_commentaire_requete'],
            'n_che_est_souche_requete' => $donnees_recues[__xva]['che_est_souche_requete']
        );
        $tt=/*sql_inclure_deb*/
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
            $a_modifier,
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $obj=$this->ecrire_le_php_de_la_requete_sur_disque($donnees_recues[__xva]['chi_id_requete'],$donnees_recues[__xva]['php'],$donnees_retournees);
            
            if($obj[__xst] === __xsu){

                $donnees_retournees[__xst]=__xsu;

            }


        }else{

            $donnees_retournees[__xsi][__xer][]='erreur modifier_la_requete_en_base [' . __LINE__ . ']';
        }

        
        if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1){


        }else{

            $this->sauvegarder_une_matrice_de_requete($mat,$d,$donnees_retournees,$donnees_recues);
        }

    }
    /*
      =============================================================================================================
    */
    function charger_la_requete(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' $d='.$d.' = <pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
        $l01=count($mat);
        $chi_id_requete=0;
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_requete' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_requete=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' $chi_id_requete = <pre>' . var_export( $chi_id_requete , true ) . '</pre>' ; exit(0);*/
        $requete=array();
        
        if($chi_id_requete > 0){

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
            
            if($tt354[__xst] === __xsu && count($tt354[__xva]) === 1){

                $requete=$tt354[__xva][0];

            }


        }

        $donnees_retournees[__xva]['requete']=$requete;
        /*
          on récupère les rev de toutes les bases du projet actif
        */
        $criteres171=array();
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
            $criteres171,
            $donnees_retournees
        );
        $donnees_retournees[__xva]['les_bases_du_projet']=array();
        
        if($tt171[__xst] === __xsu && count($tt171[__xva]) > 0){

            $donnees_retournees[__xva]['les_bases_du_projet']=$tt171[__xva];
            $donnees_retournees[__xst]=__xsu;

        }

        return;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( implode(',' , $tableau_des_bases) , true ) . '</pre>' ; exit(0);*/
    }
}