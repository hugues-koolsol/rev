<?php
class c_taches1{
    private $sql0=null;
    private $moi='c_taches1';
    private $fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        
        if(!isset($_SESSION[_CA_]) || $_SESSION[_CA_]['chi_id_utilisateur'] === 0){

            $donnees_retournees[__xac]='pm1(m1(n1(_connexion1),f1(page_connexion1())))';
            $donnees_retournees[__xsi][__xer][]=' vous devez être connecté [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if($_SESSION[_CA_]['chi_id_projet'] === 0){

            $donnees_retournees[__xac]='pm1(m1(n1(c_projets1),f1(liste1($__num_page(\'0\')))))';
            $donnees_retournees[__xsi][__xer][]=' vous devez activer un projet [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        require_once(__RACINE_PGMS__ . 'c__sql0.php');
        $this->sql0=new c__sql0($donnees_retournees,$mat,$donnees_recues);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function priorite_a(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_tache='';
        $valeur='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === '$chi_id_tache' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_tache=$mat[$i + 1][1];

            }else if($mat[$i][1] === '$valeur' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $valeur=$mat[$i + 1][1];
            }

        }
        
        if(is_numeric($chi_id_tache) && $chi_id_tache > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_112()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_112()*/ 112,
                array(/**/
                    'T0_chi_id_tache' => $chi_id_tache,
                    'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $tt=/*sql_inclure_deb*/
                    /* sql_368()
                    UPDATE b1.tbl_taches SET 
                       `chp_priorite_tache` = :n_chp_priorite_tache , 
                       `chd__dtm_tache` = :n_chd__dtm_tache
                    WHERE ( / *** *** / `chi_id_tache` = :c_chi_id_tache
                       AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_368()*/ 368,
                    array(/**/
                        'c_chi_id_tache' => $chi_id_tache,
                        'c_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur'],
                        'n_chp_priorite_tache' => $valeur
                    ),
                    $donnees_retournees
                );
                
                if($tt[__xst] === __xsu){

                    $donnees_retournees[__xst]=__xsu;

                }else{

                    $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' ' . $valeur . ' [' . __LINE__ . ']';
                    return;
                }


            }else{

                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' ' . $valeur . ' [' . __LINE__ . ']';
                return;
            }


        }

    }
    /*
      =============================================================================================================
    */
    function retrancher_01(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_tache='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === '$chi_id_tache' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_tache=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_tache) && $chi_id_tache > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_112()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_112()*/ 112,
                array(/**/
                    'T0_chi_id_tache' => $chi_id_tache,
                    'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }

            $tt=/*sql_inclure_deb*/
                /* sql_366()
                UPDATE b1.tbl_taches SET 
                   `chp_priorite_tache` = (chp_priorite_tache-1)
                WHERE ( / *** *** / `chi_id_tache` = :c_chi_id_tache
                   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
                   AND `chp_priorite_tache` >= 1) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_366()*/ 366,
                array(/**/
                    'c_chi_id_tache' => $chi_id_tache,
                    'c_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;
            }


        }

    }
    /*
      =============================================================================================================
    */
    function ajouter_01_a_la_tache(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_tache='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === '$chi_id_tache' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_tache=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_tache) && $chi_id_tache > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_112()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_112()*/ 112,
                array(/**/
                    'T0_chi_id_tache' => $chi_id_tache,
                    'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }

            $tt=/*sql_inclure_deb*/
                /* sql_367()
                UPDATE b1.tbl_taches SET 
                   `chp_priorite_tache` = (chp_priorite_tache+1)
                WHERE ( / *** *** / `chi_id_tache` = :c_chi_id_tache
                   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
                   AND `chp_priorite_tache` < 99) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_367()*/ 367,
                array(/**/
                    'c_chi_id_tache' => $chi_id_tache,
                    'c_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;
            }


        }

    }
    /*
      =============================================================================================================
    */
    function réordonner1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $tt=/*sql_inclure_deb*/
            /* sql_164()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
            WHERE ( / *** *** / `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
               AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache) 
            ORDER BY `T0`.`chp_priorite_tache` ASC
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_164()*/ 164,
            array(/**/
                'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur'],
                'T0_chp_priorite_tache' => 50
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__xsi][__xer][]='erreur de modification sur les priorités [' . __LINE__ . ']';
            return;

        }

        $nouvelle_priorite=1;
        foreach($tt[__xva] as $k1 => $v1){
            
            if($nouvelle_priorite < 50){

                $tt2=/*sql_inclure_deb*/
                    /* sql_165()
                    UPDATE b1.tbl_taches SET 
                       `chp_priorite_tache` = :n_chp_priorite_tache
                    WHERE ( / *** *** / `chi_id_tache` = :c_chi_id_tache
                       AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_165()*/ 165,
                    array(/**/
                        'n_chp_priorite_tache' => $nouvelle_priorite,
                        'c_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur'],
                        'c_chi_id_tache' => $v1['T0.chi_id_tache']
                    ),
                    $donnees_retournees
                );
                
                if($tt2[__xst] === __xer){

                    $donnees_retournees[__xsi][__xer][]='erreur de modification sur les priorités [' . __LINE__ . ']';
                    return;

                }


            }

            $nouvelle_priorite++;
        }
        $donnees_retournees[__xst]=__xsu;
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
        
        if(is_null($form['chp_texte_tache']) || $form['chp_texte_tache'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "texte" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_priorite_tache']) || $form['chp_priorite_tache'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "priorite" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->entier_compris_entre(0,99,$form['chp_priorite_tache'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "priorite" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt112=/*sql_inclure_deb*/
            /* sql_112()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
            WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_112()*/ 112,
            array(/**/
                'T0_chi_id_tache' => $form['chi_id_tache'],
                'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
            ),
            $donnees_retournees
        );
        
        if($tt112[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt112[__xst] === __xsu && count($tt112[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt112[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt113=/*sql_inclure_deb*/
                /* sql_113()
                UPDATE b1.tbl_taches SET 
                   `chp_texte_tache` = :n_chp_texte_tache , 
                   `chp_priorite_tache` = :n_chp_priorite_tache , 
                   `chd__dtm_tache` = :n_chd__dtm_tache
                WHERE ( / *** *** / `chi_id_tache` = :c_chi_id_tache
                   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_113()*/ 113,
                array(
                    /**/
                    'c_chi_id_tache' => $tt112[__xva][0]['T0.chi_id_tache'],
                    'c_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur'],
                    'n_chp_texte_tache' => $form['chp_texte_tache'],
                    'n_chp_priorite_tache' => $form['chp_priorite_tache']
                ),
                $donnees_retournees
            );
            
            if($tt113[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt112[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt112=/*sql_inclure_deb*/
                /* sql_112()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_112()*/ 112,
                array(/**/
                    'T0_chi_id_tache' => $form['chi_id_tache'],
                    'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt112;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt112;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_tache=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_tache)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_tache'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_tache=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_tache , true ) . '</pre>' ; exit(0);*/
        $tt112=/*sql_inclure_deb*/
            /* sql_112()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
            WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_112()*/ 112,
            array(/**/
                'T0_chi_id_tache' => $chi_id_tache,
                'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt112 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt112;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_tache('.$chi_id_tache.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_tache=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' $d = '.$d.' $chi_id_tache=' . $chi_id_tache . ' , $donnees_recues=<pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_tache)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_tache'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_tache=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_tache(' . $chi_id_tache . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_tache , true ) . '</pre>' ; exit(0);*/
        $tt112=/*sql_inclure_deb*/
            /* sql_112()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
            WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_112()*/ 112,
            array(/**/
                'T0_chi_id_tache' => $chi_id_tache,
                'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt112 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt112;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        $tt112=/*sql_inclure_deb*/
            /* sql_112()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
            WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_112()*/ 112,
            array(/**/
                'T0_chi_id_tache' => $form['chi_id_tache'],
                'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
            ),
            $donnees_retournees
        );
        
        if($tt112[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt112[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt114=/*sql_inclure_deb*/
            /* sql_114()
            DELETE FROM b1.tbl_taches
            WHERE ( / *** *** / `chi_id_tache` = :chi_id_tache
               AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_114()*/ 114,
            array(/**/
                'chi_id_tache' => $tt112[__xva][0]['T0.chi_id_tache'],
                'chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
            ),
            $donnees_retournees
        );
        
        if($tt114[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt112[__xva][0]);
        
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
        $chi_id_tache=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_tache'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_tache=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_tache , true ) . '</pre>' ; exit(0);*/
        $tt112=/*sql_inclure_deb*/
            /* sql_112()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
            WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_112()*/ 112,
            array(/**/
                'T0_chi_id_tache' => $chi_id_tache,
                'T0_chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur']
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt112 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt112;
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
        
        if(is_null($form['chp_texte_tache']) || $form['chp_texte_tache'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "texte" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_priorite_tache']) || $form['chp_priorite_tache'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "priorite" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->entier_compris_entre(0,99,$form['chp_priorite_tache'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "priorite" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(/**/
                    'chx_utilisateur_tache' => $_SESSION[_CA_]['chi_id_utilisateur'],
                    'chp_texte_tache' => $form['chp_texte_tache'],
                    'chp_priorite_tache' => $form['chp_priorite_tache']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt111=/*sql_inclure_deb*/
            /* sql_111()
            INSERT INTO b1.`tbl_taches`(
                `chx_utilisateur_tache` , 
                `chp_texte_tache` , 
                `chp_priorite_tache` , 
                `chd__dtm_tache` , 
                `chd__dtc_tache`
            ) VALUES (
                :chx_utilisateur_tache , 
                :chp_texte_tache , 
                :chp_priorite_tache , 
                :chd__dtm_tache , 
                :chd__dtc_tache
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_111()*/ 111,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt111[__xst] === __xsu && $tt111['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt111['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt111['nouvel_id']);
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
        $criteres110=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres110[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres110 , true ) . '</pre>' ; exit(0);*/
        $tt110=/*sql_inclure_deb*/
            /* sql_110()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
            `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
               AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
               AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
               AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
            ORDER BY `T0`.`chp_priorite_tache` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_110()*/ 110,
            $criteres110,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt110[__xst]===__xsu && count($tt110[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt110[__xst] === __xsu && count($tt110[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres110['debut']=$__debut;
            $tt110=/*sql_inclure_deb*/
                /* sql_110()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
                `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache`
                 FROM b1.tbl_taches T0
                 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
                
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
                   AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
                   AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
                   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
                ORDER BY `T0`.`chp_priorite_tache` ASC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_110()*/ 110,
                $criteres110,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt110 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt110 = <pre>' . var_export( $tt110 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt110;
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