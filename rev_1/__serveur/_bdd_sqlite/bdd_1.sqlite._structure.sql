CREATE TABLE tbl_utilisateurs(
/*
 meta(nom_de_la_table( 'tbl_utilisateurs'),table( 'tbl_utilisateurs'),genre_meta(table_de_base),nom_long_de_la_table( 'liste des utilisateurs'),nom_court_de_la_table( 'un utilisateur'),nom_bref_de_la_table( 'utilisateurs'),transform_table_sur_svg( translate( 9.5 , 500.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_utilisateur'),champ( 'chi_id_utilisateur'),nom_long_du_champ( 'à faire chi_id_utilisateur'),nom_court_du_champ( 'à faire chi_id_utilisateur'),nom_bref_du_champ( 'à faire chi_id_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_utilisateur INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nom_de_connexion_utilisateur'),champ( 'chp_nom_de_connexion_utilisateur'),nom_long_du_champ( 'à faire chp_nom_de_connexion_utilisateur'),nom_court_du_champ( 'à faire chp_nom_de_connexion_utilisateur'),nom_bref_du_champ( 'à faire chp_nom_de_connexion_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_de_connexion_utilisateur VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_mot_de_passe_utilisateur'),champ( 'chp_mot_de_passe_utilisateur'),nom_long_du_champ( 'à faire chp_mot_de_passe_utilisateur'),nom_court_du_champ( 'à faire chp_mot_de_passe_utilisateur'),nom_bref_du_champ( 'à faire chp_mot_de_passe_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_mot_de_passe_utilisateur VARCHAR(256) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_parametres_utilisateur'),champ( 'chp_parametres_utilisateur'),nom_long_du_champ( 'à faire chp_parametres_utilisateur'),nom_court_du_champ( 'à faire chp_parametres_utilisateur'),nom_bref_du_champ( 'à faire chp_parametres_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_parametres_utilisateur TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_compteur1_utilisateur'),champ( 'chi_compteur1_utilisateur'),nom_long_du_champ( 'à faire chi_compteur1_utilisateur'),nom_court_du_champ( 'à faire chi_compteur1_utilisateur'),nom_bref_du_champ( 'à faire chi_compteur1_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_compteur1_utilisateur integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_compteur_socket1_utilisateur'),champ( 'chi_compteur_socket1_utilisateur'),nom_long_du_champ( 'à faire chi_compteur_socket1_utilisateur'),nom_court_du_champ( 'à faire chi_compteur_socket1_utilisateur'),nom_bref_du_champ( 'à faire chi_compteur_socket1_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_compteur_socket1_utilisateur integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che__nur_utilisateur'),champ( 'che__nur_utilisateur'),nom_long_du_champ( 'à faire chi__nut_utilisateur'),nom_court_du_champ( 'à faire chi__nut_utilisateur'),nom_bref_du_champ( 'à faire chi__nut_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_utilisateur integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtm_utilisateur'),champ( 'chp__dtm_utilisateur'),nom_long_du_champ( 'à faire chp__dtm_utilisateur'),nom_court_du_champ( 'à faire chp__dtm_utilisateur'),nom_bref_du_champ( 'à faire chp__dtm_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtc_utilisateur'),champ( 'chp__dtc_utilisateur'),nom_long_du_champ( 'à faire chp__dtc_utilisateur'),nom_court_du_champ( 'à faire chp__dtc_utilisateur'),nom_bref_du_champ( 'à faire chp__dtc_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_taches(
/*
 meta(nom_de_la_table( 'tbl_taches'),table( 'tbl_taches'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 301.5 , 574.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_tache'),champ( 'chi_id_tache'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_tache integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_utilisateur_tache'),champ( 'chx_utilisateur_tache'),nom_long_du_champ( 'à faire chx_utilisateur_tache'),nom_court_du_champ( 'à faire chx_utilisateur_tache'),nom_bref_du_champ( 'à faire chx_utilisateur_tache'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chx_utilisateur_tache integer NOT NULL REFERENCES tbl_utilisateurs(chi_id_utilisateur) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_texte_tache'),champ( 'chp_texte_tache'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_texte_tache text NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_priorite_tache'),champ( 'chp_priorite_tache'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_priorite_tache integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che__nur_tache'),champ( 'che__nur_tache'),nom_long_du_champ( 'à faire chi__nut_tache'),nom_court_du_champ( 'à faire chi__nut_tache'),nom_bref_du_champ( 'à faire chi__nut_tache'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_tache integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtm_tache'),champ( 'chp__dtm_tache'),nom_long_du_champ( 'à faire chp__dtm_tache'),nom_court_du_champ( 'à faire chp__dtm_tache'),nom_bref_du_champ( 'à faire chp__dtm_tache'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtc_tache'),champ( 'chp__dtc_tache'),nom_long_du_champ( 'à faire chp__dtc_tache'),nom_court_du_champ( 'à faire chp__dtc_tache'),nom_bref_du_champ( 'à faire chp__dtc_tache'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_projets(
/*
 meta(nom_de_la_table( 'tbl_projets'),table( 'tbl_projets'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 2.5 , 22.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_projet'),champ( 'chi_id_projet'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_projet integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nom_projet'),champ( 'chp_nom_projet'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_projet text NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_commentaire_projet'),champ( 'chp_commentaire_projet'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(0)
            )
            */
             chp_commentaire_projet text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che__nur_projet'),champ( 'che__nur_projet'),nom_long_du_champ( 'à faire chi__nut_projet'),nom_court_du_champ( 'à faire chi__nut_projet'),nom_bref_du_champ( 'à faire chi__nut_projet'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_projet integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtm_projet'),champ( 'chp__dtm_projet'),nom_long_du_champ( 'à faire chp__dtm_projet'),nom_court_du_champ( 'à faire chp__dtm_projet'),nom_bref_du_champ( 'à faire chp__dtm_projet'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtc_projet'),champ( 'chp__dtc_projet'),nom_long_du_champ( 'à faire chp__dtc_projet'),nom_court_du_champ( 'à faire chp__dtc_projet'),nom_bref_du_champ( 'à faire chp__dtc_projet'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_dossier_requetes_projet'),champ( 'chx_dossier_requetes_projet'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_dossier_requetes_projet INTEGER REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  NULL 
    );

CREATE TABLE tbl_test(
/*
 meta(nom_de_la_table( 'tbl_test'),table( 'tbl_test'),genre_meta(table_de_base),default_charset( 'utf8mb4'),collate( 'utf8mb4_unicode_ci'),nom_long_de_la_table( 'à faire tbl_xxxx_y'),nom_court_de_la_table( 'à faire tbl_xxxx_y'),nom_bref_de_la_table( 'à faire tbl_xxxx_y'),transform_table_sur_svg( translate( 666.5 , 629.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_y'),champ( 'chi_id_y'),nom_long_du_champ( 'à faire ...'),nom_court_du_champ( 'à faire ...'),nom_bref_du_champ( 'à faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_y INTEGER PRIMARY KEY  AUTOINCREMENT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_parent_y'),champ( 'chx_parent_y'),nom_long_du_champ( 'à faire ...'),nom_court_du_champ( 'à faire ...'),nom_bref_du_champ( 'à faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chx_parent_y INTEGER REFERENCES tbl_test(chi_id_y) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_titre_y'),champ( 'chp_titre_y'),nom_long_du_champ( 'à faire ...'),nom_court_du_champ( 'à faire ...'),nom_bref_du_champ( 'à faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_titre_y VARCHAR DEFAULT  'l''élément'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_c'),champ( 'chi_id_c'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_c integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_d'),champ( 'chi_id_d'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_d integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtm_y'),champ( 'chp__dtm_y'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chp),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_y VARCHAR(23) DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_requetes(
/*
 meta(nom_de_la_table( 'tbl_requetes'),table( 'tbl_requetes'),genre_meta(table_de_base),nom_long_de_la_table( 'AFR tbl_requetes'),nom_court_de_la_table( 'AFR tbl_requetes'),nom_bref_de_la_table( 'AFR tbl_requetes'),transform_table_sur_svg( translate( 67.5 , 230.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_requete'),champ( 'chi_id_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_requete integer PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_projet_requete'),champ( 'chx_projet_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_projet_requete integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_type_requete'),champ( 'chp_type_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_type_requete VARCHAR(64) NOT NULL DEFAULT  'select'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'cht_rev_requete'),champ( 'cht_rev_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_rev_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'cht_sql_requete'),champ( 'cht_sql_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_sql_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'cht_php_requete'),champ( 'cht_php_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_php_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'cht_commentaire_requete'),champ( 'cht_commentaire_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(cht),afficher_champ_dans_svg(0)
            )
            */
             cht_commentaire_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'cht_matrice_requete'),champ( 'cht_matrice_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_matrice_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che__nur_requete'),champ( 'che__nur_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_requete integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtm_requete'),champ( 'chp__dtm_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtc_requete'),champ( 'chp__dtc_requete'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_revs(
/*
 meta(nom_de_la_table( 'tbl_revs'),table( 'tbl_revs'),genre_meta(table_de_base),nom_long_de_la_table( 'à faire tbl_revs'),nom_court_de_la_table( 'à faire tbl_revs'),nom_bref_de_la_table( 'à faire tbl_revs'),transform_table_sur_svg( translate( 283.5 , 179.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_rev'),champ( 'chi_id_rev'),nom_long_du_champ( 'à faire chi_id_rev'),nom_court_du_champ( 'à faire chi_id_rev'),nom_bref_du_champ( 'à faire chi_id_rev'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_rev integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_projet_rev'),champ( 'chx_projet_rev'),nom_long_du_champ( 'à faire chx_cible_rev'),nom_court_du_champ( 'à faire chx_cible_rev'),nom_bref_du_champ( 'à faire chx_cible_rev'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_projet_rev integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_provenance_rev'),champ( 'chp_provenance_rev'),nom_long_du_champ( 'à faire chp_provenance_rev'),nom_court_du_champ( 'à faire chp_provenance_rev'),nom_bref_du_champ( 'à faire chp_provenance_rev'),
            typologie(cho),afficher_champ_dans_svg(1)
            )
            */
             chp_provenance_rev VARCHAR(64)
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_source_rev'),champ( 'chx_source_rev'),nom_long_du_champ( 'à faire chx_source_rev'),nom_court_du_champ( 'à faire chx_source_rev'),nom_bref_du_champ( 'à faire chx_source_rev'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_source_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_id_rev'),champ( 'chp_id_rev'),nom_long_du_champ( 'à faire chp_id_rev'),nom_court_du_champ( 'à faire chp_id_rev'),nom_bref_du_champ( 'à faire chp_id_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_id_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_valeur_rev'),champ( 'chp_valeur_rev'),nom_long_du_champ( 'à faire chp_valeur_rev'),nom_court_du_champ( 'à faire chp_valeur_rev'),nom_bref_du_champ( 'à faire chp_valeur_rev'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_valeur_rev text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_type_rev'),champ( 'chp_type_rev'),nom_long_du_champ( 'à faire chp_type_rev'),nom_court_du_champ( 'à faire chp_type_rev'),nom_bref_du_champ( 'à faire chp_type_rev'),
            typologie(cho),afficher_champ_dans_svg(1)
            )
            */
             chp_type_rev VARCHAR(3) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_niveau_rev'),champ( 'chp_niveau_rev'),nom_long_du_champ( 'à faire chp_niveau_rev'),nom_court_du_champ( 'à faire chp_niveau_rev'),nom_bref_du_champ( 'à faire chp_niveau_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_niveau_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_quotee_rev'),champ( 'chp_quotee_rev'),nom_long_du_champ( 'à faire chp_quotee_rev'),nom_court_du_champ( 'à faire chp_quotee_rev'),nom_bref_du_champ( 'à faire chp_quotee_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_quotee_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_pos_premier_rev'),champ( 'chp_pos_premier_rev'),nom_long_du_champ( 'à faire chp_pos_premier_rev'),nom_court_du_champ( 'à faire chp_pos_premier_rev'),nom_bref_du_champ( 'à faire chp_pos_premier_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_pos_premier_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_pos_dernier_rev'),champ( 'chp_pos_dernier_rev'),nom_long_du_champ( 'à faire chp_pos_dernier_rev'),nom_court_du_champ( 'à faire chp_pos_dernier_rev'),nom_bref_du_champ( 'à faire chp_pos_dernier_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_pos_dernier_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_parent_rev'),champ( 'chp_parent_rev'),nom_long_du_champ( 'à faire chp_parent_rev'),nom_court_du_champ( 'à faire chp_parent_rev'),nom_bref_du_champ( 'à faire chp_parent_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_parent_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nbr_enfants_rev'),champ( 'chp_nbr_enfants_rev'),nom_long_du_champ( 'à faire chp_nbr_enfants_rev'),nom_court_du_champ( 'à faire chp_nbr_enfants_rev'),nom_bref_du_champ( 'à faire chp_nbr_enfants_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_nbr_enfants_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_num_enfant_rev'),champ( 'chp_num_enfant_rev'),nom_long_du_champ( 'à faire chp_num_enfant_rev'),nom_court_du_champ( 'à faire chp_num_enfant_rev'),nom_bref_du_champ( 'à faire chp_num_enfant_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_num_enfant_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_profondeur_rev'),champ( 'chp_profondeur_rev'),nom_long_du_champ( 'à faire chp_profondeur_rev'),nom_court_du_champ( 'à faire chp_profondeur_rev'),nom_bref_du_champ( 'à faire chp_profondeur_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_profondeur_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_pos_ouver_parenthese_rev'),champ( 'chp_pos_ouver_parenthese_rev'),nom_long_du_champ( 'à faire chp_pos_ouver_parenthese_rev'),nom_court_du_champ( 'à faire chp_pos_ouver_parenthese_rev'),nom_bref_du_champ( 'à faire chp_pos_ouver_parenthese_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_pos_ouver_parenthese_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_enfant_suivant_rev'),champ( 'chp_enfant_suivant_rev'),nom_long_du_champ( 'AFR'),nom_court_du_champ( 'AFR'),nom_bref_du_champ( 'AFR'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_enfant_suivant_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_commentaire_rev'),champ( 'chp_commentaire_rev'),nom_long_du_champ( 'à faire chp_commentaire_rev'),nom_court_du_champ( 'à faire chp_commentaire_rev'),nom_bref_du_champ( 'à faire chp_commentaire_rev'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_commentaire_rev text
    );

CREATE TABLE tbl_sources(
/*
 meta(nom_de_la_table( 'tbl_sources'),table( 'tbl_sources'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 563.5 , 170.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_source'),champ( 'chi_id_source'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_source integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_projet_id_source'),champ( 'chx_projet_id_source'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chx_projet_id_source integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nom_source'),champ( 'chp_nom_source'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_source TEXT NOT NULL DEFAULT  ''
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'cht_commentaire_source'),champ( 'cht_commentaire_source'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(0)
            )
            */
             cht_commentaire_source text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'cht_rev_source'),champ( 'cht_rev_source'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             cht_rev_source text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'cht_genere_source'),champ( 'cht_genere_source'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             cht_genere_source text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che_binaire_source'),champ( 'che_binaire_source'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             che_binaire_source integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che__nur_source'),champ( 'che__nur_source'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_source integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtm_source'),champ( 'chp__dtm_source'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtc_source'),champ( 'chp__dtc_source'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_dossier_id_source'),champ( 'chx_dossier_id_source'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_dossier_id_source integer REFERENCES tbl_dossiers(chi_id_dossier) 
    );

CREATE TABLE tbl_dossiers(
/*
 meta(nom_de_la_table( 'tbl_dossiers'),table( 'tbl_dossiers'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 301.5 , 9.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_dossier'),champ( 'chi_id_dossier'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_dossier integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_projet_dossier'),champ( 'chx_projet_dossier'),nom_long_du_champ( 'à faire chx_projet_dossier'),nom_court_du_champ( 'à faire chx_projet_dossier'),nom_bref_du_champ( 'à faire chx_projet_dossier'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chx_projet_dossier integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nom_dossier'),champ( 'chp_nom_dossier'),nom_long_du_champ( 'à faire chp_nom_dossier'),nom_court_du_champ( 'à faire chp_nom_dossier'),nom_bref_du_champ( 'à faire chp_nom_dossier'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_dossier CHARACTER(64)
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_parent_dossier'),champ( 'chx_parent_dossier'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chx_parent_dossier integer REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che_contient_genere_dossier'),champ( 'che_contient_genere_dossier'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             che_contient_genere_dossier integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che__nur_dossier'),champ( 'che__nur_dossier'),nom_long_du_champ( 'à faire chi__nut_dossier'),nom_court_du_champ( 'à faire chi__nut_dossier'),nom_bref_du_champ( 'à faire chi__nut_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_dossier integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtm_dossier'),champ( 'chp__dtm_dossier'),nom_long_du_champ( 'à faire chp__dtm_dossier'),nom_court_du_champ( 'à faire chp__dtm_dossier'),nom_bref_du_champ( 'à faire chp__dtm_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtc_dossier'),champ( 'chp__dtc_dossier'),nom_long_du_champ( 'à faire chp__dtc_dossier'),nom_court_du_champ( 'à faire chp__dtc_dossier'),nom_bref_du_champ( 'à faire chp__dtc_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_bdds(
/*
 meta(nom_de_la_table( 'tbl_bdds'),table( 'tbl_bdds'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 570.5 , 370.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_basedd'),champ( 'chi_id_basedd'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_basedd integer PRIMARY KEY  AUTOINCREMENT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_projet_id_basedd'),champ( 'chx_projet_id_basedd'),nom_long_du_champ( 'à faire chx_projet_id_basedd'),nom_court_du_champ( 'à faire chx_projet_id_basedd'),nom_bref_du_champ( 'à faire chx_projet_id_basedd'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chx_projet_id_basedd integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_rev_basedd'),champ( 'chp_rev_basedd'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_rev_basedd text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_commentaire_basedd'),champ( 'chp_commentaire_basedd'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_commentaire_basedd text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_genere_basedd'),champ( 'chp_genere_basedd'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_genere_basedd text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_rev_travail_basedd'),champ( 'chp_rev_travail_basedd'),nom_long_du_champ( ''),nom_court_du_champ( ''),nom_bref_du_champ( ''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_rev_travail_basedd text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_fournisseur_basedd'),champ( 'chp_fournisseur_basedd'),nom_long_du_champ( 'à faire chp_fournisseur_basedd'),nom_court_du_champ( 'à faire chp_fournisseur_basedd'),nom_bref_du_champ( 'à faire chp_fournisseur_basedd'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chp_fournisseur_basedd text DEFAULT  'sqlite'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_dossier_id_basedd'),champ( 'chx_dossier_id_basedd'),nom_long_du_champ( 'AFR ...'),nom_court_du_champ( 'AFR ...'),nom_bref_du_champ( 'AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_dossier_id_basedd integer REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'che__nur_basedd'),champ( 'che__nur_basedd'),nom_long_du_champ( 'à faire chi__nut_basedd'),nom_court_du_champ( 'à faire chi__nut_basedd'),nom_bref_du_champ( 'à faire chi__nut_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_basedd integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtm_basedd'),champ( 'chp__dtm_basedd'),nom_long_du_champ( 'à faire chp__dtm_basedd'),nom_court_du_champ( 'à faire chp__dtm_basedd'),nom_bref_du_champ( 'à faire chp__dtm_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp__dtc_basedd'),champ( 'chp__dtc_basedd'),nom_long_du_champ( 'à faire chp__dtc_basedd'),nom_court_du_champ( 'à faire chp__dtc_basedd'),nom_bref_du_champ( 'à faire chp__dtc_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

