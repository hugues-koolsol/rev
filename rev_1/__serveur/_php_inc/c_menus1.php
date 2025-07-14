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
                   || $conteneur1 === 'vv_menus_filtre_choix_1'
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
        $donnees_sql=array( array(/**/
                    'chx_page_menu' => $donnees_recues[__xva]['chx_page_menu']===''?NULL:$donnees_recues[__xva]['chx_page_menu'],
                    'che_ordre_menu' => $donnees_recues[__xva]['che_ordre_menu'],
                    'cht_prerequis_rev_menu' => $donnees_recues[__xva]['cht_prerequis_rev_menu'],
                    'cht_prerequis_php_menu' => $donnees_recues[__xva]['cht_prerequis_php_menu'],
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=$this->sql0->sql_iii(
             /*sql_99()*/ 99,
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
             /*sql_200()*/ 200,
            array(/**/
                'T0_chi_id_menu' => $donnees_recues[__xva]['chi_id_menu']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu && $donnees_recues[__xva]['chi_id_menu'] > 1){

            $tt=$this->sql0->sql_iii(
                 /*sql_87()*/ 202,
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
    function ecrire_les_fichiers_menus($cumul_menus){
     
        if(!isset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_menus'])){
            return array( __xst => __xer);
        }
        
//        echo __FILE__ . ' ' . __LINE__ . ' $contenu_fichier = <pre>' . enti1(var_export( $cumul_menus , true )) . '</pre>' ; exit(0);
        foreach($cumul_menus as $k1=>$v1){
         
            $contenu_fichier='';
            
            $nom_fichier=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_menus'].DIRECTORY_SEPARATOR.$k1.'.php';
            
            foreach($v1 as $k2 => $v2){
             
   //            $t[]='<div data-id_menu="4" class="hug_bouton" data-hug_click="c_taches1.page_liste_des_taches1(T0_chp_priorite_tache2(99)),indice_menu(4)" title="tâches">tâches</div>' . PHP_EOL;
                $hug_click=str_replace('.php','',$v2['chp_nom_source']).'.'.$v2['chp_methode_page'].'(';
                if($v2['cht_contenu_methode_page']!==NULL){
                    $hug_click.=$v2['cht_contenu_methode_page'];
                }
                $hug_click.=')';
                if($v2['cht_complement_page']!==NULL){
                    $hug_click.=','.$v2['cht_complement_page'];
                }
                $hug_click.=',indice_menu('.$v2['chi_id_menu'].')';
                $contenu_lien='<div data-id_menu="' . $v2['chi_id_menu'] .'" class="hug_bouton" data-hug_click="' . $hug_click . '" title="">'. $v2['chp_nom_page'] .'</div>';
                if($v2['cht_prerequis_php_menu']!==null){
                    $contenu_fichier.='if(' . $v2['cht_prerequis_php_menu'] . '){'.PHP_EOL.'    ';
                }
                $contenu_fichier.='$t[]=\''.str_replace('\'','\\\'',str_replace('\\','\\\\',$contenu_lien)).'\';'.PHP_EOL;
                if($v2['cht_prerequis_php_menu']!==null){
                    $contenu_fichier.='}'.PHP_EOL;
                }
            }
         
            //echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $k1 , true ) . '</pre> <pre>' . var_export( $v1 , true ) . '</pre>' ; exit(0);
        }
        if(file_put_contents($nom_fichier , '<?php'.PHP_EOL.$contenu_fichier)===false){
            $donnees_retournees[__x_signaux][__xer][]='erreur ecriture fichier ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return array( __xst => __xer);
        }
        return array( __xst => __xsu);
     
     
    }
    /*
      =============================================================================================================
    */
    function construire_menus(&$donnees_retournees,&$mat,&$donnees_recues){
     
     
     
        $tt203=$this->sql0->sql_iii(
             /*sql_203()*/ 203,
            array(/**/
                'T0_chi_id_menu' => 3,
            ),
            $donnees_retournees
        );

        /*#
          array (
                'T0.chi_id_menu' => 4,
                'T1.chp_nom_page' => 'tâches',
                'T0.cht_prerequis_rev_menu' => NULL,
                'T1.chp_methode_page' => 'page_liste_des_taches1',
                'T1.cht_complement_page' => NULL,
                'T1.cht_contenu_methode_page' => 'T0_chp_priorite_tache2(99)',
                'T2.chx_groupe_acces' => 1,
                'T2.chx_metier_acces' => 1,
                'T3.chp_nom_source' => 'c_taches1.php',
          ),
        */                

//        echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt203 , true ) . '</pre>' ; exit(0);

        if($tt203[__xst] === __xer){
            $donnees_retournees[__x_signaux][__xer][]='erreur construire_menus ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
            return array( __xst => __xer);
        }
        $chx_groupe_acces=0;
        $chx_metier_acces=0;
        $cumul_menus=array();
        $cle_precedente='';
        $cle_courante='';
        foreach($tt203[__xva] as $k1 => $v1){
            $cle_courante='g_'.$v1['T2.chx_groupe_acces'].'_m_'.$v1['T2.chx_metier_acces'];
            
            if($cle_courante!==$cle_precedente){
                if($cle_precedente===''){
                    $cumul_menus[$cle_courante]=array(array(
                        'chi_id_menu' => $v1['T0.chi_id_menu'],
                        'chp_nom_page' => $v1['T1.chp_nom_page'],
                        'chp_methode_page' => $v1['T1.chp_methode_page'],
                        'cht_contenu_methode_page' => $v1['T1.cht_contenu_methode_page'],
                        'cht_complement_page' => $v1['T1.cht_complement_page'],
                        'chp_nom_source' => $v1['T3.chp_nom_source'],
                        'cht_prerequis_rev_menu' => $v1['T0.cht_prerequis_rev_menu'],
                        'cht_prerequis_php_menu' => $v1['T0.cht_prerequis_php_menu'],
                    ));
                    $cle_precedente='g_'.$v1['T2.chx_groupe_acces'].'_m_'.$v1['T2.chx_metier_acces'];
                    continue;
                }else{
                    $fm=$this->ecrire_les_fichiers_menus($cumul_menus);
                    if($fm[__xst]!==__xsu){
                         $donnees_retournees[__x_signaux][__xer][]='erreur ecrire_les_fichiers_menus ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
                         return array( __xst => __xer);
                    }
                    $cle_courante='g_'.$v1['T2.chx_groupe_acces'].'_m_'.$v1['T2.chx_metier_acces'];
                    $cle_precedente=$cle_courante;
                    $cumul_menus[$cle_courante]=array(
                        'chi_id_menu' => $v1['T0.chi_id_menu'],
                        'chp_nom_page' => $v1['T1.chp_nom_page'],
                        'chp_methode_page' => $v1['T1.chp_methode_page'],
                        'cht_contenu_methode_page' => $v1['T1.cht_contenu_methode_page'],
                        'cht_complement_page' => $v1['T1.cht_complement_page'],
                        'chp_nom_source' => $v1['T3.chp_nom_source'],
                        'cht_prerequis_rev_menu' => $v1['T0.cht_prerequis_rev_menu'],
                        'cht_prerequis_php_menu' => $v1['T0.cht_prerequis_php_menu'],
                        
                    );
                }
            }else{
              $cumul_menus[$cle_courante][]=array(
                  'chi_id_menu' => $v1['T0.chi_id_menu'],
                  'chp_nom_page' => $v1['T1.chp_nom_page'],
                  'chp_methode_page' => $v1['T1.chp_methode_page'],
                  'cht_contenu_methode_page' => $v1['T1.cht_contenu_methode_page'],
                  'cht_complement_page' => $v1['T1.cht_complement_page'],
                  'chp_nom_source' => $v1['T3.chp_nom_source'],
                  'cht_prerequis_rev_menu' => $v1['T0.cht_prerequis_rev_menu'],
                  'cht_prerequis_php_menu' => $v1['T0.cht_prerequis_php_menu'],
              );
            }
        }
        if(count($cumul_menus)>0){
            $fm=$this->ecrire_les_fichiers_menus($cumul_menus);
            if($fm[__xst]!==__xsu){
                 $donnees_retournees[__x_signaux][__xer][]='erreur ecrire_les_fichiers_menus ' . self::LE_LA_ELEMENT_GERE . ' [' . __LINE__ . ']';
                 return array( __xst => __xer);
            }
        }
     
        return array( __xst => __xsu);
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
        $tt=$this->sql0->sql_iii(
             /*sql_200()*/ 200,
            array(/**/
                'T0_chi_id_menu' => $donnees_recues[__xva]['chi_id_menu']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            /*
              afr 
              le parent de racine doit être racine
            */
            $tt=$this->sql0->sql_iii(
                 /*sql_201()*/ 201,
                array(/**/
                    'c_chi_id_menu' => $tt[__xva][0]['T0.chi_id_menu'],
                    'n_chx_page_menu' => $donnees_recues[__xva]['chx_page_menu'],
                    'n_che_ordre_menu' => $donnees_recues[__xva]['che_ordre_menu'],
                    'n_cht_prerequis_rev_menu' => $donnees_recues[__xva]['cht_prerequis_rev_menu'],
                    'n_cht_prerequis_php_menu' => $donnees_recues[__xva]['cht_prerequis_php_menu'],
                    
                    
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_menu'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){



                $ocm=$this->construire_menus($donnees_retournees,$mat,$donnees_recues);
                if($ocm[__xst]!==__xsu){
                  $donnees_retournees[__x_signaux][__xer][]='erreur lors de la construction des menus [' . __LINE__ . ']';
                  return;
                }
                
                if($page_liste_des_menus1 === true){

                    $this->page_liste_des_menus1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]='👍 modification effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_menu'] . ') [' . __LINE__ . ']';

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
    function page_menus_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter ' . self::UN_UNE_ELEMENT_GERE . ' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_menus1.formulaire1(action1(page_liste_des_menus1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_menus_creer1">' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>ordre</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" maxlength="64" id="che_ordre_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>page</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        /**/
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_page_menu" />' . PHP_EOL;
        $o1 .= '        <span id="chx_page_menu_libelle">' . PHP_EOL;
        $o1 .= '*indéfini' . PHP_EOL;
        $o1 .= '</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_pages1.page_pages_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_page_menu)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_page_menu_libelle)';
        $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
        $parametre_sous_fenetre .= ')';
        $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
        $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
        $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        /**/
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>prérequis rev</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <textarea id="cht_prerequis_rev_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ></textarea>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>prérequis php</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <textarea id="cht_prerequis_php_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ></textarea>' . PHP_EOL;
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
        
        if(is_numeric($chi_id_menus) && $chi_id_menus > 3){

            /*afr 1 */
            $tt=$this->sql0->sql_iii(
                 /*sql_200()*/ 200,
                array(/**/
                    'T0_chi_id_menu' => $chi_id_menus
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer ' . self::UN_UNE_ELEMENT_GERE . '<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_menus1.formulaire1(action1(page_liste_des_menus1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_menus_supprimer1">' . PHP_EOL;
                $o1 .= '  <h3>confirmez voous la suppression de ' . self::LE_LA_ELEMENT_GERE . '(<b>' . $tt[__xva][0]['T0.chi_id_menu'] . '</b>) ?</h3>';
                /*
                  =====================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>ordre</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_ordre_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.che_ordre_menu']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;


                /*
                  =====================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>page</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_page_menu']) . '"  id="chx_page_menu" />' . PHP_EOL;
                $o1 .= '        <span id="chx_page_menu_libelle">' . PHP_EOL;
                
                
                if($tt[__xva][0]['T0.chx_page_menu'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_page_menu'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_page']) . PHP_EOL;
                }
                
                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_pages1.page_pages_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_page_menu)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_page_menu_libelle)';
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
                $o1 .= '      <span>préquis</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <textarea id="cht_prerequis_rev_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_prerequis_rev_menu']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>préquis php</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <textarea id="cht_prerequis_php_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_prerequis_php_menu']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================================
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
                 /*sql_200()*/ 200,
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
                /*
                  =====================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>ordre</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_ordre_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.che_ordre_menu']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>page</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_page_menu']) . '"  id="chx_page_menu" />' . PHP_EOL;
                $o1 .= '        <span id="chx_page_menu_libelle">' . PHP_EOL;
                
                
                if($tt[__xva][0]['T0.chx_page_menu'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_page_menu'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_page']) . PHP_EOL;
                }
                
                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_pages1.page_pages_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_page_menu)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_page_menu_libelle)';
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
                $o1 .= '      <span>prérequis rev</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <textarea id="cht_prerequis_rev_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_prerequis_rev_menu']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>prérequis php</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <textarea id="cht_prerequis_php_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_prerequis_php_menu']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================================
                */
                
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_modifier1),chi_id_menu(' . $chi_id_menus . '),page_liste_des_menus1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_fonctions_js1(compiler_zone_rev_vers_zone_php(zone_source(cht_prerequis_rev_menu),zone_resultat(cht_prerequis_php_menu))),c_menus1.formulaire1(conteneur1(vv_menus_modifier1),chi_id_menu(' . $chi_id_menus . '))" title="" >enregistrer</div>';
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
        $par['T0_chx_page_menu']='';
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
        $par['T0_chx_page_menu']=$par['T0_chx_page_menu']??'';
        $nom_filtre='vv_menus_filtre_choix_1';
        $o1='<h1>choisir un menu parent</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chx_page_menu" value="' . $par['T0_chx_page_menu'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chx_page_menu'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chx_page_menu),value(\'\'))),c_menus1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
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
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=$this->sql0->sql_iii(
             /*sql_98()*/ 98,
             /**/ array( 'T0_chi_id_menu' => $par['T0_chi_id_menu'] === '' ? '' : $par['T0_chi_id_menu'], 'T0_chx_page_menu' => $par['T0_chx_page_menu'] === '' ? '' : '' . $par['T0_chx_page_menu'] . '', 'quantitee' => $__nbMax, 'debut' => $__debut),
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
            $parametres .= '    id1(' . $v0['T0.chi_id_menu'] . ')';
            $parametres .= '    libelle1("(' . $v0['T0.chi_id_menu'] . ') ' . $v0['T0.chx_page_menu'] . '" )';
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
            
            if($v0['T0.chx_page_menu'] !== null){

                $lsttbl .= '' . enti1($v0['T0.chx_page_menu']) . '';

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
        $__nbMax=10;
        $par=array();
        $par['T0_chi_id_menu']='';
        $par['T0_chx_page_menu']='';
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
        $par['T0_chx_page_menu']=$par['T0_chx_page_menu']??'';
        $fonction1='c_menus1.page_liste_des_menus1';
        $nom_filtre='vv_menus_filtre1';
        $o1='<h1>Liste des menus</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>page</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chx_page_menu" value="' . $par['T0_chx_page_menu'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_menu" value="' . $par['T0_chi_id_menu'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
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
             /*sql_98()*/ 98,
            array(
                /**/
                'T0_chi_id_menu' => $par['T0_chi_id_menu'] === '' ? '' : $par['T0_chi_id_menu'],
                'T0_chx_page_menu' => $par['T0_chx_page_menu'] === '' ? '' : '' . $par['T0_chx_page_menu'] . '',
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
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_menus1.page_liste_des_menus1(T0_chp_priorite_menu2(99),indice_menu(10))" title="menus" >';
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
        $lsttbl .= '<th>page</th>';
        $lsttbl .= '<th>acces</th>';
        $lsttbl .= '<th>groupe</th>';
        $lsttbl .= '<th>métier</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_menus1.formulaire1(action1(page_menus_modifier1),chi_id_menu(' . $v0['T0.chi_id_menu'] . '))">✎</div>';
            
            if($v0['T0.chi_id_menu'] <= 3){

                $lsttbl .= '  <div class="hug_bouton_inactif">🗑</div>';

            }else{

                $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_menus1.formulaire1(action1(page_menus_supprimer1),chi_id_menu(' . $v0['T0.chi_id_menu'] . '))">🗑</div>';
            }

            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_menu'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '(' . $v0['T0.chx_page_menu'] . ') ' . enti1($v0['T1.chp_nom_page']) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . enti1($v0['T2.chp_nom_acces']) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '(' . $v0['T2.chx_groupe_acces'] . ') ' . enti1($v0['T3.chp_nom_groupe']) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '(' . $v0['T2.chx_metier_acces'] . ') ' . enti1($v0['T4.chp_nom_metier']) . '';
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