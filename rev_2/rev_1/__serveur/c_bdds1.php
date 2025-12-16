<?php
class c_bdds1{
    private $sql0=null;
    private $moi='c_bdds1';
    private $fonction_liste='liste1';
    private $obj_doss=null;
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
        require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
        $this->obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
    }
    /*
      =============================================================================================================
    */
    function enregistrer_la_matrice_dans_la_table_rev(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_basedd=0;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_basedd' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_basedd=(int)($mat[$i + 1][1]);
                break;

            }

        }
        
        if(is_numeric($chi_id_basedd) && $chi_id_basedd > 0){

            $tt357=/*sql_inclure_deb*/
                /* sql_357()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
                 FROM b1.tbl_bdds T0
                WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_357()*/ 357,
                array( 'T0_chi_id_basedd' => $chi_id_basedd),
                $donnees_retournees
            );
            
            if($tt357[__xst] === __xsu){

                /* suppression des anciennes données de la table rev */
                $tt=/*sql_inclure_deb*/
                    /* sql_353()
                    / ***meta(ne_pas_tester_les_dependances_de_suppression(1))*** /
                    
                    DELETE FROM b1.tbl_revs
                    WHERE (`chp_provenance_rev` = :chp_provenance_rev
                       AND `chx_source_rev` = :chx_source_rev) ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_353()*/ 353,
                    array(/**/
                        'chp_provenance_rev' => 'base',
                        'chx_source_rev' => $chi_id_basedd
                    ),
                    $donnees_retournees
                );
                
                if(_CA_ === 'rev' . '_1' && $_SESSION[_CA_]['chi_id_projet'] === 1){

                    $donnees_retournees[__xst]=__xsu;
                    return;

                }

                $obj_matrice=$GLOBALS['__rev_vers_matrice1']->rev_vers_matrice($tt357[__xva][0]['T0.chp_rev_travail_basedd']);
                
                if($obj_matrice[__xst] === __xsu){

                    $matrice=$obj_matrice[__xva];
                    $a_sauvegarder=array();
                    for( $i=0 ; $i < count($matrice) ; $i++ ){
                        
                        /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev*/
                        $a_sauvegarder[]=array(
                            'chp_provenance_rev' => 'base',
                            'chx_source_rev' => $chi_id_basedd,
                            'chp_id_rev' => $matrice[$i][0],
                            'chp_valeur_rev' => str_replace(MON_LF,"\n",$matrice[$i][1]),
                            'chp_type_rev' => $matrice[$i][2],
                            'chp_niveau_rev' => $matrice[$i][3],
                            'chp_quotee_rev' => $matrice[$i][4],
                            'chp_pos_premier_rev' => $matrice[$i][5],
                            'chp_pos_dernier_rev' => $matrice[$i][6],
                            'chp_parent_rev' => $matrice[$i][7],
                            'chp_nbr_enfants_rev' => $matrice[$i][8],
                            'chp_num_enfant_rev' => $matrice[$i][9],
                            'chp_profondeur_rev' => $matrice[$i][10],
                            'chp_pos_ouver_parenthese_rev' => $matrice[$i][11],
                            'chp_enfant_suivant_rev' => $matrice[$i][12],
                            'chp_commentaire_rev' => $matrice[$i][13]
                        );
                    }
                    $tt=/*sql_inclure_deb*/
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
                        $a_sauvegarder,
                        $donnees_retournees
                    );
                    $donnees_retournees[__xsi][__xsu][]=' la table rev a été enrichie [' . __LINE__ . ']';

                }else{

                    $donnees_retournees[__xsi][__xal][]=' erreur de convertion en matrice [' . __LINE__ . ']';
                    return;
                }

                $donnees_retournees[__xst]=__xsu;

            }


        }

    }
    /*
      =============================================================================================================
    */
    public function recuperer_zone_travail_pour_les_bases2(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          $donnees_retournees[__xsi][__xal][]='<pre>'.var_export($mat , true ) . '</pre> [' . __LINE__ . '] ';
        */
        $les_id_des_bases='';
        $nom_de_la_table='';
        $nom_du_module2='';
        $fonction_a_appeler='';
        /* generer_le_php , générer_les_souches*/
        $l01=count($mat);
        for( $j=$d + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
            
            
            if($mat[$j][1] === 'les_id_des_bases' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                $les_id_des_bases=$mat[$j + 1][1];

            }else if($mat[$j][1] === 'nom_de_la_table' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                $nom_de_la_table=$mat[$j + 1][1];

            }else if($mat[$j][1] === 'nom_du_module2' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                $nom_du_module2=$mat[$j + 1][1];

            }else if($mat[$j][1] === 'fonction_a_appeler' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                $fonction_a_appeler=$mat[$j + 1][1];
            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[_CA_]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
        
        if($les_id_des_bases !== ''){

            /*
              $donnees_retournees[__xsi][__xal][]='<pre>'.var_export($les_id_des_bases , true ) . '</pre> [' . __LINE__ . '] ';
            */
            $tt=/*sql_inclure_deb*/
                /* sql_357()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
                 FROM b1.tbl_bdds T0
                WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_357()*/ 357,
                array(/**/
                    'T0_chi_id_basedd' => $les_id_des_bases
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='erreur de récupération de(s) base(s) ' . $les_id_des_bases . '  [' . __LINE__ . '] ';

            }else{

                /* $donnees_retournees[__xsi][__xal][]='<pre>'.var_export($tt , true ) . '</pre> [' . __LINE__ . '] ';*/
                $donnees_retournees[__xva][$fonction_a_appeler]=array( 'donnees_bdd' => $tt[__xva][0], 'nom_de_la_table' => $nom_de_la_table);
                /* $donnees_retournees[__xva]['maj']='methode_module_dynamique1(nom_du_module2("'.$nom_du_module2.'"),methode2(charger_base1),'.$fonction_a_appeler.'(nom_des_donnees('.$fonction_a_appeler.')))';*/
                $donnees_retournees[__xac]='m1(n1(' . $nom_du_module2 . '),f1(' . $fonction_a_appeler . '(nom_des_donnees(' . $fonction_a_appeler . '))))';
                $donnees_retournees[__xst]=__xsu;
            }


        }else{

            $donnees_retournees[__xsi][__xer][]='erreur de récupération de l\'id de la base [' . __LINE__ . '] ';
        }

    }
    /*
      =============================================================================================================
    */
    public function envoyer_le_rev_de_le_base_en_post(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $donnees_retournees[__xac]='';
        $a_modifier=array(/**/
            'n_chp_rev_travail_basedd' => $donnees_recues[__xva]['source_rev_de_la_base'],
            'c_chi_id_basedd' => $donnees_recues[__xva]['id_bdd_de_la_base']
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $a_modifier , true ) . '</pre>' ; exit(0);*/
        $tt356=/*sql_inclure_deb*/
            /* sql_356()
            UPDATE b1.tbl_bdds SET 
               `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
            WHERE `chi_id_basedd` = :c_chi_id_basedd ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_356()*/ 356,
            $a_modifier,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt356[__xst] , true ) . '</pre>' ; exit(0);*/
        
        if($tt356[__xst] === __xsu && $tt356['changements'] === 1){

            $tt357=/*sql_inclure_deb*/
                /* sql_357()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
                 FROM b1.tbl_bdds T0
                WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_357()*/ 357,
                array( 'T0_chi_id_basedd' => $donnees_recues[__xva]['id_bdd_de_la_base']),
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt357[__xva] , true ) . '</pre>' ; exit(0);*/
            
            if($tt357[__xst] === __xsu){

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __RACINE_PGMS__ , true ) . '</pre>' ; exit(0);*/
                /*
                  il faut écrire le fichier des dépendances
                  
                */
                $chemin_de_la_bdd='';
                $chemin_racine2=$this->obj_doss->construire_chemin($tt357[__xva][0]['T0.chx_dossier_id_basedd']);
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_racine2 , true ) . '</pre>' ; exit(0);*/
                
                if($chemin_racine2[__xst] === __xsu){

                    $chemin_de_la_bdd=$chemin_racine2[__xva]['chemin_absolu'];
                    /* $donnees_retournees[__xsi][__xal][]='"'.var_export( $donnees_recues[__xva]['chx_dossier_requetes_projet'],true) . '" ' . $_SESSION[_CA_]['dossier_requetes']. ' ['.__LINE__.']';*/

                }else{

                    $donnees_retournees[__xsi][__xer][]='le chemin de la base n\\a pas pu être construit [' . __LINE__ . '] ';
                    return;
                }

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues[__xva]['tableau_des_dependances'] , true ) . '</pre>' ; exit(0);*/
                $nom_fichier_dependances=$chemin_de_la_bdd . 'fichier_des_dependances_bdd_' . $donnees_recues[__xva]['id_bdd_de_la_base'] . '.php';
                
                if($fd=fopen($nom_fichier_dependances,'w')){

                    fwrite($fd,'<?' . 'php' . PHP_EOL . '$tableau_des_dependances=' . var_export($donnees_recues[__xva]['tableau_des_dependances'],true) . ';');
                    fclose($fd);

                }

                /* $donnees_retournees[__xsi][__xdv][]='<pre>'.var_export( $donnees_recues[__xva]['tableau_des_dependances'] , true ).'</pre> [' . __LINE__ . '] ';*/
                $donnees_retournees[__xst]=__xsu;
                $donnees_retournees[__xsi][__xsu][]='la base a bien été sauvegardée [' . __LINE__ . '] ';

            }else{

            }


        }else{

            $donnees_retournees[__xsi][__xer][]='erreur de sauvegarde [' . __LINE__ . '] ';
        }

        /* $donnees_retournees[__xsi][__xal][]='ici <pre>'.var_export( $donnees_recues , true ).'</pre> [' . __LINE__ . '] ';*/
    }
    /*
      =============================================================================================================
    */
    public function recuperer_les_revs_des_bases(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $les_bases_a_editer='';
        
        if(isset($donnees_recues['__xva']['les_bases_a_editer'])){

            $les_bases_a_editer=$donnees_recues['__xva']['les_bases_a_editer'];

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues['__xva']['les_bases_a_editer'] , true ) . '</pre>' ; exit(0);*/
        $criteres171=array();
        $tt171=/*sql_inclure_deb*/
            /* sql_171()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
             FROM b1.tbl_bdds T0
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_171()*/ 171,
            $criteres171,
            $donnees_retournees
        );
        $donnees_retournees[__xva]['les_bases_du_projet']=array();
        
        if($tt171[__xst] === __xsu && count($tt171[__xva]) > 0){

            $donnees_retournees[__xva]['les_bases_du_projet']=$tt171[__xva];

        }

        $chemin_fichier__liste_des_genres=$_SESSION[_CA_]['chemin_des_sql'] . '__liste_des_genres.php';
        include($chemin_fichier__liste_des_genres);
        $donnees_retournees[__xva]['__liste_des_genres']=$__liste_des_genres;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xac]='m1(n1(_fonctions1),f1(maj_liste_des_genres()))';
        $donnees_retournees[__xac] .= 'm1(n1(' . $this->moi . '),f1(apres_recuperer_les_revs_des_bases(les_bases_a_editer(\'' . $les_bases_a_editer . '\'))))';
        /* ,sans_maj_de_hash()*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    public function dump_de_la_base(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
        $id_de_la_base=0;
        $projet_rev=0;
        for( $i=$d + 1 ; $i < count($mat) ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_basedd' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $id_de_la_base=(int)($mat[$i + 1][1]);

            }

        }
        
        if($id_de_la_base === 0){

            $donnees_retournees[__xsi][__xal][]=' $id_de_la_base non trouvé [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $id_de_la_base = <pre>' . var_export( $id_de_la_base , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' $id_de_la_base = <pre>' . var_export( _CA_ , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' $id_de_la_base = <pre>' . var_export( $_SESSION[_CA_]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __RACINE_PGMS__ = <pre>' . var_export( __RACINE_PGMS__ , true ) . '</pre>' ; exit(0);*/
        
        if($_SESSION[_CA_]['chi_id_projet'] === 1 && $id_de_la_base === 1){

            $chemin_bdd=__RACINE_PGMS__ . '__bdd_sqlite/bdd_' . $id_de_la_base . '.sqlite';

        }else{

            $tt357=/*sql_inclure_deb*/
                /* sql_357()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
                 FROM b1.tbl_bdds T0
                WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_357()*/ 357,
                array( 'T0_chi_id_basedd' => $id_de_la_base),
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt357 , true ) . '</pre>' ; exit(0);*/
            
            if($tt357[__xst] !== __xsu || count($tt357[__xva]) !== 1){

                $donnees_retournees[__xsi][__xal][]=' enregistrement de la base non trouvé ' . var_export($tt357[__xva],true) . ' [' . __LINE__ . ']';
                return;

            }

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[_CA_]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
            $obj_chemin=$this->obj_doss->construire_chemin($tt357[__xva][0]['T0.chx_dossier_id_basedd']);
            
            if($obj_chemin[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
                return;

            }

            $chemin_bdd=$obj_chemin[__xva]['chemin_absolu'] . 'bdd_' . $id_de_la_base . '.sqlite';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($chemin_bdd,true) . '</pre>' ;       exit(0);*/
        /* $projet_rev*/
        $chemin_dump=$chemin_bdd . '.sql';
        
        if(!file_exists($chemin_bdd)){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' le fichier est absent';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_dump , true ) . '</pre>' ; exit(0);*/
        /*
          adapté et complété de la source :
          https://stackoverflow.com/questions/6221816/how-do-i-perform-a-dump-on-sqlite-database-through-php
        */
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_bdd , true ) . '</pre>' ; exit(0);
        */
        $db=new SQLite3($chemin_bdd);
        $db->busyTimeout(5000);
        $sql_structure='';
        $sql='/*' . PHP_EOL . '  ============================' . PHP_EOL . '  Il y a 3 parties dans ce fichier' . PHP_EOL . '  1°) au début, les créations de tables' . PHP_EOL . '  2°) au milieu les insertions' . PHP_EOL . '  3°) à la fin les index' . PHP_EOL . '  ============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
        $tables=$db->query("SELECT name FROM sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%';");
        $les_tables=array();
        while($table=$tables->fetchArray(SQLITE3_NUM)){
            $definition_de_la_table=$db->querySingle("SELECT sql FROM sqlite_master WHERE name = '{$table[0]}'") . ";" . PHP_EOL . PHP_EOL;
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $definition_de_la_table , true ) . '</pre>' ; exit(0); */
            $sql .= $definition_de_la_table;
            $sql_structure .= $definition_de_la_table;
            $les_tables[]=$table[0];
        }
        $sql .= '/*' . PHP_EOL . '  ============================' . PHP_EOL . '  2°) au milieu les insertions' . PHP_EOL . '  ============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
        $sql_insertion_des_valeurs='';
        foreach($les_tables as $k1 => $v1){
            $rows=$db->query("SELECT * FROM " . $v1);
            $sql_insert="INSERT INTO " . $v1 . " (";
            $columns=$db->query("PRAGMA table_info(" . $v1 . ")");
            $liste_des_champs=array();
            while($column=$columns->fetchArray(SQLITE3_ASSOC)){
                $liste_des_champs[]=$column["name"];
            }
            $sql_insert .= implode(",\r\n",$liste_des_champs) . ") VALUES";
            $nb_enreg=0;
            while($row=$rows->fetchArray(SQLITE3_ASSOC)){
                $nb_enreg++;
                foreach($row as $k => $v){
                    
                    if($v === null){

                        $row[$k]="NULL";

                    }else{

                        $row[$k]="'" . SQLite3::escapeString($v) . "'";
                    }

                }
                $sql_insert .= PHP_EOL . "(" . implode(",",$row) . "),";
            }
            
            if($nb_enreg > 0){

                $sql .= PHP_EOL . '/*' . PHP_EOL;
                $sql .= '  ===============================' . PHP_EOL;
                $sql .= '  DONNEES A INSERER POUR : ' . $v1 . PHP_EOL;
                $sql .= '  ===============================' . PHP_EOL;
                $sql .= '*/' . PHP_EOL . PHP_EOL;
                $sql .= rtrim($sql_insert,",") . ";" . PHP_EOL . PHP_EOL;
                $sql_insertion_des_valeurs .= PHP_EOL . '/*' . PHP_EOL . '  ===============================' . PHP_EOL . '  DONNEES A INSERER POUR : ' . $v1 . PHP_EOL . '  ===============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
                $sql_insertion_des_valeurs .= rtrim($sql_insert,",") . ";" . PHP_EOL . PHP_EOL;

            }else{

                $sql .= '/*' . PHP_EOL . '  ===============================' . PHP_EOL . '  PAS DE DONNEES A INSERER POUR : ' . $v1 . PHP_EOL . '  ===============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
            }

        }
        $sql .= '/*' . PHP_EOL . '  ============================' . PHP_EOL . '  3°) à la fin les index' . PHP_EOL . '  ============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
        $sql_insertion_des_index='';
        $indexes=$db->query("SELECT name , tbl_name FROM sqlite_master WHERE type ='index' AND name NOT LIKE 'sqlite_%';");
        while($index=$indexes->fetchArray(SQLITE3_NUM)){
            $sql .= $db->querySingle("SELECT sql FROM sqlite_master WHERE tbl_name='{$index[1]}' and name='{$index[0]}';") . ";" . PHP_EOL . PHP_EOL;
            $sql_insertion_des_index .= $db->querySingle("SELECT sql FROM sqlite_master WHERE tbl_name='{$index[1]}' and name='{$index[0]}';") . ";" . PHP_EOL . PHP_EOL;
        }
        file_put_contents($chemin_dump,$sql);
        $chemin_dump_creation=$chemin_bdd . '._structure.sql';
        $chemin_dump_insertion=$chemin_bdd . '._donnees.sql';
        $chemin_dump_index=$chemin_bdd . '._index.sql';
        file_put_contents($chemin_dump_creation,$sql_structure);
        file_put_contents($chemin_dump_insertion,$sql_insertion_des_valeurs);
        file_put_contents($chemin_dump_index,$sql_insertion_des_index);
        $donnees_retournees[__xsi][__xsu][]=' le dump de la base "' . $id_de_la_base . '" a été réalisé [' . __LINE__ . ']';
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']';*/
        
        if(((int)($form['chx_dossier_id_basedd'])) === 0){

            return array( __xst => __xsu);

        }

        
        if(((int)($form['chx_dossier_id_basedd'])) !== $xva_avant['T0.chx_dossier_id_basedd']){

            $donnees_retournees[__xsi][__xal][]='AFR il faut déplacer la base en cas de changement de répertoire ' . __METHOD__ . ' [' . __LINE__ . ']';

        }

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
        
        if(is_null($__xva['T0.chx_dossier_id_basedd'])){

            return array( __xst => __xsu);

        }

        $obj=$this->obj_doss->construire_chemin($__xva['T0.chx_dossier_id_basedd']);
        
        if($obj['__xst'] !== __xsu){

            $donnees_retournees[__xsi][__xal][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';

        }

        $chemin_absolu=$obj['__xva']['chemin_absolu'];
        /*
          ici la création effective
        */
        /* $donnees_retournees[__xsi][__xer][]=$base_absolu;*/
        /* return;*/
        
        if(is_dir($chemin_absolu)){

            $chemin_bdd=$chemin_absolu . 'bdd_' . $__xva['T0.chi_id_basedd'] . '.sqlite';
            
            if(is_file($chemin_bdd)){

                $donnees_retournees[__xsi][__xif][]='le fichier de la bdd existe encore sur disque, vous devez le supprimer via les dossiers  [' . __LINE__ . ']';

            }


        }

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
        
        if($form['chx_dossier_id_basedd'] === ''){

            return array( __xst => __xsu);

        }

        $obj=$this->obj_doss->construire_chemin($form['chx_dossier_id_basedd']);
        
        if($obj['__xst'] !== __xsu){

            $donnees_retournees[__xsi][__xal][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';

        }

        $chemin_absolu=$obj['__xva']['chemin_absolu'];
        /*
          ici la création effective
        */
        /* $donnees_retournees[__xsi][__xer][]=$base_absolu;*/
        /* return;*/
        
        if(!is_dir($chemin_absolu)){

            
            if(!(@mkdir($base_absolu,true))){

                $donnees_retournees[__xsi][__xal][]='' . __METHOD__ . ' [' . __LINE__ . ']';
                return array( __xst => __xer);

            }


        }

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
        
        if(is_null($form['chp_fournisseur_basedd']) || $form['chp_fournisseur_basedd'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "fournisseur" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt371=/*sql_inclure_deb*/
            /* sql_371()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
             FROM b1.tbl_bdds T0
            WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_371()*/ 371,
            array(/**/
                'T0_chi_id_basedd' => $form['chi_id_basedd']
            ),
            $donnees_retournees
        );
        
        if($tt371[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt371[__xst] === __xsu && count($tt371[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt371[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt362=/*sql_inclure_deb*/
                /* sql_362()
                UPDATE b1.tbl_bdds SET 
                   `chx_dossier_id_basedd` = :n_chx_dossier_id_basedd , 
                   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
                   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
                   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
                WHERE `chi_id_basedd` = :c_chi_id_basedd ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_362()*/ 362,
                array(
                    /**/
                    'c_chi_id_basedd' => $tt371[__xva][0]['T0.chi_id_basedd'],
                    'n_chx_dossier_id_basedd' => $form['chx_dossier_id_basedd'] === '' ? null : $form['chx_dossier_id_basedd'],
                    'n_chp_commentaire_basedd' => $form['chp_commentaire_basedd'] === '' ? null : $form['chp_commentaire_basedd'],
                    'n_chp_rev_travail_basedd' => $form['chp_rev_travail_basedd'] === '' ? null : $form['chp_rev_travail_basedd'],
                    'n_chp_fournisseur_basedd' => $form['chp_fournisseur_basedd']
                ),
                $donnees_retournees
            );
            
            if($tt362[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt371[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt371=/*sql_inclure_deb*/
                /* sql_371()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
                 FROM b1.tbl_bdds T0
                WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_371()*/ 371,
                array(/**/
                    'T0_chi_id_basedd' => $form['chi_id_basedd']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt371;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt371;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_basedd=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_basedd)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_basedd'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_basedd=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_basedd , true ) . '</pre>' ; exit(0);*/
        $tt371=/*sql_inclure_deb*/
            /* sql_371()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
             FROM b1.tbl_bdds T0
            WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_371()*/ 371,
            array(/**/
                'T0_chi_id_basedd' => $chi_id_basedd
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt371 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt371;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_basedd('.$chi_id_basedd.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_basedd=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_basedd)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_basedd'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_basedd=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_basedd(' . $chi_id_basedd . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_basedd , true ) . '</pre>' ; exit(0);*/
        $tt371=/*sql_inclure_deb*/
            /* sql_371()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
             FROM b1.tbl_bdds T0
            WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_371()*/ 371,
            array(/**/
                'T0_chi_id_basedd' => $chi_id_basedd
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt371 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt371;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        $tt371=/*sql_inclure_deb*/
            /* sql_371()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
             FROM b1.tbl_bdds T0
            WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_371()*/ 371,
            array(/**/
                'T0_chi_id_basedd' => $form['chi_id_basedd']
            ),
            $donnees_retournees
        );
        
        if($tt371[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt371[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt364=/*sql_inclure_deb*/
            /* sql_364()
            DELETE FROM b1.tbl_bdds
            WHERE `chi_id_basedd` = :chi_id_basedd ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_364()*/ 364,
            array(/**/
                'chi_id_basedd' => $tt371[__xva][0]['T0.chi_id_basedd']
            ),
            $donnees_retournees
        );
        
        if($tt364[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt371[__xva][0]);
        
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
        $chi_id_basedd=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_basedd'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_basedd=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_basedd , true ) . '</pre>' ; exit(0);*/
        $tt371=/*sql_inclure_deb*/
            /* sql_371()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
             FROM b1.tbl_bdds T0
            WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_371()*/ 371,
            array(/**/
                'T0_chi_id_basedd' => $chi_id_basedd
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt371 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt371;
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
        
        if(is_null($form['chp_fournisseur_basedd']) || $form['chp_fournisseur_basedd'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "fournisseur" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(/**/
                    'chx_dossier_id_basedd' => $form['chx_dossier_id_basedd'] === '' ? null : $form['chx_dossier_id_basedd'],
                    'chp_commentaire_basedd' => $form['chp_commentaire_basedd'] === '' ? null : $form['chp_commentaire_basedd'],
                    'chp_fournisseur_basedd' => $form['chp_fournisseur_basedd']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt363=/*sql_inclure_deb*/
            /* sql_363()
            INSERT INTO b1.`tbl_bdds`(
                `chx_dossier_id_basedd` , 
                `chp_commentaire_basedd` , 
                `chp_fournisseur_basedd`
            ) VALUES (
                :chx_dossier_id_basedd , 
                :chp_commentaire_basedd , 
                :chp_fournisseur_basedd
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_363()*/ 363,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt363[__xst] === __xsu && $tt363['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt363['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt363['nouvel_id']);
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
        $criteres361=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres361[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres361 , true ) . '</pre>' ; exit(0);*/
        $tt361=/*sql_inclure_deb*/
            /* sql_361()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chx_dossier_id_basedd` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
            WHERE ( / *** *** / `T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_dossier_id_basedd` = :T0_chx_dossier_id_basedd
               AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier) 
            ORDER BY `T0`.`chi_id_basedd` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_361()*/ 361,
            $criteres361,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt361[__xst]===__xsu && count($tt361[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt361[__xst] === __xsu && count($tt361[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres361['debut']=$__debut;
            $tt361=/*sql_inclure_deb*/
                /* sql_361()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chx_dossier_id_basedd` , `T1`.`chp_nom_dossier`
                 FROM b1.tbl_bdds T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
                
                WHERE ( / *** *** / `T0`.`chi_id_basedd` = :T0_chi_id_basedd
                   AND `T0`.`chx_dossier_id_basedd` = :T0_chx_dossier_id_basedd
                   AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier) 
                ORDER BY `T0`.`chi_id_basedd` DESC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_361()*/ 361,
                $criteres361,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt361 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt361 = <pre>' . var_export( $tt361 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt361;
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