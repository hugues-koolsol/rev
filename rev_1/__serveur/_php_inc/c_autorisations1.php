<?php
class c_autorisations1{
    private $sql0=null;
    /*
      erreur lors de l'"action" pour 
      Attention : du le cheval / de cheval vs de la autorisation / du la autorisation
    */
    private const LE_LA_ELEMENT_GERE = 'l\'autorisation';
    private const UN_UNE_ELEMENT_GERE = 'une autorisation';
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
      traitement des formulaires des autorisations
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_autorisations1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_autorisations_creer1'
                       || $action1 === 'page_autorisations_modifier1'
                       || $action1 === 'page_autorisations_supprimer1'
                       || $action1 === 'page_liste_des_autorisations1'
                       || $action1 === 'page_autorisations_dupliquer1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_autorisations_modifier1'
                   || $conteneur1 === 'vv_autorisations_creer1'
                   || $conteneur1 === 'vv_autorisations_supprimer1'
                   || $conteneur1 === 'vv_autorisations_filtre1'
                   || $conteneur1 === 'vv_autorisations_filtre_choix_1'
                   
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
    function vv_autorisations_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_autorisations1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_autorisations1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_autorisations1=true;
                break;

            }

        }
        
        if($donnees_recues[__xva]['chx_acces_autorisation'] === 1){

            $donnees_retournees[__x_signaux][__xar][]=' cet acces n\'es pas permis';

        }

        $donnees_sql=array( array(/**/
                    'chx_source_autorisation' => $donnees_recues[__xva]['chx_source_autorisation'],
                    'chx_acces_autorisation' => $donnees_recues[__xva]['chx_acces_autorisation'] === '' ? null : $donnees_recues[__xva]['chx_acces_autorisation']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=$this->sql0->sql_iii(
             /*sql_318()*/ 318,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }else if($tt['changements'] === 1){

            $donnees_retournees[__xst]=__xsu;
            
            if($page_liste_des_autorisations1 === true){

                $this->page_liste_des_autorisations1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_autorisation(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_autorisations_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_autorisations1.formulaire1(action1(page_autorisations_modifier1),chi_id_autorisation(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_autorisations_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_autorisations1.page_liste_des_autorisations1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_autorisations1.page_liste_des_autorisations1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_autorisations1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_autorisations_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=$this->sql0->sql_iii(
             /*sql_319()*/ 319,
            array(/**/
                'T0_chi_id_autorisation' => $donnees_recues[__xva]['chi_id_autorisation']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=$this->sql0->sql_iii(
                 /*sql_320()*/ 320,
                array(/**/
                    'chi_id_autorisation' => $tt[__xva][0]['T0.chi_id_autorisation']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_autorisation'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                $donnees_retournees[__x_signaux][__xsu][]='👍 suppression effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_autorisation'] . ')';
                $this->page_liste_des_autorisations1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_autorisation'] . ') [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_autorisation'] . ') [' . __LINE__ . ']';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_autorisations_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_autorisations1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_autorisations1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_autorisations1=true;

            }

        }
        $tt=$this->sql0->sql_iii(
             /*sql_319()*/ 319,
            array(/**/
                'T0_chi_id_autorisation' => $donnees_recues[__xva]['chi_id_autorisation']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=$this->sql0->sql_iii(
                 /*sql_321()*/ 321,
                array(/**/
                    'c_chi_id_autorisation' => $tt[__xva][0]['T0.chi_id_autorisation'],
                    'n_chx_source_autorisation' => $donnees_recues[__xva]['chx_source_autorisation'],
                    'n_chx_acces_autorisation' => $donnees_recues[__xva]['chx_acces_autorisation']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_autorisation'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                
                if($page_liste_des_autorisations1 === true){

                    $this->page_liste_des_autorisations1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]='👍 modification effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_autorisation'] . ') [' . __LINE__ . ']';

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
    function page_autorisations_dupliquer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_recues = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        
        $o1='';
        $chi_id_autorisations='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_autorisation' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_autorisations=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_autorisations) && $chi_id_autorisations > 0){
         
            $tt=$this->sql0->sql_iii(
                 /*sql_319()*/ 319,
                array(/**/
                    'T0_chi_id_autorisation' => $chi_id_autorisations
                ),
                $donnees_retournees
            );
            if($tt[__xst] === __xsu){
               $donnees_recues['dupliquer']=$tt[__xva][0];
               $this->page_autorisations_creer1($donnees_retournees,$mat,$donnees_recues);
            }
        }
        
    }
    
    /*
      =============================================================================================================
    */
    function page_autorisations_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter ' . self::UN_UNE_ELEMENT_GERE . ' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_autorisations1.formulaire1(action1(page_liste_des_autorisations1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_autorisations_creer1">' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>acces</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        if(isset($donnees_recues['dupliquer']['T0.chx_acces_autorisation'])){
            $o1 .= '        <input type="hidden" value="'.$donnees_recues['dupliquer']['T0.chx_acces_autorisation'].'"  id="chx_acces_autorisation" />' . PHP_EOL;
            $o1 .= '        <span id="chx_acces_autorisation_libelle">';
            $o1 .= '(' . $donnees_recues['dupliquer']['T0.chx_acces_autorisation'] . ') ' . htmlentities($donnees_recues['dupliquer']['T1.chp_nom_acces']) . PHP_EOL;
            $o1 .= '</span>' . PHP_EOL;
        }else{
            $o1 .= '        <input type="hidden" value=""  id="chx_acces_autorisation" />' . PHP_EOL;
            $o1 .= '        <span id="chx_acces_autorisation_libelle">*indéfini</span>' . PHP_EOL;
        }
        $parametre_sous_fenetre='c_acces1.page_acces_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_acces_autorisation)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_acces_autorisation_libelle)';
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
        
        if(isset($donnees_recues['dupliquer']['T0.chx_source_autorisation'])){
            $o1 .= '        <input type="hidden" value="'.$donnees_recues['dupliquer']['T0.chx_source_autorisation'].'"  id="chx_source_autorisation" />' . PHP_EOL;
            $o1 .= '        <span id="chx_source_autorisation_libelle">';
            $o1 .= '(' . $donnees_recues['dupliquer']['T0.chx_source_autorisation'] . ') ' . htmlentities($donnees_recues['dupliquer']['T2.chp_nom_source']) . PHP_EOL;
            $o1 .= '</span>' . PHP_EOL;
        }else{
        $o1 .= '        <input type="hidden" value=""  id="chx_source_autorisation" />' . PHP_EOL;
        $o1 .= '        <span id="chx_source_autorisation_libelle">*indéfini</span>' . PHP_EOL;
        }
        
        $parametre_sous_fenetre='c_sources1.page_sources_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_source_autorisation)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_source_autorisation_libelle)';
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
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_autorisations1.formulaire1(conteneur1(vv_autorisations_creer1),page_liste_des_autorisations1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_autorisations1.formulaire1(conteneur1(vv_autorisations_creer1))" title="" >ajouter</div>';
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
    function page_autorisations_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_autorisations='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_autorisation' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_autorisations=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_autorisations)){

            $tt=$this->sql0->sql_iii(
                 /*sql_319()*/ 319,
                array(/**/
                    'T0_chi_id_autorisation' => $chi_id_autorisations
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer ' . self::UN_UNE_ELEMENT_GERE . '<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_autorisations1.formulaire1(action1(page_liste_des_autorisations1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_autorisations_supprimer1">' . PHP_EOL;
                $o1 .= '  <h3>confirmez vous la suppression de ' . self::LE_LA_ELEMENT_GERE . '(<b>' . $tt[__xva][0]['T0.chi_id_autorisation'] . '</b>) ?</h3>';
                /*
                  
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_autorisation'] . '" id="chi_id_autorisation" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_autorisations1.formulaire1(conteneur1(vv_autorisations_supprimer1),page_liste_des_autorisations1())" title="" >Je confirme la suppression</div>';
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
    function page_autorisations_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_autorisations='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_autorisation' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_autorisations=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_autorisations) && $chi_id_autorisations > 0){

            $tt=$this->sql0->sql_iii(
                 /*sql_319()*/ 319,
                array(/**/
                    'T0_chi_id_autorisation' => $chi_id_autorisations
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>modifier ' . self::LE_LA_ELEMENT_GERE . '(' . $tt[__xva][0]['T0.chi_id_autorisation'] . ') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_autorisations1.formulaire1(action1(page_liste_des_autorisations1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_autorisations_modifier1">' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_autorisation'] . '" id="chi_id_autorisation" />' . PHP_EOL;

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
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_acces_autorisation']) . '"  id="chx_acces_autorisation" />' . PHP_EOL;
                $o1 .= '        <span id="chx_acces_autorisation_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_acces_autorisation'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_acces_autorisation'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_acces']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_acces1.page_acces_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_acces_autorisation)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_acces_autorisation_libelle)';
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
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>source</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_source_autorisation']) . '"  id="chx_source_autorisation" />' . PHP_EOL;
                $o1 .= '        <span id="chx_source_autorisation_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_source_autorisation'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_source_autorisation'] . ') ' . htmlentities($tt[__xva][0]['T2.chp_nom_source']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_sources1.page_sources_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_source_autorisation)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_source_autorisation_libelle)';
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
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_autorisations1.formulaire1(conteneur1(vv_autorisations_modifier1),chi_id_autorisation(' . $chi_id_autorisations . '),page_liste_des_autorisations1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_autorisations1.formulaire1(conteneur1(vv_autorisations_modifier1),chi_id_autorisation(' . $chi_id_autorisations . '))" title="" >enregistrer</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }else{

            $this->page_liste_des_autorisations1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
        }

    }
    /*
      =============================================================================================================
      Pour les iframes sur les autorisations
      =============================================================================================================
    */
    function vv_autorisations_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_autorisations1.page_autorisations_sous_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_autorisations1.page_autorisations_sous_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_autorisations_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function page_autorisations_sous_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $fonction1='c_autorisations1.page_autorisations_sous_liste1';
        /* déverminage */
        $__nbMax=30;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['T0_chi_id_autorisation']='';
        $par['T0_chx_acces_autorisation']='';
        $par['T0_chx_source_autorisation']='';
        $par['T1_chp_nom_acces']='';
        $par['T2_chp_nom_source']='';
        
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

        $par['T0_chi_id_autorisation']=$par['T0_chi_id_autorisation']??'';
        $par['T0_chx_acces_autorisation']=$par['T0_chx_acces_autorisation']??'';
        $par['T0_chx_source_autorisation']=$par_mat['T0_chx_source_autorisation']??'';
        $par['T1_chp_nom_acces']=$par_mat['T1_chp_nom_acces']??'';
        $par['T2_chp_nom_source']=$par_mat['T2_chp_nom_source']??'';
        
        
        $nom_filtre='vv_autorisations_filtre_choix_1';
        $o1='<h1>choisir ' . self::UN_UNE_ELEMENT_GERE . '</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /*
        
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom source</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T2_chp_nom_source" value="' . $par['T2_chp_nom_source'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T2_chp_nom_source'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T2_chp_nom_source),value(\'\'))),c_autorisations1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
        
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom acces</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T1_chp_nom_acces" value="' . $par['T1_chp_nom_acces'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T1_chp_nom_acces'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T1_chp_nom_acces),value(\'\'))),c_autorisations1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
        
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_autorisation" value="' . $par['T0_chi_id_autorisation'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
        
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>id acces</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chx_acces_autorisation" value="' . $par['T0_chx_acces_autorisation'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chx_acces_autorisation'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chx_acces_autorisation),value(\'\'))),c_autorisations1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
        
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>id source</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chx_source_autorisation" value="' . $par['T0_chx_source_autorisation'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chx_source_autorisation'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chx_source_autorisation),value(\'\'))),c_autorisations1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
        
        */
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_autorisations1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_champ_dans_parent1" value="' . $par['nom_champ_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_libelle_dans_parent1" value="' . $par['nom_libelle_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=$this->sql0->sql_iii(
             317,
             array(
                /**/
                
                'T0_chi_id_autorisation' => $par['T0_chi_id_autorisation'] === '' ? '' : $par['T0_chi_id_autorisation'],
                'T0_chx_source_autorisation' => $par['T0_chx_source_autorisation'] === '' ? '' : '' . $par['T0_chx_source_autorisation'] . '',
                'T0_chx_acces_autorisation' => $par['T0_chx_acces_autorisation'] === '' ? '' : '' . $par['T0_chx_acces_autorisation'] . '',
                'T1_chp_nom_acces' => $par['T1_chp_nom_acces'] === '' ? '' : '' . $par['T1_chp_nom_acces'] . '',
                'T2_chp_nom_source' => $par['T2_chp_nom_source'] === '' ? '' : '' . $par['T2_chp_nom_source'] . '',
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des autorisations [' . __LINE__ . ']';
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
        $lsttbl .= '<th>id autorisation</th>';
        $lsttbl .= '<th>nom source</th>';
        $lsttbl .= '<th>nom acces</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $parametres='';
            $parametres .= 'interface1.choisir_dans_sous_fenetre1(';
            $parametres .= '    nom_champ_dans_parent1(' . $par['nom_champ_dans_parent1'] . ')';
            $parametres .= '    nom_libelle_dans_parent1(' . $par['nom_libelle_dans_parent1'] . ')';
            $parametres .= '    id1(' . $v0['T0.chi_id_autorisation'] . ')';
            $parametres .= '    libelle1("(' . $v0['T0.chi_id_autorisation'] . ') ' . $v0['T1.chp_nom_acces'] . " " . $v0['T2.chp_nom_source'] . '" )';
            $parametres .= ')';
            $lsttbl .= '<td style="max-width:calc(1*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="' . htmlentities($parametres) . '">=&gt;</div>';
            $lsttbl .= '</td>';
            /*
            
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_autorisation'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chx_source_autorisation'] !== null){

                $lsttbl .= '' . enti1($v0['T0.chx_source_autorisation']) . '';

            }

            $lsttbl .= '</td>';
            /*
            
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T2.chp_nom_source'] . '';
            $lsttbl .= '</td>';
            /*
            
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T1.chp_nom_acces'] . '';
            $lsttbl .= '</td>';
            /*
            
            */
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_liste_des_autorisations1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
     
     
        if(!isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

            $donnees_retournees[__x_signaux][__xal][]=' vous devez activer un projet [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            return;

        }
     
        $__nbMax=30;
        $par=array();
        $par['T0_chi_id_autorisation']='';
        $par['T0_chx_acces_autorisation']='';
        $par['T0_chx_source_autorisation']='';
        $par['T1_chp_nom_acces']='';
        $par['T2_chp_nom_source']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_autorisations1.page_liste_des_autorisations1' === $mat[$i][1]){

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
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_autorisations1.page_liste_des_autorisations1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_autorisations1.page_liste_des_autorisations1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_autorisations1.page_liste_des_autorisations1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_autorisations1.page_liste_des_autorisations1']=$par;
        }

        $par['T0_chi_id_autorisation']=$par['T0_chi_id_autorisation']??'';
        $par['T0_chx_source_autorisation']=$par['T0_chx_source_autorisation']??'';
        $par['T0_chx_acces_autorisation']=$par['T0_chx_acces_autorisation']??'';
        $par['T1_chp_nom_acces']=$par['T1_chp_nom_acces']??'';
        $par['T2_chp_nom_source']=$par['T2_chp_nom_source']??'';
        
        $fonction1='c_autorisations1.page_liste_des_autorisations1';
        $nom_filtre='vv_autorisations_filtre1';
        $o1='<h1>Liste des autorisations</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /*
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_autorisation" value="' . $par['T0_chi_id_autorisation'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>id acces</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chx_acces_autorisation" value="' . $par['T0_chx_acces_autorisation'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;

        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>id source</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chx_source_autorisation" value="' . $par['T0_chx_source_autorisation'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
          
        /*
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom acces</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T1_chp_nom_acces" value="' . $par['T1_chp_nom_acces'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;


        /*
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom source</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T2_chp_nom_source" value="' . $par['T2_chp_nom_source'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;



        /*
          
        */
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_autorisations1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        $o1 .= '</div>';
        
        $tt=$this->sql0->sql_iii(
             /*sql_317()*/ 317,
            array(
                /**/
                'T0_chi_id_autorisation' => $par['T0_chi_id_autorisation'] === '' ? '' : $par['T0_chi_id_autorisation'],
                'T0_chx_source_autorisation' => $par['T0_chx_source_autorisation'] === '' ? '' : '' . $par['T0_chx_source_autorisation'] . '',
                'T0_chx_acces_autorisation' => $par['T0_chx_acces_autorisation'] === '' ? '' : '' . $par['T0_chx_acces_autorisation'] . '',
                'T1_chp_nom_acces' => $par['T1_chp_nom_acces'] === '' ? '' : '' . $par['T1_chp_nom_acces'] . '',
                'T2_chp_nom_source' => $par['T2_chp_nom_source'] === '' ? '' : '' . $par['T2_chp_nom_source'] . '',
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
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_autorisations1.page_liste_des_autorisations1(indice_menu(10))" title="autorisations" >';
            $o1 .= '      Réessayer';
            $o1 .= '    </div>';
            $o1 .= '    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\'application';
            $o1 .= '  </div>';
            unset($_SESSION[__X_CLE_APPLICATION]['c_autorisations1.page_liste_des_autorisations1']);
            
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
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_autorisations1.formulaire1(action1(page_autorisations_creer1))" title="nouveau autorisation" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>acces</th>';
        $lsttbl .= '<th>source</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_autorisations1.formulaire1(action1(page_autorisations_modifier1),chi_id_autorisation(' . $v0['T0.chi_id_autorisation'] . '))">✎</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_autorisations1.formulaire1(action1(page_autorisations_dupliquer1),chi_id_autorisation(' . $v0['T0.chi_id_autorisation'] . '))" title="dupliquer">⎘</div>';
            
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_autorisations1.formulaire1(action1(page_autorisations_supprimer1),chi_id_autorisation(' . $v0['T0.chi_id_autorisation'] . '))">🗑</div>';

            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_autorisation'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '(' . $v0['T0.chx_acces_autorisation'] . ') '.enti1($v0['T1.chp_nom_acces'] );
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '(' . $v0['T0.chx_source_autorisation'] . ') '.enti1($v0['T2.chp_nom_source'] );
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_autorisations1.page_liste_des_autorisations1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/