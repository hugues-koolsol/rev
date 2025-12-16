<?php
class c_projets1{
    private $sql0=null;
    private $moi='c_projets1';
    private $fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        
        if(!isset($_SESSION[_CA_]) || $_SESSION[_CA_]['chi_id_utilisateur'] === 0){

            $donnees_retournees[__xac]='pm1(m1(n1(_connexion1),f1(page_connexion1())))';
            $donnees_retournees[__xsi][__xer][]=' vous devez être connecté [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        require_once(__RACINE_PGMS__ . 'c__sql0.php');
        $this->sql0=new c__sql0($donnees_retournees,$mat,$donnees_recues);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
      fonction utilisée seulement dans rev_2
    */
    function construit_liste_des_sources(&$liste_des_sources,&$liste_des_dossiers_par_chemin,$dir2,&$liste_des_sources_binaires){
        
        if(!is_dir($dir2)){

            return array( __xst => __xer);

        }

        $objects=scandir($dir2);
        foreach($objects as $object){
            
            if($object != '.' && $object != '..'){

                
                if(is_dir($dir2 . DIRECTORY_SEPARATOR . $object) && !is_link($dir2 . "/" . $object)){

                    $obj=$this->construit_liste_des_sources($liste_des_sources,$liste_des_dossiers_par_chemin,$dir2 . DIRECTORY_SEPARATOR . $object,$liste_des_sources_binaires);
                    
                    if($obj[__xst] !== __xsu){

                        return array( __xst => __xer);

                    }


                }else{

                    
                    if(!isset($liste_des_dossiers_par_chemin[$dir2 . DIRECTORY_SEPARATOR]['che_contient_genere_dossier'])){

                        echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = $dir2=' . $dir2 . ' <pre>' . var_export($liste_des_dossiers_par_chemin,true) . '</pre>' ;
                        exit(0);

                    }

                    
                    if($liste_des_dossiers_par_chemin[$dir2 . DIRECTORY_SEPARATOR]['che_contient_genere_dossier'] === 0){

                        $che_binaire_source=0;
                        $cle=$dir2 . DIRECTORY_SEPARATOR . $object;
                        
                        if(isset($liste_des_sources_binaires[$cle])){

                            $che_binaire_source=1;

                        }

                        $liste_des_sources[]=array(/**/
                            'chp_nom_source' => $object,
                            'chx_dossier_id_source' => $liste_des_dossiers_par_chemin[$dir2 . DIRECTORY_SEPARATOR]['chi_id_dossier'],
                            'che_binaire_source' => $che_binaire_source
                        );

                    }

                }


            }

        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      fonction utilisée seulement dans rev_2
    */
    function construit_liste_des_dossiers(&$liste_des_dossiers,$dir2){
        
        if(!is_dir($dir2)){

            return array( __xst => __xer);

        }

        $objects=scandir($dir2);
        foreach($objects as $object){
            
            if($object != '.' && $object != '..'){

                
                if(is_dir($dir2 . DIRECTORY_SEPARATOR . $object) && !is_link($dir2 . "/" . $object)){

                    $obj=$this->construit_liste_des_dossiers($liste_des_dossiers,$dir2 . DIRECTORY_SEPARATOR . $object);
                    
                    if($obj[__xst] === __xsu){

                        
                        if(!isset($liste_des_dossiers[$dir2 . DIRECTORY_SEPARATOR . $object])){

                            $liste_des_dossiers[$dir2 . DIRECTORY_SEPARATOR . $object . DIRECTORY_SEPARATOR]=array( 'chi_id_dossier' => 0, 'chx_parent_dossier' => 0);

                        }


                    }else{

                        return array( __xst => __xer);
                    }


                }


            }

        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      fonction utilisée seulement dans rev_2
    */
    function initialiser_le_clone(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $_SESSION[_CA_]['chi_id_projet']=1;
        
        if(substr(_CA_,-7) !== '_rev_2_'){

            $donnees_retournees[__xsi][__xer][]=' cette fonction ne peut être utilisée que dans le projet 2 [' . __LINE__ . ']';
            return;

        }

        /* begin transaction */
        $tt1=/*sql_inclure_deb*/
            /* sql_379()
            BEGIN TRANSACTION;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_379()*/ 379,
            array(),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur lors du begin transaction  [' . __LINE__ . ']';
            return;

        }

        /*
          on récupère les références des les sources binaires
        */
        $liste_des_sources_binaires=array();
        $tt383=/*sql_inclure_deb*/
            /* sql_383()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source`
             FROM b1.tbl_sources T0
            WHERE `T0`.`che_binaire_source` = :T0_che_binaire_source
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_383()*/ 383,
            array( 'T0_che_binaire_source' => 1),
            $donnees_retournees
        );
        
        if($tt383[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur lors de la récupération des sources binaires [' . __LINE__ . ']';
            return;

        }

        require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
        $chemin_racine2=$obj_doss->construire_chemin(1);
        
        if($chemin_racine2[__xst] === __xsu){

            $nom_chemin_racine2=$chemin_racine2[__xva]['chemin_absolu'];
            $nom_chemin_racine1=substr($nom_chemin_racine2,0,-1) . '1';
            /* echo __FILE__ . ' ' . __LINE__ . ' $nom_chemin_racine2 = <pre>' . var_export( $nom_chemin_racine1 , true ) . '</pre>' ; exit(0);*/

        }

        foreach($tt383[__xva] as $k1 => $v1){
            $chemin=$obj_doss->construire_chemin($v1['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin[__xva]['chemin_absolu'] , true ) . '</pre>' ; exit(0);*/
                $cle=str_replace($nom_chemin_racine2,$nom_chemin_racine2,$chemin[__xva]['chemin_absolu']) . $v1['T0.chp_nom_source'];
                $liste_des_sources_binaires[$cle]=array( 'che_binaire_source' => 1);

            }else{

                $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pout le source ' . var_export($v1,true) . ' [' . __LINE__ . ']';
                return;
            }

        }
        /* suppression des projets >=2 du projet 2 */
        $tt1=/*sql_inclure_deb*/
            /* sql_157()
            DELETE FROM b1.tbl_projets
            WHERE `chi_id_projet` >= :chi_id_projet ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_157()*/ 157,
            array( 'chi_id_projet' => 2),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur lors de la suppression [' . __LINE__ . ']';
            return;

        }

        /*
          on crée les dossiers, sauf ceux existants
          
          1°] ceux exiatants
        */
        $tt369=/*sql_inclure_deb*/
            /* sql_369()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
             FROM b1.tbl_dossiers T0
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_369()*/ 369,
            array(),
            $donnees_retournees
        );
        
        if($tt369[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur lors de la sélection des dossiers [' . __LINE__ . ']';
            return;

        }

        $liste_des_dossiers=array();
        foreach($tt369[__xva] as $k1 => $v1){
            $chemin=$obj_doss->construire_chemin($v1['T0.chi_id_dossier']);
            
            if($chemin[__xst] === __xsu){

                $liste_des_dossiers[$chemin[__xva]['chemin_absolu']]=array(/**/
                    'chi_id_dossier' => $v1['T0.chi_id_dossier'],
                    'chx_parent_dossier' => $v1['T0.chx_parent_dossier'],
                    'che_contient_genere_dossier' => $v1['T0.che_contient_genere_dossier']
                );

            }else{

                $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pout le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

        }
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $liste_des_dossiers , true ) . '</pre>' ; exit(0);
        */
        $chemin_racine2=__CHEMIN_ABSOLU_SITE__ . 'rev_2';
        $obj=$this->construit_liste_des_dossiers($liste_des_dossiers,$chemin_racine2);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='constitution de la liste des dossiers impossible [' . __LINE__ . ']';
            return;

        }

        /*
          
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $liste_des_dossiers , true ) . '</pre>' ; exit(0);
          
          2°] les autres
        */
        $nb_boucles=100;
        $trouve=true;
        do{
            $trouve=false;
            foreach($liste_des_dossiers as $k1 => $v1){
                
                if($v1['chi_id_dossier'] === 0){

                    $trouve=true;
                    $chemin_parent=substr($k1,0,strrpos($k1,'\\'));
                    $chx_parent_dossier=0;
                    foreach($liste_des_dossiers as $k2 => $v2){
                        
                        if($k2 === $chemin_parent){

                            $chx_parent_dossier=$v2['chi_id_dossier'];

                        }

                    }
                    
                    if($chx_parent_dossier > 0){

                        $nom_du_dossier=substr($k1,strrpos($k1,'\\') + 1);
                        $tt378=/*sql_inclure_deb*/
                            /* sql_378()
                            INSERT INTO b1.`tbl_dossiers`(
                                `chp_nom_dossier` , 
                                `chx_parent_dossier` , 
                                `che_contient_genere_dossier`
                            ) VALUES (
                                :chp_nom_dossier , 
                                :chx_parent_dossier , 
                                :che_contient_genere_dossier
                            );
                            */
                            /*sql_inclure_fin*/
                            $this->sql0->sql_iii(378,array( array( 'chp_nom_dossier' => $nom_du_dossier, 'chx_parent_dossier' => $chx_parent_dossier === '' ? null : $chx_parent_dossier)),$donnees_retournees);
                        
                        if($tt378[__xst] !== __xsu){

                            $donnees_retournees[__xsi][__xer][]='erreur lors de la création du dossier [' . __LINE__ . ']';
                            return;

                        }

                        $liste_des_dossiers[$k1]['chi_id_dossier']=$tt378['nouvel_id'];
                        $liste_des_dossiers[$k1]['chx_parent_dossier']=$chx_parent_dossier;
                        $liste_des_dossiers[$k1]['che_contient_genere_dossier']=0;

                    }else{

                    }


                }

            }
        }while($trouve === true && --$nb_boucles > 0);
        /*
          on construit la liste des sources pour les insérer en bdd
        */
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $liste_des_dossiers , true ) . '</pre>' ; exit(0);*/
        $liste_des_sources=array();
        $liste_des_dossiers_par_chemin=array();
        foreach($liste_des_dossiers as $k1 => $v1){
            $liste_des_dossiers_par_chemin[$k1]=array( 'chi_id_dossier' => $v1['chi_id_dossier'], 'che_contient_genere_dossier' => $v1['che_contient_genere_dossier']??0);
        }
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $liste_des_dossiers_par_chemin , true ) . '</pre>' ; exit(0);
        */
        $obj=$this->construit_liste_des_sources($liste_des_sources,$liste_des_dossiers_par_chemin,$chemin_racine2,$liste_des_sources_binaires);
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $liste_des_sources , true ) . '</pre>' ; exit(0);
        */
        /*#
          on a construit la liste des sources, on peut les insérer en base
          array (
            0 => 
            array (
              'chp_nom_source' => '.htaccess',
              'chx_dossier_id_source' => 1,
            ),
            1 => 
            array (
              'chp_nom_source' => '.htaccess',
              'chx_dossier_id_source' => 7,
            ),
          )         
        */
        $tableau_des_inserts=array();
        foreach($liste_des_sources as $k1 => $v1){
            $tableau_des_inserts[]=array(/**/
                'chx_dossier_id_source' => $v1['chx_dossier_id_source'] === '' ? null : $v1['chx_dossier_id_source'],
                'chp_nom_source' => $v1['chp_nom_source'],
                'che_binaire_source' => $v1['che_binaire_source']
            );
        }
        /* commit */
        $tt1=/*sql_inclure_deb*/
            /* sql_380()
            COMMIT;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_380()*/ 380,
            array(),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur lors du commit  [' . __LINE__ . ']';
            return;

        }

        $_SESSION[_CA_]['chi_id_projet']=0;
        $donnees_retournees[__xva]['chi_id_projet']=$_SESSION[_CA_]['chi_id_projet']??0;
        /*
          maj des genres et des sql
        */
        $donnees_retournees[__xva]['__liste_des_genres']=array();
        /* $donnees_retournees[__xac].='m1(n1(_fonctions1),f1(maj_liste_des_genres()))';*/
        $donnees_retournees[__xva]['__liste_des_sql']=array();
        /* $donnees_retournees[__xac].='m1(n1(_fonctions1),f1(maj_liste_des_sql()))';*/
        /*
          include(__RACINE_PGMS__ . '____menus0_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php');
          $donnees_retournees[__xva]['$les_menu0']=$les_menu0;
        */
        /**/
        include(__CHEMIN_ABSOLU_PROJET__ . '____menus1_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php');
        $donnees_retournees[__xva]['$les_menu1']=$les_menu1;
        $donnees_retournees[__xst]=__xsu;
        return;
    }
    /*
      =============================================================================================================
      copie récursive des fichiers et dossiers de revxxx_1 dans revxxx_2
    */
    function rcopydir($dir1,$dir2){
        
        if(!is_dir($dir2)){

            
            if(mkdir($dir2,0777)){


            }else{

                return array( __xst => __xer);
            }


        }

        $objects=scandir($dir1);
        foreach($objects as $object){
            
            if($object != '.' && $object != '..'){

                
                if(is_dir($dir1 . DIRECTORY_SEPARATOR . $object) && !is_link($dir1 . "/" . $object)){

                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $dir1. DIRECTORY_SEPARATOR .$object . '</pre><pre>' . $dir2. DIRECTORY_SEPARATOR .$object . '</pre>' ; exit(0);*/
                    $obj=$this->rcopydir($dir1 . DIRECTORY_SEPARATOR . $object,$dir2 . DIRECTORY_SEPARATOR . $object);
                    
                    if($obj[__xst] !== __xsu){

                        return array( __xst => __xer);

                    }


                }else{

                    /*
                      une exception pour le fichier rev_2/__serveur/__definitions.php
                    */
                    $fichier1=str_replace(__CHEMIN_ABSOLU_SITE__ . 'rev' . '_1','',$dir1 . DIRECTORY_SEPARATOR . $object);
                    /*
                      les exceptions
                      
                    */
                    /*
                      if($fichier1 === DIRECTORY_SEPARATOR . '__serveur' . DIRECTORY_SEPARATOR . '__definitions.php'
                      || $fichier1 === DIRECTORY_SEPARATOR . '__client' . DIRECTORY_SEPARATOR . 'index.php'
                      ){
                      
                      $contenu=@file_get_contents($dir1 . DIRECTORY_SEPARATOR . $object);
                      
                      if($contenu === false){
                      
                      return array( __xst => __xer);
                      
                      }
                      
                      $contenu=str_replace('define(\'_CA_\',\'rev' . '_1\');','define(\'_CA_\',\'rev_2\');',$contenu);
                      $contenu=str_replace('rev' . '_1','rev' . '_2',$contenu);
                      
                      if(!(@file_put_contents($dir2 . DIRECTORY_SEPARATOR . $object,$contenu))){
                      
                      return array( __xst => __xer);
                      
                      }
                      
                      // echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' .  $dir1 . '</pre> <pre>' .  $fichier1 . '</pre>' ; exit(0);
                      
                      }else{
                    */
                    
                    if((@copy($dir1 . DIRECTORY_SEPARATOR . $object,$dir2 . DIRECTORY_SEPARATOR . $object))){


                    }else{

                        return array( __xst => __xer);
                    }

                    /* }*/
                }


            }

        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      suppression récursive des fichiers et dossiers
    */
    function rrmdir($dir,$est_racine=__xsu){
        
        if($est_racine === __xsu && !is_dir($dir)){

            /* si on est à la racine et que la racine n'existe pas, => rien à faire */
            return array( __xst => __xsu);

        }

        
        if(is_dir($dir)){

            $objects=scandir($dir);
            foreach($objects as $object){
                
                if($object != '.' && $object != '..'){

                    
                    if(is_dir($dir . DIRECTORY_SEPARATOR . $object) && !is_link($dir . "/" . $object)){

                        $obj=$this->rrmdir($dir . DIRECTORY_SEPARATOR . $object,__xer);
                        
                        if($obj[__xst] === __xsu){


                        }else{

                            return array( __xst => __xer);
                        }


                    }else{

                        
                        if((@unlink($dir . DIRECTORY_SEPARATOR . $object))){


                        }else{

                            return array( __xst => __xer);
                        }

                    }


                }

            }
            
            if((@rmdir($dir))){

                return array( __xst => __xsu);

            }else{

                return array( __xst => __xer);
            }


        }else{

            return array( __xst => __xer);
        }

    }
    /*
      =============================================================================================================
      on fabrique un clone du projet 1 sur le projet 2 
    */
    function initialiser_projet_2(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          on commence par supprimer tous les fichiers et dossiers sour frev/rev_2 puis on recrée
        */
        $chemin_racine2=__CHEMIN_ABSOLU_SITE__ . 'rev_2';
        $obj=$this->rrmdir($chemin_racine2);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='impossible de supprimer le répertoire racine [' . __LINE__ . ']';
            return;

        }

        
        if(!mkdir($chemin_racine2,0777)){

            $donnees_retournees[__xsi][__xer][]='impossible de créer le répertoire racine [' . __LINE__ . ']';
            return;

        }

        $chemin_racine1=__CHEMIN_ABSOLU_SITE__ . 'rev' . '_1';
        $obj=$this->rcopydir($chemin_racine1,$chemin_racine2);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='impossible de copier les fichiers [' . __LINE__ . ']';
            return;

        }

        $donnees_retournees[__xsi][__xsu][]='le projet 2 a été initialisé [' . __LINE__ . ']';
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function desactiver1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $_SESSION[_CA_]['chi_id_projet']=0;
        $donnees_retournees[__xva]['chi_id_projet']=$_SESSION[_CA_]['chi_id_projet']??0;
        /*
          maj des genres et des sql
        */
        $donnees_retournees[__xva]['__liste_des_genres']=array();
        $donnees_retournees[__xva]['__liste_des_sql']=array();
        /*
          maj des menus
        */
        /*
          $fichier0=$_SESSION[_CA_]['chemin_du_projet'] . '____menus0_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php';
          include($fichier0);
          $donnees_retournees[__xva]['$les_menu0']=$les_menu0;
        */
        $fichier1=__CHEMIN_ABSOLU_PROJET__ . '____menus1_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php';
        include($fichier1);
        $donnees_retournees[__xva]['$les_menu1']=$les_menu1;
        unset($_SESSION[_CA_]['chemin_du_projet']);
        unset($_SESSION[_CA_]['chemin_des_sql']);
        unset($_SESSION[_CA_]['chemin_des_bdds']);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
      construction du chemin avec des requêtes manuelles quand un projet est activé
    */
    function chemin_de_id_dossier($chi_id_dossier,$db){
        
        if($db === null){


        }

        $tt=/*sql_inclure_deb*/
            /* sql_166()
            SELECT 
            `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`chi_id_dossier`
             FROM tbl_dossiers T0
            WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(166,array( 'T0_chi_id_dossier' => $chi_id_dossier),$donnees_retournees,$db);
        
        if($tt[__xst] === __xsu){

            $chi_id_dossier=$tt[__xva][0][1];

        }else{

            return array( '__xst' => __xer, '__xme' => 'problème sur construire_chemin [' . __LINE__ . ']');
        }

        $chemin='';
        $continuer=100;
        do{
            $continuer--;
            
            if($tt[__xst] === __xsu){

                
                if($tt[__xva][0][1] === 1 && $tt[__xva][0][2] === 1){

                    $continuer=0;
                    break;

                }else{

                    $chemin=DIRECTORY_SEPARATOR . $tt[__xva][0][0] . $chemin;
                    $tt=/*sql_inclure_deb*/
                        /* sql_166()
                        SELECT 
                        `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`chi_id_dossier`
                         FROM tbl_dossiers T0
                        WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier)
                        ;
                        */
                        /*sql_inclure_fin*/
                        $this->sql0->sql_iii(166,array( 'T0_chi_id_dossier' => $chi_id_dossier),$donnees_retournees,$db);
                    $chi_id_dossier=$tt[__xva][0][1];
                }


            }else{

                return array( '__xst' => __xer, '__xme' => 'problème sur construire_chemin [' . __LINE__ . ']');
            }

        }while($continuer > 0);
        
        if(_CA_ === 'rev_2' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            /*
              quand on est sur l'env 2, le chemin absolu commence en rev_2;
            */
            $chemin=_CA_ . $chemin;

        }else{

            $chemin='rev_' . $_SESSION[_CA_]['chi_id_projet'] . $chemin;
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin , true ) . '</pre>' ; exit(0);*/
        $chemin_absolu=__CHEMIN_ABSOLU_SITE__ . $chemin . DIRECTORY_SEPARATOR;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_absolu , true ) . '</pre>' ; exit(0);*/
        return array( '__xst' => __xsu, '__xva' => array( 'chemin_absolu' => $chemin_absolu, 'chemin_relatif' => $chemin));
    }
    /*
      =============================================================================================================
    */
    function activer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_projet=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === '$chi_id_projet'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_projet=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' <br />$chi_id_projet = ' . $chi_id_projet . '' ; exit(0);*/
        $_SESSION[_CA_]['chi_id_projet']=0;
        
        if($chi_id_projet > 0){

            $GLOBALS[__BDD][$chi_id_projet]=array(
                'id' => $chi_id_projet,
                'nom_bdd' => 'bdd_' . $chi_id_projet . '.sqlite',
                PREFIXE_BDD => 'bdd_' . $chi_id_projet . '',
                'fournisseur' => 'sqlite',
                'initialisation_bdd' => array( 'PRAGMA encoding = "UTF-8";', 'PRAGMA journal_mode=WAL;', 'PRAGMA foreign_keys=ON;'),
                LIEN_BDD => null
            );
            $chemin_bdd=__RACINE_PGMS__ . '__bdd_sqlite/bdd_' . $chi_id_projet . '.sqlite';
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( is_file($chemin_bdd), true ) . '</pre>' ; exit(0);*/
            $db=new SQLite3($chemin_bdd);
            $GLOBALS[__BDD][$chi_id_projet][LIEN_BDD]=$db;
            $tt160=/*sql_inclure_deb*/
                /* sql_160()
                SELECT 
                `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`chx_dossier_bdds_projet`
                 FROM tbl_projets T0
                WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(160,array( 'T0_chi_id_projet' => $chi_id_projet),$donnees_retournees,$db);
            
            if($tt160[__xst] === __xsu && count($tt160[__xva]) === 1){

                /*
                  =====================================================================================
                  projet actif
                  =====================================================================================
                */
                $_SESSION[_CA_]['chi_id_projet']=$chi_id_projet;
                /*
                  =====================================================================================
                  dossier racine
                  =====================================================================================
                */
                $chemin_du_projet=$this->chemin_de_id_dossier(1,$db);
                
                if($chemin_du_projet[__xst] !== __xsu){

                    $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
                    return;

                }

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_projet , true ) . '</pre>' ; exit(0); */
                
                if(substr(_CA_,-7) === '_rev_2_'){

                    $_SESSION[_CA_]['chemin_du_projet']=str_replace('rev_1','rev_2',$chemin_du_projet[__xva]['chemin_absolu']);

                }else{

                    $_SESSION[_CA_]['chemin_du_projet']=$chemin_du_projet[__xva]['chemin_absolu'];
                }

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt160[__xva][0] , true ) . '</pre>' ; exit(0);*/
                /*
                  =====================================================================================
                  dossier des sql
                  =====================================================================================
                */
                $chemin_des_sql=$this->chemin_de_id_dossier($tt160[__xva][0][0],$db);
                
                if($chemin_des_sql[__xst] !== __xsu){

                    $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
                    return;

                }

                
                if(substr(_CA_,-7) === '_rev_2_'){

                    $_SESSION[_CA_]['chemin_des_sql']=str_replace('rev_1','rev_2',$chemin_des_sql[__xva]['chemin_absolu']);

                }else{

                    $_SESSION[_CA_]['chemin_des_sql']=$chemin_des_sql[__xva]['chemin_absolu'];
                }

                /*
                  =====================================================================================
                  dossier des bdds
                  =====================================================================================
                */
                $chemin_des_bdds=$this->chemin_de_id_dossier($tt160[__xva][0][2],$db);
                
                if($chemin_des_bdds[__xst] !== __xsu){

                    $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
                    return;

                }

                
                if(substr(_CA_,-7) === '_rev_2_'){

                    $_SESSION[_CA_]['chemin_des_bdds']=str_replace('rev_1','rev_2',$chemin_des_bdds[__xva]['chemin_absolu']);

                }else{

                    $_SESSION[_CA_]['chemin_des_bdds']=$chemin_des_bdds[__xva]['chemin_absolu'];
                }

                /*
                  
                  require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
                  $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
                  $chemin_projet=$obj_doss->construire_chemin(1);
                */
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_projet , true ) . '</pre>' ; exit(0);*/
                /* $_SESSION[_CA_]['__chemin_projet']=__CHEMIN_ABSOLU_SITE__ . 'rev_' . $_SESSION[_CA_]['chi_id_projet'] . DIRECTORY_SEPARATOR;*/
                $donnees_retournees[__xva]['chi_id_projet']=$_SESSION[_CA_]['chi_id_projet'];
                /*
                  maj des genres et des sql
                */
                $chemin_fichier__liste_des_genres=$_SESSION[_CA_]['chemin_des_sql'] . '__liste_des_genres.php';
                
                if(is_file($chemin_fichier__liste_des_genres)){

                    include($chemin_fichier__liste_des_genres);
                    $donnees_retournees[__xva]['__liste_des_genres']=$__liste_des_genres;

                }else{

                    $donnees_retournees[__xva]['__liste_des_genres']=array();
                }

                /* $donnees_retournees[__xac].='m1(n1(_fonctions1),f1(maj_liste_des_genres()))';*/
                $chemin_fichier__liste_des_sql=__CHEMIN_ABSOLU_SITE__ . 'rev_' . $_SESSION[_CA_]['chi_id_projet'] . '/__serveur/__sqls/__liste_des_sql.php';
                
                if(is_file($chemin_fichier__liste_des_sql)){

                    include($chemin_fichier__liste_des_sql);
                    $donnees_retournees[__xva]['__liste_des_sql']=$__liste_des_sql;

                }else{

                    $donnees_retournees[__xva]['__liste_des_sql']=array();
                }

                /* $donnees_retournees[__xac].='m1(n1(_fonctions1),f1(maj_liste_des_sql()))';*/
                $donnees_retournees[__xst]=__xsu;
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = $d <pre>' . $d . var_export( $tt160 , true ) . '</pre>' ; exit(0);*/

            }else{

                $donnees_retournees[__xva]['__liste_des_genres']=array();
                /* $donnees_retournees[__xac].='m1(n1(_fonctions1),f1(maj_liste_des_genres()))';*/
                $donnees_retournees[__xva]['__liste_des_sql']=array();
                /* $donnees_retournees[__xac].='m1(n1(_fonctions1),f1(maj_liste_des_sql()))';*/
            }


        }

        /*
          $fichier0=$_SESSION[_CA_]['chemin_du_projet'] . '____menus0_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php';
          include($fichier0);
          $donnees_retournees[__xva]['$les_menu0']=$les_menu0;
        */
        /**/
        include(__CHEMIN_ABSOLU_PROJET__ . '____menus1_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php');
        /*
          $fichier1=$_SESSION[_CA_]['chemin_du_projet'] . '____menus1_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php';
          include($fichier1);
        */
        $donnees_retournees[__xva]['$les_menu1']=$les_menu1;
        /**/
        /* $donnees_retournees[__xac].='m1(n1(__interface1),f1(maj_menu()))';*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = $d <pre>' . $d . var_export( $mat , true ) . '</pre>' ; exit(0);*/
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        
        if($xva_avant['T0.chi_id_projet'] > 2){

            /*
              puis si on est sur le projet n > 2, 
              il faut faut aller modifier le projet n dans la base bdd_1 
              en mettant les références de dossiers à 1 ( qui existe toujours ! )
              On aurait pu choisir null mais ...
              La requête 305 est manuelle
            */
            $chemin_bdd=__CHEMIN_ABSOLU_PROJET__ . '__serveur' . DIRECTORY_SEPARATOR . '__bdd_sqlite' . DIRECTORY_SEPARATOR . 'bdd_1.sqlite';
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_bdd , true ) . '</pre>' ; exit(0);*/
            $db_1=new SQLite3($chemin_bdd);
            $tt305=/*sql_inclure_deb*/
                /* sql_305()
                UPDATE tbl_projets SET 
                   `chp_nom_projet` = :n_chp_nom_projet , 
                   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
                   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet , 
                   `cht_commentaire_projet` = :n_cht_commentaire_projet
                WHERE `chi_id_projet` = :c_chi_id_projet ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /**/ 305,
                array(
                    /**/
                    'n_chp_nom_projet' => $form['chp_nom_projet'],
                    'n_chx_dossier_requetes_projet' => 1,
                    'n_chx_dossier_menus_projet' => 1,
                    'n_cht_commentaire_projet' => $form['cht_commentaire_projet'],
                    'c_chi_id_projet' => $form['chi_id_projet']
                ),
                $donnees_retournees,
                $db_1
            );

        }

        /*
          =====================================================================================================
          dossier racine, des sql, des bases
          =====================================================================================================
        */
        require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
        /**/
        $chemin_de_la_racine=$obj_doss->construire_chemin(1);
        
        if($chemin_de_la_racine[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $_SESSION[_CA_]['chemin_de_la_racine']=$chemin_de_la_racine[__xva]['chemin_absolu'];
        /**/
        $chemin_des_sql=$obj_doss->construire_chemin($form['chx_dossier_requetes_projet']);
        
        if($chemin_des_sql[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $_SESSION[_CA_]['chemin_des_sql']=$chemin_des_sql[__xva]['chemin_absolu'];
        /**/
        $chemin_des_bdds=$obj_doss->construire_chemin($form['chx_dossier_bdds_projet']);
        
        if($chemin_des_bdds[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $_SESSION[_CA_]['chemin_des_bdds']=$chemin_des_bdds[__xva]['chemin_absolu'];
        /**/
        $chemin_des_js=$obj_doss->construire_chemin($form['chx_dossier_js_projet']);
        
        if($chemin_des_js[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $_SESSION[_CA_]['chemin_des_js']=$chemin_des_js[__xva]['chemin_absolu'];
        $txt='';
        $txt .= '<?' . 'php' . PHP_EOL;
        $txt .= '$GLOBALS[\'chemin_de_la_racine\']=__CHEMIN_ABSOLU_SITE__.\'rev_' . $form['chi_id_projet'] . '\'.DIRECTORY_SEPARATOR;' . PHP_EOL;
        $tab_chemins=array( 'chemin_des_bdds', 'chemin_des_sql', 'chemin_des_js');
        foreach($tab_chemins as $k1 => $v1){
            $a01=str_replace(__CHEMIN_ABSOLU_SITE__,'',$_SESSION[_CA_][$v1]);
            $a01=str_replace('rev_' . $form['chi_id_projet'] . DIRECTORY_SEPARATOR,'',$a01);
            $a02=explode(DIRECTORY_SEPARATOR,$a01);
            $txt .= '$GLOBALS[\'' . $v1 . '\']=$GLOBALS[\'chemin_de_la_racine\']';
            foreach($a02 as $kch1 => $vch1){
                
                if($vch1 !== ''){

                    $txt .= ' . \'' . $vch1 . '\' . DIRECTORY_SEPARATOR';

                }

            }
            $txt .= ';' . PHP_EOL;
        }
        
        if($fd=fopen($_SESSION[_CA_]['chemin_de_la_racine'] . '___chemins.php','w')){

            
            if(fwrite($fd,$txt)){


            }else{

                fclose($fd);
                $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' ecriture des chemins impossible [' . __LINE__ . ']';
                return;
            }

            fclose($fd);

        }else{

            $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' ecriture des chemins impossible [' . __LINE__ . ']';
            return;
        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function action_apres_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nouvel_id){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $nouvel_id , true ) . '</pre>' ; exit(0);*/
        /*
          =====================================================================================================
          on peut créer la nouvelle base de description du projet
          =====================================================================================================
        */
        $chemin_base=__RACINE_PGMS__ . '__bdd_sqlite/bdd_' . $nouvel_id . '.sqlite';
        
        if(is_file($chemin_base)){

            /*
              pourquoi ce fichier existe ?
            */
            $donnees_retournees[__xsi][__xer][]='le fichier la base de donnée du projet existe déjà [' . __LINE__ . ']';
            return;

        }

        /*
          on crée un clone de la base système du projet 1 qui contiendra tout le projet nnn
          ce clone est sans les SANS le PRAGMA foreign_keys=ON; car on doit pouvoir
          insérer 
          le dossier racine qui pointe sur lui même
          le projet 
        */
        try{
            $db1temp=new SQLite3($chemin_base);
        }catch(Exception $e){
            $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
            return;
        }
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_base , true ) . '</pre>' ; exit(0);
        */
        /*
          on reprend la même structure que le projet 1
        */
        $chemim_structure=__RACINE_PGMS__ . '/__bdd_sqlite/bdd_1.sqlite._structure.sql';
        $source_sql=@file_get_contents($chemim_structure);
        
        if($source_sql !== false){

            try{
                $ret1=$db1temp->exec($source_sql);
            }catch(Exception $e){
                $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                return;
            }

        }else{

            $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
            return;
        }

        $chemim_index=__RACINE_PGMS__ . '__bdd_sqlite/bdd_1.sqlite._index.sql';
        $source_sql=@file_get_contents($chemim_index);
        
        if($source_sql !== false){

            try{
                $ret1=$db1temp->exec($source_sql);
            }catch(Exception $e){
                $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                return;
            }

        }else{

            $donnees_retournees[__xsi][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
            return;
        }

        /*
          =====================================================================================================
          copie de la table genre jusqu'à id=99
          =====================================================================================================
        */
        /*
          déclaration de bdd_1 comme la base de référence
        */
        $pragmas_dbs='attach database "' . __RACINE_PGMS__ . '__bdd_sqlite/' . 'bdd_1.sqlite" as `bdd_1`;';
        $ret=$db1temp->querySingle($pragmas_dbs);
        /*
          insertion effective des données
        */
        $source_sql='insert into tbl_genres select * from bdd_1.tbl_genres WHERE chi_id_genre <= 99';
        $ret1=$db1temp->exec($source_sql);
        $tt56=/*sql_inclure_deb*/
            /* sql_156()
            INSERT INTO `tbl_projets`(
                `chi_id_projet` , 
                `chp_nom_projet` , 
                `chx_dossier_requetes_projet` , 
                `chx_dossier_menus_projet`
            ) VALUES (
                :chi_id_projet , 
                :chi_id_projet , 
                1 , 
                1
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_156()*/ 156,
            array( 'chi_id_projet' => $nouvel_id),
            $donnees_retournees,
            $db1temp
        );
        /*
          on tente de créer le répertoire racine
        */
        $reprendre_les_fido=false;
        $une_erreur=false;
        $chemin=__CHEMIN_ABSOLU_SITE__ . 'rev_' . $nouvel_id;
        
        if(is_dir($chemin)){

            $donnees_retournees[__xsi][__xal][]='le dossier racine existe déjà, il faudra éventuellement reprendre ses fidos [' . __LINE__ . ']';
            $reprendre_les_fido=true;

        }else{

            
            if((@mkdir(__CHEMIN_ABSOLU_SITE__ . 'rev_' . $nouvel_id))){


            }else{

                $une_erreur=true;
            }

        }

        
        if($une_erreur === true){

            $donnees_retournees[__xsi][__xer][]='erreur lors de la création du dossier racine [' . __LINE__ . ']';
            return;

        }

        /*
          =====================================================================================================
          on insère le nouveau dossier racine en base
          =====================================================================================================
        */
        $donnees_sql=array(/**/
            'chi_id_dossier' => 1,
            'chp_nom_dossier' => null,
            'chx_parent_dossier' => 1
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt2=/*sql_inclure_deb*/
            /* sql_159()
            INSERT INTO `tbl_dossiers`(
                `chi_id_dossier` , 
                `chp_nom_dossier` , 
                `chx_parent_dossier`
            ) VALUES (
                :chi_id_dossier , 
                :chp_nom_dossier , 
                :chx_parent_dossier
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_159()*/ 159,
            $donnees_sql,
            $donnees_retournees,
            $db1temp
        );
        
        if($tt2[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]='Attention, Erreur lors de l\'insertion du dossier racine en base [' . __LINE__ . ']';
            $une_erreur=true;

        }else{

            $id_dossier_racine=1;
        }

        /* $donnees_retournees[__xsi][__xdv][]=var_export( $une_erreur , true) . '['.__LINE__.']'; */
        
        if($une_erreur === true){

            $donnees_retournees[__xsi][__xer][]=__LINE__ . ' erreur lors de la suppression';

        }

    }
    /*
      =============================================================================================================
    */
    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        $retour_a_la_liste=false;
        $l01=count($mat);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        
        if($form['chx_dossier_menus_projet'] === '' || is_null($form['chx_dossier_menus_projet'])){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' la référence du dossier des menus doit être donnée';
            return;

        }

        
        if($form['chx_dossier_requetes_projet'] === '' || is_null($form['chx_dossier_requetes_projet'])){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' la référence du dossier des requêtes doit être donnée';
            return;

        }

        
        if(is_null($form['chx_dossier_bdds_projet']) || $form['chx_dossier_bdds_projet'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "dossier des bases de données" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_dossier_js_projet']) || $form['chx_dossier_js_projet'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "dossier des javascript" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $tt375=/*sql_inclure_deb*/
            /* sql_375()
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
            `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , 
            `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , 
            `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , 
            `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
            `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chx_dossier_bdds_projet` , `T3`.`chp_nom_dossier` , 
            `T4`.`chp_nom_dossier` , `T0`.`chx_dossier_js_projet`
             FROM b1.tbl_projets T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
            
             LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet
            
             LEFT JOIN b1.tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet
            
             LEFT JOIN b1.tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet
            
            WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_375()*/ 375,
            array(/**/
                'T0_chi_id_projet' => $form['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt375[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt375[__xst] === __xsu){

            /*
              =============================================================================================
              tout d'abord, on modifie ce projet: si par exemple on est surle projet 3
              alors on va modifier les informations dans la base bdd_3.sqlite
              =============================================================================================
            */
            $tt384=/*sql_inclure_deb*/
                /* sql_384()
                UPDATE b1.tbl_projets SET 
                   `chp_nom_projet` = :n_chp_nom_projet , 
                   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
                   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet , 
                   `cht_commentaire_projet` = :n_cht_commentaire_projet , 
                   `chx_dossier_bdds_projet` = :n_chx_dossier_bdds_projet , 
                   `chx_dossier_js_projet` = :n_chx_dossier_js_projet
                WHERE `chi_id_projet` = :c_chi_id_projet ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_384()*/ 384,
                array(
                    /**/
                    'c_chi_id_projet' => $tt375[__xva][0]['T0.chi_id_projet'],
                    'n_chp_nom_projet' => $form['chp_nom_projet'],
                    'n_chx_dossier_requetes_projet' => $form['chx_dossier_requetes_projet'],
                    'n_chx_dossier_menus_projet' => $form['chx_dossier_menus_projet'],
                    'n_chx_dossier_bdds_projet' => $form['chx_dossier_bdds_projet'],
                    'n_chx_dossier_js_projet' => $form['chx_dossier_js_projet'],
                    'n_cht_commentaire_projet' => $form['cht_commentaire_projet']
                ),
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt384 , true ) . '</pre>' ; exit(0);*/
            
            if($tt384[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de la modification';
                return;

            }

            /*
              =============================================================================================
              puis on vas faie les traitements après
              =============================================================================================
            */
            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt375[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt375=/*sql_inclure_deb*/
                /* sql_375()
                SELECT 
                `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
                `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , 
                `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , 
                `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , 
                `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
                `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chx_dossier_bdds_projet` , `T3`.`chp_nom_dossier` , 
                `T4`.`chp_nom_dossier` , `T0`.`chx_dossier_js_projet`
                 FROM b1.tbl_projets T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
                
                 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet
                
                 LEFT JOIN b1.tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet
                
                 LEFT JOIN b1.tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet
                
                WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_375()*/ 375,
                array(/**/
                    'T0_chi_id_projet' => $form['chi_id_projet']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt375;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt375;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_projet=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_projet)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_projet'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_projet=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_projet , true ) . '</pre>' ; exit(0);*/
        $tt375=/*sql_inclure_deb*/
            /* sql_375()
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
            `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , 
            `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , 
            `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , 
            `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
            `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chx_dossier_bdds_projet` , `T3`.`chp_nom_dossier` , 
            `T4`.`chp_nom_dossier` , `T0`.`chx_dossier_js_projet`
             FROM b1.tbl_projets T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
            
             LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet
            
             LEFT JOIN b1.tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet
            
             LEFT JOIN b1.tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet
            
            WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_375()*/ 375,
            array(/**/
                'T0_chi_id_projet' => $chi_id_projet
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt375 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt375;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_projet('.$chi_id_projet.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_projet=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_projet)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_projet'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_projet=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_projet(' . $chi_id_projet . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_projet , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_projet , true ) . '</pre>' ; exit(0);*/
        $tt375=/*sql_inclure_deb*/
            /* sql_375()
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
            `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , 
            `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , 
            `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , 
            `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
            `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chx_dossier_bdds_projet` , `T3`.`chp_nom_dossier` , 
            `T4`.`chp_nom_dossier` , `T0`.`chx_dossier_js_projet`
             FROM b1.tbl_projets T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
            
             LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet
            
             LEFT JOIN b1.tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet
            
             LEFT JOIN b1.tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet
            
            WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_375()*/ 375,
            array(/**/
                'T0_chi_id_projet' => $chi_id_projet
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt375 , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt375 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt375;
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
        
        if($form['chi_id_projet'] === 1){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $tt375=/*sql_inclure_deb*/
            /* sql_375()
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
            `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , 
            `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , 
            `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , 
            `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
            `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chx_dossier_bdds_projet` , `T3`.`chp_nom_dossier` , 
            `T4`.`chp_nom_dossier` , `T0`.`chx_dossier_js_projet`
             FROM b1.tbl_projets T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
            
             LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet
            
             LEFT JOIN b1.tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet
            
             LEFT JOIN b1.tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet
            
            WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_375()*/ 375,
            array(/**/
                'T0_chi_id_projet' => $form['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($tt375[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';

        }

        $tt382=/*sql_inclure_deb*/
            /* sql_382()
            / ***meta(sur_base_principale(1))*** /
            
            DELETE FROM b1.tbl_projets
            WHERE (`chi_id_projet` = :chi_id_projet) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_382()*/ 382,
            array(/**/
                'chi_id_projet' => $tt375[__xva][0]['T0.chi_id_projet']
            ),
            $donnees_retournees
        );
        
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
        $chi_id_projet=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_projet'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_projet=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_projet , true ) . '</pre>' ; exit(0);*/
        $tt375=/*sql_inclure_deb*/
            /* sql_375()
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
            `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , 
            `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , 
            `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , 
            `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
            `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chx_dossier_bdds_projet` , `T3`.`chp_nom_dossier` , 
            `T4`.`chp_nom_dossier` , `T0`.`chx_dossier_js_projet`
             FROM b1.tbl_projets T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
            
             LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet
            
             LEFT JOIN b1.tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet
            
             LEFT JOIN b1.tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet
            
            WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_375()*/ 375,
            array(/**/
                'T0_chi_id_projet' => $chi_id_projet
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt375 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt375;
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
        
        if(is_null($form['chp_nom_projet']) || $form['chp_nom_projet'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(/**/
                    'chp_nom_projet' => $form['chp_nom_projet'],
                    'cht_commentaire_projet' => $form['cht_commentaire_projet']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt377=/*sql_inclure_deb*/
            /* sql_377()
            / ***meta(sur_base_principale(1))*** /
            
            INSERT INTO b1.`tbl_projets`(
                `chp_nom_projet` , 
                `cht_commentaire_projet` , 
                `chx_dossier_requetes_projet` , 
                `chx_dossier_menus_projet` , 
                `chx_dossier_bdds_projet`
            ) VALUES (
                :chp_nom_projet , 
                :cht_commentaire_projet , 
                1 , 
                1 , 
                1
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_377()*/ 377,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt377[__xst] === __xsu && $tt377['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt377['nouvel_id']);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt377['nouvel_id']);
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
        $criteres374=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres374[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres374 , true ) . '</pre>' ; exit(0);*/
        $tt374=/*sql_inclure_deb*/
            /* sql_374()
            / ***meta(sur_base_principale(1))*** /
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , 
            `T0`.`cht_commentaire_projet`
             FROM b1.tbl_projets T0
            WHERE ( / *** *** / `T0`.`chi_id_projet` = :T0_chi_id_projet
               AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
               AND `T0`.`cht_commentaire_projet` LIKE :T0_cht_commentaire_projet) 
            ORDER BY `T0`.`chi_id_projet` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_374()*/ 374,
            $criteres374,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt374[__xst]===__xsu && count($tt374[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt374[__xst] === __xsu && count($tt374[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres374['debut']=$__debut;
            $tt374=/*sql_inclure_deb*/
                /* sql_374()
                / ***meta(sur_base_principale(1))*** /
                SELECT 
                `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , 
                `T0`.`cht_commentaire_projet`
                 FROM b1.tbl_projets T0
                WHERE ( / *** *** / `T0`.`chi_id_projet` = :T0_chi_id_projet
                   AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
                   AND `T0`.`cht_commentaire_projet` LIKE :T0_cht_commentaire_projet) 
                ORDER BY `T0`.`chi_id_projet` ASC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_374()*/ 374,
                $criteres374,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt374 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt374 = <pre>' . var_export( $tt374 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt374;
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