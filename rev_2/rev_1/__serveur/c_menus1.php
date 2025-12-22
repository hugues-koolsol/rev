<?php
class c_menus1{
    private $sql0=null;
    private $moi='c_menus1';
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
    function recupere_methodes1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_autorisation=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_autorisation' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_autorisation=(int)($mat[$i + 1][1]);

            }

        }
        
        if($chi_id_autorisation === 0){

            $donnees_retournees[__xsi][__xdv][]=__METHOD__ . ' [' . __LINE__ . ']';
            return array( __xst => __xer);

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
                'T0_chi_id_autorisation' => $chi_id_autorisation
            ),
            $donnees_retournees
        );
        
        if($tt141[__xst] !== __xsu || count($tt141[__xva]) !== 1){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' ' . __LINE__ . ']';
            return;

        }

        
        if($tt141[__xva][0]['T2.che_binaire_source'] === 1){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' ' . __LINE__ . ']';
            return;

        }

        require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
        $chemin=$obj_doss->construire_chemin($tt141[__xva][0]['T2.chx_dossier_id_source']);
        
        if($chemin[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' ' . __LINE__ . ']';
            return;

        }

        $chemin_fichier=$chemin[__xva]['chemin_absolu'] . $tt141[__xva][0]['T2.chp_nom_source'];
        
        if(substr($tt141[__xva][0]['T2.chp_nom_source'],-4) === '.php'){

            /*
              si c'est un source php, on peut aller chercher les méthodes 
            */
            require_once($chemin_fichier);
            $la_classe=substr($tt141[__xva][0]['T2.chp_nom_source'],0,-4);
            $class_methods=get_class_methods($la_classe);
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $class_methods , true ) . '</pre>' ; exit(0);*/
            $donnees_retournees[__xva]['class_methods']=$class_methods;
            $donnees_retournees[__xst]=__xsu;
            return;

        }else if(substr($tt141[__xva][0]['T2.chp_nom_source'],-3) === '.js'){

            /*
              si c'est un source js, on retource le source et on fera le traitement dans c_menus1.js
            */
            
            if(!is_file($chemin_fichier)){

                $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' ' . __LINE__ . ']';
                return;

            }

            $donnees_retournees[__xva]['cht_genere_source']=file_get_contents($chemin_fichier);
            $donnees_retournees[__xva]['chp_nom_source']=$tt141[__xva][0]['T2.chp_nom_source'];
            $donnees_retournees[__xst]=__xsu;
            return;
        }

        echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($tt141,true) . '</pre>' ;
        exit(0);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
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
    }
    /*
      =============================================================================================================
    */
    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        
        if(is_null($form['cht_libelle_menu']) || $form['cht_libelle_menu'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "libelle" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_titre_menu']) || $form['chp_titre_menu'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "titre" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_autorisation_menu']) || $form['chx_autorisation_menu'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "autorisation" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_methode_menu']) || $form['chp_methode_menu'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "methode" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt146=/*sql_inclure_deb*/
            /* sql_146()
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , 
            `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T3`.`che_binaire_source`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_146()*/ 146,
            array(/**/
                'T0_chi_id_menu' => $form['chi_id_menu']
            ),
            $donnees_retournees
        );
        
        if($tt146[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt146[__xst] === __xsu && count($tt146[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt146[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt148=/*sql_inclure_deb*/
                /* sql_148()
                UPDATE b1.tbl_menus SET 
                   `cht_libelle_menu` = :n_cht_libelle_menu , 
                   `chp_titre_menu` = :n_chp_titre_menu , 
                   `chx_autorisation_menu` = :n_chx_autorisation_menu , 
                   `chp_methode_menu` = :n_chp_methode_menu , 
                   `cht_condition_menu` = :n_cht_condition_menu , 
                   `cht_condition_php_menu` = :n_cht_condition_php_menu , 
                   `cht_initialisation_menu` = :n_cht_initialisation_menu
                WHERE `chi_id_menu` = :c_chi_id_menu ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_148()*/ 148,
                array(
                    /**/
                    'c_chi_id_menu' => $tt146[__xva][0]['T0.chi_id_menu'],
                    'n_cht_libelle_menu' => $form['cht_libelle_menu'],
                    'n_chp_titre_menu' => $form['chp_titre_menu'],
                    'n_chx_autorisation_menu' => $form['chx_autorisation_menu'],
                    'n_chp_methode_menu' => $form['chp_methode_menu'],
                    'n_cht_initialisation_menu' => $form['cht_initialisation_menu'],
                    'n_cht_condition_menu' => $form['cht_condition_menu'],
                    'n_cht_condition_php_menu' => $form['cht_condition_php_menu']
                ),
                $donnees_retournees
            );
            
            if($tt148[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt146[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt146=/*sql_inclure_deb*/
                /* sql_146()
                SELECT 
                `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
                `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , 
                `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T3`.`che_binaire_source`
                 FROM b1.tbl_menus T0
                 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
                
                 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
                
                 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
                
                WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_146()*/ 146,
                array(/**/
                    'T0_chi_id_menu' => $form['chi_id_menu']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt146;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt146;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_menu=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_menu)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_menu'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_menu=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_menu , true ) . '</pre>' ; exit(0);*/
        $tt146=/*sql_inclure_deb*/
            /* sql_146()
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , 
            `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T3`.`che_binaire_source`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_146()*/ 146,
            array(/**/
                'T0_chi_id_menu' => $chi_id_menu
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt146 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt146;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_menu('.$chi_id_menu.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_menu=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_menu)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_menu'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_menu=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_menu(' . $chi_id_menu . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_menu , true ) . '</pre>' ; exit(0);*/
        $tt146=/*sql_inclure_deb*/
            /* sql_146()
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , 
            `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T3`.`che_binaire_source`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_146()*/ 146,
            array(/**/
                'T0_chi_id_menu' => $chi_id_menu
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt146 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt146;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        $tt146=/*sql_inclure_deb*/
            /* sql_146()
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , 
            `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T3`.`che_binaire_source`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_146()*/ 146,
            array(/**/
                'T0_chi_id_menu' => $form['chi_id_menu']
            ),
            $donnees_retournees
        );
        
        if($tt146[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt146[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt149=/*sql_inclure_deb*/
            /* sql_149()
            DELETE FROM b1.tbl_menus
            WHERE `chi_id_menu` = :chi_id_menu ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_149()*/ 149,
            array(/**/
                'chi_id_menu' => $tt146[__xva][0]['T0.chi_id_menu']
            ),
            $donnees_retournees
        );
        
        if($tt149[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt146[__xva][0]);
        
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
        $chi_id_menu=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_menu'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_menu=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_menu , true ) . '</pre>' ; exit(0);*/
        $tt146=/*sql_inclure_deb*/
            /* sql_146()
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , 
            `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T3`.`che_binaire_source`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_146()*/ 146,
            array(/**/
                'T0_chi_id_menu' => $chi_id_menu
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt146 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt146;
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
        
        if(is_null($form['chp_titre_menu']) || $form['chp_titre_menu'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "titre" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_autorisation_menu']) || $form['chx_autorisation_menu'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "autorisation" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['cht_libelle_menu']) || $form['cht_libelle_menu'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "libelle" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_methode_menu']) || $form['chp_methode_menu'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "methode" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(
                    /**/
                    'chp_titre_menu' => $form['chp_titre_menu'],
                    'chx_autorisation_menu' => $form['chx_autorisation_menu'],
                    'chp_methode_menu' => $form['chp_methode_menu'],
                    'cht_libelle_menu' => $form['cht_libelle_menu'],
                    'cht_initialisation_menu' => $form['cht_initialisation_menu'],
                    'cht_condition_menu' => $form['cht_condition_menu'],
                    'cht_condition_php_menu' => $form['cht_condition_php_menu']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt147=/*sql_inclure_deb*/
            /* sql_147()
            INSERT INTO b1.`tbl_menus`(
                `chp_titre_menu` , 
                `chx_autorisation_menu` , 
                `chp_methode_menu` , 
                `cht_libelle_menu` , 
                `cht_condition_menu` , 
                `cht_condition_php_menu` , 
                `cht_initialisation_menu`
            ) VALUES (
                :chp_titre_menu , 
                :chx_autorisation_menu , 
                :chp_methode_menu , 
                :cht_libelle_menu , 
                :cht_condition_menu , 
                :cht_condition_php_menu , 
                :cht_initialisation_menu
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_147()*/ 147,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt147[__xst] === __xsu && $tt147['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt147['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt147['nouvel_id']);
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
        $criteres145=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres145[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres145 , true ) . '</pre>' ; exit(0);*/
        $tt145=/*sql_inclure_deb*/
            /* sql_145()
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
            `T3`.`chp_nom_source`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE (`T0`.`chi_id_menu` LIKE :T0_chi_id_menu
               AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
               AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
               AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
               AND `T1`.`chp_nom_autorisation` = :T1_chp_nom_autorisation
               AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
               AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation) 
            ORDER BY `T0`.`chi_id_menu` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_145()*/ 145,
            $criteres145,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt145[__xst]===__xsu && count($tt145[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt145[__xst] === __xsu && count($tt145[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres145['debut']=$__debut;
            $tt145=/*sql_inclure_deb*/
                /* sql_145()
                SELECT 
                `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
                `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
                `T3`.`chp_nom_source`
                 FROM b1.tbl_menus T0
                 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
                
                 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
                
                 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
                
                WHERE (`T0`.`chi_id_menu` LIKE :T0_chi_id_menu
                   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
                   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
                   AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
                   AND `T1`.`chp_nom_autorisation` = :T1_chp_nom_autorisation
                   AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
                   AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation) 
                ORDER BY `T0`.`chi_id_menu` DESC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_145()*/ 145,
                $criteres145,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt145 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt145 = <pre>' . var_export( $tt145 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt145;
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