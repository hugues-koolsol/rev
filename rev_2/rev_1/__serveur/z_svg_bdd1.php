<?php
class z_svg_bdd1{
    private $sql0=null;
    private $moi='z_svg_bdd1';
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
        $this->sql0=new c__sql0(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
        $this->obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
    }
    /*
      =============================================================================================================
    */
    function executer_sql3(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $id_bdd_de_la_base='';
        $contexte='';
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'id_bdd_de_la_base' && $mat[$i][2] === 'f' && $mat[$i + 1][2] === 'c'){

                $id_bdd_de_la_base=$mat[$i + 1][1];

            }else if($mat[$i][1] === 'contexte' && $mat[$i][2] === 'f' && $mat[$i + 1][2] === 'c'){

                $contexte=$mat[$i + 1][1];
            }

        }
        /*
          $donnees_retournees[__xsi][__xdv][]=' <pre>' . var_export( $GLOBALS[__BDD],true) . '</pre> [' . __LINE__ . '] ';
          return;
        */
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
            array( 'T0_chi_id_basedd' => $id_bdd_de_la_base),
            $donnees_retournees
        );
        
        if($tt371[__xst] === __xer || count($tt371[__xva]) !== 1){

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        $chemin=$this->obj_doss->construire_chemin($tt371[__xva][0]['T0.chx_dossier_id_basedd']);
        
        if($chemin[__xst] === __xsu){

            $chemin_bdd=$chemin[__xva]['chemin_absolu'] . 'bdd_' . $id_bdd_de_la_base . '.sqlite';

        }else{

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return;
        }

        /*
          $donnees_retournees[__xsi][__xer][]=' <pre>' . $chemin_bdd . '</pre>[' . __LINE__ . '] ';
        */
        
        if(!is_file($chemin_bdd)){

            $donnees_retournees[__xsi][__xer][]=' le fichier de la base n\'existe pas [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $donnees_recues[__xva]['source_sql'] . '</pre>' ; exit(0); */
        $db1temp=new SQLite3($chemin_bdd);
        try{
            $ret=$db1temp->exec($donnees_recues[__xva]['source_sql']);
            $donnees_retournees[__xst]=__xsu;
        }catch(Exception $e){
            $donnees_retournees[__xsi][__xer][]='erreur sql ' . $e->getMessage() . ' <pre>' . $donnees_recues[__xva]['source_sql'] . '</pre> [' . __LINE__ . '] ';
            return array( __xst => __xer);
        }
        $db1temp->close();
        
        if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            
            if($contexte === 'ajouter_en_bdd_le_champ'
               || $contexte === 'supprimer_en_bdd_le_champ'
               || $contexte === 'renommer_en_bdd_un_champ'
            ){

                /*on recherche tous les projets>2 et on ajoute ce champ*/
                $tt316=/*sql_inclure_deb*/
                    /* sql_316()
                    / ***meta(sur_base_principale(1))*** /
                    SELECT 
                    `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
                     FROM b1.tbl_projets T0
                    WHERE `T0`.`chi_id_projet` > 2
                    ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_316()*/ 316,
                    array(),
                    $donnees_retournees
                );
                
                if($tt316[__xst] === __xsu){

                    foreach($tt316[__xva] as $k1 => $v1){
                        $nom_de_fichier_bdd=$chemin[__xva]['chemin_absolu'] . 'bdd_' . $v1['T0.chi_id_projet'] . '.sqlite';
                        
                        if(is_file($nom_de_fichier_bdd)){

                            $db1temp=new SQLite3($nom_de_fichier_bdd);
                            try{
                                $ret=$db1temp->exec($donnees_recues[__xva]['source_sql']);
                            }catch(Exception $e){
                                $donnees_retournees[__xsi][__xer][]='erreur sql ' . $e->getMessage() . ' <pre>' . $donnees_recues[__xva]['source_sql'] . '</pre> [' . __LINE__ . '] ';
                                return array( __xst => __xer);
                            }
                            $db1temp->close();

                        }

                    }

                }


            }


        }

    }
    /*
      =============================================================================================================
    */
    public function old_recuperer_zone_travail_pour_les_bases2(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
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
                /* $donnees_retournees[__x_action]='z_svg_bdd1.page_liste_des_bases1()';*/
            }


        }else{

            $donnees_retournees[__xsi][__xer][]='erreur de récupération de l\'id de la base [' . __LINE__ . '] ';
        }

    }
    /*
      =============================================================================================================
      exécute la requête contenue dans $donnees_recues[__xva]['source_sql']
    */
    function operation_table_dans_base(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $id_bdd_de_la_base='';
        $l01=count($mat);
        for( $j=$d + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
            
            
            if($mat[$j][1] === 'id_bdd_de_la_base' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                $id_bdd_de_la_base=$mat[$j + 1][1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $id_bdd_de_la_base , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
        $tt=/*sql_inclure_deb*/
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
            array( 'T0_chi_id_basedd' => $id_bdd_de_la_base),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $chemin=$this->obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_basedd']);
            
            if($chemin[__xst] === __xsu){

                
                if(!is_dir($chemin[__xva]['chemin_absolu'])){

                    
                    if(!(@mkdir($chemin[__xva]['chemin_absolu'],true))){

                        $donnees_retournees[__xsi][__xal][]='Le répertoire de la base n\'a pas pu être créé. ' . __METHOD__ . ' [' . __LINE__ . ']';
                        return;

                    }


                }

                $chemin_bdd=$chemin[__xva]['chemin_absolu'] . 'bdd_' . $id_bdd_de_la_base . '.sqlite';
                /* echo __FILE__ . ' ' . __LINE__ . ' $chemin_bdd = <pre>' . var_export( $chemin_bdd , true ) . '</pre>' ; exit(0);*/
                /*#
                  if(!is_file($chemin_bdd)){
                
                      $donnees_retournees[__xsi][__xer][]=' le fichier de la base n\'existe pas [' . __LINE__ . '] ';
                      $donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
                      return;
                
                  }
                */
                $db1=new SQLite3($chemin_bdd);
                $db1->enableExceptions(true);
                
                if($donnees_recues[__xva]['source_sql'] === ''){

                    $donnees_retournees[__xsi][__xer][]='operation_table_dans_base(' . $donnees_recues[__xva]['operation_table'] . ') source sql vide [' . __METHOD__ . ':' . __LINE__ . '] ';
                    return;

                }

                try{
                    $ret1=$db1->exec($donnees_recues[__xva]['source_sql']);
                    $donnees_retournees[__xsi][__xsu][]=$donnees_recues[__xva]['operation_table'] . ' dans la base physique réussie [' . __LINE__ . '] ';
                    $donnees_retournees[__xst]=__xsu;
                    /*
                    */
                    
                    if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1){

                        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
                        
                        if($donnees_recues[__xva]['operation_table'] === 'creer_une_table'
                           || $donnees_recues[__xva]['operation_table'] === 'supprimer_une_table'
                           || $donnees_recues[__xva]['operation_table'] === 'supprimer_l_index'
                           || $donnees_recues[__xva]['operation_table'] === 'ajouter_l_index'
                        ){

                            /*on recherche tous les projets>2 et on ajoute réalise l'opération*/
                            $tt316=/*sql_inclure_deb*/
                                /* sql_316()
                                / ***meta(sur_base_principale(1))*** /
                                SELECT 
                                `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
                                 FROM b1.tbl_projets T0
                                WHERE `T0`.`chi_id_projet` > 2
                                ;
                                */
                                /*sql_inclure_fin*/
                                $this->sql0->sql_iii(
                                 /*sql_316()*/ 316,
                                array(),
                                $donnees_retournees
                            );
                            
                            if($tt316[__xst] === __xsu){

                                foreach($tt316[__xva] as $k1 => $v1){
                                    $nom_de_fichier_bdd=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . 'bdd_' . $v1['T0.chi_id_projet'] . '.sqlite';
                                    
                                    if(is_file($nom_de_fichier_bdd)){

                                        $db1temp=new SQLite3($nom_de_fichier_bdd);
                                        try{
                                            $ret=$db1temp->exec($donnees_recues[__xva]['source_sql']);
                                        }catch(Exception $e){
                                            $donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
                                            $donnees_retournees[__xsi][__xer][]='erreur sql ' . $e->getMessage() . ' <pre>' . $donnees_recues[__xva]['source_sql'] . '</pre> [' . __LINE__ . '] ';
                                            return array( __xst => __xer);
                                        }
                                        $db1temp->close();

                                    }

                                }

                            }


                        }


                    }

                }catch(Exception $e){
                    $donnees_retournees[__xsi][__xer][]='' . $donnees_recues[__xva]['operation_table'] . ' dans la base physique impossible [' . __METHOD__ . ':' . __LINE__ . '] ';
                    $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                }

            }


        }else{

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
        }

    }
    /*
      =============================================================================================================
    */
    function produire_un_tableau_de_la_structure_d_une_bdd_grace_a_un_source_de_structure(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$source){
        $tableauDesTables=array();
        $chemin_fichier_temporaire=__CHEMIN_ABSOLU_TEMPORAIRES__ . date('Y/m/d');
        $continuer=true;
        
        if(!is_dir($chemin_fichier_temporaire)){

            
            if(!mkdir($chemin_fichier_temporaire,0777,true)){

                return array( __xst => __xer, __xme => 'impossible de créer le répertoire temporaire');
                $continuer=false;

            }


        }

        
        if($continuer === true){

            $fichier_temporaire=$chemin_fichier_temporaire . DIRECTORY_SEPARATOR . sha1(date('Y-m-d-H-i-s') . $_SESSION[_CA_]['chi_id_utilisateur']) . '.db';
            $dbtemp=new SQLite3($fichier_temporaire);
            $dbtemp->enableExceptions(true);
            
            if(is_file($fichier_temporaire)){

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $source  . '</pre>' ; exit(0); */
                try{
                    $res0=$dbtemp->exec($source);
                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $source  . '</pre>' ; exit(0);*/
                    /*
                      à faire, si une création de table ne fonctionne pas alors on a une erreur
                      => il faut créer table par table
                    */
                    /* if($res0===true){*/
                    $dbtemp->close();
                    $essayer_auto_increment=true;
                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[_CA_]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
                    
                    if($_SESSION[_CA_]['chi_id_projet'] > 2){

                        $essayer_auto_increment=false;

                    }

                    $ret=$this->obtenir_la_structure_de_la_base_sqlite($mat,$d,$donnees_retournees,$donnees_recues,$fichier_temporaire,$essayer_auto_increment);
                    
                    if($ret[__xst] === __xsu){

                        $donnees_retournees[__xst]=__xsu;
                        $tableauDesTables=$ret['value'];
                        return array( __xst => __xsu, 'value' => $ret['value']);

                    }else{

                        $donnees_retournees[__xsi][__xer][]='erreur sur la création des tables de la base [' . __LINE__ . '] ';
                        /* ne pas créer une copie de sauvegarde d'un fichier temporaire */
                        supprimer_fichier_sans_sauvegarde($fichier_temporaire);
                    }

                    /* }*/
                    /* ne pas créer une copie de sauvegarde d'un fichier temporaire */
                    supprimer_fichier_sans_sauvegarde($fichier_temporaire);
                }catch(Exception $e){
                    $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                }

            }else{

                $donnees_retournees[__xsi][__xer][]='erreur sur la création de la base [' . __LINE__ . '] ';
            }

            return array( __xst => __xer);

        }

    }
    /*
      =============================================================================================================
    */
    function obtenir_tableau_sqlite_de_la_table(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nom_de_la_table,$db,$essayer_auto_increment){
        $t='';
        $ret0=$db->query('create table ____temporaire_____ (id integer primary key autoincrement)');
        $auto_increment=false;
        $sql='SELECT * FROM sqlite_sequence WHERE name = \'' . $nom_de_la_table . '\'';
        /*
          si il n'y a aucune table avec autoincrement alors la table sqlite_sequence n'existe pas et ça provoque une erreur
        */
        $stmt=$db->prepare($sql);
        
        if($stmt !== false){

            $result=$stmt->execute();
            /* SQLITE3_NUM: SQLITE3_ASSOC*/
            while($arr=$result->fetchArray(SQLITE3_NUM)){
                $auto_increment=true;
            }
            $stmt->close();

        }

        $ret0=$db->query('drop table ____temporaire_____');
        $liste_des_champs=array();
        $sql='PRAGMA table_info(\'' . $nom_de_la_table . '\'  ) ';
        $stmt=$db->prepare($sql);
        $liste_des_champs_non_null=array();
        
        if($stmt !== false){

            $a_des_champs_index='';
            $result=$stmt->execute();
            /* SQLITE3_NUM: SQLITE3_ASSOC*/
            while($arr=$result->fetchArray(SQLITE3_NUM)){
                
                if($arr[4] !== null){

                    
                    if(substr($arr[4],0,1) === '\''){

                        $tt=str_replace("''","'",$arr[4]);
                        $tt=substr($tt,1,strlen($tt) - 2);
                        $arr[4]=$tt;

                    }


                }

                $liste_des_champs[$arr[1]]=array(
                    /* cid	name	type	notnull	dflt_value	pk*/
                    'cid' => $arr[0],
                    'name' => $arr[1],
                    'type' => $arr[2],
                    'notnull' => $arr[3],
                    'dflt_value' => $arr[4],
                    'pk' => $arr[5],
                    'auto_increment' => false,
                    'cle_etrangere' => array()
                );
                
                if($arr[2] === 'INTEGER' && $arr[5] === 1){

                    /* INTEGER PRIMARY KEY*/
                    
                    if($auto_increment === true){

                        $liste_des_champs[$arr[1]]['auto_increment']=true;

                    }

                    $a_des_champs_index=$arr[1];

                }else{

                    
                    if($arr[3] === 1){

                        /*
                          si on tente un insert, il faut renseigner les champs not_null
                        */
                        $liste_des_champs_non_null[]=$arr[1];

                    }

                }

            }
            $stmt->close();
            
            if($essayer_auto_increment === true && $auto_increment === false && $a_des_champs_index !== ''){

                /*
                  si la base sqlite vient d'être crée, les tables sont vides et 
                  la table sqlite_sequence qui référence les auto increment n'existe pas
                  Donc si cette table est vide, on essaie de créer un enregistrement temporaire
                */
                $sql1='SELECT COUNT(*) FROM ' . $nom_de_la_table;
                $__nbEnregs=$db->querySingle($sql1);
                
                if($__nbEnregs === 0){

                    /*
                      si le nombre d'enregistrements est supérieur à zéro 
                      alors on aurait du trouver la caractéristique auto increment plus haut.
                      Ici on a zéro enregistrement donc on fait le test
                    */
                    $db->querySingle('PRAGMA foreign_keys=OFF');
                    $sql2='INSERT INTO `' . $nom_de_la_table . '`(`' . $a_des_champs_index . '`';
                    foreach($liste_des_champs_non_null as $k1 => $v1){
                        $sql2 .= ' , `' . $v1 . '`';
                    }
                    $sql2 .= ') VALUES (1';
                    foreach($liste_des_champs_non_null as $k1 => $v1){
                        $sql2 .= ' , "1"';
                    }
                    $sql2 .= ')';
                    $essai_insert=$db->querySingle($sql2);
                    
                    if($essai_insert !== false){

                        $sql='SELECT * FROM sqlite_sequence WHERE name = \'' . $nom_de_la_table . '\'';
                        $niveau_erreur_php=error_reporting(0);
                        $stmt=$db->prepare($sql);
                        
                        if($stmt !== false){

                            $result=$stmt->execute();
                            /* SQLITE3_NUM: SQLITE3_ASSOC*/
                            while($arr=$result->fetchArray(SQLITE3_NUM)){
                                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $nom_de_la_table , true ) . '</pre>' ; exit(0);*/
                                $liste_des_champs[$a_des_champs_index]['auto_increment']=true;
                            }
                            $stmt->close();

                        }

                        $db->querySingle('PRAGMA foreign_keys=ON');
                        $sql3='DELETE FROM `' . $nom_de_la_table . '` WHERE `' . $a_des_champs_index . '` = 1';
                        $essai_delete=$db->querySingle($sql3);
                        error_reporting($niveau_erreur_php);

                    }else{

                        echo __FILE__ . ' ' . __LINE__ . ' $sql2 = <pre>' . var_export($sql2,true) . '</pre>' ;
                        exit(0);
                    }

                    $db->querySingle('PRAGMA foreign_keys=ON');

                }


            }


        }else{

            return signaler(array( __xst => __xsu, __xme => __LINE__ . ' erreur sur la liste des champs de la table ' . $nom_de_la_table . '  ', 'provenance' => BNF));
        }

        $liste_des_cles_etrangeres=array();
        $sql='PRAGMA foreign_key_list(\'' . $nom_de_la_table . '\') ';
        $stmt=$db->prepare($sql);
        
        if($stmt !== false){

            $result=$stmt->execute();
            /* SQLITE3_NUM: SQLITE3_ASSOC*/
            while($arr=$result->fetchArray(SQLITE3_NUM)){
                $liste_des_champs[$arr[3]]['cle_etrangere']=array(
                    'cid' => $arr[0],
                    'seq' => $arr[1],
                    'table' => $arr[2],
                    'from' => $arr[3],
                    'to' => $arr[4],
                    'on_update' => $arr[5]??null,
                    'on_delete' => $arr[6]??null,
                    'match' => $arr[7]??null
                );
            }
            $stmt->close();

        }else{

            return signaler(array( __xst => __xsu, __xme => __LINE__ . ' erreur sur la liste des clés étrangères de la table ' . $nom_de_la_table . ' ', 'provenance' => BNF));
        }

        $liste_des_indexes=array();
        $sql='PRAGMA index_list(\'' . $nom_de_la_table . '\') ';
        $stmt=$db->prepare($sql);
        
        if($stmt !== false){

            $result=$stmt->execute();
            /* SQLITE3_NUM: SQLITE3_ASSOC*/
            while($arr=$result->fetchArray(SQLITE3_NUM)){
                
                if($arr[3] === 'c'){

                    /*
                      on ne prend que origin = 'c' car ce sont les indexes créés par l'utilisateur
                    */
                    $liste_des_indexes[$arr[1]]=array(
                        /* seq	name	unique	origin	partial	on_update	on_delete	match*/
                        'seq' => $arr[0],
                        'name' => $arr[1],
                        'unique' => $arr[2],
                        'origin' => $arr[3],
                        'partial' => $arr[4],
                        'on_update' => $arr[5]??null,
                        'on_delete' => $arr[6]??null,
                        'match' => $arr[7]??null,
                        'champs' => array()
                    );
                    $sql1='PRAGMA index_info(\'' . $arr[1] . '\') ';
                    $stmt1=$db->prepare($sql1);
                    
                    if($stmt1 !== false){

                        $result1=$stmt1->execute();
                        /* SQLITE3_NUM: SQLITE3_ASSOC*/
                        while($arr1=$result1->fetchArray(SQLITE3_NUM)){
                            $liste_des_indexes[$arr[1]]['champs'][$arr1[2]]=array(/* seqno	cid	name	origin	partial	on_update	on_delete	match*/
                                'seqno' => $arr1[0],
                                'cid' => $arr1[1],
                                'name' => $arr1[2]
                            );
                        }
                        $stmt1->close();

                    }else{

                        return signaler(array( __xst => __xsu, __xme => __LINE__ . ' erreur sur la liste des indexes de la table ' . $nom_de_la_table . ' ', 'provenance' => BNF));
                    }


                }

            }
            $stmt->close();

        }else{

            return signaler(array( __xst => __xsu, __xme => __LINE__ . ' erreur sur la liste des indexes de la table ' . $nom_de_la_table . ' ', 'provenance' => BNF));
        }

        $tableau=array( 'liste_des_champs' => $liste_des_champs, 'liste_des_indexes' => $liste_des_indexes);
        return array( __xst => __xsu, 'value' => $tableau);
    }
    /*
      =============================================================================================================
    */
    function obtenir_la_structure_de_la_base_sqlite(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chemin_base,$essayer_auto_increment){
        $tableauDesTables=array();
        $db1=new SQLite3($chemin_base);
        $tableau_des_tables=array();
        $sql='SELECT tbl_name FROM sqlite_master WHERE  name NOT LIKE \'sqlite_%\' AND type == \'table\'';
        $listeDesTables=array();
        $stmt=$db1->prepare($sql);
        
        if($stmt !== false){

            $t='';
            $result=$stmt->execute();
            /* SQLITE3_NUM: SQLITE3_ASSOC*/
            while($arr=$result->fetchArray(SQLITE3_NUM)){
                $tableau_des_tables[]=$arr[0];
            }
            $stmt->close();
            foreach($tableau_des_tables as $k1 => $v1){
                $obj=$this->obtenir_tableau_sqlite_de_la_table($mat,$d,$donnees_retournees,$donnees_recues,$v1,$db1,$essayer_auto_increment);
                
                if($obj[__xst] === __xsu){

                    $tableauDesTables[$v1]=$obj['value'];

                }else{

                    $donnees_retournees[__xsi][__xer][]='erreur sur la table "' . $v1 . '" [' . __LINE__ . '] ';
                    return array( __xst => __xer);
                }

            }

        }else{

            $donnees_retournees[__xsi][__xer][]='erreur sql [' . __LINE__ . '] ';
            return array( __xst => __xer);
        }

        return array( __xst => __xsu, 'value' => $tableauDesTables);
    }
    /*
      =============================================================================================================
    */
    private function comparer_une_base_physique_et_une_base_virtuelle(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$id_bdd_de_la_base,$source_base_virtuelle){
        $tableaux_retournes=array( 'tableau1' => array(), 'tableau2' => array());
        $tt=/*sql_inclure_deb*/
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
            array( 'T0_chi_id_basedd' => $id_bdd_de_la_base),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $chemin=$this->obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_basedd']);
            
            if($chemin[__xst] === __xsu){

                $chemin_bdd=$chemin[__xva]['chemin_absolu'] . 'bdd_' . $id_bdd_de_la_base . '.sqlite';
                
                if(is_file($chemin_bdd)){

                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[_CA_]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
                    $essayer_auto_increment=true;
                    
                    if($_SESSION[_CA_]['chi_id_projet'] > 2){

                        $essayer_auto_increment=false;

                    }

                    $ret=$this->obtenir_la_structure_de_la_base_sqlite($mat,$d,$donnees_retournees,$donnees_recues,$chemin_bdd,$essayer_auto_increment);
                    
                    if($ret[__xst] === __xsu){

                        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' .  $source_base_virtuelle . '</pre>' ; exit(0);*/
                        $tableauDesTables=$ret['value'];
                        $ret2=$this->produire_un_tableau_de_la_structure_d_une_bdd_grace_a_un_source_de_structure($mat,$d,$donnees_retournees,$donnees_recues,$source_base_virtuelle);
                        
                        if($ret2[__xst] === __xsu){

                            $tableaux_retournes=array( 'tableau1' => $ret['value'], 'tableau2' => $ret2['value']);

                        }else{

                            $donnees_retournees[__xsi][__xer][]='erreur sur la structure de la base 2 de la zone "genere" [' . __LINE__ . '] ';
                            return array( __xst => __xer);
                        }


                    }else{

                        $donnees_retournees[__xsi][__xer][]='erreur sur la structure de la base [' . __LINE__ . '] ';
                        return array( __xst => __xer);
                    }


                }else{

                    $donnees_retournees[__xsi][__xer][]='fichier de la base de donnée sqlite introuvable [' . __LINE__ . '] ';
                    return array( __xst => __xer);
                }


            }else{

                $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
                return array( __xst => __xer);
            }


        }else{

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return array( __xst => __xer);
        }

        return array( __xst => __xsu, __xva => $tableaux_retournes);
    }
    /*
      =============================================================================================================
    */
    function recuperer_les_tableaux_des_bases(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $id_bdd_de_la_base_en_cours='';
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'id_bdd_de_la_base_en_cours' && $mat[$i][2] === 'f' && $mat[$i + 1][2] === 'c'){

                $id_bdd_de_la_base_en_cours=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $id_bdd_de_la_base_en_cours , true ) . '</pre>' ; exit(0);*/
        /*
          source_base_sql        : obj3.__xst,
          id_bdd_de_la_base      : id_bdd_de_la_base_en_cours,
        */
        $obj=$this->comparer_une_base_physique_et_une_base_virtuelle($mat,$d,$donnees_retournees,$donnees_recues,$id_bdd_de_la_base_en_cours,$donnees_recues[__xva]['source_base_sql']);
        
        if($obj[__xst] === __xsu){

            $donnees_retournees[__xva]=$obj[__xva];
            $donnees_retournees[__xva]['id_bdd_de_la_base_en_cours']=$id_bdd_de_la_base_en_cours;
            $maj='';
            $maj .= 'methode_module_dynamique1(';
            $maj .= ' nom_du_module2("_js/c_svg_bdd1.js"),';
            $maj .= ' methode2(afficher_resultat_comparaison_base_physique_et_base_virtuelle),';
            $maj .= ')';
            
            if(isset($donnees_retournees[__xva]['maj'])){

                $donnees_retournees[__xva]['maj'] .= $maj;

            }else{

                $donnees_retournees[__xva]['maj']=$maj;
            }

            $donnees_retournees[__xva]['maj']=$maj;
            $donnees_retournees[__xst]=__xsu;

        }else{

            $donnees_retournees[__xsi][__xer][]='erreur sur recuperer_les_tableaux_des_bases [' . __LINE__ . '] ';
        }

    }
    /*
      =============================================================================================================
    */
    function reecrire_la_base(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$id_bdd_de_la_base,$chemin_absolu,$source_sql_de_la_base,$liste_des_tables,$liste_des_tables_champs){
        $chemin_bdd=$chemin_absolu . DIRECTORY_SEPARATOR . 'bdd_' . $id_bdd_de_la_base . '.sqlite';
        $repertoire=realpath(dirname($chemin_bdd));
        
        if(!is_file($chemin_bdd)){

            $donnees_retournees[__xsi][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque fichier de bdd non trouvé [' . __LINE__ . '] ';
            return;

        }

        $chemin_bdd_base_temporaire=$repertoire . DIRECTORY_SEPARATOR . 'temporaire_' . md5(date('Y-m-d-H-i-s')) . '.db_temporaire';
        $db1temp=new SQLite3($chemin_bdd_base_temporaire);
        $db1temp->enableExceptions(true);
        $ret1=$db1temp->exec('BEGIN TRANSACTION;');
        
        if($ret1 !== true){

            $donnees_retournees[__xsi][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque BEGIN transaction KO [' . __LINE__ . '] ';
            return;

        }

        try{
            $ret1=$db1temp->exec($source_sql_de_la_base);
        }catch(Exception $e){
            $donnees_retournees[__xsi][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque création base temporaire impossible [' . __LINE__ . '] ';
            $db1temp->close();
            supprimer_fichier_sans_sauvegarde($chemin_bdd_base_temporaire);
            return;
        }
        try{
            $ret1=$db1temp->exec('COMMIT;');
            $sql2='ATTACH DATABASE \'' . sq0($chemin_bdd) . '\' as \'source\';';
            $ret2=$db1temp->exec($sql2);
        }catch(Exception $e){
            $donnees_retournees[__xsi][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque attach impossible [' . __LINE__ . '] ';
            $db1temp->close();
            supprimer_fichier_sans_sauvegarde($chemin_bdd_base_temporaire);
            return;
        }
        foreach($liste_des_tables as $k1 => $v1){
            $liste_des_champs=implode(',',$liste_des_tables_champs[$v1]);
            /*
              $donnees_retournees[__xsi][__xer][]=$liste_des_champs.' [' . __LINE__ . '] ';
              return;
            */
            $sql3='INSERT INTO `' . sq0($v1) . '`(' . $liste_des_champs . ') SELECT ' . $liste_des_champs . ' FROM `source`.`' . sq0($v1) . '`';
            /*
              if($fd=fopen('toto.txt','a')){fwrite($fd,PHP_EOL.PHP_EOL.'===================='.PHP_EOL.PHP_EOL.date('Y-m-d H:i:s'). ' ' . __LINE__ ."\r\n".'$sql3='.$sql3 .PHP_EOL.PHP_EOL); fclose($fd);}
            */
            try{
                $ret3=$db1temp->exec($sql3);
            }catch(Exception $e){
                $donnees_retournees[__xsi][__xer][]=$sql3 . ' [' . __LINE__ . '] ';
                $donnees_retournees[__xsi][__xer][]='<b> les donnees de ' . $v1 . ' ne peuvent être copiées ' . __METHOD__ . '[' . __LINE__ . '] ';
            }
        }
        /*
          il faut supprimer les connexions aux bases;
        */
        $db1temp->close();
        
        if(isset($GLOBALS[__BDD][$id_bdd_de_la_base])){

            $GLOBALS[__BDD][$id_bdd_de_la_base][LIEN_BDD]->close();

        }

        
        if(sauvegarder_et_supprimer_fichier($chemin_bdd)){

            
            if((@rename($chemin_bdd_base_temporaire,$chemin_bdd))){

                $donnees_retournees[__xst]=__xsu;
                $donnees_retournees[__xsi][__xsu][]='La base (' . $id_bdd_de_la_base . ') a été réécrite  [' . __LINE__ . '] ';
                $donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';

            }


        }

    }
    /*
      =============================================================================================================
    */
    function reecrire_la_base_a_partir_du_shema_sur_disque(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $donnees_retournees[__xac]='';
        $id_bdd_de_la_base=$donnees_recues[__xva]['id_bdd_de_la_base'];
        $source_sql_de_la_base=$donnees_recues[__xva]['source_sql_de_la_base'];
        $liste_des_tables=$donnees_recues[__xva]['liste_des_tables'];
        $liste_des_tables_champs=$donnees_recues[__xva]['liste_des_tables_champs'];
        $tt=/*sql_inclure_deb*/
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
            array( 'T0_chi_id_basedd' => $id_bdd_de_la_base),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer || count($tt[__xva]) !== 1){

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        $chemin=$this->obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_basedd']);
        
        if($chemin[__xst] === __xsu){

            $chemin_absolu=$chemin[__xva]['chemin_absolu'];

        }else{

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return;
        }

        $liste_des_autres_projets=array();
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( substr(_CA_,-7) , true ) . '</pre>' ; exit(0);*/
        
        if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1 && $id_bdd_de_la_base === 1){

            /*on recherche tous les projets>2 */
            $tt316=/*sql_inclure_deb*/
                /* sql_316()
                / ***meta(sur_base_principale(1))*** /
                SELECT 
                `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
                 FROM b1.tbl_projets T0
                WHERE `T0`.`chi_id_projet` > 2
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_316()*/ 316,
                array(),
                $donnees_retournees
            );
            
            if($tt316[__xst] === __xsu){

                foreach($tt316[__xva] as $k1 => $v1){
                    $liste_des_autres_projets[]=$v1['T0.chi_id_projet'];
                }

            }


        }

        $this->reecrire_la_base($mat,$d,$donnees_retournees,$donnees_recues,$id_bdd_de_la_base,$chemin_absolu,$source_sql_de_la_base,$liste_des_tables,$liste_des_tables_champs);
        foreach($liste_des_autres_projets as $k1 => $v1){
            /* on traite les bases des autres projets */
            $this->reecrire_la_base($mat,$d,$donnees_retournees,$donnees_recues,$v1,$chemin_absolu,$source_sql_de_la_base,$liste_des_tables,$liste_des_tables_champs);
        }
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function creer_la_base_sur_disque_a_partir_du_shema(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $donnees_retournees[__xac]='';
        /* $donnees_retournees[__xsi][__xer][]=' <pre>' . var_export( $donnees_recues , true ) . '</pre>[' . __LINE__ . '] ';*/
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
            array( 'T0_chi_id_basedd' => $donnees_recues[__xva]['id_bdd_de_la_base']),
            $donnees_retournees
        );
        
        if($tt371[__xst] === __xer || count($tt371[__xva]) !== 1){

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        /*
          $donnees_retournees[__xsi][__xer][]=' <pre>' . var_export( $tt371[__xva][0] , true ) . '</pre>[' . __LINE__ . '] ';
        */
        $chemin=$this->obj_doss->construire_chemin($tt371[__xva][0]['T0.chx_dossier_id_basedd']);
        
        if($chemin[__xst] === __xsu){

            $chemin_bdd=$chemin[__xva]['chemin_absolu'] . 'bdd_' . $donnees_recues[__xva]['id_bdd_de_la_base'] . '.sqlite';

        }else{

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return;
        }

        /*
          $donnees_retournees[__xsi][__xer][]=' <pre>' . $chemin_bdd . '</pre>[' . __LINE__ . '] ';
        */
        
        if(is_file($chemin_bdd)){

            $donnees_retournees[__xsi][__xer][]=' le fichier bdd existe déjà [' . __LINE__ . ']';
            return;

        }

        $db1temp=new SQLite3($chemin_bdd);
        $tt387=/*sql_inclure_deb*/
            /* sql_387()
            BEGIN TRANSACTION;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_387()*/ 387,
            array(),
            $donnees_retournees,
            $db1temp
        );
        
        if($tt387[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues[__xva]['source_sql_de_la_base'] , true ) . '</pre>' ; exit(0);
        */
        try{
            $ret1=$db1temp->exec($donnees_recues[__xva]['source_sql_de_la_base']);
        }catch(Exception $e){
            $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
        }
        $tt388=/*sql_inclure_deb*/
            /* sql_388()
            COMMIT;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_388()*/ 388,
            array(),
            $donnees_retournees,
            $db1temp
        );
        
        if($tt388[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        $donnees_retournees[__xsi][__xsu][]='La base a été créée [' . __LINE__ . '] ';
        $donnees_retournees[__xst]=__xsu;
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

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt357[__xva] , true ) . '</pre>' ; exit(0);*/
                /*
                  il faut écrire le fichier des dépendances 
                  
                */
                
                if(is_null($tt357[__xva][0]['T0.chx_dossier_id_basedd'])){


                }else{

                    $chemin_de_la_bdd='';
                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt357[__xva][0]['T0.chx_dossier_id_basedd'] , true ) . '</pre>' ; exit(0);*/
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
}
/*
  =====================================================================================================================
*/