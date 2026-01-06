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
   genre_meta(table_de_base),permet_la_gestion_de('rev'),
   distinction_pour_liste('liste des revs'),
   distinction_pour_isad('d\'un rev'),
   transform_table_sur_svg(translate(359.5,569.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_rev'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_rev INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_provenance_rev'),
            nom_bref_du_champ('provenance'),abrege_du_champ('provenance'),
            typologie(cho),
            genre(12),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
            )
            */
             chp_provenance_rev VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_source_rev'),
            nom_bref_du_champ('source'),abrege_du_champ('source'),
            typologie(chx),
            genre(7),
            espece_du_champ(INTEGER)
            )
            */
             chx_source_rev INTEGER DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_id_rev'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_id_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_valeur_rev'),
            nom_bref_du_champ('valeur'),abrege_du_champ('valeur'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             chp_valeur_rev TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_type_rev'),
            nom_bref_du_champ('type'),abrege_du_champ('type'),
            typologie(cho),
            genre(105),
            espece_du_champ(VARCHAR),
            longueur_du_champ(3)
            )
            */
             chp_type_rev VARCHAR(1) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_niveau_rev'),
            nom_bref_du_champ('niveau'),abrege_du_champ('niveau'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_niveau_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_quotee_rev'),
            nom_bref_du_champ('quotee'),abrege_du_champ('quotee'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_quotee_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_premier_rev'),
            nom_bref_du_champ('pos premier'),abrege_du_champ('pos premier'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_pos_premier_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_dernier_rev'),
            nom_bref_du_champ('pos dernier'),abrege_du_champ('pos dernier'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_pos_dernier_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_parent_rev'),
            nom_bref_du_champ('parent'),abrege_du_champ('parent'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_parent_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nbr_enfants_rev'),
            nom_bref_du_champ('nbr enfants'),abrege_du_champ('nbr enfants'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_nbr_enfants_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_num_enfant_rev'),
            nom_bref_du_champ('num enfant'),abrege_du_champ('num enfant'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_num_enfant_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_profondeur_rev'),
            nom_bref_du_champ('profondeur'),abrege_du_champ('profondeur'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_profondeur_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_ouver_parenthese_rev'),
            nom_bref_du_champ('pos ouver parenthese'),abrege_du_champ('pos ouver parenthese'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_pos_ouver_parenthese_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_enfant_suivant_rev'),
            nom_bref_du_champ('enfant suivant'),abrege_du_champ('enfant suivant'),
            typologie(che),
            genre(9),
            espece_du_champ(INTEGER)
            )
            */
             chp_enfant_suivant_rev INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_commentaire_rev'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             chp_commentaire_rev TEXT DEFAULT  NULL
    );

CREATE TABLE tbl_dossiers(
/*
 meta(nom_de_la_table('tbl_dossiers'),
   table('tbl_dossiers'),
   genre_meta(table_de_base),permet_la_gestion_de('dossier'),
   distinction_pour_liste('liste des dossiers'),
   distinction_pour_isad('d\'un dossier'),
   transform_table_sur_svg(translate(721.5,490.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_dossier'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_dossier INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_dossier'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(chp),
            genre(108),
            espece_du_champ(CHARACTER),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             chp_nom_dossier VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_dossier'),
            nom_bref_du_champ('parent'),abrege_du_champ('parent'),
            typologie(),
            genre(4),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
            )
            */
             chx_parent_dossier INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  '1'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_contient_genere_dossier'),
            nom_bref_du_champ('contient genere'),abrege_du_champ('contient genere'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_contient_genere_dossier INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_dossier'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
            )
            */
             che__nur_dossier INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_dossier'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtm_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_dossier'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtc_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_pour_les_js_dossier'),
            nom_bref_du_champ('pour les js'),abrege_du_champ('pour les js'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_pour_les_js_dossier INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_groupes(
/*
 meta(nom_de_la_table('tbl_groupes'),
   table('tbl_groupes'),
   genre_meta(table_de_base),permet_la_gestion_de('groupe'),
   distinction_pour_liste('liste des groupes'),
   distinction_pour_isad('d\'un groupe'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),
   transform_table_sur_svg(translate(13.5,51.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_groupe'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_groupe INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_groupe'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(cht),
            genre(19),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             chp_nom_groupe VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_groupe'),
            nom_bref_du_champ('parent'),abrege_du_champ('parent'),
            typologie(chx),
            genre(8),
            espece_du_champ(INTEGER)
            )
            */
             chx_parent_groupe INTEGER REFERENCES tbl_groupes(chi_id_groupe)  DEFAULT  NULL
    );

CREATE TABLE tbl_metiers(
/*
 meta(nom_de_la_table('tbl_metiers'),
   table('tbl_metiers'),
   genre_meta(table_de_base),permet_la_gestion_de('metier'),
   distinction_pour_liste('liste des metiers'),
   distinction_pour_isad('d\'un metier'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),
   transform_table_sur_svg(translate(25.5,276.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_metier'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_metier INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_metier'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(cht),
            genre(19),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             chp_nom_metier VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_metier'),
            nom_bref_du_champ('parent'),abrege_du_champ('parent'),
            typologie(chx),
            genre(8),
            espece_du_champ(INTEGER)
            )
            */
             chx_parent_metier INTEGER REFERENCES tbl_metiers(chi_id_metier)  DEFAULT  NULL
    );

CREATE TABLE tbl_acces(
/*
 meta(nom_de_la_table('tbl_acces'),
   table('tbl_acces'),
   genre_meta(table_de_base),permet_la_gestion_de('accès'),
   distinction_pour_liste('liste des accès'),
   distinction_pour_isad('d\'un accès'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),
   transform_table_sur_svg(translate(345.5,59.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_acces'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_acces INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_acces'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             chp_nom_acces VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_groupe_acces'),
            nom_bref_du_champ('groupe'),abrege_du_champ('groupe'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
            )
            */
             chx_groupe_acces INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_metier_acces'),
            nom_bref_du_champ('metier'),abrege_du_champ('metier'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
            )
            */
             chx_metier_acces INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_parametres_acces'),
            nom_bref_du_champ('parametres'),abrege_du_champ('parametres'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_parametres_acces TEXT DEFAULT  NULL
    );

CREATE TABLE tbl_projets(
/*
 meta(nom_de_la_table('tbl_projets'),
   table('tbl_projets'),
   genre_meta(table_de_base),permet_la_gestion_de('projet'),
   distinction_pour_liste('liste des projets'),
   distinction_pour_isad('d\'un projet'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),
   transform_table_sur_svg(translate(703.5,218.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_projet'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER),est_en_session(1)
            )
            */
             chi_id_projet INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_projet'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(),
            genre(11),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
            )
            */
             chp_nom_projet TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_projet'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),
            typologie(),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_commentaire_projet TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_requetes_projet'),
            nom_bref_du_champ('dossier requetes'),abrege_du_champ('dossier requetes'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
            )
            */
             chx_dossier_requetes_projet INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_menus_projet'),
            nom_bref_du_champ('dossier menus'),abrege_du_champ('dossier menus'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
            )
            */
             chx_dossier_menus_projet INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_projet'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
            )
            */
             che__nur_projet INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_projet'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtm_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_projet'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtc_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_bdds_projet'),
            nom_bref_du_champ('dossier bdds'),abrege_du_champ('dossier des bases de données'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
            )
            */
             chx_dossier_bdds_projet INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  1
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_js_projet'),
            nom_bref_du_champ('dossier js'),abrege_du_champ('dossier des javascript'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
            )
            */
             chx_dossier_js_projet INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  1
    );

CREATE TABLE tbl_utilisateurs(
/*
 meta(nom_de_la_table('tbl_utilisateurs'),
   table('tbl_utilisateurs'),
   genre_meta(table_de_base),permet_la_gestion_de('utilisateur'),
   distinction_pour_liste('liste des utilisateurs'),
   distinction_pour_isad('d\'un utilisateur'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),
   transform_table_sur_svg(translate(780.5,769.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_utilisateur'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER),est_en_session(1)
            )
            */
             chi_id_utilisateur INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_de_connexion_utilisateur'),
            nom_bref_du_champ('nom de connexion'),abrege_du_champ('nom de connexion'),
            typologie(cht),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             chp_nom_de_connexion_utilisateur VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_mot_de_passe_utilisateur'),
            nom_bref_du_champ('mot de passe'),abrege_du_champ('mot de passe'),
            typologie(cht),
            genre(13),
            espece_du_champ(VARCHAR),
            longueur_du_champ(256)
            )
            */
             chp_mot_de_passe_utilisateur VARCHAR(256) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_parametres_utilisateur'),
            nom_bref_du_champ('parametres'),abrege_du_champ('parametres'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             chp_parametres_utilisateur TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_compteur1_utilisateur'),
            nom_bref_du_champ('compteur1'),abrege_du_champ('compteur1'),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER)
            )
            */
             chi_compteur1_utilisateur INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_acces_utilisateur'),
            nom_bref_du_champ('acces'),abrege_du_champ('acces'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
            )
            */
             chx_acces_utilisateur INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_utilisateur'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtm_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_utilisateur'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtc_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_utilisateur'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
            )
            */
             che__nur_utilisateur INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_sources(
/*
 meta(nom_de_la_table('tbl_sources'),
   table('tbl_sources'),
   genre_meta(table_de_base),permet_la_gestion_de('source'),
   distinction_pour_liste('liste des sources'),
   distinction_pour_isad('d\'un source'),
   transform_table_sur_svg(translate(1103.5,320.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_source'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_source INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_source'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(),
            genre(19),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
            )
            */
             chp_nom_source VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_source'),
            nom_bref_du_champ('rev'),abrege_du_champ('rev'),
            typologie(),
            genre(98),
            espece_du_champ(TEXT)
            )
            */
             cht_rev_source TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_genere_source'),
            nom_bref_du_champ('genere'),abrege_du_champ('genere'),
            typologie(),
            genre(97),
            espece_du_champ(TEXT)
            )
            */
             cht_genere_source TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_binaire_source'),
            nom_bref_du_champ('binaire'),abrege_du_champ('binaire'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_binaire_source INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_id_source'),
            nom_bref_du_champ('dossier id'),abrege_du_champ('dossier id'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
            )
            */
             chx_dossier_id_source INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_source'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),
            typologie(),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_commentaire_source TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_source'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtm_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_source'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chd),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtc_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_source'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
            )
            */
             che__nur_source INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_contient_version_source'),
            nom_bref_du_champ('contient version'),abrege_du_champ('contient version'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_contient_version_source INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_autorisation_globale_source'),
            nom_bref_du_champ('autorisation globale'),abrege_du_champ('autorisation globale'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_autorisation_globale_source INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_bdds(
/*
 meta(nom_de_la_table('tbl_bdds'),
   table('tbl_bdds'),
   genre_meta(table_de_base),permet_la_gestion_de('base'),
   distinction_pour_liste('liste des bases de données'),
   distinction_pour_isad('d\'une base de donnée'),
   transform_table_sur_svg(translate(1135.5,631.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_basedd'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_basedd INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_rev_travail_basedd'),
            nom_bref_du_champ('rev travail'),abrege_du_champ('rev travail'),
            typologie(),
            genre(98),
            espece_du_champ(TEXT)
            )
            */
             chp_rev_travail_basedd TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_fournisseur_basedd'),
            nom_bref_du_champ('fournisseur'),abrege_du_champ('fournisseur'),
            typologie(chi),
            genre(104),
            espece_du_champ(TEXT)
            )
            */
             chp_fournisseur_basedd VARCHAR(64) NOT NULL DEFAULT  'sqlite'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_id_basedd'),
            nom_bref_du_champ('dossier id'),abrege_du_champ('dossier id'),
            typologie(chx),
            genre(8),
            espece_du_champ(INTEGER)
            )
            */
             chx_dossier_id_basedd INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_commentaire_basedd'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),
            typologie(),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             chp_commentaire_basedd TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_basedd'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtm_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_basedd'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtc_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_basedd'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
            )
            */
             che__nur_basedd INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_menus(
/*
 meta(nom_de_la_table('tbl_menus'),
   table('tbl_menus'),
   genre_meta(table_de_base),permet_la_gestion_de('menu'),
   distinction_pour_liste('liste des menus'),
   distinction_pour_isad('d\'un menu'),
   transform_table_sur_svg(translate(1101.5,13.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_menu'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_menu INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_libelle_menu'),
            nom_bref_du_champ('libelle'),abrege_du_champ('libelle'),
            typologie(cht),
            genre(11),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
            )
            */
             cht_libelle_menu TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_titre_menu'),
            nom_bref_du_champ('titre'),abrege_du_champ('titre'),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             chp_titre_menu VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_autorisation_menu'),
            nom_bref_du_champ('autorisation'),abrege_du_champ('autorisation'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
            )
            */
             chx_autorisation_menu INTEGER NOT NULL REFERENCES tbl_autorisations(chi_id_autorisation) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_methode_menu'),
            nom_bref_du_champ('methode'),abrege_du_champ('methode'),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
            )
            */
             chp_methode_menu VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_initialisation_menu'),
            nom_bref_du_champ('initialisation'),abrege_du_champ('initialisation'),
            typologie(cht),
            genre(98),
            espece_du_champ(TEXT)
            )
            */
             cht_initialisation_menu TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_menu'),
            nom_bref_du_champ('condition'),abrege_du_champ('condition'),
            typologie(cht),
            genre(98),
            espece_du_champ(TEXT)
            )
            */
             cht_condition_menu TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_php_menu'),
            nom_bref_du_champ('condition php'),abrege_du_champ('condition php'),
            typologie(cht),
            genre(97),
            espece_du_champ(TEXT)
            )
            */
             cht_condition_php_menu TEXT DEFAULT  NULL
    );

CREATE TABLE tbl_taches(
/*
 meta(nom_de_la_table('tbl_taches'),
   table('tbl_taches'),
   genre_meta(table_de_base),permet_la_gestion_de('tâche'),
   distinction_pour_liste('liste des tâches'),
   distinction_pour_isad('d\'une tâche'),
   transform_table_sur_svg(translate(361.5,329.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_tache'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_tache INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_utilisateur_tache'),
            nom_bref_du_champ('utilisateur'),abrege_du_champ('utilisateur'),
            typologie(chx),
            genre(18),
            espece_du_champ(INTEGER),est_en_session(1),nom_en_session('chi_id_utilisateur')
            )
            */
             chx_utilisateur_tache INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_texte_tache'),
            nom_bref_du_champ('texte'),abrege_du_champ('texte'),
            typologie(),
            genre(11),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
            )
            */
             chp_texte_tache TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_priorite_tache'),
            nom_bref_du_champ('priorite'),abrege_du_champ('priorite'),
            typologie(),
            genre(99),
            espece_du_champ(INTEGER)
            )
            */
             chp_priorite_tache INTEGER(2) NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_tache'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtm_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_tache'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtc_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_tache'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(che),
            genre(15),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
            )
            */
             che__nur_tache INTEGER NOT NULL DEFAULT  0
    );

CREATE TABLE tbl_autorisations(
/*
 meta(nom_de_la_table('tbl_autorisations'),
   table('tbl_autorisations'),
   genre_meta(table_de_base),permet_la_gestion_de('autorisation'),
   distinction_pour_liste('liste des autorisations'),
   distinction_pour_isad('d\'une autorisation'),
   transform_table_sur_svg(translate(659.5,18.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_autorisation'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_autorisation INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_autorisation'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(chp),
            genre(17),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             chp_nom_autorisation VARCHAR(255) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_acces_autorisation'),
            nom_bref_du_champ('acces'),abrege_du_champ('acces'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
            )
            */
             chx_acces_autorisation INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) 
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_source_autorisation'),
            nom_bref_du_champ('source'),abrege_du_champ('source'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER),
            refe_enfant_droite(1),
            refe_parent_gauche(1)
            )
            */
             chx_source_autorisation INTEGER NOT NULL REFERENCES tbl_sources(chi_id_source) 
    );

CREATE TABLE tbl_requetes(
/*
 meta(nom_de_la_table('tbl_requetes'),
   table('tbl_requetes'),
   genre_meta(table_de_base),permet_la_gestion_de('requete'),
   distinction_pour_liste('liste des requetes'),
   distinction_pour_isad('d\'une requete'),
   transform_table_sur_svg(translate(1154.5,830.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_requete'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_requete INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_requete'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
            )
            */
             cht_commentaire_requete TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_type_requete'),
            nom_bref_du_champ('type'),abrege_du_champ('type de requête'),
            typologie(chp),
            genre(103),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
            )
            */
             chp_type_requete VARCHAR(64) NOT NULL DEFAULT  'liste_ecran'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_requete'),
            nom_bref_du_champ('rev'),abrege_du_champ('format rev de la requête'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_rev_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_sql_requete'),
            nom_bref_du_champ('sql'),abrege_du_champ('format sql de la requête'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_sql_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_php_requete'),
            nom_bref_du_champ('php'),abrege_du_champ('format php de la requête'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_php_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_matrice_requete'),
            nom_bref_du_champ('matrice'),abrege_du_champ('format matriciel de la requête'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_matrice_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_requete'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(che),
            genre(15),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
            )
            */
             che__nur_requete INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_requete'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtm_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_requete'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chd),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtc_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_souche_requete'),
            nom_bref_du_champ('est souche'),abrege_du_champ('requête souche ?'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_souche_requete INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_table_reference_requete'),
            nom_bref_du_champ('table de reference'),abrege_du_champ('table de référence de la requête'),
            typologie(chp),
            genre(12),
            espece_du_champ(VARCHAR),
            longueur_du_champ(128)
            )
            */
             chp_table_reference_requete VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_js_requete'),
            espece_du_champ(TEXT),
            typologie(cht),
            genre(97),
            nom_bref_du_champ('js'),abrege_du_champ('requête au format js'),
            masquer_champ_dans_svg(0),est_en_session(0),nom_en_session(''),
            refe_enfant_droite(0),
            refe_parent_gauche(0),
            est_libelle_lien(0)
            )
            */
             cht_js_requete TEXT DEFAULT  NULL
    );

CREATE TABLE tbl_genres(
/*
 meta(nom_de_la_table('tbl_genres'),
   table('tbl_genres'),
   genre_meta(table_de_base),permet_la_gestion_de('genre'),
   distinction_pour_liste('liste des genres'),
   distinction_pour_isad('d\'un genre'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),
   transform_table_sur_svg(translate(28.5,529.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_genre'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_genre INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_genre'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             chp_nom_genre VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_ordre_genre'),
            nom_bref_du_champ('ordre'),abrege_du_champ('ordre'),
            typologie(che),
            genre(10),
            espece_du_champ(INTEGER)
            )
            */
             che_ordre_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_prefixe_genre'),
            nom_bref_du_champ('préfixe'),abrege_du_champ('prefixe'),
            typologie(chp),
            genre(102),
            espece_du_champ(VARCHAR),
            longueur_du_champ(3)
            )
            */
             chp_prefixe_genre VARCHAR(3) NOT NULL DEFAULT  'cht'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_espece_genre'),
            nom_bref_du_champ('espèce'),abrege_du_champ('espece'),
            typologie(chp),
            genre(101),
            espece_du_champ(VARCHAR),
            longueur_du_champ(32)
            )
            */
             chp_espece_genre VARCHAR(64) NOT NULL DEFAULT  'TEXT'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_longueur_genre'),
            nom_bref_du_champ('longueur'),abrege_du_champ('longueur'),
            typologie(che),
            genre(7),
            espece_du_champ(INTEGER)
            )
            */
             che_longueur_genre INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_primaire_genre'),
            nom_bref_du_champ('est primaire'),abrege_du_champ('est primaire'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_primaire_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_incrément_genre'),
            nom_bref_du_champ('est incrément'),abrege_du_champ('est incrément'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_incrément_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_obligatoire_genre'),
            nom_bref_du_champ('est obligatoire'),abrege_du_champ('est obligatoire'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_obligatoire_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_a_init_genre'),
            nom_bref_du_champ('a init'),abrege_du_champ('a init'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_a_init_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_init_est_mot_genre'),
            nom_bref_du_champ('init est mot'),abrege_du_champ('init est mot'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_init_est_mot_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_valeur_init_genre'),
            nom_bref_du_champ('valeur init'),abrege_du_champ('valeur init'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_valeur_init_genre TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_parmis_genre'),
            nom_bref_du_champ('est parmis'),abrege_du_champ('est parmis'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_parmis_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_parmis_genre'),
            nom_bref_du_champ('parmis'),abrege_du_champ('parmis'),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
            )
            */
             cht_parmis_genre TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_fonctions_genre'),
            nom_bref_du_champ('fonctions'),abrege_du_champ('fonctions'),
            typologie(cht),
            genre(107),
            espece_du_champ(TEXT)
            )
            */
             cht_fonctions_genre TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_nur_genre'),
            nom_bref_du_champ('est nur'),abrege_du_champ('est nur'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_nur_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_tsm_genre'),
            nom_bref_du_champ('est tsm'),abrege_du_champ('est tsm'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_tsm_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_tsc_genre'),
            nom_bref_du_champ('est tsc'),abrege_du_champ('est tsc'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_tsc_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_genre'),
            nom_bref_du_champ('dtc'),abrege_du_champ(' dtc'),
            typologie(chd),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtc_genre VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_genre'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
            )
            */
             chd__dtm_genre VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_genre'),
            nom_bref_du_champ('nur'),abrege_du_champ(' nur'),
            typologie(che),
            genre(15),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
            )
            */
             che__nur_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_session_genre'),
            nom_bref_du_champ('est utilisateur'),abrege_du_champ('est session'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_session_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_en_session_genre'),
            nom_bref_du_champ('nom en session'),abrege_du_champ('nom en session'),
            typologie(chp),
            genre(12),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
            )
            */
             chp_nom_en_session_genre VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_positif_genre'),
            nom_bref_du_champ('est positif'),abrege_du_champ('est positif'),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
            )
            */
             che_est_positif_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_particularités_genre'),
            nom_bref_du_champ('particularités'),abrege_du_champ('particularités'),
            typologie(cht),
            genre(98),
            espece_du_champ(TEXT)
            )
            */
             cht_particularités_genre TEXT DEFAULT  NULL
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
chp_nom_dossier,
chx_parent_dossier,
che_contient_genere_dossier,
che__nur_dossier,
chd__dtm_dossier,
chd__dtc_dossier,
che_pour_les_js_dossier) VALUES
('1','','1','0','2000-01-01 00:00:00','2000-01-01 00:00:00','0','0'),
('2','__serveur','1','0','2000-01-01 00:00:00','2000-01-01 00:00:00','0','0'),
('16','__bdd_sqlite','2','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('17','__sqls','2','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('18','base_de_test_sur_rev_1','16','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('19','__j_20251222_000001_','1','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1'),
('20','bibliotheques_externes','19','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_groupes
  ===============================
*/

INSERT INTO tbl_groupes (chi_id_groupe,
chp_nom_groupe,
chx_parent_groupe) VALUES
('1','dev','1'),
('2','admin','2');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_metiers
  ===============================
*/

INSERT INTO tbl_metiers (chi_id_metier,
chp_nom_metier,
chx_parent_metier) VALUES
('1','dev','1'),
('2','admin','1');


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
('1','dev','1','1','{"le_html_ul_li_du_menu":"<li data-chi_id_source=\"403\" data-chp_nom_source=\"c_taches1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"23\" data-cht_initialisation_menu=\"T0_chp_priorite_tache2(99)\" data-chp_titre_menu=\"Liste des t\u00e2ches\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">t\u00e2ches<\/li><li data-chi_id_source=\"402\" data-chp_nom_source=\"c_projets1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"24\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des projets\" data-cht_condition_php_menu=\"\" data-cht_condition_menu=\"\">projets<\/li><li data-chi_id_source=\"401\" data-chp_nom_source=\"c_dossiers1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"9\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des dossiers et des fichiers\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">dossiers<\/li><li data-chi_id_source=\"439\" data-chp_nom_source=\"c_sources1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des sources des programmes\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">sources<\/li><li data-chi_id_source=\"420\" data-chp_nom_source=\"c_genres1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"22\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des types de bonn\u00e9es dans la bdd\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">genres<\/li><li data-chi_id_source=\"425\" data-chp_nom_source=\"c_bdds1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des bases\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">bases<\/li><li data-chi_id_source=\"430\" data-chp_nom_source=\"c_requetes1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des requ\u00eates sur les bases\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">requ\u00eates<\/li><li data-chi_id_source=\"472\" data-chp_nom_source=\"c_revs1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"28\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des revs\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">revs<\/li><li data-liste_des_menus=\"1\">autres<ul><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"428\" data-chp_nom_source=\"c_groupes1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"14\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des groupes\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">groupes<\/li><li data-chi_id_source=\"429\" data-chp_nom_source=\"c_metiers1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"15\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des m\u00e9tiers\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">m\u00e9tiers<\/li><li data-chi_id_source=\"435\" data-chp_nom_source=\"c_acces1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"25\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des acc\u00e8s\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\net(appelf(nomf(isset),p(tableau(nomt($_SESSION[_CA_])p(''chi_id_projet'')))),sup(tableau(nomt($_SESSION[_CA_])p(''chi_id_projet'')),0)))\">acc\u00e8s<\/li><li data-chi_id_source=\"436\" data-chp_nom_source=\"c_autorisations1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"18\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des autorisations\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">autorisations<\/li><li data-chi_id_source=\"440\" data-chp_nom_source=\"c_utilisateurs1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"17\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des utilisateurs\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] === 1;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      egalstricte(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),1)\n   )\n)\">utilisateurs<\/li><li data-chi_id_source=\"437\" data-chp_nom_source=\"c_menus1.js\" data-chp_methode_menu=\"liste_du_menu0\" data-chi_id_menu=\"19\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"liste des menus\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\n   )\n)\">menus<\/li><\/ul><\/li><li data-liste_des_menus=\"1\">outils<ul><li data-liste_des_menus=\"1\">g\u00e9n\u00e9rations<ul><li data-chi_id_source=\"448\" data-chp_nom_source=\"ecran_generer_programmes.js\" data-chp_methode_menu=\"page_generer_le_programme1\" data-chi_id_menu=\"26\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"g\u00e9n\u00e9rer des programmes\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0 &amp;&amp; isset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0),\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">g\u00e9n\u00e9rer<\/li><li data-chi_id_source=\"487\" data-chp_nom_source=\"ecran_generer_souches.js\" data-chp_methode_menu=\"page_generer_les_souches1\" data-chi_id_menu=\"30\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"g\u00e9n\u00e9rer des programmes\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_projet'']) &amp;&amp; $_SESSION[_CA_][''chi_id_projet''] &gt; 0 &amp;&amp; isset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0),\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">souches<\/li><li data-chi_id_source=\"422\" data-chp_nom_source=\"ecran_source_vers_programme.js\" data-chp_methode_menu=\"point_d_entree\" data-chi_id_menu=\"27\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"source vers programme\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">source<\/li><\/ul><\/li><li data-liste_des_menus=\"1\">convertions<ul><li data-chi_id_source=\"406\" data-chp_nom_source=\"ecran_rev_vers_matrice1.js\" data-chp_methode_menu=\"ecran_matrice\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"convertion de rev vers matrice\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">matrice<\/li><li data-chi_id_source=\"404\" data-chp_nom_source=\"ecran_rev_vers_html1.js\" data-chp_methode_menu=\"ecran_rev_html\" data-chi_id_menu=\"21\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"html\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">html<\/li><li data-chi_id_source=\"405\" data-chp_nom_source=\"ecran_rev_vers_js1.js\" data-chp_methode_menu=\"ecran_rev_js\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"convertion de javascript \" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">js<\/li><li data-chi_id_source=\"407\" data-chp_nom_source=\"ecran_rev_vers_php1.js\" data-chp_methode_menu=\"ecran_rev_php\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"convertion de php\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">php<\/li><li data-chi_id_source=\"442\" data-chp_nom_source=\"ecran_rev_vers_sql1.js\" data-chp_methode_menu=\"ecran_rev_sql\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"convertion de sql\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">sql<\/li><li data-chi_id_source=\"441\" data-chp_nom_source=\"ecran_rev_vers_css1.js\" data-chp_methode_menu=\"ecran_rev_css\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"convertion de css\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">css<\/li><li data-chi_id_source=\"443\" data-chp_nom_source=\"ecran_rev_vers_txt1.js\" data-chp_methode_menu=\"ecran_rev_txt\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"convertion de textes\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\">txt<\/li><\/ul><\/li><\/ul><\/li><li data-chi_id_source=\"466\" data-chp_nom_source=\"ecran_coordonnees1.js\" data-chp_methode_menu=\"ecran_coordonnees1\" data-chi_id_menu=\"20\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"mon profile\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"><\/circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"><\/path><circle cx=\"-10\" cy=\"-15\" r=\"5\"><\/circle><circle cx=\"10\" cy=\"-15\" r=\"5\"><\/circle><path d=\" M -10 0 C -15 10 15 10 10 0\"><\/path><path d=\" M 0 -10 V 0\"><\/path><path d=\" M -15 -15 H -30\"><\/path><path d=\" M 15 -15 H 30\"><\/path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"><\/path><\/g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"><\/path><\/svg><\/li><\/ul><\/li>","le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"t\u00e2ches\",\"attributs\":{\"data-chi_id_source\":\"403\",\"data-chp_nom_source\":\"c_taches1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"23\",\"data-cht_initialisation_menu\":\"T0_chp_priorite_tache2(99)\",\"data-chp_titre_menu\":\"Liste des t\u00e2ches\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"projets\",\"attributs\":{\"data-chi_id_source\":\"402\",\"data-chp_nom_source\":\"c_projets1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"24\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des projets\",\"data-cht_condition_php_menu\":\"\",\"data-cht_condition_menu\":\"\"}},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"dossiers\",\"attributs\":{\"data-chi_id_source\":\"401\",\"data-chp_nom_source\":\"c_dossiers1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"9\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des dossiers et des fichiers\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"439\",\"data-chp_nom_source\":\"c_sources1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des sources des programmes\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":5,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"genres\",\"attributs\":{\"data-chi_id_source\":\"420\",\"data-chp_nom_source\":\"c_genres1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"22\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des types de bonn\u00e9es dans la bdd\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":6,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"bases\",\"attributs\":{\"data-chi_id_source\":\"425\",\"data-chp_nom_source\":\"c_bdds1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des bases\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":7,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"requ\u00eates\",\"attributs\":{\"data-chi_id_source\":\"430\",\"data-chp_nom_source\":\"c_requetes1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des requ\u00eates sur les bases\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":8,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"revs\",\"attributs\":{\"data-chi_id_source\":\"472\",\"data-chp_nom_source\":\"c_revs1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"28\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des revs\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":10,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":3,\"contenu\":\"autres\",\"attributs\":{\"data-liste_des_menus\":\"1\"}},{\"id_interne\":11,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":6,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\"}},{\"id_interne\":12,\"id_interne_parent\":11,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"428\",\"data-chp_nom_source\":\"c_groupes1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"14\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des groupes\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":13,\"id_interne_parent\":11,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"m\u00e9tiers\",\"attributs\":{\"data-chi_id_source\":\"429\",\"data-chp_nom_source\":\"c_metiers1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"15\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des m\u00e9tiers\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":14,\"id_interne_parent\":11,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"acc\u00e8s\",\"attributs\":{\"data-chi_id_source\":\"435\",\"data-chp_nom_source\":\"c_acces1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"25\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des acc\u00e8s\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\net(appelf(nomf(isset),p(tableau(nomt($_SESSION[_CA_])p(''chi_id_projet'')))),sup(tableau(nomt($_SESSION[_CA_])p(''chi_id_projet'')),0)))\"}},{\"id_interne\":15,\"id_interne_parent\":11,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"436\",\"data-chp_nom_source\":\"c_autorisations1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"18\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des autorisations\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":16,\"id_interne_parent\":11,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"440\",\"data-chp_nom_source\":\"c_utilisateurs1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"17\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des utilisateurs\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] === 1;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      egalstricte(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),1)\\n   )\\n)\"}},{\"id_interne\":17,\"id_interne_parent\":11,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"437\",\"data-chp_nom_source\":\"c_menus1.js\",\"data-chp_methode_menu\":\"liste_du_menu0\",\"data-chi_id_menu\":\"19\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"liste des menus\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)\\n   )\\n)\"}},{\"id_interne\":18,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":2,\"contenu\":\"outils\",\"attributs\":{\"data-liste_des_menus\":\"1\"}},{\"id_interne\":9,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http:\/\/www.w3.org\/2000\/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"><\/circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"><\/path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"><\/circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"><\/circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"><\/path><path d=\\\" M 0 -10 V 0\\\"><\/path><path d=\\\" M -15 -15 H -30\\\"><\/path><path d=\\\" M 15 -15 H 30\\\"><\/path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"><\/path><\/g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"><\/path><\/svg>\",\"attributs\":{\"data-chi_id_source\":\"466\",\"data-chp_nom_source\":\"ecran_coordonnees1.js\",\"data-chp_methode_menu\":\"ecran_coordonnees1\",\"data-chi_id_menu\":\"20\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"mon profile\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":19,\"id_interne_parent\":18,\"replie\":0,\"contient_des_enfants\":3,\"contenu\":\"g\u00e9n\u00e9rations\",\"attributs\":{\"data-liste_des_menus\":\"1\"}},{\"id_interne\":20,\"id_interne_parent\":19,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"g\u00e9n\u00e9rer\",\"attributs\":{\"data-chi_id_source\":\"448\",\"data-chp_nom_source\":\"ecran_generer_programmes.js\",\"data-chp_methode_menu\":\"page_generer_le_programme1\",\"data-chi_id_menu\":\"26\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"g\u00e9n\u00e9rer des programmes\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0 && isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0),\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":21,\"id_interne_parent\":19,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"souches\",\"attributs\":{\"data-chi_id_source\":\"487\",\"data-chp_nom_source\":\"ecran_generer_souches.js\",\"data-chp_methode_menu\":\"page_generer_les_souches1\",\"data-chi_id_menu\":\"30\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"g\u00e9n\u00e9rer des programmes\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0 && isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0),\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":22,\"id_interne_parent\":19,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"source\",\"attributs\":{\"data-chi_id_source\":\"422\",\"data-chp_nom_source\":\"ecran_source_vers_programme.js\",\"data-chp_methode_menu\":\"point_d_entree\",\"data-chi_id_menu\":\"27\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"source vers programme\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":23,\"id_interne_parent\":18,\"replie\":0,\"contient_des_enfants\":7,\"contenu\":\"convertions\",\"attributs\":{\"data-liste_des_menus\":\"1\"}},{\"id_interne\":24,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"matrice\",\"attributs\":{\"data-chi_id_source\":\"406\",\"data-chp_nom_source\":\"ecran_rev_vers_matrice1.js\",\"data-chp_methode_menu\":\"ecran_matrice\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"convertion de rev vers matrice\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":25,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"html\",\"attributs\":{\"data-chi_id_source\":\"404\",\"data-chp_nom_source\":\"ecran_rev_vers_html1.js\",\"data-chp_methode_menu\":\"ecran_rev_html\",\"data-chi_id_menu\":\"21\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"html\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":26,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"js\",\"attributs\":{\"data-chi_id_source\":\"405\",\"data-chp_nom_source\":\"ecran_rev_vers_js1.js\",\"data-chp_methode_menu\":\"ecran_rev_js\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"convertion de javascript \",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":27,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"php\",\"attributs\":{\"data-chi_id_source\":\"407\",\"data-chp_nom_source\":\"ecran_rev_vers_php1.js\",\"data-chp_methode_menu\":\"ecran_rev_php\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"convertion de php\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":28,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sql\",\"attributs\":{\"data-chi_id_source\":\"442\",\"data-chp_nom_source\":\"ecran_rev_vers_sql1.js\",\"data-chp_methode_menu\":\"ecran_rev_sql\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"convertion de sql\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":29,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"css\",\"attributs\":{\"data-chi_id_source\":\"441\",\"data-chp_nom_source\":\"ecran_rev_vers_css1.js\",\"data-chp_methode_menu\":\"ecran_rev_css\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"convertion de css\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}},{\"id_interne\":30,\"id_interne_parent\":23,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"txt\",\"attributs\":{\"data-chi_id_source\":\"443\",\"data-chp_nom_source\":\"ecran_rev_vers_txt1.js\",\"data-chp_methode_menu\":\"ecran_rev_txt\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"convertion de textes\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}}]"}'),
('2','admin','2','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http:\/\/www.w3.org\/2000\/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"30\\\"><\/circle><path d=\\\" M -40 45 C -30 20 30 20 40 45\\\"><\/path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"><\/circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"><\/circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"><\/path><path d=\\\" M 0 -10 V 0\\\"><\/path><path d=\\\" M -15 -15 H -30\\\"><\/path><path d=\\\" M 15 -15 H 30\\\"><\/path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"><\/path><\/g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:1;\\\"><\/path><\/svg>\",\"attributs\":{\"data-chi_id_source\":\"466\",\"data-chp_nom_source\":\"ecran_coordonnees1.js\",\"data-chp_methode_menu\":\"ecran_coordonnees1\",\"data-chi_id_menu\":\"29\",\"data-cht_initialisation_menu\":\"\",\"data-chp_titre_menu\":\"mon profile\",\"data-cht_condition_php_menu\":\"<?php\\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;\",\"data-cht_condition_menu\":\"php(\\n   et(\\n      appelf(\\n         nomf(isset),\\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\\n      ),\\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\\n   )\\n)\"}}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"466\" data-chp_nom_source=\"ecran_coordonnees1.js\" data-chp_methode_menu=\"ecran_coordonnees1\" data-chi_id_menu=\"29\" data-cht_initialisation_menu=\"\" data-chp_titre_menu=\"mon profile\" data-cht_condition_php_menu=\"&lt;?php\nisset($_SESSION[_CA_][''chi_id_utilisateur'']) &amp;&amp; $_SESSION[_CA_][''chi_id_utilisateur''] &gt; 0;\" data-cht_condition_menu=\"php(\n   et(\n      appelf(\n         nomf(isset),\n         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))\n      ),\n      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)\n   )\n)\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"30\"><\/circle><path d=\" M -40 45 C -30 20 30 20 40 45\"><\/path><circle cx=\"-10\" cy=\"-15\" r=\"5\"><\/circle><circle cx=\"10\" cy=\"-15\" r=\"5\"><\/circle><path d=\" M -10 0 C -15 10 15 10 10 0\"><\/path><path d=\" M 0 -10 V 0\"><\/path><path d=\" M -15 -15 H -30\"><\/path><path d=\" M 15 -15 H 30\"><\/path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"><\/path><\/g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:1;\"><\/path><\/svg><\/li>    "}');


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
chd__dtc_projet,
chx_dossier_bdds_projet,
chx_dossier_js_projet) VALUES
('1','environnement principal 1','C''est ce projet qui permet de créer d''autres projets
','17','1','0','2000-01-01 00:00:00','2000-01-01 00:00:00','16','19'),
('2','clone','clone','1','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','1'),
('3','ref 3','','1','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','1');


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
chx_acces_utilisateur,
chd__dtm_utilisateur,
chd__dtc_utilisateur,
che__nur_utilisateur) VALUES
('1','poipoip','$2y$10$e4kIJciV/2Z3QTINAY8blemS17E3NJfcR7M7fjgPT.gbtMZqwjIAm',NULL,'965','1','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('2','admin','$2y$10$iiy3WQzGJwIHynqQFiU8tuQwDZY7WRsl6SHLtRv9pRYtv2BgDQcEW',NULL,'6','2','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_sources
  ===============================
*/

INSERT INTO tbl_sources (chi_id_source,
chp_nom_source,
cht_rev_source,
cht_genere_source,
che_binaire_source,
chx_dossier_id_source,
cht_commentaire_source,
chd__dtm_source,
chd__dtc_source,
che__nur_source,
che_contient_version_source,
che_autorisation_globale_source) VALUES
('1','.htaccess','texte(`<IfModule mod_headers.c>
  Header set X-UA-Compatible "IE=Edge"
  # mod_headers can''t match by content-type, but we don''t want to send this header on *everything*...
  <FilesMatch "\.(js|css|gif|png|jpe?g|pdf|xml|oga|ogg|m4a|ogv|mp4|m4v|webm|svg|svgz|eot|ttf|otf|woff|ico|webp|appcache|manifest|htc|crx|oex|xpi|safariextz|vcf)$" >
    Header unset X-UA-Compatible
  </FilesMatch>
  Header edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure
</IfModule>
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    # mod_headers, y u no match by Content-Type?!
    <FilesMatch "\.(gif|png|jpe?g|svg|svgz|ico|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
<IfModule mod_headers.c>
  <FilesMatch "\.(ttf|ttc|otf|eot|woff|font.css)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>

AddType application/javascript         jsonp
AddType text/javascript                js

AddType application/json               json

AddType audio/ogg                      oga ogg
AddType audio/mp4                      m4a f4a f4b

AddType video/ogg                      ogv
AddType video/mp4                      mp4 m4v f4v f4p
AddType video/webm                     webm
AddType video/x-flv                    flv

AddType     image/svg+xml              svg svgz
AddEncoding gzip                       svgz

AddType application/vnd.ms-fontobject  eot
AddType application/x-font-ttf         ttf ttc
AddType font/opentype                  otf
AddType application/x-font-woff        woff

AddType image/x-icon                        ico
AddType image/webp                          webp
AddType text/cache-manifest                 appcache manifest
AddType text/x-component                    htc
AddType application/xml                     rss atom xml rdf
AddType application/x-chrome-extension      crx
AddType application/x-opera-extension       oex
AddType application/x-xpinstall             xpi
AddType application/octet-stream            safariextz
AddType application/x-web-app-manifest+json webapp
AddType text/x-vcard                        vcf
AddType application/x-shockwave-flash       swf
AddType text/vtt                            vtt

<IfModule mod_deflate.c>

  # Force deflate for mangled headers developer.yahoo.com/blogs/ydn/posts/2010/12/pushing-beyond-gzipping/
  <IfModule mod_setenvif.c>
    <IfModule mod_headers.c>
      SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
      RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
    </IfModule>
  </IfModule>

  # Compress all output labeled with one of the following MIME-types
  <IfModule mod_filter.c>
    AddOutputFilterByType DEFLATE application/atom+xml \
                                  application/javascript \
                                  application/json \
                                  application/rss+xml \
                                  application/vnd.ms-fontobject \
                                  application/x-font-ttf \
                                  application/xhtml+xml \
                                  application/xml \
                                  application/x-web-app-manifest+json \
                                  font/opentype \
                                  image/svg+xml \
                                  image/x-icon \
                                  text/javascript \
                                  text/css \
                                  text/html \
                                  text/plain \
                                  text/x-component \
                                  text/xml 
                                  
  </IfModule>

</IfModule>

<IfModule mod_expires.c>
  ExpiresActive on

# Perhaps better to whitelist expires rules? Perhaps.
  ExpiresDefault                          "access plus 1 month"

# cache.appcache needs re-requests in FF 3.6 (thanks Remy ~Introducing HTML5)
  ExpiresByType text/cache-manifest       "access plus 0 seconds"

# Your document html
  ExpiresByType text/html                 "access plus 0 seconds"

# Data
  ExpiresByType text/xml                  "access plus 0 seconds"
  ExpiresByType application/xml           "access plus 0 seconds"
  ExpiresByType application/json          "access plus 0 seconds"

# Feed
  ExpiresByType application/rss+xml       "access plus 1 hour"
  ExpiresByType application/atom+xml      "access plus 1 hour"

# Favicon (cannot be renamed)
  ExpiresByType image/x-icon              "access plus 1 year"

# Media: images, video, audio
  ExpiresByType image/gif                 "access plus 1 year"
  ExpiresByType image/png                 "access plus 1 year"
  ExpiresByType image/jpeg                "access plus 1 year"
  ExpiresByType video/ogg                 "access plus 1 year"
  ExpiresByType audio/ogg                 "access plus 1 year"
  ExpiresByType video/mp4                 "access plus 1 year"
  ExpiresByType video/webm                "access plus 1 year"

# HTC files  (css3pie)
  ExpiresByType text/x-component          "access plus 1 month"

# Webfonts
  ExpiresByType application/x-font-ttf    "access plus 1 month"
  ExpiresByType font/opentype             "access plus 1 month"
  ExpiresByType application/x-font-woff   "access plus 1 month"
  ExpiresByType image/svg+xml             "access plus 1 year"
  ExpiresByType application/vnd.ms-fontobject "access plus 1 month"

# CSS and JavaScript
  ExpiresByType text/css                  "access plus 1 year"
  ExpiresByType application/javascript    "access plus 1 year"
  ExpiresByType text/javascript           "access plus 1 year"
  
  ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"  

</IfModule>

<IfModule mod_headers.c>
  Header unset ETag
</IfModule>

# -----------------------------------------   source dareboost debut 
# 2018-03-14 ajoute a la fin base-uri 
# 2024-06-10 ajouté data: pour img-src car le svg en ligne ne s''affichait pas
<IfModule mod_headers.c>
 Header set Content-Security-Policy "default-src ''self'' ; base-uri ''self''; style-src ''self'' ''unsafe-inline''; object-src ''none''; script-src ''self'' ''unsafe-inline'' ; frame-src ''self'' ; img-src ''self'' data: ''unsafe-inline'';"
</IfModule>  

# si on active la ligne suivante, la publicite tizen ne fonctionne plus
# 2018-03-14 remis le car je me fous de tizen qui ne rapporte aucune pub
<IfModule mod_headers.c>
 Header always set X-FRAME-OPTIONS "SAMEORIGIN"
</IfModule>

<IfModule mod_headers.c>
 Header always set X-XSS-Protection "1; mode=block"
</IfModule>

<IfModule mod_headers.c>
 Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains"
</IfModule>

<IfModule mod_headers.c>
 Header always set X-Content-Type-Options "nosniff"
</IfModule>

# -----------------------------------------   source dareboost fin 

<IfDefine !sur_localhost>
  #===================================================================
  #====================== en production debut ========================
  #===================================================================
  ErrorDocument 404 /site003/rev_1/page404.html
  #===================================================================
  #====================== en production fin ==========================
  #===================================================================
</IfDefine>


<IfDefine sur_localhost>
  #===================================================================
  #====================== en localhost debut =========================
  #===================================================================
  ErrorDocument 404 /frev/divers/site003/rev_1/page404.html
  #===================================================================
  #====================== en localhost fin ===========================
  #===================================================================
</IfDefine>



# Use UTF-8 encoding for anything served text/plain or text/html
AddDefaultCharset utf-8

# Force UTF-8 for a number of file formats
AddCharset utf-8 .atom .css .js .json .rss .vtt .xml

<IfModule mod_autoindex.c>
  Options -Indexes
</IfModule>

# Block access to backup and source files. These files may be left by some
# text/html editors and pose a great security danger, when anyone can access
<FilesMatch "(\.(bak|config|fla|psd|ini|log|sh|inc|swp|dist|sql|sqlite)|~)$">
# apache 2.2
#  order allow,deny
#  deny from all
#  satisfy All
# apache 2.4 en localhost
  Require all denied
</FilesMatch>

<IfModule php7_module>

  php_value session.cookie_httponly true

</IfModule>


# ############################################################
# ############################################################
# ############################################################
# ############################################################
# ########## pour la prod uniquement #########################
# ############################################################
# ############################################################
# ############################################################
# ############################################################

#<IfModule mod_rewrite.c>
# hugues
#RewriteEngine on
#RewriteCond %{SERVER_PORT} 80
#RewriteRule .* https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
#</IfModule>


`)','<IfModule mod_headers.c>
  Header set X-UA-Compatible "IE=Edge"
  # mod_headers can''t match by content-type, but we don''t want to send this header on *everything*...
  <FilesMatch "\.(js|css|gif|png|jpe?g|pdf|xml|oga|ogg|m4a|ogv|mp4|m4v|webm|svg|svgz|eot|ttf|otf|woff|ico|webp|appcache|manifest|htc|crx|oex|xpi|safariextz|vcf)$" >
    Header unset X-UA-Compatible
  </FilesMatch>
  Header edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure
</IfModule>
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    # mod_headers, y u no match by Content-Type?!
    <FilesMatch "\.(gif|png|jpe?g|svg|svgz|ico|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
<IfModule mod_headers.c>
  <FilesMatch "\.(ttf|ttc|otf|eot|woff|font.css)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>

AddType application/javascript         jsonp
AddType text/javascript                js

AddType application/json               json

AddType audio/ogg                      oga ogg
AddType audio/mp4                      m4a f4a f4b

AddType video/ogg                      ogv
AddType video/mp4                      mp4 m4v f4v f4p
AddType video/webm                     webm
AddType video/x-flv                    flv

AddType     image/svg+xml              svg svgz
AddEncoding gzip                       svgz

AddType application/vnd.ms-fontobject  eot
AddType application/x-font-ttf         ttf ttc
AddType font/opentype                  otf
AddType application/x-font-woff        woff

AddType image/x-icon                        ico
AddType image/webp                          webp
AddType text/cache-manifest                 appcache manifest
AddType text/x-component                    htc
AddType application/xml                     rss atom xml rdf
AddType application/x-chrome-extension      crx
AddType application/x-opera-extension       oex
AddType application/x-xpinstall             xpi
AddType application/octet-stream            safariextz
AddType application/x-web-app-manifest+json webapp
AddType text/x-vcard                        vcf
AddType application/x-shockwave-flash       swf
AddType text/vtt                            vtt

<IfModule mod_deflate.c>

  # Force deflate for mangled headers developer.yahoo.com/blogs/ydn/posts/2010/12/pushing-beyond-gzipping/
  <IfModule mod_setenvif.c>
    <IfModule mod_headers.c>
      SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
      RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
    </IfModule>
  </IfModule>

  # Compress all output labeled with one of the following MIME-types
  <IfModule mod_filter.c>
    AddOutputFilterByType DEFLATE application/atom+xml \
                                  application/javascript \
                                  application/json \
                                  application/rss+xml \
                                  application/vnd.ms-fontobject \
                                  application/x-font-ttf \
                                  application/xhtml+xml \
                                  application/xml \
                                  application/x-web-app-manifest+json \
                                  font/opentype \
                                  image/svg+xml \
                                  image/x-icon \
                                  text/javascript \
                                  text/css \
                                  text/html \
                                  text/plain \
                                  text/x-component \
                                  text/xml 
                                  
  </IfModule>

</IfModule>

<IfModule mod_expires.c>
  ExpiresActive on

# Perhaps better to whitelist expires rules? Perhaps.
  ExpiresDefault                          "access plus 1 month"

# cache.appcache needs re-requests in FF 3.6 (thanks Remy ~Introducing HTML5)
  ExpiresByType text/cache-manifest       "access plus 0 seconds"

# Your document html
  ExpiresByType text/html                 "access plus 0 seconds"

# Data
  ExpiresByType text/xml                  "access plus 0 seconds"
  ExpiresByType application/xml           "access plus 0 seconds"
  ExpiresByType application/json          "access plus 0 seconds"

# Feed
  ExpiresByType application/rss+xml       "access plus 1 hour"
  ExpiresByType application/atom+xml      "access plus 1 hour"

# Favicon (cannot be renamed)
  ExpiresByType image/x-icon              "access plus 1 year"

# Media: images, video, audio
  ExpiresByType image/gif                 "access plus 1 year"
  ExpiresByType image/png                 "access plus 1 year"
  ExpiresByType image/jpeg                "access plus 1 year"
  ExpiresByType video/ogg                 "access plus 1 year"
  ExpiresByType audio/ogg                 "access plus 1 year"
  ExpiresByType video/mp4                 "access plus 1 year"
  ExpiresByType video/webm                "access plus 1 year"

# HTC files  (css3pie)
  ExpiresByType text/x-component          "access plus 1 month"

# Webfonts
  ExpiresByType application/x-font-ttf    "access plus 1 month"
  ExpiresByType font/opentype             "access plus 1 month"
  ExpiresByType application/x-font-woff   "access plus 1 month"
  ExpiresByType image/svg+xml             "access plus 1 year"
  ExpiresByType application/vnd.ms-fontobject "access plus 1 month"

# CSS and JavaScript
  ExpiresByType text/css                  "access plus 1 year"
  ExpiresByType application/javascript    "access plus 1 year"
  ExpiresByType text/javascript           "access plus 1 year"
  
  ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"  

</IfModule>

<IfModule mod_headers.c>
  Header unset ETag
</IfModule>

# -----------------------------------------   source dareboost debut 
# 2018-03-14 ajoute a la fin base-uri 
# 2024-06-10 ajouté data: pour img-src car le svg en ligne ne s''affichait pas
<IfModule mod_headers.c>
 Header set Content-Security-Policy "default-src ''self'' ; base-uri ''self''; style-src ''self'' ''unsafe-inline''; object-src ''none''; script-src ''self'' ''unsafe-inline'' ; frame-src ''self'' ; img-src ''self'' data: ''unsafe-inline'';"
</IfModule>  

# si on active la ligne suivante, la publicite tizen ne fonctionne plus
# 2018-03-14 remis le car je me fous de tizen qui ne rapporte aucune pub
<IfModule mod_headers.c>
 Header always set X-FRAME-OPTIONS "SAMEORIGIN"
</IfModule>

<IfModule mod_headers.c>
 Header always set X-XSS-Protection "1; mode=block"
</IfModule>

<IfModule mod_headers.c>
 Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains"
</IfModule>

<IfModule mod_headers.c>
 Header always set X-Content-Type-Options "nosniff"
</IfModule>

# -----------------------------------------   source dareboost fin 

<IfDefine !sur_localhost>
  #===================================================================
  #====================== en production debut ========================
  #===================================================================
  ErrorDocument 404 /site003/rev_1/page404.html
  #===================================================================
  #====================== en production fin ==========================
  #===================================================================
</IfDefine>


<IfDefine sur_localhost>
  #===================================================================
  #====================== en localhost debut =========================
  #===================================================================
  ErrorDocument 404 /frev/divers/site003/rev_1/page404.html
  #===================================================================
  #====================== en localhost fin ===========================
  #===================================================================
</IfDefine>



# Use UTF-8 encoding for anything served text/plain or text/html
AddDefaultCharset utf-8

# Force UTF-8 for a number of file formats
AddCharset utf-8 .atom .css .js .json .rss .vtt .xml

<IfModule mod_autoindex.c>
  Options -Indexes
</IfModule>

# Block access to backup and source files. These files may be left by some
# text/html editors and pose a great security danger, when anyone can access
<FilesMatch "(\.(bak|config|fla|psd|ini|log|sh|inc|swp|dist|sql|sqlite)|~)$">
# apache 2.2
#  order allow,deny
#  deny from all
#  satisfy All
# apache 2.4 en localhost
  Require all denied
</FilesMatch>

<IfModule php7_module>

  php_value session.cookie_httponly true

</IfModule>


# ############################################################
# ############################################################
# ############################################################
# ############################################################
# ########## pour la prod uniquement #########################
# ############################################################
# ############################################################
# ############################################################
# ############################################################

#<IfModule mod_rewrite.c>
# hugues
#RewriteEngine on
#RewriteCond %{SERVER_PORT} 80
#RewriteRule .* https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
#</IfModule>


','0','1',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000','0','0'),
('3','index.html',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000','1','0'),
('4','page404.html',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','0','2000-01-01 00:00:00.000','0','0'),
('360','__client_app.php',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('383','__interface1.php',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','1'),
('385','c__sql0.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('386','c_dossiers1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('387','c_parse_php1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('388','c_projets1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('389','c_taches1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('393','_connexion1.php',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','1'),
('394','___serveur_app.php',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1','0'),
('395','__interface1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('396','__rev1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('397','__worker1.js',NULL,NULL,'0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1','0'),
('398','_connexion1.js',NULL,NULL,'0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('399','_developpement1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('400','_fonctions1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('401','c_dossiers1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('402','c_projets1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('403','c_taches1.js',NULL,NULL,'0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('404','ecran_rev_vers_html1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('405','ecran_rev_vers_js1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('406','ecran_rev_vers_matrice1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('407','ecran_rev_vers_php1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('408','z_ast_js_vers_rev1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('409','z_ast_phpnikic_vers_rev1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('410','z_ast_phpparseur_vers_rev1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('411','z_ast_sql_parseur_cst_vers_rev1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('412','z_html_vers_rev1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('413','z_rev_vers_html1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('414','z_rev_vers_js1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('415','z_rev_vers_php1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('416','z_rev_vers_sql1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('417','z_svg_bdd1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('420','c_genres1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('422','ecran_source_vers_programme.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('423','tri_arbre1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('424','__fnt1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('425','c_bdds1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('426','c_concevoir_une_requete1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('428','c_groupes1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('429','c_metiers1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('430','c_requetes1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('431','tri_arbre.html',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('435','c_acces1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('436','c_autorisations1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('437','c_menus1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('439','c_sources1.js',NULL,NULL,'0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('440','c_utilisateurs1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('441','ecran_rev_vers_css1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('442','ecran_rev_vers_sql1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('443','ecran_rev_vers_txt1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('444','z_ast_postcss_vers_rev1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('445','z_ast_sqliteparseur_vers_rev1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('446','z_rev_vers_css1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('447','z_rev_vers_txt1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('448','ecran_generer_programmes.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('449','__rev_vers_matrice1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('450','__fonctions1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('451','__fnt1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('452','c_acces1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('453','c_autorisations1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('454','c_bdds1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('455','c_concevoir_une_requete1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('456','c_genres1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('457','c_groupes1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('458','c_menus1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('459','c_metiers1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('460','c_requetes1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('461','c_sources1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('462','c_utilisateurs1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('463','ecran_generer_programmes.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('465','z_svg_bdd1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('466','ecran_coordonnees1.js',NULL,NULL,'0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('467','test_js.js',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('469','test_css.css',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('470','test_sql.sql',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('471','test_rev.rev',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('472','c_revs1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('473','c_revs1.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('474','ecran_coordonnees1.php',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('475','test_html.html',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('476','acorn.js',NULL,'','0','20',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('477','php_parser.js',NULL,'','0','20',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('478','postcss0.js',NULL,'','0','20',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('479','sql_parser_cst.js',NULL,'','0','20',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('480','sqlite_parser.js',NULL,'','0','20',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('481','test_php.php',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('482','menu_arbre.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('483','menu_arbre1.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('484','tri_arbre.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('485','____menus1_acces_1_.php',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('486','___chemins.php',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1','0'),
('487','ecran_generer_souches.js',NULL,'','0','19',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('488','ecran_generer_souches.php',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_bdds
  ===============================
*/

INSERT INTO tbl_bdds (chi_id_basedd,
chp_rev_travail_basedd,
chp_fournisseur_basedd,
chx_dossier_id_basedd,
chp_commentaire_basedd,
chd__dtm_basedd,
chd__dtc_basedd,
che__nur_basedd) VALUES
('1','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''utf8mb4''),
   collate(''utf8mb4_unicode_ci''),
   transform_base_sur_svg(translate(1.5,5.5))
),
créer_table(
   nom_de_la_table(''tbl_revs''),
   meta(
      nom_de_la_table(''tbl_revs''),
      table(''tbl_revs''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''rev''),
      distinction_pour_liste(''liste des revs''),
      distinction_pour_isad(''d\''un rev''),
      transform_table_sur_svg(translate(359.5,569.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
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
            nom_bref_du_champ(''provenance''),
            abrege_du_champ(''provenance''),
            typologie(cho),
            genre(12),
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
            nom_bref_du_champ(''source''),
            abrege_du_champ(''source''),
            typologie(chx),
            genre(7),
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''valeur''),
            abrege_du_champ(''valeur''),
            typologie(cht),
            genre(6),
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
            nom_bref_du_champ(''type''),
            abrege_du_champ(''type''),
            typologie(cho),
            genre(105),
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
            nom_bref_du_champ(''niveau''),
            abrege_du_champ(''niveau''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''quotee''),
            abrege_du_champ(''quotee''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''pos premier''),
            abrege_du_champ(''pos premier''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''pos dernier''),
            abrege_du_champ(''pos dernier''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''parent''),
            abrege_du_champ(''parent''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''nbr enfants''),
            abrege_du_champ(''nbr enfants''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''num enfant''),
            abrege_du_champ(''num enfant''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''profondeur''),
            abrege_du_champ(''profondeur''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''pos ouver parenthese''),
            abrege_du_champ(''pos ouver parenthese''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''enfant suivant''),
            abrege_du_champ(''enfant suivant''),
            typologie(che),
            genre(9),
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
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            typologie(cht),
            genre(6),
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
   champs(''chp_provenance_rev'',''chx_source_rev'',''chi_id_rev''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_dossiers''),
   meta(
      nom_de_la_table(''tbl_dossiers''),
      table(''tbl_dossiers''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''dossier''),
      distinction_pour_liste(''liste des dossiers''),
      distinction_pour_isad(''d\''un dossier''),
      transform_table_sur_svg(translate(721.5,490.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER)
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
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(chp),
            genre(108),
            espece_du_champ(CHARACTER),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_dossier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_dossiers,chi_id_dossier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''1''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_dossier''),
            nom_bref_du_champ(''parent''),
            abrege_du_champ(''parent''),
            typologie(),
            genre(4),
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
            nom_bref_du_champ(''contient genere''),
            abrege_du_champ(''contient genere''),
            typologie(che),
            genre(5),
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
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_pour_les_js_dossier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_pour_les_js_dossier''),
            nom_bref_du_champ(''pour les js''),
            abrege_du_champ(''pour les js''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
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
   champs(''chp_nom_dossier'',''chx_parent_dossier''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_groupes''),
   meta(
      nom_de_la_table(''tbl_groupes''),
      table(''tbl_groupes''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''groupe''),
      distinction_pour_liste(''liste des groupes''),
      distinction_pour_isad(''d\''un groupe''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_table_sur_svg(translate(13.5,51.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_groupe''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(128),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_groupe''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(cht),
            genre(19),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_groupe''),
         espece_du_champ(INTEGER),
         references(tbl_groupes,chi_id_groupe),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_groupe''),
            nom_bref_du_champ(''parent''),
            abrege_du_champ(''parent''),
            typologie(chx),
            genre(8),
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
      permet_la_gestion_de(''metier''),
      distinction_pour_liste(''liste des metiers''),
      distinction_pour_isad(''d\''un metier''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_table_sur_svg(translate(25.5,276.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_metier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(128),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_metier''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(cht),
            genre(19),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_metier''),
         espece_du_champ(INTEGER),
         references(tbl_metiers,chi_id_metier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_metier''),
            nom_bref_du_champ(''parent''),
            abrege_du_champ(''parent''),
            typologie(chx),
            genre(8),
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
      permet_la_gestion_de(''accès''),
      distinction_pour_liste(''liste des accès''),
      distinction_pour_isad(''d\''un accès''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_table_sur_svg(translate(345.5,59.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
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
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
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
            nom_bref_du_champ(''groupe''),
            abrege_du_champ(''groupe''),
            typologie(chx),
            genre(4),
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
            nom_bref_du_champ(''metier''),
            abrege_du_champ(''metier''),
            typologie(chx),
            genre(4),
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
            nom_bref_du_champ(''parametres''),
            abrege_du_champ(''parametres''),
            typologie(cht),
            genre(6),
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
   nom_de_la_table(''tbl_projets''),
   meta(
      nom_de_la_table(''tbl_projets''),
      table(''tbl_projets''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''projet''),
      distinction_pour_liste(''liste des projets''),
      distinction_pour_isad(''d\''un projet''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_table_sur_svg(translate(703.5,218.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER),
            est_en_session(1)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_projet''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_projet''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(),
            genre(11),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_projet''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_projet''),
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            typologie(),
            genre(6),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_requetes_projet''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_dossiers,chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_requetes_projet''),
            nom_bref_du_champ(''dossier requetes''),
            abrege_du_champ(''dossier requetes''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_menus_projet''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_dossiers,chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_menus_projet''),
            nom_bref_du_champ(''dossier menus''),
            abrege_du_champ(''dossier menus''),
            typologie(chx),
            genre(4),
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
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_bdds_projet''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_dossiers,chi_id_dossier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_bdds_projet''),
            nom_bref_du_champ(''dossier bdds''),
            abrege_du_champ(''dossier des bases de données''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_js_projet''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_dossiers,chi_id_dossier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_js_projet''),
            nom_bref_du_champ(''dossier js''),
            abrege_du_champ(''dossier des javascript''),
            typologie(chx),
            genre(4),
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
   nom_de_la_table(''tbl_utilisateurs''),
   meta(
      nom_de_la_table(''tbl_utilisateurs''),
      table(''tbl_utilisateurs''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''utilisateur''),
      distinction_pour_liste(''liste des utilisateurs''),
      distinction_pour_isad(''d\''un utilisateur''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_table_sur_svg(translate(780.5,769.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER),
            est_en_session(1)
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
            nom_bref_du_champ(''nom de connexion''),
            abrege_du_champ(''nom de connexion''),
            typologie(cht),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
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
            nom_bref_du_champ(''mot de passe''),
            abrege_du_champ(''mot de passe''),
            typologie(cht),
            genre(13),
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
            nom_bref_du_champ(''parametres''),
            abrege_du_champ(''parametres''),
            typologie(cht),
            genre(6),
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
            nom_bref_du_champ(''compteur1''),
            abrege_du_champ(''compteur1''),
            typologie(chi),
            genre(10),
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
            nom_bref_du_champ(''acces''),
            abrege_du_champ(''acces''),
            typologie(chx),
            genre(4),
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
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
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
      permet_la_gestion_de(''source''),
      distinction_pour_liste(''liste des sources''),
      distinction_pour_isad(''d\''un source''),
      transform_table_sur_svg(translate(1103.5,320.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(128),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_source''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(),
            genre(19),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
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
            nom_bref_du_champ(''rev''),
            abrege_du_champ(''rev''),
            typologie(),
            genre(98),
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
            nom_bref_du_champ(''genere''),
            abrege_du_champ(''genere''),
            typologie(),
            genre(97),
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
            nom_bref_du_champ(''binaire''),
            abrege_du_champ(''binaire''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_id_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_dossiers,chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_id_source''),
            nom_bref_du_champ(''dossier id''),
            abrege_du_champ(''dossier id''),
            typologie(chx),
            genre(4),
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
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            typologie(),
            genre(6),
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
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chd),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_contient_version_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_contient_version_source''),
            nom_bref_du_champ(''contient version''),
            abrege_du_champ(''contient version''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_autorisation_globale_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_autorisation_globale_source''),
            nom_bref_du_champ(''autorisation globale''),
            abrege_du_champ(''autorisation globale''),
            typologie(che),
            genre(5),
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
      permet_la_gestion_de(''base''),
      distinction_pour_liste(''liste des bases de données''),
      distinction_pour_isad(''d\''une base de donnée''),
      transform_table_sur_svg(translate(1135.5,631.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(),
            genre(2),
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
            nom_bref_du_champ(''rev travail''),
            abrege_du_champ(''rev travail''),
            typologie(),
            genre(98),
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
            nom_bref_du_champ(''fournisseur''),
            abrege_du_champ(''fournisseur''),
            typologie(chi),
            genre(104),
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
            nom_bref_du_champ(''dossier id''),
            abrege_du_champ(''dossier id''),
            typologie(chx),
            genre(8),
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
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            typologie(),
            genre(6),
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
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
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
      permet_la_gestion_de(''menu''),
      distinction_pour_liste(''liste des menus''),
      distinction_pour_isad(''d\''un menu''),
      transform_table_sur_svg(translate(1101.5,13.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_libelle_menu''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_libelle_menu''),
            nom_bref_du_champ(''libelle''),
            abrege_du_champ(''libelle''),
            typologie(cht),
            genre(11),
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
            nom_bref_du_champ(''titre''),
            abrege_du_champ(''titre''),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
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
            nom_bref_du_champ(''autorisation''),
            abrege_du_champ(''autorisation''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
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
            nom_bref_du_champ(''methode''),
            abrege_du_champ(''methode''),
            typologie(chp),
            genre(3),
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
            nom_bref_du_champ(''initialisation''),
            abrege_du_champ(''initialisation''),
            typologie(cht),
            genre(98),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_menu''),
            nom_bref_du_champ(''condition''),
            abrege_du_champ(''condition''),
            typologie(cht),
            genre(98),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_php_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_php_menu''),
            nom_bref_du_champ(''condition php''),
            abrege_du_champ(''condition php''),
            typologie(cht),
            genre(97),
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
      permet_la_gestion_de(''tâche''),
      distinction_pour_liste(''liste des tâches''),
      distinction_pour_isad(''d\''une tâche''),
      transform_table_sur_svg(translate(361.5,329.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(),
            genre(2),
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
            nom_bref_du_champ(''utilisateur''),
            abrege_du_champ(''utilisateur''),
            typologie(chx),
            genre(18),
            espece_du_champ(INTEGER),
            est_en_session(1),
            nom_en_session(''chi_id_utilisateur'')
         )
      ),
      champ(
         nom_du_champ(''chp_texte_tache''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_texte_tache''),
            nom_bref_du_champ(''texte''),
            abrege_du_champ(''texte''),
            typologie(),
            genre(11),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
         )
      ),
      champ(
         nom_du_champ(''chp_priorite_tache''),
         espece_du_champ(INTEGER),
         longueur_du_champ(2),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_priorite_tache''),
            nom_bref_du_champ(''priorite''),
            abrege_du_champ(''priorite''),
            typologie(),
            genre(99),
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
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(che),
            genre(15),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
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
   nom_de_la_table(''tbl_autorisations''),
   meta(
      nom_de_la_table(''tbl_autorisations''),
      table(''tbl_autorisations''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''autorisation''),
      distinction_pour_liste(''liste des autorisations''),
      distinction_pour_isad(''d\''une autorisation''),
      transform_table_sur_svg(translate(659.5,18.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_autorisation''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(255),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_autorisation''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(chp),
            genre(17),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
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
            nom_bref_du_champ(''acces''),
            abrege_du_champ(''acces''),
            typologie(chx),
            genre(4),
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
            nom_bref_du_champ(''source''),
            abrege_du_champ(''source''),
            typologie(chx),
            genre(4),
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
   nom_de_la_table(''tbl_requetes''),
   meta(
      nom_de_la_table(''tbl_requetes''),
      table(''tbl_requetes''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''requete''),
      distinction_pour_liste(''liste des requetes''),
      distinction_pour_isad(''d\''une requete''),
      transform_table_sur_svg(translate(1154.5,830.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
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
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
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
            nom_bref_du_champ(''type''),
            abrege_du_champ(''type de requête''),
            typologie(chp),
            genre(103),
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
            nom_bref_du_champ(''rev''),
            abrege_du_champ(''format rev de la requête''),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_sql_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_sql_requete''),
            nom_bref_du_champ(''sql''),
            abrege_du_champ(''format sql de la requête''),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_php_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_php_requete''),
            nom_bref_du_champ(''php''),
            abrege_du_champ(''format php de la requête''),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_matrice_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_matrice_requete''),
            nom_bref_du_champ(''matrice''),
            abrege_du_champ(''format matriciel de la requête''),
            typologie(cht),
            genre(6),
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
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(che),
            genre(15),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
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
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chd),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_est_souche_requete''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_souche_requete''),
            nom_bref_du_champ(''est souche''),
            abrege_du_champ(''requête souche ?''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_table_reference_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_table_reference_requete''),
            nom_bref_du_champ(''table de reference''),
            abrege_du_champ(''table de référence de la requête''),
            typologie(chp),
            genre(12),
            espece_du_champ(VARCHAR),
            longueur_du_champ(128)
         )
      ),
      champ(
         nom_du_champ(''cht_js_requete''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_js_requete''),
            espece_du_champ(TEXT),
            typologie(cht),
            genre(97),
            nom_bref_du_champ(''js''),
            abrege_du_champ(''requête au format js''),
            masquer_champ_dans_svg(0),
            est_en_session(0),
            nom_en_session(''''),
            refe_enfant_droite(0),
            refe_parent_gauche(0),
            est_libelle_lien(0)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_genres''),
   meta(
      nom_de_la_table(''tbl_genres''),
      table(''tbl_genres''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''genre''),
      distinction_pour_liste(''liste des genres''),
      distinction_pour_isad(''d\''un genre''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_table_sur_svg(translate(28.5,529.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
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
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
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
            nom_bref_du_champ(''ordre''),
            abrege_du_champ(''ordre''),
            typologie(che),
            genre(10),
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
            nom_bref_du_champ(''préfixe''),
            abrege_du_champ(''prefixe''),
            typologie(chp),
            genre(102),
            espece_du_champ(VARCHAR),
            longueur_du_champ(3)
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
            nom_bref_du_champ(''espèce''),
            abrege_du_champ(''espece''),
            typologie(chp),
            genre(101),
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
            nom_bref_du_champ(''longueur''),
            abrege_du_champ(''longueur''),
            typologie(che),
            genre(7),
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
            nom_bref_du_champ(''est primaire''),
            abrege_du_champ(''est primaire''),
            typologie(che),
            genre(5),
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
            nom_bref_du_champ(''est incrément''),
            abrege_du_champ(''est incrément''),
            typologie(che),
            genre(5),
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
            nom_bref_du_champ(''est obligatoire''),
            abrege_du_champ(''est obligatoire''),
            typologie(che),
            genre(5),
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
            nom_bref_du_champ(''a init''),
            abrege_du_champ(''a init''),
            typologie(che),
            genre(5),
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
            nom_bref_du_champ(''init est mot''),
            abrege_du_champ(''init est mot''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_valeur_init_genre''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_valeur_init_genre''),
            nom_bref_du_champ(''valeur init''),
            abrege_du_champ(''valeur init''),
            typologie(cht),
            genre(6),
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
            nom_bref_du_champ(''est parmis''),
            abrege_du_champ(''est parmis''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_parmis_genre''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_parmis_genre''),
            nom_bref_du_champ(''parmis''),
            abrege_du_champ(''parmis''),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
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
            nom_bref_du_champ(''fonctions''),
            abrege_du_champ(''fonctions''),
            typologie(cht),
            genre(107),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che_est_nur_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_nur_genre''),
            nom_bref_du_champ(''est nur''),
            abrege_du_champ(''est nur''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_est_tsm_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_tsm_genre''),
            nom_bref_du_champ(''est tsm''),
            abrege_du_champ(''est tsm''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_est_tsc_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_tsc_genre''),
            nom_bref_du_champ(''est tsc''),
            abrege_du_champ(''est tsc''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_genre''),
            nom_bref_du_champ(''dtc''),
            abrege_du_champ('' dtc''),
            typologie(chd),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_genre''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che__nur_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_genre''),
            nom_bref_du_champ(''nur''),
            abrege_du_champ('' nur''),
            typologie(che),
            genre(15),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_est_session_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_session_genre''),
            nom_bref_du_champ(''est utilisateur''),
            abrege_du_champ(''est session''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_en_session_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_en_session_genre''),
            nom_bref_du_champ(''nom en session''),
            abrege_du_champ(''nom en session''),
            typologie(chp),
            genre(12),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''che_est_positif_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_positif_genre''),
            nom_bref_du_champ(''est positif''),
            abrege_du_champ(''est positif''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_particularités_genre''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_particularités_genre''),
            nom_bref_du_champ(''particularités''),
            abrege_du_champ(''particularités''),
            typologie(cht),
            genre(98),
            espece_du_champ(TEXT)
         )
      )
   )
)','sqlite','16',NULL,'2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('2','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''''),
   collate(''''),
   transform_base_sur_svg(translate(0.5,2.5))
),
créer_table(
   nom_de_la_table(''tbl_zzzs''),
   meta(
      nom_de_la_table(''tbl_zzzs''),
      table(''tbl_zzzs''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''''),
      distinction_pour_liste(''liste des zzzs''),
      distinction_pour_isad(''d\''un zzz''),
      transform_table_sur_svg(translate(13.5,25.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
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
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(chp),
            genre(3),
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
            nom_bref_du_champ(''moi''),
            abrege_du_champ(''moi''),
            typologie(chx),
            genre(8),
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
      permet_la_gestion_de(''''),
      distinction_pour_liste(''liste des yyys''),
      distinction_pour_isad(''d\''un yyy''),
      transform_table_sur_svg(translate(310.5,217.5))
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
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
            nom_bref_du_champ(''toto''),
            abrege_du_champ(''toto''),
            typologie(chi),
            genre(7),
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
            nom_bref_du_champ(''id zzz''),
            abrege_du_champ(''id zzz''),
            typologie(chx),
            genre(4),
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
),
créer_table(
   nom_de_la_table(''tbl_zzz3s''),
   meta(
      nom_de_la_table(''tbl_zzz3s''),
      table(''tbl_zzz3s''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''''),
      distinction_pour_liste(''liste des zzz2s''),
      distinction_pour_isad(''d\''un zzz22222''),
      transform_table_sur_svg(translate(311.5,45.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id1_z2''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id1_z2''),
            nom_bref_du_champ(''id1''),
            abrege_du_champ(''id1''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_xxxx_zzz2''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(255),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_xxxx_zzz2''),
            nom_bref_du_champ(''xxxx''),
            abrege_du_champ(''xxxx''),
            typologie(chp),
            genre(17),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chx_xxxx_zzz2''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_zzzs,chi_id_zzz),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_xxxx_zzz2''),
            nom_bref_du_champ(''xxxx''),
            abrege_du_champ(''xxxx''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_zzz3s''),
   nom_de_l_index(''idx_tttt''),
   meta(nom_de_l_index(idx_t),genre_meta(index_de_table),message(''tagada'')),
   champs(''cht_xxxx_zzz2'',''chx_xxxx_zzz2''),
   unique()
)','sqlite','18',NULL,'2025-10-06 11:42:40.187','2025-10-06 11:42:40.187','0');


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
cht_condition_menu,
cht_condition_php_menu) VALUES
('2','matrice','convertion de rev vers matrice','37','ecran_matrice',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('3','js','convertion de javascript ','38','ecran_rev_js',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('4','php','convertion de php','40','ecran_rev_php',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('5','sql','convertion de sql','41','ecran_rev_sql',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('6','css','convertion de css','42','ecran_rev_css',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('7','txt','convertion de textes','44','ecran_rev_txt',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('9','dossiers','liste des dossiers et des fichiers','25','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('10','sources','liste des sources des programmes','27','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('11','bases','liste des bases','29','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('12','requêtes','liste des requêtes sur les bases','30','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('14','groupes','liste des groupes','31','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('15','métiers','liste des métiers','32','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('17','utilisateurs','liste des utilisateurs','35','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      egalstricte(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),1)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] === 1;'),
('18','autorisations','liste des autorisations','26','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('19','menus','liste des menus','34','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('20','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg>','mon profile','46','ecran_coordonnees1',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('21','html','html','39','ecran_rev_html',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('22','genres','liste des types de bonnées dans la bdd','28','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('23','tâches','Liste des tâches','23','liste_du_menu0','T0_chp_priorite_tache2(99)','php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('24','projets','liste des projets','24','liste_du_menu0',NULL,NULL,NULL),
('25','accès','liste des accès','33','liste_du_menu0',NULL,'php(
et(appelf(nomf(isset),p(tableau(nomt($_SESSION[_CA_])p(''chi_id_projet'')))),sup(tableau(nomt($_SESSION[_CA_])p(''chi_id_projet'')),0)))','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('26','générer','générer des programmes','36','page_generer_le_programme1',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0),
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0 && isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('27','source','source vers programme','45','point_d_entree',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('28','revs','liste des revs','47','liste_du_menu0',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0;'),
('29','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg>','mon profile','49','ecran_coordonnees1',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;'),
('30','souches','générer des programmes','51','page_generer_les_souches1',NULL,'php(
   et(
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_projet'')),0),
      appelf(
         nomf(isset),
         p(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')))
      ),
      sup(tableau(nomt($_SESSION[_CA_]),p(''chi_id_utilisateur'')),0)
   )
)','<?php
isset($_SESSION[_CA_][''chi_id_projet'']) && $_SESSION[_CA_][''chi_id_projet''] > 0 && isset($_SESSION[_CA_][''chi_id_utilisateur'']) && $_SESSION[_CA_][''chi_id_utilisateur''] > 0;');


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
che__nur_tache) VALUES
('1','1','capturer les erreurs php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('2','1','traiter le cookie initial quand il est incomplet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('3','1','mettre un # dans l''url pour pouvoir charger la page initiale','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('4','1','cookies.php en objet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('5','1','données bidon en cookie','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('6','1','404','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('7','1','worker','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('8','1','timer / indicateur socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('9','1','id en vv','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('10','1','fichiers et classes en c_','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('11','1','socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('12','1','limiter le nombre de messages sur l''interface','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('13','1','ne pas afficher le premier message ws ko','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('14','1','maj champ deverminage nouveau','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('15','1','recharger la page paramètres','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('16','1','déverminage en cookie','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('17','1','ctrl F5 après avoir cliqué sur un #','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('18','1','désactiver les boutons quand click','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('19','1','changer mes coordonnées','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('20','1','renommer les variables __x_statut ....','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('21','1','bdd todo','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('22','1','mettre le niveau de déverminage dans le php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('23','1','dump de la base en local','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('24','1','essayer de modifier dynamiquement le css','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('25','1','synchroniser session php / webSochet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('26','1','travaux en batch','13','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('27','1','gérer les versions js css etc','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('28','1','profils de css','99','2025-11-07 11:00:18.094','2000-01-01 00:00:00','0'),
('29','1','interface : astuces','14','2025-08-15 14:32:17.544','2000-01-01 00:00:00','1'),
('30','1','CREATE UNIQUE INDEX texte_unique ON tbl_taches(chp_texte_tache);','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('31','1','sauvegarder la position dans la liste','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('33','1','sur mobile, ne pas faire de focus sur le premier champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('34','1','pas de webSocket sur ks.app','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('35','1','détecter mobile ( touch )','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('36','1','highlight des menus','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('37','1','lors de la première connexion, initialiser les tailles des css en fonction de la taille de l''écran','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('38','1','sur ipad, supprimer les double click pour agrandir

if( ecran_tactile===true && genre_safari===true && genre_crios === false)

//https://stackoverflow.com/a/42162450/3717718','99','2025-10-22 13:22:11.821','2000-01-01 00:00:00','0'),
('40','1','marges gauches et droites','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('41','1','se reconnecter au webso','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('42','1','ajouter le niveau de deboggage dans le websocket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('43','1','déverminage serveur wso','50','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('44','1','Prévenir le ws quand on se déconnecte','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('45','1','coccinelle déverminage
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g transform=""><path d=" M -38 42 L -32 38 L -35 28 L -28 20 M -24 -12 L -30 -12 L -35 -1 L -41 -1 M -19 -18 L -30 -24 L -32 -31 M -7 -37 L -13 -43 M 11 -37 L 17 -43 M 23 -18 L 34 -24 L 36 -31 M 28 -12 L 34 -12 L 38 -1 L 44 -1 M 31 22 L 38 28 L 36 38 L 42 42" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path><path d=" M -17 -19 C -18 -46 22 -46 20 -19" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:slategray;stroke-width:1;fill-opacity:1;"></path><path d=" M -17 -20 C -24 -14 -30 -2 -30 7 C -30 22 -20 44 2 44 c 18 0 31 -20 31 -36 C 34 -4 28 -13 20 -20 c 0 1 -16 1 -18 1 C -1 -19 -17 -19 -17 -20" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:red;stroke-width:1;fill-opacity:1;"></path><ellipse cx="-26" cy="4" rx="3" ry="6" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(30 44 25 )" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="43" cy="-54" rx="3" ry="6" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(1 40) rotate(-32 0 0)  " style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="-17" cy="10" rx="6" ry="8" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="20" cy="10" rx="6" ry="8" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="-11" cy="-10" rx="3" ry="3" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;"></ellipse><ellipse cx="14" cy="-10" rx="3" ry="3" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="32" cy="7" rx="4" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(-40 40 74 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="-12" cy="75" rx="4" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(6 -15 ) rotate(30 57 89 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><path d=" M 1 -18 V 43" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path></g><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.01;"></rect></svg>','51','2025-11-16 15:00:37.890','2000-01-01 00:00:00','2'),
('46','1','http://localhost/frev/rev_1/__client/?a=1','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('47','1','page rev vers matrice','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('48','1','initialiser la zone rev avec le localstorage','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('49','1','mettre le rendu en js
NON trop compliqué, le garder en php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('50','1','conv js','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('51','1','rev vers js','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('52','1','zone d''édition textarea','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('53','1','cookie socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('54','1','optimiser les temps de chargement','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('55','1','traiter les messages d''erreur','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('56','1','placer le curseur dans une textarea','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('57','1','conv html','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('58','1','conv php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('59','1','conv php nikic','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('60','1','traiter les messages d''erreur de php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('61','1','sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('62','1','css','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('63','1','projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('64','1','bouton retour à la liste','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('65','1','bug lien interne après changement de version','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('66','1','scroll horizontal sur menu haut','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('67','1','bases','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('68','1','autorisations

se connecter à 

http://localhost/frev/rev_1/__client/#c_rev_vers_mat1.page1(),indice_menu(50),maj_interface2(modifier(%20id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(''zones_sauvegard%C3%A9es'',''ls_rev1''))))

sans être connecté

#c_pages1.recupere_la_page_d_accueil()
#c_pages1.recupere_la_page_d_aide()
#c_pages1.recupere_la_page_de_connexion()','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('69','1','dossiers','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('70','1','activer / désactiver le bouton du menu','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('71','1','id parent de dossier avec <dialog>','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('72','1','chemin complet d''un dossier','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('73','1','vérifier qu''un dossier n''a pas d''enfants avant de le supprimer','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('74','1','transmettre les donnes_retournees aux sql 
et mettre un message d''erreur en pile','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('75','1','ne pas enregistrer un dossier sur lui même ou au dessus de lui même','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('76','1','bib php dans un autre répertoire','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('77','1','autocapitalize="off" sur les champs input','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('78','1','ne pas mettre plus de 1000 éléments dans un dossier','16','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('79','1','remettre le bouton paramètres quand on se déconnecte','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('80','1','table des bugs','18','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('81','1','faire une sauvegarde d''un fichier supprimé','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('82','1','supprimer une projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('83','1','ajouter les champs 
nut numero technique de modification
dtm date technique de modification
dtc date technique de création','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('84','1','renommer un dossier','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('85','1','quand on clique sur 🖐, mettre la zone en haut de l''écran','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('86','1','optimiser les tableaux des matrices et des caractères','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('87','1','gestion des dossiers pour les utilisateurs autres que 1','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('88','1','sortable pour svg','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('89','1','cliquer en dehors du "dialog" pour le fermer','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('90','1','dupliquer une table','19','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('91','1','remplacer cible par projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('92','1','quand on modifie le nom d''une table
alors modifier aussi le nom_de_la_table_pour_l_index dans l''index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('93','1','corriger auto increment','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('94','1','ajouter le type du meta dans les sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('96','1','reprendre les commentaires meta dans sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('97','1','mettre les valeurs
            a_une_valeur_par_defaut(0),
            la_valeur_par_defaut_est_caractere(0),
            valeur_par_defaut( ''''),
dans le champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('98','1','afficher/masquer les champs dans le svg','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('99','1','corriger le bug : après tri des champs, on pert l''index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('100','1','ne pas masquer un champ si c''est une référence, une clé, un auto_increment
ou si le champ appartient à un index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('101','1','ajouter des tests de validité sur le svg base','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('102','1','sauvegarder une table sans champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
('103','1','requetes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('104','1','mettre le dump de la base dans la liste des bases','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('105','1','''prefixe_bdd'' PREFIXE_BDD','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('106','1','positionnement du bouton supprimer les messages','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('107','1','ajouter le bouton "ajouter un commentaire"','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('108','1','améliorer l''éditeur de requêtes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('109','1','renommer le champ dtm_tache de la table requetes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('110','1','changer le rev du champ quand on le renomme','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('111','1','remplacer les sql_nn par des sql_iii(nn,)','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('112','1','fonction pour gérer les dépendances
sql_dependances()','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('113','1','renommer un champ d''index','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('114','1','dans le concepteur de requete, mettre les champs mis à jour pour un update sur plusieurs lignes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('115','1','mettre en place des dépendances de champ sur des bases externes','20','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('116','1','ajouter le test des dépendances dans les php delete','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('117','1','renommer une table dans le base','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('118','1','sources','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('119','1','modifier les updates','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('120','1','en mode déverminage, afficher le numero de reuqete liste','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('121','1','pourquoi certains fichiers sql sont supprimés','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('122','1','icone supprimer 🗑','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('123','1','rev de texte','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('124','1','recompiler les updates','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('125','1','intégrer la table rev dans la base physique','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('126','1','projet 2','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('127','1','reprendre les meta des sql','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('128','1','compiler les requêtes à partir de la liste','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('129','1','remplacer select_liste par liste_ecran','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('130','1','compiler les sources
html
js
php
sql
css
texte
rev','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('132','1','virer chp_chemin_dossier','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('133','1','flag dossier binaire','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('134','1','begin transaction','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('135','1','ordonner un champ sur le schema uniquement','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('136','1','mettre le rev de travail de la base dans le rev','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('137','1','intégrer sql_parser_cst.js pour pouvoir faire passer :
alter table t DROP column a;

select * from toto;
/*
  alter table tata DROP column tot;
*/','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
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
','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('139','1','ajouter un source binaire ( ico )','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('140','1','ajouter un source qui pointe sur un autre source ( favicon )','50','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('141','1','drapeau répertoire contient des sources générés','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('142','1','virer che_binaire_dossier','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('143','1','copier un source dans un autre répertoire','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('144','1','virer chp_type_source','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('145','1','supprimer les éléments inutils du dump de la base','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('146','1','sql_29, sql_30

champ_numero_de_revision
gerer_champ_numero_de_revision( champ( `chi__nur_tache` ))

      gerer_champ_date_creation( champ( `chd__dtc_tache` ) , format(23)),
      gerer_champ_date_modification( champ( `chd__dtm_tache` ) , format(23))


champ_date_modification(`chd__dtm_tache`)
flag champ_date_modification','99','2025-06-13 17:04:41.468','2000-01-01 00:00:00.000','4'),
('147','1','date_default_timezone_set en fonction de l''utilisateur','17','2025-07-29 17:40:19.125','2000-01-01 00:00:00.000','1'),
('148','1','dans projet 2, enregistrer les matrices rev

bases

requetes

sources html sur disque
sources php sur disque
sources js sur disque
sources sql sur disque
sources css sur disque
sources rev sur disque
sources txt sur disque NON','99','2025-06-15 09:10:42.213','2025-06-13 17:05:45.323','10'),
('149','1','socket : .ts en .js','99','2025-06-16 09:01:24.706','2025-06-16 09:01:24.706','0'),
('150','1','renommer les champs chi__num en che__nur','99','2025-06-17 11:45:14.619','2025-06-17 10:08:32.544','3'),
('151','1','lors de la compilation d''un php, 
mettre les sources au format SQL des requetes sql dans le source php','99','2025-06-17 14:11:31.120','2025-06-17 10:40:44.982','1'),
('152','1','décomposer les fichiers session de php pour le wso','99','2025-06-19 18:22:27.003','2025-06-17 11:54:31.823','2'),
('154','1','déterminer le répertoire des requêtes dans le projet','99','2025-06-19 18:21:27.820','2025-06-19 18:21:27.820','0'),
('155','1','quand on crée un nouveau projet, 
il faut créer un clone de la base système dans lequel travailler','99','2025-06-20 10:44:39.371','2025-06-20 10:44:39.371','0'),
('156','1','quand on se déconnecte d''un projet, il faut supprimer les menus bases ...','99','2025-06-20 10:47:23.986','2025-06-20 10:47:23.986','0'),
('157','1','ajouter répertoire des requetes au niveau du projet
et utiliser cette donnée...','99','2025-06-21 16:57:19.818','2025-06-21 13:36:20.422','2'),
('158','1','quand on ajoute un champ fils, dans le dessin svg, le lien ne n''affiche pas correctement','99','2025-06-23 12:39:41.331','2025-06-23 12:39:41.331','0'),
('159','1','supprimer les projets >2 dans le projet 2','99','2025-06-23 16:18:28.927','2025-06-23 16:18:28.927','0'),
('160','1','comparer les sources entre rev1 et 2 et faire un bouton copier','99','2025-06-23 16:41:49.995','2025-06-23 16:41:49.995','0'),
('161','1','dans rev_2 importer un source de rev1','99','2025-06-24 09:36:54.845','2025-06-24 09:36:54.845','0'),
('162','1','voir message conversion dans le php (322727) [1742]','99','2025-06-24 13:49:09.573','2025-06-24 13:49:09.573','0'),
('163','1','moncrlf','99','2025-06-25 10:22:08.728','2025-06-25 10:22:08.728','0'),
('164','1','quand on active un projet, il faut charger les sources sql','99','2025-06-25 11:05:15.874','2025-06-25 11:05:15.874','0'),
('165','1','inporter/exporter les fichiers de rev 1 2','99','2025-06-25 12:06:19.837','2025-06-25 12:06:19.837','0'),
('166','1','rechercher un source dont le nom contient __

select * from tbl_sources where chp_nom_source like ''%\_%'' ESCAPE ''\'';','99','2025-06-25 14:42:17.528','2025-06-25 12:10:16.103','2'),
('167','1','double \ dans le .bat','99','2025-06-25 14:14:55.962','2025-06-25 14:14:55.962','0'),
('168','1','faire un 
comme1(%xxx)
comme2(xxx%)
comme3(xxx)','15','2025-06-26 11:55:00.122','2025-06-26 11:34:12.549','1'),
('169','1','initialiser projet standard','9','2025-06-26 15:39:59.054','2025-06-26 15:39:59.054','0'),
('170','1','initialiser ecran standard d''une table','12','2025-06-26 15:40:44.916','2025-06-26 15:40:44.916','0'),
('171','1','gérer les menus','99','2025-07-10 16:37:39.788','2025-06-26 17:24:34.522','1'),
('172','1','gérer les utilisateurs et les groupes et les métiers','99','2025-06-27 10:25:45.031','2025-06-27 10:13:04.627','1'),
('173','1','gérer les paramètres ( liste des constantes )
type de champbdd','10','2025-07-04 08:19:23.308','2025-06-27 10:13:20.409','3'),
('174','1','mettre en github
','99','2025-06-27 11:21:35.817','2025-06-27 11:21:35.817','0'),
('175','1','faire un dump de la base du projet 3','99','2025-06-28 12:41:16.455','2025-06-28 12:40:58.038','1'),
('176','1','supprimer les afr','99','2025-06-30 10:17:00.146','2025-06-30 10:17:00.146','0'),
('177','1','créer la base appli dans un autre répertoire que les bases de données','99','2025-07-01 09:20:32.962','2025-07-01 09:20:32.962','0'),
('178','1','ajouter un dictionnaire de données(genre)
permet de spécifier les champs date, date_heure, lien vers parent, id','99','2025-08-10 10:41:29.780','2025-07-02 10:46:53.367','4'),
('179','1','corriger fichier_des_dependances','99','2025-07-02 11:46:09.399','2025-07-02 11:46:09.399','0'),
('180','1','corriger rev_php_des_sql','99','2025-07-03 09:44:55.718','2025-07-03 09:44:55.718','0'),
('181','1','quand on ajoute une tâche et on revient à la liste, réordonner les tâches','99','2025-07-03 09:46:02.668','2025-07-03 09:46:02.668','0'),
('182','1','svg lien ajouter gauche droite','99','2025-07-06 09:27:00.963','2025-07-04 08:22:18.236','1'),
('183','1','lisad :

lister 
insérer 
sélectionner 
altérer/amender 
détruire','99','2025-11-07 11:01:07.145','2025-07-06 13:23:42.485','1'),
('184','1','bug quand on crée un nouvelle requête, le php c''est pas créé sur disque','99','2025-07-07 10:35:44.602','2025-07-07 10:35:44.602','0'),
('185','1','gérer les pages','99','2025-07-07 12:54:11.814','2025-07-07 12:54:11.814','0'),
('186','1','gérer les accès des utilisateurs','99','2025-07-08 15:13:34.065','2025-07-08 15:12:51.611','1'),
('187','1','supprimer chx_groupe_utilisateur chx_metier_utilisateur','99','2025-07-09 09:41:52.450','2025-07-09 09:41:52.450','0'),
('188','1','ajouter NULL si chx = '''' sur les insert et delete','99','2025-07-09 13:55:32.628','2025-07-09 13:54:53.645','1'),
('189','1','Lors de l''insertion dans la table des pages, vérifier l''existance de méthode du source','99','2025-07-09 15:40:56.820','2025-07-09 14:58:59.943','1'),
('190','1','supprimer chp_lien_rev_page','99','2025-07-09 15:22:03.310','2025-07-09 15:22:03.310','0'),
('191','1','rechercher sql_24','99','2025-07-09 15:50:13.424','2025-07-09 15:50:13.424','0'),
('192','1','bouton pop up pour voir le contenu d''une requête à partir de la liste des requêtes ','99','2025-07-09 17:42:12.440','2025-07-09 15:50:33.376','1'),
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
</select>','99','2025-07-22 14:39:11.892','2025-07-09 16:26:01.691','2'),
('194','1','optimiser le transfert pour la matrice de sql_parser_cst.js	','99','2025-07-09 16:31:23.198','2025-07-09 16:31:23.198','0'),
('195','1','dans svg, ajouter un les boutons pour les bases/tables/champs des tables liées','99','2025-07-09 17:43:23.330','2025-07-09 17:43:23.330','0'),
('196','1','initialiser les champs filtres d''une sous page','99','2025-07-19 11:11:25.033','2025-07-10 09:52:20.444','1'),
('197','1','le caractère 🟥 ne passe pas sur ma tablette
faire un carré svg
⬛🔲🗨◻⏹','99','2025-07-21 17:02:50.100','2025-07-10 09:58:19.160','4'),
('198','1','dans les pages, proposer une liste de méthodes quand on choisir un source','99','2025-07-10 10:17:39.087','2025-07-10 10:17:39.087','0'),
('199','1','compiler le prérequis du menu','99','2025-07-14 08:40:32.303','2025-07-12 08:22:58.170','1'),
('200','1','quand on modifie une page, il faut recompiler les menus','99','2025-07-15 13:49:22.638','2025-07-15 13:49:22.638','0'),
('201','1','ajouter les traitements de 
nom_champ_dans_parent1
nom_libelle_dans_parent1
dans les sous listes comme dans c_sources1.php','99','2025-07-15 17:21:51.755','2025-07-15 16:12:27.924','1'),
('202','1','bibliothèque de svg','99','2025-12-15 10:28:22.175','2025-07-16 10:47:25.371','1'),
('203','1','renuméroter les requetes à partir de 101','99','2025-07-17 15:09:37.352','2025-07-17 10:11:14.041','2'),
('204','1','sql_5, suppression de rev, ne dépend de pernonne','99','2025-07-17 12:14:57.332','2025-07-17 12:07:20.343','1'),
('205','1','bug quand on renumérote une requete il y a 2 fois <?php','99','2025-07-18 10:50:06.307','2025-07-18 10:50:06.307','0'),
('206','1','renuméroter un source','99','2025-07-24 12:50:11.622','2025-07-24 12:50:11.622','0'),
('207','1','remplacer php par deno','50','2025-07-27 09:47:30.190','2025-07-27 09:47:14.801','1'),
('208','1','chp_commentaire_projet => chTTTTT_commentaire_projet','99','2025-07-29 11:37:04.000','2025-07-29 11:37:04.000','0'),
('209','1','ajouter un bouton enregistrer dans la modification d''un source','99','2025-07-29 16:48:06.039','2025-07-29 15:44:38.467','1'),
('210','1','travailler la redirection si on n''est pas authentifié','99','2025-07-29 17:52:34.498','2025-07-29 17:52:34.498','0'),
('211','1','ajouter une référence à la pagination dans les listes','99','2025-07-31 11:56:33.898','2025-07-31 09:07:20.616','1'),
('212','1','liens internes en #','99','2025-07-31 13:52:57.967','2025-07-31 13:52:57.967','0'),
('213','1','Gérer les versions
nouvelle version','99','2025-08-01 14:32:15.239','2025-08-01 14:32:15.239','0'),
('214','1','renommer un champ

supprimer un champ
ajouter un champ

quand on renomme un champ de la base 1 de rev_1 il faur renommer les champs de toutes les bases rev_n
Exemple chp_commentaire_projet => cht_commentaire_projet','99','2025-08-02 14:19:05.165','2025-08-01 15:08:43.406','2'),
('215','1','interface : case à cocher "se souvenir de moi" sur la page de connexion','80','2025-12-15 10:28:48.313','2025-08-03 09:25:28.660','2'),
('216','1','intégrer mon tri','99','2025-08-03 10:03:21.913','2025-08-03 10:03:21.913','0'),
('217','1','bug réordonner champs sur projet 3','99','2025-08-05 14:13:00.676','2025-08-05 14:13:00.676','0'),
('218','1','tri_arbre','99','2025-08-08 11:02:44.128','2025-08-08 11:02:44.128','0'),
('219','1','source_requete

            ''sql0'' => $sql0 ,
            ''bdd'' => $GLOBALS[__BDD][BDD_NUMERO_1],
','99','2025-08-08 15:09:52.677','2025-08-08 12:41:17.737','3'),
('220','1','ajouter un champ espece base et taille_espece','99','2025-08-09 12:38:17.257','2025-08-09 12:33:15.508','2'),
('221','1','taxon, espèce, famille, classification, qualité, groupe, collection, genre','80','2025-08-10 10:36:21.692','2025-08-10 09:27:19.788','1'),
('222','1','tbl_pages
tbl_menus
chx_acces_page sql 188 189 190 191 198 300 303 304

un accès = métier groupe

autorisation = acces source

menu = autorisation methode du source

afr : quand le source a appel le source b, 
il faut une autorisation déléguée sur la méthode appelée','99','2025-08-12 14:42:35.283','2025-08-12 12:44:14.024','7'),
('223','1','interface : pouvoir agrandit la zone de message ( vv_supprimer_les_messages_3 )','99','2025-08-27 08:02:50.904','2025-08-15 14:23:33.195','3'),
('224','1','dans ajouter un formule de requete 
nouvelle requete liste
clic sur condition
il n''y a que de comme','99','2025-08-16 13:28:59.257','2025-08-16 13:28:59.257','0'),
('225','1','dans requete update
sur formule critere
mettre le curseur au bon endroit et écrire le champ correctement','99','2025-08-17 16:44:59.342','2025-08-17 16:44:59.342','0'),
('226','1','dans svg, corriger le déplacement d''une table ','99','2025-08-18 08:00:20.749','2025-08-18 08:00:20.749','0'),
('227','1','renuméroter un genre','99','2025-08-18 11:17:14.312','2025-08-18 11:17:14.312','0'),
('228','1','trier les genres','99','2025-08-18 16:43:49.623','2025-08-18 16:43:49.623','0'),
('229','1','corriger le bouton du menu','99','2025-08-20 15:27:36.476','2025-08-20 15:27:36.476','0'),
('230','1','lien virtuel sur la table tache','99','2025-08-21 09:44:34.241','2025-08-21 09:44:34.241','0'),
('231','1','masquer le menu organisation quand on est sur un projet autre que 1','99','2025-08-22 08:41:02.119','2025-08-21 13:34:35.910','1'),
('233','1','bug liste des taches avec plusieurs id','99','2025-08-22 08:40:37.293','2025-08-22 08:40:37.293','0'),
('234','1','supprimer chx_acces_menu chx_parent_menu','99','2025-08-22 09:28:50.759','2025-08-22 09:28:50.759','0'),
('235','1','popover
https://mdn.github.io/dom-examples/popover-api/
https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes/popover','99','2025-11-11 11:25:13.653','2025-08-23 12:35:31.595','1'),
('236','1','un nom de source ou un nom de dossier ne doit contenir que les caractères a-z,0-9,._','99','2025-08-26 17:01:30.665','2025-08-23 15:09:07.105','0'),
('237','1','virer les compteur de sessions compteur_session_php1','99','2025-08-24 09:10:19.979','2025-08-24 09:07:32.258','1'),
('238','1','virer sortable','99','2025-08-24 09:44:25.590','2025-08-24 09:44:25.590','0'),
('239','1','virer champ_date_creation , champ_date_modification , champ_numero_de_revision , 

virer
      gerer_champ_numero_de_revision( champ( `chi__nur_tache` ))
      gerer_champ_date_creation( champ( `chd__dtc_tache` ) , format(23)),
      gerer_champ_date_modification( champ( `chd__dtm_tache` ) , format(23))

','99','2025-08-26 16:16:12.402','2025-08-26 15:17:41.241','0'),
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

','99','2025-11-07 10:59:04.871','2025-08-28 13:30:48.719','0'),
('241','1','virer nom_long_du_champ
nom_court_du_champ
et garder nom_bref_du_champ','99','2025-11-07 13:35:22.305','2025-08-28 17:42:38.976','0'),
('242','1','indicateur requete souche','99','2025-09-03 15:51:11.166','2025-08-31 09:04:03.909','0'),
('243','1','time stamp c (création) ou timestamp a (alteration)

che_est_tsc_genre
che_est_tsm_genre','99','2025-09-03 15:51:07.883','2025-09-01 12:50:05.454','0'),
('244','1','ajouter un nom autorisation construit automatiquement pour déterminer le libelle lien','8','2025-09-04 09:38:08.890','2025-09-04 09:38:08.890','0'),
('246','1','ajouter un meta libelle lien','99','2025-09-04 17:25:45.403','2025-09-04 10:47:55.252','0'),
('247','1','ajouter les tests sur les editions/créations de champs','99','2025-11-07 10:58:08.476','2025-09-04 17:26:41.178','0'),
('248','1','quand on affecte un numero de genre <100, on le copie dans les autres environnements','11','2025-09-06 10:10:02.768','2025-09-05 08:53:48.856','0'),
('249','1','écran création genre

insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_prefixe_genre`),:chp_prefixe_genre),
      affecte(champ(`chp_nom_genre`),:chp_nom_genre),
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
      affecte(champ(`che_est_tsc_genre`),:che_est_tsc_genre),
      affecte(champ(`cht_fonctions_genre`),:cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:che_est_nur_genre),
      affecte(champ(`che_est_tsm_genre`),:che_est_tsm_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   )
)','99','2025-09-06 10:09:50.609','2025-09-05 08:58:06.995','0'),
('250','1','ajouter un indicateur de critere de recherche pour liste_ecran','99','2025-09-05 12:51:01.330','2025-09-05 09:01:53.623','0'),
('251','1','remplacer afficher_champ_dans_svg par masquer_champ_dans_svg','99','2025-09-05 11:24:14.821','2025-09-05 10:24:34.492','0'),
('252','1','dans le svg, gérer est_libelle_lien au niveau de la table','99','2025-09-05 12:10:26.981','2025-09-05 11:53:41.245','0'),
('253','1','ajouter un indicateur de tri pour les requetes souches liste_ecran','99','2025-09-05 14:56:46.160','2025-09-05 12:50:49.009','0'),
('254','1','ajouter sens_tri_liste_ecran ','99','2025-09-05 14:56:52.296','2025-09-05 13:38:23.645','0'),
('255','1','ajouter un genre priorite avec position 99','99','2025-11-07 10:57:44.980','2025-09-05 14:56:01.345','0'),
('256','1','integer -(2^63) == -9223372036854775808 and maximum is 2^63 - 1 == 9223372036854775807
20char

float 1.7976931348623157e+308 and 4.9406564584124654e-324
24 char avec le -

$a= ''-9223372036854775807'' < ''-9223372036854775808'';
echo __FILE__ . '' '' . __LINE__ . '' __LINE__ = <pre>'' . var_export( $a , true ) . ''</pre>'' ; exit(0);

9 223 372 036 854 775 807
  999 999 999 999 999 999
1 000 000 000 000 000 000','7','2025-09-06 10:42:26.801','2025-09-05 16:44:43.607','0'),
('257','1','traiter le integer(2) pour priorité','99','2025-09-09 10:22:31.674','2025-09-06 16:13:30.347','0'),
('258','1','est_utilisateur => est_session','99','2025-09-08 07:47:32.581','2025-09-06 17:41:27.816','0'),
('259','1','ajouter positif dans les genres INTEGER','6','2025-09-08 12:46:55.496','2025-09-08 12:46:55.496','0'),
('260','1','gérer "mes tâches" avec valeur de session','99','2025-11-05 07:55:51.279','2025-09-09 13:24:16.968','0'),
('261','1','générer les requêtes souches','80','2025-12-21 10:24:24.144','2025-09-09 16:03:18.381','0'),
('262','1','','','2025-09-24 17:40:27.284','2025-09-24 17:40:27.284','0'),
('263','1','remplacer __js_des_sql par __liste_des_sql','99','2025-10-04 07:11:13.006','2025-10-01 15:43:10.781','0'),
('264','1','test_fonctions_de_c_fonctions1
test_fonctions_de___fonctions1','99','2025-11-07 10:57:51.842','2025-10-02 17:08:46.737','0'),
('265','1','corriger le svg dans site003','99','2025-10-06 17:19:30.221','2025-10-04 07:11:25.810','0'),
('266','1','virer methode3','99','2025-10-06 17:19:33.523','2025-10-05 09:06:55.633','0'),
('267','1','écran requetes

liste ecran sans souche
sélectionner(
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
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete),
         comme(champ(`T0`,`chp_type_requete`),:T0_chp_type_requete),
         comme(champ(`T0`,`cht_rev_requete`),:T0_cht_rev_requete),
         infegal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete2),
         comme(champ(`T0`,`cht_commentaire_requete`),:T0_cht_commentaire_requete),
         egal(champ(`T0`,`che_est_souche_requete`),:T0_che_est_souche_requete)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','99','2025-11-07 10:57:14.973','2025-10-06 17:23:00.098','0'),
('268','1','ajouter les liste_du_menu0','99','2025-10-10 08:17:44.911','2025-10-08 18:00:23.823','0'),
('269','1','map(mise au point) requetes jointure_gauche','99','2025-10-10 11:15:59.534','2025-10-10 07:48:27.251','0'),
('270','1','changer 
maj_tester_les_dependances_dans_le_php
en
maj_NE_PAS_tester_les_dependances_dans_le_php','99','2025-10-24 17:57:35.170','2025-10-10 09:14:29.555','0'),
('271','1','virer interface1.module1
__X_CLE_APPLICATION _CA_
__x_signaux __xsi','99','2025-10-24 16:34:56.067','2025-10-10 09:16:17.047','0'),
('272','1','changer
sur_base_principale
sur_base_principale','99','2025-10-26 07:13:48.974','2025-10-10 09:20:56.229','0'),
('273','1','groupes, métier, accès vérifier que 
si id=1, parent=1
','99','2025-10-24 16:33:27.323','2025-10-10 14:20:35.430','0'),
('275','1','version des messages','50','2025-10-11 08:49:23.473','2025-10-11 08:49:23.473','0'),
('276','1','dossiers 2','99','2025-10-17 11:32:04.357','2025-10-12 11:36:06.622','0'),
('277','1','requete 180 sur les utilisateurs','99','2025-10-23 13:49:36.457','2025-10-17 11:32:22.172','0'),
('278','1','bidouille base
brave Pafr   genre safari true  ipad ou iphone true
safari afr   genre safari true  ipad ou iphone true
chrome afr   genre safari true  ipad ou iphone true


interdire le zoom
crios = false 
safari true
ipad iphone true




bidouille tri
brave pafr
safari afr
chrome afr

','99','2025-10-22 13:22:13.338','2025-10-18 16:20:18.602','0'),
('279','1','env2','99','2025-10-22 08:49:08.159','2025-10-20 08:45:14.029','0'),
('280','1','redirect quand non connecté','99','2025-10-24 13:13:22.119','2025-10-20 13:29:31.147','0'),
('281','1','créer un genre zone source rev 
data-editeur1="rev"

et un genre zone source programme

data-editeur1="source_editeur1"','99','2025-10-21 13:06:47.836','2025-10-20 17:38:00.920','0'),
('282','1','ajouter une zone de particulatités aux genres','99','2025-10-21 10:12:50.729','2025-10-21 07:42:30.023','0'),
('283','1','bouton pg_bas','99','2025-10-21 13:06:22.833','2025-10-21 10:52:47.310','0'),
('284','1','indicateur sur bouton modifier','99','2025-10-21 12:26:11.328','2025-10-21 11:03:13.329','0'),
('285','1','exporter les genres dans les autres envs de dev','99','2025-10-21 17:38:38.597','2025-10-21 13:55:32.503','0'),
('286','1','ne_pas_supprimer_id_un','99','2025-10-23 13:49:54.611','2025-10-22 16:08:24.131','0'),
('287','1','profile de couleur
couleurs de fond
hsb 
h = teinte 0 -> 359
s = saturation 0 très clair -> 100 pleine
b = briance 100

hwb(151 58% 0% / 1);
hue whiteness blackness','99','2025-10-24 12:23:52.173','2025-10-23 15:30:30.466','0'),
('288','1','fin de réception des message, activer le menu','99','2025-10-24 16:28:25.476','2025-10-24 13:13:12.327','0'),
('289','1','renommer __j_20251024_185700_ en __j_20251024_185700_','99','2025-10-26 06:56:23.260','2025-10-24 18:57:51.084','0'),
('290','1','afr 
rev_3 : env de départ d''un nouveau projet

','99','2025-12-15 12:31:00.332','2025-10-26 07:02:39.935','0'),
('291','1','dans une requete delete, 
vérifier que pour tester les dépendances, on a bien une référence au champ chi_id
Exemple 105, 114, 170','99','2025-10-26 08:28:52.573','2025-10-26 07:29:50.078','0'),
('292','1','le bouton loupe doit commencer à zéro','99','2025-10-26 10:01:09.571','2025-10-26 07:31:27.160','0'),
('293','1','copier le contenu d''une zone input , de text area
insérer/remplacer ou insérer/ajouter dans une zone coller','99','2025-10-29 13:16:53.685','2025-10-26 14:14:30.906','0'),
('294','1','dossier des requêtes','99','2025-10-29 13:16:52.154','2025-10-27 07:11:49.851','0'),
('295','1','migrer 
aller_a_la_ligne1
aller_a_la_position1 


dans __fnt1','99','2025-10-30 16:18:43.655','2025-10-29 15:34:51.243','0'),
('296','1','icognito / masked svg pour masquer la zone message','99','2025-10-30 16:45:39.587','2025-10-30 07:48:30.339','0'),
('297','1','les menus en div
https://mdn.github.io/dom-examples/popover-api/
https://mdn.github.io/dom-examples/popover-api/nested-popovers/','99','2025-11-03 13:33:25.706','2025-10-30 16:47:27.831','0'),
('298','1','autorisations coté serveur à faire sur le projet 3','99','2025-11-04 16:35:00.693','2025-10-31 07:30:47.745','0'),
('299','1','masquer les messages


<svg xmlns="http://www.w3.org/2000/svg" viewBox="-35 0  70 64.75">
 <g stroke="rgb(0, 0, 0)" style="stroke:red;fill:transparent;stroke-width:1;">
  <path d=" M -23 27 C -20 20 -14 0 -10 0 C -8 0 -3 5 0 5 C 3 5 8 0 10 0 C 15 0 20 20 23 27 C 20 27 -20 27 -23 27 " style="fill:red"></path>
  <path stroke-width="3" d=" M -35 33  C -31 33 31 33 35 33"></path>
  <circle cx="-17" cy="53" r="11.75" style="stroke-width:3;"></circle>
  <circle cx="17" cy="53" r="11.75" style="stroke-width:3;"></circle>
  <path d=" M -5 52 C -2 50 2 50 5 52 style=" stroke-width:3;"=""></path>
 </g>
</svg>
','80','2025-11-02 10:31:29.357','2025-11-02 10:31:29.357','0'),
('300','1','dans le projet 3 "les tâches " voir le lien vers l''utilisateur','99','2025-11-04 16:34:45.472','2025-11-04 10:08:45.737','0'),
('301','1','taille de la sous fenêtre','99','2025-11-04 11:53:47.354','2025-11-04 11:39:50.934','0'),
('302','1','pouvoir changer l''utilisateur courant','5','2025-11-04 11:41:17.193','2025-11-04 11:41:17.193','0'),
('303','1','commentaire
abrégé
éclaircissement
annotation
bavardage
cancan
chronique
commérage
exégèse
explication
guide
histoire
interprétation
livre
médisance
mémento
mémoire
mémorandum
note
notes
observation
paraphrase
potin
propos
racontar
remarque
remarques','80','2025-11-04 14:03:50.063','2025-11-04 14:03:42.309','0'),
('304','1','supprimer les liens vers projet dans la plupart des tables de rev_1','99','2025-11-06 13:44:45.345','2025-11-04 15:40:42.129','0'),
('305','1','virer 
est_critere_recherche_liste_ecran
ordre_tri_liste_ecran
sens_tri_liste_ecran_decroissant','99','2025-11-04 15:56:53.220','2025-11-04 15:42:51.882','0'),
('306','1','menus trop à gauche','99','2025-11-05 17:42:41.448','2025-11-05 07:54:25.634','0'),
('307','1','faire un defilement vers le haut apres avoir mis a jour le contenu principal','99','2025-11-05 09:16:46.340','2025-11-05 07:55:01.770','0'),
('308','1','menu au dessus de svg','99','2025-11-07 08:53:06.718','2025-11-05 07:56:32.290','0'),
('309','1','dans l''env 2, maj de l''ordre des menus','99','2025-11-06 08:44:15.918','2025-11-05 07:59:23.398','0'),
('310','1','mettre un bouton pour effacer le contenu d''un champ filtre','99','2025-11-05 08:30:00.431','2025-11-05 08:01:34.250','0'),
('311','1','passer un paramètre de filtre dans les sous fenêtres','50','2025-11-06 13:53:42.197','2025-11-05 08:20:12.514','0'),
('312','1','générer un programme sans requete update ou insert','99','2025-11-05 16:59:26.462','2025-11-05 08:48:34.349','0'),
('313','1','sélecteur de couleur','50','2025-11-07 08:54:49.333','2025-11-07 08:54:41.769','0'),
('314','1','ajouter au niveau des champs un abrégé','99','2025-11-07 13:35:02.529','2025-11-07 12:06:34.239','0'),
('315','1','nouveau projet complet
','2','2025-12-21 11:05:22.389','2025-11-07 14:09:19.488','0'),
('316','1','renuméroter les requêtes de rev_1 pour qu''elles soient alignées sur rev_4

318,142,380 autorisation insert 

134.177.375 groupes delete
176,133,374 groupes update
174.132.373 groupes insert
131,175     groupes select
173,130     goupes listes

129,187     métier delete
127,186,372 métier update
184,126.371 métier insert
125.185     métier select
124.183.370 métier liste
123.182.369 utilisateur
122.181.368 utilisateur
121,180,367 utilisateur
119,178.365 utilisateur
118.139,364 utilisateur
117,154.363
116.162.362
115,161,361 sources
114,131,360  131 dispo

104 352
105 353
106 354
147 108 note 1°]
110 119 356   119 dispo

111,130,357   130 dispo
112,128,358   128 dispo
113,129,359   129 dispo

1°]
la 108 n''est utilisée nulle part, on l''efface
modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_parametres_utilisateur`),:n_chp_parametres_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','99','2025-12-01 08:33:35.433','2025-11-09 08:53:39.337','0'),
('317','1','mettre le nom d''utilisateur en sha1 ?
Non, c''est complètement idiot !','99','2025-12-11 12:47:18.804','2025-11-10 08:29:25.743','0'),
('318','1','rouleau de scotch pour bouton coller
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 -33  77.0329 66"><circle cx="0" cy="0" r="24.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:#E7C307;fill:yellow;stroke-width:1;"></circle><path d=" M 14 -20 C 26 -10 33 -5 41 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:#E7C307;fill:transparent;stroke-width:1;"></path><path d=" M 10 3 C 5 -7 3 -24 13 -26 C 6 -30 3 -30 0 -30 C -18 -30 -30 -18 -30 0 C -30 18 -17 30 0 30 C 20 30 42 29 41 0 C 35 7 17 13 10 3 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:red;stroke-width:1;fill-opacity:0.5;"></path><circle cx="0" cy="0" r="6" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform=""></circle></svg>','80','2025-11-11 11:01:54.689','2025-11-11 10:59:05.798','0'),
('319','1','voir un enregistrement','50','2025-11-11 11:24:58.393','2025-11-11 11:24:58.393','0'),
('320','1','ajouter dans les genres un nom contraint
NON un nom de dossier ou un nom de fichier suffira','99','2025-11-15 07:59:23.017','2025-11-14 08:45:22.829','0'),
('321','1','traiter les boutons svg en ligne','99','2025-11-15 12:40:56.939','2025-11-14 09:23:02.178','0'),
('322','1','bug tri sur mobile','99','2025-11-15 09:03:41.606','2025-11-15 08:00:18.680','0'),
('323','1','dossier des éléments générés','50','2025-11-15 09:35:01.222','2025-11-15 09:35:01.222','0'),
('324','1','imposer une méthode pour un menu','99','2025-11-15 12:40:47.846','2025-11-15 10:11:28.573','0'),
('325','1','modifier le requête 153 dans rev_1','99','2025-11-15 11:41:24.761','2025-11-15 11:39:21.909','0'),
('326','1','aligner les sources rev_1 et rev_4','99','2025-12-10 14:58:29.749','2025-11-15 12:41:49.373','0'),
('327','1','svg poubelle
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><g><path d=" M -28 -43 C -5 -36 11 -45 23 -38  C 23 -20 26 12 26 36 C 23 29 15 30 5 30 C -6 30 -15 32 -21 32 C -22 17 -18 -23 -29 -42" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:darkgreen;fill:lime;stroke-width:6;"></path><circle cx="-18" cy="29" r="10" stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:6;"></circle><circle cx="-29" cy="-43" r="4" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></circle></g></svg>','80','2025-11-16 14:50:50.178','2025-11-16 14:50:50.178','0'),
('328','1','symbole vider
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><path d=" M -50 -50 H 50 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path><path d=" M 0 -34 C 5 -34 11 -33 15 -32 L 22 -41 L 33 -41 L 23 -26 C 27 -20 30 -15 30 0 C 30 20 17 34 0 34 C -5 34 -10 33 -14 30 L -22 41  L -33 41 L -23 26 C -26 19 -30 16 -30 0 C -30 -20 -17 -34 0 -34 M -21 0 C -21 9 -20 14 -18 18 C -9 4 0 -9 10 -23 C 7 -25 4 -26 0 -26 C -11 -26 -21 -12 -21 0 M 18 -18 C 6 0 -3 13 -9 23 C -6 25 -4 26 0 26 C 11 26 21 12 21 0 C 21 -9 20 -14 18 -18" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:lime;stroke-width:4;"></path></svg>','80','2025-11-19 18:35:20.570','2025-11-19 14:54:51.617','0'),
('329','1','logo html5
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g transform="translate(-43 -43)   scale(0.17,0.17)"><path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"></path><path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"></path><path fill="#f16529" d="M256 480.5V131H404.3L376 447"></path><path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"></path><path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"></path></g><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round"></rect></svg>','80','2025-11-27 11:56:14.312','2025-11-27 11:56:14.312','0'),
('330','1','virer ⎘ 🗑 ✎','99','2025-11-30 08:05:33.590','2025-11-30 07:38:24.928','0'),
('331','1','virer cht_complements_menu','99','2025-12-01 16:38:47.277','2025-12-01 16:16:14.521','0'),
('332','1','ajouter la référence des insert/update/select/liste dans le js généré','99','2025-12-10 14:58:28.227','2025-12-02 08:52:43.777','0'),
('333','1','git','99','2025-12-23 08:29:27.643','2025-12-15 12:31:19.368','0'),
('334','1','ajouter un champ table_reference de requête','99','2025-12-16 15:26:02.509','2025-12-16 12:43:15.811','0'),
('335','1','popup d''exemple d''appel de select en php pour une requête','99','2025-12-19 10:51:52.719','2025-12-16 15:25:58.058','0'),
('336','1','batch de compilation 
','3','2025-12-21 11:50:31.552','2025-12-21 11:50:31.552','0'),
('337','1','deno','4','2025-12-21 11:50:48.949','2025-12-21 11:50:48.949','0'),
('338','1','traiter 
          INSERT OR IGNORE INTO \`tbl_projets\`(
','1','2026-01-03 12:38:51.325','2026-01-03 12:38:51.325','0');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_autorisations
  ===============================
*/

INSERT INTO tbl_autorisations (chi_id_autorisation,
chp_nom_autorisation,
chx_acces_autorisation,
chx_source_autorisation) VALUES
('23','taches2','1','403'),
('24','projets','1','402'),
('25','dossiers js','1','401'),
('26','autorisation js','1','436'),
('27','sources js','1','439'),
('28','genres js','1','420'),
('29','bdds js','1','425'),
('30','requetes js','1','430'),
('31','groupes js','1','428'),
('32','metiers js','1','429'),
('33','acces js','1','435'),
('34','menus js','1','437'),
('35','utilisateurs js','1','440'),
('36','generer_programmes js','1','448'),
('37','matrice js','1','406'),
('38','rev_js js','1','405'),
('39','rev html js','1','404'),
('40','rev php js','1','407'),
('41','rev sql js','1','442'),
('42','rev css js','1','441'),
('44','rev txt js','1','443'),
('45','src vers pgm','1','422'),
('46','coordonnées js','1','466'),
('47','rev js','1','472'),
('48','projets','1','388'),
('49','coordonnées js','2','466'),
('50','coordonnées php','2','474'),
('51','generer_souches js','1','487');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_requetes
  ===============================
*/

INSERT INTO tbl_requetes (chi_id_requete,
cht_commentaire_requete,
chp_type_requete,
cht_rev_requete,
cht_sql_requete,
cht_php_requete,
cht_matrice_requete,
che__nur_requete,
chd__dtm_requete,
chd__dtc_requete,
che_est_souche_requete,
chp_table_reference_requete,
cht_js_requete) VALUES
('101','utilisateur par nom_de_connexion','select','#(meta(sur_base_principale(1))),
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
)  ','/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T0`.`chx_acces_utilisateur`
 FROM b1.tbl_utilisateurs T0
WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
LIMIT 1 OFFSET 0 
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs',NULL),
('102','premier utilisateur','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_utilisateurs`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs',NULL),
('103','utilisateurs','select','sélectionner(
   base_de_reference(1),
   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      )
   )
)  ','SELECT 
COUNT( * )
 FROM b1.tbl_utilisateurs T0
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs',NULL),
('104','insertion groupe initial','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_groupe`),:chi_id_groupe),affecte(champ(`chp_nom_groupe`),:chp_nom_groupe),affecte(champ(`chx_parent_groupe`),:chx_parent_groupe)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_groupes`(
    `chi_id_groupe` , 
    `chp_nom_groupe` , 
    `chx_parent_groupe`
) VALUES (
    :chi_id_groupe , 
    :chp_nom_groupe , 
    :chx_parent_groupe
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_groupes',NULL),
('105','revs par provenance, source et projet','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_metier`),:chi_id_metier),affecte(champ(`chp_nom_metier`),:chp_nom_metier),affecte(champ(`chx_parent_metier`),:chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_metiers`(
    `chi_id_metier` , 
    `chp_nom_metier` , 
    `chx_parent_metier`
) VALUES (
    :chi_id_metier , 
    :chp_nom_metier , 
    :chx_parent_metier
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_metiers',NULL),
('106',NULL,'insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_acces`),:chi_id_acces),affecte(champ(`chp_nom_acces`),:chp_nom_acces),affecte(champ(`chx_groupe_acces`),:chx_groupe_acces),affecte(champ(`chx_metier_acces`),:chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_acces`(
    `chi_id_acces` , 
    `chp_nom_acces` , 
    `chx_groupe_acces` , 
    `chx_metier_acces`
) VALUES (
    :chi_id_acces , 
    :chp_nom_acces , 
    :chx_groupe_acces , 
    :chx_metier_acces
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces',NULL),
('107','utilisateurs','update','modifier(
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs',NULL),
('108','utilisateurs','select','#(meta(sur_base_principale(1))),
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
)  ','/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , 
`T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs',NULL),
('109','utilisateur sur page profile','update','#(meta(sur_base_principale(1))),
modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:n_chp_nom_de_connexion_utilisateur),affecte(champ(`chp_mot_de_passe_utilisateur`),:n_chp_mot_de_passe_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','/*meta(sur_base_principale(1))*/

UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs',NULL),
('110','tâches','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'2','2025-09-07 10:51:12.709','2000-01-01 00:00:00.000','1','tbl_taches',NULL),
('111','tâches','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_taches`(
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
);',NULL,NULL,'44','2025-09-06 14:41:31.713','2000-01-01 00:00:00.000','1','tbl_taches',NULL),
('112','tâches par id','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches',NULL),
('113','tâches texte et priorité par id','update','modifier(
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
)  ','UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches',NULL),
('114','tâches par id','delete','supprimer(
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
)  ','DELETE FROM b1.tbl_taches
WHERE ( /* */ `chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches',NULL),
('115','sources','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources',NULL),
('116','sources','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
`T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source

WHERE ( /* */ `T0`.`chi_id_source` = :T0_chi_id_source)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources',NULL),
('117','sources','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_sources`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources',NULL),
('118','sources','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:chi_id_source))
)  ','DELETE FROM b1.tbl_sources
WHERE `chi_id_source` = :chi_id_source ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources',NULL),
('119','utilisateurs','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs',NULL),
('120','utilisateurs','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:chp_nom_de_connexion_utilisateur),affecte(champ(`chx_acces_utilisateur`),:chx_acces_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
)  ','INSERT INTO b1.`tbl_utilisateurs`(
    `chp_nom_de_connexion_utilisateur` , 
    `chx_acces_utilisateur`
) VALUES (
    :chp_nom_de_connexion_utilisateur , 
    :chx_acces_utilisateur
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs',NULL),
('121','utilisateur','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
`T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs',NULL),
('122','utilisateur','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:n_chp_nom_de_connexion_utilisateur),affecte(champ(`chx_acces_utilisateur`),:n_chx_acces_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chx_acces_utilisateur` = :n_chx_acces_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs',NULL),
('123','utilisateur','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:chi_id_utilisateur))
)  ','DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs',NULL),
('124','métier','liste_ecran','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE (`T0`.`chi_id_metier` = :T0_chi_id_metier
   AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier) 
ORDER BY `T0`.`chi_id_metier` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers',NULL),
('125','métier','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers',NULL),
('126','métier','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_metiers`(
    `chp_nom_metier` , 
    `chx_parent_metier`
) VALUES (
    :chp_nom_metier , 
    :chx_parent_metier
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers',NULL),
('127','métier','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_metier`),:n_chp_nom_metier),affecte(champ(`chx_parent_metier`),:n_chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:c_chi_id_metier))
)  ','UPDATE b1.tbl_metiers SET 
   `chp_nom_metier` = :n_chp_nom_metier , 
   `chx_parent_metier` = :n_chx_parent_metier
WHERE `chi_id_metier` = :c_chi_id_metier ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers',NULL),
('130','liste des groupes','liste_ecran','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T1`.`chp_nom_groupe` , `T0`.`chx_parent_groupe`
 FROM b1.tbl_groupes T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe

WHERE ( /* */ `T0`.`chi_id_groupe` = :T0_chi_id_groupe
   AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe
   AND `T0`.`chx_parent_groupe` = :T0_chx_parent_groupe
   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe) 
ORDER BY `T0`.`chi_id_groupe` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'1','2025-10-07 07:49:40.138','2000-01-01 00:00:00.000','1','tbl_groupes',NULL),
('131','groupes','select','sélectionner(
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
;',NULL,NULL,'1','2025-10-07 12:18:14.401','2000-01-01 00:00:00.000','1','tbl_groupes',NULL),
('132','groupes','insert','insérer(
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
);',NULL,NULL,'1','2025-10-07 12:17:57.926','2000-01-01 00:00:00.000','1','tbl_groupes',NULL),
('133','groupes','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_groupe`),:n_chp_nom_groupe),affecte(champ(`chx_parent_groupe`),:n_chx_parent_groupe)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:c_chi_id_groupe))
)  ','UPDATE b1.tbl_groupes SET 
   `chp_nom_groupe` = :n_chp_nom_groupe , 
   `chx_parent_groupe` = :n_chx_parent_groupe
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',NULL,NULL,'1','2025-10-07 12:18:25.770','2000-01-01 00:00:00.000','1','tbl_groupes',NULL),
('134','groupes','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:chi_id_groupe))
)  ','DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',NULL,NULL,'1','2025-10-07 12:18:31.517','2000-01-01 00:00:00.000','1','tbl_groupes',NULL),
('135','accès','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces',NULL),
('136','accès','select','sélectionner(
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces',NULL),
('137','accès','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_acces`),:chp_nom_acces),affecte(champ(`chx_groupe_acces`),:chx_groupe_acces),affecte(champ(`chx_metier_acces`),:chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces',NULL),
('138','accès','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_acces`),:n_chp_nom_acces),affecte(champ(`chx_groupe_acces`),:n_chx_groupe_acces),affecte(champ(`chx_metier_acces`),:n_chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:c_chi_id_acces))
)  ','UPDATE b1.tbl_acces SET 
   `chp_nom_acces` = :n_chp_nom_acces , 
   `chx_groupe_acces` = :n_chx_groupe_acces , 
   `chx_metier_acces` = :n_chx_metier_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces',NULL),
('139','accès','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:chi_id_acces))
)  ','DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces',NULL),
('140','autorisations','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations',NULL),
('141','autorisations','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
`T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations',NULL),
('142','autorisations','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_acces_autorisation`),:chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:chx_source_autorisation),affecte(champ(`chp_nom_autorisation`),:chp_nom_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_autorisations`(
    `chx_acces_autorisation` , 
    `chx_source_autorisation` , 
    `chp_nom_autorisation`
) VALUES (
    :chx_acces_autorisation , 
    :chx_source_autorisation , 
    :chp_nom_autorisation
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations',NULL),
('143','autorisations','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_acces_autorisation`),:n_chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:n_chx_source_autorisation),affecte(champ(`chp_nom_autorisation`),:n_chp_nom_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:c_chi_id_autorisation))
)  ','UPDATE b1.tbl_autorisations SET 
   `chx_acces_autorisation` = :n_chx_acces_autorisation , 
   `chx_source_autorisation` = :n_chx_source_autorisation , 
   `chp_nom_autorisation` = :n_chp_nom_autorisation
WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations',NULL),
('144','autorisations','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:chi_id_autorisation))
)  ','DELETE FROM b1.tbl_autorisations
WHERE `chi_id_autorisation` = :chi_id_autorisation ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations',NULL),
('145','menus','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus',NULL),
('146','menus','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , 
`T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T3`.`che_binaire_source`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T0`.`chi_id_menu` = :T0_chi_id_menu)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus',NULL),
('147','menus','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_menus`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus',NULL),
('148','menus','update','modifier(
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
)  ','UPDATE b1.tbl_menus SET 
   `cht_libelle_menu` = :n_cht_libelle_menu , 
   `chp_titre_menu` = :n_chp_titre_menu , 
   `chx_autorisation_menu` = :n_chx_autorisation_menu , 
   `chp_methode_menu` = :n_chp_methode_menu , 
   `cht_condition_menu` = :n_cht_condition_menu , 
   `cht_condition_php_menu` = :n_cht_condition_php_menu , 
   `cht_initialisation_menu` = :n_cht_initialisation_menu
WHERE `chi_id_menu` = :c_chi_id_menu ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus',NULL),
('149','menus','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:chi_id_menu))
)  ','DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus',NULL),
('150','utilisateurs','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_mot_de_passe_utilisateur`),:n_chp_mot_de_passe_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs',NULL),
('151','sources','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chp_nom_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_autorisation_globale_source`),1))
)  ','SELECT 
`T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`che_autorisation_globale_source` = 1
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources',NULL),
('152',NULL,'select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation

WHERE (`T1`.`chp_nom_source` LIKE :T1_chp_nom_source
   AND `T0`.`chx_acces_autorisation` > 1) 
ORDER BY `T0`.`chx_acces_autorisation` ASC
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_autorisations',NULL),
('153','menus par acces','select','sélectionner(
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
)  ','SELECT 
`T1`.`chx_source_autorisation` , `T0`.`chp_titre_menu` , `T0`.`chp_methode_menu` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`chi_id_menu` , `T0`.`cht_condition_php_menu` , `T0`.`cht_condition_menu`
 FROM b1.tbl_menus T0 , 
      b1.tbl_autorisations T1
 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE ( /* */ `T2`.`chi_id_acces` = :T2_chi_id_acces
   AND T1.chi_id_autorisation = T0.chx_autorisation_menu)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus',NULL),
('154','accès paramètres par id','update','modifier(
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
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces',NULL),
('155','dossiers','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_dossier`),:n_chp_nom_dossier),affecte(champ(`chx_parent_dossier`),:n_chx_parent_dossier),affecte(champ(`che_contient_genere_dossier`),:n_che_contient_genere_dossier),affecte(champ(`che_pour_les_js_dossier`),:n_che_pour_les_js_dossier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_dossier`),:c_chi_id_dossier))
)  ','UPDATE b1.tbl_dossiers SET 
   `chp_nom_dossier` = :n_chp_nom_dossier , 
   `chx_parent_dossier` = :n_chx_parent_dossier , 
   `che_contient_genere_dossier` = :n_che_contient_genere_dossier , 
   `che_pour_les_js_dossier` = :n_che_pour_les_js_dossier
WHERE `chi_id_dossier` = :c_chi_id_dossier ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers',NULL),
('156',NULL,'requete_manuelle','insérer(
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
)    ','INSERT INTO `tbl_projets`(
    `chi_id_projet` , 
    `chp_nom_projet` , 
    `chx_dossier_requetes_projet` , 
    `chx_dossier_menus_projet`
) VALUES (
    :chi_id_projet , 
    :chi_id_projet , 
    1 , 
    1
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL),
('157','projets >= id','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(supegal(champ(`chi_id_projet`),:chi_id_projet))
)  ','DELETE FROM b1.tbl_projets
WHERE `chi_id_projet` >= :chi_id_projet ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL),
('158','dossiers','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_dossier`),:chi_id_dossier))
)  ','DELETE FROM b1.tbl_dossiers
WHERE `chi_id_dossier` = :chi_id_dossier ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers',NULL),
('159','dossiers','requete_manuelle','insérer(
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
)        ','INSERT INTO `tbl_dossiers`(
    `chi_id_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chi_id_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('160','projets','requete_manuelle','sélectionner(
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
)    ','SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`chx_dossier_bdds_projet`
 FROM tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL),
('163','sources','update','modifier(
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
)  ','UPDATE b1.tbl_sources SET 
   `chp_nom_source` = :n_chp_nom_source , 
   `che_binaire_source` = :n_che_binaire_source , 
   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source , 
   `cht_commentaire_source` = :n_cht_commentaire_source , 
   `che_contient_version_source` = :n_che_contient_version_source , 
   `che_autorisation_globale_source` = :n_che_autorisation_globale_source
WHERE `chi_id_source` = :c_chi_id_source ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources',NULL),
('164','tâches par priorité < xxx','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
 FROM b1.tbl_taches T0
WHERE ( /* */ `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache) 
ORDER BY `T0`.`chp_priorite_tache` ASC
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches',NULL),
('165','tâches priorité par id=','update','modifier(
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
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches',NULL),
('166',NULL,'requete_manuelle','sélectionner(
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
)        ','SELECT 
`T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`chi_id_dossier`
 FROM tbl_dossiers T0
WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('168','dossier compte sous dossiers','select','sélectionner(
   base_de_reference(1),
   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier))
)  ','SELECT 
COUNT( * )
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('169','dossiers par parents','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier))
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('170','dossier racine d''un projet','delete','#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions()
)  ','/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_dossiers',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('171','bases d''un projet','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions()
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds',NULL),
('187','métier','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:chi_id_metier))
)  ','DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers',NULL),
('305','projets','requete_manuelle','modifier(
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
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL),
('306','dossiers à copier dans un autre environnement','select','#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`),champ(`T0`,`chx_parent_dossier`),champ(`T0`,`che_contient_genere_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(pas_equivalent(champ(`T0`,`chp_nom_dossier`),:T0_chp_nom_dossier))
)  ','/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chp_nom_dossier` NOT LIKE :T0_chp_nom_dossier
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('307','dossiers à copier dans un autre environnement','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_dossiers`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('308','dossiers du projet à copier dans un autre environnement','select','#(meta(sur_base_principale(1))),
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
)  ','/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet`
 FROM b1.tbl_projets T0
WHERE (`T0`.`chi_id_projet` = 1)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL),
('309','dossiers à copier dans un autre environnement','update','modifier(
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
WHERE (`chi_id_projet` = :c_chi_id_projet) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL),
('310','sources','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_source`),:n_chi_id_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ','UPDATE b1.tbl_sources SET 
   `chi_id_source` = :n_chi_id_source
WHERE `chi_id_source` = :c_chi_id_source ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources',NULL),
('313','sources à copier dans un autre environnement','select','#(meta(sur_base_principale(1))),
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
)  ','/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , 
`T0`.`che_binaire_source` , `T0`.`chx_dossier_id_source`
 FROM b1.tbl_sources T0
WHERE ((`T0`.`chi_id_source` < :T0_chi_id_source
   AND `T0`.`chp_nom_source` NOT LIKE :T0_chp_nom_source) OR `T0`.`chi_id_source` IN (:T0_chi_id_source2))
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources',NULL),
('314','dossiers à copier dans un autre environnement','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_sources`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources',NULL),
('315','insérer la base principale','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_bdds`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds',NULL),
('316','projets >2 pour isa de champs ','select','#(meta(sur_base_principale(1))),
sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_projet`),champ(`T0`,`chp_nom_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   conditions(sup(champ(`T0`,`chi_id_projet`),2))
)  ','/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
 FROM b1.tbl_projets T0
WHERE `T0`.`chi_id_projet` > 2
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL),
('326','menus','select','sélectionner(
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_autorisations',NULL),
('328','genres','liste_ecran','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
`T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
`T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
`T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre`
 FROM b1.tbl_genres T0
WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'7','2025-09-07 08:23:14.064','2000-01-01 00:00:00.000','1','tbl_genres',NULL),
('329','genres','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_genres`(
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
);',NULL,NULL,'8','2025-09-07 08:23:40.563','2000-01-01 00:00:00.000','1','tbl_genres',NULL),
('330','genres','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
`T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
`T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
`T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
 FROM b1.tbl_genres T0
WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
;',NULL,NULL,'3','2025-09-07 08:23:12.681','2000-01-01 00:00:00.000','1','tbl_genres',NULL),
('331','genres','update','modifier(
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
)  ','UPDATE b1.tbl_genres SET 
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
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,NULL,'3','2025-09-07 08:23:11.943','2000-01-01 00:00:00.000','1','tbl_genres',NULL),
('332','genres','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(

      egal(champ(`chi_id_genre`),:chi_id_genre)
   )
)','DELETE FROM b1.tbl_genres
WHERE `chi_id_genre` = :chi_id_genre ;',NULL,NULL,'3','2025-09-07 08:23:11.023','2000-01-01 00:00:00.000','1','tbl_genres',NULL),
('333','tous les genres','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
`T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , 
`T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
 FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_genres',NULL),
('334','genres nouveau numéro','update','modifier(
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
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_genres',NULL),
('335','genres maj ordre','update','modifier(
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
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_genres',NULL),
('337','menus','liste_ecran','sélectionner(
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus',NULL),
('338','sources','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_rev_source`),:n_cht_rev_source),affecte(champ(`cht_genere_source`),:n_cht_genere_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ','UPDATE b1.tbl_sources SET 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source
WHERE `chi_id_source` = :c_chi_id_source ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources',NULL),
('339',NULL,'update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_rev_requete`),:n_cht_rev_requete),affecte(champ(`che_est_souche_requete`),:n_che_est_souche_requete),affecte(champ(`chd__dtm_requete`),:n_chd__dtm_requete),affecte(champ(`che__nur_requete`),:n_che__nur_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chd__dtm_requete` = :n_chd__dtm_requete , 
   `che__nur_requete` = :n_che__nur_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes',NULL),
('340',NULL,'update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`che_est_souche_requete`),:n_che_est_souche_requete),affecte(champ(`chd__dtm_requete`),:n_chd__dtm_requete),affecte(champ(`che__nur_requete`),:n_che__nur_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chd__dtm_requete` = :n_chd__dtm_requete , 
   `che__nur_requete` = :n_che__nur_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes',NULL),
('341',NULL,'select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chp_nom_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_dossier_id_source`),:T0_chx_dossier_id_source))
)  ','SELECT 
`T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
;',NULL,'','0','2025-10-06 18:00:46.255','2025-10-06 18:00:46.255','0','tbl_sources',NULL),
('342','bdds','liste_ecran','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chd__dtm_basedd` , `T0`.`chd__dtc_basedd` , `T0`.`che__nur_basedd` , `T2`.`chp_nom_dossier`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_id_basedd

WHERE ( /* */ `T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_dossier_id_basedd` = :T0_chx_dossier_id_basedd
   AND `T2`.`chp_nom_dossier` LIKE :T2_chp_nom_dossier) 
ORDER BY `T0`.`chi_id_basedd` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'3','2025-10-07 07:44:26.292','2025-10-06 18:02:10.251','0','tbl_bdds',NULL),
('343','requêtes','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_sql_requete`),:n_cht_sql_requete),affecte(champ(`cht_php_requete`),:n_cht_php_requete),affecte(champ(`chp_table_reference_requete`),:n_chp_table_reference_requete),affecte(champ(`cht_js_requete`),:n_cht_js_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_php_requete` = :n_cht_php_requete , 
   `chp_table_reference_requete` = :n_chp_table_reference_requete , 
   `cht_js_requete` = :n_cht_js_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes',NULL),
('344','revs','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
`T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
`T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
`T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev`
 FROM b1.tbl_revs T0
WHERE ( /* */ `T0`.`chi_id_rev` = :T0_chi_id_rev)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_revs',NULL),
('345','genres','requete_manuelle','insérer(
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
)                ','INSERT INTO `tbl_genres`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_genres',NULL),
('346','dossiers','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_pour_les_js_dossier`),:T0_che_pour_les_js_dossier))
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`che_pour_les_js_dossier` = :T0_che_pour_les_js_dossier
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('347','sources avec version','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_source`),champ(`T0`,`chp_nom_source`),champ(`T0`,`che_contient_version_source`),champ(`T0`,`chx_dossier_id_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_contient_version_source`),:T0_che_contient_version_source))
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_contient_version_source` , `T0`.`chx_dossier_id_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`che_contient_version_source` = :T0_che_contient_version_source
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources',NULL),
('350','liste des requêtes','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes',NULL),
('351',NULL,'update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_requete`),:n_chi_id_requete),affecte(champ(`cht_php_requete`),:n_cht_php_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `chi_id_requete` = :n_chi_id_requete , 
   `cht_php_requete` = :n_cht_php_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes',NULL),
('352','requête par id','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:chi_id_requete))
)  ','DELETE FROM b1.tbl_requetes
WHERE `chi_id_requete` = :chi_id_requete ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes',NULL),
('353','revs par provenance, source et projet','delete','#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
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
)  ','/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_revs
WHERE (`chp_provenance_rev` = :chp_provenance_rev
   AND `chx_source_rev` = :chx_source_rev) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_revs',NULL),
('354','requêtes','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
`T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes',NULL),
('355','requêtes','update','modifier(
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
)  ','UPDATE b1.tbl_requetes SET 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chp_type_requete` = :n_chp_type_requete , 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_php_requete` = :n_cht_php_requete , 
   `cht_commentaire_requete` = :n_cht_commentaire_requete , 
   `chp_table_reference_requete` = :n_chp_table_reference_requete , 
   `cht_js_requete` = :n_cht_js_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes',NULL),
('356','bdds','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_rev_travail_basedd`),:n_chp_rev_travail_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:c_chi_id_basedd))
)  ','UPDATE b1.tbl_bdds SET 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
WHERE `chi_id_basedd` = :c_chi_id_basedd ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds',NULL),
('357','bdds','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`),champ(`T0`,`chx_dossier_id_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(dans(champ(`T0`,`chi_id_basedd`),(:T0_chi_id_basedd)))
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
 FROM b1.tbl_bdds T0
WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds',NULL),
('358','revs','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_revs`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_revs',NULL),
('359','revs','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_revs',NULL),
('360','revs par projet','delete','#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   )
)  ','/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_revs',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_revs',NULL),
('361','','liste_ecran','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chx_dossier_id_basedd` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

WHERE ( /* */ `T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_dossier_id_basedd` = :T0_chx_dossier_id_basedd
   AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier) 
ORDER BY `T0`.`chi_id_basedd` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds',NULL),
('362','bdds','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_dossier_id_basedd`),:n_chx_dossier_id_basedd),affecte(champ(`chp_commentaire_basedd`),:n_chp_commentaire_basedd),affecte(champ(`chp_rev_travail_basedd`),:n_chp_rev_travail_basedd),affecte(champ(`chp_fournisseur_basedd`),:n_chp_fournisseur_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:c_chi_id_basedd))
)  ','UPDATE b1.tbl_bdds SET 
   `chx_dossier_id_basedd` = :n_chx_dossier_id_basedd , 
   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
WHERE `chi_id_basedd` = :c_chi_id_basedd ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds',NULL),
('363','bdds','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_dossier_id_basedd`),:chx_dossier_id_basedd),affecte(champ(`chp_commentaire_basedd`),:chp_commentaire_basedd),affecte(champ(`chp_fournisseur_basedd`),:chp_fournisseur_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_bdds`(
    `chx_dossier_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_fournisseur_basedd`
) VALUES (
    :chx_dossier_id_basedd , 
    :chp_commentaire_basedd , 
    :chp_fournisseur_basedd
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds',NULL),
('364','base par id','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:chi_id_basedd))
)  ','DELETE FROM b1.tbl_bdds
WHERE `chi_id_basedd` = :chi_id_basedd ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds',NULL),
('365','utilisateurs','liste_ecran','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE ( /* */ `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
   AND `T0`.`chi_compteur1_utilisateur` > :T0_chi_compteur1_utilisateur) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs',NULL),
('366','tâches priorité - 1','update','modifier(
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
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache-1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` >= 1) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches',NULL),
('367','tâches priorité + 1','update','modifier(
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
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` < 99) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches',NULL),
('368','tâches','update','modifier(
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
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches',NULL),
('369','dossiers','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chx_parent_dossier`),champ(`T0`,`che_contient_genere_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   )
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers',NULL),
('371','base par id','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
 FROM b1.tbl_bdds T0
WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds',NULL),
('372','bdds','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_fournisseur_basedd` , 
`T1`.`chi_id_dossier` , `T1`.`chp_nom_dossier` , `T1`.`chx_parent_dossier`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds',NULL),
('373','requetes','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_php_requete` , 
`T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes',NULL),
('374','projets','liste_ecran','#(meta(sur_base_principale(1))),
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
)  ','/*meta(sur_base_principale(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
 FROM b1.tbl_projets T0
WHERE ( /* */ `T0`.`chi_id_projet` = :T0_chi_id_projet
   AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
   AND `T0`.`cht_commentaire_projet` LIKE :T0_cht_commentaire_projet) 
ORDER BY `T0`.`chi_id_projet` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets',NULL),
('375','projets','select','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets',NULL),
('376','requêtes ancienne 135 à supprimer','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_php_requete`),:n_cht_php_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `cht_php_requete` = :n_cht_php_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes',NULL),
('377','projets','insert','#(meta(sur_base_principale(1))),
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
)  ','/*meta(sur_base_principale(1))*/

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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets',NULL),
('378','dossiers','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_dossier`),:chp_nom_dossier),affecte(champ(`chx_parent_dossier`),:chx_parent_dossier),affecte(champ(`che_contient_genere_dossier`),:che_contient_genere_dossier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_dossiers`(
    `chp_nom_dossier` , 
    `chx_parent_dossier` , 
    `che_contient_genere_dossier`
) VALUES (
    :chp_nom_dossier , 
    :chx_parent_dossier , 
    :che_contient_genere_dossier
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers',NULL),
('379','sur base 1','requete_manuelle','base_de_reference(1),
transaction()      ','BEGIN TRANSACTION;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0',NULL,NULL),
('380','','requete_manuelle','base_de_reference(1),
commit()    ','COMMIT;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0',NULL,NULL),
('381','','requete_manuelle','base_de_reference(1),
rollback()            ','ROLLBACK;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0',NULL,NULL),
('382','projets','delete','#(meta(sur_base_principale(1))),
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
)  ','/*meta(sur_base_principale(1))*/

DELETE FROM b1.tbl_projets
WHERE (`chi_id_projet` = :chi_id_projet) ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets',NULL),
('383','sources','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_source`),champ(`T0`,`chx_dossier_id_source`),champ(`T0`,`chp_nom_source`),champ(`T0`,`che_binaire_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_binaire_source`),:T0_che_binaire_source))
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`che_binaire_source` = :T0_che_binaire_source
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources',NULL),
('384','projets','update','modifier(
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
)  ','UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet , 
   `chx_dossier_menus_projet` = :n_chx_dossier_menus_projet , 
   `cht_commentaire_projet` = :n_cht_commentaire_projet , 
   `chx_dossier_bdds_projet` = :n_chx_dossier_bdds_projet , 
   `chx_dossier_js_projet` = :n_chx_dossier_js_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets',NULL),
('385','requetes','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`che_est_souche_requete` , 
`T0`.`cht_rev_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` < :nb_max 
ORDER BY `T0`.`chi_id_requete` ASC
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes',NULL),
('386','dossiers','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier` , `T1`.`chp_nom_dossier` , 
`T0`.`che_pour_les_js_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers',NULL),
('387','sur base 1','requete_manuelle','transaction()            ','BEGIN TRANSACTION;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0',NULL,NULL),
('388',NULL,'requete_manuelle','commit()          ','COMMIT;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0',NULL,NULL),
('389','liste des dossiers','liste_ecran','sélectionner(
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
)  ','SELECT 
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
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers',NULL),
('390','requêtes','insert','insérer(
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
)  ','INSERT INTO b1.`tbl_requetes`(
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
);',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes',NULL),
('391','requetes','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE (`T0`.`chp_table_reference_requete` = :T0_chp_table_reference_requete
   AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete)
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes',NULL),
('392',NULL,'requete_manuelle','modifier(
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
)              ','UPDATE b1.tbl_projets SET 
   `chi_id_projet` = :n_chi_id_projet , 
   `chp_nom_projet` = :n_chp_nom_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL),
('393','projets','select','sélectionner(
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
)  ','SELECT 
`T0`.`chi_id_projet`
 FROM b1.tbl_projets T0 ORDER BY  T0.chi_id_projet DESC  LIMIT 1 OFFSET 0 
;',NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets',NULL);


/*
  ===============================
  DONNEES A INSERER POUR : tbl_genres
  ===============================
*/

INSERT INTO tbl_genres (chi_id_genre,
chp_nom_genre,
che_ordre_genre,
chp_prefixe_genre,
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
cht_fonctions_genre,
che_est_nur_genre,
che_est_tsm_genre,
che_est_tsc_genre,
chd__dtc_genre,
chd__dtm_genre,
che__nur_genre,
che_est_session_genre,
chp_nom_en_session_genre,
che_est_positif_genre,
cht_particularités_genre) VALUES
('1','***indéfini***','31','cht','TEXT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('2','id primaire non nulle','1','chi','INTEGER',NULL,'1','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2025-09-25 16:55:08.841','18','0',NULL,'1',NULL),
('3','varchar 64 NON NULLE','2','chp','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('4','lien NON NULL','5','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('5','zero_un non nulle à 0','14','che','INTEGER',NULL,'0','0','1','1','0','0','1','0,1',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('6','texte NULL','11','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('7','entier NULL','9','che','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('8','lien NULL','6','chx','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('9','entier NON NULL','7','che','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('10','entier NON NULL à zéro','8','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('11','texte NON NULL','10','cht','TEXT',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('12','varchar 64 NULL','3','chp','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('13','mot de passe','18','chp','VARCHAR','256','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('14','dt23 création','15','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('15','nur','19','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'1','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('16','dt23 modification','16','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('17','varchar 255 NON NULLE','4','chp','VARCHAR','255','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('18','id utilisateur','20','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2025-09-06 14:10:54.357','2025-10-04 07:03:24.668','8','1','chi_id_utilisateur','0',NULL),
('19','nom technique','17','cht','VARCHAR','128','0','0','1','0','0',NULL,'0',NULL,'test_du_nom_technique1()','0','0','0','2025-11-19 11:20:36.052','2025-11-19 11:56:43.547','3','0',NULL,'0',NULL),
('97','texte NULL source_non_rev','13','cht','TEXT','','0','0','0','1','0','NULL','0','','','0','0','0','2025-10-21 10:14:55.512','2025-10-21 10:14:55.512','0','0','','0','source_non_rev(1)'),
('98','texte NULL source_au_format_rev','12','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2025-10-20 17:48:22.207','2025-10-21 09:41:32.943','5','0',NULL,'0','source_au_format_rev(1)'),
('99','priorité','21','che','INTEGER','2','0','0','1','1','0','0','0',NULL,'entier_compris_entre(0,99)','0','0','0','2025-09-06 09:19:20.196','2025-09-06 09:19:20.196','0','0',NULL,'0',NULL),
('101','espèce','23','chp','VARCHAR','64','0','0','1','1','1','TEXT','1','TEXT,VARCHAR,INTEGER,FLOAT,DECIMAL',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('102','préfixe','22','chp','VARCHAR','3','0','0','1','1','1','cht','1','cht,chi,che,chx,chp,chd,chu','doit_contenir_n_caracteres(3)','0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('103','type_requete','24','chp','VARCHAR','64','0','0','1','1','1','liste_ecran','1','liste_ecran,insert,select,update,delete,requete_manuelle',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('104','fournisseur bdd','25','chp','VARCHAR','64','0','0','1','1','1','sqlite','1','sqlite,mysql',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('105','type_rev','26','chp','VARCHAR','1','0','0','1','0','0','i','1','i,c,f',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('106','nom de fichier','28','chp','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,'test_du_nom_de_fichier1()','0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('107','fonctions de champ','29','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,'test_fonctions_de_c_fonctions1()','0','0','0','2000-01-01 00:00:00.000','2025-10-03 18:16:54.710','3','0',NULL,'0',NULL),
('108','nom de dossier','27','chp','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,'test_du_nom_de_fichier1()','0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('109','id projet','30','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2025-09-07 09:46:49.711','2025-09-07 09:49:26.741','1','1','chi_id_projet','0',NULL);

/*
  ============================
  3°) à la fin les index
  ============================
*/

CREATE UNIQUE INDEX idx_ligne_rev ON `tbl_revs` 
        /* meta(nom_de_l_index(idx_ligne_rev),genre_meta(index_de_table),message('')) */
         ( `chp_provenance_rev` , `chx_source_rev` , `chi_id_rev` ) ;

CREATE UNIQUE INDEX idx_projet_et_nom_dossiers ON `tbl_dossiers` 
        /* meta(nom_de_l_index(idx_projet_et_nom_dossiers),genre_meta(index_de_table),message('Ce dossier existe déjà')) */
         ( `chp_nom_dossier` , `chx_parent_dossier` ) ;

CREATE UNIQUE INDEX idx_nom_groupe ON `tbl_groupes` 
        /* meta(nom_de_l_index(idx_nom_groupe),genre_meta(index_de_table),message('ce nom de groupe existe')) */
         ( `chp_nom_groupe` ) ;

CREATE UNIQUE INDEX idx_nom_metier ON `tbl_metiers` 
        /* meta(nom_de_l_index(idx_nom_metier),genre_meta(index_de_table),message('')) */
         ( `chp_nom_metier` ) ;

CREATE UNIQUE INDEX idx_acces_grp_metier ON `tbl_acces` 
        /* meta(nom_de_l_index(idx_acces_grp_metier),genre_meta(index_de_table),message('')) */
         ( `chx_groupe_acces` , `chx_metier_acces` ) ;

CREATE UNIQUE INDEX idx_nom_unique_projets ON `tbl_projets` 
        /* meta(nom_de_l_index(idx_nom_unique_projets),genre_meta(index_de_table),message('ce projet existe déjà')) */
         ( `chp_nom_projet` ) ;

CREATE UNIQUE INDEX idx_nom_unique_utilisateurs ON `tbl_utilisateurs` 
        /* meta(nom_de_l_index(idx_nom_unique_utilisateurs),genre_meta(index_de_table),message('Ce nom d\'utilisateur existe déjà')) */
         ( `chp_nom_de_connexion_utilisateur` ) ;

CREATE UNIQUE INDEX idx_source ON `tbl_sources` 
        /* meta(nom_de_l_index(idx_source),genre_meta(index_de_table),message('')) */
         ( `chx_dossier_id_source` , `chp_nom_source` ) ;

CREATE UNIQUE INDEX idx_texte_unique_taches ON `tbl_taches` 
        /* meta(nom_de_l_index(idx_texte_unique_taches),genre_meta(index_de_table),message('Cete tache existe déjà')) */
         ( `chp_texte_tache` ) ;

CREATE UNIQUE INDEX idx_unique1 ON `tbl_autorisations` 
        /* meta(nom_de_l_index(idx_unique1),genre_meta(index_de_table),message('')) */
         ( `chx_acces_autorisation` , `chx_source_autorisation` ) ;

