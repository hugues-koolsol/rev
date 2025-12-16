<?php
session_start();
/*
  ce programme appelé par ajax 
  - définit les constantes principales
  - appelle la partie serveur
*/
$__cle_app=str_replace('/','_',$_SERVER['HTTP_HOST'] . substr($_SERVER['PHP_SELF'],0,strrpos($_SERVER['PHP_SELF'],'/'))) . '_';
/* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $__cle_app , true ) . '</pre>' ; exit(0);*/
define('_CA_',$__cle_app);
/* frev\\divers\\site003\\'*/
define('__CHEMIN_ABSOLU_SITE__',dirname(__FILE__,2) . DIRECTORY_SEPARATOR);
/* frev\\divers\\site003\\rev_1'*/
define('__CHEMIN_ABSOLU_PROJET__',dirname(__FILE__,1) . DIRECTORY_SEPARATOR);
define('__CHEMIN_ABSOLU_TEMPORAIRES__',__CHEMIN_ABSOLU_SITE__ . 'temporaires' . DIRECTORY_SEPARATOR);
define('__RACINE_PGMS__',__CHEMIN_ABSOLU_PROJET__ . '__serveur' . DIRECTORY_SEPARATOR);
require_once('___chemins.php');

if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){

    $nom1=__CHEMIN_ABSOLU_SITE__ . DIRECTORY_SEPARATOR . 'rev_' . $_SESSION[_CA_]['chi_id_projet'] . DIRECTORY_SEPARATOR;
    $lon1=strlen($nom1);
    $GLOBALS['chemin_de_la_racine']=str_replace(substr($GLOBALS['chemin_de_la_racine'],0,$lon1),$nom1,$GLOBALS['chemin_de_la_racine']);

}

require_once(__RACINE_PGMS__ . '___serveur_app.php');