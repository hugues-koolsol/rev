<?php
class c_autorisations1{
    private $sql0=null;
    private $moi='c_autorisations1';
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
    function gererer_les_autorisation_serveur(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $tt151=/*sql_inclure_deb*/
            /* sql_151()
            SELECT 
            `T0`.`chp_nom_source`
             FROM b1.tbl_sources T0
            WHERE `T0`.`che_autorisation_globale_source` = 1
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_151()*/ 151,
            array(),
            $donnees_retournees
        );
        
        if($tt151[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $autorisations_globales=array();
        foreach($tt151[__xva] as $k1 => $v1){
            $autorisations_globales[$v1['T0.chp_nom_source']]=0;
        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $autorisations_globales , true ) . '</pre>' ; exit(0);*/
        $tt152=/*sql_inclure_deb*/
            /* sql_152()
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation
            
            WHERE (`T1`.`chp_nom_source` LIKE :T1_chp_nom_source
               AND `T0`.`chx_acces_autorisation` > 1) 
            ORDER BY `T0`.`chx_acces_autorisation` ASC
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_152()*/ 152,
            array(/**/
                'T1_chp_nom_source' => '%.php'
            ),
            $donnees_retournees
        );
        
        if($tt152[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $chx_acces_autorisation=0;
        $tableau_des_auto=array();
        foreach($tt152[__xva] as $k1 => $v1){
            
            if($chx_acces_autorisation !== $v1['T0.chx_acces_autorisation']){

                
                if($chx_acces_autorisation === 0){

                    $tableau_des_auto[$v1['T1.chp_nom_source']]=$v1['T0.chi_id_autorisation'];

                }else{

                    $tableau_des_auto=array_merge($tableau_des_auto,$autorisations_globales);
                    $nom_du_fichier=$GLOBALS['chemin_de_la_racine'] . '___autorisations1_pour_acces_' . $chx_acces_autorisation . '_.php';
                    
                    if(!file_put_contents($nom_du_fichier,'<?php' . PHP_EOL . '$__autorisations=' . var_export($tableau_des_auto,true) . ';')){

                        $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
                        return;

                    }

                    $tableau_des_auto=array();
                    $tableau_des_auto[$v1['T1.chp_nom_source']]=$v1['T0.chi_id_autorisation'];
                }

                $chx_acces_autorisation=$v1['T0.chx_acces_autorisation'];

            }else{

                $tableau_des_auto[$v1['T1.chp_nom_source']]=$v1['T0.chi_id_autorisation'];
            }

        }
        
        if($chx_acces_autorisation > 1){

            $tableau_des_auto=array_merge($tableau_des_auto,$autorisations_globales);
            $nom_du_fichier=$GLOBALS['chemin_de_la_racine'] . '___autorisations1_pour_acces_' . $chx_acces_autorisation . '_.php';
            
            if(!file_put_contents($nom_du_fichier,'<?php' . PHP_EOL . '$__autorisations=' . var_export($tableau_des_auto,true) . ';')){

                $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }


        }

        /*
          le fichier contenant la liste des modules qui ne requièrent pas d'autorisation:
          __interface1.php, _connexion1.php
        */
        $nom_du_fichier=$GLOBALS['chemin_de_la_racine'] . '___autorisations1_pour_acces_0_.php';
        
        if(!file_put_contents($nom_du_fichier,'<?php' . PHP_EOL . '$__autorisations=' . var_export($autorisations_globales,true) . ';')
        ){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' .  var_export( $tt152[__xva] , true )  . '</pre>' ; exit(0);*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer)); */
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_et_tests_avant_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_et_tests_avant_modifier" [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer)); */
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
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "test_avant_supprimer" [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer)); */
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_supprimer" [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer)); */
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "tests_avant_creer" [' . __LINE__ . ']'; */
        /* return array(__xst => __xer); */
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
    }
    /*
      =============================================================================================================
    */
    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /* conversion des données numériques début */
        $form['chi_id_autorisation']=is_null($form['chi_id_autorisation']) ? null : (int)($form['chi_id_autorisation']);
        $form['chx_acces_autorisation']=is_null($form['chx_acces_autorisation']) ? null : (int)($form['chx_acces_autorisation']);
        $form['chx_source_autorisation']=is_null($form['chx_source_autorisation']) ? null : (int)($form['chx_source_autorisation']);
        /* conversion des données numériques fin */
        
        if(is_null($form['chp_nom_autorisation']) || $form['chp_nom_autorisation'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_acces_autorisation']) || $form['chx_acces_autorisation'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "acces" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_source_autorisation']) || $form['chx_source_autorisation'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "source" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt141=/*sql_inclure_deb*/
            /* sql_141()
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
            `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_141()*/ 141,
            array(/**/
                'T0_chi_id_autorisation' => $form['chi_id_autorisation']
            ),
            $donnees_retournees
        );
        
        if($tt141[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt141[__xst] === __xsu && count($tt141[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt141[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt143=/*sql_inclure_deb*/
                /* sql_143()
                UPDATE b1.tbl_autorisations SET 
                   `chx_acces_autorisation` = :n_chx_acces_autorisation , 
                   `chx_source_autorisation` = :n_chx_source_autorisation , 
                   `chp_nom_autorisation` = :n_chp_nom_autorisation
                WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_143()*/ 143,
                array(
                    /**/
                    'c_chi_id_autorisation' => $form['chi_id_autorisation'],
                    'n_chx_acces_autorisation' => $form['chx_acces_autorisation'],
                    'n_chx_source_autorisation' => $form['chx_source_autorisation'],
                    'n_chp_nom_autorisation' => $form['chp_nom_autorisation']
                ),
                $donnees_retournees
            );
            
            if($tt143[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt141[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt141=/*sql_inclure_deb*/
                /* sql_141()
                SELECT 
                `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
                `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
                 FROM b1.tbl_autorisations T0
                 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
                
                 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
                
                WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_141()*/ 141,
                array(/**/
                    'T0_chi_id_autorisation' => $form['chi_id_autorisation']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt141;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt141;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_autorisation=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_autorisation)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_autorisation'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_autorisation=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_autorisation , true ) . '</pre>' ; exit(0);*/
        $tt141=/*sql_inclure_deb*/
            /* sql_141()
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
            `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_141()*/ 141,
            array(/**/
                'T0_chi_id_autorisation' => $chi_id_autorisation
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt141 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt141;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_autorisation('.$chi_id_autorisation.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_autorisation=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_autorisation)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_autorisation'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_autorisation=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_autorisation(' . $chi_id_autorisation . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_autorisation , true ) . '</pre>' ; exit(0);*/
        $tt141=/*sql_inclure_deb*/
            /* sql_141()
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
            `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_141()*/ 141,
            array(/**/
                'T0_chi_id_autorisation' => $chi_id_autorisation
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt141 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt141;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        $tt141=/*sql_inclure_deb*/
            /* sql_141()
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
            `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_141()*/ 141,
            array(/**/
                'T0_chi_id_autorisation' => $form['chi_id_autorisation']
            ),
            $donnees_retournees
        );
        
        if($tt141[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt141[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt144=/*sql_inclure_deb*/
            /* sql_144()
            DELETE FROM b1.tbl_autorisations
            WHERE `chi_id_autorisation` = :chi_id_autorisation ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_144()*/ 144,
            array(/**/
                'chi_id_autorisation' => $tt141[__xva][0]['T0.chi_id_autorisation']
            ),
            $donnees_retournees
        );
        
        if($tt144[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt141[__xva][0]);
        
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
        $chi_id_autorisation=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_autorisation'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_autorisation=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_autorisation , true ) . '</pre>' ; exit(0);*/
        $tt141=/*sql_inclure_deb*/
            /* sql_141()
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
            `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_141()*/ 141,
            array(/**/
                'T0_chi_id_autorisation' => $chi_id_autorisation
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt141 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt141;
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
        /* conversion des données numériques début */
        $form['chx_acces_autorisation']=is_null($form['chx_acces_autorisation'])
           || $form['chx_acces_autorisation'] === '' ? null : (int)($form['chx_acces_autorisation']);
        $form['chx_source_autorisation']=is_null($form['chx_source_autorisation'])
           || $form['chx_source_autorisation'] === '' ? null : (int)($form['chx_source_autorisation']);
        /* conversion des données numériques fin */
        
        if(is_null($form['chx_acces_autorisation']) || $form['chx_acces_autorisation'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "acces" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_source_autorisation']) || $form['chx_source_autorisation'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "source" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_nom_autorisation']) || $form['chp_nom_autorisation'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(/**/
                    'chp_nom_autorisation' => $form['chp_nom_autorisation'],
                    'chx_acces_autorisation' => $form['chx_acces_autorisation'],
                    'chx_source_autorisation' => $form['chx_source_autorisation']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt142=/*sql_inclure_deb*/
            /* sql_142()
            INSERT INTO b1.`tbl_autorisations`(
                `chx_acces_autorisation` , 
                `chx_source_autorisation` , 
                `chp_nom_autorisation`
            ) VALUES (
                :chx_acces_autorisation , 
                :chx_source_autorisation , 
                :chp_nom_autorisation
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_142()*/ 142,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt142[__xst] === __xsu && $tt142['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt142['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt142['nouvel_id']);
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
        $criteres140=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres140[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres140 , true ) . '</pre>' ; exit(0);*/
        $tt140=/*sql_inclure_deb*/
            /* sql_140()
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
            `T2`.`chp_nom_source` , `T2`.`chx_dossier_id_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE ( / *** *** / `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
               AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
               AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
               AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
               AND `T2`.`chp_nom_source` LIKE :T2_chp_nom_source) 
            ORDER BY `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_140()*/ 140,
            $criteres140,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt140[__xst]===__xsu && count($tt140[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt140[__xst] === __xsu && count($tt140[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres140['debut']=$__debut;
            $tt140=/*sql_inclure_deb*/
                /* sql_140()
                SELECT 
                `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
                `T2`.`chp_nom_source` , `T2`.`chx_dossier_id_source`
                 FROM b1.tbl_autorisations T0
                 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
                
                 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
                
                WHERE ( / *** *** / `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
                   AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
                   AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
                   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
                   AND `T2`.`chp_nom_source` LIKE :T2_chp_nom_source) 
                ORDER BY `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_140()*/ 140,
                $criteres140,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt140 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt140 = <pre>' . var_export( $tt140 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt140;
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