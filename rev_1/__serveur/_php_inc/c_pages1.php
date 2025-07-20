<?php
class c_pages1{
    private $sql0=null;
    /*
      erreur lors de l'"action" pour 
      Attention : du le cheval / de cheval vs de la page / du la page
    */
    private const LE_LA_ELEMENT_GERE = 'la page';
    private const UN_UNE_ELEMENT_GERE = 'une page';
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
      traitement des formulaires des pages
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_pages1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_pages_creer1'
                       || $action1 === 'page_pages_modifier1'
                       || $action1 === 'page_pages_supprimer1'
                       || $action1 === 'page_liste_des_pages1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_pages_modifier1'
                   || $conteneur1 === 'vv_pages_creer1'
                   || $conteneur1 === 'vv_pages_supprimer1'
                   || $conteneur1 === 'vv_pages_filtre1'
                   || $conteneur1 === 'vv_pages_filtre_choix_1'
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
    function vv_pages_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_pages1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_pages1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_pages1=true;
                break;

            }

        }
        $tt162=/*sql_inclure_deb*/
            /* sql_162()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , 
            `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T2`.`chp_nom_dossier` , `T0`.`che_binaire_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_projets T1 ON T1.chi_id_projet = T0.chx_projet_id_source
            
             LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_162()*/ 162,
            array(/**/
                'T0_chi_id_source' => $donnees_recues[__xva]['chx_source_page'],
                'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt162[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $dossier=$obj_doss->construire_chemin($tt162[__xva][0]['T0.chx_dossier_id_source']);
        
        if($dossier['__xst'] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt162[__xva][0] , true ) . '</pre>' ; exit(0);*/
        
        if(!is_file($dossier['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt162[__xva][0]['T0.chp_nom_source'])){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        require_once($dossier['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt162[__xva][0]['T0.chp_nom_source']);
        $class_methods=get_class_methods(str_replace('.php','',$tt162[__xva][0]['T0.chp_nom_source']));
        $trouve=false;
        foreach($class_methods as $k1 => $v1){
            
            if($v1 === $donnees_recues[__xva]['chp_methode_page']){

                $trouve=true;
                break;

            }

        }
        
        if($trouve === false){

            $donnees_retournees[__x_signaux][__xer][]='méthode non trouvée parmis  ' . var_export($class_methods,true) . ' [' . __LINE__ . ']';
            return;

        }

        $donnees_sql=array( array(
                    /**/
                    'chp_nom_page' => $donnees_recues[__xva]['chp_nom_page'],
                    'chx_parent_page' => $donnees_recues[__xva]['chx_parent_page'] === '' ? null : $donnees_recues[__xva]['chx_parent_page'],
                    'chx_acces_page' => $donnees_recues[__xva]['chx_acces_page'] === '' ? null : $donnees_recues[__xva]['chx_acces_page'],
                    'chx_source_page' => $donnees_recues[__xva]['chx_source_page'] === '' ? null : $donnees_recues[__xva]['chx_source_page'],
                    'chp_methode_page' => $donnees_recues[__xva]['chp_methode_page'],
                    'cht_contenu_methode_page' => $donnees_recues[__xva]['cht_contenu_methode_page'],
                    'cht_complement_page' => $donnees_recues[__xva]['cht_complement_page'],
                    'chx_projet_page' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=/*sql_inclure_deb*/
            /* sql_189()
            INSERT INTO b1.`tbl_pages`(
                `chp_nom_page` , 
                `chx_parent_page` , 
                `chx_acces_page` , 
                `chx_source_page` , 
                `chp_methode_page` , 
                `chx_projet_page` , 
                `cht_complement_page` , 
                `cht_contenu_methode_page`
            ) VALUES (
                :chp_nom_page , 
                :chx_parent_page , 
                :chx_acces_page , 
                :chx_source_page , 
                :chp_methode_page , 
                :chx_projet_page , 
                :cht_complement_page , 
                :cht_contenu_methode_page
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_189()*/ 189,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }else if($tt['changements'] === 1){

            $donnees_retournees[__xst]=__xsu;
            
            if($page_liste_des_pages1 === true){

                $this->page_liste_des_pages1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_page(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_pages_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_pages1.formulaire1(action1(page_pages_modifier1),chi_id_page(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_pages_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_pages1.page_liste_des_pages1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_pages1.page_liste_des_pages1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_pages1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_pages_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=/*sql_inclure_deb*/
            /* sql_190()
            SELECT 
            `T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_acces_page` , `T0`.`chx_source_page` , 
            `T0`.`chp_methode_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T0`.`cht_complement_page` , 
            `T0`.`cht_contenu_methode_page`
             FROM b1.tbl_pages T0
             LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page
            
            WHERE `T0`.`chi_id_page` = :T0_chi_id_page
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_190()*/ 190,
            array(/**/
                'T0_chi_id_page' => $donnees_recues[__xva]['chi_id_page']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu && $donnees_recues[__xva]['chi_id_page'] > 1){

            $tt=/*sql_inclure_deb*/
                /* sql_192()
                DELETE FROM b1.tbl_pages
                WHERE `chi_id_page` = :chi_id_page ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_192()*/ 192,
                array(/**/
                    'chi_id_page' => $tt[__xva][0]['T0.chi_id_page']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_page'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                $donnees_retournees[__x_signaux][__xsu][]='👍 suppression effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_page'] . ')';
                $this->page_liste_des_pages1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_page'] . ') [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_page'] . ') [' . __LINE__ . ']';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_pages_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_pages1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_pages1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_pages1=true;

            }

        }
        $tt=/*sql_inclure_deb*/
            /* sql_190()
            SELECT 
            `T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_acces_page` , `T0`.`chx_source_page` , 
            `T0`.`chp_methode_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T0`.`cht_complement_page` , 
            `T0`.`cht_contenu_methode_page`
             FROM b1.tbl_pages T0
             LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page
            
            WHERE `T0`.`chi_id_page` = :T0_chi_id_page
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_190()*/ 190,
            array(/**/
                'T0_chi_id_page' => $donnees_recues[__xva]['chi_id_page']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt162=/*sql_inclure_deb*/
                /* sql_162()
                SELECT 
                `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , 
                `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T2`.`chp_nom_dossier` , `T0`.`che_binaire_source`
                 FROM b1.tbl_sources T0
                 LEFT JOIN b1.tbl_projets T1 ON T1.chi_id_projet = T0.chx_projet_id_source
                
                 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_id_source
                
                WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source
                   AND `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_162()*/ 162,
                array(/**/
                    'T0_chi_id_source' => $donnees_recues[__xva]['chx_source_page'],
                    'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt162[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
                return;

            }

            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
            $dossier=$obj_doss->construire_chemin($tt162[__xva][0]['T0.chx_dossier_id_source']);
            
            if($dossier['__xst'] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
                return;

            }

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt162[__xva][0] , true ) . '</pre>' ; exit(0);*/
            
            if(!is_file($dossier['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt162[__xva][0]['T0.chp_nom_source'])){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
                return;

            }

            require_once($dossier['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt162[__xva][0]['T0.chp_nom_source']);
            $class_methods=get_class_methods(str_replace('.php','',$tt162[__xva][0]['T0.chp_nom_source']));
            $trouve=false;
            foreach($class_methods as $k1 => $v1){
                
                if($v1 === $donnees_recues[__xva]['chp_methode_page']){

                    $trouve=true;
                    break;

                }

            }
            
            if($trouve === false){

                $donnees_retournees[__x_signaux][__xer][]='méthode non trouvée parmis  ' . var_export($class_methods,true) . ' [' . __LINE__ . ']';
                return;

            }

            /*
              afr 
              pour la page accueil
            */
            $tt=/*sql_inclure_deb*/
                /* sql_191()
                UPDATE b1.tbl_pages SET 
                   `chp_nom_page` = :n_chp_nom_page , 
                   `chx_parent_page` = :n_chx_parent_page , 
                   `chx_acces_page` = :n_chx_acces_page , 
                   `chx_source_page` = :n_chx_source_page , 
                   `chp_methode_page` = :n_chp_methode_page , 
                   `chx_projet_page` = :n_chx_projet_page , 
                   `cht_complement_page` = :n_cht_complement_page , 
                   `cht_contenu_methode_page` = :n_cht_contenu_methode_page
                WHERE `chi_id_page` = :c_chi_id_page ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_191()*/ 191,
                array(
                    /**/
                    'c_chi_id_page' => $tt[__xva][0]['T0.chi_id_page'],
                    'n_chp_nom_page' => $donnees_recues[__xva]['chp_nom_page'],
                    'n_chx_parent_page' => $donnees_recues[__xva]['chx_parent_page'],
                    'n_chx_acces_page' => $donnees_recues[__xva]['chx_acces_page'],
                    'n_chx_source_page' => $donnees_recues[__xva]['chx_source_page'],
                    'n_chp_methode_page' => $donnees_recues[__xva]['chp_methode_page'],
                    'n_cht_contenu_methode_page' => $donnees_recues[__xva]['cht_contenu_methode_page'],
                    'n_cht_complement_page' => $donnees_recues[__xva]['cht_complement_page'],
                    'n_chx_projet_page' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_page'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_menus1.php');
                $obj_menu=new c_menus1($donnees_retournees,$mat,$donnees_recues);
                $ocm=$obj_menu->construire_menus($donnees_retournees,$mat,$donnees_recues);
                
                if($ocm[__xst] !== __xsu){

                    $donnees_retournees[__x_signaux][__xer][]='erreur lors de la construction des menus [' . __LINE__ . ']';
                    return;

                }

                
                if($page_liste_des_pages1 === true){

                    $this->page_liste_des_pages1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]='👍 modification effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_page'] . ') [' . __LINE__ . ']';

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
    function page_pages_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter ' . self::UN_UNE_ELEMENT_GERE . ' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_pages1.formulaire1(action1(page_liste_des_pages1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_pages_creer1">' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>nom</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" maxlength="64" id="chp_nom_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>page parente</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        /**/
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_parent_page" />' . PHP_EOL;
        $o1 .= '        <span id="chx_parent_page_libelle">' . PHP_EOL;
        $o1 .= '*indéfini' . PHP_EOL;
        $o1 .= '</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_pages1.page_pages_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_parent_page)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_parent_page_libelle)';
        $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
        $parametre_sous_fenetre .= ')';
        $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
        $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
        $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        /**/
        $o1 .= '  </div>' . PHP_EOL;
        /**/
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>acces</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_acces_page" />' . PHP_EOL;
        $o1 .= '        <span id="chx_acces_page_libelle">*indéfini</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_acces1.page_acces_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_acces_page)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_acces_page_libelle)';
        $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
        $parametre_sous_fenetre .= ')';
        $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
        $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
        $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>source</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_source_page" />' . PHP_EOL;
        $o1 .= '        <span id="chx_source_page_libelle">*indéfini</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_sources1.page_sources_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_source_page)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_source_page_libelle)';
        $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
        $parametre_sous_fenetre .= ' après_faire(c_sources1.obtenir_les_methodes(chi_id_source(id1),nom_zone(vv_liste_des_methodes1),zone_cible(chp_methode_page)))';
        $parametre_sous_fenetre .= ')';
        $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
        $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
        $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>méthode</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" maxlength="64" id="chp_methode_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />' . PHP_EOL;
        $o1 .= '      <span id="vv_liste_des_methodes1"></span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>contenu de la methode</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <textarea maxlength="64" id="cht_contenu_methode_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ></textarea>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>complement</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <textarea type="text" maxlength="64" id="cht_complement_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ></textarea>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_pages1.formulaire1(conteneur1(vv_pages_creer1),page_liste_des_pages1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_pages1.formulaire1(conteneur1(vv_pages_creer1))" title="" >ajouter</div>';
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
    function page_pages_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_pages='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_page' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_pages=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_pages) && $chi_id_pages > 0){

            /*afr 1 */
            $tt=/*sql_inclure_deb*/
                /* sql_190()
                SELECT 
                `T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_acces_page` , `T0`.`chx_source_page` , 
                `T0`.`chp_methode_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T0`.`cht_complement_page` , 
                `T0`.`cht_contenu_methode_page`
                 FROM b1.tbl_pages T0
                 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page
                
                 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page
                
                 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page
                
                WHERE `T0`.`chi_id_page` = :T0_chi_id_page
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_190()*/ 190,
                array(/**/
                    'T0_chi_id_page' => $chi_id_pages
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer ' . self::UN_UNE_ELEMENT_GERE . '<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_pages1.formulaire1(action1(page_liste_des_pages1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_pages_supprimer1">' . PHP_EOL;
                $o1 .= '  <h3>confirmez voous la suppression de ' . self::LE_LA_ELEMENT_GERE . '(<b>' . $tt[__xva][0]['T0.chi_id_page'] . '</b>) ?</h3>';
                /*
                  
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>nom</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_nom_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.chp_nom_page']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>page parent</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_parent_page']) . '"  id="chx_parent_page" />' . PHP_EOL;
                $o1 .= '        <span id="chx_parent_page_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_parent_page'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_parent_page'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_page']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $o1 .= '      ' . PHP_EOL;
                $o1 .= '      ' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>acces</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_acces_page']) . '"  id="chx_acces_page" />' . PHP_EOL;
                $o1 .= '        <span id="chx_acces_page_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_acces_page'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_acces_page'] . ') ' . htmlentities($tt[__xva][0]['T2.chp_nom_acces']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $o1 .= '      ' . PHP_EOL;
                $o1 .= '      ' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>source</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_source_page']) . '"  id="chx_source_page" />' . PHP_EOL;
                $o1 .= '        <span id="chx_source_page_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_source_page'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_source_page'] . ') ' . htmlentities($tt[__xva][0]['T3.chp_nom_source']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $o1 .= '      ' . PHP_EOL;
                $o1 .= '      ' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>méthode</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_methode_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.chp_methode_page']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>contenu méthode</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input id="cht_contenu_methode_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" >' . enti1($tt[__xva][0]['T0.cht_contenu_methode_page']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>complément</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <textarea id="cht_complement_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_complement_page']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_page'] . '" id="chi_id_page" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_pages1.formulaire1(conteneur1(vv_pages_supprimer1),page_liste_des_pages1())" title="" >Je confirme la suppression</div>';
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
    function page_pages_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_pages='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_page' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_pages=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_pages) && $chi_id_pages > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_190()
                SELECT 
                `T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_acces_page` , `T0`.`chx_source_page` , 
                `T0`.`chp_methode_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T0`.`cht_complement_page` , 
                `T0`.`cht_contenu_methode_page`
                 FROM b1.tbl_pages T0
                 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page
                
                 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page
                
                 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page
                
                WHERE `T0`.`chi_id_page` = :T0_chi_id_page
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_190()*/ 190,
                array(/**/
                    'T0_chi_id_page' => $chi_id_pages
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>modifier ' . self::LE_LA_ELEMENT_GERE . '(' . $tt[__xva][0]['T0.chi_id_page'] . ') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_pages1.formulaire1(action1(page_liste_des_pages1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_pages_modifier1">' . PHP_EOL;
                /**/
                $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_page'] . '" id="chi_id_page" />' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>page</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_nom_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.chp_nom_page']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>page parent</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_parent_page']) . '"  id="chx_parent_page" />' . PHP_EOL;
                $o1 .= '        <span id="chx_parent_page_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_parent_page'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_parent_page'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_page']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_pages1.page_pages_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_parent_page)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_parent_page_libelle)';
                $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
                $parametre_sous_fenetre .= ')';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
                $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>acces</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_acces_page']) . '"  id="chx_acces_page" />' . PHP_EOL;
                $o1 .= '        <span id="chx_acces_page_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_acces_page'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_acces_page'] . ') ' . htmlentities($tt[__xva][0]['T2.chp_nom_acces']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_acces1.page_acces_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_acces_page)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_acces_page_libelle)';
                $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
                $parametre_sous_fenetre .= ')';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
                $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>source</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_source_page']) . '"  id="chx_source_page" />' . PHP_EOL;
                $o1 .= '        <span id="chx_source_page_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_source_page'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_source_page'] . ') ' . htmlentities($tt[__xva][0]['T3.chp_nom_source']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_sources1.page_sources_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_source_page)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_source_page_libelle)';
                $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
                $parametre_sous_fenetre .= ' après_faire(c_sources1.obtenir_les_methodes(chi_id_source(id1),nom_zone(vv_liste_des_methodes1),zone_cible(chp_methode_page)))';
                $parametre_sous_fenetre .= ')';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
                $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>méthode</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_methode_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.chp_methode_page']) . '" />' . PHP_EOL;
                $o1 .= '      <span id="vv_liste_des_methodes1"></span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>contenu méthode</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_contenu_methode_page)))" title="formater le source rev">(😊)</div>' . PHP_EOL;
                $o1 .= '      <textarea id="cht_contenu_methode_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" >' . enti1($tt[__xva][0]['T0.cht_contenu_methode_page']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>complément</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_complement_page)))" title="formater le source rev">(😊)</div>' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev_sans_saut1(zone_source(cht_complement_page)))" title="formater le source rev">-😊-</div>' . PHP_EOL;
                $o1 .= '      <textarea id="cht_complement_page" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" >' . enti1($tt[__xva][0]['T0.cht_complement_page']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_pages1.formulaire1(conteneur1(vv_pages_modifier1),chi_id_page(' . $chi_id_pages . '),page_liste_des_pages1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_pages1.formulaire1(conteneur1(vv_pages_modifier1),chi_id_page(' . $chi_id_pages . '))" title="" >enregistrer</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }else{

            $this->page_liste_des_pages1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
        }

    }
    /*
      =============================================================================================================
      Pour les iframes sur les pages
      =============================================================================================================
    */
    function vv_pages_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_pages1.page_pages_sous_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_pages1.page_pages_sous_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_pages_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function page_pages_sous_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $fonction1='c_pages1.page_pages_sous_liste1';
        /* déverminage */
        $__nbMax=20;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['T0_chi_id_page']='';
        $par['T0_chp_nom_page']='';
        $par['nom_champ_dans_parent1']='';
        $par['nom_libelle_dans_parent1']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($fonction1 === $mat[$i][1]){

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
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION][$fonction1])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION][$fonction1]=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION][$fonction1];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION][$fonction1]=$par;
        }

        $par['T0_chi_id_page']=$par['T0_chi_id_page']??'';
        $par['T0_chp_nom_page']=$par['T0_chp_nom_page']??'';
        $par['nom_champ_dans_parent1']=$par_mat['nom_champ_dans_parent1']??'';
        $par['nom_libelle_dans_parent1']=$par_mat['nom_libelle_dans_parent1']??'';
        $nom_filtre='vv_pages_filtre_choix_1';
        $o1='<h1>choisir un page parent</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_page" value="' . $par['T0_chp_nom_page'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chp_nom_page'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chp_nom_page),value(\'\'))),c_pages1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_page" value="' . $par['T0_chi_id_page'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_pages1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_champ_dans_parent1" value="' . $par['nom_champ_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_libelle_dans_parent1" value="' . $par['nom_libelle_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_188()
            SELECT 
            `T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_source_page` , `T0`.`chp_methode_page` , 
            `T0`.`cht_complement_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T1`.`cht_contenu_methode_page`
             FROM b1.tbl_pages T0
             LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page
            
            WHERE (`T0`.`chi_id_page` = :T0_chi_id_page
               AND `T0`.`chp_nom_page` LIKE :T0_chp_nom_page) 
            ORDER BY `T0`.`chi_id_page` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_188()*/ 188,
            array(
                /**/
                'T0_chi_id_page' => $par['T0_chi_id_page'] === '' ? '' : $par['T0_chi_id_page'],
                'T0_chp_nom_page' => $par['T0_chp_nom_page'] === '' ? '' : '' . $par['T0_chp_nom_page'] . '',
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des pages [' . __LINE__ . ']';
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $tt '.var_export($tt,true);
        */
        $bouton_avant='';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th></th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>page</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $parametres='';
            $parametres .= 'interface1.choisir_dans_sous_fenetre1(';
            $parametres .= '    nom_champ_dans_parent1(' . $par['nom_champ_dans_parent1'] . ')';
            $parametres .= '    nom_libelle_dans_parent1(' . $par['nom_libelle_dans_parent1'] . ')';
            $parametres .= '    id1(' . $v0['T0.chi_id_page'] . ')';
            $parametres .= '    libelle1("(' . $v0['T0.chi_id_page'] . ') ' . $v0['T0.chp_nom_page'] . '" )';
            $parametres .= ')';
            $lsttbl .= '<td style="max-width:calc(1*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="' . htmlentities($parametres) . '">=&gt;</div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_page'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chp_nom_page'] !== null){

                $lsttbl .= '' . enti1($v0['T0.chp_nom_page']) . '';

            }

            $lsttbl .= '</td>';
            /**/
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_liste_des_pages1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $__nbMax=20;
        $par=array();
        $par['T0_chi_id_page']='';
        $par['T0_chp_nom_page']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_pages1.page_liste_des_pages1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        
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
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_pages1.page_liste_des_pages1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_pages1.page_liste_des_pages1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_pages1.page_liste_des_pages1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_pages1.page_liste_des_pages1']=$par;
        }

        $par['T0_chi_id_page']=$par['T0_chi_id_page']??'';
        $par['T0_chp_nom_page']=$par['T0_chp_nom_page']??'';
        $fonction1='c_pages1.page_liste_des_pages1';
        $nom_filtre='vv_pages_filtre1';
        $o1='<h1>Liste des pages</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_page" value="' . $par['T0_chp_nom_page'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_page" value="' . $par['T0_chi_id_page'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_pages1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_188()
            SELECT 
            `T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_source_page` , `T0`.`chp_methode_page` , 
            `T0`.`cht_complement_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T1`.`cht_contenu_methode_page`
             FROM b1.tbl_pages T0
             LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page
            
            WHERE (`T0`.`chi_id_page` = :T0_chi_id_page
               AND `T0`.`chp_nom_page` LIKE :T0_chp_nom_page) 
            ORDER BY `T0`.`chi_id_page` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_188()*/ 188,
            array(
                /**/
                'T0_chi_id_page' => $par['T0_chi_id_page'] === '' ? '' : $par['T0_chi_id_page'],
                'T0_chp_nom_page' => $par['T0_chp_nom_page'] === '' ? '' : '' . $par['T0_chp_nom_page'] . '',
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
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_pages1.page_liste_des_pages1(T0_chp_priorite_page2(99),indice_menu(10))" title="pages" >';
            $o1 .= '      Réessayer';
            $o1 .= '    </div>';
            $o1 .= '    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\'application';
            $o1 .= '  </div>';
            unset($_SESSION[__X_CLE_APPLICATION]['c_pages1.page_liste_des_pages1']);
            
            if($GLOBALS[DEVER_SRV] >= 2){

                $o1 .= '  <pre>' . var_export($tt,true) . '</per>';

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
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_pages1.formulaire1(action1(page_pages_creer1))" title="nouveau page" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>nom</th>';
        $lsttbl .= '<th>parent</th>';
        $lsttbl .= '<th>acces</th>';
        $lsttbl .= '<th>page</th>';
        $lsttbl .= '<th>méthode</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_pages1.formulaire1(action1(page_pages_modifier1),chi_id_page(' . $v0['T0.chi_id_page'] . '))">✎</div>';
            
            if($v0['T0.chi_id_page'] <= 2){

                $lsttbl .= '  <div class="hug_bouton_inactif">🗑</div>';

            }else{

                $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_pages1.formulaire1(action1(page_pages_supprimer1),chi_id_page(' . $v0['T0.chi_id_page'] . '))">🗑</div>';
            }

            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_page'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . enti1(mb_substr($v0['T0.chp_nom_page'],0,100)) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chx_parent_page'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T2.chp_nom_acces'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T3.chp_nom_source'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chp_methode_page'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_pages1.page_liste_des_pages1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/