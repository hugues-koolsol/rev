<?php
$tableau_des_dependances=array (
  'tbl_dossiers_chi_id_dossier' => 
  array (
    'table_parente' => 'tbl_dossiers',
    'champ_parent' => 'chi_id_dossier',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_dossiers',
        'champ_dependant' => 'chx_parent_dossier',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      1 => 
      array (
        'table_dependante' => 'tbl_projets',
        'champ_dependant' => 'chx_dossier_requetes_projet',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      2 => 
      array (
        'table_dependante' => 'tbl_projets',
        'champ_dependant' => 'chx_dossier_menus_projet',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      3 => 
      array (
        'table_dependante' => 'tbl_projets',
        'champ_dependant' => 'chx_dossier_bdds_projet',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      4 => 
      array (
        'table_dependante' => 'tbl_projets',
        'champ_dependant' => 'chx_dossier_js_projet',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      5 => 
      array (
        'table_dependante' => 'tbl_sources',
        'champ_dependant' => 'chx_dossier_id_source',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      6 => 
      array (
        'table_dependante' => 'tbl_bdds',
        'champ_dependant' => 'chx_dossier_id_basedd',
        'non_nulle' => '0',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
  'tbl_groupes_chi_id_groupe' => 
  array (
    'table_parente' => 'tbl_groupes',
    'champ_parent' => 'chi_id_groupe',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_groupes',
        'champ_dependant' => 'chx_parent_groupe',
        'non_nulle' => '0',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      1 => 
      array (
        'table_dependante' => 'tbl_acces',
        'champ_dependant' => 'chx_groupe_acces',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
  'tbl_metiers_chi_id_metier' => 
  array (
    'table_parente' => 'tbl_metiers',
    'champ_parent' => 'chi_id_metier',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_metiers',
        'champ_dependant' => 'chx_parent_metier',
        'non_nulle' => '0',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      1 => 
      array (
        'table_dependante' => 'tbl_acces',
        'champ_dependant' => 'chx_metier_acces',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
  'tbl_acces_chi_id_acces' => 
  array (
    'table_parente' => 'tbl_acces',
    'champ_parent' => 'chi_id_acces',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_utilisateurs',
        'champ_dependant' => 'chx_acces_utilisateur',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
      1 => 
      array (
        'table_dependante' => 'tbl_autorisations',
        'champ_dependant' => 'chx_acces_autorisation',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
  'tbl_autorisations_chi_id_autorisation' => 
  array (
    'table_parente' => 'tbl_autorisations',
    'champ_parent' => 'chi_id_autorisation',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_menus',
        'champ_dependant' => 'chx_autorisation_menu',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
  'tbl_sources_chi_id_source' => 
  array (
    'table_parente' => 'tbl_sources',
    'champ_parent' => 'chi_id_source',
    'dependances' => 
    array (
      0 => 
      array (
        'table_dependante' => 'tbl_autorisations',
        'champ_dependant' => 'chx_source_autorisation',
        'non_nulle' => '1',
        'id_bdd_de_la_base_dependante' => 1,
      ),
    ),
  ),
);