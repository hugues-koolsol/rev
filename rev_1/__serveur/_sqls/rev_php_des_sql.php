<?php
$php_des_sql=array (
  1 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur`
 FROM b1.tbl_utilisateurs T0
WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
LIMIT 1 OFFSET 0 
;',
    'cht_commentaire_requete' => 'utilisateur par nom_de_connexion',
  ),
  2 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete) 
ORDER BY `T0`.`chi_id_requete` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'liste des requêtes',
  ),
  3 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `chi_id_requete` = :n_chi_id_requete , 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => NULL,
  ),
  4 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_requetes
WHERE (`chi_id_requete` = :chi_id_requete
   AND `chx_projet_requete` = :chx_projet_requete) ;',
    'cht_commentaire_requete' => 'requête par id',
  ),
  5 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev
   AND `chp_provenance_rev` = :chp_provenance_rev
   AND `chx_source_rev` = :chx_source_rev) ;',
    'cht_commentaire_requete' => NULL,
  ),
  6 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE (`T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',
    'cht_commentaire_requete' => NULL,
  ),
  7 => 
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
    'cht_commentaire_requete' => '',
  ),
  8 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_sources
WHERE (`chx_projet_id_source` = :chx_projet_id_source) ;',
    'cht_commentaire_requete' => '',
  ),
  9 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `chp_type_requete` = :n_chp_type_requete , 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_php_requete` = :n_cht_php_requete , 
   `cht_commentaire_requete` = :n_cht_commentaire_requete , 
   `cht_matrice_requete` = :n_cht_matrice_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => NULL,
  ),
  10 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => NULL,
  ),
  11 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
 FROM b1.tbl_bdds T0
WHERE (`T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',
    'cht_commentaire_requete' => NULL,
  ),
  12 => 
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
    'cht_commentaire_requete' => NULL,
  ),
  13 => 
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
    'cht_commentaire_requete' => NULL,
  ),
  14 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev) ;',
    'cht_commentaire_requete' => NULL,
  ),
  15 => 
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
  ),
  16 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chx_dossier_id_basedd` = :n_chx_dossier_id_basedd , 
   `chp_rev_basedd` = :n_chp_rev_basedd , 
   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
   `chp_genere_basedd` = :n_chp_genere_basedd , 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => NULL,
  ),
  17 => 
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
    'cht_commentaire_requete' => '',
  ),
  18 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_bdds
WHERE (`chi_id_basedd` = :chi_id_basedd
   AND `chx_projet_id_basedd` = :chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => 'base par id',
  ),
  19 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
   AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
ORDER BY `T0`.`chp_priorite_tache` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'tâches',
  ),
  20 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache-1)
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` >= 1) ;',
    'cht_commentaire_requete' => 'tâches',
  ),
  21 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` < 99) ;',
    'cht_commentaire_requete' => 'tâches',
  ),
  22 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches',
  ),
  23 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
;',
    'cht_commentaire_requete' => NULL,
  ),
  24 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
;',
    'cht_commentaire_requete' => NULL,
  ),
  25 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` IN (:liste_des_ids_a_supprimer)
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',
    'cht_commentaire_requete' => NULL,
  ),
  26 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chp_genere_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , 
`T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , `T2`.`chp_nom_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',
    'cht_commentaire_requete' => 'base par id',
  ),
  27 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chp_genere_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , 
`T1`.`chp_nom_dossier` , `T1`.`chx_parent_dossier` , `T2`.`chi_id_projet` , `T2`.`chp_nom_projet` , `T2`.`chp_commentaire_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd
;',
    'cht_commentaire_requete' => NULL,
  ),
  28 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
;',
    'cht_commentaire_requete' => 'tâches par id',
  ),
  29 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches texte et priorité par id',
  ),
  30 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_taches`(
    `chx_utilisateur_tache` , 
    `chp_texte_tache` , 
    `chp_priorite_tache`
) VALUES (
    :chx_utilisateur_tache , 
    :chp_texte_tache , 
    :chp_priorite_tache
);',
    'cht_commentaire_requete' => 'tâches',
  ),
  31 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_taches
WHERE (`chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches par id',
  ),
  32 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',
    'cht_commentaire_requete' => '',
  ),
  33 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet`
 FROM b1.tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet
   AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
   AND `T0`.`chp_commentaire_projet` LIKE :T0_chp_commentaire_projet) 
ORDER BY `T0`.`chi_id_projet` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => NULL,
  ),
  34 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_projets T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
;',
    'cht_commentaire_requete' => NULL,
  ),
  35 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => NULL,
  ),
  36 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/

INSERT INTO b1.`tbl_projets`(
    `chp_nom_projet` , 
    `chp_commentaire_projet`
) VALUES (
    :chp_nom_projet , 
    :chp_commentaire_projet
);',
    'cht_commentaire_requete' => NULL,
  ),
  37 => 
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
    'cht_commentaire_requete' => NULL,
  ),
  38 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_sources`(
    `chx_dossier_id_source` , 
    `chx_projet_id_source` , 
    `chp_nom_source` , 
    `che_binaire_source`
) VALUES (
    :chx_dossier_id_source , 
    :chx_projet_id_source , 
    :chp_nom_source , 
    :che_binaire_source
);',
    'cht_commentaire_requete' => NULL,
  ),
  39 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_sources
WHERE (`chi_id_source` = :chi_id_source
   AND `chx_projet_id_source` = :chx_projet_id_source) ;',
    'cht_commentaire_requete' => '',
  ),
  40 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chp_rev_basedd` = :n_chp_rev_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => NULL,
  ),
  41 => 
  array (
    'cht_sql_requete' => 'BEGIN TRANSACTION;',
    'cht_commentaire_requete' => 'sur base 1',
  ),
  42 => 
  array (
    'cht_sql_requete' => 'COMMIT;',
    'cht_commentaire_requete' => NULL,
  ),
  43 => 
  array (
    'cht_sql_requete' => 'ROLLBACK;',
    'cht_commentaire_requete' => NULL,
  ),
  44 => 
  array (
    'cht_sql_requete' => 'ALTER TABLE :nom_de_la_table DROP COLUMN :nom_du_champ',
    'cht_commentaire_requete' => NULL,
  ),
  45 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE (`chi_id_projet` = :chi_id_projet) ;',
    'cht_commentaire_requete' => NULL,
  ),
  46 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
WHERE (`T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
   AND `T0`.`che_binaire_source` = :T0_che_binaire_source)
;',
    'cht_commentaire_requete' => NULL,
  ),
  47 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur`
 FROM b1.tbl_utilisateurs T0
WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',
    'cht_commentaire_requete' => NULL,
  ),
  48 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chp_commentaire_projet` = :n_chp_commentaire_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',
    'cht_commentaire_requete' => NULL,
  ),
  49 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chi_id_requete` < :nb_max
   AND 1 = 1) 
ORDER BY `T0`.`chi_id_requete` ASC
;',
    'cht_commentaire_requete' => NULL,
  ),
  50 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
`T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
;',
    'cht_commentaire_requete' => NULL,
  ),
  51 => 
  array (
    'cht_sql_requete' => 'BEGIN TRANSACTION;',
    'cht_commentaire_requete' => 'sur base 1',
  ),
  52 => 
  array (
    'cht_sql_requete' => 'COMMIT;',
    'cht_commentaire_requete' => NULL,
  ),
  53 => 
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
  ),
  54 => 
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
    'cht_commentaire_requete' => NULL,
  ),
  55 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_dossiers SET 
   `chp_nom_dossier` = :n_chp_nom_dossier , 
   `chx_parent_dossier` = :n_chx_parent_dossier , 
   `che_contient_genere_dossier` = :n_che_contient_genere_dossier
WHERE (`chi_id_dossier` = :c_chi_id_dossier
   AND `chx_projet_dossier` = :c_chx_projet_dossier) ;',
    'cht_commentaire_requete' => NULL,
  ),
  56 => 
  array (
    'cht_sql_requete' => 'INSERT INTO `tbl_projets`(
    `chi_id_projet` , 
    `chp_nom_projet`
) VALUES (
    :chi_id_projet , 
    :chi_id_projet
);',
    'cht_commentaire_requete' => NULL,
  ),
  57 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE `chi_id_projet` >= :chi_id_projet ;',
    'cht_commentaire_requete' => NULL,
  ),
  58 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` = :chi_id_dossier
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',
    'cht_commentaire_requete' => NULL,
  ),
  59 => 
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
    'cht_commentaire_requete' => NULL,
  ),
  60 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chx_dossier_requetes_projet`
 FROM tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
;',
    'cht_commentaire_requete' => NULL,
  ),
  61 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , 
`T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source

WHERE (`T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
   AND `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
   AND `T0`.`chp_nom_source` LIKE :T0_chp_nom_source) 
ORDER BY `T0`.`chi_id_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => NULL,
  ),
  62 => 
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
    'cht_commentaire_requete' => NULL,
  ),
  63 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_sources SET 
   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
   `chx_projet_id_source` = :n_chx_projet_id_source , 
   `chp_nom_source` = :n_chp_nom_source , 
   `cht_commentaire_source` = :n_cht_commentaire_source , 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source , 
   `che_binaire_source` = :n_che_binaire_source
WHERE (`chi_id_source` = :c_chi_id_source
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',
    'cht_commentaire_requete' => NULL,
  ),
  64 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache) 
ORDER BY `T0`.`chp_priorite_tache` ASC
;',
    'cht_commentaire_requete' => 'tâches par priorité < xxx',
  ),
  65 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches priorité par id=',
  ),
  66 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier`
 FROM tbl_dossiers T0
WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
;',
    'cht_commentaire_requete' => NULL,
  ),
  67 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/

UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => '',
  ),
  68 => 
  array (
    'cht_sql_requete' => 'SELECT 
COUNT( * )
 FROM b1.tbl_dossiers T0
WHERE (`T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
;',
    'cht_commentaire_requete' => NULL,
  ),
  69 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier`
 FROM b1.tbl_dossiers T0
WHERE ( /* */ `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
;',
    'cht_commentaire_requete' => 'dossiers par parents',
  ),
  70 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_dossiers
WHERE `chx_projet_dossier` = :chx_projet_dossier ;',
    'cht_commentaire_requete' => 'dossier racine d\'un projet',
  ),
  71 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
WHERE (`T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',
    'cht_commentaire_requete' => 'bases d\'un projet',
  ),
  72 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => NULL,
  ),
);