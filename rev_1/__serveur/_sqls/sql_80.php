<?php
function sql_80($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
      `T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chp__dtm_utilisateur` , `T0`.`chp__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
      `T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_utilisateurs T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_utilisateur`',$par['T0_chi_id_utilisateur']);
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_utilisateur' => $tab0[0],
                'T0.chp_nom_de_connexion_utilisateur' => $tab0[1],
                'T0.chp_mot_de_passe_utilisateur' => $tab0[2],
                'T0.chp_parametres_utilisateur' => $tab0[3],
                'T0.chi_compteur1_utilisateur' => $tab0[4],
                'T0.chi_compteur_socket1_utilisateur' => $tab0[5],
                'T0.che__nur_utilisateur' => $tab0[6],
                'T0.chp__dtm_utilisateur' => $tab0[7],
                'T0.chp__dtc_utilisateur' => $tab0[8],
                'T0.chx_acces_utilisateur' => $tab0[9],
                'T1.chp_nom_acces' => $tab0[10],
                'T1.chx_groupe_acces' => $tab0[11],
                'T1.chx_metier_acces' => $tab0[12],
                'T1.chp_nom_acces' => $tab0[13],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la selection sur les utilisateurs' , 'exception' => $e , 'id_bdd' => BDD_NUMERO_1 );
    }
}
