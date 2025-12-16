<?php
class c_metiers1{
    private $sql0=null;
    private $moi='c_metiers1';
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
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_et_tests_avant_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_et_tests_avant_modifier" [' . __LINE__ . ']';*/
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
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "test_avant_supprimer" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_supprimer" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "tests_avant_creer" [' . __LINE__ . ']';*/
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
        $form['chi_id_metier']=is_null($form['chi_id_metier']) ? null : (int)($form['chi_id_metier']);
        $form['chx_parent_metier']=is_null($form['chx_parent_metier']) ? null : (int)($form['chx_parent_metier']);
        /* conversion des données numériques fin */
        
        if(is_null($form['chp_nom_metier']) || $form['chp_nom_metier'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->test_du_nom_technique1($form['chp_nom_metier'],$donnees_retournees);
        
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
        $tt125=/*sql_inclure_deb*/
            /* sql_125()
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_125()*/ 125,
            array(/**/
                'T0_chi_id_metier' => $form['chi_id_metier']
            ),
            $donnees_retournees
        );
        
        if($tt125[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt125[__xst] === __xsu && count($tt125[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt125[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt127=/*sql_inclure_deb*/
                /* sql_127()
                UPDATE b1.tbl_metiers SET 
                   `chp_nom_metier` = :n_chp_nom_metier , 
                   `chx_parent_metier` = :n_chx_parent_metier
                WHERE `chi_id_metier` = :c_chi_id_metier ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_127()*/ 127,
                array(/**/
                    'c_chi_id_metier' => $form['chi_id_metier'],
                    'n_chp_nom_metier' => $form['chp_nom_metier'],
                    'n_chx_parent_metier' => $form['chx_parent_metier'] === '' ? null : $form['chx_parent_metier']
                ),
                $donnees_retournees
            );
            
            if($tt127[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt125[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt125=/*sql_inclure_deb*/
                /* sql_125()
                SELECT 
                `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
                 FROM b1.tbl_metiers T0
                 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
                
                WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_125()*/ 125,
                array(/**/
                    'T0_chi_id_metier' => $form['chi_id_metier']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt125;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt125;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_metier=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_metier)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_metier'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_metier=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_metier , true ) . '</pre>' ; exit(0);*/
        $tt125=/*sql_inclure_deb*/
            /* sql_125()
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_125()*/ 125,
            array(/**/
                'T0_chi_id_metier' => $chi_id_metier
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt125 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt125;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_metier('.$chi_id_metier.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_metier=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_metier)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_metier'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_metier=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_metier(' . $chi_id_metier . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_metier , true ) . '</pre>' ; exit(0);*/
        $tt125=/*sql_inclure_deb*/
            /* sql_125()
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_125()*/ 125,
            array(/**/
                'T0_chi_id_metier' => $chi_id_metier
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt125 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt125;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /*fonctions_spéciales1(ne_pas_supprimer_id_un(1))*/
        
        if($form['chi_id_metier'] === 1){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $tt125=/*sql_inclure_deb*/
            /* sql_125()
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_125()*/ 125,
            array(/**/
                'T0_chi_id_metier' => $form['chi_id_metier']
            ),
            $donnees_retournees
        );
        
        if($tt125[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt125[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt187=/*sql_inclure_deb*/
            /* sql_187()
            DELETE FROM b1.tbl_metiers
            WHERE `chi_id_metier` = :chi_id_metier ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_187()*/ 187,
            array(/**/
                'chi_id_metier' => $tt125[__xva][0]['T0.chi_id_metier']
            ),
            $donnees_retournees
        );
        
        if($tt187[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt125[__xva][0]);
        
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
        $chi_id_metier=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_metier'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_metier=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_metier , true ) . '</pre>' ; exit(0);*/
        $tt125=/*sql_inclure_deb*/
            /* sql_125()
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_125()*/ 125,
            array(/**/
                'T0_chi_id_metier' => $chi_id_metier
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt125 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt125;
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
        $form['chx_parent_metier']=is_null($form['chx_parent_metier'])
           || $form['chx_parent_metier'] === '' ? null : (int)($form['chx_parent_metier']);
        /* conversion des données numériques fin */
        
        if(is_null($form['chp_nom_metier']) || $form['chp_nom_metier'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->test_du_nom_technique1($form['chp_nom_metier'],$donnees_retournees);
        
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
                    'chp_nom_metier' => $form['chp_nom_metier'],
                    'chx_parent_metier' => $form['chx_parent_metier'] === '' ? null : $form['chx_parent_metier']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt126=/*sql_inclure_deb*/
            /* sql_126()
            INSERT INTO b1.`tbl_metiers`(
                `chp_nom_metier` , 
                `chx_parent_metier`
            ) VALUES (
                :chp_nom_metier , 
                :chx_parent_metier
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_126()*/ 126,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt126[__xst] === __xsu && $tt126['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt126['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt126['nouvel_id']);
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
        $criteres124=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres124[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres124 , true ) . '</pre>' ; exit(0);*/
        $tt124=/*sql_inclure_deb*/
            /* sql_124()
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE (`T0`.`chi_id_metier` = :T0_chi_id_metier
               AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier) 
            ORDER BY `T0`.`chi_id_metier` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_124()*/ 124,
            $criteres124,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt124[__xst]===__xsu && count($tt124[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt124[__xst] === __xsu && count($tt124[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres124['debut']=$__debut;
            $tt124=/*sql_inclure_deb*/
                /* sql_124()
                SELECT 
                `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
                 FROM b1.tbl_metiers T0
                 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
                
                WHERE (`T0`.`chi_id_metier` = :T0_chi_id_metier
                   AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier) 
                ORDER BY `T0`.`chi_id_metier` DESC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_124()*/ 124,
                $criteres124,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt124 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt124 = <pre>' . var_export( $tt124 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt124;
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