<?php
define('__version','__j_20251221_000002_');
define('__xst','__xst');
/*message*/
define('__xme','__xme');
/*action*/
define('__xac','__xac');
/*signaux*/
define('__xsi','__xsi');
/*valeur*/
define('__xva','__xva');
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
/*formulaire */
define('__fo1','__fo1');
define('__BDD','__BDD');
define('BASE_REFERENCE',1);
define('PREFIXE_BDD','PREFIXE_BDD');
define('LIEN_BDD','LIEN_BDD');
define('__date','__date');
define('__date_ms','__date_ms');
define('DEVER_SRV','DEVER_SRV');
error_reporting(0);
ini_set('display_errors',0);
set_error_handler('errorHandler');
register_shutdown_function('shutdownHandler');
date_default_timezone_set('Europe/Paris');
/*
  =====================================================================================================================
  quand un champ de recherche contient des id, ils sont séparés par des virgules
  par exemple, 1,2,3  , le where doit être sous la forme WHERE id in ( 1 , 2 , 3 )
  =====================================================================================================================
*/
function construction_where_sql_sur_id1($nom_du_champ,$critere){

    $champ_where='';
    
    if($critere !== null && (strpos($critere,'.') !== false || strpos($critere,',') !== false)){

        $critere=str_replace(',','.',$critere);
        $tableau_liste_des_valeurs=explode('.',$critere);
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
function enti1($s){

    
    if($s === null){

        return '';

    }

    return htmlentities($s,ENT_COMPAT,'utf-8');

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

    $error=recupTypeErreur($error_level) . " | problème de traitement :" . $error_message . " | line:" . $error_line . " | file:" . basename($error_file) . " ";
    $error=str_replace(__CHEMIN_ABSOLU_PROJET__,'',$error);
    ma_trace($error,1,'errorHandler');

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

        $dernier_fichier=str_replace(__CHEMIN_ABSOLU_PROJET__,'',$lasterror['file']);
        $dernierMessage=str_replace('#','<br />#',str_replace(__CHEMIN_ABSOLU_PROJET__,'',$lasterror['message']));
        $error='<b>erreur dans un source du serveur</b> : ' . recupTypeErreur($lasterror['type']) . ' <b>"' . $dernier_fichier . '"</b> en ligne <b>"' . $lasterror['line'] . '"</b> <br />';
        $error .= ' message : ' . '<span style="text-wrap:wrap;">' . $dernierMessage . '</span> ';
        /* echo __FILE__ . ' ' . __LINE__ . ' $lasterror = <pre>' . var_export( $lasterror , true ) . '</pre><pre>'.__CHEMIN_ABSOLU_PROJET__.'</pre><pre>'.$error.'</pre>' ; exit(0); */
        /* $error.= '<br />ligne:' . $lasterror['line'] . ' <br /> fichier:' . basename($lasterror['file']) . ' (' . $lasterror['file'] . ')'; */
        ma_trace($error,2,'shutdownHandler');

    }


}
/*
  =====================================================================================================================
*/
function ma_trace($error,$n,$origine){

    /* global $donnees_retournees;*/
    $__xva=array();
    $donnees_retournees1=array(
        '__version' => __version,
        /*statut de la réponse, à priori faux*/
        '__xst' => 0,
        /*utilisateur connecté, à priori faux*/
        '__x_authentifie' => 0,
        /*signaux d'erreur */
        '__xsi' => array(
                0 => array( 'ma_trace ' . $origine . ' ' . $n . '<pre>' . str_replace('|','<br />',$error) . '</pre>'),
                1 => array(),
                2 => array(),
                3 => array(),
                4 => array()
            ),
        /*action*/
        '__xac' => '',
        /*données retournées au client */
        '__xva' => $__xva,
        /* boutons */
        '__xbo' => array(),
        /* '__xdv' => var_export($donnees_retournees,true),*/
        '_CA_' => _CA_
    );
    header('Content-Type: application/json; charset=utf-8');
    /* echo __FILE__ . ' ' . __LINE__ . ' <pre>'.__CHEMIN_ABSOLU_PROJET__.'</pre><pre>'.var_export($donnees_retournees1,true).'</pre>' ; exit(0); */
    $le_json=json_encode($donnees_retournees1,JSON_INVALID_UTF8_IGNORE | JSON_FORCE_OBJECT);
    /* echo __FILE__ . ' ' . __LINE__ . ' <pre>'.__CHEMIN_ABSOLU_PROJET__.'</pre><pre>'.var_export($le_json,true).'</pre>' ; exit(0); */
    echo $le_json ;
    /* on a capturé une erreur de type 500, on force la réponse en 200 */
    http_response_code(200);
    exit(0);

}
/*
  =====================================================================================================================
  %tagada% => %tagada%
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
  %tagada% => \%tagada\%
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
*/
function critere_liste(&$a,$b){

    
    if(isset($a[$b]) && $a[$b] !== ''){

        return $b . '(\'' . str_replace('\'','\\\'',str_replace('\\','\\\\',$a[$b])) . '\')';

    }

    return '';

}
/*
  =====================================================================================================================
*/
function ajoute_message(&$donnees_retournees,$i,$m){

    
    if(__xer === $i || __xsu === $i || __xal === $i || __xif === $i || __xdv === $i){

        $donnees_retournees[__xsi][$i][]=$m;

    }else{

        $donnees_retournees[__xsi][0][]=$m;
    }


}
/*
  =====================================================================================================================
*/
function sauvegarder_et_supprimer_fichier($chemin){

    /*$ne_pas_faire_une_sauvegarde]{*/
    
    if(!isset($_SESSION[_CA_]['chi_id_projet'])){

        /*
          on ne peut pas supprimer un fichier si on n'a pas sélectionné un environnement
        */
        return false;

    }

    $chemin_absolu_reference=realpath($chemin);
    $chemin_absolu_reference=substr(str_replace(__CHEMIN_ABSOLU_SITE__,'',$chemin_absolu_reference),2 + strlen('rev_' . $_SESSION[_CA_]['chi_id_projet']));
    $chemin_date=date('Y') . DIRECTORY_SEPARATOR . date('m') . DIRECTORY_SEPARATOR . date('d') . DIRECTORY_SEPARATOR;
    $chemin_absolu_sauvegarde=__CHEMIN_ABSOLU_SITE__ . 'sauvegarde_fichiers/rev_' . $_SESSION[_CA_]['chi_id_projet'] . DIRECTORY_SEPARATOR . $chemin_date . $chemin_absolu_reference . '.' . uniqid() . '.bak';
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_absolu_sauvegarde , true ) . '</pre>' ; exit(0); */
    $dossier=dirname($chemin_absolu_sauvegarde);
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $dossier , true ) . '</pre>' ; exit(0);*/
    
    if(!is_dir($dossier)){

        
        if(!mkdir($dossier,0777,true)){

            return false;

        }


    }

    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chemin_absolu_sauvegarde , true ) . '</pre>' ; exit(0);*/
    
    if(is_file($chemin)){

        
        if(rename($chemin,$chemin_absolu_sauvegarde)){

            return true;

        }else{

            return false;
        }


    }else{

        return true;
    }

    return false;

}
/*
  =====================================================================================================================
*/
function supprimer_fichier_sans_sauvegarde($chemin){

    $chemin_absolu_origine=realpath($chemin);
    
    if(is_file($chemin_absolu_origine)){

        
        if((@unlink($chemin_absolu_origine))){

            return true;

        }


    }else{

        return true;
    }

    return false;

}
/*
  =====================================================================================================================
*/
function demarre_services(&$donnees_retournees){

    
    if(session_status() === PHP_SESSION_NONE){

        session_start();

    }

    $GLOBALS[__BDD][BASE_REFERENCE]=array(
        'id' => BASE_REFERENCE,
        'nom_bdd' => 'bdd_' . BASE_REFERENCE . '.sqlite',
        PREFIXE_BDD => 'bdd_' . BASE_REFERENCE . '',
        'fournisseur' => 'sqlite',
        'initialisation_bdd' => array( 'PRAGMA encoding = "UTF-8";', 'PRAGMA journal_mode=WAL;', 'PRAGMA foreign_keys=ON;'),
        'chemin_bdd' => '',
        LIEN_BDD => null
    );
    if(substr(_CA_,-7)==='_rev_1_'){
        $chemin_bdd=__RACINE_PGMS__ . '__bdd_sqlite/bdd_1.sqlite';
    }else{
        $chemin_bdd=$GLOBALS['chemin_des_bdds'] . 'bdd_1.sqlite';
    }
    if(!file_exists($chemin_bdd)){

        $chemin_bdd_dump=__RACINE_PGMS__ . '__bdd_sqlite/' . $GLOBALS[__BDD][1]['nom_bdd'] . '.sql';
        
        if(!is_file($chemin_bdd_dump)){

            return;

        }

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
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[_CA_]['chi_id_projet'] , true ) . '</pre>' ; exit(0);*/
    
    if(substr(_CA_,-7) === '_rev_1_'){

        /*
          dans l'outil de développement, on peut charger que la base système principale et la base système cible
        */
        
        if(isset($_SESSION[_CA_]['chi_id_projet'])
           && !($_SESSION[_CA_]['chi_id_projet'] === 1
                   || $_SESSION[_CA_]['chi_id_projet'] === 2
                   || $_SESSION[_CA_]['chi_id_projet'] === 0)
        ){

            define('BDD_NUMERO_1',$_SESSION[_CA_]['chi_id_projet']);
            $GLOBALS['BDD_NUMERO_1']=$_SESSION[_CA_]['chi_id_projet'];
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


    }else{

        define('BDD_NUMERO_1',1);
        $GLOBALS['BDD_NUMERO_1']=1;
    }

    foreach($GLOBALS[__BDD] as $k1 => $v1){
        if(substr(_CA_,-7) === '_rev_1_' || substr(_CA_,-7) === '_rev_2_' ){
            $chemin_bdd=__RACINE_PGMS__ . '__bdd_sqlite' . DIRECTORY_SEPARATOR . $v1['nom_bdd'];
        }else{
            $chemin_bdd=$GLOBALS['chemin_des_bdds'] . $v1['nom_bdd'];
        }
        $GLOBALS[__BDD][$k1]['chemin_bdd']=$chemin_bdd;
        $db=new SQLite3($chemin_bdd);
        $GLOBALS[__BDD][$k1][LIEN_BDD]=$db;
        /*
          mode objet pour php [ try{}catch[Exception $e]{}
        */
        $GLOBALS[__BDD][$k1][LIEN_BDD]->enableExceptions(true);
        foreach($v1['initialisation_bdd'] as $k2 => $v2){
            $ret=$db->querySingle($v2);
        }
        if(substr(_CA_,-7) === '_rev_1_' || substr(_CA_,-7) === '_rev_2_'){
            $pragmas_dbs[]='attach database "' . __RACINE_PGMS__ . '__bdd_sqlite/' . 'bdd_' . $k1 . '.sqlite" as `bdd_' . $k1 . '`;';
        }else{
            $pragmas_dbs[]='attach database "' . $GLOBALS['chemin_des_bdds'] . 'bdd_' . $k1 . '.sqlite" as `bdd_' . $k1 . '`;';
        }
    }

    $ddd=array();
    foreach($GLOBALS[__BDD] as $k1 => $v1){
        foreach($pragmas_dbs as $k2 => $v2){
            try{
                $ret=$db->querySingle($v2);
                $ddd[]=$k1 . ' ' . $v2;
            }catch(Exception $e){
//                echo __FILE__ . ' ' . __LINE__ . ' $k1  = ' . $k1 . ' $v2='.var_export( $v2 , true) .'<pre>' . var_export($e->getMessage(),true) . '</pre><pre>' . var_export($GLOBALS[__BDD],true) . '</pre><pre>' . var_export($v2,true) . '</pre>' ;
//                exit(0);
            }
        }
    }

}
/*
  =====================================================================================================================
*/
$GLOBALS['__parametres']=array();
$GLOBALS[__date]=date('Y-m-d H:i:s');
$decimalPart=(int)(fmod(microtime(true),1) * 1000);
$decimalPart=$decimalPart < 10 ? '00' . $decimalPart : ($decimalPart < 100 ? '0' . $decimalPart : '' . $decimalPart);
$GLOBALS[__date_ms]=$GLOBALS[__date] . '.' . $decimalPart;
$GLOBALS[__BDD]=array();
$GLOBALS[DEVER_SRV]=0;
/*
  =====================================================================================================================
*/
$donnees_retournees=array(
    /* la version en cours */
    '__version' => __version,
    /*statut de la réponse, à priori faux*/
    __xst => __xer,
    /*signaux d'erreur, d'alerte, de succès... */
    __xsi => array(
            __xer => array(),
            __xsu => array(),
            __xal => array(),
            __xif => array(),
            __xdv => array()
        ),
    /*action*/
    __xac => '',
    /*données retournées au client */
    __xva => array(),
    '_CA_' => _CA_,
    '__mah' => __xer
);
demarre_services($donnees_retournees);
require_once(__RACINE_PGMS__ . '__fnt1.php');
$GLOBALS['__fnt1']=new __fnt1();
require_once(__RACINE_PGMS__ . '__rev_vers_matrice1.php');
$GLOBALS['__rev_vers_matrice1']=new __rev_vers_matrice1();
/*
  =====================================================================================================================
*/
function appel_fonction(&$mat,$d,&$donnees_retournees,&$donnees_recues){

    /* echo __FILE__ . ' ' . __LINE__ . ' $d='.$d.' = <pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
    /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_recues=<pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
    $liste_des_programmes_charges=array();
    $une_erreur=__xer;
    $l01=count($mat);
    $un_pm1_trouve=0;
    $un_m1_trouve=0;
    $__autorisations=array();
    $GLOBALS['___aurorisation_verifiee']=false;
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[_CA_] , true ) . '</pre>' ; exit(0);*/
    
    if(isset($_SESSION[_CA_]['chi_id_acces']) && $_SESSION[_CA_]['chi_id_acces'] > 1){

        /* chx_acces_utilisateur*/
        $nom_fichier_acces='___autorisations1_pour_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php';
        if(is_file($nom_fichier_acces)){
            include($nom_fichier_acces);
        }else{
            include('___autorisations1_pour_acces_0_.php');
        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $__autorisations , true ) . '</pre>' ; exit(0);*/

    }else{

        include('___autorisations1_pour_acces_0_.php');
    }

    /* if($mat[6][1]!=='init0'){*/
    /* echo __FILE__ . ' ' . __LINE__ . ' $d='.$d.' = <pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
    /* }*/
    for( $pm1=$d ; $pm1 < $l01 && $une_erreur === __xer ; $pm1=$mat[$pm1][12] ){
        
        
        if($mat[$pm1][1] === 'pm1' && $mat[$pm1][2] === 'f'){

            $un_pm1_trouve++;
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
            for( $i=$pm1 + 1 ; $i < $l01 && $une_erreur === __xer ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'm1' && $mat[$i][2] === 'f'){

                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat[$i+4][1] , true ) . '</pre>' ; exit(0);*/
                    $nom_module='';
                    $indice=0;
                    $un_m1_trouve++;
                    for( $j=$i + 1 ; $j < $l01 && $une_erreur === __xer ; $j=$mat[$j][12] ){
                        
                        
                        if($mat[$j][1] === 'n1' && $mat[$i][2] === 'f' && $mat[$j][8] === 1){

                            $nom_module=$mat[$j + 1][1];
                            /* echo __FILE__ . ' ' . __LINE__ . ' $nom_module = ' . $nom_module . '' ; exit(0);*/

                        }else if($mat[$j][1] === 'f1' && $mat[$i][2] === 'f'){

                            $indice=$j;
                            /* echo __FILE__ . ' ' . __LINE__ . ' $indice = ' . $indice . '' ; exit(0);*/
                        }

                    }
                    /* echo __FILE__ . ' ' . __LINE__ . ' <br />$nom_module = ' . $nom_module . ' <br />$indice = ' . $indice . ' ' ; exit(0);*/
                    
                    if($nom_module !== '' && $indice > 0){

                        
                        if($GLOBALS['___aurorisation_verifiee'] === false){

                            
                            if(isset($_SESSION[_CA_]['chi_id_acces'])){

                                
                                if($_SESSION[_CA_]['chi_id_acces'] === 1){

                                    /*
                                      l'utilisateur 1 a tous les droits
                                    */
                                    $GLOBALS['___aurorisation_verifiee']=true;

                                }else{

                                    
                                    if(isset($__autorisations[$nom_module . '.php'])){

                                        $GLOBALS['___aurorisation_verifiee']=true;

                                    }

                                }


                            }else{

                                
                                if(isset($__autorisations[$nom_module . '.php'])){

                                    $GLOBALS['___aurorisation_verifiee']=true;

                                }

                            }


                        }

                        
                        if($GLOBALS['___aurorisation_verifiee'] === false){

                            $donnees_retournees[__xsi][__xer][]='le module ' . $nom_module . ' php n\'est pas autorisé ou bien vous êtes déconnecté [' . __LINE__ . ']';

                        }else{

                            for( $j=$indice + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                                
                                $fonction=$mat[$j][1];
                                /* echo __FILE__ . ' ' . __LINE__ . '<br /> $nom_module = ' . $nom_module . ', <br />f='.$mat[$j][1].'' ; exit(0);*/
                                $programme=__RACINE_PGMS__ . $nom_module . '.php';
                                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $programme , true ) . '</pre>' ; exit(0);*/
                                
                                if(!is_file($programme)){

                                    $donnees_retournees[__xst]=__xer;
                                    $donnees_retournees[__xsi][__xer][]='le fichier "' . $nom_module . '" est introuvable sur le serveur [' . __FUNCTION__ . '] [' . __LINE__ . ']';
                                    /* $donnees_retournees[__xme]='le fichier "'.$nom_module.'" est introuvable sur le serveur ['.__FUNCTION__.'] [' . __LINE__ . ']';*/

                                }else{

                                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __RACINE_PGMS__.$nom_module . '.php' , true ) . '</pre>' ; exit(0);*/
                                    require_once($programme);
                                    $obj=new $nom_module($mat,$i,$donnees_retournees,$donnees_recues);
                                    
                                    if($donnees_retournees[__xst] !== __xsu){

                                        $donnees_retournees[__xsi][__xer][]=' l\'initialisation du module ' . $nom_module . ' n\'a pas fonctionné [' . __LINE__ . ']';
                                        $donnees_retournees[__xst]=__xsu;
                                        $une_erreur=__xsu;
                                        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/

                                    }else{

                                        
                                        if($fonction !== 'init0'){

                                            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $fonction , true ) . '</pre>' ; exit(0);*/

                                        }

                                        $liste_des_programmes_charges[$programme]=$obj;
                                        $obj->$fonction($mat,$j,$donnees_retournees,$donnees_recues);
                                        /* echo __FILE__ . ' ' . __LINE__ . '<br /> __xst = ' . $donnees_retournees[__xst]  . ' ' ; exit(0);*/
                                        
                                        if($donnees_retournees[__xst] !== __xsu){

                                            $une_erreur=__xsu;

                                        }

                                    }

                                }

                            }
                        }


                    }else{

                        
                        if($nom_module === ''){

                            $donnees_retournees[__xsi][__xer][]='n1() est absent de <br /><b>' . enti1($donnees_recues[__xac]) . '</b><br /> -&gt; pm1(m1(n1(),f1()))? [' . __LINE__ . ']';

                        }else{

                            $donnees_retournees[__xsi][__xer][]='f1() est absent de <br /><b>' . enti1($donnees_recues[__xac]) . '</b><br /> -&gt; pm1(m1(n1(),f1()))? [' . __LINE__ . ']';
                        }

                    }


                }

                
                if($un_m1_trouve === 0){

                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $un_m1_trouve , true ) . '</pre>' ; exit(0);*/
                    $donnees_retournees[__xsi][__xer][]='m1 est absent de pm1() dans <br />' . enti1($donnees_recues[__xac]) . '<br /> -&gt; pm1(<b style="font-size:1.05rem;">m1</b>(n1(),f1())) ';
                    $une_erreur=__xsu;

                }

            }

        }

    }
    
    if($un_pm1_trouve === 0){

        /* echo __FILE__ . ' ' . __LINE__ . ' $d='.$d.' = $donnees_recues<pre>' . var_export( $donnees_recues , true ) . '</pre><pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
        
        if('pm1(m1(n1(__interface1),f1(init0())))' === $donnees_recues[__xac]){

            /*l'initialisation est une exception*/

        }else{

            /* echo __FILE__ . ' ' . __LINE__ . ' $d='.$d.' = $donnees_recues<pre>' . var_export( $donnees_recues , true ) . '</pre><pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
            $donnees_retournees[__xsi][__xer][]='pm1() est absent de <br /><b>' . enti1($donnees_recues[__xac]) . '</b><br /> -&gt; pm1(m1(n1(),f1()))? [' . __LINE__ . ']';
        }


    }


}
/*
  =====================================================================================================================
*/

if(isset($_POST) && count($_POST) > 0 && isset($_GET['__obj']) && isset($_POST['__obj'])){

    $donnees_retournees[__xva]['chi_id_utilisateur']=$_SESSION[_CA_]['chi_id_utilisateur']??0;
    $donnees_retournees[__xva]['chp_nom_de_connexion_utilisateur']=$_SESSION[_CA_]['chp_nom_de_connexion_utilisateur']??'';
    $donnees_retournees[__xva]['chi_id_acces']=$_SESSION[_CA_]['chi_id_acces']??0;
    $donnees_retournees[__xva]['chi_id_projet']=$_SESSION[_CA_]['chi_id_projet']??0;
    $donnees_recues=json_decode($_POST['__obj'],true);
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
    $donnees_retournees[__xac]=$donnees_recues[__xac];
    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
    
    if(isset($donnees_recues[__xva]['__parametres'])){

        $GLOBALS['__parametres']=$donnees_recues[__xva]['__parametres'];
        
        if(isset($GLOBALS['__parametres']['--deverminage'])){

            $GLOBALS[DEVER_SRV]=$GLOBALS['__parametres']['--deverminage']['valeur'];

        }


    }

    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues['mat'] , true ) . '</pre>' ; exit(0);*/
    
    if(isset($donnees_recues['mat'])){

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues['mat'] , true ) . '</pre>' ; exit(0);*/
        appel_fonction($donnees_recues['mat'],1,$donnees_retournees,$donnees_recues);
        /* echo __FILE__ . ' ' . __LINE__ . '<br /> __xst = ' . $donnees_retournees[__xst]  . ' ' ; exit(0);*/

    }


}

/* if($fdtoto=fopen('toto.txt','a+')){ fwrite($fdtoto, PHP_EOL.var_export($donnees_retournees,true) ); fclose($fdtoto); }*/
/* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_retournees , true ) . '</pre>' ; exit(0);*/
foreach($GLOBALS[__BDD] as $k1 => $v1){
    
    if(!is_null($GLOBALS[__BDD][$k1][LIEN_BDD])){

        $GLOBALS[__BDD][$k1][LIEN_BDD]->close();

    }

}
header('Content-Type: application/json; charset=utf-8');
echo json_encode($donnees_retournees,JSON_FORCE_OBJECT) ;
exit(0);