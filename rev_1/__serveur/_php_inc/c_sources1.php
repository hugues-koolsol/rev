<?php
class c_sources1{
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
      traitement des formulaires des sources
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_sources1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_sources_modifier1'
                       || $action1 === 'page_sources_creer1'
                       || $action1 === 'page_sources_supprimer1'
                       || $action1 === 'page_liste_des_sources1'
                       || $action1 === 'page_sources_dupliquer1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_sources_modifier1'
                   || $conteneur1 === 'vv_sources_creer1'
                   || $conteneur1 === 'vv_sources_supprimer1'
                   || $conteneur1 === 'vv_sources_filtre1'
                   || $conteneur1 === 'vv_sources_dupliquer1'
                   || $conteneur1 === 'vv_sources_filtre_choix_1'
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
    function vv_sources_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_sources_liste1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_sources_liste1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_sources_liste1=true;

            }

        }
        $donnees_retournees[__xst]=__xsu;
        $donnees_sql=array( array(
                    /**/
                    'chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'chp_nom_source' => $donnees_recues[__xva]['chp_nom_source'],
                    'chx_dossier_id_source' => $donnees_recues[__xva]['chx_dossier_id_source'] === '' ? NULL : $donnees_recues[__xva]['chx_dossier_id_source'],
                    'che_binaire_source' => $donnees_recues[__xva]['che_binaire_source'],
                    'cht_commentaire_source' => null,
                    'cht_rev_source' => null,
                    'cht_genere_source' => null
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=/*sql_inclure_deb*/
            /* sql_54()
            INSERT INTO b1.`tbl_sources`(
                `chx_dossier_id_source` , 
                `chx_projet_id_source` , 
                `chp_nom_source` , 
                `cht_commentaire_source` , 
                `cht_rev_source` , 
                `cht_genere_source` , 
                `che_binaire_source`
            ) VALUES (
                :chx_dossier_id_source , 
                :chx_projet_id_source , 
                :chp_nom_source , 
                :cht_commentaire_source , 
                :cht_rev_source , 
                :cht_genere_source , 
                :che_binaire_source
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_54()*/ 54,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $code_erreur=$tt['code_erreur']??0;
            
            if($code_erreur === 19){

                $donnees_retournees[__x_signaux][__xer][]=' Ce source existe déjà [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de la création de ce source [' . __LINE__ . ',sql(' . $code_erreur . ')] ';
            }

            return;

        }else if($tt['changements'] === 1){

            
            if($page_sources_liste1 === true){

                $this->page_sources_liste1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_source(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_sources_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_sources1.formulaire1(action1(page_sources_modifier1),chi_id_source(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' aucune modification efféctuée';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_sources_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_sources1.page_liste_des_sources1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_sources1.page_liste_des_sources1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_sources1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_sources_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /* $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);*/
        /*si l'utilisateur bidouille l'id dans l'interface*/
        
        if($donnees_recues[__xva]['chi_id_source'] === 1){

            $donnees_retournees[__x_signaux][__xer][]=' vous ne pouvez pas supprimer la source 1 [' . __LINE__ . ']';

        }

        $tt62=/*sql_inclure_deb*/
            /* sql_62()
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
             /*sql_62()*/ 62,
            array( 'T0_chi_id_source' => $donnees_recues[__xva]['chi_id_source'], 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt62[__xst] === __xsu){

            $tt39=/*sql_inclure_deb*/
                /* sql_39()
                / ***meta(tester_les_dependances_dans_le_php(1))*** /
                
                DELETE FROM b1.tbl_sources
                WHERE (`chi_id_source` = :chi_id_source
                   AND `chx_projet_id_source` = :chx_projet_id_source) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_39()*/ 39,
                array( 'chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'], 'chi_id_source' => $tt62[__xva][0]['T0.chi_id_source']),
                $donnees_retournees
            );
            
            if($tt39[__xst] !== __xsu){

                
                if($tt39['code_erreur'] === 19){

                    $donnees_retournees[__x_signaux][__xst][]=__LINE__ . ' vous ne pouvez pas supprimer cette source car un élément en dépend';

                }else{

                    $donnees_retournees[__x_signaux][__xst][]=__LINE__ . ' erreur lors de la suppression';
                }


            }else{

                
                if($tt39['changements'] === 1){

                    require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
                    $obj_dossier_source=new c_dossiers1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );
                    $chemin_dossier_source=$obj_dossier_source->construire_chemin($tt62[__xva][0]['T0.chx_dossier_id_source']);
                    
                    if($chemin_dossier_source[__xst] === __xsu){

                        $chemin_fichier_source=$chemin_dossier_source[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt62[__xva][0]['T0.chp_nom_source'];

                    }else{

                        $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $tt62[__xva][0]['T0.chx_dossier_id_source'] . ' [' . __LINE__ . ']';
                        return;
                    }

                    supprimer_fichier($chemin_fichier_source,false);
                    $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' la suppression a été effectuée en bdd';
                    $this->page_liste_des_sources1($donnees_retournees,$mat,$donnees_recues);

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
    function vv_sources_dupliquer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues,true);
        */
        $page_liste_des_sources1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_sources1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_sources1=true;

            }

        }
        /*si l'utilisateur bidouille l'id dans l'interface*/
        $tt62=/*sql_inclure_deb*/
            /* sql_62()
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
             /*sql_62()*/ 62,
            array(/**/
                'T0_chi_id_source' => $donnees_recues[__xva]['chi_id_source'],
                'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt62[__xst] === __xsu){

            $a_insérer=array( array(
                        'chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                        'chx_dossier_id_source' => $donnees_recues[__xva]['chx_dossier_id_source'],
                        'cht_rev_source' => $tt62[__xva][0]['T0.cht_rev_source'],
                        'cht_genere_source' => $tt62[__xva][0]['T0.cht_genere_source'],
                        'chp_nom_source' => $tt62[__xva][0]['T0.chp_nom_source'],
                        'cht_commentaire_source' => $tt62[__xva][0]['T0.cht_commentaire_source'],
                        'che_binaire_source' => $tt62[__xva][0]['T0.che_binaire_source']
                    ));
            /* echo __FILE__ . ' ' . __LINE__ . ' $a_insérer = <pre>' . var_export( $a_insérer , true ) . '</pre>' ; exit(0);*/
            $tt54=/*sql_inclure_deb*/
                /* sql_54()
                INSERT INTO b1.`tbl_sources`(
                    `chx_dossier_id_source` , 
                    `chx_projet_id_source` , 
                    `chp_nom_source` , 
                    `cht_commentaire_source` , 
                    `cht_rev_source` , 
                    `cht_genere_source` , 
                    `che_binaire_source`
                ) VALUES (
                    :chx_dossier_id_source , 
                    :chx_projet_id_source , 
                    :chp_nom_source , 
                    :cht_commentaire_source , 
                    :cht_rev_source , 
                    :cht_genere_source , 
                    :che_binaire_source
                );
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_54()*/ 54,
                $a_insérer,
                $donnees_retournees
            );
            
            if($tt54[__xst] === __xer){

                $code_erreur=$tt54['code_erreur']??0;
                
                if($code_erreur === 19){

                    $donnees_retournees[__x_signaux][__xer][]='il y a un doublon [' . __LINE__ . ']';

                }else{

                    $donnees_retournees[__x_signaux][__xer][]='erreur lors de la duplication du source [' . __LINE__ . ',sql(' . $code_erreur . ')] ';
                }

                return;

            }else if($tt54['changements'] === 1){

                
                if($tt62[__xva][0]['T0.chx_dossier_id_source'] !== null){

                    require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
                    $obj_dossier_source=new c_dossiers1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );
                    $chemin_dossier_source=$obj_dossier_source->construire_chemin($tt62[__xva][0]['T0.chx_dossier_id_source']);
                    
                    if($chemin_dossier_source[__xst] === __xsu){

                        $chemin_fichier_source=$chemin_dossier_source[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt62[__xva][0]['T0.chp_nom_source'];

                    }else{

                        $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $tt62[__xva][0]['T0.chx_dossier_id_source'] . ' [' . __LINE__ . ']';
                        return;
                    }

                    $chemin_dossier_cible=$obj_dossier_source->construire_chemin($donnees_recues[__xva]['chx_dossier_id_source']);
                    
                    if($chemin_dossier_cible[__xst] === __xsu){

                        $chemin_fichier_cible=$chemin_dossier_cible[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt62[__xva][0]['T0.chp_nom_source'];

                    }else{

                        $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $donnees_recues[__xva]['chx_dossier_id_source'] . ' [' . __LINE__ . ']';
                        return;
                    }

                    
                    if(copy($chemin_fichier_source,$chemin_fichier_cible)){


                    }else{

                        $donnees_retournees[__x_signaux][__xer][]='erreur sur la copie du fichier sur disque [' . __LINE__ . ']';
                        return;
                    }


                }

                
                if($page_liste_des_sources1 === true){

                    $this->page_liste_des_sources1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' la duplication a été effectuée en bdd';

            }else{

                $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune duplication efféctuée';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune duplication efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_sources_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues,true);
        */
        $page_liste_des_sources1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_sources1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_sources1=true;

            }

        }
        /*si l'utilisateur bidouille l'id dans l'interface*/
        $tt=/*sql_inclure_deb*/
            /* sql_62()
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
             /*sql_62()*/ 62,
            array(/**/
                'T0_chi_id_source' => $donnees_recues[__xva]['chi_id_source'],
                'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt[__xva][0] , true ) . '</pre>' ; exit(0);*/
            $tt=/*sql_inclure_deb*/
                /* sql_63()
                UPDATE b1.tbl_sources SET 
                   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
                   `chx_projet_id_source` = :n_chx_projet_id_source , 
                   `chp_nom_source` = :n_chp_nom_source , 
                   `cht_commentaire_source` = :n_cht_commentaire_source , 
                   `cht_rev_source` = :n_cht_rev_source , 
                   `cht_genere_source` = :n_cht_genere_source , 
                   `che_binaire_source` = :n_che_binaire_source
                WHERE (`chi_id_source` = :c_chi_id_source
                   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_63()*/ 63,
                array(
                    /**/
                    'c_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'c_chi_id_source' => $tt[__xva][0]['T0.chi_id_source'],
                    'n_cht_rev_source' => $donnees_recues[__xva]['cht_rev_source'],
                    'n_cht_genere_source' => $donnees_recues[__xva]['cht_genere_source'],
                    'n_chp_nom_source' => $donnees_recues[__xva]['chp_nom_source'],
                    'n_cht_commentaire_source' => $donnees_recues[__xva]['cht_commentaire_source'],
                    'n_chx_dossier_id_source' => $donnees_recues[__xva]['chx_dossier_id_source'],
                    'n_che_binaire_source' => $donnees_recues[__xva]['che_binaire_source']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $code_erreur=$tt['code_erreur']??0;
                
                if($code_erreur === 19){

                    $donnees_retournees[__x_signaux][__xer][]='il y a un doublon [' . __LINE__ . ']';

                }else{

                    $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification du source [' . __LINE__ . ',sql(' . $code_erreur . ')] ';
                }

                return;

            }else if($tt['changements'] === 1){

                
                if($page_liste_des_sources1 === true){

                    $this->page_liste_des_sources1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' la modification a été effectuée en bdd';

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
    function page_sources_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter un source <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_sources1.formulaire1(action1(page_liste_des_sources1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_sources_creer1">' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>dossier du source</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_dossier_id_source" />' . PHP_EOL;
        $o1 .= '        <span id="chx_dossier_id_source_libelle">*indéfini</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_dossier_id_source)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_dossier_id_source_libelle)';
        $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
        $parametre_sous_fenetre .= ')';
        $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
        $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
        $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>nom</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="nom du source" autocapitalize="off" id="chp_nom_source" value="" maxlength="64" style="width:80%;" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>binaire</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="range" id="che_binaire_source" class="yy_ouinon" name="che_binaire_source" min="0" max="1" step="1" value="0"  >';
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_sources1.formulaire1(conteneur1(vv_sources_creer1),page_liste_des_sources1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_sources1.formulaire1(conteneur1(vv_sources_creer1))" title="" >ajouter</div>';
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
    function page_sources_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . ' TODO $chi_id_source '.var_export($chi_id_source,true);
          return;
        */
        $o1='';
        $chi_id_source='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_source' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_source=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_source) && $chi_id_source > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_62()
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
                 /*sql_62()*/ 62,
                array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer une source <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_sources1.formulaire1(action1(page_liste_des_sources1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_sources_supprimer1">' . PHP_EOL;
                $o1 .= '   confirmez voous la suppression du source id=<b>' . $tt[__xva][0]['T0.chi_id_source'] . '</b> ';
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_source'] . '" id="chi_id_source" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_sources1.formulaire1(conteneur1(vv_sources_supprimer1),page_liste_des_sources1())" title="" >Je confirme la suppression</div>';
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
    function lire_ce_source_du_disque1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xdv][]='$mat =<pre>' . var_export( $mat  , true ) . '</pre>'; 
        */
        $chi_id_source=0;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_sources1.lire_ce_source_du_disque1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if('chi_id_source' === $mat[$j][1] && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_source=(int)($mat[$j + 1][1]);

                    }

                }

            }

        }
        
        if($chi_id_source > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_62()
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
                 /*sql_62()*/ 62,
                array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='les données n\'ont pas pu être récupérées pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            
            if($tt[__xva][0]['T0.chx_dossier_id_source'] === null){

                $donnees_retournees[__x_signaux][__xer][]='le dossier n\'est pas renseigné pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
            $chemin=$obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt[__xva][0]['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            $contenu=@file_get_contents($chemin_fichier);
            
            if($contenu !== false){

                $donnees_retournees[__xva]['contenu_du_fichier']=$contenu;
                $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(cht_genere_source),valeur_xva(contenu_du_fichier)))';
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xer][]='le source n\'a pu être lu du disque ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            /*
              $donnees_retournees[__x_signaux][__xdv][]='$mat =<pre>' . enti1(var_export( $tt[__xva][0]  , true )) . '</pre>'; // ['T0.cht_genere_source']
            */

        }

    }
    /*
      =============================================================================================================
    */
    function supprimer_ce_source_du_disque1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $chi_id_source=0;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_sources1.supprimer_ce_source_du_disque1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if('chi_id_source' === $mat[$j][1] && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_source=(int)($mat[$j + 1][1]);

                    }

                }

            }

        }
        /*
          $donnees_retournees[__x_signaux][__xdv][]='$mat =<pre>' . var_export( $chi_id_source  , true ) . '</pre>';
        */
        
        if($chi_id_source > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_62()
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
                 /*sql_62()*/ 62,
                array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='les données n\'ont pas pu être récupérées pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            
            if($tt[__xva][0]['T0.chx_dossier_id_source'] === null){

                $donnees_retournees[__x_signaux][__xer][]='le dossier n\'est pas renseigné pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
            $chemin=$obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt[__xva][0]['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            supprimer_fichier($chemin_fichier,false);
            $donnees_retournees[__x_signaux][__xsu][]='le source a bien été supprimé du disque [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;

        }else{

            $donnees_retournees[__x_signaux][__xer][]='le source n\'a pu être supprimé du le disque ' . $chi_id_source . ' [' . __LINE__ . ']';
            return;
        }

    }
    /*
      =============================================================================================================
    */
    function ecrire_ce_source_sur_disque1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xdv][]='$mat =<pre>' . var_export( $mat  , true ) . '</pre>'; 
        */
        $chi_id_source=0;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_sources1.ecrire_ce_source_sur_disque1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if('chi_id_source' === $mat[$j][1] && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_source=(int)($mat[$j + 1][1]);

                    }

                }

            }

        }
        /*
          $donnees_retournees[__x_signaux][__xdv][]='$mat =<pre>' . var_export( $chi_id_source  , true ) . '</pre>';
        */
        
        if($chi_id_source > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_62()
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
                 /*sql_62()*/ 62,
                array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='les données n\'ont pas pu être récupérées pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            
            if($tt[__xva][0]['T0.chx_dossier_id_source'] === null){

                $donnees_retournees[__x_signaux][__xer][]='le dossier n\'est pas renseigné pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
            $chemin=$obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt[__xva][0]['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            
            if($tt[__xva][0]['T0.cht_genere_source'] === null){

                $donnees_retournees[__x_signaux][__xer][]='le contenu généré est NULL, Veuillez enregistrer ce source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            
            if((@file_put_contents($chemin_fichier,$tt[__xva][0]['T0.cht_genere_source']))){

                $donnees_retournees[__x_signaux][__xsu][]='le source a bien été écrit sur disque [' . __LINE__ . ']';
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xer][]='le source n\'a pu être écrit sur le disque ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            /*
              $donnees_retournees[__x_signaux][__xdv][]='$mat =<pre>' . enti1(var_export( $tt[__xva][0]  , true )) . '</pre>'; // ['T0.cht_genere_source']
            */

        }else{

            $donnees_retournees[__x_signaux][__xer][]='le source n\'a pu être écrit sur le disque ' . $chi_id_source . ' [' . __LINE__ . ']';
            return;
        }

    }
    /*
      =============================================================================================================
    */
    function page_sources_dupliquer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xif][]='TODO $donnees_recues '.var_export($donnees_recues,true);
          return;
        */
        $o1='';
        $chi_id_source='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_source' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_source=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_source) && $chi_id_source > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_62()
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
                 /*sql_62()*/ 62,
                array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection du source[' . __LINE__ . ']';
                return;

            }

            $o1 .= '<h1>';
            $o1 .= 'dupliquer un source <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_sources1.formulaire1(action1(page_liste_des_sources1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
            $o1 .= '<div id="vv_sources_dupliquer1">' . PHP_EOL;
            /**/
            $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_source'] . '" id="chi_id_source" />' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>dossier</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_dossier_id_source']) . '"  id="chx_dossier_id_source" />' . PHP_EOL;
            $o1 .= '        <span id="chx_dossier_id_source_libelle">' . PHP_EOL;
            
            if($tt[__xva][0]['T0.chx_dossier_id_source'] === null){

                $o1 .= '*indéfini' . PHP_EOL;

            }else{

                
                if($tt[__xva][0]['T2.chp_nom_dossier'] === null){

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_id_source'] . ') rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_id_source'] . ') ' . htmlentities($tt[__xva][0]['T2.chp_nom_dossier']) . PHP_EOL;
                }

            }

            $o1 .= '</span>' . PHP_EOL;
            $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
            $parametre_sous_fenetre .= ' sans_menus1()';
            $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_dossier_id_source)';
            $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_dossier_id_source_libelle)';
            $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
            $parametre_sous_fenetre .= ')';
            $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
            $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
            $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <div class="hug_bouton" data-hug_click="c_sources1.formulaire1(conteneur1(vv_sources_dupliquer1),chi_id_source(' . $chi_id_source . '),page_liste_des_sources1())" title="" >dupliquer et revenir à la liste</div>';
            $o1 .= '      <div class="hug_bouton" data-hug_click="c_sources1.formulaire1(conteneur1(vv_sources_dupliquer1),chi_id_source(' . $chi_id_source . '))" title="" >dupliquer</div>';
            $o1 .= '    </div>' . PHP_EOL;
            /**/
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
    function page_sources_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xif][]='TODO $donnees_recues '.var_export($donnees_recues,true);
          return;
        */
        $o1='';
        $chi_id_source='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_source' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_source=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_source) && $chi_id_source > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_62()
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
                 /*sql_62()*/ 62,
                array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection du source[' . __LINE__ . ']';
                return;

            }

            $o1 .= '<h1>';
            $o1 .= 'modifier un source <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_sources1.formulaire1(action1(page_liste_des_sources1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
            $o1 .= '<div id="vv_sources_modifier1">' . PHP_EOL;
            /**/
            $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_source'] . '" id="chi_id_source" />' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>id</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <b>' . $chi_id_source . '</b>  ' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>nom du source</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <input type="text" id="chp_nom_source" value="' . enti1($tt[__xva][0]['T0.chp_nom_source']) . '" autocapitalize="off" />' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>binaire</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <input type="range" id="che_binaire_source" class="yy_ouinon" name="che_binaire_source" min="0" max="1" step="1" value="' . enti1($tt[__xva][0]['T0.che_binaire_source']) . '"  >';
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>dossier</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_dossier_id_source']) . '"  id="chx_dossier_id_source" />' . PHP_EOL;
            $o1 .= '        <span id="chx_dossier_id_source_libelle">' . PHP_EOL;
            
            if($tt[__xva][0]['T0.chx_dossier_id_source'] === null){

                $o1 .= '*indéfini' . PHP_EOL;

            }else{

                
                if($tt[__xva][0]['T2.chp_nom_dossier'] === null){

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_id_source'] . ') rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_id_source'] . ') ' . htmlentities($tt[__xva][0]['T2.chp_nom_dossier']) . PHP_EOL;
                }

            }

            $o1 .= '</span>' . PHP_EOL;
            $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
            $parametre_sous_fenetre .= ' sans_menus1()';
            $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_dossier_id_source)';
            $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_dossier_id_source_libelle)';
            $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
            $parametre_sous_fenetre .= ')';
            $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
            $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
            $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>rev</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            /**/
            $o1 .= '    <div>' . PHP_EOL;
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_rev_source)))" title="formater le source rev" >(😊)</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(insérer_un_commentaire1(zone_source(cht_rev_source)))" title="insérer un commentaire" >#(😎)</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_rev_source)))" title="agrandir la zone" >🖐</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_rev_source)))" title="retrecir la zone" >👊</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_rev_source)))" title="vider la zone" >🚫</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_rev_source)))" title="copier le contenu" >📋</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_rev_source)))" title="aller à la position" >position</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_rev_source)))" title="aller à la ligne" >ligne</div>';
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="cht_rev_source" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_rev_source']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>généré</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            /**/
            $o1 .= '    <div style="padding-right:var(--t_boutons_carres);">' . PHP_EOL;
            
            if(substr($tt[__xva][0]['T0.chp_nom_source'],-4) === '.htm' || substr($tt[__xva][0]['T0.chp_nom_source'],-5) === '.html'){

                $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(rev_vers_html1(zone_source(cht_rev_source),zone_resultat(cht_genere_source)))" title="convertir en html" >Rev->Html↧</div>';
                $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(html1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0)))" title="convertir en rev">↥Html->Rev</div>';

            }else if(substr($tt[__xva][0]['T0.chp_nom_source'],-4) === '.php'){

                $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(rev_vers_php1(zone_source(cht_rev_source),zone_resultat(cht_genere_source)))" title="convertir en php" >R2P↧</div>';
                /**/
                $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(php1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0),options(nettoyer_html(true))))" title="->rev parseur">↥P2R</div>';
                $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(php1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0),options(nettoyer_html(false))))" title="->rev parseur">↥P2R</div>';
                $o1 .= '        <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(php2_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0),options(nettoyer_html(true))))" title="->rev nikic">↥P2R</div>';
                $o1 .= '        <div class="hug_bouton yy__x_signaux_4" data-hug_click="c_fonctions_js1(php2_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0),options(nettoyer_html(false))))" title="->rev nikic">↥P2R</div>';

            }else if(substr($tt[__xva][0]['T0.chp_nom_source'],-3) === '.js'){

                $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(rev_vers_js1(zone_source(cht_rev_source),zone_resultat(cht_genere_source)))" title="convertir en js">↥Rev->Sql↧</div>';
                $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(js1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0)))" title="convertir en rev" >↥↥Js->Rev</div>';

            }else if(substr($tt[__xva][0]['T0.chp_nom_source'],-4) === '.sql'){

                $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(rev_vers_sql1(zone_source(cht_rev_source),zone_resultat(cht_genere_source)))" title="convertir en sql">Rev->Sql↧</div>';
                $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(sql1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0)))" title="convertir en rev" >↥Sql->Rev</div>';

            }else if(substr($tt[__xva][0]['T0.chp_nom_source'],-4) === '.css'){

                $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(rev_vers_css1(zone_source(cht_rev_source),zone_resultat(cht_genere_source)))" title="convertir en Css">Rev->Css↧</div>';
                $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(css1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0)))" title="convertir en rev" >↥Css->Rev</div>';

            }else{

                $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(rev_vers_texte1(zone_source(cht_rev_source),zone_resultat(cht_genere_source)))" title="convertir en texte">Rev->Texte↧</div>';
                $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(texte1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),mettre_en_stockage_local(0)))" title="convertir en rev" >↥Texte->Rev</div>';
            }

            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_genere_source)))" title="agrandir la zone" >🖐</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_genere_source)))" title="retrecir la zone" >👊</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_genere_source)))" title="vider la zone" >🚫</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_genere_source)))" title="copier le contenu" >📋</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_genere_source)))" title="aller à la position" >position</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_genere_source)))" title="aller à la ligne" >ligne</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" style="float:right;" data-hug_click="c_sources1.lire_ce_source_du_disque1(chi_id_source(' . $chi_id_source . '))" title="lire du disque" >lire du disque</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" style="float:right;" data-hug_click="c_sources1.ecrire_ce_source_sur_disque1(chi_id_source(' . $chi_id_source . '))" title="écrire sur disque" >écrire sur disque</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_0" style="float:right;" data-hug_click="c_sources1.supprimer_ce_source_du_disque1(chi_id_source(' . $chi_id_source . '))" title="supprimer du disque" >supprimer du disque</div>';
            
            if(__X_CLE_APPLICATION === 'rev_2'){

                
                if($tt[__xva][0]['T0.chp_nom_source'] !== '__definitions.php'){

                    $o1 .= '        <div class="hug_bouton yy__x_signaux___xdv" style="float:right;"  data-hug_click="c_sources1.importer_de_rev_un(chi_id_source(' . $chi_id_source . '))" >importer de 1</div>';

                }


            }

            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="cht_genere_source" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_genere_source']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>commentaire</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="cht_commentaire_source" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_commentaire_source']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <div class="hug_bouton" data-hug_click="c_sources1.formulaire1(conteneur1(vv_sources_modifier1),chi_id_source(' . $chi_id_source . '),page_liste_des_sources1())" title="" >enregistrer et revenir à la liste</div>';
            $o1 .= '      <div class="hug_bouton" data-hug_click="c_sources1.formulaire1(conteneur1(vv_sources_modifier1),chi_id_source(' . $chi_id_source . '))" title="" >enregistrer</div>';
            $o1 .= '    </div>' . PHP_EOL;
            /**/
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
    function enregistrer_un_source_compile1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xdv][]='<pre>'.var_export( $donnees_recues , true ).'</pre> [' . __LINE__ . ']';*/
        $pas_de_message_de_succes=$donnees_recues['pas_de_message_de_succes']??0;
        
        if(__X_CLE_APPLICATION === 'rev' . '_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            /*
              pas besoin de mettre le source pour le projet 1
            */
            $source_compile='';
            $rev_du_disque='';

        }else{

            $source_compile=$donnees_recues[__xva]['source_compile'];
            $rev_du_disque=$donnees_recues[__xva]['rev_du_disque'];
        }

        
        if($donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source'] === null){

            /*on a compilé le rev uniquement on enregistre le source */
            $tt=/*sql_inclure_deb*/
                /* sql_63()
                UPDATE b1.tbl_sources SET 
                   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
                   `chx_projet_id_source` = :n_chx_projet_id_source , 
                   `chp_nom_source` = :n_chp_nom_source , 
                   `cht_commentaire_source` = :n_cht_commentaire_source , 
                   `cht_rev_source` = :n_cht_rev_source , 
                   `cht_genere_source` = :n_cht_genere_source , 
                   `che_binaire_source` = :n_che_binaire_source
                WHERE (`chi_id_source` = :c_chi_id_source
                   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_63()*/ 63,
                array(/**/
                    'c_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'c_chi_id_source' => $donnees_recues[__xva]['contenu_bdd']['T0.chi_id_source'],
                    'n_cht_genere_source' => $source_compile
                ),
                $donnees_retournees
            );

        }else{

            /*on a compilé le source sur disque on enregistre aussi le rev */
            $tt=/*sql_inclure_deb*/
                /* sql_63()
                UPDATE b1.tbl_sources SET 
                   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
                   `chx_projet_id_source` = :n_chx_projet_id_source , 
                   `chp_nom_source` = :n_chp_nom_source , 
                   `cht_commentaire_source` = :n_cht_commentaire_source , 
                   `cht_rev_source` = :n_cht_rev_source , 
                   `cht_genere_source` = :n_cht_genere_source , 
                   `che_binaire_source` = :n_che_binaire_source
                WHERE (`chi_id_source` = :c_chi_id_source
                   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_63()*/ 63,
                array(
                    /**/
                    'c_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'c_chi_id_source' => $donnees_recues[__xva]['contenu_bdd']['T0.chi_id_source'],
                    'n_cht_genere_source' => $source_compile,
                    'n_cht_rev_source' => $rev_du_disque
                ),
                $donnees_retournees
            );
        }

        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de l\'enregistrement du source [' . __LINE__ . ']';
            return;

        }

        
        if($donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source'] === null){

            $donnees_retournees[__x_signaux][__xif][]='le rev du source a bien été compilé [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            return;

        }else{

            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
            $chemin=$obj_doss->construire_chemin($donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $donnees_recues[__xva]['contenu_bdd']['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            
            if((@file_put_contents($chemin_fichier,$donnees_recues[__xva]['source_compile']))){

                
                if($GLOBALS[DEVER_SRV] >= 1){

                    
                    if($pas_de_message_de_succes === 1){

                        $donnees_retournees[__x_signaux][__xsu][]='le source du disque a bien été compilé et réécrit [' . __LINE__ . ']';

                    }


                }

                
                if(isset($donnees_recues[__xva]['bouton_compiler']) && $donnees_recues[__xva]['bouton_compiler'] !== ''){

                    $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(' . $donnees_recues[__xva]['bouton_compiler'] . '),classNameSet(\'hug_bouton yy__x_signaux_1\')))';

                }

                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xal][]='le source a bien été enregistré mais n\'a pas pu être écrit sur disque [' . __LINE__ . ']';
            }

        }

        
        if(!(isset($donnees_recues[__xva]['ne_pas_enregistrer_la_matrice'])
               && $donnees_recues[__xva]['ne_pas_enregistrer_la_matrice'] === __xsu)
        ){

            $this->sauvegarder_une_matrice_de_source($donnees_retournees,$mat,$donnees_recues);

        }

    }
    /*
      =============================================================================================================
    */
    public function sauvegarder_une_matrice_de_source(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* suppression des anciennes données de la table rev */
        $tt=/*sql_inclure_deb*/
            /* sql_5()
            DELETE FROM b1.tbl_revs
            WHERE (`chx_projet_rev` = :chx_projet_rev
               AND `chp_provenance_rev` = :chp_provenance_rev
               AND `chx_source_rev` = :chx_source_rev) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_5()*/ 5,
            array(/**/
                'chx_projet_rev' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'chp_provenance_rev' => 'source',
                'chx_source_rev' => $donnees_recues[__xva]['chi_id_source']
            ),
            $donnees_retournees
        );
        
        if(__X_CLE_APPLICATION === 'rev' . '_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=' supprimer le false plus haut  [' . __LINE__ . ']';
        */
        
        if($donnees_recues[__xva]['matrice_source'] === null){

            $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($donnees_recues[__xva]['rev_du_disque']);
            
            if($obj_matrice[__xst] === __xsu){

                $matrice=$obj_matrice[__xva];
                $donnees_retournees[__x_signaux][__xal][]=' la matrice est trop grosse pour être passé en POST :<br />conversion dans le php (' . count($matrice) . ') [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__x_signaux][__xal][]=' erreur de convertion en matrice [' . __LINE__ . ']';
                return;
            }


        }else{

            $matrice=$donnees_recues[__xva]['matrice_source'];
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $id_requete =  ' . $id_requete . '<pre> ' . var_export(  $matrice , true ) . '</pre>' ; exit(0);*/
        $a_sauvegarder=array();
        for( $i=0 ; $i < count($matrice) ; $i++ ){
            
            /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev*/
            $a_sauvegarder[]=array(
                'chx_projet_rev' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'chp_provenance_rev' => 'source',
                'chx_source_rev' => $donnees_recues[__xva]['chi_id_source'],
                'chp_id_rev' => $matrice[$i][0],
                'chp_valeur_rev' => str_replace('¶' . 'LF¶',"\n",$matrice[$i][1]),
                'chp_type_rev' => $matrice[$i][2],
                'chp_niveau_rev' => $matrice[$i][3],
                'chp_quotee_rev' => $matrice[$i][4],
                'chp_pos_premier_rev' => $matrice[$i][5],
                'chp_pos_dernier_rev' => $matrice[$i][6],
                'chp_parent_rev' => $matrice[$i][7],
                'chp_nbr_enfants_rev' => $matrice[$i][8],
                'chp_num_enfant_rev' => $matrice[$i][9],
                'chp_profondeur_rev' => $matrice[$i][10],
                'chp_pos_ouver_parenthese_rev' => $matrice[$i][11],
                'chp_enfant_suivant_rev' => $matrice[$i][12],
                'chp_commentaire_rev' => $matrice[$i][13]
            );
        }
        $tt=/*sql_inclure_deb*/
            /* sql_12()
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
             /*sql_12()*/ 12,
            $a_sauvegarder,
            $donnees_retournees
        );
    }
    /*
      =============================================================================================================
      ne fonctionne pas, à voir
    */
    function lancer_notepad(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          // ceci lance notepad en arrière plan
          $pp=popen("start /max notepad.exe", "r");
          if($pp===false){
          $donnees_retournees[__x_signaux][__xal][]='  [' . __LINE__ . ']';
          return;
          }else{
          pclose($pp);
          }
        */
        /*
          // ceci lance notepad en arrière plan
          $pp=popen("start /B notepad.exe", "r");
          if($pp===false){
          $donnees_retournees[__x_signaux][__xal][]='  [' . __LINE__ . ']';
          return;
          }else{
          pclose($pp);
          }
        */
        /*# KO
          $pp=popen("start calc.exe", "r");
          if($pp===false){
              $donnees_retournees[__x_signaux][__xal][]='  [' . __LINE__ . ']';
              return;
          }else{
            pclose($pp);
          }
        */
        /*
          // KO
          exec('calc.exe');
        */
        /*
          
        */
        /*
          $command = 'notepad.exe';
          $escaped_command = escapeshellcmd($command);
          system($escaped_command);
        */
        /* bloque l'éxécution */
        /*
          shell_exec["notepad.exe"]; // 2>/dev/null >/dev/null &"];
        */
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function compiler_source1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $chi_id_source=0;
        $bouton_compiler='';
        $pas_de_message_de_succes=0;
        $l01=count($mat);
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_sources1.compiler_source1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        /* $donnees_retournees[__x_signaux][__xdv][]='$mat[$j][1] ='.json_encode( $mat[$j][1] . ' ' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/
                        
                        if($mat[$j][1] === 'chi_id_source'){

                            $chi_id_source=$mat[$j + 1][1];

                        }else if($mat[$j][1] === 'bouton_compiler'){

                            $bouton_compiler=$mat[$j + 1][1];

                        }else if($mat[$j][1] === 'pas_de_message_de_succes'){

                            $pas_de_message_de_succes=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        
        if($chi_id_source > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_62()
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
                 /*sql_62()*/ 62,
                array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $contenu_disque='';
                
                if($tt[__xva][0]['T0.chx_dossier_id_source'] !== null){

                    require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
                    $obj_doss=new c_dossiers1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );
                    $chemin=$obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_source']);
                    
                    if($chemin[__xst] === __xsu){

                        $chemin_fichier=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt[__xva][0]['T0.chp_nom_source'];

                    }else{

                        $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                        return;
                    }

                    $contenu_disque=@file_get_contents($chemin_fichier);

                }

                $donnees_retournees[__xva]['ne_pas_retablir_les_elements_masques']=__xsu;
                $donnees_retournees[__xva]['contenu_disque']=$contenu_disque;
                $donnees_retournees[__xva]['contenu_bdd']=$tt[__xva][0];
                $donnees_retournees[__xva]['bouton_compiler']=$bouton_compiler;
                $donnees_retournees[__xva]['pas_de_message_de_succes']=$pas_de_message_de_succes;
                $donnees_retournees[__x_action]='c_fonctions_js1(compiler_source1(chi_id_source(' . $chi_id_source . ')))';
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sql 62 pour $chi_id_source=' . $chi_id_source . ' [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='entrée bdd non trouvé $chi_id_source=' . $chi_id_source . ' [' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    function exporter_dans_rev_un(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        $chi_id_source=0;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_sources1.exporter_dans_rev_un' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        /* $donnees_retournees[__x_signaux][__xdv][]='$mat[$j][1] ='.json_encode( $mat[$j][1] . ' ' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/
                        
                        if($mat[$j][1] === 'chi_id_source'){

                            $chi_id_source=$mat[$j + 1][1];

                        }


                    }

                }

            }

        }
        
        if($chi_id_source === 0){

            $donnees_retournees[__x_signaux][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
            return;

        }

        $chemin_fichier_source='';
        $tt62=/*sql_inclure_deb*/
            /* sql_62()
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
             /*sql_62()*/ 62,
            array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt62[__xst] === __xsu){

            $contenu_disque='';
            
            if($tt62[__xva][0]['T0.chx_dossier_id_source'] !== null){

                require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
                $obj_doss=new c_dossiers1(
                    $donnees_retournees,
                     /*matrice*/ $mat,
                    $donnees_recues
                );
                $chemin=$obj_doss->construire_chemin($tt62[__xva][0]['T0.chx_dossier_id_source']);
                
                if($chemin[__xst] === __xsu){

                    $chemin_fichier_source=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt62[__xva][0]['T0.chp_nom_source'];

                }else{

                    $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                    return;
                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
                return;
            }


        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=' ' . $chemin_fichier_source . ' [' . __LINE__ . ']';
        */
        $rep_destin=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . '1';
        $rep_source=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . '2';
        $chemin_fichier_destin=str_replace($rep_source,$rep_destin,$chemin_fichier_source);
        /*
          
          $donnees_retournees[__x_signaux][__xal][]=' ' . $chemin_fichier_source . ' ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';
          
        */
        
        if(!copy($chemin_fichier_source,$chemin_fichier_destin)){

            $donnees_retournees[__x_signaux][__xer][]=' erreur de copie de ' . $chemin_fichier_source . ' vers ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';

        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function importer_de_rev_un(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        $chi_id_source=0;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_sources1.importer_de_rev_un' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        /* $donnees_retournees[__x_signaux][__xdv][]='$mat[$j][1] ='.json_encode( $mat[$j][1] . ' ' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/
                        
                        if($mat[$j][1] === 'chi_id_source'){

                            $chi_id_source=$mat[$j + 1][1];

                        }


                    }

                }

            }

        }
        
        if($chi_id_source === 0){

            $donnees_retournees[__x_signaux][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
            return;

        }

        $chemin_fichier_destin='';
        $tt62=/*sql_inclure_deb*/
            /* sql_62()
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
             /*sql_62()*/ 62,
            array( 'T0_chi_id_source' => $chi_id_source, 'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt62[__xst] === __xsu){

            $contenu_disque='';
            
            if($tt62[__xva][0]['T0.chx_dossier_id_source'] !== null){

                require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
                $obj_doss=new c_dossiers1(
                    $donnees_retournees,
                     /*matrice*/ $mat,
                    $donnees_recues
                );
                $chemin=$obj_doss->construire_chemin($tt62[__xva][0]['T0.chx_dossier_id_source']);
                
                if($chemin[__xst] === __xsu){

                    $chemin_fichier_destin=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt62[__xva][0]['T0.chp_nom_source'];

                }else{

                    $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                    return;
                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
                return;
            }


        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=' ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';
        */
        $rep_destin=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . '2';
        $rep_source=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . '1';
        $chemin_fichier_source=str_replace($rep_destin,$rep_source,$chemin_fichier_destin);
        /*
          
          $donnees_retournees[__x_signaux][__xal][]=' ' . $chemin_fichier_source . ' ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';
          
        */
        
        if(!copy($chemin_fichier_source,$chemin_fichier_destin)){

            $donnees_retournees[__x_signaux][__xer][]=' erreur de copie de ' . $chemin_fichier_source . ' vers ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';

        }

        $donnees_retournees[__xst]=__xsu;
    }
    
    /*
      =============================================================================================================
      Pour les iframes sur les sources
      =============================================================================================================
    */
    function vv_sources_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_sources1.page_sources_sous_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_sources1.page_sources_sous_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_sources_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function page_sources_sous_liste1(&$donnees_retournees,&$mat,&$donnees_recues){
        $fonction1='c_sources1.page_sources_sous_liste1';
        /* déverminage */
        $__nbMax=10;
        
//        $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $mat '.var_export($mat,true);
        
        $par=array();
        $par['nom_champ_dans_parent1']='';
        $par['nom_libelle_dans_parent1']='';
        $par['T0_chi_id_source']='';
        $par['T0_chp_nom_source']='';
        $par['T0_chx_dossier_id_source']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
//        $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );
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
        
//        $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $par_mat '.var_export($par_mat,true);

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

        $par['T0_chi_id_source']=$par['T0_chi_id_source']??'';
        $par['T0_chp_nom_source']=$par['T0_chp_nom_source']??'';
        $par['T0_chx_dossier_id_source']=$par['T0_chx_dossier_id_source']??'';
        $par['nom_champ_dans_parent1']=$par_mat['nom_champ_dans_parent1']??'';
        $par['nom_libelle_dans_parent1']=$par_mat['nom_libelle_dans_parent1']??'';
        
        
        $nom_filtre='vv_sources_filtre_choix_1';
        $o1='<h1>choisir un source parent</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_source" value="' . $par['T0_chp_nom_source'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chp_nom_source'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chp_nom_source),value(\'\'))),c_sources1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_source" value="' . $par['T0_chi_id_source'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id dossier</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chx_dossier_id_source" value="' . $par['T0_chx_dossier_id_source'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_sources1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_champ_dans_parent1" value="' . $par['nom_champ_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_libelle_dans_parent1" value="' . $par['nom_libelle_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=$this->sql0->sql_iii(
             /*sql_61()*/ 61,
             array(/**/ 
                      'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                      'T0_chi_id_source' => $par['T0_chi_id_source'] === '' ? '' : $par['T0_chi_id_source'],
                      'T0_chx_dossier_id_source' => $par['T0_chx_dossier_id_source'] === '' ? '' : $par['T0_chx_dossier_id_source'],
                      'T0_chp_nom_source' => $par['T0_chp_nom_source'] === '' ? '' : '' . $par['T0_chp_nom_source'] . '',
                      'quantitee' => $__nbMax,
                      'debut' => $__debut
                      
                  ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des sources [' . __LINE__ . ']';
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
        $lsttbl .= '<th>source</th>';
        $lsttbl .= '<th>dossier</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $parametres='';
            $parametres .= 'interface1.choisir_dans_sous_fenetre1(';
            $parametres .= '    nom_champ_dans_parent1('.$par['nom_champ_dans_parent1'].')';
            $parametres .= '    nom_libelle_dans_parent1('.$par['nom_libelle_dans_parent1'].')';
            $parametres .= '    id1(' . $v0['T0.chi_id_source'] . ')';
            $parametres .= '    libelle1("(' . $v0['T0.chi_id_source'] . ') ' . $v0['T0.chp_nom_source'] . '" )';
            $parametres .= ')';
            $lsttbl .= '<td style="max-width:calc(1*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="' . htmlentities($parametres) . '">=&gt;</div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_source'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chp_nom_source'] !== null){

                $lsttbl .= '' . enti1($v0['T0.chp_nom_source']) . '';

            }

            $lsttbl .= '</td>';
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '(' . enti1($v0['T0.chx_dossier_id_source']) . ') ' . enti1($v0['T1.chp_nom_dossier']) . '';
            $lsttbl .= '</td>';

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
    function page_liste_des_sources1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $__nbMax=20;
        $par=array();
        $par['T0_chi_id_source']='';
        $par['T0_chx_dossier_id_source']='';
        $par['T0_chp_nom_source']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_sources1.page_liste_des_sources1' === $mat[$i][1]){

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
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_sources1.page_liste_des_sources1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_sources1.page_liste_des_sources1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_sources1.page_liste_des_sources1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            
            if(!isset($par['T0_chi_id_source'])){

                $par['T0_chi_id_source']='';

            }

            
            if(!isset($par['T0_chx_dossier_id_source'])){

                $par['T0_chx_dossier_id_source']='';

            }

            
            if(!isset($par['T0_chp_nom_source'])){

                $par['T0_chp_nom_source']='';

            }

            $_SESSION[__X_CLE_APPLICATION]['c_sources1.page_liste_des_sources1']=$par;
        }

        $par['T0_chi_id_source']=$par['T0_chi_id_source']??'';
        $fonction1='c_sources1.page_liste_des_sources1';
        $nom_filtre='vv_sources_filtre1';
        $o1='<h1>Liste des sources</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_source" value="' . $par['T0_chi_id_source'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chp_nom_source" value="' . $par['T0_chp_nom_source'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id dossier</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chx_dossier_id_source" value="' . $par['T0_chx_dossier_id_source'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_sources1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_61()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , 
            `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (`T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
               AND `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
               AND `T0`.`chp_nom_source` LIKE :T0_chp_nom_source) 
            ORDER BY `T0`.`chi_id_source` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_61()*/ 61,
            array(
                'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'T0_chi_id_source' => $par['T0_chi_id_source'] === '' ? '' : $par['T0_chi_id_source'],
                'T0_chx_dossier_id_source' => $par['T0_chx_dossier_id_source'] === '' ? '' : $par['T0_chx_dossier_id_source'],
                'T0_chp_nom_source' => $par['T0_chp_nom_source'] === '' ? '' : '' . $par['T0_chp_nom_source'] . '',
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des sources [' . __LINE__ . ']';
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $tt '.var_export($tt,true);
        */
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_sources1.formulaire1(action1(page_sources_creer1),chi_id_source(0))" title="nouvelle source" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>nom</th>';
        $lsttbl .= '<th>(id dossier) / dossier</th>';
        $lsttbl .= '<th>binaire</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_sources1.formulaire1(action1(page_sources_modifier1),chi_id_source(' . $v0['T0.chi_id_source'] . '))" >✎</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xer" data-hug_click="c_sources1.formulaire1(action1(page_sources_supprimer1),chi_id_source(' . $v0['T0.chi_id_source'] . '))" >🗑</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_sources1.formulaire1(action1(page_sources_dupliquer1),chi_id_source(' . $v0['T0.chi_id_source'] . '))" title="dupliquer dans un autre répertoire" >⎘</div>';
            
            if($v0['T0.che_binaire_source'] === 1){

                $lsttbl .= '  <div class="hug_bouton_inactif" >compiler</div>';

            }else{


                if(__X_CLE_APPLICATION === 'rev_1' && $v0['T0.chx_dossier_id_source']>=9 ){
                    $lsttbl .= '  <div class="hug_bouton_inactif" >compiler</div>';
                }else{
                    $lsttbl .= '  <div id="vv_bouton_compiler_' . $v0['T0.chi_id_source'] . '" class="hug_bouton yy__x_signaux___xdv" data-hug_click="c_sources1.compiler_source1(chi_id_source(' . $v0['T0.chi_id_source'] . '),bouton_compiler(vv_bouton_compiler_' . $v0['T0.chi_id_source'] . '),pas_de_message_de_succes(1))" >compiler</div>';

                }
            }

            
            if(__X_CLE_APPLICATION === 'rev_2'){

                
                if($v0['T0.chp_nom_source'] === '__definitions.php'){

                    $lsttbl .= '  <div class="hug_bouton_inactif"  >importer de 1</div>';

                }else{

                    $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xdv" data-hug_click="c_sources1.importer_de_rev_un(chi_id_source(' . $v0['T0.chi_id_source'] . '))" >importer de 1</div>';
                    $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xer" data-hug_click="c_sources1.exporter_dans_rev_un(chi_id_source(' . $v0['T0.chi_id_source'] . '))" >exporter dans 1</div>';
                }


            }

            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_source'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . $v0['T0.chp_nom_source'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chx_dossier_id_source'] === null){

                $lsttbl .= '<b>pas de dossier assigné</b>';

            }else{

                
                if($v0['T1.chp_nom_dossier'] === ''){

                    $lsttbl .= '(' . $v0['T0.chx_dossier_id_source'] . ') <b>[rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . ']</b>';

                }else{

                    $lsttbl .= '(' . $v0['T0.chx_dossier_id_source'] . ') ' . $v0['T1.chp_nom_dossier'] . '';
                }

            }

            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . $v0['T0.che_binaire_source'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_sources1.page_liste_des_sources1()';
        $donnees_retournees[__xst]=__xsu;
    }
}