/*
  ============================
  Il y a 3 parties dans ce fichier
  1°) au début, les créations de tables
  2°) au milieu les insertions
  3°) à la fin les index
  ============================
*/

CREATE TABLE tbl_revs(
/*
 meta(nom_de_la_table('tbl_revs'),
   table('tbl_revs'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des revs'),
   distinction_pour_isad('d\'un rev'),
   transform_table_sur_svg(translate(813.5,17.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_rev'),
            nom_long_du_champ('à faire chi_id_rev'),
            nom_court_du_champ('à faire chi_id_rev'),
            nom_bref_du_champ('à faire chi_id_rev'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_rev INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_projet_rev'),
            nom_long_du_champ('à faire chx_cible_rev'),
            nom_court_du_champ('à faire chx_cible_rev'),
            nom_bref_du_champ('à faire chx_cible_rev'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_projet_rev INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_provenance_rev'),
            nom_long_du_champ('à faire chp_provenance_rev'),
            nom_court_du_champ('à faire chp_provenance_rev'),
            nom_bref_du_champ('à faire chp_provenance_rev'),
            typologie(cho),
            genre(12),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_provenance_rev VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_source_rev'),
            nom_long_du_champ('à faire chx_source_rev'),
            nom_court_du_champ('à faire chx_source_rev'),
            nom_bref_du_champ('à faire chx_source_rev'),
            typologie(chx),
            genre(7),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_source_rev INTEGER DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_id_rev'),
            nom_long_du_champ('à faire chp_id_rev'),
            nom_court_du_champ('à faire chp_id_rev'),
            nom_bref_du_champ('à faire chp_id_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_id_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_valeur_rev'),
            nom_long_du_champ('à faire chp_valeur_rev'),
            nom_court_du_champ('à faire chp_valeur_rev'),
            nom_bref_du_champ('à faire chp_valeur_rev'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             chp_valeur_rev TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_type_rev'),
            nom_long_du_champ('à faire chp_type_rev'),
            nom_court_du_champ('à faire chp_type_rev'),
            nom_bref_du_champ('à faire chp_type_rev'),
            typologie(cho),
            genre(105),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(3)
            )
            */
             chp_type_rev VARCHAR(1) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_niveau_rev'),
            nom_long_du_champ('à faire chp_niveau_rev'),
            nom_court_du_champ('à faire chp_niveau_rev'),
            nom_bref_du_champ('à faire chp_niveau_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_niveau_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_quotee_rev'),
            nom_long_du_champ('à faire chp_quotee_rev'),
            nom_court_du_champ('à faire chp_quotee_rev'),
            nom_bref_du_champ('à faire chp_quotee_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_quotee_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_premier_rev'),
            nom_long_du_champ('à faire chp_pos_premier_rev'),
            nom_court_du_champ('à faire chp_pos_premier_rev'),
            nom_bref_du_champ('à faire chp_pos_premier_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_pos_premier_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_dernier_rev'),
            nom_long_du_champ('à faire chp_pos_dernier_rev'),
            nom_court_du_champ('à faire chp_pos_dernier_rev'),
            nom_bref_du_champ('à faire chp_pos_dernier_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_pos_dernier_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_parent_rev'),
            nom_long_du_champ('à faire chp_parent_rev'),
            nom_court_du_champ('à faire chp_parent_rev'),
            nom_bref_du_champ('à faire chp_parent_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_parent_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nbr_enfants_rev'),
            nom_long_du_champ('à faire chp_nbr_enfants_rev'),
            nom_court_du_champ('à faire chp_nbr_enfants_rev'),
            nom_bref_du_champ('à faire chp_nbr_enfants_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_nbr_enfants_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_num_enfant_rev'),
            nom_long_du_champ('à faire chp_num_enfant_rev'),
            nom_court_du_champ('à faire chp_num_enfant_rev'),
            nom_bref_du_champ('à faire chp_num_enfant_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_num_enfant_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_profondeur_rev'),
            nom_long_du_champ('à faire chp_profondeur_rev'),
            nom_court_du_champ('à faire chp_profondeur_rev'),
            nom_bref_du_champ('à faire chp_profondeur_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_profondeur_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_ouver_parenthese_rev'),
            nom_long_du_champ('à faire chp_pos_ouver_parenthese_rev'),
            nom_court_du_champ('à faire chp_pos_ouver_parenthese_rev'),
            nom_bref_du_champ('à faire chp_pos_ouver_parenthese_rev'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_pos_ouver_parenthese_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_enfant_suivant_rev'),
            nom_long_du_champ('AFR'),
            nom_court_du_champ('AFR'),
            nom_bref_du_champ('AFR'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_enfant_suivant_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_commentaire_rev'),
            nom_long_du_champ('à faire chp_commentaire_rev'),
            nom_court_du_champ('à faire chp_commentaire_rev'),
            nom_bref_du_champ('à faire chp_commentaire_rev'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             chp_commentaire_rev TEXT DEFAULT  NULL
    );

CREATE TABLE tbl_dossiers(
/*
 meta(nom_de_la_table('tbl_dossiers'),
   table('tbl_dossiers'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des dossiers'),
   distinction_pour_isad('d\'un dossier'),
   transform_table_sur_svg(translate(271.5,153.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_dossier'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_dossier INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_projet_dossier'),
            nom_long_du_champ('à faire chx_projet_dossier'),
            nom_court_du_champ('à faire chx_projet_dossier'),
            nom_bref_du_champ('à faire chx_projet_dossier'),
            typologie(chi),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),refe_enfant_droite(1)
            )
            */
             chx_projet_dossier INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_dossier'),
            nom_long_du_champ('à faire chp_nom_dossier'),
            nom_court_du_champ('à faire chp_nom_dossier'),
            nom_bref_du_champ('à faire chp_nom_dossier'),
            typologie(chp),
            genre(108),
            afficher_champ_dans_svg(1),
            espece_du_champ(CHARACTER),longueur_du_champ(64)
            )
            */
             chp_nom_dossier VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_dossier'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),refe_parent_gauche(1)
            )
            */
             chx_parent_dossier INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_contient_genere_dossier'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_contient_genere_dossier INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_dossier'),
            nom_long_du_champ('à faire chi__nut_dossier'),
            nom_court_du_champ('à faire chi__nut_dossier'),
            nom_bref_du_champ('à faire chi__nut_dossier'),
            typologie(chi),
            genre(10),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
            )
            */
             che__nur_dossier INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_dossier'),
            nom_long_du_champ('à faire chd__dtm_dossier'),
            nom_court_du_champ('à faire chd__dtm_dossier'),
            nom_bref_du_champ('à faire chd__dtm_dossier'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtm_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_dossier'),
            nom_long_du_champ('à faire chd__dtc_dossier'),
            nom_court_du_champ('à faire chd__dtc_dossier'),
            nom_bref_du_champ('à faire chd__dtc_dossier'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtc_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_groupes(
/*
 meta(nom_de_la_table('tbl_groupes'),
   table('tbl_groupes'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des groupes'),
   distinction_pour_isad('d\'un groupe'),
   transform_table_sur_svg(translate(17.5,213.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_groupe'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_groupe INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_groupe'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_groupe VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_groupe'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_parent_groupe INTEGER REFERENCES tbl_groupes(chi_id_groupe) 
    );

CREATE TABLE tbl_metiers(
/*
 meta(nom_de_la_table('tbl_metiers'),
   table('tbl_metiers'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des metiers'),
   distinction_pour_isad('d\'un metier'),
   transform_table_sur_svg(translate(10.5,313.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_metier'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_metier INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_metier'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_metier VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_metier'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_parent_metier INTEGER REFERENCES tbl_metiers(chi_id_metier) 
    );

CREATE TABLE tbl_acces(
/*
 meta(nom_de_la_table('tbl_acces'),
   table('tbl_acces'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des acces'),
   distinction_pour_isad('d\'un acces'),
   transform_table_sur_svg(translate(188.5,310.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_acces'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_acces INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_acces'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_acces VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_groupe_acces'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_groupe_acces INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_metier_acces'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_metier_acces INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_parametres_acces'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_parametres_acces TEXT DEFAULT  NULL
    );

CREATE TABLE tbl_autorisations(
/*
 meta(nom_de_la_table('tbl_autorisations'),
   table('tbl_autorisations'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des autorisations'),
   distinction_pour_isad('d\'une autorisation'),
   transform_table_sur_svg(translate(390.5,353.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_autorisation'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_autorisation INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_acces_autorisation'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_acces_autorisation INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_source_autorisation'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),refe_enfant_droite(1),refe_parent_gauche(1)
            )
            */
             chx_source_autorisation INTEGER NOT NULL REFERENCES tbl_sources(chi_id_source) 
    );

CREATE TABLE tbl_genres(
/*
 meta(nom_de_la_table('tbl_genres'),
   table('tbl_genres'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des genres'),
   distinction_pour_isad('d\'un genre'),
   transform_table_sur_svg(translate(68.5,456.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_genre INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_prefixe_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(102),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(3)
            )
            */
             chp_prefixe_genre VARCHAR(3) NOT NULL DEFAULT  'cht'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_genre VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_espece_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(101),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(32)
            )
            */
             chp_espece_genre VARCHAR(64) NOT NULL DEFAULT  'TEXT'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_longueur_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(7),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_longueur_genre INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_primaire_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_est_primaire_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_incrément_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_est_incrément_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_obligatoire_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_est_obligatoire_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_a_init_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_a_init_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_init_est_mot_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_init_est_mot_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_valeur_init_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_valeur_init_genre TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_parmis_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_est_parmis_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_parmis_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_parmis_genre TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_ordre_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_ordre_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_ts_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_est_ts_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_fonctions_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(cht),
            genre(107),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_fonctions_genre TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_nur_genre'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(che),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_est_nur_genre INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_projets(
/*
 meta(nom_de_la_table('tbl_projets'),
   table('tbl_projets'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des projets'),
   distinction_pour_isad('d\'un projet'),
   transform_table_sur_svg(translate(272.5,9.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_projet'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_projet INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_projet'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(11),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             chp_nom_projet TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_projet'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_commentaire_projet TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_requetes_projet'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chx),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),refe_parent_gauche(1)
            )
            */
             chx_dossier_requetes_projet INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_menus_projet'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),refe_parent_gauche(1)
            )
            */
             chx_dossier_menus_projet INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_projet'),
            nom_long_du_champ('à faire chi__nut_projet'),
            nom_court_du_champ('à faire chi__nut_projet'),
            nom_bref_du_champ('à faire chi__nut_projet'),
            typologie(chi),
            genre(10),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
            )
            */
             che__nur_projet INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_projet'),
            nom_long_du_champ('à faire chd__dtm_projet'),
            nom_court_du_champ('à faire chd__dtm_projet'),
            nom_bref_du_champ('à faire chd__dtm_projet'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtm_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_projet'),
            nom_long_du_champ('à faire chd__dtc_projet'),
            nom_court_du_champ('à faire chd__dtc_projet'),
            nom_bref_du_champ('à faire chd__dtc_projet'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtc_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_taches(
/*
 meta(nom_de_la_table('tbl_taches'),
   table('tbl_taches'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des taches'),
   distinction_pour_isad('d\'une tache'),
   transform_table_sur_svg(translate(881.5,536.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_tache'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_tache INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_utilisateur_tache'),
            nom_long_du_champ('à faire chx_utilisateur_tache'),
            nom_court_du_champ('à faire chx_utilisateur_tache'),
            nom_bref_du_champ('à faire chx_utilisateur_tache'),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_utilisateur_tache INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_texte_tache'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(11),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             chp_texte_tache TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_priorite_tache'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chp_priorite_tache INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_tache'),
            nom_long_du_champ('à faire chd__dtm_tache'),
            nom_court_du_champ('à faire chd__dtm_tache'),
            nom_bref_du_champ('à faire chd__dtm_tache'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtm_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_tache'),
            nom_long_du_champ('à faire chd__dtc_tache'),
            nom_court_du_champ('à faire chd__dtc_tache'),
            nom_bref_du_champ('à faire chd__dtc_tache'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtc_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_tache'),
            nom_long_du_champ('à faire chi__nut_tache'),
            nom_court_du_champ('à faire chi__nut_tache'),
            nom_bref_du_champ('à faire chi__nut_tache'),
            typologie(che),
            genre(15),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che__nur_tache INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_projet_tache'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_projet_tache INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet)  DEFAULT  1
    );

CREATE TABLE tbl_utilisateurs(
/*
 meta(nom_de_la_table('tbl_utilisateurs'),
   table('tbl_utilisateurs'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des utilisateurs'),
   distinction_pour_isad('d\'un utilisateur'),
   transform_table_sur_svg(translate(603.5,464.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_utilisateur'),
            nom_long_du_champ('à faire chi_id_utilisateur'),
            nom_court_du_champ('à faire chi_id_utilisateur'),
            nom_bref_du_champ('à faire chi_id_utilisateur'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_utilisateur INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_de_connexion_utilisateur'),
            nom_long_du_champ('à faire chp_nom_de_connexion_utilisateur'),
            nom_court_du_champ('à faire chp_nom_de_connexion_utilisateur'),
            nom_bref_du_champ('à faire chp_nom_de_connexion_utilisateur'),
            typologie(cht),
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_de_connexion_utilisateur VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_mot_de_passe_utilisateur'),
            nom_long_du_champ('à faire chp_mot_de_passe_utilisateur'),
            nom_court_du_champ('à faire chp_mot_de_passe_utilisateur'),
            nom_bref_du_champ('à faire chp_mot_de_passe_utilisateur'),
            typologie(cht),
            genre(13),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(256)
            )
            */
             chp_mot_de_passe_utilisateur VARCHAR(256) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_parametres_utilisateur'),
            nom_long_du_champ('à faire chp_parametres_utilisateur'),
            nom_court_du_champ('à faire chp_parametres_utilisateur'),
            nom_bref_du_champ('à faire chp_parametres_utilisateur'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             chp_parametres_utilisateur TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_compteur1_utilisateur'),
            nom_long_du_champ('à faire chi_compteur1_utilisateur'),
            nom_court_du_champ('à faire chi_compteur1_utilisateur'),
            nom_bref_du_champ('à faire chi_compteur1_utilisateur'),
            typologie(chi),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_compteur1_utilisateur INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_compteur_socket1_utilisateur'),
            nom_long_du_champ('à faire chi_compteur_socket1_utilisateur'),
            nom_court_du_champ('à faire chi_compteur_socket1_utilisateur'),
            nom_bref_du_champ('à faire chi_compteur_socket1_utilisateur'),
            typologie(chi),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_compteur_socket1_utilisateur INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_acces_utilisateur'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_acces_utilisateur INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_utilisateur'),
            nom_long_du_champ('à faire chd__dtm_utilisateur'),
            nom_court_du_champ('à faire chd__dtm_utilisateur'),
            nom_bref_du_champ('à faire chd__dtm_utilisateur'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtm_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_utilisateur'),
            nom_long_du_champ('à faire chd__dtc_utilisateur'),
            nom_court_du_champ('à faire chd__dtc_utilisateur'),
            nom_bref_du_champ('à faire chd__dtc_utilisateur'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtc_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_utilisateur'),
            nom_long_du_champ('à faire chi__nut_utilisateur'),
            nom_court_du_champ('à faire chi__nut_utilisateur'),
            nom_bref_du_champ('à faire chi__nut_utilisateur'),
            typologie(chi),
            genre(10),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
            )
            */
             che__nur_utilisateur INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_sources(
/*
 meta(nom_de_la_table('tbl_sources'),
   table('tbl_sources'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des sources'),
   distinction_pour_isad('d\'un source'),
   transform_table_sur_svg(translate(593.5,58.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_source'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_source INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_projet_id_source'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_projet_id_source INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_source'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(106),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             chp_nom_source VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_source'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_rev_source TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_genere_source'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_genere_source TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_binaire_source'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             che_binaire_source INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_id_source'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chx),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_dossier_id_source INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_source'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(0),
            espece_du_champ(TEXT)
            )
            */
             cht_commentaire_source TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_source'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chd),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtm_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_source'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chd),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtc_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_source'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chi),
            genre(10),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
            )
            */
             che__nur_source INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_bdds(
/*
 meta(nom_de_la_table('tbl_bdds'),
   table('tbl_bdds'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des bases de données'),
   distinction_pour_isad('d\'une base de donnée'),
   transform_table_sur_svg(translate(604.5,268.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_basedd'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_basedd INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_projet_id_basedd'),
            nom_long_du_champ('à faire chx_projet_id_basedd'),
            nom_court_du_champ('à faire chx_projet_id_basedd'),
            nom_bref_du_champ('à faire chx_projet_id_basedd'),
            typologie(chi),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_projet_id_basedd INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_rev_travail_basedd'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             chp_rev_travail_basedd TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_fournisseur_basedd'),
            nom_long_du_champ('à faire chp_fournisseur_basedd'),
            nom_court_du_champ('à faire chp_fournisseur_basedd'),
            nom_bref_du_champ('à faire chp_fournisseur_basedd'),
            typologie(chi),
            genre(104),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             chp_fournisseur_basedd VARCHAR(64) NOT NULL DEFAULT  'sqlite'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_id_basedd'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chx),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chx_dossier_id_basedd INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_commentaire_basedd'),
            nom_long_du_champ(''),
            nom_court_du_champ(''),
            nom_bref_du_champ(''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(0),
            espece_du_champ(TEXT)
            )
            */
             chp_commentaire_basedd TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_basedd'),
            nom_long_du_champ('à faire chd__dtm_basedd'),
            nom_court_du_champ('à faire chd__dtm_basedd'),
            nom_bref_du_champ('à faire chd__dtm_basedd'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtm_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_basedd'),
            nom_long_du_champ('à faire chd__dtc_basedd'),
            nom_court_du_champ('à faire chd__dtc_basedd'),
            nom_bref_du_champ('à faire chd__dtc_basedd'),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtc_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_basedd'),
            nom_long_du_champ('à faire chi__nut_basedd'),
            nom_court_du_champ('à faire chi__nut_basedd'),
            nom_bref_du_champ('à faire chi__nut_basedd'),
            typologie(chi),
            genre(10),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
            )
            */
             che__nur_basedd INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_requetes(
/*
 meta(nom_de_la_table('tbl_requetes'),
   table('tbl_requetes'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des requetes'),
   distinction_pour_isad('d\'une requete'),
   transform_table_sur_svg(translate(8.5,27.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_requete INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_projet_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),refe_enfant_droite(1),refe_parent_gauche(1)
            )
            */
             chx_projet_requete INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_type_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chp),
            genre(103),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_type_requete VARCHAR(64) NOT NULL DEFAULT  'liste_ecran'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_rev_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_sql_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_sql_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_php_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_php_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_matrice_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_matrice_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(0),
            espece_du_champ(TEXT)
            )
            */
             cht_commentaire_requete TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(che),
            genre(15),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
            )
            */
             che__nur_requete INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chd),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtm_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_requete'),
            nom_long_du_champ('AFR ...'),
            nom_court_du_champ('AFR ...'),
            nom_bref_du_champ('AFR ...'),
            typologie(chd),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),longueur_du_champ(23)
            )
            */
             chd__dtc_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_menus(
/*
 meta(nom_de_la_table('tbl_menus'),
   table('tbl_menus'),
   genre_meta(table_de_base),
   distinction_pour_liste('liste des menus'),
   distinction_pour_isad('d\'un menu'),
   transform_table_sur_svg(translate(362.5,474.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_menu INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_libelle_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             cht_libelle_menu VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_titre_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_titre_menu VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_autorisation_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),refe_parent_gauche(1)
            )
            */
             chx_autorisation_menu INTEGER NOT NULL REFERENCES tbl_autorisations(chi_id_autorisation) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_methode_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(chp),
            genre(12),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_methode_menu VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_initialisation_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_initialisation_menu TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_complements_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_complements_menu TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_condition_menu TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_php_menu'),
            nom_long_du_champ('A faire ...'),
            nom_court_du_champ('A faire ...'),
            nom_bref_du_champ('A faire ...'),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
            )
            */
             cht_condition_php_menu TEXT DEFAULT  NULL
    );

/*
  ============================
  2°) au milieu les insertions
  ============================
*/

/*
  ===============================
  PAS DE DONNEES A INSERER POUR : tbl_revs
  ===============================
*/


/*
  ===============================
  DONNEES A INSERER POUR : tbl_dossiers
  ===============================
*/

INSERT INTO tbl_dossiers (chi_id_dossier,
chx_projet_dossier,
chp_nom_dossier,
chx_parent_dossier,
che_contient_genere_dossier,
che__nur_dossier,
chd__dtm_dossier,
chd__dtc_dossier) VALUES
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
  DONNEES A INSERER POUR : tbl_groupes
  ===============================
*/

INSERT INTO tbl_groupes (chi_id_groupe,
chp_nom_groupe,
chx_parent_groupe) VALUES
('1','racine','1'),
('2','anonymes','2');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_metiers
  ===============================
*/

INSERT INTO tbl_metiers (chi_id_metier,
chp_nom_metier,
chx_parent_metier) VALUES
('1','webmaster','1'),
('2','[***non défini***]','2');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_acces
  ===============================
*/

INSERT INTO tbl_acces (chi_id_acces,
chp_nom_acces,
chx_groupe_acces,
chx_metier_acces,
cht_parametres_acces) VALUES
('1','tout','1','1','{"le_html_ul_li_du_menu":"<li data-chi_id_source=\"230\" data-chp_nom_source=\"c_projets1.php\" data-chp_methode_menu=\"page_projets_liste1\" data-chi_id_menu=\"8\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des projets\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">projets<\/li><li data-chi_id_source=\"61\" data-chp_nom_source=\"c_taches1.php\" data-chp_methode_menu=\"page_liste_des_taches1\" data-chi_id_menu=\"1\" data-cht_initialisation_menu=\"T0_chp_priorite_tache2(99)\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"Liste des t\u00e2ches\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\" data-cht_condition_menu=\"appelf(\n   nomf(isset),\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n)\">t\u00e2ches<\/li><li data-chi_id_source=\"225\" data-chp_nom_source=\"c_dossiers1.php\" data-chp_methode_menu=\"page_dossiers_liste1\" data-chi_id_menu=\"9\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des dossiers et des fichiers\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\" data-cht_condition_menu=\"appelf(\n   nomf(isset),\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n)\">fido<\/li><li data-chi_id_source=\"241\" data-chp_nom_source=\"c_sources1.php\" data-chp_methode_menu=\"page_liste_des_sources1\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des sources des programmes\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\" data-cht_condition_menu=\"appelf(\n   nomf(isset),\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n)\">sources<\/li><li data-chi_id_source=\"358\" data-chp_nom_source=\"c_genres1.php\" data-chp_methode_menu=\"page_liste_des_genres1\" data-chi_id_menu=\"22\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des types de bonn\u00e9es dans la bdd\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\" data-cht_condition_menu=\"appelf(\n   nomf(isset),\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n)\">genres<\/li><li data-chi_id_source=\"353\" data-chp_nom_source=\"c_bases1.php\" data-chp_methode_menu=\"page_liste_des_bases1\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des bases\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\" data-cht_condition_menu=\"appelf(\n   nomf(isset),\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n)\">bases<\/li><li data-chi_id_source=\"231\" data-chp_nom_source=\"c_requetes1.php\" data-chp_methode_menu=\"page_liste_des_requetes1\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des requ\u00eates sur les bases\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\" data-cht_condition_menu=\"appelf(\n   nomf(isset),\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n)\">requ\u00eates<\/li><li data-chi_id_source=\"240\" data-chp_nom_source=\"c_revs1.php\" data-chp_methode_menu=\"page_liste_des_revs1\" data-chi_id_menu=\"13\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des revs\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\" data-cht_condition_menu=\"appelf(\n   nomf(isset),\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n)\">(\ud83d\ude0a)<\/li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"56\" data-chp_nom_source=\"c_groupes1.php\" data-chp_methode_menu=\"page_liste_des_groupes1\" data-chi_id_menu=\"14\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des groupes\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) &amp;&amp; $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\" data-cht_condition_menu=\"et(\n   appelf(\n      nomf(isset),\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n   ),\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\n)\">groupes<\/li><li data-chi_id_source=\"58\" data-chp_nom_source=\"c_metiers1.php\" data-chp_methode_menu=\"page_liste_des_metiers1\" data-chi_id_menu=\"15\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des m\u00e9tiers\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) &amp;&amp; $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\" data-cht_condition_menu=\"et(\n   appelf(\n      nomf(isset),\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n   ),\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\n)\">m\u00e9tiers<\/li><li data-chi_id_source=\"50\" data-chp_nom_source=\"c_acces1.php\" data-chp_methode_menu=\"page_liste_des_acces1\" data-chi_id_menu=\"16\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des acc\u00e8s\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) &amp;&amp; $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\" data-cht_condition_menu=\"et(\n   appelf(\n      nomf(isset),\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n   ),\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\n)\">acc\u00e8s<\/li><li data-chi_id_source=\"62\" data-chp_nom_source=\"c_utilisateurs1.php\" data-chp_methode_menu=\"page_liste_des_utilisateurs1\" data-chi_id_menu=\"17\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des utilisateurs\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) &amp;&amp; $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\" data-cht_condition_menu=\"et(\n   appelf(\n      nomf(isset),\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n   ),\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\n)\">utilisateurs<\/li><li data-chi_id_source=\"356\" data-chp_nom_source=\"c_autorisations1.php\" data-chp_methode_menu=\"page_liste_des_autorisations1\" data-chi_id_menu=\"18\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des autorisations\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) &amp;&amp; $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\" data-cht_condition_menu=\"et(\n   appelf(\n      nomf(isset),\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n   ),\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\n)\">autorisations<\/li><li data-chi_id_source=\"357\" data-chp_nom_source=\"c_menus1.php\" data-chp_methode_menu=\"page_liste_des_menus1\" data-chi_id_menu=\"19\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"liste des menus\" data-cht_condition_php_menu=\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) &amp;&amp; $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\" data-cht_condition_menu=\"et(\n   appelf(\n      nomf(isset),\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\n   ),\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\n)\">menus<\/li><\/ul><\/li><li data-liste_des_menus=\"1\">outils<ul><li data-chi_id_source=\"235\" data-chp_nom_source=\"c_rev_mat1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_rev1))))\" data-chp_titre_menu=\"convertion de rev vers matrice\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">matrice<\/li><li data-chi_id_source=\"234\" data-chp_nom_source=\"c_rev_js1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"maj_interface2(\n   modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_js_rev1)))\n)\" data-chp_titre_menu=\"convertion de javascript \" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">js<\/li><li data-chi_id_source=\"233\" data-chp_nom_source=\"c_rev_html1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"21\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"maj_interface2(\n   modifier(id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_html_rev1)))\n)\" data-chp_titre_menu=\"html\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">html<\/li><li data-chi_id_source=\"236\" data-chp_nom_source=\"c_rev_php1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"maj_interface2(\n   modifier(id(vv_txtarea_php_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_php_rev1)))\n)\" data-chp_titre_menu=\"convertion de php\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">php<\/li><li data-chi_id_source=\"237\" data-chp_nom_source=\"c_rev_sql1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"maj_interface2(\n   modifier(\n      id(vv_txtarea_sql_rev1),\n      composante(value),\n      avec(\n        valeur_de_localstorage(\n          zones_sauvegard\u00e9es,\n          ls_sql_rev1\n        )\n      )\n   )\n)\" data-chp_titre_menu=\"convertion de sql\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">sql<\/li><li data-chi_id_source=\"232\" data-chp_nom_source=\"c_rev_css1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"maj_interface2(\n   modifier(\n      id(vv_txtarea_css_rev1),\n      composante(value),\n      avec(\n         valeur_de_localstorage(\n            zones_sauvegard\u00e9es,\n            ls_css_rev1\n         )\n      )\n   )\n)\" data-chp_titre_menu=\"convertion de css\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">css<\/li><li data-chi_id_source=\"238\" data-chp_nom_source=\"c_rev_texte1.php\" data-chp_methode_menu=\"page1\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"maj_interface2(modifier(id(vv_txtarea_texte_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_texte_rev1))))\" data-chp_titre_menu=\"convertion de textes\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">txt<\/li><\/ul><\/li><li data-chi_id_source=\"59\" data-chp_nom_source=\"c_profile1.php\" data-chp_methode_menu=\"recupere_la_page_des_coordonnees\" data-chi_id_menu=\"20\" data-cht_initialisation_menu=\"\" data-cht_complements_menu=\"\" data-chp_titre_menu=\"mon profile\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"-9 -7  20 21\">\n    <g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:1;\">\n        <circle cx=\"0\" cy=\"0\" r=\"6\"><\/circle>\n        <path d=\" M -8 11 C -6 6 6 6 8 11 \"><\/path>\n        <circle cx=\"-2\" cy=\"-1\" r=\"1\"><\/circle>\n        <circle cx=\"2\" cy=\"-1\" r=\"1\"><\/circle>\n        <path d=\"M -2 2 C -3 4 3 4 2 2 \"><\/path>\n        <path d=\"M 0 0 V 2 \"><\/path>\n        <path d=\"M -3 -1   H -6    \"><\/path>\n        <path d=\"M 3 -1   H 6    \"><\/path>\n        <path d=\"M -1 -1 c 0 -1 2 -1 2 0 \"><\/path>\n    <\/g>\n<\/svg><\/li>  ","le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"projets\",\"attributs\":{\"data-chi_id_source\":\"230\",\"data-chp_nom_source\":\"c_projets1.php\",\"data-chp_methode_menu\":\"page_projets_liste1\",\"data-chi_id_menu\":\"8\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des projets\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"t\u00e2ches\",\"attributs\":{\"data-chi_id_source\":\"61\",\"data-chp_nom_source\":\"c_taches1.php\",\"data-chp_methode_menu\":\"page_liste_des_taches1\",\"data-chi_id_menu\":\"1\",\"data-cht_initialisation_menu\":\"T0_chp_priorite_tache2(99)\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"Liste des t\u00e2ches\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\",\"data-cht_condition_menu\":\"appelf(\\n   nomf(isset),\\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n)\"}},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"fido\",\"attributs\":{\"data-chi_id_source\":\"225\",\"data-chp_nom_source\":\"c_dossiers1.php\",\"data-chp_methode_menu\":\"page_dossiers_liste1\",\"data-chi_id_menu\":\"9\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des dossiers et des fichiers\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\",\"data-cht_condition_menu\":\"appelf(\\n   nomf(isset),\\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n)\"}},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"241\",\"data-chp_nom_source\":\"c_sources1.php\",\"data-chp_methode_menu\":\"page_liste_des_sources1\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des sources des programmes\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\",\"data-cht_condition_menu\":\"appelf(\\n   nomf(isset),\\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n)\"}},{\"id_interne\":5,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"genres\",\"attributs\":{\"data-chi_id_source\":\"358\",\"data-chp_nom_source\":\"c_genres1.php\",\"data-chp_methode_menu\":\"page_liste_des_genres1\",\"data-chi_id_menu\":\"22\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des types de bonn\u00e9es dans la bdd\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\",\"data-cht_condition_menu\":\"appelf(\\n   nomf(isset),\\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n)\"}},{\"id_interne\":6,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"bases\",\"attributs\":{\"data-chi_id_source\":\"353\",\"data-chp_nom_source\":\"c_bases1.php\",\"data-chp_methode_menu\":\"page_liste_des_bases1\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des bases\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\",\"data-cht_condition_menu\":\"appelf(\\n   nomf(isset),\\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n)\"}},{\"id_interne\":7,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"requ\u00eates\",\"attributs\":{\"data-chi_id_source\":\"231\",\"data-chp_nom_source\":\"c_requetes1.php\",\"data-chp_methode_menu\":\"page_liste_des_requetes1\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des requ\u00eates sur les bases\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\",\"data-cht_condition_menu\":\"appelf(\\n   nomf(isset),\\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n)\"}},{\"id_interne\":8,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"(\ud83d\ude0a)\",\"attributs\":{\"data-chi_id_source\":\"240\",\"data-chp_nom_source\":\"c_revs1.php\",\"data-chp_methode_menu\":\"page_liste_des_revs1\",\"data-chi_id_menu\":\"13\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des revs\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);\",\"data-cht_condition_menu\":\"appelf(\\n   nomf(isset),\\n   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n)\"}},{\"id_interne\":9,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":6,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\"}},{\"id_interne\":10,\"id_interne_parent\":9,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"56\",\"data-chp_nom_source\":\"c_groupes1.php\",\"data-chp_methode_menu\":\"page_liste_des_groupes1\",\"data-chi_id_menu\":\"14\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des groupes\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\",\"data-cht_condition_menu\":\"et(\\n   appelf(\\n      nomf(isset),\\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n   ),\\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\\n)\"}},{\"id_interne\":11,\"id_interne_parent\":9,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"m\u00e9tiers\",\"attributs\":{\"data-chi_id_source\":\"58\",\"data-chp_nom_source\":\"c_metiers1.php\",\"data-chp_methode_menu\":\"page_liste_des_metiers1\",\"data-chi_id_menu\":\"15\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des m\u00e9tiers\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\",\"data-cht_condition_menu\":\"et(\\n   appelf(\\n      nomf(isset),\\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n   ),\\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\\n)\"}},{\"id_interne\":12,\"id_interne_parent\":9,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"acc\u00e8s\",\"attributs\":{\"data-chi_id_source\":\"50\",\"data-chp_nom_source\":\"c_acces1.php\",\"data-chp_methode_menu\":\"page_liste_des_acces1\",\"data-chi_id_menu\":\"16\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des acc\u00e8s\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\",\"data-cht_condition_menu\":\"et(\\n   appelf(\\n      nomf(isset),\\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n   ),\\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\\n)\"}},{\"id_interne\":13,\"id_interne_parent\":9,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"62\",\"data-chp_nom_source\":\"c_utilisateurs1.php\",\"data-chp_methode_menu\":\"page_liste_des_utilisateurs1\",\"data-chi_id_menu\":\"17\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des utilisateurs\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\",\"data-cht_condition_menu\":\"et(\\n   appelf(\\n      nomf(isset),\\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n   ),\\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\\n)\"}},{\"id_interne\":14,\"id_interne_parent\":9,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"356\",\"data-chp_nom_source\":\"c_autorisations1.php\",\"data-chp_methode_menu\":\"page_liste_des_autorisations1\",\"data-chi_id_menu\":\"18\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des autorisations\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\",\"data-cht_condition_menu\":\"et(\\n   appelf(\\n      nomf(isset),\\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n   ),\\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\\n)\"}},{\"id_interne\":15,\"id_interne_parent\":9,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"357\",\"data-chp_nom_source\":\"c_menus1.php\",\"data-chp_methode_menu\":\"page_liste_des_menus1\",\"data-chi_id_menu\":\"19\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"liste des menus\",\"data-cht_condition_php_menu\":\"isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;\",\"data-cht_condition_menu\":\"et(\\n   appelf(\\n      nomf(isset),\\n      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))\\n   ),\\n   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)\\n)\"}},{\"id_interne\":16,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":7,\"contenu\":\"outils\",\"attributs\":{\"data-liste_des_menus\":\"1\"}},{\"id_interne\":17,\"id_interne_parent\":16,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"matrice\",\"attributs\":{\"data-chi_id_source\":\"235\",\"data-chp_nom_source\":\"c_rev_mat1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_rev1))))\",\"data-chp_titre_menu\":\"convertion de rev vers matrice\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":18,\"id_interne_parent\":16,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"js\",\"attributs\":{\"data-chi_id_source\":\"234\",\"data-chp_nom_source\":\"c_rev_js1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"maj_interface2(\\n   modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_js_rev1)))\\n)\",\"data-chp_titre_menu\":\"convertion de javascript \",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":19,\"id_interne_parent\":16,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"html\",\"attributs\":{\"data-chi_id_source\":\"233\",\"data-chp_nom_source\":\"c_rev_html1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"21\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"maj_interface2(\\n   modifier(id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_html_rev1)))\\n)\",\"data-chp_titre_menu\":\"html\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":20,\"id_interne_parent\":16,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"php\",\"attributs\":{\"data-chi_id_source\":\"236\",\"data-chp_nom_source\":\"c_rev_php1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"maj_interface2(\\n   modifier(id(vv_txtarea_php_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_php_rev1)))\\n)\",\"data-chp_titre_menu\":\"convertion de php\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":21,\"id_interne_parent\":16,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sql\",\"attributs\":{\"data-chi_id_source\":\"237\",\"data-chp_nom_source\":\"c_rev_sql1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"maj_interface2(\\n   modifier(\\n      id(vv_txtarea_sql_rev1),\\n      composante(value),\\n      avec(\\n        valeur_de_localstorage(\\n          zones_sauvegard\u00e9es,\\n          ls_sql_rev1\\n        )\\n      )\\n   )\\n)\",\"data-chp_titre_menu\":\"convertion de sql\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":22,\"id_interne_parent\":16,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"css\",\"attributs\":{\"data-chi_id_source\":\"232\",\"data-chp_nom_source\":\"c_rev_css1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"maj_interface2(\\n   modifier(\\n      id(vv_txtarea_css_rev1),\\n      composante(value),\\n      avec(\\n         valeur_de_localstorage(\\n            zones_sauvegard\u00e9es,\\n            ls_css_rev1\\n         )\\n      )\\n   )\\n)\",\"data-chp_titre_menu\":\"convertion de css\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":23,\"id_interne_parent\":16,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"txt\",\"attributs\":{\"data-chi_id_source\":\"238\",\"data-chp_nom_source\":\"c_rev_texte1.php\",\"data-chp_methode_menu\":\"page1\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"maj_interface2(modifier(id(vv_txtarea_texte_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegard\u00e9es,ls_texte_rev1))))\",\"data-chp_titre_menu\":\"convertion de textes\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":24,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg xmlns=\\\"http:\/\/www.w3.org\/2000\/svg\\\" viewBox=\\\"-9 -7  20 21\\\">\\n    <g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:1;\\\">\\n        <circle cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"6\\\"><\/circle>\\n        <path d=\\\" M -8 11 C -6 6 6 6 8 11 \\\"><\/path>\\n        <circle cx=\\\"-2\\\" cy=\\\"-1\\\" r=\\\"1\\\"><\/circle>\\n        <circle cx=\\\"2\\\" cy=\\\"-1\\\" r=\\\"1\\\"><\/circle>\\n        <path d=\\\"M -2 2 C -3 4 3 4 2 2 \\\"><\/path>\\n        <path d=\\\"M 0 0 V 2 \\\"><\/path>\\n        <path d=\\\"M -3 -1   H -6    \\\"><\/path>\\n        <path d=\\\"M 3 -1   H 6    \\\"><\/path>\\n        <path d=\\\"M -1 -1 c 0 -1 2 -1 2 0 \\\"><\/path>\\n    <\/g>\\n<\/svg>\",\"attributs\":{\"data-chi_id_source\":\"59\",\"data-chp_nom_source\":\"c_profile1.php\",\"data-chp_methode_menu\":\"recupere_la_page_des_coordonnees\",\"data-chi_id_menu\":\"20\",\"data-cht_initialisation_menu\":\"\",\"data-cht_complements_menu\":\"\",\"data-chp_titre_menu\":\"mon profile\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}}]"}'),
('2','[*** non connecté ***]','2','2',NULL);


/*
  ===============================
  DONNEES A INSERER POUR : tbl_autorisations
  ===============================
*/

INSERT INTO tbl_autorisations (chi_id_autorisation,
chx_acces_autorisation,
chx_source_autorisation) VALUES
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
('21','1','357'),
('22','1','358');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_genres
  ===============================
*/

INSERT INTO tbl_genres (chi_id_genre,
chp_prefixe_genre,
chp_nom_genre,
chp_espece_genre,
che_longueur_genre,
che_est_primaire_genre,
che_est_incrément_genre,
che_est_obligatoire_genre,
che_a_init_genre,
che_init_est_mot_genre,
cht_valeur_init_genre,
che_est_parmis_genre,
cht_parmis_genre,
che_ordre_genre,
che_est_ts_genre,
cht_fonctions_genre,
che_est_nur_genre) VALUES
('1','cht','***indéfini***','TEXT',NULL,'0','0','0','0','0',NULL,'0',NULL,'23','0',NULL,'0'),
('2','chi','id primaire non nulle','INTEGER',NULL,'1','0','1','0','0',NULL,'0',NULL,'1','0',NULL,'0'),
('3','chp','varchar 64 NON NULLE','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,'2','0',NULL,'0'),
('4','chx','lien NON NULL','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,'4','0',NULL,'0'),
('5','che','zero_un non nulle','INTEGER',NULL,'0','0','1','1','0','0','1','0,1','11','0',NULL,'0'),
('6','cht','texte NULL','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,'10','0',NULL,'0'),
('7','che','entier NULL','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,'8','0',NULL,'0'),
('8','chx','lien NULL','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,'5','0',NULL,'0'),
('9','che','entier NON NULL','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,'6','0',NULL,'0'),
('10','che','entier NON NULL à zéro','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,'7','0',NULL,'0'),
('11','cht','texte NON NULL','TEXT',NULL,'0','0','1','0','0',NULL,'0',NULL,'9','0',NULL,'0'),
('12','chp','varchar 64 NULL','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,'3','0',NULL,'0'),
('13','chp','mot de passe','VARCHAR','256','0','0','0','1','0','NULL','0',NULL,'13','0',NULL,'0'),
('14','chd','dt23','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,'12','1',NULL,'0'),
('15','che','nur','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,'14','0',NULL,'1'),
('101','chp','espèce','VARCHAR','64','0','0','1','1','1','TEXT','1','TEXT,VARCHAR,INTEGER,FLOAT,DECIMAL','16','0',NULL,'0'),
('102','chp','préfixe','VARCHAR','3','0','0','1','1','1','cht','1','cht,chi,che,chx,chp,chd','15','0',NULL,'0'),
('103','chp','type_requete','VARCHAR','64','0','0','1','1','1','liste_ecran','1','liste_ecran,insert,select,update,delete,requete_manuelle','17','0',NULL,'0'),
('104','chp','fournisseur bdd','VARCHAR','64','0','0','1','1','1','sqlite','1','sqlite,mysql','18','0',NULL,'0'),
('105','chp','type_rev','VARCHAR','1','0','0','1','0','0','i','1','i,c,f','19','0',NULL,'0'),
('106','chp','nom de fichier','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,'21','0','test_du_nom_de_fichier1','0'),
('107','cht','fonctions de champ','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,'22','0','test_fonctions_de_c_fonctions1','0'),
('108','chp','nom de dossier','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,'20','0','test_du_nom_de_fichier1','0');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_projets
  ===============================
*/

INSERT INTO tbl_projets (chi_id_projet,
chp_nom_projet,
cht_commentaire_projet,
chx_dossier_requetes_projet,
chx_dossier_menus_projet,
che__nur_projet,
chd__dtm_projet,
chd__dtc_projet) VALUES
('1','environnement principal 1','C''est ce projet !
Normalement, on n''a plus à y toucher.','6','2','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('2','Projet virtuel qui doit exister mais rester vide','Projet virtuel qui doit exister mais rester vide.

On fabrique un clone de du projet 1
dans le répertoire rev_2 et on travaillera sur l''url frev/rev_2.

Dans le projet 2, le fichier __serveur/__definitions.php sera le seul fichier différent

Ce projet est utilisé pour la mise à jour du projet principal',NULL,NULL,'0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('3','modèle simple avec une table utilisateurs et une table taches','Ce modèle est défini pour faire un projet qui contient des pages qui sont accessibles que pour un utilisateur.

En conséquence, il n''y a pas de gestion de menu.','6','2','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_taches
  ===============================
*/

INSERT INTO tbl_taches (chi_id_tache,
chx_utilisateur_tache,
chp_texte_tache,
chp_priorite_tache,
chd__dtm_tache,
chd__dtc_tache,
che__nur_tache,
chx_projet_tache) VALUES
('1','1','capturer les erreurs php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('2','1','traiter le cookie initial quand il est incomplet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('3','1','mettre un # dans l''url pour pouvoir charger la page initiale','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('4','1','cookies.php en objet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('5','1','données bidon en cookie','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('6','1','404','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('7','1','worker','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('8','1','timer / indicateur socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('9','1','id en vv','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('10','1','fichiers et classes en c_','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('11','1','socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('12','1','limiter le nombre de messages sur l''interface','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('13','1','ne pas afficher le premier message ws ko','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('14','1','maj champ deverminage nouveau','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('15','1','recharger la page paramètres','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('16','1','déverminage en cookie','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('17','1','ctrl F5 après avoir cliqué sur un #','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('18','1','désactiver les boutons quand click','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('19','1','changer mes coordonnées','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('20','1','renommer les variables __x_statut ....','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('21','1','bdd todo','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('22','1','mettre le niveau de déverminage dans le php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('23','1','dump de la base en local','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('24','1','essayer de modifier dynamiquement le css','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('25','1','synchroniser session php / webSochet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('26','1','travaux en batch','7','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('27','1','gérer les versions js css etc','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('28','1','profils de css','50','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('29','1','interface : astuces','8','2025-08-15 14:32:17.544','2000-01-01 00:00:00','1','1'),
('30','1','CREATE UNIQUE INDEX texte_unique ON tbl_taches(chp_texte_tache);','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('31','1','sauvegarder la position dans la liste','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('33','1','sur mobile, ne pas faire de focus sur le premier champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('34','1','pas de webSocket sur ks.app','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('35','1','détecter mobile ( touch )','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('36','1','highlight des menus','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('37','1','lors de la première connexion, initialiser les tailles des css en fonction de la taille de l''écran','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('38','1','sur ipad, supprimer les double click pour agrandir

if( ecran_tactile===true && genre_safari===true && genre_crios === false)','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('39','1','supprimer le double click sur ios

//https://stackoverflow.com/a/42162450/3717718
','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('40','1','marges gauches et droites','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('41','1','se reconnecter au webso','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('42','1','ajouter le niveau de deboggage dans le websocket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('43','1','déverminage serveur wso','50','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('44','1','Prévenir le ws quand on se déconnecte','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('45','1','coccinelle déverminage
<svg xmlns="http://www.w3.org/2000/svg" viewBox="13 11  82 84"><path d="M 18 85 L 23 82 L 21 73 L 27 67 M 30 40 L 25 40 L 21 49 L 16 49 M 34 35 L 25 30 L 23 24 M 44 19 L 39 14 M 59 19 L 64 14 M 69 35 L 78 30 L 80 24 M 73 40 L 78 40 L 82 49 L 87 49 M 76 68 L 82 73 L 80 82 L 85 85 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path><path d=" M 36 34 C 35 12 68 12 67 34 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:slategray;stroke-width:1;fill-opacity:1;"></path><path d=" M 36 33 C 30 38 25 48 25 56  C 25 68 33 87 52 87 c 15 0 26 -17 26 -30 C 78 47 73 39 67 33 c 0 1 -13 1 -15 1 C 49 34 36 34 36 33" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:red;stroke-width:1;fill-opacity:1;"></path><ellipse cx="44" cy="25" rx="2.5" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(30 44 25 )" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="57" cy="18" rx="2.5" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(1 40) rotate(-32 0 0)  " style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="36" cy="58" rx="5" ry="6.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="67" cy="58" rx="5" ry="6.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="41" cy="42" rx="2.5" ry="2.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;"></ellipse><ellipse cx="62" cy="42" rx="2.5" ry="2.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="40" cy="74" rx="3" ry="4.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(-40 40 74 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="57" cy="89" rx="3" ry="4.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(6 -15 ) rotate(30 57 89 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><path d=" M 51 35 V 86 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path></svg>','51','2025-07-31 11:57:22.993','2000-01-01 00:00:00','2','1'),
('46','1','http://localhost/frev/rev_1/__client/?a=1','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('47','1','page rev vers matrice','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('48','1','initialiser la zone rev avec le localstorage','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('49','1','mettre le rendu en js
NON trop compliqué, le garder en php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('50','1','conv js','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('51','1','rev vers js','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('52','1','zone d''édition textarea','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('53','1','cookie socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('54','1','optimiser les temps de chargement','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('55','1','traiter les messages d''erreur','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('56','1','placer le curseur dans une textarea','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('57','1','conv html','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('58','1','conv php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('59','1','conv php nikic','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('60','1','traiter les messages d''erreur de php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('61','1','sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('62','1','css','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('63','1','projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('64','1','bouton retour à la liste','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('65','1','bug lien interne après changement de version','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('66','1','scroll horizontal sur menu haut','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('67','1','bases','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('68','1','autorisations

se connecter à 

http://localhost/frev/rev_1/__client/#c_rev_vers_mat1.page1(),indice_menu(50),maj_interface2(modifier(%20id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(''zones_sauvegard%C3%A9es'',''ls_rev1''))))

sans être connecté

#c_pages1.recupere_la_page_d_accueil()
#c_pages1.recupere_la_page_d_aide()
#c_pages1.recupere_la_page_de_connexion()','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('69','1','dossiers','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('70','1','activer / désactiver le bouton du menu','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('71','1','id parent de dossier avec <dialog>','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('72','1','chemin complet d''un dossier','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('73','1','vérifier qu''un dossier n''a pas d''enfants avant de le supprimer','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('74','1','transmettre les donnes_retournees aux sql 
et mettre un message d''erreur en pile','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('75','1','ne pas enregistrer un dossier sur lui même ou au dessus de lui même','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('76','1','bib php dans un autre répertoire','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('77','1','autocapitalize="off" sur les champs input','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('78','1','ne pas mettre plus de 1000 éléments dans un dossier','12','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('79','1','remettre le bouton paramètres quand on se déconnecte','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('80','1','table des bugs','14','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('81','1','faire une sauvegarde d''un fichier supprimé','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('82','1','supprimer une projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('83','1','ajouter les champs 
nut numero technique de modification
dtm date technique de modification
dtc date technique de création','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('84','1','renommer un dossier','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('85','1','quand on clique sur 🖐, mettre la zone en haut de l''écran','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('86','1','optimiser les tableaux des matrices et des caractères','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('87','1','gestion des dossiers pour les utilisateurs autres que 1','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('88','1','sortable pour svg','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('89','1','cliquer en dehors du "dialog" pour le fermer','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('90','1','dupliquer une table','15','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('91','1','remplacer cible par projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('92','1','quand on modifie le nom d''une table
alors modifier aussi le nom_de_la_table_pour_l_index dans l''index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('93','1','corriger auto increment','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('94','1','ajouter le type du meta dans les sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('96','1','reprendre les commentaires meta dans sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('97','1','mettre les valeurs
            a_une_valeur_par_defaut(0),
            la_valeur_par_defaut_est_caractere(0),
            valeur_par_defaut( ''''),
dans le champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('98','1','afficher/masquer les champs dans le svg','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('99','1','corriger le bug : après tri des champs, on pert l''index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('100','1','ne pas masquer un champ si c''est une référence, une clé, un auto_increment
ou si le champ appartient à un index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('101','1','ajouter des tests de validité sur le svg base','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('102','1','sauvegarder une table sans champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('103','1','requetes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('104','1','mettre le dump de la base dans la liste des bases','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('105','1','''prefixe_bdd'' PREFIXE_BDD','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('106','1','positionnement du bouton supprimer les messages','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('107','1','ajouter le bouton "ajouter un commentaire"','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('108','1','améliorer l''éditeur de requêtes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('109','1','renommer le champ dtm_tache de la table requetes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('110','1','changer le rev du champ quand on le renomme','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('111','1','remplacer les sql_nn par des sql_iii(nn,)','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('112','1','fonction pour gérer les dépendances
sql_dependances()','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('113','1','renommer un champ d''index','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('114','1','dans le concepteur de requete, mettre les champs mis à jour pour un update sur plusieurs lignes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('115','1','mettre en place des dépendances de champ sur des bases externes','50','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('116','1','ajouter le test des dépendances dans les php delete','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('117','1','renommer une table dans le base','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('118','1','sources','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('119','1','modifier les updates','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('120','1','en mode déverminage, afficher le numero de reuqete liste','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('121','1','pourquoi certains fichiers sql sont supprimés','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('122','1','icone supprimer 🗑','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('123','1','rev de texte','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('124','1','recompiler les updates','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('125','1','intégrer la table rev dans la base physique','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('126','1','projet 2','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('127','1','reprendre les meta des sql','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('128','1','compiler les requêtes à partir de la liste','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('129','1','remplacer select_liste par liste_ecran','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('130','1','compiler les sources
html
js
php
sql
css
texte
rev','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('132','1','virer chp_chemin_dossier','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('133','1','flag dossier binaire','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('134','1','begin transaction','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('135','1','ordonner un champ sur le schema uniquement','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('136','1','mettre le rev de travail de la base dans le rev','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('137','1','intégrer sql_parser_cst.js pour pouvoir faire passer :
alter table t DROP column a;

select * from toto;
/*
  alter table tata DROP column tot;
*/','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
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
','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('139','1','ajouter un source binaire ( ico )','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('140','1','ajouter un source qui pointe sur un autre source ( favicon )','50','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('141','1','drapeau répertoire contient des sources générés','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('142','1','virer che_binaire_dossier','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('143','1','copier un source dans un autre répertoire','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('144','1','virer chp_type_source','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('145','1','supprimer les éléments inutils du dump de la base','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('146','1','sql_29, sql_30

champ_numero_de_revision
gerer_champ_numero_de_revision( champ( `chi__nur_tache` ))

      gerer_champ_date_creation( champ( `chd__dtc_tache` ) , format(23)),
      gerer_champ_date_modification( champ( `chd__dtm_tache` ) , format(23))


champ_date_modification(`chd__dtm_tache`)
flag champ_date_modification','99','2025-06-13 17:04:41.468','2000-01-01 00:00:00.000','4','1'),
('147','1','date_default_timezone_set en fonction de l''utilisateur','13','2025-07-29 17:40:19.125','2000-01-01 00:00:00.000','1','1'),
('148','1','dans projet 2, enregistrer les matrices rev

bases

requetes

sources html sur disque
sources php sur disque
sources js sur disque
sources sql sur disque
sources css sur disque
sources rev sur disque
sources txt sur disque NON','99','2025-06-15 09:10:42.213','2025-06-13 17:05:45.323','10','1'),
('149','1','socket : .ts en .js','99','2025-06-16 09:01:24.706','2025-06-16 09:01:24.706','0','1'),
('150','1','renommer les champs chi__num en che__nur','99','2025-06-17 11:45:14.619','2025-06-17 10:08:32.544','3','1'),
('151','1','lors de la compilation d''un php, 
mettre les sources au format SQL des requetes sql dans le source php','99','2025-06-17 14:11:31.120','2025-06-17 10:40:44.982','1','1'),
('152','1','décomposer les fichiers session de php pour le wso','99','2025-06-19 18:22:27.003','2025-06-17 11:54:31.823','2','1'),
('154','1','déterminer le répertoire des requêtes dans le projet','99','2025-06-19 18:21:27.820','2025-06-19 18:21:27.820','0','1'),
('155','1','quand on crée un nouveau projet, 
il faut créer un clone de la base système dans lequel travailler','99','2025-06-20 10:44:39.371','2025-06-20 10:44:39.371','0','1'),
('156','1','quand on se déconnecte d''un projet, il faut supprimer les menus bases ...','99','2025-06-20 10:47:23.986','2025-06-20 10:47:23.986','0','1'),
('157','1','ajouter répertoire des requetes au niveau du projet
et utiliser cette donnée...','99','2025-06-21 16:57:19.818','2025-06-21 13:36:20.422','2','1'),
('158','1','quand on ajoute un champ fils, dans le dessin svg, le lien ne n''affiche pas correctement','99','2025-06-23 12:39:41.331','2025-06-23 12:39:41.331','0','1'),
('159','1','supprimer les projets >2 dans le projet 2','99','2025-06-23 16:18:28.927','2025-06-23 16:18:28.927','0','1'),
('160','1','comparer les sources entre rev1 et 2 et faire un bouton copier','99','2025-06-23 16:41:49.995','2025-06-23 16:41:49.995','0','1'),
('161','1','dans rev_2 importer un source de rev1','99','2025-06-24 09:36:54.845','2025-06-24 09:36:54.845','0','1'),
('162','1','voir message conversion dans le php (322727) [1742]','99','2025-06-24 13:49:09.573','2025-06-24 13:49:09.573','0','1'),
('163','1','moncrlf','99','2025-06-25 10:22:08.728','2025-06-25 10:22:08.728','0','1'),
('164','1','quand on active un projet, il faut charger les sources sql','99','2025-06-25 11:05:15.874','2025-06-25 11:05:15.874','0','1'),
('165','1','inporter/exporter les fichiers de rev 1 2','99','2025-06-25 12:06:19.837','2025-06-25 12:06:19.837','0','1'),
('166','1','rechercher un source dont le nom contient __

select * from tbl_sources where chp_nom_source like ''%\_%'' ESCAPE ''\'';','99','2025-06-25 14:42:17.528','2025-06-25 12:10:16.103','2','1'),
('167','1','double \ dans le .bat','99','2025-06-25 14:14:55.962','2025-06-25 14:14:55.962','0','1'),
('168','1','faire un 
comme1(%xxx)
comme2(xxx%)
comme3(xxx)','11','2025-06-26 11:55:00.122','2025-06-26 11:34:12.549','1','1'),
('169','1','initialiser projet standard','3','2025-06-26 15:39:59.054','2025-06-26 15:39:59.054','0','1'),
('170','1','initialiser ecran standard d''une table','6','2025-06-26 15:40:44.916','2025-06-26 15:40:44.916','0','1'),
('171','1','gérer les menus','99','2025-07-10 16:37:39.788','2025-06-26 17:24:34.522','1','1'),
('172','1','gérer les utilisateurs et les groupes et les métiers','99','2025-06-27 10:25:45.031','2025-06-27 10:13:04.627','1','1'),
('173','1','gérer les paramètres ( liste des constantes )
type de champbdd','5','2025-07-04 08:19:23.308','2025-06-27 10:13:20.409','3','1'),
('174','1','mettre en github
','99','2025-06-27 11:21:35.817','2025-06-27 11:21:35.817','0','1'),
('175','1','faire un dump de la base du projet 3','99','2025-06-28 12:41:16.455','2025-06-28 12:40:58.038','1','1'),
('176','1','supprimer les afr','99','2025-06-30 10:17:00.146','2025-06-30 10:17:00.146','0','1'),
('177','1','créer la base appli dans un autre répertoire que les bases de données','99','2025-07-01 09:20:32.962','2025-07-01 09:20:32.962','0','1'),
('178','1','ajouter un dictionnaire de données(genre)
permet de spécifier les champs date, date_heure, lien vers parent, id','99','2025-08-10 10:41:29.780','2025-07-02 10:46:53.367','4','1'),
('179','1','corriger fichier_des_dependances','99','2025-07-02 11:46:09.399','2025-07-02 11:46:09.399','0','1'),
('180','1','corriger rev_php_des_sql','99','2025-07-03 09:44:55.718','2025-07-03 09:44:55.718','0','1'),
('181','1','quand on ajoute une tâche et on revient à la liste, réordonner les tâches','99','2025-07-03 09:46:02.668','2025-07-03 09:46:02.668','0','1'),
('182','1','svg lien ajouter gauche droite','99','2025-07-06 09:27:00.963','2025-07-04 08:22:18.236','1','1'),
('183','1','lisad :

lister 
insérer 
sélectionner 
altérer/amender 
détruire','80','2025-07-06 13:23:50.990','2025-07-06 13:23:42.485','1','1'),
('184','1','bug quand on crée un nouvelle requête, le php c''est pas créé sur disque','99','2025-07-07 10:35:44.602','2025-07-07 10:35:44.602','0','1'),
('185','1','gérer les pages','99','2025-07-07 12:54:11.814','2025-07-07 12:54:11.814','0','1'),
('186','1','gérer les accès des utilisateurs','99','2025-07-08 15:13:34.065','2025-07-08 15:12:51.611','1','1'),
('187','1','supprimer chx_groupe_utilisateur chx_metier_utilisateur','99','2025-07-09 09:41:52.450','2025-07-09 09:41:52.450','0','1'),
('188','1','ajouter NULL si chx = '''' sur les insert et delete','99','2025-07-09 13:55:32.628','2025-07-09 13:54:53.645','1','1'),
('189','1','Lors de l''insertion dans la table des pages, vérifier l''existance de méthode du source','99','2025-07-09 15:40:56.820','2025-07-09 14:58:59.943','1','1'),
('190','1','supprimer chp_lien_rev_page','99','2025-07-09 15:22:03.310','2025-07-09 15:22:03.310','0','1'),
('191','1','rechercher sql_24','99','2025-07-09 15:50:13.424','2025-07-09 15:50:13.424','0','1'),
('192','1','bouton pop up pour voir le contenu d''une requête à partir de la liste des requêtes ','99','2025-07-09 17:42:12.440','2025-07-09 15:50:33.376','1','1'),
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
</select>','99','2025-07-22 14:39:11.892','2025-07-09 16:26:01.691','2','1'),
('194','1','optimiser le transfert pour la matrice de sql_parser_cst.js	','99','2025-07-09 16:31:23.198','2025-07-09 16:31:23.198','0','1'),
('195','1','dans svg, ajouter un les boutons pour les bases/tables/champs des tables liées','99','2025-07-09 17:43:23.330','2025-07-09 17:43:23.330','0','1'),
('196','1','initialiser les champs filtres d''une sous page','99','2025-07-19 11:11:25.033','2025-07-10 09:52:20.444','1','1'),
('197','1','le caractère 🟥 ne passe pas sur ma tablette
faire un carré svg
⬛🔲🗨◻⏹','99','2025-07-21 17:02:50.100','2025-07-10 09:58:19.160','4','1'),
('198','1','dans les pages, proposer une liste de méthodes quand on choisir un source','99','2025-07-10 10:17:39.087','2025-07-10 10:17:39.087','0','1'),
('199','1','compiler le prérequis du menu','99','2025-07-14 08:40:32.303','2025-07-12 08:22:58.170','1','1'),
('200','1','quand on modifie une page, il faut recompiler les menus','99','2025-07-15 13:49:22.638','2025-07-15 13:49:22.638','0','1'),
('201','1','ajouter les traitements de 
nom_champ_dans_parent1
nom_libelle_dans_parent1
dans les sous listes comme dans c_sources1.php','99','2025-07-15 17:21:51.755','2025-07-15 16:12:27.924','1','1'),
('202','1','bibliothèque de svg','4','2025-07-16 10:48:01.891','2025-07-16 10:47:25.371','1','1'),
('203','1','renuméroter les requetes à partir de 101','99','2025-07-17 15:09:37.352','2025-07-17 10:11:14.041','2','1'),
('204','1','sql_5, suppression de rev, ne dépend de pernonne','99','2025-07-17 12:14:57.332','2025-07-17 12:07:20.343','1','1'),
('205','1','bug quand on renumérote une requete il y a 2 fois <?php','99','2025-07-18 10:50:06.307','2025-07-18 10:50:06.307','0','1'),
('206','1','renuméroter un source','99','2025-07-24 12:50:11.622','2025-07-24 12:50:11.622','0','1'),
('207','1','remplacer php par deno','50','2025-07-27 09:47:30.190','2025-07-27 09:47:14.801','1','1'),
('208','1','chp_commentaire_projet => chTTTTT_commentaire_projet','99','2025-07-29 11:37:04.000','2025-07-29 11:37:04.000','0','1'),
('209','1','ajouter un bouton enregistrer dans la modification d''un source','99','2025-07-29 16:48:06.039','2025-07-29 15:44:38.467','1','1'),
('210','1','travailler la redirection si on n''est pas authentifié','99','2025-07-29 17:52:34.498','2025-07-29 17:52:34.498','0','1'),
('211','1','ajouter une référence à la pagination dans les listes','99','2025-07-31 11:56:33.898','2025-07-31 09:07:20.616','1','1'),
('212','1','liens internes en #','99','2025-07-31 13:52:57.967','2025-07-31 13:52:57.967','0','1'),
('213','1','Gérer les versions
nouvelle version','99','2025-08-01 14:32:15.239','2025-08-01 14:32:15.239','0','1'),
('214','1','renommer un champ

supprimer un champ
ajouter un champ

quand on renomme un champ de la base 1 de rev_1 il faur renommer les champs de toutes les bases rev_n
Exemple chp_commentaire_projet => cht_commentaire_projet','99','2025-08-02 14:19:05.165','2025-08-01 15:08:43.406','2','1'),
('215','1','interface : case à cocher "se souvenir de moi" sur la page de connexion','9','2025-08-16 13:27:11.830','2025-08-03 09:25:28.660','2','1'),
('216','1','intégrer mon tri','99','2025-08-03 10:03:21.913','2025-08-03 10:03:21.913','0','1'),
('217','1','bug réordonner champs sur projet 3','99','2025-08-05 14:13:00.676','2025-08-05 14:13:00.676','0','1'),
('218','1','tri_arbre','99','2025-08-08 11:02:44.128','2025-08-08 11:02:44.128','0','1'),
('219','1','source_requete

            ''sql0'' => $sql0 ,
            ''bdd'' => $GLOBALS[__BDD][BDD_NUMERO_1],
','99','2025-08-08 15:09:52.677','2025-08-08 12:41:17.737','3','1'),
('220','1','ajouter un champ espece base et taille_espece','99','2025-08-09 12:38:17.257','2025-08-09 12:33:15.508','2','1'),
('221','1','taxon, espèce, famille, classification, qualité, groupe, collection, genre','80','2025-08-10 10:36:21.692','2025-08-10 09:27:19.788','1','1'),
('222','1','tbl_pages
tbl_menus
chx_acces_page sql 188 189 190 191 198 300 303 304

un accès = métier groupe

autorisation = acces source

menu = autorisation methode du source

afr : quand le source a appel le source b, 
il faut une autorisation déléguée sur la méthode appelée','99','2025-08-12 14:42:35.283','2025-08-12 12:44:14.024','7','1'),
('223','1','interface : pouvoir agrandit la zone de message ( vv_supprimer_les_messages_3 )','99','2025-08-27 08:02:50.904','2025-08-15 14:23:33.195','3','1'),
('224','1','dans ajouter un formule de requete 
nouvelle requete liste
clic sur condition
il n''y a que de comme','99','2025-08-16 13:28:59.257','2025-08-16 13:28:59.257','0','1'),
('225','1','dans requete update
sur formule critere
mettre le curseur au bon endroit et écrire le champ correctement','99','2025-08-17 16:44:59.342','2025-08-17 16:44:59.342','0','1'),
('226','1','dans svg, corriger le déplacement d''une table ','99','2025-08-18 08:00:20.749','2025-08-18 08:00:20.749','0','1'),
('227','1','renuméroter un genre','99','2025-08-18 11:17:14.312','2025-08-18 11:17:14.312','0','1'),
('228','1','trier les genres','99','2025-08-18 16:43:49.623','2025-08-18 16:43:49.623','0','1'),
('229','1','corriger le bouton du menu','99','2025-08-20 15:27:36.476','2025-08-20 15:27:36.476','0','1'),
('230','1','lien virtuel sur la table tache','99','2025-08-21 09:44:34.241','2025-08-21 09:44:34.241','0','1'),
('231','1','masquer le menu organisation quand on est sur un projet autre que 1','99','2025-08-22 08:41:02.119','2025-08-21 13:34:35.910','1','1'),
('233','1','bug liste des taches avec plusieurs id','99','2025-08-22 08:40:37.293','2025-08-22 08:40:37.293','0','1'),
('234','1','supprimer chx_acces_menu chx_parent_menu','99','2025-08-22 09:28:50.759','2025-08-22 09:28:50.759','0','1'),
('235','1','popover
https://mdn.github.io/dom-examples/popover-api/
https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes/popover','50','2025-08-23 12:35:47.880','2025-08-23 12:35:31.595','1','1'),
('236','1','un nom de source ou un nom de dossier ne doit contenir que les caractères a-z,0-9,._','99','2025-08-26 17:01:30.665','2025-08-23 15:09:07.105','0','1'),
('237','1','virer les compteur de sessions compteur_session_php1','99','2025-08-24 09:10:19.979','2025-08-24 09:07:32.258','1','1'),
('238','1','virer sortable','99','2025-08-24 09:44:25.590','2025-08-24 09:44:25.590','0','1'),
('239','1','virer champ_date_creation , champ_date_modification , champ_numero_de_revision , 

virer
      gerer_champ_numero_de_revision( champ( `chi__nur_tache` ))
      gerer_champ_date_creation( champ( `chd__dtc_tache` ) , format(23)),
      gerer_champ_date_modification( champ( `chd__dtm_tache` ) , format(23))

','99','2025-08-26 16:16:12.402','2025-08-26 15:17:41.241','0','1'),
('240','1','lisad

insertion / ajout
suppression / delete
modification / alteration

distinction_pour_isad
 d''un utilisateur / d''un accès / d''un projet / d''une tâche / d''un cheval

distinction_pour_liste

liste des utilisateurs
liste des chevaux
liste des tâches
liste des projets



suppression 
modification 

de l''utilisateur / de l''accès / du projet / de la tâche / du cheval



suppression/modification de la tâche
suppression du cheval
suppression du projet

','0','2025-08-28 13:51:13.041','2025-08-28 13:30:48.719','0','1');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_utilisateurs
  ===============================
*/

INSERT INTO tbl_utilisateurs (chi_id_utilisateur,
chp_nom_de_connexion_utilisateur,
chp_mot_de_passe_utilisateur,
chp_parametres_utilisateur,
chi_compteur1_utilisateur,
chi_compteur_socket1_utilisateur,
chx_acces_utilisateur,
chd__dtm_utilisateur,
chd__dtc_utilisateur,
che__nur_utilisateur) VALUES
('1','webmaster@example.com','$2y$10$qHgCpD5HuoasVWUqBq54ZuOt9yoQbMbZd/0RU9taTNLD2UWnCgPZu',NULL,'718','1307','1','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('2','anonyme',NULL,NULL,'0','0','2','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_sources
  ===============================
*/

INSERT INTO tbl_sources (chi_id_source,
chx_projet_id_source,
chp_nom_source,
cht_rev_source,
cht_genere_source,
che_binaire_source,
chx_dossier_id_source,
cht_commentaire_source,
chd__dtm_source,
chd__dtc_source,
che__nur_source) VALUES
('1','1','.htaccess',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('2','1','favicon.ico',NULL,NULL,'1','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('3','1','index.html',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('4','1','page404.html',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('5','1','rvjb.png',NULL,NULL,'1','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('11','1','.htaccess',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('12','1','__definitions.php',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('13','1','__version.txt',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('14','1','app.php',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('21','1','.htaccess',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('22','1','__app.php',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('23','1','favicon.ico',NULL,NULL,'1','7',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('24','1','index.php',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('25','1','page404.html',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('50','1','c_acces1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('51','1','c_accueil1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('52','1','c_aides1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('53','1','c_connexion1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('54','1','c_cookies1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('55','1','c_divers1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('56','1','c_groupes1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('58','1','c_metiers1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('59','1','c_profile1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('60','1','c_rev_vers_matrice1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('61','1','c_taches1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('62','1','c_utilisateurs1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('63','1','c_sql0.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('79','1','bat_pour_lire_fichier_session.bat',NULL,NULL,'0','12',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('80','1','lire_fichier_session.php',NULL,NULL,'0','12',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('81','1','server2.js',NULL,NULL,'0','12',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('82','1','test001.js',NULL,NULL,'0','12',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('154','1','c_fonctions_js1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('156','1','c_interface1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('158','1','c_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('167','1','c_worker1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('201','1','c_astjs_vers_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('202','1','c_astphpnikic_vers_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('203','1','c_astphpparseur_vers_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('204','1','c_astpostcss_vers_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('205','1','c_astsql_parseur_cst_vers_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('223','1','test.js',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('224','1','test.sql',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('225','1','c_dossiers1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('229','1','test.php',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('230','1','c_projets1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('231','1','c_requetes1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('232','1','c_rev_css1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('233','1','c_rev_html1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('234','1','c_rev_js1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('235','1','c_rev_mat1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('236','1','c_rev_php1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('237','1','c_rev_sql1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('238','1','c_rev_texte1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('240','1','c_revs1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('241','1','c_sources1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('243','1','c_svg1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('246','1','test_hdf.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('253','1','c_astsqliteparseur_vers_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('255','1','c_html_vers_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('257','1','c_requete_sql1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('259','1','c_rev_vers_css1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('260','1','c_rev_vers_html1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('261','1','c_rev_vers_js1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('262','1','c_rev_vers_php1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('263','1','c_rev_vers_sql1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('264','1','c_rev_vers_texte1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('265','1','c_svg_bdd1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('266','1','c_texte_vers_rev1.js',NULL,NULL,'0','10',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('269','1','acorn.js',NULL,NULL,'0','11',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('270','1','php_parser.js',NULL,NULL,'0','11',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('271','1','postcss0.js',NULL,NULL,'0','11',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('272','1','sql_parser_cst.js',NULL,NULL,'0','11',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('273','1','sqlite_parser.js',NULL,NULL,'0','11',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('278','1','PHPSERIALIZE.js',NULL,NULL,'0','12',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('328','1','test.css',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('330','1','tictactoe.html',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('331','1','test_tictactoe.html.rev',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000'),
('353','1','c_bases1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('354','1','tri_arbre.html',NULL,'<!DOCTYPE html>
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
 
 
</html>','0','11',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('355','1','tri_arbre1.js',NULL,'"use strict";
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
    
}','0','11',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('356','1','c_autorisations1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('357','1','c_menus1.php',NULL,NULL,'0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('358','1','c_genres1.php',NULL,'<?php
class c_menus1{
    private $sql0=null;
    /*
      erreur lors de l''"action" pour 
      Attention : du le cheval / de cheval vs de la menu / du la menu
    */
    private const LE_LA_ELEMENT_GERE = ''le menu'';
    private const UN_UNE_ELEMENT_GERE = ''un menu'';
    /*
      =============================================================================================================
    */
    public function __construct(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . ''c_sql0.php'');
        $this->sql0=new c_sql0(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
    }
    /*
      =============================================================================================================
      traitement des formulaires des menus
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === ''c_menus1.formulaire1'' && $mat[$i][2] === ''f'' && $mat[$i][8] >= 1){

                $conteneur1='''';
                $action1='''';
                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === ''conteneur1'' && $mat[$j + 1][2] === ''c''){

                        $conteneur1=$mat[$j + 1][1];

                    }else if($mat[$j][1] === ''action1'' && $mat[$j + 1][2] === ''c''){

                        $action1=$mat[$j + 1][1];
                    }

                }
                
                if($action1 !== ''''){

                    
                    if($action1 === ''page_menus_creer1''
                       || $action1 === ''page_menus_modifier1''
                       || $action1 === ''page_menus_supprimer1''
                       || $action1 === ''page_liste_des_menus1''
                       || $action1 === ''page_menus_dupliquer1''
                    ){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]=''action non traitée "'' . $action1 . ''" ['' . __LINE__ . '']'';
                    }


                }else if($conteneur1 === ''vv_menus_modifier1''
                   || $conteneur1 === ''vv_menus_creer1''
                   || $conteneur1 === ''vv_menus_supprimer1''
                   || $conteneur1 === ''vv_menus_filtre1''
                ){

                    $this->$conteneur1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );

                }else{

                    $donnees_retournees[__x_signaux][__xal][]=''traitement à réaliser pour $donnees_recues '' . var_export($donnees_recues,true) . '' ['' . __LINE__ . '']'';
                }

                break;

            }

        }
    }
    /*
      =============================================================================================================
    */
    function vv_menus_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_menus1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === ''page_liste_des_menus1'' && $mat[$i][2] === ''f'' && $mat[$i][8] === 0){

                $page_liste_des_menus1=true;
                break;

            }

        }
        
        
        
         
         
        $tt326=$this->sql0->sql_iii(
             /*sql_326()*/ 326,
            array(/**/
                ''T0_chi_id_autorisation'' => $donnees_recues[__xva][''chx_autorisation_menu''],
                ''T0_chx_projet_id_source'' => $_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']
            ),
            $donnees_retournees
        );
        
        if($tt326[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]=''erreur lors de la modification pour '' . self::LE_LA_ELEMENT_GERE . '' ['' . __LINE__ . '']'';
            return;

        }

        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . ''c_dossiers1.php'');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $dossier=$obj_doss->construire_chemin($tt326[__xva][0][''T1.chx_dossier_id_source'']);
        
        if($dossier[''__xst''] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=''erreur lors de la modification pour '' . self::LE_LA_ELEMENT_GERE . '' ['' . __LINE__ . '']'';
            return;

        }

        /* echo __FILE__ . '' '' . __LINE__ . '' __LINE__ = <pre>'' . var_export( $tt326[__xva][0] , true ) . ''</pre>'' ; exit(0);*/
        
        if(!is_file($dossier[''__xva''][''chemin_absolu''] . DIRECTORY_SEPARATOR . $tt326[__xva][0][''T1.chp_nom_source''])){

            $donnees_retournees[__x_signaux][__xer][]=''erreur lors de la modification pour '' . self::LE_LA_ELEMENT_GERE . '' ['' . __LINE__ . '']'';
            return;

        }

        require_once($dossier[''__xva''][''chemin_absolu''] . DIRECTORY_SEPARATOR . $tt326[__xva][0][''T1.chp_nom_source'']);
        $class_methods=get_class_methods(str_replace(''.php'','''',$tt326[__xva][0][''T1.chp_nom_source'']));
        $trouve=false;
        $non_trouve='''';
        foreach($class_methods as $k1 => $v1){
            
            if($v1 === $donnees_recues[__xva][''chp_methode_menu'']){

                $trouve=true;
                break;

            }
            if($v1!==''__constructor''){
                $non_trouve=''<br />"''.$v1.''"''.$non_trouve;
            }

        }
        
        if($trouve === false){

            $donnees_retournees[__x_signaux][__xer][]=''méthode non trouvée parmis  '' . $non_trouve . '' ['' . __LINE__ . '']'';
            return;

        }
        
        


        $donnees_sql=array( array(/**/
                    ''chx_autorisation_menu'' => $donnees_recues[__xva][''chx_autorisation_menu''] === '''' ? null : $donnees_recues[__xva][''chx_autorisation_menu''],
                    ''cht_libelle_menu'' => $donnees_recues[__xva][''cht_libelle_menu''] === '''' ? null : $donnees_recues[__xva][''cht_libelle_menu''],
                    ''chp_titre_menu'' => $donnees_recues[__xva][''chp_titre_menu''] === '''' ? null : $donnees_recues[__xva][''chp_titre_menu''],
                    ''chp_methode_menu'' => $donnees_recues[__xva][''chp_methode_menu''] === '''' ? null : $donnees_recues[__xva][''chp_methode_menu''],
                    ''cht_initialisation_menu'' => $donnees_recues[__xva][''cht_initialisation_menu''] === '''' ? null : $donnees_recues[__xva][''cht_initialisation_menu''],
                    ''cht_complements_menu'' => $donnees_recues[__xva][''cht_complements_menu''] === '''' ? null : $donnees_recues[__xva][''cht_complements_menu''],
                ));
        /* echo __FILE__ . '' '' . __LINE__ . '' $donnees_sql = <pre>'' . var_export( $donnees_sql , true ) . ''</pre>'' ; exit(0);*/
        $tt=$this->sql0->sql_iii(
             /*sql_323()*/ 323,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . '' ['' . __LINE__ . '']'';
            return;

        }else if($tt[''changements''] === 1){

            $donnees_retournees[__xst]=__xsu;
            
            if($page_liste_des_menus1 === true){

                $this->page_liste_des_menus1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $action=''chi_id_menu('' . $tt[''nouvel_id''] . '')'';
                $obj_matrice=$GLOBALS[''obj_rev1'']->rev_vers_matrice($action);
                $this->page_menus_modifier1(
                    $donnees_retournees,
                     /*matrice*/ $obj_matrice[__xva],
                    $donnees_recues
                );
                $donnees_retournees[__x_action]=''c_menus1.formulaire1(action1(page_menus_modifier1),chi_id_menu('' . $tt[''nouvel_id''] . ''))'';
            }


        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . '' aucune modification efféctuée'';
        }

        $o1='''';
    }
    /*
      =============================================================================================================
    */
    function vv_menus_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txtPar=''__num_page(0)'';
        $nouvelles_valeurs=array( ''__num_page'' => 0);
        foreach($donnees_recues[__xva] as $k0 => $v0){
            
            if($k0 !== ''__num_page''){

                $nouvelles_valeurs[$k0]=$v0;
                
                if(is_numeric($v0)){

                    $txtPar .= '','' . $k0 . ''('' . $v0 . '')'';

                }else{

                    $txtPar .= '','' . $k0 . ''(\'''' . str_replace(''\'''',''\\\'''',$v0) . ''\'')'';
                }


            }

        }
        $_SESSION[__X_CLE_APPLICATION][''c_menus1.page_liste_des_menus1'']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS[''obj_rev1'']->rev_vers_matrice(''c_menus1.page_liste_des_menus1('' . $txtPar . '')'');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_menus1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . '' erreur de convertion de '' . $txtPar . '''';
        }

    }
    /*
      =============================================================================================================
    */
    function vv_menus_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=$this->sql0->sql_iii(
             /*sql_319()*/ 319,
            array(/**/
                ''T0_chi_id_menu'' => $donnees_recues[__xva][''chi_id_menu'']
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xsu){

            $tt=$this->sql0->sql_iii(
                 /*sql_320()*/ 320,
                array(/**/
                    ''chi_id_menu'' => $tt[__xva][0][''T0.chi_id_menu'']
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xer){

                $donnees_retournees[__x_signaux][__xer][]=''erreur lors de la suppression pour '' . self::LE_LA_ELEMENT_GERE . ''('' . $donnees_recues[__xva][''chi_id_menu''] . '') ['' . __LINE__ . '']'';

            }else if($tt[''changements''] === 1){

                $donnees_retournees[__x_signaux][__xsu][]=''👍 suppression effectuée avec succès pour '' . self::LE_LA_ELEMENT_GERE . ''('' . $donnees_recues[__xva][''chi_id_menu''] . '')'';
                $this->page_liste_des_menus1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__x_signaux][__xer][]=''aucune suppression effectuée pour '' . self::LE_LA_ELEMENT_GERE . ''('' . $donnees_recues[__xva][''chi_id_menu''] . '') ['' . __LINE__ . '']'';
            }


        }else{

            $donnees_retournees[__x_signaux][__xer][]=''aucune suppression effectuée pour '' . self::LE_LA_ELEMENT_GERE . ''('' . $donnees_recues[__xva][''chi_id_menu''] . '') ['' . __LINE__ . '']'';
        }

        $o1='''';
    }
    /*
      =============================================================================================================
    */
    function vv_menus_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $page_liste_des_menus1=false;
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === ''page_liste_des_menus1'' && $mat[$i][2] === ''f'' && $mat[$i][8] === 0){

                $page_liste_des_menus1=true;

            }

        }
        $tt324=$this->sql0->sql_iii(
             /*sql_324()*/ 324,
            array(/**/
                ''T0_chi_id_menu'' => $donnees_recues[__xva][''chi_id_menu'']
            ),
            $donnees_retournees
        );
        
        if($tt324[__xst] !== __xsu){
         
            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . '' aucune modification efféctuée'';
            return;
        }
         
         
         
         
        $tt326=$this->sql0->sql_iii(
             /*sql_326()*/ 326,
            array(/**/
                ''T0_chi_id_autorisation'' => $donnees_recues[__xva][''chx_autorisation_menu''],
                ''T0_chx_projet_id_source'' => $_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']
            ),
            $donnees_retournees
        );
        
        if($tt326[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]=''erreur lors de la modification pour '' . self::LE_LA_ELEMENT_GERE . '' ['' . __LINE__ . '']'';
            return;

        }

        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . ''c_dossiers1.php'');
        $obj_doss=new c_dossiers1(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
        $dossier=$obj_doss->construire_chemin($tt326[__xva][0][''T1.chx_dossier_id_source'']);
        
        if($dossier[''__xst''] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]=''erreur lors de la modification pour '' . self::LE_LA_ELEMENT_GERE . '' ['' . __LINE__ . '']'';
            return;

        }

        /* echo __FILE__ . '' '' . __LINE__ . '' __LINE__ = <pre>'' . var_export( $tt326[__xva][0] , true ) . ''</pre>'' ; exit(0);*/
        
        if(!is_file($dossier[''__xva''][''chemin_absolu''] . DIRECTORY_SEPARATOR . $tt326[__xva][0][''T1.chp_nom_source''])){

            $donnees_retournees[__x_signaux][__xer][]=''erreur lors de la modification pour '' . self::LE_LA_ELEMENT_GERE . '' ['' . __LINE__ . '']'';
            return;

        }

        require_once($dossier[''__xva''][''chemin_absolu''] . DIRECTORY_SEPARATOR . $tt326[__xva][0][''T1.chp_nom_source'']);
        $class_methods=get_class_methods(str_replace(''.php'','''',$tt326[__xva][0][''T1.chp_nom_source'']));
        $trouve=false;
        $non_trouve='''';
        foreach($class_methods as $k1 => $v1){
            
            if($v1 === $donnees_recues[__xva][''chp_methode_menu'']){

                $trouve=true;
                break;

            }
            if($v1!==''__constructor''){
                $non_trouve=''<br />"''.$v1.''"''.$non_trouve;
            }

        }
        
        if($trouve === false){

            $donnees_retournees[__x_signaux][__xer][]=''méthode non trouvée parmis  '' . $non_trouve . '' ['' . __LINE__ . '']'';
            return;

        }

        $tt=$this->sql0->sql_iii(
             /*sql_321()*/ 325,
            array(/**/
                ''c_chi_id_menu'' => $donnees_recues[__xva][''chi_id_menu''],
                ''n_cht_libelle_menu'' => $donnees_recues[__xva][''cht_libelle_menu''],
                ''n_chp_titre_menu'' => $donnees_recues[__xva][''chp_titre_menu''],
                ''n_chx_autorisation_menu'' => $donnees_recues[__xva][''chx_autorisation_menu''],
                ''n_chp_methode_menu'' => $donnees_recues[__xva][''chp_methode_menu''],
                ''n_cht_initialisation_menu'' => $donnees_recues[__xva][''cht_initialisation_menu''],
                ''n_cht_complements_menu'' => $donnees_recues[__xva][''cht_complements_menu''],
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]=''erreur lors de la modification pour '' . self::LE_LA_ELEMENT_GERE . ''('' . $donnees_recues[__xva][''chi_id_menu''] . '') ['' . __LINE__ . '']'';

        }else if($tt[''changements''] === 1){

            
            if($page_liste_des_menus1 === true){

                $this->page_liste_des_menus1($donnees_retournees,$mat,$donnees_recues);

            }else{

                $donnees_retournees[__xst]=__xsu;
            }

            $donnees_retournees[__x_signaux][__xsu][]=''👍 modification effectuée avec succès pour '' . self::LE_LA_ELEMENT_GERE . ''('' . $donnees_recues[__xva][''chi_id_menu''] . '') ['' . __LINE__ . '']'';

        }else{

            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . '' aucune modification efféctuée'';
        }


    }
    
    
    /*
      =============================================================================================================
    */
    function page_menus_dupliquer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        /* echo __FILE__ . '' '' . __LINE__ . '' $donnees_recues = <pre>'' . var_export( $donnees_recues , true ) . ''</pre>'' ; exit(0);*/
        
        
        $o1='''';
        $chi_id_menus='''';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === ''chi_id_menu'' && $mat[$i + 1][2] === ''c'' && $mat[$i][2] === ''f''){

                $chi_id_menus=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_menus) && $chi_id_menus > 0){
         
            $tt=$this->sql0->sql_iii(
                 /*sql_324()*/ 324,
                array(/**/
                    ''T0_chi_id_menu'' => $chi_id_menus
                ),
                $donnees_retournees
            );
            if($tt[__xst] === __xsu){
               $donnees_recues[''dupliquer'']=$tt[__xva][0];
               $this->page_menus_creer1($donnees_retournees,$mat,$donnees_recues);
            }
        }
        
    }
    
    /*
      =============================================================================================================
    */
    function page_menus_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='''';
        $o1 .= ''<h1>ajouter '' . self::UN_UNE_ELEMENT_GERE . '' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_menus1.formulaire1(action1(page_liste_des_menus1))" title="revenir à la liste" >⬱</div></h1>'' . PHP_EOL;
        $o1 .= ''<div id="vv_menus_creer1">'' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
        $o1 .= ''      <span>libelle</span>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
        $o1 .= ''      <div class="yy_conteneur_txtara">'' . PHP_EOL;
        $o1 .= ''         <textarea placeholder="libelle visible" autocorrect="off" autocapitalize="off" spellcheck="false"  id="cht_libelle_menu" >'';
        if(isset($donnees_recues[''dupliquer''][''T0.cht_libelle_menu''])){
            $o1.=enti1($donnees_recues[''dupliquer''][''T0.cht_libelle_menu'']);
        }
        
        $o1 .= ''</textarea>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''  </div>'' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
        $o1 .= ''      <span>titre</span>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
        $o1 .= ''      <input type="text" placeholder="titre" autocorrect="off" autocapitalize="off" spellcheck="false"  id="chp_titre_menu" value="'';
        if(isset($donnees_recues[''dupliquer''][''T0.chp_titre_menu''])){
            $o1.=enti1($donnees_recues[''dupliquer''][''T0.chp_titre_menu'']);
        }
        
        $o1 .= ''" maxlength="64" style="width:80%;" autocorrect="off" autocapitalize="off" spellcheck="false" />'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''  </div>'' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
        $o1 .= ''      <span>autorisation<br />(accès source)</span>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
        if(isset($donnees_recues[''dupliquer''][''T0.chx_autorisation_menu''])){
            $o1 .= ''        <input type="hidden" value="''.$donnees_recues[''dupliquer''][''T0.chx_autorisation_menu''].''"  id="chx_autorisation_menu" />'' . PHP_EOL;
            $o1 .= ''        <span id="chx_autorisation_menu_libelle">'';
            $o1 .= ''('' . $donnees_recues[''dupliquer''][''T0.chx_autorisation_menu''] . '') '' . enti1($donnees_recues[''dupliquer''][''T2.chp_nom_acces'']) . '' '' . enti1($donnees_recues[''dupliquer''][''T3.chp_nom_source'']) ; // . htmlentities($donnees_recues[''dupliquer''][''T1.chp_nom_acces'']) . PHP_EOL;
            $o1 .= ''</span>'' . PHP_EOL;
        }else{
            $o1 .= ''        <input type="hidden" value=""  id="chx_autorisation_menu" />'' . PHP_EOL;
            $o1 .= ''        <span id="chx_autorisation_menu_libelle">*indéfini</span>'' . PHP_EOL;
        }
        $parametre_sous_fenetre=''c_autorisations1.page_autorisations_sous_liste1('';
        $parametre_sous_fenetre .= '' sans_menus1()'';
        $parametre_sous_fenetre .= '' nom_champ_dans_parent1(chx_autorisation_menu)'';
        $parametre_sous_fenetre .= '' nom_libelle_dans_parent1(chx_autorisation_menu_libelle)'';
        $parametre_sous_fenetre .= '' libelle_si_vide1("*indéfini")'';
        $parametre_sous_fenetre .= '')'';
        $o1 .= ''      <div class="hug_bouton yy__x_signaux_1" '' . PHP_EOL;
        $o1 .= ''data-hug_click="interface1.affiche_sous_fenetre1('' . htmlentities($parametre_sous_fenetre) . '')"  title="selectionner">📁</div>'' . PHP_EOL;
        $o1 .= ''      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1('' . htmlentities($parametre_sous_fenetre) . '')"  title="annuler">🚫</div>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''  </div>'' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
        $o1 .= ''      <span>méthode</span>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
        $o1 .= ''      <input type="text" placeholder="méthode" id="chp_methode_menu" value="" maxlength="64" style="width:80%;" autocorrect="off" autocapitalize="off" spellcheck="false"  />'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''  </div>'' . PHP_EOL;
        /*
          =====================================================================================================
        */
        $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
        $o1 .= ''      <span>initialisation de la méthode</span>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
        $o1 .= ''      <div class="yy_conteneur_txtara">'' . PHP_EOL;
        
        $o1 .= ''        <div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_initialisation_menu)))" title="formater le source rev">(😊)</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_initialisation_menu)))" title="agrandir la zone">🖐</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_initialisation_menu)))" title="retrecir la zone">👊</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_initialisation_menu)))" title="vider la zone">🚫</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_initialisation_menu)))" title="copier le contenu">📋</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_initialisation_menu)))" title="aller à la position">position</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_initialisation_menu)))" title="aller à la ligne">ligne</div>'' . PHP_EOL;
        $o1 .= ''        </div>'';
        $o1 .= ''        <textarea placeholder="rev d\''initialisation contenu dans l\''appel de la méthode" autocorrect="off" autocapitalize="off" spellcheck="false"  id="cht_initialisation_menu" >'';
        if(isset($donnees_recues[''dupliquer''][''T0.cht_initialisation_menu''])){
            $o1.=enti1($donnees_recues[''dupliquer''][''T0.cht_initialisation_menu'']);
        }
        $o1 .= ''</textarea>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''  </div>'' . PHP_EOL;
        
        /*
          =====================================================================================================
        */
        $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
        $o1 .= ''      <span>compléments</span>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
        $o1 .= ''      <div class="yy_conteneur_txtara">'' . PHP_EOL;
        $o1 .= ''        <div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_complements_menu)))" title="formater le source rev">(😊)</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_complements_menu)))" title="agrandir la zone">🖐</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_complements_menu)))" title="retrecir la zone">👊</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_complements_menu)))" title="vider la zone">🚫</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_complements_menu)))" title="copier le contenu">📋</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_complements_menu)))" title="aller à la position">position</div>'' . PHP_EOL;
        $o1 .= ''          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_complements_menu)))" title="aller à la ligne">ligne</div>'' . PHP_EOL;
        $o1 .= ''        </div>'';
        $o1 .= ''         <textarea placeholder="rev complément" autocorrect="off" autocapitalize="off" spellcheck="false" id="cht_complements_menu" >'';
        if(isset($donnees_recues[''dupliquer''][''T0.cht_complements_menu''])){
            $o1.=enti1($donnees_recues[''dupliquer''][''T0.cht_complements_menu'']);
        }
        
        $o1 .= ''</textarea>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''  </div>'' . PHP_EOL;
        
        /*
          =====================================================================================================
        */
        $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
        $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
        $o1 .= ''    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_creer1),page_liste_des_menus1())" title="" >ajouter et revenir à la liste</div>'';
        $o1 .= ''    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_creer1))" title="" >ajouter</div>'';
        $o1 .= ''    </div>'' . PHP_EOL;
        $o1 .= ''  </div>'' . PHP_EOL;
        /* */
        $o1 .= ''</div>'' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_menus_supprimer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='''';
        $chi_id_menus='''';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === ''chi_id_menu'' && $mat[$i + 1][2] === ''c'' && $mat[$i][2] === ''f''){

                $chi_id_menus=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_menus)){

            $tt=$this->sql0->sql_iii(
                 /*sql_319()*/ 319,
                array(/**/
                    ''T0_chi_id_menu'' => $chi_id_menus
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= ''<h1>supprimer '' . self::UN_UNE_ELEMENT_GERE . ''<div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_menus1.formulaire1(action1(page_liste_des_menus1))" title="revenir à la liste" >⬱</div></h1>'' . PHP_EOL;
                $o1 .= ''<div id="vv_menus_supprimer1">'' . PHP_EOL;
                $o1 .= ''  <h3>confirmez vous la suppression de '' . self::LE_LA_ELEMENT_GERE . ''(<b>'' . $tt[__xva][0][''T0.chi_id_menu''] . ''</b>) ?</h3>'';
                /*
                  
                */
                $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
                $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
                $o1 .= ''    <input type="hidden" value="'' . $tt[__xva][0][''T0.chi_id_menu''] . ''" id="chi_id_menu" />'' . PHP_EOL;
                $o1 .= ''    <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_supprimer1),page_liste_des_menus1())" title="" >Je confirme la suppression</div>'';
                $o1 .= ''    </div>'' . PHP_EOL;
                $o1 .= ''  </div>'' . PHP_EOL;
                $o1 .= ''</div>'' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }

    }
    /*
      =============================================================================================================
    */
    function page_menus_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $o1='''';
        $chi_id_menus='''';
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i++ ){
            
            
            if($mat[$i][1] === ''chi_id_menu'' && $mat[$i + 1][2] === ''c'' && $mat[$i][2] === ''f''){

                $chi_id_menus=$mat[$i + 1][1];
                break;

            }

        }
        
        if(is_numeric($chi_id_menus) && $chi_id_menus > 0){

            $tt=$this->sql0->sql_iii(
                 /*sql_324()*/ 324,
                array(/**/
                    ''T0_chi_id_menu'' => $chi_id_menus
                ),
                $donnees_retournees
            );
            
            if($tt[__xst] === __xsu){

                $o1 .= ''<h1>modifier '' . self::LE_LA_ELEMENT_GERE . ''('' . $tt[__xva][0][''T0.chi_id_menu''] . '') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="c_menus1.formulaire1(action1(page_liste_des_menus1))" title="revenir à la liste" >⬱</div></h1>'' . PHP_EOL;
                $o1 .= ''<div id="vv_menus_modifier1">'' . PHP_EOL;
                /**/
                $o1 .= ''  <input type="hidden" value="'' . $tt[__xva][0][''T0.chi_id_menu''] . ''" id="chi_id_menu" />'' . PHP_EOL;
                /**/
                /*
                  =============================================================================================
                */
                $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
                $o1 .= ''      <span>libellé</span>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
                $o1 .= ''      <div class="yy_conteneur_txtara">'' . PHP_EOL;
                $o1 .= ''        <textarea id="cht_libelle_menu" autocorrect="off" autocapitalize="off" spellcheck="false" >'' . enti1($tt[__xva][0][''T0.cht_libelle_menu'']) . ''</textarea>'' . PHP_EOL;
                $o1 .= ''      </div>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''  </div>'' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
                $o1 .= ''      <span>titre</span>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
                $o1 .= ''      <input type="text" id="chp_titre_menu" value="'' . enti1($tt[__xva][0][''T0.chp_titre_menu'']) . ''" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;"/>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''  </div>'' . PHP_EOL;
                /*
                  =====================================================================================================
                */
                $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
                $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
                $o1 .= ''      <span>autorisation<br />(accès source)</span>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
                $o1 .= ''        <input type="hidden" value="'' . enti1($tt[__xva][0][''T0.chx_autorisation_menu'']) . ''"  id="chx_autorisation_menu" />'' . PHP_EOL;
                $o1 .= ''        <span id="chx_autorisation_menu_libelle">'' . PHP_EOL;
                
                if($tt[__xva][0][''T0.chx_autorisation_menu''] === null){

                    $o1 .= ''*indéfini'' . PHP_EOL;

                }else{

                    $o1 .= ''('' . $tt[__xva][0][''T0.chx_autorisation_menu''] . '') '' . htmlentities($tt[__xva][0][''T2.chp_nom_acces'']) .''  '' . htmlentities($tt[__xva][0][''T3.chp_nom_source'']) .'' '' . PHP_EOL;
                }
                
                $o1 .= ''</span>'' . PHP_EOL;

                $parametre_sous_fenetre=''c_autorisations1.page_autorisations_sous_liste1('';
                $parametre_sous_fenetre .= '' sans_menus1()'';
                $parametre_sous_fenetre .= '' nom_champ_dans_parent1(chx_autorisation_menu)'';
                $parametre_sous_fenetre .= '' nom_libelle_dans_parent1(chx_autorisation_menu_libelle)'';
                $parametre_sous_fenetre .= '' libelle_si_vide1("*indéfini")'';
                $parametre_sous_fenetre .= '')'';
                $o1 .= ''      <div class="hug_bouton yy__x_signaux_1" '' . PHP_EOL;
                $o1 .= ''data-hug_click="interface1.affiche_sous_fenetre1('' . htmlentities($parametre_sous_fenetre) . '')"  title="selectionner">📁</div>'' . PHP_EOL;
                $o1 .= ''      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1('' . htmlentities($parametre_sous_fenetre) . '')"  title="annuler">🚫</div>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                $o1 .= ''  </div>'' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
                $o1 .= ''      <span>méthode</span>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
                $o1 .= ''      <input type="text" id="chp_methode_menu" value="'' . enti1($tt[__xva][0][''T0.chp_methode_menu'']) . ''" autocorrect="off" autocapitalize="off" spellcheck="false"  size="64" max-length="64" style="max-width:80%;" />'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''  </div>'' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
                $o1 .= ''      <span>initialisation</span>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
                $o1 .= ''      <div class="yy_conteneur_txtara">'' . PHP_EOL;
                $o1 .= ''        <div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_initialisation_menu)))" title="formater le source rev">(😊)</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_initialisation_menu)))" title="agrandir la zone">🖐</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_initialisation_menu)))" title="retrecir la zone">👊</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_initialisation_menu)))" title="vider la zone">🚫</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_initialisation_menu)))" title="copier le contenu">📋</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_initialisation_menu)))" title="aller à la position">position</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_initialisation_menu)))" title="aller à la ligne">ligne</div>'' . PHP_EOL;
                $o1 .= ''        </div>'';
                $o1 .= ''        <textarea id="cht_initialisation_menu" autocorrect="off" autocapitalize="off" spellcheck="false">'' . enti1($tt[__xva][0][''T0.cht_initialisation_menu'']) . ''</textarea>'' . PHP_EOL;
                $o1 .= ''      </div>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''  </div>'' . PHP_EOL;
                /*
                  =============================================================================================
                */
                $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_libelle1">'' . PHP_EOL;
                $o1 .= ''      <span>compléments</span>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
                $o1 .= ''      <div class="yy_conteneur_txtara">'' . PHP_EOL;
                $o1 .= ''        <div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(cht_complements_menu)))" title="formater le source rev">(😊)</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(cht_complements_menu)))" title="agrandir la zone">🖐</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(cht_complements_menu)))" title="retrecir la zone">👊</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton yy__x_signaux_2" data-hug_click="c_fonctions_js1(vider_la_zone(zone(cht_complements_menu)))" title="vider la zone">🚫</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton yy__x_signaux_1" data-hug_click="c_fonctions_js1(copier_le_contenu1(zone_source(cht_complements_menu)))" title="copier le contenu">📋</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(cht_complements_menu)))" title="aller à la position">position</div>'' . PHP_EOL;
                $o1 .= ''          <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(cht_complements_menu)))" title="aller à la ligne">ligne</div>'' . PHP_EOL;
                $o1 .= ''        </div>'';
                $o1 .= ''        <textarea id="cht_complements_menu" autocorrect="off" autocapitalize="off" spellcheck="false">'' . enti1($tt[__xva][0][''T0.cht_complements_menu'']) . ''</textarea>'' . PHP_EOL;
                $o1 .= ''      </div>'' . PHP_EOL;
                $o1 .= ''    </div>'' . PHP_EOL;
                /**/
                $o1 .= ''  </div>'' . PHP_EOL;
                /*
                  =====================================================================================
                */
                $o1 .= ''  <div class="yy_edition_champ1">'' . PHP_EOL;
                $o1 .= ''    <div class="yy_edition_valeur1">'' . PHP_EOL;
                $o1 .= ''    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_modifier1),chi_id_menu('' . $chi_id_menus . ''),page_liste_des_menus1())" title="" >enregistrer et revenir à la liste</div>'';
                $o1 .= ''    <div class="hug_bouton" data-hug_click="c_menus1.formulaire1(conteneur1(vv_menus_modifier1),chi_id_menu('' . $chi_id_menus . ''))" title="" >enregistrer</div>'';
                $o1 .= ''    </div>'' . PHP_EOL;
                $o1 .= ''  </div>'' . PHP_EOL;
                /**/
                $o1 .= ''</div>'' . PHP_EOL;
                $donnees_retournees[__x_page] .= $o1;
                $donnees_retournees[__xst]=__xsu;

            }


        }else{

            $this->page_liste_des_menus1(
                $donnees_retournees,
                 /*matrice*/ $mat,
                $donnees_recues
            );
        }

    }
    /*
      =============================================================================================================
      Pour les iframes sur les menus
      =============================================================================================================
    */
    function vv_menus_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txtPar=''__num_page(0)'';
        $nouvelles_valeurs=array( ''__num_page'' => 0);
        foreach($donnees_recues[__xva] as $k0 => $v0){
            
            if($k0 !== ''__num_page''){

                $nouvelles_valeurs[$k0]=$v0;
                
                if(is_numeric($v0)){

                    $txtPar .= '','' . $k0 . ''('' . $v0 . '')'';

                }else{

                    $txtPar .= '','' . $k0 . ''(\'''' . str_replace(''\'''',''\\\'''',$v0) . ''\'')'';
                }


            }

        }
        $_SESSION[__X_CLE_APPLICATION][''c_menus1.page_menus_sous_liste1'']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS[''obj_rev1'']->rev_vers_matrice(''c_menus1.page_menus_sous_liste1('' . $txtPar . '')'');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_menus_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . '' erreur de convertion de '' . $txtPar . '''';
        }

    }
    /*
      =============================================================================================================
    */
    function page_menus_sous_liste1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $fonction1=''c_menus1.page_menus_sous_liste1'';
        /* déverminage */
        $__nbMax=10;
        /*
          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . ''TODO $par ''.var_export($par,true);
        */
        $par=array();
        $par[''T0_chi_id_menu'']='''';
        $par[''nom_champ_dans_parent1'']='''';
        $par[''nom_libelle_dans_parent1'']='''';
        $par[''__num_page'']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xdv][]=''$mat =''.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($fonction1 === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === ''f'' && $mat[$j][8] === 1 && $mat[$j + 1][2] === ''c''){

                        /* $donnees_retournees[__x_signaux][__xdv][]=''$mat[$j][1] =''.json_encode( $mat[$j][1] . '' '' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/
                        
                        if($mat[$j][1] === ''__num_page''){

                            $numpage=$mat[$j + 1][1];
                            $par_mat[''__num_page'']=$mat[$j + 1][1];
                            $par[''__num_page'']=$mat[$j + 1][1];

                        }else if($mat[$j][1] === ''indice_menu''){

                            $numpage=0;
                            $par_mat[''__num_page'']=0;
                            $provenance_menu=true;
                            $par[''__num_page'']=0;

                        }else if($mat[$j + 1][1] !== ''''){

                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION][$fonction1])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION][$fonction1]=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION][$fonction1];
            
            if($provenance_menu === true){

                $par[''__num_page'']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par[''__num_page'']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION][$fonction1]=$par;
        }

        $par[''T0_chi_id_menu'']=$par[''T0_chi_id_menu'']??'''';
        $par[''nom_champ_dans_parent1'']=$par_mat[''nom_champ_dans_parent1'']??'''';
        $par[''nom_libelle_dans_parent1'']=$par_mat[''nom_libelle_dans_parent1'']??'''';
        $nom_filtre=''vv_menus_filtre_choix_1'';
        $o1=''<h1>choisir un menu</h1>'';
        $__num_page=!isset($par[''__num_page'']) ? 0 : (int)($par[''__num_page'']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= ''<div class="yy_filtre_liste1" id="'' . $nom_filtre . ''">'' . PHP_EOL;
        /**/
        $o1 .= ''   <div>'' . PHP_EOL;
        $o1 .= ''    <div><span>id</span></div>'' . PHP_EOL;
        $o1 .= ''    <div><input type="text" id="T0_chi_id_menu" value="'' . $par[''T0_chi_id_menu''] . ''" size="8" maxlength="32" autocapitalize="off" /></div>'' . PHP_EOL;
        $o1 .= ''   </div>'' . PHP_EOL;
        /**/
        $o1 .= ''   <div>    '' . PHP_EOL;
        $o1 .= ''     <div><span>&nbsp;</span></div>'' . PHP_EOL;
        $o1 .= ''     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_menus1.formulaire1(conteneur1('' . $nom_filtre . ''))" >🔎</div></div>'' . PHP_EOL;
        $o1 .= ''     <input type="hidden" id="__num_page" value="'' . $__debut . ''" />'' . PHP_EOL;
        $o1 .= ''     <input type="hidden" id="nom_champ_dans_parent1" value="'' . $par[''nom_champ_dans_parent1''] . ''"  />'' . PHP_EOL;
        $o1 .= ''     <input type="hidden" id="nom_libelle_dans_parent1" value="'' . $par[''nom_libelle_dans_parent1''] . ''"  />'' . PHP_EOL;
        $o1 .= ''   </div> '' . PHP_EOL;
        /**/
        $o1 .= ''</div>'';
        $tt=$this->sql0->sql_iii(
             /*sql_178()*/ 178,
             /**/ array(
                /**/
                ''T0_chi_id_menu'' => $par[''T0_chi_id_menu''] === '''' ? '''' : $par[''T0_chi_id_menu''],
                ''quantitee'' => $__nbMax,
                ''debut'' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $donnees_retournees[__x_signaux][__xer][]=''Erreur dans la liste des menus ['' . __LINE__ . '']'';
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ''TODO $tt ''.var_export($tt,true);
        */
        $bouton_avant='''';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt[''nombre''],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='''';
        $lsttbl .= ''<thead><tr>'';
        $lsttbl .= ''<th></th>'';
        $lsttbl .= ''<th>id</th>'';
        $lsttbl .= ''<th>menu</th>'';
        $lsttbl .= ''</tr></thead><tbody>'';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= ''<tr>'';
            /**/
            $parametres='''';
            $parametres .= ''interface1.choisir_dans_sous_fenetre1('';
            $parametres .= ''    nom_champ_dans_parent1('' . $par[''nom_champ_dans_parent1''] . '')'';
            $parametres .= ''    nom_libelle_dans_parent1('' . $par[''nom_libelle_dans_parent1''] . '')'';
            $parametres .= ''    id1('' . $v0[''T0.chi_id_menu''] . '')'';
            $parametres .= ''    libelle1("('' . $v0[''T0.chi_id_menu''] . '') '' . $v0[''T0.cht_libelle_menu''] . ''" )'';
            $parametres .= '')'';
            $lsttbl .= ''<td style="max-width:calc(1*var(t_1boutons_carres))">'';
            $lsttbl .= ''  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="'' . htmlentities($parametres) . ''">=&gt;</div>'';
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''<td style="text-align:center;">'';
            $lsttbl .= '''' . $v0[''T0.chi_id_menu''] . '''';
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''<td style="text-align:left;">'';
            
            if($v0[''T0.cht_libelle_menu''] !== null){

                $lsttbl .= '''' . enti1($v0[''T0.cht_libelle_menu'']) . '''';

            }

            $lsttbl .= ''</td>'';
            /**/
            /**/
            $lsttbl .= ''</tr>'';
        }
        $o1 .= ''<div class="yy_div_contenant_table"><table class="yy_table_liste1">'' . PHP_EOL . $lsttbl . ''</tbody></table></div>'' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_liste_des_menus1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){


        if(!isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet''])){

            $donnees_retournees[__x_signaux][__xal][]='' vous devez activer un projet ['' . __LINE__ . '']'';
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        $__nbMax=30;
        $par=array();
        $par[''T0_chi_id_menu'']='''';
        $par[''T0_cht_libelle_menu'']='''';
        $par[''T0_chp_titre_menu'']='''';
        $par[''T0_chx_autorisation_menu'']='''';
        $par[''T0_chp_methode_menu'']='''';
        $par[''T1_chx_acces_autorisation'']='''';
        $par[''__num_page'']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if(''c_menus1.page_liste_des_menus1'' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === ''f'' && $mat[$j][8] === 1 && $mat[$j + 1][2] === ''c''){

                        
                        if($mat[$j][1] === ''__num_page''){

                            $numpage=$mat[$j + 1][1];
                            $par_mat[''__num_page'']=$mat[$j + 1][1];
                            $par[''__num_page'']=$mat[$j + 1][1];

                        }else if($mat[$j][1] === ''indice_menu''){

                            $numpage=0;
                            $par_mat[''__num_page'']=0;
                            $provenance_menu=true;
                            $par[''__num_page'']=0;

                        }else if($mat[$j + 1][1] !== ''''){

                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION][''c_menus1.page_liste_des_menus1''])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION][''c_menus1.page_liste_des_menus1'']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION][''c_menus1.page_liste_des_menus1''];
            
            if($provenance_menu === true){

                $par[''__num_page'']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par[''__num_page'']=$numpage;
                }

            }

            $_SESSION[__X_CLE_APPLICATION][''c_menus1.page_liste_des_menus1'']=$par;
        }

        $par[''T0_chi_id_menu'']=$par[''T0_chi_id_menu'']??'''';
        $par[''T0_cht_libelle_menu'']=$par[''T0_cht_libelle_menu'']??'''';
        $par[''T0_chp_titre_menu'']=$par[''T0_chp_titre_menu'']??'''';
        $par[''T0_chx_autorisation_menu'']=$par[''T0_chx_autorisation_menu'']??'''';
        $par[''T0_chp_methode_menu'']=$par[''T0_chp_methode_menu'']??'''';
        $par[''T1_chx_acces_autorisation'']=$par[''T1_chx_acces_autorisation'']??'''';
        
        $fonction1=''c_menus1.page_liste_des_menus1'';
        $nom_filtre=''vv_menus_filtre1'';
        $o1=''<h1>Liste des menus</h1>'';
        $__num_page=!isset($par[''__num_page'']) ? 0 : (int)($par[''__num_page'']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= ''<div class="yy_filtre_liste1" id="'' . $nom_filtre . ''">'' . PHP_EOL;
        /*

        */
        $o1 .= ''   <div>'' . PHP_EOL;
        $o1 .= ''    <div><span>id</span></div>'' . PHP_EOL;
        $o1 .= ''    <div><input type="text" id="T0_chi_id_menu" value="'' . $par[''T0_chi_id_menu''] . ''" size="8" maxlength="32" autocapitalize="off" /></div>'' . PHP_EOL;
        $o1 .= ''   </div>'' . PHP_EOL;
        /*

        */
        $o1 .= ''   <div>'' . PHP_EOL;
        $o1 .= ''      <div><span>libelle</span></div>'' . PHP_EOL;
        $o1 .= ''      <div><input type="text" id="T0_cht_libelle_menu" value="'' . $par[''T0_cht_libelle_menu''] . ''" size="8" maxlength="64" autocapitalize="off" />'' . PHP_EOL;
        $o1 .= ''      </div>'' . PHP_EOL;
        $o1 .= ''   </div>'' . PHP_EOL;
        /*

        */
        $o1 .= ''   <div>'' . PHP_EOL;
        $o1 .= ''      <div><span>titre</span></div>'' . PHP_EOL;
        $o1 .= ''      <div><input type="text" id="T0_chp_titre_menu" value="'' . $par[''T0_chp_titre_menu''] . ''" size="8" maxlength="64" autocapitalize="off" />'' . PHP_EOL;
        $o1 .= ''      </div>'' . PHP_EOL;
        $o1 .= ''   </div>'' . PHP_EOL;
        /*
          
        */
        $o1 .= ''   <div>'' . PHP_EOL;
        $o1 .= ''      <div><span>id autorisation</span></div>'' . PHP_EOL;
        $o1 .= ''      <div><input type="text" id="T0_chx_autorisation_menu" value="'' . $par[''T0_chx_autorisation_menu''] . ''" size="8" maxlength="64" autocapitalize="off" />'' . PHP_EOL;
        $o1 .= ''      </div>'' . PHP_EOL;
        $o1 .= ''   </div>'' . PHP_EOL;
        /*

        */
        $o1 .= ''   <div>'' . PHP_EOL;
        $o1 .= ''      <div><span>méthode</span></div>'' . PHP_EOL;
        $o1 .= ''      <div><input type="text" id="T0_chp_methode_menu" value="'' . $par[''T0_chp_methode_menu''] . ''" size="8" maxlength="64" autocapitalize="off" />'' . PHP_EOL;
        $o1 .= ''      </div>'' . PHP_EOL;
        $o1 .= ''   </div>'' . PHP_EOL;
        
        
        $o1 .= ''   <div>'' . PHP_EOL;
        $o1 .= ''      <div><span>id acces</span></div>'' . PHP_EOL;
        $o1 .= ''      <div><input type="text" id="T1_chx_acces_autorisation" value="'' . $par[''T1_chx_acces_autorisation''] . ''" size="8" maxlength="64" autocapitalize="off" />'' . PHP_EOL;
        $o1 .= ''      </div>'' . PHP_EOL;
        $o1 .= ''   </div>'' . PHP_EOL;
        
        

        /*
          
        */
        $o1 .= ''   <div>    '' . PHP_EOL;
        $o1 .= ''     <div><span>&nbsp;</span></div>'' . PHP_EOL;
        $o1 .= ''     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_menus1.formulaire1(conteneur1('' . $nom_filtre . ''))" >🔎</div></div>'' . PHP_EOL;
        $o1 .= ''     <input type="hidden" id="__num_page" value="'' . $__debut . ''" />'' . PHP_EOL;
        $o1 .= ''   </div> '' . PHP_EOL;
        $o1 .= ''</div>'';

        $tt=$this->sql0->sql_iii(
             /*sql_322()*/ 322,
            array(
                /**/
                ''T0_chi_id_menu'' => $par[''T0_chi_id_menu''],
                ''T0_chx_autorisation_menu'' => $par[''T0_chx_autorisation_menu''],
                ''T0_cht_libelle_menu'' => $par[''T0_cht_libelle_menu''] ,
                ''T0_chp_titre_menu'' => $par[''T0_chp_titre_menu''],
                ''T0_chp_methode_menu'' => $par[''T0_chp_methode_menu''],
                ''T1_chx_acces_autorisation'' => $par[''T1_chx_acces_autorisation''],
                
                ''quantitee'' => $__nbMax,
                ''debut'' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] === __xer){

            $o1='''';
            $o1 .= ''<div>'';
            $o1 .= ''  <h3 class="yy__x_signaux_0">Erreur technique ['' . __METHOD__ . '' '' . __LINE__ . '']</h1>'';
            $o1 .= ''  <div style="text-align:center">'';
            $o1 .= ''    <div class="hug_bouton" data-hug_click="c_menus1.page_liste_des_menus1(indice_menu(10))" title="menus" >'';
            $o1 .= ''      Réessayer'';
            $o1 .= ''    </div>'';
            $o1 .= ''    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\''application'';
            $o1 .= ''  </div>'';
            unset($_SESSION[__X_CLE_APPLICATION][''c_menus1.page_liste_des_menus1'']);
            
            if($GLOBALS[DEVER_SRV] >= 2){

                $o1 .= ''  <pre>'' . $tt[''sql0''] . ''</per>'';

            }

            $o1 .= ''</div>'';
            /* en fonction du déverminage */
            $donnees_retournees[__x_page] .= $o1;
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . ''TODO $tt ''.var_export($tt,true);
        */
        $bouton_avant=''<div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_menus1.formulaire1(action1(page_menus_creer1))" title="nouveau menu" >+*</div>'';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt[''nombre''],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='''';
        $lsttbl .= ''<thead><tr>'';
        $lsttbl .= ''<th>action</th>'';
        $lsttbl .= ''<th>id</th>'';
        $lsttbl .= ''<th>libelle</th>'';
        $lsttbl .= ''<th>titre</th>'';
        $lsttbl .= ''<th>autorisation</th>'';
        $lsttbl .= ''<th>source</th>'';
        $lsttbl .= ''<th>méthode</th>'';
        $lsttbl .= ''<th>id accès</th>'';
        $lsttbl .= ''</tr></thead><tbody>'';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= ''<tr>'';
            /**/
            $lsttbl .= ''<td data-label="" style="text-align:left!important;">'';
            $lsttbl .= '' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">'';
            $lsttbl .= ''  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_menus1.formulaire1(action1(page_menus_modifier1),chi_id_menu('' . $v0[''T0.chi_id_menu''] . ''))">✎</div>'';
            $lsttbl .= ''  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="c_menus1.formulaire1(action1(page_menus_dupliquer1),chi_id_menu('' . $v0[''T0.chi_id_menu''] . ''))" title="dupliquer">⎘</div>'';
            $lsttbl .= ''  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="c_menus1.formulaire1(action1(page_menus_supprimer1),chi_id_menu('' . $v0[''T0.chi_id_menu''] . ''))">🗑</div>'';
            $lsttbl .= '' </div>'';
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''<td style="text-align:center;">'';
            $lsttbl .= '''' . $v0[''T0.chi_id_menu''] . '''';
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''<td style="text-align:center;">'';
            $lsttbl .= $v0[''T0.cht_libelle_menu''] ;
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''<td style="text-align:center;">'';
            $lsttbl .= enti1($v0[''T0.chp_titre_menu'']) ;
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''<td style="text-align:center;">'';
            $lsttbl .= ''('' . $v0[''T0.chx_autorisation_menu''] . '') '';
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''<td style="text-align:center;">'';
            $lsttbl .= '''' . enti1($v0[''T3.chp_nom_source'']) . '' '';
            $lsttbl .= ''</td>'';
            /**/

            $lsttbl .= ''<td style="text-align:center;">'';
            $lsttbl .= enti1($v0[''T0.chp_methode_menu'']) ;
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''<td style="text-align:center;">'';
            $lsttbl .= ''('' . $v0[''T1.chx_acces_autorisation''] . '') '';
            $lsttbl .= ''</td>'';
            /**/
            $lsttbl .= ''</tr>'';
        }
        $o1 .= ''<div class="yy_div_contenant_table"><table class="yy_table_liste1">'' . PHP_EOL . $lsttbl . ''</tbody></table></div>'' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]=''c_menus1.page_liste_des_menus1()'';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/','0','9',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('359','1','c_fonctions1.php','php(#(
  Fonctions générales utilisées dans les sources
)
definition_de_classe( nom_classe(c_fonctions1) , contenu( #(
      =============================================================================================================
      un nom de fichier ne doit contenir que des chiffres ou des lettres minuscules ou "_" ou "."
      =============================================================================================================
    )
   méthode(definition( nomm(test_du_nom_de_fichier1) argument($par),adresseArgument($donnees_retournees)),contenu(
      choix(  si(    condition(egalstricte($par,''''))    alors(
         retourner(defTab((__xst,__xer))))  ))
      boucle(initialisation(affecte($i,0)),condition(inf($i,appelf(nomf(strlen),p($par)))),increment($i++),faire(
         affecte($c,appelf(nomf(substr),p($par),p($i),p(1)))
         choix(  si(    condition(non(ou(
   et(supeg($c,''a''),infeg($c,''z'')),
   et(supeg($c,''0''),infeg($c,''9'')),
   egalstricte($c,''_''),
   egalstricte($c,''.'')
)))    alors(
            affecte(tableau(nomt($donnees_retournees[__x_signaux][__xer])p()),concat(''le caractère "'',$c,''" n\''est pas admis''))
            retourner(defTab((__xst,__xer))))  ))))
      retourner(defTab((__xst,__xsu)))))#(
      =============================================================================================================
      une fonction qui permet de tester un champ doit être parmis les fonctions de ce fichier
      =============================================================================================================
    )
   méthode(definition( nomm(test_fonctions_de_c_fonctions1) argument($par),adresseArgument($donnees_retournees)),contenu(
      choix(  si(    condition(ou(egalstricte($par,''''),egalstricte($par,null)))    alors(
         retourner(defTab((__xst,__xsu))))  ))
      affecte($tt,appelf(nomf(explode),p('',''),p($par)))
      affecte($class_methods,appelf(nomf(get_class_methods),p($this)))
      affecte($liste_des_méthodes,'''')
      boucleSurTableau(pourChaque( dans( $k1 , $v1, $class_methods )),faire(
         affecteop( ''.='' , $liste_des_méthodes , concat($v1,'',''))))#( echo __FILE__ . '' '' . __LINE__ . '' __LINE__ = <pre>'' . var_export( $liste_des_méthodes , true ) . ''</pre>'' ; exit(0);)
      boucleSurTableau(pourChaque( dans( $k1 , $v1, $tt )),faire(
         affecte($trouve,faux)
         boucleSurTableau(pourChaque( dans( $method_name , $class_methods )),faire(
            choix(  si(    condition(egalstricte($method_name,$v1))    alors(
               affecte($trouve,vrai)
               break())  ))))
         choix(  si(    condition(egalstricte($trouve,faux))    alors(
            affecte(tableau(nomt($donnees_retournees[__x_signaux][__xer])p()),concat(
   ''la méthode "'',
   $v1,
   ''" n\'' aps été trouvée parmis la liste "'',
   $liste_des_méthodes,
   ''"''
))
            retourner(defTab((__xst,__xer))))  ))))
      retourner(defTab((__xst,__xsu))))) )))','<?php
/*
  Fonctions générales utilisées dans les sources
*/
class c_fonctions1{
    /*
      =============================================================================================================
      un nom de fichier ne doit contenir que des chiffres ou des lettres minuscules ou "_" ou "."
      =============================================================================================================
    */
    function test_du_nom_de_fichier1($par,&$donnees_retournees){
        
        if($par === ''''){

            return array( __xst => __xer);

        }

        for( $i=0 ; $i < strlen($par) ; $i++ ){
            
            $c=substr($par,$i,1);
            
            if(!($c >= ''a'' && $c <= ''z'' || $c >= ''0'' && $c <= ''9'' || $c === ''_'' || $c === ''.'')){

                $donnees_retournees[__x_signaux][__xer][]=''le caractère "'' . $c . ''" n\''est pas admis'';
                return array( __xst => __xer);

            }

        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      une fonction qui permet de tester un champ doit être parmis les fonctions de ce fichier
      =============================================================================================================
    */
    function test_fonctions_de_c_fonctions1($par,&$donnees_retournees){
        
        if($par === '''' || $par === null){

            return array( __xst => __xsu);

        }

        $tt=explode('','',$par);
        $class_methods=get_class_methods($this);
        $liste_des_méthodes='''';
        foreach($class_methods as $k1 => $v1){
            $liste_des_méthodes .= $v1 . '','';
        }
        /* echo __FILE__ . '' '' . __LINE__ . '' __LINE__ = <pre>'' . var_export( $liste_des_méthodes , true ) . ''</pre>'' ; exit(0);*/
        foreach($tt as $k1 => $v1){
            $trouve=false;
            foreach($class_methods as $method_name){
                
                if($method_name === $v1){

                    $trouve=true;
                    break;

                }

            }
            
            if($trouve === false){

                $donnees_retournees[__x_signaux][__xer][]=''la méthode "'' . $v1 . ''" n\'' aps été trouvée parmis la liste "'' . $liste_des_méthodes . ''"'';
                return array( __xst => __xer);

            }

        }
        return array( __xst => __xsu);
    }
}','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_bdds
  ===============================
*/

INSERT INTO tbl_bdds (chi_id_basedd,
chx_projet_id_basedd,
chp_rev_travail_basedd,
chp_fournisseur_basedd,
chx_dossier_id_basedd,
chp_commentaire_basedd,
chd__dtm_basedd,
chd__dtc_basedd,
che__nur_basedd) VALUES
('1','1','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''utf8mb4''),
   collate(''utf8mb4_unicode_ci''),
   transform_base_sur_svg(translate(4.5,5.5))
),
créer_table(
   nom_de_la_table(''tbl_revs''),
   meta(
      nom_de_la_table(''tbl_revs''),
      table(''tbl_revs''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des revs''),
      distinction_pour_isad(''d\''un rev''),
      transform_table_sur_svg(translate(813.5,17.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_rev''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_rev''),
            nom_long_du_champ(''à faire chi_id_rev''),
            nom_court_du_champ(''à faire chi_id_rev''),
            nom_bref_du_champ(''à faire chi_id_rev''),
            typologie(chi),
            genre(2),
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
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_provenance_rev''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_provenance_rev''),
            nom_long_du_champ(''à faire chp_provenance_rev''),
            nom_court_du_champ(''à faire chp_provenance_rev''),
            nom_bref_du_champ(''à faire chp_provenance_rev''),
            typologie(cho),
            genre(12),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_source_rev''),
         espece_du_champ(INTEGER),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_source_rev''),
            nom_long_du_champ(''à faire chx_source_rev''),
            nom_court_du_champ(''à faire chx_source_rev''),
            nom_bref_du_champ(''à faire chx_source_rev''),
            typologie(chx),
            genre(7),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_id_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_id_rev''),
            nom_long_du_champ(''à faire chp_id_rev''),
            nom_court_du_champ(''à faire chp_id_rev''),
            nom_bref_du_champ(''à faire chp_id_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_valeur_rev''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_valeur_rev''),
            nom_long_du_champ(''à faire chp_valeur_rev''),
            nom_court_du_champ(''à faire chp_valeur_rev''),
            nom_bref_du_champ(''à faire chp_valeur_rev''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chp_type_rev''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_type_rev''),
            nom_long_du_champ(''à faire chp_type_rev''),
            nom_court_du_champ(''à faire chp_type_rev''),
            nom_bref_du_champ(''à faire chp_type_rev''),
            typologie(cho),
            genre(105),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(3)
         )
      ),
      champ(
         nom_du_champ(''chp_niveau_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_niveau_rev''),
            nom_long_du_champ(''à faire chp_niveau_rev''),
            nom_court_du_champ(''à faire chp_niveau_rev''),
            nom_bref_du_champ(''à faire chp_niveau_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_quotee_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_quotee_rev''),
            nom_long_du_champ(''à faire chp_quotee_rev''),
            nom_court_du_champ(''à faire chp_quotee_rev''),
            nom_bref_du_champ(''à faire chp_quotee_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_pos_premier_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_premier_rev''),
            nom_long_du_champ(''à faire chp_pos_premier_rev''),
            nom_court_du_champ(''à faire chp_pos_premier_rev''),
            nom_bref_du_champ(''à faire chp_pos_premier_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_pos_dernier_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_dernier_rev''),
            nom_long_du_champ(''à faire chp_pos_dernier_rev''),
            nom_court_du_champ(''à faire chp_pos_dernier_rev''),
            nom_bref_du_champ(''à faire chp_pos_dernier_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_parent_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_parent_rev''),
            nom_long_du_champ(''à faire chp_parent_rev''),
            nom_court_du_champ(''à faire chp_parent_rev''),
            nom_bref_du_champ(''à faire chp_parent_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nbr_enfants_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nbr_enfants_rev''),
            nom_long_du_champ(''à faire chp_nbr_enfants_rev''),
            nom_court_du_champ(''à faire chp_nbr_enfants_rev''),
            nom_bref_du_champ(''à faire chp_nbr_enfants_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_num_enfant_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_num_enfant_rev''),
            nom_long_du_champ(''à faire chp_num_enfant_rev''),
            nom_court_du_champ(''à faire chp_num_enfant_rev''),
            nom_bref_du_champ(''à faire chp_num_enfant_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_profondeur_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_profondeur_rev''),
            nom_long_du_champ(''à faire chp_profondeur_rev''),
            nom_court_du_champ(''à faire chp_profondeur_rev''),
            nom_bref_du_champ(''à faire chp_profondeur_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_pos_ouver_parenthese_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_ouver_parenthese_rev''),
            nom_long_du_champ(''à faire chp_pos_ouver_parenthese_rev''),
            nom_court_du_champ(''à faire chp_pos_ouver_parenthese_rev''),
            nom_bref_du_champ(''à faire chp_pos_ouver_parenthese_rev''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_enfant_suivant_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_enfant_suivant_rev''),
            nom_long_du_champ(''AFR''),
            nom_court_du_champ(''AFR''),
            nom_bref_du_champ(''AFR''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_commentaire_rev''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_commentaire_rev''),
            nom_long_du_champ(''à faire chp_commentaire_rev''),
            nom_court_du_champ(''à faire chp_commentaire_rev''),
            nom_bref_du_champ(''à faire chp_commentaire_rev''),
            typologie(cht),
            genre(6),
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
   nom_de_la_table(''tbl_dossiers''),
   meta(
      nom_de_la_table(''tbl_dossiers''),
      table(''tbl_dossiers''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des dossiers''),
      distinction_pour_isad(''d\''un dossier''),
      transform_table_sur_svg(translate(271.5,153.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_dossier''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_dossier''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(2),
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
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_enfant_droite(1)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_dossier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_dossier''),
            nom_long_du_champ(''à faire chp_nom_dossier''),
            nom_court_du_champ(''à faire chp_nom_dossier''),
            nom_bref_du_champ(''à faire chp_nom_dossier''),
            typologie(chp),
            genre(108),
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
            genre(8),
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
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_contient_genere_dossier''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(che),
            genre(5),
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
            genre(10),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_dossier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_dossier''),
            nom_long_du_champ(''à faire chd__dtm_dossier''),
            nom_court_du_champ(''à faire chd__dtm_dossier''),
            nom_bref_du_champ(''à faire chd__dtm_dossier''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_dossier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_dossier''),
            nom_long_du_champ(''à faire chd__dtc_dossier''),
            nom_court_du_champ(''à faire chd__dtc_dossier''),
            nom_bref_du_champ(''à faire chd__dtc_dossier''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
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
   nom_de_la_table(''tbl_groupes''),
   meta(
      nom_de_la_table(''tbl_groupes''),
      table(''tbl_groupes''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des groupes''),
      distinction_pour_isad(''d\''un groupe''),
      transform_table_sur_svg(translate(17.5,213.5))
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
            genre(2),
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
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_groupe''),
         espece_du_champ(INTEGER),
         references(tbl_groupes,chi_id_groupe),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_groupe''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            genre(8),
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
      distinction_pour_liste(''liste des metiers''),
      distinction_pour_isad(''d\''un metier''),
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
            genre(2),
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
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_metier''),
         espece_du_champ(INTEGER),
         references(tbl_metiers,chi_id_metier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_metier''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_metiers''),
   nom_de_l_index(''idx_nom_metier''),
   meta(nom_de_l_index(idx_nom_metier),genre_meta(index_de_table),message('''')),
   champs(''chp_nom_metier''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_acces''),
   meta(
      nom_de_la_table(''tbl_acces''),
      table(''tbl_acces''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des acces''),
      distinction_pour_isad(''d\''un acces''),
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
            genre(2),
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
            genre(3),
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
            genre(4),
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
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_parametres_acces''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_parametres_acces''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_acces''),
   nom_de_l_index(''idx_acces_grp_metier''),
   meta(nom_de_l_index(idx_acces_grp_metier),genre_meta(index_de_table),message('''')),
   champs(''chx_groupe_acces'',''chx_metier_acces''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_autorisations''),
   meta(
      nom_de_la_table(''tbl_autorisations''),
      table(''tbl_autorisations''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des autorisations''),
      distinction_pour_isad(''d\''une autorisation''),
      transform_table_sur_svg(translate(390.5,353.5))
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
            genre(2),
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
            genre(4),
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
            genre(4),
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
   nom_de_la_table(''tbl_genres''),
   meta(
      nom_de_la_table(''tbl_genres''),
      table(''tbl_genres''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des genres''),
      distinction_pour_isad(''d\''un genre''),
      transform_table_sur_svg(translate(68.5,456.5))
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
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_prefixe_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(3),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''cht''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_prefixe_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            genre(102),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(3)
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
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_espece_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''TEXT''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_espece_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            genre(101),
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
            genre(7),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_est_primaire_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_primaire_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_est_incrément_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_incrément_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_est_obligatoire_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_obligatoire_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_a_init_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_a_init_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_init_est_mot_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_init_est_mot_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_valeur_init_genre''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_valeur_init_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che_est_parmis_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_parmis_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_parmis_genre''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_parmis_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che_ordre_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_ordre_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_est_ts_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_ts_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_fonctions_genre''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_fonctions_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            genre(107),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che_est_nur_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_nur_genre''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(che),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_projets''),
   meta(
      nom_de_la_table(''tbl_projets''),
      table(''tbl_projets''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des projets''),
      distinction_pour_isad(''d\''un projet''),
      transform_table_sur_svg(translate(272.5,9.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_projet''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_projet''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(2),
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
            genre(11),
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
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_requetes_projet''),
         espece_du_champ(INTEGER),
         references(tbl_dossiers,chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_requetes_projet''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chx),
            genre(8),
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
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
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
            genre(10),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_projet''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_projet''),
            nom_long_du_champ(''à faire chd__dtm_projet''),
            nom_court_du_champ(''à faire chd__dtm_projet''),
            nom_bref_du_champ(''à faire chd__dtm_projet''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_projet''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_projet''),
            nom_long_du_champ(''à faire chd__dtc_projet''),
            nom_court_du_champ(''à faire chd__dtc_projet''),
            nom_bref_du_champ(''à faire chd__dtc_projet''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
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
   nom_de_la_table(''tbl_taches''),
   meta(
      nom_de_la_table(''tbl_taches''),
      table(''tbl_taches''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des taches''),
      distinction_pour_isad(''d\''une tache''),
      transform_table_sur_svg(translate(881.5,536.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_tache''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_tache''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_utilisateur_tache''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_utilisateur_tache''),
            nom_long_du_champ(''à faire chx_utilisateur_tache''),
            nom_court_du_champ(''à faire chx_utilisateur_tache''),
            nom_bref_du_champ(''à faire chx_utilisateur_tache''),
            typologie(che),
            genre(9),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
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
            genre(11),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chp_priorite_tache''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_priorite_tache''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_tache''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_tache''),
            nom_long_du_champ(''à faire chd__dtm_tache''),
            nom_court_du_champ(''à faire chd__dtm_tache''),
            nom_bref_du_champ(''à faire chd__dtm_tache''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_tache''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_tache''),
            nom_long_du_champ(''à faire chd__dtc_tache''),
            nom_court_du_champ(''à faire chd__dtc_tache''),
            nom_bref_du_champ(''à faire chd__dtc_tache''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
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
            typologie(che),
            genre(15),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_projet_tache''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_projets,chi_id_projet),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_projet_tache''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
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
   nom_de_la_table(''tbl_utilisateurs''),
   meta(
      nom_de_la_table(''tbl_utilisateurs''),
      table(''tbl_utilisateurs''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des utilisateurs''),
      distinction_pour_isad(''d\''un utilisateur''),
      transform_table_sur_svg(translate(603.5,464.5))
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
            genre(2),
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
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_mot_de_passe_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(256),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_mot_de_passe_utilisateur''),
            nom_long_du_champ(''à faire chp_mot_de_passe_utilisateur''),
            nom_court_du_champ(''à faire chp_mot_de_passe_utilisateur''),
            nom_bref_du_champ(''à faire chp_mot_de_passe_utilisateur''),
            typologie(cht),
            genre(13),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(256)
         )
      ),
      champ(
         nom_du_champ(''chp_parametres_utilisateur''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_parametres_utilisateur''),
            nom_long_du_champ(''à faire chp_parametres_utilisateur''),
            nom_court_du_champ(''à faire chp_parametres_utilisateur''),
            nom_bref_du_champ(''à faire chp_parametres_utilisateur''),
            typologie(cht),
            genre(6),
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
            genre(10),
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
            genre(10),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_acces_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_acces,chi_id_acces),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_acces_utilisateur''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_utilisateur''),
            nom_long_du_champ(''à faire chd__dtm_utilisateur''),
            nom_court_du_champ(''à faire chd__dtm_utilisateur''),
            nom_bref_du_champ(''à faire chd__dtm_utilisateur''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_utilisateur''),
            nom_long_du_champ(''à faire chd__dtc_utilisateur''),
            nom_court_du_champ(''à faire chd__dtc_utilisateur''),
            nom_bref_du_champ(''à faire chd__dtc_utilisateur''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
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
            genre(10),
            afficher_champ_dans_svg(0),
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
   nom_de_la_table(''tbl_sources''),
   meta(
      nom_de_la_table(''tbl_sources''),
      table(''tbl_sources''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des sources''),
      distinction_pour_isad(''d\''un source''),
      transform_table_sur_svg(translate(593.5,58.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_source''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(2),
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
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(106),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_rev_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_genere_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_genere_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che_binaire_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_binaire_source''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(che),
            genre(5),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
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
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_source''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(0),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_source''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chd),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_source''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chd),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
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
            genre(10),
            afficher_champ_dans_svg(0),
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
   nom_de_la_table(''tbl_bdds''),
   meta(
      nom_de_la_table(''tbl_bdds''),
      table(''tbl_bdds''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des bases de données''),
      distinction_pour_isad(''d\''une base de donnée''),
      transform_table_sur_svg(translate(604.5,268.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_basedd''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_basedd''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(2),
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
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_rev_travail_basedd''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_rev_travail_basedd''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chp_fournisseur_basedd''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
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
            genre(104),
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
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_commentaire_basedd''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_commentaire_basedd''),
            nom_long_du_champ(''''),
            nom_court_du_champ(''''),
            nom_bref_du_champ(''''),
            typologie(),
            genre(6),
            afficher_champ_dans_svg(0),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_basedd''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_basedd''),
            nom_long_du_champ(''à faire chd__dtm_basedd''),
            nom_court_du_champ(''à faire chd__dtm_basedd''),
            nom_bref_du_champ(''à faire chd__dtm_basedd''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_basedd''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_basedd''),
            nom_long_du_champ(''à faire chd__dtc_basedd''),
            nom_court_du_champ(''à faire chd__dtc_basedd''),
            nom_bref_du_champ(''à faire chd__dtc_basedd''),
            typologie(chi),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
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
            genre(10),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_requetes''),
   meta(
      nom_de_la_table(''tbl_requetes''),
      table(''tbl_requetes''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des requetes''),
      distinction_pour_isad(''d\''une requete''),
      transform_table_sur_svg(translate(8.5,27.5))
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
            genre(2),
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
            genre(4),
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
         valeur_par_defaut(''liste_ecran''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_type_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chp),
            genre(103),
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
            genre(6),
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
            genre(6),
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
            genre(6),
            afficher_champ_dans_svg(1),
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
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_requete''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(0),
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
            typologie(che),
            genre(15),
            afficher_champ_dans_svg(0),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chd),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_requete''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chd),
            genre(14),
            afficher_champ_dans_svg(0),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_menus''),
   meta(
      nom_de_la_table(''tbl_menus''),
      table(''tbl_menus''),
      genre_meta(table_de_base),
      distinction_pour_liste(''liste des menus''),
      distinction_pour_isad(''d\''un menu''),
      transform_table_sur_svg(translate(362.5,474.5))
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
            genre(2),
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
            genre(3),
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
            genre(3),
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
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ(''chp_methode_menu''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_methode_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            genre(12),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''cht_initialisation_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_initialisation_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_complements_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_complements_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_php_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_php_menu''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(cht),
            genre(6),
            afficher_champ_dans_svg(1),
            espece_du_champ(TEXT)
         )
      )
   )
)','sqlite','3',NULL,'2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('2','1','meta(
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
      distinction_pour_liste(''''),
      distinction_pour_isad(''''),
      transform_table_sur_svg(translate(64.5,47.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_zzz''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_zzz''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_yyy''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_yyy''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chp),
            genre(3),
            afficher_champ_dans_svg(1),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_moi_zzz''),
         espece_du_champ(INTEGER),
         references(tbl_zzzs,chi_id_zzz),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_moi_zzz''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            genre(8),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
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
      distinction_pour_liste(''''),
      distinction_pour_isad(''''),
      transform_table_sur_svg(translate(300.5,101.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_yyy''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_yyy''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            genre(2),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chi_toto_yyy''),
         espece_du_champ(INTEGER),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_toto_yyy''),
            nom_long_du_champ(''AFR ...''),
            nom_court_du_champ(''AFR ...''),
            nom_bref_du_champ(''AFR ...''),
            typologie(chi),
            genre(7),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_id_zzz_yyyyyyyyy''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_zzzs,chi_id_zzz),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_id_zzz_yyyyyyyyy''),
            nom_long_du_champ(''A faire ...''),
            nom_court_du_champ(''A faire ...''),
            nom_bref_du_champ(''A faire ...''),
            typologie(chx),
            genre(4),
            afficher_champ_dans_svg(1),
            espece_du_champ(INTEGER)
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
)','sqlite','8',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_requetes
  ===============================
*/

INSERT INTO tbl_requetes (chi_id_requete,
chx_projet_requete,
chp_type_requete,
cht_rev_requete,
cht_sql_requete,
cht_php_requete,
cht_matrice_requete,
cht_commentaire_requete,
che__nur_requete,
chd__dtm_requete,
chd__dtc_requete) VALUES
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
;',NULL,NULL,'utilisateur par nom_de_connexion','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'liste des requêtes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_requete` = :chx_projet_requete) ;',NULL,NULL,'requête par id','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_source_rev` = :chx_source_rev) ;',NULL,NULL,'revs par provenance, source et projet','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'requêtes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'requêtes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,NULL,'requêtes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',NULL,NULL,'bdds','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'bdds','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'revs','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'revs','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE (`chx_projet_rev` = :chx_projet_rev) ;',NULL,NULL,'revs par projet','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',NULL,NULL,'bdds','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'bdds','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_id_basedd` = :chx_projet_id_basedd) ;',NULL,NULL,'base par id','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('119','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_tache`),champ(`T0`,`chp_texte_tache`),champ(`T0`,`chp_priorite_tache`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache),
         comme(champ(`T0`,`chp_texte_tache`),:T0_chp_texte_tache),
         egal(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache),
         inf(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache2),
         egal(champ(`T0`,`chx_projet_tache`),:T0_chx_projet_tache)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chp_priorite_tache`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
   AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2
   AND `T0`.`chx_projet_tache` = :T0_chx_projet_tache) 
ORDER BY `T0`.`chp_priorite_tache` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'tâches','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('120','1','update','modifier(
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
         supegal(champ(`chp_priorite_tache`),1),
         egal(champ(`chx_projet_tache`),:c_chx_projet_tache)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache-1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` >= 1
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',NULL,NULL,'tâches priorité - 1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('121','1','update','modifier(
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
         inf(champ(`chp_priorite_tache`),99),
         egal(champ(`chx_projet_tache`),:c_chx_projet_tache)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` < 99
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',NULL,NULL,'tâches','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('122','1','update','modifier(
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
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache),
         egal(champ(`chx_projet_tache`),:c_chx_projet_tache)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',NULL,NULL,'tâches','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'dossiers','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,NULL,'accès paramètres par id','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',NULL,NULL,'***dispo***','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'base par id','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'bdds','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('128','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      #(),
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`chp_priorite_tache`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache),
         egal(champ(`T0`,`chx_projet_tache`),:T0_chx_projet_tache)
      )
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chx_projet_tache` = :T0_chx_projet_tache)
;',NULL,NULL,'tâches par id','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('129','1','update','modifier(
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
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache),
         egal(champ(`chx_projet_tache`),:c_chx_projet_tache)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',NULL,NULL,'tâches texte et priorité par id','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('130','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache),
      affecte(champ(`chp_texte_tache`),:chp_texte_tache),
      affecte(champ(`chp_priorite_tache`),:chp_priorite_tache),
      affecte(champ(`chx_projet_tache`),:chx_projet_tache),
      affecte(champ(`chd__dtm_tache`),:chd__dtm_tache),
      affecte(champ(`chd__dtc_tache`),:chd__dtc_tache)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_taches`(
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
);',NULL,NULL,'tâches','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('131','1','delete','supprimer(
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
         egal(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache),
         egal(champ(`chx_projet_tache`),:chx_projet_tache)
      )
   )
)  ','DELETE FROM b1.tbl_taches
WHERE ( /* */ `chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache
   AND `chx_projet_tache` = :chx_projet_tache) ;',NULL,NULL,'tâches par id','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'requetes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'projets','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'projets','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,NULL,'requêtes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'projets','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'dossiers','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_id_source` = :chx_projet_id_source) ;',NULL,NULL,'sources','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'bdds','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('141','1','requete_manuelle','base_de_reference(1),
transaction()    ','BEGIN TRANSACTION;',NULL,NULL,'sur base 1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('142','1','requete_manuelle','base_de_reference(1),
commit()  ','COMMIT;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('143','1','requete_manuelle','base_de_reference(1),
rollback()          ','ROLLBACK;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('144','1','requete_manuelle','modifier_table(
   #(),
   nom_de_la_table( '':nom_de_la_table''),
   actions( drop_column( '':nom_du_champ'' ))
)              ','ALTER TABLE :nom_de_la_table DROP COLUMN :nom_du_champ',NULL,NULL,'***dispo***','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE (`chi_id_projet` = :chi_id_projet) ;',NULL,NULL,'projets','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
('148','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_projet`),:n_chp_nom_projet),affecte(champ(`chx_dossier_requetes_projet`),:n_chx_dossier_requetes_projet),affecte(champ(`chx_dossier_menus_projet`),:n_chx_dossier_menus_projet),affecte(champ(`cht_commentaire_projet`),:n_cht_commentaire_projet)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_projet`),:c_chi_id_projet))
)  ','UPDATE b1.tbl_projets SET 
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
;',NULL,NULL,'requetes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'dossiers','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('151','1','requete_manuelle','transaction()        ','BEGIN TRANSACTION;',NULL,NULL,'sur base 1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'liste des dossiers','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'sources','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_dossier` = :c_chx_projet_dossier) ;',NULL,NULL,'dossiers','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_projet` >= :chi_id_projet ;',NULL,NULL,'projets >= id','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',NULL,NULL,'dossiers','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'dossiers','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'projets','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'sources','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'sources','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('163','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_dossier_id_source`),:n_chx_dossier_id_source),
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
   `chp_nom_source` = :n_chp_nom_source , 
   `cht_commentaire_source` = :n_cht_commentaire_source , 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source , 
   `che_binaire_source` = :n_che_binaire_source
WHERE (`chi_id_source` = :c_chi_id_source
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',NULL,NULL,'sources','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('164','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      #(),
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`chp_priorite_tache`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache),
         inf(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache),
         egal(champ(`T0`,`chx_projet_tache`),:T0_chx_projet_tache)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chp_priorite_tache`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache
   AND `T0`.`chx_projet_tache` = :T0_chx_projet_tache) 
ORDER BY `T0`.`chp_priorite_tache` ASC
;',NULL,NULL,'tâches par priorité < xxx','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('165','1','update','modifier(
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
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache),
         egal(champ(`chx_projet_tache`),:c_chx_projet_tache)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chx_projet_tache` = :c_chx_projet_tache) ;',NULL,NULL,'tâches priorité par id=','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,'utilisateur sur page profile','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'dossier compte sous dossiers','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'dossiers par parents','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('170','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , base(b1) ))
      )
   ),
   conditions( egal( champ( `chx_projet_dossier` ) , :chx_projet_dossier ))
)','DELETE FROM b1.tbl_dossiers
WHERE `chx_projet_dossier` = :chx_projet_dossier ;',NULL,NULL,'dossier racine d''un projet','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'bases d''un projet','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,'utilisateurs','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'liste des groupes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'groupes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'groupes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',NULL,NULL,'groupes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('177','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_groupe` ) , :chi_id_groupe ))
)  ','DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',NULL,NULL,'groupes','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'utilisateurs','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'utilisateurs','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
      champ(`T0`,`chd__dtm_utilisateur`),
      champ(`T0`,`chd__dtc_utilisateur`),
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
`T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , 
`T1`.`chp_nom_acces` , `T1`.`chx_groupe_acces` , `T1`.`chx_metier_acces` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,NULL,'utilisateur','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,'utilisateur','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('182','1','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_utilisateur` ) , :chi_id_utilisateur ))
)  ','DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',NULL,NULL,'utilisateur','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'métier','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'métier','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'métier','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_metier` = :c_chi_id_metier ;',NULL,NULL,'métier','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('187','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_metiers , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_metier` ) , :chi_id_metier ))
)  ','DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',NULL,NULL,'métier','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'acces','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'accès','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'accès','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,NULL,'accès','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('197','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:chi_id_acces))
)  ','DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',NULL,NULL,'acces','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,NULL,'projets','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'dossiers à copier dans un autre environnement','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('307','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_dossier`),:chi_id_dossier),
      affecte(champ(`chx_projet_dossier`),:chx_projet_dossier),
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
)  ','INSERT INTO b1.`tbl_dossiers`(
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
);',NULL,NULL,'dossiers à copier dans un autre environnement','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'dossiers du projet à copier dans un autre environnement','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE (`chi_id_projet` = :c_chi_id_projet) ;',NULL,NULL,'dossiers à copier dans un autre environnement','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',NULL,NULL,'sources','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'sources à copier dans un autre environnement','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('314','1','insert','insérer(
   base_de_reference(),
   valeurs(
      affecte(champ(`chi_id_source`),:chi_id_source),
      affecte(champ(`chx_projet_id_source`),:chx_projet_id_source),
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
)  ','INSERT INTO b1.`tbl_sources`(
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
);',NULL,NULL,'dossiers à copier dans un autre environnement','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('315','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_basedd`),:chi_id_basedd),
      affecte(champ(`chx_projet_id_basedd`),:chx_projet_id_basedd),
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
)  ','INSERT INTO b1.`tbl_bdds`(
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
);',NULL,NULL,'insérer la base principale','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'projets >2 pour isa de champs ','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'autorisations','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
);',NULL,NULL,'autorisations','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'autorisations','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('320','1','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:chi_id_autorisation))
)  ','DELETE FROM b1.tbl_autorisations
WHERE `chi_id_autorisation` = :chi_id_autorisation ;',NULL,NULL,'autorisations','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;',NULL,NULL,'autorisations','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('322','1','liste_ecran','sélectionner(
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
      champ(`T2`,`chi_id_acces`),
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
         comme(champ(`T0`,`chp_methode_menu`),:T0_chp_methode_menu),
         egal(champ(`T1`,`chx_acces_autorisation`),:T1_chx_acces_autorisation)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_menu`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
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
;',NULL,NULL,'menus','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('323','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_titre_menu`),:chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:chp_methode_menu),
      affecte(champ(`cht_libelle_menu`),:cht_libelle_menu),
      affecte(champ(`cht_initialisation_menu`),:cht_initialisation_menu),
      affecte(champ(`cht_complements_menu`),:cht_complements_menu),
      affecte(champ(`cht_condition_menu`),:cht_condition_menu),
      affecte(champ(`cht_condition_php_menu`),:cht_condition_php_menu)
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
);',NULL,NULL,'menus','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('324','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_initialisation_menu`),
      champ(`T0`,`cht_complements_menu`),
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
      et(egal(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu))
   )
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`cht_complements_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , 
`T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
;',NULL,NULL,'menus','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('325','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`cht_libelle_menu`),:n_cht_libelle_menu),
      affecte(champ(`chp_titre_menu`),:n_chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:n_chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:n_chp_methode_menu),
      affecte(champ(`cht_initialisation_menu`),:n_cht_initialisation_menu),
      affecte(champ(`cht_complements_menu`),:n_cht_complements_menu),
      affecte(champ(`cht_condition_menu`),:n_cht_condition_menu),
      affecte(champ(`cht_condition_php_menu`),:n_cht_condition_php_menu)
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
   `cht_complements_menu` = :n_cht_complements_menu , 
   `cht_condition_menu` = :n_cht_condition_menu , 
   `cht_condition_php_menu` = :n_cht_condition_php_menu
WHERE `chi_id_menu` = :c_chi_id_menu ;',NULL,NULL,'menus','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
;',NULL,NULL,'menus','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
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
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`cht_condition_php_menu`),
      champ(`T0`,`cht_condition_menu`)
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
`T0`.`cht_initialisation_menu` , `T0`.`cht_complements_menu` , `T0`.`chi_id_menu` , `T0`.`cht_condition_php_menu` , `T0`.`cht_condition_menu`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE `T2`.`chi_id_acces` = :T2_chi_id_acces
;',NULL,NULL,'menus par acces','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('328','1','liste_ecran','sélectionner(
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
      champ(`T0`,`che_est_ts_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chi_id_genre`),:T0_chi_id_genre),
         comme(champ(`T0`,`chp_nom_genre`),:T0_chp_nom_genre),
         comme(champ(`T0`,`chp_espece_genre`),:T0_chp_espece_genre),
         comme(champ(`T0`,`cht_valeur_init_genre`),:T0_cht_valeur_init_genre),
         comme(champ(`T0`,`chp_prefixe_genre`),:T0_chp_prefixe_genre),
         comme(champ(`T0`,`cht_parmis_genre`),:T0_cht_parmis_genre)
      )
   ),
   complements(
      trier_par((champ(`T0`,`che_ordre_genre`),croissant()),(champ(`T0`,`chp_nom_genre`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_est_ts_genre` , `T0`.`cht_fonctions_genre`
 FROM b1.tbl_genres T0
WHERE (`T0`.`chi_id_genre` = :T0_chi_id_genre
   AND `T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre
   AND `T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre
   AND `T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre
   AND `T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre
   AND `T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre) 
ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'genres','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('329','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_nom_genre`),:chp_nom_genre),
      affecte(champ(`chp_espece_genre`),:chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:cht_valeur_init_genre),
      affecte(champ(`chp_prefixe_genre`),:chp_prefixe_genre),
      affecte(champ(`che_est_parmis_genre`),:che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:cht_parmis_genre),
      affecte(champ(`che_est_ts_genre`),:che_est_ts_genre),
      affecte(champ(`cht_fonctions_genre`),:cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:che_est_nur_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_genres`(
    `chp_nom_genre` , 
    `chp_espece_genre` , 
    `che_longueur_genre` , 
    `che_est_primaire_genre` , 
    `che_est_incrément_genre` , 
    `che_est_obligatoire_genre` , 
    `che_a_init_genre` , 
    `che_init_est_mot_genre` , 
    `cht_valeur_init_genre` , 
    `chp_prefixe_genre` , 
    `che_est_parmis_genre` , 
    `cht_parmis_genre` , 
    `che_est_ts_genre` , 
    `cht_fonctions_genre` , 
    `che_est_nur_genre`
) VALUES (
    :chp_nom_genre , 
    :chp_espece_genre , 
    :che_longueur_genre , 
    :che_est_primaire_genre , 
    :che_est_incrément_genre , 
    :che_est_obligatoire_genre , 
    :che_a_init_genre , 
    :che_init_est_mot_genre , 
    :cht_valeur_init_genre , 
    :chp_prefixe_genre , 
    :che_est_parmis_genre , 
    :cht_parmis_genre , 
    :che_est_ts_genre , 
    :cht_fonctions_genre , 
    :che_est_nur_genre
);',NULL,NULL,'genres','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('330','1','select','sélectionner(
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
      champ(`T0`,`che_est_ts_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_genre`),:T0_chi_id_genre))
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_est_ts_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre`
 FROM b1.tbl_genres T0
WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
;',NULL,NULL,'genres','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('331','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_nom_genre`),:n_chp_nom_genre),
      affecte(champ(`chp_espece_genre`),:n_chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:n_che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:n_che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:n_che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:n_che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:n_che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:n_che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:n_cht_valeur_init_genre),
      affecte(champ(`chp_prefixe_genre`),:n_chp_prefixe_genre),
      affecte(champ(`che_est_parmis_genre`),:n_che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:n_cht_parmis_genre),
      affecte(champ(`che_est_ts_genre`),:n_che_est_ts_genre),
      affecte(champ(`cht_fonctions_genre`),:n_cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:n_che_est_nur_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ','UPDATE b1.tbl_genres SET 
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
   `che_est_ts_genre` = :n_che_est_ts_genre , 
   `cht_fonctions_genre` = :n_cht_fonctions_genre , 
   `che_est_nur_genre` = :n_che_est_nur_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,NULL,'genres','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('332','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:chi_id_genre))
)  ','DELETE FROM b1.tbl_genres
WHERE `chi_id_genre` = :chi_id_genre ;',NULL,NULL,'genres','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('333','1','select','sélectionner(
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
      champ(`T0`,`che_est_ts_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   complements(
      trier_par((champ(`T0`,`che_ordre_genre`),croissant()),(champ(`T0`,`chp_nom_genre`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_ts_genre` , 
`T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre`
 FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
;',NULL,NULL,'tous les genres','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('334','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_genre`),:n_chi_id_genre)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ','UPDATE b1.tbl_genres SET 
   `chi_id_genre` = :n_chi_id_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,NULL,'genres nouveau numéro','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('335','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`che_ordre_genre`),:n_che_ordre_genre)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ','UPDATE b1.tbl_genres SET 
   `che_ordre_genre` = :n_che_ordre_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,NULL,'genres maj ordre','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('336','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:chi_id_menu))
)  ','DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',NULL,NULL,'menus','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('337','1','liste_ecran','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`cht_libelle_menu` , `T0`.`chp_titre_menu`
 FROM b1.tbl_menus T0
WHERE ( /* */ `T0`.`chi_id_menu` = :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` IS NULL) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'menus','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('338','1','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_rev_source`),:n_cht_rev_source),affecte(champ(`cht_genere_source`),:n_cht_genere_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_source`),:c_chi_id_source),egal(champ(`chx_projet_id_source`),:c_chx_projet_id_source))
   )
)  ','UPDATE b1.tbl_sources SET 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source
WHERE (`chi_id_source` = :c_chi_id_source
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',NULL,NULL,'sources','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_menus
  ===============================
*/

INSERT INTO tbl_menus (chi_id_menu,
cht_libelle_menu,
chp_titre_menu,
chx_autorisation_menu,
chp_methode_menu,
cht_initialisation_menu,
cht_complements_menu,
cht_condition_menu,
cht_condition_php_menu) VALUES
('1','tâches','Liste des tâches','1','page_liste_des_taches1','T0_chp_priorite_tache2(99)',NULL,'appelf(
   nomf(isset),
   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);'),
('2','matrice','convertion de rev vers matrice','2','page1',NULL,'maj_interface2(modifier(id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegardées,ls_rev1))))',NULL,NULL),
('3','js','convertion de javascript ','3','page1',NULL,'maj_interface2(
   modifier(id(vv_txtarea_js_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegardées,ls_js_rev1)))
)',NULL,NULL),
('4','php','convertion de php','5','page1',NULL,'maj_interface2(
   modifier(id(vv_txtarea_php_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegardées,ls_php_rev1)))
)',NULL,NULL),
('5','sql','convertion de sql','6','page1',NULL,'maj_interface2(
   modifier(
      id(vv_txtarea_sql_rev1),
      composante(value),
      avec(
        valeur_de_localstorage(
          zones_sauvegardées,
          ls_sql_rev1
        )
      )
   )
)',NULL,NULL),
('6','css','convertion de css','7','page1',NULL,'maj_interface2(
   modifier(
      id(vv_txtarea_css_rev1),
      composante(value),
      avec(
         valeur_de_localstorage(
            zones_sauvegardées,
            ls_css_rev1
         )
      )
   )
)',NULL,NULL),
('7','txt','convertion de textes','8','page1',NULL,'maj_interface2(modifier(id(vv_txtarea_texte_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegardées,ls_texte_rev1))))',NULL,NULL),
('8','projets','liste des projets','9','page_projets_liste1',NULL,NULL,NULL,NULL),
('9','fido','liste des dossiers et des fichiers','10','page_dossiers_liste1',NULL,NULL,'appelf(
   nomf(isset),
   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);'),
('10','sources','liste des sources des programmes','11','page_liste_des_sources1',NULL,NULL,'appelf(
   nomf(isset),
   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);'),
('11','bases','liste des bases','12','page_liste_des_bases1',NULL,NULL,'appelf(
   nomf(isset),
   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);'),
('12','requêtes','liste des requêtes sur les bases','13','page_liste_des_requetes1',NULL,NULL,'appelf(
   nomf(isset),
   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);'),
('13','(😊)','liste des revs','14','page_liste_des_revs1',NULL,NULL,'appelf(
   nomf(isset),
   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);'),
('14','groupes','liste des groupes','15','page_liste_des_groupes1',NULL,NULL,'et(
   appelf(
      nomf(isset),
      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
   ),
   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;'),
('15','métiers','liste des métiers','16','page_liste_des_metiers1',NULL,NULL,'et(
   appelf(
      nomf(isset),
      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
   ),
   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;'),
('16','accès','liste des accès','17','page_liste_des_acces1',NULL,NULL,'et(
   appelf(
      nomf(isset),
      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
   ),
   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;'),
('17','utilisateurs','liste des utilisateurs','20','page_liste_des_utilisateurs1',NULL,NULL,'et(
   appelf(
      nomf(isset),
      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
   ),
   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;'),
('18','autorisations','liste des autorisations','18','page_liste_des_autorisations1',NULL,NULL,'et(
   appelf(
      nomf(isset),
      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
   ),
   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;'),
('19','menus','liste des menus','21','page_liste_des_menus1',NULL,NULL,'et(
   appelf(
      nomf(isset),
      p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
   ),
   egalstricte(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')),1)
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']) && $_SESSION[__X_CLE_APPLICATION][''chi_id_projet''] === 1;'),
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
</svg>','mon profile','19','recupere_la_page_des_coordonnees',NULL,NULL,NULL,NULL),
('21','html','html','4','page1',NULL,'maj_interface2(
   modifier(id(vv_txtarea_html_rev1),composante(value),avec(valeur_de_localstorage(zones_sauvegardées,ls_html_rev1)))
)',NULL,NULL),
('22','genres','liste des types de bonnées dans la bdd','22','page_liste_des_genres1',NULL,NULL,'appelf(
   nomf(isset),
   p(tableau(nomt($_SESSION[__X_CLE_APPLICATION]),p(''chi_id_projet'')))
)','isset($_SESSION[__X_CLE_APPLICATION][''chi_id_projet'']);');

/*
  ============================
  3°) à la fin les index
  ============================
*/

CREATE UNIQUE INDEX idx_ligne_rev ON `tbl_revs` 
        /* meta(nom_de_l_index(idx_ligne_rev),genre_meta(index_de_table),message('')) */
         ( `chx_projet_rev` , `chp_provenance_rev` , `chx_source_rev` , `chp_id_rev` ) ;

CREATE UNIQUE INDEX idx_projet_et_nom_dossiers ON `tbl_dossiers` 
        /* meta(nom_de_l_index(idx_projet_et_nom_dossiers),genre_meta(index_de_table),message('Ce dossier existe déjà')) */
         ( `chx_projet_dossier` , `chp_nom_dossier` , `chx_parent_dossier` ) ;

CREATE UNIQUE INDEX idx_nom_groupe ON `tbl_groupes` 
        /* meta(nom_de_l_index(idx_nom_groupe),genre_meta(index_de_table),message('ce nom de groupe existe')) */
         ( `chp_nom_groupe` ) ;

CREATE UNIQUE INDEX idx_nom_metier ON `tbl_metiers` 
        /* meta(nom_de_l_index(idx_nom_metier),genre_meta(index_de_table),message('')) */
         ( `chp_nom_metier` ) ;

CREATE UNIQUE INDEX idx_acces_grp_metier ON `tbl_acces` 
        /* meta(nom_de_l_index(idx_acces_grp_metier),genre_meta(index_de_table),message('')) */
         ( `chx_groupe_acces` , `chx_metier_acces` ) ;

CREATE UNIQUE INDEX idx_unique1 ON `tbl_autorisations` 
        /* meta(nom_de_l_index(idx_unique1),genre_meta(index_de_table),message('')) */
         ( `chx_acces_autorisation` , `chx_source_autorisation` ) ;

CREATE UNIQUE INDEX idx_nom_unique_projets ON `tbl_projets` 
        /* meta(nom_de_l_index(idx_nom_unique_projets),genre_meta(index_de_table),message('ce projet existe déjà')) */
         ( `chp_nom_projet` ) ;

CREATE UNIQUE INDEX idx_texte_unique_taches ON `tbl_taches` 
        /* meta(nom_de_l_index(idx_texte_unique_taches),genre_meta(index_de_table),message('Cete tache existe déjà')) */
         ( `chp_texte_tache` ) ;

CREATE UNIQUE INDEX idx_nom_unique_utilisateurs ON `tbl_utilisateurs` 
        /* meta(nom_de_l_index(idx_nom_unique_utilisateurs),genre_meta(index_de_table),message('Ce nom d\'utilisateur existe déjà')) */
         ( `chp_nom_de_connexion_utilisateur` ) ;

CREATE UNIQUE INDEX idx_source ON `tbl_sources` 
        /* meta(nom_de_l_index(idx_source),genre_meta(index_de_table),message('')) */
         ( `chx_dossier_id_source` , `chp_nom_source` ) ;

