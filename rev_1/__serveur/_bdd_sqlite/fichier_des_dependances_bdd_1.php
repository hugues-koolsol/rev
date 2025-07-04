<?php
$tableau_des_dependances=array (
  'tbl_utilisateurs_chi_id_utilisateur' => 
  array (
    'table_parente' => 'tbl_utilisateurs',
    'champ_parent' => 'chi_id_utilisateur',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_taches',
        'champ_dependant' => 'chx_utilisateur_tache',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
  'tbl_dossiers_chi_id_dossier' => 
  array (
    'table_parente' => 'tbl_dossiers',
    'champ_parent' => 'chi_id_dossier',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_projets',
        'champ_dependant' => 'chx_dossier_requetes_projet',
        'non_nulle' => '0',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      1 => 
      array (
        'table_dependante' => 'tbl_sources',
        'champ_dependant' => 'chx_dossier_id_source',
        'non_nulle' => '0',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      2 => 
      array (
        'table_dependante' => 'tbl_dossiers',
        'champ_dependant' => 'chx_parent_dossier',
        'non_nulle' => '0',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      3 => 
      array (
        'table_dependante' => 'tbl_bdds',
        'champ_dependant' => 'chx_dossier_id_basedd',
        'non_nulle' => '0',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
  'tbl_test_chi_id_y' => 
  array (
    'table_parente' => 'tbl_test',
    'champ_parent' => 'chi_id_y',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_test',
        'champ_dependant' => 'chx_parent_y',
        'non_nulle' => '0',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
  'tbl_projets_chi_id_projet' => 
  array (
    'table_parente' => 'tbl_projets',
    'champ_parent' => 'chi_id_projet',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_requetes',
        'champ_dependant' => 'chx_projet_requete',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      1 => 
      array (
        'table_dependante' => 'tbl_revs',
        'champ_dependant' => 'chx_projet_rev',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      2 => 
      array (
        'table_dependante' => 'tbl_sources',
        'champ_dependant' => 'chx_projet_id_source',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      3 => 
      array (
        'table_dependante' => 'tbl_dossiers',
        'champ_dependant' => 'chx_projet_dossier',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      4 => 
      array (
        'table_dependante' => 'tbl_bdds',
        'champ_dependant' => 'chx_projet_id_basedd',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
);