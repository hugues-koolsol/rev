<?php
define("SESSION_DELIM","|");
function unserialize_session($session_data,$start_index=0,&$dict=null){

    isset($dict) || ($dict=array());
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
$contenu=file_get_contents('C:\wamp64\\tmp\\' . $argv[1]);

if($contenu === false){

    echo 'erreur' ;
    exit;

}

$valeurs=unserialize_session($contenu);
echo json_encode($valeurs,JSON_FORCE_OBJECT) ;