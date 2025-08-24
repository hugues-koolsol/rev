<?php
require_once('__definitions.php');
$GLOBALS['__date']=date('Y-m-d H:i:s');
$decimalPart=(int)(fmod(microtime(true),1) * 1000);
$decimalPart=$decimalPart < 10 ? '00' . $decimalPart : ($decimalPart < 100 ? '0' . $decimalPart : '' . $decimalPart);
$GLOBALS['__date_ms']=$GLOBALS[__date] . '.' . $decimalPart;
echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($GLOBALS['__date_ms'],true) . '</pre>' ;
exit(0);
echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($GLOBALS,true) . '</pre>' ;
exit(0);
exit(0);
/* KO $data='toto|s:9:"tata|titi";tutu|s:11:"tete|tyty|"";_123|s:6:"blabla";rev_1|a:4:{s:26:"chi_id_utilisateur_initial";i:1;s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";s:16:"c_taches1.liste1";a:2:{s:19:"chp_priorite_tache2";s:2:"99";s:10:"__num_page";s:1:"0";}}';*/
define("SESSION_DELIM","|");
function unserialize_session($session_data,$start_index=0,&$dict=null){

    isset($dict) || ($dict=array());
    echo __FILE__ . ' ' . __LINE__ . ' en entréé : = <pre>' . var_export(substr($session_data,$start_index),true) . '</pre>' ;
    $name_end=strpos($session_data,SESSION_DELIM,$start_index);
    
    if($name_end !== true){

        $name=substr($session_data,$start_index,$name_end - $start_index);
        $rest=substr($session_data,$name_end + 1);
        $value=@unserialize($rest);
        /* PHP will unserialize up to "|" delimiter.*/
        $dict[$name]=$value;
        return unserialize_session($session_data,$name_end + 1 + strlen(serialize($value)),$dict);

    }

    return $dict;

}
/* OK $data='toto|s:9:"tata|titi";';*/
$data='toto|s:9:"tata|titi";tutu|s:11:"tete|tyty|"";_123|s:6:"blabla";rev_1|a:4:{s:26:"chi_id_utilisateur_initial";i:1;s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";s:16:"c_taches1.liste1";a:2:{s:19:"chp_priorite_tache2";s:2:"99";s:10:"__num_page";s:1:"0";}}';
$toto=unserialize_session($data);
echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($toto,true) . '</pre>' ;
exit(0);
$texte="c_divers1.creer_un_message_exemple( type(__xer) , valeur( 'un exemple de message d\\'erreur' ))";
$obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($texte);
/* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $obj_matrice[__xva][5][1]  . '</pre>' ; exit(0);*/
/* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SERVER , true)  . '</pre>' ; exit(0);*/