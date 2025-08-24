<?php
/* hello !*/

if(isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST']){

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
    /* A string from a PHP session store.*/
    $t=$session_data='rev_1|a:4:{s:26:"chi_id_utilisateur_initial";i:1;s:5:"bidon";s:29:"bidon|bidon "et" encore bidon";s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";}rev_2|a:3:{s:26:"chi_id_utilisateur_initial";i:1;s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";}';
    $session_dict=unserialize_session($session_data);
    echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($session_dict,true) . '</pre>' ;
    exit(0);
    echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($u,true) . '</pre>' ;
    exit(0);
    echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($_SERVER,true) . '</pre>' ;
    exit(0);

}
