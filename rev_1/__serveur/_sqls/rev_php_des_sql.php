<?php
$php_des_sql=array (
  101 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
LIMIT 1 OFFSET 0 
;',
    'cht_commentaire_requete' => 'utilisateur par nom_de_connexion',
  ),
  102 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
   AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2) 
ORDER BY `T0`.`chi_id_requete` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'liste des requêtes',
  ),
  103 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `chi_id_requete` = :n_chi_id_requete , 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => '',
  ),
  104 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_requetes
WHERE (`chi_id_requete` = :chi_id_requete
   AND `chx_projet_requete` = :chx_projet_requete) ;',
    'cht_commentaire_requete' => 'requête par id',
  ),
  105 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev
   AND `chp_provenance_rev` = :chp_provenance_rev
   AND `chx_source_rev` = :chx_source_rev) ;',
    'cht_commentaire_requete' => 'revs par provenance, source et projet',
  ),
  106 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE (`T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',
    'cht_commentaire_requete' => 'requêtes',
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
  ),
  108 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_sources
WHERE (`chx_projet_id_source` = :chx_projet_id_source) ;',
    'cht_commentaire_requete' => '**dispo*** sources par projet',
  ),
  109 => 
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
    'cht_commentaire_requete' => 'requêtes',
  ),
  110 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => 'bdds',
  ),
  111 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
 FROM b1.tbl_bdds T0
WHERE (`T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',
    'cht_commentaire_requete' => 'bdds',
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
  ),
  114 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev) ;',
    'cht_commentaire_requete' => 'revs par projet',
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
  ),
  116 => 
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
    'cht_commentaire_requete' => 'bdds',
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
  ),
  118 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_bdds
WHERE (`chi_id_basedd` = :chi_id_basedd
   AND `chx_projet_id_basedd` = :chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => 'base par id',
  ),
  119 => 
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
  120 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache-1)
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` >= 1) ;',
    'cht_commentaire_requete' => 'tâches',
  ),
  121 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` < 99) ;',
    'cht_commentaire_requete' => 'tâches',
  ),
  122 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches',
  ),
  123 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
;',
    'cht_commentaire_requete' => 'dossiers',
  ),
  124 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
;',
    'cht_commentaire_requete' => '***dispo***',
  ),
  125 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` IN (:liste_des_ids_a_supprimer)
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',
    'cht_commentaire_requete' => '***dispo***',
  ),
  126 => 
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
  127 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chp_genere_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , 
`T1`.`chp_nom_dossier` , `T1`.`chx_parent_dossier` , `T2`.`chi_id_projet` , `T2`.`chp_nom_projet` , `T2`.`chp_commentaire_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd
;',
    'cht_commentaire_requete' => 'bdds',
  ),
  128 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
;',
    'cht_commentaire_requete' => 'tâches par id',
  ),
  129 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches texte et priorité par id',
  ),
  130 => 
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
  131 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_taches
WHERE (`chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches par id',
  ),
  132 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',
    'cht_commentaire_requete' => 'requetes',
  ),
  133 => 
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
    'cht_commentaire_requete' => 'projets',
  ),
  134 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
`T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier`
 FROM b1.tbl_projets T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet

WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
;',
    'cht_commentaire_requete' => 'projets',
  ),
  135 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/

UPDATE b1.tbl_requetes SET 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',
    'cht_commentaire_requete' => 'requêtes',
  ),
  136 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/

INSERT INTO b1.`tbl_projets`(
    `chp_nom_projet` , 
    `chp_commentaire_projet`
) VALUES (
    :chp_nom_projet , 
    :chp_commentaire_projet
);',
    'cht_commentaire_requete' => 'projets',
  ),
  137 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/

INSERT INTO b1.`tbl_dossiers`(
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',
    'cht_commentaire_requete' => 'dossiers',
  ),
  139 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_sources
WHERE (`chi_id_source` = :chi_id_source
   AND `chx_projet_id_source` = :chx_projet_id_source) ;',
    'cht_commentaire_requete' => 'sources',
  ),
  140 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chp_rev_basedd` = :n_chp_rev_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',
    'cht_commentaire_requete' => 'bdds',
  ),
  141 => 
  array (
    'cht_sql_requete' => 'BEGIN TRANSACTION;',
    'cht_commentaire_requete' => 'sur base 1',
  ),
  142 => 
  array (
    'cht_sql_requete' => 'COMMIT;',
    'cht_commentaire_requete' => NULL,
  ),
  143 => 
  array (
    'cht_sql_requete' => 'ROLLBACK;',
    'cht_commentaire_requete' => NULL,
  ),
  144 => 
  array (
    'cht_sql_requete' => 'ALTER TABLE :nom_de_la_table DROP COLUMN :nom_du_champ',
    'cht_commentaire_requete' => NULL,
  ),
  145 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE (`chi_id_projet` = :chi_id_projet) ;',
    'cht_commentaire_requete' => 'projets',
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
  ),
  147 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur`
 FROM b1.tbl_utilisateurs T0
WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',
    'cht_commentaire_requete' => NULL,
  ),
  148 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chp_commentaire_projet` = :n_chp_commentaire_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',
    'cht_commentaire_requete' => NULL,
  ),
  149 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chi_id_requete` < :nb_max
   AND 1 = 1) 
ORDER BY `T0`.`chi_id_requete` ASC
;',
    'cht_commentaire_requete' => 'requetes',
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
  ),
  151 => 
  array (
    'cht_sql_requete' => 'BEGIN TRANSACTION;',
    'cht_commentaire_requete' => 'sur base 1',
  ),
  152 => 
  array (
    'cht_sql_requete' => 'COMMIT;',
    'cht_commentaire_requete' => NULL,
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
  ),
  157 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE `chi_id_projet` >= :chi_id_projet ;',
    'cht_commentaire_requete' => 'projets >= id',
  ),
  158 => 
  array (
    'cht_sql_requete' => '/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` = :chi_id_dossier
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',
    'cht_commentaire_requete' => 'dossiers',
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
  ),
  160 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet`
 FROM tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
;',
    'cht_commentaire_requete' => 'projets',
  ),
  161 => 
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
    'cht_commentaire_requete' => 'sources',
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
  ),
  163 => 
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
    'cht_commentaire_requete' => 'sources',
  ),
  164 => 
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
  165 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches priorité par id=',
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
  ),
  167 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_de_reference(1))*/

UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => '',
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
  ),
  170 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_dossiers
WHERE `chx_projet_dossier` = :chx_projet_dossier ;',
    'cht_commentaire_requete' => 'dossier racine d\'un projet',
  ),
  171 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
WHERE (`T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',
    'cht_commentaire_requete' => 'bases d\'un projet',
  ),
  172 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateurs',
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
  ),
  176 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_groupes SET 
   `chp_nom_groupe` = :n_chp_nom_groupe , 
   `chx_parent_groupe` = :n_chx_parent_groupe
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',
    'cht_commentaire_requete' => 'groupes',
  ),
  177 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',
    'cht_commentaire_requete' => 'groupes',
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
  ),
  180 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chp__dtm_utilisateur` , `T0`.`chp__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
`T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',
    'cht_commentaire_requete' => 'utilisateur',
  ),
  181 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chx_acces_utilisateur` = :n_chx_acces_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateur',
  ),
  182 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateur',
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
  ),
  186 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_metiers SET 
   `chp_nom_metier` = :n_chp_nom_metier , 
   `chx_parent_metier` = :n_chx_parent_metier
WHERE `chi_id_metier` = :c_chi_id_metier ;',
    'cht_commentaire_requete' => 'métier',
  ),
  187 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',
    'cht_commentaire_requete' => 'métier',
  ),
  188 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_source_page` , `T0`.`chp_methode_page` , 
`T0`.`cht_complement_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T1`.`cht_contenu_methode_page`
 FROM b1.tbl_pages T0
 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page

WHERE (`T0`.`chi_id_page` = :T0_chi_id_page
   AND `T0`.`chp_nom_page` LIKE :T0_chp_nom_page) 
ORDER BY `T0`.`chi_id_page` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'pages',
  ),
  189 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_pages`(
    `chp_nom_page` , 
    `chx_parent_page` , 
    `chx_acces_page` , 
    `chx_source_page` , 
    `chp_methode_page` , 
    `chx_projet_page` , 
    `cht_complement_page` , 
    `cht_contenu_methode_page`
) VALUES (
    :chp_nom_page , 
    :chx_parent_page , 
    :chx_acces_page , 
    :chx_source_page , 
    :chp_methode_page , 
    :chx_projet_page , 
    :cht_complement_page , 
    :cht_contenu_methode_page
);',
    'cht_commentaire_requete' => 'pages',
  ),
  190 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_acces_page` , `T0`.`chx_source_page` , 
`T0`.`chp_methode_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T0`.`cht_complement_page` , 
`T0`.`cht_contenu_methode_page`
 FROM b1.tbl_pages T0
 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page

WHERE `T0`.`chi_id_page` = :T0_chi_id_page
;',
    'cht_commentaire_requete' => 'pages',
  ),
  191 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_pages SET 
   `chp_nom_page` = :n_chp_nom_page , 
   `chx_parent_page` = :n_chx_parent_page , 
   `chx_acces_page` = :n_chx_acces_page , 
   `chx_source_page` = :n_chx_source_page , 
   `chp_methode_page` = :n_chp_methode_page , 
   `chx_projet_page` = :n_chx_projet_page , 
   `cht_complement_page` = :n_cht_complement_page , 
   `cht_contenu_methode_page` = :n_cht_contenu_methode_page
WHERE `chi_id_page` = :c_chi_id_page ;',
    'cht_commentaire_requete' => 'pages',
  ),
  192 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_pages
WHERE `chi_id_page` = :chi_id_page ;',
    'cht_commentaire_requete' => 'pages',
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
  ),
  195 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
`T2`.`chp_nom_metier`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
;',
    'cht_commentaire_requete' => 'accès',
  ),
  196 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_acces SET 
   `chp_nom_acces` = :n_chp_nom_acces , 
   `chx_groupe_acces` = :n_chx_groupe_acces , 
   `chx_metier_acces` = :n_chx_metier_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',
    'cht_commentaire_requete' => 'accès',
  ),
  197 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',
    'cht_commentaire_requete' => 'acces',
  ),
  198 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`chx_page_menu` , `T0`.`che_ordre_menu` , `T0`.`cht_prerequis_rev_menu` , `T0`.`cht_prerequis_php_menu` , 
`T0`.`cht_libelle_menu` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_groupe` , `T2`.`chx_groupe_acces` , 
`T2`.`chi_id_acces` , `T4`.`chp_nom_metier` , `T2`.`chx_metier_acces` , `T1`.`cht_complement_page` , `T1`.`cht_contenu_methode_page`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_page_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_page

 LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces

WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu
   AND `T0`.`chx_page_menu` = :T0_chx_page_menu) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'menu',
  ),
  199 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_menus`(
    `chx_page_menu` , 
    `che_ordre_menu` , 
    `cht_prerequis_rev_menu` , 
    `cht_prerequis_php_menu` , 
    `cht_libelle_menu`
) VALUES (
    :chx_page_menu , 
    :che_ordre_menu , 
    :cht_prerequis_rev_menu , 
    :cht_prerequis_php_menu , 
    :cht_libelle_menu
);',
    'cht_commentaire_requete' => 'menu',
  ),
  300 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`chx_page_menu` , `T0`.`che_ordre_menu` , `T0`.`cht_prerequis_rev_menu` , `T0`.`cht_prerequis_php_menu` , 
`T0`.`cht_libelle_menu` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_groupe` , `T2`.`chx_groupe_acces` , 
`T2`.`chi_id_acces` , `T4`.`chp_nom_metier` , `T2`.`chx_metier_acces` , `T1`.`cht_complement_page` , `T1`.`cht_contenu_methode_page`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_page_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_page

 LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces

WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
;',
    'cht_commentaire_requete' => 'menu',
  ),
  301 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_menus SET 
   `chx_page_menu` = :n_chx_page_menu , 
   `che_ordre_menu` = :n_che_ordre_menu , 
   `cht_prerequis_rev_menu` = :n_cht_prerequis_rev_menu , 
   `cht_prerequis_php_menu` = :n_cht_prerequis_php_menu , 
   `cht_libelle_menu` = :n_cht_libelle_menu
WHERE `chi_id_menu` = :c_chi_id_menu ;',
    'cht_commentaire_requete' => 'menu',
  ),
  302 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',
    'cht_commentaire_requete' => 'menus',
  ),
  303 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`cht_prerequis_rev_menu` , `T0`.`cht_prerequis_php_menu` , `T0`.`cht_libelle_menu` , `T1`.`chp_nom_page` , 
`T1`.`chp_methode_page` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , `T3`.`chp_nom_source` , `T1`.`cht_complement_page` , 
`T1`.`cht_contenu_methode_page`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_page_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_page

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_page

WHERE `T0`.`chi_id_menu` > :T0_chi_id_menu 
ORDER BY `T2`.`chx_groupe_acces` ASC, `T2`.`chx_metier_acces` ASC, `T0`.`che_ordre_menu` ASC
;',
    'cht_commentaire_requete' => 'menus',
  ),
  405 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`cht_prerequis_rev_menu` , `T0`.`cht_prerequis_php_menu` , `T0`.`cht_libelle_menu` , `T1`.`chp_nom_page` , 
`T1`.`chp_methode_page` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , `T3`.`chp_nom_source` , `T1`.`cht_complement_page` , 
`T1`.`cht_contenu_methode_page`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_page_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_page

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_page

WHERE `T0`.`chi_id_menu` > :T0_chi_id_menu 
ORDER BY `T2`.`chx_groupe_acces` ASC, `T2`.`chx_metier_acces` ASC, `T0`.`che_ordre_menu` ASC
;',
    'cht_commentaire_requete' => 'menus',
  ),
);