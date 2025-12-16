<?php
class c_revs1{
    private $sql0=null;
    private $moi='c_revs1';
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
    function tout_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $tt=/*sql_inclure_deb*/
            /* sql_360()
            / ***meta(ne_pas_tester_les_dependances_de_suppression(1))*** /
            
            DELETE FROM b1.tbl_revs
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_360()*/ 360,
            array(),
            $donnees_retournees
        );
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']';
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_et_tests_avant_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$__xva){
        $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_et_tests_avant_modifier" [' . __LINE__ . ']';
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
        $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "test_avant_supprimer" [' . __LINE__ . ']';
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_supprimer" [' . __LINE__ . ']';
        /* return(array(__xst=>__xer));*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "tests_avant_creer" [' . __LINE__ . ']';
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
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_rev=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_rev)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_rev'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_rev=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_rev , true ) . '</pre>' ; exit(0);*/
        $tt344=/*sql_inclure_deb*/
            /* sql_344()
            SELECT 
            `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
            `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
            `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
            `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev`
             FROM b1.tbl_revs T0
            WHERE ( / *** *** / `T0`.`chi_id_rev` = :T0_chi_id_rev)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_344()*/ 344,
            array(/**/
                'T0_chi_id_rev' => $chi_id_rev
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt344 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt344;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_rev('.$chi_id_rev.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_rev=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_rev)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_rev'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_rev=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_rev(' . $chi_id_rev . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_rev , true ) . '</pre>' ; exit(0);*/
        $tt344=/*sql_inclure_deb*/
            /* sql_344()
            SELECT 
            `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
            `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
            `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
            `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev`
             FROM b1.tbl_revs T0
            WHERE ( / *** *** / `T0`.`chi_id_rev` = :T0_chi_id_rev)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_344()*/ 344,
            array(/**/
                'T0_chi_id_rev' => $chi_id_rev
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt344 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt344;
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
        
        if(is_null($form['chp_id_rev']) || $form['chp_id_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "id" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_type_rev']) || $form['chp_type_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "type" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_niveau_rev']) || $form['chp_niveau_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "niveau" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_quotee_rev']) || $form['chp_quotee_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "quotee" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_pos_premier_rev']) || $form['chp_pos_premier_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "pos premier" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_pos_dernier_rev']) || $form['chp_pos_dernier_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "pos dernier" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_parent_rev']) || $form['chp_parent_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "parent" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_nbr_enfants_rev']) || $form['chp_nbr_enfants_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "nbr enfants" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_num_enfant_rev']) || $form['chp_num_enfant_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "num enfant" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_profondeur_rev']) || $form['chp_profondeur_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "profondeur" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_pos_ouver_parenthese_rev']) || $form['chp_pos_ouver_parenthese_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "pos ouver parenthese" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_enfant_suivant_rev']) || $form['chp_enfant_suivant_rev'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "enfant suivant" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(
                    /**/
                    'chp_provenance_rev' => $form['chp_provenance_rev'],
                    'chx_source_rev' => $form['chx_source_rev'],
                    'chp_id_rev' => $form['chp_id_rev'],
                    'chp_valeur_rev' => $form['chp_valeur_rev'],
                    'chp_type_rev' => $form['chp_type_rev'],
                    'chp_niveau_rev' => $form['chp_niveau_rev'],
                    'chp_quotee_rev' => $form['chp_quotee_rev'],
                    'chp_pos_premier_rev' => $form['chp_pos_premier_rev'],
                    'chp_pos_dernier_rev' => $form['chp_pos_dernier_rev'],
                    'chp_parent_rev' => $form['chp_parent_rev'],
                    'chp_nbr_enfants_rev' => $form['chp_nbr_enfants_rev'],
                    'chp_num_enfant_rev' => $form['chp_num_enfant_rev'],
                    'chp_profondeur_rev' => $form['chp_profondeur_rev'],
                    'chp_pos_ouver_parenthese_rev' => $form['chp_pos_ouver_parenthese_rev'],
                    'chp_enfant_suivant_rev' => $form['chp_enfant_suivant_rev'],
                    'chp_commentaire_rev' => $form['chp_commentaire_rev']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt358=/*sql_inclure_deb*/
            /* sql_358()
            INSERT INTO b1.`tbl_revs`(
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
             /*sql_358()*/ 358,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt358[__xst] === __xsu && $tt358['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt358['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt358['nouvel_id']);
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
        $criteres359=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres359[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres359 , true ) . '</pre>' ; exit(0);*/
        $tt359=/*sql_inclure_deb*/
            /* sql_359()
            SELECT 
            `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
            `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
            `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
            `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
             FROM b1.tbl_revs T0
             LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev
            
            WHERE ( / *** *** / `T0`.`chi_id_rev` = :T0_chi_id_rev
               AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
               AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
               AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
               AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
            ORDER BY `T0`.`chi_id_rev` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_359()*/ 359,
            $criteres359,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt359[__xst]===__xsu && count($tt359[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt359[__xst] === __xsu && count($tt359[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres359['debut']=$__debut;
            $tt359=/*sql_inclure_deb*/
                /* sql_359()
                SELECT 
                `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
                `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
                `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
                `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
                 FROM b1.tbl_revs T0
                 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev
                
                WHERE ( / *** *** / `T0`.`chi_id_rev` = :T0_chi_id_rev
                   AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
                   AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
                   AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
                   AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
                ORDER BY `T0`.`chi_id_rev` ASC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_359()*/ 359,
                $criteres359,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt359 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt359 = <pre>' . var_export( $tt359 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt359;
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