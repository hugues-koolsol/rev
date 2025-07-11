<?php
class c_projets1{
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
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_projets1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

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

                    
                    if($action1 === 'page_projets_editer1'
                       || $action1 === 'page_projets_creer1'
                       || $action1 === 'page_projets_supprimer1'
                       || $action1 === 'page_projets_liste1'
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO action1 non traitée "' . $action1 . '"';
                    }


                }else if($conteneur1 === 'vv_projets_modifier1'
                   || $conteneur1 === 'vv_projets_creer1'
                   || $conteneur1 === 'vv_projets_supprimer1'
                   || $conteneur1 === 'vv_projets_filtre1'
                ){

                    $this->$conteneur1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );

                }else{

                    $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $donnees_recues ' . var_export($donnees_recues,true);
                }

                break;

            }

        }
    }
    /*
      =============================================================================================================
    */
    public function desactiver2(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . ' <pre>'.var_export( $mat , true ) . '</pre>';*/
        $l01=count($mat);
        $chi_id_projet=0;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_projets1.desactiver2' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'chi_id_projet' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        
                        if(is_numeric($mat[$j + 1][1])){

                            $chi_id_projet=(int)($mat[$j + 1][1]);

                        }


                    }

                }

            }

        }
        
        if($chi_id_projet === 0){

            unset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet']);
            unset($_SESSION[__X_CLE_APPLICATION]['chx_dossier_requetes_projet']);
            unset($_SESSION[__X_CLE_APPLICATION]['chx_dossier_menus_projet']);
            unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']);
            unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_menus']);
            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur,  projet = ' . $chi_id_projet;
            $donnees_retournees[__xbo]=obtenir_les_menus();
            return;

        }

        unset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet']);
        unset($_SESSION[__X_CLE_APPLICATION]['chx_dossier_requetes_projet']);
        unset($_SESSION[__X_CLE_APPLICATION]['chx_dossier_menus_projet']);
        unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']);
        unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_menus']);
        $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(vv_projet_en_cours),innerHTML(0)))';
        $donnees_retournees[__xva]['php_des_sql']=array();
        $donnees_retournees[__xbo]=obtenir_les_menus();
        $donnees_retournees[__xst]=__xsu;
        $this->page_projets_liste1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
    }
    /*
      =============================================================================================================
    */
    function chemin_de_id_dossier($chi_id_dossier,$db){
        
        if($db === null){


        }

        $tt=/*sql_inclure_deb*/
            /* sql_66()
            SELECT 
            `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier`
             FROM tbl_dossiers T0
            WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
               AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(66,array( 'T0_chi_id_dossier' => $chi_id_dossier, 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),$donnees_retournees,$db);
        
        if($tt[__xst] === __xsu){


        }else{

            return array( '__xst' => __xer, '__xme' => 'problème sur construire_chemin [' . __LINE__ . ']');
        }

        $chemin='';
        $continuer=100;
        do{
            $continuer--;
            
            if($tt[__xst] === __xsu){

                
                if($tt[__xva][0][1] === null){

                    $continuer=0;
                    break;

                }else{

                    $chemin=DIRECTORY_SEPARATOR . $tt[__xva][0][0] . $chemin;
                    $tt=/*sql_inclure_deb*/
                        /* sql_66()
                        SELECT 
                        `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier`
                         FROM tbl_dossiers T0
                        WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
                           AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
                        ;
                        */
                        /*sql_inclure_fin*/
                        $this->sql0->sql_iii(66,array( 'T0_chi_id_dossier' => $tt[__xva][0]['T0.chx_parent_dossier'], 'T0_chx_projet_dossier' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),$donnees_retournees,$db);
                }


            }else{

                return array( '__xst' => __xer, '__xme' => 'problème sur construire_chemin [' . __LINE__ . ']');
            }

        }while($continuer > 0);
        
        if(__X_CLE_APPLICATION === 'rev_2' && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1){

            /*
              quand on est sur l'env 2, le chemin absolu commence en rev_2;
            */
            $chemin=__X_CLE_APPLICATION . $chemin;

        }else{

            $chemin='rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . $chemin;
        }

        $chemin_absolu=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . $chemin;
        return array( '__xst' => __xsu, '__xva' => array( 'chemin_absolu' => $chemin_absolu, 'chemin_relatif' => $chemin));
    }
    /*
      =============================================================================================================
    */
    public function activer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . ' <pre>'.var_export( $mat , true ) . '</pre>';*/
        $l01=count($mat);
        $chi_id_projet=0;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_projets1.activer1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    /* $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . ' <pre>'.var_export( $mat[$j][1] , true ) . '</pre>'; */
                    
                    if($mat[$j][1] === 'chi_id_projet' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        
                        if(is_numeric($mat[$j + 1][1])){

                            $chi_id_projet=(int)($mat[$j + 1][1]);

                        }


                    }

                }

            }

        }
        
        if($chi_id_projet === 0){

            unset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet']);
            unset($_SESSION[__X_CLE_APPLICATION]['chx_dossier_requetes_projet']);
            unset($_SESSION[__X_CLE_APPLICATION]['chx_dossier_menus_projet']);
            unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']);
            unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_menus']);
            $donnees_retournees[__x_signaux][__xer][]=' erreur [' . __LINE__ . '] ';
            $donnees_retournees[__xbo]=obtenir_les_menus();
            return;

        }

        unset($_SESSION[__X_CLE_APPLICATION]['chx_dossier_requetes_projet']);
        unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']);
        unset($_SESSION[__X_CLE_APPLICATION]['chx_dossier_menus_projet']);
        unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_menus']);
        $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']=$chi_id_projet;
        /*
          il faut mettre à jour le dossier des requetes ($_SESSION[__X_CLE_APPLICATION]['chx_dossier_requetes_projet']) et charger la liste des requetes
          
        */
        
        if($chi_id_projet === 1){

            $_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']=REPERTOIRE_RACINE_DES_SQL;
            $_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_menus']=REPERTOIRE_DU_PROJET;
            /* .DIRECTORY_SEPARATOR.'_sqls';*/

        }else{

            $GLOBALS[__BDD][$chi_id_projet]=array(
                'id' => $chi_id_projet,
                'nom_bdd' => 'bdd_' . $chi_id_projet . '.sqlite',
                PREFIXE_BDD => 'bdd_' . $chi_id_projet . '',
                'fournisseur' => 'sqlite',
                'initialisation_bdd' => array( 'PRAGMA encoding = "UTF-8";', 'PRAGMA journal_mode=WAL;', 'PRAGMA foreign_keys=ON;'),
                LIEN_BDD => null
            );
            $chemin_bdd=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_' . $chi_id_projet . '.sqlite';
            
            $db=new SQLite3($chemin_bdd);
            $GLOBALS[__BDD][$chi_id_projet][LIEN_BDD]=$db;
            $tt60=/*sql_inclure_deb*/
                /* sql_60()
                SELECT 
                `T0`.`chx_dossier_requetes_projet`
                 FROM tbl_projets T0
                WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(60,array( 'T0_chi_id_projet' => $chi_id_projet),$donnees_retournees,$db);
            
            if($tt60[__xst] === __xsu && count($tt60[__xva]) === 1){

                
                if($tt60[__xva][0][0] === null){


                }else{

                    /*
                      $donnees_retournees[__x_signaux][__xal][]=__LINE__.' '.var_export($tt60[__xva][0][0],true);
                      return;
                    */
                    $chemin=$this->chemin_de_id_dossier($tt60[__xva][0][0],$db);
                    /*
                      $donnees_retournees[__x_signaux][__xal][]=__LINE__.' '.var_export($chemin,true);
                      return;
                    */
                    
                    if($chemin[__xst] === __xsu){

                        $_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']=$chemin[__xva]['chemin_absolu'];

                    }
                }

                if($tt60[__xva][0][1] === null){


                }else{

                    /*
                      $donnees_retournees[__x_signaux][__xal][]=__LINE__.' '.var_export($tt60[__xva][0][0],true);
                      return;
                    */
                    $chemin=$this->chemin_de_id_dossier($tt60[__xva][0][1],$db);
                    /*
                      $donnees_retournees[__x_signaux][__xal][]=__LINE__.' '.var_export($chemin,true);
                      return;
                    */
                    
                    if($chemin[__xst] === __xsu){

                        $_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_menus']=$chemin[__xva]['chemin_absolu'];

                    }
                }
            }
        }
        
        if(isset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'])){

            $chemin_fichier_php_des_sql=$_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes'] . DIRECTORY_SEPARATOR . 'rev_php_des_sql.php';
            
            if(is_file($chemin_fichier_php_des_sql)){

                include($chemin_fichier_php_des_sql);
                $donnees_retournees[__xva]['php_des_sql']=$php_des_sql;
                /* $tableau_contenu_js;*/

            }else{

                $donnees_retournees[__xva]['php_des_sql']=array();
            }


        }else{

            $donnees_retournees[__xva]['php_des_sql']=array();
        }

        $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(vv_projet_en_cours),innerHTML(' . $chi_id_projet . ')))';
        $donnees_retournees[__xbo]=obtenir_les_menus();
        $donnees_retournees[__xst]=__xsu;
        $this->page_projets_liste1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
    }
    /*
      =============================================================================================================
    */
    public function creer_les_repertoires(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . ' <pre>'.var_export( $mat , true ) . '</pre>';*/
        $l01=count($mat);
        $chi_id_projet=0;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_projets1.creer_les_repertoires' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    /* $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . ' <pre>'.var_export( $mat[$j][1] , true ) . '</pre>'; */
                    
                    if($mat[$j][1] === 'chi_id_projet' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        
                        if(is_numeric($mat[$j + 1][1])){

                            $chi_id_projet=(int)($mat[$j + 1][1]);

                        }


                    }

                }

            }

        }
        
        if($chi_id_projet === 0){

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur,  projet = ' . $chi_id_projet;
            return;

        }

        $chemin_du_repertoire_racine=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . $chi_id_projet;
        $tab_repertoires=array(/**/
            'rev_' . $chi_id_projet,
            'rev_' . $chi_id_projet . DIRECTORY_SEPARATOR . '__client',
            'rev_' . $chi_id_projet . DIRECTORY_SEPARATOR . '__serveur'
        );
        foreach($tab_repertoires as $k1 => $nom_du_repertoire_a_creer){
            /* $nom_du_repertoire='rev_'.$chi_id_projet;*/
            $chemin_du_repertoire=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . $nom_du_repertoire_a_creer;
            
            if(is_dir($chemin_du_repertoire)){


            }else{

                
                if((@mkdir($chemin_du_repertoire,0777))){


                }else{

                    $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' création du répertoire "' . $nom_du_repertoire_a_creer . '" impossible ';
                    return;
                }

            }

        }
        $tab_fichiers_repertoire_racine_de_l_application=[ '.htaccess', 'index.html', 'page404.html'];
        foreach($tab_fichiers_repertoire_racine_de_l_application as $k1 => $nom_du_fichier_a_creer){
            
            if($contenu_fichier=file_get_contents(REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev' . '_1' . DIRECTORY_SEPARATOR . $nom_du_fichier_a_creer)
            ){

                $nom_de_fichier=$chemin_du_repertoire_racine . DIRECTORY_SEPARATOR . $nom_du_fichier_a_creer;
                $contenu_fichier=str_replace('rev' . '_1','rev_' . $chi_id_projet,$contenu_fichier);
                
                if(file_put_contents($nom_de_fichier,$contenu_fichier) === false){

                    $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' le fichier "' . 'rev_' . $chi_id_projet . DIRECTORY_SEPARATOR . $nom_du_fichier_a_creer . '" n\'a pas pu être écrit ';
                    return;

                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' le fichier "' . 'rev' . '_1' . DIRECTORY_SEPARATOR . $nom_du_fichier_a_creer . '" n\'a pas pu être lu ';
                return;
            }

        }
        $tab_fichiers_repertoire_client=[ '.htaccess', 'page404.html'];
        foreach($tab_fichiers_repertoire_client as $k1 => $nom_du_fichier_a_creer){
            
            if($contenu_fichier=file_get_contents(REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev' . '_1' . DIRECTORY_SEPARATOR . '__client' . DIRECTORY_SEPARATOR . $nom_du_fichier_a_creer)
            ){

                $nom_de_fichier=$chemin_du_repertoire_racine . DIRECTORY_SEPARATOR . '__client' . DIRECTORY_SEPARATOR . $nom_du_fichier_a_creer;
                $contenu_fichier=str_replace('rev' . '_1','rev_' . $chi_id_projet,$contenu_fichier);
                
                if(file_put_contents($nom_de_fichier,$contenu_fichier) === false){

                    $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' le fichier "' . 'rev_' . $chi_id_projet . DIRECTORY_SEPARATOR . $nom_du_fichier_a_creer . '" n\'a pas pu être écrit ';
                    return;

                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' le fichier "' . 'rev' . '_1' . DIRECTORY_SEPARATOR . $nom_du_fichier_a_creer . '" n\'a pas pu être lu ';
                return;
            }

        }
        $contenu_de_la_page_index=<<<EOT
<?php
if(!ob_start("ob_gzhandler")){
    ob_start();
}
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>rev</title>
        <meta name="description" content="contenu de la description" />
        <style type="text/css" id="vv_style">
*,*::before,*::after{box-sizing:border-box;}
html{background:linear-gradient(to bottom, #ECEFF1 0%, #DBDEE0 100%);min-height:100%;}
body{
    font-size:16px;
    max-width:800px;
    border:0;
    color:#263238;
    font-family:verdana;
    margin:0 auto;
    overflow-y:scroll;
    padding-left:0;
    padding-right:0;
    padding-top:35px;
}
h1 {
    text-shadow: #ccc 1px 1px 1px;
    text-align: center;
    color: red;
}
        </style>
        <script type="text/javascript">
//<![CDATA[
//<source_javascript_rev>
const __date_de_debut_des_traitements=performance.now();
//</source_javascript_rev>
//]]>
</script>
    </head>
    <body id="vv_body">
        <h1>Ca fonctionne :-]</h1>
    </body>
</html>
EOT;
        $nom_de_fichier=$chemin_du_repertoire_racine . DIRECTORY_SEPARATOR . '__client' . DIRECTORY_SEPARATOR . 'index.php';
        
        if(file_put_contents($nom_de_fichier,$contenu_de_la_page_index) === false){

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' le fichier "' . 'rev_' . $chi_id_projet . DIRECTORY_SEPARATOR . 'index.php' . '" n\'a pas pu être écrit ';
            return;

        }

        $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' l\'environnement de développement "' . $chi_id_projet . '" a été créé ';
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function vv_projets_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);
        */
        $page_projets_liste1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_projets_liste1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_projets_liste1=true;

            }

        }
        $nouvel_id=0;
        $donnees_sql=array( array(/**/
                    'chp_nom_projet' => $donnees_recues[__xva]['chp_nom_projet'],
                    'chp_commentaire_projet' => $donnees_recues[__xva]['chp_commentaire_projet']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt36=/*sql_inclure_deb*/
            /* sql_36()
            / ***meta(sur_base_de_reference(1))*** /
            
            INSERT INTO b1.`tbl_projets`(
                `chp_nom_projet` , 
                `chp_commentaire_projet`
            ) VALUES (
                :chp_nom_projet , 
                :chp_commentaire_projet
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_36()*/ 36,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt36[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de l\'insertion';

        }else if($tt36['changements'] === 1){

            $nouvel_id=$tt36['nouvel_id'];
            /*
              ok, tout va bien
            */

        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune modification efféctuée';
            return;
        }

        /*
          on peut créer la nouvelle base de description du projet
          
        */
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $nouvel_id , true ) . '</pre>' ; exit(0);
        */
        
        if($nouvel_id > 2){

            $chemin_base=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_' . $nouvel_id . '.sqlite';
            
            if(is_file($chemin_base)){

                /*
                  pourquoi ce fichier existe ?
                */
                $tt48=/*sql_inclure_deb*/
                    /* sql_45()
                    / ***meta(tester_les_dependances_dans_le_php(1))*** /
                    
                    DELETE FROM b1.tbl_projets
                    WHERE (`chi_id_projet` = :chi_id_projet) ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_45()*/ 45,
                    array( 'chi_id_projet' => $nouvel_id),
                    $donnees_retournees
                );
                $donnees_retournees[__x_signaux][__xer][]='le fichier la base de donnée du projet existe déjà [' . __LINE__ . ']';
                return;

            }

            /*
              on crée un clone de la base système du projet 1 qui contiendra tout le projet nnn
            */
            $chemin_base=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_' . $nouvel_id . '.sqlite';
            try{
                $db1temp=new SQLite3($chemin_base);
            }catch(Exception $e){
                $donnees_retournees[__x_signaux][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                return;
            }
            $chemim_structure=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_1.sqlite._structure.sql';
            $source_sql=@file_get_contents($chemim_structure);
            
            if($source_sql !== false){

                try{
                    $ret1=$db1temp->exec($source_sql);
                }catch(Exception $e){
                    $donnees_retournees[__x_signaux][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                    return;
                }

            }else{

                $donnees_retournees[__x_signaux][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                return;
            }

            $chemim_index=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_1.sqlite._index.sql';
            $source_sql=@file_get_contents($chemim_index);
            
            if($source_sql !== false){

                try{
                    $ret1=$db1temp->exec($source_sql);
                }catch(Exception $e){
                    $donnees_retournees[__x_signaux][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                    return;
                }

            }else{

                $donnees_retournees[__x_signaux][__xer][]=$e->getMessage() . ' [' . __METHOD__ . ':' . __LINE__ . '] ';
                return;
            }

            $tt56=/*sql_inclure_deb*/
                /* sql_56()
                INSERT INTO `tbl_projets`(
                    `chi_id_projet` , 
                    `chp_nom_projet`
                ) VALUES (
                    :chi_id_projet , 
                    :chi_id_projet
                );
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_56()*/ 56,
                array( 'chi_id_projet' => $nouvel_id),
                $donnees_retournees,
                $db1temp
            );
            /*
              on tente de créer le répertoire racine
            */
            $reprendre_les_fido=false;
            $une_erreur=false;
            $chemin=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . $nouvel_id;
            
            if(is_dir($chemin)){

                $donnees_retournees[__x_signaux][__xal][]='le dossier racine existe déjà, il faudra éventuellement reprendre ses fidos [' . __LINE__ . ']';
                $reprendre_les_fido=true;

            }else{

                
                if((@mkdir(REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . $nouvel_id))){


                }else{

                    $une_erreur=true;
                }

            }

            
            if($une_erreur === true){

                $donnees_retournees[__x_signaux][__xer][]='erreur lors de la création du dossier racine [' . __LINE__ . ']';
                return;

            }

            /*
              =============================================================================================
              on insère le nouveau dossier racine en base
              =============================================================================================
            */
            $donnees_sql=array(
                /**/
                'chi_id_dossier' => 1,
                'chx_projet_dossier' => $nouvel_id,
                'chp_nom_dossier' => null,
                'chx_parent_dossier' => null
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
            $tt2=/*sql_inclure_deb*/
                /* sql_59()
                INSERT INTO `tbl_dossiers`(
                    `chi_id_dossier` , 
                    `chx_projet_dossier` , 
                    `chp_nom_dossier` , 
                    `chx_parent_dossier`
                ) VALUES (
                    :chi_id_dossier , 
                    :chx_projet_dossier , 
                    :chp_nom_dossier , 
                    :chx_parent_dossier
                );
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_59()*/ 59,
                $donnees_sql,
                $donnees_retournees,
                $db1temp
            );
            
            if($tt2[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xal][]='Attention, Erreur lors de l\'insertion du dossier racine en base [' . __LINE__ . ']';
                $une_erreur=true;

            }else{

                $id_dossier_racine=1;
            }

            /* $donnees_retournees[__x_signaux][__xdv][]=var_export( $une_erreur , true) . '['.__LINE__.']'; */
            
            if($une_erreur === true){

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de la suppression';

            }

            
            if(false && $reprendre_les_fido){

                $liste_des_fido=scandir($chemin);
                foreach($liste_des_fido as $k1 => $v1){
                    
                    if($v1 === '.' || $v1 === '..'){


                    }else{

                        
                        if(is_dir($chemin . DIRECTORY_SEPARATOR . $v1)){

                            $donnees_sql=array( array(/**/
                                        'chx_projet_dossier' => $nouvel_id,
                                        'chp_nom_dossier' => $v1,
                                        'chx_parent_dossier' => $id_dossier_racine === '' ? NULL : $id_dossier_racine,
                                    ));
                            /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
                            $creation_dossier=/*sql_inclure_deb*/
                                /* sql_37()
                                INSERT INTO b1.`tbl_dossiers`(
                                    `chx_projet_dossier` , 
                                    `chp_nom_dossier` , 
                                    `chx_parent_dossier`
                                ) VALUES (
                                    :chx_projet_dossier , 
                                    :chp_nom_dossier , 
                                    :chx_parent_dossier
                                );
                                */
                                /*sql_inclure_fin*/
                                $this->sql0->sql_iii(
                                 /*sql_37()*/ 37,
                                $donnees_sql,
                                $donnees_retournees
                            );

                        }else{

                        }

                    }

                }

            }

            $donnees_retournees[__xst]=__xsu;
            
            if($page_projets_liste1 === true || $nouvel_id > 2){

                $this->page_projets_liste1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action='chi_id_projet(' . $tt36['nouvel_id'] . ')';
                $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($action);
                $this->page_projets_editer1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);
                $donnees_retournees[__x_action]='c_projets1.formulaire1(action1(page_projets_editer1),chi_id_projet(' . $tt36['nouvel_id'] . '))';
            }


        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_projets_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /* $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues[__xva],true);*/
        $page_projets_liste1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_projets_liste1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_projets_liste1=true;

            }

        }
        
        if($donnees_recues[__xva]['chi_id_projet'] === 1){

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' le projet 1 ne peut être supprimée';
            return;

        }

        /*
          Il faut vérifier 
          1°] que le répertoire du projet est vide
        */
        $chemin_absolu=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . $donnees_recues[__xva]['chi_id_projet'];
        
        if(is_dir($chemin_absolu)){

            $liste_des_fidos=scandir($chemin_absolu);
            /* . et .. */
            
            if(count($liste_des_fidos) === 2){

                /*
                  ok, le dossier du projet est vide
                */

            }else{

                $donnees_retournees[__x_signaux][__xer][]='le projet contient encore des fichiers ou des dossier [' . __LINE__ . ']';
                return;
            }


        }

        /*
          Il faut vérifier que les tables dépendantes sont vides
          
          tbl_projets => tbl_dossiers
          => tbl_bdds
          
          select count[*] from tbl_dossiers where chx_projet_dossier = $donnees_recues[__xva]['chi_id_projet']
          select count[*] from tbl_bdds where chx_projet_id_basedd = $donnees_recues[__xva]['chi_id_projet']
        */
        $dependances=$this->sql0->sql_dependances(
             /**/ array(
                /**/
                'table_parente' => 'tbl_projets',
                'id_enregistrement' => $donnees_recues[__xva]['chi_id_projet'],
                'champ_parent' => 'chi_id_projet',
                'id_bdd' => $donnees_recues[__xva]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($dependances[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='il existe une erreur sur les dépendances [' . __LINE__ . ']';
            return;

        }else{

            
            if($dependances[__xva]['nombre_total_des_dependances'] === 0){

                /* plus aucune dépendances, tout bon*/

            }else if($dependances[__xva]['nombre_total_des_dependances'] === 1){

                /*
                  ici, le dossier racine a été créé en même temps que la création du projet
                  si il existe, il faut aller vérifier qu'il est vide
                  si il n'esiste pas, c'est tout bon
                */
                $tt2=/*sql_inclure_deb*/
                    /* sql_69()
                    SELECT 
                    `T0`.`chi_id_dossier`
                     FROM b1.tbl_dossiers T0
                    WHERE ( / *** *** / `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
                       AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
                    ;
                    */
                    /*sql_inclure_fin*/
                    $this->sql0->sql_iii(
                     /*sql_69()*/ 69,
                    array(/**/
                        'T0_chx_projet_dossier' => $donnees_recues[__xva]['chi_id_projet'],
                        'T0_chx_parent_dossier' => null
                    ),
                    $donnees_retournees
                );
                
                if($tt2[__xst] !== __xsu){

                    $donnees_retournees[__x_signaux][__xer][]='Erreur sur requête de sélection des dossiers de ce projet [' . __LINE__ . ']';
                    return;

                }else{

                    /*
                      $donnees_retournees[__x_signaux][__xdv][]='<pre>'.var_export($tt2[__xva]).'</pre> ['.__LINE__.']';
                    */
                    $repertoire=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_' . $donnees_recues[__xva]['chi_id_projet'];
                    /*
                      $donnees_retournees[__x_signaux][__xdv][]='<pre>'.$id_dossier.'</pre> ['.__LINE__.']';
                    */
                    /*
                      $donnees_retournees[__x_signaux][__xdv][]='<pre>'.$repertoire.'</pre> ['.__LINE__.']';
                    */
                    
                    if(is_dir($chemin_absolu)){

                        /*
                          $donnees_retournees[__x_signaux][__xdv][]='<pre></pre> ['.__LINE__.']';
                        */
                        $tt=scandir($chemin_absolu);
                        
                        if(count($tt) === 2){

                            /*c'est tout bon, il n'y a que "." et ".." */

                        }else{

                            $donnees_retournees[__x_signaux][__xer][]='Le dossier racine de ce projet n\'est pas vide [' . __LINE__ . ']';
                            return;
                        }


                    }

                }


            }else{

                $donnees_retournees[__x_signaux][__xer][]='il existe des dépendances [' . __LINE__ . ']';
                
                if(count($dependances[__xva]['liste_des_dependances']) > 0){

                    foreach($dependances[__xva]['liste_des_dependances'] as $k1 => $v1){
                        $donnees_retournees[__x_signaux][__xal][]=$v1['table_dependante'] . ' ' . $v1['nombre_de_dependances'];
                    }

                }

                return;
            }

        }

        $supprime_dossier_racine=/*sql_inclure_deb*/
            /* sql_70()
            DELETE FROM b1.tbl_dossiers
            WHERE `chx_projet_dossier` = :chx_projet_dossier ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_70()*/ 70,
            array(/**/
                'chx_projet_dossier' => $donnees_recues[__xva]['chi_id_projet']
            ),
            $donnees_retournees
        );
        
        if($supprime_dossier_racine[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur de suppression de dossier racine [' . __LINE__ . ']';
            return;

        }

        
        if(is_dir($chemin_absolu)){

            
            if((@rmdir($chemin_absolu))){

                $donnees_retournees[__x_signaux][__xsu][]='le dossier racine a été supprimé du disque [' . __LINE__ . ']';

            }else{

                $donnees_retournees[__x_signaux][__xer][]='Erreur lors de la suppression du dossier racine [' . __LINE__ . ']';
                return;
            }


        }

        /*si l'utilisateur bidouille l'id dans l'interface*/
        $tt=/*sql_inclure_deb*/
            /* sql_34()
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_projets T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
            
            WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_34()*/ 34,
            array( 'T0_chi_id_projet' => $donnees_recues[__xva]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=/*sql_inclure_deb*/
                /* sql_45()
                / ***meta(tester_les_dependances_dans_le_php(1))*** /
                
                DELETE FROM b1.tbl_projets
                WHERE (`chi_id_projet` = :chi_id_projet) ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_45()*/ 45,
                array( 'chi_id_projet' => $tt[__xva][0]['T0.chi_id_projet']),
                $donnees_retournees
            );
            
            if($tt[__xst] !== __xsu){

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de la suppression';

            }else if($tt['changements'] === 1){

                $txtPar='';
                $this->page_projets_liste1($donnees_retournees,$mat,$donnees_recues);
                
                if($donnees_recues[__xva]['chi_id_projet'] > 2){

                    $chemin_base=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_' . $donnees_recues[__xva]['chi_id_projet'] . '.sqlite';
                    $ret=supprimer_fichier($chemin_base,false);

                }

                $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . ' la suppression du projet a été effectuée en bdd';

            }else{

                $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune suppression effectuée';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' aucune suppression effectuée';
        }

        $o1='';
    }
    /*
      =============================================================================================================
    */
    function vv_projets_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txtPar='';
        $nouvelles_valeurs=array( '__num_page' => 0);
        foreach($donnees_recues[__xva] as $k0 => $v0){
            
            if($k0 !== '__num_page'){

                $nouvelles_valeurs[$k0]=$v0;
                
                if(is_numeric($v0)){

                    $txtPar .= $k0 . '(' . $v0 . ')';

                }else{

                    $txtPar .= $k0 . '(\'' . str_replace('\'','\\\'',$v0) . '\')';
                }


            }

        }
        $_SESSION[__X_CLE_APPLICATION]['c_projets1.page_projets_liste1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_projets1.page_projets_liste1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_projets_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_projets_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* exemple de déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__.' TODO $donnees_recues '.var_export($donnees_recues,true);
        */
        $page_projets_liste1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'page_projets_liste1' && $mat[$i][2] === 'f' && $mat[$i][8] === 0){

                $page_projets_liste1=true;

            }

        }
        /*si l'utilisateur bidouille l'id dans l'interface*/
        $tt=/*sql_inclure_deb*/
            /* sql_34()
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_projets T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
            
            WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_34()*/ 34,
            array( 'T0_chi_id_projet' => $donnees_recues[__xva]['chi_id_projet']),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            /*
              $donnees_retournees[__x_signaux][__xer][]=__LINE__ . var_export( $donnees_recues[__xva] , true );
              return;
            */
            $tt=/*sql_inclure_deb*/
                /* sql_48()
                UPDATE b1.tbl_projets SET 
                   `chp_nom_projet` = :n_chp_nom_projet , 
                   `chp_commentaire_projet` = :n_chp_commentaire_projet , 
                   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet
                WHERE `chi_id_projet` = :c_chi_id_projet ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_48()*/ 48,
                array(
                    /**/
                    'c_chi_id_projet' => $tt[__xva][0]['T0.chi_id_projet'],
                    'n_chp_nom_projet' => $donnees_recues[__xva]['chp_nom_projet'],
                    'n_chp_commentaire_projet' => $donnees_recues[__xva]['chp_commentaire_projet'],
                    'n_chx_dossier_requetes_projet' => $donnees_recues[__xva]['chx_dossier_requetes_projet'],
                    'n_chx_dossier_menus_projet' => $donnees_recues[__xva]['chx_dossier_menus_projet']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur lors de la modification';

            }else if($tt['changements'] === 1){

                
                if($donnees_recues[__xva]['chx_dossier_requetes_projet'] === null
                   || $donnees_recues[__xva]['chx_dossier_requetes_projet'] === ''
                ){

                    unset($_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']);

                }else{

                    require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
                    $obj_doss=new c_dossiers1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );
                    $chemin_racine2=$obj_doss->construire_chemin($donnees_recues[__xva]['chx_dossier_requetes_projet']);
                    
                    if($chemin_racine2[__xst] === __xsu){

                        $_SESSION[__X_CLE_APPLICATION]['chp_nom_dossier_requetes']=$chemin_racine2[__xva]['chemin_absolu'];
                        /* $donnees_retournees[__x_signaux][__xal][]='"'.var_export( $donnees_recues[__xva]['chx_dossier_requetes_projet'],true) . '" ' . $_SESSION[__X_CLE_APPLICATION]['dossier_requetes']. ' ['.__LINE__.']';*/

                    }

                }

                
                if($page_projets_liste1 === true){

                    $txtPar='';
                    
                    if(isset($_SESSION[__X_CLE_APPLICATION]['c_projets1.page_projets_liste1'])){

                        foreach($_SESSION[__X_CLE_APPLICATION]['c_projets1.page_projets_liste1'] as $k0 => $v0){
                            
                            if(is_numeric($v0)){

                                $txtPar .= $k0 . '(' . $v0 . ')';

                            }else{

                                
                                if($v0 !== ''){

                                    $txtPar .= $k0 . '(\'' . enti1(str_replace('\\','\\\\',str_replace('\'','\\\'',$v0))) . '\')';

                                }

                            }

                        }

                    }

                    $f='c_projets1.page_projets_liste1(' . $txtPar . ')';
                    $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($f);
                    $this->page_projets_liste1(
                        $donnees_retournees,
                         /*matrice*/ $obj_matrice[__xva],
                        $donnees_recues
                    );

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
    function page_projets_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='';
        $o1 .= '<h1>ajouter un projet <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_projets1.formulaire1(action1(page_projets_liste1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
        $o1 .= '<div id="vv_projets_creer1">' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>projet</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <input  type="text" value="Nom du projet" placeholder="insérez un nom de projet" id="chp_nom_projet" maxlength="64" style="width:100%;max-width:20em;" autocapitalize="off" />' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
        $o1 .= '      <span>commentaire</span>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
        $o1 .= '        <textarea rows="20"  cols="20" id="chp_commentaire_projet" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' . PHP_EOL;
        $o1 .= '      </div>' . PHP_EOL;
        $o1 .= '    </div>' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        /* */
        $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
        $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_projets1.formulaire1(conteneur1(vv_projets_creer1),page_projets_liste1())" title="" >ajouter et revenir à la liste</div>';
        $o1 .= '    <div class="hug_bouton" data-hug_click="c_projets1.formulaire1(conteneur1(vv_projets_creer1))" title="" >ajouter</div>';
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
    function page_projets_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . ' TODO $chi_id_projets '.var_export($chi_id_projets,true);
          return;
        */
        $o1='';
        $chi_id_projets='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_projet' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_projets=$mat[$i + 1][1];
                break;

            }

        }
        
        if($chi_id_projets === 1){

            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_numeric($chi_id_projets) && $chi_id_projets > 1){

            $tt=/*sql_inclure_deb*/
                /* sql_34()
                SELECT 
                `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T1`.`chp_nom_dossier`
                 FROM b1.tbl_projets T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
                
                WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_34()*/ 34,
                array( 'T0_chi_id_projet' => $chi_id_projets),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>supprimer un projet <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_projets1.formulaire1(action1(page_projets_liste1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_projets_supprimer1">' . PHP_EOL;
                $o1 .= '   confirmez voous la suppression du projet <br />id : <b>' . $tt[__xva][0]['T0.chi_id_projet'] . '</b><br />ayant pour nom : <span>' . enti1($tt[__xva][0]['T0.chp_nom_projet']) . ' ?</span> ';
                $o1 .= '   ' . PHP_EOL;
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_projet'] . '" id="chi_id_projet" />' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_projets1.formulaire1(conteneur1(vv_projets_supprimer1),page_projets_liste1())" title="" >Je confirme la suppression</div>';
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
    function page_projets_editer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* déverminage*/
        /*
          $donnees_retournees[__x_signaux][__xif][]='TODO $donnees_recues '.var_export($donnees_recues,true);
        */
        $o1='';
        $chi_id_projets='';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === 'chi_id_projet' && $mat[$i + 1][2] === 'c' && $mat[$i][2] === 'f'){

                $chi_id_projets=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_projets) && $chi_id_projets > 0){

            $tt=/*sql_inclure_deb*/
                /* sql_34()
                SELECT 
                `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T1`.`chp_nom_dossier`
                 FROM b1.tbl_projets T0
                 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet
                
                WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_34()*/ 34,
                array( 'T0_chi_id_projet' => $chi_id_projets),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= '<h1>modifier un projet <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_projets1.formulaire1(action1(page_projets_liste1))" title="revenir à la liste" >⬱</div></h1>' . PHP_EOL;
                $o1 .= '<div id="vv_projets_modifier1">' . PHP_EOL;
                $o1 .= '  <input type="hidden" value="' . $tt[__xva][0]['T0.chi_id_projet'] . '" id="chi_id_projet" />' . PHP_EOL;
                /* */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>nom du projet</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <div><input type="text" id="chp_nom_projet" value="' . enti1($tt[__xva][0]['T0.chp_nom_projet']) . '" size="32" maxlength="64" autocapitalize="off" /></div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  ===========================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>dossier des requetes</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_dossier_requetes_projet']) . '"  id="chx_dossier_requetes_projet" />' . PHP_EOL;
                $o1 .= '        <span id="chx_parent_dossier_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_dossier_requetes_projet'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    
                    if($tt[__xva][0]['T1.chp_nom_dossier'] === null){

                        $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_requetes_projet'] . ') rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . PHP_EOL;

                    }else{

                        $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_requetes_projet'] . ') ' . htmlentities($tt[__xva][0]['T1.chp_nom_dossier']) . PHP_EOL;
                    }

                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_dossier_requetes_projet)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_parent_dossier_libelle)';
                $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
                $parametre_sous_fenetre .= ')';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
                $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  ===========================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>dossier des menus</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '        <input type="hidden" value="' . enti1($tt[__xva][0]['T0.chx_dossier_menus_projet']) . '"  id="chx_dossier_menus_projet" />' . PHP_EOL;
                $o1 .= '        <span id="chx_parent_dossier_menu_libelle">' . PHP_EOL;
                
                if($tt[__xva][0]['T0.chx_dossier_menus_projet'] === null){

                    $o1 .= '*indéfini' . PHP_EOL;

                }else{

                    
                    if($tt[__xva][0]['T2.chp_nom_dossier'] === null){

                        $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_menus_projet'] . ') rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . PHP_EOL;

                    }else{

                        $o1 .= '(' . $tt[__xva][0]['T0.chx_dossier_menus_projet'] . ') ' . htmlentities($tt[__xva][0]['T2.chp_nom_dossier']) . PHP_EOL;
                    }

                }

                $o1 .= '</span>' . PHP_EOL;
                $parametre_sous_fenetre='c_dossiers1.page_dossiers_sous_liste1(';
                $parametre_sous_fenetre .= ' sans_menus1()';
                $parametre_sous_fenetre .= ' nom_champ_dans_parent1(chx_dossier_menus_projet)';
                $parametre_sous_fenetre .= ' nom_libelle_dans_parent1(chx_parent_dossier_menu_libelle)';
                $parametre_sous_fenetre .= ' libelle_si_vide1("*indéfini")';
                $parametre_sous_fenetre .= ')';
                $o1 .= '      <div class="hug_bouton yy__x_signaux_1" ' . PHP_EOL;
                $o1 .= 'data-hug_click="interface1.affiche_sous_fenetre1(' . htmlentities($parametre_sous_fenetre) . ')"  title="selectionner">📁</div>' . PHP_EOL;
                $o1 .= '      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(' . htmlentities($parametre_sous_fenetre) . ')"  title="annuler">🚫</div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                /**/
                $o1 .= '  </div>' . PHP_EOL;
                /*
                  ===========================================================================================================
                */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_libelle1">' . PHP_EOL;
                $o1 .= '      <span>commentaire</span>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '      <div class="yy_conteneur_txtara">' . PHP_EOL;
                $o1 .= '        <textarea rows="20"  cols="20" id="chp_commentaire_projet" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' . enti1($tt[__xva][0]['T0.chp_commentaire_projet']) . '</textarea>' . PHP_EOL;
                $o1 .= '      </div>' . PHP_EOL;
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                /* */
                $o1 .= '  <div class="yy_edition_champ1">' . PHP_EOL;
                $o1 .= '    <div class="yy_edition_valeur1">' . PHP_EOL;
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_projets1.formulaire1(conteneur1(vv_projets_modifier1),chi_id_projet(' . $chi_id_projets . '),page_projets_liste1())" title="" >enregistrer et revenir à la liste</div>';
                $o1 .= '    <div class="hug_bouton" data-hug_click="c_projets1.formulaire1(conteneur1(vv_projets_modifier1),chi_id_projet(' . $chi_id_projets . '))" title="" >enregistrer</div>';
                $o1 .= '    </div>' . PHP_EOL;
                $o1 .= '  </div>' . PHP_EOL;
                $o1 .= '</div>' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }else{

                $donnees_retournees[__x_signaux][__xer][]=' <pre>' . var_export($tt,true) . '</pre> [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]=' [' . __LINE__ . ']';
        }

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
                    $fichier1=str_replace(REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev' . '_1','',$dir1 . DIRECTORY_SEPARATOR . $object);
                    /*
                      les exceptions
                      
                    */
                    
                    if($fichier1 === DIRECTORY_SEPARATOR . '__serveur' . DIRECTORY_SEPARATOR . '__definitions.php'
                       || $fichier1 === DIRECTORY_SEPARATOR . '__client' . DIRECTORY_SEPARATOR . 'index.php'
                    ){

                        $contenu=@file_get_contents($dir1 . DIRECTORY_SEPARATOR . $object);
                        
                        if($contenu === false){

                            return array( __xst => __xer);

                        }

                        $contenu=str_replace('define(\'__X_CLE_APPLICATION\',\'rev' . '_1\');','define(\'__X_CLE_APPLICATION\',\'rev_2\');',$contenu);
                        $contenu=str_replace('rev' . '_1','rev' . '_2',$contenu);
                        
                        if(!(@file_put_contents($dir2 . DIRECTORY_SEPARATOR . $object,$contenu))){

                            return array( __xst => __xer);

                        }

                        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' .  $dir1 . '</pre> <pre>' .  $fichier1 . '</pre>' ; exit(0);*/

                    }else{

                        
                        if((@copy($dir1 . DIRECTORY_SEPARATOR . $object,$dir2 . DIRECTORY_SEPARATOR . $object))){


                        }else{

                            return array( __xst => __xer);
                        }

                    }

                }


            }

        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      on fabrique un clone du projet 1 sur le projet 2 
    */
    function initialiser_projet_2(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /*
          on commence par supprimer tous les fichiers et dossiers sour frev/rev_2 puis on recrée
        */
        $chemin_racine2=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_2';
        $obj=$this->rrmdir($chemin_racine2);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='impossible de supprimer le répertoire racine [' . __LINE__ . ']';
            return;

        }

        
        if(!mkdir($chemin_racine2,0777)){

            $donnees_retournees[__x_signaux][__xer][]='impossible de créer le répertoire racine [' . __LINE__ . ']';
            return;

        }

        $chemin_racine1=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev' . '_1';
        $obj=$this->rcopydir($chemin_racine1,$chemin_racine2);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='impossible de copier les fichiers [' . __LINE__ . ']';
            return;

        }

        $donnees_retournees[__x_signaux][__xsu][]='le projet 2 a été initialisé [' . __LINE__ . ']';
        $donnees_retournees[__xst]=__xsu;
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

                            $liste_des_dossiers[$dir2 . DIRECTORY_SEPARATOR . $object]=array( 'chi_id_dossier' => 0, 'chx_parent_dossier' => 0);

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

                    
                    if($liste_des_dossiers_par_chemin[$dir2]['che_contient_genere_dossier'] === 0){

                        $che_binaire_source=0;
                        $cle=$dir2 . DIRECTORY_SEPARATOR . $object;
                        
                        if(isset($liste_des_sources_binaires[$cle])){

                            $che_binaire_source=1;

                        }

                        $liste_des_sources[]=array(/**/
                            'chp_nom_source' => $object,
                            'chx_dossier_id_source' => $liste_des_dossiers_par_chemin[$dir2]['chi_id_dossier'],
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
    function initialiser_le_clone(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']=1;
        
        if(__X_CLE_APPLICATION !== 'rev_2'){

            $donnees_retournees[__x_signaux][__xer][]=' cette fonction ne peut être utilisée que dans le projet 2 [' . __LINE__ . ']';
            return;

        }

        /* begin transaction */
        $tt1=/*sql_inclure_deb*/
            /* sql_41()
            BEGIN TRANSACTION;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_41()*/ 41,
            array(),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors du begin transaction  [' . __LINE__ . ']';
            return;

        }

        /*
          on récupère les références des les sources binaires
        */
        $liste_des_sources_binaires=array();
        $tt46=/*sql_inclure_deb*/
            /* sql_46()
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source`
             FROM b1.tbl_sources T0
            WHERE (`T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
               AND `T0`.`che_binaire_source` = :T0_che_binaire_source)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_46()*/ 46,
            array( 'T0_chx_projet_id_source' => 1, 'T0_che_binaire_source' => 1),
            $donnees_retournees
        );
        
        if($tt46[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la récupération des sources binaires [' . __LINE__ . ']';
            return;

        }

        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $chemin_racine2=$obj_doss->construire_chemin(1);
        
        if($chemin_racine2[__xst] === __xsu){

            $nom_chemin_racine2=$chemin_racine2[__xva]['chemin_absolu'];
            $nom_chemin_racine1=substr($nom_chemin_racine2,0,-1) . '1';
            /* echo __FILE__ . ' ' . __LINE__ . ' $nom_chemin_racine2 = <pre>' . var_export( $nom_chemin_racine1 , true ) . '</pre>' ; exit(0);*/

        }

        foreach($tt46[__xva] as $k1 => $v1){
            $chemin=$obj_doss->construire_chemin($v1['T0.chx_dossier_id_source']);
            
            if($chemin[__xst] === __xsu){

                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin[__xva]['chemin_absolu'] , true ) . '</pre>' ; exit(0);*/
                $cle=str_replace($nom_chemin_racine2,$nom_chemin_racine2,$chemin[__xva]['chemin_absolu']) . DIRECTORY_SEPARATOR . $v1['T0.chp_nom_source'];
                $liste_des_sources_binaires[$cle]=array( 'che_binaire_source' => 1);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pout le source ' . var_export($v1,true) . ' [' . __LINE__ . ']';
                return;
            }

        }
        /* on supprime le dossier racine du projet 2 */
        $tt1=/*sql_inclure_deb*/
            /* sql_70()
            DELETE FROM b1.tbl_dossiers
            WHERE `chx_projet_dossier` = :chx_projet_dossier ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_70()*/ 70,
            array( 'chx_projet_dossier' => 2),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression du dossier dans la base  [' . __LINE__ . ']';
            return;

        }

        /* on supprime les projets >=2 du projet 2 */
        $tt1=/*sql_inclure_deb*/
            /* sql_57()
            / ***meta(tester_les_dependances_dans_le_php(1))*** /
            
            DELETE FROM b1.tbl_projets
            WHERE `chi_id_projet` >= :chi_id_projet ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_57()*/ 57,
            array( 'chi_id_projet' => 2),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression [' . __LINE__ . ']';
            return;

        }


        /* on supprime les pages du projet 1 */
        $tt1=/*sql_inclure_deb*/
            /* sql_97()
            DELETE FROM b1.tbl_pages
            WHERE (`chx_projet_page` = :chx_projet_page) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_97()*/ 97,
            array( 'chx_projet_page' => 1),
            $donnees_retournees
        );
        

        /* on supprime les sources du projet 1 */
        $tt8=/*sql_inclure_deb*/
            /* sql_8()
            DELETE FROM b1.tbl_sources
            WHERE (`chx_projet_id_source` = :chx_projet_id_source) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_8()*/ 8,
            array( 'chx_projet_id_source' => 1),
            $donnees_retournees
        );
        
        if($tt8[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la suppression des sources [' . __LINE__ . ']';
            return;

        }

        /*
          on crée les dossiers, sauf ceux existants
          
          1°] ceux exiatants
        */
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_dossiers1.php');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $tt23=/*sql_inclure_deb*/
            /* sql_23()
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
             FROM b1.tbl_dossiers T0
            WHERE `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_23()*/ 23,
            array( 'T0_chx_projet_dossier' => 1),
            $donnees_retournees
        );
        
        if($tt23[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la sélection des dossiers [' . __LINE__ . ']';
            return;

        }

        $liste_des_dossiers=array();
        foreach($tt23[__xva] as $k1 => $v1){
            $chemin=$obj_doss->construire_chemin($v1['T0.chi_id_dossier']);
            
            if($chemin[__xst] === __xsu){

                $liste_des_dossiers[$chemin[__xva]['chemin_absolu']]=array( 'chi_id_dossier' => $v1['T0.chi_id_dossier'], 'chx_parent_dossier' => $v1['T0.chx_parent_dossier'], 'che_contient_genere_dossier' => $v1['T0.che_contient_genere_dossier']);

            }else{

                $donnees_retournees[__x_signaux][__xer][]='erreur sur la construction du chemin pout le source ' . $chi_id_source . ' [' . __LINE__ . ']';
                return;
            }

        }
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $liste_des_dossiers , true ) . '</pre>' ; exit(0);
        */
        $chemin_racine2=REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'rev_2';
        $obj=$this->construit_liste_des_dossiers($liste_des_dossiers,$chemin_racine2);
        
        if($obj[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='constitution de la liste des dossiers impossible [' . __LINE__ . ']';
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
                        $tt37=/*sql_inclure_deb*/
                            /* sql_37()
                            INSERT INTO b1.`tbl_dossiers`(
                                `chx_projet_dossier` , 
                                `chp_nom_dossier` , 
                                `chx_parent_dossier`
                            ) VALUES (
                                :chx_projet_dossier , 
                                :chp_nom_dossier , 
                                :chx_parent_dossier
                            );
                            */
                            /*sql_inclure_fin*/
                            $this->sql0->sql_iii(
                             /**/37,
                             array( array( 
                                 'chp_nom_dossier' => $nom_du_dossier, 
                                 'chi_id_dossier' => 1, 
                                 'chx_projet_dossier' => 1, 
                                 'chx_parent_dossier' => $chx_parent_dossier === '' ? NULL : $chx_parent_dossier,
                              )),$donnees_retournees);
                        
                        if($tt37[__xst] !== __xsu){

                            $donnees_retournees[__x_signaux][__xer][]='erreur lors de la création du dossier [' . __LINE__ . ']';
                            return;

                        }

                        $liste_des_dossiers[$k1]['chi_id_dossier']=$tt37['nouvel_id'];
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
        $liste_des_sources=array();
        $liste_des_dossiers_par_chemin=array();
        foreach($liste_des_dossiers as $k1 => $v1){
            $liste_des_dossiers_par_chemin[$k1]=array( 'chi_id_dossier' => $v1['chi_id_dossier'], 'che_contient_genere_dossier' => $v1['che_contient_genere_dossier']);
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
                'chx_dossier_id_source' => $v1['chx_dossier_id_source'] === '' ? NULL : $v1['chx_dossier_id_source'],
                'chp_nom_source' => $v1['chp_nom_source'], 
                'chx_projet_id_source' => 1, 
                'che_binaire_source' => $v1['che_binaire_source']
            );
        }
        $tt23=/*sql_inclure_deb*/
            /* sql_38()
            INSERT INTO b1.`tbl_sources`(
                `chx_dossier_id_source` , 
                `chx_projet_id_source` , 
                `chp_nom_source` , 
                `che_binaire_source`
            ) VALUES (
                :chx_dossier_id_source , 
                :chx_projet_id_source , 
                :chp_nom_source , 
                :che_binaire_source
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_38()*/ 38,
            $tableau_des_inserts,
            $donnees_retournees
        );
        
        if($tt23[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors de l\'insertion des sources [' . __LINE__ . ']';
            return;

        }

        /* commit */
        $tt1=/*sql_inclure_deb*/
            /* sql_42()
            COMMIT;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_42()*/ 42,
            array(),
            $donnees_retournees
        );
        
        if($tt1[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='erreur lors du commit  [' . __LINE__ . ']';
            return;

        }

        unset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet']);
        $donnees_retournees[__xbo]=obtenir_les_menus();
        $this->page_projets_liste1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $donnees_retournees[__xst]=__xsu;
        return;
    }
    /*
      =============================================================================================================
    */
    function page_projets_liste1(&$donnees_retournees,&$mat,&$donnees_recues){
        /* déverminage */
        $__nbMax=10;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . 'TODO $par '.var_export($par,true);
        */
        $par=array();
        $par['T0_chi_id_projet']='';
        $par['T0_chp_nom_projet']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_projets1.page_projets_liste1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        /* $donnees_retournees[__x_signaux][__xdv][]='$mat[$j][1] ='.json_encode( $mat[$j][1] . ' ' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/
                        
                        if($mat[$j][1] === '__num_page'){

                            $par_mat['__num_page']=$mat[$j + 1][1];
                            $par['__num_page']=$mat[$j + 1][1];
                            $numpage=$mat[$j + 1][1];

                        }else if($mat[$j][1] === 'indice_menu'){

                            $par_mat['__num_page']=0;
                            $provenance_menu=true;
                            $par['__num_page']=0;
                            $numpage=0;

                        }else if($mat[$j + 1][1] !== ''){

                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        
        if(!isset($_SESSION[__X_CLE_APPLICATION]['c_projets1.page_projets_liste1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_projets1.page_projets_liste1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_projets1.page_projets_liste1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION]['c_projets1.page_projets_liste1']=$par;
            $par=$_SESSION[__X_CLE_APPLICATION]['c_projets1.page_projets_liste1'];
        }

        $par['T0_chi_id_projet']=$par['T0_chi_id_projet']??'';
        $par['T0_chp_nom_projet']=$par['T0_chp_nom_projet']??'';
        $fonction1='c_projets1.page_projets_liste1';
        $filtre='vv_projets_filtre1';
        $o1='<h1>Liste des projets</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $filtre . '">' . PHP_EOL;
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '      <div><span>nom</span></div>' . PHP_EOL;
        $o1 .= '      <div><input type="text" id="T0_chp_nom_projet" value="' . $par['T0_chp_nom_projet'] . '" size="8" maxlength="64" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_projet" value="' . $par['T0_chi_id_projet'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_projets1.formulaire1(conteneur1(' . $filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_33()
            / ***meta(sur_base_de_reference(1))*** /
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet`
             FROM b1.tbl_projets T0
            WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet
               AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
               AND `T0`.`chp_commentaire_projet` LIKE :T0_chp_commentaire_projet) 
            ORDER BY `T0`.`chi_id_projet` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_33*/ 33,
            array(
                'T0_chi_id_projet' => $par['T0_chi_id_projet'] === '' ? '' : $par['T0_chi_id_projet'],
                'T0_chp_nom_projet' => $par['T0_chp_nom_projet'] === '' ? '' : '' . $par['T0_chp_nom_projet'] . '',
                'T0_chp_commentaire_projet' => '',
                'quantitee' => $__nbMax,
                'debut' => $__debut,
                'page_courante' => basename(__FILE__)
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $o1='';
            $o1 .= '<div>';
            $o1 .= '  <div class="yydanger">Erreur sql</div>';
            $o1 .= '  <pre>' . var_export($tt,true) . '</per>';
            $o1 .= '</div>';
            /* en fonction du déverminage */
            $donnees_retournees[__x_page] .= $o1;
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $tt '.var_export($tt,true);
        */
        $bouton_avant='';
        $afficher_les_boutons_pour_dev_deux=true;
        
        if(__X_CLE_APPLICATION === 'rev_2'){

            /*
              on ne peut pas créer un projet sur l'environnement 2
            */
            $bouton_avant='';
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt[__xva] , true ) . '</pre>' ; exit(0);*/
            
            if(count($tt[__xva]) === 2 && ($tt[__xva][0]['T0.chi_id_projet'] === 2 || $tt[__xva][1]['T0.chi_id_projet'] === 2)){

                /*
                  dans le projet rev_2 on ne peut avoir qu'un seul projet
                */
                $afficher_les_boutons_pour_dev_deux=false;

            }


        }else{

            $bouton_avant='<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_projets1.formulaire1(action1(page_projets_creer1))" title="nouvelle projet" >+*</div>';
        }

        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>nom de projet</th>';
        $lsttbl .= '</tr></thead><tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= '<div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            
            if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])
               && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === $v0['T0.chi_id_projet']
            ){

                $lsttbl .= '<div class="hug_bouton_inactif">=&gt;</div>';
                
                if($afficher_les_boutons_pour_dev_deux){

                    
                    if($v0['T0.chi_id_projet'] === 2){

                        $lsttbl .= '<div class="hug_bouton_inactif"  title="désactiver" >=&lt;</div>';

                    }else{

                        $lsttbl .= '<div class="hug_bouton yy__x_signaux___xer" data-hug_click="c_projets1.desactiver2(chi_id_projet(' . $v0['T0.chi_id_projet'] . '))" title="désactiver" >=&lt;</div>';
                    }


                }


            }else{

                
                if($afficher_les_boutons_pour_dev_deux){

                    
                    if($v0['T0.chi_id_projet'] === 2){

                        $lsttbl .= '<div class="hug_bouton_inactif" title="activer">=&gt;</div>';

                    }else{

                        $lsttbl .= '<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_projets1.activer1(chi_id_projet(' . $v0['T0.chi_id_projet'] . '))"  title="activer">=&gt;</div>';
                    }

                    $lsttbl .= '<div class="hug_bouton_inactif">=&lt;</div>';

                }

            }

            
            if($afficher_les_boutons_pour_dev_deux){

                
                if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])
                   && $v0['T0.chi_id_projet'] === $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']
                ){

                    $lsttbl .= '<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_projets1.formulaire1(action1(page_projets_editer1),chi_id_projet(' . $v0['T0.chi_id_projet'] . '))">✎</div>';

                }else{

                    $lsttbl .= '<div class="hug_bouton_inactif">✎</div>';
                }


            }

            
            if($v0['T0.chi_id_projet'] !== 1){

                
                if($afficher_les_boutons_pour_dev_deux){

                    
                    if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])
                       && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === $v0['T0.chi_id_projet']
                    ){

                        $lsttbl .= '<div class="hug_bouton_inactif">x</div>';
                        $lsttbl .= '<div class="hug_bouton_inactif">x</div>';
                        /*
                          $lsttbl .= '<div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_projets1.creer_les_repertoires(chi_id_projet(' . $v0['T0.chi_id_projet'] . '))" title="creer les répertoires">initialiser</div>';
                        */

                    }else{

                        
                        if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])
                           && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1
                           && $v0['T0.chi_id_projet'] > 2
                        ){

                            $lsttbl .= '<div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_projets1.formulaire1(action1(page_projets_supprimer1),chi_id_projet(' . $v0['T0.chi_id_projet'] . '))">🗑</div>';
                            /*
                              $lsttbl .= '<div class="hug_bouton yy__x_signaux___xsu" data-hug_click="c_projets1.creer_les_repertoires(chi_id_projet(' . $v0['T0.chi_id_projet'] . '))" title="creer les répertoires">initialiser</div>';
                            */

                        }else{

                            $lsttbl .= '<div class="hug_bouton_inactif">x</div>';
                            /*
                              $lsttbl .= '<div class="hug_bouton_inactif">initialiser</div>';
                            */
                        }

                    }


                }


            }else{

                
                if($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial'] === 1
                   && isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])
                   && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === $v0['T0.chi_id_projet']
                   && __X_CLE_APPLICATION === 'rev' . '_1'
                ){

                    
                    if($afficher_les_boutons_pour_dev_deux){

                        $lsttbl .= '<div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_projets1.initialiser_projet_2()" title="initialiser projet 2">initialiser le projet 2</div>';

                    }


                }

            }

            
            if($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial'] === 1
               && __X_CLE_APPLICATION === 'rev_2'
               && $v0['T0.chi_id_projet'] === 2
            ){

                /* if($afficher_les_boutons_pour_dev_deux===false){*/
                $lsttbl .= '<div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_projets1.initialiser_le_clone()" title="initialiser le clone">initialiser le clone</div>';
                /* }*/

            }

            
            if(__X_CLE_APPLICATION === 'rev_1' && $v0['T0.chi_id_projet'] > 2){

                $lsttbl .= '<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_bases1.dump_de_la_base(chi_id_basedd(' . $v0['T0.chi_id_projet'] . '))" title="sauvegarder la base du projet">💾</div>';

            }

            $lsttbl .= '</div>';
            $lsttbl .= '</td>';
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_projet'] . '';
            $lsttbl .= '</td>';
            
            if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])
               && $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === $v0['T0.chi_id_projet']
            ){

                $lsttbl .= '<td class="yy__x_signaux___xsu" style="text-align:left;">';

            }else{

                $lsttbl .= '<td style="text-align:left;">';
            }

            
            if($v0['T0.chp_nom_projet'] !== null){

                $lsttbl .= '' . enti1(mb_substr($v0['T0.chp_nom_projet'],0,100)) . '';

            }

            $lsttbl .= '</td>';
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_projets1.page_projets_liste1()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/