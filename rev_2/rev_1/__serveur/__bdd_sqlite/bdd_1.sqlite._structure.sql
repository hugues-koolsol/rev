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
   distinction_pour_isad('d\'un dossier'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),
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
   distinction_pour_isad('d\'un groupe'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),
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
   distinction_pour_isad('d\'un metier'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),
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
   distinction_pour_isad('d\'un accès'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),
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
   distinction_pour_isad('d\'un projet'),fonctions_spéciales1('ne_pas_supprimer_id_un(3)'),
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
             chx_dossier_requetes_projet INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  1
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
             chx_dossier_menus_projet INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  1
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
   distinction_pour_isad('d\'un utilisateur'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),
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
   distinction_pour_isad('d\'une base de donnée'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),
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
            nom_bref_du_champ('js'),abrege_du_champ('requête au format js'),
            typologie(cht),
            genre(97),
            espece_du_champ(TEXT)
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

