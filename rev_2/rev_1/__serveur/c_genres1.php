<?php
class c_genres1{
    private $sql0=null;
    private $moi='c_genres1';
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
    function integrer_ce_genre_dans_un_autre_projet(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $l01=count($mat);
        $chi_id_genre=0;
        $chi_id_projet=0;
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_genre'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_genre=(int)($mat[$i + 1][1]);

            }else if($mat[$i][1] === 'chi_id_projet'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_projet=(int)($mat[$i + 1][1]);
            }

        }
        
        if($chi_id_projet > 0 && $chi_id_genre > 0){

            $tt330=/*sql_inclure_deb*/
                /* sql_330()
                SELECT 
                `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
                `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
                `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
                `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
                `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
                 FROM b1.tbl_genres T0
                WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_330()*/ 330,
                array(/**/
                    'T0_chi_id_genre' => $chi_id_genre
                ),
                $donnees_retournees
            );
            
            if($tt330[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt330[__xva][0] , true ) . '</pre>' ; exit(0);*/
            $chemin_base=__RACINE_PGMS__ . '__bdd_sqlite/bdd_' . $chi_id_projet . '.sqlite';
            
            if(!is_file($chemin_base)){

                $donnees_retournees[__xsi][__xer][]='le fichier la base de donnée du projet n\'a pas été trouvé [' . __LINE__ . ']';
                return;

            }

            /*
              on crée un clone de la base système du projet 1 qui contiendra tout le projet nnn
              ce clone est sans les SANS le PRAGMA foreign_keys=ON; car on doit pouvoir
              insérer 
              le dossier racine qui pointe sur lui même
              le projet 
            */
            try{
                $db1temp=new SQLite3($chemin_base);
            }catch(Exception $e){
                $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                return;
            }
            $donnees_sql=array(
                /**/
                'chi_id_genre' => $chi_id_genre,
                'chp_nom_genre' => $tt330[__xva][0]['T0.chp_nom_genre'],
                'che_ordre_genre' => $tt330[__xva][0]['T0.che_ordre_genre'],
                'chp_prefixe_genre' => $tt330[__xva][0]['T0.chp_prefixe_genre'],
                'chp_espece_genre' => $tt330[__xva][0]['T0.chp_espece_genre'],
                'che_longueur_genre' => $tt330[__xva][0]['T0.che_longueur_genre'],
                'che_est_primaire_genre' => $tt330[__xva][0]['T0.che_est_primaire_genre'],
                'che_est_incrément_genre' => $tt330[__xva][0]['T0.che_est_incrément_genre'],
                'che_est_obligatoire_genre' => $tt330[__xva][0]['T0.che_est_obligatoire_genre'],
                'che_a_init_genre' => $tt330[__xva][0]['T0.che_a_init_genre'],
                'che_init_est_mot_genre' => $tt330[__xva][0]['T0.che_init_est_mot_genre'],
                'cht_valeur_init_genre' => $tt330[__xva][0]['T0.cht_valeur_init_genre'],
                'che_est_parmis_genre' => $tt330[__xva][0]['T0.che_est_parmis_genre'],
                'cht_parmis_genre' => $tt330[__xva][0]['T0.cht_parmis_genre'],
                'cht_fonctions_genre' => $tt330[__xva][0]['T0.cht_fonctions_genre'],
                'che_est_nur_genre' => $tt330[__xva][0]['T0.che_est_nur_genre'],
                'che_est_tsm_genre' => $tt330[__xva][0]['T0.che_est_tsm_genre'],
                'che_est_tsc_genre' => $tt330[__xva][0]['T0.che_est_tsc_genre'],
                'che_est_session_genre' => $tt330[__xva][0]['T0.che_est_session_genre'],
                'chp_nom_en_session_genre' => $tt330[__xva][0]['T0.chp_nom_en_session_genre'],
                'che_est_positif_genre' => $tt330[__xva][0]['T0.che_est_positif_genre'],
                'cht_particularités_genre' => $tt330[__xva][0]['T0.cht_particularités_genre'],
                'chd__dtc_genre' => $GLOBALS[__date_ms],
                'chd__dtm_genre' => $GLOBALS[__date_ms]
            );
            $tt345=/*sql_inclure_deb*/
                /* sql_345()
                INSERT INTO `tbl_genres`(
                    `chi_id_genre` , 
                    `chp_nom_genre` , 
                    `che_ordre_genre` , 
                    `chp_prefixe_genre` , 
                    `chp_espece_genre` , 
                    `che_longueur_genre` , 
                    `che_est_primaire_genre` , 
                    `che_est_incrément_genre` , 
                    `che_est_obligatoire_genre` , 
                    `che_a_init_genre` , 
                    `che_init_est_mot_genre` , 
                    `cht_valeur_init_genre` , 
                    `che_est_parmis_genre` , 
                    `cht_parmis_genre` , 
                    `cht_fonctions_genre` , 
                    `che_est_nur_genre` , 
                    `che_est_tsm_genre` , 
                    `che_est_tsc_genre` , 
                    `chd__dtc_genre` , 
                    `chd__dtm_genre` , 
                    `che_est_session_genre` , 
                    `chp_nom_en_session_genre` , 
                    `che_est_positif_genre` , 
                    `cht_particularités_genre`
                ) VALUES (
                    :chi_id_genre , 
                    :chp_nom_genre , 
                    :che_ordre_genre , 
                    :chp_prefixe_genre , 
                    :chp_espece_genre , 
                    :che_longueur_genre , 
                    :che_est_primaire_genre , 
                    :che_est_incrément_genre , 
                    :che_est_obligatoire_genre , 
                    :che_a_init_genre , 
                    :che_init_est_mot_genre , 
                    :cht_valeur_init_genre , 
                    :che_est_parmis_genre , 
                    :cht_parmis_genre , 
                    :cht_fonctions_genre , 
                    :che_est_nur_genre , 
                    :che_est_tsm_genre , 
                    :che_est_tsc_genre , 
                    :chd__dtc_genre , 
                    :chd__dtm_genre , 
                    :che_est_session_genre , 
                    :chp_nom_en_session_genre , 
                    :che_est_positif_genre , 
                    :cht_particularités_genre
                );
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(345,$donnees_sql,$donnees_retournees,$db1temp);
            
            if($tt345[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='Insert KO [' . __LINE__ . ']';
                return;

            }

            $db1temp->close();
            $donnees_retournees[__xst]=__xsu;

        }

    }
    /*
      =============================================================================================================
    */
    function page_integrer_ce_genre_dans_un_autre_projet(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $tt316=/*sql_inclure_deb*/
            /* sql_316()
            / ***meta(sur_base_principale(1))*** /
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
             FROM b1.tbl_projets T0
            WHERE `T0`.`chi_id_projet` > 2
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(316,array(),$donnees_retournees);
        
        if($tt316[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $donnees_retournees[__xva]=$tt316[__xva];
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function enregister_l_ordre_des_genres(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0); */
        foreach($donnees_recues[__xva]['tableau_des_ordre'] as $k1 => $v1){
            $tt335=/*sql_inclure_deb*/
                /* sql_335()
                UPDATE b1.tbl_genres SET 
                   `che_ordre_genre` = :n_che_ordre_genre
                WHERE `chi_id_genre` = :c_chi_id_genre ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_335()*/ 335,
                array(/**/
                    'c_chi_id_genre' => $v1[0],
                    'n_che_ordre_genre' => $v1[1]
                ),
                $donnees_retournees
            );
            
            if($tt335[__xst] !== __xsu){

                $donnees_retournees[__xst]=__xer;
                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }

        }
        $this->mettre_a_jour_le_js_des_genres($mat,$d,$donnees_retournees,$donnees_recues);
        /* $donnees_retournees[__xsi][__xsu][]='enregistrement réussi [' . __LINE__ . ']';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function trier_les_genres(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $tt333=/*sql_inclure_deb*/
            /* sql_333()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
            `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
            `T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
            `T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , 
            `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_333()*/ 333,
            array(),
            $donnees_retournees
        );
        
        if($tt333[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $donnees_retournees[__xva]=$tt333[__xva];
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function mettre_a_jour_le_js_des_genres(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          on récupère tous les genres
        */
        $tt333=/*sql_inclure_deb*/
            /* sql_333()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
            `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
            `T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
            `T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , 
            `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_333()*/ 333,
            array(),
            $donnees_retournees
        );
        
        if($tt333[__xst] !== __xsu){

            $donnees_retournees[__xac][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt333[__xva] , true ) . '</pre>' ; exit(0);*/
        $__liste_des_genres=array();
        foreach($tt333[__xva] as $k1 => $v1){
            $__liste_des_genres[$v1['T0.chi_id_genre']]=array(
                'chi_id_genre' => $v1['T0.chi_id_genre'],
                'chp_nom_genre' => $v1['T0.chp_nom_genre'],
                'chp_espece_genre' => $v1['T0.chp_espece_genre'],
                'che_longueur_genre' => $v1['T0.che_longueur_genre'],
                'che_est_primaire_genre' => $v1['T0.che_est_primaire_genre'],
                'che_est_incrément_genre' => $v1['T0.che_est_incrément_genre'],
                'che_est_obligatoire_genre' => $v1['T0.che_est_obligatoire_genre'],
                'che_a_init_genre' => $v1['T0.che_a_init_genre'],
                'che_init_est_mot_genre' => $v1['T0.che_init_est_mot_genre'],
                'cht_valeur_init_genre' => $v1['T0.cht_valeur_init_genre'],
                'chp_prefixe_genre' => $v1['T0.chp_prefixe_genre'],
                'che_est_parmis_genre' => $v1['T0.che_est_parmis_genre'],
                'cht_parmis_genre' => $v1['T0.cht_parmis_genre'],
                'che_ordre_genre' => $v1['T0.che_ordre_genre'],
                'che_est_tsc_genre' => $v1['T0.che_est_tsc_genre'],
                'che_est_tsm_genre' => $v1['T0.che_est_tsm_genre'],
                'cht_fonctions_genre' => $v1['T0.cht_fonctions_genre'],
                'che_est_nur_genre' => $v1['T0.che_est_nur_genre'],
                'che_est_session_genre' => $v1['T0.che_est_session_genre'],
                'chp_nom_en_session_genre' => $v1['T0.chp_nom_en_session_genre'],
                'che_est_positif_genre' => $v1['T0.che_est_positif_genre'],
                'cht_particularités_genre' => $v1['T0.cht_particularités_genre']
            );
        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $__liste_des_genres , true ) . '</pre>' ; exit(0);*/
        
        if(count($__liste_des_genres) > 0){

            $chemin_fichier__liste_des_genres=$_SESSION[_CA_]['chemin_des_sql'] . '__liste_des_genres.php';
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_fichier__liste_des_genres , true ) . '</pre>' ; exit(0);*/
            $contenu_fichier__liste_des_genres='<?' . 'php' . PHP_EOL . '$__liste_des_genres=' . var_export($__liste_des_genres,true) . ';';
            
            if((@file_put_contents($chemin_fichier__liste_des_genres,$contenu_fichier__liste_des_genres)) === false){

                $donnees_retournees[__xac][__xal][]=' erreur lors de l\'écriture de __liste_des_genres [' . __LINE__ . ']';

            }


        }

        $donnees_retournees[__xva]['__liste_des_genres']=$__liste_des_genres;
        $donnees_retournees[__xac] .= 'm1(n1(_fonctions1),f1(maj_liste_des_genres()))';
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( json_encode($__liste_des_genres,JSON_FORCE_OBJECT) , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $__liste_des_genres , true ) . '</pre>' ; exit(0);*/
    }
    /*
      =============================================================================================================
    */
    function vv_genres_nouveau_numero1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = $d='.$d.' <pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = $d='.$d.' <pre>' . var_export( $donnees_recues[__xva] , true ) . '</pre>' ; exit(0);*/
        $form=$donnees_recues[__xva]['__fo1'][$donnees_recues[__xva]['__co1']];
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        /*
          array (
          'vv_ancien_numero_de_genre' => '110',
          'vv_nouveau_numero_de_genre' => '110',
          )
        */
        $chi_id_genre_ancienne=0;
        $chi_id_genre_nouvelle=0;
        
        if(isset($form['vv_nouveau_numero_de_genre']) && is_numeric($form['vv_nouveau_numero_de_genre'])){

            $chi_id_genre_nouvelle=(int)($form['vv_nouveau_numero_de_genre']);

        }else{

            $donnees_retournees[__xsi][__xer][]='le nouveau numéro doit être numérique [' . __LINE__ . ']';
            return;
        }

        
        if(isset($form['vv_ancien_numero_de_genre']) && is_numeric($form['vv_ancien_numero_de_genre'])){

            $chi_id_genre_ancienne=(int)($form['vv_ancien_numero_de_genre']);

        }else{

            $donnees_retournees[__xsi][__xer][]='l\'ancien numéro doit être numérique [' . __LINE__ . ']';
            return;
        }

        
        if($chi_id_genre_ancienne === $chi_id_genre_nouvelle){

            $donnees_retournees[__xsi][__xer][]='le nouveau numéro doit être différent de l\'ancien [' . __LINE__ . ']';
            return;

        }

        $tt330=/*sql_inclure_deb*/
            /* sql_330()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_330()*/ 330,
            array(/**/
                'T0_chi_id_genre' => $chi_id_genre_ancienne
            ),
            $donnees_retournees
        );
        
        if($tt330[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt330 , true ) . '</pre>' ; exit(0);*/
        /*
          il faut vérifier que ce genre n'est pas utilisé dans les bases
        */
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
        
        if($tt171[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        foreach($tt171[__xva] as $k1 => $v1){
            $obj_matrice=$GLOBALS['__rev_vers_matrice1']->rev_vers_matrice($v1['T0.chp_rev_travail_basedd']);
            
            if($obj_matrice[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }

            $mat=$obj_matrice[__xva];
            $l01=count($mat);
            for( $i=1 ; $i < $l01 ; $i++ ){
                
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat[$i][8] , true ) . '</pre>' ; exit(0);*/
                
                if($mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i][1] === 'genre'){

                    
                    if(((int)($mat[$i + 1][1])) === $chi_id_genre_ancienne){

                        $donnees_retournees[__xsi][__xer][]=' le numéro actuel est encore utilisé dans la base "' . $v1['T0.chi_id_basedd'] . '" [' . __LINE__ . ']';
                        $donnees_retournees[__xst]=__xer;
                        return;

                    }


                }

            }
        }
        /* echo __FILE__ . ' ' . __LINE__ . ' $chi_id_genre_nouvelle = <pre>' . var_export( $chi_id_genre_nouvelle , true ) . '</pre>' ; exit(0);*/
        
        if($chi_id_genre_nouvelle < 100 && substr(_CA_,-7) === '_rev_1_'){

            
            if(!($_SESSION[_CA_]['chi_id_projet'] === 1 && $_SESSION[_CA_]['chi_id_utilisateur'] === 1)){

                $donnees_retournees[__xsi][__xer][]=' seul l\'utilisateur principale peut renuméroter un genre à moins de 100 [' . __LINE__ . ']';
                return;

            }


        }

        $tt334=/*sql_inclure_deb*/
            /* sql_334()
            UPDATE b1.tbl_genres SET 
               `chi_id_genre` = :n_chi_id_genre
            WHERE `chi_id_genre` = :c_chi_id_genre ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_334()*/ 334,
            array( 'n_chi_id_genre' => $chi_id_genre_nouvelle, 'c_chi_id_genre' => $chi_id_genre_ancienne),
            $donnees_retournees
        );
        
        if($tt334[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if($chi_id_genre_nouvelle < 100 && _CA_ === 'rev_1' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            $donnees_retournees[__xsi][__xdv][]=__METHOD__ . ' afr il faut aller créer ce genre dans les autres projets  [' . __LINE__ . ']';
            /*#
              afr il faut aller créer ce genre dans les autres projets 
              $liste_des_autres_projets=array();
              
              // on recherche tous les projets>2 
              $tt316=$this->sql0->sql_iii(316,array(),$donnees_retournees);
              
              if($tt316[__xst] === __xsu){
            
                  foreach($tt316[__xva] as $k1 => $v1){
                      $liste_des_autres_projets[]=$v1['T0.chi_id_projet'];
                  }
            
              }
              foreach($liste_des_autres_projets as $k1 => $v1){
                  // afr on traite les bases des autres projets 
              }
            */

        }

        $this->mettre_a_jour_le_js_des_genres($mat,$d,$donnees_retournees,$donnees_recues);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        $this->mettre_a_jour_le_js_des_genres($mat,$d,$donnees_retournees,$donnees_recues);
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
          il faut vérifier que ce genre n'est pas utilisé dans les bases
        */
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
        
        if($tt171[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return array( __xst => __xer);

        }

        foreach($tt171[__xva] as $k1 => $v1){
            $obj_matrice=$GLOBALS['__rev_vers_matrice1']->rev_vers_matrice($v1['T0.chp_rev_travail_basedd']);
            
            if($obj_matrice[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return array( __xst => __xer);

            }

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $obj_matrice , true ) . '</pre>' ; exit(0);*/
            $mat=$obj_matrice[__xva];
            $l01=count($mat);
            for( $i=1 ; $i < $l01 ; $i++ ){
                
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat[$i][8] , true ) . '</pre>' ; exit(0);*/
                
                if($mat[$i][1] === 'genre' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                    
                    if(((int)($mat[$i + 1][1])) === ((int)($__xva['T0.chi_id_genre']))){

                        $donnees_retournees[__xsi][__xer][]=' ce genre est encore utilisé dans la base "' . $v1['T0.chi_id_basedd'] . '" [' . __LINE__ . ']';
                        $donnees_retournees[__xst]=__xer;
                        return array( __xst => __xer);

                    }


                }

            }
        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_supprimer" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        $this->mettre_a_jour_le_js_des_genres($mat,$d,$donnees_retournees,$donnees_recues);
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "tests_avant_creer" [' . __LINE__ . ']';
        /* return array(__xst => __xer);*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function action_apres_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nouvel_id){
        /*
          =====================================================================================================
        */
        /* afr avec $nouvel_id */
        /*
          =====================================================================================================
        */
        $this->mettre_a_jour_le_js_des_genres($mat,$d,$donnees_retournees,$donnees_recues);
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        
        if(is_null($form['chp_nom_genre']) || $form['chp_nom_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_ordre_genre']) || $form['che_ordre_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "ordre" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_prefixe_genre']) || $form['chp_prefixe_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "préfixe" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->doit_contenir_n_caracteres(3,$form['chp_prefixe_genre'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "préfixe" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($form['chp_espece_genre']) || $form['chp_espece_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "espèce" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_primaire_genre']) || $form['che_est_primaire_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est primaire" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_incrément_genre']) || $form['che_est_incrément_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est incrément" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_obligatoire_genre']) || $form['che_est_obligatoire_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est obligatoire" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_a_init_genre']) || $form['che_a_init_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "a init" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_init_est_mot_genre']) || $form['che_init_est_mot_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "init est mot" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_parmis_genre']) || $form['che_est_parmis_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est parmis" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->test_fonctions_de_c_fonctions1($form['cht_fonctions_genre'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "fonctions" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($form['che_est_nur_genre']) || $form['che_est_nur_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est nur" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_tsm_genre']) || $form['che_est_tsm_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est tsm" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_tsc_genre']) || $form['che_est_tsc_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est tsc" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_session_genre']) || $form['che_est_session_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est utilisateur" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_positif_genre']) || $form['che_est_positif_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est positif" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt330=/*sql_inclure_deb*/
            /* sql_330()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_330()*/ 330,
            array(/**/
                'T0_chi_id_genre' => $form['chi_id_genre']
            ),
            $donnees_retournees
        );
        
        if($tt330[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt330[__xst] === __xsu && count($tt330[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt330[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt331=/*sql_inclure_deb*/
                /* sql_331()
                UPDATE b1.tbl_genres SET 
                   `chp_nom_genre` = :n_chp_nom_genre , 
                   `che_ordre_genre` = :n_che_ordre_genre , 
                   `chp_prefixe_genre` = :n_chp_prefixe_genre , 
                   `chp_espece_genre` = :n_chp_espece_genre , 
                   `che_longueur_genre` = :n_che_longueur_genre , 
                   `che_est_primaire_genre` = :n_che_est_primaire_genre , 
                   `che_est_incrément_genre` = :n_che_est_incrément_genre , 
                   `che_est_obligatoire_genre` = :n_che_est_obligatoire_genre , 
                   `che_a_init_genre` = :n_che_a_init_genre , 
                   `che_init_est_mot_genre` = :n_che_init_est_mot_genre , 
                   `cht_valeur_init_genre` = :n_cht_valeur_init_genre , 
                   `che_est_parmis_genre` = :n_che_est_parmis_genre , 
                   `cht_parmis_genre` = :n_cht_parmis_genre , 
                   `cht_fonctions_genre` = :n_cht_fonctions_genre , 
                   `che_est_nur_genre` = :n_che_est_nur_genre , 
                   `che_est_tsm_genre` = :n_che_est_tsm_genre , 
                   `che_est_tsc_genre` = :n_che_est_tsc_genre , 
                   `chd__dtm_genre` = :n_chd__dtm_genre , 
                   `che__nur_genre` = :n_che__nur_genre , 
                   `che_est_session_genre` = :n_che_est_session_genre , 
                   `chp_nom_en_session_genre` = :n_chp_nom_en_session_genre , 
                   `che_est_positif_genre` = :n_che_est_positif_genre , 
                   `cht_particularités_genre` = :n_cht_particularités_genre
                WHERE `chi_id_genre` = :c_chi_id_genre ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_331()*/ 331,
                array(
                    /**/
                    'c_chi_id_genre' => $tt330[__xva][0]['T0.chi_id_genre'],
                    'n_chp_nom_genre' => $form['chp_nom_genre'],
                    'n_che_ordre_genre' => $form['che_ordre_genre'],
                    'n_chp_prefixe_genre' => $form['chp_prefixe_genre'],
                    'n_chp_espece_genre' => $form['chp_espece_genre'],
                    'n_che_longueur_genre' => $form['che_longueur_genre'],
                    'n_che_est_primaire_genre' => $form['che_est_primaire_genre'],
                    'n_che_est_incrément_genre' => $form['che_est_incrément_genre'],
                    'n_che_est_obligatoire_genre' => $form['che_est_obligatoire_genre'],
                    'n_che_a_init_genre' => $form['che_a_init_genre'],
                    'n_che_init_est_mot_genre' => $form['che_init_est_mot_genre'],
                    'n_cht_valeur_init_genre' => $form['cht_valeur_init_genre'],
                    'n_che_est_parmis_genre' => $form['che_est_parmis_genre'],
                    'n_cht_parmis_genre' => $form['cht_parmis_genre'],
                    'n_cht_fonctions_genre' => $form['cht_fonctions_genre'],
                    'n_che_est_nur_genre' => $form['che_est_nur_genre'],
                    'n_che_est_tsm_genre' => $form['che_est_tsm_genre'],
                    'n_che_est_tsc_genre' => $form['che_est_tsc_genre'],
                    'n_che_est_session_genre' => $form['che_est_session_genre'],
                    'n_chp_nom_en_session_genre' => $form['chp_nom_en_session_genre'],
                    'n_che_est_positif_genre' => $form['che_est_positif_genre'],
                    'n_cht_particularités_genre' => $form['cht_particularités_genre']
                ),
                $donnees_retournees
            );
            
            if($tt331[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt330[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt330=/*sql_inclure_deb*/
                /* sql_330()
                SELECT 
                `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
                `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
                `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
                `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
                `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
                 FROM b1.tbl_genres T0
                WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_330()*/ 330,
                array(/**/
                    'T0_chi_id_genre' => $form['chi_id_genre']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt330;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt330;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_genre=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_genre)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_genre'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_genre=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_genre , true ) . '</pre>' ; exit(0);*/
        $tt330=/*sql_inclure_deb*/
            /* sql_330()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_330()*/ 330,
            array(/**/
                'T0_chi_id_genre' => $chi_id_genre
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt330 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt330;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_genre('.$chi_id_genre.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_genre=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_genre)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_genre'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_genre=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_genre(' . $chi_id_genre . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_genre , true ) . '</pre>' ; exit(0);*/
        $tt330=/*sql_inclure_deb*/
            /* sql_330()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_330()*/ 330,
            array(/**/
                'T0_chi_id_genre' => $chi_id_genre
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt330 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt330;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /*fonctions_spéciales1(ne_pas_supprimer_id_un(1))*/
        
        if($form['chi_id_projet'] === 1){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $tt330=/*sql_inclure_deb*/
            /* sql_330()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_330()*/ 330,
            array(/**/
                'T0_chi_id_genre' => $form['chi_id_genre']
            ),
            $donnees_retournees
        );
        
        if($tt330[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt330[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt332=/*sql_inclure_deb*/
            /* sql_332()
            DELETE FROM b1.tbl_genres
            WHERE `chi_id_genre` = :chi_id_genre ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_332()*/ 332,
            array(/**/
                'chi_id_genre' => $tt330[__xva][0]['T0.chi_id_genre']
            ),
            $donnees_retournees
        );
        
        if($tt332[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt330[__xva][0]);
        
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
        $chi_id_genre=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_genre'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_genre=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_genre , true ) . '</pre>' ; exit(0);*/
        $tt330=/*sql_inclure_deb*/
            /* sql_330()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_330()*/ 330,
            array(/**/
                'T0_chi_id_genre' => $chi_id_genre
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt330 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt330;
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
        
        if(is_null($form['chp_nom_genre']) || $form['chp_nom_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_ordre_genre']) || $form['che_ordre_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "ordre" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_prefixe_genre']) || $form['chp_prefixe_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "préfixe" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->doit_contenir_n_caracteres(3,$form['chp_prefixe_genre'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "préfixe" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($form['chp_espece_genre']) || $form['chp_espece_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "espèce" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_primaire_genre']) || $form['che_est_primaire_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est primaire" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_incrément_genre']) || $form['che_est_incrément_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est incrément" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_obligatoire_genre']) || $form['che_est_obligatoire_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est obligatoire" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_a_init_genre']) || $form['che_a_init_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "a init" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_init_est_mot_genre']) || $form['che_init_est_mot_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "init est mot" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_parmis_genre']) || $form['che_est_parmis_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est parmis" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->test_fonctions_de_c_fonctions1($form['cht_fonctions_genre'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "fonctions" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($form['che_est_nur_genre']) || $form['che_est_nur_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est nur" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_tsm_genre']) || $form['che_est_tsm_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est tsm" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_tsc_genre']) || $form['che_est_tsc_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est tsc" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_session_genre']) || $form['che_est_session_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est utilisateur" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_est_positif_genre']) || $form['che_est_positif_genre'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "est positif" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(
                    /**/
                    'chp_nom_genre' => $form['chp_nom_genre'],
                    'che_ordre_genre' => $form['che_ordre_genre'],
                    'chp_prefixe_genre' => $form['chp_prefixe_genre'],
                    'chp_espece_genre' => $form['chp_espece_genre'],
                    'che_longueur_genre' => $form['che_longueur_genre'],
                    'che_est_primaire_genre' => $form['che_est_primaire_genre'],
                    'che_est_incrément_genre' => $form['che_est_incrément_genre'],
                    'che_est_obligatoire_genre' => $form['che_est_obligatoire_genre'],
                    'che_a_init_genre' => $form['che_a_init_genre'],
                    'che_init_est_mot_genre' => $form['che_init_est_mot_genre'],
                    'cht_valeur_init_genre' => $form['cht_valeur_init_genre'],
                    'che_est_parmis_genre' => $form['che_est_parmis_genre'],
                    'cht_parmis_genre' => $form['cht_parmis_genre'],
                    'cht_fonctions_genre' => $form['cht_fonctions_genre'],
                    'che_est_nur_genre' => $form['che_est_nur_genre'],
                    'che_est_tsm_genre' => $form['che_est_tsm_genre'],
                    'che_est_tsc_genre' => $form['che_est_tsc_genre'],
                    'che_est_session_genre' => $form['che_est_session_genre'],
                    'chp_nom_en_session_genre' => $form['chp_nom_en_session_genre'],
                    'che_est_positif_genre' => $form['che_est_positif_genre'],
                    'cht_particularités_genre' => $form['cht_particularités_genre']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt329=/*sql_inclure_deb*/
            /* sql_329()
            INSERT INTO b1.`tbl_genres`(
                `chp_nom_genre` , 
                `che_ordre_genre` , 
                `chp_prefixe_genre` , 
                `chp_espece_genre` , 
                `che_longueur_genre` , 
                `che_est_primaire_genre` , 
                `che_est_incrément_genre` , 
                `che_est_obligatoire_genre` , 
                `che_a_init_genre` , 
                `che_init_est_mot_genre` , 
                `cht_valeur_init_genre` , 
                `che_est_parmis_genre` , 
                `cht_parmis_genre` , 
                `cht_fonctions_genre` , 
                `che_est_nur_genre` , 
                `che_est_tsm_genre` , 
                `che_est_tsc_genre` , 
                `chd__dtc_genre` , 
                `chd__dtm_genre` , 
                `che_est_session_genre` , 
                `chp_nom_en_session_genre` , 
                `che_est_positif_genre` , 
                `cht_particularités_genre`
            ) VALUES (
                :chp_nom_genre , 
                :che_ordre_genre , 
                :chp_prefixe_genre , 
                :chp_espece_genre , 
                :che_longueur_genre , 
                :che_est_primaire_genre , 
                :che_est_incrément_genre , 
                :che_est_obligatoire_genre , 
                :che_a_init_genre , 
                :che_init_est_mot_genre , 
                :cht_valeur_init_genre , 
                :che_est_parmis_genre , 
                :cht_parmis_genre , 
                :cht_fonctions_genre , 
                :che_est_nur_genre , 
                :che_est_tsm_genre , 
                :che_est_tsc_genre , 
                :chd__dtc_genre , 
                :chd__dtm_genre , 
                :che_est_session_genre , 
                :chp_nom_en_session_genre , 
                :che_est_positif_genre , 
                :cht_particularités_genre
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_329()*/ 329,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt329[__xst] === __xsu && $tt329['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt329['nouvel_id']);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt329['nouvel_id']);
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
        $criteres328=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres328[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres328 , true ) . '</pre>' ; exit(0);*/
        $tt328=/*sql_inclure_deb*/
            /* sql_328()
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
            ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_328()*/ 328,
            $criteres328,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt328[__xst]===__xsu && count($tt328[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt328[__xst] === __xsu && count($tt328[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres328['debut']=$__debut;
            $tt328=/*sql_inclure_deb*/
                /* sql_328()
                SELECT 
                `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
                `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
                `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
                `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
                `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre`
                 FROM b1.tbl_genres T0
                WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
                ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_328()*/ 328,
                $criteres328,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt328 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt328 = <pre>' . var_export( $tt328 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt328;
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