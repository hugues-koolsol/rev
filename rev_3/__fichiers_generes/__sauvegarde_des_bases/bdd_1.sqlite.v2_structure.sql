
/*
================================================================================ TABLE tbl_groupes 
*/

CREATE TABLE `tbl_groupes`(
/*
 meta(nom_de_la_table('tbl_groupes'),
   table('tbl_groupes'),
   genre_meta(table_de_base),rang_de_la_table(10),permet_la_gestion_de('groupe'),
   distinction_pour_liste('liste des groupes'),
   distinction_pour_isad('d\'un groupe'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),transform_base_sur_svg(translate(7,207))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_groupe'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_groupe` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_groupe'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom du groupe'),
            typologie(cht),
            genre(19),
            est_libelle_lien(1),nom_bref_libelle_lien('groupe')
            )
            */
             `chp_nom_groupe` VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_groupe'),
            nom_bref_du_champ('parent'),abrege_du_champ('parent'),
            typologie(chx),
            genre(8)
            )
            */
             `chx_parent_groupe` INTEGER REFERENCES tbl_groupes(chi_id_groupe) ON UPDATE CASCADE DEFAULT  NULL
    );




/*
================================================================================ TABLE tbl_metiers 
*/

CREATE TABLE `tbl_metiers`(
/*
 meta(nom_de_la_table('tbl_metiers'),
   table('tbl_metiers'),
   genre_meta(table_de_base),rang_de_la_table(20),permet_la_gestion_de('metier'),
   distinction_pour_liste('liste des metiers'),
   distinction_pour_isad('d\'un metier'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),transform_base_sur_svg(translate(6,303))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_metier'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_metier` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_metier'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom du métier'),
            typologie(cht),
            genre(19),
            est_libelle_lien(1),nom_bref_libelle_lien('metier')
            )
            */
             `chp_nom_metier` VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_metier'),
            nom_bref_du_champ('parent'),abrege_du_champ('parent'),
            typologie(chx),
            genre(8)
            )
            */
             `chx_parent_metier` INTEGER REFERENCES tbl_metiers(chi_id_metier) ON UPDATE CASCADE DEFAULT  NULL
    );




/*
================================================================================ TABLE tbl_acces 
*/

CREATE TABLE `tbl_acces`(
/*
 meta(nom_de_la_table('tbl_acces'),
   table('tbl_acces'),
   genre_meta(table_de_base),rang_de_la_table(30),permet_la_gestion_de('accès'),
   distinction_pour_liste('liste des accès'),
   distinction_pour_isad('d\'un accès'),fonctions_spéciales1('ne_pas_supprimer_id_un(2),ne_pas_modifier(0)'),transform_base_sur_svg(translate(210,266))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_acces'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_acces` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_acces'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),nom_bref_libelle_lien('acces')
            )
            */
             `chp_nom_acces` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_groupe_acces'),
            nom_bref_du_champ('groupe'),abrege_du_champ('groupe'),
            typologie(chx),
            genre(4),reference_externe(1,'tbl_groupes','chi_id_groupe')
            )
            */
             `chx_groupe_acces` INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_metier_acces'),
            nom_bref_du_champ('metier'),abrege_du_champ('metier'),
            typologie(chx),
            genre(4),reference_externe(1,'tbl_metiers','chi_id_metier')
            )
            */
             `chx_metier_acces` INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_parametres_acces'),
            nom_bref_du_champ('parametres'),abrege_du_champ('parametres'),
            typologie(cht),
            genre(11)
            )
            */
             `cht_parametres_acces` TEXT NOT NULL DEFAULT  '{}'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_actif_acces'),
            nom_bref_du_champ('actif'),abrege_du_champ('actif'),
            typologie(che),
            genre(5)
            )
            */
             `che_actif_acces` INTEGER NOT NULL DEFAULT  1
    );




/*
================================================================================ TABLE tbl_autorisations 
*/

CREATE TABLE `tbl_autorisations`(
/*
 meta(nom_de_la_table('tbl_autorisations'),
   table('tbl_autorisations'),
   genre_meta(table_de_base),rang_de_la_table(40),permet_la_gestion_de('autorisation'),
   distinction_pour_liste('liste des autorisations'),
   distinction_pour_isad('d\'une autorisation'),transform_base_sur_svg(translate(470,260))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_autorisation'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_autorisation` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_source_autorisation'),
            nom_bref_du_champ('source'),abrege_du_champ('source'),
            typologie(chx),
            genre(4),reference_externe(1,'tbl_sources','chi_id_source')
            )
            */
             `chx_source_autorisation` INTEGER NOT NULL REFERENCES tbl_sources(chi_id_source) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_acces_autorisation'),
            nom_bref_du_champ('acces'),abrege_du_champ('acces'),
            typologie(chx),
            genre(4),reference_externe(1,'tbl_acces','chi_id_acces')
            )
            */
             `chx_acces_autorisation` INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_pour_sous_liste_autorisation'),
            nom_bref_du_champ('pour sous liste'),abrege_du_champ('pour accès sous liste'),
            typologie(che),
            genre(5)
            )
            */
             `che_pour_sous_liste_autorisation` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_menus 
*/

CREATE TABLE `tbl_menus`(
/*
 meta(nom_de_la_table('tbl_menus'),
   table('tbl_menus'),
   genre_meta(table_de_base),rang_de_la_table(50),permet_la_gestion_de('menu'),
   distinction_pour_liste('liste des menus'),
   distinction_pour_isad('d\'un menu'),transform_base_sur_svg(translate(743,269))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_menu'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_menu` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_libelle_menu'),
            nom_bref_du_champ('libelle'),abrege_du_champ('libelle'),
            typologie(cht),
            genre(11)
            )
            */
             `cht_libelle_menu` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_titre_menu'),
            nom_bref_du_champ('titre'),abrege_du_champ('titre'),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),nom_bref_libelle_lien('menu')
            )
            */
             `chp_titre_menu` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_autorisation_menu'),
            nom_bref_du_champ('autorisation'),abrege_du_champ('autorisation'),
            typologie(chx),
            genre(4),reference_externe(1,'tbl_autorisations','chi_id_autorisation')
            )
            */
             `chx_autorisation_menu` INTEGER NOT NULL REFERENCES tbl_autorisations(chi_id_autorisation) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_methode_menu'),
            nom_bref_du_champ('methode'),abrege_du_champ('methode'),
            typologie(chp),
            genre(3)
            )
            */
             `chp_methode_menu` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_initialisation_menu'),
            nom_bref_du_champ('initialisation'),abrege_du_champ('initialisation'),
            typologie(cht),
            genre(98)
            )
            */
             `cht_initialisation_menu` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_menu'),
            nom_bref_du_champ('condition'),abrege_du_champ('condition'),
            typologie(cht),
            genre(98)
            )
            */
             `cht_condition_menu` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_js_menu'),
            nom_bref_du_champ('condition php'),abrege_du_champ('condition php'),
            typologie(cht),
            genre(97)
            )
            */
             `cht_condition_js_menu` TEXT DEFAULT  NULL
    );




/*
================================================================================ TABLE tbl_sources 
*/

CREATE TABLE `tbl_sources`(
/*
 meta(nom_de_la_table('tbl_sources'),
   table('tbl_sources'),
   genre_meta(table_de_base),rang_de_la_table(60),permet_la_gestion_de('source'),
   distinction_pour_liste('liste des sources'),
   distinction_pour_isad('d\'un source'),transform_base_sur_svg(translate(192,-1))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_source'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_source` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_source'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),
            typologie(chp),
            genre(19),
            est_libelle_lien(1),nom_bref_libelle_lien('source')
            )
            */
             `chp_nom_source` VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_source'),
            nom_bref_du_champ('rev'),abrege_du_champ('rev'),
            typologie(cht),
            genre(98)
            )
            */
             `cht_rev_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_genere_source'),
            nom_bref_du_champ('genere'),abrege_du_champ('genere'),
            typologie(cht),
            genre(97)
            )
            */
             `cht_genere_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_binaire_source'),
            nom_bref_du_champ('binaire'),abrege_du_champ('binaire'),
            typologie(che),
            genre(5)
            )
            */
             `che_binaire_source` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_dossier_id_source'),
            nom_bref_du_champ('dossier id'),abrege_du_champ('dossier id'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_dossier_id_source` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_source'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),
            typologie(cht),
            genre(6)
            )
            */
             `cht_commentaire_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_source'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1)
            )
            */
             `chd__dtm_source` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_source'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1)
            )
            */
             `chd__dtc_source` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_source'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(chi),
            genre(10),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_source` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_autorisation_globale_source'),
            nom_bref_du_champ('autorisation globale'),abrege_du_champ('autorisation globale'),
            typologie(che),
            genre(5)
            )
            */
             `che_autorisation_globale_source` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_js_source'),
            nom_bref_du_champ('condition js'),abrege_du_champ('condition au format js'),
            typologie(cht),
            genre(97)
            )
            */
             `cht_condition_js_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_rev_source'),
            nom_bref_du_champ('condition rev'),abrege_du_champ('condition au format rev'),
            typologie(cht),
            genre(98)
            )
            */
             `cht_condition_rev_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_notification_ko_source'),
            nom_bref_du_champ('notification ko'),abrege_du_champ('notification si condition ko'),
            typologie(cht),
            genre(6)
            )
            */
             `cht_notification_ko_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_pour_util_source'),
            nom_bref_du_champ('pas pour util'),abrege_du_champ('pas pour util'),
            typologie(che),
            genre(5)
            )
            */
             `che_pour_util_source` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_utilisateurs 
*/

CREATE TABLE `tbl_utilisateurs`(
/*
 meta(nom_de_la_table('tbl_utilisateurs'),
   table('tbl_utilisateurs'),
   genre_meta(table_de_base),rang_de_la_table(70),permet_la_gestion_de('utilisateur'),
   distinction_pour_liste('liste des utilisateurs'),
   distinction_pour_isad('d\'un utilisateur'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),transform_base_sur_svg(translate(431,399))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_utilisateur'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2),est_en_session(1)
            )
            */
             `chi_id_utilisateur` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_de_connexion_utilisateur'),
            nom_bref_du_champ('nom de connexion'),abrege_du_champ('nom de connexion de l\'utilisateur'),
            typologie(cht),
            genre(3),
            est_libelle_lien(1),nom_bref_libelle_lien('utilisateur')
            )
            */
             `chp_nom_de_connexion_utilisateur` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_mot_de_passe_utilisateur'),
            nom_bref_du_champ('mot de passe'),abrege_du_champ('mot de passe'),
            typologie(cht),
            genre(13)
            )
            */
             `chp_mot_de_passe_utilisateur` VARCHAR(256) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_parametres_utilisateur'),
            nom_bref_du_champ('parametres'),abrege_du_champ('parametres'),
            typologie(cht),
            genre(6)
            )
            */
             `chp_parametres_utilisateur` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_compteur1_utilisateur'),
            nom_bref_du_champ('compteur1'),abrege_du_champ('compteur1'),
            typologie(chi),
            genre(10)
            )
            */
             `chi_compteur1_utilisateur` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_acces_utilisateur'),
            nom_bref_du_champ('acces'),abrege_du_champ('acces'),
            typologie(chx),
            genre(4),reference_externe(1,'tbl_acces','chi_id_acces')
            )
            */
             `chx_acces_utilisateur` INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_utilisateur'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1)
            )
            */
             `chd__dtm_utilisateur` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_utilisateur'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1)
            )
            */
             `chd__dtc_utilisateur` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_utilisateur'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(chi),
            genre(10),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_utilisateur` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_actif_utilisateur'),
            nom_bref_du_champ('actif'),abrege_du_champ('actif'),
            typologie(che),
            genre(5)
            )
            */
             `che_actif_utilisateur` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_taches 
*/

CREATE TABLE `tbl_taches`(
/*
 meta(nom_de_la_table('tbl_taches'),
   table('tbl_taches'),
   genre_meta(table_de_base),rang_de_la_table(80),permet_la_gestion_de('tâche'),
   distinction_pour_liste('liste des tâches'),
   distinction_pour_isad('d\'une tâche'),transform_base_sur_svg(translate(727,511))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_tache'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_tache` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_utilisateur_tache'),
            nom_bref_du_champ('utilisateur'),abrege_du_champ('utilisateur'),
            typologie(chx),
            genre(18),est_en_session(1),nom_en_session('chi_id_utilisateur'),reference_externe(1,'tbl_utilisateurs','chi_id_utilisateur')
            )
            */
             `chx_utilisateur_tache` INTEGER NOT NULL REFERENCES tbl_utilisateurs(chi_id_utilisateur) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_texte_tache'),
            nom_bref_du_champ('texte'),abrege_du_champ('texte'),
            typologie(cht),
            genre(11),
            est_libelle_lien(1),nom_bref_libelle_lien('tache')
            )
            */
             `chp_texte_tache` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_priorite_tache'),
            nom_bref_du_champ('priorite'),abrege_du_champ('priorite de la tâche'),
            typologie(chi),
            genre(99)
            )
            */
             `chp_priorite_tache` INTEGER(2) NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_tache'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1)
            )
            */
             `chd__dtm_tache` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_tache'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1)
            )
            */
             `chd__dtc_tache` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_tache'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_tache` INTEGER NOT NULL DEFAULT  0
    );



