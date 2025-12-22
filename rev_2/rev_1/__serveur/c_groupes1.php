<?php
class c_groupes1{
    private $sql0=null;
    private $moi='c_groupes1';
    private $fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        
        if(!isset($_SESSION[_CA_]) || $_SESSION[_CA_]['chi_id_utilisateur'] === 0){

            echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export(__LINE__,true) . '</pre>' ;
            exit(0);

        }

        require_once(__RACINE_PGMS__ . 'c__sql0.php');
        $this->sql0=new c__sql0($donnees_retournees,$mat,$donnees_recues);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_et_tests_avant_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_et_tests_avant_modifier" [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function test_avant_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        /*
          =====================================================================================================
          par exemple, avant le suppression d'un dossier, on vérifie qu'il est vide
        */
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "test_avant_supprimer" [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_supprimer" [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "tests_avant_creer" [' . __LINE__ . ']'; */
        /* return array(__xst => __xer);*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function action_apres_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nouvel_id,&$form){
        /*
          =====================================================================================================
        */
        /* afr avec $nouvel_id */
        /*
          =====================================================================================================
        */
    }
    /*
      =============================================================================================================
    */
    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /* conversion des données numériques début */
        $form['chi_id_groupe']=is_null($form['chi_id_groupe']) ? null : (int)($form['chi_id_groupe']);
        $form['chx_parent_groupe']=is_null($form['chx_parent_groupe']) ? null : (int)($form['chx_parent_groupe']);
        /* conversion des données numériques fin */
        
        if(is_null($form['chp_nom_groupe']) || $form['chp_nom_groupe'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->test_du_nom_technique1($form['chp_nom_groupe'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le contenu de "nom" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        
        if($_SESSION[_CA_]['chi_id_utilisateur'] > 2){

            /*
              seuls les racines et l'admin peuvent modifier un groupe
            */
            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';

        }

        
        if($form['chi_id_groupe'] <= 2){

            /*
              seul l'utilisateur racine(1) peut modifier les groupes racine(1) et admin(2)
            */
            
            if($_SESSION[_CA_]['chi_id_utilisateur'] !== 1){

                $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }


        }

        $tt131=/*sql_inclure_deb*/
            /* sql_131()
            SELECT 
            `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
             FROM b1.tbl_groupes T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
            
            WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_131()*/ 131,
            array(/**/
                'T0_chi_id_groupe' => $form['chi_id_groupe']
            ),
            $donnees_retournees
        );
        
        if($tt131[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt131[__xst] === __xsu && count($tt131[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt131[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt133=/*sql_inclure_deb*/
                /* sql_133()
                UPDATE b1.tbl_groupes SET 
                   `chp_nom_groupe` = :n_chp_nom_groupe , 
                   `chx_parent_groupe` = :n_chx_parent_groupe
                WHERE `chi_id_groupe` = :c_chi_id_groupe ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_133()*/ 133,
                array(/**/
                    'c_chi_id_groupe' => $form['chi_id_groupe'],
                    'n_chp_nom_groupe' => $form['chp_nom_groupe'],
                    'n_chx_parent_groupe' => $form['chx_parent_groupe'] === '' ? null : $form['chx_parent_groupe']
                ),
                $donnees_retournees
            );
            
            if($tt133[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt131[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt131=/*sql_inclure_deb*/
                /* sql_131()
                SELECT 
                `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
                 FROM b1.tbl_groupes T0
                 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
                
                WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_131()*/ 131,
                array(/**/
                    'T0_chi_id_groupe' => $form['chi_id_groupe']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt131;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt131;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_groupe=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_groupe)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_groupe'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_groupe=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_groupe , true ) . '</pre>' ; exit(0);*/
        $tt131=/*sql_inclure_deb*/
            /* sql_131()
            SELECT 
            `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
             FROM b1.tbl_groupes T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
            
            WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_131()*/ 131,
            array(/**/
                'T0_chi_id_groupe' => $chi_id_groupe
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt131 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt131;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_groupe('.$chi_id_groupe.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_groupe=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_groupe)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_groupe'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_groupe=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_groupe(' . $chi_id_groupe . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_groupe , true ) . '</pre>' ; exit(0);*/
        $tt131=/*sql_inclure_deb*/
            /* sql_131()
            SELECT 
            `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
             FROM b1.tbl_groupes T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
            
            WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_131()*/ 131,
            array(/**/
                'T0_chi_id_groupe' => $chi_id_groupe
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt131 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt131;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(1)) */
        
        if($_SESSION[_CA_]['chi_id_utilisateur'] >= 2){

            /*
              seuls les racines et l'admin peuvent supprimer un groupe
            */
            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';

        }

        
        if($form['chi_id_groupe'] <= 2){

            /*
              on ne doit pas supprimer le groupe racine(1) ou admin(2)
            */
            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $tt131=/*sql_inclure_deb*/
            /* sql_131()
            SELECT 
            `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
             FROM b1.tbl_groupes T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
            
            WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_131()*/ 131,
            array(/**/
                'T0_chi_id_groupe' => $form['chi_id_groupe']
            ),
            $donnees_retournees
        );
        
        if($tt131[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt131[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt134=/*sql_inclure_deb*/
            /* sql_134()
            DELETE FROM b1.tbl_groupes
            WHERE `chi_id_groupe` = :chi_id_groupe ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_134()*/ 134,
            array(/**/
                'chi_id_groupe' => $tt131[__xva][0]['T0.chi_id_groupe']
            ),
            $donnees_retournees
        );
        
        if($tt134[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt131[__xva][0]);
        
        if(isset($form['__mat_liste_si_ok'])){

            $mat1=json_decode($form['__mat_liste_si_ok'],true);
            $d=1;
            $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

        }

    }
    /*
      =============================================================================================================
    */
    function page_confirmation_supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $chi_id_groupe=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_groupe'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_groupe=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_groupe , true ) . '</pre>' ; exit(0);*/
        $tt131=/*sql_inclure_deb*/
            /* sql_131()
            SELECT 
            `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
             FROM b1.tbl_groupes T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
            
            WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_131()*/ 131,
            array(/**/
                'T0_chi_id_groupe' => $chi_id_groupe
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt131 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt131;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function creer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $d . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /* conversion des données numériques début */
        $form['chx_parent_groupe']=is_null($form['chx_parent_groupe'])
           || $form['chx_parent_groupe'] === '' ? null : (int)($form['chx_parent_groupe']);
        /* conversion des données numériques fin */
        
        if(is_null($form['chp_nom_groupe']) || $form['chp_nom_groupe'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->test_du_nom_technique1($form['chp_nom_groupe'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le contenu de  "nom" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(/**/
                    'chp_nom_groupe' => $form['chp_nom_groupe'],
                    'chx_parent_groupe' => $form['chx_parent_groupe'] === '' ? null : $form['chx_parent_groupe']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt132=/*sql_inclure_deb*/
            /* sql_132()
            INSERT INTO b1.`tbl_groupes`(
                `chp_nom_groupe` , 
                `chx_parent_groupe`
            ) VALUES (
                :chp_nom_groupe , 
                :chx_parent_groupe
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_132()*/ 132,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt132[__xst] === __xsu && $tt132['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt132['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt132['nouvel_id']);
                return;

            }

            
            if(isset($form['__mat_liste_si_ok'])){

                $mat1=json_decode($form['__mat_liste_si_ok'],true);
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat1 , true ) . '</pre>' ; exit(0);*/
                $d=1;
                $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

            }


        }

    }
    /*
      =============================================================================================================
    */
    function filtre1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $__nbMax=40;
        $form=$GLOBALS['__fnt1']->debut_filtre1($mat,$d,$donnees_retournees,$donnees_recues,$this->fonction_liste);
        
        if(!isset($form['$__num_page'])){

            $__num_page=0;

        }else{

            $__num_page=(int)($form['$__num_page']);
        }

        $__debut=$__num_page * $__nbMax;
        $criteres130=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres130[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres130 , true ) . '</pre>' ; exit(0);*/
        $tt130=/*sql_inclure_deb*/
            /* sql_130()
            SELECT 
            `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T1`.`chp_nom_groupe` , `T0`.`chx_parent_groupe`
             FROM b1.tbl_groupes T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
            
            WHERE ( / *** *** / `T0`.`chi_id_groupe` = :T0_chi_id_groupe
               AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe
               AND `T0`.`chx_parent_groupe` = :T0_chx_parent_groupe
               AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe) 
            ORDER BY `T0`.`chi_id_groupe` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_130()*/ 130,
            $criteres130,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt130[__xst]===__xsu && count($tt130[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt130[__xst] === __xsu && count($tt130[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres130['debut']=$__debut;
            $tt130=/*sql_inclure_deb*/
                /* sql_130()
                SELECT 
                `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T1`.`chp_nom_groupe` , `T0`.`chx_parent_groupe`
                 FROM b1.tbl_groupes T0
                 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
                
                WHERE ( / *** *** / `T0`.`chi_id_groupe` = :T0_chi_id_groupe
                   AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe
                   AND `T0`.`chx_parent_groupe` = :T0_chx_parent_groupe
                   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe) 
                ORDER BY `T0`.`chi_id_groupe` DESC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_130()*/ 130,
                $criteres130,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt130 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt130 = <pre>' . var_export( $tt130 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['$__nbMax']=$__nbMax;
        $donnees_retournees[__xva]['$__debut']=$__debut;
        $donnees_retournees[__xva]['$__num_page']=$__num_page;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_retournees[__xac] , true ) . '</pre>' ; exit(0);*/
        /* */
        $donnees_retournees[__xac]='';
        $donnees_retournees[__xac] .= 'pm1(';
        $donnees_retournees[__xac] .= ' m1(';
        $donnees_retournees[__xac] .= '  n1(' . __CLASS__ . ')';
        $donnees_retournees[__xac] .= '  f1(';
        $donnees_retournees[__xac] .= '   ' . $this->fonction_liste . '(';
        foreach($form as $k1 => $v1){
            $donnees_retournees[__xac] .= critere_liste($form,$k1);
        }
        $donnees_retournees[__xac] .= '   )';
        $donnees_retournees[__xac] .= '  )';
        $donnees_retournees[__xac] .= ' )';
        $donnees_retournees[__xac] .= ')';
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $donnees_retournees[__xac]  . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $this->fonction_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva][$this->fonction_liste]=$tt130;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function sous_liste1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $this->fonction_liste='sous_liste1';
        $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
        return;
    }
    /*
      =============================================================================================================
    */
    function liste1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $this->fonction_liste='liste1';
        $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
        return;
    }
}