<?php
/* hello !*/

if(isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST']){

    /* KO    $t='rev_2|a:9:{s:26:"chi_id_utilisateur_initial";i:1;s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";a:1:{s:21:"compteur_session_php1";i:0;}s:30:"c_projets1.page_projets_liste1";a:3:{s:16:"T0_chi_id_projet";s:0:"";s:17:"T0_chp_nom_projet";s:0:"";s:10:"__num_page";i:0;}s:13:"chi_id_projet";i:1;s:34:"c_sources1.page_liste_des_sources1";a:4:{s:10:"__num_page";s:1:"0";s:16:"T0_chi_id_source";s:0:"";s:17:"T0_chp_nom_source";s:3:"ser";s:24:"T0_chx_dossier_id_source";s:0:"";}s:28:"c_revs1.page_liste_des_revs1";a:6:{s:10:"__num_page";s:2:"10";s:13:"T0_chi_id_rev";s:0:"";s:21:"T0_chp_provenance_rev";s:0:"";s:17:"T0_chx_source_rev";s:0:"";s:17:"T1_chp_nom_source";s:0:"";s:17:"T0_chp_valeur_rev";s:0:"";}s:36:"c_requetes1.page_liste_des_requetes1";a:4:{s:10:"__num_page";i:0;s:17:"T0_chi_id_requete";s:0:"";s:18:"T0_cht_rev_requete";s:0:"";s:19:"T0_chp_type_requete";s:0:"";}s:30:"c_bases1.page_liste_des_bases1";a:3:{s:16:"T0_chi_id_basedd";s:0:"";s:24:"T0_chx_dossier_id_basedd";s:0:"";s:10:"__num_page";i:0;}}pla3412_1_9_8_2token|s:64:"8ba4eca7287ae51bb77613a90ce5056f51bd2a94b3dba6af9f55bf43d958b12f";pla3412_1_9_8_2_salt|s:22:"axjlQjcVK9VFuTbVf7Pi6f";pla3412_1_9_8_2password|s:32:"75e145c0da90362297dc1015b163e654";pla3412_1_9_8_2sortTables|s:4:"name";pla3412_1_9_8_2orderTables|s:3:"ASC";pla3412_1_9_8_2sortRows|s:14:"chp_niveau_rev";pla3412_1_9_8_2currentTable|s:8:"tbl_revs";pla3412_1_9_8_2orderRows|s:4:"DESC";rev_1|a:11:{s:26:"chi_id_utilisateur_initial";i:1;s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";a:1:{s:21:"compteur_session_php1";i:5;}s:32:"c_taches1.page_liste_des_taches1";a:5:{s:15:"T0_chi_id_tache";s:0:"";s:18:"T0_chp_texte_tache";s:0:"";s:21:"T0_chp_priorite_tache";s:0:"";s:22:"T0_chp_priorite_tache2";s:2:"99";s:10:"__num_page";i:0;}s:30:"c_projets1.page_projets_liste1";a:3:{s:16:"T0_chi_id_projet";s:0:"";s:17:"T0_chp_nom_projet";s:0:"";s:10:"__num_page";i:0;}s:13:"chi_id_projet";i:1;s:32:"c_dossiers1.page_dossiers_liste1";a:4:{s:17:"T0_chi_id_dossier";s:0:"";s:18:"T0_chp_nom_dossier";s:0:"";s:21:"T0_chx_parent_dossier";s:0:"";s:10:"__num_page";i:0;}s:30:"c_bases1.page_liste_des_bases1";a:3:{s:16:"T0_chi_id_basedd";s:0:"";s:24:"T0_chx_dossier_id_basedd";s:0:"";s:10:"__num_page";i:0;}s:36:"c_requetes1.page_liste_des_requetes1";a:4:{s:17:"T0_chi_id_requete";s:0:"";s:19:"T0_chp_type_requete";s:0:"";s:18:"T0_cht_rev_requete";s:0:"";s:10:"__num_page";i:0;}s:34:"c_sources1.page_liste_des_sources1";a:4:{s:16:"T0_chi_id_source";s:0:"";s:24:"T0_chx_dossier_id_source";s:0:"";s:17:"T0_chp_nom_source";s:0:"";s:10:"__num_page";i:0;}s:28:"c_revs1.page_liste_des_revs1";a:6:{s:13:"T0_chi_id_rev";s:0:"";s:17:"T0_chp_valeur_rev";s:0:"";s:21:"T0_chp_provenance_rev";s:0:"";s:17:"T1_chp_nom_source";s:0:"";s:17:"T0_chx_source_rev";s:0:"";s:10:"__num_page";i:0;}}';*/
    /* OK    $t='a:1:{s:21:"compteur_session_php1";i:0;}';*/
    /* KO    $t='rev_2|a:3:{s:26:"chi_id_utilisateur_initial";i:1;s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";a:1:{s:21:"compteur_session_php1";i:0;}}rev_1|a:4:{s:26:"chi_id_utilisateur_initial";i:1;s:5:"bidon";s:29:"bidon|bidon "et" encore bidon";s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";a:1:{s:21:"compteur_session_php1";i:0;}}';*/
    /* OK    $t='a:4:{s:26:"chi_id_utilisateur_initial";i:1;s:5:"bidon";s:11:"bidon|bidon";s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";a:1:{s:21:"compteur_session_php1";i:0;}}';*/
    /* $u=unserialize($t,['allowed_classes' => true]);*/
    /* https://gist.github.com/phred/1201412*/
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
    $t=$session_data='rev_1|a:4:{s:26:"chi_id_utilisateur_initial";i:1;s:5:"bidon";s:29:"bidon|bidon "et" encore bidon";s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";a:1:{s:21:"compteur_session_php1";i:9;}}rev_2|a:3:{s:26:"chi_id_utilisateur_initial";i:1;s:26:"chi_id_utilisateur_courant";i:1;s:5:"__xva";a:1:{s:21:"compteur_session_php1";i:0;}}';
    $session_dict=unserialize_session($session_data);
    echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($session_dict,true) . '</pre>' ;
    exit(0);
    echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($u,true) . '</pre>' ;
    exit(0);
    echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export($_SERVER,true) . '</pre>' ;
    exit(0);

}
