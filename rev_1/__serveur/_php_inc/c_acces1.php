<?php
class c_acces1{
    private $sql0=null;
    /*
      erreur lors de l'"action" pour 
      Attention : du le cheval / de cheval vs de la acces / du la acces
    */
    private const LE_LA_ELEMENT_GERE = 'l\'acces';
    private const UN_UNE_ELEMENT_GERE = 'un acces';
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
      traitement des formulaires des acces
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_acces1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_acces_creer1'
                       || $action1 === 'page_acces_modifier1'
                       || $action1 === 'page_acces_supprimer1'
                       || $action1 === 'page_liste_des_acces1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_acces_modifier1'
                   || $conteneur1 === 'vv_acces_creer1'
                   || $conteneur1 === 'vv_acces_supprimer1'
                   || $conteneur1 === 'vv_acces_filtre1'
                   || $conteneur1 === 'vv_acces_filtre_choix_1'
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
    function vv_acces_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_acces1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_acces1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_acces1=true;
                break;

            }

        }
        $donnees_sql=array( array(/**/
                    'chp_nom_acces' => $donnees_recues[__xva]['chp_nom_acces'],
                    'chx_metier_acces' => $donnees_recues[__xva]['chx_metier_acces'] === '' ? null : $donnees_recues[__xva]['chx_metier_acces'],
                    'chx_groupe_acces' => $donnees_recues[__xva]['chx_groupe_acces'] === '' ? null : $donnees_recues[__xva]['chx_groupe_acces']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=/*sql_inclure_deb*/
            /* sql_194()
            INSERT INTO b1.`tbl_acces`(
                `chp_nom_acces` , 
                `chx_groupe_acces` , 
                `chx_metier_acces`
            ) VALUES (
                :chp_nom_acces , 
                :chx_groupe_acces , 
                :chx_metier_acces
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_194()*/ 194,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }else if($tt['changements'] === 1){

            $donnees_retournees[__xst]=__xsu;
            
            if($page_liste_des_acces1 === true){

                $this->page_liste_des_acces1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_acces(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_acces_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_acces1.formulaire1(action1(page_acces_modifier1),chi_id_acces(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    
    
    /*
      =============================================================================================================
    */
    function obtenir_les_menus_d_un_acces(&$donnees_retournees,&$mat,&$donnees_recues){
        /* 
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);
        */
        $tt327=$this->sql0->sql_iii(
            327,
            array( 'T2_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces']),
            $donnees_retournees
        );
        
        if($tt327[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;

        }else{
            $liste_des_menus=array();
            foreach( $tt327[__xva] as $k1 => $v1){
                $liste_des_menus[]=array(
                    'chi_id_source' => $v1['T1.chx_source_autorisation'],
                    'cht_libelle_menu' => $v1['T0.cht_libelle_menu'],
                    'chp_titre_menu' => $v1['T0.chp_titre_menu'],
                    'chp_methode_menu' => $v1['T0.chp_methode_menu'],
                    'chp_nom_source' => $v1['T3.chp_nom_source'],
                    'chi_id_menu' => $v1['T0.chi_id_menu'],
                    'cht_initialisation_menu' => $v1['T0.cht_initialisation_menu'],
                    'cht_complements_menu' => $v1['T0.cht_complements_menu'],
                );
            }
            /*
              echo __FILE__ . ' ' . __LINE__ . ' $liste_des_menus = <pre>' . var_export( $liste_des_menus , true ) . '</pre>' ; exit(0);
            */
            
            $tt195=$this->sql0->sql_iii(
                 /*sql_195()*/ 195,
                array(/**/
                    'T0_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces']
                ),
                $donnees_retournees
            );
            
            if($tt195[__xst] !== __xsu ){
                $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';
                $donnees_retournees[__xst]=__xer;
                return;
            }
            
             
            if(is_null($tt195[__xva][0]['T0.cht_parametres_acces'])){
             
                $cht_parametres_acces=array();
                
            }else{
             
                $nouveau=json_decode( $tt195[__xva][0]['T0.cht_parametres_acces'],true);
                if(isset($nouveau['le_html_ul_li_du_menu'])){
                    $cht_parametres_acces=$nouveau['le_html_ul_li_du_menu'];
                }else{
                    $cht_parametres_acces=array();
                }
             
            }
            
            
            $donnees_retournees[__x_action]='c_fonctions_js1(afficher_la_liste_des_menus())';
            $donnees_retournees[__xva]['liste_des_menus']=$liste_des_menus;
            $donnees_retournees[__xva]['chi_id_acces']=$donnees_recues[__xva]['chi_id_acces'];
            $donnees_retournees[__xva]['cht_parametres_acces']=$cht_parametres_acces;
            $donnees_retournees[__xst]=__xsu;

        }
     
    }
    /*#
      =============================================================================================================
      
      array (
        0 => 
        array (
          'id_interne' => 1,
          'id_interne_parent' => 0,
          'replie' => 0,
          'contient_des_enfants' => 0,
          'contenu' => 'tâches',
          'attributs' => 
          array (
            'data-chi_id_source' => '61',
            'data-chp_nom_source' => 'c_taches1.php',
            'data-chp_methode_menu' => 'page_liste_des_taches1',
            'data-chi_id_menu' => '1',
            'data-cht_initialisation_menu' => 'T0_chp_priorite_tache2(99)',
            'data-cht_complements_menu' => 'null',
          ),
        ),
        1 => 
        array (
          'id_interne' => 2,
          'id_interne_parent' => 0,
          'replie' => 0,
          'contient_des_enfants' => 0,
          'contenu' => 'matrice',
          'attributs' => 
          array (
            'data-chi_id_source' => '235',
            'data-chp_nom_source' => 'c_rev_mat1.php',
            'data-chp_methode_menu' => 'page1',
            'data-chi_id_menu' => '2',
            'data-cht_initialisation_menu' => 'null',
            'data-cht_complements_menu' => 'maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_rev1\'))))',
          ),
        ),
        2 => 
        array (
          'id_interne' => 3,
          'id_interne_parent' => 0,
          'replie' => 0,
          'contient_des_enfants' => 0,
          'contenu' => 'js',
          'attributs' => 
          array (
            'data-chi_id_source' => '234',
            'data-chp_nom_source' => 'c_rev_js1.php',
            'data-chp_methode_menu' => 'page1',
            'data-chi_id_menu' => '3',
            'data-cht_initialisation_menu' => 'null',
            'data-cht_complements_menu' => 'maj_interface2(
         modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(\'zones_sauvegardées\',\'ls_js_rev1\')))
      )',
          ),
        ),
        3 => 
        array (
          'id_interne' => 4,
          'id_interne_parent' => 0,
          'replie' => 0,
          'contient_des_enfants' => 0,
          'contenu' => 'php',
          'attributs' => 
          array (
            'data-chi_id_source' => '236',
            'data-chp_nom_source' => 'c_rev_php1.php',
            'data-chp_methode_menu' => 'page1',
            'data-chi_id_menu' => '4',
            'data-cht_initialisation_menu' => 'null',
            'data-cht_complements_menu' => 'null',
          ),
        ),
    */
    function construit_menu($id_interne_parent , &$le_tableau_du_menu,$parent_est_select=false){
        $t='';
        foreach( $le_tableau_du_menu as $k1 => $v1){
         
          if($v1['id_interne_parent']===$id_interne_parent){
           

/*


*/          
            if($v1['contient_des_enfants']===0){
            
                if($parent_est_select===true){
                    $t.='<option>'.$v1['contenu'].'</option>';
                }else{
                    $t.='<div';
                    $t.=' data-id_menu="'.$v1['attributs']['data-chi_id_menu'].'"';
                    $t.=' class="hug_bouton yy__x_signaux___xal"';
                    $t.=' data-hug_click="';
                    $t.=str_replace('.php','',$v1['attributs']['data-chp_nom_source']);
                    $t.='.'.$v1['attributs']['data-chp_methode_menu'];
                    if($v1['attributs']['data-cht_initialisation_menu']==='null'){
                        $t.='()';
                    }else{
                        $t.='(';
                        $t.=$v1['attributs']['data-cht_initialisation_menu'];
                        $t.=')';
                    }
                    if($v1['attributs']['data-cht_complements_menu']==='null'){
                    }else{
                        $t.=$v1['attributs']['data-cht_complements_menu'];
                    }
                    $t.='indice_menu('.$v1['attributs']['data-chi_id_menu'].')';
                    $t.='"';
                    
                    $t.=' title="'.$v1['attributs']['data-chp_titre_menu'].'"';
                    $t.='>'.$v1['contenu'].'</div>';
                }
            }else{
                $t.='<select data-hug_change="">';
                $t.='<option>'.$v1['contenu'].'</option>';
                $t.=$this->construit_menu( $v1['id_interne'] , $le_tableau_du_menu , true );
                $t.='</select>';
            }

             
           
          }
          
        }
        return $t;
    }
    /*
      =============================================================================================================
    */
    function produire_le_menu(&$donnees_retournees,&$mat,&$donnees_recues){
        $chi_id_acces=$donnees_recues[__xva]['chi_id_acces'];
        $tt195=$this->sql0->sql_iii(
             /*sql_195()*/ 195,
            array(/**/
                'T0_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt195[__xst] !== __xsu ){
            $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;
        }
        
        $le_contenu_du_menu='';
        
        $cht_parametres_acces=$tt195[__xva][0]['T0.cht_parametres_acces'];
        if(is_null($cht_parametres_acces)){
            $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;
        }else{
            $cht_parametres_acces=json_decode($cht_parametres_acces,true);
        }
        if(isset($cht_parametres_acces['le_json_du_menu'])){
            $le_tableau_du_menu=json_decode($cht_parametres_acces['le_json_du_menu'],true);
        }
//        echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . enti1(var_export( $cht_parametres_acces , true )) . '</pre>' ; exit(0);
//        echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . enti1(var_export( $le_tableau_du_menu , true )) . '</pre>' ; exit(0);
        
        
        $menus=$this->construit_menu(0,$le_tableau_du_menu);
        $fichier=REPERTOIRE_DU_SERVEUR.DIRECTORY_SEPARATOR.'menu_acces_'.$chi_id_acces.'.php';
        if(file_put_contents($fichier,'<?'.'php'.PHP_EOL.'$le_menu='.var_export($menus,true).';')===false){
            $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;
        }
        
        
        
     
    }
    /*
      =============================================================================================================
    */
    function enregister_le_menu_de_l_acces2(&$donnees_retournees,&$mat,&$donnees_recues){
        $le_json=$donnees_recues[__xva]['le_json'];
        $le_html=$donnees_recues[__xva]['le_html'];
        $tt195=$this->sql0->sql_iii(
             /*sql_195()*/ 195,
            array(/**/
                'T0_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt195[__xst] !== __xsu ){
            $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;
        }
        
         
        if(is_null($tt195[__xva][0]['T0.cht_parametres_acces'])){
         
            $nouveau=array(/**/
                'le_json_du_menu' => $le_json,
                'le_html_ul_li_du_menu' => $le_html,
            );
            
        }else{
         
            $nouveau=json_decode( $tt195[__xva][0]['T0.cht_parametres_acces'],true);
            $nouveau['le_json_du_menu'] = $le_json;
            $nouveau['le_html_ul_li_du_menu'] = $le_html;
         
        }
        
        $tt124=$this->sql0->sql_iii(
             /*sql_224()*/ 124,
            array(
                /**/
                'c_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces'],
                'n_cht_parametres_acces' => json_encode($nouveau,JSON_FORCE_OBJECT)
            ),
            $donnees_retournees
        );
        
        if($tt124[__xst] !== __xsu){
            $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;
         
        }
        $donnees_retournees['__x_action']='maj_interface2(fermer_sous_fenetre1(c_acces1.page_liste_des_acces1()))';
        $donnees_retournees[__xst]=__xsu;
        
        $this->produire_le_menu($donnees_retournees,$mat,$donnees_recues);
    }

    /*
      =============================================================================================================
    */
    function vv_acces_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txtPar='__num_acces(0)';
        $nouvelles_valeurs=array( '__num_acces' => 0);
        foreach($donnees_recues[__xva] as $k0 => $v0){
            
            if($k0 !== '__num_acces'){

                $nouvelles_valeurs[$k0]=$v0;
                
                if(is_numeric($v0)){

                    $txtPar .= ',' . $k0 . '(' . $v0 . ')';

                }else{

                    $txtPar .= ',' . $k0 . '(\'' . str_replace('\'','\\\'',$v0) . '\')';
                }


            }

        }
        $_SESSION[__X_CLE_APPLICATION]['c_acces1.page_liste_des_acces1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_acces1.page_liste_des_acces1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_acces1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_acces_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=/*sql_inclure_deb*/
            /* sql_195()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
            `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_195()*/ 195,
            array(/**/
                'T0_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu && $donnees_recues[__xva]['chi_id_acces'] > 1){

            $tt=/*sql_inclure_deb*/
                /* sql_197()
                DELETE FROM b1.tbl_acces
                WHERE `chi_id_acces` = :chi_id_acces ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_197()*/ 197,
                array(/**/
                    'chi_id_acces' => $tt[__xva][0]['T0.chi_id_acces']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_acces'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                $donnees_retournees[__x_signaux][__xsu][]='👍 suppression effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_acces'] . ')';
                $this->page_liste_des_acces1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_acces'] . ') [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='aucune suppression effectuée pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_acces'] . ') [' . __LINE__ . ']';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_acces_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_acces1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_acces1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_acces1=true;

            }

        }
        $tt=/*sql_inclure_deb*/
            /* sql_195()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
            `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_195()*/ 195,
            array(/**/
                'T0_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            /*
              afr 
              exceptions acces 1 et 2
            */
            $tt=/*sql_inclure_deb*/
                /* sql_196()
                UPDATE b1.tbl_acces SET 
                   `chp_nom_acces` = :n_chp_nom_acces , 
                   `chx_groupe_acces` = :n_chx_groupe_acces , 
                   `chx_metier_acces` = :n_chx_metier_acces
                WHERE `chi_id_acces` = :c_chi_id_acces ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_196()*/ 196,
                array(
                    /**/
                    'c_chi_id_acces' => $tt[__xva][0]['T0.chi_id_acces'],
                    'n_chp_nom_acces' => $donnees_recues[__xva]['chp_nom_acces'],
                    'n_chx_metier_acces' => $donnees_recues[__xva]['chx_metier_acces'],
                    'n_chx_groupe_acces' => $donnees_recues[__xva]['chx_groupe_acces']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_acces'] . ') [' . __LINE__ . ']';

            }else if($tt['changements'] === 1){

                
                if($page_liste_des_acces1 === true){

                    $this->page_liste_des_acces1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]='👍 modification effectuée avec succès pour ' . self::LE_LA_ELEMENT_GERE . '(' . $donnees_recues[__xva]['chi_id_acces'] . ') [' . __LINE__ . ']';

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
    function page_acces_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter ' . self::UN_UNE_ELEMENT_GERE . ' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_acces1.formulaire1(action1(page_liste_des_acces1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_acces_creer1">' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>nom</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input type="text" maxlength="64" id="chp_nom_acces" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>groupe</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_groupe_acces" />' . PHP_EOL;
        $o1 .= '        <span id="chx_groupe_acces_libelle">*indéfini</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_groupes1.page_groupes_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_groupe_acces)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_groupe_acces_libelle)';
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
        $o1 .= '      <span>metier</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_metier_acces" />' . PHP_EOL;
        $o1 .= '        <span id="chx_metier_acces_libelle">*indéfini</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_metiers1.page_metiers_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_metier_acces)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_metier_acces_libelle)';
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
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_acces1.formulaire1(conteneur1(vv_acces_creer1),page_liste_des_acces1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_acces1.formulaire1(conteneur1(vv_acces_creer1))" title="" >ajouter</div>';
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= '</div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_acces_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_acces='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_acces' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_acces=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_acces) && $chi_id_acces > 0){

            /*afr 1 */
            $tt=/*sql_inclure_deb*/
                /* sql_195()
                SELECT 
                `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
                `T2`.`chp_nom_metier`
                 FROM b1.tbl_acces T0
                 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
                
                 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
                
                WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_195()*/ 195,
                array(/**/
                    'T0_chi_id_acces' => $chi_id_acces
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer ' . self::UN_UNE_ELEMENT_GERE . '<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_acces1.formulaire1(action1(page_liste_des_acces1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_acces_supprimer1">' . PHP_EOL;
                $o1 .= '  <h3>confirmez voous la suppression de ' . self::LE_LA_ELEMENT_GERE . '(<b>' . $tt[__xva][0]['T0.chi_id_acces'] . '</b>) ?</h3>';
                /*
                  
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>nom</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_nom_acces" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.chp_nom_acces']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_acces'] . '" id="chi_id_acces" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_acces1.formulaire1(conteneur1(vv_acces_supprimer1),page_liste_des_acces1())" title="" >Je confirme la suppression</div>';
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
    function page_acces_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $chi_id_acces='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_acces' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_acces=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_acces) && $chi_id_acces > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_195()
                SELECT 
                `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
                `T2`.`chp_nom_metier`
                 FROM b1.tbl_acces T0
                 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
                
                 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
                
                WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_195()*/ 195,
                array(/**/
                    'T0_chi_id_acces' => $chi_id_acces
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>modifier ' . self::LE_LA_ELEMENT_GERE . '(' . $tt[__xva][0]['T0.chi_id_acces'] . ') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_acces1.formulaire1(action1(page_liste_des_acces1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_acces_modifier1">' . PHP_EOL;
                /**/
                $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_acces'] . '" id="chi_id_acces" />' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>nom</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="text" id="chp_nom_acces" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' . enti1($tt[__xva][0]['T0.chp_nom_acces']) . '" />' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>groupe</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_groupe_acces']) . '"  id="chx_groupe_acces" />' . PHP_EOL;
                $o1 .= '        <span id="chx_groupe_acces_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_groupe_acces'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_groupe_acces'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_groupe']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_groupes1.page_groupes_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_groupe_acces)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_groupe_acces_libelle)';
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
                $o1 .= '      <span>métier</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_metier_acces']) . '"  id="chx_metier_acces" />' . PHP_EOL;
                $o1 .= '        <span id="chx_metier_acces_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_metier_acces'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_metier_acces'] . ') ' . htmlentities($tt[__xva][0]['T2.chp_nom_metier']) . PHP_EOL;
                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_metiers1.page_metiers_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_metier_acces)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_metier_acces_libelle)';
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
                $o1 .= '      <span>paramètre<br><span style="color:red;">(non enregistré)</span></span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <textarea class="txtar1"  id="cht_parametres_acces" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.cht_parametres_acces']) . '</textarea>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_acces1.formulaire1(conteneur1(vv_acces_modifier1),chi_id_acces(' . $chi_id_acces . '),page_liste_des_acces1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_acces1.formulaire1(conteneur1(vv_acces_modifier1),chi_id_acces(' . $chi_id_acces . '))" title="" >enregistrer</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /**/
                $o1 .= '</div>' . PHP_EOL;


                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;


            }


        }else{

            $this->page_liste_des_acces1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
        }

    }
    /*
      =============================================================================================================
      Pour les iframes sur les acces
      =============================================================================================================
    */
    function vv_acces_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txtPar='__num_acces(0)';
        $nouvelles_valeurs=array( '__num_acces' => 0);
        foreach($donnees_recues[__xva] as $k0 => $v0){
            
            if($k0 !== '__num_acces'){

                $nouvelles_valeurs[$k0]=$v0;
                
                if(is_numeric($v0)){

                    $txtPar .= ',' . $k0 . '(' . $v0 . ')';

                }else{

                    $txtPar .= ',' . $k0 . '(\'' . str_replace('\'','\\\'',$v0) . '\')';
                }


            }

        }
        $_SESSION[__X_CLE_APPLICATION]['c_acces1.page_acces_sous_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_acces1.page_acces_sous_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_acces_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function page_acces_sous_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $fonction1='c_acces1.page_acces_sous_liste1';
        /* déverminage */
        $__nbMax=10;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['nom_champ_dans_parent1']='';
        $par['nom_libelle_dans_parent1']='';
        $par['T0_chi_id_acces']='';
        $par['T0_chp_nom_acces']='';
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

        $par['T0_chi_id_acces']=$par['T0_chi_id_acces']??'';
        $par['T0_chp_nom_acces']=$par['T0_chp_nom_acces']??'';
        $par['nom_champ_dans_parent1']=$par_mat['nom_champ_dans_parent1']??'';
        $par['nom_libelle_dans_parent1']=$par_mat['nom_libelle_dans_parent1']??'';
        $nom_filtre='vv_acces_filtre_choix_1';
        $o1='<h1>choisir un acces parent</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_acces" value="' . $par['T0_chp_nom_acces'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        
        if($par['T0_chp_nom_acces'] !== ''){

            $o1 .= '         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id(T0_chp_nom_acces),value(\'\'))),c_acces1.formulaire1(conteneur1(' . $nom_filtre . '))" >x</span>';

        }

        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_acces" value="' . $par['T0_chi_id_acces'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_acces1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_champ_dans_parent1" value="' . $par['nom_champ_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="nom_libelle_dans_parent1" value="' . $par['nom_libelle_dans_parent1'] . '"  />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_193()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
            `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE ( / *** *** / `T0`.`chi_id_acces` = :T0_chi_id_acces
               AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces) 
            ORDER BY `T0`.`chi_id_acces` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_193()*/ 193,
             /**/ array( 'T0_chi_id_acces' => $par['T0_chi_id_acces'] === '' ? '' : $par['T0_chi_id_acces'], 'T0_chp_nom_acces' => $par['T0_chp_nom_acces'] === '' ? '' : '' . $par['T0_chp_nom_acces'] . '', 'quantitee' => $__nbMax, 'debut' => $__debut),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des acces [' . __LINE__ . ']';
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
        $lsttbl .= '<th>acces</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $parametres='';
            $parametres .= 'interface1.choisir_dans_sous_fenetre1(';
            $parametres .= '    nom_champ_dans_parent1(' . $par['nom_champ_dans_parent1'] . ')';
            $parametres .= '    nom_libelle_dans_parent1(' . $par['nom_libelle_dans_parent1'] . ')';
            $parametres .= '    id1(' . $v0['T0.chi_id_acces'] . ')';
            $parametres .= '    libelle1("(' . $v0['T0.chi_id_acces'] . ') ' . $v0['T0.chp_nom_acces'] . '" )';
            $parametres .= ')';
            $lsttbl .= '<td style="max-width:calc(1*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="' . htmlentities($parametres) . '">=&gt;</div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_acces'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chp_nom_acces'] !== null){

                $lsttbl .= '' . enti1($v0['T0.chp_nom_acces']) . '';

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
    function page_liste_des_acces1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $__nbMax=10;
        $par=array();
        $par['T0_chi_id_acces']='';
        $par['T0_chp_nom_acces']='';
        $par['__num_acces']=0;
        $numacces=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_acces1.page_liste_des_acces1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        
                        if($mat[$j][1] === '__num_acces'){

                            $numacces=$mat[$j + 1][1];
                            $par_mat['__num_acces']=$mat[$j + 1][1];
                            $par['__num_acces']=$mat[$j + 1][1];

                        }else if($mat[$j][1] === 'indice_menu'){

                            $numacces=0;
                            $par_mat['__num_acces']=0;
                            $provenance_menu=true;
                            $par['__num_acces']=0;

                        }else if($mat[$j + 1][1] !== ''){

                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_acces1.page_liste_des_acces1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_acces1.page_liste_des_acces1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_acces1.page_liste_des_acces1'];
            
            if($provenance_menu === true){

                $par['__num_acces']=0;

            }else{

                
                if($numacces === -1){


                }else{

                    $par['__num_acces']=$numacces;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_acces1.page_liste_des_acces1']=$par;
        }

        $par['T0_chi_id_acces']=$par['T0_chi_id_acces']??'';
        $par['T0_chp_nom_acces']=$par['T0_chp_nom_acces']??'';
        $fonction1='c_acces1.page_liste_des_acces1';
        $nom_filtre='vv_acces_filtre1';
        $o1='<h1>Liste des acces</h1>';
        $__num_acces=!isset($par['__num_acces']) ? 0 : (int)($par['__num_acces']);
        $__debut=$__num_acces * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_acces" value="' . $par['T0_chp_nom_acces'] . '" size="8" maxlength="64" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_acces" value="' . $par['T0_chi_id_acces'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /*
          
        */
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_acces1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_acces" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_193()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
            `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE ( / *** *** / `T0`.`chi_id_acces` = :T0_chi_id_acces
               AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces) 
            ORDER BY `T0`.`chi_id_acces` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_193()*/ 193,
            array(
                /**/
                'T0_chi_id_acces' => $par['T0_chi_id_acces'] === '' ? '' : $par['T0_chi_id_acces'],
                'T0_chp_nom_acces' => $par['T0_chp_nom_acces'] === '' ? '' : '' . $par['T0_chp_nom_acces'] . '',
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
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_acces1.page_liste_des_acces1(T0_chp_priorite_acces2(99),indice_menu(10))" title="acces" >';
            $o1 .= '      Réessayer';
            $o1 .= '    </div>';
            $o1 .= '    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\'application';
            $o1 .= '  </div>';
            unset($_SESSION[__X_CLE_APPLICATION]['c_acces1.page_liste_des_acces1']);
            
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
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_acces1.formulaire1(action1(page_acces_creer1))" title="nouveau acces" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_acces,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>nom</th>';
        $lsttbl .= '<th>groupe</th>';
        $lsttbl .= '<th>metier</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_acces1.formulaire1(action1(page_acces_modifier1),chi_id_acces(' . $v0['T0.chi_id_acces'] . '))">✎</div>';
            
            if($v0['T0.chi_id_acces'] <= 2){

                $lsttbl .= '  <div class="hug_bouton_inactif">🗑</div>';

            }else{

                $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_acces1.formulaire1(action1(page_acces_supprimer1),chi_id_acces(' . $v0['T0.chi_id_acces'] . '))">🗑</div>';
            }
            if($v0['T0.chi_id_acces'] != 2){
                $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_fonctions_js1(trier_les_menus(chi_id_acces(' . $v0['T0.chi_id_acces'] . ')))">menu</div>';
            }else{
                $lsttbl .= '  <div class="hug_bouton_inactif">menu</div>';
            }

            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_acces'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . enti1(mb_substr($v0['T0.chp_nom_acces'],0,100)) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . enti1($v0['T1.chp_nom_groupe']) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . enti1($v0['T2.chp_nom_metier']) . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_acces1.page_liste_des_acces1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/