<?php
$__liste_des_sql=array (
  101 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T0`.`chx_acces_utilisateur`
 FROM b1.tbl_utilisateurs T0
WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
LIMIT 1 OFFSET 0 
;',
    'cht_commentaire_requete' => 'utilisateur par nom_de_connexion',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chp_mot_de_passe_utilisateur`),champ(`T0`,`chi_id_utilisateur`),champ(`T0`,`chx_acces_utilisateur`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chp_nom_de_connexion_utilisateur`),:T0_chp_nom_de_connexion_utilisateur)),
   complements(limité_à(quantité(1),début(0)))
)  ',
  ),
  102 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_utilisateurs`(
    `chi_id_utilisateur` , 
    `chp_nom_de_connexion_utilisateur` , 
    `chp_mot_de_passe_utilisateur` , 
    `chx_acces_utilisateur` , 
    `chd__dtm_utilisateur` , 
    `chd__dtc_utilisateur`
) VALUES (
    :chi_id_utilisateur , 
    :chp_nom_de_connexion_utilisateur , 
    :chp_mot_de_passe_utilisateur , 
    :chx_acces_utilisateur , 
    :chd__dtm_utilisateur , 
    :chd__dtc_utilisateur
);',
    'cht_commentaire_requete' => 'premier utilisateur',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_utilisateur`),:chi_id_utilisateur),
      affecte(champ(`chp_nom_de_connexion_utilisateur`),:chp_nom_de_connexion_utilisateur),
      affecte(champ(`chp_mot_de_passe_utilisateur`),:chp_mot_de_passe_utilisateur),
      affecte(champ(`chx_acces_utilisateur`),:chx_acces_utilisateur),
      affecte(champ(`chd__dtm_utilisateur`),:chd__dtm_utilisateur),
      affecte(champ(`chd__dtc_utilisateur`),:chd__dtc_utilisateur)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   )
)  ',
  ),
  103 => 
  array (
    'cht_sql_requete' => 'SELECT 
COUNT( * )
 FROM b1.tbl_utilisateurs T0
;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      )
   )
)  ',
  ),
  104 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_groupes`(
    `chi_id_groupe` , 
    `chp_nom_groupe` , 
    `chx_parent_groupe`
) VALUES (
    :chi_id_groupe , 
    :chp_nom_groupe , 
    :chx_parent_groupe
);',
    'cht_commentaire_requete' => 'insertion groupe initial',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_groupe`),:chi_id_groupe),affecte(champ(`chp_nom_groupe`),:chp_nom_groupe),affecte(champ(`chx_parent_groupe`),:chx_parent_groupe)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   )
)  ',
  ),
  105 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_metiers`(
    `chi_id_metier` , 
    `chp_nom_metier` , 
    `chx_parent_metier`
) VALUES (
    :chi_id_metier , 
    :chp_nom_metier , 
    :chx_parent_metier
);',
    'cht_commentaire_requete' => 'revs par provenance, source et projet',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_metier`),:chi_id_metier),affecte(champ(`chp_nom_metier`),:chp_nom_metier),affecte(champ(`chx_parent_metier`),:chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   )
)  ',
  ),
  106 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_acces`(
    `chi_id_acces` , 
    `chp_nom_acces` , 
    `chx_groupe_acces` , 
    `chx_metier_acces`
) VALUES (
    :chi_id_acces , 
    :chp_nom_acces , 
    :chx_groupe_acces , 
    :chx_metier_acces
);',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_acces`),:chi_id_acces),affecte(champ(`chp_nom_acces`),:chp_nom_acces),affecte(champ(`chx_groupe_acces`),:chx_groupe_acces),affecte(champ(`chx_metier_acces`),:chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   )
)  ',
  ),
  107 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_compteur1_utilisateur`),plus(chi_compteur1_utilisateur,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ',
  ),
  108 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , 
`T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_parametres_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_utilisateur)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_utilisateur`),(:T0_chi_id_utilisateur)))
)  ',
  ),
  109 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/

UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateur sur page profile',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:n_chp_nom_de_connexion_utilisateur),affecte(champ(`chp_mot_de_passe_utilisateur`),:n_chp_mot_de_passe_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ',
  ),
  110 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
`T0`.`chd__dtc_tache` , `T0`.`che__nur_tache`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
   AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
ORDER BY `T0`.`chp_priorite_tache` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'tâches',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`chp_priorite_tache`),
      champ(`T0`,`chd__dtm_tache`),
      champ(`T0`,`chd__dtc_tache`),
      champ(`T0`,`che__nur_tache`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_tache)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache),
         comme(champ(`T0`,`chp_texte_tache`),:T0_chp_texte_tache),
         egal(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache),
         inf(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache2)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chp_priorite_tache`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  111 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_taches`(
    `chx_utilisateur_tache` , 
    `chp_texte_tache` , 
    `chp_priorite_tache` , 
    `chd__dtm_tache` , 
    `chd__dtc_tache`
) VALUES (
    :chx_utilisateur_tache , 
    :chp_texte_tache , 
    :chp_priorite_tache , 
    :chd__dtm_tache , 
    :chd__dtc_tache
);',
    'cht_commentaire_requete' => 'tâches',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache),
      affecte(champ(`chp_texte_tache`),:chp_texte_tache),
      affecte(champ(`chp_priorite_tache`),:chp_priorite_tache),
      affecte(champ(`chd__dtm_tache`),:chd__dtm_tache),
      affecte(champ(`chd__dtc_tache`),:chd__dtc_tache)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   )
)  ',
  ),
  112 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
;',
    'cht_commentaire_requete' => 'tâches par id',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_tache`),champ(`T0`,`chx_utilisateur_tache`),champ(`T0`,`chp_texte_tache`),champ(`T0`,`chp_priorite_tache`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache)
      )
   )
)  ',
  ),
  113 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches texte et priorité par id',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_texte_tache`),:n_chp_texte_tache),affecte(champ(`chp_priorite_tache`),:n_chp_priorite_tache),affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache)
      )
   )
)  ',
  ),
  114 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_taches
WHERE ( /* */ `chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches par id',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache)
      )
   )
)  ',
  ),
  115 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
`T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source

WHERE ( /* */ `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
   AND `T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chi_id_source` > :T0_chi_id_source2
   AND `T0`.`chi_id_source` <= :T0_chi_id_source3
   AND `T0`.`che_binaire_source` = :T0_che_binaire_source
   AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
   AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
   AND `T0`.`che_contient_version_source` = :T0_che_contient_version_source
   AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source) 
ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chx_dossier_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`cht_rev_source`),
      champ(`T0`,`cht_genere_source`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T0`,`che_binaire_source`),
      champ(`T0`,`che_contient_version_source`),
      champ(`T0`,`che_autorisation_globale_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_id_source)))
      )
   ),
   conditions(
      et(
         #(),
         comme(champ(`T0`,`chp_nom_source`),:T0_chp_nom_source),
         egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source),
         sup(champ(`T0`,`chi_id_source`),:T0_chi_id_source2),
         infegal(champ(`T0`,`chi_id_source`),:T0_chi_id_source3),
         egal(champ(`T0`,`che_binaire_source`),:T0_che_binaire_source),
         egal(champ(`T0`,`chx_dossier_id_source`),:T0_chx_dossier_id_source),
         comme(champ(`T1`,`chp_nom_dossier`),:T1_chp_nom_dossier),
         egal(champ(`T0`,`che_contient_version_source`),:T0_che_contient_version_source),
         egal(champ(`T0`,`che_autorisation_globale_source`),:T0_che_autorisation_globale_source)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_dossier_id_source`),croissant()),(champ(`T0`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_source`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  116 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
`T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source

WHERE ( /* */ `T0`.`chi_id_source` = :T0_chi_id_source)
;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chx_dossier_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`cht_rev_source`),
      champ(`T0`,`cht_genere_source`),
      champ(`T0`,`che_binaire_source`),
      champ(`T0`,`che_contient_version_source`),
      champ(`T0`,`che_autorisation_globale_source`),
      champ(`T1`,`chp_nom_dossier`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_id_source)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source)
      )
   )
)  ',
  ),
  117 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_sources`(
    `chx_dossier_id_source` , 
    `chp_nom_source` , 
    `cht_commentaire_source` , 
    `cht_rev_source` , 
    `cht_genere_source` , 
    `che_binaire_source`
) VALUES (
    :chx_dossier_id_source , 
    :chp_nom_source , 
    :cht_commentaire_source , 
    :cht_rev_source , 
    :cht_genere_source , 
    :che_binaire_source
);',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_dossier_id_source`),:chx_dossier_id_source),
      affecte(champ(`chp_nom_source`),:chp_nom_source),
      affecte(champ(`cht_commentaire_source`),:cht_commentaire_source),
      affecte(champ(`cht_rev_source`),:cht_rev_source),
      affecte(champ(`cht_genere_source`),:cht_genere_source),
      affecte(champ(`che_binaire_source`),:che_binaire_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   )
)  ',
  ),
  118 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_sources
WHERE `chi_id_source` = :chi_id_source ;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:chi_id_source))
)  ',
  ),
  119 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE ( /* */ `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
   AND `T0`.`chi_compteur1_utilisateur` >= :T0_chi_compteur1_utilisateur
   AND `T0`.`chx_acces_utilisateur` = :T0_chx_acces_utilisateur
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_utilisateur)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_utilisateur`),:T0_chi_id_utilisateur),
         comme(champ(`T0`,`chp_nom_de_connexion_utilisateur`),:T0_chp_nom_de_connexion_utilisateur),
         supegal(champ(`T0`,`chi_compteur1_utilisateur`),:T0_chi_compteur1_utilisateur),
         egal(champ(`T0`,`chx_acces_utilisateur`),:T0_chx_acces_utilisateur),
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_utilisateur`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  120 => 
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:chp_nom_de_connexion_utilisateur),affecte(champ(`chx_acces_utilisateur`),:chx_acces_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
)  ',
  ),
  121 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
`T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',
    'cht_commentaire_requete' => 'utilisateur',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chp_parametres_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`che__nur_utilisateur`),
      champ(`T0`,`chd__dtm_utilisateur`),
      champ(`T0`,`chd__dtc_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T1`,`chp_nom_acces`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_utilisateur)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_utilisateur`),:T0_chi_id_utilisateur))
)  ',
  ),
  122 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chx_acces_utilisateur` = :n_chx_acces_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateur',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:n_chp_nom_de_connexion_utilisateur),affecte(champ(`chx_acces_utilisateur`),:n_chx_acces_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ',
  ),
  123 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateur',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:chi_id_utilisateur))
)  ',
  ),
  124 => 
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_metier`),champ(`T0`,`chp_nom_metier`),champ(`T1`,`chp_nom_metier`),champ(`T0`,`chx_parent_metier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_metier),champ(T0,chx_parent_metier)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier),comme(champ(`T0`,`chp_nom_metier`),:T0_chp_nom_metier))
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_metier`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  125 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
;',
    'cht_commentaire_requete' => 'métier',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_metier`),champ(`T0`,`chp_nom_metier`),champ(`T1`,`chp_nom_metier`),champ(`T0`,`chx_parent_metier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_metier),champ(T0,chx_parent_metier)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier))
)  ',
  ),
  126 => 
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_metier`),:chp_nom_metier),affecte(champ(`chx_parent_metier`),:chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier),comme(champ(`T0`,`chp_nom_metier`),:T0_chp_nom_metier))
   )
)  ',
  ),
  127 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_metiers SET 
   `chp_nom_metier` = :n_chp_nom_metier , 
   `chx_parent_metier` = :n_chx_parent_metier
WHERE `chi_id_metier` = :c_chi_id_metier ;',
    'cht_commentaire_requete' => 'métier',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_metier`),:n_chp_nom_metier),affecte(champ(`chx_parent_metier`),:n_chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:c_chi_id_metier))
)  ',
  ),
  130 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T1`.`chp_nom_groupe` , `T0`.`chx_parent_groupe`
 FROM b1.tbl_groupes T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe

WHERE ( /* */ `T0`.`chi_id_groupe` = :T0_chi_id_groupe
   AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe
   AND `T0`.`chx_parent_groupe` = :T0_chx_parent_groupe
   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe) 
ORDER BY `T0`.`chi_id_groupe` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'liste des groupes',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_groupe`),champ(`T0`,`chp_nom_groupe`),champ(`T1`,`chp_nom_groupe`),champ(`T0`,`chx_parent_groupe`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_parent_groupe)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_groupe`),:T0_chi_id_groupe),
         comme(champ(`T0`,`chp_nom_groupe`),:T0_chp_nom_groupe),
         egal(champ(`T0`,`chx_parent_groupe`),:T0_chx_parent_groupe),
         comme(champ(`T1`,`chp_nom_groupe`),:T1_chp_nom_groupe)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_groupe`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  131 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
 FROM b1.tbl_groupes T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe

WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
;',
    'cht_commentaire_requete' => 'groupes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_groupe` ) , champ( `T0` , `chp_nom_groupe` ) , champ( `T0` , `chx_parent_groupe` ) , champ( `T1` , `chp_nom_groupe` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_groupes , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_groupe ) , champ( T0 , chx_parent_groupe ) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_groupe` ) , :T0_chi_id_groupe ))
)  ',
  ),
  132 => 
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_groupe` ) , :chp_nom_groupe ) , affecte( champ( `chx_parent_groupe` ) , :chx_parent_groupe )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , base(b1) ))
      )
   )
)  ',
  ),
  133 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_groupes SET 
   `chp_nom_groupe` = :n_chp_nom_groupe , 
   `chx_parent_groupe` = :n_chx_parent_groupe
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',
    'cht_commentaire_requete' => 'groupes',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_groupe`),:n_chp_nom_groupe),affecte(champ(`chx_parent_groupe`),:n_chx_parent_groupe)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:c_chi_id_groupe))
)  ',
  ),
  134 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',
    'cht_commentaire_requete' => 'groupes',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:chi_id_groupe))
)  ',
  ),
  135 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
`T2`.`chp_nom_metier`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE (`T0`.`chi_id_acces` = :T0_chi_id_acces
   AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces
   AND `T0`.`chx_groupe_acces` = :T0_chx_groupe_acces
   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe
   AND `T0`.`chx_metier_acces` = :T0_chx_metier_acces
   AND `T2`.`chp_nom_metier` LIKE :T2_chp_nom_metier) 
ORDER BY `T0`.`chi_id_acces` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'accès',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_acces`),
      champ(`T0`,`chp_nom_acces`),
      champ(`T0`,`chx_groupe_acces`),
      champ(`T0`,`chx_metier_acces`),
      champ(`T1`,`chp_nom_groupe`),
      champ(`T2`,`chp_nom_metier`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_groupe_acces)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_metier),champ(T0,chx_metier_acces)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chi_id_acces`),:T0_chi_id_acces),
         comme(champ(`T0`,`chp_nom_acces`),:T0_chp_nom_acces),
         egal(champ(`T0`,`chx_groupe_acces`),:T0_chx_groupe_acces),
         comme(champ(`T1`,`chp_nom_groupe`),:T1_chp_nom_groupe),
         egal(champ(`T0`,`chx_metier_acces`),:T0_chx_metier_acces),
         comme(champ(`T2`,`chp_nom_metier`),:T2_chp_nom_metier)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_acces`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  136 => 
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_acces`),
      champ(`T0`,`chp_nom_acces`),
      champ(`T0`,`chx_groupe_acces`),
      champ(`T0`,`chx_metier_acces`),
      champ(`T0`,`cht_parametres_acces`),
      champ(`T1`,`chp_nom_groupe`),
      champ(`T2`,`chp_nom_metier`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_groupe_acces)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_metier),champ(T0,chx_metier_acces)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_acces`),:T0_chi_id_acces))
)  ',
  ),
  137 => 
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_acces`),:chp_nom_acces),affecte(champ(`chx_groupe_acces`),:chx_groupe_acces),affecte(champ(`chx_metier_acces`),:chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   )
)  ',
  ),
  138 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_acces SET 
   `chp_nom_acces` = :n_chp_nom_acces , 
   `chx_groupe_acces` = :n_chx_groupe_acces , 
   `chx_metier_acces` = :n_chx_metier_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',
    'cht_commentaire_requete' => 'accès',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_acces`),:n_chp_nom_acces),affecte(champ(`chx_groupe_acces`),:n_chx_groupe_acces),affecte(champ(`chx_metier_acces`),:n_chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:c_chi_id_acces))
)  ',
  ),
  139 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',
    'cht_commentaire_requete' => 'accès',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:chi_id_acces))
)  ',
  ),
  140 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
`T2`.`chp_nom_source` , `T2`.`chx_dossier_id_source`
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chp_nom_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T2`,`chp_nom_source`),
      champ(`T2`,`chx_dossier_id_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_source),champ(T0,chx_source_autorisation)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation),
         egal(champ(`T0`,`chx_acces_autorisation`),:T0_chx_acces_autorisation),
         egal(champ(`T0`,`chx_source_autorisation`),:T0_chx_source_autorisation),
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces),
         comme(champ(`T2`,`chp_nom_source`),:T2_chp_nom_source)
      )
   ),
   complements(
      trier_par((champ(`T2`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_autorisation`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  141 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
`T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
;',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chp_nom_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T2`,`chp_nom_source`),
      champ(`T2`,`che_binaire_source`),
      champ(`T2`,`chx_dossier_id_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_source),champ(T0,chx_source_autorisation)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation))
)  ',
  ),
  142 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_autorisations`(
    `chx_acces_autorisation` , 
    `chx_source_autorisation` , 
    `chp_nom_autorisation`
) VALUES (
    :chx_acces_autorisation , 
    :chx_source_autorisation , 
    :chp_nom_autorisation
);',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_acces_autorisation`),:chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:chx_source_autorisation),affecte(champ(`chp_nom_autorisation`),:chp_nom_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   )
)  ',
  ),
  143 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_autorisations SET 
   `chx_acces_autorisation` = :n_chx_acces_autorisation , 
   `chx_source_autorisation` = :n_chx_source_autorisation , 
   `chp_nom_autorisation` = :n_chp_nom_autorisation
WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_acces_autorisation`),:n_chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:n_chx_source_autorisation),affecte(champ(`chp_nom_autorisation`),:n_chp_nom_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:c_chi_id_autorisation))
)  ',
  ),
  144 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_autorisations
WHERE `chi_id_autorisation` = :chi_id_autorisation ;',
    'cht_commentaire_requete' => 'autorisations',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:chi_id_autorisation))
)  ',
  ),
  145 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
`T3`.`chp_nom_source`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T0`.`chi_id_menu` LIKE :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
   AND `T1`.`chp_nom_autorisation` = :T1_chp_nom_autorisation
   AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
   AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_condition_menu`),
      champ(`T0`,`cht_condition_php_menu`),
      champ(`T1`,`chx_acces_autorisation`),
      champ(`T1`,`chx_source_autorisation`),
      champ(`T2`,`chp_nom_acces`),
      champ(`T3`,`chp_nom_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_autorisations,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_autorisation),champ(T0,chx_autorisation_menu)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_acces),champ(T1,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_source),champ(T1,chx_source_autorisation)))
      )
   ),
   conditions(
      et(
         comme(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu),
         comme(champ(`T0`,`cht_libelle_menu`),:T0_cht_libelle_menu),
         comme(champ(`T0`,`chp_titre_menu`),:T0_chp_titre_menu),
         egal(champ(`T0`,`chx_autorisation_menu`),:T0_chx_autorisation_menu),
         egal(champ(`T1`,`chp_nom_autorisation`),:T1_chp_nom_autorisation),
         comme(champ(`T0`,`chp_methode_menu`),:T0_chp_methode_menu),
         egal(champ(`T1`,`chx_acces_autorisation`),:T1_chx_acces_autorisation)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_menu`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  146 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , 
`T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T3`.`che_binaire_source`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_initialisation_menu`),
      champ(`T0`,`cht_condition_menu`),
      champ(`T0`,`cht_condition_php_menu`),
      champ(`T1`,`chx_acces_autorisation`),
      champ(`T1`,`chx_source_autorisation`),
      champ(`T2`,`chp_nom_acces`),
      champ(`T3`,`chp_nom_source`),
      champ(`T3`,`che_binaire_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_autorisations,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_autorisation),champ(T0,chx_autorisation_menu)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_acces),champ(T1,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_source),champ(T1,chx_source_autorisation)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu))
   )
)  ',
  ),
  147 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_menus`(
    `chp_titre_menu` , 
    `chx_autorisation_menu` , 
    `chp_methode_menu` , 
    `cht_libelle_menu` , 
    `cht_condition_menu` , 
    `cht_condition_php_menu` , 
    `cht_initialisation_menu`
) VALUES (
    :chp_titre_menu , 
    :chx_autorisation_menu , 
    :chp_methode_menu , 
    :cht_libelle_menu , 
    :cht_condition_menu , 
    :cht_condition_php_menu , 
    :cht_initialisation_menu
);',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_titre_menu`),:chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:chp_methode_menu),
      affecte(champ(`cht_libelle_menu`),:cht_libelle_menu),
      affecte(champ(`cht_condition_menu`),:cht_condition_menu),
      affecte(champ(`cht_condition_php_menu`),:cht_condition_php_menu),
      affecte(champ(`cht_initialisation_menu`),:cht_initialisation_menu)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   )
)  ',
  ),
  148 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_menus SET 
   `cht_libelle_menu` = :n_cht_libelle_menu , 
   `chp_titre_menu` = :n_chp_titre_menu , 
   `chx_autorisation_menu` = :n_chx_autorisation_menu , 
   `chp_methode_menu` = :n_chp_methode_menu , 
   `cht_condition_menu` = :n_cht_condition_menu , 
   `cht_condition_php_menu` = :n_cht_condition_php_menu , 
   `cht_initialisation_menu` = :n_cht_initialisation_menu
WHERE `chi_id_menu` = :c_chi_id_menu ;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`cht_libelle_menu`),:n_cht_libelle_menu),
      affecte(champ(`chp_titre_menu`),:n_chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:n_chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:n_chp_methode_menu),
      affecte(champ(`cht_condition_menu`),:n_cht_condition_menu),
      affecte(champ(`cht_condition_php_menu`),:n_cht_condition_php_menu),
      affecte(champ(`cht_initialisation_menu`),:n_cht_initialisation_menu),
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:c_chi_id_menu))
)  ',
  ),
  149 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',
    'cht_commentaire_requete' => 'menus',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:chi_id_menu))
)  ',
  ),
  150 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_utilisateurs SET 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_mot_de_passe_utilisateur`),:n_chp_mot_de_passe_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ',
  ),
  151 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`che_autorisation_globale_source` = 1
;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chp_nom_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_autorisation_globale_source`),1))
)  ',
  ),
  152 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation

WHERE (`T1`.`chp_nom_source` LIKE :T1_chp_nom_source
   AND `T0`.`chx_acces_autorisation` > 1) 
ORDER BY `T0`.`chx_acces_autorisation` ASC
;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chp_nom_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T1`,`chp_nom_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_source),champ(T0,chx_source_autorisation)))
      )
   ),
   conditions(
      et(equivalent(champ(`T1`,`chp_nom_source`),:T1_chp_nom_source),sup(champ(`T0`,`chx_acces_autorisation`),1))
   ),
   complements(
      trier_par((champ(`T0`,`chx_acces_autorisation`),croissant()))
   )
)  ',
  ),
  153 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T1`.`chx_source_autorisation` , `T0`.`chp_titre_menu` , `T0`.`chp_methode_menu` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`chi_id_menu` , `T0`.`cht_condition_php_menu` , `T0`.`cht_condition_menu`
 FROM b1.tbl_menus T0 , 
      b1.tbl_autorisations T1
 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE ( /* */ `T2`.`chi_id_acces` = :T2_chi_id_acces
   AND T1.chi_id_autorisation = T0.chx_autorisation_menu)
;',
    'cht_commentaire_requete' => 'menus par acces',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T1`,`chx_source_autorisation`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T3`,`chp_nom_source`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_initialisation_menu`),
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`cht_condition_php_menu`),
      champ(`T0`,`cht_condition_menu`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      ),
      jointure_croisée(
         source(nom_de_la_table(tbl_autorisations,alias(T1),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_acces),champ(T1,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_source),champ(T1,chx_source_autorisation)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T2`,`chi_id_acces`),:T2_chi_id_acces),
         egal(champ(T1,chi_id_autorisation),champ(T0,chx_autorisation_menu))
      )
   )
)  ',
  ),
  154 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_acces SET 
   `cht_parametres_acces` = :n_cht_parametres_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',
    'cht_commentaire_requete' => 'accès paramètres par id',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_parametres_acces`),:n_cht_parametres_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:c_chi_id_acces))
)  ',
  ),
  155 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_dossiers SET 
   `chp_nom_dossier` = :n_chp_nom_dossier , 
   `chx_parent_dossier` = :n_chx_parent_dossier , 
   `che_contient_genere_dossier` = :n_che_contient_genere_dossier , 
   `che_pour_les_js_dossier` = :n_che_pour_les_js_dossier
WHERE `chi_id_dossier` = :c_chi_id_dossier ;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_dossier`),:n_chp_nom_dossier),affecte(champ(`chx_parent_dossier`),:n_chx_parent_dossier),affecte(champ(`che_contient_genere_dossier`),:n_che_contient_genere_dossier),affecte(champ(`che_pour_les_js_dossier`),:n_che_pour_les_js_dossier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_dossier`),:c_chi_id_dossier))
)  ',
  ),
  156 => 
  array (
    'cht_sql_requete' => 'INSERT INTO `tbl_projets`(
    `chi_id_projet` , 
    `chp_nom_projet` , 
    `chx_dossier_requetes_projet` , 
    `chx_dossier_menus_projet`
) VALUES (
    :chi_id_projet , 
    :chi_id_projet , 
    1 , 
    1
);',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'insérer(
   valeurs(
      #(),
      affecte(champ(`chi_id_projet`),:chi_id_projet),
      affecte(champ(`chp_nom_projet`),:chi_id_projet),
      affecte(champ(`chx_dossier_requetes_projet`),1),
      affecte(champ(`chx_dossier_menus_projet`),1)
   ),
   provenance(
      table_reference(source(nom_de_la_table(tbl_projets)))
   )
)    ',
  ),
  157 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_projets
WHERE `chi_id_projet` >= :chi_id_projet ;',
    'cht_commentaire_requete' => 'projets >= id',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(supegal(champ(`chi_id_projet`),:chi_id_projet))
)  ',
  ),
  158 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_dossiers
WHERE `chi_id_dossier` = :chi_id_dossier ;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_dossier`),:chi_id_dossier))
)  ',
  ),
  159 => 
  array (
    'cht_sql_requete' => 'INSERT INTO `tbl_dossiers`(
    `chi_id_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chi_id_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'insérer(
   valeurs(
      #(),
      affecte( champ( `chi_id_dossier` ) , :chi_id_dossier),
      affecte( champ( `chp_nom_dossier` ) , :chp_nom_dossier),
      affecte( champ( `chx_parent_dossier` ) , :chx_parent_dossier)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers ))
      )
   )
)        ',
  ),
  160 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`chx_dossier_bdds_projet`
 FROM tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   valeurs(
      champ(`T0`,`chx_dossier_requetes_projet`),
      champ(`T0`,`chx_dossier_menus_projet`)
      champ(`T0`,`chx_dossier_bdds_projet`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_projet`),:T0_chi_id_projet))
   )
)    ',
  ),
  163 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_sources SET 
   `chp_nom_source` = :n_chp_nom_source , 
   `che_binaire_source` = :n_che_binaire_source , 
   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source , 
   `cht_commentaire_source` = :n_cht_commentaire_source , 
   `che_contient_version_source` = :n_che_contient_version_source , 
   `che_autorisation_globale_source` = :n_che_autorisation_globale_source
WHERE `chi_id_source` = :c_chi_id_source ;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_nom_source`),:n_chp_nom_source),
      affecte(champ(`che_binaire_source`),:n_che_binaire_source),
      affecte(champ(`chx_dossier_id_source`),:n_chx_dossier_id_source),
      affecte(champ(`cht_rev_source`),:n_cht_rev_source),
      affecte(champ(`cht_genere_source`),:n_cht_genere_source),
      affecte(champ(`cht_commentaire_source`),:n_cht_commentaire_source),
      affecte(champ(`che_contient_version_source`),:n_che_contient_version_source),
      affecte(champ(`che_autorisation_globale_source`),:n_che_autorisation_globale_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ',
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
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_tache`),champ(`T0`,`chx_utilisateur_tache`),champ(`T0`,`chp_texte_tache`),champ(`T0`,`chp_priorite_tache`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache),
         inf(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chp_priorite_tache`),croissant()))
   )
)  ',
  ),
  165 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches priorité par id=',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_priorite_tache`),:n_chp_priorite_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache)
      )
   )
)  ',
  ),
  166 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`chi_id_dossier`
 FROM tbl_dossiers T0
WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier)
;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   valeurs( champ( `T0` , `chp_nom_dossier` ) , champ( `T0` , `chx_parent_dossier` ) , champ( `T0` , `chi_id_dossier` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , alias(T0) ))
      )
   ),
   conditions(
      et(
         egal( champ( `T0` , `chi_id_dossier` ) , :T0_chi_id_dossier),
      )
   )
)        ',
  ),
  168 => 
  array (
    'cht_sql_requete' => 'SELECT 
COUNT( * )
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
;',
    'cht_commentaire_requete' => 'dossier compte sous dossiers',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier))
)  ',
  ),
  169 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
;',
    'cht_commentaire_requete' => 'dossiers par parents',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier))
)  ',
  ),
  170 => 
  array (
    'cht_sql_requete' => '/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_dossiers',
    'cht_commentaire_requete' => 'dossier racine d\'un projet',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions()
)  ',
  ),
  171 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
;',
    'cht_commentaire_requete' => 'bases d\'un projet',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions()
)  ',
  ),
  187 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',
    'cht_commentaire_requete' => 'métier',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:chi_id_metier))
)  ',
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
    'cht_rev_requete' => 'modifier(
   valeurs(
      affecte(champ(`chp_nom_projet`),:n_chp_nom_projet),
      affecte(champ(`chx_dossier_requetes_projet`),:n_chx_dossier_requetes_projet),
      affecte(champ(`chx_dossier_menus_projet`),:n_chx_dossier_menus_projet),
      affecte(champ(`cht_commentaire_projet`),:n_cht_commentaire_projet),
      
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets))
      )
   ),
   conditions(egal(champ(`chi_id_projet`),:c_chi_id_projet))
)        ',
  ),
  306 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chp_nom_dossier` NOT LIKE :T0_chp_nom_dossier
;',
    'cht_commentaire_requete' => 'dossiers à copier dans un autre environnement',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`),champ(`T0`,`chx_parent_dossier`),champ(`T0`,`che_contient_genere_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(pas_equivalent(champ(`T0`,`chp_nom_dossier`),:T0_chp_nom_dossier))
)  ',
  ),
  307 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_dossiers`(
    `chi_id_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier` , 
    `che_contient_genere_dossier` , 
    `chd__dtm_dossier` , 
    `chd__dtc_dossier`
) VALUES (
    :chi_id_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier , 
    :che_contient_genere_dossier , 
    :chd__dtm_dossier , 
    :chd__dtc_dossier
);',
    'cht_commentaire_requete' => 'dossiers à copier dans un autre environnement',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_dossier`),:chi_id_dossier),
      affecte(champ(`chp_nom_dossier`),:chp_nom_dossier),
      affecte(champ(`chx_parent_dossier`),:chx_parent_dossier),
      affecte(champ(`che_contient_genere_dossier`),:che_contient_genere_dossier),
      affecte(champ(`chd__dtm_dossier`),:chd__dtm_dossier),
      affecte(champ(`chd__dtc_dossier`),:chd__dtc_dossier)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   )
)  ',
  ),
  308 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet`
 FROM b1.tbl_projets T0
WHERE (`T0`.`chi_id_projet` = 1)
;',
    'cht_commentaire_requete' => 'dossiers du projet à copier dans un autre environnement',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chx_dossier_requetes_projet`),champ(`T0`,`chx_dossier_menus_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_projet`),1))
   )
)  ',
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
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_dossier_requetes_projet`),:n_chx_dossier_requetes_projet),affecte(champ(`chx_dossier_menus_projet`),:n_chx_dossier_menus_projet)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_projet`),:c_chi_id_projet))
   )
)  ',
  ),
  310 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_sources SET 
   `chi_id_source` = :n_chi_id_source
WHERE `chi_id_source` = :c_chi_id_source ;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_source`),:n_chi_id_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ',
  ),
  313 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , 
`T0`.`che_binaire_source` , `T0`.`chx_dossier_id_source`
 FROM b1.tbl_sources T0
WHERE ((`T0`.`chi_id_source` < :T0_chi_id_source
   AND `T0`.`chp_nom_source` NOT LIKE :T0_chp_nom_source) OR `T0`.`chi_id_source` IN (:T0_chi_id_source2))
;',
    'cht_commentaire_requete' => 'sources à copier dans un autre environnement',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`cht_rev_source`),
      champ(`T0`,`cht_genere_source`),
      champ(`T0`,`che_binaire_source`),
      champ(`T0`,`chx_dossier_id_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(
      ou(
         et(inf(champ(`T0`,`chi_id_source`),:T0_chi_id_source),pas_comme(champ(`T0`,`chp_nom_source`),:T0_chp_nom_source)),
         dans(champ(`T0`,`chi_id_source`),(:T0_chi_id_source2))
      )
   )
)  ',
  ),
  314 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_sources`(
    `chi_id_source` , 
    `chp_nom_source` , 
    `cht_commentaire_source` , 
    `che_binaire_source` , 
    `chd__dtm_source` , 
    `chd__dtc_source` , 
    `chx_dossier_id_source`
) VALUES (
    :chi_id_source , 
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
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_source`),:chi_id_source),
      affecte(champ(`chp_nom_source`),:chp_nom_source),
      affecte(champ(`cht_commentaire_source`),:cht_commentaire_source),
      affecte(champ(`che_binaire_source`),:che_binaire_source),
      affecte(champ(`chd__dtm_source`),:chd__dtm_source),
      affecte(champ(`chd__dtc_source`),:chd__dtc_source),
      affecte(champ(`chx_dossier_id_source`),:chx_dossier_id_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   )
)  ',
  ),
  315 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_bdds`(
    `chi_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_rev_travail_basedd` , 
    `chp_fournisseur_basedd` , 
    `chx_dossier_id_basedd` , 
    `chd__dtm_basedd` , 
    `chd__dtc_basedd`
) VALUES (
    :chi_id_basedd , 
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
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_basedd`),:chi_id_basedd),
      affecte(champ(`chp_commentaire_basedd`),:chp_commentaire_basedd),
      affecte(champ(`chp_rev_travail_basedd`),:chp_rev_travail_basedd),
      affecte(champ(`chp_fournisseur_basedd`),:chp_fournisseur_basedd),
      affecte(champ(`chx_dossier_id_basedd`),:chx_dossier_id_basedd),
      affecte(champ(`chd__dtm_basedd`),:chd__dtm_basedd),
      affecte(champ(`chd__dtc_basedd`),:chd__dtc_basedd)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   )
)  ',
  ),
  316 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
 FROM b1.tbl_projets T0
WHERE `T0`.`chi_id_projet` > 2
;',
    'cht_commentaire_requete' => 'projets >2 pour isa de champs ',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_projet`),champ(`T0`,`chp_nom_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   conditions(sup(champ(`T0`,`chi_id_projet`),2))
)  ',
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
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T1`,`chx_dossier_id_source`),champ(`T1`,`chp_nom_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_source),champ(T0,chx_source_autorisation)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation))
)  ',
  ),
  328 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
`T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
`T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
`T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre`
 FROM b1.tbl_genres T0
WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_genre`),
      champ(`T0`,`chp_nom_genre`),
      champ(`T0`,`che_ordre_genre`),
      champ(`T0`,`chp_prefixe_genre`),
      champ(`T0`,`chp_espece_genre`),
      champ(`T0`,`che_longueur_genre`),
      champ(`T0`,`che_est_primaire_genre`),
      champ(`T0`,`che_est_incrément_genre`),
      champ(`T0`,`che_est_obligatoire_genre`),
      champ(`T0`,`che_a_init_genre`),
      champ(`T0`,`che_init_est_mot_genre`),
      champ(`T0`,`cht_valeur_init_genre`),
      champ(`T0`,`che_est_parmis_genre`),
      champ(`T0`,`cht_parmis_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`),
      champ(`T0`,`che_est_tsm_genre`),
      champ(`T0`,`che_est_tsc_genre`),
      champ(`T0`,`chd__dtc_genre`),
      champ(`T0`,`chd__dtm_genre`),
      champ(`T0`,`che__nur_genre`),
      champ(`T0`,`che_est_session_genre`),
      champ(`T0`,`chp_nom_en_session_genre`),
      champ(`T0`,`che_est_positif_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(
      egal(champ(`T0`,`chi_id_genre`),:T0_chi_id_genre),
      comme(champ(`T0`,`chp_nom_genre`),:T0_chp_nom_genre),
      comme(champ(`T0`,`chp_prefixe_genre`),:T0_chp_prefixe_genre),
      comme(champ(`T0`,`chp_espece_genre`),:T0_chp_espece_genre),
      comme(champ(`T0`,`cht_valeur_init_genre`),:T0_cht_valeur_init_genre),
      comme(champ(`T0`,`cht_parmis_genre`),:T0_cht_parmis_genre),
      egal(champ(`T0`,`che_ordre_genre`),:T0_che_ordre_genre)
   ),
   complements(
      trier_par((champ(`T0`,`che_ordre_genre`),croissant()),(champ(`T0`,`chi_id_genre`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  329 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_genres`(
    `chp_nom_genre` , 
    `che_ordre_genre` , 
    `chp_prefixe_genre` , 
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
    `cht_fonctions_genre` , 
    `che_est_nur_genre` , 
    `che_est_tsm_genre` , 
    `che_est_tsc_genre` , 
    `chd__dtc_genre` , 
    `chd__dtm_genre` , 
    `che_est_session_genre` , 
    `chp_nom_en_session_genre` , 
    `che_est_positif_genre` , 
    `cht_particularités_genre`
) VALUES (
    :chp_nom_genre , 
    :che_ordre_genre , 
    :chp_prefixe_genre , 
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
    :cht_fonctions_genre , 
    :che_est_nur_genre , 
    :che_est_tsm_genre , 
    :che_est_tsc_genre , 
    :chd__dtc_genre , 
    :chd__dtm_genre , 
    :che_est_session_genre , 
    :chp_nom_en_session_genre , 
    :che_est_positif_genre , 
    :cht_particularités_genre
);',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_nom_genre`),:chp_nom_genre),
      affecte(champ(`che_ordre_genre`),:che_ordre_genre),
      affecte(champ(`chp_prefixe_genre`),:chp_prefixe_genre),
      affecte(champ(`chp_espece_genre`),:chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:cht_valeur_init_genre),
      affecte(champ(`che_est_parmis_genre`),:che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:cht_parmis_genre),
      affecte(champ(`cht_fonctions_genre`),:cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:che_est_nur_genre),
      affecte(champ(`che_est_tsm_genre`),:che_est_tsm_genre),
      affecte(champ(`che_est_tsc_genre`),:che_est_tsc_genre),
      affecte(champ(`chd__dtc_genre`),:chd__dtc_genre),
      affecte(champ(`chd__dtm_genre`),:chd__dtm_genre),
      affecte(champ(`che_est_session_genre`),:che_est_session_genre),
      affecte(champ(`chp_nom_en_session_genre`),:chp_nom_en_session_genre),
      affecte(champ(`che_est_positif_genre`),:che_est_positif_genre),
      affecte(champ(`cht_particularités_genre`),:cht_particularités_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   )
)  ',
  ),
  330 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
`T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
`T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
`T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
 FROM b1.tbl_genres T0
WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
;',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_genre`),
      champ(`T0`,`chp_nom_genre`),
      champ(`T0`,`che_ordre_genre`),
      champ(`T0`,`chp_prefixe_genre`),
      champ(`T0`,`chp_espece_genre`),
      champ(`T0`,`che_longueur_genre`),
      champ(`T0`,`che_est_primaire_genre`),
      champ(`T0`,`che_est_incrément_genre`),
      champ(`T0`,`che_est_obligatoire_genre`),
      champ(`T0`,`che_a_init_genre`),
      champ(`T0`,`che_init_est_mot_genre`),
      champ(`T0`,`cht_valeur_init_genre`),
      champ(`T0`,`che_est_parmis_genre`),
      champ(`T0`,`cht_parmis_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`),
      champ(`T0`,`che_est_tsm_genre`),
      champ(`T0`,`che_est_tsc_genre`),
      champ(`T0`,`chd__dtc_genre`),
      champ(`T0`,`chd__dtm_genre`),
      champ(`T0`,`che__nur_genre`),
      champ(`T0`,`che_est_session_genre`),
      champ(`T0`,`chp_nom_en_session_genre`),
      champ(`T0`,`che_est_positif_genre`),
      champ(`T0`,`cht_particularités_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_genre`),:T0_chi_id_genre))
)  ',
  ),
  331 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_genres SET 
   `chp_nom_genre` = :n_chp_nom_genre , 
   `che_ordre_genre` = :n_che_ordre_genre , 
   `chp_prefixe_genre` = :n_chp_prefixe_genre , 
   `chp_espece_genre` = :n_chp_espece_genre , 
   `che_longueur_genre` = :n_che_longueur_genre , 
   `che_est_primaire_genre` = :n_che_est_primaire_genre , 
   `che_est_incrément_genre` = :n_che_est_incrément_genre , 
   `che_est_obligatoire_genre` = :n_che_est_obligatoire_genre , 
   `che_a_init_genre` = :n_che_a_init_genre , 
   `che_init_est_mot_genre` = :n_che_init_est_mot_genre , 
   `cht_valeur_init_genre` = :n_cht_valeur_init_genre , 
   `che_est_parmis_genre` = :n_che_est_parmis_genre , 
   `cht_parmis_genre` = :n_cht_parmis_genre , 
   `cht_fonctions_genre` = :n_cht_fonctions_genre , 
   `che_est_nur_genre` = :n_che_est_nur_genre , 
   `che_est_tsm_genre` = :n_che_est_tsm_genre , 
   `che_est_tsc_genre` = :n_che_est_tsc_genre , 
   `chd__dtm_genre` = :n_chd__dtm_genre , 
   `che__nur_genre` = :n_che__nur_genre , 
   `che_est_session_genre` = :n_che_est_session_genre , 
   `chp_nom_en_session_genre` = :n_chp_nom_en_session_genre , 
   `che_est_positif_genre` = :n_che_est_positif_genre , 
   `cht_particularités_genre` = :n_cht_particularités_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_nom_genre`),:n_chp_nom_genre),
      affecte(champ(`che_ordre_genre`),:n_che_ordre_genre),
      affecte(champ(`chp_prefixe_genre`),:n_chp_prefixe_genre),
      affecte(champ(`chp_espece_genre`),:n_chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:n_che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:n_che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:n_che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:n_che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:n_che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:n_che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:n_cht_valeur_init_genre),
      affecte(champ(`che_est_parmis_genre`),:n_che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:n_cht_parmis_genre),
      affecte(champ(`cht_fonctions_genre`),:n_cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:n_che_est_nur_genre),
      affecte(champ(`che_est_tsm_genre`),:n_che_est_tsm_genre),
      affecte(champ(`che_est_tsc_genre`),:n_che_est_tsc_genre),
      affecte(champ(`chd__dtm_genre`),:n_chd__dtm_genre),
      affecte(champ(`che__nur_genre`),:n_che__nur_genre),
      affecte(champ(`che_est_session_genre`),:n_che_est_session_genre),
      affecte(champ(`chp_nom_en_session_genre`),:n_chp_nom_en_session_genre),
      affecte(champ(`che_est_positif_genre`),:n_che_est_positif_genre),
      affecte(champ(`cht_particularités_genre`),:n_cht_particularités_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ',
  ),
  332 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_genres
WHERE `chi_id_genre` = :chi_id_genre ;',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(

      egal(champ(`chi_id_genre`),:chi_id_genre)
   )
)',
  ),
  333 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
`T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , 
`T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
 FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
;',
    'cht_commentaire_requete' => 'tous les genres',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_genre`),
      champ(`T0`,`chp_nom_genre`),
      champ(`T0`,`chp_espece_genre`),
      champ(`T0`,`che_longueur_genre`),
      champ(`T0`,`che_est_primaire_genre`),
      champ(`T0`,`che_est_incrément_genre`),
      champ(`T0`,`che_est_obligatoire_genre`),
      champ(`T0`,`che_a_init_genre`),
      champ(`T0`,`che_init_est_mot_genre`),
      champ(`T0`,`cht_valeur_init_genre`),
      champ(`T0`,`chp_prefixe_genre`),
      champ(`T0`,`che_est_parmis_genre`),
      champ(`T0`,`cht_parmis_genre`),
      champ(`T0`,`che_ordre_genre`),
      champ(`T0`,`che_est_tsc_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`),
      champ(`T0`,`che_est_tsm_genre`),
      champ(`T0`,`che_est_session_genre`),
      champ(`T0`,`chp_nom_en_session_genre`),
      champ(`T0`,`che_est_positif_genre`),
      champ(`T0`,`cht_particularités_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   complements(
      trier_par((champ(`T0`,`che_ordre_genre`),croissant()),(champ(`T0`,`chp_nom_genre`),croissant()))
   )
)  ',
  ),
  334 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_genres SET 
   `chi_id_genre` = :n_chi_id_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',
    'cht_commentaire_requete' => 'genres nouveau numéro',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_genre`),:n_chi_id_genre)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ',
  ),
  335 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_genres SET 
   `che_ordre_genre` = :n_che_ordre_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',
    'cht_commentaire_requete' => 'genres maj ordre',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`che_ordre_genre`),:n_che_ordre_genre)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ',
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
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_menu`),champ(`T0`,`cht_libelle_menu`),champ(`T0`,`chp_titre_menu`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu),
         comme(champ(`T0`,`cht_libelle_menu`),:T0_cht_libelle_menu),
         comme(champ(`T0`,`chp_titre_menu`),:T0_chp_titre_menu),
         est(champ(`T0`,`chx_autorisation_menu`),NULL)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_menu`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  338 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_sources SET 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source
WHERE `chi_id_source` = :c_chi_id_source ;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_rev_source`),:n_cht_rev_source),affecte(champ(`cht_genere_source`),:n_cht_genere_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ',
  ),
  339 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chd__dtm_requete` = :n_chd__dtm_requete , 
   `che__nur_requete` = :n_che__nur_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_rev_requete`),:n_cht_rev_requete),affecte(champ(`che_est_souche_requete`),:n_che_est_souche_requete),affecte(champ(`chd__dtm_requete`),:n_chd__dtm_requete),affecte(champ(`che__nur_requete`),:n_che__nur_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ',
  ),
  340 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chd__dtm_requete` = :n_chd__dtm_requete , 
   `che__nur_requete` = :n_che__nur_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`che_est_souche_requete`),:n_che_est_souche_requete),affecte(champ(`chd__dtm_requete`),:n_chd__dtm_requete),affecte(champ(`che__nur_requete`),:n_che__nur_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ',
  ),
  341 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chp_nom_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_dossier_id_source`),:T0_chx_dossier_id_source))
)  ',
  ),
  342 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chd__dtm_basedd` , `T0`.`chd__dtc_basedd` , `T0`.`che__nur_basedd` , `T2`.`chp_nom_dossier`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_id_basedd

WHERE ( /* */ `T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_dossier_id_basedd` = :T0_chx_dossier_id_basedd
   AND `T2`.`chp_nom_dossier` LIKE :T2_chp_nom_dossier) 
ORDER BY `T0`.`chi_id_basedd` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_basedd`),
      champ(`T0`,`chp_rev_travail_basedd`),
      champ(`T0`,`chp_fournisseur_basedd`),
      champ(`T0`,`chx_dossier_id_basedd`),
      champ(`T0`,`chp_commentaire_basedd`),
      champ(`T0`,`chd__dtm_basedd`),
      champ(`T0`,`chd__dtc_basedd`),
      champ(`T0`,`che__nur_basedd`),
      champ(`T2`,`chp_nom_dossier`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_dossier),champ(T0,chx_dossier_id_basedd)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_basedd`),:T0_chi_id_basedd),
         egal(champ(`T0`,`chx_dossier_id_basedd`),:T0_chx_dossier_id_basedd),
         comme(champ(`T2`,`chp_nom_dossier`),:T2_chp_nom_dossier)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_basedd`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  343 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_php_requete` = :n_cht_php_requete , 
   `chp_table_reference_requete` = :n_chp_table_reference_requete , 
   `cht_js_requete` = :n_cht_js_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',
    'cht_commentaire_requete' => 'requêtes',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_sql_requete`),:n_cht_sql_requete),affecte(champ(`cht_php_requete`),:n_cht_php_requete),affecte(champ(`chp_table_reference_requete`),:n_chp_table_reference_requete),affecte(champ(`cht_js_requete`),:n_cht_js_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ',
  ),
  344 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
`T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
`T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
`T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev`
 FROM b1.tbl_revs T0
WHERE ( /* */ `T0`.`chi_id_rev` = :T0_chi_id_rev)
;',
    'cht_commentaire_requete' => 'revs',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_rev`),
      champ(`T0`,`chp_provenance_rev`),
      champ(`T0`,`chx_source_rev`),
      champ(`T0`,`chp_id_rev`),
      champ(`T0`,`chp_valeur_rev`),
      champ(`T0`,`chp_type_rev`),
      champ(`T0`,`chp_niveau_rev`),
      champ(`T0`,`chp_quotee_rev`),
      champ(`T0`,`chp_pos_premier_rev`),
      champ(`T0`,`chp_pos_dernier_rev`),
      champ(`T0`,`chp_parent_rev`),
      champ(`T0`,`chp_nbr_enfants_rev`),
      champ(`T0`,`chp_num_enfant_rev`),
      champ(`T0`,`chp_profondeur_rev`),
      champ(`T0`,`chp_pos_ouver_parenthese_rev`),
      champ(`T0`,`chp_enfant_suivant_rev`),
      champ(`T0`,`chp_commentaire_rev`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_rev`),:T0_chi_id_rev)
      )
   )
)  ',
  ),
  345 => 
  array (
    'cht_sql_requete' => 'INSERT INTO `tbl_genres`(
    `chi_id_genre` , 
    `chp_nom_genre` , 
    `che_ordre_genre` , 
    `chp_prefixe_genre` , 
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
    `cht_fonctions_genre` , 
    `che_est_nur_genre` , 
    `che_est_tsm_genre` , 
    `che_est_tsc_genre` , 
    `chd__dtc_genre` , 
    `chd__dtm_genre` , 
    `che_est_session_genre` , 
    `chp_nom_en_session_genre` , 
    `che_est_positif_genre` , 
    `cht_particularités_genre`
) VALUES (
    :chi_id_genre , 
    :chp_nom_genre , 
    :che_ordre_genre , 
    :chp_prefixe_genre , 
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
    :cht_fonctions_genre , 
    :che_est_nur_genre , 
    :che_est_tsm_genre , 
    :che_est_tsc_genre , 
    :chd__dtc_genre , 
    :chd__dtm_genre , 
    :che_est_session_genre , 
    :chp_nom_en_session_genre , 
    :che_est_positif_genre , 
    :cht_particularités_genre
);',
    'cht_commentaire_requete' => 'genres',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'insérer(
   valeurs(
      affecte(champ(`chi_id_genre`),:chi_id_genre),
      affecte(champ(`chp_nom_genre`),:chp_nom_genre),
      affecte(champ(`che_ordre_genre`),:che_ordre_genre),
      affecte(champ(`chp_prefixe_genre`),:chp_prefixe_genre),
      affecte(champ(`chp_espece_genre`),:chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:cht_valeur_init_genre),
      affecte(champ(`che_est_parmis_genre`),:che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:cht_parmis_genre),
      affecte(champ(`cht_fonctions_genre`),:cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:che_est_nur_genre),
      affecte(champ(`che_est_tsm_genre`),:che_est_tsm_genre),
      affecte(champ(`che_est_tsc_genre`),:che_est_tsc_genre),
      affecte(champ(`chd__dtc_genre`),:chd__dtc_genre),
      affecte(champ(`chd__dtm_genre`),:chd__dtm_genre),
      affecte(champ(`che_est_session_genre`),:che_est_session_genre),
      affecte(champ(`chp_nom_en_session_genre`),:chp_nom_en_session_genre),
      affecte(champ(`che_est_positif_genre`),:che_est_positif_genre),
      affecte(champ(`cht_particularités_genre`),:cht_particularités_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres))
      )
   )
)                ',
  ),
  346 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`che_pour_les_js_dossier` = :T0_che_pour_les_js_dossier
;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_pour_les_js_dossier`),:T0_che_pour_les_js_dossier))
)  ',
  ),
  347 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_contient_version_source` , `T0`.`chx_dossier_id_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`che_contient_version_source` = :T0_che_contient_version_source
;',
    'cht_commentaire_requete' => 'sources avec version',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_source`),champ(`T0`,`chp_nom_source`),champ(`T0`,`che_contient_version_source`),champ(`T0`,`chx_dossier_id_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_contient_version_source`),:T0_che_contient_version_source))
)  ',
  ),
  350 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete
   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
   AND `T0`.`cht_commentaire_requete` LIKE :T0_cht_commentaire_requete
   AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2
   AND `T0`.`chp_table_reference_requete` LIKE :T0_chp_table_reference_requete) 
ORDER BY `T0`.`chi_id_requete` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'liste des requêtes',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_php_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`chp_table_reference_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete),
         egal(champ(`T0`,`che_est_souche_requete`),:T0_che_est_souche_requete),
         comme(champ(`T0`,`chp_type_requete`),:T0_chp_type_requete),
         comme(champ(`T0`,`cht_rev_requete`),:T0_cht_rev_requete),
         comme(champ(`T0`,`cht_commentaire_requete`),:T0_cht_commentaire_requete),
         infegal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete2),
         comme(champ(`T0`,`chp_table_reference_requete`),:T0_chp_table_reference_requete)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  351 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `chi_id_requete` = :n_chi_id_requete , 
   `cht_php_requete` = :n_cht_php_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_requete`),:n_chi_id_requete),affecte(champ(`cht_php_requete`),:n_cht_php_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ',
  ),
  352 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_requetes
WHERE `chi_id_requete` = :chi_id_requete ;',
    'cht_commentaire_requete' => 'requête par id',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:chi_id_requete))
)  ',
  ),
  353 => 
  array (
    'cht_sql_requete' => '/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_revs
WHERE (`chp_provenance_rev` = :chp_provenance_rev
   AND `chx_source_rev` = :chx_source_rev) ;',
    'cht_commentaire_requete' => 'revs par provenance, source et projet',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chp_provenance_rev`),:chp_provenance_rev),egal(champ(`chx_source_rev`),:chx_source_rev))
   )
)  ',
  ),
  354 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
`T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
;',
    'cht_commentaire_requete' => 'requêtes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_php_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`chp_table_reference_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete))
)  ',
  ),
  355 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chp_type_requete` = :n_chp_type_requete , 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_php_requete` = :n_cht_php_requete , 
   `cht_commentaire_requete` = :n_cht_commentaire_requete , 
   `chp_table_reference_requete` = :n_chp_table_reference_requete , 
   `cht_js_requete` = :n_cht_js_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',
    'cht_commentaire_requete' => 'requêtes',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`che_est_souche_requete`),:n_che_est_souche_requete),
      affecte(champ(`chp_type_requete`),:n_chp_type_requete),
      affecte(champ(`cht_rev_requete`),:n_cht_rev_requete),
      affecte(champ(`cht_sql_requete`),:n_cht_sql_requete),
      affecte(champ(`cht_php_requete`),:n_cht_php_requete),
      affecte(champ(`cht_commentaire_requete`),:n_cht_commentaire_requete),
      affecte(champ(`chp_table_reference_requete`),:n_chp_table_reference_requete),
      affecte(champ(`cht_js_requete`),:n_cht_js_requete)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ',
  ),
  356 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
WHERE `chi_id_basedd` = :c_chi_id_basedd ;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_rev_travail_basedd`),:n_chp_rev_travail_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:c_chi_id_basedd))
)  ',
  ),
  357 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
 FROM b1.tbl_bdds T0
WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`),champ(`T0`,`chx_dossier_id_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(dans(champ(`T0`,`chi_id_basedd`),(:T0_chi_id_basedd)))
)  ',
  ),
  358 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_revs`(
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_provenance_rev`),:chp_provenance_rev),
      affecte(champ(`chx_source_rev`),:chx_source_rev),
      affecte(champ(`chp_id_rev`),:chp_id_rev),
      affecte(champ(`chp_valeur_rev`),:chp_valeur_rev),
      affecte(champ(`chp_type_rev`),:chp_type_rev),
      affecte(champ(`chp_niveau_rev`),:chp_niveau_rev),
      affecte(champ(`chp_quotee_rev`),:chp_quotee_rev),
      affecte(champ(`chp_pos_premier_rev`),:chp_pos_premier_rev),
      affecte(champ(`chp_pos_dernier_rev`),:chp_pos_dernier_rev),
      affecte(champ(`chp_parent_rev`),:chp_parent_rev),
      affecte(champ(`chp_nbr_enfants_rev`),:chp_nbr_enfants_rev),
      affecte(champ(`chp_num_enfant_rev`),:chp_num_enfant_rev),
      affecte(champ(`chp_profondeur_rev`),:chp_profondeur_rev),
      affecte(champ(`chp_pos_ouver_parenthese_rev`),:chp_pos_ouver_parenthese_rev),
      affecte(champ(`chp_enfant_suivant_rev`),:chp_enfant_suivant_rev),
      affecte(champ(`chp_commentaire_rev`),:chp_commentaire_rev)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   )
)  ',
  ),
  359 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
`T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
`T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
`T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
 FROM b1.tbl_revs T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev

WHERE ( /* */ `T0`.`chi_id_rev` = :T0_chi_id_rev
   AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
   AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
   AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
   AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
ORDER BY `T0`.`chi_id_rev` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'revs',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_rev`),
      champ(`T0`,`chp_provenance_rev`),
      champ(`T0`,`chx_source_rev`),
      champ(`T0`,`chp_id_rev`),
      champ(`T0`,`chp_valeur_rev`),
      champ(`T0`,`chp_type_rev`),
      champ(`T0`,`chp_niveau_rev`),
      champ(`T0`,`chp_quotee_rev`),
      champ(`T0`,`chp_pos_premier_rev`),
      champ(`T0`,`chp_pos_dernier_rev`),
      champ(`T0`,`chp_parent_rev`),
      champ(`T0`,`chp_nbr_enfants_rev`),
      champ(`T0`,`chp_num_enfant_rev`),
      champ(`T0`,`chp_profondeur_rev`),
      champ(`T0`,`chp_pos_ouver_parenthese_rev`),
      champ(`T0`,`chp_enfant_suivant_rev`),
      champ(`T0`,`chp_commentaire_rev`),
      champ(`T1`,`chp_nom_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_source),champ(T0,chx_source_rev)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_rev`),:T0_chi_id_rev),
         comme(champ(`T0`,`chp_provenance_rev`),:T0_chp_provenance_rev),
         comme(champ(`T1`,`chp_nom_source`),:T1_chp_nom_source),
         comme(champ(`T0`,`chp_valeur_rev`),:T0_chp_valeur_rev),
         egal(champ(`T0`,`chx_source_rev`),:T0_chx_source_rev)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_rev`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  360 => 
  array (
    'cht_sql_requete' => '/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_revs',
    'cht_commentaire_requete' => 'revs par projet',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => '#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   )
)  ',
  ),
  361 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chx_dossier_id_basedd` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

WHERE ( /* */ `T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_dossier_id_basedd` = :T0_chx_dossier_id_basedd
   AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier) 
ORDER BY `T0`.`chi_id_basedd` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => '',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_commentaire_basedd`),champ(`T0`,`chx_dossier_id_basedd`),champ(`T1`,`chp_nom_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_id_basedd)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_basedd`),:T0_chi_id_basedd),
         egal(champ(`T0`,`chx_dossier_id_basedd`),:T0_chx_dossier_id_basedd),
         comme(champ(`T1`,`chp_nom_dossier`),:T1_chp_nom_dossier)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_basedd`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  362 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_bdds SET 
   `chx_dossier_id_basedd` = :n_chx_dossier_id_basedd , 
   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
WHERE `chi_id_basedd` = :c_chi_id_basedd ;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_dossier_id_basedd`),:n_chx_dossier_id_basedd),affecte(champ(`chp_commentaire_basedd`),:n_chp_commentaire_basedd),affecte(champ(`chp_rev_travail_basedd`),:n_chp_rev_travail_basedd),affecte(champ(`chp_fournisseur_basedd`),:n_chp_fournisseur_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:c_chi_id_basedd))
)  ',
  ),
  363 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_bdds`(
    `chx_dossier_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_fournisseur_basedd`
) VALUES (
    :chx_dossier_id_basedd , 
    :chp_commentaire_basedd , 
    :chp_fournisseur_basedd
);',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_dossier_id_basedd`),:chx_dossier_id_basedd),affecte(champ(`chp_commentaire_basedd`),:chp_commentaire_basedd),affecte(champ(`chp_fournisseur_basedd`),:chp_fournisseur_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   )
)  ',
  ),
  364 => 
  array (
    'cht_sql_requete' => 'DELETE FROM b1.tbl_bdds
WHERE `chi_id_basedd` = :chi_id_basedd ;',
    'cht_commentaire_requete' => 'base par id',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:chi_id_basedd))
)  ',
  ),
  365 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE ( /* */ `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
   AND `T0`.`chi_compteur1_utilisateur` > :T0_chi_compteur1_utilisateur) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'utilisateurs',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_utilisateur)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_utilisateur`),:T0_chi_id_utilisateur),
         comme(champ(`T0`,`chp_nom_de_connexion_utilisateur`),:T0_chp_nom_de_connexion_utilisateur),
         sup(champ(`T0`,`chi_compteur1_utilisateur`),:T0_chi_compteur1_utilisateur)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_utilisateur`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  366 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache-1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` >= 1) ;',
    'cht_commentaire_requete' => 'tâches priorité - 1',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_priorite_tache`),moins(chp_priorite_tache,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache),
         supegal(champ(`chp_priorite_tache`),1)
      )
   )
)  ',
  ),
  367 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` < 99) ;',
    'cht_commentaire_requete' => 'tâches priorité + 1',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_priorite_tache`),plus(chp_priorite_tache,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache),
         inf(champ(`chp_priorite_tache`),99)
      )
   )
)  ',
  ),
  368 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',
    'cht_commentaire_requete' => 'tâches',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_priorite_tache`),:n_chp_priorite_tache),affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache)
      )
   )
)  ',
  ),
  369 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chx_parent_dossier`),champ(`T0`,`che_contient_genere_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   )
)  ',
  ),
  371 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
 FROM b1.tbl_bdds T0
WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
;',
    'cht_commentaire_requete' => 'base par id',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_basedd`),
      champ(`T0`,`chx_dossier_id_basedd`),
      champ(`T0`,`chp_commentaire_basedd`),
      champ(`T0`,`chp_rev_travail_basedd`),
      champ(`T0`,`chp_fournisseur_basedd`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_basedd`),:T0_chi_id_basedd))
)  ',
  ),
  372 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_fournisseur_basedd` , 
`T1`.`chi_id_dossier` , `T1`.`chp_nom_dossier` , `T1`.`chx_parent_dossier`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

;',
    'cht_commentaire_requete' => 'bdds',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_basedd`),
      champ(`T0`,`chx_dossier_id_basedd`),
      champ(`T0`,`chp_rev_travail_basedd`),
      champ(`T0`,`chp_commentaire_basedd`),
      champ(`T0`,`chp_fournisseur_basedd`),
      champ(`T1`,`chi_id_dossier`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T1`,`chx_parent_dossier`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_id_basedd)))
      )
   )
)  ',
  ),
  373 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
`T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
;',
    'cht_commentaire_requete' => 'requetes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_php_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`che_est_souche_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete))
)  ',
  ),
  374 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/
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
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_projet`),champ(`T0`,`chp_nom_projet`),champ(`T0`,`cht_commentaire_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_projet`),:T0_chi_id_projet),
         comme(champ(`T0`,`chp_nom_projet`),:T0_chp_nom_projet),
         comme(champ(`T0`,`cht_commentaire_projet`),:T0_cht_commentaire_projet)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_projet`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  375 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
`T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , 
`T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , 
`T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , 
`T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
`T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chx_dossier_bdds_projet` , `T3`.`chp_nom_dossier` , 
`T4`.`chp_nom_dossier` , `T0`.`chx_dossier_js_projet`
 FROM b1.tbl_projets T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet

 LEFT JOIN b1.tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet

 LEFT JOIN b1.tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet

WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_projet`),
      champ(`T0`,`chp_nom_projet`),
      champ(`T0`,`chx_dossier_requetes_projet`),
      champ(`T0`,`chx_dossier_menus_projet`),
      champ(`T0`,`cht_commentaire_projet`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T2`,`chp_nom_dossier`),
      champ(`T0`,`chi_id_projet`),
      champ(`T0`,`chp_nom_projet`),
      champ(`T0`,`chx_dossier_requetes_projet`),
      champ(`T0`,`chx_dossier_menus_projet`),
      champ(`T0`,`cht_commentaire_projet`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T2`,`chp_nom_dossier`),
      champ(`T0`,`chi_id_projet`),
      champ(`T0`,`chp_nom_projet`),
      champ(`T0`,`chx_dossier_requetes_projet`),
      champ(`T0`,`chx_dossier_menus_projet`),
      champ(`T0`,`cht_commentaire_projet`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T2`,`chp_nom_dossier`),
      champ(`T0`,`chi_id_projet`),
      champ(`T0`,`chp_nom_projet`),
      champ(`T0`,`chx_dossier_requetes_projet`),
      champ(`T0`,`chx_dossier_menus_projet`),
      champ(`T0`,`cht_commentaire_projet`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T2`,`chp_nom_dossier`),
      champ(`T0`,`chx_dossier_bdds_projet`),
      champ(`T3`,`chp_nom_dossier`),
      champ(`T4`,`chp_nom_dossier`),
      champ(`T0`,`chx_dossier_js_projet`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_requetes_projet)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_dossier),champ(T0,chx_dossier_menus_projet)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_dossier),champ(T0,chx_dossier_bdds_projet)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T4),base(b1))),
         contrainte(egal(champ(T4,chi_id_dossier),champ(T0,chx_dossier_js_projet)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_projet`),:T0_chi_id_projet))
)  ',
  ),
  376 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_requetes SET 
   `cht_php_requete` = :n_cht_php_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',
    'cht_commentaire_requete' => 'requêtes ancienne 135 à supprimer',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_php_requete`),:n_cht_php_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ',
  ),
  377 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/

INSERT INTO b1.`tbl_projets`(
    `chp_nom_projet` , 
    `cht_commentaire_projet` , 
    `chx_dossier_requetes_projet` , 
    `chx_dossier_menus_projet` , 
    `chx_dossier_bdds_projet`
) VALUES (
    :chp_nom_projet , 
    :cht_commentaire_projet , 
    1 , 
    1 , 
    1
);',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_nom_projet`),:chp_nom_projet),
      affecte(champ(`cht_commentaire_projet`),:cht_commentaire_projet),
      affecte(champ(`chx_dossier_requetes_projet`),1),
      affecte(champ(`chx_dossier_menus_projet`),1),
      affecte(champ(`chx_dossier_bdds_projet`),1)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   )
)  ',
  ),
  378 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_dossiers`(
    `chp_nom_dossier` , 
    `chx_parent_dossier` , 
    `che_contient_genere_dossier`
) VALUES (
    :chp_nom_dossier , 
    :chx_parent_dossier , 
    :che_contient_genere_dossier
);',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_dossier`),:chp_nom_dossier),affecte(champ(`chx_parent_dossier`),:chx_parent_dossier),affecte(champ(`che_contient_genere_dossier`),:che_contient_genere_dossier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   )
)  ',
  ),
  379 => 
  array (
    'cht_sql_requete' => 'BEGIN TRANSACTION;',
    'cht_commentaire_requete' => 'sur base 1',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'base_de_reference(1),
transaction()      ',
  ),
  380 => 
  array (
    'cht_sql_requete' => 'COMMIT;',
    'cht_commentaire_requete' => '',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'base_de_reference(1),
commit()    ',
  ),
  381 => 
  array (
    'cht_sql_requete' => 'ROLLBACK;',
    'cht_commentaire_requete' => '',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'base_de_reference(1),
rollback()            ',
  ),
  382 => 
  array (
    'cht_sql_requete' => '/*meta(sur_base_principale(1))*/

DELETE FROM b1.tbl_projets
WHERE (`chi_id_projet` = :chi_id_projet) ;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'delete',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => '#(meta(sur_base_principale(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_projet`),:chi_id_projet))
   )
)  ',
  ),
  383 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`che_binaire_source` = :T0_che_binaire_source
;',
    'cht_commentaire_requete' => 'sources',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_source`),champ(`T0`,`chx_dossier_id_source`),champ(`T0`,`chp_nom_source`),champ(`T0`,`che_binaire_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_binaire_source`),:T0_che_binaire_source))
)  ',
  ),
  384 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet , 
   `cht_commentaire_projet` = :n_cht_commentaire_projet , 
   `chx_dossier_bdds_projet` = :n_chx_dossier_bdds_projet , 
   `chx_dossier_js_projet` = :n_chx_dossier_js_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'update',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_nom_projet`),:n_chp_nom_projet),
      affecte(champ(`chx_dossier_requetes_projet`),:n_chx_dossier_requetes_projet),
      affecte(champ(`chx_dossier_menus_projet`),:n_chx_dossier_menus_projet),
      affecte(champ(`cht_commentaire_projet`),:n_cht_commentaire_projet),
      affecte(champ(`chx_dossier_bdds_projet`),:n_chx_dossier_bdds_projet),
      affecte(champ(`chx_dossier_js_projet`),:n_chx_dossier_js_projet)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_projet`),:c_chi_id_projet))
)  ',
  ),
  385 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`che_est_souche_requete` , 
`T0`.`cht_rev_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` < :nb_max 
ORDER BY `T0`.`chi_id_requete` ASC
;',
    'cht_commentaire_requete' => 'requetes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`cht_rev_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(inf(champ(`T0`,`chi_id_requete`),:nb_max)),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),croissant()))
   )
)  ',
  ),
  386 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
`T0`.`che_pour_les_js_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
;',
    'cht_commentaire_requete' => 'dossiers',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_dossier`),
      champ(`T0`,`chp_nom_dossier`),
      champ(`T0`,`chx_parent_dossier`),
      champ(`T0`,`che_contient_genere_dossier`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T0`,`che_pour_les_js_dossier`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_parent_dossier)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_dossier`),:T0_chi_id_dossier))
)  ',
  ),
  387 => 
  array (
    'cht_sql_requete' => 'BEGIN TRANSACTION;',
    'cht_commentaire_requete' => 'sur base 1',
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'transaction()            ',
  ),
  388 => 
  array (
    'cht_sql_requete' => 'COMMIT;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'commit()          ',
  ),
  389 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`che_contient_genere_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
`T0`.`che_pour_les_js_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE ( /* */ `T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
   AND `T0`.`che_contient_genere_dossier` = :T0_che_contient_genere_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
   AND `T1`.`chp_nom_dossier` = :T1_chp_nom_dossier
   AND `T0`.`che_pour_les_js_dossier` = :T0_che_pour_les_js_dossier) 
ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
LIMIT :quantitee OFFSET :debut 
;',
    'cht_commentaire_requete' => 'liste des dossiers',
    'chp_type_requete' => 'liste_ecran',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_dossier`),
      champ(`T0`,`chp_nom_dossier`),
      champ(`T0`,`che_contient_genere_dossier`),
      champ(`T0`,`chx_parent_dossier`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T0`,`che_pour_les_js_dossier`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_parent_dossier)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_dossier`),:T0_chi_id_dossier),
         comme(champ(`T0`,`chp_nom_dossier`),:T0_chp_nom_dossier),
         egal(champ(`T0`,`che_contient_genere_dossier`),:T0_che_contient_genere_dossier),
         egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier),
         egal(champ(`T1`,`chp_nom_dossier`),:T1_chp_nom_dossier),
         egal(champ(`T0`,`che_pour_les_js_dossier`),:T0_che_pour_les_js_dossier)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_parent_dossier`),croissant()),(champ(`T0`,`chp_nom_dossier`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ',
  ),
  390 => 
  array (
    'cht_sql_requete' => 'INSERT INTO b1.`tbl_requetes`(
    `chp_type_requete` , 
    `cht_rev_requete` , 
    `cht_sql_requete` , 
    `cht_php_requete` , 
    `cht_commentaire_requete` , 
    `che_est_souche_requete` , 
    `chp_table_reference_requete` , 
    `cht_js_requete`
) VALUES (
    :chp_type_requete , 
    :cht_rev_requete , 
    :cht_sql_requete , 
    :cht_php_requete , 
    :cht_commentaire_requete , 
    :che_est_souche_requete , 
    :chp_table_reference_requete , 
    :cht_js_requete
);',
    'cht_commentaire_requete' => 'requêtes',
    'chp_type_requete' => 'insert',
    'che_est_souche_requete' => 1,
    'cht_rev_requete' => 'insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_type_requete`),:chp_type_requete),
      affecte(champ(`cht_rev_requete`),:cht_rev_requete),
      affecte(champ(`cht_sql_requete`),:cht_sql_requete),
      affecte(champ(`cht_php_requete`),:cht_php_requete),
      affecte(champ(`cht_commentaire_requete`),:cht_commentaire_requete),
      affecte(champ(`che_est_souche_requete`),:che_est_souche_requete),
      affecte(champ(`chp_table_reference_requete`),:chp_table_reference_requete),
      affecte(champ(`cht_js_requete`),:cht_js_requete)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   )
)  ',
  ),
  391 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE (`T0`.`chp_table_reference_requete` = :T0_chp_table_reference_requete
   AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete)
;',
    'cht_commentaire_requete' => 'requetes',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_php_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`chp_table_reference_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chp_table_reference_requete`),:T0_chp_table_reference_requete),egal(champ(`T0`,`che_est_souche_requete`),:T0_che_est_souche_requete))
   )
)  ',
  ),
  392 => 
  array (
    'cht_sql_requete' => 'UPDATE b1.tbl_projets SET 
   `chi_id_projet` = :n_chi_id_projet , 
   `chp_nom_projet` = :n_chp_nom_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',
    'cht_commentaire_requete' => NULL,
    'chp_type_requete' => 'requete_manuelle',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'modifier(
   valeurs(
      affecte(champ(`chi_id_projet`),:n_chi_id_projet)
      affecte(champ(`chp_nom_projet`),:n_chp_nom_projet)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_projet`),:c_chi_id_projet))
)              ',
  ),
  393 => 
  array (
    'cht_sql_requete' => 'SELECT 
`T0`.`chi_id_projet`
 FROM b1.tbl_projets T0 ORDER BY  T0.chi_id_projet DESC  LIMIT 1 OFFSET 0 
;',
    'cht_commentaire_requete' => 'projets',
    'chp_type_requete' => 'select',
    'che_est_souche_requete' => 0,
    'cht_rev_requete' => 'sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   complements(
      trier_par((champ(T0.chi_id_projet),décroissant())),
      limité_à(quantité(1),début(0))
   )
)  ',
  ),
);