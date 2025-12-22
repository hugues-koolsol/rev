<?php
$a=realpath(dirname(__RACINE_PGMS__,2));
require($a . DIRECTORY_SEPARATOR . 'phplib' . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php');
use PhpParser\Error;
use PhpParser\NodeDumper;
use PhpParser\ParserFactory;
class c_sources1{
    private $sql0=null;
    private $moi='c_sources1';
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
    function exporter_dans_base_de_prod1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $l01=count($mat);
        $chi_id_source=0;
        /* $donnees_retournees[__xsi][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                /* $donnees_retournees[__xsi][__xdv][]='$mat[$i][1] ='.json_encode( $mat[$i][1] . ' ' . $mat[$i+1][1]  , JSON_FORCE_OBJECT );*/
                
                if($mat[$i][1] === 'chi_id_source'){

                    $chi_id_source=$mat[$i + 1][1];

                }


            }

        }
        
        if($chi_id_source === 0){

            $donnees_retournees[__xsi][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
            return;

        }

        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array( 'T0_chi_id_source' => $chi_id_source),
            $donnees_retournees
        );
        
        if($tt116[__xst] !== __xsu || count($tt116[__xva]) !== 1){

            $donnees_retournees[__xsi][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt116 , true ) . '</pre>' ; exit(0);*/
        $sql0='
            UPDATE tbl_sources SET 
                chi_id_source = ' . $tt116[__xva][0]['T0.chi_id_source'] . ' , 
                chx_dossier_id_source = ' . $tt116[__xva][0]['T0.chx_dossier_id_source'] . ' , 
                chp_nom_source = ' . sq1($tt116[__xva][0]['T0.chp_nom_source']) . ' ,  
                cht_commentaire_source = ' . sq1($tt116[__xva][0]['T0.cht_commentaire_source']) . ' ,  
                che_binaire_source = ' . $tt116[__xva][0]['T0.che_binaire_source'] . ' ,  
                che_contient_version_source = ' . $tt116[__xva][0]['T0.che_contient_version_source'] . ' ,  
                che_autorisation_globale_source = ' . $tt116[__xva][0]['T0.che_autorisation_globale_source'] . '
            WHERE chi_id_source = ' . $tt116[__xva][0]['T0.chi_id_source'] . ' ;
                
            INSERT OR IGNORE INTO tbl_sources( 
                `chi_id_source` , 
                `chx_dossier_id_source` , 
                `chp_nom_source` , 
                `cht_commentaire_source` , 
                `che_binaire_source` , 
                `che_contient_version_source` , 
                `che_autorisation_globale_source` 
            ) values(
                ' . $tt116[__xva][0]['T0.chi_id_source'] . ' , 
                ' . $tt116[__xva][0]['T0.chx_dossier_id_source'] . ' , 
                ' . sq1($tt116[__xva][0]['T0.chp_nom_source']) . ' , 
                ' . sq1($tt116[__xva][0]['T0.cht_commentaire_source']) . ' , 
                ' . $tt116[__xva][0]['T0.che_binaire_source'] . ' , 
                ' . $tt116[__xva][0]['T0.che_contient_version_source'] . ' , 
                ' . $tt116[__xva][0]['T0.che_autorisation_globale_source'] . ' 
            );';
        $chemin_bdd=$_SESSION[_CA_]['chemin_des_bdds'] . 'bdd_1.sqlite';
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( is_file($chemin_bdd), true ) . '</pre>' ; exit(0);*/
        $db=new SQLite3($chemin_bdd);
        $db->query($sql0);
    }
    /*
      =============================================================================================================
    */
    function exporter_dans_rev_un(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $l01=count($mat);
        $chi_id_source=0;
        /* $donnees_retournees[__xsi][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                /* $donnees_retournees[__xsi][__xdv][]='$mat[$i][1] ='.json_encode( $mat[$i][1] . ' ' . $mat[$i+1][1]  , JSON_FORCE_OBJECT );*/
                
                if($mat[$i][1] === 'chi_id_source'){

                    $chi_id_source=$mat[$i + 1][1];

                }


            }

        }
        
        if($chi_id_source === 0){

            $donnees_retournees[__xsi][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
            return;

        }

        $chemin_fichier_source='';
        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array( 'T0_chi_id_source' => $chi_id_source),
            $donnees_retournees
        );
        
        if($tt116[__xst] === __xsu){

            $contenu_disque='';
            
            if($tt116[__xva][0]['T0.chx_dossier_id_source'] !== null){

                require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
                $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
                $chemin=$obj_doss->construire_chemin($tt116[__xva][0]['T0.chx_dossier_id_source']);
                
                if($chemin[__xst] === __xsu){

                    $chemin_fichier_source=$chemin[__xva]['chemin_absolu'] . $tt116[__xva][0]['T0.chp_nom_source'];

                }else{

                    $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                    return;
                }


            }else{

                $donnees_retournees[__xsi][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
                return;
            }


        }

        /*
          $donnees_retournees[__xsi][__xal][]=' ' . $chemin_fichier_source . ' [' . __LINE__ . ']';
        */
        $rep_destin=__CHEMIN_ABSOLU_SITE__ . 'rev_1';
        $rep_source=__CHEMIN_ABSOLU_SITE__ . 'rev_2';
        $chemin_fichier_destin=str_replace($rep_source,$rep_destin,$chemin_fichier_source);
        /*
          
          $donnees_retournees[__xsi][__xal][]=' ' . $chemin_fichier_source . ' ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';
          
        */
        
        if(!copy($chemin_fichier_source,$chemin_fichier_destin)){

            $donnees_retournees[__xsi][__xer][]=' erreur de copie de ' . $chemin_fichier_source . ' vers ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';

        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function importer_de_rev_un(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $l01=count($mat);
        $chi_id_source=0;
        /* $donnees_retournees[__xsi][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                
                if($mat[$i][1] === 'chi_id_source'){

                    $chi_id_source=(int)($mat[$i + 1][1]);

                }


            }

        }
        
        if($chi_id_source === 0){

            $donnees_retournees[__xsi][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
            return;

        }

        $chemin_fichier_destin='';
        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array( 'T0_chi_id_source' => $chi_id_source),
            $donnees_retournees
        );
        
        if($tt116[__xst] === __xsu){

            $contenu_disque='';
            
            if($tt116[__xva][0]['T0.chx_dossier_id_source'] !== null){

                require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
                $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
                $chemin=$obj_doss->construire_chemin($tt116[__xva][0]['T0.chx_dossier_id_source']);
                
                if($chemin[__xst] === __xsu){

                    $chemin_fichier_destin=$chemin[__xva]['chemin_absolu'] . $tt116[__xva][0]['T0.chp_nom_source'];

                }else{

                    $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                    return;
                }


            }else{

                $donnees_retournees[__xsi][__xer][]=' [' . __METHOD__ . '] [' . __LINE__ . ']';
                return;
            }


        }

        /*
          $donnees_retournees[__xsi][__xal][]=' ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';
        */
        $rep_destin=__CHEMIN_ABSOLU_SITE__ . 'rev_2';
        $rep_source=__CHEMIN_ABSOLU_SITE__ . 'rev_1';
        $chemin_fichier_source=str_replace($rep_destin,$rep_source,$chemin_fichier_destin);
        /*
          
          $donnees_retournees[__xsi][__xal][]=' ' . $chemin_fichier_source . ' ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';
          
        */
        
        if(!copy($chemin_fichier_source,$chemin_fichier_destin)){

            $donnees_retournees[__xsi][__xer][]=' erreur de copie de ' . $chemin_fichier_source . ' vers ' . $chemin_fichier_destin . ' [' . __LINE__ . ']';

        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    public function sauvegarder_une_matrice_de_source(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
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
                'chp_provenance_rev' => 'source',
                'chx_source_rev' => $donnees_recues[__xva]['chi_id_source']
            ),
            $donnees_retournees
        );
        
        if(_CA_ === 'rev' . '_1' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            return;

        }

        /*
          $donnees_retournees[__xsi][__xal][]=' supprimer le false plus haut  [' . __LINE__ . ']';
        */
        
        if($donnees_recues[__xva]['matrice_source'] === null){

            $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($donnees_recues[__xva]['rev_du_disque']);
            
            if($obj_matrice[__xst] === __xsu){

                $matrice=$obj_matrice[__xva];
                $donnees_retournees[__xsi][__xal][]=' la matrice est trop grosse pour être passé en POST :<br />conversion dans le php (' . count($matrice) . ') [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__xsi][__xal][]=' erreur de convertion en matrice [' . __LINE__ . ']';
                return;
            }


        }else{

            $matrice=$donnees_recues[__xva]['matrice_source'];
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $matrice=<pre> ' . var_export(  $matrice , true ) . '</pre>' ; exit(0); */
        $a_sauvegarder=array();
        for( $i=0 ; $i < count($matrice) ; $i++ ){
            
            /* 14 champs pour le rev + id_projet + chp_provenance_rev + chx_source_rev*/
            $a_sauvegarder[]=array(
                'chp_provenance_rev' => 'source',
                'chx_source_rev' => $donnees_recues[__xva]['chi_id_source'],
                'chp_id_rev' => $matrice[$i][0],
                'chp_valeur_rev' => str_replace('¶' . 'LF¶',"\n",$matrice[$i][1]),
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
    }
    /*
      =============================================================================================================
    */
    function enregistrer_un_source_compile1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* $donnees_retournees[__xsi][__xdv][]='<pre>'.var_export( $donnees_recues , true ).'</pre> [' . __LINE__ . ']';*/
        $pas_de_message_de_succes=$donnees_recues['pas_de_message_de_succes']??0;
        
        if(substr(_CA_,-7) === '_rev_1_' && $_SESSION[_CA_]['chi_id_projet'] === 1){

            /*
              pas besoin de mettre le source pour le projet 1
            */
            $source_compile='';
            $rev_du_disque='';
            $donnees_recues[__xva]['enregistrer_la_matrice']=__xer;

        }else{

            $source_compile=$donnees_recues[__xva]['source_compile'];
            $rev_du_disque=$donnees_recues[__xva]['rev_du_disque'];
        }

        /*        $donnees_retournees[__xsi][__xif][]='le rev du source a bien été compilé [' . __LINE__ . ']'; */
        $tt338=/*sql_inclure_deb*/
            /* sql_338()
            UPDATE b1.tbl_sources SET 
               `cht_rev_source` = :n_cht_rev_source , 
               `cht_genere_source` = :n_cht_genere_source
            WHERE `chi_id_source` = :c_chi_id_source ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_338()*/ 338,
            array(/**/
                'c_chi_id_source' => $donnees_recues[__xva]['contenu_bdd']['T0.chi_id_source'],
                'n_cht_genere_source' => $source_compile,
                'n_cht_rev_source' => $rev_du_disque
            ),
            $donnees_retournees
        );
        
        if($tt338[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur lors de l\'enregistrement du source [' . __LINE__ . ']';
            return;

        }

        
        if($donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source'] === null){

            $donnees_retournees[__xsi][__xif][]='le rev du source a bien été compilé [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            return;

        }else{

            require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
            $chemin=$obj_doss->construire_chemin($donnees_recues[__xva]['contenu_bdd']['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . $donnees_recues[__xva]['contenu_bdd']['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            
            if((@file_put_contents($chemin_fichier,$donnees_recues[__xva]['source_compile']))){

                
                if($GLOBALS[DEVER_SRV] >= 1){

                    
                    if($pas_de_message_de_succes === 1){

                        $donnees_retournees[__xsi][__xsu][]='le source du disque a bien été compilé et réécrit [' . __LINE__ . ']';

                    }


                }

                
                if(isset($donnees_recues[__xva]['bouton_compiler']) && $donnees_recues[__xva]['bouton_compiler'] !== ''){

                    $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(' . $donnees_recues[__xva]['bouton_compiler'] . '),classNameSet(\'hug_bouton yy__xsi_1\')))';

                }

                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__xsi][__xal][]='le source a bien été enregistré mais n\'a pas pu être écrit sur disque [' . __LINE__ . ']';
            }

        }

        
        if($donnees_recues[__xva]['enregistrer_la_matrice'] === __xsu){

            $this->sauvegarder_une_matrice_de_source($mat,$d,$donnees_retournees,$donnees_recues);

        }

    }
    /*
      =============================================================================================================
    */
    function charger_source_pour_compilation1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_source=0;
        $bouton_compiler='';
        $pas_de_message_de_succes=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_source' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_source=(int)($mat[$i + 1][1]);

            }else if($mat[$i][1] === 'bouton_compiler' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $bouton_compiler=$mat[$i + 1][1];

            }else if($mat[$i][1] === 'pas_de_message_de_succes' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $pas_de_message_de_succes=$mat[$i + 1][1];
            }

        }
        
        if($chi_id_source === 0){

            $donnees_retournees[__xsi][__xer][]='$chi_id_source=' . $chi_id_source . ' [' . __LINE__ . ']';
            return;

        }

        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array( 'T0_chi_id_source' => $chi_id_source),
            $donnees_retournees
        );
        
        if($tt116[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='$chi_id_source=' . $chi_id_source . ' [' . __LINE__ . ']';
            return;

        }

        $contenu_disque='';
        
        if($tt116[__xva][0]['T0.chx_dossier_id_source'] !== null){

            require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
            $chemin=$obj_doss->construire_chemin($tt116[__xva][0]['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . $tt116[__xva][0]['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            
            if(is_file($chemin_fichier)){

                $contenu_disque=@file_get_contents($chemin_fichier);

            }else{

                $donnees_retournees[__xsi][__xer][]='fichier physique ' . $tt116[__xva][0]['T0.chp_nom_source'] . ' non trouvé sur disque [' . __LINE__ . ']';
                return;
            }


        }

        $donnees_retournees[__xva]['ne_pas_retablir_les_elements_masques']=__xsu;
        $donnees_retournees[__xva]['contenu_disque']=$contenu_disque;
        $donnees_retournees[__xva]['contenu_bdd']=$tt116[__xva][0];
        $donnees_retournees[__xva]['bouton_compiler']=$bouton_compiler;
        $donnees_retournees[__xva]['pas_de_message_de_succes']=$pas_de_message_de_succes;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function ast_nicki1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
        $parser=(new ParserFactory())->createForNewestSupportedVersion();
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . enti1(var_export( $donnees_recues , true )) . '</pre>' ; exit(0);*/
        try{
            $contenu=preg_replace('/\/\\*sql_' . 'inclure_deb\\*\/(.*?)\/\\*sql_' . 'inclure_fin\\*\//us','',$donnees_recues['__xva']['php_source']);
            $ast_nikic_de_php=$parser->parse($contenu);
            /*
              sans le JSON_INVALID_UTF8_IGNORE, le source
              $a = "\x80" ;
              retourne false
            */
            /* $donnees_retournees[__xsi][__xsu][]=' conversion nikic OK [' . __LINE__ . ']';*/
            $donnees_retournees[__xva]['ast_nikic_de_php']=json_encode($ast_nikic_de_php,JSON_INVALID_UTF8_IGNORE);
            $donnees_retournees[__xva]['options']=$donnees_recues['__xva']['options'];
            /* $donnees_retournees[__xac]='module1(nom("__js/ecran_rev_vers_php1"),fonctions(traite_astnikic1()))';*/
            $donnees_retournees[__xst]=__xsu;
        }catch(Error $error){
            $cmd='';
            $pos=strpos($error->getMessage(),'on line ');
            
            if($pos !== false
               && isset($donnees_recues['__xva']['options'])
               && isset($donnees_recues['__xva']['options']['zone_source'])
            ){

                $lig=(int)(substr($error->getMessage(),$pos + 8));
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $lig . var_export( substr($error->getMessage(),$pos+8) , true ) . '</pre>' ; exit(0);*/
                $cmd .= '<div';
                $cmd .= ' class="rev_bouton yy__0"';
                $cmd .= ' data-rev_click="';
                $cmd .= 'm1(n1(__fnt1),f1(placer_le_curseur_en_lig_col1(';
                $cmd .= ' zone_source(' . $donnees_recues['__xva']['options']['zone_source'] . '),';
                $cmd .= ' ligne(' . $lig . '),';
                $cmd .= ' colonne(0)';
                $cmd .= ')))';
                $cmd .= '" title="aller à la ligne" >lig_col[' . $lig . ',0]</div>';

            }

            $donnees_retournees[__xva]['options']=$donnees_recues['__xva']['options'];
            $donnees_retournees[__xsi][__xer][]=$cmd . $error->getMessage() . '[' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
        }
    }
    /*
      =============================================================================================================
    */
    function supprimer_ce_source_du_disque1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_source=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_source' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_source=(int)($mat[$i + 1][1]);

            }

        }
        /*
          $donnees_retournees[__xsi][__xdv][]='$mat =<pre>' . var_export( $chi_id_source  , true ) . '</pre>';
        */
        
        if($chi_id_source > 0){

            $tt116=/*sql_inclure_deb*/
                /* sql_116()
                SELECT 
                `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
                `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
                 FROM b1.tbl_sources T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
                
                WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_116()*/ 116,
                array( 'T0_chi_id_source' => $chi_id_source),
                $donnees_retournees
            );
            
            if($tt116[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='les données n\'ont pas pu être récupérées pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            
            if($tt116[__xva][0]['T0.chx_dossier_id_source'] === null){

                $donnees_retournees[__xsi][__xer][]='le dossier n\'est pas renseigné pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
            $chemin=$obj_doss->construire_chemin($tt116[__xva][0]['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . $tt116[__xva][0]['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_fichier , true ) . '</pre>' ; exit(0);*/
            sauvegarder_et_supprimer_fichier($chemin_fichier);
            $donnees_retournees[__xsi][__xsu][]='le source a bien été supprimé du disque [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;

        }else{

            $donnees_retournees[__xsi][__xer][]='le source n\'a pu être supprimé du le disque ' . $chi_id_source . ' [' . __LINE__ . ']';
            return;
        }

    }
    /*
      =============================================================================================================
    */
    function ecrire_ce_source_sur_disque1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          $donnees_retournees[__xsi][__xdv][]='$mat =<pre>' . var_export( $mat  , true ) . '</pre>'; 
        */
        $chi_id_source=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_source' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_source=(int)($mat[$i + 1][1]);

            }

        }
        
        if($chi_id_source > 0){

            $tt116=/*sql_inclure_deb*/
                /* sql_116()
                SELECT 
                `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
                `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
                 FROM b1.tbl_sources T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
                
                WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_116()*/ 116,
                array( 'T0_chi_id_source' => $chi_id_source),
                $donnees_retournees
            );
            
            if($tt116[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='les données n\'ont pas pu être récupérées pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            
            if($tt116[__xva][0]['T0.chx_dossier_id_source'] === null){

                $donnees_retournees[__xsi][__xer][]='le dossier n\'est pas renseigné pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
            $chemin=$obj_doss->construire_chemin($tt116[__xva][0]['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . $tt116[__xva][0]['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            
            if($tt116[__xva][0]['T0.cht_genere_source'] === null){

                $donnees_retournees[__xsi][__xer][]='le contenu généré est NULL, Veuillez enregistrer ce source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            
            if((@file_put_contents($chemin_fichier,$tt116[__xva][0]['T0.cht_genere_source']))){

                $donnees_retournees[__xsi][__xsu][]='le source a bien été écrit sur disque [' . __LINE__ . ']';
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__xsi][__xer][]='le source n\'a pu être écrit sur le disque ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            /*
              $donnees_retournees[__xsi][__xdv][]='$mat =<pre>' . enti1(var_export( $tt116[__xva][0]  , true )) . '</pre>'; // ['T0.cht_genere_source']
            */

        }else{

            $donnees_retournees[__xsi][__xer][]='le source n\'a pu être écrit sur le disque ' . $chi_id_source . ' [' . __LINE__ . ']';
            return;
        }

    }
    /*
      =============================================================================================================
    */
    function lire_ce_source_du_disque1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          $donnees_retournees[__xsi][__xdv][]='$mat =<pre>' . var_export( $mat  , true ) . '</pre>'; 
        */
        $chi_id_source=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_source' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_source=(int)($mat[$i + 1][1]);

            }

        }
        
        if($chi_id_source > 0){

            $tt116=/*sql_inclure_deb*/
                /* sql_116()
                SELECT 
                `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
                `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
                 FROM b1.tbl_sources T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
                
                WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_116()*/ 116,
                array( 'T0_chi_id_source' => $chi_id_source),
                $donnees_retournees
            );
            
            if($tt116[__xst] !== __xsu){

                $donnees_retournees[__xsi][__xer][]='les données n\'ont pas pu être récupérées pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;

            }

            require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
            $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
            $chemin=$obj_doss->construire_chemin($tt116[__xva][0]['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                $chemin_fichier=$chemin[__xva]['chemin_absolu'] . $tt116[__xva][0]['T0.chp_nom_source'];

            }else{

                $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pour le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

            
            if(is_file($chemin_fichier)){

                $contenu=file_get_contents($chemin_fichier);
                
                if($contenu !== false){

                    $donnees_retournees[__xva]['contenu_du_fichier']=$contenu;
                    $donnees_retournees[__xst]=__xsu;

                }else{

                    $donnees_retournees[__xsi][__xer][]='le source n\'a pu être lu du disque "' . $tt116[__xva][0]['T0.chp_nom_source'] . '" [' . __LINE__ . ']';
                }


            }else{

                $donnees_retournees[__xsi][__xer][]='le source n\'a pu être lu du disque "' . $tt116[__xva][0]['T0.chp_nom_source'] . '" [' . __LINE__ . ']';
            }


        }

    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_modifier" [' . __LINE__ . ']';*/
        /* return(array(__xst=>__xer));*/
        require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
        $dossier_ancien=$obj_doss->construire_chemin($xva_avant['T0.chx_dossier_id_source']);
        
        if($dossier_ancien[__xst] === __xsu){

            
            if(!is_dir($dossier_ancien[__xva]['chemin_absolu'])){

                /*
                  le dossier de ce source n'existe pas encore donc on ne fait rien
                */

            }else{

                $ancien_chemin=$dossier_ancien[__xva]['chemin_absolu'] . $xva_avant['T0.chp_nom_source'];
                
                if(!is_file($ancien_chemin)){

                    /*
                      le fichier source n'existe pas encore donc on ne fait rien
                    */

                }else{

                    
                    if(((int)($form['chx_dossier_id_source'])) === $xva_avant['T0.chx_dossier_id_source']){

                        /*
                          si on ne fait que renommer le fichier dans le même dossier
                        */
                        
                        if($form['chp_nom_source'] !== $xva_avant['T0.chp_nom_source']){

                            
                            if(!rename($ancien_chemin,$dossier_ancien[__xva]['chemin_absolu'] . $form['chp_nom_source'])){

                                $donnees_retournees[__xsi][__xdv][]=' attention, le fichier physique n\'a pas pu être ronommé [' . __LINE__ . ']';

                            }


                        }


                    }else{

                        $dossier_nouveau=$obj_doss->construire_chemin($form['chx_dossier_id_source']);
                        
                        if($dossier_nouveau[__xst] === __xsu){

                            
                            if(is_dir($dossier_nouveau[__xva]['chemin_absolu'])){

                                $nouveau_chemin=$dossier_nouveau[__xva]['chemin_absolu'] . $form['chp_nom_source'];
                                
                                if(!rename($ancien_chemin,$nouveau_chemin)){

                                    $donnees_retournees[__xsi][__xdv][]=' attention, le fichier physique n\'a pas pu être ronommé [' . __LINE__ . ']';

                                }


                            }


                        }

                    }

                }

            }


        }

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
    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        /* $donnees_retournees[__xsi][__xdv][]='AFR ajouter ou pas des "actions_apres_supprimer" [' . __LINE__ . ']';*/
        require_once(__RACINE_PGMS__ . 'c_dossiers1.php');
        $obj_dossier_source=new c_dossiers1($mat,$d,$donnees_retournees,$donnees_recues);
        $chemin_dossier_source=$obj_dossier_source->construire_chemin($__xva['T0.chx_dossier_id_source']);
        
        if($chemin_dossier_source[__xst] === __xsu){

            $chemin_fichier_source=$chemin_dossier_source[__xva]['chemin_absolu'] . $__xva['T0.chp_nom_source'];

        }else{

            $donnees_retournees[__xsi][__xer][]='erreur sur la construction du chemin pour le source ' . $tt116[__xva][0]['T0.chx_dossier_id_source'] . ' [' . __LINE__ . ']';
            return array( __xst => __xer);
        }

        sauvegarder_et_supprimer_fichier($chemin_fichier_source);
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
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        /* $donnees_retournees[__xsi][__xif][]='AFR ajouter ou pas des "tests_avant_creer" [' . __LINE__ . ']'; */
        /* return array(__xst => __xer);*/
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function action_apres_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nouvel_id){
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
        $form['chi_id_source']=is_null($form['chi_id_source']) ? null : (int)($form['chi_id_source']);
        $form['che_binaire_source']=is_null($form['che_binaire_source']) ? null : (int)($form['che_binaire_source']);
        $form['chx_dossier_id_source']=is_null($form['chx_dossier_id_source']) ? null : (int)($form['chx_dossier_id_source']);
        $form['che_contient_version_source']=is_null($form['che_contient_version_source']) ? null : (int)($form['che_contient_version_source']);
        
        if(is_null($form['chx_dossier_id_source']) || $form['chx_dossier_id_source'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "dossier id" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_nom_source']) || $form['chp_nom_source'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->test_du_nom_de_fichier1($form['chp_nom_source'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "nom" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($form['che_binaire_source']) || $form['che_binaire_source'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "binaire" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['che_contient_version_source']) || $form['che_contient_version_source'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "contient version" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array(/**/
                'T0_chi_id_source' => $form['chi_id_source']
            ),
            $donnees_retournees
        );
        
        if($tt116[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt116[__xst] === __xsu && count($tt116[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt116[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt163=/*sql_inclure_deb*/
                /* sql_163()
                UPDATE b1.tbl_sources SET 
                   `chp_nom_source` = :n_chp_nom_source , 
                   `che_binaire_source` = :n_che_binaire_source , 
                   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
                   `cht_rev_source` = :n_cht_rev_source , 
                   `cht_genere_source` = :n_cht_genere_source , 
                   `cht_commentaire_source` = :n_cht_commentaire_source , 
                   `che_contient_version_source` = :n_che_contient_version_source , 
                   `che_autorisation_globale_source` = :n_che_autorisation_globale_source
                WHERE `chi_id_source` = :c_chi_id_source ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_163()*/ 163,
                array(
                    /**/
                    'c_chi_id_source' => $tt116[__xva][0]['T0.chi_id_source'],
                    'n_chx_dossier_id_source' => $form['chx_dossier_id_source'],
                    'n_chp_nom_source' => $form['chp_nom_source'],
                    'n_cht_commentaire_source' => $form['cht_commentaire_source'],
                    'n_cht_rev_source' => $form['cht_rev_source'],
                    'n_cht_genere_source' => $form['cht_genere_source'],
                    'n_che_binaire_source' => $form['che_binaire_source'],
                    'n_che_contient_version_source' => $form['che_contient_version_source'],
                    'n_che_autorisation_globale_source' => $form['che_autorisation_globale_source']
                ),
                $donnees_retournees
            );
            
            if($tt163[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt116[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt116=/*sql_inclure_deb*/
                /* sql_116()
                SELECT 
                `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
                `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
                 FROM b1.tbl_sources T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
                
                WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_116()*/ 116,
                array(/**/
                    'T0_chi_id_source' => $form['chi_id_source']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt116;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt116;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_source=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_source)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_source'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_source=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_source , true ) . '</pre>' ; exit(0);*/
        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array(/**/
                'T0_chi_id_source' => $chi_id_source
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt116 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt116;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_source('.$chi_id_source.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_source=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_source)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_source'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_source=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_source(' . $chi_id_source . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_source , true ) . '</pre>' ; exit(0);*/
        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array(/**/
                'T0_chi_id_source' => $chi_id_source
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt116 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt116;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array(/**/
                'T0_chi_id_source' => $form['chi_id_source']
            ),
            $donnees_retournees
        );
        
        if($tt116[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt116[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt118=/*sql_inclure_deb*/
            /* sql_118()
            DELETE FROM b1.tbl_sources
            WHERE `chi_id_source` = :chi_id_source ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_118()*/ 118,
            array(/**/
                'chi_id_source' => $tt116[__xva][0]['T0.chi_id_source']
            ),
            $donnees_retournees
        );
        
        if($tt118[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt116[__xva][0]);
        
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
        $chi_id_source=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_source'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_source=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_source , true ) . '</pre>' ; exit(0);*/
        $tt116=/*sql_inclure_deb*/
            /* sql_116()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_116()*/ 116,
            array(/**/
                'T0_chi_id_source' => $chi_id_source
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt116 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt116;
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
        
        if(is_null($form['chx_dossier_id_source']) || $form['chx_dossier_id_source'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "dossier id" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chp_nom_source']) || $form['chp_nom_source'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__test=$GLOBALS['__fnt1']->test_du_nom_de_fichier1($form['chp_nom_source'],$donnees_retournees);
        
        if($__test[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='erreur sur le champ "nom" [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($form['che_binaire_source']) || $form['che_binaire_source'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur "binaire" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(
                    /**/
                    'chx_dossier_id_source' => $form['chx_dossier_id_source'],
                    'chp_nom_source' => $form['chp_nom_source'],
                    'cht_commentaire_source' => $form['cht_commentaire_source'],
                    'cht_rev_source' => $form['cht_rev_source'],
                    'cht_genere_source' => $form['cht_genere_source'],
                    'che_binaire_source' => $form['che_binaire_source']
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
        
        if($tt117[__xst] === __xsu && $tt117['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt117['nouvel_id']);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt117['nouvel_id']);
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
        $criteres115=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres115[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres115 , true ) . '</pre>' ; exit(0);*/
        $tt115=/*sql_inclure_deb*/
            /* sql_115()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE ( / *** *** / `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
               AND `T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chi_id_source` > :T0_chi_id_source2
               AND `T0`.`chi_id_source` <= :T0_chi_id_source3
               AND `T0`.`che_binaire_source` = :T0_che_binaire_source
               AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
               AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
               AND `T0`.`che_contient_version_source` = :T0_che_contient_version_source
               AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source) 
            ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_115()*/ 115,
            $criteres115,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt115[__xst]===__xsu && count($tt115[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt115[__xst] === __xsu && count($tt115[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres115['debut']=$__debut;
            $tt115=/*sql_inclure_deb*/
                /* sql_115()
                SELECT 
                `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
                `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
                 FROM b1.tbl_sources T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
                
                WHERE ( / *** *** / `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
                   AND `T0`.`chi_id_source` = :T0_chi_id_source
                   AND `T0`.`chi_id_source` > :T0_chi_id_source2
                   AND `T0`.`chi_id_source` <= :T0_chi_id_source3
                   AND `T0`.`che_binaire_source` = :T0_che_binaire_source
                   AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
                   AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
                   AND `T0`.`che_contient_version_source` = :T0_che_contient_version_source
                   AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source) 
                ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_115()*/ 115,
                $criteres115,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt115 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt115 = <pre>' . var_export( $tt115 , true ) . '</pre>' ; exit(0);*/
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
        $donnees_retournees[__xva][$this->fonction_liste]=$tt115;
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