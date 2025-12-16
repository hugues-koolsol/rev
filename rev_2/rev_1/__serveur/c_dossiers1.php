<?php
class c_dossiers1{
    private $sql0=null;
    private $moi='c_dossiers1';
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
    function supprimer_un_dossier_du_disque(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          $donnees_retournees[__xsi][__xdv][]='$mat =<pre>'.var_export( $mat , true ).'</pre> [' . __LINE__ . ']';
        */
        $chi_id_dossier=0;
        $chp_nom_dossier='';
        /* $chp_nom_source*/
        $che_binaire_source=0;
        $provenance='';
        $liste1=0;
        $l01=count($mat);
        /* $donnees_retournees[__xsi][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][2] === 'f' && $mat[$i][8] === 0 && $mat[$i][1] === '$che_binaire_source'){

                $che_binaire_source=(int)($mat[$i + 1][1]);

            }else if($mat[$i][1] === '$provenance' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $provenance=$mat[$i + 1][1];

            }else if($mat[$i][1] === '$liste1' && $mat[$i][2] === 'f'){

                $liste1=$i;

            }else if($mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                
                if($mat[$i][1] === '$chi_id_dossier'){

                    $chi_id_dossier=(int)($mat[$i + 1][1]);

                }else if($mat[$i][1] === '$chp_nom_dossier'){

                    $chp_nom_dossier=$mat[$i + 1][1];
                }

            }

        }
        
        if($chi_id_dossier > 0 && $chp_nom_dossier !== ''){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $chemin_dossier=$obj['__xva']['chemin_absolu'] . $chp_nom_dossier;
            
            if((@rmdir($chemin_dossier))){

                $donnees_retournees[__xsi][__xsu][]='le dossier a été supprimé du disque [' . __LINE__ . ']';
                $this->liste_des_fidos($chi_id_dossier,$obj['__xva']['chemin_absolu'],$donnees_retournees);
                
                if($provenance === 'racine' && $liste1 > 0){

                    $d=$liste1;
                    $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
                    return;

                }

                return array( __xst => __xsu);

            }


        }

    }
    /*
      =============================================================================================================
    */
    function creer_le_dossier_sur_disque(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_dossier=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_dossier' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_dossier=(int)($mat[$i + 1][1]);

            }

        }
        
        if($chi_id_dossier > 0){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            
            if(is_dir($obj['__xva']['chemin_absolu'])){

                $donnees_retournees[__xst]=__xsu;
                $donnees_retournees[__xsi][__xal][]='Le dossier existe déjà sur disque [' . __LINE__ . ']';

            }else{

                
                if((@mkdir($obj['__xva']['chemin_absolu'],0777,true))){

                    $donnees_retournees[__xsi][__xsu][]='le dossier a été créé du disque';
                    $donnees_retournees[__xst]=__xsu;

                }else{

                    $donnees_retournees[__xsi][__xer][]='Erreur lors de la création du dossier [' . __LINE__ . ']';
                }

            }

            $chemin_racine=__CHEMIN_ABSOLU_SITE__ . 'rev_' . $_SESSION[_CA_]['chi_id_projet'];
            $this->liste_des_fidos(1,$chemin_racine,$donnees_retournees);

        }

    }
    /*
      =============================================================================================================
    */
    function supprimer_un_fichier_du_disque(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          $donnees_retournees[__xsi][__xdv][]='$mat =<pre>'.var_export( $mat , true ).'</pre> [' . __LINE__ . ']';
        */
        $chi_id_dossier=0;
        $chp_nom_source='';
        $che_binaire_source=0;
        $provenance='';
        $liste1=0;
        $l01=count($mat);
        /* $donnees_retournees[__xsi][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][2] === 'f' && $mat[$i][8] === 0 && $mat[$i][1] === '$che_binaire_source'){

                $che_binaire_source=(int)($mat[$i + 1][1]);

            }else if($mat[$i][1] === '$provenance' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $provenance=$mat[$i + 1][1];

            }else if($mat[$i][1] === '$liste1' && $mat[$i][2] === 'f'){

                $liste1=$i;

            }else if($mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                
                if($mat[$i][1] === '$chi_id_dossier'){

                    $chi_id_dossier=(int)($mat[$i + 1][1]);

                }else if($mat[$i][1] === '$chp_nom_source'){

                    $chp_nom_source=$mat[$i + 1][1];
                }

            }

        }
        
        if($chi_id_dossier > 0 && $chp_nom_source !== ''){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $chemin_fichier=$obj['__xva']['chemin_absolu'] . $chp_nom_source;
            sauvegarder_et_supprimer_fichier($chemin_fichier);
            $donnees_retournees[__xsi][__xsu][]='le fichier "' . $chp_nom_source . '" a été supprimé du disque et backupé  [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            $this->liste_des_fidos($chi_id_dossier,$obj['__xva']['chemin_absolu'],$donnees_retournees);
            
            if($provenance === 'racine' && $liste1 > 0){

                $d=$liste1;
                $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
                return;

            }


        }

    }
    /*
      =============================================================================================================
    */
    function integrer_ce_fichier_dans_les_sources(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          $donnees_retournees[__xsi][__xdv][]='$mat =<pre>'.var_export( $mat , true ).'</pre> [' . __LINE__ . ']';
        */
        $chi_id_dossier=0;
        $chp_nom_source='';
        $che_binaire_source=0;
        $provenance='';
        $liste1=0;
        $l01=count($mat);
        /* $donnees_retournees[__xsi][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][2] === 'f' && $mat[$i][8] === 0 && $mat[$i][1] === '$che_binaire_source'){

                $che_binaire_source=(int)($mat[$i + 1][1]);

            }else if($mat[$i][1] === '$provenance' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $provenance=$mat[$i + 1][1];

            }else if($mat[$i][1] === '$liste1' && $mat[$i][2] === 'f'){

                $liste1=$i;

            }else if($mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                
                if($mat[$i][1] === '$chi_id_dossier'){

                    $chi_id_dossier=(int)($mat[$i + 1][1]);

                }else if($mat[$i][1] === '$chp_nom_source'){

                    $chp_nom_source=$mat[$i + 1][1];
                }

            }

        }
        
        if($chi_id_dossier > 0 && $chp_nom_source !== ''){

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
                return;

            }

            $chemin_fichier=$dossier_absolu=$obj['__xva']['chemin_absolu'] . DIRECTORY_SEPARATOR . $chp_nom_source;
            
            if($che_binaire_source === 1 || $_SESSION[_CA_]['chi_id_projet'] === 1){

                $contenu_fichier='';

            }else{

                $contenu_fichier=file_get_contents($chemin_fichier);
            }

            $donnees_sql=array( array(
                        /**/
                        'chp_nom_source' => $chp_nom_source,
                        'chx_dossier_id_source' => $chi_id_dossier,
                        'cht_commentaire_source' => null,
                        'cht_rev_source' => null,
                        'cht_genere_source' => $contenu_fichier,
                        'che_binaire_source' => $che_binaire_source,
                        'che_autorisation_globale_source' => 0
                    ));
            /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
            $tt117=/*sql_inclure_deb*/
                /* sql_117()
                INSERT INTO b1.`tbl_sources`(
                    `chx_dossier_id_source` , 
                    `chp_nom_source` , 
                    `cht_commentaire_source` , 
                    `cht_rev_source` , 
                    `cht_genere_source` , 
                    `che_binaire_source`
                ) VALUES (
                    :chx_dossier_id_source , 
                    :chp_nom_source , 
                    :cht_commentaire_source , 
                    :cht_rev_source , 
                    :cht_genere_source , 
                    :che_binaire_source
                );
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_117()*/ 117,
                $donnees_sql,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt117 , true ) . '</pre>' ; exit(0);*/
            
            if($tt117[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='le fichier n\'a pas pu être intégré [' . __LINE__ . ']';
                return;

            }

            $obj=$this->construire_chemin($chi_id_dossier);
            
            if($obj['__xst'] === __xsu){

                $chemin_absolu=$obj['__xva']['chemin_absolu'];

            }else{

                $donnees_retournees[__xsi][__xer][]=$obj['__xme'];
                return;
            }

            $this->liste_des_fidos($chi_id_dossier,$chemin_absolu,$donnees_retournees);
            
            if($provenance === 'racine' && $liste1 > 0){

                $d=$liste1;
                $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
                return;

            }

            $donnees_retournees[__xst]=__xsu;

        }else{

            $donnees_retournees[__xsi][__xer][]='il y a eu un problème [' . __LINE__ . ']';
        }

    }
    /*
      =============================================================================================================
    */
    function integrer_ce_dossier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' ' . $d .' __LINE__ = <pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
        $chx_parent_dossier=-1;
        $chp_nom_dossier='';
        $provenance='';
        $liste1=0;
        $che_contient_genere_dossier=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === '$chx_parent_dossier' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chx_parent_dossier=(int)($mat[$i + 1][1]);

            }else if($mat[$i][1] === '$chp_nom_dossier' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chp_nom_dossier=$mat[$i + 1][1];

            }else if($mat[$i][1] === '$provenance' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $provenance=$mat[$i + 1][1];

            }else if($mat[$i][1] === '$che_contient_genere_dossier' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $che_contient_genere_dossier=$mat[$i + 1][1];

            }else if($mat[$i][1] === '$liste1' && $mat[$i][2] === 'f'){

                $liste1=$i;
            }

        }
        
        if($chp_nom_dossier !== '' && $chx_parent_dossier > 0){

            /* echo __FILE__ . ' ' . __LINE__ . ' $chx_parent_dossier = <pre>' . var_export( $chx_parent_dossier , true ) . '</pre>' ; exit(0); */
            $donnees_sql=array( array(/**/
                        'chp_nom_dossier' => $chp_nom_dossier,
                        'chx_parent_dossier' => $chx_parent_dossier,
                        'che_contient_genere_dossier' => $che_contient_genere_dossier
                    ));
            /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
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
                $this->sql0->sql_iii(
                 /*sql_378()*/ 378,
                $donnees_sql,
                $donnees_retournees
            );
            $obj=$this->construire_chemin($chx_parent_dossier);
            
            if($obj['__xst'] === __xsu){

                $chemin_absolu=$obj['__xva']['chemin_absolu'];
                $chemin_relatif=$obj['__xva']['chemin_relatif'];

            }else{

                $donnees_retournees[__xsi][__xer][]=$obj['__xme'];
                return;
            }

            $this->liste_des_fidos($chx_parent_dossier,$chemin_absolu,$donnees_retournees);
            
            if($provenance === 'racine' && $liste1 > 0){

                $d=$liste1;
                $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
                return;

            }

            $donnees_retournees[__xst]=__xsu;

        }

    }
    /*
      =============================================================================================================
    */
    function liste_des_fidos($chi_id_dossier,$chemin_absolu,&$donnees_retournees){
        $obj=$this->construire_chemin($chi_id_dossier);
        /*
          if($obj['__xst'] === __xsu){
          
          $chemin_absolu=$obj['__xva']['chemin_absolu'];
          $chemin_relatif=$obj['__xva']['chemin_relatif'];
          
          }else{
          
          $donnees_retournees[__xsi][__xer][]=$obj['__xme'];
          return;
          }
        */
        $liste_des_fido=array();
        
        if(is_dir($chemin_absolu)){

            $tt=scandir($chemin_absolu);
            /* $donnees_retournees[__xsi][__xdv][]='<pre>'.var_export( $tt , true) .'</pre> [' . __LINE__ . ']';*/
            foreach($tt as $k1 => $v1){
                
                if($v1 === '.' || $v1 === '..'){


                }else{

                    
                    if(is_dir($chemin_absolu . DIRECTORY_SEPARATOR . $v1)){

                        $liste_des_fido[]=array( 'type_element' => 'd', 'nom' => $v1, 'present_en_base' => __xer);

                    }else{

                        $liste_des_fido[]=array( 'type_element' => 'f', 'nom' => $v1, 'present_en_base' => __xer);
                    }

                }

            }

        }

        /*
          sources présents en base
        */
        $tt341=/*sql_inclure_deb*/
            /* sql_341()
            SELECT 
            `T0`.`chp_nom_source`
             FROM b1.tbl_sources T0
            WHERE `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_341()*/ 341,
            array(/**/
                'T0_chx_dossier_id_source' => $chi_id_dossier
            ),
            $donnees_retournees
        );
        
        if($tt341[__xst] === __xsu){

            foreach($liste_des_fido as $k1 => $v1){
                
                if($v1['type_element'] === 'f'){

                    foreach($tt341[__xva] as $k2 => $v2){
                        
                        if($v2['T0.chp_nom_source'] === $v1['nom']){

                            $liste_des_fido[$k1]['present_en_base']=__xsu;
                            break;

                        }

                    }

                }

            }
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt341[__xva] , true ) . '</pre>' ; exit(0);*/

        }

        /*
          dossiers présents en base
        */
        $tt169=/*sql_inclure_deb*/
            /* sql_169()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
             FROM b1.tbl_dossiers T0
            WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_169()*/ 169,
            array(/**/
                'T0_chx_parent_dossier' => $chi_id_dossier
            ),
            $donnees_retournees
        );
        
        if($tt169[__xst] === __xsu){

            foreach($liste_des_fido as $k1 => $v1){
                
                if($v1['type_element'] === 'd'){

                    foreach($tt169[__xva] as $k2 => $v2){
                        
                        if($v2['T0.chp_nom_dossier'] === $v1['nom']){

                            $liste_des_fido[$k1]['present_en_base']=__xsu;
                            break;

                        }

                    }

                }

            }
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt341[__xva] , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $liste_des_fido = <pre>' . var_export( $liste_des_fido , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['$liste_des_fido']=$liste_des_fido;
        $donnees_retournees[__xva]['$chi_id_dossier']=$chi_id_dossier;
    }
    /*
      =============================================================================================================
      https://www.php.net/manual/fr/function.copy.php removes files and non-empty directories
    */
    function rrmdir($dir){
        
        if(is_dir($dir)){

            $files=scandir($dir);
            foreach($files as $file){
                
                if($file != "." && $file != ".."){

                    $this->rrmdir("$dir/$file");

                }

            }
            rmdir($dir);

        }else if(file_exists($dir)){

            unlink($dir);
        }

    }
    /*
      =============================================================================================================
      https://www.php.net/manual/fr/function.copy.php copies files and non-empty directories
    */
    function rcopy($src,$dst){
        
        if(file_exists($dst)){

            $this->rrmdir($dst);

        }

        
        if(is_dir($src)){

            mkdir($dst);
            $files=scandir($src);
            foreach($files as $file){
                
                if($file != "." && $file != ".."){

                    $this->rcopy("$src/$file","$dst/$file");

                }

            }

        }else if(file_exists($src)){

            copy($src,$dst);
        }

    }
    /*
      =============================================================================================================
    */
    function tester_arbre_dossier($nom_de_dossier,$chx_parent_dossier,$id_actuel=null){
        /*
          on ne peut pas placer un dossier 
          dans lui même 
          ou dans une sous branche de lui même
        */
        
        if($nom_de_dossier == ''){

            return array( __xst => __xer, __xme => 'le nom de dossier ne doit pas être vide');

        }

        for( $i=0 ; $i < strlen($nom_de_dossier) ; $i++ ){
            
            $c=substr($nom_de_dossier,$i,1);
            
            if($c >= 'a' && $c <= 'z' || $c === '_' || $c >= '0' && $c <= '9'){


            }else{

                return array( __xst => __xer, __xme => 'le nom de dossier doit comporter que les caractères minuscules entre a et z ou bien le caractère souligné "_" ');
            }

        }
        
        if($chx_parent_dossier === null
           || $chx_parent_dossier === 0
           || $chx_parent_dossier === ''
           || !is_numeric($chx_parent_dossier)
        ){

            return array( __xst => __xer, __xme => 'un dossier parent doit être indiqué [' . __LINE__ . ']');

        }

        
        if($id_actuel === $chx_parent_dossier){

            return array( __xst => __xer, __xme => 'un dossier ne peut être déplacé dans lui même [' . __LINE__ . ']');

        }

        /*#
          en modification
          4 a
           5 b 
            6 c
             7 d
          b(5=$id_actuel) ne peut être mis sous c(6=$chx_parent_dossier) ou  sous d(7=$chx_parent_dossier)
        */
        
        if($id_actuel !== null){

            /* 2*/
            $id_actuel=(int)($id_actuel);
            /*
              il faut vérifier que $chx_parent_dossier n'est pas sous $id_actuel 
              => on remonte les parents de chx_parent_dossier et si on trouve $id_actuel ==> bug
              on s'arrête quand chx_parent_dossier = null
            */
            $tt=/*sql_inclure_deb*/
                /* sql_386()
                SELECT 
                `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
                `T0`.`che_pour_les_js_dossier`
                 FROM b1.tbl_dossiers T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                
                WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_386()*/ 386,
                array(/**/
                    'T0_chi_id_dossier' => $chx_parent_dossier
                ),
                $donnees_retournees
            );
            $continuer=100;
            do{
                $continuer--;
                
                if($tt[__xst] === __xsu){

                    
                    if($tt[__xva][0]['T0.chx_parent_dossier'] === $id_actuel){

                        $continuer=0;
                        return array( __xst => __xer, __xme => 'un dossier ne peut être déplacé sous un de ses enfants [' . __LINE__ . ']');

                    }else{

                        
                        if($tt[__xva][0]['T0.chx_parent_dossier'] === null){

                            $continuer=0;
                            break;

                        }else{

                            $tt=/*sql_inclure_deb*/
                                /* sql_386()
                                SELECT 
                                `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
                                `T0`.`che_pour_les_js_dossier`
                                 FROM b1.tbl_dossiers T0
                                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                                
                                WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                                ;
                                */
                                /*sql_inclure_fin*/
                                $this->sql0->sql_iii(386,array( 'T0_chi_id_dossier' => $tt[__xva][0]['T0.chx_parent_dossier']),$donnees_retournees);
                        }

                    }


                }else{

                    return array( __xst => __xer, __xme => 'problème sur les dossiers parents [' . __LINE__ . ']');
                }

            }while($continuer > 0);

        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function test_dossier_vide($chemin){
        
        if(!is_dir($chemin)){

            return array( '__xst' => __xsu, '__xva' => array( 'chemin' => $chemin, 'existe' => __xer));

        }

        $tt=scandir($chemin);
        return array( '__xst' => count($tt) === 2 ? __xsu : __xer, '__xva' => array( 'chemin' => $chemin, 'existe' => __xsu));
    }
    /*
      =============================================================================================================
    */
    function construire_chemin($chi_id_dossier){
        $tt=/*sql_inclure_deb*/
            /* sql_386()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_pour_les_js_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_386()*/ 386,
            array( 'T0_chi_id_dossier' => $chi_id_dossier),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){


        }else{

            return array( '__xst' => __xer, '__xme' => 'problème sur construire_chemin [' . __LINE__ . ']');
        }

        $chemin='';
        $continuer=100;
        do{
            $continuer--;
            
            if($tt[__xst] === __xsu){

                
                if($tt[__xva][0]['T0.chx_parent_dossier'] === 1 && $tt[__xva][0]['T0.chi_id_dossier'] === 1){

                    $continuer=0;
                    break;

                }else{

                    $chemin=DIRECTORY_SEPARATOR . $tt[__xva][0]['T0.chp_nom_dossier'] . $chemin;
                    $tt=/*sql_inclure_deb*/
                        /* sql_386()
                        SELECT 
                        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
                        `T0`.`che_pour_les_js_dossier`
                         FROM b1.tbl_dossiers T0
                         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                        
                        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                        ;
                        */
                        /*sql_inclure_fin*/
                        $this->sql0->sql_iii(386,array( 'T0_chi_id_dossier' => $tt[__xva][0]['T0.chx_parent_dossier']),$donnees_retournees);
                }


            }else{

                return array( '__xst' => __xer, '__xme' => 'problème sur construire_chemin [' . __LINE__ . ']');
            }

        }while($continuer > 0);
        
        if(strpos(_CA_,'rev_2_') !== false && $_SESSION[_CA_]['chi_id_projet'] === 1){

            /*
              quand on est sur l'env 2, le chemin absolu commence en rev_2;
            */
            $chemin='rev_2' . $chemin;

        }else{

            $chemin='rev_' . $_SESSION[_CA_]['chi_id_projet'] . $chemin;
        }

        $chemin_absolu=__CHEMIN_ABSOLU_SITE__ . $chemin;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_absolu , true ) . '</pre>' ; exit(0);*/
        return array( '__xst' => __xsu, '__xva' => array( 'chemin_absolu' => $chemin_absolu . DIRECTORY_SEPARATOR, 'chemin_relatif' => $chemin . DIRECTORY_SEPARATOR));
    }
    /*
      =============================================================================================================
    */
    function actions_et_tests_avant_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$form,$__xva){
        /*
          dans le cas où pour_les_js = 1, il faut vérifier que :
          1°] il est au bon format [ __j_AAAAMMJJ_HHMMSS_ ]
          2°] qu'il est unique dans la base
        */
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        
        if($form['che_pour_les_js_dossier'] === 1){

            /*
              __j_AAAAMMJJ_595959_
              tests sur le format du nom
            */
            
            if(substr($form['chp_nom_dossier'],0,4) !== '__j_'){

                $donnees_retournees[__xsi][__xer][]='le nom du dossier contenant les js doit être au format "__j_AAAAMMJJ_HHMMSS_" [' . __LINE__ . ']';
                return array( __xst => __xer);

            }

            
            if(is_numeric(substr($form['chp_nom_dossier'],4,8)) === false){

                $donnees_retournees[__xsi][__xer][]='le nom du dossier contenant les js doit être au format "__j_AAAAMMJJ_HHMMSS_" [' . __LINE__ . ']';
                return array( __xst => __xer);

            }

            
            if(substr($form['chp_nom_dossier'],12,1) !== '_'){

                $donnees_retournees[__xsi][__xer][]='le nom du dossier contenant les js doit être au format "__j_AAAAMMJJ_HHMMSS_" [' . __LINE__ . ']';
                return array( __xst => __xer);

            }

            
            if(is_numeric(substr($form['chp_nom_dossier'],13,6)) === false){

                $donnees_retournees[__xsi][__xer][]='le nom du dossier contenant les js doit être au format "__j_AAAAMMJJ_HHMMSS_" [' . __LINE__ . ']';
                return array( __xst => __xer);

            }

            
            if(substr($form['chp_nom_dossier'],19,1) !== '_'){

                $donnees_retournees[__xsi][__xer][]='le nom du dossier contenant les js doit être au format "__j_AAAAMMJJ_HHMMSS_" [' . __LINE__ . ']';
                return array( __xst => __xer);

            }

            /*
              test sur l'unicité
            */
            $tt346=/*sql_inclure_deb*/
                /* sql_346()
                SELECT 
                `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
                 FROM b1.tbl_dossiers T0
                WHERE `T0`.`che_pour_les_js_dossier` = :T0_che_pour_les_js_dossier
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(346,array( 'T0_che_pour_les_js_dossier' => 1),$donnees_retournees);
            
            if($tt346[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
                return;

            }

            
            if(!(count($tt346[__xva]) === 1
                       && $tt346[__xva][0]['T0.chi_id_dossier'] === $form['chi_id_dossier']
                   || count($tt346[__xva]) === 0)
            ){

                $donnees_retournees[__xsi][__xer][]='un dossier pour les js existe déjà  [' . __LINE__ . ']';
                return array( __xst => __xer);

            }


        }

        $obj=$this->tester_arbre_dossier($form['chp_nom_dossier'],$form['chx_parent_dossier'],$form['chi_id_dossier']);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=$obj[__xme];
            return array( __xst => __xer);

        }

        /* $donnees_retournees[__xsi][__xer][]='<pre>'.var_export($tt386,true).'</pre> [' . __LINE__ . ']';        return; */
        $obj_construire_chemin_ancien=$this->construire_chemin($__xva['T0.chx_parent_dossier']);
        
        if($obj_construire_chemin_ancien['__xst'] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='le chemin absolu ancien n\'a pas pu être récupéré [' . __LINE__ . ']';
            return array( __xst => __xer);

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $obj_construire_chemin_ancien , true ) . '</pre>' ; exit(0);*/
        $chemin_absolu_ancien_nom=$obj_construire_chemin_ancien['__xva']['chemin_absolu'] . $__xva['T0.chp_nom_dossier'];
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_absolu_ancien_nom , true ) . '</pre>' ; exit(0);*/
        $obj_construire_chemin_nouveau=$this->construire_chemin($form['chx_parent_dossier']);
        
        if($obj_construire_chemin_nouveau['__xst'] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
            return array( __xst => __xer);

        }

        $chemin_absolu_nouveau_nom=$obj_construire_chemin_nouveau['__xva']['chemin_absolu'] . $form['chp_nom_dossier'];
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_absolu_nouveau_nom , true ) . '</pre>' ; exit(0);*/
        
        if($chemin_absolu_nouveau_nom !== $chemin_absolu_ancien_nom){

            
            if(is_dir($chemin_absolu_nouveau_nom)){

                $donnees_retournees[__xsi][__xer][]='Il existe déjà sur le disque un dossier portant ce nom [' . __LINE__ . ']';
                return array( __xst => __xer);

            }


        }

        
        if($chemin_absolu_ancien_nom !== $chemin_absolu_nouveau_nom){

            /* Si on a renommé le dossier*/
            
            if(is_dir($chemin_absolu_ancien_nom)){

                $this->rcopy($chemin_absolu_ancien_nom,$chemin_absolu_nouveau_nom);
                $this->rrmdir($chemin_absolu_ancien_nom);

            }


        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='<pre>'.var_export( $xva_avant , true ) .'</pre> [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        
        if($form['che_pour_les_js_dossier'] === 1){

            /* si son nom a changé*/
            /* il faut modifier les sources qui ont en référence le numéro de version*/
            
            if($form['chp_nom_dossier'] !== $xva_avant['T0.chp_nom_dossier']){

                $tt347=/*sql_inclure_deb*/
                    /* sql_347()
                    SELECT 
                    `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_contient_version_source` , `T0`.`chx_dossier_id_source`
                     FROM b1.tbl_sources T0
                    WHERE `T0`.`che_contient_version_source` = :T0_che_contient_version_source
                    ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(347,array( 'T0_che_contient_version_source' => 1),$donnees_retournees);
                
                if($tt347[__xst] !== __xsu){

                    $donnees_retournees[__xsi][__xal][]=__METHOD__ . ' [' . __LINE__ . ']';
                    return;

                }

                /* $donnees_retournees[__xsi][__xal][]='<pre>' . var_export( $tt347[__xva] , true ).'</pre> [' . __LINE__ . ']';*/
                foreach($tt347[__xva] as $k1 => $v1){
                    $obj=$this->construire_chemin($v1['T0.chx_dossier_id_source']);
                    
                    if($obj[__xst] === __xsu){

                        $chemin_source=$obj[__xva]['chemin_absolu'] . $v1['T0.chp_nom_source'];
                        
                        if(true){

                            /*|| strpos[ $chemin_source , 'index.html']!==false]{*/
                            
                            if($a=file_get_contents($chemin_source)){

                                /* $donnees_retournees[__xsi][__xal][]='$chemin_source' . $chemin_source . '<br /> remplacer "' . $xva_avant['T0.chp_nom_dossier'] . '" par "' . $form['chp_nom_dossier'] . '" <pre>'.htmlentities( var_export( $a , true) ) . '</pre>>[' . __LINE__ . ']';*/
                                $a=str_replace($xva_avant['T0.chp_nom_dossier'],$form['chp_nom_dossier'],$a);
                                $b=file_put_contents($chemin_source,$a);
                                
                                if($b === false){

                                    $donnees_retournees[__xsi][__xer][]='<pre>' . $chemin_source . '</pre> [' . __LINE__ . ']';

                                }


                            }else{

                                $donnees_retournees[__xsi][__xer][]='<pre>' . $chemin_source . '</pre> [' . __LINE__ . ']';
                            }


                        }else{

                            $donnees_retournees[__xsi][__xer][]='<pre>' . $chemin_source . '</pre> [' . __LINE__ . ']';
                        }


                    }else{

                        $donnees_retournees[__xsi][__xer][]='<pre>' . var_export($v1,true) . '</pre> [' . __LINE__ . ']';
                    }

                }

            }


        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function test_avant_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$__xva){
        $obj=$this->construire_chemin($__xva['T0.chi_id_dossier']);
        
        if($obj['__xst'] !== __xsu){

            $donnees_retournees[__xsi][__xal][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';
            return;

        }

        $dossier_absolu=$obj['__xva']['chemin_absolu'];
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $dossier_absolu , true ) . '</pre>' ; exit(0);*/
        $obj=$this->test_dossier_vide($dossier_absolu);
        
        if($obj['__xst'] === __xsu){

            /*
              ok il est vide, on l'efface du disque
            */
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $obj , true ) . '</pre>' ; exit(0);*/
            
            if(is_dir($dossier_absolu)){

                
                if((@rmdir($dossier_absolu))){

                    $donnees_retournees[__xsi][__xsu][]='le dossier a été supprimé du disque [' . __LINE__ . ']';
                    return array( __xst => __xsu);

                }


            }else{

                /*
                  le dossier n'existe plus sur le disque 
                */
                return array( __xst => __xsu);
            }


        }else{

            $donnees_retournees[__xsi][__xer][]='le dossier n\'est pas vide [' . __LINE__ . ']';
        }

        return array( __xst => __xer);
    }
    /*
      =============================================================================================================
    */
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        $obj=$this->tester_arbre_dossier($form['chp_nom_dossier'],$form['chx_parent_dossier'],null);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=$obj[__xme];
            return array( __xst => __xer);

        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function action_apres_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nouvel_id){
        /*
          =====================================================================================================
        */
        $obj=$this->construire_chemin($nouvel_id);
        
        if($obj['__xst'] !== __xsu){

            $donnees_retournees[__xsi][__xal][]='le chemin absolu n\'a pas pu être récupéré [' . __LINE__ . ']';

        }

        $dossier_absolu=$obj['__xva']['chemin_absolu'];
        /*
          ici la création effective
        */
        /* $donnees_retournees[__xsi][__xer][]=$dossier_absolu;*/
        /* return;*/
        
        if(is_dir($dossier_absolu)){

            $donnees_retournees[__xsi][__xal][]='Le dossier ' . $donnees_recues[__xva]['chp_nom_dossier'] . ' existe déjà sur disque [' . __LINE__ . ']';

        }else{

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $dossier_absolu , true ) . '</pre>' ; exit(0);*/
            
            if((@mkdir($dossier_absolu))){


            }else{

                $donnees_retournees[__xsi][__xal][]='Le dossier n\'a pas pu être créé sur disque [' . __LINE__ . ']';
            }

        }

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
        /* conversion des données numériques */
        $form['chi_id_dossier']=is_null($form['chi_id_dossier']) ? null : (int)($form['chi_id_dossier']);
        $form['chx_parent_dossier']=is_null($form['chx_parent_dossier']) ? null : (int)($form['chx_parent_dossier']);
        $form['che_contient_genere_dossier']=is_null($form['che_contient_genere_dossier']) ? null : (int)($form['che_contient_genere_dossier']);
        $form['che_pour_les_js_dossier']=is_null($form['che_pour_les_js_dossier']) ? null : (int)($form['che_pour_les_js_dossier']);
        $__test=$GLOBALS['__fnt1']->test_du_nom_de_fichier1($form['chp_nom_dossier'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "nom" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($form['chx_parent_dossier']) || $form['chx_parent_dossier'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "parent" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_contient_genere_dossier']) || $form['che_contient_genere_dossier'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "contient genere" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_pour_les_js_dossier']) || $form['che_pour_les_js_dossier'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "pour les js" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt386=/*sql_inclure_deb*/
            /* sql_386()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_pour_les_js_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_386()*/ 386,
            array(/**/
                'T0_chi_id_dossier' => $form['chi_id_dossier']
            ),
            $donnees_retournees
        );
        
        if($tt386[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt386[__xst] === __xsu && count($tt386[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt386[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt155=/*sql_inclure_deb*/
                /* sql_155()
                UPDATE b1.tbl_dossiers SET 
                   `chp_nom_dossier` = :n_chp_nom_dossier , 
                   `chx_parent_dossier` = :n_chx_parent_dossier , 
                   `che_contient_genere_dossier` = :n_che_contient_genere_dossier , 
                   `che_pour_les_js_dossier` = :n_che_pour_les_js_dossier
                WHERE `chi_id_dossier` = :c_chi_id_dossier ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_155()*/ 155,
                array(
                    /**/
                    'c_chi_id_dossier' => $tt386[__xva][0]['T0.chi_id_dossier'],
                    'n_chp_nom_dossier' => $form['chp_nom_dossier'],
                    'n_chx_parent_dossier' => $form['chx_parent_dossier'],
                    'n_che_contient_genere_dossier' => $form['che_contient_genere_dossier'],
                    'n_che_pour_les_js_dossier' => $form['che_pour_les_js_dossier']
                ),
                $donnees_retournees
            );
            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt386[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt386=/*sql_inclure_deb*/
                /* sql_386()
                SELECT 
                `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
                `T0`.`che_pour_les_js_dossier`
                 FROM b1.tbl_dossiers T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                
                WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_386()*/ 386,
                array(/**/
                    'T0_chi_id_dossier' => $form['chi_id_dossier']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt386;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt386;
        }

        $obj=$this->construire_chemin($form['chi_id_dossier']);
        
        if($obj['__xst'] === __xsu){

            $chemin_absolu=$obj['__xva']['chemin_absolu'];
            $chemin_relatif=$obj['__xva']['chemin_relatif'];

        }else{

            $donnees_retournees[__xsi][__xer][]=$obj['__xme'];
            return;
        }

        $this->liste_des_fidos($form['chi_id_dossier'],$chemin_absolu,$donnees_retournees);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_dossier=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_dossier)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_dossier'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_dossier=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_dossier , true ) . '</pre>' ; exit(0);*/
        $tt386=/*sql_inclure_deb*/
            /* sql_386()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_pour_les_js_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_386()*/ 386,
            array(/**/
                'T0_chi_id_dossier' => $chi_id_dossier
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt386 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt386;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_dossier('.$chi_id_dossier.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_dossier=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_dossier)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_dossier'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_dossier=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_dossier(' . $chi_id_dossier . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_dossier , true ) . '</pre>' ; exit(0);*/
        $tt386=/*sql_inclure_deb*/
            /* sql_386()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_pour_les_js_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_386()*/ 386,
            array(/**/
                'T0_chi_id_dossier' => $chi_id_dossier
            ),
            $donnees_retournees
        );
        $obj=$this->construire_chemin($chi_id_dossier);
        
        if($obj['__xst'] === __xsu){

            $chemin_absolu=$obj['__xva']['chemin_absolu'];
            $chemin_relatif=$obj['__xva']['chemin_relatif'];

        }else{

            $donnees_retournees[__xsi][__xer][]=$obj['__xme'];
            return;
        }

        $this->liste_des_fidos($chi_id_dossier,$chemin_absolu,$donnees_retournees);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt386 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt386;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_modification1(chi_id_dossier('.$chi_id_dossier.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        $tt386=/*sql_inclure_deb*/
            /* sql_386()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_pour_les_js_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_386()*/ 386,
            array(/**/
                'T0_chi_id_dossier' => $form['chi_id_dossier']
            ),
            $donnees_retournees
        );
        
        if($tt386[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt386 , true ) . '</pre>' ; exit(0);*/
        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt386[__xva][0]);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $__tests_avant_supprimer , true ) . '</pre>' ; exit(0);*/
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
        $tt158=/*sql_inclure_deb*/
            /* sql_158()
            DELETE FROM b1.tbl_dossiers
            WHERE `chi_id_dossier` = :chi_id_dossier ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_158()*/ 158,
            array(/**/
                'chi_id_dossier' => $tt386[__xva][0]['T0.chi_id_dossier']
            ),
            $donnees_retournees
        );
        
        if($tt158[__xst] !== __xsu){

            return;

        }

        
        if(isset($form['__mat_liste_si_ok'])){

            $mat1=json_decode($form['__mat_liste_si_ok'],true);
            $d=1;
            $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_confirmation_supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          afr test de dépendance et répertoire non vide
        */
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $chi_id_dossier=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_dossier'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_dossier=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_dossier , true ) . '</pre>' ; exit(0);*/
        $tt386=/*sql_inclure_deb*/
            /* sql_386()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_pour_les_js_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_386()*/ 386,
            array(/**/
                'T0_chi_id_dossier' => $chi_id_dossier
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt386 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt386;
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
        $__test=$GLOBALS['__fnt1']->test_du_nom_de_fichier1($form['chp_nom_dossier'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "nom" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($form['che_contient_genere_dossier']) || $form['che_contient_genere_dossier'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "contient genere" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        $donnees_sql=array( array(/**/
                    'chp_nom_dossier' => $form['chp_nom_dossier'],
                    'chx_parent_dossier' => $form['chx_parent_dossier'],
                    'che_contient_genere_dossier' => $form['che_contient_genere_dossier']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
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
            $this->sql0->sql_iii(
             /*sql_378()*/ 378,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt378[__xst] === __xsu && $tt378['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt378['nouvel_id']);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt378['nouvel_id']);
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
        $criteres389=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres389[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres389 , true ) . '</pre>' ; exit(0);*/
        $tt389=/*sql_inclure_deb*/
            /* sql_389()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`che_contient_genere_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
            `T0`.`che_pour_les_js_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE ( / *** *** / `T0`.`chi_id_dossier` = :T0_chi_id_dossier
               AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
               AND `T0`.`che_contient_genere_dossier` = :T0_che_contient_genere_dossier
               AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
               AND `T1`.`chp_nom_dossier` = :T1_chp_nom_dossier
               AND `T0`.`che_pour_les_js_dossier` = :T0_che_pour_les_js_dossier) 
            ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_389()*/ 389,
            $criteres389,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt389[__xst]===__xsu && count($tt389[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt389[__xst] === __xsu && count($tt389[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres389['debut']=$__debut;
            $tt389=/*sql_inclure_deb*/
                /* sql_389()
                SELECT 
                `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`che_contient_genere_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
                `T0`.`che_pour_les_js_dossier`
                 FROM b1.tbl_dossiers T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                
                WHERE ( / *** *** / `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                   AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
                   AND `T0`.`che_contient_genere_dossier` = :T0_che_contient_genere_dossier
                   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
                   AND `T1`.`chp_nom_dossier` = :T1_chp_nom_dossier
                   AND `T0`.`che_pour_les_js_dossier` = :T0_che_pour_les_js_dossier) 
                ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_389()*/ 389,
                $criteres389,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt389 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt389 = <pre>' . var_export( $tt389 , true ) . '</pre>' ; exit(0);*/
        
        if($this->fonction_liste === 'liste1'){

            $chemin_racine=__CHEMIN_ABSOLU_SITE__ . 'rev_' . $_SESSION[_CA_]['chi_id_projet'];
            $this->liste_des_fidos(1,$chemin_racine,$donnees_retournees);

        }

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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt389;
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