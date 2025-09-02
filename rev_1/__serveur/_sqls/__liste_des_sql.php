<?php
$__liste_des_sql=array (
  101 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T0`.`chx_acces_utilisateur`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
LIMIT 1 OFFSET 0 
;',
    'cht_commentaire_requete' => 'utilisateur par nom_de_connexion',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  102 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
   AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2
   AND `T0`.`cht_commentaire_requete` LIKE :T0_cht_commentaire_requete
   AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete) 
ORDER BY `T0`.`chi_id_requete` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'liste des requêtes',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  103 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `chi_id_requete` = :n_chi_id_requete , 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  104 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_requetes
WHERE (`chi_id_requete` = :chi_id_requete
   AND `chx_projet_requete` = :chx_projet_requete) ;',
    'cht_commentaire_requete' => 'requête par id',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  105 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev
   AND `chp_provenance_rev` = :chp_provenance_rev
   AND `chx_source_rev` = :chx_source_rev) ;',
    'cht_commentaire_requete' => 'revs par provenance, source et projet',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  106 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
 FROM b1.tbl_requetes T0
WHERE (`T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',
    'cht_commentaire_requete' => 'requêtes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  107 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_requetes`(
    `chx_projet_requete` , 
    `chp_type_requete` , 
    `cht_rev_requete` , 
    `cht_sql_requete` , 
    `cht_php_requete` , 
    `cht_commentaire_requete`
) VALUES (
    :chx_projet_requete , 
    :chp_type_requete , 
    :cht_rev_requete , 
    :cht_sql_requete , 
    :cht_php_requete , 
    :cht_commentaire_requete
);',
    'cht_commentaire_requete' => 'requêtes',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  108 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chp_parametres_utilisateur` = :n_chp_parametres_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  109 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `chp_type_requete` = :n_chp_type_requete , 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_php_requete` = :n_cht_php_requete , 
   `cht_commentaire_requete` = :n_cht_commentaire_requete , 
   `cht_matrice_requete` = :n_cht_matrice_requete , 
   `che_est_souche_requete` = :n_che_est_souche_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => 'requêtes',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  110 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  111 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
 FROM b1.tbl_bdds T0
WHERE ( /* */ `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  112 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_revs`(
    `chx_projet_rev` , 
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
    :chx_projet_rev , 
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
);',
    'cht_commentaire_requete' => 'revs',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  113 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_rev` , `T0`.`chx_projet_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , 
`T0`.`chp_valeur_rev` , `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , 
`T0`.`chp_pos_dernier_rev` , `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , 
`T0`.`chp_pos_ouver_parenthese_rev` , `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
 FROM b1.tbl_revs T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev

WHERE ( /* */ `T0`.`chi_id_rev` = :T0_chi_id_rev
   AND `T0`.`chx_projet_rev` = :T0_chx_projet_rev
   AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
   AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
   AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
   AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
ORDER BY `T0`.`chi_id_rev` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'revs',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  114 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev) ;',
    'cht_commentaire_requete' => 'revs par projet',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  115 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chx_dossier_id_basedd` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd) 
ORDER BY `T0`.`chi_id_basedd` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  116 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chx_dossier_id_basedd` = :n_chx_dossier_id_basedd , 
   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  117 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_bdds`(
    `chx_dossier_id_basedd` , 
    `chx_projet_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_fournisseur_basedd`
) VALUES (
    :chx_dossier_id_basedd , 
    :chx_projet_id_basedd , 
    :chp_commentaire_basedd , 
    :chp_fournisseur_basedd
);',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  118 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_bdds
WHERE (`chi_id_basedd` = :chi_id_basedd
   AND `chx_projet_id_basedd` = :chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => 'base par id',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  119 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
`T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T0`.`chx_projet_tache`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
   AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2
   AND `T0`.`chx_projet_tache` = :T0_chx_projet_tache) 
ORDER BY `T0`.`chp_priorite_tache` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'tâches',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  120 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache-1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` >= 1
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',
    'cht_commentaire_requete' => 'tâches priorité - 1',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  121 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` < 99
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',
    'cht_commentaire_requete' => 'tâches priorité + 1',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  122 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',
    'cht_commentaire_requete' => 'tâches',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  123 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  124 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_acces SET 
   `cht_parametres_acces` = :n_cht_parametres_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',
    'cht_commentaire_requete' => 'accès paramètres par id',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  125 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` IN (:liste_des_ids_a_supprimer)
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',
    'cht_commentaire_requete' => '***dispo***',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  126 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
`T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
`T2`.`chp_nom_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',
    'cht_commentaire_requete' => 'base par id',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  127 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T1`.`chx_parent_dossier` , 
`T2`.`chi_id_projet` , `T2`.`chp_nom_projet` , `T2`.`cht_commentaire_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd
;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  128 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chx_projet_tache` = :T0_chx_projet_tache)
;',
    'cht_commentaire_requete' => 'tâches par id',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  129 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',
    'cht_commentaire_requete' => 'tâches texte et priorité par id',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  130 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_taches`(
    `chx_utilisateur_tache` , 
    `chp_texte_tache` , 
    `chp_priorite_tache` , 
    `chx_projet_tache` , 
    `chd__dtm_tache` , 
    `chd__dtc_tache`
) VALUES (
    :chx_utilisateur_tache , 
    :chp_texte_tache , 
    :chp_priorite_tache , 
    :chx_projet_tache , 
    :chd__dtm_tache , 
    :chd__dtc_tache
);',
    'cht_commentaire_requete' => 'tâches',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
  ),
  131 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_taches
WHERE ( /* */ `chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache
   AND `chx_projet_tache` = :chx_projet_tache) ;',
    'cht_commentaire_requete' => 'tâches par id',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  132 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',
    'cht_commentaire_requete' => 'requetes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  133 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
 FROM b1.tbl_projets T0
WHERE ( /* */ `T0`.`chi_id_projet` = :T0_chi_id_projet
   AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
   AND `T0`.`cht_commentaire_projet` LIKE :T0_cht_commentaire_projet) 
ORDER BY `T0`.`chi_id_projet` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  134 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
`T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier`
 FROM b1.tbl_projets T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet

WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  135 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => 'requêtes',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  136 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/

INSERT INTO b1.`tbl_projets`(
    `chp_nom_projet` , 
    `cht_commentaire_projet`
) VALUES (
    :chp_nom_projet , 
    :cht_commentaire_projet
);',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  137 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_dossiers`(
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  139 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_sources
WHERE (`chi_id_source` = :chi_id_source
   AND `chx_projet_id_source` = :chx_projet_id_source) ;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  140 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd`
 FROM b1.tbl_bdds T0
;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  141 => 
  array (
    'cht_sql_requete' => 'BEGIN TRANSACTION;',
    'cht_commentaire_requete' => 'sur base 1',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  142 => 
  array (
    'cht_sql_requete' => 'COMMIT;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  143 => 
  array (
    'cht_sql_requete' => 'ROLLBACK;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  144 => 
  array (
    'cht_sql_requete' => 'ALTER TABLE :nom_de_la_table DROP COLUMN :nom_du_champ',
    'cht_commentaire_requete' => '***dispo***',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  145 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE (`chi_id_projet` = :chi_id_projet) ;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  146 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
WHERE (`T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
   AND `T0`.`che_binaire_source` = :T0_che_binaire_source)
;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  147 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  148 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet , 
   `cht_commentaire_projet` = :n_cht_commentaire_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  149 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`che_est_souche_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chi_id_requete` < :nb_max
   AND 1 = 1) 
ORDER BY `T0`.`chi_id_requete` ASC
;',
    'cht_commentaire_requete' => 'requetes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  150 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
`T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  151 => 
  array (
    'cht_sql_requete' => 'BEGIN TRANSACTION;',
    'cht_commentaire_requete' => 'sur base 1',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  152 => 
  array (
    'cht_sql_requete' => 'COMMIT;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  153 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
`T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
   AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier) 
ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'liste des dossiers',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  154 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_sources`(
    `chx_dossier_id_source` , 
    `chx_projet_id_source` , 
    `chp_nom_source` , 
    `cht_commentaire_source` , 
    `cht_rev_source` , 
    `cht_genere_source` , 
    `che_binaire_source`
) VALUES (
    :chx_dossier_id_source , 
    :chx_projet_id_source , 
    :chp_nom_source , 
    :cht_commentaire_source , 
    :cht_rev_source , 
    :cht_genere_source , 
    :che_binaire_source
);',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  155 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_dossiers SET 
   `chp_nom_dossier` = :n_chp_nom_dossier , 
   `chx_parent_dossier` = :n_chx_parent_dossier , 
   `che_contient_genere_dossier` = :n_che_contient_genere_dossier
WHERE (`chi_id_dossier` = :c_chi_id_dossier
   AND `chx_projet_dossier` = :c_chx_projet_dossier) ;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  156 => 
  array (
    'cht_sql_requete' => 'INSERT INTO `tbl_projets`(
    `chi_id_projet` , 
    `chp_nom_projet`
) VALUES (
    :chi_id_projet , 
    :chi_id_projet
);',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  157 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE `chi_id_projet` >= :chi_id_projet ;',
    'cht_commentaire_requete' => 'projets >= id',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  158 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` = :chi_id_dossier
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  159 => 
  array (
    'cht_sql_requete' => 'INSERT INTO `tbl_dossiers`(
    `chi_id_dossier` , 
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chi_id_dossier , 
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  160 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet`
 FROM tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  161 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , 
`T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source

WHERE ( /* */ `T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chi_id_source` > :T0_chi_id_source2
   AND `T0`.`chi_id_source` <= :T0_chi_id_source3
   AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
   AND `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
   AND `T0`.`chp_nom_source` LIKE :T0_chp_nom_source) 
ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  162 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , 
`T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T2`.`chp_nom_dossier` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_projets T1 ON T1.chi_id_projet = T0.chx_projet_id_source

 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_id_source

WHERE ( /* */ `T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source)
;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  163 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_sources SET 
   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
   `chp_nom_source` = :n_chp_nom_source , 
   `cht_commentaire_source` = :n_cht_commentaire_source , 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source , 
   `che_binaire_source` = :n_che_binaire_source
WHERE (`chi_id_source` = :c_chi_id_source
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  164 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache
   AND `T0`.`chx_projet_tache` = :T0_chx_projet_tache) 
ORDER BY `T0`.`chp_priorite_tache` ASC
;',
    'cht_commentaire_requete' => 'tâches par priorité < xxx',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  165 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',
    'cht_commentaire_requete' => 'tâches priorité par id=',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  166 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier`
 FROM tbl_dossiers T0
WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  167 => 
  array (
    'cht_sql_requete' => 'UPDATE tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateur sur page profile',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  168 => 
  array (
    'cht_sql_requete' => 'SELECT 
COUNT( * )
 FROM b1.tbl_dossiers T0
WHERE (`T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
;',
    'cht_commentaire_requete' => 'dossier compte sous dossiers',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  169 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier`
 FROM b1.tbl_dossiers T0
WHERE ( /* */ `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
;',
    'cht_commentaire_requete' => 'dossiers par parents',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  170 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_dossiers
WHERE `chx_projet_dossier` = :chx_projet_dossier ;',
    'cht_commentaire_requete' => 'dossier racine d\'un projet',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  171 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
WHERE (`T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',
    'cht_commentaire_requete' => 'bases d\'un projet',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  172 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  173 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe`
 FROM b1.tbl_groupes T0
WHERE (`T0`.`chi_id_groupe` = :T0_chi_id_groupe
   AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe) 
ORDER BY `T0`.`chi_id_groupe` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'liste des groupes',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  174 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_groupes`(
    `chp_nom_groupe` , 
    `chx_parent_groupe`
) VALUES (
    :chp_nom_groupe , 
    :chx_parent_groupe
);',
    'cht_commentaire_requete' => 'groupes',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  175 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
 FROM b1.tbl_groupes T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe

WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
;',
    'cht_commentaire_requete' => 'groupes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  176 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_groupes SET 
   `chp_nom_groupe` = :n_chp_nom_groupe , 
   `chx_parent_groupe` = :n_chx_parent_groupe
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',
    'cht_commentaire_requete' => 'groupes',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  177 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',
    'cht_commentaire_requete' => 'groupes',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  178 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chi_compteur_socket1_utilisateur` , 
`T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE ( /* */ `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  179 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_utilisateurs`(
    `chp_nom_de_connexion_utilisateur` , 
    `chx_acces_utilisateur`
) VALUES (
    :chp_nom_de_connexion_utilisateur , 
    :chx_acces_utilisateur
);',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  180 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
`T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',
    'cht_commentaire_requete' => 'utilisateur',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  181 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chx_acces_utilisateur` = :n_chx_acces_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateur',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  182 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateur',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  183 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE (`T0`.`chi_id_metier` = :T0_chi_id_metier
   AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier) 
ORDER BY `T0`.`chi_id_metier` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'métier',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  184 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_metiers`(
    `chp_nom_metier` , 
    `chx_parent_metier`
) VALUES (
    :chp_nom_metier , 
    :chx_parent_metier
);',
    'cht_commentaire_requete' => 'métier',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  185 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
;',
    'cht_commentaire_requete' => 'métier',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  186 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_metiers SET 
   `chp_nom_metier` = :n_chp_nom_metier , 
   `chx_parent_metier` = :n_chx_parent_metier
WHERE `chi_id_metier` = :c_chi_id_metier ;',
    'cht_commentaire_requete' => 'métier',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  187 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',
    'cht_commentaire_requete' => 'métier',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  193 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
`T2`.`chp_nom_metier`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE ( /* */ `T0`.`chi_id_acces` = :T0_chi_id_acces
   AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces) 
ORDER BY `T0`.`chi_id_acces` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'acces',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  194 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_acces`(
    `chp_nom_acces` , 
    `chx_groupe_acces` , 
    `chx_metier_acces`
) VALUES (
    :chp_nom_acces , 
    :chx_groupe_acces , 
    :chx_metier_acces
);',
    'cht_commentaire_requete' => 'accès',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  195 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
`T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
;',
    'cht_commentaire_requete' => 'accès',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  196 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_acces SET 
   `chp_nom_acces` = :n_chp_nom_acces , 
   `chx_groupe_acces` = :n_chx_groupe_acces , 
   `chx_metier_acces` = :n_chx_metier_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',
    'cht_commentaire_requete' => 'accès',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  197 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',
    'cht_commentaire_requete' => 'acces',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  305 => 
  array (
    'cht_sql_requete' => 'UPDATE tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet , 
   `cht_commentaire_projet` = :n_cht_commentaire_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
  ),
  306 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chp_nom_dossier` NOT LIKE :T0_chp_nom_dossier
;',
    'cht_commentaire_requete' => 'dossiers à copier dans un autre environnement',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  307 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_dossiers`(
    `chi_id_dossier` , 
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier` , 
    `che_contient_genere_dossier` , 
    `chd__dtm_dossier` , 
    `chd__dtc_dossier`
) VALUES (
    :chi_id_dossier , 
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier , 
    :che_contient_genere_dossier , 
    :chd__dtm_dossier , 
    :chd__dtc_dossier
);',
    'cht_commentaire_requete' => 'dossiers à copier dans un autre environnement',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  308 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet`
 FROM b1.tbl_projets T0
WHERE (`T0`.`chi_id_projet` = 1)
;',
    'cht_commentaire_requete' => 'dossiers du projet à copier dans un autre environnement',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  309 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_projets SET 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet
WHERE (`chi_id_projet` = :c_chi_id_projet) ;',
    'cht_commentaire_requete' => 'dossiers à copier dans un autre environnement',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  310 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_sources SET 
   `chi_id_source` = :n_chi_id_source
WHERE (`chi_id_source` = :c_chi_id_source
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  313 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
`T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`chx_dossier_id_source`
 FROM b1.tbl_sources T0
WHERE ((`T0`.`chi_id_source` < :T0_chi_id_source
   AND `T0`.`chp_nom_source` NOT LIKE :T0_chp_nom_source) OR `T0`.`chi_id_source` IN (:T0_chi_id_source2))
;',
    'cht_commentaire_requete' => 'sources à copier dans un autre environnement',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  314 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_sources`(
    `chi_id_source` , 
    `chx_projet_id_source` , 
    `chp_nom_source` , 
    `cht_commentaire_source` , 
    `che_binaire_source` , 
    `chd__dtm_source` , 
    `chd__dtc_source` , 
    `chx_dossier_id_source`
) VALUES (
    :chi_id_source , 
    :chx_projet_id_source , 
    :chp_nom_source , 
    :cht_commentaire_source , 
    :che_binaire_source , 
    :chd__dtm_source , 
    :chd__dtc_source , 
    :chx_dossier_id_source
);',
    'cht_commentaire_requete' => 'dossiers à copier dans un autre environnement',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  315 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_bdds`(
    `chi_id_basedd` , 
    `chx_projet_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_rev_travail_basedd` , 
    `chp_fournisseur_basedd` , 
    `chx_dossier_id_basedd` , 
    `chd__dtm_basedd` , 
    `chd__dtc_basedd`
) VALUES (
    :chi_id_basedd , 
    :chx_projet_id_basedd , 
    :chp_commentaire_basedd , 
    :chp_rev_travail_basedd , 
    :chp_fournisseur_basedd , 
    :chx_dossier_id_basedd , 
    :chd__dtm_basedd , 
    :chd__dtc_basedd
);',
    'cht_commentaire_requete' => 'insérer la base principale',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  316 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet`
 FROM b1.tbl_projets T0
WHERE `T0`.`chi_id_projet` > 2
;',
    'cht_commentaire_requete' => 'projets >2 pour isa de champs ',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  317 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , `T2`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE ( /* */ `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
   AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
   AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T2`.`chp_nom_source` LIKE :T2_chp_nom_source) 
ORDER BY `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  318 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_autorisations`(
    `chx_acces_autorisation` , 
    `chx_source_autorisation`
) VALUES (
    :chx_acces_autorisation , 
    :chx_source_autorisation
);',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  319 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , `T2`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE (`T0`.`chi_id_autorisation` = :T0_chi_id_autorisation)
;',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  320 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_autorisations
WHERE `chi_id_autorisation` = :chi_id_autorisation ;',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  321 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_autorisations SET 
   `chx_acces_autorisation` = :n_chx_acces_autorisation , 
   `chx_source_autorisation` = :n_chx_source_autorisation
WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  322 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chi_id_acces` , 
`T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T0`.`chi_id_menu` LIKE :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
   AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
   AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  323 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_menus`(
    `chp_titre_menu` , 
    `chx_autorisation_menu` , 
    `chp_methode_menu` , 
    `cht_libelle_menu` , 
    `cht_initialisation_menu` , 
    `cht_complements_menu` , 
    `cht_condition_menu` , 
    `cht_condition_php_menu`
) VALUES (
    :chp_titre_menu , 
    :chx_autorisation_menu , 
    :chp_methode_menu , 
    :cht_libelle_menu , 
    :cht_initialisation_menu , 
    :cht_complements_menu , 
    :cht_condition_menu , 
    :cht_condition_php_menu
);',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  324 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`cht_complements_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , 
`T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  325 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_menus SET 
   `cht_libelle_menu` = :n_cht_libelle_menu , 
   `chp_titre_menu` = :n_chp_titre_menu , 
   `chx_autorisation_menu` = :n_chx_autorisation_menu , 
   `chp_methode_menu` = :n_chp_methode_menu , 
   `cht_initialisation_menu` = :n_cht_initialisation_menu , 
   `cht_complements_menu` = :n_cht_complements_menu , 
   `cht_condition_menu` = :n_cht_condition_menu , 
   `cht_condition_php_menu` = :n_cht_condition_php_menu
WHERE `chi_id_menu` = :c_chi_id_menu ;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  326 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T1`.`chx_dossier_id_source` , `T1`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation

WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  327 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T1`.`chx_source_autorisation` , `T0`.`chp_titre_menu` , `T0`.`chp_methode_menu` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`cht_complements_menu` , `T0`.`chi_id_menu` , `T0`.`cht_condition_php_menu` , `T0`.`cht_condition_menu`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE `T2`.`chi_id_acces` = :T2_chi_id_acces
;',
    'cht_commentaire_requete' => 'menus par acces',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  328 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_est_tsc_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre`
 FROM b1.tbl_genres T0
WHERE (`T0`.`chi_id_genre` = :T0_chi_id_genre
   AND `T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre
   AND `T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre
   AND `T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre
   AND `T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre
   AND `T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre) 
ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  329 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_genres`(
    `chp_prefixe_genre` , 
    `chp_nom_genre` , 
    `chp_espece_genre` , 
    `che_longueur_genre` , 
    `che_est_primaire_genre` , 
    `che_est_incrément_genre` , 
    `che_est_obligatoire_genre` , 
    `che_a_init_genre` , 
    `che_init_est_mot_genre` , 
    `cht_valeur_init_genre` , 
    `che_est_parmis_genre` , 
    `cht_parmis_genre` , 
    `che_est_tsc_genre` , 
    `cht_fonctions_genre` , 
    `che_est_nur_genre` , 
    `che_est_tsm_genre`
) VALUES (
    :chp_prefixe_genre , 
    :chp_nom_genre , 
    :chp_espece_genre , 
    :che_longueur_genre , 
    :che_est_primaire_genre , 
    :che_est_incrément_genre , 
    :che_est_obligatoire_genre , 
    :che_a_init_genre , 
    :che_init_est_mot_genre , 
    :cht_valeur_init_genre , 
    :che_est_parmis_genre , 
    :cht_parmis_genre , 
    :che_est_tsc_genre , 
    :cht_fonctions_genre , 
    :che_est_nur_genre , 
    :che_est_tsm_genre
);',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
  ),
  330 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_est_tsc_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre`
 FROM b1.tbl_genres T0
WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
;',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  331 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_genres SET 
   `chp_nom_genre` = :n_chp_nom_genre , 
   `chp_espece_genre` = :n_chp_espece_genre , 
   `che_longueur_genre` = :n_che_longueur_genre , 
   `che_est_primaire_genre` = :n_che_est_primaire_genre , 
   `che_est_incrément_genre` = :n_che_est_incrément_genre , 
   `che_est_obligatoire_genre` = :n_che_est_obligatoire_genre , 
   `che_a_init_genre` = :n_che_a_init_genre , 
   `che_init_est_mot_genre` = :n_che_init_est_mot_genre , 
   `cht_valeur_init_genre` = :n_cht_valeur_init_genre , 
   `chp_prefixe_genre` = :n_chp_prefixe_genre , 
   `che_est_parmis_genre` = :n_che_est_parmis_genre , 
   `cht_parmis_genre` = :n_cht_parmis_genre , 
   `che_est_tsc_genre` = :n_che_est_tsc_genre , 
   `cht_fonctions_genre` = :n_cht_fonctions_genre , 
   `che_est_nur_genre` = :n_che_est_nur_genre , 
   `che_est_tsm_genre` = :n_che_est_tsm_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  332 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_genres
WHERE `chi_id_genre` = :chi_id_genre ;',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  333 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
`T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre`
 FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
;',
    'cht_commentaire_requete' => 'tous les genres',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
  ),
  334 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_genres SET 
   `chi_id_genre` = :n_chi_id_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',
    'cht_commentaire_requete' => 'genres nouveau numéro',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  335 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_genres SET 
   `che_ordre_genre` = :n_che_ordre_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',
    'cht_commentaire_requete' => 'genres maj ordre',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  336 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
  ),
  337 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`cht_libelle_menu` , `T0`.`chp_titre_menu`
 FROM b1.tbl_menus T0
WHERE ( /* */ `T0`.`chi_id_menu` = :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` IS NULL) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
  ),
  338 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_sources SET 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source
WHERE (`chi_id_source` = :c_chi_id_source
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  339 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chd__dtm_requete` = :n_chd__dtm_requete , 
   `che__nur_requete` = :n_che__nur_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => '',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
  340 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chd__dtm_requete` = :n_chd__dtm_requete , 
   `che__nur_requete` = :n_che__nur_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
  ),
);