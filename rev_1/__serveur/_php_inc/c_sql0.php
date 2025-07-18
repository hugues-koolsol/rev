<?php
class c_sql0{
    public function __construct(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
    }
    /*
      =============================================================================================================
      return $this->traite_erreur_sql(65,$GLOBALS[__BDD][1],$donnees_retournees, $texte_sql_65,__LINE__,'la selection sur les priorites');
      la selection, la modification, la supression, l'insertion
    */
    function traite_erreur_sql($numero_sql,$bdd,&$donnees_retournees,$texte_sql,$numero_de_ligne,$libelle_clud=''){
        
        if($GLOBALS[DEVER_SRV] >= 2){

            $message_normal='Erreur lors de ' . $libelle_clud;
            $message_normal .= ' sql_' . $numero_sql . '()[' . $numero_de_ligne . ']';
            $donnees_retournees[__x_signaux][__xdv][]=$message_normal;

        }

        $message_dv=$numero_de_ligne . ' sql_' . $numero_sql . '() ersql=' . $bdd[LIEN_BDD]->lastErrorCode();
        
        if($GLOBALS[DEVER_SRV] >= 2){

            
            if($bdd[LIEN_BDD]->lastErrorCode() === 19){

                $message_dv .= ' enregistrement dupliqué <br />' . $bdd[LIEN_BDD]->lastErrorMsg() . '<br /> dans <pre style="font-size:0.8rem;">' . $texte_sql . '</pre>';

            }

            $message_dv .= '<br />' . $bdd[LIEN_BDD]->lastErrorMsg() . '<br /> dans <pre style="font-size:0.8rem;">' . $texte_sql . '</pre>';
            $donnees_retournees[__x_signaux][__xdv][]=$message_dv;

        }else if($GLOBALS[DEVER_SRV] === 1){

            $donnees_retournees[__x_signaux][__xdv][]=$message_dv;
        }

        return array( __xst => __xer, 'code_erreur' => $bdd[LIEN_BDD]->lastErrorCode(), __xme => 'erreur sql_' . $numero_sql . '()');
    }
    /*
      =============================================================================================================
    */
    function sql_iii($numero_de_sql,$par,&$donnees_retournees,$db=null){
        $nom_fichier=REPERTOIRE_RACINE_DES_SQL . DIRECTORY_SEPARATOR . 'sql_' . $numero_de_sql . '.php';
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
            
            if(isset($tt['source_requete'])){

                $l_erreur['source_requete']=$tt['source_requete'];

            }

            
            if(isset($tt['texte_requete'])){

                $l_erreur['texte_requete']=$tt['texte_requete'];

            }

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt['exception'] , true ) . '</pre>' ; exit(0);*/
            
            if(isset($tt['exception'])){

                $l_erreur['getMessage']=$tt['exception']->getMessage();

            }

            return $l_erreur;
            echo __FILE__ . ' ' . __LINE__ . ' $l_erreur = <pre>' . var_export($l_erreur,true) . '</pre>' ;
            exit(0);
            return $this->traite_erreur_sql($numero_de_sql,$GLOBALS[__BDD][$tt['id_bdd']],$donnees_retournees,$tt['source_requete'],$tt['texte_requete'],$tt['exception']);

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
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $ret , true ) . '</pre>' ; exit(0);*/
        
        if($ret[__xst] === __xsu){

            return $ret[__xva]['nombre_total_des_dependances'];

        }else{

            $donnees_retournees[__x_signaux][__xdv][]='Erreur sur la vérification des dépendances [' . __LINE__ . ']';
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
        $tt111=/*sql_inclure_deb*/
            /* sql_111()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
             FROM b1.tbl_bdds T0
            WHERE (`T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
               AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql_iii(
             /*sql_111()*/ 111,
            array( 'T0_chi_id_basedd' => $par['id_bdd'], 'T0_chx_projet_id_basedd' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt111 , true ) . '</pre>' ; exit(0);*/
        
        if($tt111[__xst] === __xsu && count($tt111[__xva]) === 1){

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
            $nom_fichier_dependances=$chemin_de_la_bdd . DIRECTORY_SEPARATOR . 'fichier_des_dependances_bdd_' . $par['id_bdd'] . '.php';
            /*
              Attention, c'est un require SANS once ici car la variable $tableau_des_dependances DOIT être rechargée
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
            /*
              $donnees_retournees[__x_signaux][__xdv][]='<pre>'.var_export($le_tableau , true).'</pre> [' . __LINE__ . ']';
            */
            
            if(count($le_tableau) > 0){

                foreach($le_tableau['dependances'] as $k1 => $v1){
                    $sql0='SELECT count( * ) FROM `' . $GLOBALS[__BDD][$par['id_bdd']][PREFIXE_BDD] . '`.' . $v1['table_dependante'] . ' WHERE ' . $v1['champ_dependant'] . ' = ' . $par['id_enregistrement'];
                    /*
                      $donnees_retournees[__x_signaux][__xdv][]='<pre>'.$sql0.'</pre> [' . __LINE__ . ']';
                    */
                    try{
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


        }

        /*
          $donnees_retournees[__x_signaux][__xdv][]='<pre>'.var_export($liste_des_dependances , true).'</pre> [' . __LINE__ . ']';
        */
        return array( __xst => __xsu, __xva => array( 'nombre_total_des_dependances' => $nombre_total_des_dependances, 'liste_des_dependances' => $liste_des_dependances));
    }
}
/*#
  =============================================================================================================
  return $this->traite_erreur_sql(65,$GLOBALS[__BDD][1],$donnees_retournees, $texte_sql_65,__LINE__,'la selection sur les priorites');
  la selection, la modification, la supression, l'insertion
  function traite_erreur_sql2($numero_sql,$bdd,&$donnees_retournees,$texte_sql,$libelle_clud='',$exception=null){
   
      if($GLOBALS[DEVER_SRV]>=2){
          $message_normal='Erreur lors de '.$libelle_clud;
          $message_normal.=' sql_'.$numero_sql.'()';
          $donnees_retournees[__x_signaux][__xdv][]=$message_normal;
      }

      $message_dv=' sql_'.$numero_sql.'() ersql='.$bdd[LIEN_BDD]->lastErrorCode();
      if($GLOBALS[DEVER_SRV]>=2){
          if($bdd[LIEN_BDD]->lastErrorCode()===19){
              $message_dv.=' enregistrement dupliqué <br />'.$bdd[LIEN_BDD]->lastErrorMsg().'<br /> dans <pre style="font-size:0.8rem;">'.$texte_sql.'</pre>';
          }
          $message_dv.='<br />'.$bdd[LIEN_BDD]->lastErrorMsg().'<br /> dans <pre style="font-size:0.8rem;">'.$texte_sql.'</pre>';
          $donnees_retournees[__x_signaux][__xdv][]=$message_dv;
      }else if($GLOBALS[DEVER_SRV]===1){
          $donnees_retournees[__x_signaux][__xdv][]=$message_dv;
      }
   
      return(array( __xst => __xer, 'code_erreur' => $bdd[LIEN_BDD]->lastErrorCode() ,__xme => 'erreur sql_'.$numero_sql.'()'));
  }
*/