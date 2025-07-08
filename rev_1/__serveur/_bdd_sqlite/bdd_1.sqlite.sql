/*
  ============================
  Il y a 3 parties dans ce fichier
  1°) au début, les créations de tables
  2°) au milieu les insertions
  3°) à la fin les index
  ============================
*/

CREATE TABLE tbl_utilisateurs(
/*
 meta(nom_de_la_table( 'tbl_utilisateurs'),table( 'tbl_utilisateurs'),genre_meta(table_de_base),nom_long_de_la_table( 'liste des utilisateurs'),nom_court_de_la_table( 'un utilisateur'),nom_bref_de_la_table( 'utilisateurs'),transform_table_sur_svg( translate( 368.5 , 373.5 ))) 
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
             chp_mot_de_passe_utilisateur VARCHAR(256)
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
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_groupe_utilisateur'),champ( 'chx_groupe_utilisateur'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_groupe_utilisateur INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe)  DEFAULT  2
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_metier_utilisateur'),champ( 'chx_metier_utilisateur'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_metier_utilisateur INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    );

CREATE TABLE tbl_taches(
/*
 meta(nom_de_la_table( 'tbl_taches'),table( 'tbl_taches'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 430.5 , 608.5 ))) 
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
            typologie(chi),afficher_champ_dans_svg(1),refe_enfant_droite(1)
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
 meta(nom_de_la_table( 'tbl_projets'),table( 'tbl_projets'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 272.5 , 10.5 ))) 
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
            typologie(chx),afficher_champ_dans_svg(1),refe_parent_gauche(1)
            )
            */
             chx_dossier_requetes_projet INTEGER REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  NULL 
    );

CREATE TABLE tbl_requetes(
/*
 meta(nom_de_la_table( 'tbl_requetes'),table( 'tbl_requetes'),genre_meta(table_de_base),nom_long_de_la_table( 'AFR tbl_requetes'),nom_court_de_la_table( 'AFR tbl_requetes'),nom_bref_de_la_table( 'AFR tbl_requetes'),transform_table_sur_svg( translate( 13.5 , 29.5 ))) 
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
            typologie(chx),afficher_champ_dans_svg(1),refe_enfant_droite(1),refe_parent_gauche(1)
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
 meta(nom_de_la_table( 'tbl_revs'),table( 'tbl_revs'),genre_meta(table_de_base),nom_long_de_la_table( 'à faire tbl_revs'),nom_court_de_la_table( 'à faire tbl_revs'),nom_bref_de_la_table( 'à faire tbl_revs'),transform_table_sur_svg( translate( 679.5 , 411.5 ))) 
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
 meta(nom_de_la_table( 'tbl_sources'),table( 'tbl_sources'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 687.5 , 39.5 ))) 
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
 meta(nom_de_la_table( 'tbl_dossiers'),table( 'tbl_dossiers'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 276.5 , 138.5 ))) 
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
            typologie(chi),afficher_champ_dans_svg(1),refe_enfant_droite(1)
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
 meta(nom_de_la_table( 'tbl_bdds'),table( 'tbl_bdds'),genre_meta(table_de_base),nom_long_de_la_table( ''),nom_court_de_la_table( ''),nom_bref_de_la_table( ''),transform_table_sur_svg( translate( 688.5 , 226.5 ))) 
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

CREATE TABLE tbl_groupes(
/*
 meta(nom_de_la_table( 'tbl_groupes'),table( 'tbl_groupes'),genre_meta(table_de_base),nom_long_de_la_table( 'A faire  tbl_groupes'),nom_court_de_la_table( 'A faire tbl_groupes'),nom_bref_de_la_table( 'A faire tbl_groupes'),transform_table_sur_svg( translate( 189.5 , 293.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_groupe'),champ( 'chi_id_groupe'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_groupe INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nom_groupe'),champ( 'chp_nom_groupe'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_groupe VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_parent_groupe'),champ( 'chx_parent_groupe'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_parent_groupe INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe)  DEFAULT  1
    );

CREATE TABLE tbl_metiers(
/*
 meta(nom_de_la_table( 'tbl_metiers'),table( 'tbl_metiers'),genre_meta(table_de_base),nom_long_de_la_table( 'A faire  tbl_metiers'),nom_court_de_la_table( 'A faire tbl_metiers'),nom_bref_de_la_table( 'A faire tbl_metiers'),transform_table_sur_svg( translate( 190.5 , 412.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_metier'),champ( 'chi_id_metier'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_metier INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nom_metier'),champ( 'chp_nom_metier'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_metier VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_parent_metier'),champ( 'chx_parent_metier'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_parent_metier INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    );

CREATE TABLE tbl_pages(
/*
 meta(nom_de_la_table( 'tbl_pages'),table( 'tbl_pages'),genre_meta(table_de_base),nom_long_de_la_table( 'A faire  tbl_pages'),nom_court_de_la_table( 'A faire tbl_pages'),nom_bref_de_la_table( 'A faire tbl_pages'),transform_table_sur_svg( translate( 15.5 , 393.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_page'),champ( 'chi_id_page'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_page INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nom_page'),champ( 'chp_nom_page'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_page VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_lien_rev_page'),champ( 'chp_lien_rev_page'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_lien_rev_page VARCHAR(256) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_parent_page'),champ( 'chx_parent_page'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),refe_parent_gauche(1)
            )
            */
             chx_parent_page INTEGER REFERENCES tbl_pages(chi_id_page) 
    );

CREATE TABLE tbl_acces(
/*
 meta(nom_de_la_table( 'tbl_acces'),table( 'tbl_acces'),genre_meta(table_de_base),nom_long_de_la_table( 'A faire  tbl_acces'),nom_court_de_la_table( 'A faire tbl_acces'),nom_bref_de_la_table( 'A faire tbl_acces'),transform_table_sur_svg( translate( 367.5 , 247.5 ))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chi_id_acces'),champ( 'chi_id_acces'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_acces INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chp_nom_acces'),champ( 'chp_nom_acces'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_acces VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_utilisateur_acces'),champ( 'chx_utilisateur_acces'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_groupe_acces INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ( 'chx_metier_acces'),champ( 'chx_metier_acces'),nom_long_du_champ( 'A faire ...'),nom_court_du_champ( 'A faire ...'),nom_bref_du_champ( 'A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_metier_acces INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    );

/*
  ============================
  2°) au milieu les insertions
  ============================
*/


/*
  ===============================
  DONNEES A INSERER POUR : tbl_utilisateurs
  ===============================
*/

INSERT INTO tbl_utilisateurs (chi_id_utilisateur,chp_nom_de_connexion_utilisateur,chp_mot_de_passe_utilisateur,chp_parametres_utilisateur,chi_compteur1_utilisateur,chi_compteur_socket1_utilisateur,che__nur_utilisateur,chp__dtm_utilisateur,chp__dtc_utilisateur,chx_groupe_utilisateur,chx_metier_utilisateur) VALUES
('1','webmaster@example.com','$2y$10$F4WqMvH6cWTFm9pUPGcS.ufYcxNhxkZ7.qlPmmTEYMtYPnIqETpPq','','466','1307','0','2000-01-01 00:00:00','2000-01-01 00:00:00','1','1'),
('2','anonyme',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','2','2');


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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="13 11  82 84"><path d="M 18 85 L 23 82 L 21 73 L 27 67 M 30 40 L 25 40 L 21 49 L 16 49 M 34 35 L 25 30 L 23 24 M 44 19 L 39 14 M 59 19 L 64 14 M 69 35 L 78 30 L 80 24 M 73 40 L 78 40 L 82 49 L 87 49 M 76 68 L 82 73 L 80 82 L 85 85 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path><path d=" M 36 34 C 35 12 68 12 67 34 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:slategray;stroke-width:1;fill-opacity:1;"></path><path d=" M 36 33 C 30 38 25 48 25 56  C 25 68 33 87 52 87 c 15 0 26 -17 26 -30 C 78 47 73 39 67 33 c 0 1 -13 1 -15 1 C 49 34 36 34 36 33" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:red;stroke-width:1;fill-opacity:1;"></path><ellipse cx="44" cy="25" rx="2.5" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(30 44 25 )" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="57" cy="18" rx="2.5" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(1 40) rotate(-32 0 0)  " style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="36" cy="58" rx="5" ry="6.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="67" cy="58" rx="5" ry="6.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="41" cy="42" rx="2.5" ry="2.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;"></ellipse><ellipse cx="62" cy="42" rx="2.5" ry="2.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="40" cy="74" rx="3" ry="4.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(-40 40 74 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="57" cy="89" rx="3" ry="4.5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(6 -15 ) rotate(30 57 89 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><path d=" M 51 35 V 86 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path></svg>','51','1','2025-06-26 14:57:32.050','2000-01-01 00:00:00'),
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
('101','1','ajouter des tests de validité sur le svg base','16','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
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
('147','1','date_default_timezone_set en fonction de l''utilisateur','13','0','2025-06-13 06:54:29.864','2000-01-01 00:00:00.000'),
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
('169','1','initialiser projet standard','7','0','2025-06-26 15:39:59.054','2025-06-26 15:39:59.054'),
('170','1','initialiser ecran standard d''une table','8','0','2025-06-26 15:40:44.916','2025-06-26 15:40:44.916'),
('171','1','gérer les menus','6','0','2025-06-26 17:24:34.522','2025-06-26 17:24:34.522'),
('172','1','gérer les utilisateurs et les groupes et les métiers','3','1','2025-06-27 10:25:45.031','2025-06-27 10:13:04.627'),
('173','1','gérer les paramètres ( liste des constantes )
type de champbdd','4','3','2025-07-04 08:19:23.308','2025-06-27 10:13:20.409'),
('174','1','mettre en github
','99','0','2025-06-27 11:21:35.817','2025-06-27 11:21:35.817'),
('175','1','faire un dump de la base du projet 3','99','1','2025-06-28 12:41:16.455','2025-06-28 12:40:58.038'),
('176','1','supprimer les afr','99','0','2025-06-30 10:17:00.146','2025-06-30 10:17:00.146'),
('177','1','créer la base appli dans un autre répertoire que les bases de données','99','0','2025-07-01 09:20:32.962','2025-07-01 09:20:32.962'),
('178','1','ajouter un dictionnaire de données','5','1','2025-07-02 10:47:06.159','2025-07-02 10:46:53.367'),
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
('185','1','gérer les pages','2','0','2025-07-07 12:54:11.814','2025-07-07 12:54:11.814'),
('186','1','gérer les accès des utilisateurs','1','1','2025-07-08 15:13:34.065','2025-07-08 15:12:51.611');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_projets
  ===============================
*/

INSERT INTO tbl_projets (chi_id_projet,chp_nom_projet,chp_commentaire_projet,che__nur_projet,chp__dtm_projet,chp__dtc_projet,chx_dossier_requetes_projet) VALUES
('1','environnement principal 1','C''est ce projet !
Normalement, on n''a plus à y toucher.','0','2000-01-01 00:00:00','2000-01-01 00:00:00','6'),
('2','Projet virtuel qui doit exister mais rester vide','Projet virtuel qui doit exister mais rester vide.

On fabrique un clone de du projet 1
dans le répertoire rev_2 et on travaillera sur l''url frev/rev_2.

Dans le projet 2, le fichier __serveur/__definitions.php sera le seul fichier différent

Ce projet est utilisé pour la mise à jour du projet principal','0','2000-01-01 00:00:00','2000-01-01 00:00:00',NULL),
('3','afr','','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000',NULL);


/*
  ===============================
  DONNEES A INSERER POUR : tbl_requetes
  ===============================
*/

INSERT INTO tbl_requetes (chi_id_requete,chx_projet_requete,chp_type_requete,cht_rev_requete,cht_sql_requete,cht_php_requete,cht_commentaire_requete,cht_matrice_requete,che__nur_requete,chp__dtm_requete,chp__dtc_requete) VALUES
('1','1','select','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chp_mot_de_passe_utilisateur` ) , champ( `T0` , `chi_id_utilisateur` ) , champ( `T0` , `chx_groupe_utilisateur` ) , champ( `T0` , `chx_metier_utilisateur` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , alias(T0) , base(b1) ))
      )
   ),
   conditions( egal( champ( `T0` , `chp_nom_de_connexion_utilisateur` ) , :T0_chp_nom_de_connexion_utilisateur )),
   complements( limité_à( quantité(1) , début(0) ))
)  ','SELECT 
`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T0`.`chx_groupe_utilisateur` , `T0`.`chx_metier_utilisateur`
 FROM b1.tbl_utilisateurs T0
WHERE `T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur  
LIMIT 1 OFFSET 0 
;',NULL,'utilisateur par nom_de_connexion',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('2','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_requete`),
      champ( `T0` , `chx_projet_requete`),
      champ( `T0` , `chp_type_requete`),
      champ( `T0` , `cht_rev_requete`),
      champ( `T0` , `cht_sql_requete`),
      champ( `T0` , `cht_php_requete`),
      champ( `T0` , `cht_commentaire_requete`),
      champ( `T0` , `cht_matrice_requete`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chi_id_requete` ) , :T0_chi_id_requete),
         egal( champ( `T0` , `chx_projet_requete` ) , :T0_chx_projet_requete),
         comme( champ( `T0` , `chp_type_requete` ) , :T0_chp_type_requete),
         comme( champ( `T0` , `cht_rev_requete` ) , :T0_cht_rev_requete)
      )
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_requete` ) , décroissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)','SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete) 
ORDER BY `T0`.`chi_id_requete` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'liste des requêtes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('3','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chi_id_requete` ) , :n_chi_id_requete ) , affecte( champ( `cht_php_requete` ) , :n_cht_php_requete )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_requete` ) , :c_chi_id_requete ) , egal( champ( `chx_projet_requete` ) , :c_chx_projet_requete ))
   )
)','UPDATE b1.tbl_requetes SET 
   `chi_id_requete` = :n_chi_id_requete , 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('4','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
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
('5','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_revs , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chx_projet_rev` ) , :chx_projet_rev ) , egal( champ( `chp_provenance_rev` ) , :chp_provenance_rev ) , egal( champ( `chx_source_rev` ) , :chx_source_rev ))
   )
)','DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev
   AND `chp_provenance_rev` = :chp_provenance_rev
   AND `chx_source_rev` = :chx_source_rev) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('6','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_requete`),
      champ( `T0` , `chx_projet_requete`),
      champ( `T0` , `chp_type_requete`),
      champ( `T0` , `cht_rev_requete`),
      champ( `T0` , `cht_sql_requete`),
      champ( `T0` , `cht_php_requete`),
      champ( `T0` , `cht_commentaire_requete`),
      champ( `T0` , `cht_matrice_requete`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_requete` ) , :T0_chi_id_requete ) , egal( champ( `T0` , `chx_projet_requete` ) , :T0_chx_projet_requete ))
   )
)','SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE (`T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('7','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte( champ( `chx_projet_requete` ) , :chx_projet_requete),
      affecte( champ( `chp_type_requete` ) , :chp_type_requete),
      affecte( champ( `cht_rev_requete` ) , :cht_rev_requete),
      affecte( champ( `cht_sql_requete` ) , :cht_sql_requete),
      affecte( champ( `cht_php_requete` ) , :cht_php_requete),
      affecte( champ( `cht_commentaire_requete` ) , :cht_commentaire_requete)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , base(b1) ))
      )
   )
)','INSERT INTO b1.`tbl_requetes`(
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
);',NULL,'',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('8','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chx_projet_id_source` ) , :chx_projet_id_source ))
   )
)','DELETE FROM b1.tbl_sources
WHERE (`chx_projet_id_source` = :chx_projet_id_source) ;',NULL,'',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('9','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte( champ( `chp_type_requete` ) , :n_chp_type_requete),
      affecte( champ( `cht_rev_requete` ) , :n_cht_rev_requete),
      affecte( champ( `cht_sql_requete` ) , :n_cht_sql_requete),
      affecte( champ( `cht_php_requete` ) , :n_cht_php_requete),
      affecte( champ( `cht_commentaire_requete` ) , :n_cht_commentaire_requete),
      affecte( champ( `cht_matrice_requete` ) , :n_cht_matrice_requete)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_requete` ) , :c_chi_id_requete ) , egal( champ( `chx_projet_requete` ) , :c_chx_projet_requete ))
   )
)','UPDATE b1.tbl_requetes SET 
   `chp_type_requete` = :n_chp_type_requete , 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_php_requete` = :n_cht_php_requete , 
   `cht_commentaire_requete` = :n_cht_commentaire_requete , 
   `cht_matrice_requete` = :n_cht_matrice_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('10','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_rev_travail_basedd` ) , :n_chp_rev_travail_basedd )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_basedd` ) , :c_chi_id_basedd ) , egal( champ( `chx_projet_id_basedd` ) , :c_chx_projet_id_basedd ))
   )
)','UPDATE b1.tbl_bdds SET 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('11','1','select','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_basedd` ) , champ( `T0` , `chp_rev_travail_basedd` ) , champ( `T0` , `chx_dossier_id_basedd` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et( dans( champ( `T0` , `chi_id_basedd` ) , (:T0_chi_id_basedd) ) , egal( champ( `T0` , `chx_projet_id_basedd` ) , :T0_chx_projet_id_basedd ))
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
 FROM b1.tbl_bdds T0
WHERE (`T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('12','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte( champ( `chx_projet_rev` ) , :chx_projet_rev),
      affecte( champ( `chp_provenance_rev` ) , :chp_provenance_rev),
      affecte( champ( `chx_source_rev` ) , :chx_source_rev),
      affecte( champ( `chp_id_rev` ) , :chp_id_rev),
      affecte( champ( `chp_valeur_rev` ) , :chp_valeur_rev),
      affecte( champ( `chp_type_rev` ) , :chp_type_rev),
      affecte( champ( `chp_niveau_rev` ) , :chp_niveau_rev),
      affecte( champ( `chp_quotee_rev` ) , :chp_quotee_rev),
      affecte( champ( `chp_pos_premier_rev` ) , :chp_pos_premier_rev),
      affecte( champ( `chp_pos_dernier_rev` ) , :chp_pos_dernier_rev),
      affecte( champ( `chp_parent_rev` ) , :chp_parent_rev),
      affecte( champ( `chp_nbr_enfants_rev` ) , :chp_nbr_enfants_rev),
      affecte( champ( `chp_num_enfant_rev` ) , :chp_num_enfant_rev),
      affecte( champ( `chp_profondeur_rev` ) , :chp_profondeur_rev),
      affecte( champ( `chp_pos_ouver_parenthese_rev` ) , :chp_pos_ouver_parenthese_rev),
      affecte( champ( `chp_enfant_suivant_rev` ) , :chp_enfant_suivant_rev),
      affecte( champ( `chp_commentaire_rev` ) , :chp_commentaire_rev)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_revs , base(b1) ))
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
);',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('13','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_rev`),
      champ( `T0` , `chx_projet_rev`),
      champ( `T0` , `chp_provenance_rev`),
      champ( `T0` , `chx_source_rev`),
      champ( `T0` , `chp_id_rev`),
      champ( `T0` , `chp_valeur_rev`),
      champ( `T0` , `chp_type_rev`),
      champ( `T0` , `chp_niveau_rev`),
      champ( `T0` , `chp_quotee_rev`),
      champ( `T0` , `chp_pos_premier_rev`),
      champ( `T0` , `chp_pos_dernier_rev`),
      champ( `T0` , `chp_parent_rev`),
      champ( `T0` , `chp_nbr_enfants_rev`),
      champ( `T0` , `chp_num_enfant_rev`),
      champ( `T0` , `chp_profondeur_rev`),
      champ( `T0` , `chp_pos_ouver_parenthese_rev`),
      champ( `T0` , `chp_enfant_suivant_rev`),
      champ( `T0` , `chp_commentaire_rev`),
      champ( `T1` , `chp_nom_source`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_revs , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_sources , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_source ) , champ( T0 , chx_source_rev ) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chi_id_rev` ) , :T0_chi_id_rev),
         egal( champ( `T0` , `chx_projet_rev` ) , :T0_chx_projet_rev),
         comme( champ( `T0` , `chp_provenance_rev` ) , :T0_chp_provenance_rev),
         comme( champ( `T1` , `chp_nom_source` ) , :T1_chp_nom_source),
         comme( champ( `T0` , `chp_valeur_rev` ) , :T0_chp_valeur_rev),
         egal( champ( `T0` , `chx_source_rev` ) , :T0_chx_source_rev)
      )
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_rev` ) , croissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
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
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('14','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_revs , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chx_projet_rev` ) , :chx_projet_rev ))
   )
)','DELETE FROM b1.tbl_revs
WHERE (`chx_projet_rev` = :chx_projet_rev) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('15','1','liste_ecran','sélectionner(
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
('16','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte( champ( `chx_dossier_id_basedd` ) , :n_chx_dossier_id_basedd),
      affecte( champ( `chp_rev_basedd` ) , :n_chp_rev_basedd),
      affecte( champ( `chp_commentaire_basedd` ) , :n_chp_commentaire_basedd),
      affecte( champ( `chp_genere_basedd` ) , :n_chp_genere_basedd),
      affecte( champ( `chp_rev_travail_basedd` ) , :n_chp_rev_travail_basedd),
      affecte( champ( `chp_fournisseur_basedd` ) , :n_chp_fournisseur_basedd)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_basedd` ) , :c_chi_id_basedd ) , egal( champ( `chx_projet_id_basedd` ) , :c_chx_projet_id_basedd ))
   )
)','UPDATE b1.tbl_bdds SET 
   `chx_dossier_id_basedd` = :n_chx_dossier_id_basedd , 
   `chp_rev_basedd` = :n_chp_rev_basedd , 
   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
   `chp_genere_basedd` = :n_chp_genere_basedd , 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('17','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chx_dossier_id_basedd` ) , :chx_dossier_id_basedd ) , affecte( champ( `chx_projet_id_basedd` ) , :chx_projet_id_basedd ) , affecte( champ( `chp_commentaire_basedd` ) , :chp_commentaire_basedd ) , affecte( champ( `chp_fournisseur_basedd` ) , :chp_fournisseur_basedd )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , base(b1) ))
      )
   )
)','INSERT INTO b1.`tbl_bdds`(
    `chx_dossier_id_basedd` , 
    `chx_projet_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_fournisseur_basedd`
) VALUES (
    :chx_dossier_id_basedd , 
    :chx_projet_id_basedd , 
    :chp_commentaire_basedd , 
    :chp_fournisseur_basedd
);',NULL,'',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('18','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
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
('19','1','liste_ecran','sélectionner(
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
('20','1','update','modifier(
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
('21','1','update','modifier(
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
('22','1','update','modifier(
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
('23','1','select','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_dossier` ) , champ( `T0` , `chx_parent_dossier` ) , champ( `T0` , `che_contient_genere_dossier` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , alias(T0) , base(b1) ))
      )
   ),
   conditions( egal( champ( `T0` , `chx_projet_dossier` ) , :T0_chx_projet_dossier ))
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier` , `T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('24','1','select','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_source` ) , champ( `T0` , `chx_dossier_id_source` ) , champ( `T0` , `chp_nom_source` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , alias(T0) , base(b1) ))
      )
   ),
   conditions( egal( champ( `T0` , `chx_projet_id_source` ) , :T0_chx_projet_id_source ))
)','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`chx_projet_id_source` = :T0_chx_projet_id_source
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('25','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , base(b1) ))
      )
   ),
   conditions(
      et( dans( champ( `chi_id_dossier` ) , (:liste_des_ids_a_supprimer) ) , egal( champ( `chx_projet_dossier` ) , :chx_projet_dossier ))
   )
)','DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` IN (:liste_des_ids_a_supprimer)
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('26','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_basedd`),
      champ( `T0` , `chx_dossier_id_basedd`),
      champ( `T0` , `chx_projet_id_basedd`),
      champ( `T0` , `chp_rev_basedd`),
      champ( `T0` , `chp_commentaire_basedd`),
      champ( `T0` , `chp_genere_basedd`),
      champ( `T0` , `chp_rev_travail_basedd`),
      champ( `T0` , `chp_fournisseur_basedd`),
      champ( `T1` , `chi_id_dossier`),
      champ( `T1` , `chx_projet_dossier`),
      champ( `T1` , `chp_nom_dossier`),
      champ( `T2` , `chi_id_projet`),
      champ( `T2` , `chp_nom_projet`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_dossiers , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_dossier ) , champ( T0 , chx_dossier_id_basedd ) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_projets , alias(T2) , base(b1) )),
         contrainte( egal( champ( T2 , chi_id_projet ) , champ( T0 , chx_projet_id_basedd ) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_basedd` ) , :T0_chi_id_basedd ) , egal( champ( `T0` , `chx_projet_id_basedd` ) , :T0_chx_projet_id_basedd ))
   )
)','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chp_genere_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , 
`T1`.`chp_nom_dossier` , `T2`.`chi_id_projet` , `T2`.`chp_nom_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE (`T0`.`chi_id_basedd` = :T0_chi_id_basedd
   AND `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',NULL,'base par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('27','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_basedd`),
      champ( `T0` , `chx_dossier_id_basedd`),
      champ( `T0` , `chx_projet_id_basedd`),
      champ( `T0` , `chp_rev_basedd`),
      champ( `T0` , `chp_commentaire_basedd`),
      champ( `T0` , `chp_genere_basedd`),
      champ( `T0` , `chp_rev_travail_basedd`),
      champ( `T0` , `chp_fournisseur_basedd`),
      champ( `T1` , `chi_id_dossier`),
      champ( `T1` , `chx_projet_dossier`),
      champ( `T1` , `chp_nom_dossier`),
      champ( `T1` , `chx_parent_dossier`),
      champ( `T2` , `chi_id_projet`),
      champ( `T2` , `chp_nom_projet`),
      champ( `T2` , `chp_commentaire_projet`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_dossiers , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_dossier ) , champ( T0 , chx_dossier_id_basedd ) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_projets , alias(T2) , base(b1) )),
         contrainte( egal( champ( T2 , chi_id_projet ) , champ( T0 , chx_projet_id_basedd ) ))
      )
   ),
   conditions( egal( champ( `T0` , `chx_projet_id_basedd` ) , :T0_chx_projet_id_basedd ))
)','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_basedd` , `T0`.`chp_commentaire_basedd` , 
`T0`.`chp_genere_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , 
`T1`.`chp_nom_dossier` , `T1`.`chx_parent_dossier` , `T2`.`chi_id_projet` , `T2`.`chp_nom_projet` , `T2`.`chp_commentaire_projet`
 FROM b1.tbl_bdds T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

 LEFT JOIN b1.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd

WHERE `T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('28','1','select','sélectionner(
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
('29','1','update','modifier(
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
('30','1','insert','insérer(
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
('31','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_taches , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_tache` ) , :chi_id_tache ) , egal( champ( `chx_utilisateur_tache` ) , :chx_utilisateur_tache ))
   )
)','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_taches
WHERE (`chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;',NULL,'tâches par id',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('32','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_requete`),
      champ( `T0` , `chx_projet_requete`),
      champ( `T0` , `chp_type_requete`),
      champ( `T0` , `cht_rev_requete`),
      champ( `T0` , `cht_sql_requete`),
      champ( `T0` , `cht_php_requete`),
      champ( `T0` , `cht_commentaire_requete`),
      champ( `T0` , `cht_matrice_requete`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chi_id_requete` ) , :T0_chi_id_requete),
         egal( champ( `T0` , `chx_projet_requete` ) , :T0_chx_projet_requete)
      )
   )
)','SELECT 
`T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`chx_projet_requete` = :T0_chx_projet_requete)
;',NULL,'',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('33','1','liste_ecran','#(meta(sur_base_de_reference(1))),
sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_projet` ) , champ( `T0` , `chp_nom_projet` ) , champ( `T0` , `chp_commentaire_projet` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_projet` ) , :T0_chi_id_projet ) , comme( champ( `T0` , `chp_nom_projet` ) , :T0_chp_nom_projet ) , comme( champ( `T0` , `chp_commentaire_projet` ) , :T0_chp_commentaire_projet ))
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_projet` ) , croissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','/*meta(sur_base_de_reference(1))*/
SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet`
 FROM b1.tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet
   AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
   AND `T0`.`chp_commentaire_projet` LIKE :T0_chp_commentaire_projet) 
ORDER BY `T0`.`chi_id_projet` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('34','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_projet`),
      champ( `T0` , `chp_nom_projet`),
      champ( `T0` , `chp_commentaire_projet`),
      champ( `T0` , `chx_dossier_requetes_projet`),
      champ( `T1` , `chp_nom_dossier`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_dossiers , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_dossier ) , champ( T0 , chx_dossier_requetes_projet ) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_projet` ) , :T0_chi_id_projet ))
)  ','SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_projets T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('35','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `cht_php_requete` ) , :n_cht_php_requete )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_requete` ) , :c_chi_id_requete ) , egal( champ( `chx_projet_requete` ) , :c_chx_projet_requete ))
   )
)','UPDATE b1.tbl_requetes SET 
   `cht_php_requete` = :n_cht_php_requete
WHERE (`chi_id_requete` = :c_chi_id_requete
   AND `chx_projet_requete` = :c_chx_projet_requete) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('36','1','insert','#(meta(sur_base_de_reference(1))),
insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_projet` ) , :chp_nom_projet ) , affecte( champ( `chp_commentaire_projet` ) , :chp_commentaire_projet )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets , base(b1) ))
      )
   )
)  ','/*meta(sur_base_de_reference(1))*/

INSERT INTO b1.`tbl_projets`(
    `chp_nom_projet` , 
    `chp_commentaire_projet`
) VALUES (
    :chp_nom_projet , 
    :chp_commentaire_projet
);',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('37','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chx_projet_dossier` ) , :chx_projet_dossier ) , affecte( champ( `chp_nom_dossier` ) , :chp_nom_dossier ) , affecte( champ( `chx_parent_dossier` ) , :chx_parent_dossier )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , base(b1) ))
      )
   )
)','INSERT INTO b1.`tbl_dossiers`(
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('38','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chx_dossier_id_source` ) , :chx_dossier_id_source ) , affecte( champ( `chx_projet_id_source` ) , :chx_projet_id_source ) , affecte( champ( `chp_nom_source` ) , :chp_nom_source ) , affecte( champ( `che_binaire_source` ) , :che_binaire_source )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , base(b1) ))
      )
   )
)  ','INSERT INTO b1.`tbl_sources`(
    `chx_dossier_id_source` , 
    `chx_projet_id_source` , 
    `chp_nom_source` , 
    `che_binaire_source`
) VALUES (
    :chx_dossier_id_source , 
    :chx_projet_id_source , 
    :chp_nom_source , 
    :che_binaire_source
);',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('39','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_source` ) , :chi_id_source ) , egal( champ( `chx_projet_id_source` ) , :chx_projet_id_source ))
   )
)','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_sources
WHERE (`chi_id_source` = :chi_id_source
   AND `chx_projet_id_source` = :chx_projet_id_source) ;',NULL,'',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('40','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_rev_basedd` ) , :n_chp_rev_basedd )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_basedd` ) , :c_chi_id_basedd ) , egal( champ( `chx_projet_id_basedd` ) , :c_chx_projet_id_basedd ))
   )
)','UPDATE b1.tbl_bdds SET 
   `chp_rev_basedd` = :n_chp_rev_basedd
WHERE (`chi_id_basedd` = :c_chi_id_basedd
   AND `chx_projet_id_basedd` = :c_chx_projet_id_basedd) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('41','1','requete_manuelle','base_de_reference(1),
transaction()  ','BEGIN TRANSACTION;',NULL,'sur base 1',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('42','1','requete_manuelle','base_de_reference(1),
commit()  ','COMMIT;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('43','1','requete_manuelle','base_de_reference(1),
rollback()          ','ROLLBACK;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('44','1','requete_manuelle','modifier_table(
   #(),
   base_de_reference(1),
   nom_de_la_table( '':nom_de_la_table''),
   actions( drop_column( '':nom_du_champ'' ))
)        ','ALTER TABLE :nom_de_la_table DROP COLUMN :nom_du_champ',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('45','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_projet` ) , :chi_id_projet ))
   )
)','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE (`chi_id_projet` = :chi_id_projet) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('46','1','select','sélectionner(
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
('47','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_utilisateur`),
      champ( `T0` , `chp_nom_de_connexion_utilisateur`),
      champ( `T0` , `chp_mot_de_passe_utilisateur`),
      champ( `T0` , `chp_parametres_utilisateur`),
      champ( `T0` , `chi_compteur1_utilisateur`),
      champ( `T0` , `chi_compteur_socket1_utilisateur`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , alias(T0) , base(b1) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_utilisateur` ) , (:T0_chi_id_utilisateur) ))
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur`
 FROM b1.tbl_utilisateurs T0
WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('48','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_projet` ) , :n_chp_nom_projet ) , affecte( champ( `chp_commentaire_projet` ) , :n_chp_commentaire_projet ) , affecte( champ( `chx_dossier_requetes_projet` ) , :n_chx_dossier_requetes_projet )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_projet` ) , :c_chi_id_projet ))
)  ','UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `chp_commentaire_projet` = :n_chp_commentaire_projet , 
   `chx_dossier_requetes_projet` = :n_chx_dossier_requetes_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('49','1','select','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_requete` ) , champ( `T0` , `cht_sql_requete` ) , champ( `T0` , `cht_commentaire_requete` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_requetes , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chx_projet_requete` ) , :T0_chx_projet_requete),
         inf( champ( `T0` , `chi_id_requete` ) , :nb_max),
         egal( 1 , 1)
      )
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_requete` ) , croissant() ))
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chx_projet_requete` = :T0_chx_projet_requete
   AND `T0`.`chi_id_requete` < :nb_max
   AND 1 = 1) 
ORDER BY `T0`.`chi_id_requete` ASC
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('50','1','select','sélectionner(
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
      et( egal( champ( `T0` , `chi_id_dossier` ) , :T0_chi_id_dossier ) , egal( champ( `T0` , `chx_projet_dossier` ) , :T0_chx_projet_dossier ))
   )
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
`T0`.`che_contient_genere_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chx_projet_dossier` = :T0_chx_projet_dossier)
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('51','1','requete_manuelle','transaction()        ','BEGIN TRANSACTION;',NULL,'sur base 1',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('52','1','requete_manuelle','commit()      ','COMMIT;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('53','1','liste_ecran','sélectionner(
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
('54','1','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte( champ( `chx_dossier_id_source` ) , :chx_dossier_id_source),
      affecte( champ( `chx_projet_id_source` ) , :chx_projet_id_source),
      affecte( champ( `chp_nom_source` ) , :chp_nom_source),
      affecte( champ( `cht_commentaire_source` ) , :cht_commentaire_source),
      affecte( champ( `cht_rev_source` ) , :cht_rev_source),
      affecte( champ( `cht_genere_source` ) , :cht_genere_source),
      affecte( champ( `che_binaire_source` ) , :che_binaire_source)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , base(b1) ))
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
);',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('55','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_dossier` ) , :n_chp_nom_dossier ) , affecte( champ( `chx_parent_dossier` ) , :n_chx_parent_dossier ) , affecte( champ( `che_contient_genere_dossier` ) , :n_che_contient_genere_dossier )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_dossier` ) , :c_chi_id_dossier ) , egal( champ( `chx_projet_dossier` ) , :c_chx_projet_dossier ))
   )
)  ','UPDATE b1.tbl_dossiers SET 
   `chp_nom_dossier` = :n_chp_nom_dossier , 
   `chx_parent_dossier` = :n_chx_parent_dossier , 
   `che_contient_genere_dossier` = :n_che_contient_genere_dossier
WHERE (`chi_id_dossier` = :c_chi_id_dossier
   AND `chx_projet_dossier` = :c_chx_projet_dossier) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('56','1','requete_manuelle','insérer(
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
('57','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets , base(b1) ))
      )
   ),
   conditions( supegal( champ( `chi_id_projet` ) , :chi_id_projet ))
)  ','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_projets
WHERE `chi_id_projet` >= :chi_id_projet ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('58','1','delete','#(meta(tester_les_dependances_dans_le_php(1))),
supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_dossier` ) , :chi_id_dossier ) , egal( champ( `chx_projet_dossier` ) , :chx_projet_dossier ))
   )
)','/*meta(tester_les_dependances_dans_le_php(1))*/

DELETE FROM b1.tbl_dossiers
WHERE (`chi_id_dossier` = :chi_id_dossier
   AND `chx_projet_dossier` = :chx_projet_dossier) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('59','1','requete_manuelle','insérer(
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
)    ','INSERT INTO `tbl_dossiers`(
    `chi_id_dossier` , 
    `chx_projet_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chi_id_dossier , 
    :chx_projet_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier
);',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('60','1','requete_manuelle','sélectionner(

   valeurs( champ( `T0` , `chx_dossier_requetes_projet` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_projets , alias(T0)  ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_projet` ) , :T0_chi_id_projet ))
   )
)    ','SELECT 
`T0`.`chx_dossier_requetes_projet`
 FROM tbl_projets T0
WHERE (`T0`.`chi_id_projet` = :T0_chi_id_projet)
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('61','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_source`),
      champ( `T0` , `chx_dossier_id_source`),
      champ( `T0` , `chx_projet_id_source`),
      champ( `T0` , `chp_nom_source`),
      champ( `T0` , `cht_commentaire_source`),
      champ( `T0` , `cht_rev_source`),
      champ( `T0` , `cht_genere_source`),
      champ( `T1` , `chp_nom_dossier`),
      champ( `T0` , `che_binaire_source`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_dossiers , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_dossier ) , champ( T0 , chx_dossier_id_source ) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_source` ) , :T0_chi_id_source ) , egal( champ( `T0` , `chx_dossier_id_source` ) , :T0_chx_dossier_id_source ) , egal( champ( `T0` , `chx_projet_id_source` ) , :T0_chx_projet_id_source ) , comme( champ( `T0` , `chp_nom_source` ) , :T0_chp_nom_source ))
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_source` ) , croissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
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
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('62','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_source`),
      champ( `T0` , `chx_dossier_id_source`),
      champ( `T0` , `chx_projet_id_source`),
      champ( `T0` , `chp_nom_source`),
      champ( `T0` , `cht_commentaire_source`),
      champ( `T0` , `cht_rev_source`),
      champ( `T0` , `cht_genere_source`),
      champ( `T2` , `chp_nom_dossier`),
      champ( `T0` , `che_binaire_source`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_projets , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_projet ) , champ( T0 , chx_projet_id_source ) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_dossiers , alias(T2) , base(b1) )),
         contrainte( egal( champ( T2 , chi_id_dossier ) , champ( T0 , chx_dossier_id_source ) ))
      )
   ),
   conditions(
      et(
         #(),
         egal( champ( `T0` , `chi_id_source` ) , :T0_chi_id_source),
         egal( champ( `T0` , `chx_projet_id_source` ) , :T0_chx_projet_id_source)
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
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('63','1','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte( champ( `chx_dossier_id_source` ) , :n_chx_dossier_id_source),
      affecte( champ( `chx_projet_id_source` ) , :n_chx_projet_id_source),
      affecte( champ( `chp_nom_source` ) , :n_chp_nom_source),
      affecte( champ( `cht_commentaire_source` ) , :n_cht_commentaire_source),
      affecte( champ( `cht_rev_source` ) , :n_cht_rev_source),
      affecte( champ( `cht_genere_source` ) , :n_cht_genere_source),
      affecte( champ( `che_binaire_source` ) , :n_che_binaire_source)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_sources , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `chi_id_source` ) , :c_chi_id_source ) , egal( champ( `chx_projet_id_source` ) , :c_chx_projet_id_source ))
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
   AND `chx_projet_id_source` = :c_chx_projet_id_source) ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('64','1','select','sélectionner(
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
('65','1','update','modifier(
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
('66','1','requete_manuelle','sélectionner(
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
('67','1','update','#(meta(sur_base_de_reference(1))),
modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_de_connexion_utilisateur` ) , :n_chp_nom_de_connexion_utilisateur ) , affecte( champ( `chp_mot_de_passe_utilisateur` ) , :n_chp_mot_de_passe_utilisateur )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_utilisateur` ) , :c_chi_id_utilisateur ))
)  ','/*meta(sur_base_de_reference(1))*/

UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('68','1','select','sélectionner(
   base_de_reference(1),
   valeurs( compter( tous_les_champs() )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chx_projet_dossier` ) , :T0_chx_projet_dossier ) , egal( champ( `T0` , `chx_parent_dossier` ) , :T0_chx_parent_dossier ))
   )
)','SELECT 
COUNT( * )
 FROM b1.tbl_dossiers T0
WHERE (`T0`.`chx_projet_dossier` = :T0_chx_projet_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier)
;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('69','1','select','sélectionner(
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
('70','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_dossiers , base(b1) ))
      )
   ),
   conditions( egal( champ( `chx_projet_dossier` ) , :chx_projet_dossier ))
)','DELETE FROM b1.tbl_dossiers
WHERE `chx_projet_dossier` = :chx_projet_dossier ;',NULL,'dossier racine d''un projet',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('71','1','select','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_basedd` ) , champ( `T0` , `chp_rev_basedd` ) , champ( `T0` , `chp_rev_travail_basedd` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_bdds , alias(T0) , base(b1) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chx_projet_id_basedd` ) , :T0_chx_projet_id_basedd ))
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
WHERE (`T0`.`chx_projet_id_basedd` = :T0_chx_projet_id_basedd)
;',NULL,'bases d''un projet',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('72','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chi_compteur1_utilisateur` ) , plus( chi_compteur1_utilisateur , 1 ) )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_utilisateur` ) , :c_chi_id_utilisateur ))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('73','1','liste_ecran','sélectionner(
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
('74','1','insert','insérer(
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
('75','1','select','sélectionner(
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
('76','1','update','modifier(
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
('77','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_groupe` ) , :chi_id_groupe ))
)  ','DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',NULL,'groupes',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('78','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_utilisateur`),
      champ( `T0` , `chp_nom_de_connexion_utilisateur`),
      champ( `T0` , `chp_mot_de_passe_utilisateur`),
      champ( `T0` , `chi_compteur1_utilisateur`),
      champ( `T0` , `chi_compteur_socket1_utilisateur`),
      champ( `T0` , `chx_groupe_utilisateur`),
      champ( `T1` , `chp_nom_groupe`),
      champ( `T0` , `chx_metier_utilisateur`),
      champ( `T2` , `chp_nom_metier`),
      champ( `T0` , `chi_compteur1_utilisateur`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_groupes , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_groupe ) , champ( T0 , chx_groupe_utilisateur ) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_metiers , alias(T2) , base(b1) )),
         contrainte( egal( champ( T2 , chi_id_metier ) , champ( T0 , chx_metier_utilisateur ) ))
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
`T0`.`chx_groupe_utilisateur` , `T1`.`chp_nom_groupe` , `T0`.`chx_metier_utilisateur` , `T2`.`chp_nom_metier` , `T0`.`chi_compteur1_utilisateur`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_utilisateur

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_utilisateur

WHERE ( /* */ `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'utilisateurs',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('79','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_de_connexion_utilisateur` ) , :chp_nom_de_connexion_utilisateur ) , affecte( champ( `chx_groupe_utilisateur` ) , :chx_groupe_utilisateur ) , affecte( champ( `chx_metier_utilisateur` ) , :chx_metier_utilisateur )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_groupe` ) , :T0_chi_id_groupe ))
)  ','INSERT INTO b1.`tbl_utilisateurs`(
    `chp_nom_de_connexion_utilisateur` , 
    `chx_groupe_utilisateur` , 
    `chx_metier_utilisateur`
) VALUES (
    :chp_nom_de_connexion_utilisateur , 
    :chx_groupe_utilisateur , 
    :chx_metier_utilisateur
);',NULL,'utilisateurs',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('80','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_utilisateur`),
      champ( `T0` , `chp_nom_de_connexion_utilisateur`),
      champ( `T0` , `chp_mot_de_passe_utilisateur`),
      champ( `T0` , `chp_parametres_utilisateur`),
      champ( `T0` , `chi_compteur1_utilisateur`),
      champ( `T0` , `chi_compteur_socket1_utilisateur`),
      champ( `T0` , `che__nur_utilisateur`),
      champ( `T0` , `chp__dtm_utilisateur`),
      champ( `T0` , `chp__dtc_utilisateur`),
      champ( `T0` , `chx_groupe_utilisateur`),
      champ( `T1` , `chp_nom_groupe`),
      champ( `T0` , `chx_metier_utilisateur`),
      champ( `T2` , `chp_nom_metier`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_groupes , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_groupe ) , champ( T0 , chx_groupe_utilisateur ) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_metiers , alias(T2) , base(b1) )),
         contrainte( egal( champ( T2 , chi_id_metier ) , champ( T0 , chx_metier_utilisateur ) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_utilisateur` ) , :T0_chi_id_utilisateur ))
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chi_compteur_socket1_utilisateur` , `T0`.`che__nur_utilisateur` , `T0`.`chp__dtm_utilisateur` , `T0`.`chp__dtc_utilisateur` , `T0`.`chx_groupe_utilisateur` , 
`T1`.`chp_nom_groupe` , `T0`.`chx_metier_utilisateur` , `T2`.`chp_nom_metier`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_utilisateur

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,'utilisateur',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('81','1','update','modifier(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_de_connexion_utilisateur` ) , :n_chp_nom_de_connexion_utilisateur ) , affecte( champ( `chx_groupe_utilisateur` ) , :n_chx_groupe_utilisateur ) , affecte( champ( `chx_metier_utilisateur` ) , :n_chx_metier_utilisateur )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_utilisateur` ) , :c_chi_id_utilisateur ))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chx_groupe_utilisateur` = :n_chx_groupe_utilisateur , 
   `chx_metier_utilisateur` = :n_chx_metier_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'utilisateur',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('82','1','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_utilisateurs , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_utilisateur` ) , :chi_id_utilisateur ))
)  ','DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',NULL,'utilisateur',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('83','1','liste_ecran','sélectionner(
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
('84','1','insert','insérer(
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
('85','1','select','sélectionner(
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
('86','1','update','modifier(
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
('87','1','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_metiers , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_metier` ) , :chi_id_metier ))
)  ','DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',NULL,'métier',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('88','1','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs( champ( `T0` , `chi_id_page` ) , champ( `T0` , `chp_nom_page` ) , champ( `T0` , `chp_lien_rev_page` ) , champ( `T1` , `chp_nom_page` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_pages , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_pages , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_page ) , champ( T0 , chx_parent_page ) ))
      )
   ),
   conditions(
      et( egal( champ( `T0` , `chi_id_page` ) , :T0_chi_id_page ) , comme( champ( `T0` , `chp_nom_page` ) , :T0_chp_nom_page ))
   ),
   complements(
      trier_par( ( champ( `T0` , `chi_id_page` ) , décroissant() )),
      limité_à( quantité(:quantitee) , début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chp_lien_rev_page` , `T1`.`chp_nom_page`
 FROM b1.tbl_pages T0
 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page

WHERE (`T0`.`chi_id_page` = :T0_chi_id_page
   AND `T0`.`chp_nom_page` LIKE :T0_chp_nom_page) 
ORDER BY `T0`.`chi_id_page` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'pages',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('89','1','insert','insérer(
   base_de_reference(1),
   valeurs( affecte( champ( `chp_nom_page` ) , :chp_nom_page ) , affecte( champ( `chp_lien_rev_page` ) , :chp_lien_rev_page ) , affecte( champ( `chx_parent_page` ) , :chx_parent_page )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_pages , base(b1) ))
      )
   )
)  ','INSERT INTO b1.`tbl_pages`(
    `chp_nom_page` , 
    `chp_lien_rev_page` , 
    `chx_parent_page`
) VALUES (
    :chp_nom_page , 
    :chp_lien_rev_page , 
    :chx_parent_page
);',NULL,'pages',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('90','1','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ( `T0` , `chi_id_page`),
      champ( `T0` , `chp_nom_page`),
      champ( `T0` , `chp_lien_rev_page`),
      champ( `T0` , `chx_parent_page`),
      champ( `T1` , `chp_nom_page`)
   ),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_pages , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_pages , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_page ) , champ( T0 , chx_parent_page ) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_page` ) , :T0_chi_id_page ))
)  ','SELECT 
`T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chp_lien_rev_page` , `T0`.`chx_parent_page` , `T1`.`chp_nom_page`
 FROM b1.tbl_pages T0
 LEFT JOIN b1.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page

WHERE `T0`.`chi_id_page` = :T0_chi_id_page
;',NULL,'pages',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('91','1','update','modifier(
   base_de_reference(),
   valeurs( affecte( champ( `chp_nom_page` ) , :n_chp_nom_page ) , affecte( champ( `chp_lien_rev_page` ) , :n_chp_lien_rev_page ) , affecte( champ( `chx_parent_page` ) , :n_chx_parent_page )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_pages , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_page` ) , :c_chi_id_page ))
)  ','UPDATE b1.tbl_pages SET 
   `chp_nom_page` = :n_chp_nom_page , 
   `chp_lien_rev_page` = :n_chp_lien_rev_page , 
   `chx_parent_page` = :n_chx_parent_page
WHERE `chi_id_page` = :c_chi_id_page ;','function sql_91($par,&$donnees_retournees,$that){
    $sql0=''UPDATE `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.`tbl_pages` SET ''.PHP_EOL;
    $tableau_champs=array();

    if(isset($par[''n_chp_nom_page''])){
        if($par[''n_chp_nom_page'']==='''' || $par[''n_chp_nom_page'']===NULL ){
            $tableau_champs[]=''`chp_nom_page` = NULL'';
        }else{
            $tableau_champs[]=''`chp_nom_page` = \''''.sq0($par[''n_chp_nom_page'']).''\'''';
        }
    }
    if(isset($par[''n_chp_lien_rev_page''])){
        if($par[''n_chp_lien_rev_page'']==='''' || $par[''n_chp_lien_rev_page'']===NULL ){
            $tableau_champs[]=''`chp_lien_rev_page` = NULL'';
        }else{
            $tableau_champs[]=''`chp_lien_rev_page` = \''''.sq0($par[''n_chp_lien_rev_page'']).''\'''';
        }
    }
    if(isset($par[''n_chx_parent_page''])){
        if($par[''n_chx_parent_page'']==='''' || $par[''n_chx_parent_page'']===NULL ){
            $tableau_champs[]=''`chx_parent_page` = NULL'';
        }else{
            $tableau_champs[]=''`chx_parent_page` = ''.sq0($par[''n_chx_parent_page'']).'''';
        }
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => ''aucun champ à mettre à jour'' ,
            ''id_bdd'' => BDD_NUMERO_1 ,
            ''source_requete'' => '''' , 
            ''texte_requete'' => ''la modification dans la table des pages'' ,
            ''exception'' => null , 
        );
    }
    $sql0.=implode('',''.PHP_EOL.''    '',$tableau_champs).PHP_EOL;
    $where0='' WHERE 1=1 ''.PHP_EOL;
    $where0.='' AND `chi_id_page` = ''.sq1($par[''c_chi_id_page'']).''''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . '' '' . __LINE__ . '' $sql0= <pre>'' . $sql0 . ''</pre>'' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, ''changements'' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            ''source_requete'' => $sql0 , 
            ''texte_requete'' => ''la modification dans la table des pages'' ,
            ''exception'' => $e , 
            ''id_bdd'' => BDD_NUMERO_1
        );
    }
}
','pages',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('92','1','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_pages , base(b1) ))
      )
   ),
   conditions( egal( champ( `chi_id_page` ) , :chi_id_page ))
)  ','DELETE FROM b1.tbl_pages
WHERE `chi_id_page` = :chi_id_page ;','function sql_92($par,&$donnees_retournees,$that){
    $sql0=''
      DELETE FROM `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.tbl_pages
          WHERE `chi_id_page` = ''.sq1($par[''chi_id_page'']).'' ;
    '';
    // echo __FILE__ . '' '' . __LINE__ . '' $sql0=<pre>'' . $sql0 . ''</pre>'' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, ''changements'' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            ''source_requete'' => $sql0 , 
            ''texte_requete'' => ''la suppression dans la table des pages'' ,
            ''exception'' => $e , 
            ''id_bdd'' => BDD_NUMERO_1
        );
    }
}
','pages',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('93','1','liste_ecran','sélectionner(
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
('94','1','insert','insérer(
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
('95','1','select','sélectionner(
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
   conditions( egal( champ( `T0` , `chi_id_acces` ) , :T0_chi_id_acces ))
)  ','SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
`T2`.`chp_nom_metier`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
;','function sql_95($par,&$donnees_retournees,$that){
    $champs0=''
      `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
      `T2`.`chp_nom_metier`
    '';
    $sql0=''SELECT ''.$champs0;
    $from0=''
      FROM `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.tbl_acces T0
       LEFT JOIN `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

       LEFT JOIN `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
    '';
    $sql0.=$from0;
    $where0='' WHERE 1=1 ''.PHP_EOL;
    $where0.=PHP_EOL.construction_where_sql_sur_id1(''`T0`.`chi_id_acces`'',$par[''T0_chi_id_acces'']);
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . '' '' . __LINE__ . '' $sql0 = <pre>'' .  $sql0  . ''</pre>'' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                ''T0.chi_id_acces'' => $tab0[0],
                ''T0.chp_nom_acces'' => $tab0[1],
                ''T0.chx_groupe_acces'' => $tab0[2],
                ''T0.chx_metier_acces'' => $tab0[3],
                ''T1.chp_nom_groupe'' => $tab0[4],
                ''T2.chp_nom_metier'' => $tab0[5],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           ''sql0''    => $sql0          ,
           ''where0''  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , ''source_requete'' => $sql0 , ''texte_requete'' => ''la selection sur les acces'' , ''exception'' => $e , ''id_bdd'' => BDD_NUMERO_1 );
    }
}
','accès',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('96','1','update','modifier(
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
WHERE `chi_id_acces` = :c_chi_id_acces ;','function sql_96($par,&$donnees_retournees,$that){
    $sql0=''UPDATE `''.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].''`.`tbl_acces` SET ''.PHP_EOL;
    $tableau_champs=array();

    if(isset($par[''n_chp_nom_acces''])){
        if($par[''n_chp_nom_acces'']==='''' || $par[''n_chp_nom_acces'']===NULL ){
            $tableau_champs[]=''`chp_nom_acces` = NULL'';
        }else{
            $tableau_champs[]=''`chp_nom_acces` = \''''.sq0($par[''n_chp_nom_acces'']).''\'''';
        }
    }
    if(isset($par[''n_chx_groupe_acces''])){
        if($par[''n_chx_groupe_acces'']==='''' || $par[''n_chx_groupe_acces'']===NULL ){
            $tableau_champs[]=''`chx_groupe_acces` = NULL'';
        }else{
            $tableau_champs[]=''`chx_groupe_acces` = ''.sq0($par[''n_chx_groupe_acces'']).'''';
        }
    }
    if(isset($par[''n_chx_metier_acces''])){
        if($par[''n_chx_metier_acces'']==='''' || $par[''n_chx_metier_acces'']===NULL ){
            $tableau_champs[]=''`chx_metier_acces` = NULL'';
        }else{
            $tableau_champs[]=''`chx_metier_acces` = ''.sq0($par[''n_chx_metier_acces'']).'''';
        }
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => ''aucun champ à mettre à jour'' ,
            ''id_bdd'' => BDD_NUMERO_1 ,
            ''source_requete'' => '''' , 
            ''texte_requete'' => ''la modification dans la table des acces'' ,
            ''exception'' => null , 
        );
    }
    $sql0.=implode('',''.PHP_EOL.''    '',$tableau_champs).PHP_EOL;
    $where0='' WHERE 1=1 ''.PHP_EOL;
    $where0.='' AND `chi_id_acces` = ''.sq1($par[''c_chi_id_acces'']).''''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . '' '' . __LINE__ . '' $sql0= <pre>'' . $sql0 . ''</pre>'' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, ''changements'' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            ''source_requete'' => $sql0 , 
            ''texte_requete'' => ''la modification dans la table des acces'' ,
            ''exception'' => $e , 
            ''id_bdd'' => BDD_NUMERO_1
        );
    }
}
','accès',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');

/*
  ===============================
  PAS DE DONNEES A INSERER POUR : tbl_revs
  ===============================
*/


/*
  ===============================
  DONNEES A INSERER POUR : tbl_sources
  ===============================
*/

INSERT INTO tbl_sources (chi_id_source,chx_projet_id_source,chp_nom_source,cht_commentaire_source,cht_rev_source,cht_genere_source,che_binaire_source,che__nur_source,chp__dtm_source,chp__dtc_source,chx_dossier_id_source) VALUES
('1','1','.htaccess',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('2','1','index.html',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('3','1','page404.html',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('4','1','.htaccess',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('5','1','__app.php',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('7','1','page404.html',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('8','1','test_hdf.php',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('9','1','bidon.js',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('10','1','exemple.sql',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('11','1','test.css',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('12','1','tictactoe.html',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('13','1','tictactoe.html.rev',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('14','1','index.php',NULL,NULL,NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','7'),
('15','1','favicon.ico',NULL,NULL,NULL,'1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1'),
('16','1','rvjb.png',NULL,NULL,NULL,'1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1'),
('17','1','favicon.ico',NULL,NULL,NULL,'1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','7');


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
('8','1','test','3','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');


/*
  ===============================
  DONNEES A INSERER POUR : tbl_bdds
  ===============================
*/

INSERT INTO tbl_bdds (chi_id_basedd,chx_projet_id_basedd,chp_rev_basedd,chp_commentaire_basedd,chp_genere_basedd,chp_rev_travail_basedd,chp_fournisseur_basedd,chx_dossier_id_basedd,che__nur_basedd,chp__dtm_basedd,chp__dtc_basedd) VALUES
('1','1',NULL,NULL,NULL,'meta(
   #(),
   genre_meta(base_de_données),
   default_charset( ''utf8mb4''),
   collate( ''utf8mb4_unicode_ci''),
   transform_base_sur_svg( translate( 11.5 , 5.5 ))
),
créer_table(
   nom_de_la_table( ''tbl_utilisateurs''),
   meta(
      nom_de_la_table( ''tbl_utilisateurs''),
      table( ''tbl_utilisateurs''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''liste des utilisateurs''),
      nom_court_de_la_table( ''un utilisateur''),
      nom_bref_de_la_table( ''utilisateurs''),
      transform_table_sur_svg( translate( 368.5 , 373.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_utilisateur''),
         type( ''INTEGER''),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_utilisateur''),
            champ( ''chi_id_utilisateur''),
            nom_long_du_champ( ''à faire chi_id_utilisateur''),
            nom_court_du_champ( ''à faire chi_id_utilisateur''),
            nom_bref_du_champ( ''à faire chi_id_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_de_connexion_utilisateur''),
         type( ''VARCHAR(64)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_de_connexion_utilisateur''),
            champ( ''chp_nom_de_connexion_utilisateur''),
            nom_long_du_champ( ''à faire chp_nom_de_connexion_utilisateur''),
            nom_court_du_champ( ''à faire chp_nom_de_connexion_utilisateur''),
            nom_bref_du_champ( ''à faire chp_nom_de_connexion_utilisateur''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_mot_de_passe_utilisateur''),
         type( ''VARCHAR(256)''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_mot_de_passe_utilisateur''),
            champ( ''chp_mot_de_passe_utilisateur''),
            nom_long_du_champ( ''à faire chp_mot_de_passe_utilisateur''),
            nom_court_du_champ( ''à faire chp_mot_de_passe_utilisateur''),
            nom_bref_du_champ( ''à faire chp_mot_de_passe_utilisateur''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_parametres_utilisateur''),
         type( ''TEXT''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_parametres_utilisateur''),
            champ( ''chp_parametres_utilisateur''),
            nom_long_du_champ( ''à faire chp_parametres_utilisateur''),
            nom_court_du_champ( ''à faire chp_parametres_utilisateur''),
            nom_bref_du_champ( ''à faire chp_parametres_utilisateur''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chi_compteur1_utilisateur''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_compteur1_utilisateur''),
            champ( ''chi_compteur1_utilisateur''),
            nom_long_du_champ( ''à faire chi_compteur1_utilisateur''),
            nom_court_du_champ( ''à faire chi_compteur1_utilisateur''),
            nom_bref_du_champ( ''à faire chi_compteur1_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chi_compteur_socket1_utilisateur''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_compteur_socket1_utilisateur''),
            champ( ''chi_compteur_socket1_utilisateur''),
            nom_long_du_champ( ''à faire chi_compteur_socket1_utilisateur''),
            nom_court_du_champ( ''à faire chi_compteur_socket1_utilisateur''),
            nom_bref_du_champ( ''à faire chi_compteur_socket1_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''che__nur_utilisateur''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che__nur_utilisateur''),
            champ( ''che__nur_utilisateur''),
            nom_long_du_champ( ''à faire chi__nut_utilisateur''),
            nom_court_du_champ( ''à faire chi__nut_utilisateur''),
            nom_bref_du_champ( ''à faire chi__nut_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtm_utilisateur''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtm_utilisateur''),
            champ( ''chp__dtm_utilisateur''),
            nom_long_du_champ( ''à faire chp__dtm_utilisateur''),
            nom_court_du_champ( ''à faire chp__dtm_utilisateur''),
            nom_bref_du_champ( ''à faire chp__dtm_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_modification(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtc_utilisateur''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtc_utilisateur''),
            champ( ''chp__dtc_utilisateur''),
            nom_long_du_champ( ''à faire chp__dtc_utilisateur''),
            nom_court_du_champ( ''à faire chp__dtc_utilisateur''),
            nom_bref_du_champ( ''à faire chp__dtc_utilisateur''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_creation(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_groupe_utilisateur''),
         type( ''INTEGER''),
         non_nulle(1),
         references( tbl_groupes , chi_id_groupe),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(2),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_groupe_utilisateur''),
            champ( ''chx_groupe_utilisateur''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_metier_utilisateur''),
         type( ''INTEGER''),
         non_nulle(1),
         references( tbl_metiers , chi_id_metier),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_metier_utilisateur''),
            champ( ''chx_metier_utilisateur''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_utilisateurs''),
   nom_de_l_index( ''idx_nom_unique_utilisateurs''),
   meta( nom_de_l_index(idx_nom_unique_utilisateurs) , genre_meta(index_de_table) , message( ''Ce nom d\''utilisateur existe déjà'' )),
   champs( ''chp_nom_de_connexion_utilisateur''),
   unique()
),
créer_table(
   nom_de_la_table( ''tbl_taches''),
   meta(
      nom_de_la_table( ''tbl_taches''),
      table( ''tbl_taches''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''''),
      nom_court_de_la_table( ''''),
      nom_bref_de_la_table( ''''),
      transform_table_sur_svg( translate( 430.5 , 608.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_tache''),
         type( ''integer''),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_tache''),
            champ( ''chi_id_tache''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_utilisateur_tache''),
         type( ''integer''),
         non_nulle(1),
         references( tbl_utilisateurs , chi_id_utilisateur),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_utilisateur_tache''),
            champ( ''chx_utilisateur_tache''),
            nom_long_du_champ( ''à faire chx_utilisateur_tache''),
            nom_court_du_champ( ''à faire chx_utilisateur_tache''),
            nom_bref_du_champ( ''à faire chx_utilisateur_tache''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            refe_enfant_droite(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_texte_tache''),
         type( ''text''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_texte_tache''),
            champ( ''chp_texte_tache''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_priorite_tache''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_priorite_tache''),
            champ( ''chp_priorite_tache''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''che__nur_tache''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che__nur_tache''),
            champ( ''che__nur_tache''),
            nom_long_du_champ( ''à faire chi__nut_tache''),
            nom_court_du_champ( ''à faire chi__nut_tache''),
            nom_bref_du_champ( ''à faire chi__nut_tache''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtm_tache''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtm_tache''),
            champ( ''chp__dtm_tache''),
            nom_long_du_champ( ''à faire chp__dtm_tache''),
            nom_court_du_champ( ''à faire chp__dtm_tache''),
            nom_bref_du_champ( ''à faire chp__dtm_tache''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_modification(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtc_tache''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtc_tache''),
            champ( ''chp__dtc_tache''),
            nom_long_du_champ( ''à faire chp__dtc_tache''),
            nom_court_du_champ( ''à faire chp__dtc_tache''),
            nom_bref_du_champ( ''à faire chp__dtc_tache''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_creation(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_taches''),
   nom_de_l_index( ''idx_texte_unique_taches''),
   meta( nom_de_l_index(idx_texte_unique_taches) , genre_meta(index_de_table) , message( ''Cete tache existe déjà'' )),
   champs( ''chp_texte_tache''),
   unique()
),
créer_table(
   nom_de_la_table( ''tbl_projets''),
   meta(
      nom_de_la_table( ''tbl_projets''),
      table( ''tbl_projets''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''''),
      nom_court_de_la_table( ''''),
      nom_bref_de_la_table( ''''),
      transform_table_sur_svg( translate( 272.5 , 10.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_projet''),
         type( ''integer''),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_projet''),
            champ( ''chi_id_projet''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_projet''),
         type( ''text''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_projet''),
            champ( ''chp_nom_projet''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_commentaire_projet''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_commentaire_projet''),
            champ( ''chp_commentaire_projet''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(0)
         )
      ),
      champ(
         nom_du_champ( ''che__nur_projet''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che__nur_projet''),
            champ( ''che__nur_projet''),
            nom_long_du_champ( ''à faire chi__nut_projet''),
            nom_court_du_champ( ''à faire chi__nut_projet''),
            nom_bref_du_champ( ''à faire chi__nut_projet''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtm_projet''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtm_projet''),
            champ( ''chp__dtm_projet''),
            nom_long_du_champ( ''à faire chp__dtm_projet''),
            nom_court_du_champ( ''à faire chp__dtm_projet''),
            nom_bref_du_champ( ''à faire chp__dtm_projet''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_modification(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtc_projet''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtc_projet''),
            champ( ''chp__dtc_projet''),
            nom_long_du_champ( ''à faire chp__dtc_projet''),
            nom_court_du_champ( ''à faire chp__dtc_projet''),
            nom_bref_du_champ( ''à faire chp__dtc_projet''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_creation(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_dossier_requetes_projet''),
         type( ''INTEGER''),
         references( tbl_dossiers , chi_id_dossier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_dossier_requetes_projet''),
            champ( ''chx_dossier_requetes_projet''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            refe_parent_gauche(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_projets''),
   nom_de_l_index( ''idx_nom_unique_projets''),
   meta( nom_de_l_index(idx_nom_unique_projets) , genre_meta(index_de_table) , message( ''ce projet existe déjà'' )),
   champs( ''chp_nom_projet''),
   unique()
),
créer_table(
   nom_de_la_table( ''tbl_requetes''),
   meta(
      nom_de_la_table( ''tbl_requetes''),
      table( ''tbl_requetes''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''AFR tbl_requetes''),
      nom_court_de_la_table( ''AFR tbl_requetes''),
      nom_bref_de_la_table( ''AFR tbl_requetes''),
      transform_table_sur_svg( translate( 13.5 , 29.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_requete''),
         type( ''integer''),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_requete''),
            champ( ''chi_id_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_projet_requete''),
         type( ''integer''),
         non_nulle(1),
         references( tbl_projets , chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_projet_requete''),
            champ( ''chx_projet_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            refe_enfant_droite(1),
            refe_parent_gauche(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_type_requete''),
         type( ''VARCHAR(64)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''select''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_type_requete''),
            champ( ''chp_type_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chp),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''cht_rev_requete''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''cht_rev_requete''),
            champ( ''cht_rev_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''cht_sql_requete''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''cht_sql_requete''),
            champ( ''cht_sql_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''cht_php_requete''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''cht_php_requete''),
            champ( ''cht_php_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''cht_commentaire_requete''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''cht_commentaire_requete''),
            champ( ''cht_commentaire_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(0)
         )
      ),
      champ(
         nom_du_champ( ''cht_matrice_requete''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''cht_matrice_requete''),
            champ( ''cht_matrice_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''che__nur_requete''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che__nur_requete''),
            champ( ''che__nur_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtm_requete''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtm_requete''),
            champ( ''chp__dtm_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chd),
            afficher_champ_dans_svg(0),
            champ_date_modification(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtc_requete''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtc_requete''),
            champ( ''chp__dtc_requete''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chd),
            afficher_champ_dans_svg(0),
            champ_date_creation(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table( ''tbl_revs''),
   meta(
      nom_de_la_table( ''tbl_revs''),
      table( ''tbl_revs''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''à faire tbl_revs''),
      nom_court_de_la_table( ''à faire tbl_revs''),
      nom_bref_de_la_table( ''à faire tbl_revs''),
      transform_table_sur_svg( translate( 679.5 , 411.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_rev''),
         type( ''integer''),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_rev''),
            champ( ''chi_id_rev''),
            nom_long_du_champ( ''à faire chi_id_rev''),
            nom_court_du_champ( ''à faire chi_id_rev''),
            nom_bref_du_champ( ''à faire chi_id_rev''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_projet_rev''),
         type( ''integer''),
         non_nulle(1),
         references( tbl_projets , chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_projet_rev''),
            champ( ''chx_projet_rev''),
            nom_long_du_champ( ''à faire chx_cible_rev''),
            nom_court_du_champ( ''à faire chx_cible_rev''),
            nom_bref_du_champ( ''à faire chx_cible_rev''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_provenance_rev''),
         type( ''VARCHAR(64)''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_provenance_rev''),
            champ( ''chp_provenance_rev''),
            nom_long_du_champ( ''à faire chp_provenance_rev''),
            nom_court_du_champ( ''à faire chp_provenance_rev''),
            nom_bref_du_champ( ''à faire chp_provenance_rev''),
            typologie(cho),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_source_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_source_rev''),
            champ( ''chx_source_rev''),
            nom_long_du_champ( ''à faire chx_source_rev''),
            nom_court_du_champ( ''à faire chx_source_rev''),
            nom_bref_du_champ( ''à faire chx_source_rev''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_id_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_id_rev''),
            champ( ''chp_id_rev''),
            nom_long_du_champ( ''à faire chp_id_rev''),
            nom_court_du_champ( ''à faire chp_id_rev''),
            nom_bref_du_champ( ''à faire chp_id_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_valeur_rev''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_valeur_rev''),
            champ( ''chp_valeur_rev''),
            nom_long_du_champ( ''à faire chp_valeur_rev''),
            nom_court_du_champ( ''à faire chp_valeur_rev''),
            nom_bref_du_champ( ''à faire chp_valeur_rev''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_type_rev''),
         type( ''VARCHAR(3)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_type_rev''),
            champ( ''chp_type_rev''),
            nom_long_du_champ( ''à faire chp_type_rev''),
            nom_court_du_champ( ''à faire chp_type_rev''),
            nom_bref_du_champ( ''à faire chp_type_rev''),
            typologie(cho),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_niveau_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_niveau_rev''),
            champ( ''chp_niveau_rev''),
            nom_long_du_champ( ''à faire chp_niveau_rev''),
            nom_court_du_champ( ''à faire chp_niveau_rev''),
            nom_bref_du_champ( ''à faire chp_niveau_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_quotee_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_quotee_rev''),
            champ( ''chp_quotee_rev''),
            nom_long_du_champ( ''à faire chp_quotee_rev''),
            nom_court_du_champ( ''à faire chp_quotee_rev''),
            nom_bref_du_champ( ''à faire chp_quotee_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_pos_premier_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_pos_premier_rev''),
            champ( ''chp_pos_premier_rev''),
            nom_long_du_champ( ''à faire chp_pos_premier_rev''),
            nom_court_du_champ( ''à faire chp_pos_premier_rev''),
            nom_bref_du_champ( ''à faire chp_pos_premier_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_pos_dernier_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_pos_dernier_rev''),
            champ( ''chp_pos_dernier_rev''),
            nom_long_du_champ( ''à faire chp_pos_dernier_rev''),
            nom_court_du_champ( ''à faire chp_pos_dernier_rev''),
            nom_bref_du_champ( ''à faire chp_pos_dernier_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_parent_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_parent_rev''),
            champ( ''chp_parent_rev''),
            nom_long_du_champ( ''à faire chp_parent_rev''),
            nom_court_du_champ( ''à faire chp_parent_rev''),
            nom_bref_du_champ( ''à faire chp_parent_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nbr_enfants_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nbr_enfants_rev''),
            champ( ''chp_nbr_enfants_rev''),
            nom_long_du_champ( ''à faire chp_nbr_enfants_rev''),
            nom_court_du_champ( ''à faire chp_nbr_enfants_rev''),
            nom_bref_du_champ( ''à faire chp_nbr_enfants_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_num_enfant_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_num_enfant_rev''),
            champ( ''chp_num_enfant_rev''),
            nom_long_du_champ( ''à faire chp_num_enfant_rev''),
            nom_court_du_champ( ''à faire chp_num_enfant_rev''),
            nom_bref_du_champ( ''à faire chp_num_enfant_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_profondeur_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_profondeur_rev''),
            champ( ''chp_profondeur_rev''),
            nom_long_du_champ( ''à faire chp_profondeur_rev''),
            nom_court_du_champ( ''à faire chp_profondeur_rev''),
            nom_bref_du_champ( ''à faire chp_profondeur_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_pos_ouver_parenthese_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_pos_ouver_parenthese_rev''),
            champ( ''chp_pos_ouver_parenthese_rev''),
            nom_long_du_champ( ''à faire chp_pos_ouver_parenthese_rev''),
            nom_court_du_champ( ''à faire chp_pos_ouver_parenthese_rev''),
            nom_bref_du_champ( ''à faire chp_pos_ouver_parenthese_rev''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_enfant_suivant_rev''),
         type( ''integer''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_enfant_suivant_rev''),
            champ( ''chp_enfant_suivant_rev''),
            nom_long_du_champ( ''AFR''),
            nom_court_du_champ( ''AFR''),
            nom_bref_du_champ( ''AFR''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_commentaire_rev''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_commentaire_rev''),
            champ( ''chp_commentaire_rev''),
            nom_long_du_champ( ''à faire chp_commentaire_rev''),
            nom_court_du_champ( ''à faire chp_commentaire_rev''),
            nom_bref_du_champ( ''à faire chp_commentaire_rev''),
            typologie(cht),
            afficher_champ_dans_svg(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_revs''),
   nom_de_l_index( ''idx_ligne_rev''),
   meta( nom_de_l_index(idx_ligne_rev) , genre_meta(index_de_table) , message( '''' )),
   champs( ''chx_projet_rev'' , ''chp_provenance_rev'' , ''chx_source_rev'' , ''chp_id_rev''),
   unique()
),
créer_table(
   nom_de_la_table( ''tbl_sources''),
   meta(
      nom_de_la_table( ''tbl_sources''),
      table( ''tbl_sources''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''''),
      nom_court_de_la_table( ''''),
      nom_bref_de_la_table( ''''),
      transform_table_sur_svg( translate( 687.5 , 39.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_source''),
         type( ''integer''),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_source''),
            champ( ''chi_id_source''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_projet_id_source''),
         type( ''integer''),
         non_nulle(1),
         references( tbl_projets , chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_projet_id_source''),
            champ( ''chx_projet_id_source''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_source''),
         type( ''TEXT''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_source''),
            champ( ''chp_nom_source''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''cht_commentaire_source''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''cht_commentaire_source''),
            champ( ''cht_commentaire_source''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(0)
         )
      ),
      champ(
         nom_du_champ( ''cht_rev_source''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''cht_rev_source''),
            champ( ''cht_rev_source''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''cht_genere_source''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''cht_genere_source''),
            champ( ''cht_genere_source''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''che_binaire_source''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che_binaire_source''),
            champ( ''che_binaire_source''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''che__nur_source''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che__nur_source''),
            champ( ''che__nur_source''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtm_source''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtm_source''),
            champ( ''chp__dtm_source''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chd),
            afficher_champ_dans_svg(0),
            champ_date_modification(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtc_source''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtc_source''),
            champ( ''chp__dtc_source''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chd),
            afficher_champ_dans_svg(0),
            champ_date_creation(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_dossier_id_source''),
         type( ''integer''),
         references( tbl_dossiers , chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_dossier_id_source''),
            champ( ''chx_dossier_id_source''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_sources''),
   nom_de_l_index( ''idx_source''),
   meta( nom_de_l_index(idx_source) , genre_meta(index_de_table) , message( '''' )),
   champs( ''chx_dossier_id_source'' , ''chp_nom_source''),
   unique()
),
créer_table(
   nom_de_la_table( ''tbl_dossiers''),
   meta(
      nom_de_la_table( ''tbl_dossiers''),
      table( ''tbl_dossiers''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''''),
      nom_court_de_la_table( ''''),
      nom_bref_de_la_table( ''''),
      transform_table_sur_svg( translate( 276.5 , 138.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_dossier''),
         type( ''integer''),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_dossier''),
            champ( ''chi_id_dossier''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_projet_dossier''),
         type( ''integer''),
         non_nulle(1),
         references( tbl_projets , chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_projet_dossier''),
            champ( ''chx_projet_dossier''),
            nom_long_du_champ( ''à faire chx_projet_dossier''),
            nom_court_du_champ( ''à faire chx_projet_dossier''),
            nom_bref_du_champ( ''à faire chx_projet_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(1),
            refe_enfant_droite(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_dossier''),
         type( ''CHARACTER(64)''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_dossier''),
            champ( ''chp_nom_dossier''),
            nom_long_du_champ( ''à faire chp_nom_dossier''),
            nom_court_du_champ( ''à faire chp_nom_dossier''),
            nom_bref_du_champ( ''à faire chp_nom_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_parent_dossier''),
         type( ''integer''),
         references( tbl_dossiers , chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_parent_dossier''),
            champ( ''chx_parent_dossier''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''che_contient_genere_dossier''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che_contient_genere_dossier''),
            champ( ''che_contient_genere_dossier''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(che),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''che__nur_dossier''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che__nur_dossier''),
            champ( ''che__nur_dossier''),
            nom_long_du_champ( ''à faire chi__nut_dossier''),
            nom_court_du_champ( ''à faire chi__nut_dossier''),
            nom_bref_du_champ( ''à faire chi__nut_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtm_dossier''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtm_dossier''),
            champ( ''chp__dtm_dossier''),
            nom_long_du_champ( ''à faire chp__dtm_dossier''),
            nom_court_du_champ( ''à faire chp__dtm_dossier''),
            nom_bref_du_champ( ''à faire chp__dtm_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_modification(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtc_dossier''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtc_dossier''),
            champ( ''chp__dtc_dossier''),
            nom_long_du_champ( ''à faire chp__dtc_dossier''),
            nom_court_du_champ( ''à faire chp__dtc_dossier''),
            nom_bref_du_champ( ''à faire chp__dtc_dossier''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_creation(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_dossiers''),
   nom_de_l_index( ''idx_projet_et_nom_dossiers''),
   meta( nom_de_l_index(idx_projet_et_nom_dossiers) , genre_meta(index_de_table) , message( ''Ce dossier existe déjà'' )),
   champs( ''chx_projet_dossier'' , ''chp_nom_dossier'' , ''chx_parent_dossier''),
   unique()
),
créer_table(
   nom_de_la_table( ''tbl_bdds''),
   meta(
      nom_de_la_table( ''tbl_bdds''),
      table( ''tbl_bdds''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''''),
      nom_court_de_la_table( ''''),
      nom_bref_de_la_table( ''''),
      transform_table_sur_svg( translate( 688.5 , 226.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_basedd''),
         type( ''integer''),
         primary_key(1),
         auto_increment(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_basedd''),
            champ( ''chi_id_basedd''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_projet_id_basedd''),
         type( ''integer''),
         non_nulle(1),
         references( tbl_projets , chi_id_projet),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_projet_id_basedd''),
            champ( ''chx_projet_id_basedd''),
            nom_long_du_champ( ''à faire chx_projet_id_basedd''),
            nom_court_du_champ( ''à faire chx_projet_id_basedd''),
            nom_bref_du_champ( ''à faire chx_projet_id_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_rev_basedd''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_rev_basedd''),
            champ( ''chp_rev_basedd''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_commentaire_basedd''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_commentaire_basedd''),
            champ( ''chp_commentaire_basedd''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_genere_basedd''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_genere_basedd''),
            champ( ''chp_genere_basedd''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_rev_travail_basedd''),
         type( ''text''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_rev_travail_basedd''),
            champ( ''chp_rev_travail_basedd''),
            nom_long_du_champ( ''''),
            nom_court_du_champ( ''''),
            nom_bref_du_champ( ''''),
            typologie(),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_fournisseur_basedd''),
         type( ''text''),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''sqlite''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_fournisseur_basedd''),
            champ( ''chp_fournisseur_basedd''),
            nom_long_du_champ( ''à faire chp_fournisseur_basedd''),
            nom_court_du_champ( ''à faire chp_fournisseur_basedd''),
            nom_bref_du_champ( ''à faire chp_fournisseur_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_dossier_id_basedd''),
         type( ''integer''),
         references( tbl_dossiers , chi_id_dossier),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_dossier_id_basedd''),
            champ( ''chx_dossier_id_basedd''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''che__nur_basedd''),
         type( ''integer''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ( ''che__nur_basedd''),
            champ( ''che__nur_basedd''),
            nom_long_du_champ( ''à faire chi__nut_basedd''),
            nom_court_du_champ( ''à faire chi__nut_basedd''),
            nom_bref_du_champ( ''à faire chi__nut_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_numero_de_revision(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtm_basedd''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtm_basedd''),
            champ( ''chp__dtm_basedd''),
            nom_long_du_champ( ''à faire chp__dtm_basedd''),
            nom_court_du_champ( ''à faire chp__dtm_basedd''),
            nom_bref_du_champ( ''à faire chp__dtm_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_modification(1)
         )
      ),
      champ(
         nom_du_champ( ''chp__dtc_basedd''),
         type( ''VARCHAR(23)''),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut( ''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp__dtc_basedd''),
            champ( ''chp__dtc_basedd''),
            nom_long_du_champ( ''à faire chp__dtc_basedd''),
            nom_court_du_champ( ''à faire chp__dtc_basedd''),
            nom_bref_du_champ( ''à faire chp__dtc_basedd''),
            typologie(chi),
            afficher_champ_dans_svg(0),
            champ_date_creation(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table( ''tbl_groupes''),
   meta(
      nom_de_la_table( ''tbl_groupes''),
      table( ''tbl_groupes''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''A faire  tbl_groupes''),
      nom_court_de_la_table( ''A faire tbl_groupes''),
      nom_bref_de_la_table( ''A faire tbl_groupes''),
      transform_table_sur_svg( translate( 189.5 , 293.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_groupe''),
         type( ''INTEGER''),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_groupe''),
            champ( ''chi_id_groupe''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_groupe''),
         type( ''VARCHAR(64)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_groupe''),
            champ( ''chp_nom_groupe''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_parent_groupe''),
         type( ''INTEGER''),
         non_nulle(1),
         references( tbl_groupes , chi_id_groupe),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_parent_groupe''),
            champ( ''chx_parent_groupe''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_groupes''),
   nom_de_l_index( ''idx_nom_groupe''),
   meta( nom_de_l_index(idx_nom_groupe) , genre_meta(index_de_table) , message( ''ce nom de groupe existe'' )),
   champs( ''chp_nom_groupe''),
   unique()
),
créer_table(
   nom_de_la_table( ''tbl_metiers''),
   meta(
      nom_de_la_table( ''tbl_metiers''),
      table( ''tbl_metiers''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''A faire  tbl_metiers''),
      nom_court_de_la_table( ''A faire tbl_metiers''),
      nom_bref_de_la_table( ''A faire tbl_metiers''),
      transform_table_sur_svg( translate( 190.5 , 412.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_metier''),
         type( ''INTEGER''),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_metier''),
            champ( ''chi_id_metier''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_metier''),
         type( ''VARCHAR(64)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_metier''),
            champ( ''chp_nom_metier''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_parent_metier''),
         type( ''INTEGER''),
         non_nulle(1),
         references( tbl_metiers , chi_id_metier),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_parent_metier''),
            champ( ''chx_parent_metier''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table( ''tbl_pages''),
   meta(
      nom_de_la_table( ''tbl_pages''),
      table( ''tbl_pages''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''A faire  tbl_pages''),
      nom_court_de_la_table( ''A faire tbl_pages''),
      nom_bref_de_la_table( ''A faire tbl_pages''),
      transform_table_sur_svg( translate( 15.5 , 393.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_page''),
         type( ''INTEGER''),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_page''),
            champ( ''chi_id_page''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_page''),
         type( ''VARCHAR(64)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_page''),
            champ( ''chp_nom_page''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_lien_rev_page''),
         type( ''VARCHAR(256)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_lien_rev_page''),
            champ( ''chp_lien_rev_page''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_parent_page''),
         type( ''INTEGER''),
         references( tbl_pages , chi_id_page),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_parent_page''),
            champ( ''chx_parent_page''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            refe_parent_gauche(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table( ''tbl_acces''),
   meta(
      nom_de_la_table( ''tbl_acces''),
      table( ''tbl_acces''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''A faire  tbl_acces''),
      nom_court_de_la_table( ''A faire tbl_acces''),
      nom_bref_de_la_table( ''A faire tbl_acces''),
      transform_table_sur_svg( translate( 367.5 , 247.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_acces''),
         type( ''INTEGER''),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_acces''),
            champ( ''chi_id_acces''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_acces''),
         type( ''VARCHAR(64)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_acces''),
            champ( ''chp_nom_acces''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_groupe_acces''),
         type( ''INTEGER''),
         non_nulle(1),
         references( tbl_groupes , chi_id_groupe),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_groupe_acces''),
            champ( ''chx_groupe_acces''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_metier_acces''),
         type( ''INTEGER''),
         non_nulle(1),
         references( tbl_metiers , chi_id_metier),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_metier_acces''),
            champ( ''chx_metier_acces''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      )
   )
)','sqlite','3','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('2','1',NULL,NULL,NULL,'meta(
   #(),
   genre_meta(base_de_données),
   default_charset( ''utf8mb4''),
   collate( ''utf8mb4_unicode_ci''),
   transform_base_sur_svg( translate( 53.5 , 53.5 ))
),
créer_table(
   nom_de_la_table( ''tbl_zzzs''),
   meta(
      nom_de_la_table( ''tbl_zzzs''),
      table( ''tbl_zzzs''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''AFR tbl_xxxx''),
      nom_court_de_la_table( ''AFR tbl_xxxx''),
      nom_bref_de_la_table( ''AFR tbl_xxxx''),
      transform_table_sur_svg( translate( 259.5 , 6.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_zzz''),
         type( ''integer''),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_zzz''),
            champ( ''chi_id_zzz''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chp_nom_yyy''),
         type( ''VARCHAR(64)''),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chp_nom_yyy''),
            champ( ''chp_nom_yyy''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chp),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_moi_zzz''),
         type( ''INTEGER''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_moi_zzz''),
            champ( ''chx_moi_zzz''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_zzzs''),
   nom_de_l_index( ''idx_0''),
   meta( nom_de_l_index(idx_3) , genre_meta(index_de_table) , message( '''' )),
   champs( ''chi_id_zzz''),
   unique()
),
créer_table(
   nom_de_la_table( ''tbl_yyys''),
   meta(
      nom_de_la_table( ''tbl_yyys''),
      table( ''tbl_yyys''),
      genre_meta(table_de_base),
      nom_long_de_la_table( ''AFR tbl_yyys''),
      nom_court_de_la_table( ''AFR tbl_yyys''),
      nom_bref_de_la_table( ''AFR tbl_yyys''),
      transform_table_sur_svg( translate( 22.5 , 168.5 ))
   ),
   champs(
      champ(
         nom_du_champ( ''chi_id_yyy''),
         type( ''INTEGER''),
         primary_key(1),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_id_yyy''),
            champ( ''chi_id_yyy''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chi_toto_yyy''),
         type( ''INTEGER''),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chi_toto_yyy''),
            champ( ''chi_toto_yyy''),
            nom_long_du_champ( ''AFR ...''),
            nom_court_du_champ( ''AFR ...''),
            nom_bref_du_champ( ''AFR ...''),
            typologie(chi),
            afficher_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ( ''chx_id_zzz_yyy''),
         type( ''INTEGER''),
         non_nulle(1),
         references( tbl_zzzs , chi_id_zzz),
         meta(
            genre_meta(champ),
            nom_du_champ( ''chx_id_zzz_yyy''),
            champ( ''chx_id_zzz_yyy''),
            nom_long_du_champ( ''A faire ...''),
            nom_court_du_champ( ''A faire ...''),
            nom_bref_du_champ( ''A faire ...''),
            typologie(chx),
            afficher_champ_dans_svg(1),
            refe_enfant_droite(1),
            refe_parent_gauche(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_yyys''),
   nom_de_l_index( ''idx_1''),
   meta( nom_de_l_index(idx_1) , genre_meta(index_de_table) , message( '''' )),
   champs( ''chi_id_yyy''),
   unique()
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index( ''tbl_yyys''),
   nom_de_l_index( ''idx_2''),
   meta( nom_de_l_index(idx_2) , genre_meta(index_de_table) , message( '''' )),
   champs( ''chi_toto_yyy'')
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
('1','développeur','1'),
('2','[***non défini***]','2');

/*
  ===============================
  PAS DE DONNEES A INSERER POUR : tbl_pages
  ===============================
*/


/*
  ===============================
  DONNEES A INSERER POUR : tbl_acces
  ===============================
*/

INSERT INTO tbl_acces (chi_id_acces,chp_nom_acces,chx_groupe_acces,chx_metier_acces) VALUES
('1','anonyme','2','2'),
('2','tous','1','1');

/*
  ============================
  3°) à la fin les index
  ============================
*/

CREATE UNIQUE INDEX idx_nom_unique_utilisateurs ON `tbl_utilisateurs` 
        /* meta( nom_de_l_index(idx_nom_unique_utilisateurs) , genre_meta(index_de_table) , message( 'Ce nom d\'utilisateur existe déjà' )) */
         ( `chp_nom_de_connexion_utilisateur` ) ;

CREATE UNIQUE INDEX idx_texte_unique_taches ON `tbl_taches` 
        /* meta( nom_de_l_index(idx_texte_unique_taches) , genre_meta(index_de_table) , message( 'Cete tache existe déjà' )) */
         ( `chp_texte_tache` ) ;

CREATE UNIQUE INDEX idx_nom_unique_projets ON `tbl_projets` 
        /* meta( nom_de_l_index(idx_nom_unique_projets) , genre_meta(index_de_table) , message( 'ce projet existe déjà' )) */
         ( `chp_nom_projet` ) ;

CREATE UNIQUE INDEX idx_ligne_rev ON `tbl_revs` 
        /* meta( nom_de_l_index(idx_ligne_rev) , genre_meta(index_de_table) , message( '' )) */
         ( `chx_projet_rev` , `chp_provenance_rev` , `chx_source_rev` , `chp_id_rev` ) ;

CREATE UNIQUE INDEX idx_source ON `tbl_sources` 
        /* meta( nom_de_l_index(idx_source) , genre_meta(index_de_table) , message( '' )) */
         ( `chx_dossier_id_source` , `chp_nom_source` ) ;

CREATE UNIQUE INDEX idx_projet_et_nom_dossiers ON `tbl_dossiers` 
        /* meta( nom_de_l_index(idx_projet_et_nom_dossiers) , genre_meta(index_de_table) , message( 'Ce dossier existe déjà' )) */
         ( `chx_projet_dossier` , `chp_nom_dossier` , `chx_parent_dossier` ) ;

CREATE UNIQUE INDEX idx_nom_groupe ON `tbl_groupes` 
        /* meta( nom_de_l_index(idx_nom_groupe) , genre_meta(index_de_table) , message( 'ce nom de groupe existe' )) */
         ( `chp_nom_groupe` ) ;

