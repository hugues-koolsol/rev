<?php
class c_utilisateurs1{
    private $sql0=null;
    /*
      erreur lors de l'"action" pour 
      Attention : du le cheval / de cheval vs de la utilisateur / du la utilisateur
    */
    private const LE_LA_ELEMENT_GERE = 'l\'utilisateur';
    private const UN_UNE_ELEMENT_GERE = 'un utilisateur';
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
      traitement des formulaires des utilisateurs
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_utilisateurs1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_utilisateurs_creer1'
                       || $action1 === 'page_utilisateurs_modifier1'
                       || $action1 === 'page_utilisateurs_supprimer1'
                       || $action1 === 'page_liste_des_utilisateurs1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_utilisateurs_modifier1'
                   || $conteneur1 === 'vv_utilisateurs_creer1'
                   || $conteneur1 === 'vv_utilisateurs_supprimer1'
                   || $conteneur1 === 'vv_utilisateurs_filtre1'
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
    function vv_utilisateurs_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_utilisateurs1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_utilisateurs1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_utilisateurs1=true;
                break;

            }

        }
        
        if($donnees_recues[__xva]['chx_acces_utilisateur'] === 1){

            $donnees_retournees[__x_signaux][__xar][]=' cet acces n\'es pas permis';

        }

        $donnees_sql=array( array(/**/
                    'chp_nom_de_connexion_utilisateur' => $donnees_recues[__xva]['chp_nom_de_connexion_utilisateur'],
                    'chx_acces_utilisateur' => $donnees_recues[__xva]['chx_acces_utilisateur'] === '' ? null : $donnees_recues[__xva]['chx_acces_utilisateur']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=/*sql_inclure_deb*/
            /* sql_179()
            INSERT INTO b1.`tbl_utilisateurs`(
                `chp_nom_de_connexion_utilisateur` , 
                `chx_acces_utilisateur`
            ) VALUES (
                :chp_nom_de_connexion_utilisateur , 
                :chx_acces_utilisateur
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_179()*/ 179,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }else if($tt['changements'] === 1){

            $donnees_retournees[__xst]=__xsu;
            
            if($page_liste_des_utilisateurs1 === true){

                $this->page_liste_des_utilisateurs1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_utilisateur(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_utilisateurs_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_utilisateurs1.formulaire1(action1(page_utilisateurs_modifier1),chi_id_utilisateur(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_utilisateurs_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_utilisateurs1.page_liste_des_utilisateurs1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_utilisateurs1.page_liste_des_utilisateurs1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_utilisateurs1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_utilisateurs_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=/*sql_inclure_deb*/
            /* sql_180()
            SELECT 
            `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
            `T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chp__dtm_utilisateur` , `T0`.`chp__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
            `T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
             FROM b1.tbl_utilisateurs T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
            
            WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_180()*/ 180,
            array(/**/
                'T0_chi_id_utilisateur' => $donnees_recues[__xva]['chi_id_utilisateur']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu && $donnees_recues[__xva]['chi_id_utilisateur'] > 2){

            $tt=/*sql_inclure_deb*/
                /* sql_182()
                DELETE FROM b1.tbl_utilisateurs
                WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_182()*/ 182,
                array(/**/
                    'chi_id_utilisateur' => $tt[__xva][0]['T0.chi_id_utilisateur']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_utilisateur'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                $donnees_retournees[__x_signaux][__xsu][]='👍 suppression effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_utilisateur'] . ')';
                $this->page_liste_des_utilisateurs1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_utilisateur'] . ') [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_utilisateur'] . ') [' . __LINE__ . ']';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_utilisateurs_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_utilisateurs1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_utilisateurs1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_utilisateurs1=true;

            }

        }
        $tt=/*sql_inclure_deb*/
            /* sql_180()
            SELECT 
            `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
            `T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chp__dtm_utilisateur` , `T0`.`chp__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
            `T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
             FROM b1.tbl_utilisateurs T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
            
            WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_180()*/ 180,
            array(/**/
                'T0_chi_id_utilisateur' => $donnees_recues[__xva]['chi_id_utilisateur']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            /* afr metier*/
            
            if($tt[__xva][0]['T0.chi_id_utilisateur'] === 1
                   && ((int)($donnees_recues[__xva]['chx_acces_utilisateur'])) !== 1
               || $tt[__xva][0]['T0.chi_id_utilisateur'] === 2
                   && ((int)($donnees_recues[__xva]['chx_acces_utilisateur'])) !== 2
               || $tt[__xva][0]['T0.chi_id_utilisateur'] > 2
                   && ((int)($donnees_recues[__xva]['chx_acces_utilisateur'])) === 1
            ){

                $donnees_retournees[__x_signaux][__xer][]='cette combinaison d\'utilisateur et de groupe n\'est pas possible [' . __LINE__ . ']';
                return;

            }

            $tt=/*sql_inclure_deb*/
                /* sql_181()
                UPDATE b1.tbl_utilisateurs SET 
                   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
                   `chx_acces_utilisateur` = :n_chx_acces_utilisateur
                WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_181()*/ 181,
                array(/**/
                    'c_chi_id_utilisateur' => $tt[__xva][0]['T0.chi_id_utilisateur'],
                    'n_chp_nom_de_connexion_utilisateur' => $donnees_recues[__xva]['chp_nom_de_connexion_utilisateur'],
                    'n_chx_acces_utilisateur' => $donnees_recues[__xva]['chx_acces_utilisateur']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_utilisateur'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                
                if($page_liste_des_utilisateurs1 === true){

                    $this->page_liste_des_utilisateurs1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]='👍 modification effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_utilisateur'] . ') [' . __LINE__ . ']';

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
    function page_utilisateurs_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter ' . self::UN_UNE_ELEMENT_GERE . ' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_utilisateurs1.formulaire1(action1(page_liste_des_utilisateurs1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_utilisateurs_creer1">' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>nom de connexion</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" maxlength="64" id="chp_nom_de_connexion_utilisateur" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>acces</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_acces_utilisateur" />' . PHP_EOL;
        $o1 .= '        <span id="chx_acces_utilisateur_libelle">*indéfini</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_acces1.page_acces_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_acces_utilisateur)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_acces_utilisateur_libelle)';
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
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_utilisateurs1.formulaire1(conteneur1(vv_utilisateurs_creer1),page_liste_des_utilisateurs1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_utilisateurs1.formulaire1(conteneur1(vv_utilisateurs_creer1))" title="" >ajouter</div>';
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
    function page_utilisateurs_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_utilisateurs='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_utilisateur' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_utilisateurs=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_utilisateurs) && $chi_id_utilisateurs > 2){

            $tt=/*sql_inclure_deb*/
                /* sql_180()
                SELECT 
                `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
                `T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chp__dtm_utilisateur` , `T0`.`chp__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
                `T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
                 FROM b1.tbl_utilisateurs T0
                 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
                
                WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_180()*/ 180,
                array(/**/
                    'T0_chi_id_utilisateur' => $chi_id_utilisateurs
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer ' . self::UN_UNE_ELEMENT_GERE . '<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_utilisateurs1.formulaire1(action1(page_liste_des_utilisateurs1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_utilisateurs_supprimer1">' . PHP_EOL;
                $o1 .= '  <h3>confirmez vous la suppression de ' . self::LE_LA_ELEMENT_GERE . '(<b>' . $tt[__xva][0]['T0.chi_id_utilisateur'] . '</b>) ?</h3>';
                /*
                  
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>nom</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_nom_de_connexion_utilisateur" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.chp_nom_de_connexion_utilisateur']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_utilisateur'] . '" id="chi_id_utilisateur" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_utilisateurs1.formulaire1(conteneur1(vv_utilisateurs_supprimer1),page_liste_des_utilisateurs1())" title="" >Je confirme la suppression</div>';
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
    function page_utilisateurs_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_utilisateurs='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_utilisateur' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_utilisateurs=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_utilisateurs) && $chi_id_utilisateurs > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_180()
                SELECT 
                `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
                `T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chp__dtm_utilisateur` , `T0`.`chp__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
                `T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
                 FROM b1.tbl_utilisateurs T0
                 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
                
                WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_180()*/ 180,
                array(/**/
                    'T0_chi_id_utilisateur' => $chi_id_utilisateurs
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>modifier ' . self::LE_LA_ELEMENT_GERE . '(' . $tt[__xva][0]['T0.chi_id_utilisateur'] . ') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_utilisateurs1.formulaire1(action1(page_liste_des_utilisateurs1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_utilisateurs_modifier1">' . PHP_EOL;
                /**/
                $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_utilisateur'] . '" id="chi_id_utilisateur" />' . PHP_EOL;
                /**/
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>nom</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_nom_de_connexion_utilisateur" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.chp_nom_de_connexion_utilisateur']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>acces</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_acces_utilisateur']) . '"  id="chx_acces_utilisateur" />' . PHP_EOL;
                $o1 .= '        <span id="chx_acces_utilisateur_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_acces_utilisateur'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_acces_utilisateur'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_acces']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_acces1.page_acces_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_acces_utilisateur)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_acces_utilisateur_libelle)';
                $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
                $parametre_sous_fenetre .= ')';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
                $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_utilisateurs1.formulaire1(conteneur1(vv_utilisateurs_modifier1),chi_id_utilisateur(' . $chi_id_utilisateurs . '),page_liste_des_utilisateurs1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_utilisateurs1.formulaire1(conteneur1(vv_utilisateurs_modifier1),chi_id_utilisateur(' . $chi_id_utilisateurs . '))" title="" >enregistrer</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }else{

            $this->page_liste_des_utilisateurs1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
        }

    }
    /*
      =============================================================================================================
      Pour les iframes sur les utilisateurs
      =============================================================================================================
    */
    function vv_utilisateurs_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_utilisateurs1.page_utilisateurs_sous_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_utilisateurs1.page_utilisateurs_sous_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_utilisateurs_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function page_utilisateurs_sous_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $fonction1='c_utilisateurs1.page_utilisateurs_sous_liste1';
        /* déverminage */
        $__nbMax=10;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['T0_chi_id_utilisateur']='';
        $par['T0_chp_nom_de_connexion_utilisateur']='';
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

        $par['T0_chi_id_utilisateur']=$par['T0_chi_id_utilisateur']??'';
        $par['T0_chp_nom_de_connexion_utilisateur']=$par['T0_chp_nom_de_connexion_utilisateur']??'';
        $par['nom_champ_dans_parent1']=$par_mat['nom_champ_dans_parent1']??'';
        $par['nom_libelle_dans_parent1']=$par_mat['nom_libelle_dans_parent1']??'';
        $nom_filtre='vv_utilisateurs_filtre_choix_1';
        $o1='<h1>choisir un utilisateur</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_de_connexion_utilisateur" value="' . $par['T0_chp_nom_de_connexion_utilisateur'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chp_nom_de_connexion_utilisateur'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chp_nom_de_connexion_utilisateur),value(\'\'))),c_utilisateurs1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_utilisateur" value="' . $par['T0_chi_id_utilisateur'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_utilisateurs1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_champ_dans_parent1" value="' . $par['nom_champ_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_libelle_dans_parent1" value="' . $par['nom_libelle_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_178()
            SELECT 
            `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chi_compteur_socket1_utilisateur` , 
            `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
             FROM b1.tbl_utilisateurs T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
            
            WHERE ( / *** *** / `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
               AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur) 
            ORDER BY `T0`.`chi_id_utilisateur` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_178()*/ 178,
             /**/ array(
                /**/
                'T0_chi_id_utilisateur' => $par['T0_chi_id_utilisateur'] === '' ? '' : $par['T0_chi_id_utilisateur'],
                'T0_chp_nom_de_connexion_utilisateur' => $par['T0_chp_nom_de_connexion_utilisateur'] === '' ? '' : '' . $par['T0_chp_nom_de_connexion_utilisateur'] . '',
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des utilisateurs [' . __LINE__ . ']';
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
        $lsttbl .= '<th>utilisateur</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $parametres='';
            $parametres .= 'interface1.choisir_dans_sous_fenetre1(';
            $parametres .= '    nom_champ_dans_parent1(' . $par['nom_champ_dans_parent1'] . ')';
            $parametres .= '    nom_libelle_dans_parent1(' . $par['nom_libelle_dans_parent1'] . ')';
            $parametres .= '    id1(' . $v0['T0.chi_id_utilisateur'] . ')';
            $parametres .= '    libelle1("(' . $v0['T0.chi_id_utilisateur'] . ') ' . $v0['T0.chp_nom_de_connexion_utilisateur'] . '" )';
            $parametres .= ')';
            $lsttbl .= '<td style="max-width:calc(1*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="' . htmlentities($parametres) . '">=&gt;</div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_utilisateur'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chp_nom_de_connexion_utilisateur'] !== null){

                $lsttbl .= '' . enti1($v0['T0.chp_nom_de_connexion_utilisateur']) . '';

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
    function page_liste_des_utilisateurs1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $__nbMax=10;
        $par=array();
        $par['T0_chi_id_utilisateur']='';
        $par['T0_chp_nom_de_connexion_utilisateur']='';
        $par['T0_chx_acces_utilisateur']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_utilisateurs1.page_liste_des_utilisateurs1' === $mat[$i][1]){

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
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_utilisateurs1.page_liste_des_utilisateurs1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_utilisateurs1.page_liste_des_utilisateurs1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_utilisateurs1.page_liste_des_utilisateurs1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_utilisateurs1.page_liste_des_utilisateurs1']=$par;
        }

        $par['T0_chi_id_utilisateur']=$par['T0_chi_id_utilisateur']??'';
        $par['T0_chp_nom_de_connexion_utilisateur']=$par['T0_chp_nom_de_connexion_utilisateur']??'';
        $par['T0_chx_acces_utilisateur']=$par['T0_chx_acces_utilisateur']??'';
        $fonction1='c_utilisateurs1.page_liste_des_utilisateurs1';
        $nom_filtre='vv_utilisateurs_filtre1';
        $o1='<h1>Liste des utilisateurs</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_de_connexion_utilisateur" value="' . $par['T0_chp_nom_de_connexion_utilisateur'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_utilisateur" value="' . $par['T0_chi_id_utilisateur'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_utilisateurs1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_178()
            SELECT 
            `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chi_compteur_socket1_utilisateur` , 
            `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
             FROM b1.tbl_utilisateurs T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
            
            WHERE ( / *** *** / `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
               AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur) 
            ORDER BY `T0`.`chi_id_utilisateur` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_178()*/ 178,
            array(
                /**/
                'T0_chi_id_utilisateur' => $par['T0_chi_id_utilisateur'] === '' ? '' : $par['T0_chi_id_utilisateur'],
                'T0_chp_nom_de_connexion_utilisateur' => $par['T0_chp_nom_de_connexion_utilisateur'] === '' ? '' : '' . $par['T0_chp_nom_de_connexion_utilisateur'] . '',
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
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_utilisateurs1.page_liste_des_utilisateurs1(T0_chp_priorite_utilisateur2(99),indice_menu(10))" title="utilisateurs" >';
            $o1 .= '      Réessayer';
            $o1 .= '    </div>';
            $o1 .= '    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\'application';
            $o1 .= '  </div>';
            unset($_SESSION[__X_CLE_APPLICATION]['c_utilisateurs1.page_liste_des_utilisateurs1']);
            
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
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_utilisateurs1.formulaire1(action1(page_utilisateurs_creer1))" title="nouveau utilisateur" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>nom</th>';
        $lsttbl .= '<th>acces</th>';
        $lsttbl .= '<th>nb</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_utilisateurs1.formulaire1(action1(page_utilisateurs_modifier1),chi_id_utilisateur(' . $v0['T0.chi_id_utilisateur'] . '))">✎</div>';
            
            if($v0['T0.chi_id_utilisateur'] <= 2){

                $lsttbl .= '  <div class="hug_bouton_inactif">🗑</div>';

            }else{

                $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_utilisateurs1.formulaire1(action1(page_utilisateurs_supprimer1),chi_id_utilisateur(' . $v0['T0.chi_id_utilisateur'] . '))">🗑</div>';
            }

            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_utilisateur'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . enti1(mb_substr($v0['T0.chp_nom_de_connexion_utilisateur'],0,100)) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chx_acces_utilisateur'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_compteur1_utilisateur'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_utilisateurs1.page_liste_des_utilisateurs1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/