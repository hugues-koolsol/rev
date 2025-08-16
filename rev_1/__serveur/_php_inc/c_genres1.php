<?php
class c_genres1{
    private $sql0=null;
    /*
      erreur lors de l'"action" pour 
      Attention : du le cheval / de cheval vs de la liste / du la liste
    */
    private const LE_LA_ELEMENT_GERE = 'le genre';
    private const UN_UNE_ELEMENT_GERE = 'un genre';
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
      traitement des formulaires des genres
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_genres1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_genres_creer1'
                       || $action1 === 'page_genres_modifier1'
                       || $action1 === 'page_genres_supprimer1'
                       || $action1 === 'page_liste_des_genres1'
                       || $action1 === 'page_genres_dupliquer1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_genres_modifier1'
                   || $conteneur1 === 'vv_genres_creer1'
                   || $conteneur1 === 'vv_genres_supprimer1'
                   || $conteneur1 === 'vv_genres_filtre1'
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
    function mettre_a_jour_le_js_des_genres(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
     
     
        $tt333=$this->sql0->sql_iii(
             /*sql_333()*/ 333,
            array(),
            $donnees_retournees
        );
        
        if($tt333[__xst] !== __xsu){
         
            $donnees_retournees[__x_signaux][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;
        }
//        echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( json_encode($tt333[__xva],JSON_FORCE_OBJECT) , true ) . '</pre>' ; exit(0);
        
     
    }
    /*
      =============================================================================================================
    */
    function vv_genres_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_genres1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_genres1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_genres1=true;
                break;

            }

        }
        $donnees_sql=array( array(/**/
                    'chp_nom_genre' => $donnees_recues[__xva]['chp_nom_genre'] === '' ? null : $donnees_recues[__xva]['chp_nom_genre'],
                    'chp_espece_genre' => $donnees_recues[__xva]['chp_espece_genre'] === '' ? null : $donnees_recues[__xva]['chp_espece_genre'],
                    'che_longueur_genre' => $donnees_recues[__xva]['che_longueur_genre'] === '' ? null : $donnees_recues[__xva]['che_longueur_genre'],
                    'che_est_primaire_genre' => $donnees_recues[__xva]['che_est_primaire_genre'] === '' ? null : $donnees_recues[__xva]['che_est_primaire_genre'],
                    'che_est_incrément_genre' => $donnees_recues[__xva]['che_est_incrément_genre'] === '' ? null : $donnees_recues[__xva]['che_est_incrément_genre'],
                    'che_est_obligatoire_genre' => $donnees_recues[__xva]['che_est_obligatoire_genre'] === '' ? null : $donnees_recues[__xva]['che_est_obligatoire_genre'],
                    'che_a_init_genre' => $donnees_recues[__xva]['che_a_init_genre'] === '' ? null : $donnees_recues[__xva]['che_a_init_genre'],
                    'che_init_est_mot_genre' => $donnees_recues[__xva]['che_init_est_mot_genre'] === '' ? null : $donnees_recues[__xva]['che_init_est_mot_genre'],
                    'cht_valeur_init_genre' => $donnees_recues[__xva]['cht_valeur_init_genre'] === '' ? null : $donnees_recues[__xva]['cht_valeur_init_genre'],
                    'chp_prefixe_genre' => $donnees_recues[__xva]['chp_prefixe_genre'] === '' ? null : $donnees_recues[__xva]['chp_prefixe_genre'],
                    
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=$this->sql0->sql_iii(
             /*sql_329()*/ 329,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }else if($tt['changements'] === 1){

            $donnees_retournees[__xst]=__xsu;
            
            if($page_liste_des_genres1 === true){

                $this->page_liste_des_genres1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_genre(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_genres_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_genres1.formulaire1(action1(page_genres_modifier1),chi_id_genre(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_genres_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_genres1.page_liste_des_genres1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_genres1.page_liste_des_genres1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_genres1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_genres_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=$this->sql0->sql_iii(
             /*sql_330()*/ 330,
            array(/**/
                'T0_chi_id_genre' => $donnees_recues[__xva]['chi_id_genre']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=$this->sql0->sql_iii(
                 /*sql_332()*/ 332,
                array(/**/
                    'chi_id_genre' => $tt[__xva][0]['T0.chi_id_genre']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_genre'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                $donnees_retournees[__x_signaux][__xsu][]='👍 suppression effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_genre'] . ')';
                $this->page_liste_des_genres1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_genre'] . ') [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_genre'] . ') [' . __LINE__ . ']';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_genres_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_genres1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_genres1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_genres1=true;

            }

        }
        $tt330=$this->sql0->sql_iii(
             /*sql_330()*/ 330,
            array(/**/
                'T0_chi_id_genre' => $donnees_recues[__xva]['chi_id_genre']
            ),
            $donnees_retournees
        );
        
        if($tt330[__xst] !== __xsu){
         
            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
            return;
        }
         
         
         
         

        $tt=$this->sql0->sql_iii(
             /*sql_331()*/ 331,
            array(/**/
                'c_chi_id_genre' => $donnees_recues[__xva]['chi_id_genre'],
                'n_chp_nom_genre' => $donnees_recues[__xva]['chp_nom_genre'],
                'n_chp_espece_genre' => $donnees_recues[__xva]['chp_espece_genre'],
                'n_che_longueur_genre' => $donnees_recues[__xva]['che_longueur_genre'],
                'n_che_est_primaire_genre' => $donnees_recues[__xva]['che_est_primaire_genre'],
                'n_che_est_incrément_genre' => $donnees_recues[__xva]['che_est_incrément_genre'],
                'n_che_est_obligatoire_genre' => $donnees_recues[__xva]['che_est_obligatoire_genre'],
                'n_che_a_init_genre' => $donnees_recues[__xva]['che_a_init_genre'],
                'n_che_init_est_mot_genre' => $donnees_recues[__xva]['che_init_est_mot_genre'],
                'n_cht_valeur_init_genre' => $donnees_recues[__xva]['cht_valeur_init_genre'],
                'n_chp_prefixe_genre' => $donnees_recues[__xva]['chp_prefixe_genre'],
                
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_genre'] . ') [' . __LINE__ . ']';

        }else if($tt['changements'] === 1){
         
            $this->mettre_a_jour_le_js_des_genres($donnees_retournees,$mat,$donnees_recues);

            
            if($page_liste_des_genres1 === true){

                $this->page_liste_des_genres1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__xst]=__xsu;
            }

            $donnees_retournees[__x_signaux][__xsu][]='👍 modification effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_genre'] . ') [' . __LINE__ . ']';

        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }


    }
    
    
    /*
      =============================================================================================================
    */
    function page_genres_dupliquer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_recues = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        
        $o1='';
        $chi_id_genres='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_genre' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_genres=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_genres) && $chi_id_genres > 0){
         
            $tt=$this->sql0->sql_iii(
                 /*sql_324()*/ 324,
                array(/**/
                    'T0_chi_id_genre' => $chi_id_genres
                ),
                $donnees_retournees
            );
            if($tt[__xst] === __xsu){
               $donnees_recues['dupliquer']=$tt[__xva][0];
               $this->page_genres_creer1($donnees_retournees,$mat,$donnees_recues);
            }
        }
        
    }
    
    /*
      =============================================================================================================
    */
    function page_genres_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter ' . self::UN_UNE_ELEMENT_GERE . ' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_genres1.formulaire1(action1(page_liste_des_genres1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_genres_creer1">' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>nom</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL; 
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="nom" autocorrect="off" autocapitalize="off" spellcheck="false"  id="chp_nom_genre" value="';
        if(isset($donnees_recues['dupliquer']['T0.chp_nom_genre'])){
            $o1.=enti1($donnees_recues['dupliquer']['T0.chp_nom_genre']);
        }
        
        $o1 .= '" maxlength="64" style="width:80%;" autocorrect="off" autocapitalize="off" spellcheck="false" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        
        $o1 .= '  </div>' . PHP_EOL;
        
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>préfixe</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="TEXT" id="chp_prefixe_genre" value="TEXT" maxlength="3" size="3" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>espèce</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="TEXT" id="chp_espece_genre" value="TEXT" maxlength="64" style="width:80%;" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>longueur</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="" id="che_longueur_genre" value="" maxlength="9" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>primaire</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="" id="che_est_primaire_genre" value="0" maxlength="1" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        
        
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>est incrément</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="" id="che_est_incrément_genre" value="0" maxlength="1" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        
        
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>est obligatoire ( NOT NULL )</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="" id="che_est_obligatoire_genre" value="0" maxlength="1" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        
        
        
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>a une valeur initiale</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="" id="che_a_init_genre" value="0" maxlength="1" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;

        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>init est caractère</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" placeholder="" id="che_init_est_mot_genre" value="0" maxlength="1" autocorrect="off" autocapitalize="off" spellcheck="false"  />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;



        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>valeur init</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
        $o1 .= '         <textarea placeholder="valeur initiale" autocorrect="off" autocapitalize="off" spellcheck="false"  id="cht_valeur_init_genre" >';
        if(isset($donnees_recues['dupliquer']['T0.cht_valeur_init_genre'])){
            $o1.=enti1($donnees_recues['dupliquer']['T0.cht_valeur_init_genre']);
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
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_genres1.formulaire1(conteneur1(vv_genres_creer1),page_liste_des_genres1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_genres1.formulaire1(conteneur1(vv_genres_creer1))" title="" >ajouter</div>';
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
    function page_genres_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_genres='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_genre' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_genres=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_genres)){

            $tt=$this->sql0->sql_iii(
                 /*sql_319()*/ 330,
                array(/**/
                    'T0_chi_id_genre' => $chi_id_genres
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer ' . self::UN_UNE_ELEMENT_GERE . '<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_genres1.formulaire1(action1(page_liste_des_genres1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_genres_supprimer1">' . PHP_EOL;
                $o1 .= '  <h3>confirmez vous la suppression de ' . self::LE_LA_ELEMENT_GERE . '(<b>' . $tt[__xva][0]['T0.chi_id_genre'] . '</b>) ?</h3>';
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>nom</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_nom_genre" value="' . enti1($tt[__xva][0]['T0.chp_nom_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;"/>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>prefixe</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_prefixe_genre" value="' . enti1($tt[__xva][0]['T0.chp_prefixe_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>espèce</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_espece_genre" value="' . enti1($tt[__xva][0]['T0.chp_espece_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>longueur</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_longueur_genre" value="' . enti1($tt[__xva][0]['T0.che_longueur_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>est primaire</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_est_primaire_genre" value="' . enti1($tt[__xva][0]['T0.che_est_primaire_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>est incrément</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_est_incrément_genre" value="' . enti1($tt[__xva][0]['T0.che_est_incrément_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>est obligatoire</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_est_obligatoire_genre" value="' . enti1($tt[__xva][0]['T0.che_est_obligatoire_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>a une valeur initiale</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_a_init_genre" value="' . enti1($tt[__xva][0]['T0.che_a_init_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>la valeur initiale est une chaine</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_init_est_mot_genre" value="' . enti1($tt[__xva][0]['T0.che_init_est_mot_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
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
                $o1 .= '        <textarea id="cht_valeur_init_genre" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_valeur_init_genre']) . '</textarea>' . PHP_EOL;
                $o1 .= '      </div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                /*
                  
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_genre'] . '" id="chi_id_genre" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_genres1.formulaire1(conteneur1(vv_genres_supprimer1),page_liste_des_genres1())" title="" >Je confirme la suppression</div>';
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
    function page_genres_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_genres='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_genre' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_genres=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_genres) && $chi_id_genres > 0){

            $tt=$this->sql0->sql_iii(
                 /*sql_330()*/ 330,
                array(/**/
                    'T0_chi_id_genre' => $chi_id_genres
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>modifier ' . self::LE_LA_ELEMENT_GERE . '(' . $tt[__xva][0]['T0.chi_id_genre'] . ') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_genres1.formulaire1(action1(page_liste_des_genres1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_genres_modifier1">' . PHP_EOL;
                /**/
                $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_genre'] . '" id="chi_id_genre" />' . PHP_EOL;
                /**/
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>nom</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_nom_genre" value="' . enti1($tt[__xva][0]['T0.chp_nom_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;"/>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>préfixe</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_prefixe_genre" value="' . enti1($tt[__xva][0]['T0.chp_prefixe_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>espèce</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_espece_genre" value="' . enti1($tt[__xva][0]['T0.chp_espece_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>longueur</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_longueur_genre" value="' . enti1($tt[__xva][0]['T0.che_longueur_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>est primaire</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_est_primaire_genre" value="' . enti1($tt[__xva][0]['T0.che_est_primaire_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>est incrément</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_est_incrément_genre" value="' . enti1($tt[__xva][0]['T0.che_est_incrément_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>est obligatoire</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_est_obligatoire_genre" value="' . enti1($tt[__xva][0]['T0.che_est_obligatoire_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>a une valeur initiale</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_a_init_genre" value="' . enti1($tt[__xva][0]['T0.che_a_init_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                /*
                  =============================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>la valeur initiale est une chaine</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="che_init_est_mot_genre" value="' . enti1($tt[__xva][0]['T0.che_init_est_mot_genre']) . '" autocorrect="off" autocapitalize="off" spellcheck="false"  size="1" max-length="1" />' . PHP_EOL;
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
                $o1 .= '        <textarea id="cht_valeur_init_genre" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_valeur_init_genre']) . '</textarea>' . PHP_EOL;
                $o1 .= '      </div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                
                
                
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_genres1.formulaire1(conteneur1(vv_genres_modifier1),chi_id_genre(' . $chi_id_genres . '),page_liste_des_genres1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_genres1.formulaire1(conteneur1(vv_genres_modifier1),chi_id_genre(' . $chi_id_genres . '))" title="" >enregistrer</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }else{

            $this->page_liste_des_genres1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
        }

    }
    /*
      =============================================================================================================
      Pour les iframes sur les genres
      =============================================================================================================
    */
    function vv_genres_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_genres1.page_genres_sous_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_genres1.page_genres_sous_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_genres_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function page_genres_sous_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $fonction1='c_genres1.page_genres_sous_liste1';
        /* déverminage */
        $__nbMax=10;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['T0_chi_id_genre']='';
        $par['nom_champ_dans_parent1']='';
        $par['nom_libelle_dans_parent1']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_genre=false;
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

                        }else if($mat[$j][1] === 'indice_genre'){

                            $numpage=0;
                            $par_mat['__num_page']=0;
                            $provenance_genre=true;
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
            
            if($provenance_genre === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION][$fonction1]=$par;
        }

        $par['T0_chi_id_genre']=$par['T0_chi_id_genre']??'';
        $par['nom_champ_dans_parent1']=$par_mat['nom_champ_dans_parent1']??'';
        $par['nom_libelle_dans_parent1']=$par_mat['nom_libelle_dans_parent1']??'';
        $nom_filtre='vv_genres_filtre_choix_1';
        $o1='<h1>choisir un genre</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_genre" value="' . $par['T0_chi_id_genre'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_genres1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
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
                'T0_chi_id_genre' => $par['T0_chi_id_genre'] === '' ? '' : $par['T0_chi_id_genre'],
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des genres [' . __LINE__ . ']';
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
        $lsttbl .= '<th>genre</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $parametres='';
            $parametres .= 'interface1.choisir_dans_sous_fenetre1(';
            $parametres .= '    nom_champ_dans_parent1(' . $par['nom_champ_dans_parent1'] . ')';
            $parametres .= '    nom_libelle_dans_parent1(' . $par['nom_libelle_dans_parent1'] . ')';
            $parametres .= '    id1(' . $v0['T0.chi_id_genre'] . ')';
            $parametres .= '    libelle1("(' . $v0['T0.chi_id_genre'] . ') ' . $v0['T0.cht_nom_genre'] . '" )';
            $parametres .= ')';
            $lsttbl .= '<td style="max-width:calc(1*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="' . htmlentities($parametres) . '">=&gt;</div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_genre'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.cht_nom_genre'] !== null){

                $lsttbl .= '' . enti1($v0['T0.cht_nom_genre']) . '';

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
    function page_liste_des_genres1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){


        if(!isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

            $donnees_retournees[__x_signaux][__xal][]=' vous devez activer un projet [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        $__nbMax=30;
        $par=array();
        $par['T0_chi_id_genre']='';
        $par['T0_chp_nom_genre']='';
        $par['T0_chp_prefixe_genre']='';
        $par['T0_chp_espece_genre']='';
        $par['T0_cht_valeur_init_genre']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_genre=false;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_genres1.page_liste_des_genres1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        
                        if($mat[$j][1] === '__num_page'){

                            $numpage=$mat[$j + 1][1];
                            $par_mat['__num_page']=$mat[$j + 1][1];
                            $par['__num_page']=$mat[$j + 1][1];

                        }else if($mat[$j][1] === 'indice_genre'){

                            $numpage=0;
                            $par_mat['__num_page']=0;
                            $provenance_genre=true;
                            $par['__num_page']=0;

                        }else if($mat[$j + 1][1] !== ''){

                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_genres1.page_liste_des_genres1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_genres1.page_liste_des_genres1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_genres1.page_liste_des_genres1'];
            
            if($provenance_genre === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_genres1.page_liste_des_genres1']=$par;
        }

        $par['T0_chi_id_genre']=$par['T0_chi_id_genre']??'';
        $par['T0_chp_nom_genre']=$par['T0_chp_nom_genre']??'';
        $par['T0_chp_espece_genre']=$par['T0_chp_espece_genre']??'';
        $par['T0_cht_valeur_init_genre']=$par['T0_cht_valeur_init_genre']??'';
        $par['T0_chp_prefixe_genre']=$par['T0_chp_prefixe_genre']??'';
        
        
        $fonction1='c_genres1.page_liste_des_genres1';
        $nom_filtre='vv_genres_filtre1';
        $o1='<h1>Liste des genres</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_genre" value="' . $par['T0_chi_id_genre'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_genre" value="' . $par['T0_chp_nom_genre'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        
        
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>préfixe</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_prefixe_genre" value="' . $par['T0_chp_prefixe_genre'] . '" size="3" maxlength="3" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>espèce</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_espece_genre" value="' . $par['T0_chp_espece_genre'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        
        /*

        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>val init</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_cht_valeur_init_genre" value="' . $par['T0_cht_valeur_init_genre'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        
        
        
        /*
          
        */
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_genres1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        $o1 .= '</div>';

        $tt=$this->sql0->sql_iii(
             /*sql_328()*/ 328,
            array(
                /**/
                'T0_chi_id_genre' => $par['T0_chi_id_genre'],
                'T0_chp_nom_genre' => $par['T0_chp_nom_genre'],
                'T0_chp_espece_genre' => $par['T0_chp_espece_genre'],
                'T0_cht_valeur_init_genre' => $par['T0_cht_valeur_init_genre'],
                'T0_chp_prefixe_genre' => $par['T0_chp_prefixe_genre'],
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
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_genres1.page_liste_des_genres1(indice_genre(10))" title="genres" >';
            $o1 .= '      Réessayer';
            $o1 .= '    </div>';
            $o1 .= '    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\'application';
            $o1 .= '  </div>';
            unset($_SESSION[__X_CLE_APPLICATION]['c_genres1.page_liste_des_genres1']);
            
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
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_genres1.formulaire1(action1(page_genres_creer1))" title="nouveau genre" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>nom</th>';
        $lsttbl .= '<th>préfixe</th>';
        $lsttbl .= '<th>espèce</th>';
        $lsttbl .= '<th>valeur init</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /*
            */
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_genres1.formulaire1(action1(page_genres_modifier1),chi_id_genre(' . $v0['T0.chi_id_genre'] . '))">✎</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_genres1.formulaire1(action1(page_genres_dupliquer1),chi_id_genre(' . $v0['T0.chi_id_genre'] . '))" title="dupliquer">⎘</div>';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_genres1.formulaire1(action1(page_genres_supprimer1),chi_id_genre(' . $v0['T0.chi_id_genre'] . '))">🗑</div>';
            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /*
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_genre'] . '';
            $lsttbl .= '</td>';
            /*
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= enti1($v0['T0.chp_nom_genre']) ;
            $lsttbl .= '</td>';
            /*
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= enti1($v0['T0.chp_prefixe_genre']) ;
            $lsttbl .= '</td>';
            /*
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= enti1($v0['T0.chp_espece_genre']) ;
            $lsttbl .= '</td>';
            /*
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= enti1($v0['T0.cht_valeur_init_genre']) ;
            $lsttbl .= '</td>';
            /*
            */
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_genres1.page_liste_des_genres1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/