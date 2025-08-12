<?php
/*clé application*/
define('__X_CLE_APPLICATION','rev_1');
/*
  Ce fichier est "externalisé" car quand je veux faire un test , je peux écrire
  =====================================================================================================================
  <?php
  require_once('__definitions.php');
  
  $texte="c_divers1.creer_un_messagetoto( type(__xer) , valeur( 'un exemple de message d\'erreur' ))";
  
  $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($texte);
  
  echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $obj_matrice[__xva][5][1] , true )  . '</pre>' ; exit(0);
  
  =====================================================================================================================
  car la variable globale $GLOBALS['obj_rev1']=new c_rev1();
  [voir plus bas dans ce source ]
*/
/*pour le tableau des BDD*/
define('__BDD','__BDD');
/*statut*/
define('__xst','__xst');
/*message*/
define('__xme','__xme');
/*page*/
define('__x_page','__x_page');
/*action*/
define('__x_action','__x_action');
/*signaux*/
define('__x_signaux','__x_signaux');
/*valeur*/
define('__xva','__xva');
/*fichier*/
define('__x_fichier','__x_fichier');
/*ligne*/
define('__x_ligne','__x_ligne');
/*connecte*/
define('__x_authentifie','__x_authentifie');
/*boutons pour l'utilisateur*/
define('__xbo','__xbo');
/*numero de message*/
define('__xnu','__xnu');
/*erreur*/
define('__xer',0);
/*succes*/
define('__xsu',1);
/*alarme*/
define('__xal',2);
/*information*/
define('__xif',3);
/*deverminage debug*/
define('__xdv',4);
/*version*/
define('__X_VERSION','__X_VERSION');
/*objet générique*/
define('__obj','__obj');
/* la date/heure courante */
date_default_timezone_set('Europe/Paris');
define('DEVER_SRV','DEVER_SRV');
define('PREFIXE_BDD','PREFIXE_BDD');
define('LIEN_BDD','LIEN_BDD');
define('__date','__date');
define('__date_ms','__date_ms');
define('MON_LF','¶' . 'LF' . '¶');
define('MON_CR','¶' . 'CR' . '¶');
$GLOBALS[__date]=date('Y-m-d H:i:s');
$decimalPart=(int)(fmod(microtime(true),1) * 1000);
$decimalPart=$decimalPart < 10 ? '00' . $decimalPart : ($decimalPart < 100 ? '0' . $decimalPart : '' . $decimalPart);
$GLOBALS[__date_ms]=$GLOBALS[__date] . '.' . $decimalPart;
$GLOBALS['chx_acces_utilisateur']=2;
/*
  rev
*/
define('REPERTOIRE_RACINE_DES_PROJET',realpath(dirname(__FILE__,3)));
define('RACINE_FICHIERS_PROVISOIRES',REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'temporaire');
define('REPERTOIRE_SAUVEGARDES_FICHIERS',REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'sauvegarde_fichiers');
define('REPERTOIRE_RACINE_DES_BIBLIOTHEQUES_PHP',REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . 'phplib');
/*
  rev/rev_x
*/
define('REPERTOIRE_DU_PROJET',REPERTOIRE_RACINE_DES_PROJET . DIRECTORY_SEPARATOR . __X_CLE_APPLICATION);
/*
  rev/rev_x/__serveur
*/
define('REPERTOIRE_DU_SERVEUR',REPERTOIRE_DU_PROJET . DIRECTORY_SEPARATOR . '__serveur');
/*
  rev/rev_x/__client
*/
define('REPERTOIRE_DU_CLIENT',REPERTOIRE_DU_PROJET . DIRECTORY_SEPARATOR . '__client');
/*
  rev/rev_x/__serveur/_php_inc
*/
define('REPERTOIRE_DES_CLASSES_PHP',REPERTOIRE_DU_SERVEUR . DIRECTORY_SEPARATOR . '_php_inc');
/*
  rev/rev_x/__serveur/_sqls
*/
define('REPERTOIRE_RACINE_DES_SQL',REPERTOIRE_DU_SERVEUR . DIRECTORY_SEPARATOR . '_sqls');
/*
  rev/rev_x/__serveur/_bdd_sqlite
*/
define('REPERTOIRE_BDD_SQLITE3',REPERTOIRE_DU_SERVEUR . DIRECTORY_SEPARATOR . '_bdd_sqlite');
define('BASE_REV',1);
/*
  =====================================================================================================================
*/
error_reporting(0);
ini_set('display_errors',0);
set_error_handler('errorHandler');
register_shutdown_function('shutdownHandler');
date_default_timezone_set('Europe/Paris');
/*
  define('BASE_SYSTEME' , 'BASE_SYSTEME');
  define('BASE_APPLI'   , 'BASE_APPLI'  );
  $GLOBALS[BASE_SYSTEME]=1;
  $GLOBALS[BASE_APPLI]=1;
*/
/*
  =====================================================================================================================
*/
function demarre_bdd(&$donnees_retournees){

    define('BASE_REFERENCE',1);
    $GLOBALS[__BDD][BASE_REFERENCE]=array(
        'id' => BASE_REFERENCE,
        'nom_bdd' => 'bdd_' . BASE_REFERENCE . '.sqlite',
        PREFIXE_BDD => 'bdd_' . BASE_REFERENCE . '',
        'fournisseur' => 'sqlite',
        'initialisation_bdd' => array( 'PRAGMA encoding = "UTF-8";', 'PRAGMA journal_mode=WAL;', 'PRAGMA foreign_keys=ON;'),
        LIEN_BDD => null
    );
    $chemin_bdd=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_1.sqlite';
    
    if(!file_exists($chemin_bdd)){

        $chemin_bdd_dump=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . $GLOBALS[__BDD][1]['nom_bdd'] . '.sql';
        $db=new SQLite3($chemin_bdd);
        $db->querySingle('PRAGMA foreign_keys=OFF;');
        $db->querySingle('BEGIN TRANSACTION');
        $chaine_creation_table_utilisateur=file_get_contents($chemin_bdd_dump);
        $db->querySingle($chaine_creation_table_utilisateur);
        $db->querySingle('COMMIT');
        $db->close();
        usleep(100000);

    }

    /* 'attach database "' . REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_1.sqlite" as `bdd_1`;',*/
    $pragmas_dbs=array();
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
    
    if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])
       && !($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 1
               || $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] === 2)
    ){

        define('BDD_NUMERO_1',$_SESSION[__X_CLE_APPLICATION]['chi_id_projet']);
        $GLOBALS['BDD_NUMERO_1']=$_SESSION[__X_CLE_APPLICATION]['chi_id_projet'];
        $GLOBALS[__BDD][BDD_NUMERO_1]=array(
            'id' => BDD_NUMERO_1,
            'nom_bdd' => 'bdd_' . BDD_NUMERO_1 . '.sqlite',
            PREFIXE_BDD => 'bdd_' . BDD_NUMERO_1 . '',
            'fournisseur' => 'sqlite',
            'initialisation_bdd' => array( 'PRAGMA encoding = "UTF-8";', 'PRAGMA journal_mode=WAL;', 'PRAGMA foreign_keys=ON;'),
            LIEN_BDD => null
        );

    }else{

        define('BDD_NUMERO_1',1);
        $GLOBALS['BDD_NUMERO_1']=1;
    }

    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $GLOBALS[__BDD] , true ) . '</pre>' ; exit(0);*/
    foreach($GLOBALS[__BDD] as $k1 => $v1){
        $chemin_bdd=REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . $v1['nom_bdd'];
        $db=new SQLite3($chemin_bdd);
        $GLOBALS[__BDD][$k1][LIEN_BDD]=$db;
        /*
          mode objet pour php [ try{}catch[Exception $e]{}
        */
        $GLOBALS[__BDD][$k1][LIEN_BDD]->enableExceptions(true);
        foreach($v1['initialisation_bdd'] as $k2 => $v2){
            $ret=$db->querySingle($v2);
        }
        $pragmas_dbs[]='attach database "' . REPERTOIRE_BDD_SQLITE3 . DIRECTORY_SEPARATOR . 'bdd_' . $k1 . '.sqlite" as `bdd_' . $k1 . '`;';
    }
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $pragmas_dbs , true ) . '</pre>' ; exit(0); */
    $ddd=array();
    foreach($GLOBALS[__BDD] as $k1 => $v1){
        foreach($pragmas_dbs as $k2 => $v2){
            try{
                $ret=$db->querySingle($v2);
                $ddd[]=$k1 . ' ' . $v2;
            }catch(Exception $e){
                /* echo __FILE__ . ' ' . __LINE__ . ' $k1  = '.$k1 .' <pre>' . var_export( $e->getMessage() , true ) . '</pre><pre>' . var_export( $GLOBALS[__BDD] , true ) . '</pre><pre>' . var_export( $v2 , true ) . '</pre>' ; exit(0);*/
            }
        }
    }
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $GLOBALS[__BDD] , true ) . '</pre>' ; exit(0);*/

}
/*
  =====================================================================================================================
*/
function recupTypeErreur($ty){

    $er='UNKNOWN_ERROR';
    $listeDesTypes=array(
        E_STRICT => 'E_STRICT',
        E_USER_NOTICE => 'E_USER_NOTICE',
        E_NOTICE => 'E_NOTICE',
        E_USER_WARNING => 'E_USER_WARNING',
        E_WARNING => 'E_WARNING',
        E_ERROR => 'E_ERROR',
        E_CORE_ERROR => 'E_CORE_ERROR',
        E_COMPILE_ERROR => 'E_COMPILE_ERROR',
        E_USER_ERROR => 'E_USER_ERROR',
        E_RECOVERABLE_ERROR => 'E_RECOVERABLE_ERROR',
        E_CORE_WARNING => 'E_CORE_WARNING',
        E_COMPILE_WARNING => 'E_COMPILE_WARNING',
        E_PARSE => 'E_PARSE'
    );
    
    if(isset($listeDesTypes[$ty])){

        $er=$listeDesTypes[$ty];

    }

    return $er;

}
/*
  =====================================================================================================================
  Fonction appelée quand il y a un problème de traitement, par exemple une division par zéro
  =====================================================================================================================
*/
function errorHandler($error_level,$error_message,$error_file,$error_line,$error_context=array()){

    /* (" . $error_file . ") */
    $error=recupTypeErreur($error_level) . " | problème de traitement :" . $error_message . " | line:" . $error_line . " | file:" . basename($error_file) . " ";
    /* , error_context:".str_replace("\r",'',str_replace("\n",'',var_export($error_context,true))); */
    ma_trace($error);

}
/*
  =====================================================================================================================
  Fonction appelée quand il y a un problème dans le source php, par exemple un appel à une fonction que n'existe pas
  ou bien une erreur dans l'écriture du programme
  =====================================================================================================================
*/
function shutdownHandler(){

    $lasterror=error_get_last();
    $nomErreur='UNKNOWN_ERROR';
    
    if(isset($lasterror['type'])){

        $dernier_fichier=str_replace(REPERTOIRE_DU_PROJET,'',$lasterror['file']);
        $dernierMessage=str_replace('#','<br />#',str_replace(REPERTOIRE_DU_PROJET,'',$lasterror['message']));
        $error='<b>erreur dans un source du serveur</b> : ' . recupTypeErreur($lasterror['type']) . ' <b>"' . $dernier_fichier . '"</b> en ligne <b>"' . $lasterror['line'] . '"</b> <br />';
        $error .= ' message : ' . '<span style="text-wrap:wrap;">' . $dernierMessage . '</span> ';
        /* echo __FILE__ . ' ' . __LINE__ . ' $lasterror = <pre>' . var_export( $lasterror , true ) . '</pre><pre>'.REPERTOIRE_DU_PROJET.'</pre><pre>'.$error.'</pre>' ; exit(0); */
        /* $error.= '<br />ligne:' . $lasterror['line'] . ' <br /> fichier:' . basename($lasterror['file']) . ' (' . $lasterror['file'] . ')'; */
        ma_trace($error);

    }


}
/*
  =====================================================================================================================
*/
function ma_trace($error){

    global $donnees_retournees;
    $__xva=array();
    
    if(isset($donnees_retournees[__xva]['maj'])){

        $__xva=array( 'maj' => $donnees_retournees[__xva]['maj']);

    }

    $donnees_retournees1=array(
        /*statut de la réponse, à priori faux*/
        '__xst' => 0,
        /*utilisateur connecté, à priori faux*/
        '__x_authentifie' => 0,
        /*signaux d'erreur */
        '__x_signaux' => array(
                0 => array( $error),
                1 => array(),
                2 => array(),
                3 => array(),
                4 => array()
            ),
        /*action*/
        '__x_action' => '',
        /*données retournées au client */
        '__xva' => $__xva,
        /* fichier traitant le programme */
        '__x_fichier' => '',
        /* ligne dans le fichier */
        '__x_ligne' => [ __LINE__],
        /* numéro d'erreur absolu */
        '__xnu' => 0,
        /* boutons */
        '__xbo' => array(),
        '__xdv' => var_export($donnees_retournees,true)
    );
    header('Content-Type: application/json; charset=utf-8');
    /* echo __FILE__ . ' ' . __LINE__ . ' <pre>'.REPERTOIRE_DU_PROJET.'</pre><pre>'.var_export($donnees_retournees1,true).'</pre>' ; exit(0); */
    $le_json=json_encode($donnees_retournees1,JSON_INVALID_UTF8_IGNORE | JSON_FORCE_OBJECT);
    /* echo __FILE__ . ' ' . __LINE__ . ' <pre>'.REPERTOIRE_DU_PROJET.'</pre><pre>'.var_export($le_json,true).'</pre>' ; exit(0); */
    echo $le_json ;
    /* on a capturé une erreur de type 500, on force la réponse en 200 */
    http_response_code(200);
    exit(0);

}
/*
  =====================================================================================================================
*/
function traite_autre_fonction(&$donnees_recues,&$donnees_retournees,$drapeau=null){

    $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($donnees_recues[__x_action]);
    
    if($obj_matrice[__xst] === __xsu
       && count($obj_matrice[__xva]) > 1
       && $obj_matrice[__xva][1][2] === 'f'
       && $obj_matrice[__xva][1][1] !== ''
    ){

        $pos1=strpos($obj_matrice[__xva][1][1],'.');
        
        if($pos1 !== false){

            $nom_de_fichier_a_inclure=substr($obj_matrice[__xva][1][1],0,$pos1) . '.php';
            $nom_de_la_fonction_a_appeler=substr($obj_matrice[__xva][1][1],$pos1 + 1);
            
            if(is_file(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . $nom_de_fichier_a_inclure)){

                require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . $nom_de_fichier_a_inclure);
                /*
                  $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . ' $nom_de_la_classe=' . REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . $nom_de_fichier_a_inclure;
                */
                
                if(substr($nom_de_fichier_a_inclure,0,2) === 'c_'){

                    $nom_de_la_classe=str_replace('.php','',$nom_de_fichier_a_inclure);
                    /* $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . '"' . $nom_de_la_classe . '" "' . $nom_de_la_fonction_a_appeler . '" "<pre>'.var_export( $obj_matrice , true ).'</pre>"';*/
                    $autorise=false;
                    
                    if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){

                        /*
                          afr écrire une fonction qui vérifie l'autorisation avec les 3 paramètres
                          $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant']
                          $nom_de_la_classe
                          $nom_de_la_fonction_a_appeler
                        */
                        $autorise=true;

                    }else{

                        
                        if("c_aides1" === $nom_de_la_classe && "recupere_la_page_d_aide" === $nom_de_la_fonction_a_appeler){

                            $autorise=true;

                        }

                        
                        if("c_accueil1" === $nom_de_la_classe && "recupere_la_page_d_accueil" === $nom_de_la_fonction_a_appeler){

                            $autorise=true;

                        }

                        
                        if("c_connexion1" === $nom_de_la_classe){

                            
                            if("recupere_la_page_de_connexion" === $nom_de_la_fonction_a_appeler){

                                $autorise=true;

                            }

                            
                            if("se_deconnecter" === $nom_de_la_fonction_a_appeler){

                                $autorise=true;

                            }

                            
                            if("formulaire1" === $nom_de_la_fonction_a_appeler
                               && 'conteneur1' === $obj_matrice[__xva][2][1]
                               && 'vv_formulaire_de_connexion' === $obj_matrice[__xva][3][1]
                            ){

                                $autorise=true;

                            }


                        }

                        
                        if("c_cookies1" === $nom_de_la_classe
                               && "enregistrer" === $nom_de_la_fonction_a_appeler
                           || "c_divers1" === $nom_de_la_classe
                               && "creer_un_message_exemple" === $nom_de_la_fonction_a_appeler
                        ){

                            /* pour ces pages, on ne vérifie pas les autotisations */
                            $autorise=true;

                        }

                        
                        if($autorise !== true){

                            /*
                              afr travailler la redirection si on n'est pas authentifié 
                              $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . '"' . $nom_de_la_classe . '" "' . $nom_de_la_fonction_a_appeler . '" "<pre>'.var_export( $obj_matrice , true ).'</pre>"';
                            */
                            require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_connexion1.php');
                            $nom_de_la_classe='c_connexion1';
                            $nom_de_la_fonction_a_appeler='recupere_la_page_de_connexion';
                            $donnees_retournees[__x_signaux][__xal][]='vous devez être connecté pour utiliser cette fonction [' . __LINE__ . ']';

                        }

                    }

                    /*
                      $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . ' $donnees_recues =<pre>' . var_export( $donnees_recues , true ) .'</pre>';
                      $donnees_retournees[__x_signaux][__xdv][]=__LINE__ . ' classe fonction =' . $nom_de_la_classe . ' ' . $nom_de_la_fonction_a_appeler;
                      return;
                    */
                    $obj=new $nom_de_la_classe($donnees_recues,$obj_matrice[__xva],$donnees_retournees);
                    
                    if(method_exists($obj,$nom_de_la_fonction_a_appeler)){

                        $obj->$nom_de_la_fonction_a_appeler($donnees_retournees,$obj_matrice[__xva],$donnees_recues);
                        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>$nom_de_la_classe='.$nom_de_la_classe.' , $nom_de_la_fonction_a_appeler='.$nom_de_la_fonction_a_appeler . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/

                    }else{

                        $donnees_retournees[__x_ligne][]=__LINE__;
                        
                        if($GLOBALS[DEVER_SRV] >= 1){

                            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' méthode non trouvée "' . $nom_de_la_classe . '.' . $nom_de_la_fonction_a_appeler . '"';

                        }

                    }


                }else{

                    $donnees_retournees[__x_ligne][]=__LINE__;
                    
                    if($GLOBALS[DEVER_SRV] >= 2){

                        $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ' Le fichier, "' . $nom_de_fichier_a_inclure . '" ne commence pas par "c_"';

                    }

                }


            }else{

                $fichier_non_trouve=str_replace('.php','',$nom_de_fichier_a_inclure);
                $fichier_non_trouve=str_replace('c_','',$fichier_non_trouve);
                $donnees_retournees[__x_signaux][__xer][]='Erreur technique, le traitement "' . $fichier_non_trouve . '" n\'existe pas [' . __LINE__ . ']';
            }


        }else{

            $donnees_retournees[__x_ligne][]=__LINE__;
            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' la fonction "' . $obj_matrice[__xva][1][1] . '" ne peut pas être traitée sur le serveur.';
        }


    }else{

        $donnees_retournees[__x_ligne][]=__LINE__;
        $donnees_retournees[__x_signaux][__xer][]='🐛 cas non prévu dans autre_fonction [' . __LINE__ . ']<br />' . $donnees_recues[__x_action];
    }

    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/

}
/*
  =====================================================================================================================
*/
function sq0($s){

    /*cette fonction remplace les apostrophes par des doubles apostrophes */
    $s=SQLite3::escapeString($s);
    $ua=array(
        'à' => 'à',
        'â' => 'â',
        'ã' => 'ã',
        'á' => 'á',
        'é' => 'é',
        'è' => 'è',
        'ê' => 'ê',
        'É' => 'É',
        'ï' => 'ï',
        'î' => 'î',
        'ñ' => 'ñ',
        'Ñ' => 'Ñ',
        'ó' => 'ó',
        'ô' => 'ô',
        'ö' => 'ö',
        'ü' => 'ü',
        'Ü' => 'Ü'
    );
    return strtr($s,$ua);

}
/*
  =====================================================================================================================
*/
function sq1($s){

    
    if(is_numeric($s)){

        return $s;

    }else if($s === null){

        return 'NULL';
    }

    /*cette fonction remplace les apostrophes par des doubles apostrophes */
    $s1=SQLite3::escapeString($s);
    $ua=array(
        'à' => 'à',
        'â' => 'â',
        'ã' => 'ã',
        'á' => 'á',
        'é' => 'é',
        'è' => 'è',
        'ê' => 'ê',
        'É' => 'É',
        'ï' => 'ï',
        'î' => 'î',
        'ñ' => 'ñ',
        'Ñ' => 'Ñ',
        'ó' => 'ó',
        'ô' => 'ô',
        'ö' => 'ö',
        'ü' => 'ü',
        'Ü' => 'Ü'
    );
    $s1=strtr($s1,$ua);
    return '\'' . $s1 . '\'';

}
/*
  =====================================================================================================================
  %toto% => \%toto\%
*/
function sq2($s){

    
    if(is_numeric($s)){

        return $s;

    }else if($s === null){

        return 'NULL';
    }

    /*cette fonction remplace les apostrophes par des doubles apostrophes */
    $s1=SQLite3::escapeString($s);
    $ua=array(
        'à' => 'à',
        'â' => 'â',
        'ã' => 'ã',
        'á' => 'á',
        'é' => 'é',
        'è' => 'è',
        'ê' => 'ê',
        'É' => 'É',
        'ï' => 'ï',
        'î' => 'î',
        'ñ' => 'ñ',
        'Ñ' => 'Ñ',
        'ó' => 'ó',
        'ô' => 'ô',
        'ö' => 'ö',
        'ü' => 'ü',
        'Ü' => 'Ü'
    );
    $s1=strtr($s1,$ua);
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $s1 , true ) . '</pre>' ; exit(0);*/
    
    if(strpos($s,'_') !== false || strpos($s,'%') !== false){

        $t='\'%' . str_replace('_','\\_',str_replace('%','\\%',$s1)) . '%\' ESCAPE \'\\\'';
        return $t;

    }else{

        return '\'%' . $s1 . '%\'';
    }


}
/*
  =====================================================================================================================
  %toto% => %toto%
*/
function sq3($s){

    
    if(is_numeric($s)){

        return $s;

    }else if($s === null){

        return 'NULL';
    }

    /*cette fonction remplace les apostrophes par des doubles apostrophes */
    $s1=SQLite3::escapeString($s);
    $ua=array(
        'à' => 'à',
        'â' => 'â',
        'ã' => 'ã',
        'á' => 'á',
        'é' => 'é',
        'è' => 'è',
        'ê' => 'ê',
        'É' => 'É',
        'ï' => 'ï',
        'î' => 'î',
        'ñ' => 'ñ',
        'Ñ' => 'Ñ',
        'ó' => 'ó',
        'ô' => 'ô',
        'ö' => 'ö',
        'ü' => 'ü',
        'Ü' => 'Ü'
    );
    $s1=strtr($s1,$ua);
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $s1 , true ) . '</pre>' ; exit(0);*/
    
    if(strpos($s,'_') !== false || strpos($s,'%') !== false){

        $t='\'' . $s1 . '\' ';
        return $t;

    }else{

        return '\'%' . $s1 . '%\'';
    }


}
/*
  =====================================================================================================================
*/
function sauvegarder_et_supprimer_fichier($chemin,$ne_pas_faire_une_sauvegarde){

    return supprimer_fichier($chemin,!$ne_pas_faire_une_sauvegarde);

}
/*
  =====================================================================================================================
*/
function supprimer_fichier($chemin,$faire_une_sauvegarde){

    
    if(!isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

        /*
          on ne peut pas supprimer un fichier si on n'a pas sélectionné un environnement
        */
        return false;

    }

    $chemin_absolu_origine=realpath($chemin);
    
    if($faire_une_sauvegarde === true){

        $chemin_absolu=realpath($chemin);
        $chemin_absolu=substr(str_replace(REPERTOIRE_RACINE_DES_PROJET,'',$chemin_absolu),2 + strlen('rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']));
        $chemin_date=date('Y') . DIRECTORY_SEPARATOR . date('m') . DIRECTORY_SEPARATOR . date('d') . DIRECTORY_SEPARATOR;
        $chemin_absolu=REPERTOIRE_SAUVEGARDES_FICHIERS . DIRECTORY_SEPARATOR . 'rev_' . $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'] . DIRECTORY_SEPARATOR . $chemin_date . $chemin_absolu . '.' . uniqid() . '.bak';
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_absolu , true ) . '</pre>' ; exit(0); */
        $dossier=dirname($chemin_absolu);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $dossier , true ) . '</pre>' ; exit(0);*/
        
        if(!is_dir($dossier)){

            
            if(!mkdir($dossier,0777,true)){

                return false;

            }


        }

        
        if(rename($chemin_absolu_origine,$chemin_absolu)){

            return true;

        }


    }else{

        
        if(is_file($chemin_absolu_origine)){

            
            if((@unlink($chemin_absolu_origine))){

                return true;

            }else{

                return false;
            }


        }else{

            return true;
        }

    }

    return false;

}
/*
  =====================================================================================================================
*/
function enti1($s){

    
    if($s === null){

        return '';

    }

    return htmlentities($s,ENT_COMPAT,'utf-8');

}
/*
  =====================================================================================================================
*/
function nfp1($n){

    $t=number_format($n,0,',',' ');
    return '<div style="display:inline-block;min-width:2em;text-align:right;margin-left:3px;">' . $t . '</div>';

}
/*
  =====================================================================================================================
*/
function texte_rev($t){

    
    if(is_null($t)){

        return '';

    }

    return str_replace('\'','\\\'',str_replace('\\','\\\\',$t));

}
/*
  =====================================================================================================================
  quand un champ de recherche contient des id, ils sont séparés par des virgules
  par exemple, 1,2,3  , le where doit être sous la forme WHERE id in ( 1 , 2 , 3 )
  =====================================================================================================================
*/
function construction_where_sql_sur_id1($nom_du_champ,$critere){

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
  =====================================================================================================================
*/
function construire_navigation_pour_liste($__debut,$__nbMax,$__nbEnregs,$__xpage,$boutons_avant,$fonction1,&$par,$nb_extrait){

    $o1='';
    $__bouton_enregs_prec=' <a class="yy_suivant_precedent_inactif">&laquo;</a>';
    $__bouton_enregs_suiv=' <div class="yy_suivant_precedent_inactif">&raquo;</div>';
    $__bouton_enregs_prec2='page' . nfp1($__xpage + 1);
    $txtPar='';
    foreach($par as $k0 => $v0){
        
        if($k0 !== '__num_page'){

            
            if(is_numeric($v0)){

                $txtPar .= $k0 . '(' . $v0 . ')';

            }else{

                
                if($v0 !== ''){

                    $txtPar .= $k0 . '(\'' . enti1(str_replace('\\','\\\\',str_replace('\'','\\\'',$v0))) . '\')';

                }

            }


        }

    }
    
    if($__xpage > 0){

        $__bouton_enregs_prec='<div class="hug_bouton" data-hug_click="' . $fonction1 . '(' . $txtPar . '__num_page(' . ($__xpage - 1) . '))" >&laquo;</div>';
        
        if($nb_extrait === 0){

            $__bouton_enregs_prec2='<div class="hug_bouton yy__x_signaux_2" data-hug_click="' . $fonction1 . '(' . $txtPar . '__num_page(' . ($__xpage - 1) . '))" >&laquo;' . nfp1($__xpage + 1) . '</div>';

        }


    }

    
    if($__debut + $__nbMax < $__nbEnregs){

        $__bouton_enregs_suiv='<div class="hug_bouton" data-hug_click="' . $fonction1 . '(' . $txtPar . '__num_page(' . ($__xpage + 1) . '))" >&raquo;</div>';

    }

    
    if($__nbEnregs > 0){

        $o1 .= '<div class="yy_navigation_liste">' . PHP_EOL;
        $o1 .= $boutons_avant;
        $o1 .= $__bouton_enregs_prec . PHP_EOL . $__bouton_enregs_suiv . PHP_EOL;
        $o1 .= '  <div style="display:inline-block;">' . PHP_EOL;
        $o1 .= '    ' . $__bouton_enregs_prec2 . '/' . number_format(ceil($__nbEnregs / $__nbMax),0,',',' ') . ' (' . number_format($__nbEnregs,0,',',' ') . ' enregistrements )' . PHP_EOL;
        $o1 .= '  </div>' . PHP_EOL;
        $o1 .= '</div>' . PHP_EOL;

    }else{

        $o1 .= '<div class="yy_navigation_liste yy__x_signaux_2">';
        $o1 .= $boutons_avant;
        $o1 .= 'Aucun enregistrement trouvé avec ces critères de recherche';
        $o1 .= '</div>' . PHP_EOL;
    }

    return $o1;

}
/*
  =====================================================================================================================
*/
function demarre_services(&$donnees_retournees){

    
    if(session_status() === PHP_SESSION_NONE){

        session_start();

    }

    
    if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial'])){

        $donnees_retournees[__x_authentifie]=__xsu;
        
        if(isset($_SESSION[__X_CLE_APPLICATION][__xva]['compteur_session_php1'])){

            $donnees_retournees[__xva]['compteur_session_php1']=$_SESSION[__X_CLE_APPLICATION][__xva]['compteur_session_php1'];

        }else{

            $donnees_retournees[__xva]['compteur_session_php1']=0;
        }


    }

    demarre_bdd($donnees_retournees);
    require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_cookies1.php');
    $cook=new c_cookies1();
    $val=$cook->valeur();
    $GLOBALS[DEVER_SRV]=0;
    
    if($val !== null && isset($val['aspect']['déverminage'])){

        $GLOBALS[DEVER_SRV]=$val['aspect']['déverminage'];

    }


}
/*
  =====================================================================================================================
*/
$fichier=REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_rev_vers_matrice1.php';
/* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( is_file($fichier) , true ) . '</pre>' ; exit(0);*/
require_once($fichier);
$GLOBALS['obj_rev1']=new c_rev_vers_matrice1();