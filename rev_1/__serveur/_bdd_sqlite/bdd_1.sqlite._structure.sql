CREATE TABLE tbl_utilisateurs(
/*
 meta(nom_de_la_table('tbl_utilisateurs'),table('tbl_utilisateurs'),genre_meta(table_de_base),nom_long_de_la_table('liste des utilisateurs'),nom_court_de_la_table('un utilisateur'),nom_bref_de_la_table('utilisateurs'),transform_table_sur_svg(translate(336.5,326.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_utilisateur'),champ('chi_id_utilisateur'),nom_long_du_champ('à faire chi_id_utilisateur'),nom_court_du_champ('à faire chi_id_utilisateur'),nom_bref_du_champ('à faire chi_id_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_utilisateur INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_de_connexion_utilisateur'),champ('chp_nom_de_connexion_utilisateur'),nom_long_du_champ('à faire chp_nom_de_connexion_utilisateur'),nom_court_du_champ('à faire chp_nom_de_connexion_utilisateur'),nom_bref_du_champ('à faire chp_nom_de_connexion_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_de_connexion_utilisateur VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_mot_de_passe_utilisateur'),champ('chp_mot_de_passe_utilisateur'),nom_long_du_champ('à faire chp_mot_de_passe_utilisateur'),nom_court_du_champ('à faire chp_mot_de_passe_utilisateur'),nom_bref_du_champ('à faire chp_mot_de_passe_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_mot_de_passe_utilisateur VARCHAR(256)
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_parametres_utilisateur'),champ('chp_parametres_utilisateur'),nom_long_du_champ('à faire chp_parametres_utilisateur'),nom_court_du_champ('à faire chp_parametres_utilisateur'),nom_bref_du_champ('à faire chp_parametres_utilisateur'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_parametres_utilisateur TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_compteur1_utilisateur'),champ('chi_compteur1_utilisateur'),nom_long_du_champ('à faire chi_compteur1_utilisateur'),nom_court_du_champ('à faire chi_compteur1_utilisateur'),nom_bref_du_champ('à faire chi_compteur1_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_compteur1_utilisateur integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_compteur_socket1_utilisateur'),champ('chi_compteur_socket1_utilisateur'),nom_long_du_champ('à faire chi_compteur_socket1_utilisateur'),nom_court_du_champ('à faire chi_compteur_socket1_utilisateur'),nom_bref_du_champ('à faire chi_compteur_socket1_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_compteur_socket1_utilisateur integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_utilisateur'),champ('che__nur_utilisateur'),nom_long_du_champ('à faire chi__nut_utilisateur'),nom_court_du_champ('à faire chi__nut_utilisateur'),nom_bref_du_champ('à faire chi__nut_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_utilisateur integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_utilisateur'),champ('chp__dtm_utilisateur'),nom_long_du_champ('à faire chp__dtm_utilisateur'),nom_court_du_champ('à faire chp__dtm_utilisateur'),nom_bref_du_champ('à faire chp__dtm_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_utilisateur'),champ('chp__dtc_utilisateur'),nom_long_du_champ('à faire chp__dtc_utilisateur'),nom_court_du_champ('à faire chp__dtc_utilisateur'),nom_bref_du_champ('à faire chp__dtc_utilisateur'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_utilisateur VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_acces_utilisateur'),champ('chx_acces_utilisateur'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_acces_utilisateur INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces)  DEFAULT  2
    );

CREATE TABLE tbl_taches(
/*
 meta(nom_de_la_table('tbl_taches'),table('tbl_taches'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(402.5,544.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_tache'),champ('chi_id_tache'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_tache integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_utilisateur_tache'),champ('chx_utilisateur_tache'),nom_long_du_champ('à faire chx_utilisateur_tache'),nom_court_du_champ('à faire chx_utilisateur_tache'),nom_bref_du_champ('à faire chx_utilisateur_tache'),
            typologie(chi),afficher_champ_dans_svg(1),refe_enfant_droite(1)
            )
            */
             chx_utilisateur_tache integer NOT NULL REFERENCES tbl_utilisateurs(chi_id_utilisateur) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_texte_tache'),champ('chp_texte_tache'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_texte_tache text NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_priorite_tache'),champ('chp_priorite_tache'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_priorite_tache integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_tache'),champ('che__nur_tache'),nom_long_du_champ('à faire chi__nut_tache'),nom_court_du_champ('à faire chi__nut_tache'),nom_bref_du_champ('à faire chi__nut_tache'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_tache integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_tache'),champ('chp__dtm_tache'),nom_long_du_champ('à faire chp__dtm_tache'),nom_court_du_champ('à faire chp__dtm_tache'),nom_bref_du_champ('à faire chp__dtm_tache'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_tache'),champ('chp__dtc_tache'),nom_long_du_champ('à faire chp__dtc_tache'),nom_court_du_champ('à faire chp__dtc_tache'),nom_bref_du_champ('à faire chp__dtc_tache'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_tache VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_projets(
/*
 meta(nom_de_la_table('tbl_projets'),table('tbl_projets'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(272.5,9.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_projet'),champ('chi_id_projet'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_projet integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_projet'),champ('chp_nom_projet'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_projet text NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_commentaire_projet'),champ('cht_commentaire_projet'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             cht_commentaire_projet text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_projet'),champ('che__nur_projet'),nom_long_du_champ('à faire chi__nut_projet'),nom_court_du_champ('à faire chi__nut_projet'),nom_bref_du_champ('à faire chi__nut_projet'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_projet integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_projet'),champ('chp__dtm_projet'),nom_long_du_champ('à faire chp__dtm_projet'),nom_court_du_champ('à faire chp__dtm_projet'),nom_bref_du_champ('à faire chp__dtm_projet'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_projet'),champ('chp__dtc_projet'),nom_long_du_champ('à faire chp__dtc_projet'),nom_court_du_champ('à faire chp__dtc_projet'),nom_bref_du_champ('à faire chp__dtc_projet'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_projet VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_dossier_requetes_projet'),champ('chx_dossier_requetes_projet'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1),refe_parent_gauche(1)
            )
            */
             chx_dossier_requetes_projet INTEGER REFERENCES tbl_dossiers(chi_id_dossier)  DEFAULT  NULL 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_dossier_menus_projet'),champ('chx_dossier_menus_projet'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),refe_parent_gauche(1)
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
            genre_meta(champ),nom_du_champ('chi_id_requete'),champ('chi_id_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_requete integer PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_requete'),champ('chx_projet_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1),refe_enfant_droite(1),refe_parent_gauche(1)
            )
            */
             chx_projet_requete integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_type_requete'),champ('chp_type_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_type_requete VARCHAR(64) NOT NULL DEFAULT  'select'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_rev_requete'),champ('cht_rev_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_rev_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_sql_requete'),champ('cht_sql_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_sql_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_php_requete'),champ('cht_php_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_php_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_commentaire_requete'),champ('cht_commentaire_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(0)
            )
            */
             cht_commentaire_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_matrice_requete'),champ('cht_matrice_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_matrice_requete text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_requete'),champ('che__nur_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_requete integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_requete'),champ('chp__dtm_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_requete'),champ('chp__dtc_requete'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_requete VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_revs(
/*
 meta(nom_de_la_table('tbl_revs'),table('tbl_revs'),genre_meta(table_de_base),nom_long_de_la_table('à faire tbl_revs'),nom_court_de_la_table('à faire tbl_revs'),nom_bref_de_la_table('à faire tbl_revs'),transform_table_sur_svg(translate(632.5,337.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_rev'),champ('chi_id_rev'),nom_long_du_champ('à faire chi_id_rev'),nom_court_du_champ('à faire chi_id_rev'),nom_bref_du_champ('à faire chi_id_rev'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_rev integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_rev'),champ('chx_projet_rev'),nom_long_du_champ('à faire chx_cible_rev'),nom_court_du_champ('à faire chx_cible_rev'),nom_bref_du_champ('à faire chx_cible_rev'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_projet_rev integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_provenance_rev'),champ('chp_provenance_rev'),nom_long_du_champ('à faire chp_provenance_rev'),nom_court_du_champ('à faire chp_provenance_rev'),nom_bref_du_champ('à faire chp_provenance_rev'),
            typologie(cho),afficher_champ_dans_svg(1)
            )
            */
             chp_provenance_rev VARCHAR(64)
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_source_rev'),champ('chx_source_rev'),nom_long_du_champ('à faire chx_source_rev'),nom_court_du_champ('à faire chx_source_rev'),nom_bref_du_champ('à faire chx_source_rev'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_source_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_id_rev'),champ('chp_id_rev'),nom_long_du_champ('à faire chp_id_rev'),nom_court_du_champ('à faire chp_id_rev'),nom_bref_du_champ('à faire chp_id_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_id_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_valeur_rev'),champ('chp_valeur_rev'),nom_long_du_champ('à faire chp_valeur_rev'),nom_court_du_champ('à faire chp_valeur_rev'),nom_bref_du_champ('à faire chp_valeur_rev'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_valeur_rev text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_type_rev'),champ('chp_type_rev'),nom_long_du_champ('à faire chp_type_rev'),nom_court_du_champ('à faire chp_type_rev'),nom_bref_du_champ('à faire chp_type_rev'),
            typologie(cho),afficher_champ_dans_svg(1)
            )
            */
             chp_type_rev VARCHAR(3) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_niveau_rev'),champ('chp_niveau_rev'),nom_long_du_champ('à faire chp_niveau_rev'),nom_court_du_champ('à faire chp_niveau_rev'),nom_bref_du_champ('à faire chp_niveau_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_niveau_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_quotee_rev'),champ('chp_quotee_rev'),nom_long_du_champ('à faire chp_quotee_rev'),nom_court_du_champ('à faire chp_quotee_rev'),nom_bref_du_champ('à faire chp_quotee_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_quotee_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_pos_premier_rev'),champ('chp_pos_premier_rev'),nom_long_du_champ('à faire chp_pos_premier_rev'),nom_court_du_champ('à faire chp_pos_premier_rev'),nom_bref_du_champ('à faire chp_pos_premier_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_pos_premier_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_pos_dernier_rev'),champ('chp_pos_dernier_rev'),nom_long_du_champ('à faire chp_pos_dernier_rev'),nom_court_du_champ('à faire chp_pos_dernier_rev'),nom_bref_du_champ('à faire chp_pos_dernier_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_pos_dernier_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_parent_rev'),champ('chp_parent_rev'),nom_long_du_champ('à faire chp_parent_rev'),nom_court_du_champ('à faire chp_parent_rev'),nom_bref_du_champ('à faire chp_parent_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_parent_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nbr_enfants_rev'),champ('chp_nbr_enfants_rev'),nom_long_du_champ('à faire chp_nbr_enfants_rev'),nom_court_du_champ('à faire chp_nbr_enfants_rev'),nom_bref_du_champ('à faire chp_nbr_enfants_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_nbr_enfants_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_num_enfant_rev'),champ('chp_num_enfant_rev'),nom_long_du_champ('à faire chp_num_enfant_rev'),nom_court_du_champ('à faire chp_num_enfant_rev'),nom_bref_du_champ('à faire chp_num_enfant_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_num_enfant_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_profondeur_rev'),champ('chp_profondeur_rev'),nom_long_du_champ('à faire chp_profondeur_rev'),nom_court_du_champ('à faire chp_profondeur_rev'),nom_bref_du_champ('à faire chp_profondeur_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_profondeur_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_pos_ouver_parenthese_rev'),champ('chp_pos_ouver_parenthese_rev'),nom_long_du_champ('à faire chp_pos_ouver_parenthese_rev'),nom_court_du_champ('à faire chp_pos_ouver_parenthese_rev'),nom_bref_du_champ('à faire chp_pos_ouver_parenthese_rev'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_pos_ouver_parenthese_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_enfant_suivant_rev'),champ('chp_enfant_suivant_rev'),nom_long_du_champ('AFR'),nom_court_du_champ('AFR'),nom_bref_du_champ('AFR'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             chp_enfant_suivant_rev integer
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_commentaire_rev'),champ('chp_commentaire_rev'),nom_long_du_champ('à faire chp_commentaire_rev'),nom_court_du_champ('à faire chp_commentaire_rev'),nom_bref_du_champ('à faire chp_commentaire_rev'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             chp_commentaire_rev text
    );

CREATE TABLE tbl_sources(
/*
 meta(nom_de_la_table('tbl_sources'),table('tbl_sources'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(606.5,15.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_source'),champ('chi_id_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_source integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_id_source'),champ('chx_projet_id_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chx_projet_id_source integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_source'),champ('chp_nom_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_source TEXT NOT NULL DEFAULT  ''
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_commentaire_source'),champ('cht_commentaire_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(0)
            )
            */
             cht_commentaire_source text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_rev_source'),champ('cht_rev_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             cht_rev_source text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_genere_source'),champ('cht_genere_source'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             cht_genere_source text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_binaire_source'),champ('che_binaire_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             che_binaire_source integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_source'),champ('che__nur_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_source integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_source'),champ('chp__dtm_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_source'),champ('chp__dtc_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chd),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_source VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_dossier_id_source'),champ('chx_dossier_id_source'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_dossier_id_source integer REFERENCES tbl_dossiers(chi_id_dossier) 
    );

CREATE TABLE tbl_dossiers(
/*
 meta(nom_de_la_table('tbl_dossiers'),table('tbl_dossiers'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(271.5,153.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_dossier'),champ('chi_id_dossier'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_dossier integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_dossier'),champ('chx_projet_dossier'),nom_long_du_champ('à faire chx_projet_dossier'),nom_court_du_champ('à faire chx_projet_dossier'),nom_bref_du_champ('à faire chx_projet_dossier'),
            typologie(chi),afficher_champ_dans_svg(1),refe_enfant_droite(1)
            )
            */
             chx_projet_dossier integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_dossier'),champ('chp_nom_dossier'),nom_long_du_champ('à faire chp_nom_dossier'),nom_court_du_champ('à faire chp_nom_dossier'),nom_bref_du_champ('à faire chp_nom_dossier'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_dossier CHARACTER(64)
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_parent_dossier'),champ('chx_parent_dossier'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1),refe_parent_gauche(1)
            )
            */
             chx_parent_dossier integer REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_contient_genere_dossier'),champ('che_contient_genere_dossier'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             che_contient_genere_dossier integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_dossier'),champ('che__nur_dossier'),nom_long_du_champ('à faire chi__nut_dossier'),nom_court_du_champ('à faire chi__nut_dossier'),nom_bref_du_champ('à faire chi__nut_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_dossier integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_dossier'),champ('chp__dtm_dossier'),nom_long_du_champ('à faire chp__dtm_dossier'),nom_court_du_champ('à faire chp__dtm_dossier'),nom_bref_du_champ('à faire chp__dtm_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_dossier'),champ('chp__dtc_dossier'),nom_long_du_champ('à faire chp__dtc_dossier'),nom_court_du_champ('à faire chp__dtc_dossier'),nom_bref_du_champ('à faire chp__dtc_dossier'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
            )
            */
             chp__dtc_dossier VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );

CREATE TABLE tbl_bdds(
/*
 meta(nom_de_la_table('tbl_bdds'),table('tbl_bdds'),genre_meta(table_de_base),nom_long_de_la_table(''),nom_court_de_la_table(''),nom_bref_de_la_table(''),transform_table_sur_svg(translate(609.5,194.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_basedd'),champ('chi_id_basedd'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chi_id_basedd integer PRIMARY KEY 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_projet_id_basedd'),champ('chx_projet_id_basedd'),nom_long_du_champ('à faire chx_projet_id_basedd'),nom_court_du_champ('à faire chx_projet_id_basedd'),nom_bref_du_champ('à faire chx_projet_id_basedd'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chx_projet_id_basedd integer NOT NULL REFERENCES tbl_projets(chi_id_projet) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_commentaire_basedd'),champ('chp_commentaire_basedd'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_commentaire_basedd text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_rev_travail_basedd'),champ('chp_rev_travail_basedd'),nom_long_du_champ(''),nom_court_du_champ(''),nom_bref_du_champ(''),
            typologie(),afficher_champ_dans_svg(1)
            )
            */
             chp_rev_travail_basedd text
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_fournisseur_basedd'),champ('chp_fournisseur_basedd'),nom_long_du_champ('à faire chp_fournisseur_basedd'),nom_court_du_champ('à faire chp_fournisseur_basedd'),nom_bref_du_champ('à faire chp_fournisseur_basedd'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chp_fournisseur_basedd text DEFAULT  'sqlite'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_dossier_id_basedd'),champ('chx_dossier_id_basedd'),nom_long_du_champ('AFR ...'),nom_court_du_champ('AFR ...'),nom_bref_du_champ('AFR ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_dossier_id_basedd integer REFERENCES tbl_dossiers(chi_id_dossier) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che__nur_basedd'),champ('che__nur_basedd'),nom_long_du_champ('à faire chi__nut_basedd'),nom_court_du_champ('à faire chi__nut_basedd'),nom_bref_du_champ('à faire chi__nut_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),champ_numero_de_revision(1)
            )
            */
             che__nur_basedd integer NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtm_basedd'),champ('chp__dtm_basedd'),nom_long_du_champ('à faire chp__dtm_basedd'),nom_court_du_champ('à faire chp__dtm_basedd'),nom_bref_du_champ('à faire chp__dtm_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_modification(1)
            )
            */
             chp__dtm_basedd VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp__dtc_basedd'),champ('chp__dtc_basedd'),nom_long_du_champ('à faire chp__dtc_basedd'),nom_court_du_champ('à faire chp__dtc_basedd'),nom_bref_du_champ('à faire chp__dtc_basedd'),
            typologie(chi),afficher_champ_dans_svg(0),champ_date_creation(1)
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
            genre_meta(champ),nom_du_champ('chi_id_groupe'),champ('chi_id_groupe'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_groupe INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_groupe'),champ('chp_nom_groupe'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_groupe VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_parent_groupe'),champ('chx_parent_groupe'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
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
            genre_meta(champ),nom_du_champ('chi_id_metier'),champ('chi_id_metier'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_metier INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_metier'),champ('chp_nom_metier'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_metier VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_parent_metier'),champ('chx_parent_metier'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_parent_metier INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    );

CREATE TABLE tbl_pages(
/*
 meta(nom_de_la_table('tbl_pages'),table('tbl_pages'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_pages'),nom_court_de_la_table('A faire tbl_pages'),nom_bref_de_la_table('A faire tbl_pages'),transform_table_sur_svg(translate(66.5,396.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_page'),champ('chi_id_page'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_page INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_page'),champ('chp_nom_page'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_page VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_parent_page'),champ('chx_parent_page'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),refe_parent_gauche(1)
            )
            */
             chx_parent_page INTEGER REFERENCES tbl_pages(chi_id_page) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_acces_page'),champ('chx_acces_page'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),refe_enfant_droite(1)
            )
            */
             chx_acces_page INTEGER REFERENCES tbl_acces(chi_id_acces) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_source_page'),champ('chx_source_page'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),refe_enfant_droite(1),refe_parent_gauche(1)
            )
            */
             chx_source_page INTEGER REFERENCES tbl_sources(chi_id_source) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_methode_page'),champ('chp_methode_page'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_methode_page VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_complement_page'),champ('cht_complement_page'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             cht_complement_page TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_contenu_methode_page'),champ('cht_contenu_methode_page'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             cht_contenu_methode_page VARCHAR(128)
    );

CREATE TABLE tbl_acces(
/*
 meta(nom_de_la_table('tbl_acces'),table('tbl_acces'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_acces'),nom_court_de_la_table('A faire tbl_acces'),nom_bref_de_la_table('A faire tbl_acces'),transform_table_sur_svg(translate(177.5,291.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_acces'),champ('chi_id_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_acces INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chp_nom_acces'),champ('chp_nom_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             chp_nom_acces VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_groupe_acces'),champ('chx_groupe_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_groupe_acces INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_metier_acces'),champ('chx_metier_acces'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1)
            )
            */
             chx_metier_acces INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) 
    );

CREATE TABLE tbl_menus(
/*
 meta(nom_de_la_table('tbl_menus'),table('tbl_menus'),genre_meta(table_de_base),nom_long_de_la_table('A faire  tbl_menus'),nom_court_de_la_table('A faire tbl_menus'),nom_bref_de_la_table('A faire tbl_menus'),transform_table_sur_svg(translate(35.5,629.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chi_id_menu'),champ('chi_id_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chi),afficher_champ_dans_svg(1)
            )
            */
             chi_id_menu INTEGER PRIMARY KEY  NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('chx_page_menu'),champ('chx_page_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chx),afficher_champ_dans_svg(1),refe_parent_gauche(1)
            )
            */
             chx_page_menu INTEGER NOT NULL REFERENCES tbl_pages(chi_id_page) 
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('che_ordre_menu'),champ('che_ordre_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(che),afficher_champ_dans_svg(1)
            )
            */
             che_ordre_menu INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_prerequis_rev_menu'),champ('cht_prerequis_rev_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(chp),afficher_champ_dans_svg(1)
            )
            */
             cht_prerequis_rev_menu TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_prerequis_php_menu'),champ('cht_prerequis_php_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_prerequis_php_menu TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),nom_du_champ('cht_libelle_menu'),champ('cht_libelle_menu'),nom_long_du_champ('A faire ...'),nom_court_du_champ('A faire ...'),nom_bref_du_champ('A faire ...'),
            typologie(cht),afficher_champ_dans_svg(1)
            )
            */
             cht_libelle_menu TEXT
    );

