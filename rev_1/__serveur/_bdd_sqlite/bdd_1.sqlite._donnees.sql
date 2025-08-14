
/*
  ===============================
  DONNEES A INSERER POUR : tbl_utilisateurs
  ===============================
*/

INSERT INTO tbl_utilisateurs (chi_id_utilisateur,chp_nom_de_connexion_utilisateur,chp_mot_de_passe_utilisateur,chp_parametres_utilisateur,chi_compteur1_utilisateur,chi_compteur_socket1_utilisateur,che__nur_utilisateur,chp__dtm_utilisateur,chp__dtc_utilisateur,chx_acces_utilisateur) VALUES
('1','webmaster@example.com','$2y$10$qHgCpD5HuoasVWUqBq54ZuOt9yoQbMbZd/0RU9taTNLD2UWnCgPZu',NULL,'626','1307','0','2000-01-01 00:00:00','2000-01-01 00:00:00','1'),
('2','anonyme',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','2');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_projets
  ===============================
*/

INSERT INTO tbl_projets (chi_id_projet,chp_nom_projet,cht_commentaire_projet,che__nur_projet,chp__dtm_projet,chp__dtc_projet,chx_dossier_requetes_projet,chx_dossier_menus_projet) VALUES
('1','environnement principal 1','C''est ce projet !
Normalement, on n''a plus à y toucher.','0','2000-01-01 00:00:00','2000-01-01 00:00:00','6','2'),
('2','Projet virtuel qui doit exister mais rester vide','Projet virtuel qui doit exister mais rester vide.

On fabrique un clone de du projet 1
dans le répertoire rev_2 et on travaillera sur l''url frev/rev_2.

Dans le projet 2, le fichier __serveur/__definitions.php sera le seul fichier différent

Ce projet est utilisé pour la mise à jour du projet principal','0','2000-01-01 00:00:00','2000-01-01 00:00:00',NULL,NULL),
('3','modèle simple avec une table utilisateur','Ce modèle est défini pour faire un projet qui contient des pages qui sont accessibles que pour un utilisateur.

En conséquence, il n''y a pas de gestion de menu.','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','6','2');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_requetes
  ===============================
*/

INSERT INTO tbl_requetes (chi_id_requete,chx_projet_requete,chp_type_requete,cht_rev_requete,cht_sql_requete,cht_php_requete,cht_commentaire_requete,cht_matrice_requete,che__nur_requete,chp__dtm_requete,chp__dtc_requete) VALUES
('101','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T1`,`chx_groupe_acces`),
      champ(`T1`,`chx_metier_acces`),
      champ(`T0`,`chx_acces_utilisateur`)
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
   conditions(egal(champ(`T0`,`chp_nom_de_connexion_utilisateur`),:T0_chp_nom_de_connexion_utilisateur)),
   complements(limité_à(quantité(1),début(0)))
)  ','SELECT 
`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T0`.`chx_acces_utilisateur`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
LIMIT 1 OFFSET 0 
;',NULL,'utilisateur par nom_de_connexion',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('102','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chx_projet_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_php_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`)
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
         egal(champ(`T0`,`chx_projet_requete`),:T0_chx_projet_requete),
         comme(champ(`T0`,`chp_type_requete`),:T0_chp_type_requete),
         comme(champ(`T0`,`cht_rev_requete`),:T0_cht_rev_requete),
         infegal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete2),
         comme(champ(`T0`,`cht_commentaire_requete`),:T0_cht_commentaire_requete)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
   AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2
   AND `T0`.`cht_commentaire_requete` LIKE :T0_cht_commentaire_requete) 
ORDER BY `T0`.`chi_id_requete` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'liste des requêtes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('103','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_requete`),:n_chi_id_requete),affecte(champ(`cht_php_requete`),:n_cht_php_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_requete`),:c_chi_id_requete),egal(champ(`chx_projet_requete`),:c_chx_projet_requete))
   )
)  ','UPDATE b1.tbl_requetes SET 
   `chi_id_requete` = :n_chi_id_requete , 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,'',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('104','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_requete` ) , :chi_id_requete ) , egal( champ( `chx_projet_requete` ) , :chx_projet_requete ))
   )
)','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_requetes
WHERE (`chi_id_requete` = :chi_id_requete
   AND `chx_projet_requete` = :chx_projet_requete) ;',NULL,'requête par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('105','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chx_projet_rev`),:chx_projet_rev),egal(champ(`chp_provenance_rev`),:chp_provenance_rev),egal(champ(`chx_source_rev`),:chx_source_rev))
   )
)  ','DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev
   AND `chp_provenance_rev` = :chp_provenance_rev
   AND `chx_source_rev` = :chx_source_rev) ;',NULL,'revs par provenance, source et projet',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('106','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chx_projet_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_php_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete),egal(champ(`T0`,`chx_projet_requete`),:T0_chx_projet_requete))
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE (`T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',NULL,'requêtes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('107','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_projet_requete`),:chx_projet_requete),
      affecte(champ(`chp_type_requete`),:chp_type_requete),
      affecte(champ(`cht_rev_requete`),:cht_rev_requete),
      affecte(champ(`cht_sql_requete`),:cht_sql_requete),
      affecte(champ(`cht_php_requete`),:cht_php_requete),
      affecte(champ(`cht_commentaire_requete`),:cht_commentaire_requete)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_requetes`(
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
);',NULL,'requêtes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('108','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_parametres_utilisateur`),:n_chp_parametres_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chp_parametres_utilisateur` = :n_chp_parametres_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('109','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_type_requete`),:n_chp_type_requete),
      affecte(champ(`cht_rev_requete`),:n_cht_rev_requete),
      affecte(champ(`cht_sql_requete`),:n_cht_sql_requete),
      affecte(champ(`cht_php_requete`),:n_cht_php_requete),
      affecte(champ(`cht_commentaire_requete`),:n_cht_commentaire_requete),
      affecte(champ(`cht_matrice_requete`),:n_cht_matrice_requete)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_requete`),:c_chi_id_requete),egal(champ(`chx_projet_requete`),:c_chx_projet_requete))
   )
)  ','UPDATE b1.tbl_requetes SET 
   `chp_type_requete` = :n_chp_type_requete , 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_php_requete` = :n_cht_php_requete , 
   `cht_commentaire_requete` = :n_cht_commentaire_requete , 
   `cht_matrice_requete` = :n_cht_matrice_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,'requêtes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('110','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_rev_travail_basedd`),:n_chp_rev_travail_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_basedd`),:c_chi_id_basedd),egal(champ(`chx_projet_id_basedd`),:c_chx_projet_id_basedd))
   )
)  ','UPDATE b1.tbl_bdds SET 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',NULL,'bdds',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('111','1','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`),champ(`T0`,`chx_dossier_id_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         dans(champ(`T0`,`chi_id_basedd`),(:T0_chi_id_basedd)),
         egal(champ(`T0`,`chx_projet_id_basedd`),:T0_chx_projet_id_basedd)
      )
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
 FROM b1.tbl_bdds T0
WHERE ( /* */ `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',NULL,'bdds',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('112','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_projet_rev`),:chx_projet_rev),
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
)  ','INSERT INTO b1.`tbl_revs`(
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
);',NULL,'revs',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('113','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_rev`),
      champ(`T0`,`chx_projet_rev`),
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
         egal(champ(`T0`,`chx_projet_rev`),:T0_chx_projet_rev),
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
)  ','SELECT 
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
;',NULL,'revs',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('114','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chx_projet_rev`),:chx_projet_rev))
   )
)  ','DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev) ;',NULL,'revs par projet',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('115','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_basedd` ) , champ( `T0` , `chp_commentaire_basedd` ) , champ( `T0` , `chx_dossier_id_basedd` ) , champ( `T1` , `chp_nom_dossier` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_dossiers , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_dossier ) , champ( T0 , chx_dossier_id_basedd ) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_basedd` ) , :T0_chi_id_basedd ) , egal( champ( `T0` , `chx_projet_id_basedd` ) , :T0_chx_projet_id_basedd ))
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_basedd` ) , croissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chx_dossier_id_basedd` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd) 
ORDER BY `T0`.`chi_id_basedd` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('116','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_dossier_id_basedd`),:n_chx_dossier_id_basedd),affecte(champ(`chp_commentaire_basedd`),:n_chp_commentaire_basedd),affecte(champ(`chp_rev_travail_basedd`),:n_chp_rev_travail_basedd),affecte(champ(`chp_fournisseur_basedd`),:n_chp_fournisseur_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_basedd`),:c_chi_id_basedd),egal(champ(`chx_projet_id_basedd`),:c_chx_projet_id_basedd))
   )
)  ','UPDATE b1.tbl_bdds SET 
   `chx_dossier_id_basedd` = :n_chx_dossier_id_basedd , 
   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',NULL,'bdds',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('117','1','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_dossier_id_basedd`),:chx_dossier_id_basedd),affecte(champ(`chx_projet_id_basedd`),:chx_projet_id_basedd),affecte(champ(`chp_commentaire_basedd`),:chp_commentaire_basedd),affecte(champ(`chp_fournisseur_basedd`),:chp_fournisseur_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_bdds`(
    `chx_dossier_id_basedd` , 
    `chx_projet_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_fournisseur_basedd`
) VALUES (
    :chx_dossier_id_basedd , 
    :chx_projet_id_basedd , 
    :chp_commentaire_basedd , 
    :chp_fournisseur_basedd
);',NULL,'bdds',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('118','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_basedd` ) , :chi_id_basedd ) , egal( champ( `chx_projet_id_basedd` ) , :chx_projet_id_basedd ))
   )
)','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_bdds
WHERE (`chi_id_basedd` = :chi_id_basedd
   AND `chx_projet_id_basedd` = :chx_projet_id_basedd) ;',NULL,'base par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('119','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_tache` ) , champ( `T0` , `chp_texte_tache` ) , champ( `T0` , `chp_priorite_tache` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chi_id_tache` ) , :T0_chi_id_tache),
         egal( champ( `T0` , `chx_utilisateur_tache` ) , :T0_chx_utilisateur_tache),
         comme( champ( `T0` , `chp_texte_tache` ) , :T0_chp_texte_tache),
         egal( champ( `T0` , `chp_priorite_tache` ) , :T0_chp_priorite_tache),
         inf( champ( `T0` , `chp_priorite_tache` ) , :T0_chp_priorite_tache2)
      )
   ),
   complements(
      trier_par( ( champ( `T0` , `chp_priorite_tache` ) , croissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
   AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
ORDER BY `T0`.`chp_priorite_tache` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'tâches',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('120','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_priorite_tache` ) , moins( chp_priorite_tache , 1 ) )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_tache` ) , :c_chi_id_tache ) , egal( champ( `chx_utilisateur_tache` ) , :c_chx_utilisateur_tache ) , supegal( champ( `chp_priorite_tache` ) , 1 ))
   )
)','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache-1)
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` >= 1) ;',NULL,'tâches',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('121','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_priorite_tache` ) , plus( chp_priorite_tache , 1 ) )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `chi_id_tache` ) , :c_chi_id_tache),
         egal( champ( `chx_utilisateur_tache` ) , :c_chx_utilisateur_tache),
         inf( champ( `chp_priorite_tache` ) , 99)
      )
   )
)','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` < 99) ;',NULL,'tâches',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('122','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_priorite_tache` ) , :n_chp_priorite_tache )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_tache` ) , :c_chi_id_tache ) , egal( champ( `chx_utilisateur_tache` ) , :c_chx_utilisateur_tache ))
   )
)','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,'tâches',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('123','1','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chx_parent_dossier`),champ(`T0`,`che_contient_genere_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_projet_dossier`),:T0_chx_projet_dossier))
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
;',NULL,'dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('124','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_parametres_acces`),:n_cht_parametres_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:c_chi_id_acces))
)  ','UPDATE b1.tbl_acces SET 
   `cht_parametres_acces` = :n_cht_parametres_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'accès paramètres par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('125','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(
      et(dans(champ(`chi_id_dossier`),(:liste_des_ids_a_supprimer)),egal(champ(`chx_projet_dossier`),:chx_projet_dossier))
   )
)  ','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` IN (:liste_des_ids_a_supprimer)
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',NULL,'***dispo***',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('126','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_basedd`),
      champ(`T0`,`chx_dossier_id_basedd`),
      champ(`T0`,`chx_projet_id_basedd`),
      champ(`T0`,`chp_commentaire_basedd`),
      champ(`T0`,`chp_rev_travail_basedd`),
      champ(`T0`,`chp_fournisseur_basedd`),
      champ(`T1`,`chi_id_dossier`),
      champ(`T1`,`chx_projet_dossier`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T2`,`chi_id_projet`),
      champ(`T2`,`chp_nom_projet`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_id_basedd)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_projets,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_projet),champ(T0,chx_projet_id_basedd)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_basedd`),:T0_chi_id_basedd),egal(champ(`T0`,`chx_projet_id_basedd`),:T0_chx_projet_id_basedd))
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , 
`T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , 
`T2`.`chp_nom_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',NULL,'base par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('127','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_basedd`),
      champ(`T0`,`chx_dossier_id_basedd`),
      champ(`T0`,`chx_projet_id_basedd`),
      champ(`T0`,`chp_rev_travail_basedd`),
      champ(`T0`,`chp_commentaire_basedd`),
      champ(`T0`,`chp_fournisseur_basedd`),
      champ(`T1`,`chi_id_dossier`),
      champ(`T1`,`chx_projet_dossier`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T1`,`chx_parent_dossier`),
      champ(`T2`,`chi_id_projet`),
      champ(`T2`,`chp_nom_projet`),
      champ(`T2`,`cht_commentaire_projet`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_id_basedd)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_projets,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_projet),champ(T0,chx_projet_id_basedd)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_projet_id_basedd`),:T0_chx_projet_id_basedd))
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T1`.`chx_parent_dossier` , 
`T2`.`chi_id_projet` , `T2`.`chp_nom_projet` , `T2`.`cht_commentaire_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd
;',NULL,'bdds',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('128','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      #(),
      champ( `T0` , `chi_id_tache`),
      champ( `T0` , `chx_utilisateur_tache`),
      champ( `T0` , `chp_texte_tache`),
      champ( `T0` , `chp_priorite_tache`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chi_id_tache` ) , :T0_chi_id_tache),
         egal( champ( `T0` , `chx_utilisateur_tache` ) , :T0_chx_utilisateur_tache)
      )
   )
)','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
;',NULL,'tâches par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('129','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_texte_tache` ) , :n_chp_texte_tache ) , affecte( champ( `chp_priorite_tache` ) , :n_chp_priorite_tache )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `chi_id_tache` ) , :c_chi_id_tache),
         egal( champ( `chx_utilisateur_tache` ) , :c_chx_utilisateur_tache)
      )
   ),
   complements(
      #(),
      gerer_champ_date_modification( champ( `chp__dtm_tache` ) , format(23)),
      gerer_champ_numero_de_revision( champ(che__nur_tache))
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,'tâches texte et priorité par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('130','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chx_utilisateur_tache` ) , :chx_utilisateur_tache ) , affecte( champ( `chp_texte_tache` ) , :chp_texte_tache ) , affecte( champ( `chp_priorite_tache` ) , :chp_priorite_tache )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , base(b1) ))
      )
   ),
   complements(
      #(),
      gerer_champ_date_creation( champ( `chp__dtc_tache` ) , format(23)),
      gerer_champ_date_modification( champ( `chp__dtm_tache` ) , format(23))
   )
)  ','INSERT INTO b1.`tbl_taches`(
    `chx_utilisateur_tache` , 
    `chp_texte_tache` , 
    `chp_priorite_tache`
) VALUES (
    :chx_utilisateur_tache , 
    :chp_texte_tache , 
    :chp_priorite_tache
);',NULL,'tâches',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('131','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_tache`),:chi_id_tache),egal(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache))
   )
)  ','DELETE FROM b1.tbl_taches
WHERE (`chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;',NULL,'tâches par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('132','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chx_projet_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_php_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`)
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
         egal(champ(`T0`,`chx_projet_requete`),:T0_chx_projet_requete)
      )
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',NULL,'requetes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('133','1','liste_ecran','#(meta(sur_base_de_reference(1))),
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
)  ','/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
 FROM b1.tbl_projets T0
WHERE ( /* */ `T0`.`chi_id_projet` = :T0_chi_id_projet
   AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
   AND `T0`.`cht_commentaire_projet` LIKE :T0_cht_commentaire_projet) 
ORDER BY `T0`.`chi_id_projet` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'projets',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('134','1','select','#(meta(sur_base_de_reference(1))),
sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_projet`),
      champ(`T0`,`chp_nom_projet`),
      champ(`T0`,`chx_dossier_requetes_projet`),
      champ(`T0`,`chx_dossier_menus_projet`),
      champ(`T0`,`cht_commentaire_projet`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T2`,`chp_nom_dossier`)
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
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_projet`),:T0_chi_id_projet))
)  ','/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
`T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier`
 FROM b1.tbl_projets T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet

WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
;',NULL,'projets',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('135','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_php_requete`),:n_cht_php_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_requete`),:c_chi_id_requete),egal(champ(`chx_projet_requete`),:c_chx_projet_requete))
   )
)  ','UPDATE b1.tbl_requetes SET 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,'requêtes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('136','1','insert','#(meta(sur_base_de_reference(1))),
insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_projet`),:chp_nom_projet),affecte(champ(`cht_commentaire_projet`),:cht_commentaire_projet)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   )
)  ','/*meta(sur_base_de_reference(1))*/

INSERT INTO b1.`tbl_projets`(
    `chp_nom_projet` , 
    `cht_commentaire_projet`
) VALUES (
    :chp_nom_projet , 
    :cht_commentaire_projet
);',NULL,'projets',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('137','1','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_projet_dossier`),:chx_projet_dossier),affecte(champ(`chp_nom_dossier`),:chp_nom_dossier),affecte(champ(`chx_parent_dossier`),:chx_parent_dossier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_dossiers`(
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',NULL,'dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('139','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_source`),:chi_id_source),egal(champ(`chx_projet_id_source`),:chx_projet_id_source))
   )
)  ','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_sources
WHERE (`chi_id_source` = :chi_id_source
   AND `chx_projet_id_source` = :chx_projet_id_source) ;',NULL,'sources',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('140','1','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   )
)  ','SELECT 
`T0`.`chi_id_basedd`
 FROM b1.tbl_bdds T0
;',NULL,'bdds',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('141','1','requete_manuelle','base_de_reference(1),
transaction()    ','BEGIN TRANSACTION;',NULL,'sur base 1',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('142','1','requete_manuelle','base_de_reference(1),
commit()  ','COMMIT;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('143','1','requete_manuelle','base_de_reference(1),
rollback()          ','ROLLBACK;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('144','1','requete_manuelle','modifier_table(
   #(),
   nom_de_la_table( '':nom_de_la_table''),
   actions( drop_column( '':nom_du_champ'' ))
)              ','ALTER TABLE :nom_de_la_table DROP COLUMN :nom_du_champ',NULL,'***dispo***',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('145','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
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
)  ','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE (`chi_id_projet` = :chi_id_projet) ;',NULL,'projets',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('146','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_source`),
      champ( `T0` , `chx_dossier_id_source`),
      champ( `T0` , `chx_projet_id_source`),
      champ( `T0` , `chp_nom_source`),
      champ( `T0` , `che_binaire_source`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chx_projet_id_source` ) , :T0_chx_projet_id_source ) , egal( champ( `T0` , `che_binaire_source` ) , :T0_che_binaire_source ))
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
WHERE (`T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
   AND `T0`.`che_binaire_source` = :T0_che_binaire_source)
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('147','1','select','#(meta(sur_base_de_reference(1))),
sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chp_parametres_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chi_compteur_socket1_utilisateur`),
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
)  ','/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('148','1','update','#(meta(sur_base_de_reference(1))),
modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_projet`),:n_chp_nom_projet),affecte(champ(`chx_dossier_requetes_projet`),:n_chx_dossier_requetes_projet),affecte(champ(`chx_dossier_menus_projet`),:n_chx_dossier_menus_projet),affecte(champ(`cht_commentaire_projet`),:n_cht_commentaire_projet)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_projet`),:c_chi_id_projet))
)  ','/*meta(sur_base_de_reference(1))*/

UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet , 
   `cht_commentaire_projet` = :n_cht_commentaire_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('149','1','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_requete`),champ(`T0`,`cht_sql_requete`),champ(`T0`,`cht_commentaire_requete`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chx_projet_requete`),:T0_chx_projet_requete),
         inf(champ(`T0`,`chi_id_requete`),:nb_max),
         egal(1,1)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chi_id_requete` < :nb_max
   AND 1 = 1) 
ORDER BY `T0`.`chi_id_requete` ASC
;',NULL,'requetes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('150','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_dossier`),
      champ(`T0`,`chx_projet_dossier`),
      champ(`T0`,`chp_nom_dossier`),
      champ(`T0`,`chx_parent_dossier`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T0`,`che_contient_genere_dossier`)
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
      et(egal(champ(`T0`,`chi_id_dossier`),:T0_chi_id_dossier),egal(champ(`T0`,`chx_projet_dossier`),:T0_chx_projet_dossier))
   )
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
`T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
;',NULL,'dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('151','1','requete_manuelle','transaction()        ','BEGIN TRANSACTION;',NULL,'sur base 1',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('152','1','requete_manuelle','commit()      ','COMMIT;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('153','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_dossier`),
      champ( `T0` , `chx_projet_dossier`),
      champ( `T0` , `chp_nom_dossier`),
      champ( `T0` , `chx_parent_dossier`),
      champ( `T1` , `chp_nom_dossier`),
      champ( `T0` , `che_contient_genere_dossier`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_dossiers , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_dossier ) , champ( T0 , chx_parent_dossier ) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_dossier` ) , :T0_chi_id_dossier ) , egal( champ( `T0` , `chx_projet_dossier` ) , :T0_chx_projet_dossier ) , comme( champ( `T0` , `chp_nom_dossier` ) , :T0_chp_nom_dossier ) , egal( champ( `T0` , `chx_parent_dossier` ) , :T0_chx_parent_dossier ))
   ),
   complements(
      trier_par( ( champ( `T0` , `chx_parent_dossier` ) , croissant() ) , ( champ( `T0` , `chp_nom_dossier` ) , croissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
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
;',NULL,'liste des dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('154','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_dossier_id_source`),:chx_dossier_id_source),
      affecte(champ(`chx_projet_id_source`),:chx_projet_id_source),
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
)  ','INSERT INTO b1.`tbl_sources`(
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
);',NULL,'sources',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('155','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_dossier`),:n_chp_nom_dossier),affecte(champ(`chx_parent_dossier`),:n_chx_parent_dossier),affecte(champ(`che_contient_genere_dossier`),:n_che_contient_genere_dossier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_dossier`),:c_chi_id_dossier),egal(champ(`chx_projet_dossier`),:c_chx_projet_dossier))
   )
)  ','UPDATE b1.tbl_dossiers SET 
   `chp_nom_dossier` = :n_chp_nom_dossier , 
   `chx_parent_dossier` = :n_chx_parent_dossier , 
   `che_contient_genere_dossier` = :n_che_contient_genere_dossier
WHERE (`chi_id_dossier` = :c_chi_id_dossier
   AND `chx_projet_dossier` = :c_chx_projet_dossier) ;',NULL,'dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('156','1','requete_manuelle','insérer(
   valeurs( affecte( champ( `chi_id_projet` ) , :chi_id_projet ),affecte( champ( `chp_nom_projet` ) , :chi_id_projet )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets  ))
      )
   )
)            ','INSERT INTO `tbl_projets`(
    `chi_id_projet` , 
    `chp_nom_projet`
) VALUES (
    :chi_id_projet , 
    :chi_id_projet
);',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('157','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(supegal(champ(`chi_id_projet`),:chi_id_projet))
)  ','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE `chi_id_projet` >= :chi_id_projet ;',NULL,'projets >= id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('158','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_dossier`),:chi_id_dossier),egal(champ(`chx_projet_dossier`),:chx_projet_dossier))
   )
)  ','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` = :chi_id_dossier
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',NULL,'dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('159','1','requete_manuelle','insérer(
   valeurs(
      #(),
      affecte( champ( `chi_id_dossier` ) , :chi_id_dossier),
      affecte( champ( `chx_projet_dossier` ) , :chx_projet_dossier),
      affecte( champ( `chp_nom_dossier` ) , :chp_nom_dossier),
      affecte( champ( `chx_parent_dossier` ) , :chx_parent_dossier)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers ))
      )
   )
)      ','INSERT INTO `tbl_dossiers`(
    `chi_id_dossier` , 
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chi_id_dossier , 
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',NULL,'dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('160','1','requete_manuelle','sélectionner(

   valeurs( champ( `T0` , `chx_dossier_requetes_projet` ) champ( `T0` , `chx_dossier_menus_projet` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets , alias(T0)  ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_projet` ) , :T0_chi_id_projet ))
   )
)                ','SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet`
 FROM tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
;',NULL,'projets',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('161','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chx_dossier_id_source`),
      champ(`T0`,`chx_projet_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`cht_rev_source`),
      champ(`T0`,`cht_genere_source`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T0`,`che_binaire_source`)
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
         egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source),
         sup(champ(`T0`,`chi_id_source`),:T0_chi_id_source2),
         infegal(champ(`T0`,`chi_id_source`),:T0_chi_id_source3),
         egal(champ(`T0`,`chx_dossier_id_source`),:T0_chx_dossier_id_source),
         egal(champ(`T0`,`chx_projet_id_source`),:T0_chx_projet_id_source),
         comme(champ(`T0`,`chp_nom_source`),:T0_chp_nom_source)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_dossier_id_source`),croissant()),(champ(`T0`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_source`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
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
;',NULL,'sources',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('162','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chx_dossier_id_source`),
      champ(`T0`,`chx_projet_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`cht_rev_source`),
      champ(`T0`,`cht_genere_source`),
      champ(`T2`,`chp_nom_dossier`),
      champ(`T0`,`che_binaire_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_projets,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_projet),champ(T0,chx_projet_id_source)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_dossier),champ(T0,chx_dossier_id_source)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source),
         egal(champ(`T0`,`chx_projet_id_source`),:T0_chx_projet_id_source)
      )
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , 
`T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T2`.`chp_nom_dossier` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_projets T1 ON T1.chi_id_projet = T0.chx_projet_id_source

 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_id_source

WHERE ( /* */ `T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source)
;',NULL,'sources',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('163','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_dossier_id_source`),:n_chx_dossier_id_source),
      affecte(champ(`chx_projet_id_source`),:n_chx_projet_id_source),
      affecte(champ(`chp_nom_source`),:n_chp_nom_source),
      affecte(champ(`cht_commentaire_source`),:n_cht_commentaire_source),
      affecte(champ(`cht_rev_source`),:n_cht_rev_source),
      affecte(champ(`cht_genere_source`),:n_cht_genere_source),
      affecte(champ(`che_binaire_source`),:n_che_binaire_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_source`),:c_chi_id_source),egal(champ(`chx_projet_id_source`),:c_chx_projet_id_source))
   )
)  ','UPDATE b1.tbl_sources SET 
   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
   `chx_projet_id_source` = :n_chx_projet_id_source , 
   `chp_nom_source` = :n_chp_nom_source , 
   `cht_commentaire_source` = :n_cht_commentaire_source , 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source , 
   `che_binaire_source` = :n_che_binaire_source
WHERE (`chi_id_source` = :c_chi_id_source
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',NULL,'sources',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('164','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      #(),
      champ( `T0` , `chi_id_tache`),
      champ( `T0` , `chx_utilisateur_tache`),
      champ( `T0` , `chp_texte_tache`),
      champ( `T0` , `chp_priorite_tache`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chx_utilisateur_tache` ) , :T0_chx_utilisateur_tache),
         inf( champ( `T0` , `chp_priorite_tache` ) , :T0_chp_priorite_tache)
      )
   ),
   complements(
      trier_par( ( champ( `T0` , `chp_priorite_tache` ) , croissant() ))
   )
)','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache) 
ORDER BY `T0`.`chp_priorite_tache` ASC
;',NULL,'tâches par priorité < xxx',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('165','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_priorite_tache` ) , :n_chp_priorite_tache )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `chi_id_tache` ) , :c_chi_id_tache),
         egal( champ( `chx_utilisateur_tache` ) , :c_chx_utilisateur_tache)
      )
   )
)','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,'tâches priorité par id=',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('166','1','requete_manuelle','sélectionner(
   valeurs( champ( `T0` , `chp_nom_dossier` ) , champ( `T0` , `chx_parent_dossier` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , alias(T0) ))
      )
   ),
   conditions(
      et(
         egal( champ( `T0` , `chi_id_dossier` ) , :T0_chi_id_dossier),
         egal( champ( `T0` , `chx_projet_dossier` ) , :T0_chx_projet_dossier)
      )
   )
)    ','SELECT 
`T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier`
 FROM tbl_dossiers T0
WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('167','1','requete_manuelle','modifier(
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:n_chp_nom_de_connexion_utilisateur),affecte(champ(`chp_mot_de_passe_utilisateur`),:n_chp_mot_de_passe_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)      ','UPDATE tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'utilisateur sur page profile',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('168','1','select','sélectionner(
   base_de_reference(1),
   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chx_projet_dossier`),:T0_chx_projet_dossier),egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier))
   )
)  ','SELECT 
COUNT( * )
 FROM b1.tbl_dossiers T0
WHERE (`T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
;',NULL,'dossier compte sous dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('169','1','select','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_dossier` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chx_projet_dossier` ) , :T0_chx_projet_dossier),
         egal( champ( `T0` , `chx_parent_dossier` ) , :T0_chx_parent_dossier)
      )
   )
)','SELECT 
`T0`.`chi_id_dossier`
 FROM b1.tbl_dossiers T0
WHERE ( /* */ `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
;',NULL,'dossiers par parents',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('170','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , base(b1) ))
      )
   ),
   conditions( egal( champ( `chx_projet_dossier` ) , :chx_projet_dossier ))
)','DELETE FROM b1.tbl_dossiers
WHERE `chx_projet_dossier` = :chx_projet_dossier ;',NULL,'dossier racine d''un projet',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('171','1','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chx_projet_id_basedd`),:T0_chx_projet_id_basedd))
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
WHERE (`T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',NULL,'bases d''un projet',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('172','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_compteur1_utilisateur`),plus(chi_compteur1_utilisateur,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'utilisateurs',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('173','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_groupe` ) , champ( `T0` , `chp_nom_groupe` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_groupe` ) , :T0_chi_id_groupe ) , comme( champ( `T0` , `chp_nom_groupe` ) , :T0_chp_nom_groupe ))
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_groupe` ) , décroissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe`
 FROM b1.tbl_groupes T0
WHERE (`T0`.`chi_id_groupe` = :T0_chi_id_groupe
   AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe) 
ORDER BY `T0`.`chi_id_groupe` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'liste des groupes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('174','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_groupe` ) , :chp_nom_groupe ) , affecte( champ( `chx_parent_groupe` ) , :chx_parent_groupe )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , base(b1) ))
      )
   )
)  ','INSERT INTO b1.`tbl_groupes`(
    `chp_nom_groupe` , 
    `chx_parent_groupe`
) VALUES (
    :chp_nom_groupe , 
    :chx_parent_groupe
);',NULL,'groupes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('175','1','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
 FROM b1.tbl_groupes T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe

WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
;',NULL,'groupes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('176','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_groupe` ) , :n_chp_nom_groupe ) , affecte( champ( `chx_parent_groupe` ) , :n_chx_parent_groupe )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_groupe` ) , :c_chi_id_groupe ))
)  ','UPDATE b1.tbl_groupes SET 
   `chp_nom_groupe` = :n_chp_nom_groupe , 
   `chx_parent_groupe` = :n_chx_parent_groupe
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',NULL,'groupes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('177','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_groupe` ) , :chi_id_groupe ))
)  ','DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',NULL,'groupes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('178','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_utilisateur`),
      champ( `T0` , `chp_nom_de_connexion_utilisateur`),
      champ( `T0` , `chp_mot_de_passe_utilisateur`),
      champ( `T0` , `chi_compteur1_utilisateur`),
      champ( `T0` , `chi_compteur_socket1_utilisateur`),
      champ( `T0` , `chi_compteur1_utilisateur`),
      champ( `T0` , `chx_acces_utilisateur`),
      champ( `T1` , `chp_nom_acces`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_acces , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_acces ) , champ( T0 , chx_acces_utilisateur ) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chi_id_utilisateur` ) , :T0_chi_id_utilisateur),
         comme( champ( `T0` , `chp_nom_de_connexion_utilisateur` ) , :T0_chp_nom_de_connexion_utilisateur)
      )
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_utilisateur` ) , décroissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chi_compteur_socket1_utilisateur` , 
`T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE ( /* */ `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'utilisateurs',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('179','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_de_connexion_utilisateur` ) , :chp_nom_de_connexion_utilisateur ) , affecte( champ( `chx_acces_utilisateur` ) , :chx_acces_utilisateur )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_groupe` ) , :T0_chi_id_groupe ))
)  ','INSERT INTO b1.`tbl_utilisateurs`(
    `chp_nom_de_connexion_utilisateur` , 
    `chx_acces_utilisateur`
) VALUES (
    :chp_nom_de_connexion_utilisateur , 
    :chx_acces_utilisateur
);',NULL,'utilisateurs',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('180','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chp_parametres_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chi_compteur_socket1_utilisateur`),
      champ(`T0`,`che__nur_utilisateur`),
      champ(`T0`,`chp__dtm_utilisateur`),
      champ(`T0`,`chp__dtc_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T1`,`chx_groupe_acces`),
      champ(`T1`,`chx_metier_acces`),
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
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chp__dtm_utilisateur` , `T0`.`chp__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
`T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,'utilisateur',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('181','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_de_connexion_utilisateur` ) , :n_chp_nom_de_connexion_utilisateur ) , affecte( champ( `chx_acces_utilisateur` ) , :n_chx_acces_utilisateur )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_utilisateur` ) , :c_chi_id_utilisateur ))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chx_acces_utilisateur` = :n_chx_acces_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'utilisateur',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('182','1','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_utilisateur` ) , :chi_id_utilisateur ))
)  ','DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',NULL,'utilisateur',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('183','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_metier` ) , champ( `T0` , `chp_nom_metier` ) , champ( `T1` , `chp_nom_metier` ) , champ( `T0` , `chx_parent_metier` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_metiers , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_metiers , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_metier ) , champ( T0 , chx_parent_metier ) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_metier` ) , :T0_chi_id_metier ) , comme( champ( `T0` , `chp_nom_metier` ) , :T0_chp_nom_metier ))
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_metier` ) , décroissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE (`T0`.`chi_id_metier` = :T0_chi_id_metier
   AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier) 
ORDER BY `T0`.`chi_id_metier` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'métier',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('184','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_metier` ) , :chp_nom_metier ) , affecte( champ( `chx_parent_metier` ) , :chx_parent_metier )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_metiers , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_metier` ) , :T0_chi_id_metier ) , comme( champ( `T0` , `chp_nom_metier` ) , :T0_chp_nom_metier ))
   )
)  ','INSERT INTO b1.`tbl_metiers`(
    `chp_nom_metier` , 
    `chx_parent_metier`
) VALUES (
    :chp_nom_metier , 
    :chx_parent_metier
);',NULL,'métier',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('185','1','select','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_metier` ) , champ( `T0` , `chp_nom_metier` ) , champ( `T1` , `chp_nom_metier` ) , champ( `T0` , `chx_parent_metier` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_metiers , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_metiers , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_metier ) , champ( T0 , chx_parent_metier ) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_metier` ) , :T0_chi_id_metier ))
)  ','SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
;',NULL,'métier',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('186','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_metier` ) , :n_chp_nom_metier ) , affecte( champ( `chx_parent_metier` ) , :n_chx_parent_metier )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_metiers , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_metier` ) , :c_chi_id_metier ))
)  ','UPDATE b1.tbl_metiers SET 
   `chp_nom_metier` = :n_chp_nom_metier , 
   `chx_parent_metier` = :n_chx_parent_metier
WHERE `chi_id_metier` = :c_chi_id_metier ;',NULL,'métier',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('187','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_metiers , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_metier` ) , :chi_id_metier ))
)  ','DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',NULL,'métier',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('193','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_acces`),
      champ( `T0` , `chp_nom_acces`),
      champ( `T0` , `chx_groupe_acces`),
      champ( `T0` , `chx_metier_acces`),
      champ( `T1` , `chp_nom_groupe`),
      champ( `T2` , `chp_nom_metier`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_acces , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_groupes , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_groupe ) , champ( T0 , chx_groupe_acces ) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_metiers , alias(T2) , base(b1) )),
         contrainte( egal( champ( T2 , chi_id_metier ) , champ( T0 , chx_metier_acces ) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chi_id_acces` ) , :T0_chi_id_acces),
         comme( champ( `T0` , `chp_nom_acces` ) , :T0_chp_nom_acces)
      )
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_acces` ) , décroissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
`T2`.`chp_nom_metier`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE ( /* */ `T0`.`chi_id_acces` = :T0_chi_id_acces
   AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces) 
ORDER BY `T0`.`chi_id_acces` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'acces',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('194','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_acces` ) , :chp_nom_acces ) , affecte( champ( `chx_groupe_acces` ) , :chx_groupe_acces ) , affecte( champ( `chx_metier_acces` ) , :chx_metier_acces )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_acces , base(b1) ))
      )
   )
)  ','INSERT INTO b1.`tbl_acces`(
    `chp_nom_acces` , 
    `chx_groupe_acces` , 
    `chx_metier_acces`
) VALUES (
    :chp_nom_acces , 
    :chx_groupe_acces , 
    :chx_metier_acces
);',NULL,'accès',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('195','1','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
`T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
;',NULL,'accès',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('196','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_acces` ) , :n_chp_nom_acces ) , affecte( champ( `chx_groupe_acces` ) , :n_chx_groupe_acces ) , affecte( champ( `chx_metier_acces` ) , :n_chx_metier_acces )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_acces , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_acces` ) , :c_chi_id_acces ))
)  ','UPDATE b1.tbl_acces SET 
   `chp_nom_acces` = :n_chp_nom_acces , 
   `chx_groupe_acces` = :n_chx_groupe_acces , 
   `chx_metier_acces` = :n_chx_metier_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'accès',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('197','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:chi_id_acces))
)  ','DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',NULL,'acces',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('305','1','requete_manuelle','modifier(
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
)        ','UPDATE tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet , 
   `cht_commentaire_projet` = :n_cht_commentaire_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,'projets',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('306','1','select','#(meta(sur_base_de_reference(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`),champ(`T0`,`chx_parent_dossier`),champ(`T0`,`che_contient_genere_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(pas_equivalent(champ(`T0`,`chp_nom_dossier`),:T0_chp_nom_dossier))
)  ','/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chp_nom_dossier` NOT LIKE :T0_chp_nom_dossier
;',NULL,'dossiers à copier dans un autre environnement',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('307','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_dossier`),:chi_id_dossier),
      affecte(champ(`chx_projet_dossier`),:chx_projet_dossier),
      affecte(champ(`chp_nom_dossier`),:chp_nom_dossier),
      affecte(champ(`chx_parent_dossier`),:chx_parent_dossier),
      affecte(champ(`che_contient_genere_dossier`),:che_contient_genere_dossier),
      affecte(champ(`chp__dtm_dossier`),:chp__dtm_dossier),
      affecte(champ(`chp__dtc_dossier`),:chp__dtc_dossier)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_dossiers`(
    `chi_id_dossier` , 
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier` , 
    `che_contient_genere_dossier` , 
    `chp__dtm_dossier` , 
    `chp__dtc_dossier`
) VALUES (
    :chi_id_dossier , 
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier , 
    :che_contient_genere_dossier , 
    :chp__dtm_dossier , 
    :chp__dtc_dossier
);',NULL,'dossiers à copier dans un autre environnement',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('308','1','select','#(meta(sur_base_de_reference(1))),
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
)  ','/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet`
 FROM b1.tbl_projets T0
WHERE (`T0`.`chi_id_projet` = 1)
;',NULL,'dossiers du projet à copier dans un autre environnement',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('309','1','update','modifier(
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
)  ','UPDATE b1.tbl_projets SET 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet
WHERE (`chi_id_projet` = :c_chi_id_projet) ;',NULL,'dossiers à copier dans un autre environnement',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('310','1','update','modifier(
   base_de_reference(),
   valeurs(affecte(champ(`chi_id_source`),:n_chi_id_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_source`),:c_chi_id_source),egal(champ(`chx_projet_id_source`),:c_chx_projet_id_source))
   )
)  ','UPDATE b1.tbl_sources SET 
   `chi_id_source` = :n_chi_id_source
WHERE (`chi_id_source` = :c_chi_id_source
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',NULL,'sources',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('313','1','select','#(meta(sur_base_de_reference(1))),
sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chx_projet_id_source`),
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
)  ','/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
`T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`chx_dossier_id_source`
 FROM b1.tbl_sources T0
WHERE ((`T0`.`chi_id_source` < :T0_chi_id_source
   AND `T0`.`chp_nom_source` NOT LIKE :T0_chp_nom_source) OR `T0`.`chi_id_source` IN (:T0_chi_id_source2))
;',NULL,'sources à copier dans un autre environnement',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('314','1','insert','insérer(
   base_de_reference(),
   valeurs(
      affecte(champ(`chi_id_source`),:chi_id_source),
      affecte(champ(`chx_projet_id_source`),:chx_projet_id_source),
      affecte(champ(`chp_nom_source`),:chp_nom_source),
      affecte(champ(`cht_commentaire_source`),:cht_commentaire_source),
      affecte(champ(`che_binaire_source`),:che_binaire_source),
      affecte(champ(`chp__dtm_source`),:chp__dtm_source),
      affecte(champ(`chp__dtc_source`),:chp__dtc_source),
      affecte(champ(`chx_dossier_id_source`),:chx_dossier_id_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_sources`(
    `chi_id_source` , 
    `chx_projet_id_source` , 
    `chp_nom_source` , 
    `cht_commentaire_source` , 
    `che_binaire_source` , 
    `chp__dtm_source` , 
    `chp__dtc_source` , 
    `chx_dossier_id_source`
) VALUES (
    :chi_id_source , 
    :chx_projet_id_source , 
    :chp_nom_source , 
    :cht_commentaire_source , 
    :che_binaire_source , 
    :chp__dtm_source , 
    :chp__dtc_source , 
    :chx_dossier_id_source
);',NULL,'dossiers à copier dans un autre environnement',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('315','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_basedd`),:chi_id_basedd),
      affecte(champ(`chx_projet_id_basedd`),:chx_projet_id_basedd),
      affecte(champ(`chp_commentaire_basedd`),:chp_commentaire_basedd),
      affecte(champ(`chp_rev_travail_basedd`),:chp_rev_travail_basedd),
      affecte(champ(`chp_fournisseur_basedd`),:chp_fournisseur_basedd),
      affecte(champ(`chx_dossier_id_basedd`),:chx_dossier_id_basedd),
      affecte(champ(`chp__dtm_basedd`),:chp__dtm_basedd),
      affecte(champ(`chp__dtc_basedd`),:chp__dtc_basedd)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_bdds`(
    `chi_id_basedd` , 
    `chx_projet_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_rev_travail_basedd` , 
    `chp_fournisseur_basedd` , 
    `chx_dossier_id_basedd` , 
    `chp__dtm_basedd` , 
    `chp__dtc_basedd`
) VALUES (
    :chi_id_basedd , 
    :chx_projet_id_basedd , 
    :chp_commentaire_basedd , 
    :chp_rev_travail_basedd , 
    :chp_fournisseur_basedd , 
    :chx_dossier_id_basedd , 
    :chp__dtm_basedd , 
    :chp__dtc_basedd
);',NULL,'insérer la base principale',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('316','1','select','#(meta(sur_base_de_reference(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   conditions(sup(champ(`T0`,`chi_id_projet`),2))
)  ','/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet`
 FROM b1.tbl_projets T0
WHERE `T0`.`chi_id_projet` > 2
;',NULL,'projets >2 pour isa de champs ',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('317','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T2`,`chp_nom_source`)
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
)  ','SELECT 
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
;',NULL,'autorisations',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('318','1','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_acces_autorisation`),:chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:chx_source_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_autorisations`(
    `chx_acces_autorisation` , 
    `chx_source_autorisation`
) VALUES (
    :chx_acces_autorisation , 
    :chx_source_autorisation
);',NULL,'autorisations',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('319','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T2`,`chp_nom_source`)
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
      et(egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation))
   )
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , `T2`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE (`T0`.`chi_id_autorisation` = :T0_chi_id_autorisation)
;','function sql_319($par,&$donnees_retournees,$that){
    $champs0=''
      `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , `T2`.`chp_nom_source`
    '';
    $sql0=''SELECT ''.$champs0;
    $from0=''
      FROM `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.tbl_autorisations T0
       LEFT JOIN `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

       LEFT JOIN `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
    '';
    $sql0.=$from0;
    $where0='' WHERE (`T0`.`chi_id_autorisation` = ''.sq1($par[''T0_chi_id_autorisation'']).'')''.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . '' '' . __LINE__ . '' $sql0 = <pre>'' .  $sql0  . ''</pre>'' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                ''T0.chi_id_autorisation'' => $tab0[0],
                ''T0.chx_acces_autorisation'' => $tab0[1],
                ''T0.chx_source_autorisation'' => $tab0[2],
                ''T1.chp_nom_acces'' => $tab0[3],
                ''T2.chp_nom_source'' => $tab0[4],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           ''sql0''    => $sql0          ,
           ''where0''  => $where0     ,
        );
    }catch(Exception $e){
        return array(
           __xst => __xer ,
           ''sql0'' => $sql0 , 
           ''texte_requete'' => ''la selection sur les autorisations'' , 
           ''exception'' => $e ,
            ''id_bdd'' => BDD_NUMERO_1
         );
    }
}
','autorisations',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('320','1','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:chi_id_autorisation))
)  ','DELETE FROM b1.tbl_autorisations
WHERE `chi_id_autorisation` = :chi_id_autorisation ;','function sql_320($par,&$donnees_retournees,$that){
    $sql0=''
      DELETE FROM `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.tbl_autorisations
          WHERE `chi_id_autorisation` = ''.sq1($par[''chi_id_autorisation'']).'' ;
    '';
    // echo __FILE__ . '' '' . __LINE__ . '' $sql0=<pre>'' . $sql0 . ''</pre>'' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, ''changements'' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            ''sql0'' => $sql0 , 
            ''texte_requete'' => ''la suppression dans la table des autorisations'' ,
            ''exception'' => $e , 
            ''id_bdd'' => BDD_NUMERO_1,
            ''bdd'' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
','autorisations',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('321','1','update','modifier(
   base_de_reference(),
   valeurs(affecte(champ(`chx_acces_autorisation`),:n_chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:n_chx_source_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:c_chi_id_autorisation))
)  ','UPDATE b1.tbl_autorisations SET 
   `chx_acces_autorisation` = :n_chx_acces_autorisation , 
   `chx_source_autorisation` = :n_chx_source_autorisation
WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;','function sql_321($par,&$donnees_retournees,$that){
    $sql0=''UPDATE `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.`tbl_autorisations` SET ''.PHP_EOL;
    $tableau_champs=array();

    if($par[''n_chx_acces_autorisation'']==='''' || is_null($par[''n_chx_acces_autorisation'']) ){
        $tableau_champs[]=''`chx_acces_autorisation` = NULL'';
    }else{
        $tableau_champs[]=''`chx_acces_autorisation` = ''.sq0($par[''n_chx_acces_autorisation'']).'''';
    }
    if($par[''n_chx_source_autorisation'']==='''' || is_null($par[''n_chx_source_autorisation'']) ){
        $tableau_champs[]=''`chx_source_autorisation` = NULL'';
    }else{
        $tableau_champs[]=''`chx_source_autorisation` = ''.sq0($par[''n_chx_source_autorisation'']).'''';
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => ''aucun champ à mettre à jour'' ,
            ''id_bdd'' => BDD_NUMERO_1 ,
            ''sql0'' => $sql0 , 
            ''texte_requete'' => ''la modification dans la table des autorisations'' ,
            ''exception'' => null , 
        );
    }
    $sql0.=implode('',''.PHP_EOL.''    '',$tableau_champs).PHP_EOL;
    $where0='' WHERE 1=1 ''.PHP_EOL;
    $where0.='' AND `chi_id_autorisation` = ''.sq1($par[''c_chi_id_autorisation'']).''''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . '' '' . __LINE__ . '' $sql0= <pre>'' . $sql0 . ''</pre>'' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, ''changements'' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            ''sql0'' => $sql0 , 
            ''texte_requete'' => ''la modification dans la table des autorisations'' ,
            ''exception'' => $e , 
            ''id_bdd'' => BDD_NUMERO_1,
            ''bdd'' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
','autorisations',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('322','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T1`,`chx_acces_autorisation`),
      champ(`T1`,`chx_source_autorisation`),
      champ(`T2`,`chi_id_acces`),
      champ(`T2`,`chp_nom_acces`),
      champ(`T3`,`chp_nom_source`),
      champ(`T0`,`cht_libelle_menu`)
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
         comme(champ(`T0`,`chp_methode_menu`),:T0_chp_methode_menu),
         egal(champ(`T1`,`chx_acces_autorisation`),:T1_chx_acces_autorisation)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_menu`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T1`.`chx_acces_autorisation` , 
`T1`.`chx_source_autorisation` , `T2`.`chi_id_acces` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu`
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
;',NULL,'menus',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('323','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_titre_menu`),:chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:chp_methode_menu),
      affecte(champ(`cht_libelle_menu`),:cht_libelle_menu),
      affecte(champ(`cht_initialisation_menu`),:cht_initialisation_menu),
      affecte(champ(`cht_complements_menu`),:cht_complements_menu)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_menus`(
    `chp_titre_menu` , 
    `chx_autorisation_menu` , 
    `chp_methode_menu` , 
    `cht_libelle_menu` , 
    `cht_initialisation_menu` , 
    `cht_complements_menu`
) VALUES (
    :chp_titre_menu , 
    :chx_autorisation_menu , 
    :chp_methode_menu , 
    :cht_libelle_menu , 
    :cht_initialisation_menu , 
    :cht_complements_menu
);',NULL,'menus',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('324','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T1`,`chx_acces_autorisation`),
      champ(`T1`,`chx_source_autorisation`),
      champ(`T2`,`chp_nom_acces`),
      champ(`T3`,`chp_nom_source`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_initialisation_menu`),
      champ(`T0`,`cht_complements_menu`)
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
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T1`.`chx_acces_autorisation` , 
`T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu` , `T0`.`cht_initialisation_menu` , 
`T0`.`cht_complements_menu`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
;',NULL,'menus',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('325','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`cht_libelle_menu`),:n_cht_libelle_menu),
      affecte(champ(`chp_titre_menu`),:n_chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:n_chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:n_chp_methode_menu),
      affecte(champ(`cht_initialisation_menu`),:n_cht_initialisation_menu),
      affecte(champ(`cht_complements_menu`),:n_cht_complements_menu)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:c_chi_id_menu))
)  ','UPDATE b1.tbl_menus SET 
   `cht_libelle_menu` = :n_cht_libelle_menu , 
   `chp_titre_menu` = :n_chp_titre_menu , 
   `chx_autorisation_menu` = :n_chx_autorisation_menu , 
   `chp_methode_menu` = :n_chp_methode_menu , 
   `cht_initialisation_menu` = :n_cht_initialisation_menu , 
   `cht_complements_menu` = :n_cht_complements_menu
WHERE `chi_id_menu` = :c_chi_id_menu ;',NULL,'menus',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('326','1','select','sélectionner(
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
)  ','SELECT 
`T1`.`chx_dossier_id_source` , `T1`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation

WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
;',NULL,'menus',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('327','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T1`,`chx_source_autorisation`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T3`,`chp_nom_source`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_initialisation_menu`),
      champ(`T0`,`cht_complements_menu`),
      champ(`T0`,`chi_id_menu`)
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
   conditions(egal(champ(`T2`,`chi_id_acces`),:T2_chi_id_acces))
)  ','SELECT 
`T1`.`chx_source_autorisation` , `T0`.`chp_titre_menu` , `T0`.`chp_methode_menu` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`cht_complements_menu` , `T0`.`chi_id_menu`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE `T2`.`chi_id_acces` = :T2_chi_id_acces
;',NULL,'menus par acces',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_sources
  ===============================
*/

INSERT INTO tbl_sources (chi_id_source,chx_projet_id_source,chp_nom_source,cht_commentaire_source,cht_rev_source,cht_genere_source,che_binaire_source,che__nur_source,chp__dtm_source,chp__dtc_source,chx_dossier_id_source) VALUES
('1','1','.htaccess',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('2','1','favicon.ico',NULL,NULL,NULL,'1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1'),
('3','1','index.html',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('4','1','page404.html',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('5','1','rvjb.png',NULL,NULL,NULL,'1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1'),
('11','1','.htaccess',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','2'),
('12','1','__definitions.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','2'),
('13','1','__version.txt',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','2'),
('14','1','app.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','2'),
('21','1','.htaccess',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('22','1','__app.php',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('23','1','favicon.ico',NULL,NULL,NULL,'1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','7'),
('24','1','index.php',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('25','1','page404.html',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('50','1','c_acces1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('51','1','c_accueil1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('52','1','c_aides1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('53','1','c_connexion1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('54','1','c_cookies1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('55','1','c_divers1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('56','1','c_groupes1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('58','1','c_metiers1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('59','1','c_profile1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('60','1','c_rev_vers_matrice1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('61','1','c_taches1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('62','1','c_utilisateurs1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('63','1','c_sql0.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('79','1','bat_pour_lire_fichier_session.bat',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','12'),
('80','1','lire_fichier_session.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','12'),
('81','1','server2.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','12'),
('82','1','test001.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','12'),
('154','1','c_fonctions_js1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('156','1','c_interface1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('158','1','c_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('167','1','c_worker1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('168','1','Sortable.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','11'),
('201','1','c_astjs_vers_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('202','1','c_astphpnikic_vers_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('203','1','c_astphpparseur_vers_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('204','1','c_astpostcss_vers_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('205','1','c_astsql_parseur_cst_vers_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('223','1','test.js',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('224','1','test.sql',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('225','1','c_dossiers1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('229','1','test.php',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('230','1','c_projets1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('231','1','c_requetes1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('232','1','c_rev_css1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('233','1','c_rev_html1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('234','1','c_rev_js1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('235','1','c_rev_mat1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('236','1','c_rev_php1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('237','1','c_rev_sql1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('238','1','c_rev_texte1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('240','1','c_revs1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('241','1','c_sources1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('243','1','c_svg1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('246','1','test_hdf.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('253','1','c_astsqliteparseur_vers_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('255','1','c_html_vers_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('257','1','c_requete_sql1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('259','1','c_rev_vers_css1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('260','1','c_rev_vers_html1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('261','1','c_rev_vers_js1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('262','1','c_rev_vers_php1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('263','1','c_rev_vers_sql1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('264','1','c_rev_vers_texte1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('265','1','c_svg_bdd1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('266','1','c_texte_vers_rev1.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','10'),
('269','1','acorn.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','11'),
('270','1','php_parser.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','11'),
('271','1','postcss0.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','11'),
('272','1','sql_parser_cst.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','11'),
('273','1','sqlite_parser.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','11'),
('278','1','PHPSERIALIZE.js',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','12'),
('328','1','test.css',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('330','1','tictactoe.html',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('331','1','test_tictactoe.html.rev',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('353','1','c_bases1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('354','1','tri_arbre.html',NULL,NULL,'<!DOCTYPE html>
<html lang="fr">
 <head>
  <meta charset="utf-8" />
  <title>A simple tree and/or sort javascript</title>
  <meta name="viewport" content="width=device-width,user-scalable=0,initial-scale=1,maximum-scale=1,minimum-scale=1" />  

  <script type="text/javascript" src="tri_arbre1.js"></script>
  <style>
  *{box-sizing:border-box;}
  body{margin:0;padding:0;}
  .le_bo_bouton_deplacer{
   border:1px green solid;
   min-width:1em;
   text-align:center;
   cursor:ns-resize;
   color:green;
  }
  .le_bo_bouton_menu{
      border:2px yellow outset;
      min-width:1em;
      text-align:center;
      cursor:pointer;
      color:blue;
  }
  </style>
 </head>
 <body>
 <div style="border:1px red solid;height:50px;width:50px;display:inline-block;overflow:hidden;">50</div>
 <a href="javascript:goto(50)">goto(50)</a>
<h1>exemple</h1><a href="#fin">fin</a><span id="toto"></span>
<br /><br /><br /><br /><br />
<table border="1">
<tr>
    <td>
        <ul id="tri_arbre_racine1" style="border:0px red solid;">
         <li id="123">
           <b style="color:red;">a 1</b>
           <ul  data-replie>
            <li>
               aa 2
               <ul>
                <li>aaa 3</li>
                <li>aaa 4</li>
               </ul>
            </li>
            <li>
               ab 5
               <ul  data-replie>
                <li>aba 6</li>
                <li>abb 7</li>
               </ul>
            </li>
           </ul>
         </li>
         <li>b 8</li>
         <li>c c 90</li>
         <li>d d 130</li>
         <li>e e 170</li>
         <li>f f 210</li>
         <li>g g 250</li>
         <li>h h 290</li>
         <li>i i 330 </li>
         <li>j j j 370</li>
         <li>k k k 410</li>
         <li>l l l 450 </li>
         <li>m m m m 490</li>
         <li>n n n n</li>
         <li>o o o o</li>
         <li>p p p p</li>
         <li>q q q q</li>
         <li>r r</li>
         <li>s s</li>
         <li>t t</li>
        </ul>
    </td>


<td>

    <ul id="tri_arbre_racine2" style="border:0px red solid;">
     <li id="123">
       <b style="color:red;">a 1</b>
       <ul>
        <li>
           aa 2
           <ul>
            <li>aaa 3</li>
            <li>aaa 4</li>
           </ul>
        </li>
        <li>
           ab 5
           <ul  data-replie>
            <li>aba 6</li>
            <li>abb 7</li>
           </ul>
        </li>
       </ul>
     </li>
     <li>b 8</li>
    </ul>


</td>
</tr>
</table>
haut_abs:227,bas_abs:739, 739-50=689, hzone interne=831 avec bouton, 809 sans bouton ( hbouton=22 ), 
<br />

<ul id="tri_arbre_racine3" style="border:0px red solid;">
 <li id="456">
   <b style="color:red;">a 1</b>
   <ul>
    <li>
       aa 2
       <ul>
        <li>aaa 3</li>
        <li>aaa 4</li>
       </ul>
    </li>
    <li>
       ab 5
       <ul  data-replie>
        <li>aba 6</li>
        <li>abb 7</li>
       </ul>
    </li>
   </ul>
 </li>
</ul>


<br>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<footer id="fin"></footer>
<script type="text/javascript">

function goto(n){
 document.documentElement.scrollTo(0,50);
}


/*=======================================================*/
function appelee_apres_action1(arbre , id_zone_de_tri){
    console.log(''appelee_apres_action1'');
    /* console.log(JSON.stringify(arbre)); */
}

/*=======================================================*/
let options1={
    hauteur_max_en_vh             : 40,// entre 20 et 80
    largeur_max                   :''400px'', //''calc(100% - 50px)'',
    afficher_le_bouton_supprimer  : false ,
    fonction_appelee_apres_action : appelee_apres_action1 ,
    arborescent                   : true ,
    class_du_bouton_deplacer      : ''le_bo_bouton_deplacer'' ,
    boutons_du_menu               : [{libelle:''+'' ,fonction:ajouter_une_branche}],
    class_du_bouton_menu          : ''le_bo_bouton_menu'' ,
}

var nom_racine1=''tri_arbre_racine1'';
var arbre1=new tri_arbre1(nom_racine1,options1);
/*=======================================================*/
/*=======================================================*/
/*=======================================================*/


/*=======================================================*/
function appelee_apres_action2(arbre , id_zone_de_tri){
//    console.log(JSON.stringify(arbre));
}
/*=======================================================*/
function ajouter_une_branche(e,reference_arbre){
    console.log(e,reference_arbre);
    let max=0;
    for(let i=0;i<reference_arbre.arbre.length;i++){
     if(reference_arbre.arbre[i].id_interne>max){
      max=reference_arbre.arbre[i].id_interne;
     }
    }
    max++;
    let a={"id_interne":max,"id_interne_parent":0,"replie":0,"contient_des_enfants":0,"contenu":"nb "+max,"attributs":{}}
    reference_arbre.arbre.splice( 0 , 0 , a );
    
    reference_arbre.action_externe_sur_arbre(''ajoute_branche'',reference_arbre.arbre);
}
/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

let options2={
    hauteur_max_en_vh             : 60,// entre 20 et 80
    largeur_max                   :''400px'', //''calc(100% - 50px)'',
    afficher_le_bouton_supprimer  : false ,
    fonction_appelee_apres_action : appelee_apres_action2 ,
    arborescent                   : true ,
    class_du_bouton_deplacer      : ''le_bo_bouton_deplacer'' ,
    decallage_entre_niveaux_en_px : 20,
    boutons_du_menu               : [{libelle:''+'' ,fonction:ajouter_une_branche}],
    class_du_bouton_menu          : ''le_bo_bouton_menu'' ,
}
var arbre2=new tri_arbre1(''tri_arbre_racine2'',options2);
/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

let options3={
    hauteur_max_en_vh             : 20,// entre 20 et 80
    largeur_max                   :''400px'', //''calc(100% - 50px)'',
    afficher_le_bouton_supprimer  : false ,
    fonction_appelee_apres_action : appelee_apres_action2 ,
    arborescent                   : false ,
    class_du_bouton_deplacer      : ''le_bo_bouton_deplacer'' ,
    decallage_entre_niveaux_en_px : 20,
    boutons_du_menu               : [{libelle:''+'' ,fonction:ajouter_une_branche}],
    class_du_bouton_menu          : ''le_bo_bouton_menu'' ,
}
var arbre3=new tri_arbre1(''tri_arbre_racine3'',options3);
/*=======================================================*/
/*=======================================================*/
/*=======================================================*/


console.log(''aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'');
setTimeout(
 ()=>{
  goto(50);
  console.log(arbre1.cle_aleatoire , nom_racine1);
  let id1=nom_racine1+''_''+arbre1.cle_aleatoire;
  console.log(''id1=''+id1);
  document.getElementById(id1).scrollTo(0,000);
  arbre1.calcul_des_positions_relatives();
 },50
);



</script>

 </body>
 
 
</html>','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','11'),
('355','1','tri_arbre1.js',NULL,NULL,'"use strict";
class tri_arbre1{
    #racine_html=null;
    arbre=[];
    #id_div='''';
    #style_des_separateurs=''font-size:0.7em;'';
    #element_bouge=null;
    #position_scroll_dans_la_zone_de_tri=0;
    #tableau_des_positions_relatives=[];
    #id_cible_selectionne=0;
    #position_absolue_de_la_zone_de_tri=0;
    #hauteur_de_la_zone_de_tri=0;
    #decallage_max_de_la_zone_de_tri=0;
    #position_max=0;
    #timeout_quand_trop_bas=null;
    #timeout_quand_trop_haut=null;
    #id_interne_du_bloc_a_deplacer='''';
    #noeud_a_deplacer=null;
    cle_aleatoire='''';
    #top_declenchement=0;
    #bottom_declenchement=0;
    #bottom_dernier=0;
    #hauteur_zone_tri=0;
    #zone_reference_top=null;
    #souris_appuyee=false;
    
    #options={
        "triable" : true,
        "hauteur_max_en_vh" : 80 ,
        "largeur_max" : ''calc(100% - 50px)'' ,
        "largeur_min" : ''150px'' ,
        "afficher_le_bouton_supprimer" : false ,
        "fonction_appelee_apres_action" : null ,
        "arborescent" : true,
        "class_du_bouton_deplacer" : '''',
        "decallage_entre_niveaux_en_px" : 30, /*entre 5 et 30*/
        "boutons_du_menu" : [],
        "class_du_bouton_menu" : '''',
        "border_zone_principale" : ''2px purple inset'',
        "hauteur_separateur_en_px" : 10 , /*entre 10 et 30*/
        "border_separateur" : ''0px red solid'',
        "border_bloc" : ''1px blue solid'',
        "box_shadow" : ''inset 0px 0px 16px #f00'',
        "background_color" : ''grey'',
    };
    /*
      =============================================================================================================
    */
    constructor( par_id_de_l_element , options ){
        if(document.getElementById( par_id_de_l_element ) === null){
            console.error( ''tri_arbre1 id="'' + par_id_de_l_element + ''" non trouvé :-/'' );
            return;
        }
        let lst1=document.querySelectorAll( ''[data-id_original_pour_tri="'' + par_id_de_l_element + ''"]'' );
        if(lst1.length>0){
            console.error( ''tri_arbre1 id="'' + par_id_de_l_element + ''" déjà défini :-/'' );
            return;
        }

        this.#racine_html=document.getElementById( par_id_de_l_element );
        if(this.#racine_html.tagName.toUpperCase() !== ''UL''){
            console.error( ''tri_arbre1 la racine doit être un <ul>'' );
            return;
        }
        if( typeof options !== ''object''){
            console.error( ''tri_arbre1 les options doivent être représentées sous forme d\''objet'' );
            return;
        }
        
        this.#traite_options(options);
        /*
        
        */
        
        this.arbre=[];
        let id_interne_parent=0;
        this.construire_arbre_a_partir_de_ul_li( this.#racine_html , id_interne_parent );
        /* console.log( JSON.stringify( this.arbre ).replace( /\},\{/g , ''},\n{'' ) ); */
        this.#racine_html.style.display=''none'';
        this.cle_aleatoire=this.makeid( 20 );
        this.#id_div=par_id_de_l_element + ''_'' + this.cle_aleatoire ;
        let t='''';
        t+=''<div '';
        t+='' id="'' + this.#id_div + ''"'';
        t+='' data-id_original_pour_tri="''+par_id_de_l_element+''"'';
        t+='' style="'';
        t+=''  border:''+this.#options.border_zone_principale+'';'';
        t+=''  user-select:none;'';
        t+=''  max-height:'' + this.#options.hauteur_max_en_vh + ''vh;'';
        t+=''  overflow-y:scroll;'';
        t+=''  max-width:'' + this.#options.largeur_max + '';'';
        t+=''  min-width:'' + this.#options.largeur_min + '';'';
        t+=''  overscroll-behavior-y: none;'';
        t+=''"'';
        t+=''></div>'';
        this.#racine_html.insertAdjacentHTML( ''afterend'' , t );
        this.reference_zone_triable=document.getElementById(this.#id_div);
        this.#dessine_l_arbre();
    }
    /*
      =============================================================================================================
    */
    action_externe_sur_arbre(action,arbre){
     switch(action){
      case ''ajoute_branche'' :
        console.log(action , JSON.stringify(arbre));
        this.arbre=arbre;
        this.#dessine_l_arbre();
        break;
     }
    }
    /*
      =============================================================================================================
      pour vérifier qu''on ne met pas une branche dans une sous branche
    */
    #verifie_id_cible_enfant_de( id_cible , id_a_deplacer ){
        if(id_cible === id_a_deplacer){
            return true;
        }
        let trouve=false;
        for( let i=0 ; i < this.arbre.length && trouve === false ; i++ ){
            if(this.arbre[i].id_interne === id_a_deplacer){
                for( let j=0 ; j < this.arbre.length && trouve === false ; j++ ){
                    if(this.arbre[j].id_interne_parent === id_a_deplacer){
                        if(this.arbre[j].id_interne === id_cible){
                            trouve=true;
                        }else{
                            trouve=this.#verifie_id_cible_enfant_de( id_cible , this.arbre[j].id_interne );
                        }
                    }
                }
            }
        }
        return trouve;
    }
    /*
      =============================================================================================================
    */
    #souris_haut( e ){

        this.#souris_appuyee=false;
        window.removeEventListener( ''mouseup'' , this.#souris_haut.bind( this ) , false );
        window.removeEventListener( ''mousemove'' , this.#souris_bouge.bind( this ) , false );
        
        window.removeEventListener( ''touchend'' , this.#doigt_haut.bind( this ) , false );
        window.removeEventListener( ''touchmove'' , this.#doigt_bouge.bind( this ) , false );
        
        if(e.target.getAttribute(''data-poignee_pour_tri'') || e.target.getAttribute(''data-position_pour_tri'')){
            try{
                clearTimeout( this.#timeout_quand_trop_haut );
            } catch {}
            try{
                clearTimeout( this.#timeout_quand_trop_bas );
            } catch {}
            if(this.#element_bouge !== null){
                try{
                    this.#noeud_a_deplacer.style.boxShadow='''';
                } catch {}
                let id_interne_du_bloc_a_deplacer=parseInt( this.#id_interne_du_bloc_a_deplacer , 10 );
                this.#id_interne_du_bloc_a_deplacer='''';
                this.#noeud_a_deplacer=null;
                if(this.#id_cible_selectionne !== 0){
                    let deplacement=this.#id_cible_selectionne.split( ''_'' );
                    let id_cible=parseInt( deplacement[1] , 10 );
                    let type_deplacement=deplacement[0];
                    if(this.#options.arborescent===false && type_deplacement===''dedans''){
                        type_deplacement=''avant'';
                    }
                    /*
                      vérifie qu''on ne met pas une branche dans une sous branche
                    */
                    if(this.#verifie_id_cible_enfant_de( id_cible , id_interne_du_bloc_a_deplacer ) === true){
                        /* si c''est le cas, on ne fait rien */
                    }else{
                        let tabi=null;

                        for( let i=0 ; i < this.arbre.length ; i++ ){
                            if(id_interne_du_bloc_a_deplacer === this.arbre[i].id_interne){
                                tabi=this.arbre.splice( i , 1 );
                                break;
                            }
                        }
                        for( let i=0 ; i < this.arbre.length ; i++ ){
                            if(id_cible === this.arbre[i].id_interne){
                                if(type_deplacement === ''apres''){
                                    tabi[0].id_interne_parent=this.arbre[i].id_interne_parent;
                                    this.arbre.splice( i + 1 , 0 , tabi[0] );
                                }else if(type_deplacement === ''avant''){
                                    tabi[0].id_interne_parent=this.arbre[i].id_interne_parent;
                                    this.arbre.splice( i , 0 , tabi[0] );
                                }else if(type_deplacement === ''dedans''){
                                    tabi[0].id_interne_parent=this.arbre[i].id_interne;
                                    this.arbre.splice( i + 1 , 0 , tabi[0] );
                                }
                                break;
                            }
                        }
                        this.#dessine_l_arbre();
                        if(this.#options.fonction_appelee_apres_action !== null){
                            this.#options.fonction_appelee_apres_action( this.arbre , this.#id_div );
                        }
                    }
                }
                this.#element_bouge=null;
                this.#position_absolue_de_la_zone_de_tri=0;
            }
        }else{
         /*
           console.log(e.target);
         */
        }
        
    }
    /*
      =============================================================================================================
    */
    faire_defiler_quand_trop_bas(){
        clearTimeout( this.#timeout_quand_trop_bas );
        if(this.#souris_appuyee===false){
          return;
        }
        let quantite_a_decaller=10;
        if(this.#hauteur_de_la_zone_de_tri>500){
            quantite_a_decaller=15;
        }

        let a=parseInt( document.getElementById( this.#id_div ).scrollTop , 10 );
        document.getElementById( this.#id_div ).scrollTo( {"top" : a + quantite_a_decaller ,"left" : 0   } ); // ,"behavior" : "smooth"

        this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
        let tt=this.#zone_reference_top.getBoundingClientRect();
        
        this.#position_absolue_de_la_zone_de_tri=tt.top+document.documentElement.scrollTop;
        
        
        /* console.log( this.#position_scroll_dans_la_zone_de_tri ); */
        this.#timeout_quand_trop_bas=setTimeout( () => {
            this.faire_defiler_quand_trop_bas();} , 50 );
    }
    /*
      =============================================================================================================
    */
    faire_defiler_quand_trop_haut(){
        clearTimeout( this.#timeout_quand_trop_haut );
        if(this.#souris_appuyee===false){
          return;
        }
        let quantite_a_decaller=10;
        if(this.#hauteur_de_la_zone_de_tri>500){
            quantite_a_decaller=15;
        }

        let a=parseInt( document.getElementById( this.#id_div ).scrollTop , 10 );
        document.getElementById( this.#id_div ).scrollTo( {"top" : a - quantite_a_decaller ,"left" : 0 } ); // ,"behavior" : "smooth"

        this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
        
        let tt=this.#zone_reference_top.getBoundingClientRect();
        
        this.#position_absolue_de_la_zone_de_tri=tt.top+document.documentElement.scrollTop;
        
        
        
        this.#timeout_quand_trop_haut=setTimeout( () => {
            this.faire_defiler_quand_trop_haut();} , 50 );
    }
    /*
      =============================================================================================================
    */
    #souris_bouge( e ){
        if(this.#souris_appuyee===false){
          return;
        }
        if(this.#element_bouge !== null){
            let position_absolue_de_la_souris_en_y=e.pageY;
            this.#id_cible_selectionne=0;
            if(position_absolue_de_la_souris_en_y < this.#top_declenchement){
                //console.log(''=========== trop haut =============''); 
                if(this.#position_scroll_dans_la_zone_de_tri === 0){
                }else{
                    this.#timeout_quand_trop_haut=setTimeout( () => {
                        this.faire_defiler_quand_trop_haut();} , 20 );
                    return;
                }
            }else{
                try{
                    clearTimeout( this.#timeout_quand_trop_haut );
                } catch {}
            }
            if(position_absolue_de_la_souris_en_y > this.#bottom_declenchement){
                if(this.#position_scroll_dans_la_zone_de_tri > this.#decallage_max_de_la_zone_de_tri){
                }else{
                    this.#timeout_quand_trop_bas=setTimeout( () => {
                        this.faire_defiler_quand_trop_bas();} , 20 );
                    return;
                }
            }else{
                try{
                    clearTimeout( this.#timeout_quand_trop_bas );
                } catch {}
            }
            let position_relative_dans_zone=position_absolue_de_la_souris_en_y-this.#position_absolue_de_la_zone_de_tri;
            
            
            let xxx=''pos absolue=''+position_absolue_de_la_souris_en_y;
            xxx+=''\n this.#position_absolue_de_la_zone_de_tri=''+this.#position_absolue_de_la_zone_de_tri;
            xxx+=''\n this.#position_scroll_dans_la_zone_de_tri=''+this.#position_scroll_dans_la_zone_de_tri;
            xxx+=''\n top_declen=''+this.#top_declenchement;
            xxx+=''\n document.documentElement.scrollTop=''+document.documentElement.scrollTop;
            xxx+=''\n this.#id_div.scrollHeight=''+document.getElementById(this.#id_div).scrollHeight;
            xxx+=''\n\n ====> prdz=''+position_relative_dans_zone;
            //console.log(xxx);
            
//            console.log(this.#position_absolue_de_la_zone_de_tri);
//            console.log(this.#tableau_des_positions_relatives);
            for( let i=0 ; i < this.#tableau_des_positions_relatives.length ; i++ ){
                if(position_relative_dans_zone  >=  this.#tableau_des_positions_relatives[i].top
                       && position_relative_dans_zone <  this.#tableau_des_positions_relatives[i].bottom
                ){
                    this.#id_cible_selectionne=this.#tableau_des_positions_relatives[i].id;
                    document.getElementById( this.#tableau_des_positions_relatives[i].id ).style.backgroundColor=this.#options.background_color;
                }else{
                    document.getElementById( this.#tableau_des_positions_relatives[i].id ).style.backgroundColor='''';
                    
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #souris_bas( e ){
        this.#souris_appuyee=true;
        var tar=e.target;
        this.#element_bouge=null;
        
        let txt_log='''';
        let tt=document.getElementById( this.#id_div ).getBoundingClientRect()
        this.#top_declenchement=document.documentElement.scrollTop+parseInt(tt.top,10);
        //console.log(''souris bas top_declenchement=''+this.#top_declenchement)
        
        this.#bottom_declenchement=document.documentElement.scrollTop+parseInt(tt.bottom,10);
        
        
        if(tar.tagName.toLowerCase() === ''div'' && tar.getAttribute( "data-poignee_pour_tri" )){
            window.addEventListener( ''mouseup'' , this.#souris_haut.bind( this ) , false );
            window.addEventListener( ''mousemove'' , this.#souris_bouge.bind( this ) , false );
         
            window.addEventListener( ''touchend'' , this.#doigt_haut.bind( this ) , false );
            window.addEventListener( ''touchmove'' , this.#doigt_bouge.bind( this ) , false );
            
            /*
              on déplace un bloc
            */
            this.#element_bouge=tar;
            this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
            let pos=document.getElementById( this.#id_div ).getBoundingClientRect();
            
            tt=this.#zone_reference_top.getBoundingClientRect();
            
            this.#position_absolue_de_la_zone_de_tri=tt.top+document.documentElement.scrollTop;
            
            this.#hauteur_de_la_zone_de_tri=pos.height;
            this.#decallage_max_de_la_zone_de_tri=this.#tableau_des_positions_relatives[this.#tableau_des_positions_relatives.length - 1].bottom - this.#hauteur_de_la_zone_de_tri;
            this.#id_interne_du_bloc_a_deplacer=tar.getAttribute( "data-poignee_pour_tri" );
            
            let lst1=document.getElementById( this.#id_div ).querySelectorAll( ''[data-id_interne="'' + this.#id_interne_du_bloc_a_deplacer + ''"]'' );
            if(lst1.length>0){
                this.#noeud_a_deplacer=lst1[0];
                try{
                    this.#noeud_a_deplacer.style.boxShadow=this.#options.box_shadow;
                }catch(e){
                 debugger
                }
            }
        }else if(tar.tagName.toLowerCase() === ''div'' && tar.getAttribute( "data-replie" )){
            let id_interne=parseInt(tar.getAttribute( "data-replie" ) , 10);
            let lst1=document.getElementById( this.#id_div ).querySelectorAll( ''[data-enfants_de="'' + id_interne + ''"]'' );
            if(lst1[0].style.display === ''none''){
                lst1[0].style.display='''';
                tar.innerHTML=''-'';
            }else{
                lst1[0].style.display=''none'';
                tar.innerHTML=''+'';
            }
            for(let i=0;i<this.arbre.length;i++){
             if(this.arbre[i].id_interne===id_interne){
              if(tar.innerHTML===''+''){
               this.arbre[i].replie=1;
              }else{
               this.arbre[i].replie=0;
              }
              break;
             }
            }
            
            this.calcul_des_positions_relatives();
        }else{
            this.calcul_des_positions_relatives();
        }
    }
    /*
      =============================================================================================================
    */
    #doigt_bas( e ){
        document.body.style.overflowY=''hidden'';
        let lst1=document.querySelectorAll( ''dialog'' );
        for(let i=0;i<lst1.length;i++){
            lst1[i].style.overflowY=''hidden'';
        }
        document.getElementById( this.#id_div ).style.overflowY=''hidden'';
        e.stopPropagation();
        this.#souris_bas( e.touches[0] );
    }
    /*
      =============================================================================================================
    */
    #doigt_bouge( e ){
        e.stopPropagation();
        this.#souris_bouge( e.touches[0]  );
    }
    /*
      =============================================================================================================
    */
    #doigt_haut( e ){
        /* console.log(e.changedTouches[0]) */
        document.body.style.overflowY=''scroll'';
        let lst1=document.querySelectorAll( ''dialog'' );
        for(let i=0;i<lst1.length;i++){
            lst1[i].style.overflowY=''scroll'';
        }
        try{
            document.getElementById( this.#id_div ).style.overflowY=''scroll'';
        }catch{}
        e.stopPropagation();
        this.#souris_haut( e.changedTouches[0]  );
    }    
    /*
      =============================================================================================================
    */
    calcul_des_positions_relatives(){
        let lst1=document.getElementById( this.#id_div ).querySelectorAll( ''[data-position_pour_tri]'' );
        this.#tableau_des_positions_relatives=[];
        if(lst1.length > 0){
            let txt_log='''';
            this.#zone_reference_top=lst1[0];
            let tt=this.#zone_reference_top.getBoundingClientRect();
            let min=parseInt(tt.top,10);

            for( let i=0 ; i < lst1.length ; i++ ){
                let pos=lst1[i].getBoundingClientRect();
//                console.log(pos.top); 
                this.#tableau_des_positions_relatives.push( {"top" : parseInt( pos.top - min , 10 ) ,"bottom" : parseInt( pos.bottom - min , 10 ) ,"id" : lst1[i].id} );
                this.#position_max=parseInt( pos.bottom - min , 10 );
                txt_log+=''  ,   ''+i+'':[''+parseInt( pos.top - min , 10 )+'','' + parseInt( pos.bottom - min , 10 )+''](''+pos.top+'')'';
                
            }
            /* 
              console.log(''txt_log=''+txt_log) 
            */
            
        }
        this.#element_bouge=null;
        /* 
          console.log( ''\ninit max=''+this.#position_max); 
        */
    }
    /*
      =============================================================================================================
    */
    #dessine_l_arbre(){
        let le_html='''';
        this.#calcul_des_enfants( 0 );
        let le_html_resultat=this.construit_html_de_arbre( 0 );
    }
    /*
      =============================================================================================================
    */
    construit_html_de_arbre( id_interne_parent , niveau=0 ){
        let le_html='''';
        let le_sous_html='''';
        let premier=true;
        let t='''';
        for( let i=0 ; i < this.arbre.length ; i++ ){
            if(this.arbre[i].id_interne_parent === id_interne_parent){
                if(premier === true){
                    if(this.#options.arborescent===false && i!==0){
                    }else{
                        le_html+=''<div id="avant_'' + this.arbre[i].id_interne + ''_''+ this.cle_aleatoire + ''"''
                        le_html+='' data-position_pour_tri="avant" ''
                        le_html+='' style="''
                        le_html+='' min-height:''+this.#options.hauteur_separateur_en_px+''px;max-height:''+this.#options.hauteur_separateur_en_px+''px;''
                        le_html+='' border:''+this.#options.border_separateur+'';''
                        le_html+='' '' + this.#style_des_separateurs + ''"></div>'';
                    }
                    premier=false;
                }
                let replie='''';
                if(this.arbre[i].replie === 1 && this.arbre[i].contient_des_enfants > 1){
                    replie=''display:none;'';
                }
                /*
                  le bloc début
                */
                t='''';
                t+=''<div'';
                t+='' id="dedans_'' + this.arbre[i].id_interne + ''_''+ this.cle_aleatoire + ''"'';
                t+='' data-position_pour_tri="dedans" '';
                t+='' style="'';
                t+=''   min-height:30px;'';
                t+=''   border:''+this.#options.border_bloc+'';'';
                t+=''   display:flex;'';
                t+=''   flex-direction:row;'';
                t+=''   justify-content:space-between;'';
                t+='' "'';
                t+='' data-attributs_originaux="''+JSON.stringify(this.arbre[i].attributs).replace(/&/g,''&amp;'').replace(/"/g,''&quot;'').replace(/</g,''&lt;'').replace(/>/g,''&gt;'')+''"'';
                t+='' data-contenu_original="''+this.arbre[i].contenu.replace(/&/g,''&amp;'').replace(/"/g,''&quot;'').replace(/</g,''&lt;'').replace(/>/g,''&gt;'')+''"'';
                t+=''>'';
                t+=''  <div'';
                t+=''    style="text-align:left;flex-grow:1;" '';
                t+=''    data-id_interne="'' + this.arbre[i].id_interne + ''"'';
                t+=''  >''
                t+=this.arbre[i].contenu;
                t+=''  </div>''
                le_html+=t;
                le_html+='''';
                if(this.#options.afficher_le_bouton_supprimer === true){
                    if(this.arbre[i].contient_des_enfants > 0){
                        le_html+=''<div data-supprime="'' + this.arbre[i].id_interne + ''" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>'';
                    }else{
                        le_html+=''<div data-supprime="'' + this.arbre[i].id_interne + ''" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">X</div>'';
                    }
                }
                if(this.#options.arborescent===false){
                    /*
                      pas de boutons +/- pour une liste simple
                    */
                }else{
                    if(replie === ''''){
                        if(this.arbre[i].contient_des_enfants === 0){
                            le_html+=''<div data-replie="'' + this.arbre[i].id_interne + ''" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>'';
                        }else{
                            le_html+=''<div data-replie="'' + this.arbre[i].id_interne + ''" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">-</div>'';
                        }
                    }else{
                        if(this.arbre[i].contient_des_enfants === 0){
                            le_html+=''<div data-replie="'' + this.arbre[i].id_interne + ''" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>'';
                        }else{
                            le_html+=''<div data-replie="'' + this.arbre[i].id_interne + ''" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">+</div>'';
                        }
                    }
                }
                if(this.#options.triable===false){
                    le_html+=''<div data-poignee_pour_tri="'' + this.arbre[i].id_interne + ''" style="float:right;visibility:hidden;" class="''+this.#options.class_du_bouton_deplacer+''">↕</div>'';
                }else{
                    le_html+=''<div data-poignee_pour_tri="'' + this.arbre[i].id_interne + ''" style="float:right;" class="''+this.#options.class_du_bouton_deplacer+''">↕</div>'';
                }
                le_html+=''</div>'';
                /*
                  le bloc fin çi-dessus
                */
                
                /*  */
                le_sous_html=this.construit_html_de_arbre( this.arbre[i].id_interne , niveau + 1 );
                /*  */
                le_html+=''<div data-enfants_de="'' + this.arbre[i].id_interne + ''" style="border:0px pink solid;margin-left:''+this.#options.decallage_entre_niveaux_en_px+''px;'' + replie + ''">'';
                le_html+=le_sous_html;
                le_html+=''</div>'';
                /*  */
                le_html+=''<div''
                le_html+='' id="apres_'' + this.arbre[i].id_interne + ''_''+ this.cle_aleatoire + ''"''
                le_html+='' data-position_pour_tri="apres"''
                le_html+='' style="min-height:''+this.#options.hauteur_separateur_en_px+''px;''
                le_html+='' max-height:''+this.#options.hauteur_separateur_en_px+''px;''
                le_html+='' border:''+this.#options.border_separateur+'';''
                le_html+='' '' + this.#style_des_separateurs + ''"></div>'';
            }
        }
        if(id_interne_parent===0){
         
            let le_menu='''';         
            if(this.#options.boutons_du_menu.length>0){
                    le_menu+=''<div id="menu_'' + this.cle_aleatoire + ''">'';
                    for(let i=0;i<this.#options.boutons_du_menu.length;i++){
                     le_menu+=''<div id="menu_'' + this.cle_aleatoire + ''_''+i+''"'';
                     le_menu+='' class="''+this.#options.class_du_bouton_menu+''"'';
                     le_menu+='' style="display:inline-block;"'';
                     le_menu+=''>''+this.#options.boutons_du_menu[i].libelle+''</div>'';
                    }
                    le_menu+=''</div>'';
            }
            le_html=le_menu+le_html;
         
         
            document.getElementById( this.#id_div ).innerHTML=le_html;
            this.calcul_des_positions_relatives();
            
            let lst1=document.getElementById( this.#id_div ).querySelectorAll( ''[data-poignee_pour_tri]'' );
            for(let i=0;i<lst1.length;i++){
             lst1[i].addEventListener( ''mousedown'' , this.#souris_bas.bind( this ) , false );
             lst1[i].addEventListener( ''touchstart'' , this.#doigt_bas.bind( this ) , false );
            }
            
            let lst2=document.getElementById( this.#id_div ).querySelectorAll( ''[data-replie]'' );
            for(let i=0;i<lst2.length;i++){
             lst2[i].addEventListener( ''mousedown'' , this.#souris_bas.bind( this ) , false );
            }
            
            if(this.#options.boutons_du_menu.length>0){
                for(let i=0;i<this.#options.boutons_du_menu.length;i++){
                    let id=''menu_'' + this.cle_aleatoire + ''_''+i;
                    //document.getElementById(id).addEventListener( ''mousedown'' , this.#options.boutons_du_menu[i].fonction.bind( this ) , false );
                    try{
                        document.getElementById(id).addEventListener( ''mousedown'' , (e)=>{
                         this.#options.boutons_du_menu[i].fonction(e,this);
                        }, false );
                    }catch(em){
                        debugger
                    }
                }
            }
            
            
        }else{
            return le_html;
        }

    }
    /*
      =============================================================================================================
    */
    makeid( length ){
        var result='''';
        var characters=''ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'';
        var charactersLength=characters.length;
        for( var i=0 ; i < length ; i++ ){
            result+=characters.charAt( Math.floor( Math.random() * charactersLength ) );
        }
        return result;
    }
    /*
      =============================================================================================================
    */
    #calcul_des_enfants( id_parent ){
        let nb=0;
        if(id_parent === 0){
            for( let i=0 ; i < this.arbre.length ; i++ ){
                this.arbre[i].contient_des_enfants=0;
            }
        }
        for( let i=0 ; i < this.arbre.length ; i++ ){
            if(this.arbre[i].id_interne_parent === id_parent){
                this.#calcul_des_enfants( this.arbre[i].id_interne );
                nb++;
            }
        }
        if(id_parent > 0 && nb > 0){
            for( let i=0 ; i < this.arbre.length ; i++ ){
                if(this.arbre[i].id_interne === id_parent){
                    this.arbre[i].contient_des_enfants=nb;
                    break;
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    construire_arbre_a_partir_de_ul_li( racine , id_interne_parent ){
        let lst=racine.childNodes;
        for( let i=0 ; i < lst.length ; i++ ){
            let elem=lst[i];
            if(elem.nodeName.toUpperCase() === ''LI'' || elem.nodeName.toUpperCase() === ''UL''){
                if(elem.nodeName.toUpperCase() === ''LI''){
                    let id_interne=this.arbre.length + 1;
                    let les_attributs={};
                    for(let a in elem.attributes){
                        if( typeof elem.attributes[a] === ''object''){
                            les_attributs[elem.attributes[a].name]=elem.attributes[a].value;
                        }
                    }
                    if(this.#options.arborescent === false){
                        id_interne_parent=0;
                    }
                    this.arbre.push( {
                            "id_interne" : id_interne ,
                            "id_interne_parent" : id_interne_parent ,
                            "replie" : 0 ,
                            "contient_des_enfants" : 0 ,
                            /* "nodeName" : elem.nodeName , */
                            "contenu" : '''' ,
                            "attributs" : les_attributs
                        } );
                    this.construire_arbre_a_partir_de_ul_li( elem , id_interne );
                }else if(elem.nodeName.toUpperCase() === ''UL''){
                    let replie=0;
                    for(let a in elem.attributes){
                        if( typeof elem.attributes[a] === ''object''){
                            if(elem.attributes[a].name === ''data-replie''){
                                this.arbre[this.arbre.length - 1].replie=1;
                                break;
                            }
                        }
                    }
                    this.construire_arbre_a_partir_de_ul_li( elem , id_interne_parent );
                }
            }else{
                if(elem.data){
                    let contenu=elem.data.trim();
                    if(contenu !== ''''){
                        /* console.log(''contenu=''+contenu); */
                        this.arbre[this.arbre.length - 1].contenu=contenu;
                    }
                }else{
                    let contenu=elem.outerHTML;
                    /* console.log(''contenu=''+contenu); */
                    this.arbre[this.arbre.length - 1].contenu=contenu;
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #traite_options(options){
        if(options.hasOwnProperty( ''hauteur_max_en_vh'' )){
            if(options.hauteur_max_en_vh <= 80 && options.hauteur_max_en_vh >= 20){
                this.#options.hauteur_max_en_vh=options.hauteur_max_en_vh;
            }
        }
        if(options.hasOwnProperty( ''decallage_entre_niveaux_en_px'' )){
            if(options.decallage_entre_niveaux_en_px <= 30 && options.decallage_entre_niveaux_en_px >= 5){
                this.#options.decallage_entre_niveaux_en_px=options.decallage_entre_niveaux_en_px;
            }
        }

        if(options.hasOwnProperty( ''largeur_max'' )){
            this.#options.largeur_max=options.largeur_max;
        }
        
        if(options.hasOwnProperty( ''largeur_min'' )){
            this.#options.largeur_min=options.largeur_min;
        }
        
        if(options.hasOwnProperty( ''afficher_le_bouton_supprimer'' )){
            if(options.afficher_le_bouton_supprimer === true){
                this.#options.afficher_le_bouton_supprimer=options.afficher_le_bouton_supprimer;
            }
        }
        if(options.hasOwnProperty( ''boutons_du_menu'' )){
            if(Array.isArray(options.boutons_du_menu) === true){
                this.#options.boutons_du_menu=options.boutons_du_menu;
            }
        }
        if(options.hasOwnProperty( ''triable'' )){
            if(options.triable === false){
                this.#options.triable=options.triable;
            }
        }
        if(options.hasOwnProperty( ''fonction_appelee_apres_action'' ) && options.fonction_appelee_apres_action !== null){
            if( typeof options.fonction_appelee_apres_action === ''function''){
                this.#options.fonction_appelee_apres_action=options.fonction_appelee_apres_action;
            }
        }
        if(options.hasOwnProperty( ''arborescent'' )){
            if(options.arborescent === false){
                this.#options.arborescent=options.arborescent;
            }
        }
        if(options.hasOwnProperty( ''class_du_bouton_deplacer'' )){
            this.#options.class_du_bouton_deplacer=options.class_du_bouton_deplacer;
        }
        if(options.hasOwnProperty( ''class_du_bouton_menu'' )){
            this.#options.class_du_bouton_menu=options.class_du_bouton_menu;
        }
        
        if(options.hasOwnProperty( ''border_zone_principale'' )){
            this.#options.border_zone_principale=options.border_zone_principale;
        }
        if(options.hasOwnProperty( ''hauteur_separateur_en_px'' )){
            if(options.hauteur_separateur_en_px <= 30 && options.hauteur_separateur_en_px >= 10){
                this.#options.hauteur_separateur_en_px=options.hauteur_separateur_en_px;
            }
        }
        if(options.hasOwnProperty( ''border_separateur'' )){
            this.#options.border_separateur=options.border_separateur;
        }
        if(options.hasOwnProperty( ''border_bloc'' )){
            this.#options.border_bloc=options.border_bloc;
        }
        if(options.hasOwnProperty( ''box_shadow'' )){
            this.#options.box_shadow=options.box_shadow;
        }
        if(options.hasOwnProperty( ''background_color'' )){
            this.#options.background_color=options.background_color;
        }
    }
    
}','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','11'),
('356','1','c_autorisations1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9'),
('357','1','c_menus1.php',NULL,NULL,NULL,'0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','9');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_dossiers
  ===============================
*/

INSERT INTO tbl_dossiers (chi_id_dossier,chx_projet_dossier,chp_nom_dossier,chx_parent_dossier,che_contient_genere_dossier,che__nur_dossier,chp__dtm_dossier,chp__dtc_dossier) VALUES
('1','1','',NULL,'0','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('2','1','__serveur','1','0','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('3','1','_bdd_sqlite','2','1','2000-01-01 00:00:00','2000-01-01 00:00:00','1'),
('4','2',NULL,NULL,'0','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('6','1','_sqls','2','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1'),
('7','1','__client','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('8','1','test','3','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('9','1','_php_inc','2','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('10','1','_js','7','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('11','1','bibliotheques_externes','10','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('12','1','socket_deno','2','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_bdds
  ===============================
*/

INSERT INTO tbl_bdds (chi_id_basedd,chx_projet_id_basedd,chp_commentaire_basedd,chp_rev_travail_basedd,chp_fournisseur_basedd,chx_dossier_id_basedd,che__nur_basedd,chp__dtm_basedd,chp__dtc_basedd) VALUES
('1','1',NULL,'meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''utf8mb4''),
   collate(''utf8mb4_unicode_ci''),
   transform_base_sur_svg(translate(11.5,12.5))
),
créer_table(
   nom_de_la_table(''tbl_utilisateurs''),
   meta(
      nom_de_la_table(''tbl_utilisateurs''),
      table(''tbl_utilisateurs''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''liste des utilisateurs''),
      nom_court_de_la_table(''un utilisateur''),
      nom_bref_de_la_table(''utilisateurs''),
      transform_table_sur_svg(translate(565.5,455.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_utilisateur''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_utilisateur''),
            nom_long_du_champ(''à faire chi_id_utilisateur''),
            nom_court_du_champ(''à faire chi_id_utilisateur''),
            nom_bref_du_champ(''à faire chi_id_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_de_connexion_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_de_connexion_utilisateur''),
            nom_long_du_champ(''à faire chp_nom_de_connexion_utilisateur''),
            nom_court_du_champ(''à faire chp_nom_de_connexion_utilisateur''),
            nom_bref_du_champ(''à faire chp_nom_de_connexion_utilisateur''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_mot_de_passe_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(256),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_mot_de_passe_utilisateur''),
            nom_long_du_champ(''à faire chp_mot_de_passe_utilisateur''),
            nom_court_du_champ(''à faire chp_mot_de_passe_utilisateur''),
            nom_bref_du_champ(''à faire chp_mot_de_passe_utilisateur''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(256)
         )
      ),
      champ(
         nom_du_champ(''chp_parametres_utilisateur''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_parametres_utilisateur''),
            nom_long_du_champ(''à faire chp_parametres_utilisateur''),
            nom_court_du_champ(''à faire chp_parametres_utilisateur''),
            nom_bref_du_champ(''à faire chp_parametres_utilisateur''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chi_compteur1_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_compteur1_utilisateur''),
            nom_long_du_champ(''à faire chi_compteur1_utilisateur''),
            nom_court_du_champ(''à faire chi_compteur1_utilisateur''),
            nom_bref_du_champ(''à faire chi_compteur1_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chi_compteur_socket1_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_compteur_socket1_utilisateur''),
            nom_long_du_champ(''à faire chi_compteur_socket1_utilisateur''),
            nom_court_du_champ(''à faire chi_compteur_socket1_utilisateur''),
            nom_bref_du_champ(''à faire chi_compteur_socket1_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che__nur_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_utilisateur''),
            nom_long_du_champ(''à faire chi__nut_utilisateur''),
            nom_court_du_champ(''à faire chi__nut_utilisateur''),
            nom_bref_du_champ(''à faire chi__nut_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ(''chp__dtm_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtm_utilisateur''),
            nom_long_du_champ(''à faire chp__dtm_utilisateur''),
            nom_court_du_champ(''à faire chp__dtm_utilisateur''),
            nom_bref_du_champ(''à faire chp__dtm_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_modification(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chp__dtc_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtc_utilisateur''),
            nom_long_du_champ(''à faire chp__dtc_utilisateur''),
            nom_court_du_champ(''à faire chp__dtc_utilisateur''),
            nom_bref_du_champ(''à faire chp__dtc_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_creation(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chx_acces_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_acces,chi_id_acces),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(2),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_acces_utilisateur''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_utilisateurs''),
   nom_de_l_index(''idx_nom_unique_utilisateurs''),
   meta(nom_de_l_index(idx_nom_unique_utilisateurs),genre_meta(index_de_table),message(''Ce nom d\''utilisateur existe déjà'')),
   champs(''chp_nom_de_connexion_utilisateur''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_projets''),
   meta(
      nom_de_la_table(''tbl_projets''),
      table(''tbl_projets''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''''),
      nom_court_de_la_table(''''),
      nom_bref_de_la_table(''''),
      transform_table_sur_svg(translate(272.5,9.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_projet''),
         espece_du_champ(INTEGER),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_projet''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_projet''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_projet''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_projet''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_projet''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che__nur_projet''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_projet''),
            nom_long_du_champ(''à faire chi__nut_projet''),
            nom_court_du_champ(''à faire chi__nut_projet''),
            nom_bref_du_champ(''à faire chi__nut_projet''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ(''chp__dtm_projet''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtm_projet''),
            nom_long_du_champ(''à faire chp__dtm_projet''),
            nom_court_du_champ(''à faire chp__dtm_projet''),
            nom_bref_du_champ(''à faire chp__dtm_projet''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_modification(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chp__dtc_projet''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtc_projet''),
            nom_long_du_champ(''à faire chp__dtc_projet''),
            nom_court_du_champ(''à faire chp__dtc_projet''),
            nom_bref_du_champ(''à faire chp__dtc_projet''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_creation(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_requetes_projet''),
         espece_du_champ(INTEGER),
         references(tbl_dossiers,chi_id_dossier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_requetes_projet''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_menus_projet''),
         espece_du_champ(INTEGER),
         references(tbl_dossiers,chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_menus_projet''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_projets''),
   nom_de_l_index(''idx_nom_unique_projets''),
   meta(nom_de_l_index(idx_nom_unique_projets),genre_meta(index_de_table),message(''ce projet existe déjà'')),
   champs(''chp_nom_projet''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_requetes''),
   meta(
      nom_de_la_table(''tbl_requetes''),
      table(''tbl_requetes''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''AFR tbl_requetes''),
      nom_court_de_la_table(''AFR tbl_requetes''),
      nom_bref_de_la_table(''AFR tbl_requetes''),
      transform_table_sur_svg(translate(13.5,29.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_requete''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_projet_requete''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_projets,chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_projet_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_enfant_droite(1),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ(''chp_type_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''select''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_type_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''cht_rev_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_sql_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_sql_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_php_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_php_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(0),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_matrice_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_matrice_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che__nur_requete''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ(''chp__dtm_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtm_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chd),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_modification(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chp__dtc_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtc_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chd),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_creation(1),
            longueur_du_champ(23)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_revs''),
   meta(
      nom_de_la_table(''tbl_revs''),
      table(''tbl_revs''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''à faire tbl_revs''),
      nom_court_de_la_table(''à faire tbl_revs''),
      nom_bref_de_la_table(''à faire tbl_revs''),
      transform_table_sur_svg(translate(813.5,17.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_rev''),
         espece_du_champ(INTEGER),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_rev''),
            nom_long_du_champ(''à faire chi_id_rev''),
            nom_court_du_champ(''à faire chi_id_rev''),
            nom_bref_du_champ(''à faire chi_id_rev''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_projet_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_projets,chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_projet_rev''),
            nom_long_du_champ(''à faire chx_cible_rev''),
            nom_court_du_champ(''à faire chx_cible_rev''),
            nom_bref_du_champ(''à faire chx_cible_rev''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_provenance_rev''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_provenance_rev''),
            nom_long_du_champ(''à faire chp_provenance_rev''),
            nom_court_du_champ(''à faire chp_provenance_rev''),
            nom_bref_du_champ(''à faire chp_provenance_rev''),
            typologie(cho),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_source_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_source_rev''),
            nom_long_du_champ(''à faire chx_source_rev''),
            nom_court_du_champ(''à faire chx_source_rev''),
            nom_bref_du_champ(''à faire chx_source_rev''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_id_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_id_rev''),
            nom_long_du_champ(''à faire chp_id_rev''),
            nom_court_du_champ(''à faire chp_id_rev''),
            nom_bref_du_champ(''à faire chp_id_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_valeur_rev''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_valeur_rev''),
            nom_long_du_champ(''à faire chp_valeur_rev''),
            nom_court_du_champ(''à faire chp_valeur_rev''),
            nom_bref_du_champ(''à faire chp_valeur_rev''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chp_type_rev''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(3),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_type_rev''),
            nom_long_du_champ(''à faire chp_type_rev''),
            nom_court_du_champ(''à faire chp_type_rev''),
            nom_bref_du_champ(''à faire chp_type_rev''),
            typologie(cho),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(3)
         )
      ),
      champ(
         nom_du_champ(''chp_niveau_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_niveau_rev''),
            nom_long_du_champ(''à faire chp_niveau_rev''),
            nom_court_du_champ(''à faire chp_niveau_rev''),
            nom_bref_du_champ(''à faire chp_niveau_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_quotee_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_quotee_rev''),
            nom_long_du_champ(''à faire chp_quotee_rev''),
            nom_court_du_champ(''à faire chp_quotee_rev''),
            nom_bref_du_champ(''à faire chp_quotee_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_pos_premier_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_premier_rev''),
            nom_long_du_champ(''à faire chp_pos_premier_rev''),
            nom_court_du_champ(''à faire chp_pos_premier_rev''),
            nom_bref_du_champ(''à faire chp_pos_premier_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_pos_dernier_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_dernier_rev''),
            nom_long_du_champ(''à faire chp_pos_dernier_rev''),
            nom_court_du_champ(''à faire chp_pos_dernier_rev''),
            nom_bref_du_champ(''à faire chp_pos_dernier_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_parent_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_parent_rev''),
            nom_long_du_champ(''à faire chp_parent_rev''),
            nom_court_du_champ(''à faire chp_parent_rev''),
            nom_bref_du_champ(''à faire chp_parent_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nbr_enfants_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nbr_enfants_rev''),
            nom_long_du_champ(''à faire chp_nbr_enfants_rev''),
            nom_court_du_champ(''à faire chp_nbr_enfants_rev''),
            nom_bref_du_champ(''à faire chp_nbr_enfants_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_num_enfant_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_num_enfant_rev''),
            nom_long_du_champ(''à faire chp_num_enfant_rev''),
            nom_court_du_champ(''à faire chp_num_enfant_rev''),
            nom_bref_du_champ(''à faire chp_num_enfant_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_profondeur_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_profondeur_rev''),
            nom_long_du_champ(''à faire chp_profondeur_rev''),
            nom_court_du_champ(''à faire chp_profondeur_rev''),
            nom_bref_du_champ(''à faire chp_profondeur_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_pos_ouver_parenthese_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_ouver_parenthese_rev''),
            nom_long_du_champ(''à faire chp_pos_ouver_parenthese_rev''),
            nom_court_du_champ(''à faire chp_pos_ouver_parenthese_rev''),
            nom_bref_du_champ(''à faire chp_pos_ouver_parenthese_rev''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_enfant_suivant_rev''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_enfant_suivant_rev''),
            nom_long_du_champ(''AFR''),
            nom_court_du_champ(''AFR''),
            nom_bref_du_champ(''AFR''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_commentaire_rev''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_commentaire_rev''),
            nom_long_du_champ(''à faire chp_commentaire_rev''),
            nom_court_du_champ(''à faire chp_commentaire_rev''),
            nom_bref_du_champ(''à faire chp_commentaire_rev''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_revs''),
   nom_de_l_index(''idx_ligne_rev''),
   meta(nom_de_l_index(idx_ligne_rev),genre_meta(index_de_table),message('''')),
   champs(''chx_projet_rev'',''chp_provenance_rev'',''chx_source_rev'',''chp_id_rev''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_sources''),
   meta(
      nom_de_la_table(''tbl_sources''),
      table(''tbl_sources''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''''),
      nom_court_de_la_table(''''),
      nom_bref_de_la_table(''''),
      transform_table_sur_svg(translate(606.5,75.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_source''),
         espece_du_champ(INTEGER),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_projet_id_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_projets,chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_projet_id_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_source''),
         espece_du_champ(TEXT),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_source''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(0),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_rev_source''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_genere_source''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_genere_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che_binaire_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_binaire_source''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che__nur_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_source''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ(''chp__dtm_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtm_source''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chd),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_modification(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chp__dtc_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtc_source''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chd),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_creation(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_id_source''),
         espece_du_champ(INTEGER),
         references(tbl_dossiers,chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_id_source''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_sources''),
   nom_de_l_index(''idx_source''),
   meta(nom_de_l_index(idx_source),genre_meta(index_de_table),message('''')),
   champs(''chx_dossier_id_source'',''chp_nom_source''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_dossiers''),
   meta(
      nom_de_la_table(''tbl_dossiers''),
      table(''tbl_dossiers''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''''),
      nom_court_de_la_table(''''),
      nom_bref_de_la_table(''''),
      transform_table_sur_svg(translate(271.5,153.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_dossier''),
         espece_du_champ(INTEGER),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_dossier''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_projet_dossier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_projets,chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_projet_dossier''),
            nom_long_du_champ(''à faire chx_projet_dossier''),
            nom_court_du_champ(''à faire chx_projet_dossier''),
            nom_bref_du_champ(''à faire chx_projet_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_enfant_droite(1)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_dossier''),
         espece_du_champ(CHARACTER),
         longueur_du_champ(64),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_dossier''),
            nom_long_du_champ(''à faire chp_nom_dossier''),
            nom_court_du_champ(''à faire chp_nom_dossier''),
            nom_bref_du_champ(''à faire chp_nom_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(CHARACTER),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_dossier''),
         espece_du_champ(INTEGER),
         references(tbl_dossiers,chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_dossier''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ(''che_contient_genere_dossier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_contient_genere_dossier''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che__nur_dossier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_dossier''),
            nom_long_du_champ(''à faire chi__nut_dossier''),
            nom_court_du_champ(''à faire chi__nut_dossier''),
            nom_bref_du_champ(''à faire chi__nut_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ(''chp__dtm_dossier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtm_dossier''),
            nom_long_du_champ(''à faire chp__dtm_dossier''),
            nom_court_du_champ(''à faire chp__dtm_dossier''),
            nom_bref_du_champ(''à faire chp__dtm_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_modification(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chp__dtc_dossier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtc_dossier''),
            nom_long_du_champ(''à faire chp__dtc_dossier''),
            nom_court_du_champ(''à faire chp__dtc_dossier''),
            nom_bref_du_champ(''à faire chp__dtc_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_creation(1),
            longueur_du_champ(23)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_dossiers''),
   nom_de_l_index(''idx_projet_et_nom_dossiers''),
   meta(nom_de_l_index(idx_projet_et_nom_dossiers),genre_meta(index_de_table),message(''Ce dossier existe déjà'')),
   champs(''chx_projet_dossier'',''chp_nom_dossier'',''chx_parent_dossier''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_bdds''),
   meta(
      nom_de_la_table(''tbl_bdds''),
      table(''tbl_bdds''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''''),
      nom_court_de_la_table(''''),
      nom_bref_de_la_table(''''),
      transform_table_sur_svg(translate(600.5,268.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_basedd''),
         espece_du_champ(INTEGER),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_basedd''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_projet_id_basedd''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_projets,chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_projet_id_basedd''),
            nom_long_du_champ(''à faire chx_projet_id_basedd''),
            nom_court_du_champ(''à faire chx_projet_id_basedd''),
            nom_bref_du_champ(''à faire chx_projet_id_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_commentaire_basedd''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_commentaire_basedd''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chp_rev_travail_basedd''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_rev_travail_basedd''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chp_fournisseur_basedd''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''sqlite''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_fournisseur_basedd''),
            nom_long_du_champ(''à faire chp_fournisseur_basedd''),
            nom_court_du_champ(''à faire chp_fournisseur_basedd''),
            nom_bref_du_champ(''à faire chp_fournisseur_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_id_basedd''),
         espece_du_champ(INTEGER),
         references(tbl_dossiers,chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_id_basedd''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che__nur_basedd''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_basedd''),
            nom_long_du_champ(''à faire chi__nut_basedd''),
            nom_court_du_champ(''à faire chi__nut_basedd''),
            nom_bref_du_champ(''à faire chi__nut_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ(''chp__dtm_basedd''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtm_basedd''),
            nom_long_du_champ(''à faire chp__dtm_basedd''),
            nom_court_du_champ(''à faire chp__dtm_basedd''),
            nom_bref_du_champ(''à faire chp__dtm_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_modification(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chp__dtc_basedd''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtc_basedd''),
            nom_long_du_champ(''à faire chp__dtc_basedd''),
            nom_court_du_champ(''à faire chp__dtc_basedd''),
            nom_bref_du_champ(''à faire chp__dtc_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_creation(1),
            longueur_du_champ(23)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_groupes''),
   meta(
      nom_de_la_table(''tbl_groupes''),
      table(''tbl_groupes''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''A faire  tbl_groupes''),
      nom_court_de_la_table(''A faire tbl_groupes''),
      nom_bref_de_la_table(''A faire tbl_groupes''),
      transform_table_sur_svg(translate(10.5,205.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_groupe''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_groupe''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_groupe''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_groupe''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_groupe''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_groupes,chi_id_groupe),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_groupe''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_groupes''),
   nom_de_l_index(''idx_nom_groupe''),
   meta(nom_de_l_index(idx_nom_groupe),genre_meta(index_de_table),message(''ce nom de groupe existe'')),
   champs(''chp_nom_groupe''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_metiers''),
   meta(
      nom_de_la_table(''tbl_metiers''),
      table(''tbl_metiers''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''A faire  tbl_metiers''),
      nom_court_de_la_table(''A faire tbl_metiers''),
      nom_bref_de_la_table(''A faire tbl_metiers''),
      transform_table_sur_svg(translate(10.5,313.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_metier''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_metier''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_metier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_metier''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_metier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_metiers,chi_id_metier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_metier''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_acces''),
   meta(
      nom_de_la_table(''tbl_acces''),
      table(''tbl_acces''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''A faire  tbl_acces''),
      nom_court_de_la_table(''A faire tbl_acces''),
      nom_bref_de_la_table(''A faire tbl_acces''),
      transform_table_sur_svg(translate(188.5,310.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_acces''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_acces''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_acces''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_acces''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_groupe_acces''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_groupes,chi_id_groupe),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_groupe_acces''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_metier_acces''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_metiers,chi_id_metier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_metier_acces''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_parametres_acces''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_parametres_acces''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_taches''),
   meta(
      nom_de_la_table(''tbl_taches''),
      table(''tbl_taches''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''''),
      nom_court_de_la_table(''''),
      nom_bref_de_la_table(''''),
      transform_table_sur_svg(translate(252.5,599.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_tache''),
         espece_du_champ(INTEGER),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_tache''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_utilisateur_tache''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_utilisateurs,chi_id_utilisateur),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_utilisateur_tache''),
            nom_long_du_champ(''à faire chx_utilisateur_tache''),
            nom_court_du_champ(''à faire chx_utilisateur_tache''),
            nom_bref_du_champ(''à faire chx_utilisateur_tache''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_enfant_droite(1),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ(''chp_texte_tache''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_texte_tache''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chp_priorite_tache''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_priorite_tache''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che__nur_tache''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_tache''),
            nom_long_du_champ(''à faire chi__nut_tache''),
            nom_court_du_champ(''à faire chi__nut_tache''),
            nom_bref_du_champ(''à faire chi__nut_tache''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ(''chp__dtm_tache''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtm_tache''),
            nom_long_du_champ(''à faire chp__dtm_tache''),
            nom_court_du_champ(''à faire chp__dtm_tache''),
            nom_bref_du_champ(''à faire chp__dtm_tache''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            champ_date_modification(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chp__dtc_tache''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp__dtc_tache''),
            nom_long_du_champ(''à faire chp__dtc_tache''),
            nom_court_du_champ(''à faire chp__dtc_tache''),
            nom_bref_du_champ(''à faire chp__dtc_tache''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            champ_date_creation(1),
            longueur_du_champ(23)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_taches''),
   nom_de_l_index(''idx_texte_unique_taches''),
   meta(nom_de_l_index(idx_texte_unique_taches),genre_meta(index_de_table),message(''Cete tache existe déjà'')),
   champs(''chp_texte_tache''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_genres''),
   meta(
      nom_de_la_table(''tbl_genres''),
      table(''tbl_genres''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''A faire  tbl_genres''),
      nom_court_de_la_table(''A faire tbl_genres''),
      nom_bref_de_la_table(''A faire tbl_genres''),
      transform_table_sur_svg(translate(829.5,485.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_genre''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_espece_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(32),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_espece_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(32)
         )
      ),
      champ(
         nom_du_champ(''che_longueur_genre''),
         espece_du_champ(INTEGER),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_longueur_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_primaire_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_primaire_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_progressif_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_progressif_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_obligatoire_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_obligatoire_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_liminaire_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_liminaire_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_mot_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_mot_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_autorisations''),
   meta(
      nom_de_la_table(''tbl_autorisations''),
      table(''tbl_autorisations''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''A faire  tbl_autorisations''),
      nom_court_de_la_table(''A faire tbl_autorisations''),
      nom_bref_de_la_table(''A faire tbl_autorisations''),
      transform_table_sur_svg(translate(403.5,303.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_autorisation''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_autorisation''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_acces_autorisation''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_acces,chi_id_acces),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_acces_autorisation''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_source_autorisation''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_sources,chi_id_source),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_source_autorisation''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_enfant_droite(1),
            refe_parent_gauche(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_autorisations''),
   nom_de_l_index(''idx_unique1''),
   meta(nom_de_l_index(idx_unique1),genre_meta(index_de_table),message('''')),
   champs(''chx_acces_autorisation'',''chx_source_autorisation''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_menus''),
   meta(
      nom_de_la_table(''tbl_menus''),
      table(''tbl_menus''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''A faire  tbl_menus''),
      nom_court_de_la_table(''A faire tbl_menus''),
      nom_bref_de_la_table(''A faire tbl_menus''),
      transform_table_sur_svg(translate(372.5,464.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_menu''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_libelle_menu''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_libelle_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_titre_menu''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_titre_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_autorisation_menu''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_autorisations,chi_id_autorisation),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_autorisation_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ(''chp_methode_menu''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_methode_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''cht_initialisation_menu''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_initialisation_menu''),
            espece_du_champ(TEXT),
            typologie(cht),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            afficher_champ_dans_svg(1),
            champ_date_modification(0),
            champ_date_creation(0),
            champ_numero_de_revision(0),
            refe_enfant_droite(0),
            refe_parent_gauche(0)
         )
      ),
      champ(
         nom_du_champ(''cht_complements_menu''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_complements_menu''),
            espece_du_champ(TEXT),
            typologie(cht),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            afficher_champ_dans_svg(1),
            champ_date_modification(0),
            champ_date_creation(0),
            champ_numero_de_revision(0),
            refe_enfant_droite(0),
            refe_parent_gauche(0)
         )
      )
   )
)','sqlite','3','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('2','1',NULL,'meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''utf8mb4''),
   collate(''utf8mb4_unicode_ci''),
   transform_base_sur_svg(translate(14.5,25.5))
),
créer_table(
   nom_de_la_table(''tbl_zzzs''),
   meta(
      nom_de_la_table(''tbl_zzzs''),
      table(''tbl_zzzs''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''AFR tbl_xxxx''),
      nom_court_de_la_table(''AFR tbl_xxxx''),
      nom_bref_de_la_table(''AFR tbl_xxxx''),
      transform_table_sur_svg(translate(64.5,47.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_zzz''),
         type(''integer''),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_zzz''),
            champ(''chi_id_zzz''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_yyy''),
         type(''VARCHAR(64)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_yyy''),
            champ(''chp_nom_yyy''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chx_moi_zzz''),
         type(''INTEGER''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_moi_zzz''),
            champ(''chx_moi_zzz''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_zzzs''),
   nom_de_l_index(''idx_0''),
   meta(nom_de_l_index(idx_3),genre_meta(index_de_table),message('''')),
   champs(''chi_id_zzz''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_yyys''),
   meta(
      nom_de_la_table(''tbl_yyys''),
      table(''tbl_yyys''),
      genre_meta(table_de_base),
      nom_long_de_la_table(''AFR tbl_yyys''),
      nom_court_de_la_table(''AFR tbl_yyys''),
      nom_bref_de_la_table(''AFR tbl_yyys''),
      transform_table_sur_svg(translate(300.5,101.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_yyy''),
         type(''INTEGER''),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_yyy''),
            champ(''chi_id_yyy''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chi_toto_yyy''),
         type(''INTEGER''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_toto_yyy''),
            champ(''chi_toto_yyy''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chx_id_zzz_yyyyyyyyy''),
         type(''INTEGER''),
         non_nulle(1),
         references(tbl_zzzs,chi_id_zzz),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_id_zzz_yyyyyyyyy''),
            champ(''chx_id_zzz_yyyyyyyyy''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_yyys''),
   nom_de_l_index(''idx_1''),
   meta(nom_de_l_index(idx_1),genre_meta(index_de_table),message('''')),
   champs(''chi_id_yyy''),
   unique()
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_yyys''),
   nom_de_l_index(''idx_2''),
   meta(nom_de_l_index(idx_2),genre_meta(index_de_table),message('''')),
   champs(''chi_toto_yyy'')
)','sqlite','8','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_groupes
  ===============================
*/

INSERT INTO tbl_groupes (chi_id_groupe,chp_nom_groupe,chx_parent_groupe) VALUES
('1','racine','1'),
('2','anonymes','2');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_metiers
  ===============================
*/

INSERT INTO tbl_metiers (chi_id_metier,chp_nom_metier,chx_parent_metier) VALUES
('1','webmaster','1'),
('2','[***non défini***]','2');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_acces
  ===============================
*/

INSERT INTO tbl_acces (chi_id_acces,chp_nom_acces,chx_groupe_acces,chx_metier_acces,cht_parametres_acces) VALUES
('1','tout','1','1','{"le_html_ul_li_du_menu":"<li data-chi_id_source=\"61\" data-chp_nom_source=\"c_taches1.php\" data-chp_methode_menu=\"page_liste_des_taches1\" data-chi_id_menu=\"1\" data-chp_titre_menu=\"Liste des t\u00e2ches\" data-cht_initialisation_menu=\"T0_chp_priorite_tache2(99)\" data-cht_complements_menu=\"null\">t\u00e2ches<\/li><li data-liste_des_menus=\"1\">outils<ul><li data-chi_id_source=\"235\" data-chp_nom_source=\"c_rev_mat1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"2\" data-chp_titre_menu=\"convertion de rev vers matrice\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_rev1))))\">matrice<\/li><li data-chi_id_source=\"234\" data-chp_nom_source=\"c_rev_js1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"3\" data-chp_titre_menu=\"convertion de javascript \" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"maj_interface2(\n   modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_js_rev1)))\n)\">js<\/li><li data-chi_id_source=\"233\" data-chp_nom_source=\"c_rev_html1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"21\" data-chp_titre_menu=\"html\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"maj_interface2(\n   modifier(id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_html_rev1)))\n)\">html<\/li><li data-chi_id_source=\"236\" data-chp_nom_source=\"c_rev_php1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"4\" data-chp_titre_menu=\"convertion de php\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">php<\/li><li data-chi_id_source=\"237\" data-chp_nom_source=\"c_rev_sql1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"5\" data-chp_titre_menu=\"convertion de sql\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">sql<\/li><li data-chi_id_source=\"232\" data-chp_nom_source=\"c_rev_css1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"6\" data-chp_titre_menu=\"convertion de css\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">css<\/li><li data-chi_id_source=\"238\" data-chp_nom_source=\"c_rev_texte1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"7\" data-chp_titre_menu=\"convertion de textes\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">txt<\/li><\/ul><\/li><li data-chi_id_source=\"230\" data-chp_nom_source=\"c_projets1.php\" data-chp_methode_menu=\"page_projets_liste1\" data-chi_id_menu=\"8\" data-chp_titre_menu=\"liste des projets\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">projets<\/li><li data-chi_id_source=\"225\" data-chp_nom_source=\"c_dossiers1.php\" data-chp_methode_menu=\"page_dossiers_liste1\" data-chi_id_menu=\"9\" data-chp_titre_menu=\"liste des dossiers et des fichiers\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">fido<\/li><li data-chi_id_source=\"241\" data-chp_nom_source=\"c_sources1.php\" data-chp_methode_menu=\"page_liste_des_sources1\" data-chi_id_menu=\"10\" data-chp_titre_menu=\"liste des sources des programmes\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">sources<\/li><li data-chi_id_source=\"353\" data-chp_nom_source=\"c_bases1.php\" data-chp_methode_menu=\"page_liste_des_bases1\" data-chi_id_menu=\"11\" data-chp_titre_menu=\"liste des bases\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">bases<\/li><li data-chi_id_source=\"231\" data-chp_nom_source=\"c_requetes1.php\" data-chp_methode_menu=\"page_liste_des_requetes1\" data-chi_id_menu=\"12\" data-chp_titre_menu=\"liste des requ\u00eates sur les bases\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">requ\u00eates<\/li><li data-chi_id_source=\"240\" data-chp_nom_source=\"c_revs1.php\" data-chp_methode_menu=\"page_liste_des_revs1\" data-chi_id_menu=\"13\" data-chp_titre_menu=\"liste des revs\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">(\ud83d\ude0a)<\/li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"56\" data-chp_nom_source=\"c_groupes1.php\" data-chp_methode_menu=\"page_liste_des_groupes1\" data-chi_id_menu=\"14\" data-chp_titre_menu=\"liste des groupes\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">groupes<\/li><li data-chi_id_source=\"58\" data-chp_nom_source=\"c_metiers1.php\" data-chp_methode_menu=\"page_liste_des_metiers1\" data-chi_id_menu=\"15\" data-chp_titre_menu=\"liste des m\u00e9tiers\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">m\u00e9tiers<\/li><li data-chi_id_source=\"50\" data-chp_nom_source=\"c_acces1.php\" data-chp_methode_menu=\"page_liste_des_acces1\" data-chi_id_menu=\"16\" data-chp_titre_menu=\"liste des acc\u00e8s\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">acc\u00e8s<\/li><li data-chi_id_source=\"62\" data-chp_nom_source=\"c_utilisateurs1.php\" data-chp_methode_menu=\"page_liste_des_utilisateurs1\" data-chi_id_menu=\"17\" data-chp_titre_menu=\"liste des utilisateurs\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">utilisateurs<\/li><li data-chi_id_source=\"356\" data-chp_nom_source=\"c_autorisations1.php\" data-chp_methode_menu=\"page_liste_des_autorisations1\" data-chi_id_menu=\"18\" data-chp_titre_menu=\"liste des autorisations\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">autorisations<\/li><li data-chi_id_source=\"357\" data-chp_nom_source=\"c_menus1.php\" data-chp_methode_menu=\"page_liste_des_menus1\" data-chi_id_menu=\"19\" data-chp_titre_menu=\"liste des menus\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\">menus<\/li><\/ul><\/li><li data-chi_id_source=\"59\" data-chp_nom_source=\"c_profile1.php\" data-chp_methode_menu=\"recupere_la_page_des_coordonnees\" data-chi_id_menu=\"20\" data-chp_titre_menu=\"mon profile\" data-cht_initialisation_menu=\"null\" data-cht_complements_menu=\"null\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"-9 -7  20 21\">\n    <g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:1;\">\n        <circle cx=\"0\" cy=\"0\" r=\"6\"><\/circle>\n        <path d=\" M -8 11 C -6 6 6 6 8 11 \"><\/path>\n        <circle cx=\"-2\" cy=\"-1\" r=\"1\"><\/circle>\n        <circle cx=\"2\" cy=\"-1\" r=\"1\"><\/circle>\n        <path d=\"M -2 2 C -3 4 3 4 2 2 \"><\/path>\n        <path d=\"M 0 0 V 2 \"><\/path>\n        <path d=\"M -3 -1   H -6    \"><\/path>\n        <path d=\"M 3 -1   H 6    \"><\/path>\n        <path d=\"M -1 -1 c 0 -1 2 -1 2 0 \"><\/path>\n    <\/g>\n<\/svg><\/li>","le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"t\u00e2ches\",\"attributs\":{\"data-chi_id_source\":\"61\",\"data-chp_nom_source\":\"c_taches1.php\",\"data-chp_methode_menu\":\"page_liste_des_taches1\",\"data-chi_id_menu\":\"1\",\"data-chp_titre_menu\":\"Liste des t\u00e2ches\",\"data-cht_initialisation_menu\":\"T0_chp_priorite_tache2(99)\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":22,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":7,\"contenu\":\"outils\",\"attributs\":{\"data-liste_des_menus\":1}},{\"id_interne\":2,\"id_interne_parent\":22,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"matrice\",\"attributs\":{\"data-chi_id_source\":\"235\",\"data-chp_nom_source\":\"c_rev_mat1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"2\",\"data-chp_titre_menu\":\"convertion de rev vers matrice\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_rev1))))\"}},{\"id_interne\":3,\"id_interne_parent\":22,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"js\",\"attributs\":{\"data-chi_id_source\":\"234\",\"data-chp_nom_source\":\"c_rev_js1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"3\",\"data-chp_titre_menu\":\"convertion de javascript \",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"maj_interface2(\\n   modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_js_rev1)))\\n)\"}},{\"id_interne\":21,\"id_interne_parent\":22,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"html\",\"attributs\":{\"data-chi_id_source\":\"233\",\"data-chp_nom_source\":\"c_rev_html1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"21\",\"data-chp_titre_menu\":\"html\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"maj_interface2(\\n   modifier(id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_html_rev1)))\\n)\"}},{\"id_interne\":4,\"id_interne_parent\":22,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"php\",\"attributs\":{\"data-chi_id_source\":\"236\",\"data-chp_nom_source\":\"c_rev_php1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"4\",\"data-chp_titre_menu\":\"convertion de php\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":5,\"id_interne_parent\":22,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sql\",\"attributs\":{\"data-chi_id_source\":\"237\",\"data-chp_nom_source\":\"c_rev_sql1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"5\",\"data-chp_titre_menu\":\"convertion de sql\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":6,\"id_interne_parent\":22,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"css\",\"attributs\":{\"data-chi_id_source\":\"232\",\"data-chp_nom_source\":\"c_rev_css1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"6\",\"data-chp_titre_menu\":\"convertion de css\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":7,\"id_interne_parent\":22,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"txt\",\"attributs\":{\"data-chi_id_source\":\"238\",\"data-chp_nom_source\":\"c_rev_texte1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"7\",\"data-chp_titre_menu\":\"convertion de textes\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":8,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"projets\",\"attributs\":{\"data-chi_id_source\":\"230\",\"data-chp_nom_source\":\"c_projets1.php\",\"data-chp_methode_menu\":\"page_projets_liste1\",\"data-chi_id_menu\":\"8\",\"data-chp_titre_menu\":\"liste des projets\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":9,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"fido\",\"attributs\":{\"data-chi_id_source\":\"225\",\"data-chp_nom_source\":\"c_dossiers1.php\",\"data-chp_methode_menu\":\"page_dossiers_liste1\",\"data-chi_id_menu\":\"9\",\"data-chp_titre_menu\":\"liste des dossiers et des fichiers\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":10,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"241\",\"data-chp_nom_source\":\"c_sources1.php\",\"data-chp_methode_menu\":\"page_liste_des_sources1\",\"data-chi_id_menu\":\"10\",\"data-chp_titre_menu\":\"liste des sources des programmes\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":11,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"bases\",\"attributs\":{\"data-chi_id_source\":\"353\",\"data-chp_nom_source\":\"c_bases1.php\",\"data-chp_methode_menu\":\"page_liste_des_bases1\",\"data-chi_id_menu\":\"11\",\"data-chp_titre_menu\":\"liste des bases\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":12,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"requ\u00eates\",\"attributs\":{\"data-chi_id_source\":\"231\",\"data-chp_nom_source\":\"c_requetes1.php\",\"data-chp_methode_menu\":\"page_liste_des_requetes1\",\"data-chi_id_menu\":\"12\",\"data-chp_titre_menu\":\"liste des requ\u00eates sur les bases\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":13,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"(\ud83d\ude0a)\",\"attributs\":{\"data-chi_id_source\":\"240\",\"data-chp_nom_source\":\"c_revs1.php\",\"data-chp_methode_menu\":\"page_liste_des_revs1\",\"data-chi_id_menu\":\"13\",\"data-chp_titre_menu\":\"liste des revs\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":23,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":6,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":1}},{\"id_interne\":14,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"56\",\"data-chp_nom_source\":\"c_groupes1.php\",\"data-chp_methode_menu\":\"page_liste_des_groupes1\",\"data-chi_id_menu\":\"14\",\"data-chp_titre_menu\":\"liste des groupes\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":15,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"m\u00e9tiers\",\"attributs\":{\"data-chi_id_source\":\"58\",\"data-chp_nom_source\":\"c_metiers1.php\",\"data-chp_methode_menu\":\"page_liste_des_metiers1\",\"data-chi_id_menu\":\"15\",\"data-chp_titre_menu\":\"liste des m\u00e9tiers\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":16,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"acc\u00e8s\",\"attributs\":{\"data-chi_id_source\":\"50\",\"data-chp_nom_source\":\"c_acces1.php\",\"data-chp_methode_menu\":\"page_liste_des_acces1\",\"data-chi_id_menu\":\"16\",\"data-chp_titre_menu\":\"liste des acc\u00e8s\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":17,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"62\",\"data-chp_nom_source\":\"c_utilisateurs1.php\",\"data-chp_methode_menu\":\"page_liste_des_utilisateurs1\",\"data-chi_id_menu\":\"17\",\"data-chp_titre_menu\":\"liste des utilisateurs\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":18,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"356\",\"data-chp_nom_source\":\"c_autorisations1.php\",\"data-chp_methode_menu\":\"page_liste_des_autorisations1\",\"data-chi_id_menu\":\"18\",\"data-chp_titre_menu\":\"liste des autorisations\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":19,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"357\",\"data-chp_nom_source\":\"c_menus1.php\",\"data-chp_methode_menu\":\"page_liste_des_menus1\",\"data-chi_id_menu\":\"19\",\"data-chp_titre_menu\":\"liste des menus\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}},{\"id_interne\":20,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg xmlns=\\\"http:\/\/www.w3.org\/2000\/svg\\\" viewBox=\\\"-9 -7  20 21\\\">\\n    <g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:1;\\\">\\n        <circle cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"6\\\"><\/circle>\\n        <path d=\\\" M -8 11 C -6 6 6 6 8 11 \\\"><\/path>\\n        <circle cx=\\\"-2\\\" cy=\\\"-1\\\" r=\\\"1\\\"><\/circle>\\n        <circle cx=\\\"2\\\" cy=\\\"-1\\\" r=\\\"1\\\"><\/circle>\\n        <path d=\\\"M -2 2 C -3 4 3 4 2 2 \\\"><\/path>\\n        <path d=\\\"M 0 0 V 2 \\\"><\/path>\\n        <path d=\\\"M -3 -1   H -6    \\\"><\/path>\\n        <path d=\\\"M 3 -1   H 6    \\\"><\/path>\\n        <path d=\\\"M -1 -1 c 0 -1 2 -1 2 0 \\\"><\/path>\\n    <\/g>\\n<\/svg>\",\"attributs\":{\"data-chi_id_source\":\"59\",\"data-chp_nom_source\":\"c_profile1.php\",\"data-chp_methode_menu\":\"recupere_la_page_des_coordonnees\",\"data-chi_id_menu\":\"20\",\"data-chp_titre_menu\":\"mon profile\",\"data-cht_initialisation_menu\":\"null\",\"data-cht_complements_menu\":\"null\"}}]"}'),
('2','[*** non connecté ***]','2','2',NULL);


/*
  ===============================
  DONNEES A INSERER POUR : tbl_taches
  ===============================
*/

INSERT INTO tbl_taches (chi_id_tache,chx_utilisateur_tache,chp_texte_tache,chp_priorite_tache,che__nur_tache,chp__dtm_tache,chp__dtc_tache) VALUES
('1','1','capturer les erreurs php','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('2','1','traiter le cookie initial quand il est incomplet','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('3','1','mettre un # dans l''url pour pouvoir charger la page initiale','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('4','1','cookies.php en objet','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('5','1','données bidon en cookie','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('6','1','404','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('7','1','worker','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('8','1','timer / indicateur socket','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('9','1','id en vv','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('10','1','fichiers et classes en c_','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('11','1','socket','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('12','1','limiter le nombre de messages sur l''interface','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('13','1','ne pas afficher le premier message ws ko','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('14','1','maj champ deverminage nouveau','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('15','1','recharger la page paramètres','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('16','1','déverminage en cookie','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('17','1','ctrl F5 après avoir cliqué sur un #','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('18','1','désactiver les boutons quand click','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('19','1','changer mes coordonnées','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('20','1','renommer les variables __x_statut ....','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('21','1','bdd todo','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('22','1','mettre le niveau de déverminage dans le php','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('23','1','dump de la base en local','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('24','1','essayer de modifier dynamiquement le css','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('25','1','synchroniser session php / webSochet','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('26','1','travaux en batch','9','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('27','1','gérer les versions js css etc','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('28','1','profils de css','50','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('29','1','astuces','10','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('30','1','CREATE UNIQUE INDEX texte_unique ON tbl_taches(chp_texte_tache);','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('31','1','sauvegarder la position dans la liste','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('33','1','sur mobile, ne pas faire de focus sur le premier champ','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('34','1','pas de webSocket sur ks.app','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('35','1','détecter mobile ( touch )','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('36','1','highlight des menus','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('37','1','lors de la première connexion, initialiser les tailles des css en fonction de la taille de l''écran','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('38','1','sur ipad, supprimer les double click pour agrandir

if( ecran_tactile===true && genre_safari===true && genre_crios === false)','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('39','1','supprimer le double click sur ios

//https://stackoverflow.com/a/42162450/3717718
','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('40','1','marges gauches et droites','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('41','1','se reconnecter au webso','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('42','1','ajouter le niveau de deboggage dans le websocket','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('43','1','déverminage serveur wso','50','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('44','1','Prévenir le ws quand on se déconnecte','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('45','1','coccinelle déverminage
<svg xmlns="http://www.w3.org/2000/svg" viewBox="13 11  82 84"><path d="M 18 85 L 23 82 L 21 73 L 27 67 M 30 40 L 25 40 L 21 49 L 16 49 M 34 35 L 25 30 L 23 24 M 44 19 L 39 14 M 59 19 L 64 14 M 69 35 L 78 30 L 80 24 M 73 40 L 78 40 L 82 49 L 87 49 M 76 68 L 82 73 L 80 82 L 85 85 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path><path d=" M 36 34 C 35 12 68 12 67 34 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:slategray;stroke-width:1;fill-opacity:1;"></path><path d=" M 36 33 C 30 38 25 48 25 56  C 25 68 33 87 52 87 c 15 0 26 -17 26 -30 C 78 47 73 39 67 33 c 0 1 -13 1 -15 1 C 49 34 36 34 36 33" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:red;stroke-width:1;fill-opacity:1;"></path><ellipse cx="44" cy="25" rx="2.5" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(30 44 25 )" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="57" cy="18" rx="2.5" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(1 40) rotate(-32 0 0)  " style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="36" cy="58" rx="5" ry="6.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="67" cy="58" rx="5" ry="6.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="41" cy="42" rx="2.5" ry="2.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;"></ellipse><ellipse cx="62" cy="42" rx="2.5" ry="2.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="40" cy="74" rx="3" ry="4.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(-40 40 74 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="57" cy="89" rx="3" ry="4.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(6 -15 ) rotate(30 57 89 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><path d=" M 51 35 V 86 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path></svg>','51','2','2025-07-31 11:57:22.993','2000-01-01 00:00:00'),
('46','1','http://localhost/frev/rev_1/__client/?a=1','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('47','1','page rev vers matrice','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('48','1','initialiser la zone rev avec le localstorage','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('49','1','mettre le rendu en js
NON trop compliqué, le garder en php','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('50','1','conv js','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('51','1','rev vers js','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('52','1','zone d''édition textarea','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('53','1','cookie socket','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('54','1','optimiser les temps de chargement','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('55','1','traiter les messages d''erreur','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('56','1','placer le curseur dans une textarea','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('57','1','conv html','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('58','1','conv php','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('59','1','conv php nikic','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('60','1','traiter les messages d''erreur de php','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('61','1','sql','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('62','1','css','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('63','1','projet','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('64','1','bouton retour à la liste','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('65','1','bug lien interne après changement de version','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('66','1','scroll horizontal sur menu haut','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('67','1','bases','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('68','1','autorisations

se connecter à 

http://localhost/frev/rev_1/__client/#c_rev_vers_mat1.page1(),indice_menu(50),maj_interface2(modifier(%20id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(''zones_sauvegard%C3%A9es'',''ls_rev1''))))

sans être connecté

#c_pages1.recupere_la_page_d_accueil()
#c_pages1.recupere_la_page_d_aide()
#c_pages1.recupere_la_page_de_connexion()','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('69','1','dossiers','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('70','1','activer / désactiver le bouton du menu','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('71','1','id parent de dossier avec <dialog>','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('72','1','chemin complet d''un dossier','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('73','1','vérifier qu''un dossier n''a pas d''enfants avant de le supprimer','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('74','1','transmettre les donnes_retournees aux sql 
et mettre un message d''erreur en pile','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('75','1','ne pas enregistrer un dossier sur lui même ou au dessus de lui même','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('76','1','bib php dans un autre répertoire','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('77','1','autocapitalize="off" sur les champs input','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('78','1','ne pas mettre plus de 1000 éléments dans un dossier','12','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('79','1','remettre le bouton paramètres quand on se déconnecte','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('80','1','table des bugs','14','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('81','1','faire une sauvegarde d''un fichier supprimé','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('82','1','supprimer une projet','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('83','1','ajouter les champs 
nut numero technique de modification
dtm date technique de modification
dtc date technique de création','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('84','1','renommer un dossier','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('85','1','quand on clique sur 🖐, mettre la zone en haut de l''écran','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('86','1','optimiser les tableaux des matrices et des caractères','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('87','1','gestion des dossiers pour les utilisateurs autres que 1','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('88','1','sortable pour svg','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('89','1','cliquer en dehors du "dialog" pour le fermer','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('90','1','dupliquer une table','15','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('91','1','remplacer cible par projet','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('92','1','quand on modifie le nom d''une table
alors modifier aussi le nom_de_la_table_pour_l_index dans l''index','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('93','1','corriger auto increment','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('94','1','ajouter le type du meta dans les sql','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('96','1','reprendre les commentaires meta dans sql','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('97','1','mettre les valeurs
            a_une_valeur_par_defaut(0),
            la_valeur_par_defaut_est_caractere(0),
            valeur_par_defaut( ''''),
dans le champ','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('98','1','afficher/masquer les champs dans le svg','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('99','1','corriger le bug : après tri des champs, on pert l''index','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('100','1','ne pas masquer un champ si c''est une référence, une clé, un auto_increment
ou si le champ appartient à un index','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('101','1','ajouter des tests de validité sur le svg base','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('102','1','sauvegarder une table sans champ','99','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('103','1','requetes','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('104','1','mettre le dump de la base dans la liste des bases','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('105','1','''prefixe_bdd'' PREFIXE_BDD','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('106','1','positionnement du bouton supprimer les messages','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('107','1','ajouter le bouton "ajouter un commentaire"','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('108','1','améliorer l''éditeur de requêtes','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('109','1','renommer le champ dtm_tache de la table requetes','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('110','1','changer le rev du champ quand on le renomme','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('111','1','remplacer les sql_nn par des sql_iii(nn,)','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('112','1','fonction pour gérer les dépendances
sql_dependances()','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('113','1','renommer un champ d''index','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('114','1','dans le concepteur de requete, mettre les champs mis à jour pour un update sur plusieurs lignes','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('115','1','mettre en place des dépendances de champ sur des bases externes','50','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('116','1','ajouter le test des dépendances dans les php delete','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('117','1','renommer une table dans le base','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('118','1','sources','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('119','1','modifier les updates','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('120','1','en mode déverminage, afficher le numero de reuqete liste','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('121','1','pourquoi certains fichiers sql sont supprimés','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('122','1','icone supprimer 🗑','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('123','1','rev de texte','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('124','1','recompiler les updates','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('125','1','intégrer la table rev dans la base physique','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('126','1','projet 2','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('127','1','reprendre les meta des sql','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('128','1','compiler les requêtes à partir de la liste','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('129','1','remplacer select_liste par liste_ecran','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('130','1','compiler les sources
html
js
php
sql
css
texte
rev','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('132','1','virer chp_chemin_dossier','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('133','1','flag dossier binaire','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('134','1','begin transaction','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('135','1','ordonner un champ sur le schema uniquement','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('136','1','mettre le rev de travail de la base dans le rev','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('137','1','intégrer sql_parser_cst.js pour pouvoir faire passer :
alter table t DROP column a;

select * from toto;
/*
  alter table tata DROP column tot;
*/','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('138','1','sql_parser_cst

select
create table
create index
insert
update
delete
commit
rollback
begin transaction
','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('139','1','ajouter un source binaire ( ico )','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('140','1','ajouter un source qui pointe sur un autre source ( favicon )','50','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('141','1','drapeau répertoire contient des sources générés','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('142','1','virer che_binaire_dossier','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('143','1','copier un source dans un autre répertoire','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('144','1','virer chp_type_source','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('145','1','supprimer les éléments inutils du dump de la base','99','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('146','1','sql_29, sql_30

champ_numero_de_revision
gerer_champ_numero_de_revision( champ( `chi__nur_tache` ))

      gerer_champ_date_creation( champ( `chp__dtc_tache` ) , format(23)),
      gerer_champ_date_modification( champ( `chp__dtm_tache` ) , format(23))


champ_date_modification(`chp__dtm_tache`)
flag champ_date_modification','99','4','2025-06-13 17:04:41.468','2000-01-01 00:00:00.000'),
('147','1','date_default_timezone_set en fonction de l''utilisateur','13','1','2025-07-29 17:40:19.125','2000-01-01 00:00:00.000'),
('148','1','dans projet 2, enregistrer les matrices rev

bases

requetes

sources html sur disque
sources php sur disque
sources js sur disque
sources sql sur disque
sources css sur disque
sources rev sur disque
sources txt sur disque NON','99','10','2025-06-15 09:10:42.213','2025-06-13 17:05:45.323'),
('149','1','socket : .ts en .js','99','0','2025-06-16 09:01:24.706','2025-06-16 09:01:24.706'),
('150','1','renommer les champs chi__num en che__nur','99','3','2025-06-17 11:45:14.619','2025-06-17 10:08:32.544'),
('151','1','lors de la compilation d''un php, 
mettre les sources au format SQL des requetes sql dans le source php','99','1','2025-06-17 14:11:31.120','2025-06-17 10:40:44.982'),
('152','1','décomposer les fichiers session de php pour le wso','99','2','2025-06-19 18:22:27.003','2025-06-17 11:54:31.823'),
('154','1','déterminer le répertoire des requêtes dans le projet','99','0','2025-06-19 18:21:27.820','2025-06-19 18:21:27.820'),
('155','1','quand on crée un nouveau projet, 
il faut créer un clone de la base système dans lequel travailler','99','0','2025-06-20 10:44:39.371','2025-06-20 10:44:39.371'),
('156','1','quand on se déconnecte d''un projet, il faut supprimer les menus bases ...','99','0','2025-06-20 10:47:23.986','2025-06-20 10:47:23.986'),
('157','1','ajouter répertoire des requetes au niveau du projet
et utiliser cette donnée...','99','2','2025-06-21 16:57:19.818','2025-06-21 13:36:20.422'),
('158','1','quand on ajoute un champ fils, dans le dessin svg, le lien ne n''affiche pas correctement','99','0','2025-06-23 12:39:41.331','2025-06-23 12:39:41.331'),
('159','1','supprimer les projets >2 dans le projet 2','99','0','2025-06-23 16:18:28.927','2025-06-23 16:18:28.927'),
('160','1','comparer les sources entre rev1 et 2 et faire un bouton copier','99','0','2025-06-23 16:41:49.995','2025-06-23 16:41:49.995'),
('161','1','dans rev_2 importer un source de rev1','99','0','2025-06-24 09:36:54.845','2025-06-24 09:36:54.845'),
('162','1','voir message conversion dans le php (322727) [1742]','99','0','2025-06-24 13:49:09.573','2025-06-24 13:49:09.573'),
('163','1','moncrlf','99','0','2025-06-25 10:22:08.728','2025-06-25 10:22:08.728'),
('164','1','quand on active un projet, il faut charger les sources sql','99','0','2025-06-25 11:05:15.874','2025-06-25 11:05:15.874'),
('165','1','inporter/exporter les fichiers de rev 1 2','99','0','2025-06-25 12:06:19.837','2025-06-25 12:06:19.837'),
('166','1','rechercher un source dont le nom contient __

select * from tbl_sources where chp_nom_source like ''%\_%'' ESCAPE ''\'';','99','2','2025-06-25 14:42:17.528','2025-06-25 12:10:16.103'),
('167','1','double \ dans le .bat','99','0','2025-06-25 14:14:55.962','2025-06-25 14:14:55.962'),
('168','1','faire un 
comme1(%xxx)
comme2(xxx%)
comme3(xxx)','11','1','2025-06-26 11:55:00.122','2025-06-26 11:34:12.549'),
('169','1','initialiser projet standard','5','0','2025-06-26 15:39:59.054','2025-06-26 15:39:59.054'),
('170','1','initialiser ecran standard d''une table','8','0','2025-06-26 15:40:44.916','2025-06-26 15:40:44.916'),
('171','1','gérer les menus','99','1','2025-07-10 16:37:39.788','2025-06-26 17:24:34.522'),
('172','1','gérer les utilisateurs et les groupes et les métiers','99','1','2025-06-27 10:25:45.031','2025-06-27 10:13:04.627'),
('173','1','gérer les paramètres ( liste des constantes )
type de champbdd','7','3','2025-07-04 08:19:23.308','2025-06-27 10:13:20.409'),
('174','1','mettre en github
','99','0','2025-06-27 11:21:35.817','2025-06-27 11:21:35.817'),
('175','1','faire un dump de la base du projet 3','99','1','2025-06-28 12:41:16.455','2025-06-28 12:40:58.038'),
('176','1','supprimer les afr','99','0','2025-06-30 10:17:00.146','2025-06-30 10:17:00.146'),
('177','1','créer la base appli dans un autre répertoire que les bases de données','99','0','2025-07-01 09:20:32.962','2025-07-01 09:20:32.962'),
('178','1','ajouter un dictionnaire de données(genre)
permet de spécifier les champs date, date_heure, lien vers parent, id','2','4','2025-08-10 10:41:29.780','2025-07-02 10:46:53.367'),
('179','1','corriger fichier_des_dependances','99','0','2025-07-02 11:46:09.399','2025-07-02 11:46:09.399'),
('180','1','corriger rev_php_des_sql','99','0','2025-07-03 09:44:55.718','2025-07-03 09:44:55.718'),
('181','1','quand on ajoute une tâche et on revient à la liste, réordonner les tâches','99','0','2025-07-03 09:46:02.668','2025-07-03 09:46:02.668'),
('182','1','svg lien ajouter gauche droite','99','1','2025-07-06 09:27:00.963','2025-07-04 08:22:18.236'),
('183','1','lisad :

lister 
insérer 
sélectionner 
altérer/amender 
détruire','80','1','2025-07-06 13:23:50.990','2025-07-06 13:23:42.485'),
('184','1','bug quand on crée un nouvelle requête, le php c''est pas créé sur disque','99','0','2025-07-07 10:35:44.602','2025-07-07 10:35:44.602'),
('185','1','gérer les pages','99','0','2025-07-07 12:54:11.814','2025-07-07 12:54:11.814'),
('186','1','gérer les accès des utilisateurs','99','1','2025-07-08 15:13:34.065','2025-07-08 15:12:51.611'),
('187','1','supprimer chx_groupe_utilisateur chx_metier_utilisateur','99','0','2025-07-09 09:41:52.450','2025-07-09 09:41:52.450'),
('188','1','ajouter NULL si chx = '''' sur les insert et delete','99','1','2025-07-09 13:55:32.628','2025-07-09 13:54:53.645'),
('189','1','Lors de l''insertion dans la table des pages, vérifier l''existance de méthode du source','99','1','2025-07-09 15:40:56.820','2025-07-09 14:58:59.943'),
('190','1','supprimer chp_lien_rev_page','99','0','2025-07-09 15:22:03.310','2025-07-09 15:22:03.310'),
('191','1','rechercher sql_24','99','0','2025-07-09 15:50:13.424','2025-07-09 15:50:13.424'),
('192','1','bouton pop up pour voir le contenu d''une requête à partir de la liste des requêtes ','99','1','2025-07-09 17:42:12.440','2025-07-09 15:50:33.376'),
('193','1','menu outils qui contient les convertisseurs
<select>
    <option>outils</option>
    <option>matrice</option>
    <option>html</option>
    <option>js</option>
    <option>php</option>
    <option>sql</option>
    <option>css</option>
    <option>texte</option>
</select>','3','2','2025-07-22 14:39:11.892','2025-07-09 16:26:01.691'),
('194','1','optimiser le transfert pour la matrice de sql_parser_cst.js	','99','0','2025-07-09 16:31:23.198','2025-07-09 16:31:23.198'),
('195','1','dans svg, ajouter un les boutons pour les bases/tables/champs des tables liées','99','0','2025-07-09 17:43:23.330','2025-07-09 17:43:23.330'),
('196','1','initialiser les champs filtres d''une sous page','99','1','2025-07-19 11:11:25.033','2025-07-10 09:52:20.444'),
('197','1','le caractère 🟥 ne passe pas sur ma tablette
faire un carré svg
⬛🔲🗨◻⏹','99','4','2025-07-21 17:02:50.100','2025-07-10 09:58:19.160'),
('198','1','dans les pages, proposer une liste de méthodes quand on choisir un source','99','0','2025-07-10 10:17:39.087','2025-07-10 10:17:39.087'),
('199','1','compiler le prérequis du menu','99','1','2025-07-14 08:40:32.303','2025-07-12 08:22:58.170'),
('200','1','quand on modifie une page, il faut recompiler les menus','99','0','2025-07-15 13:49:22.638','2025-07-15 13:49:22.638'),
('201','1','ajouter les traitements de 
nom_champ_dans_parent1
nom_libelle_dans_parent1
dans les sous listes comme dans c_sources1.php','99','1','2025-07-15 17:21:51.755','2025-07-15 16:12:27.924'),
('202','1','bibliothèque de svg','6','1','2025-07-16 10:48:01.891','2025-07-16 10:47:25.371'),
('203','1','renuméroter les requetes à partir de 101','99','2','2025-07-17 15:09:37.352','2025-07-17 10:11:14.041'),
('204','1','sql_5, suppression de rev, ne dépend de pernonne','99','1','2025-07-17 12:14:57.332','2025-07-17 12:07:20.343'),
('205','1','bug quand on renumérote une requete il y a 2 fois <?php','99','0','2025-07-18 10:50:06.307','2025-07-18 10:50:06.307'),
('206','1','renuméroter un source','99','0','2025-07-24 12:50:11.622','2025-07-24 12:50:11.622'),
('207','1','remplacer php par deno','50','1','2025-07-27 09:47:30.190','2025-07-27 09:47:14.801'),
('208','1','chp_commentaire_projet => chTTTTT_commentaire_projet','99','0','2025-07-29 11:37:04.000','2025-07-29 11:37:04.000'),
('209','1','ajouter un bouton enregistrer dans la modification d''un source','99','1','2025-07-29 16:48:06.039','2025-07-29 15:44:38.467'),
('210','1','travailler la redirection si on n''est pas authentifié','99','0','2025-07-29 17:52:34.498','2025-07-29 17:52:34.498'),
('211','1','ajouter une référence à la pagination dans les listes','99','1','2025-07-31 11:56:33.898','2025-07-31 09:07:20.616'),
('212','1','liens internes en #','99','0','2025-07-31 13:52:57.967','2025-07-31 13:52:57.967'),
('213','1','Gérer les versions
nouvelle version','99','0','2025-08-01 14:32:15.239','2025-08-01 14:32:15.239'),
('214','1','renommer un champ

supprimer un champ
ajouter un champ

quand on renomme un champ de la base 1 de rev_1 il faur renommer les champs de toutes les bases rev_n
Exemple chp_commentaire_projet => cht_commentaire_projet','99','2','2025-08-02 14:19:05.165','2025-08-01 15:08:43.406'),
('215','1','case à cocher "se souvenir de moi" sur la page de connexion','4','0','2025-08-03 09:25:28.660','2025-08-03 09:25:28.660'),
('216','1','intégrer mon tri','99','0','2025-08-03 10:03:21.913','2025-08-03 10:03:21.913'),
('217','1','bug réordonner champs sur projet 3','99','0','2025-08-05 14:13:00.676','2025-08-05 14:13:00.676'),
('218','1','tri_arbre','99','0','2025-08-08 11:02:44.128','2025-08-08 11:02:44.128'),
('219','1','source_requete

            ''sql0'' => $sql0 ,
            ''bdd'' => $GLOBALS[__BDD][BDD_NUMERO_1],
','99','3','2025-08-08 15:09:52.677','2025-08-08 12:41:17.737'),
('220','1','ajouter un champ espece base et taille_espece','1','2','2025-08-09 12:38:17.257','2025-08-09 12:33:15.508'),
('221','1','taxon, espèce, famille, classification, qualité, groupe, collection, genre','80','1','2025-08-10 10:36:21.692','2025-08-10 09:27:19.788'),
('222','1','tbl_pages
tbl_menus
chx_acces_page sql 188 189 190 191 198 300 303 304

un accès = métier groupe

autorisation = acces source

menu = autorisation methode du source

afr : quand le source a appel le source b, 
il faut une autorisation déléguée sur la méthode appelée','0','7','2025-08-12 14:42:35.283','2025-08-12 12:44:14.024');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_autorisations
  ===============================
*/

INSERT INTO tbl_autorisations (chi_id_autorisation,chx_acces_autorisation,chx_source_autorisation) VALUES
('1','1','61'),
('2','1','235'),
('3','1','234'),
('4','1','233'),
('5','1','236'),
('6','1','237'),
('7','1','232'),
('8','1','238'),
('9','1','230'),
('10','1','225'),
('11','1','241'),
('12','1','353'),
('13','1','231'),
('14','1','240'),
('15','1','56'),
('16','1','58'),
('17','1','50'),
('18','1','356'),
('19','1','59'),
('20','1','62'),
('21','1','357');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_menus
  ===============================
*/

INSERT INTO tbl_menus (chi_id_menu,cht_libelle_menu,chp_titre_menu,chx_autorisation_menu,chp_methode_menu,cht_initialisation_menu,cht_complements_menu) VALUES
('1','tâches','Liste des tâches','1','page_liste_des_taches1','T0_chp_priorite_tache2(99)',NULL),
('2','matrice','convertion de rev vers matrice','2','page1',NULL,'maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegardées,ls_rev1))))'),
('3','js','convertion de javascript ','3','page1',NULL,'maj_interface2(
   modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegardées,ls_js_rev1)))
)'),
('4','php','convertion de php','5','page1',NULL,NULL),
('5','sql','convertion de sql','6','page1',NULL,NULL),
('6','css','convertion de css','7','page1',NULL,NULL),
('7','txt','convertion de textes','8','page1',NULL,NULL),
('8','projets','liste des projets','9','page_projets_liste1',NULL,NULL),
('9','fido','liste des dossiers et des fichiers','10','page_dossiers_liste1',NULL,NULL),
('10','sources','liste des sources des programmes','11','page_liste_des_sources1',NULL,NULL),
('11','bases','liste des bases','12','page_liste_des_bases1',NULL,NULL),
('12','requêtes','liste des requêtes sur les bases','13','page_liste_des_requetes1',NULL,NULL),
('13','(😊)','liste des revs','14','page_liste_des_revs1',NULL,NULL),
('14','groupes','liste des groupes','15','page_liste_des_groupes1',NULL,NULL),
('15','métiers','liste des métiers','16','page_liste_des_metiers1',NULL,NULL),
('16','accès','liste des accès','17','page_liste_des_acces1',NULL,NULL),
('17','utilisateurs','liste des utilisateurs','20','page_liste_des_utilisateurs1',NULL,NULL),
('18','autorisations','liste des autorisations','18','page_liste_des_autorisations1',NULL,NULL),
('19','menus','liste des menus','21','page_liste_des_menus1',NULL,NULL),
('20','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -7  20 21">
    <g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:1;">
        <circle cx="0" cy="0" r="6"></circle>
        <path d=" M -8 11 C -6 6 6 6 8 11 "></path>
        <circle cx="-2" cy="-1" r="1"></circle>
        <circle cx="2" cy="-1" r="1"></circle>
        <path d="M -2 2 C -3 4 3 4 2 2 "></path>
        <path d="M 0 0 V 2 "></path>
        <path d="M -3 -1   H -6    "></path>
        <path d="M 3 -1   H 6    "></path>
        <path d="M -1 -1 c 0 -1 2 -1 2 0 "></path>
    </g>
</svg>','mon profile','19','recupere_la_page_des_coordonnees',NULL,NULL),
('21','html','html','4','page1',NULL,'maj_interface2(
   modifier(id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegardées,ls_html_rev1)))
)');

