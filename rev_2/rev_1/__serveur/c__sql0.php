<?php
class c__sql0{
    public function __construct(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
    }
    /*
      =============================================================================================================
    */
    function sql_iii($numero_de_sql,$par,&$donnees_retournees,$db=null){
        $nom_fichier=__RACINE_PGMS__ . '__sqls/sql_' . $numero_de_sql . '.php';
        
        if(!is_file($nom_fichier)){

            $e=new \Exception();
            echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export(str_replace(__CHEMIN_ABSOLU_SITE__,'',$e->getTraceAsString()),true) . '</pre>' ;
            exit(0);

        }

        require_once($nom_fichier);
        $nom_de_fonction='sql_' . $numero_de_sql;
        
        if($db === null){

            $tt=$nom_de_fonction($par,$donnees_retournees,$this);

        }else{

            $tt=$nom_de_fonction($par,$donnees_retournees,$this,$db);
        }

        
        if($tt[__xst] !== __xsu){

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt , true ) . '</pre>' ; exit(0);*/
            $l_erreur=array( __xst => $tt[__xst]);
            
            if(isset($tt['texte_requete'])){

                $l_erreur['texte_requete']=$tt['texte_requete'];

            }

            
            if(isset($tt['code_erreur'])){

                $l_erreur['code_erreur']=$tt['code_erreur'];

            }

            
            if(isset($tt['bdd'])){

                $l_erreur['bdd']=$tt['bdd'];

            }

            
            if(isset($tt['sql0'])){

                $l_erreur['sql0']=$tt['sql0'];

            }

            $message_deverminage='';
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt['exception'] , true ) . '</pre>' ; exit(0);*/
            
            if(isset($tt['exception'])){

                $l_erreur['getMessage']='sql_' . $numero_de_sql . ' : ' . $tt['exception']->getMessage();
                
                if($GLOBALS[DEVER_SRV] >= 1){

                    $message_deverminage .= '<pre>' . $tt['exception']->getTraceAsString() . '</pre>';

                }

                
                if($tt['exception']->getCode() === 19){

                    $donnees_retournees[__xsi][__xer][]='erreur sur contrainte sql_' . $numero_de_sql . ' ' . $tt['exception']->getMessage() . ' [' . __LINE__ . ']';

                }else{

                    /* $donnees_retournees[__xsi][__xer][]='code erreur "' . $tt['exception']->getCode() . '" non traité dans sql_' . $numero_de_sql . ' ' . $tt['exception']->getMessage() . '  sql0 [' . __LINE__ . ']';*/
                    $donnees_retournees[__xsi][__xer][]='sql_' . $numero_de_sql . ' ' . $tt['exception']->getMessage() . '';
                }


            }

            
            if(isset($tt[__xme])){

                $donnees_retournees[__xsi][__xer][]=$tt[__xme] . ' sql0 [' . __LINE__ . ']';

            }

            
            if($GLOBALS[DEVER_SRV] >= 1){

                $message_deverminage .= '<pre>' . var_export($l_erreur,true) . '</pre> [' . __LINE__ . ']';
                $donnees_retournees[__xsi][__xdv][]=$message_deverminage;

            }

            return $l_erreur;

        }else{

            return $tt;
        }

    }
    /*
      =============================================================================================================
      quand un champ de recherche contient des id, ils sont séparés par des virgules
      par exemple, 1,2,3  , le where doit être sous la forme WHERE id in ( 1 , 2 , 3 )
      =============================================================================================================
    */
    function construction_where_sql_sur_id($nom_du_champ,$critere){
        $champ_where='';
        
        if($critere !== null && strpos($critere,',') !== false){

            $tableau_liste_des_valeurs=explode(',',$critere);
            $chaine_recherche='';
            foreach($tableau_liste_des_valeurs as $k1 => $v1){
                
                if(is_numeric($v1)){

                    $chaine_recherche .= ',' . $v1;

                }

            }
            
            if($chaine_recherche !== ''){

                $chaine_recherche=substr($chaine_recherche,1);
                $champ_where .= 'AND ' . sq0($nom_du_champ) . ' in (' . sq0($chaine_recherche) . ') ';

            }


        }else if($critere === null){

            $champ_where .= 'AND ' . sq0($nom_du_champ) . ' IS NULL ';

        }else if(is_numeric($critere)){

            $champ_where .= 'AND ' . sq0($nom_du_champ) . ' = ' . sq0($critere) . ' ';
        }

        return $champ_where;
    }
    /*
      =============================================================================================================
    */
    function sql_dependances2($par,&$donnees_retournees){
        $ret=$this->sql_dependances($par,$donnees_retournees);
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $ret , true ) . '</pre>' ; exit(0);
        */
        
        if($ret[__xst] === __xsu){

            
            if($ret[__xva]['nombre_total_des_dependances'] > 0){

                foreach($ret[__xva]['liste_des_dependances'] as $k1 => $v1){
                    $donnees_retournees[__xsi][__xdv][]='table ' . $v1['table_dependante'] . ' [' . __LINE__ . ']';
                }

            }

            return $ret[__xva]['nombre_total_des_dependances'];

        }else{

            $donnees_retournees[__xsi][__xdv][]='Erreur sur la vérification des dépendances [' . __LINE__ . ']';
        }

    }
    /*#
      =============================================================================================================
      tester si il existe des éléments dépendants
      $tt=sql_dependances(array( 'nom_de_la_table' => 'tbl_projets', 'id_enregistrement' => 2 ));
    */
    function sql_dependances($par,&$donnees_retournees){
        $liste_des_dependances=array();
        $nombre_total_des_dependances=0;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( _CA_ , true ) . '</pre>' ; exit(0); */
        
        if(strpos(_CA_,'rev_1_') !== false || strpos(_CA_,'rev_2_') !== false){

            $nom_fichier_dependances=__RACINE_PGMS__ . '__bdd_sqlite/' . 'fichier_des_dependances_bdd_1.php';
            $par['id_bdd']=$_SESSION[_CA_]['chi_id_projet'];

        }else{

            $dossier_bdd='';
            foreach($GLOBALS[__BDD] as $k1 => $v1){
                
                if($dossier_bdd === ''){

                    $dossier_bdd=dirname($v1['chemin_bdd'],1);

                }

            }
            $nom_fichier_dependances=$dossier_bdd . DIRECTORY_SEPARATOR . 'fichier_des_dependances_bdd_' . $par['id_bdd'] . '.php';
        }

        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $nom_fichier_dependances , true ) . '</pre>' ; exit(0);
        */
        require($nom_fichier_dependances);
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $nom_fichier_dependances , true ) . '</pre>' ; exit(0);
        */
        $le_tableau=array();
        foreach($tableau_des_dependances as $k1 => $v1){
            
            if($par['table_parente'] === $v1['table_parente'] && $par['champ_parent'] === $v1['champ_parent']){

                $le_tableau=$v1;
                break;

            }

        }
        /*  $donnees_retournees[__xsi][__xdv][]='<pre>'.var_export($le_tableau , true).'</pre> [' . __LINE__ . ']'; */
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $le_tableau , true ) . '</pre>' ; exit(0); */
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $GLOBALS[__BDD] , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $par , true ) . '</pre>' ; exit(0);*/
        
        if(count($le_tableau) > 0){

            foreach($le_tableau['dependances'] as $k1 => $v1){
                $sql0='SELECT count( * ) FROM `' . $GLOBALS[__BDD][$par['id_bdd']][PREFIXE_BDD] . '`.' . $v1['table_dependante'] . ' WHERE ' . $v1['champ_dependant'] . ' = ' . $par['id_enregistrement'];
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $sql0 , true ) . '</pre>' ; exit(0); */
                
                if($GLOBALS[DEVER_SRV] >= 2){

                    $donnees_retournees[__xsi][__xdv][]='<pre>' . $sql0 . '</pre> [' . __LINE__ . ']';

                }

                try{
                    $GLOBALS[__BDD][$par['id_bdd']][LIEN_BDD]->enableExceptions(true);
                    $stmt0=$GLOBALS[__BDD][$par['id_bdd']][LIEN_BDD]->prepare($sql0);
                    $res0=$stmt0->execute();
                    while($tab0=$res0->fetchArray(SQLITE3_NUM)){
                        
                        if($tab0[0] !== 0){

                            $liste_des_dependances[]=array(/**/
                                'table_dependante' => $v1['table_dependante'],
                                'champ_dependant' => $v1['champ_dependant'],
                                'nombre_de_dependances' => $tab0[0]
                            );
                            /*
                              echo __FILE__ . ' ' . __LINE__ . ' __LINE__ '.$tab0[0].'= <pre>' . var_export( $sql0 , true ) . '</pre>' ; exit(0);
                            */
                            $nombre_total_des_dependances += $tab0[0];

                        }

                    }
                }catch(Exception $e){
                    return array( __xst => __xer, '__xme' => 'erreur pour la requete sur la table "' . $k1 . '" [' . __LINE__ . ']');
                }
            }

        }

        /*
          $donnees_retournees[__xsi][__xdv][]='<pre>'.var_export($liste_des_dependances , true).'</pre> [' . __LINE__ . ']';
        */
        return array( __xst => __xsu, __xva => array( 'nombre_total_des_dependances' => $nombre_total_des_dependances, 'liste_des_dependances' => $liste_des_dependances));
    }
}