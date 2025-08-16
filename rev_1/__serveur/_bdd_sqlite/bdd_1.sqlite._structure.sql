CREATE TABLE tbl_utilisateurs(
/*
 meta(nom_de_la_table('tbl_utilisateurs'),table('tbl_utilisateurs'),genre_meta(table_de_base),nom_long_de_la_table('liste des utilisateurs'),nom_court_de_la_table('un utilisateur'),nom_bref_de_la_table('utilisateurs'),transform_table_sur_svg(translate(565.5,455.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_utilisateur'),nom_long_du_champ('à faire chi_id_utilisateur'),nom_court_du_champ('à faire chi_id_utilisateur'),nom_bref_du_champ('à faire chi_id_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_utilisateur INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_de_connexion_utilisateur'),nom_long_du_champ('à faire chp_nom_de_connexion_utilisateur'),nom_court_du_champ('à faire chp_nom_de_connexion_utilisateur'),nom_bref_du_champ('à faire chp_nom_de_connexion_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_de_connexion_utilisateur VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_mot_de_passe_utilisateur'),nom_long_du_champ('à faire chp_mot_de_passe_utilisateur'),nom_court_du_champ('à faire chp_mot_de_passe_utilisateur'),nom_bref_du_champ('à faire chp_mot_de_passe_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(256)
            )
            */
             chp_mot_de_passe_utilisateur VARCHAR(256)
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_parametres_utilisateur'),nom_long_du_champ('à faire chp_parametres_utilisateur'),nom_court_du_champ('à faire chp_parametres_utilisateur'),nom_bref_du_champ('à faire chp_parametres_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_parametres_utilisateur TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_compteur1_utilisateur'),nom_long_du_champ('à faire chi_compteur1_utilisateur'),nom_court_du_champ('à faire chi_compteur1_utilisateur'),nom_bref_du_champ('à faire chi_compteur1_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_compteur1_utilisateur INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_compteur_socket1_utilisateur'),nom_long_du_champ('à faire chi_compteur_socket1_utilisateur'),nom_court_du_champ('à faire chi_compteur_socket1_utilisateur'),nom_bref_du_champ('à faire chi_compteur_socket1_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_compteur_socket1_utilisateur INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_utilisateur'),nom_long_du_champ('à faire chi__nut_utilisateur'),nom_court_du_champ('à faire chi__nut_utilisateur'),nom_bref_du_champ('à faire chi__nut_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(INTEGER),champ_numero_de_revision(1)
            )
            */
             che__nur_utilisateur INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_utilisateur'),nom_long_du_champ('à faire chp__dtm_utilisateur'),nom_court_du_champ('à faire chp__dtm_utilisateur'),nom_bref_du_champ('à faire chp__dtm_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_modification(1),longueur_du_champ(23)
            )
            */
             chp__dtm_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_utilisateur'),nom_long_du_champ('à faire chp__dtc_utilisateur'),nom_court_du_champ('à faire chp__dtc_utilisateur'),nom_bref_du_champ('à faire chp__dtc_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_creation(1),longueur_du_champ(23)
            )
            */
             chp__dtc_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_acces_utilisateur'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_acces_utilisateur INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces)  DEFAULT  2
    );

CREATE TABLE tbl_projets(
/*
 meta(nom_de_la_table('tbl_projets'),table('tbl_projets'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(272.5,9.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_projet'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_projet INTEGER PRIMARY KEY
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_projet'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_nom_projet TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_commentaire_projet'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_commentaire_projet TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_projet'),nom_long_du_champ('à faire chi__nut_projet'),nom_court_du_champ('à faire chi__nut_projet'),nom_bref_du_champ('à faire chi__nut_projet'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(INTEGER),champ_numero_de_revision(1)
            )
            */
             che__nur_projet INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_projet'),nom_long_du_champ('à faire chp__dtm_projet'),nom_court_du_champ('à faire chp__dtm_projet'),nom_bref_du_champ('à faire chp__dtm_projet'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_modification(1),longueur_du_champ(23)
            )
            */
             chp__dtm_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_projet'),nom_long_du_champ('à faire chp__dtc_projet'),nom_court_du_champ('à faire chp__dtc_projet'),nom_bref_du_champ('à faire chp__dtc_projet'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_creation(1),longueur_du_champ(23)
            )
            */
             chp__dtc_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_dossier_requetes_projet'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER),refe_parent_gauche(1)
            )
            */
             chx_dossier_requetes_projet INTEGER REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_dossier_menus_projet'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER),refe_parent_gauche(1)
            )
            */
             chx_dossier_menus_projet INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    );

CREATE TABLE tbl_requetes(
/*
 meta(nom_de_la_table('tbl_requetes'),table('tbl_requetes'),genre_meta(table_de_base),nom_long_de_la_table('AFR tbl_requetes'),nom_court_de_la_table('AFR tbl_requetes'),nom_bref_de_la_table('AFR tbl_requetes'),transform_table_sur_svg(translate(13.5,29.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_requete INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER),refe_enfant_droite(1),refe_parent_gauche(1)
            )
            */
             chx_projet_requete INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_type_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_type_requete VARCHAR(64) NOT NULL DEFAULT  'select'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_rev_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_rev_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_sql_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_sql_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_php_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_php_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_commentaire_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(0),espece_du_champ(TEXT)
            )
            */
             cht_commentaire_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_matrice_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_matrice_requete TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(INTEGER),champ_numero_de_revision(1)
            )
            */
             che__nur_requete INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_modification(1),longueur_du_champ(23)
            )
            */
             chp__dtm_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_creation(1),longueur_du_champ(23)
            )
            */
             chp__dtc_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_revs(
/*
 meta(nom_de_la_table('tbl_revs'),table('tbl_revs'),genre_meta(table_de_base),nom_long_de_la_table('à faire tbl_revs'),nom_court_de_la_table('à faire tbl_revs'),nom_bref_de_la_table('à faire tbl_revs'),transform_table_sur_svg(translate(813.5,17.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_rev'),nom_long_du_champ('à faire chi_id_rev'),nom_court_du_champ('à faire chi_id_rev'),nom_bref_du_champ('à faire chi_id_rev'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_rev INTEGER PRIMARY KEY
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_rev'),nom_long_du_champ('à faire chx_cible_rev'),nom_court_du_champ('à faire chx_cible_rev'),nom_bref_du_champ('à faire chx_cible_rev'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_projet_rev INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_provenance_rev'),nom_long_du_champ('à faire chp_provenance_rev'),nom_court_du_champ('à faire chp_provenance_rev'),nom_bref_du_champ('à faire chp_provenance_rev'),
            typologie(cho),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_provenance_rev VARCHAR(64)
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_source_rev'),nom_long_du_champ('à faire chx_source_rev'),nom_court_du_champ('à faire chx_source_rev'),nom_bref_du_champ('à faire chx_source_rev'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_source_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_id_rev'),nom_long_du_champ('à faire chp_id_rev'),nom_court_du_champ('à faire chp_id_rev'),nom_bref_du_champ('à faire chp_id_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_id_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_valeur_rev'),nom_long_du_champ('à faire chp_valeur_rev'),nom_court_du_champ('à faire chp_valeur_rev'),nom_bref_du_champ('à faire chp_valeur_rev'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_valeur_rev TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_type_rev'),nom_long_du_champ('à faire chp_type_rev'),nom_court_du_champ('à faire chp_type_rev'),nom_bref_du_champ('à faire chp_type_rev'),
            typologie(cho),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(3)
            )
            */
             chp_type_rev VARCHAR(3) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_niveau_rev'),nom_long_du_champ('à faire chp_niveau_rev'),nom_court_du_champ('à faire chp_niveau_rev'),nom_bref_du_champ('à faire chp_niveau_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_niveau_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_quotee_rev'),nom_long_du_champ('à faire chp_quotee_rev'),nom_court_du_champ('à faire chp_quotee_rev'),nom_bref_du_champ('à faire chp_quotee_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_quotee_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_pos_premier_rev'),nom_long_du_champ('à faire chp_pos_premier_rev'),nom_court_du_champ('à faire chp_pos_premier_rev'),nom_bref_du_champ('à faire chp_pos_premier_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_pos_premier_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_pos_dernier_rev'),nom_long_du_champ('à faire chp_pos_dernier_rev'),nom_court_du_champ('à faire chp_pos_dernier_rev'),nom_bref_du_champ('à faire chp_pos_dernier_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_pos_dernier_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_parent_rev'),nom_long_du_champ('à faire chp_parent_rev'),nom_court_du_champ('à faire chp_parent_rev'),nom_bref_du_champ('à faire chp_parent_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_parent_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nbr_enfants_rev'),nom_long_du_champ('à faire chp_nbr_enfants_rev'),nom_court_du_champ('à faire chp_nbr_enfants_rev'),nom_bref_du_champ('à faire chp_nbr_enfants_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_nbr_enfants_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_num_enfant_rev'),nom_long_du_champ('à faire chp_num_enfant_rev'),nom_court_du_champ('à faire chp_num_enfant_rev'),nom_bref_du_champ('à faire chp_num_enfant_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_num_enfant_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_profondeur_rev'),nom_long_du_champ('à faire chp_profondeur_rev'),nom_court_du_champ('à faire chp_profondeur_rev'),nom_bref_du_champ('à faire chp_profondeur_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_profondeur_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_pos_ouver_parenthese_rev'),nom_long_du_champ('à faire chp_pos_ouver_parenthese_rev'),nom_court_du_champ('à faire chp_pos_ouver_parenthese_rev'),nom_bref_du_champ('à faire chp_pos_ouver_parenthese_rev'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_pos_ouver_parenthese_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_enfant_suivant_rev'),nom_long_du_champ('AFR'),nom_court_du_champ('AFR'),nom_bref_du_champ('AFR'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_enfant_suivant_rev INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_commentaire_rev'),nom_long_du_champ('à faire chp_commentaire_rev'),nom_court_du_champ('à faire chp_commentaire_rev'),nom_bref_du_champ('à faire chp_commentaire_rev'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_commentaire_rev TEXT
    );

CREATE TABLE tbl_sources(
/*
 meta(nom_de_la_table('tbl_sources'),table('tbl_sources'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(606.5,75.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_source INTEGER PRIMARY KEY
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_id_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_projet_id_source INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_nom_source TEXT NOT NULL DEFAULT  ''
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_commentaire_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(0),espece_du_champ(TEXT)
            )
            */
             cht_commentaire_source TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_rev_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_rev_source TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_genere_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_genere_source TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_binaire_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             che_binaire_source INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(INTEGER),champ_numero_de_revision(1)
            )
            */
             che__nur_source INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_modification(1),longueur_du_champ(23)
            )
            */
             chp__dtm_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_creation(1),longueur_du_champ(23)
            )
            */
             chp__dtc_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_dossier_id_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_dossier_id_source INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    );

CREATE TABLE tbl_dossiers(
/*
 meta(nom_de_la_table('tbl_dossiers'),table('tbl_dossiers'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(271.5,153.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_dossier'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_dossier INTEGER PRIMARY KEY
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_dossier'),nom_long_du_champ('à faire chx_projet_dossier'),nom_court_du_champ('à faire chx_projet_dossier'),nom_bref_du_champ('à faire chx_projet_dossier'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER),refe_enfant_droite(1)
            )
            */
             chx_projet_dossier INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_dossier'),nom_long_du_champ('à faire chp_nom_dossier'),nom_court_du_champ('à faire chp_nom_dossier'),nom_bref_du_champ('à faire chp_nom_dossier'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(CHARACTER),longueur_du_champ(64)
            )
            */
             chp_nom_dossier CHARACTER(64)
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_parent_dossier'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(INTEGER),refe_parent_gauche(1)
            )
            */
             chx_parent_dossier INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_contient_genere_dossier'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             che_contient_genere_dossier INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_dossier'),nom_long_du_champ('à faire chi__nut_dossier'),nom_court_du_champ('à faire chi__nut_dossier'),nom_bref_du_champ('à faire chi__nut_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(INTEGER),champ_numero_de_revision(1)
            )
            */
             che__nur_dossier INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_dossier'),nom_long_du_champ('à faire chp__dtm_dossier'),nom_court_du_champ('à faire chp__dtm_dossier'),nom_bref_du_champ('à faire chp__dtm_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_modification(1),longueur_du_champ(23)
            )
            */
             chp__dtm_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_dossier'),nom_long_du_champ('à faire chp__dtc_dossier'),nom_court_du_champ('à faire chp__dtc_dossier'),nom_bref_du_champ('à faire chp__dtc_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_creation(1),longueur_du_champ(23)
            )
            */
             chp__dtc_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_bdds(
/*
 meta(nom_de_la_table('tbl_bdds'),table('tbl_bdds'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(600.5,268.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_basedd'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_basedd INTEGER PRIMARY KEY
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_id_basedd'),nom_long_du_champ('à faire chx_projet_id_basedd'),nom_court_du_champ('à faire chx_projet_id_basedd'),nom_bref_du_champ('à faire chx_projet_id_basedd'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_projet_id_basedd INTEGER NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_commentaire_basedd'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_commentaire_basedd TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_rev_travail_basedd'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_rev_travail_basedd TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_fournisseur_basedd'),nom_long_du_champ('à faire chp_fournisseur_basedd'),nom_court_du_champ('à faire chp_fournisseur_basedd'),nom_bref_du_champ('à faire chp_fournisseur_basedd'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_fournisseur_basedd TEXT DEFAULT  'sqlite'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_dossier_id_basedd'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_dossier_id_basedd INTEGER REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_basedd'),nom_long_du_champ('à faire chi__nut_basedd'),nom_court_du_champ('à faire chi__nut_basedd'),nom_bref_du_champ('à faire chi__nut_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(INTEGER),champ_numero_de_revision(1)
            )
            */
             che__nur_basedd INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_basedd'),nom_long_du_champ('à faire chp__dtm_basedd'),nom_court_du_champ('à faire chp__dtm_basedd'),nom_bref_du_champ('à faire chp__dtm_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_modification(1),longueur_du_champ(23)
            )
            */
             chp__dtm_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_basedd'),nom_long_du_champ('à faire chp__dtc_basedd'),nom_court_du_champ('à faire chp__dtc_basedd'),nom_bref_du_champ('à faire chp__dtc_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_creation(1),longueur_du_champ(23)
            )
            */
             chp__dtc_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_groupes(
/*
 meta(nom_de_la_table('tbl_groupes'),table('tbl_groupes'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_groupes'),nom_court_de_la_table('A faire tbl_groupes'),nom_bref_de_la_table('A faire tbl_groupes'),transform_table_sur_svg(translate(10.5,205.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_groupe'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_groupe INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_groupe'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_groupe VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_parent_groupe'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_parent_groupe INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe)  DEFAULT  1
    );

CREATE TABLE tbl_metiers(
/*
 meta(nom_de_la_table('tbl_metiers'),table('tbl_metiers'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_metiers'),nom_court_de_la_table('A faire tbl_metiers'),nom_bref_de_la_table('A faire tbl_metiers'),transform_table_sur_svg(translate(10.5,313.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_metier'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_metier INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_metier'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_metier VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_parent_metier'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_parent_metier INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    );

CREATE TABLE tbl_acces(
/*
 meta(nom_de_la_table('tbl_acces'),table('tbl_acces'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_acces'),nom_court_de_la_table('A faire tbl_acces'),nom_bref_de_la_table('A faire tbl_acces'),transform_table_sur_svg(translate(188.5,310.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_acces INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_acces VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_groupe_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_groupe_acces INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_metier_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_metier_acces INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_parametres_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_parametres_acces TEXT
    );

CREATE TABLE tbl_taches(
/*
 meta(nom_de_la_table('tbl_taches'),table('tbl_taches'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(804.5,599.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_tache'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_tache INTEGER PRIMARY KEY
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_utilisateur_tache'),nom_long_du_champ('à faire chx_utilisateur_tache'),nom_court_du_champ('à faire chx_utilisateur_tache'),nom_bref_du_champ('à faire chx_utilisateur_tache'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_utilisateur_tache INTEGER NOT NULL REFERENCES tbl_utilisateurs(chi_id_utilisateur) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_texte_tache'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             chp_texte_tache TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_priorite_tache'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chp_priorite_tache INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_tache'),nom_long_du_champ('à faire chi__nut_tache'),nom_court_du_champ('à faire chi__nut_tache'),nom_bref_du_champ('à faire chi__nut_tache'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(INTEGER),champ_numero_de_revision(1)
            )
            */
             che__nur_tache INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_tache'),nom_long_du_champ('à faire chp__dtm_tache'),nom_court_du_champ('à faire chp__dtm_tache'),nom_bref_du_champ('à faire chp__dtm_tache'),
            typologie(chi),afficher_champ_dans_svg(0),espece_du_champ(VARCHAR),champ_date_modification(1),longueur_du_champ(23)
            )
            */
             chp__dtm_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_tache'),nom_long_du_champ('à faire chp__dtc_tache'),nom_court_du_champ('à faire chp__dtc_tache'),nom_bref_du_champ('à faire chp__dtc_tache'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),champ_date_creation(1),longueur_du_champ(23)
            )
            */
             chp__dtc_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_genres(
/*
 meta(nom_de_la_table('tbl_genres'),table('tbl_genres'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_genres'),nom_court_de_la_table('A faire tbl_genres'),nom_bref_de_la_table('A faire tbl_genres'),transform_table_sur_svg(translate(68.5,456.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_genre INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_nom_genre VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_espece_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(32)
            )
            */
             chp_espece_genre VARCHAR(32) NOT NULL DEFAULT  'TEXT'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_longueur_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             che_longueur_genre INTEGER
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_est_primaire_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             che_est_primaire_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_est_incrément_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             che_est_incrément_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_est_obligatoire_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             che_est_obligatoire_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_a_init_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             che_a_init_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_init_est_mot_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(che),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             che_init_est_mot_genre INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_valeur_init_genre'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_valeur_init_genre TEXT
    , chp_prefixe_genre VARCHAR(3) NOT NULL DEFAULT  'cht');

CREATE TABLE tbl_autorisations(
/*
 meta(nom_de_la_table('tbl_autorisations'),table('tbl_autorisations'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_autorisations'),nom_court_de_la_table('A faire tbl_autorisations'),nom_bref_de_la_table('A faire tbl_autorisations'),transform_table_sur_svg(translate(403.5,303.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_autorisation'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_autorisation INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_acces_autorisation'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chx_acces_autorisation INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_source_autorisation'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER),refe_enfant_droite(1),refe_parent_gauche(1)
            )
            */
             chx_source_autorisation INTEGER NOT NULL REFERENCES tbl_sources(chi_id_source) 
    );

CREATE TABLE tbl_menus(
/*
 meta(nom_de_la_table('tbl_menus'),table('tbl_menus'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_menus'),nom_court_de_la_table('A faire tbl_menus'),nom_bref_de_la_table('A faire tbl_menus'),transform_table_sur_svg(translate(372.5,464.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1),espece_du_champ(INTEGER)
            )
            */
             chi_id_menu INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_libelle_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             cht_libelle_menu VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_titre_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_titre_menu VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_autorisation_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),espece_du_champ(INTEGER),refe_parent_gauche(1)
            )
            */
             chx_autorisation_menu INTEGER NOT NULL REFERENCES tbl_autorisations(chi_id_autorisation) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_methode_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1),espece_du_champ(VARCHAR),longueur_du_champ(64)
            )
            */
             chp_methode_menu VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_initialisation_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_initialisation_menu TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_complements_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(cht),afficher_champ_dans_svg(1),espece_du_champ(TEXT)
            )
            */
             cht_complements_menu TEXT
    );

