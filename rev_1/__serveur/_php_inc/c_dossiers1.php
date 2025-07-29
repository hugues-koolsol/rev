<?php
class c_dossiers1{
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
      traitement des formulaires des dossiers
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_dossiers1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_dossiers_modifier1'
                       || $action1 === 'page_dossiers_creer1'
                       || $action1 === 'page_dossiers_supprimer1'
                       || $action1 === 'page_dossiers_liste1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_dossiers_modifier1'
                   || $conteneur1 === 'vv_dossiers_creer1'
                   || $conteneur1 === 'vv_dossiers_supprimer1'
                   || $conteneur1 === 'vv_dossiers_filtre1'
                   || $conteneur1 === 'vv_dossiers_filtre_choix_1'
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
    function tester_arbre_dossier($nom_de_dossier,$chx_parent_dossier,$id_actuel=null){
        
        if($nom_de_dossier == ''){

            return array( __xst => __xer, __xme => 'le nom de dossier ne doit pas être vide');

        }

        for( $i=0 ; $i < strlen($nom_de_dossier) ; $i++ ){
            
            $c=substr($nom_de_dossier,$i,1);
            
            if($c >= 'a' && $c <= 'z' || $c === '_' || $c >= '0' && $c <= '9'){


            }else{

                return array( __xst => __xer, __xme => 'le nom de dossier doit comporter que les caractères minuscules entre a et z ou bien le caractère souligné "_" ');
            }

        }
        
        if($chx_parent_dossier === null
           || $chx_parent_dossier === 0
           || $chx_parent_dossier === ''
           || !is_numeric($chx_parent_dossier)
        ){

            return array( __xst => __xer, __xme => 'un dossier parent doit être indiqué [' . __LINE__ . ']');

        }

        
        if($id_actuel === $chx_parent_dossier){

            return array( __xst => __xer, __xme => 'un dossier ne peut être déplacé dans lui même [' . __LINE__ . ']');

        }

        /*#
          en modification
          4 a
           5 b 
            6 c
             7 d
          b(5=$id_actuel) ne peut être mis sous c(6=$chx_parent_dossier) ou  sous d(7=$chx_parent_dossier)
        */
        
        if($id_actuel !== null){

            /* 2*/
            $id_actuel=(int)($id_actuel);
            /*
              il faut vérifier que $chx_parent_dossier n'est pas sous $id_actuel 
              => on remonte les parents de chx_parent_dossier et si on trouve $id_actuel ==> bug
              on s'arrête quand chx_parent_dossier = null
            */
            $tt=/*sql_inclure_deb*/
                /* sql_150()
                SELECT 
                `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
                `T0`.`che_contient_genere_dossier`
                 FROM b1.tbl_dossiers T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                
                WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
                   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_150()*/ 150,
                array(/**/
                    'T0_chi_id_dossier' => $chx_parent_dossier,
                    'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            $continuer=100;
            do{
                $continuer--;
                
                if($tt[__xst] === __xsu){

                    
                    if($tt[__xva][0]['T0.chx_parent_dossier'] === $id_actuel){

                        $continuer=0;
                        return array( __xst => __xer, __xme => 'un dossier ne peut être déplacé sous un de ses enfants [' . __LINE__ . ']');

                    }else{

                        
                        if($tt[__xva][0]['T0.chx_parent_dossier'] === null){

                            $continuer=0;
                            break;

                        }else{

                            $tt=/*sql_inclure_deb*/
                                /* sql_150()
                                SELECT 
                                `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
                                `T0`.`che_contient_genere_dossier`
                                 FROM b1.tbl_dossiers T0
                                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                                
                                WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
                                   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
                                ;
                                */
                                /*sql_inclure_fin*/
                                $this->sql0->sql_iii(150,array( 'T0_chi_id_dossier' => $tt[__xva][0]['T0.chx_parent_dossier'], 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),$donnees_retournees);
                        }

                    }


                }else{

                    return array( __xst => __xer, __xme => 'problème sur les dossiers parents [' . __LINE__ . ']');
                }

            }while($continuer > 0);

        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function vv_dossiers_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);
        */
        /*
          <>:"/\|?*^, 
          ., ..
          Filenames cannot end in a space or dot.
          CON, PRN, AUX, NUL , COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9,LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9
          
          $donnees_recues[__xva]['chp_nom_dossier']
          
        */
        $obj=$this->tester_arbre_dossier($donnees_recues[__xva]['chp_nom_dossier'],$donnees_recues[__xva]['chx_parent_dossier'],null);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=$obj[__xme];
            return;

        }

        $page_dossiers_liste1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_dossiers_liste1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_dossiers_liste1=true;

            }

        }
        $donnees_retournees[__xst]=__xsu;
        $donnees_sql=array( array(/**/
                    'chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'chp_nom_dossier' => $donnees_recues[__xva]['chp_nom_dossier'],
                    'chx_parent_dossier' => $donnees_recues[__xva]['chx_parent_dossier'] === '' ? null : $donnees_recues[__xva]['chx_parent_dossier']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=/*sql_inclure_deb*/
            /* sql_137()
            / ***meta(sur_base_de_reference(1))*** /
            
            INSERT INTO b1.`tbl_dossiers`(
                `chx_projet_dossier` , 
                `chp_nom_dossier` , 
                `chx_parent_dossier`
            ) VALUES (
                :chx_projet_dossier , 
                :chp_nom_dossier , 
                :chx_parent_dossier
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_137()*/ 137,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $code_erreur=$tt['code_erreur']??0;
            
            if($code_erreur === 19){

                $donnees_retournees[__x_signaux][__xer][]=' Ce dossier existe déjà [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de la création de ce dossier [' . __LINE__ . ',sql(' . $code_erreur . ')] ';
            }

            return;

        }else if($tt['changements'] === 1){

            $obj=$this->construire_chemin($tt['nouvel_id']);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__x_signaux][__xal][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';

            }

            $dossier_absolu=$obj['__xva']['chemin_absolu'];
            /*
              ici la création effective
            */
            /* $donnees_retournees[__x_signaux][__xer][]=$dossier_absolu;*/
            /* return;*/
            
            if(is_dir($dossier_absolu)){

                $donnees_retournees[__x_signaux][__xal][]='Le dossier ' . $donnees_recues[__xva]['chp_nom_dossier'] . ' existe déjà sur disque [' . __LINE__ . ']';

            }else{

                
                if((@mkdir($dossier_absolu))){


                }else{

                    $donnees_retournees[__x_signaux][__xal][]='Le dossier n\\a pas pu être créé sur disque [' . __LINE__ . ']';
                }

            }

            
            if($page_dossiers_liste1 === true){

                $this->page_dossiers_liste1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_dossier(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_dossiers_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_dossiers1.formulaire1(action1(page_dossiers_modifier1),chi_id_dossier(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
      Pour les iframes sur les dossiers
      =============================================================================================================
    */
    function vv_dossiers_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_dossiers1.page_dossiers_sous_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_dossiers1.page_dossiers_sous_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_dossiers_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_dossiers_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_dossiers1.page_dossiers_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_dossiers1.page_dossiers_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_dossiers_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }

    
    /*
      =============================================================================================================
    */
    function construire_chemin($chi_id_dossier){
        $tt=/*sql_inclure_deb*/
            /* sql_150()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_contient_genere_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
               AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_150()*/ 150,
            array( 'T0_chi_id_dossier' => $chi_id_dossier, 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){


        }else{

            return array( '__xst' => __xer, '__xme' => 'problème sur construire_chemin [' . __LINE__ . ']');
        }

        $chemin='';
        $continuer=100;
        do{
            $continuer--;
            
            if($tt[__xst] === __xsu){
             

                
                if(is_null($tt[__xva][0]['T0.chx_parent_dossier'])){

                    $continuer=0;
                    break;

                }else{

                    $chemin=DIRECTORY_SEPARATOR . $tt[__xva][0]['T0.chp_nom_dossier'] . $chemin;
                    $tt=/*sql_inclure_deb*/
                        /* sql_150()
                        SELECT 
                        `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
                        `T0`.`che_contient_genere_dossier`
                         FROM b1.tbl_dossiers T0
                         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                        
                        WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
                           AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
                        ;
                        */
                        /*sql_inclure_fin*/
                        $this->sql0->sql_iii(150,array( 'T0_chi_id_dossier' => $tt[__xva][0]['T0.chx_parent_dossier'], 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),$donnees_retournees);
                }


            }else{

                return array( '__xst' => __xer, '__xme' => 'problème sur construire_chemin [' . __LINE__ . ']');
            }

        }while($continuer > 0);
        
        if(__X_CLE_APPLICATION === 'rev_2' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            /*
              quand on est sur l'env 2, le chemin absolu commence en rev_2;
            */
            $chemin=__X_CLE_APPLICATION . $chemin;

        }else{

            $chemin='rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . $chemin;
        }
        

        $chemin_absolu=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . $chemin;
        return array( '__xst' => __xsu, '__xva' => array( 'chemin_absolu' => $chemin_absolu, 'chemin_relatif' => $chemin));
    }
    /*
      =============================================================================================================
    */
    function test_dossier_vide($chemin){
        
        if(!is_dir($chemin)){

            return array( '__xst' => __xsu, '__xva' => array( 'chemin' => $chemin, 'existe' => __xer));

        }

        $tt=scandir($chemin);
        return array( '__xst' => count($tt) === 2 ? __xsu : __xer, '__xva' => array( 'chemin' => $chemin, 'existe' => __xsu));
    }
    /*
      =============================================================================================================
    */
    function vv_dossiers_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /* $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);*/
        /*si l'utilisateur bidouille l'id dans l'interface*/
        $tt=/*sql_inclure_deb*/
            /* sql_150()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_contient_genere_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
               AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_150()*/ 150,
            array( 'T0_chi_id_dossier' => $donnees_recues[__xva]['chi_id_dossier'], 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        $obj=$this->construire_chemin($donnees_recues[__xva]['chi_id_dossier']);
        
        if($obj['__xst'] !== __xsu){

            $donnees_retournees[__x_signaux][__xal][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
            return;

        }

        $dossier_absolu=$obj['__xva']['chemin_absolu'];
        $obj=$this->test_dossier_vide($dossier_absolu);
        
        if($obj['__xst'] === __xsu){

            /*
              ok il est vide, on l'efface du disque
            */
            
            if(is_dir($dossier_absolu)){

                
                if((@rmdir($dossier_absolu))){

                    $donnees_retournees[__x_signaux][__xsu][]='le dossier a été supprimé du disque [' . __LINE__ . ']';

                }


            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='le dossier n\'est pas vide [' . __LINE__ . ']';
            return;
        }

        
        if($tt[__xst] === __xsu){

            $tt2=/*sql_inclure_deb*/
                /* sql_168()
                SELECT 
                COUNT( * )
                 FROM b1.tbl_dossiers T0
                WHERE (`T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
                   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_168()*/ 168,
                array(/**/
                    'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'T0_chx_parent_dossier' => $tt[__xva][0]['T0.chi_id_dossier']
                ),
                $donnees_retournees
            );
            
            if($tt2[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='Erreur sur requête de sélection des dossiers de ce dossier [' . __LINE__ . ']';
                return;

            }else{

                
                if($tt2[__xva][0]['0'] === 0){

                    /*
                      OK, pas d'enfants au niveau de la base
                    */

                }else{

                    $donnees_retournees[__x_signaux][__xer][]='Ce dossier contient des sous dossiers EN BASE et ne peut pas être supprimé DE LA BASE [' . __LINE__ . ']';
                    return;
                }

            }

            
            if($tt[__xva][0]['T0.chx_parent_dossier'] === null){

                $donnees_retournees[__x_signaux][__xer][]='le dossier racine ne peut pas être supprimé [' . __LINE__ . ']';
                return;

            }

            $obj=$this->construire_chemin($donnees_recues[__xva]['chi_id_dossier']);
            
            if($obj['__xst'] === __xsu){

                $chemin_absolu=$obj['__xva']['chemin_absolu'];

            }else{

                $donnees_retournees[__x_signaux][__xer][]=$obj['__xme'];
                return;
            }

            $obj=$this->test_dossier_vide($chemin_absolu);
            
            if($obj['__xst'] === __xsu){

                /*
                  ok il est vide
                */
                
                if($obj['__xva']['existe'] === __xsu){

                    $donnees_retournees[__x_signaux][__xer][]='Ce dossier est encore présent sur disque et ne peut être supprimé [' . __LINE__ . ']';
                    return;

                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]='Ce dossier contient encore des fichier ou des dossiers et ne peut être supprimé [' . __LINE__ . ']';
                return;
            }

            $tt=/*sql_inclure_deb*/
                /* sql_158()
                / ***meta(tester_les_dependances_dans_le_php(1))*** /
                
                DELETE FROM b1.tbl_dossiers
                WHERE (`chi_id_dossier` = :chi_id_dossier
                   AND `chx_projet_dossier` = :chx_projet_dossier) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_158()*/ 158,
                array( 'chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'], 'chi_id_dossier' => $tt[__xva][0]['T0.chi_id_dossier']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){
                
                if($tt['code_erreur'] === 19){

                    $donnees_retournees[__x_signaux][$tt[__xst]][]=__LINE__ . ' vous ne pouvez pas supprimer ce dossier car un autre élément l\'utilise';

                }else{

                    $donnees_retournees[__x_signaux][$tt[__xst]][]=__LINE__ . ' erreur lors de la suppression';
                }


            }else{

                
                if($tt['changements'] === 1){

                    $donnees_retournees[__x_signaux][__xsu][]=' la suppression a été effectuée en bdd [' . __LINE__ . ']';
                    $this->page_dossiers_liste1($donnees_retournees,$mat,$donnees_recues);

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
    function vv_dossiers_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues,true);
        */
        $page_dossiers_liste1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_dossiers_liste1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_dossiers_liste1=true;

            }

        }
        
        if($donnees_recues[__xva]['chx_parent_dossier'] === null
           || $donnees_recues[__xva]['chx_parent_dossier'] === 0
           || $donnees_recues[__xva]['chx_parent_dossier'] === ''
           || !is_numeric($donnees_recues[__xva]['chx_parent_dossier'])
        ){

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' un dossier parent doit être indiqué';
            return;

        }

        $obj=$this->tester_arbre_dossier($donnees_recues[__xva]['chp_nom_dossier'],$donnees_recues[__xva]['chx_parent_dossier'],$donnees_recues[__xva]['chi_id_dossier']);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=$obj[__xme];
            return;

        }

        /*
          on veut renommer test1 en test2 et on a la structure suivante
          racine
          test1 existe en base
          test2 n'existe pas en base mais est présent sur disque
          le nouveau nom du dossier qui doit être créé en base
        */
        /*si l'utilisateur bidouille l'id dans l'interface*/
        $tt0=/*sql_inclure_deb*/
            /* sql_150()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_contient_genere_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
               AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_150()*/ 150,
            array( 'T0_chi_id_dossier' => $donnees_recues[__xva]['chi_id_dossier'], 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt0[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur de récupération sur l\'id [' . __LINE__ . ']';
            return;

        }

        /* $donnees_retournees[__x_signaux][__xer][]='<pre>'.var_export($tt0,true).'</pre> [' . __LINE__ . ']';        return;*/
        $obj_construire_chemin_ancien=$this->construire_chemin($tt0[__xva][0]['T0.chx_parent_dossier']);
        
        if($obj_construire_chemin_ancien['__xst'] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='le chemin absolu ancien n\'a pas pu être récupéré [' . __LINE__ . ']';
            return;

        }

        $chemin_absolu_ancien_nom=$obj_construire_chemin_ancien['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt0[__xva][0]['T0.chp_nom_dossier'];
        $obj_construire_chemin_nouveau=$this->construire_chemin($donnees_recues[__xva]['chx_parent_dossier']);
        
        if($obj_construire_chemin_nouveau['__xst'] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
            return;

        }

        $chemin_absolu_nouveau_nom=$obj_construire_chemin_nouveau['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $donnees_recues[__xva]['chp_nom_dossier'];
        
        if($chemin_absolu_nouveau_nom !== $chemin_absolu_ancien_nom){

            
            if(is_dir($chemin_absolu_nouveau_nom)){

                $donnees_retournees[__x_signaux][__xer][]='Il existe déjà sur le disque un dossier portant ce nom [' . __LINE__ . ']';
                return;

            }


        }

        $changement_de_nom_sur_disque=false;
        
        if($chemin_absolu_ancien_nom !== $chemin_absolu_nouveau_nom){

            /* Si on a renommé le dossier*/
            
            if(is_dir($chemin_absolu_ancien_nom)){

                /* Si il existe sur disque*/
                
                if(!rename($chemin_absolu_ancien_nom,$chemin_absolu_nouveau_nom)){

                    $donnees_retournees[__x_signaux][__xer][]='erreur sur le renommage du dossier sur disque [' . __LINE__ . ']';

                }else{

                    $changement_de_nom_sur_disque=true;
                    $donnees_retournees[__x_signaux][__xsu][]='la modification a été effectuée sur disque [' . __LINE__ . ']';
                }


            }


        }

        $tt1=/*sql_inclure_deb*/
            /* sql_155()
            UPDATE b1.tbl_dossiers SET 
               `chp_nom_dossier` = :n_chp_nom_dossier , 
               `chx_parent_dossier` = :n_chx_parent_dossier , 
               `che_contient_genere_dossier` = :n_che_contient_genere_dossier
            WHERE (`chi_id_dossier` = :c_chi_id_dossier
               AND `chx_projet_dossier` = :c_chx_projet_dossier) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_155()*/ 155,
            array(
                'c_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'c_chi_id_dossier' => $tt0[__xva][0]['T0.chi_id_dossier'],
                'n_chp_nom_dossier' => $donnees_recues[__xva]['chp_nom_dossier'],
                'n_chx_parent_dossier' => $donnees_recues[__xva]['chx_parent_dossier'],
                'n_che_contient_genere_dossier' => $donnees_recues[__xva]['che_contient_genere_dossier']
            ),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            
            if($changement_de_nom_sur_disque === true){

                /* */
                /* si on avait réussi à renommer le dossier physique ,*/
                /* il faut à nouveau changer son nom*/
                /* */
                
                if(!rename($chemin_absolu_nouveau_nom,$chemin_absolu_ancien_nom)){

                    $donnees_retournees[__x_signaux][__xer][]='erreur sur l\'inverse du renommage du dossier sur disque [' . __LINE__ . ']';

                }


            }

            $code_erreur=$tt1['code_erreur']??0;
            
            if($code_erreur === 19){

                $donnees_retournees[__x_signaux][__xer][]='Le dossier parent contient déjà un dossier qui porte ce nom [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification du dossier [' . __LINE__ . ',sql(' . $code_erreur . ')] ';
            }

            return;

        }else if($tt1['changements'] === 1){

            
            if($page_dossiers_liste1 === true){

                $this->page_dossiers_liste1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__xst]=__xsu;
            }

            $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' la modification a été effectuée en bdd';

        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function page_dossiers_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter un dossier <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_liste1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_dossiers_creer1">' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>dossier</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="nom du dossier" autocapitalize="off" id="chp_nom_dossier" value="" maxlength="64" style="width:80%;" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>parent</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        /*
          
          
          
        */
        $chx_parent_dossier=null;
        $tt2=/*sql_inclure_deb*/
            /* sql_169()
            SELECT 
            `T0`.`chi_id_dossier`
             FROM b1.tbl_dossiers T0
            WHERE ( / *** *** / `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
               AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_169()*/ 169,
            array(/**/
                'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'T0_chx_parent_dossier' => null
            ),
            $donnees_retournees
        );
        
        if($tt2[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur sur requête de sélection des dossiers de ce dossier [' . __LINE__ . ']';
            return;

        }else{

            
            if(count($tt2[__xva]) === 1){

                $chx_parent_dossier=$tt2[__xva][0]['T0.chi_id_dossier'];

            }else{

                $donnees_retournees[__x_signaux][__xer][]='cette projet n\'a pas de dossier racine [' . __LINE__ . ']';
                return;
            }

        }

        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value="' . $chx_parent_dossier . '"  id="chx_parent_dossier" />' . PHP_EOL;
        $o1 .= '        <span id="chx_parent_dossier_libelle">(' . $chx_parent_dossier . ') [rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . ']</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_parent_dossier)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_parent_dossier_libelle)';
        $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
        $parametre_sous_fenetre .= ')';
        $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
        $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
        $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_dossiers1.formulaire1(conteneur1(vv_dossiers_creer1),page_dossiers_liste1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_dossiers1.formulaire1(conteneur1(vv_dossiers_creer1))" title="" >ajouter</div>';
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
    function page_dossiers_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . ' TODO $chi_id_dossiers '.var_export($chi_id_dossiers,true);
          return;
        */
        $o1='';
        $chi_id_dossiers='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_dossier' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_dossiers=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_dossiers) && $chi_id_dossiers > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_150()
                SELECT 
                `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
                `T0`.`che_contient_genere_dossier`
                 FROM b1.tbl_dossiers T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                
                WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
                   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_150()*/ 150,
                array( 'T0_chi_id_dossier' => $chi_id_dossiers, 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer un dossier <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_liste1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_dossiers_supprimer1">' . PHP_EOL;
                $o1 .= '   confirmez voous la suppression de la dossier id=<b>' . $tt[__xva][0]['T0.chi_id_dossier'] . '</b> ';
                $o1 .= '   contenant le texte suivant ?' . PHP_EOL;
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>dossier</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input id="chp_nom_dossier" type="text" value="' . enti1($tt[__xva][0]['T0.chp_nom_dossier']) . '" autocapitalize="off" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_dossier'] . '" id="chi_id_dossier" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton yy__x_signaux_0" data-hug_click="c_dossiers1.formulaire1(conteneur1(vv_dossiers_supprimer1),page_dossiers_liste1())" title="" >Je confirme la suppression</div>';
                $o1 .= '    <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_modifier1),chi_id_dossier(' . $tt[__xva][0]['T0.chi_id_dossier'] . '))" title="" >modifier ce dossier</div>';
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
    function creer_le_dossier_sur_disque(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xer][]='<pre>' . var_export( $mat , true ) . '</pre>';*/
        $chi_id_dossier=0;
        $nom_du_dossier='';
        $revenir_a_la_liste='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'c_dossiers1.creer_le_dossier_sur_disque' && $mat[$i][2] === 'f'){

                for( $j=1 ; $j < $l01 ; $j++ ){
                    
                    
                    if($mat[$j][1] === 'chi_id_dossier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_dossier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'nom_du_dossier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $nom_du_dossier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'revenir_a_la_liste' && $mat[$j][2] === 'f' && $mat[$j][8] === 0){

                        $revenir_a_la_liste=',revenir_a_la_liste()';
                    }

                }

            }

        }
        /* $donnees_retournees[__x_signaux][__xer][]='$nom_du_dossier=' . $nom_du_dossier . ']';*/
        
        if($nom_du_dossier !== '' && is_numeric($chi_id_dossier) && strpos($nom_du_dossier,'..') === false){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $dossier_absolu=$obj['__xva']['chemin_absolu'];
            /*
              ici la création effective
            */
            /* $donnees_retournees[__x_signaux][__xer][]=$dossier_absolu;*/
            /* return;*/
            
            if(is_dir($dossier_absolu)){

                $donnees_retournees[__x_signaux][__xal][]='Le dossier ' . $nom_du_dossier . ' existe déjà sur disque [' . __LINE__ . ']';
                return;

            }

            
            if((@mkdir($dossier_absolu))){

                $donnees_retournees[__x_signaux][__xsu][]='le dossier a été créé du disque';
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xer][]='Erreur lors de la création de ' . $nom_du_dossier . '[' . __LINE__ . ']';
            }

            
            if($revenir_a_la_liste !== ''){

                $this->page_dossiers_liste1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_dossier(' . $chi_id_dossier . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $donnees_retournees[__x_action]='c_dossiers1.formulaire1(action1(page_dossiers_modifier1),chi_id_dossier(' . $chi_id_dossier . '))';
                $this->page_dossiers_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='Erreur lors de la création du fichier [' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    function supprimer_dossier_du_disque(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xer][]='<pre>' . var_export( $mat , true ) . '</pre>';*/
        $chi_id_dossier=0;
        $nom_du_dossier='';
        $revenir_a_la_liste='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'c_dossiers1.supprimer_dossier_du_disque' && $mat[$i][2] === 'f'){

                for( $j=1 ; $j < $l01 ; $j++ ){
                    
                    
                    if($mat[$j][1] === 'chi_id_dossier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_dossier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'nom_du_dossier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $nom_du_dossier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'revenir_a_la_liste' && $mat[$j][2] === 'f' && $mat[$j][8] === 0){

                        $revenir_a_la_liste=',revenir_a_la_liste()';
                    }

                }

            }

        }
        /* $donnees_retournees[__x_signaux][__xer][]='$nom_du_dossier=' . $nom_du_dossier . ']';*/
        
        if($nom_du_dossier !== '' && is_numeric($chi_id_dossier) && strpos($nom_du_dossier,'..') === false){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $chemin_absolu=$obj['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $nom_du_dossier;
            /*
              ici la suppression effective
            */
            $obj=$this->test_dossier_vide($chemin_absolu);
            
            if($obj['__xst'] === __xsu){

                /*
                  ok il est vide
                */

            }else{

                $donnees_retournees[__x_signaux][__xer][]='Ce dossier contient encore des fichier ou des dossiers et ne peut être supprimé [' . __LINE__ . ']';
                return;
            }

            
            if((@rmdir($chemin_absolu))){

                $donnees_retournees[__x_signaux][__xsu][]='le fichier a été supprimé du disque';
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xer][]='Erreur lors de la suppression de ' . $nom_du_dossier . '[' . __LINE__ . ']';
            }

            
            if($revenir_a_la_liste !== ''){

                $this->page_dossiers_liste1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_dossier(' . $chi_id_dossier . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $donnees_retournees[__x_action]='c_dossiers1.formulaire1(action1(page_dossiers_modifier1),chi_id_dossier(' . $chi_id_dossier . '))';
                $this->page_dossiers_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='Erreur lors de la suppression du fichier [' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    function supprimer_fichier_du_disque(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xer][]='<pre>' . var_export( $mat , true ) . '</pre>';*/
        $chi_id_dossier=0;
        $nom_du_fichier='';
        $revenir_a_la_liste='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'c_dossiers1.supprimer_fichier_du_disque' && $mat[$i][2] === 'f'){

                for( $j=1 ; $j < $l01 ; $j++ ){
                    
                    
                    if($mat[$j][1] === 'chi_id_dossier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_dossier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'nom_du_fichier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $nom_du_fichier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'revenir_a_la_liste' && $mat[$j][2] === 'f' && $mat[$j][8] === 0){

                        $revenir_a_la_liste=',revenir_a_la_liste()';
                    }

                }

            }

        }
        /* $donnees_retournees[__x_signaux][__xer][]='$nom_du_fichier=' . $nom_du_fichier . ']';*/
        
        if($nom_du_fichier !== '' && is_numeric($chi_id_dossier) && strpos($nom_du_fichier,'..') === false){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $fichier_absolu=$obj['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $nom_du_fichier;
            /*
              ici la suppression effective
            */
            
            if(supprimer_fichier($fichier_absolu,true)){

                $donnees_retournees[__x_signaux][__xsu][]='le fichier a été supprimé du disque';
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xer][]='Erreur lors de la suppression de ' . $nom_du_fichier . '[' . __LINE__ . ']';
            }

            
            if($revenir_a_la_liste !== ''){

                $this->page_dossiers_liste1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_dossier(' . $chi_id_dossier . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $donnees_retournees[__x_action]='c_dossiers1.formulaire1(action1(page_dossiers_modifier1),chi_id_dossier(' . $chi_id_dossier . '))';
                $this->page_dossiers_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='Erreur lors de la suppression du fichier [' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    function page_supprimer_dossier_du_disque(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>Suppression d\'un dossier du disque</h1>' . PHP_EOL;
        /* $donnees_retournees[__x_signaux][__xer][]='<pre>'.var_export( $mat , true ) .'</pre>' . PHP_EOL;*/
        $chi_id_dossier=0;
        $nom_du_dossier='';
        $revenir_a_la_liste='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'c_dossiers1.page_supprimer_dossier_du_disque' && $mat[$i][2] === 'f'){

                for( $j=1 ; $j < $l01 ; $j++ ){
                    
                    
                    if($mat[$j][1] === 'chi_id_dossier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_dossier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'nom_du_dossier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $nom_du_dossier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'revenir_a_la_liste' && $mat[$j][2] === 'f' && $mat[$j][8] === 0){

                        $revenir_a_la_liste=',revenir_a_la_liste()';
                    }

                }

            }

        }
        /*
          $donnees_retournees[__x_signaux][__xer][]='$nom_du_dossier=' . $nom_du_dossier . ']';
          $donnees_retournees[__x_signaux][__xer][]='$chi_id_dossier=' . $chi_id_dossier . ']';
        */
        
        if($nom_du_dossier !== '' && is_numeric($chi_id_dossier) && strpos($nom_du_dossier,'..') === false){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $o1 .= 'confirmez vous le suppression du dossier ' . $obj['__xva']['chemin_relatif'] . DIRECTORY_SEPARATOR . $nom_du_dossier . '<br /><br />';
            $o1 .= '<div class="hug_bouton yy__x_signaux_2" ';
            $o1 .= 'data-hug_click="c_dossiers1.supprimer_dossier_du_disque(chi_id_dossier(' . $chi_id_dossier . '),nom_du_dossier(\'' . $nom_du_dossier . '\')' . $revenir_a_la_liste . ')" ';
            $o1 .= 'title="" >';
            $o1 .= 'je confirme la suppression';
            $o1 .= '</div>';
            $donnees_retournees[__xst]=__xsu;

        }

        $donnees_retournees[__x_page] .= $o1;
    }
    /*
      =============================================================================================================
    */
    function page_supprimer_fichier_du_disque(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>Suppression d\'un fichier du disque</h1>' . PHP_EOL;
        /* $o1 .= '<pre>'.var_export( $mat , true ) .'</pre>' . PHP_EOL;*/
        $chi_id_dossier=0;
        $nom_du_fichier='';
        $revenir_a_la_liste='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'c_dossiers1.page_supprimer_fichier_du_disque' && $mat[$i][2] === 'f'){

                for( $j=1 ; $j < $l01 ; $j++ ){
                    
                    
                    if($mat[$j][1] === 'chi_id_dossier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_dossier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'nom_du_fichier' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $nom_du_fichier=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'revenir_a_la_liste' && $mat[$j][2] === 'f' && $mat[$j][8] === 0){

                        $revenir_a_la_liste=',revenir_a_la_liste()';
                    }

                }

            }

        }
        /*
          $donnees_retournees[__x_signaux][__xer][]='$nom_du_fichier=' . $nom_du_fichier . ']';
          $donnees_retournees[__x_signaux][__xer][]='$chi_id_dossier=' . $chi_id_dossier . ']';
        */
        
        if($nom_du_fichier !== '' && is_numeric($chi_id_dossier) && strpos($nom_du_fichier,'..') === false){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $o1 .= 'confirmez vous le suppression du fichier ' . $obj['__xva']['chemin_relatif'] . DIRECTORY_SEPARATOR . $nom_du_fichier . '<br /><br />';
            $o1 .= '<div class="hug_bouton yy__x_signaux_2" ';
            $o1 .= 'data-hug_click="c_dossiers1.supprimer_fichier_du_disque(chi_id_dossier(' . $chi_id_dossier . '),nom_du_fichier(\'' . $nom_du_fichier . '\')' . $revenir_a_la_liste . ')" ';
            $o1 .= 'title="" >';
            $o1 .= 'je confirme la suppression';
            $o1 .= '</div>';
            $donnees_retournees[__xst]=__xsu;

        }

        $donnees_retournees[__x_page] .= $o1;
    }
    /*
      =============================================================================================================
    */
    function page_dossiers_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xif][]='TODO $donnees_recues '.var_export($donnees_recues,true);
        */
        $o1='';
        $chi_id_dossiers='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_dossier' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_dossiers=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_dossiers) && $chi_id_dossiers > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_150()
                SELECT 
                `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
                `T0`.`che_contient_genere_dossier`
                 FROM b1.tbl_dossiers T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                
                WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
                   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_150()*/ 150,
                array( 'T0_chi_id_dossier' => $chi_id_dossiers, 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection du dossier[' . __LINE__ . ']';
                return;

            }

            /*
              echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt[__xva][0] , true ) . '</pre>' ; exit(0);
            */
            $o1 .= '<h1>modifier un dossier <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_liste1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
            $o1 .= '<div id="vv_dossiers_modifier1">' . PHP_EOL;
            /**/
            $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_dossier'] . '" id="chi_id_dossier" />' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>id</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <b>' . $chi_id_dossiers . '</b>  ' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>nom du dossier</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <input type="text" id="chp_nom_dossier" value="' . enti1($tt[__xva][0]['T0.chp_nom_dossier']) . '" autocapitalize="off" />' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>contient généré</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            /**/
            $o1 .= '      <input type="range" id="che_contient_genere_dossier" class="yy_ouinon" name="che_contient_genere_dossier" min="0" max="1" step="1" value="' . enti1($tt[__xva][0]['T0.che_contient_genere_dossier']) . '"  >';
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>parent</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_parent_dossier']) . '"  id="chx_parent_dossier" />' . PHP_EOL;
            $o1 .= '        <span id="chx_parent_dossier_libelle">' . PHP_EOL;
            
            if($tt[__xva][0]['T0.chx_parent_dossier'] === null){

                $o1 .= '*indéfini' . PHP_EOL;

            }else{

                
                if($tt[__xva][0]['T1.chp_nom_dossier'] === null){

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_parent_dossier'] . ') rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_parent_dossier'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_dossier']) . PHP_EOL;
                }

            }

            $o1 .= '</span>' . PHP_EOL;
            $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
            $parametre_sous_fenetre .= ' sans_menus1()';
            $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_parent_dossier)';
            $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_parent_dossier_libelle)';
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
            $o1 .= '      <div class="hug_bouton" data-hug_click="c_dossiers1.formulaire1(conteneur1(vv_dossiers_modifier1),chi_id_dossier(' . $chi_id_dossiers . '),page_dossiers_liste1())" title="" >enregistrer et revenir à la liste</div>';
            $o1 .= '      <div class="hug_bouton" data-hug_click="c_dossiers1.formulaire1(conteneur1(vv_dossiers_modifier1),chi_id_dossier(' . $chi_id_dossiers . '))" title="" >enregistrer</div>';
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /*
              =============================================================================================
            */
            $o1 .= '</div>' . PHP_EOL;
            /* $o1 .= '    <div>'.__LINE__ . ' $_SESSION[__X_CLE_APPLICATION][\'chi_id_projet\']='.$_SESSION[__X_CLE_APPLICATION]['chi_id_projet'].'$chi_id_dossiers='.$chi_id_dossiers. ' , $tt=<pre>'.var_export( $tt , true ).'</div>';*/
            $obj=$this->construire_chemin($chi_id_dossiers);
            
            if($obj['__xst'] === __xsu){

                $chemin_absolu=$obj['__xva']['chemin_absolu'];
                $chemin_relatif=$obj['__xva']['chemin_relatif'];

            }else{

                $donnees_retournees[__x_signaux][__xer][]=$obj['__xme'];
                return;
            }

            $o1 .= '    <div>chemin relatif=' . $chemin_relatif . '</div>';
            /* $donnees_retournees[__x_signaux][__xdv][]=$chemin_absolu.' [' . __LINE__ . ']';*/
            $liste_des_fido=array();
            
            if(is_dir($chemin_absolu)){

                $liste_des_fido=scandir($chemin_absolu);
                /* $donnees_retournees[__x_signaux][__xdv][]='<pre>'.var_export( $tt , true) .'</pre> [' . __LINE__ . ']';*/
                foreach($liste_des_fido as $k1 => $v1){
                    
                    if($v1 === '.' || $v1 === '..'){


                    }else{

                        
                        if(is_dir($chemin_absolu . DIRECTORY_SEPARATOR . $v1)){

                            $o1 .= '<div>';
                            $o1 .= 'Dossier : ' . htmlentities($v1) . '';
                            $o1 .= '<div class="hug_bouton yy__x_signaux_2" ';
                            $o1 .= ' data-hug_click="c_dossiers1.page_supprimer_dossier_du_disque(chi_id_dossier(' . $chi_id_dossiers . '),nom_du_dossier(\'' . $v1 . '\'))" title="" >';
                            $o1 .= '  supprimer du disque</div>';
                            $o1 .= '</div>' . PHP_EOL;
                            $o1 .= '</div>' . PHP_EOL;

                        }else{

                            $o1 .= '<div>Fichier : ';
                            /**/
                            $o1 .= '' . htmlentities($v1) . '';
                            $o1 .= '  <div class="hug_bouton yy__x_signaux_2" title="" ';
                            $o1 .= 'data-hug_click="c_dossiers1.page_supprimer_fichier_du_disque(chi_id_dossier(' . $chi_id_dossiers . '),nom_du_fichier(\'' . $v1 . '\'))">';
                            $o1 .= '    supprimer du disque';
                            $o1 .= '  </div>';
                            $o1 .= ' <div class="hug_bouton yy__x_signaux_1" ';
                            $o1 .= '   data-hug_click="c_dossiers1.integrer_ce_fichier_dans_les_sources(chi_id_dossier(' . $chi_id_dossiers . '),nom_du_fichier(\'' . $v1 . '\'),che_binaire_source(),revenir_a_la_liste())" ';
                            $o1 .= '   title="" >';
                            $o1 .= '   intégrer ce fichier binaire';
                            $o1 .= ' </div>';
                            $o1 .= ' <div class="hug_bouton yy__x_signaux_1" ';
                            $o1 .= '   data-hug_click="c_dossiers1.integrer_ce_fichier_dans_les_sources(chi_id_dossier(' . $chi_id_dossiers . '),nom_du_fichier(\'' . $v1 . '\'),revenir_a_la_liste())" ';
                            $o1 .= '   title="" >';
                            $o1 .= '   intégrer ce fichier';
                            $o1 .= ' </div>';
                            /**/
                            $o1 .= '</div>' . PHP_EOL;
                        }

                    }

                }

            }

            
            if(count($liste_des_fido) <= 2){

                $o1 .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_supprimer1),chi_id_dossier(' . $chi_id_dossiers . '))" title="" >supprimer</div>';

            }

            $donnees_retournees[__x_page] .= $o1;
            $donnees_retournees[__xst]=__xsu;

        }

    }
    /*
      =============================================================================================================
    */
    function page_dossiers_sous_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $fonction1='c_dossiers1.page_dossiers_sous_liste1';
        /* déverminage */
        $__nbMax=10;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['T0_chi_id_dossier']='';
        $par['T0_chp_nom_dossier']='';
        $par['T0_chx_parent_dossier']='';
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

        $par['T0_chi_id_dossier']=$par['T0_chi_id_dossier']??'';
        $par['T0_chp_nom_dossier']=$par['T0_chp_nom_dossier']??'';
        $par['T0_chx_parent_dossier']=$par['T0_chx_parent_dossier']??'';
        $par['nom_champ_dans_parent1']=$par_mat['nom_champ_dans_parent1']??'';
        $par['nom_libelle_dans_parent1']=$par_mat['nom_libelle_dans_parent1']??'';
        $nom_filtre='vv_dossiers_filtre_choix_1';
        $o1='<h1>choisir un dossier parent</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>texte</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_dossier" value="' . $par['T0_chp_nom_dossier'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chp_nom_dossier'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chp_nom_dossier),value(\'\'))),c_dossiers1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id parent</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chx_parent_dossier" value="' . $par['T0_chx_parent_dossier'] . '" size="8" maxlength="32" autocapitalize="off"/></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_dossier" value="' . $par['T0_chi_id_dossier'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_dossiers1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_champ_dans_parent1" value="' . $par['nom_champ_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_libelle_dans_parent1" value="' . $par['nom_libelle_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_153()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_contient_genere_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
               AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
               AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
               AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier) 
            ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_153()*/ 153,
             /**/ array(
                'T0_chi_id_dossier' => $par['T0_chi_id_dossier'] === '' ? '' : $par['T0_chi_id_dossier'],
                'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'T0_chp_nom_dossier' => $par['T0_chp_nom_dossier'] === '' ? '' : '' . $par['T0_chp_nom_dossier'] . '',
                'T0_chx_parent_dossier' => $par['T0_chx_parent_dossier'] === '' ? '' : $par['T0_chx_parent_dossier'],
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des dossiers [' . __LINE__ . ']';
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
        $lsttbl .= '<th>dossier</th>';
        $lsttbl .= '<th>id parent</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $parametres='';
            $parametres .= 'interface1.choisir_dans_sous_fenetre1(';
            $parametres .= '    nom_champ_dans_parent1(' . $par['nom_champ_dans_parent1'] . ')';
            $parametres .= '    nom_libelle_dans_parent1(' . $par['nom_libelle_dans_parent1'] . ')';
            $parametres .= '    id1(' . $v0['T0.chi_id_dossier'] . ')';
            
            if($v0['T0.chx_parent_dossier'] === null){

                $parametres .= '    libelle1("(' . $v0['T0.chi_id_dossier'] . ') [rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . ']" )';

            }else{

                $parametres .= '    libelle1("(' . $v0['T0.chi_id_dossier'] . ') ' . $v0['T0.chp_nom_dossier'] . '" )';
            }

            $parametres .= ')';
            $lsttbl .= '<td style="max-width:calc(1*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="' . htmlentities($parametres) . '">=&gt;</div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_dossier'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chx_parent_dossier'] === null){

                $lsttbl .= '[rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . ']';

            }else{

                
                if($v0['T0.chp_nom_dossier'] !== null){

                    $lsttbl .= '' . enti1($v0['T0.chp_nom_dossier']) . '';

                }

            }

            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chx_parent_dossier'] !== null){

                $lsttbl .= '(' . enti1($v0['T0.chx_parent_dossier']) . ') ' . enti1($v0['T1.chp_nom_dossier']) . '';

            }

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
    function integrer_ce_fichier_dans_les_sources(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xdv][]='$mat =<pre>'.var_export( $mat , true ).'</pre> [' . __LINE__ . ']';
        */
        $chi_id_dossier=0;
        $nom_du_fichier='';
        $che_binaire_source=0;
        $l01=count($mat);
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_dossiers1.integrer_ce_fichier_dans_les_sources' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 0 && $mat[$j][1] === 'che_binaire_source'){

                        $che_binaire_source=1;

                    }else if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        
                        if($mat[$j][1] === 'chi_id_dossier'){

                            $chi_id_dossier=(int)($mat[$j + 1][1]);

                        }else if($mat[$j][1] === 'nom_du_fichier'){

                            $nom_du_fichier=$mat[$j + 1][1];
                        }

                    }

                }

            }

        }
        
        if($chi_id_dossier > 0 && $nom_du_fichier !== ''){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $chemin_fichier=$dossier_absolu=$obj['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $nom_du_fichier;
            
            if($che_binaire_source === 1 || $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 'rev' . '_1'){

                $contenu_fichier='';

            }else{

                $contenu_fichier=file_get_contents($chemin_fichier);
            }

            $donnees_sql=array( array(
                        /**/
                        'chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                        'chp_nom_source' => $nom_du_fichier,
                        'chx_dossier_id_source' => $chi_id_dossier === '' ? null : $chi_id_dossier,
                        'cht_commentaire_source' => null,
                        'cht_rev_source' => null,
                        'cht_genere_source' => $contenu_fichier,
                        'che_binaire_source' => $che_binaire_source
                    ));
            /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
            $tt=/*sql_inclure_deb*/
                /* sql_154()
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
                 /*sql_154()*/ 154,
                $donnees_sql,
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='le fichier n\'a pas pu être intégré [' . __LINE__ . ']';
                return;

            }

            $donnees_retournees[__x_signaux][__xsu][]='le fichier a été intégré [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;

        }else{

            $donnees_retournees[__x_signaux][__xer][]='il y a eu un problème [' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    function page_dossiers_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage */
        $__nbMax=20;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['T0_chi_id_dossier']='';
        $par['T0_chp_nom_dossier']='';
        $par['T0_chx_parent_dossier']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_dossiers1.page_dossiers_liste1' === $mat[$i][1]){

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
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_dossiers1.page_dossiers_liste1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_dossiers1.page_dossiers_liste1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_dossiers1.page_dossiers_liste1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_dossiers1.page_dossiers_liste1']=$par;
        }

        $par['T0_chi_id_dossier']=$par['T0_chi_id_dossier']??'';
        $par['T0_chp_nom_dossier']=$par['T0_chp_nom_dossier']??'';
        $par['T0_chx_parent_dossier']=$par['T0_chx_parent_dossier']??'';
        $fonction1='c_dossiers1.page_dossiers_liste1';
        $nom_filtre='vv_dossiers_filtre1';
        $o1='<h1>Liste des dossiers</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>texte</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_dossier" value="' . $par['T0_chp_nom_dossier'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chp_nom_dossier'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chp_nom_dossier),value(\'\'))),c_dossiers1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id parent</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chx_parent_dossier" value="' . $par['T0_chx_parent_dossier'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_dossier" value="' . $par['T0_chi_id_dossier'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_dossiers1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_153()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_contient_genere_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
               AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
               AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
               AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier) 
            ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_153()*/ 153,
             /**/ array(
                /**/
                'T0_chi_id_dossier' => $par['T0_chi_id_dossier'] === '' ? '' : $par['T0_chi_id_dossier'],
                'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'T0_chp_nom_dossier' => $par['T0_chp_nom_dossier'] === '' ? '' : '' . $par['T0_chp_nom_dossier'] . '',
                'T0_chx_parent_dossier' => $par['T0_chx_parent_dossier'] === '' ? '' : $par['T0_chx_parent_dossier'],
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des dossiers [' . __LINE__ . ']';
            return;

        }

        $id_dossier_racine=0;
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $tt '.var_export($tt,true);
        */
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_creer1))" title="nouvelle dossier" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>dossier</th>';
        $lsttbl .= '<th>(id parent) nom</th>';
        $lsttbl .= '<th>contient généré</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            
            if($v0['T0.chx_parent_dossier'] === null){

                $lsttbl .= '  <div class="hug_bouton_inactif">✎</div>';
                $lsttbl .= '  <div class="hug_bouton_inactif">x</div>';

            }else{

                
                if($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

                    
                    if($v0['T0.chi_id_dossier'] === 2 || $v0['T0.chi_id_dossier'] === 3){

                        $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" ';
                        $lsttbl .= ' data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_modifier1),chi_id_dossier(' . $v0['T0.chi_id_dossier'] . '))">';
                        $lsttbl .= '✎';
                        $lsttbl .= '</div>';
                        /**/
                        $lsttbl .= '  <div class="hug_bouton_inactif">x</div>';
                        /**/
                        $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_dossiers1.creer_le_dossier_sur_disque(chi_id_dossier(' . $v0['T0.chi_id_dossier'] . '),nom_du_dossier(\'' . $v0['T0.chp_nom_dossier'] . '\'))">créer</div>';

                    }else{

                        $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_modifier1),chi_id_dossier(' . $v0['T0.chi_id_dossier'] . '))">✎</div>';
                        $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_supprimer1),chi_id_dossier(' . $v0['T0.chi_id_dossier'] . '))">🗑</div>';
                        $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_dossiers1.creer_le_dossier_sur_disque(chi_id_dossier(' . $v0['T0.chi_id_dossier'] . '),nom_du_dossier(\'' . $v0['T0.chp_nom_dossier'] . '\'))">créer</div>';
                    }


                }else{

                    $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_modifier1),chi_id_dossier(' . $v0['T0.chi_id_dossier'] . '))">✎</div>';
                    $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_dossiers1.formulaire1(action1(page_dossiers_supprimer1),chi_id_dossier(' . $v0['T0.chi_id_dossier'] . '))">🗑</div>';
                    $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_dossiers1.creer_le_dossier_sur_disque(chi_id_dossier(' . $v0['T0.chi_id_dossier'] . '),nom_du_dossier(\'' . $v0['T0.chp_nom_dossier'] . '\'))">créer</div>';
                }

            }

            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_dossier'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chx_parent_dossier'] === null){

                $id_dossier_racine=$v0['T0.chi_id_dossier'];
                
                if(__X_CLE_APPLICATION === 'rev_2'){

                    $lsttbl .= '[' . __X_CLE_APPLICATION . ']';

                }else{

                    $lsttbl .= '[rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . ']';
                }


            }else{

                
                if($v0['T0.chp_nom_dossier'] !== null){

                    $lsttbl .= '' . enti1($v0['T0.chp_nom_dossier']) . '';

                }

            }

            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chx_parent_dossier'] !== null){
             
                if($v0['T1.chp_nom_dossier']===null || $v0['T1.chp_nom_dossier']===''){

                    $lsttbl .= '(' . enti1($v0['T0.chx_parent_dossier']) . ') [rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . ']';
                }else{

                    $lsttbl .= '(' . enti1($v0['T0.chx_parent_dossier']) . ') ' . enti1($v0['T1.chp_nom_dossier']) . '';
                }

            }

            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.che_contient_genere_dossier'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $chemin_racine=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'];
        $fidos=scandir($chemin_racine);
        $liste_des_dossiers_a_la_racine='';
        foreach($fidos as $k1 => $v1){
            
            if($v1 === '..' || $v1 === '.'){


            }else{

                
                if(is_dir($chemin_racine . DIRECTORY_SEPARATOR . $v1)){

                    $liste_des_dossiers_a_la_racine .= '<div>';
                    $liste_des_dossiers_a_la_racine .= 'Dossier : ' . $v1 . '';
                    
                    if($id_dossier_racine > 0){

                        $liste_des_dossiers_a_la_racine .= '<div class="hug_bouton yy__x_signaux_2" data-hug_click="c_dossiers1.page_supprimer_dossier_du_disque(chi_id_dossier(' . $id_dossier_racine . '),nom_du_dossier(\'' . $v1 . '\'),revenir_a_la_liste())" title="" >';
                        $liste_des_dossiers_a_la_racine .= '  supprimer du disque</div>';
                        $liste_des_dossiers_a_la_racine .= '</div>' . PHP_EOL;

                    }

                    $liste_des_dossiers_a_la_racine .= '</div>' . PHP_EOL;

                }else{

                    $liste_des_dossiers_a_la_racine .= '<div>';
                    $liste_des_dossiers_a_la_racine .= '  fichier : ' . $v1 . '';
                    
                    if($id_dossier_racine > 0){

                        $liste_des_dossiers_a_la_racine .= ' <div class="hug_bouton yy__x_signaux_2" ';
                        $liste_des_dossiers_a_la_racine .= '   data-hug_click="c_dossiers1.page_supprimer_fichier_du_disque(chi_id_dossier(' . $id_dossier_racine . '),nom_du_fichier(\'' . $v1 . '\'),revenir_a_la_liste())" ';
                        $liste_des_dossiers_a_la_racine .= '   title="" >';
                        $liste_des_dossiers_a_la_racine .= '   supprimer du disque';
                        $liste_des_dossiers_a_la_racine .= ' </div>';
                        $liste_des_dossiers_a_la_racine .= ' <div class="hug_bouton yy__x_signaux_1" ';
                        $liste_des_dossiers_a_la_racine .= '   data-hug_click="c_dossiers1.integrer_ce_fichier_dans_les_sources(chi_id_dossier(' . $id_dossier_racine . '),nom_du_fichier(\'' . $v1 . '\'),che_binaire_source(),revenir_a_la_liste())" ';
                        $liste_des_dossiers_a_la_racine .= '   title="" >';
                        $liste_des_dossiers_a_la_racine .= '   intégrer ce fichier binaire';
                        $liste_des_dossiers_a_la_racine .= ' </div>';
                        $liste_des_dossiers_a_la_racine .= ' <div class="hug_bouton yy__x_signaux_1" ';
                        $liste_des_dossiers_a_la_racine .= '   data-hug_click="c_dossiers1.integrer_ce_fichier_dans_les_sources(chi_id_dossier(' . $id_dossier_racine . '),nom_du_fichier(\'' . $v1 . '\'),revenir_a_la_liste())" ';
                        $liste_des_dossiers_a_la_racine .= '   title="" >';
                        $liste_des_dossiers_a_la_racine .= '   intégrer ce fichier ';
                        $liste_des_dossiers_a_la_racine .= ' </div>';

                    }

                    $liste_des_dossiers_a_la_racine .= '</div>' . PHP_EOL;
                }

            }

        }
        
        if($liste_des_dossiers_a_la_racine !== ''){

            $o1 .= '<div class="yy__x_signaux___xif">liste des fichiers et dossiers sur la racine</div>' . PHP_EOL;
            $o1 .= '<div>' . $liste_des_dossiers_a_la_racine . '</div>' . PHP_EOL;

        }

        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_dossiers1.page_dossiers_liste1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/