<?php
class c_taches1{
    private $sql0=null;
    /*
      erreur lors de l'"action" pour 
      Attention : du le cheval / de cheval vs de la tache / du la tache
    */
    private const LE_LA_ELEMENT_GERE = 'la tâche';
    private const UN_UNE_ELEMENT_GERE = 'une tâche';
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
      traitement des formulaires des tâches
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_taches1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_taches_creer1'
                       || $action1 === 'page_taches_modifier1'
                       || $action1 === 'page_taches_supprimer1'
                       || $action1 === 'page_liste_des_taches1'
                       || $action1 === 'ajouter_01_a_la_tache'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else if($action1 === 'réordonner1'){

                        $this->réordonner1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else if($action1 === 'mettre_a_99'){

                        $this->priorité_a(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues,
                            99
                        );

                    }else if($action1 === 'mettre_a_00'){

                        $this->priorité_a(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues,
                            0
                        );

                    }else if($action1 === 'retrancher_01'){

                        $this->retrancher_un(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_taches_modifier1'
                   || $conteneur1 === 'vv_taches_creer1'
                   || $conteneur1 === 'vv_taches_supprimer1'
                   || $conteneur1 === 'vv_taches_filtre1'
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
    function vv_taches_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_taches1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_taches1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_taches1=true;
                break;

            }

        }
        $donnees_sql=array( array(/**/
                    'chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'chp_texte_tache' => $donnees_recues[__xva]['chp_texte_tache'],
                    'chp_priorite_tache' => $donnees_recues[__xva]['chp_priorite_tache'],
                    'chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                    
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=/*sql_inclure_deb*/
            /* sql_130()
            INSERT INTO b1.`tbl_taches`(
                `chx_utilisateur_tache` , 
                `chp_texte_tache` , 
                `chp_priorite_tache`
            ) VALUES (
                :chx_utilisateur_tache , 
                :chp_texte_tache , 
                :chp_priorite_tache
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_130()*/ 130,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }else if($tt['changements'] === 1){

            $donnees_retournees[__xst]=__xsu;
            
            if($page_liste_des_taches1 === true){

                $this->réordonner1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_tache(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_taches_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_taches1.formulaire1(action1(page_taches_modifier1),chi_id_tache(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_taches_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_taches1.page_liste_des_taches1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_taches1.page_liste_des_taches1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_taches1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_taches_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=/*sql_inclure_deb*/
            /* sql_128()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
            WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_128()*/ 128,
            array(/**/
                'T0_chi_id_tache' => $donnees_recues[__xva]['chi_id_tache'],
                'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=/*sql_inclure_deb*/
                /* sql_131()
                DELETE FROM b1.tbl_taches
                WHERE (`chi_id_tache` = :chi_id_tache
                   AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_131()*/ 131,
                array(/**/
                    'chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'chi_id_tache' => $tt[__xva][0]['T0.chi_id_tache'],
                    'chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_tache'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                $donnees_retournees[__x_signaux][__xsu][]='👍 suppression effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_tache'] . ')';
                $this->page_liste_des_taches1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_tache'] . ') [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_tache'] . ') [' . __LINE__ . ']';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_taches_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_taches1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_taches1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_taches1=true;

            }

        }
        $tt=/*sql_inclure_deb*/
            /* sql_128()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
            WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_128()*/ 128,
            array(/**/
                'T0_chi_id_tache' => $donnees_recues[__xva]['chi_id_tache'],
                'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']                
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=/*sql_inclure_deb*/
                /* sql_129()
                UPDATE b1.tbl_taches SET 
                   `chp_texte_tache` = :n_chp_texte_tache , 
                   `chp_priorite_tache` = :n_chp_priorite_tache
                WHERE ( / *** *** / `chi_id_tache` = :c_chi_id_tache
                   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_129()*/ 129,
                array(
                    /**/
                    'n_chp_texte_tache' => $donnees_recues[__xva]['chp_texte_tache'],
                    'n_chp_priorite_tache' => $donnees_recues[__xva]['chp_priorite_tache'],
                    'c_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'c_chi_id_tache' => $tt[__xva][0]['T0.chi_id_tache'],
                    'c_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_tache'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                
                if($page_liste_des_taches1 === true){

                    $this->page_liste_des_taches1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]='👍 modification effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_tache'] . ') [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function réordonner1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
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
                'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                'T0_chp_priorite_tache' => 50,
                'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']                
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='erreur de modification sur les priorités [' . __LINE__ . ']';
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
                        'c_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                        'c_chi_id_tache' => $v1['T0.chi_id_tache'],
                        'c_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                    ),
                    $donnees_retournees
                );
                
                if($tt2[__xst] === __xer){

                    $donnees_retournees[__x_signaux][__xer][]='erreur de modification sur les priorités [' . __LINE__ . ']';
                    return;

                }


            }

            $nouvelle_priorite++;
        }
        $donnees_retournees[__xst]=__xsu;
        $this->page_liste_des_taches1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
    }
    /*
      =============================================================================================================
    */
    function retrancher_un(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $chi_id_taches='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_tache' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_taches=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_taches) && $chi_id_taches > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_128()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_128()*/ 128,
                array(/**/
                    'T0_chi_id_tache' => $chi_id_taches,
                    'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']                    
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }

            $tt=/*sql_inclure_deb*/
                /* sql_120()
                UPDATE b1.tbl_taches SET 
                   `chp_priorite_tache` = (chp_priorite_tache-1)
                WHERE (`chi_id_tache` = :c_chi_id_tache
                   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
                   AND `chp_priorite_tache` >= 1) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_120()*/ 120,
                array(/**/
                    'c_chi_id_tache' => $chi_id_taches,
                    'c_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'c_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $donnees_retournees[__xst]=__xsu;
                $this->page_liste_des_taches1(
                    $donnees_retournees,
                     /*matrice*/ $mat,
                    $donnees_recues
                );

            }else{

                $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;
            }


        }

    }
    /*
      =============================================================================================================
    */
    function ajouter_01_a_la_tache(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $chi_id_taches='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_tache' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_taches=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_taches) && $chi_id_taches > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_128()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_128()*/ 128,
                array(/**/
                    'T0_chi_id_tache' => $chi_id_taches,
                    'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }

            $tt=/*sql_inclure_deb*/
                /* sql_121()
                UPDATE b1.tbl_taches SET 
                   `chp_priorite_tache` = (chp_priorite_tache+1)
                WHERE ( / *** *** / `chi_id_tache` = :c_chi_id_tache
                   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
                   AND `chp_priorite_tache` < 99) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_121()*/ 121,
                array(/**/
                    'c_chi_id_tache' => $chi_id_taches,
                    'c_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'c_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $donnees_retournees[__xst]=__xsu;
                $this->page_liste_des_taches1(
                    $donnees_retournees,
                     /*matrice*/ $mat,
                    $donnees_recues
                );

            }else{

                $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;
            }


        }

    }
    /*
      =============================================================================================================
    */
    function priorité_a(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues,$valeur){
        $chi_id_taches='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_tache' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_taches=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_taches) && $chi_id_taches > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_128()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_128()*/ 128,
                array(/**/
                    'T0_chi_id_tache' => $chi_id_taches,
                    'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $tt=/*sql_inclure_deb*/
                    /* sql_122()
                    UPDATE b1.tbl_taches SET 
                       `chp_priorite_tache` = :n_chp_priorite_tache
                    WHERE (`chi_id_tache` = :c_chi_id_tache
                       AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_122()*/ 122,
                    array(/**/
                        'c_chi_id_tache' => $chi_id_taches,
                        'c_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                        'n_chp_priorite_tache' => $valeur ,
                        'c_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                    ),
                    $donnees_retournees
                );
                
                if($tt[__xst] === __xsu){

                    $donnees_retournees[__xst]=__xsu;
                    $this->page_liste_des_taches1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );

                }else{

                    $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' ' . $valeur . ' [' . __LINE__ . ']';
                    return;
                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' ' . $valeur . ' [' . __LINE__ . ']';
                return;
            }


        }

    }
    /*
      =============================================================================================================
    */
    function page_taches_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter ' . self::UN_UNE_ELEMENT_GERE . ' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_taches1.formulaire1(action1(page_liste_des_taches1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_taches_creer1">' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>tâche</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <textarea rows="20"  cols="20" id="chp_texte_tache" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>priorité</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input  type="text" value="0" id="chp_priorite_tache" maxlength="4" style="width:100%;max-width:4em;" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_taches1.formulaire1(conteneur1(vv_taches_creer1),page_liste_des_taches1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_taches1.formulaire1(conteneur1(vv_taches_creer1))" title="" >ajouter</div>';
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '</div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_taches_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_taches='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_tache' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_taches=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_taches) && $chi_id_taches > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_128()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_128()*/ 128,
                array(/**/
                    'T0_chi_id_tache' => $chi_id_taches,
                    'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer ' . self::UN_UNE_ELEMENT_GERE . '<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_taches1.formulaire1(action1(page_liste_des_taches1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_taches_supprimer1">' . PHP_EOL;
                $o1 .= '  <h3>confirmez voous la suppression de ' . self::LE_LA_ELEMENT_GERE . '(<b>' . $tt[__xva][0]['T0.chi_id_tache'] . '</b>) ?</h3>';
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>priorité</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      ' . enti1($tt[__xva][0]['T0.chp_priorite_tache']) . '' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>texte</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <textarea rows="20"  cols="20" id="chp_texte_tache" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.chp_texte_tache']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_tache'] . '" id="chi_id_tache" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_taches1.formulaire1(conteneur1(vv_taches_supprimer1),page_liste_des_taches1())" title="" >Je confirme la suppression</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }

    }
    /*
      =============================================================================================================
    */
    function page_taches_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_taches='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_tache' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_taches=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_taches) && $chi_id_taches > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_128()
                SELECT 
                `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
                 FROM b1.tbl_taches T0
                WHERE ( / *** *** / `T0`.`chi_id_tache` = :T0_chi_id_tache
                   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_128()*/ 128,
                array(/**/
                    'T0_chi_id_tache' => $chi_id_taches,
                    'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                    'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>modifier ' . self::LE_LA_ELEMENT_GERE . '(' . $tt[__xva][0]['T0.chi_id_tache'] . ') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_taches1.formulaire1(action1(page_liste_des_taches1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_taches_modifier1">' . PHP_EOL;
                /**/
                $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_tache'] . '" id="chi_id_tache" />' . PHP_EOL;
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>tâche</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <textarea rows="20"  cols="20" id="chp_texte_tache" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.chp_texte_tache']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>priorité</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input  type="text" value="' . enti1($tt[__xva][0]['T0.chp_priorite_tache']) . '" id="chp_priorite_tache" maxlength="4" style="width:100%;max-width:4em;" autocapitalize="off" />' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(affecte(zone(chp_priorite_tache,valeur),0))">0</div>';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(affecte(zone(chp_priorite_tache,valeur),99))">99</div>';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(affecte(zone(chp_priorite_tache,valeur),plus(zone(chp_priorite_tache,valeur) , 10 )))">+10</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_taches1.formulaire1(conteneur1(vv_taches_modifier1),chi_id_tache(' . $chi_id_taches . '),page_liste_des_taches1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_taches1.formulaire1(conteneur1(vv_taches_modifier1),chi_id_tache(' . $chi_id_taches . '))" title="" >enregistrer</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }else{

            $this->page_liste_des_taches1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
        }

    }
    /*
      =============================================================================================================
    */
    function page_liste_des_taches1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){

     
        if(!isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

            $donnees_retournees[__x_signaux][__xal][]=' vous devez activer un projet [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            return;

        }
        $__nbMax=20;
        $par=array();
        $par['T0_chi_id_tache']='';
        $par['T0_chp_texte_tache']='';
        $par['T0_chp_priorite_tache']='';
        $par['T0_chp_priorite_tache2']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xal][]='$mat '.var_export($mat,true).' [' . __LINE__ . ']'; */
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_taches1.page_liste_des_taches1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        /* $donnees_retournees[__x_signaux][__xal][]='$mat[$j][1] ' . $mat[$j][1] . ' [' . __LINE__ . ']'; */
                        
                        if($mat[$j][1] === '__num_page'){

                            /* $donnees_retournees[__x_signaux][__xal][]='$mat[$j][1] ' . $mat[$j][1] . ' [' . __LINE__ . ']'; */
                            $numpage=$mat[$j + 1][1];
                            $par_mat['__num_page']=$mat[$j + 1][1];
                            $par['__num_page']=$mat[$j + 1][1];

                        }else if($mat[$j + 1][1] !== ''){

                            /* $donnees_retournees[__x_signaux][__xal][]='$mat[$j][1] ' . $mat[$j][1] . ' [' . __LINE__ . ']'; */
                            $par_mat[$mat[$j][1]]=urldecode($mat[$j + 1][1]);
                        }


                    }

                }

            }else if($mat[$i][1] === 'indice_menu'){

                /* $donnees_retournees[__x_signaux][__xal][]='$mat[$i][1] ' . $mat[$i][1] . ' [' . __LINE__ . ']'; */
                $numpage=0;
                $par_mat['__num_page']=0;
                $provenance_menu=true;
                $par['__num_page']=0;
            }

        }
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_taches1.page_liste_des_taches1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_taches1.page_liste_des_taches1']=$par;

        }else{

            /* $donnees_retournees[__x_signaux][__xal][]='$par_mat=<pre>'.var_export($par_mat,true).'</pre>$par=<pre>'.var_export($par,true).'</pre> [' . __LINE__ . ']';*/
            $par=$_SESSION[__X_CLE_APPLICATION]['c_taches1.page_liste_des_taches1'];
            $par=array_merge($par,$par_mat);
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_taches1.page_liste_des_taches1']=$par;
        }

        $par['T0_chi_id_tache']=$par['T0_chi_id_tache']??'';
        $par['T0_chp_texte_tache']=$par['T0_chp_texte_tache']??'';
        $par['T0_chp_priorite_tache']=$par['T0_chp_priorite_tache']??'';
        $par['T0_chp_priorite_tache2']=$par['T0_chp_priorite_tache2']??'';
        $fonction1='c_taches1.page_liste_des_taches1';
        $nom_filtre='vv_taches_filtre1';
        $o1='<h1>Liste des tâches</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>texte</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_texte_tache" value="' . $par['T0_chp_texte_tache'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chp_texte_tache'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chp_texte_tache),value(\'\'))),c_taches1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>priorité =</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_priorite_tache" value="' . $par['T0_chp_priorite_tache'] . '" size="8" maxlength="64" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>priorité &lt;</span></div>' . PHP_EOL;
        $o1 .= '      <div>' . PHP_EOL;
        $o1 .= '        <input type="text" id="T0_chp_priorite_tache2" value="' . $par['T0_chp_priorite_tache2'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chp_priorite_tache2'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chp_priorite_tache2),value(\'\'))),c_taches1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_tache" value="' . $par['T0_chi_id_tache'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_taches1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_119()
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
             FROM b1.tbl_taches T0
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
             /*sql_119()*/ 119,
            array(
                /**/
                'T0_chi_id_tache' => $par['T0_chi_id_tache'] === '' ? '' : $par['T0_chi_id_tache'],
                'T0_chx_utilisateur_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'],
                'T0_chp_texte_tache' => $par['T0_chp_texte_tache'] === '' ? '' : '' . $par['T0_chp_texte_tache'] . '',
                'T0_chp_priorite_tache' => $par['T0_chp_priorite_tache'],
                'T0_chp_priorite_tache2' => $par['T0_chp_priorite_tache2'],
                'T0_chx_projet_tache' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $o1='';
            $o1 .= '<div>';
            $o1 .= '  <h3 class="yy__x_signaux_0">Erreur technique [' . __METHOD__ . ' ' . __LINE__ . ']</h1>';
            $o1 .= '  <div style="text-align:center">';
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_taches1.page_liste_des_taches1()" title="tâches" >';
            $o1 .= '      Réessayer';
            $o1 .= '    </div>';
            $o1 .= '    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\'application';
            $o1 .= '  </div>';
            unset($_SESSION[__X_CLE_APPLICATION]['c_taches1.page_liste_des_taches1']);
            
            if($GLOBALS[DEVER_SRV] >= 2){

                $o1 .= '  <pre>' . $tt['sql0'] . '</per>';

            }

            $o1 .= '</div>';
            /* en fonction du déverminage */
            $donnees_retournees[__x_page] .= $o1;
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $tt '.var_export($tt,true);
        */
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_taches1.formulaire1(action1(page_taches_creer1))" title="nouvelle tâche" >+*</div>';
        $bouton_avant .= '<div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_taches1.formulaire1(action1(réordonner1))" title="réordonner" >#</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>tâche</th>';
        $lsttbl .= '<th>priorite</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_taches1.formulaire1(action1(page_taches_modifier1),chi_id_tache(' . $v0['T0.chi_id_tache'] . '))">✎</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_taches1.formulaire1(action1(page_taches_supprimer1),chi_id_tache(' . $v0['T0.chi_id_tache'] . '))">🗑</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_taches1.formulaire1(action1(mettre_a_99),chi_id_tache(' . $v0['T0.chi_id_tache'] . '))">99</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_taches1.formulaire1(action1(mettre_a_00),chi_id_tache(' . $v0['T0.chi_id_tache'] . '))">00</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xdv" data-hug_click="c_taches1.formulaire1(action1(ajouter_01_a_la_tache),chi_id_tache(' . $v0['T0.chi_id_tache'] . '))">+1</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xdv" data-hug_click="c_taches1.formulaire1(action1(retrancher_01),chi_id_tache(' . $v0['T0.chi_id_tache'] . '))">-1</div>';
            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_tache'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chp_texte_tache'] !== null){

                $lsttbl .= '' . enti1(mb_substr($v0['T0.chp_texte_tache'],0,100)) . '';

            }

            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chp_priorite_tache'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $maj_url='';
        $maj_url .= 'maj_url(';
        $maj_url .= 'c_taches1.page_liste_des_taches1(';
        $maj_url .= '__num_page(' . $par['__num_page'] . ')';
        
        if($par['T0_chp_priorite_tache2'] !== ''){

            $maj_url .= ',T0_chp_priorite_tache2(' . $par['T0_chp_priorite_tache2'] . ')';

        }

        
        if($par['T0_chp_priorite_tache'] !== ''){

            $maj_url .= ',T0_chp_priorite_tache(' . $par['T0_chp_priorite_tache'] . ')';

        }

        
        if($par['T0_chp_texte_tache'] !== ''){

            $maj_url .= ',T0_chp_texte_tache(\'' . texte_rev($par['T0_chp_texte_tache']) . '\')';

        }

        $maj_url .= ')';
        $maj_url .= ')';
        $donnees_retournees[__xva]['maj']=$maj_url;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_taches1.page_liste_des_taches1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/