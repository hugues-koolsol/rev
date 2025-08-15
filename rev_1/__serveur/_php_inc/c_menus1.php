<?php
class c_menus1{
    private $sql0=null;
    /*
      erreur lors de l'"action" pour 
      Attention : du le cheval / de cheval vs de la menu / du la menu
    */
    private const LE_LA_ELEMENT_GERE = 'le menu';
    private const UN_UNE_ELEMENT_GERE = 'un menu';
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
      traitement des formulaires des menus
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_menus1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_menus_creer1'
                       || $action1 === 'page_menus_modifier1'
                       || $action1 === 'page_menus_supprimer1'
                       || $action1 === 'page_liste_des_menus1'
                       || $action1 === 'page_menus_dupliquer1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_menus_modifier1'
                   || $conteneur1 === 'vv_menus_creer1'
                   || $conteneur1 === 'vv_menus_supprimer1'
                   || $conteneur1 === 'vv_menus_filtre1'
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
    function vv_menus_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_menus1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_menus1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_menus1=true;
                break;

            }

        }
        
        
        
         
         
        $tt326=$this->sql0->sql_iii(
             /*sql_326()*/ 326,
            array(/**/
                'T0_chi_id_autorisation' => $donnees_recues[__xva]['chx_autorisation_menu'],
                'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt326[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $dossier=$obj_doss->construire_chemin($tt326[__xva][0]['T1.chx_dossier_id_source']);
        
        if($dossier['__xst'] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt326[__xva][0] , true ) . '</pre>' ; exit(0);*/
        
        if(!is_file($dossier['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt326[__xva][0]['T1.chp_nom_source'])){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        require_once($dossier['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt326[__xva][0]['T1.chp_nom_source']);
        $class_methods=get_class_methods(str_replace('.php','',$tt326[__xva][0]['T1.chp_nom_source']));
        $trouve=false;
        $non_trouve='';
        foreach($class_methods as $k1 => $v1){
            
            if($v1 === $donnees_recues[__xva]['chp_methode_menu']){

                $trouve=true;
                break;

            }
            if($v1!=='__constructor'){
                $non_trouve='<br />"'.$v1.'"'.$non_trouve;
            }

        }
        
        if($trouve === false){

            $donnees_retournees[__x_signaux][__xer][]='méthode non trouvée parmis  ' . $non_trouve . ' [' . __LINE__ . ']';
            return;

        }
        
        


        $donnees_sql=array( array(/**/
                    'chx_autorisation_menu' => $donnees_recues[__xva]['chx_autorisation_menu'] === '' ? null : $donnees_recues[__xva]['chx_autorisation_menu'],
                    'cht_libelle_menu' => $donnees_recues[__xva]['cht_libelle_menu'] === '' ? null : $donnees_recues[__xva]['cht_libelle_menu'],
                    'chp_titre_menu' => $donnees_recues[__xva]['chp_titre_menu'] === '' ? null : $donnees_recues[__xva]['chp_titre_menu'],
                    'chp_methode_menu' => $donnees_recues[__xva]['chp_methode_menu'] === '' ? null : $donnees_recues[__xva]['chp_methode_menu'],
                    'cht_initialisation_menu' => $donnees_recues[__xva]['cht_initialisation_menu'] === '' ? null : $donnees_recues[__xva]['cht_initialisation_menu'],
                    'cht_complements_menu' => $donnees_recues[__xva]['cht_complements_menu'] === '' ? null : $donnees_recues[__xva]['cht_complements_menu'],
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=$this->sql0->sql_iii(
             /*sql_323()*/ 323,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }else if($tt['changements'] === 1){

            $donnees_retournees[__xst]=__xsu;
            
            if($page_liste_des_menus1 === true){

                $this->page_liste_des_menus1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_menu(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_menus_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_menus1.formulaire1(action1(page_menus_modifier1),chi_id_menu(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_menus_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_menus1.page_liste_des_menus1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_menus1.page_liste_des_menus1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_menus1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_menus_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=$this->sql0->sql_iii(
             /*sql_319()*/ 319,
            array(/**/
                'T0_chi_id_menu' => $donnees_recues[__xva]['chi_id_menu']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=$this->sql0->sql_iii(
                 /*sql_320()*/ 320,
                array(/**/
                    'chi_id_menu' => $tt[__xva][0]['T0.chi_id_menu']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_menu'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                $donnees_retournees[__x_signaux][__xsu][]='👍 suppression effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_menu'] . ')';
                $this->page_liste_des_menus1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_menu'] . ') [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_menu'] . ') [' . __LINE__ . ']';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_menus_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_menus1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_menus1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_menus1=true;

            }

        }
        $tt324=$this->sql0->sql_iii(
             /*sql_324()*/ 324,
            array(/**/
                'T0_chi_id_menu' => $donnees_recues[__xva]['chi_id_menu']
            ),
            $donnees_retournees
        );
        
        if($tt324[__xst] !== __xsu){
         
            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
            return;
        }
         
         
         
         
        $tt326=$this->sql0->sql_iii(
             /*sql_326()*/ 326,
            array(/**/
                'T0_chi_id_autorisation' => $donnees_recues[__xva]['chx_autorisation_menu'],
                'T0_chx_projet_id_source' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt326[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $dossier=$obj_doss->construire_chemin($tt326[__xva][0]['T1.chx_dossier_id_source']);
        
        if($dossier['__xst'] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt326[__xva][0] , true ) . '</pre>' ; exit(0);*/
        
        if(!is_file($dossier['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt326[__xva][0]['T1.chp_nom_source'])){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return;

        }

        require_once($dossier['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $tt326[__xva][0]['T1.chp_nom_source']);
        $class_methods=get_class_methods(str_replace('.php','',$tt326[__xva][0]['T1.chp_nom_source']));
        $trouve=false;
        $non_trouve='';
        foreach($class_methods as $k1 => $v1){
            
            if($v1 === $donnees_recues[__xva]['chp_methode_menu']){

                $trouve=true;
                break;

            }
            if($v1!=='__constructor'){
                $non_trouve='<br />"'.$v1.'"'.$non_trouve;
            }

        }
        
        if($trouve === false){

            $donnees_retournees[__x_signaux][__xer][]='méthode non trouvée parmis  ' . $non_trouve . ' [' . __LINE__ . ']';
            return;

        }

        $tt=$this->sql0->sql_iii(
             /*sql_321()*/ 325,
            array(/**/
                'c_chi_id_menu' => $donnees_recues[__xva]['chi_id_menu'],
                'n_cht_libelle_menu' => $donnees_recues[__xva]['cht_libelle_menu'],
                'n_chp_titre_menu' => $donnees_recues[__xva]['chp_titre_menu'],
                'n_chx_autorisation_menu' => $donnees_recues[__xva]['chx_autorisation_menu'],
                'n_chp_methode_menu' => $donnees_recues[__xva]['chp_methode_menu'],
                'n_cht_initialisation_menu' => $donnees_recues[__xva]['cht_initialisation_menu'],
                'n_cht_complements_menu' => $donnees_recues[__xva]['cht_complements_menu'],
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_menu'] . ') [' . __LINE__ . ']';

        }else if($tt['changements'] === 1){

            
            if($page_liste_des_menus1 === true){

                $this->page_liste_des_menus1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__xst]=__xsu;
            }

            $donnees_retournees[__x_signaux][__xsu][]='👍 modification effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_menu'] . ') [' . __LINE__ . ']';

        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }


    }
    
    
    /*
      =============================================================================================================
    */
    function page_menus_dupliquer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_recues = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        
        $o1='';
        $chi_id_menus='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_menu' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_menus=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_menus) && $chi_id_menus > 0){
         
            $tt=$this->sql0->sql_iii(
                 /*sql_324()*/ 324,
                array(/**/
                    'T0_chi_id_menu' => $chi_id_menus
                ),
                $donnees_retournees
            );
            if($tt[__xst] === __xsu){
               $donnees_recues['dupliquer']=$tt[__xva][0];
               $this->page_menus_creer1($donnees_retournees,$mat,$donnees_recues);
            }
        }
        
    }
    
    /*
      =============================================================================================================
    */
    function page_menus_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter ' . self::UN_UNE_ELEMENT_GERE . ' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_menus1.formulaire1(action1(page_liste_des_menus1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_menus_creer1">' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>libelle</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
        $o1 .= '         <textarea placeholder="libelle visible" autocorrect="off" autocapitalize="off" spellcheck="false"  id="cht_libelle_menu" >';
        if(isset($donnees_recues['dupliquer']['T0.cht_libelle_menu'])){
            $o1.=enti1($donnees_recues['dupliquer']['T0.cht_libelle_menu']);
        }
        
        $o1 .= '</textarea>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>titre</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="titre" autocorrect="off" autocapitalize="off" spellcheck="false"  id="chp_titre_menu" value="';
        if(isset($donnees_recues['dupliquer']['T0.chp_titre_menu'])){
            $o1.=enti1($donnees_recues['dupliquer']['T0.chp_titre_menu']);
        }
        
        $o1 .= '" maxlength="64" style="width:80%;" autocorrect="off" autocapitalize="off" spellcheck="false" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>autorisation<br />(accès source)</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        if(isset($donnees_recues['dupliquer']['T0.chx_autorisation_menu'])){
            $o1 .= '        <input type="hidden" value="'.$donnees_recues['dupliquer']['T0.chx_autorisation_menu'].'"  id="chx_autorisation_menu" />' . PHP_EOL;
            $o1 .= '        <span id="chx_autorisation_menu_libelle">';
            $o1 .= '(' . $donnees_recues['dupliquer']['T0.chx_autorisation_menu'] . ') ' . enti1($donnees_recues['dupliquer']['T2.chp_nom_acces']) . ' ' . enti1($donnees_recues['dupliquer']['T3.chp_nom_source']) ; // . htmlentities($donnees_recues['dupliquer']['T1.chp_nom_acces']) . PHP_EOL;
            $o1 .= '</span>' . PHP_EOL;
        }else{
            $o1 .= '        <input type="hidden" value=""  id="chx_autorisation_menu" />' . PHP_EOL;
            $o1 .= '        <span id="chx_autorisation_menu_libelle">*indéfini</span>' . PHP_EOL;
        }
        $parametre_sous_fenetre='c_autorisations1.page_autorisations_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_autorisation_menu)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_autorisation_menu_libelle)';
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
        $o1 .= '      <span>méthode</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="méthode" id="chp_methode_menu" value="" maxlength="64" style="width:80%;" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>initialisation de la méthode</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
        
        $o1 .= '        <div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_initialisation_menu)))" title="formater le source rev">(😊)</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_initialisation_menu)))" title="agrandir la zone">🖐</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_initialisation_menu)))" title="retrecir la zone">👊</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_initialisation_menu)))" title="vider la zone">🚫</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_initialisation_menu)))" title="copier le contenu">📋</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_initialisation_menu)))" title="aller à la position">position</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_initialisation_menu)))" title="aller à la ligne">ligne</div>' . PHP_EOL;
        $o1 .= '        </div>';
        $o1 .= '        <textarea placeholder="rev d\'initialisation contenu dans l\'appel de la méthode" autocorrect="off" autocapitalize="off" spellcheck="false"  id="cht_initialisation_menu" >';
        if(isset($donnees_recues['dupliquer']['T0.cht_initialisation_menu'])){
            $o1.=enti1($donnees_recues['dupliquer']['T0.cht_initialisation_menu']);
        }
        $o1 .= '</textarea>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>compléments</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
        $o1 .= '        <div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_complements_menu)))" title="formater le source rev">(😊)</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_complements_menu)))" title="agrandir la zone">🖐</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_complements_menu)))" title="retrecir la zone">👊</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_complements_menu)))" title="vider la zone">🚫</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_complements_menu)))" title="copier le contenu">📋</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_complements_menu)))" title="aller à la position">position</div>' . PHP_EOL;
        $o1 .= '          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_complements_menu)))" title="aller à la ligne">ligne</div>' . PHP_EOL;
        $o1 .= '        </div>';
        $o1 .= '         <textarea placeholder="rev complément" autocorrect="off" autocapitalize="off" spellcheck="false" id="cht_complements_menu" >';
        if(isset($donnees_recues['dupliquer']['T0.cht_complements_menu'])){
            $o1.=enti1($donnees_recues['dupliquer']['T0.cht_complements_menu']);
        }
        
        $o1 .= '</textarea>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_creer1),page_liste_des_menus1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_creer1))" title="" >ajouter</div>';
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
    function page_menus_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_menus='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_menu' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_menus=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_menus)){

            $tt=$this->sql0->sql_iii(
                 /*sql_319()*/ 319,
                array(/**/
                    'T0_chi_id_menu' => $chi_id_menus
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer ' . self::UN_UNE_ELEMENT_GERE . '<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_menus1.formulaire1(action1(page_liste_des_menus1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_menus_supprimer1">' . PHP_EOL;
                $o1 .= '  <h3>confirmez vous la suppression de ' . self::LE_LA_ELEMENT_GERE . '(<b>' . $tt[__xva][0]['T0.chi_id_menu'] . '</b>) ?</h3>';
                /*
                  
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_menu'] . '" id="chi_id_menu" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_supprimer1),page_liste_des_menus1())" title="" >Je confirme la suppression</div>';
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
    function page_menus_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_menus='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_menu' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_menus=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_menus) && $chi_id_menus > 0){

            $tt=$this->sql0->sql_iii(
                 /*sql_324()*/ 324,
                array(/**/
                    'T0_chi_id_menu' => $chi_id_menus
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>modifier ' . self::LE_LA_ELEMENT_GERE . '(' . $tt[__xva][0]['T0.chi_id_menu'] . ') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_menus1.formulaire1(action1(page_liste_des_menus1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_menus_modifier1">' . PHP_EOL;
                /**/
                $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_menu'] . '" id="chi_id_menu" />' . PHP_EOL;
                /**/
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>libellé</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
                $o1 .= '        <textarea id="cht_libelle_menu" autocorrect="off" autocapitalize="off" spellcheck="false" >' . enti1($tt[__xva][0]['T0.cht_libelle_menu']) . '</textarea>' . PHP_EOL;
                $o1 .= '      </div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>titre</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_titre_menu" value="' . enti1($tt[__xva][0]['T0.chp_titre_menu']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;"/>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>autorisation<br />(accès source)</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_autorisation_menu']) . '"  id="chx_autorisation_menu" />' . PHP_EOL;
                $o1 .= '        <span id="chx_autorisation_menu_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_autorisation_menu'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_autorisation_menu'] . ') ' . htmlentities($tt[__xva][0]['T2.chp_nom_acces']) .'  ' . htmlentities($tt[__xva][0]['T3.chp_nom_source']) .' ' . PHP_EOL;
                }
                
                $o1 .= '</span>' . PHP_EOL;

                $parametre_sous_fenetre='c_autorisations1.page_autorisations_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_autorisation_menu)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_autorisation_menu_libelle)';
                $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
                $parametre_sous_fenetre .= ')';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
                $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>méthode</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_methode_menu" value="' . enti1($tt[__xva][0]['T0.chp_methode_menu']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>initialisation</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
                $o1 .= '        <div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_initialisation_menu)))" title="formater le source rev">(😊)</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_initialisation_menu)))" title="agrandir la zone">🖐</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_initialisation_menu)))" title="retrecir la zone">👊</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_initialisation_menu)))" title="vider la zone">🚫</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_initialisation_menu)))" title="copier le contenu">📋</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_initialisation_menu)))" title="aller à la position">position</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_initialisation_menu)))" title="aller à la ligne">ligne</div>' . PHP_EOL;
                $o1 .= '        </div>';
                $o1 .= '        <textarea id="cht_initialisation_menu" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_initialisation_menu']) . '</textarea>' . PHP_EOL;
                $o1 .= '      </div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>compléments</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
                $o1 .= '        <div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_complements_menu)))" title="formater le source rev">(😊)</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_complements_menu)))" title="agrandir la zone">🖐</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_complements_menu)))" title="retrecir la zone">👊</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_complements_menu)))" title="vider la zone">🚫</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_complements_menu)))" title="copier le contenu">📋</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_complements_menu)))" title="aller à la position">position</div>' . PHP_EOL;
                $o1 .= '          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_complements_menu)))" title="aller à la ligne">ligne</div>' . PHP_EOL;
                $o1 .= '        </div>';
                $o1 .= '        <textarea id="cht_complements_menu" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_complements_menu']) . '</textarea>' . PHP_EOL;
                $o1 .= '      </div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_modifier1),chi_id_menu(' . $chi_id_menus . '),page_liste_des_menus1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_modifier1),chi_id_menu(' . $chi_id_menus . '))" title="" >enregistrer</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }else{

            $this->page_liste_des_menus1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
        }

    }
    /*
      =============================================================================================================
      Pour les iframes sur les menus
      =============================================================================================================
    */
    function vv_menus_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_menus1.page_menus_sous_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_menus1.page_menus_sous_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_menus_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function page_menus_sous_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $fonction1='c_menus1.page_menus_sous_liste1';
        /* déverminage */
        $__nbMax=10;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['T0_chi_id_menu']='';
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

        $par['T0_chi_id_menu']=$par['T0_chi_id_menu']??'';
        $par['nom_champ_dans_parent1']=$par_mat['nom_champ_dans_parent1']??'';
        $par['nom_libelle_dans_parent1']=$par_mat['nom_libelle_dans_parent1']??'';
        $nom_filtre='vv_menus_filtre_choix_1';
        $o1='<h1>choisir un menu</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_menu" value="' . $par['T0_chi_id_menu'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_menus1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_champ_dans_parent1" value="' . $par['nom_champ_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_libelle_dans_parent1" value="' . $par['nom_libelle_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=$this->sql0->sql_iii(
             /*sql_178()*/ 178,
             /**/ array(
                /**/
                'T0_chi_id_menu' => $par['T0_chi_id_menu'] === '' ? '' : $par['T0_chi_id_menu'],
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des menus [' . __LINE__ . ']';
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
        $lsttbl .= '<th>menu</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $parametres='';
            $parametres .= 'interface1.choisir_dans_sous_fenetre1(';
            $parametres .= '    nom_champ_dans_parent1(' . $par['nom_champ_dans_parent1'] . ')';
            $parametres .= '    nom_libelle_dans_parent1(' . $par['nom_libelle_dans_parent1'] . ')';
            $parametres .= '    id1(' . $v0['T0.chi_id_menu'] . ')';
            $parametres .= '    libelle1("(' . $v0['T0.chi_id_menu'] . ') ' . $v0['T0.cht_libelle_menu'] . '" )';
            $parametres .= ')';
            $lsttbl .= '<td style="max-width:calc(1*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="' . htmlentities($parametres) . '">=&gt;</div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_menu'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.cht_libelle_menu'] !== null){

                $lsttbl .= '' . enti1($v0['T0.cht_libelle_menu']) . '';

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
    function page_liste_des_menus1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){


        if(!isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

            $donnees_retournees[__x_signaux][__xal][]=' vous devez activer un projet [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        $__nbMax=30;
        $par=array();
        $par['T0_chi_id_menu']='';
        $par['T0_cht_libelle_menu']='';
        $par['T0_chp_titre_menu']='';
        $par['T0_chx_autorisation_menu']='';
        $par['T0_chp_methode_menu']='';
        $par['T1_chx_acces_autorisation']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_menus1.page_liste_des_menus1' === $mat[$i][1]){

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
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_menus1.page_liste_des_menus1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_menus1.page_liste_des_menus1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_menus1.page_liste_des_menus1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_menus1.page_liste_des_menus1']=$par;
        }

        $par['T0_chi_id_menu']=$par['T0_chi_id_menu']??'';
        $par['T0_cht_libelle_menu']=$par['T0_cht_libelle_menu']??'';
        $par['T0_chp_titre_menu']=$par['T0_chp_titre_menu']??'';
        $par['T0_chx_autorisation_menu']=$par['T0_chx_autorisation_menu']??'';
        $par['T0_chp_methode_menu']=$par['T0_chp_methode_menu']??'';
        $par['T1_chx_acces_autorisation']=$par['T1_chx_acces_autorisation']??'';
        
        $fonction1='c_menus1.page_liste_des_menus1';
        $nom_filtre='vv_menus_filtre1';
        $o1='<h1>Liste des menus</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_menu" value="' . $par['T0_chi_id_menu'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>libelle</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_cht_libelle_menu" value="' . $par['T0_cht_libelle_menu'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>titre</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_titre_menu" value="' . $par['T0_chp_titre_menu'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>id autorisation</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chx_autorisation_menu" value="' . $par['T0_chx_autorisation_menu'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>méthode</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_methode_menu" value="' . $par['T0_chp_methode_menu'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        
        
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>id acces</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T1_chx_acces_autorisation" value="' . $par['T1_chx_acces_autorisation'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        
        

        /*
          
        */
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_menus1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        $o1 .= '</div>';

        $tt=$this->sql0->sql_iii(
             /*sql_322()*/ 322,
            array(
                /**/
                'T0_chi_id_menu' => $par['T0_chi_id_menu'],
                'T0_chx_autorisation_menu' => $par['T0_chx_autorisation_menu'],
                'T0_cht_libelle_menu' => $par['T0_cht_libelle_menu'] ,
                'T0_chp_titre_menu' => $par['T0_chp_titre_menu'],
                'T0_chp_methode_menu' => $par['T0_chp_methode_menu'],
                'T1_chx_acces_autorisation' => $par['T1_chx_acces_autorisation'],
                
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
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_menus1.page_liste_des_menus1(indice_menu(10))" title="menus" >';
            $o1 .= '      Réessayer';
            $o1 .= '    </div>';
            $o1 .= '    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\'application';
            $o1 .= '  </div>';
            unset($_SESSION[__X_CLE_APPLICATION]['c_menus1.page_liste_des_menus1']);
            
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
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_menus1.formulaire1(action1(page_menus_creer1))" title="nouveau menu" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>libelle</th>';
        $lsttbl .= '<th>titre</th>';
        $lsttbl .= '<th>autorisation</th>';
        $lsttbl .= '<th>source</th>';
        $lsttbl .= '<th>méthode</th>';
        $lsttbl .= '<th>id accès</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_menus1.formulaire1(action1(page_menus_modifier1),chi_id_menu(' . $v0['T0.chi_id_menu'] . '))">✎</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_menus1.formulaire1(action1(page_menus_dupliquer1),chi_id_menu(' . $v0['T0.chi_id_menu'] . '))" title="dupliquer">⎘</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_menus1.formulaire1(action1(page_menus_supprimer1),chi_id_menu(' . $v0['T0.chi_id_menu'] . '))">🗑</div>';
            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_menu'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= $v0['T0.cht_libelle_menu'] ;
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= enti1($v0['T0.chp_titre_menu']) ;
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '(' . $v0['T0.chx_autorisation_menu'] . ') ';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . enti1($v0['T3.chp_nom_source']) . ' ';
            $lsttbl .= '</td>';
            /**/

            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= enti1($v0['T0.chp_methode_menu']) ;
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '(' . $v0['T1.chx_acces_autorisation'] . ') ';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_menus1.page_liste_des_menus1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/