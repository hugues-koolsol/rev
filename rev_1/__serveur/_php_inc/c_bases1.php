<?php
class c_bases1{
    private $sql0=null;
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
      traitement des formulaires des bases
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_bases1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_bases_modifier1'
                       || $action1 === 'page_bases_creer1'
                       || $action1 === 'page_bases_supprimer1'
                       || $action1 === 'page_liste_des_bases1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_bdds_modifier1'
                   || $conteneur1 === 'vv_bases_creer1'
                   || $conteneur1 === 'vv_bases_supprimer1'
                   || $conteneur1 === 'vv_bases_filtre1'
                ){

                    $this->$conteneur1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );

                }else{

                    $donnees_retournees[__x_signaux][__xal][]='Erreur $donnees_recues ' . var_export($donnees_recues,true) . '[' . __LINE__ . ']';
                }

                break;

            }

        }
    }
    /*
      =============================================================================================================
    */
    function creer_la_base_sur_disque_a_partir_du_shema(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xer][]=' <pre>' . var_export( $donnees_recues , true ) . '</pre>[' . __LINE__ . '] ';*/
        $tt126=/*sql_inclure_deb*/
            /* sql_126()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
            `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
            `T2`.`chp_nom_projet`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
             LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
            
            WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_126()*/ 126,
            array( 'T0_chi_id_basedd' => $donnees_recues[__xva]['id_bdd_de_la_base'], 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt126[__xst] === __xer || count($tt126[__xva]) !== 1){

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xer][]=' <pre>' . var_export( $tt126[__xva][0] , true ) . '</pre>[' . __LINE__ . '] ';
        */
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $chemin=$obj_doss->construire_chemin($tt126[__xva][0]['T0.chx_dossier_id_basedd']);
        
        if($chemin[__xst] === __xsu){

            $chemin_bdd=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . 'bdd_' . $donnees_recues[__xva]['id_bdd_de_la_base'] . '.sqlite';

        }else{

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return;
        }

        /*
          $donnees_retournees[__x_signaux][__xer][]=' <pre>' . $chemin_bdd . '</pre>[' . __LINE__ . '] ';
        */
        
        if(is_file($chemin_bdd)){

            $donnees_retournees[__x_signaux][__xer][]=' le fichier bdd existe déjà [' . __LINE__ . ']';
            return;

        }

        $db1temp=new SQLite3($chemin_bdd);
        $tt151=/*sql_inclure_deb*/
            /* sql_151()
            BEGIN TRANSACTION;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_151()*/ 151,
            array(),
            $donnees_retournees,
            $db1temp
        );
        
        if($tt151[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues[__xva]['source_sql_de_la_base'] , true ) . '</pre>' ; exit(0);
        */
        try{
            $ret1=$db1temp->exec($donnees_recues[__xva]['source_sql_de_la_base']);
        }catch(Exception $e){
            
            if($GLOBALS[DEVER_SRV] >= 1){

                $donnees_retournees[__x_signaux][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';

            }

            $donnees_retournees[__x_signaux][__xer][]='operation_table_dans_base(' . $donnees_recues[__xva]['operation_table'] . ') impossible [' . __METHOD__ . ':' . __LINE__ . '] ';
        }
        $tt152=/*sql_inclure_deb*/
            /* sql_152()
            COMMIT;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_152()*/ 152,
            array(),
            $donnees_retournees,
            $db1temp
        );
        
        if($tt152[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        $donnees_retournees[__x_signaux][__xsu][]='La base a été créée [' . __LINE__ . '] ';
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function reecrire_la_base(&$donnees_retournees,&$mat,&$donnees_recues,$id_bdd_de_la_base,$chemin_absolu,$source_sql_de_la_base,$liste_des_tables,$liste_des_tables_champs){
        $chemin_bdd=$chemin_absolu . DIRECTORY_SEPARATOR . 'bdd_' . $id_bdd_de_la_base . '.sqlite';
        $repertoire=realpath(dirname($chemin_bdd));
        
        if(!is_file($chemin_bdd)){

            $donnees_retournees[__x_signaux][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque fichier de bdd non trouvé [' . __LINE__ . '] ';
            return;

        }

        $chemin_bdd_base_temporaire=$repertoire . DIRECTORY_SEPARATOR . 'temporaire_' . md5(date('Y-m-d-H-i-s')) . '.db_temporaire';
        $db1temp=new SQLite3($chemin_bdd_base_temporaire);
        $db1temp->enableExceptions(true);
        $ret1=$db1temp->exec('BEGIN TRANSACTION;');
        
        if($ret1 !== true){

            $donnees_retournees[__x_signaux][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque BEGIN transaction KO [' . __LINE__ . '] ';
            return;

        }

        try{
            $ret1=$db1temp->exec($source_sql_de_la_base);
        }catch(Exception $e){
            $donnees_retournees[__x_signaux][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque création base temporaire impossible [' . __LINE__ . '] ';
            $db1temp->close();
            sauvegarder_et_supprimer_fichier($chemin_bdd_base_temporaire,true);
            return;
        }
        try{
            $ret1=$db1temp->exec('COMMIT;');
            $sql2='ATTACH DATABASE \'' . sq0($chemin_bdd) . '\' as \'source\';';
            $ret2=$db1temp->exec($sql2);
        }catch(Exception $e){
            $donnees_retournees[__x_signaux][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque attach impossible [' . __LINE__ . '] ';
            $db1temp->close();
            sauvegarder_et_supprimer_fichier($chemin_bdd_base_temporaire,true);
            return;
        }
        foreach($liste_des_tables as $k1 => $v1){
            $liste_des_champs=implode(',',$liste_des_tables_champs[$v1]);
            /*
              $donnees_retournees[__x_signaux][__xer][]=$liste_des_champs.' [' . __LINE__ . '] ';
              return;
            */
            $sql3='INSERT INTO `' . sq0($v1) . '`(' . $liste_des_champs . ') SELECT ' . $liste_des_champs . ' FROM `source`.`' . sq0($v1) . '`';
            /*
              if($fd=fopen('toto.txt','a')){fwrite($fd,PHP_EOL.PHP_EOL.'===================='.PHP_EOL.PHP_EOL.date('Y-m-d H:i:s'). ' ' . __LINE__ ."\r\n".'$sql3='.$sql3 .PHP_EOL.PHP_EOL); fclose($fd);}
            */
            try{
                $ret3=$db1temp->exec($sql3);
            }catch(Exception $e){
                $donnees_retournees[__x_signaux][__xer][]=$sql3 . ' [' . __LINE__ . '] ';
                $donnees_retournees[__x_signaux][__xer][]='reecrire_la_base_a_partir_du_shema_sur_disque, les donnees de ' . $v1 . ' ne peuvent être copiées [' . __LINE__ . '] ';
                $db1temp->close();
                sauvegarder_et_supprimer_fichier($chemin_bdd_base_temporaire,true);
                return;
            }
        }
        /*
          il faut supprimer les connexions aux bases;
        */
        $db1temp->close();
        
        if(isset($GLOBALS[__BDD][$id_bdd_de_la_base])){

            $GLOBALS[__BDD][$id_bdd_de_la_base][LIEN_BDD]->close();

        }

        
        if(sauvegarder_et_supprimer_fichier($chemin_bdd,false)){

            
            if((@rename($chemin_bdd_base_temporaire,$chemin_bdd))){

                $donnees_retournees[__xst]=__xsu;
                $donnees_retournees[__x_signaux][__xsu][]='La base (' . $id_bdd_de_la_base . ') a été réécrite  [' . __LINE__ . '] ';
                $donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';

            }


        }

    }
    /*
      =============================================================================================================
    */
    function reecrire_la_base_a_partir_du_shema_sur_disque(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $id_bdd_de_la_base=$donnees_recues[__xva]['id_bdd_de_la_base'];
        $source_sql_de_la_base=$donnees_recues[__xva]['source_sql_de_la_base'];
        $liste_des_tables=$donnees_recues[__xva]['liste_des_tables'];
        $liste_des_tables_champs=$donnees_recues[__xva]['liste_des_tables_champs'];
        $tt=/*sql_inclure_deb*/
            /* sql_126()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
            `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
            `T2`.`chp_nom_projet`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
             LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
            
            WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_126()*/ 126,
            array( 'T0_chi_id_basedd' => $id_bdd_de_la_base, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer || count($tt[__xva]) !== 1){

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $chemin=$obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_basedd']);
        
        if($chemin[__xst] === __xsu){

            $chemin_absolu=$chemin[__xva]['chemin_absolu'];

        }else{

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return;
        }

        $liste_des_autres_projets=array();
        
        if(__X_CLE_APPLICATION === 'rev_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            /*on recherche tous les projets>2 */
            $tt316=/*sql_inclure_deb*/
                /* sql_316()
                / ***meta(sur_base_de_reference(1))*** /
                SELECT 
                `T0`.`chi_id_projet`
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

        $this->reecrire_la_base($donnees_retournees,$mat,$donnees_recues,$id_bdd_de_la_base,$chemin_absolu,$source_sql_de_la_base,$liste_des_tables,$liste_des_tables_champs);
        foreach($liste_des_autres_projets as $k1 => $v1){
            /* on traite les bases des autres projets */
            $this->reecrire_la_base($donnees_retournees,$mat,$donnees_recues,$v1,$chemin_absolu,$source_sql_de_la_base,$liste_des_tables,$liste_des_tables_champs);
        }
    }
    /*
      =============================================================================================================
    */
    function executer_sql3(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $id_bdd_de_la_base='';
        $contexte='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_bases1.executer_sql3' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'id_bdd_de_la_base' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                        $id_bdd_de_la_base=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'contexte' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                        $contexte=$mat[$j + 1][1];
                    }

                }

            }

        }
        /*
          $donnees_retournees[__x_signaux][__xdv][]=' <pre>' . var_export( $GLOBALS[__BDD],true) . '</pre> [' . __LINE__ . '] ';
          return;
        */
        $tt126=/*sql_inclure_deb*/
            /* sql_126()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
            `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
            `T2`.`chp_nom_projet`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
             LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
            
            WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_126()*/ 126,
            array( 'T0_chi_id_basedd' => $id_bdd_de_la_base, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt126[__xst] === __xer || count($tt126[__xva]) !== 1){

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return;

        }

        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $chemin=$obj_doss->construire_chemin($tt126[__xva][0]['T0.chx_dossier_id_basedd']);
        
        if($chemin[__xst] === __xsu){

            $chemin_bdd=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . 'bdd_' . $id_bdd_de_la_base . '.sqlite';

        }else{

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return;
        }

        /*
          $donnees_retournees[__x_signaux][__xer][]=' <pre>' . $chemin_bdd . '</pre>[' . __LINE__ . '] ';
        */
        
        if(!is_file($chemin_bdd)){

            $donnees_retournees[__x_signaux][__xer][]=' le fichier de la base n\'existe pas [' . __LINE__ . ']';
            return;

        }

        $db1temp=new SQLite3($chemin_bdd);
        try{
            $ret=$db1temp->exec($donnees_recues[__xva]['source_sql']);
            $donnees_retournees[__xst]=__xsu;
            $donnees_retournees[__xva]['maj']=$donnees_recues[__xva]['maj'];
        }catch(Exception $e){
            $donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
            $donnees_retournees[__x_signaux][__xer][]='erreur sql ' . $e->getMessage() . ' <pre>' . $donnees_recues[__xva]['source_sql'] . '</pre> [' . __LINE__ . '] ';
            return array( __xst => __xer);
        }
        $db1temp->close();
        
        if(__X_CLE_APPLICATION === 'rev_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            
            if($contexte === 'ajouter_en_bdd_le_champ'
               || $contexte === 'supprimer_en_bdd_le_champ'
               || $contexte === 'renommer_en_bdd_un_champ'
            ){

                /*on recherche tous les projets>2 et on ajoute ce champ*/
                $tt316=/*sql_inclure_deb*/
                    /* sql_316()
                    / ***meta(sur_base_de_reference(1))*** /
                    SELECT 
                    `T0`.`chi_id_projet`
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
                                $donnees_retournees[__x_signaux][__xer][]='erreur sql ' . $e->getMessage() . ' <pre>' . $donnees_recues[__xva]['source_sql'] . '</pre> [' . __LINE__ . '] ';
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
    function obtenir_tableau_sqlite_de_la_table(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues,$nom_de_la_table,$db,$essayer_auto_increment){
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
    function obtenir_la_structure_de_la_base_sqlite(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues,$chemin_base,$essayer_auto_increment){
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
                $obj=$this->obtenir_tableau_sqlite_de_la_table($donnees_retournees,$mat,$donnees_recues,$v1,$db1,$essayer_auto_increment);
                
                if($obj[__xst] === __xsu){

                    $tableauDesTables[$v1]=$obj['value'];

                }else{

                    $donnees_retournees[__x_signaux][__xer][]='erreur sur la table "' . $v1 . '" [' . __LINE__ . '] ';
                    return array( __xst => __xer);
                }

            }

        }else{

            $donnees_retournees[__x_signaux][__xer][]='erreur sql [' . __LINE__ . '] ';
            return array( __xst => __xer);
        }

        return array( __xst => __xsu, 'value' => $tableauDesTables);
    }
    /*
      =============================================================================================================
    */
    function produire_un_tableau_de_la_structure_d_une_bdd_grace_a_un_source_de_structure(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues,$source){
        $tableauDesTables=array();
        $chemin_fichier_temporaire=RACINE_FICHIERS_PROVISOIRES . DIRECTORY_SEPARATOR . date('Y/m/d');
        $continuer=true;
        
        if(!is_dir($chemin_fichier_temporaire)){

            
            if(!mkdir($chemin_fichier_temporaire,0777,true)){

                return array( __xst => __xer, __xme => 'impossible de créer le répertoire temporaire');
                $continuer=false;

            }


        }

        
        if($continuer === true){

            $fichier_temporaire=$chemin_fichier_temporaire . DIRECTORY_SEPARATOR . sha1(date('Y-m-d-H-i-s') . $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']) . '.db';
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
                    $ret=$this->obtenir_la_structure_de_la_base_sqlite($donnees_retournees,$mat,$donnees_recues,$fichier_temporaire,true);
                    
                    if($ret[__xst] === __xsu){

                        $donnees_retournees[__xst]=__xsu;
                        $tableauDesTables=$ret['value'];
                        return array( __xst => __xsu, 'value' => $ret['value']);

                    }else{

                        $donnees_retournees[__x_signaux][__xer][]='erreur sur la création des tables de la base [' . __LINE__ . '] ';
                        /* ne pas créer une copie de sauvegarde d'un fichier temporaire */
                        supprimer_fichier($fichier_temporaire,false);
                    }

                    /* }*/
                    /* ne pas créer une copie de sauvegarde d'un fichier temporaire */
                    supprimer_fichier($fichier_temporaire,false);
                }catch(Exception $e){
                    $donnees_retournees[__x_signaux][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                }

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sur la création de la base [' . __LINE__ . '] ';
            }

            return array( __xst => __xer);

        }

    }
    /*
      =============================================================================================================
    */
    private function comparer_une_base_physique_et_une_base_virtuelle(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues,$id_bdd_de_la_base,$source_base_virtuelle){
        $tableaux_retournes=array( 'tableau1' => array(), 'tableau2' => array());
        $tt=/*sql_inclure_deb*/
            /* sql_126()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
            `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
            `T2`.`chp_nom_projet`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
             LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
            
            WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_126()*/ 126,
            array( 'T0_chi_id_basedd' => $id_bdd_de_la_base, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
            $chemin=$obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_basedd']);
            
            if($chemin[__xst] === __xsu){

                $chemin_bdd=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . 'bdd_' . $id_bdd_de_la_base . '.sqlite';
                
                if(is_file($chemin_bdd)){

                    $ret=$this->obtenir_la_structure_de_la_base_sqlite($donnees_retournees,$mat,$donnees_recues,$chemin_bdd,true);
                    
                    if($ret[__xst] === __xsu){

                        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' .  $source_base_virtuelle . '</pre>' ; exit(0);*/
                        $tableauDesTables=$ret['value'];
                        $ret2=$this->produire_un_tableau_de_la_structure_d_une_bdd_grace_a_un_source_de_structure($donnees_retournees,$mat,$donnees_recues,$source_base_virtuelle);
                        
                        if($ret2[__xst] === __xsu){

                            $tableaux_retournes=array( 'tableau1' => $ret['value'], 'tableau2' => $ret2['value']);

                        }else{

                            $donnees_retournees[__x_signaux][__xer][]='erreur sur la structure de la base 2 de la zone "genere" [' . __LINE__ . '] ';
                            return array( __xst => __xer);
                        }


                    }else{

                        $donnees_retournees[__x_signaux][__xer][]='erreur sur la structure de la base [' . __LINE__ . '] ';
                        return array( __xst => __xer);
                    }


                }else{

                    $donnees_retournees[__x_signaux][__xer][]='fichier de la base de donnée sqlite introuvable [' . __LINE__ . '] ';
                    return array( __xst => __xer);
                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
                return array( __xst => __xer);
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
            return array( __xst => __xer);
        }

        return array( __xst => __xsu, __xva => $tableaux_retournes);
    }
    /*
      =============================================================================================================
    */
    function recuperer_les_tableaux_des_bases(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $id_bdd_de_la_base_en_cours='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_bases1.recuperer_les_tableaux_des_bases' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'id_bdd_de_la_base_en_cours' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                        $id_bdd_de_la_base_en_cours=(int)($mat[$j + 1][1]);

                    }

                }

            }

        }
        /*
          source_base_sql        : obj3.__xst,
          id_bdd_de_la_base      : id_bdd_de_la_base_en_cours,
        */
        $obj=$this->comparer_une_base_physique_et_une_base_virtuelle($donnees_retournees,$mat,$donnees_recues,$id_bdd_de_la_base_en_cours,$donnees_recues[__xva]['source_base_sql']);
        
        if($obj[__xst] === __xsu){

            $donnees_retournees[__xva]=$obj[__xva];
            $donnees_retournees[__xva]['id_bdd_de_la_base_en_cours']=$id_bdd_de_la_base_en_cours;
            $maj='';
            
            $maj.='methode_module_dynamique1(';
            $maj.=' nom_du_module2("_js/c_svg_bdd1.js"),';
            $maj.=' methode2(afficher_resultat_comparaison_base_physique_et_base_virtuelle),';
            $maj.=')';
            if(isset($donnees_retournees[__xva]['maj'])){
                $donnees_retournees[__xva]['maj'].=$maj;
            }else{
                $donnees_retournees[__xva]['maj']=$maj;
            }
            $donnees_retournees[__xva]['maj']=$maj;
            $donnees_retournees[__xst]=__xsu;

        }else{

            $donnees_retournees[__x_signaux][__xer][]='erreur sur recuperer_les_tableaux_des_bases [' . __LINE__ . '] ';
        }

    }
    /*
      =============================================================================================================
      exécute la requête contenue dans $donnees_recues[__xva]['source_sql']
    */
    function operation_table_dans_base(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $id_bdd_de_la_base='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_bases1.operation_table_dans_base' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'id_bdd_de_la_base' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                        $id_bdd_de_la_base=$mat[$j + 1][1];

                    }

                }

            }

        }
        $donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
        $tt=/*sql_inclure_deb*/
            /* sql_126()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
            `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
            `T2`.`chp_nom_projet`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
             LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
            
            WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_126()*/ 126,
            array( 'T0_chi_id_basedd' => $id_bdd_de_la_base, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
            $chemin=$obj_doss->construire_chemin($tt[__xva][0]['T0.chx_dossier_id_basedd']);
            
            if($chemin[__xst] === __xsu){

                $chemin_bdd=$chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . 'bdd_' . $id_bdd_de_la_base . '.sqlite';
                
                if(!is_file($chemin_bdd)){

                    $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
                    $donnees_retournees[__xva]['maj']='maj_interface1(fermer_fenetre1())';
                    return;

                }

                $db1=new SQLite3($chemin_bdd);
                $db1->enableExceptions(true);
                
                if($donnees_recues[__xva]['source_sql'] === ''){

                    $donnees_retournees[__x_signaux][__xer][]='operation_table_dans_base(' . $donnees_recues[__xva]['operation_table'] . ') source sql vide [' . __METHOD__ . ':' . __LINE__ . '] ';
                    return;

                }

                try{
                    $ret1=$db1->exec($donnees_recues[__xva]['source_sql']);
                    $donnees_retournees[__x_signaux][__xsu][]=$donnees_recues[__xva]['operation_table'] . ' réussie [' . __LINE__ . '] ';
                    $donnees_retournees[__xst]=__xsu;
                    /*
                    */
                    
                    
                    if(__X_CLE_APPLICATION === 'rev_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){
                     
                     
                        //echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);
                        if($donnees_recues[__xva]['operation_table'] === 'creer_une_table'
                           || $donnees_recues[__xva]['operation_table'] === 'supprimer_une_table'
                           || $donnees_recues[__xva]['operation_table'] === 'supprimer_l_index'
                           || $donnees_recues[__xva]['operation_table'] === 'ajouter_l_index'
                        ){

                            /*on recherche tous les projets>2 et on ajoute réalise l'opération*/
                            $tt316=/*sql_inclure_deb*/
                                /* sql_316()
                                / ***meta(sur_base_de_reference(1))*** /

                                SELECT 

                                `T0`.`chi_id_projet`
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
                                            $donnees_retournees[__x_signaux][__xer][]='erreur sql ' . $e->getMessage() . ' <pre>' . $donnees_recues[__xva]['source_sql'] . '</pre> [' . __LINE__ . '] ';
                                            return array( __xst => __xer);
                                        }
                                        $db1temp->close();

                                    }

                                }

                            }


                        }
                     
                    }
                    
                    
                }catch(Exception $e){
                    
                    if($GLOBALS[DEVER_SRV] >= 1){

                        $donnees_retournees[__x_signaux][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';

                    }

                    $donnees_retournees[__x_signaux][__xer][]='operation_table_dans_base(' . $donnees_recues[__xva]['operation_table'] . ') impossible [' . __METHOD__ . ':' . __LINE__ . '] ';
                }

            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
        }

    }
    /*
      =============================================================================================================
    */
    public function envoyer_le_rev_de_le_base_en_post(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $a_modifier=array(/**/
            'n_chp_rev_travail_basedd' => $donnees_recues[__xva]['source_rev_de_la_base'],
            'c_chi_id_basedd' => $donnees_recues[__xva]['id_bdd_de_la_base'],
            'c_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
        );
        $tt=/*sql_inclure_deb*/
            /* sql_110()
            UPDATE b1.tbl_bdds SET 
               `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
            WHERE (`chi_id_basedd` = :c_chi_id_basedd
               AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_110()*/ 110,
            $a_modifier,
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu && $tt['changements'] === 1){

            $tt111=/*sql_inclure_deb*/
                /* sql_111()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
                 FROM b1.tbl_bdds T0
                WHERE ( / *** *** / `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
                   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_111()*/ 111,
                array( 'T0_chi_id_basedd' => $donnees_recues[__xva]['id_bdd_de_la_base'], 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt111[__xst] === __xsu){

                require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
                $obj_doss=new c_dossiers1(
                    $donnees_retournees,
                     /*matrice*/ $mat,
                    $donnees_recues
                );
                $chemin_de_la_bdd='';
                $chemin_racine2=$obj_doss->construire_chemin($tt111[__xva][0]['T0.chx_dossier_id_basedd']);
                
                if($chemin_racine2[__xst] === __xsu){

                    $chemin_de_la_bdd=$chemin_racine2[__xva]['chemin_absolu'];
                    /* $donnees_retournees[__x_signaux][__xal][]='"'.var_export( $donnees_recues[__xva]['chx_dossier_requetes_projet'],true) . '" ' . $_SESSION[__X_CLE_APPLICATION]['dossier_requetes']. ' ['.__LINE__.']';*/

                }else{

                    $donnees_retournees[__x_signaux][__xer][]='le chemin de la base n\\a pas pu être construit [' . __LINE__ . '] ';
                    return;
                }

                /*
                  echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_de_la_bdd , true ) . '</pre>' ; exit(0);
                */
                $nom_fichier_dependances=$chemin_de_la_bdd . DIRECTORY_SEPARATOR . 'fichier_des_dependances_bdd_' . $donnees_recues[__xva]['id_bdd_de_la_base'] . '.php';
                
                if($fd=fopen($nom_fichier_dependances,'w')){

                    fwrite($fd,'<?' . 'php' . PHP_EOL . '$tableau_des_dependances=' . var_export($donnees_recues[__xva]['tableau_des_dependances'],true) . ';');
                    fclose($fd);

                }

                /* $donnees_retournees[__x_signaux][__xdv][]='<pre>'.var_export( $donnees_recues[__xva]['tableau_des_dependances'] , true ).'</pre> [' . __LINE__ . '] ';*/
                $donnees_retournees[__xst]=__xsu;
                $donnees_retournees[__x_signaux][__xsu][]='la base a bien été sauvegardée [' . __LINE__ . '] ';

            }else{

            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='erreur de sauvegarde [' . __LINE__ . '] ';
        }

        /* $donnees_retournees[__x_signaux][__xal][]='ici <pre>'.var_export( $donnees_recues , true ).'</pre> [' . __LINE__ . '] ';*/
    }
    /*
      =============================================================================================================
    */
    public function recuperer_zone_travail_pour_les_bases(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xal][]='<pre>'.var_export($mat , true ) . '</pre> [' . __LINE__ . '] ';
        */
        $les_id_des_bases='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_bases1.recuperer_zone_travail_pour_les_bases' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'les_id_des_bases' && $mat[$j][2] === 'f' && $mat[$j + 1][2] === 'c'){

                        $les_id_des_bases=$mat[$j + 1][1];

                    }

                }

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
        
        if($les_id_des_bases !== ''){

            /*
              $donnees_retournees[__x_signaux][__xal][]='<pre>'.var_export($les_id_des_bases , true ) . '</pre> [' . __LINE__ . '] ';
            */
            $tt=/*sql_inclure_deb*/
                /* sql_111()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
                 FROM b1.tbl_bdds T0
                WHERE ( / *** *** / `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
                   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_111()*/ 111,
                array(/**/
                    'T0_chi_id_basedd' => $les_id_des_bases,
                    'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ),
                $donnees_retournees
            );
            /* array( 'T0_chi_id_basedd' => $chi_id_basedd, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),*/
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='erreur de récupération de(s) base(s) ' . $les_id_des_bases . '  [' . __LINE__ . '] ';

            }else{

                /* $donnees_retournees[__x_signaux][__xal][]='<pre>'.var_export($tt , true ) . '</pre> [' . __LINE__ . '] ';*/
                $donnees_retournees[__xva]['liste_des_bases']=$tt[__xva];
                $donnees_retournees[__xva]['maj']='methode_module_dynamique1(nom_du_module2("_js/c_svg_bdd1.js"),methode2(traiter_arbre1),valeurs2(liste_des_bases))';
                $donnees_retournees[__xst]=__xsu;
                /* $donnees_retournees[__x_action]='c_bases1.page_liste_des_bases1()';*/
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]='erreur de récupération de l\'id de la base [' . __LINE__ . '] ';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_bases_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);
        */
        /*
          <>:"/\|?*^, 
          ., ..
          Filenames cannot end in a space or dot.
          CON, PRN, AUX, NUL , COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9,LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9
          
          
        */
        
        if($donnees_recues[__xva]['chx_dossier_id_basedd'] === null
           || $donnees_recues[__xva]['chx_dossier_id_basedd'] === 0
           || $donnees_recues[__xva]['chx_dossier_id_basedd'] === ''
           || !is_numeric($donnees_recues[__xva]['chx_dossier_id_basedd'])
        ){

            $donnees_retournees[__x_signaux][__xer][]='un dossier parent doit être indiqué [' . __LINE__ . ']';
            return;

        }

        $page_liste_des_bases1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_bases1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_bases1=true;

            }

        }
        $donnees_retournees[__xst]=__xsu;
        $donnees_sql=array( array(
                    /**/
                    'chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'chx_dossier_id_basedd' => $donnees_recues[__xva]['chx_dossier_id_basedd'] === '' ? null : $donnees_recues[__xva]['chx_dossier_id_basedd'],
                    'chp_commentaire_basedd' => '',
                    'chp_fournisseur_basedd' => 'sqlite'
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt=/*sql_inclure_deb*/
            /* sql_117()
            INSERT INTO b1.`tbl_bdds`(
                `chx_dossier_id_basedd` , 
                `chx_projet_id_basedd` , 
                `chp_commentaire_basedd` , 
                `chp_fournisseur_basedd`
            ) VALUES (
                :chx_dossier_id_basedd , 
                :chx_projet_id_basedd , 
                :chp_commentaire_basedd , 
                :chp_fournisseur_basedd
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_117()*/ 117,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $code_erreur=$tt['code_erreur']??0;
            
            if($code_erreur === 19){

                $donnees_retournees[__x_signaux][__xer][]=' Cette base existe déjà [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de la création de cette base [' . __LINE__ . ',sql(' . $code_erreur . ')] ';
            }

            return;

        }else if($tt['changements'] === 1){

            
            if($page_liste_des_bases1 === true){

                $this->page_liste_des_bases1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_basedd(' . $tt['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_bases_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]='c_bases1.formulaire1(action1(page_bases_modifier1),chi_id_basedd(' . $tt['nouvel_id'] . '))';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' aucune modification efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_bases_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
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
        $_SESSION[__X_CLE_APPLICATION]['c_bases1.page_liste_des_bases1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_bases1.page_liste_des_bases1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_bases1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_bases_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /* $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);*/
        /*si l'utilisateur bidouille l'id dans l'interface*/
        
        if($donnees_recues[__xva]['chi_id_basedd'] === 1){

            $donnees_retournees[__x_signaux][$tt[__xst]][]=' vous ne pouvez pas supprimer la base 1 [' . __LINE__ . ']';

        }

        $tt=/*sql_inclure_deb*/
            /* sql_126()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
            `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
            `T2`.`chp_nom_projet`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
             LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
            
            WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_126()*/ 126,
            array( 'T0_chi_id_basedd' => $donnees_recues[__xva]['chi_id_basedd'], 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=/*sql_inclure_deb*/
                /* sql_118()
                / ***meta(tester_les_dependances_dans_le_php(1))*** /
                
                DELETE FROM b1.tbl_bdds
                WHERE (`chi_id_basedd` = :chi_id_basedd
                   AND `chx_projet_id_basedd` = :chx_projet_id_basedd) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_118()*/ 118,
                array( 'chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'], 'chi_id_basedd' => $tt[__xva][0]['T0.chi_id_basedd']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                
                if($tt['code_erreur'] === 19){

                    $donnees_retournees[__x_signaux][$tt[__xst]][]=__LINE__ . ' vous ne pouvez pas supprimer cette base car un élément en dépend';

                }else{

                    $donnees_retournees[__x_signaux][$tt[__xst]][]=__LINE__ . ' erreur lors de la suppression';
                }


            }else{

                
                if($tt['changements'] === 1){

                    $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' la suppression a été effectuée en bdd';
                    $this->page_liste_des_bases1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune suppression efféctuée';
                }

            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune suppression efféctuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_bdds_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues,true);
        */
        $page_liste_des_bases1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_liste_des_bases1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_liste_des_bases1=true;

            }

        }
        
        if($donnees_recues[__xva]['chx_dossier_id_basedd'] === null
           || $donnees_recues[__xva]['chx_dossier_id_basedd'] === 0
           || $donnees_recues[__xva]['chx_dossier_id_basedd'] === ''
           || !is_numeric($donnees_recues[__xva]['chx_dossier_id_basedd'])
        ){

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' un dossier parent doit être indiqué';
            return;

        }

        /*si l'utilisateur bidouille l'id dans l'interface*/
        $tt=/*sql_inclure_deb*/
            /* sql_126()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
            `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
            `T2`.`chp_nom_projet`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
             LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
            
            WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_126()*/ 126,
            array( 'T0_chi_id_basedd' => $donnees_recues[__xva]['chi_id_basedd'], 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=/*sql_inclure_deb*/
                /* sql_116()
                UPDATE b1.tbl_bdds SET 
                   `chx_dossier_id_basedd` = :n_chx_dossier_id_basedd , 
                   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
                   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
                   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
                WHERE (`chi_id_basedd` = :c_chi_id_basedd
                   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_116()*/ 116,
                array(
                    /**/
                    'c_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                    'c_chi_id_basedd' => $tt[__xva][0]['T0.chi_id_basedd'],
                    'n_chx_dossier_id_basedd' => $donnees_recues[__xva]['chx_dossier_id_basedd'],
                    'n_chp_commentaire_basedd' => $donnees_recues[__xva]['chp_commentaire_basedd'],
                    'n_chp_rev_travail_basedd' => $donnees_recues[__xva]['chp_rev_travail_basedd'],
                    'n_chp_fournisseur_basedd' => $donnees_recues[__xva]['chp_fournisseur_basedd']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $code_erreur=$tt['code_erreur']??0;
                
                if($code_erreur === 19){

                    $donnees_retournees[__x_signaux][__xer][]='il y a un doublon [' . __LINE__ . ']';

                }else{

                    $donnees_retournees[__x_signaux][__xer][]='erreur lors de la modification de la base [' . __LINE__ . ',sql(' . $code_erreur . ')] ';
                }

                return;

            }else if($tt['changements'] === 1){

                
                if($page_liste_des_bases1 === true){

                    $this->page_liste_des_bases1($donnees_retournees,$mat,$donnees_recues);

                }else{

                    $donnees_retournees[__xst]=__xsu;
                }

                $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' la modification a été effectuée en bdd';

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
    function page_bases_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter une base <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_bases1.formulaire1(action1(page_liste_des_bases1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_bases_creer1">' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>dossier de la base</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '        <input type="hidden" value=""  id="chx_dossier_id_basedd" />' . PHP_EOL;
        $o1 .= '        <span id="chx_dossier_id_basedd_libelle">*indéfini</span>' . PHP_EOL;
        $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
        $parametre_sous_fenetre .= ' sans_menus1()';
        $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_dossier_id_basedd)';
        $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_dossier_id_basedd_libelle)';
        $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
        $parametre_sous_fenetre .= ')';
        $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
        $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
        $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_bases1.formulaire1(conteneur1(vv_bases_creer1),page_liste_des_bases1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_bases1.formulaire1(conteneur1(vv_bases_creer1))" title="" >ajouter</div>';
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
    function page_bases_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . ' TODO $chi_id_basedd '.var_export($chi_id_basedd,true);
          return;
        */
        $o1='';
        $chi_id_basedd='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_basedd' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_basedd=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_basedd) && $chi_id_basedd > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_126()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
                `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
                `T2`.`chp_nom_projet`
                 FROM b1.tbl_bdds T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
                
                 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
                
                WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
                   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_126()*/ 126,
                array( 'T0_chi_id_basedd' => $chi_id_basedd, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt , true ) . '</pre>' ; exit(0);*/
                $o1 .= '<h1>supprimer une base <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_bases1.formulaire1(action1(page_liste_des_bases1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_bases_supprimer1">' . PHP_EOL;
                $o1 .= '  confirmez voous la suppression de la base id=<b>' . $tt[__xva][0]['T0.chi_id_basedd'] . '</b> ';
                /*
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_basedd'] . '" id="chi_id_basedd" />' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton" data-hug_click="c_bases1.formulaire1(conteneur1(vv_bases_supprimer1),page_liste_des_bases1())" title="" >Je confirme la suppression</div>';
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
    function enregistrer_la_matrice_dans_la_table_rev(&$donnees_retournees,&$mat,&$donnees_recues){
        $chi_id_basedd=0;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_basedd' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_basedd=(int)($mat[$i + 1][1]);
                break;

            }

        }
        
        if(is_numeric($chi_id_basedd) && $chi_id_basedd > 0){

            $tt111=/*sql_inclure_deb*/
                /* sql_111()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
                 FROM b1.tbl_bdds T0
                WHERE ( / *** *** / `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
                   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_111()*/ 111,
                array( 'T0_chi_id_basedd' => $chi_id_basedd, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt111[__xst] === __xsu){

                /* suppression des anciennes données de la table rev */
                $tt=/*sql_inclure_deb*/
                    /* sql_105()
                    DELETE FROM b1.tbl_revs
                    WHERE (`chx_projet_rev` = :chx_projet_rev
                       AND `chp_provenance_rev` = :chp_provenance_rev
                       AND `chx_source_rev` = :chx_source_rev) ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_105()*/ 105,
                    array(/**/
                        'chx_projet_rev' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                        'chp_provenance_rev' => 'base',
                        'chx_source_rev' => $chi_id_basedd
                    ),
                    $donnees_retournees
                );
                
                if(__X_CLE_APPLICATION === 'rev' . '_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

                    $donnees_retournees[__xst]=__xsu;
                    return;

                }

                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($tt111[__xva][0]['T0.chp_rev_travail_basedd']);
                
                if($obj_matrice[__xst] === __xsu){

                    $matrice=$obj_matrice[__xva];
                    $a_sauvegarder=array();
                    for( $i=0 ; $i < count($matrice) ; $i++ ){
                        
                        /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev*/
                        $a_sauvegarder[]=array(
                            'chx_projet_rev' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
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
                        /* sql_112()
                        INSERT INTO b1.`tbl_revs`(
                            `chx_projet_rev` , 
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
                            :chx_projet_rev , 
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
                         /*sql_112()*/ 112,
                        $a_sauvegarder,
                        $donnees_retournees
                    );
                    $donnees_retournees[__x_signaux][__xsu][]=' la table rev a été enrichie [' . __LINE__ . ']';

                }else{

                    $donnees_retournees[__x_signaux][__xal][]=' erreur de convertion en matrice [' . __LINE__ . ']';
                    return;
                }

                $donnees_retournees[__xst]=__xsu;

            }


        }

    }
    /*
      =============================================================================================================
    */
    function page_bases_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xif][]='TODO $donnees_recues '.var_export($donnees_recues,true);
          return;
        */
        $o1='';
        $chi_id_basedd='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_basedd' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_basedd=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_basedd) && $chi_id_basedd > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_126()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
                `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
                `T2`.`chp_nom_projet`
                 FROM b1.tbl_bdds T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
                
                 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
                
                WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
                   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_126()*/ 126,
                array( 'T0_chi_id_basedd' => $chi_id_basedd, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='Erreur de sélection du dossier[' . __LINE__ . ']';
                return;

            }

            $o1 .= '<h1>modifier une base <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_bases1.formulaire1(action1(page_liste_des_bases1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
            $o1 .= '<div id="vv_bdds_modifier1">' . PHP_EOL;
            /**/
            $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_basedd'] . '" id="chi_id_basedd" />' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>id</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <b>' . $chi_id_basedd . '</b>  ' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>parent</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_dossier_id_basedd']) . '"  id="chx_dossier_id_basedd" />' . PHP_EOL;
            $o1 .= '        <span id="chx_dossier_id_basedd_libelle">' . PHP_EOL;
            
            if($tt[__xva][0]['T0.chx_dossier_id_basedd'] === null){

                $o1 .= '*indéfini' . PHP_EOL;

            }else{

                
                if($tt[__xva][0]['T1.chp_nom_dossier'] === null){

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_id_basedd'] . ') ' . PHP_EOL;

                }else{

                    $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_id_basedd'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_dossier']) . PHP_EOL;
                }

            }

            $o1 .= '</span>' . PHP_EOL;
            $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
            $parametre_sous_fenetre .= ' sans_menus1()';
            $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_dossier_id_basedd)';
            $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_dossier_id_basedd_libelle)';
            $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
            $parametre_sous_fenetre .= ')';
            $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
            $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
            $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>rev de travail</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            /**/
            $o1 .= '    <div>' . PHP_EOL;
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(chp_rev_travail_basedd)))" title="formater le source rev" >(😊)</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(chp_rev_travail_basedd)))" title="agrandir la zone" >🖐</div>';
            $o1 .= '        <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(chp_rev_travail_basedd)))" title="retrecir la zone" >👊</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(chp_rev_travail_basedd)))" title="vider la zone" >🚫</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(chp_rev_travail_basedd)))" title="copier le contenu" >📋</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(chp_rev_travail_basedd)))" title="aller à la position" >position</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(chp_rev_travail_basedd)))" title="aller à la ligne" >ligne</div>';
            $o1 .= '        <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_bases1.formulaire1(conteneur1(vv_bdds_modifier1),chi_id_basedd(' . $chi_id_basedd . '))" title="" >enregistrer</div>';
            $o1 .= '    </div>' . PHP_EOL;
            /**/
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="chp_rev_travail_basedd" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.chp_rev_travail_basedd']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>commentaire</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
            $o1 .= '        <textarea id="chp_commentaire_basedd" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.chp_commentaire_basedd']) . '</textarea>' . PHP_EOL;
            $o1 .= '      </div>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
            $o1 .= '      <span>fournisseur</span>' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '      <input id="chp_fournisseur_basedd" value="' . enti1($tt[__xva][0]['T0.chp_fournisseur_basedd']) . '" autocapitalize="off" />' . PHP_EOL;
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
            $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_bases1.formulaire1(conteneur1(vv_bdds_modifier1),chi_id_basedd(' . $chi_id_basedd . '),page_liste_des_bases1())" title="" >enregistrer et revenir à la liste</div>';
            $o1 .= '    <div class="hug_bouton" data-hug_click="c_bases1.formulaire1(conteneur1(vv_bdds_modifier1),chi_id_basedd(' . $chi_id_basedd . '))" title="" >enregistrer</div>';
            $o1 .= '    </div>' . PHP_EOL;
            $o1 .= '  </div>' . PHP_EOL;
            /**/
            $o1 .= '</div>' . PHP_EOL;
            $donnees_retournees[__x_page] .= $o1;
            $donnees_retournees[__xst]=__xsu;

        }

    }
    /*
      =============================================================================================================
    */
    function page_liste_des_bases1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        
        if(!isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

            $donnees_retournees[__x_signaux][__xal][]=' vous devez activer un projet [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        $__nbMax=10;
        $par=array();
        $par['T0_chi_id_basedd']='';
        $par['T0_chx_dossier_id_basedd']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_bases1.page_liste_des_bases1' === $mat[$i][1]){

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
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_bases1.page_liste_des_bases1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_bases1.page_liste_des_bases1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_bases1.page_liste_des_bases1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_bases1.page_liste_des_bases1']=$par;
        }

        $par['T0_chi_id_basedd']=$par['T0_chi_id_basedd']??'';
        $par['T0_chx_dossier_id_basedd']=$par['T0_chx_dossier_id_basedd']??'';
        $fonction1='c_bases1.page_liste_des_bases1';
        $nom_filtre='vv_bases_filtre1';
        $o1='<h1>Liste des bases de données</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>dossier</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chx_dossier_id_basedd" value="' . $par['T0_chx_dossier_id_basedd'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_basedd" value="' . $par['T0_chi_id_basedd'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_bases1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_115()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chx_dossier_id_basedd` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_bdds T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd
            
            WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd) 
            ORDER BY `T0`.`chi_id_basedd` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_115()*/ 115,
            array(
                /**/
                'T0_chi_id_basedd' => $par['T0_chi_id_basedd'] === '' ? '' : $par['T0_chi_id_basedd'],
                'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'T0_chx_dossier_id_basedd' => $par['T0_chx_dossier_id_basedd'] === '' ? '' : $par['T0_chx_dossier_id_basedd'],
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des bases [' . __LINE__ . ']';
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $tt '.var_export($tt,true);
        */
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_bases1.formulaire1(action1(page_bases_creer1))" title="nouvelle base" >+*</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>dossier</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /**/
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            
            if($v0['T0.chx_dossier_id_basedd'] === null){

                $lsttbl .= '  <div class="hug_bouton_inactif">✎</div>';
                $lsttbl .= '  <div class="hug_bouton_inactif">x</div>';

            }else{

                
                if($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1 && $v0['T0.chi_id_basedd'] === 1){

                    $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_bases1.formulaire1(action1(page_bases_modifier1),chi_id_basedd(' . $v0['T0.chi_id_basedd'] . '))">✎</div>';
                    /*
                      $lsttbl .= '  <div class="hug_bouton_inactif">✎</div>';
                    */
                    $lsttbl .= '  <div class="hug_bouton_inactif">x</div>';

                }else{

                    $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_bases1.formulaire1(action1(page_bases_modifier1),chi_id_basedd(' . $v0['T0.chi_id_basedd'] . '))">✎</div>';
                    $lsttbl .= '  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_bases1.formulaire1(action1(page_bases_supprimer1),chi_id_basedd(' . $v0['T0.chi_id_basedd'] . '))">🗑</div>';
                }

            }

            $lsttbl .= '  <div class="hug_bouton" data-hug_click="c_svg1.page_editer1(chi_id_basedd(' . $v0['T0.chi_id_basedd'] . '))">🍥</div>';
            $lsttbl .= '  <div class="hug_bouton" data-hug_click="c_bases1.dump_de_la_base(chi_id_basedd(' . $v0['T0.chi_id_basedd'] . '))" title="faire un dump de la base">💾</div>';
            
            if(__X_CLE_APPLICATION === 'rev' . '_1' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){


            }else{

                $lsttbl .= '  <div class="hug_bouton" data-hug_click="c_bases1.enregistrer_la_matrice_dans_la_table_rev(chi_id_basedd(' . $v0['T0.chi_id_basedd'] . '))" title="enregistrer la matrice dans la table rev">rev()</div>';
            }

            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_basedd'] . '';
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '(' . $v0['T0.chx_dossier_id_basedd'] . ') ' . $v0['T1.chp_nom_dossier'];
            $lsttbl .= '</td>';
            /**/
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_bases1.page_liste_des_bases1()';
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    public function dump_de_la_base(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* dump_de_la_base(idxxx)*/
        $id_de_la_base=0;
        $projet_rev=0;
        
        if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){

            for( $i=1 ; $i < count($mat) ; $i++ ){
                
                
                if($mat[$i][1] === 'c_bases1.dump_de_la_base'){

                    for( $j=$i + 1 ; $j < count($mat) ; $j=$mat[$j][12] ){
                        
                        
                        if($mat[$j][1] === 'chi_id_basedd' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                            $id_de_la_base=(int)($mat[$j + 1][1]);

                        }else if($mat[$j][1] === 'projet_rev' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                            $projet_rev=(int)($mat[$j + 1][1]);
                        }

                    }

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = "' . $id_de_la_base . '" <pre>' . var_export($projet_rev,true) . '</pre>' ; exit(0); */
        
        if($id_de_la_base === 0){

            $donnees_retournees[__x_signaux][__xal][]=' $id_de_la_base non trouvé [' . __LINE__ . ']';
            return;

        }

        
        if($projet_rev === 1){

            $chemin_bdd=$chemin_des_bases_rev=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_' . $id_de_la_base . '.sqlite';

        }else{

            $tt111=/*sql_inclure_deb*/
                /* sql_111()
                SELECT 
                `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
                 FROM b1.tbl_bdds T0
                WHERE ( / *** *** / `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
                   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_111()*/ 111,
                array( 'T0_chi_id_basedd' => $id_de_la_base, 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt111 , true ) . '</pre>' ; exit(0); */
            
            if($tt111[__xst] !== __xsu || count($tt111[__xva]) !== 1){

                $donnees_retournees[__x_signaux][__xal][]=' enregistrement de la base non trouvé ' . var_export($tt111[__xva],true) . ' [' . __LINE__ . ']';
                return;

            }

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
            $obj_chemin=$obj_doss->construire_chemin($tt111[__xva][0]['T0.chx_dossier_id_basedd']);
            
            if($obj_chemin[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]='[' . __LINE__ . '] ';
                return;

            }

            $chemin_bdd=$obj_chemin[__xva]['chemin_absolu'] . DIRECTORY_SEPARATOR . 'bdd_' . $id_de_la_base . '.sqlite';
        }

        /*echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($chemin_bdd,true) . '</pre>' ;       exit(0);*/
        /* $projet_rev*/
        $chemin_dump=$chemin_bdd . '.sql';
        
        if(!file_exists($chemin_bdd)){

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' le fichier est absent';
            return;

        }

        /*
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
            $definition_de_la_table=$db->querySingle("SELECT sql FROM sqlite_master WHERE name = '{$table[0]}'") . ";\n\n";
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
            $sql_insert .= implode(",",$liste_des_champs) . ") VALUES";
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
                $sql_insert .= "\n(" . implode(",",$row) . "),";
            }
            
            if($nb_enreg > 0){

                $sql .= PHP_EOL . '/*' . PHP_EOL . '  ===============================' . PHP_EOL . '  DONNEES A INSERER POUR : ' . $v1 . PHP_EOL . '  ===============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
                $sql .= rtrim($sql_insert,",") . ";\n\n";
                $sql_insertion_des_valeurs .= PHP_EOL . '/*' . PHP_EOL . '  ===============================' . PHP_EOL . '  DONNEES A INSERER POUR : ' . $v1 . PHP_EOL . '  ===============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
                $sql_insertion_des_valeurs .= rtrim($sql_insert,",") . ";\n\n";

            }else{

                $sql .= '/*' . PHP_EOL . '  ===============================' . PHP_EOL . '  PAS DE DONNEES A INSERER POUR : ' . $v1 . PHP_EOL . '  ===============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
            }

        }
        $sql .= '/*' . PHP_EOL . '  ============================' . PHP_EOL . '  3°) à la fin les index' . PHP_EOL . '  ============================' . PHP_EOL . '*/' . PHP_EOL . PHP_EOL;
        $sql_insertion_des_index='';
        $indexes=$db->query("SELECT name , tbl_name FROM sqlite_master WHERE type ='index' AND name NOT LIKE 'sqlite_%';");
        while($index=$indexes->fetchArray(SQLITE3_NUM)){
            $sql .= $db->querySingle("SELECT sql FROM sqlite_master WHERE tbl_name='{$index[1]}' and name='{$index[0]}';") . ";\n\n";
            $sql_insertion_des_index .= $db->querySingle("SELECT sql FROM sqlite_master WHERE tbl_name='{$index[1]}' and name='{$index[0]}';") . ";\n\n";
        }
        file_put_contents($chemin_dump,$sql);
        $chemin_dump_creation=$chemin_bdd . '._structure.sql';
        $chemin_dump_insertion=$chemin_bdd . '._donnees.sql';
        $chemin_dump_index=$chemin_bdd . '._index.sql';
        file_put_contents($chemin_dump_creation,$sql_structure);
        file_put_contents($chemin_dump_insertion,$sql_insertion_des_valeurs);
        file_put_contents($chemin_dump_index,$sql_insertion_des_index);
        $donnees_retournees[__x_signaux][__xsu][]=' le dump de la base "' . $id_de_la_base . '" a été réalisé [' . __LINE__ . ']';
        $donnees_retournees[__xst]=__xsu;
    }
}