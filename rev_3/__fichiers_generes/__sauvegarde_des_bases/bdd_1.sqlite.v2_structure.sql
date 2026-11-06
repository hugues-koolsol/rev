
/*
================================================================================ TABLE tbl_televersements 
*/

CREATE TABLE `tbl_televersements`(
/*
 meta(nom_de_la_table('tbl_televersements'),
   table('tbl_televersements'),
   genre_meta(table_de_base),rang_de_la_table(0),permet_la_gestion_de('televersement'),
   distinction_pour_liste('liste des televersements'),
   distinction_pour_isad('d\'un televersement'),transform_base_sur_svg(translate(897,553))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_televersement'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_televersement` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_bdd_televersement'),
            nom_bref_du_champ('ref bdd'),libelle_du_champ('ref bdd'),
            typologie(che),
            genre(9)
            )
            */
             `che_bdd_televersement` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_table_televersement'),
            nom_bref_du_champ('nom de la table'),libelle_du_champ('nom de la table'),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
            )
            */
             `chp_nom_table_televersement` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_id_element_televersement'),
            nom_bref_du_champ('id element'),libelle_du_champ('id element'),
            typologie(che),
            genre(9)
            )
            */
             `che_id_element_televersement` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_utilisateur_televersement'),
            nom_bref_du_champ('utilisateur'),libelle_du_champ('utilisateur'),
            typologie(chx),
            genre(4),reference_externe(3,'tbl_utilisateurs','chi_id_utilisateur')
            )
            */
             `chx_utilisateur_televersement` INTEGER NOT NULL REFERENCES tbl_utilisateurs(chi_id_utilisateur) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_champ_cle_televersement'),
            nom_bref_du_champ('champ cle'),libelle_du_champ('champ cle'),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
            )
            */
             `chp_champ_cle_televersement` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_original_televersement'),
            nom_bref_du_champ('nom original'),libelle_du_champ('nom original'),
            typologie(chp),
            genre(17),
            longueur_du_champ(255)
            )
            */
             `chp_nom_original_televersement` VARCHAR(255) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_poids_televersement'),
            nom_bref_du_champ('poids'),libelle_du_champ('poids'),
            typologie(che),
            genre(9)
            )
            */
             `che_poids_televersement` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_fichier_sur_disque_televersement'),
            nom_bref_du_champ('nom fichier sur disque'),libelle_du_champ('nom fichier sur disque'),
            typologie(chp),
            genre(17),
            longueur_du_champ(255)
            )
            */
             `chp_nom_fichier_sur_disque_televersement` VARCHAR(255) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_du_dossier_televersement'),
            nom_bref_du_champ('nom du dossier'),libelle_du_champ('nom du dossier'),
            typologie(chp),
            genre(17),
            longueur_du_champ(255)
            )
            */
             `chp_nom_du_dossier_televersement` VARCHAR(255) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_comm_glob_televersement'),
            nom_bref_du_champ('commentaire global'),libelle_du_champ('commentaire global'),
            typologie(cht),
            genre(6),
            longueur_du_champ(3.100)
            )
            */
             `cht_comm_glob_televersement` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_comm_fichier_televersement'),
            nom_bref_du_champ('commentaire fichier'),libelle_du_champ('commentaire fichier'),
            typologie(chp),
            genre(24),
            longueur_du_champ(255)
            )
            */
             `chp_comm_fichier_televersement` VARCHAR(255) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_ordre_televersement'),
            nom_bref_du_champ('ordre'),libelle_du_champ('ordre'),suggestion_du_champ(''),description_du_champ(''),
            typologie(che),
            genre(9)
            )
            */
             `che_ordre_televersement` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_mime_televersement'),
            nom_bref_du_champ('mime'),libelle_du_champ('type mime navigateur'),suggestion_du_champ(''),
            typologie(chp),
            genre(12),
            longueur_du_champ(32)
            )
            */
             `chp_mime_televersement` VARCHAR(32) DEFAULT  NULL
    );




/*
================================================================================ TABLE tbl_groupes 
*/

CREATE TABLE `tbl_groupes`(
/*
 meta(nom_de_la_table('tbl_groupes'),
   table('tbl_groupes'),
   genre_meta(table_de_base),rang_de_la_table(10),permet_la_gestion_de('groupe'),
   distinction_pour_liste('liste des groupes'),
   distinction_pour_isad('d\'un groupe'),fonctions_spéciales1('ne_pas_supprimer_id_un(0,1,2)'),transform_base_sur_svg(translate(39,27))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_groupe'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),entete_distant_du_champ('id groupe'),
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
            nom_bref_du_champ('nom'),libelle_du_champ('nom'),entete_distant_du_champ('groupe'),
            typologie(cht),
            genre(19),
            est_libelle_lien(1),
            longueur_du_champ(128)
            )
            */
             `chp_nom_groupe` VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_groupe'),
            nom_bref_du_champ('id parent'),libelle_du_champ('id parent'),entete_distant_du_champ('groupe'),
            typologie(chx),
            genre(4),
            refe_parent_gauche(1)
            )
            */
             `chx_parent_groupe` INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe) ON UPDATE CASCADE DEFAULT  NULL
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
   distinction_pour_isad('d\'un metier'),fonctions_spéciales1('ne_pas_supprimer_id_un(0,1,2)'),transform_base_sur_svg(translate(38,141))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_metier'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),entete_distant_du_champ('id metier'),
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
            nom_bref_du_champ('nom'),libelle_du_champ('nom'),entete_distant_du_champ('métier'),
            typologie(cht),
            genre(19),
            est_libelle_lien(1),
            longueur_du_champ(128)
            )
            */
             `chp_nom_metier` VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_metier'),
            nom_bref_du_champ('id parent'),libelle_du_champ('id parent'),entete_distant_du_champ('metier'),
            typologie(chx),
            genre(4),
            refe_parent_gauche(1)
            )
            */
             `chx_parent_metier` INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) ON UPDATE CASCADE DEFAULT  NULL
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
   distinction_pour_isad('d\'un accès'),fonctions_spéciales1('ne_pas_supprimer_id_un(0,1,2),ne_pas_modifier(0)'),transform_base_sur_svg(translate(265,271))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_acces'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),entete_distant_du_champ('id accès'),
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
            nom_bref_du_champ('nom'),libelle_du_champ('nom'),entete_distant_du_champ('nom accès'),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             `chp_nom_acces` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_groupe_acces'),
            nom_bref_du_champ('id groupe'),libelle_du_champ('id du groupe'),entete_distant_du_champ('groupe'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_groupe_acces` INTEGER NOT NULL REFERENCES tbl_groupes(chi_id_groupe) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_metier_acces'),
            nom_bref_du_champ('id métier'),libelle_du_champ('id du métier'),entete_distant_du_champ('métier'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_metier_acces` INTEGER NOT NULL REFERENCES tbl_metiers(chi_id_metier) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_parametres_acces'),
            nom_bref_du_champ('parametres'),libelle_du_champ('parametres'),entete_distant_du_champ('parametres accès'),
            typologie(cht),
            genre(11),
            longueur_du_champ(10.200)
            )
            */
             `cht_parametres_acces` TEXT NOT NULL DEFAULT  '{}'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_actif_acces'),
            nom_bref_du_champ('actif'),libelle_du_champ('actif'),entete_distant_du_champ('actif accès'),
            typologie(che),
            genre(5)
            )
            */
             `che_actif_acces` INTEGER NOT NULL DEFAULT  1
    );




/*
================================================================================ TABLE tbl_sources 
*/

CREATE TABLE `tbl_sources`(
/*
 meta(nom_de_la_table('tbl_sources'),
   table('tbl_sources'),
   genre_meta(table_de_base),rang_de_la_table(40),permet_la_gestion_de('source'),
   distinction_pour_liste('liste des sources'),
   distinction_pour_isad('d\'un source'),transform_base_sur_svg(translate(252,6))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_source'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),entete_distant_du_champ('id source'),
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
            nom_bref_du_champ('nom'),libelle_du_champ('nom'),entete_distant_du_champ('nom source'),
            typologie(chp),
            genre(19),
            est_libelle_lien(1),
            longueur_du_champ(128)
            )
            */
             `chp_nom_source` VARCHAR(128) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_source'),
            nom_bref_du_champ('rev'),libelle_du_champ('rev'),entete_distant_du_champ('rev source'),
            typologie(cht),
            genre(98),
            longueur_du_champ(5.50)
            )
            */
             `cht_rev_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_genere_source'),
            nom_bref_du_champ('genere'),libelle_du_champ('genere'),entete_distant_du_champ('genere source'),
            typologie(cht),
            genre(97),
            longueur_du_champ(5.200)
            )
            */
             `cht_genere_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_binaire_source'),
            nom_bref_du_champ('binaire'),libelle_du_champ('binaire'),entete_distant_du_champ('binaire source'),
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
            nom_bref_du_champ('dossier id'),libelle_du_champ('dossier id'),entete_distant_du_champ('dossier id source'),
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
            nom_bref_du_champ('commentaire'),libelle_du_champ('commentaire'),entete_distant_du_champ('commentaire source'),
            typologie(cht),
            genre(6),
            longueur_du_champ(10.200)
            )
            */
             `cht_commentaire_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_source'),
            nom_bref_du_champ(' dtm'),libelle_du_champ(' dtm'),entete_distant_du_champ(' dtm source'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_source` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_source'),
            nom_bref_du_champ(' dtc'),libelle_du_champ(' dtc'),entete_distant_du_champ(' dtc source'),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_source` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_source'),
            nom_bref_du_champ(' nur'),libelle_du_champ(' nur'),entete_distant_du_champ(' nur source'),
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
            nom_du_champ('che_contient_version_source'),
            nom_bref_du_champ('contient version'),libelle_du_champ('contient version'),entete_distant_du_champ('contient version source'),
            typologie(che),
            genre(5)
            )
            */
             `che_contient_version_source` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_autorisation_globale_source'),
            nom_bref_du_champ('autorisation globale'),libelle_du_champ('autorisation globale'),entete_distant_du_champ('autorisation globale source'),
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
            nom_bref_du_champ('condition js'),libelle_du_champ('condition au format js'),entete_distant_du_champ('condition js source'),
            typologie(cht),
            genre(97),
            longueur_du_champ(10.200)
            )
            */
             `cht_condition_js_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_rev_source'),
            nom_bref_du_champ('condition rev'),libelle_du_champ('condition au format rev'),entete_distant_du_champ('condition rev source'),
            typologie(cht),
            genre(98),
            longueur_du_champ(10.200)
            )
            */
             `cht_condition_rev_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_notification_ko_source'),
            nom_bref_du_champ('notification ko'),libelle_du_champ('notification si condition ko'),entete_distant_du_champ('notification ko source'),
            typologie(cht),
            genre(6),
            longueur_du_champ(10.200)
            )
            */
             `cht_notification_ko_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_pour_util_source'),
            nom_bref_du_champ('pour util'),libelle_du_champ('pour util'),entete_distant_du_champ('pour util source'),
            typologie(che),
            genre(5)
            )
            */
             `che_pour_util_source` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_autorisations 
*/

CREATE TABLE `tbl_autorisations`(
/*
 meta(nom_de_la_table('tbl_autorisations'),
   table('tbl_autorisations'),
   genre_meta(table_de_base),rang_de_la_table(50),permet_la_gestion_de('autorisation'),
   distinction_pour_liste('liste des autorisations'),
   distinction_pour_isad('d\'une autorisation'),transform_base_sur_svg(translate(557,273))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_autorisation'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),entete_distant_du_champ('id autorisation'),
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
            nom_bref_du_champ('id source'),libelle_du_champ('id source'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_source_autorisation` INTEGER NOT NULL REFERENCES tbl_sources(chi_id_source) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_acces_autorisation'),
            nom_bref_du_champ('id accès'),libelle_du_champ('id accès'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_acces_autorisation` INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_pour_sous_liste_autorisation'),
            nom_bref_du_champ('pour sous liste'),libelle_du_champ('pour sous liste'),
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
   genre_meta(table_de_base),rang_de_la_table(60),permet_la_gestion_de('menu'),
   distinction_pour_liste('liste des menus'),
   distinction_pour_isad('d\'un menu'),transform_base_sur_svg(translate(875,253))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_menu'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),entete_distant_du_champ('id menu'),
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
            nom_bref_du_champ('libelle'),libelle_du_champ('libelle'),entete_distant_du_champ('libelle menu'),fonction_pour_liste1('
choix(si(condition(diffstricte(tup.T0_cht_libelle_menu,null)),alors(
      choix(si(condition(egalstricte(appelf(element(appelf(element(tup.T0_cht_libelle_menu),nomf(toLowerCase),p())),nomf(substr),p(0),p(4)),\'<svg\')),alors(
            affectop(\'+=\' , lst , concat(\'<div style="width:25px;border:1px white solid;display:inline-block;background:var(--c_coul_fond4);">\',tup.T0_cht_libelle_menu,\'</div>\'))))sinon(alors(
            affectop(\'+=\' , lst , concat(\'\',appelf(element(this.__ig1),nomf(fi2),p(appelf(element(tup.T0_cht_libelle_menu),nomf(substr),p(0),p(100))))))))))))'),
            typologie(cht),
            genre(11),
            longueur_du_champ(3.5000)
            )
            */
             `cht_libelle_menu` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_titre_menu'),
            nom_bref_du_champ('titre'),libelle_du_champ('titre'),entete_distant_du_champ('titre menu'),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             `chp_titre_menu` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_autorisation_menu'),
            nom_bref_du_champ('id autorisation'),libelle_du_champ('id de l\'autorisation'),entete_distant_du_champ('autorisation'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_autorisation_menu` INTEGER NOT NULL REFERENCES tbl_autorisations(chi_id_autorisation) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_methode_menu'),
            nom_bref_du_champ('methode'),libelle_du_champ('methode'),entete_distant_du_champ('methode menu'),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
            )
            */
             `chp_methode_menu` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_initialisation_menu'),
            nom_bref_du_champ('initialisation'),libelle_du_champ('initialisation'),
            typologie(cht),
            genre(98),
            longueur_du_champ(3.200)
            )
            */
             `cht_initialisation_menu` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_menu'),
            nom_bref_du_champ('condition'),libelle_du_champ('condition au format rev'),entete_distant_du_champ('condition menu'),
            typologie(cht),
            genre(98),
            longueur_du_champ(3.200)
            )
            */
             `cht_condition_menu` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_js_menu'),
            nom_bref_du_champ('condition js'),libelle_du_champ('condition au format js'),entete_distant_du_champ('condition php menu'),
            typologie(cht),
            genre(97),
            longueur_du_champ(3.200)
            )
            */
             `cht_condition_js_menu` TEXT DEFAULT  NULL
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
   distinction_pour_isad('d\'un utilisateur'),fonctions_spéciales1('ne_pas_supprimer_id_un(1,2)'),transform_base_sur_svg(translate(561,395))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_utilisateur'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),entete_distant_du_champ('id utilisateur'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_utilisateur` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_de_connexion_utilisateur'),
            nom_bref_du_champ('nom de connexion'),libelle_du_champ('nom de connexion'),entete_distant_du_champ('nom utilisateur'),
            typologie(cht),
            genre(3),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             `chp_nom_de_connexion_utilisateur` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_mot_de_passe_utilisateur'),
            nom_bref_du_champ('mot de passe'),libelle_du_champ('mot de passe'),entete_distant_du_champ('mot de passe utilisateur'),fonction_pour_liste1('
choix(si(condition(diffstricte(tup.T0_chp_mot_de_passe_utilisateur,null)),alors(
      affectop(\'+=\' , lst , appelf(element(this.__ig1),nomf(fi2),p(appelf(element(tup.T0_chp_mot_de_passe_utilisateur),nomf(substr),p(7),p(3))))))))'),
            typologie(cht),
            genre(13),
            longueur_du_champ(256)
            )
            */
             `chp_mot_de_passe_utilisateur` VARCHAR(256) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_parametres_utilisateur'),
            nom_bref_du_champ('parametres'),libelle_du_champ('parametres'),entete_distant_du_champ('parametres utilisateur'),
            typologie(cht),
            genre(6),
            longueur_du_champ(10.200)
            )
            */
             `chp_parametres_utilisateur` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_compteur1_utilisateur'),
            nom_bref_du_champ('compteur1'),libelle_du_champ('compteur1'),entete_distant_du_champ('compteur1 utilisateur'),
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
            nom_bref_du_champ('accès'),libelle_du_champ('accès'),entete_distant_du_champ('acces utilisateur'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_acces_utilisateur` INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_utilisateur'),
            nom_bref_du_champ(' nur'),libelle_du_champ(' nur'),entete_distant_du_champ(' nur utilisateur'),
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
            nom_bref_du_champ('actif'),libelle_du_champ('actif'),entete_distant_du_champ('actif utilisateur'),
            typologie(che),
            genre(5)
            )
            */
             `che_actif_utilisateur` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_utilisateur'),
            nom_bref_du_champ('commentaire'),libelle_du_champ('commentaire'),
            typologie(cht),
            genre(6),
            longueur_du_champ(10.200)
            )
            */
             `cht_commentaire_utilisateur` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_utilisateur'),
            nom_bref_du_champ(' dtm'),libelle_du_champ(' dtm'),entete_distant_du_champ(' dtm utilisateur'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_utilisateur` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_utilisateur'),
            nom_bref_du_champ(' dtc'),libelle_du_champ(' dtc'),entete_distant_du_champ(' dtc utilisateur'),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_utilisateur` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
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
   distinction_pour_isad('d\'une tâche'),transform_base_sur_svg(translate(866,414))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_tache'),
            nom_bref_du_champ('id'),libelle_du_champ('id'),entete_distant_du_champ('id tâche'),
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
            nom_bref_du_champ('utilisateur'),libelle_du_champ('utilisateur'),entete_distant_du_champ('utilisateur tâche'),
            typologie(chx),
            genre(18)
            )
            */
             `chx_utilisateur_tache` INTEGER NOT NULL REFERENCES tbl_utilisateurs(chi_id_utilisateur) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_texte_tache'),
            nom_bref_du_champ('texte'),libelle_du_champ('texte'),entete_distant_du_champ('texte tâche'),
            typologie(chi),
            genre(11),
            est_libelle_lien(1),
            longueur_du_champ(10.200)
            )
            */
             `chp_texte_tache` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_priorite_tache'),
            nom_bref_du_champ('priorité'),libelle_du_champ('priorité'),suggestion_du_champ(
               '00',
               '20',
               '50',
               '80',
               '99'
            ),
            typologie(chi),
            genre(99),
            longueur_du_champ(2)
            )
            */
             `che_priorite_tache` INTEGER(2) NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_tache'),
            nom_bref_du_champ(' dtm'),libelle_du_champ(' dtm'),entete_distant_du_champ(' dtm tâche'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_tache` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_tache'),
            nom_bref_du_champ(' dtc'),libelle_du_champ(' dtc'),entete_distant_du_champ(' dtc tâche'),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_tache` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_tache'),
            nom_bref_du_champ(' nur'),libelle_du_champ(' nur'),entete_distant_du_champ(' nur tâche'),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_tache` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_parametres 
*/

CREATE TABLE `tbl_parametres`(
/*
 meta(nom_de_la_table('tbl_parametres'),
   table('tbl_parametres'),
   genre_meta(table_de_base),rang_de_la_table(310),permet_la_gestion_de('paramètre'),
   distinction_pour_liste('liste des paramètres'),
   distinction_pour_isad('d\'un paramètre'),fonctions_spéciales1('ne_pas_supprimer_id_un(10000)'),transform_base_sur_svg(translate(53,425))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_parametre'),
            nom_bref_du_champ('id'),libelle_du_champ('id du parametre'),entete_distant_du_champ('paramètre'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_parametre` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_cle_parametre'),
            nom_bref_du_champ('clé'),libelle_du_champ('clé'),entete_distant_du_champ('paramètre'),
            typologie(chp),
            genre(3),
            longueur_du_champ(64.2)
            )
            */
             `chp_cle_parametre` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_parametre'),
            nom_bref_du_champ('nom'),libelle_du_champ('nom'),entete_distant_du_champ('paramètre'),
            typologie(chp),
            genre(3),
            longueur_du_champ(64.2)
            )
            */
             `chp_nom_parametre` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_parametre'),
            nom_bref_du_champ('commentaire'),libelle_du_champ('commentaire'),entete_distant_du_champ('commentaire paramètre'),
            typologie(cht),
            genre(11),
            longueur_du_champ(2.100)
            )
            */
             `cht_commentaire_parametre` TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_parametre'),
            nom_bref_du_champ('rev'),libelle_du_champ('rev'),entete_distant_du_champ('rev paramètre'),
            typologie(cht),
            genre(98),
            longueur_du_champ(2.100)
            )
            */
             `cht_rev_parametre` TEXT DEFAULT  '#()'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_ordre_parametre'),
            nom_bref_du_champ('ordre'),libelle_du_champ('ordre'),entete_distant_du_champ('ordre paramètre'),
            typologie(cht),
            genre(6),
            longueur_du_champ(2.100)
            )
            */
             `cht_ordre_parametre` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_pour_admin_parametre'),
            nom_bref_du_champ('pour admin'),libelle_du_champ('pour admin'),entete_distant_du_champ('pour admin paramètre'),
            typologie(che),
            genre(5)
            )
            */
             `che_pour_admin_parametre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_parametre'),
            nom_bref_du_champ('fld tscrt parnams'),libelle_du_champ('fld tscrt parnams'),entete_distant_du_champ('fld tscrt parnams tbl_parametres'),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_parametre` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_parametre'),
            nom_bref_du_champ('fld tsupd parnams'),libelle_du_champ('fld tsupd parnams'),entete_distant_du_champ('fld tsupd parnams tbl_parametres'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_parametre` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_parametre'),
            nom_bref_du_champ('nur'),libelle_du_champ('nur'),entete_distant_du_champ('fld cntupd parnams tbl_parametres'),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_parametre` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_grandeurs 
*/

CREATE TABLE `tbl_grandeurs`(
/*
 meta(nom_de_la_table('tbl_grandeurs'),
   table('tbl_grandeurs'),
   genre_meta(table_de_base),rang_de_la_table(320),permet_la_gestion_de('grandeur'),
   distinction_pour_liste('liste des grandeurs'),
   distinction_pour_isad('d\'une grandeur'),fonctions_spéciales1('ne_pas_supprimer_id_un(20000)'),transform_base_sur_svg(translate(314,469))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_grandeur'),
            nom_bref_du_champ('id'),libelle_du_champ('id de la grandeur'),entete_distant_du_champ('id grandeur'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_grandeur` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parametre_grandeur'),
            nom_bref_du_champ('id paramètre'),libelle_du_champ('id du paramètre'),entete_distant_du_champ('id paramètre grandeur'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_parametre_grandeur` INTEGER NOT NULL REFERENCES tbl_parametres(chi_id_parametre) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_cle_grandeur'),
            nom_bref_du_champ('cle'),libelle_du_champ('cle de la grandeur'),entete_distant_du_champ('grandeur'),libelle_grandeur('voir_champ_dependant'),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            longueur_du_champ(64.2)
            )
            */
             `chp_cle_grandeur` VARCHAR(64) NOT NULL DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_grandeur'),
            nom_bref_du_champ('rev'),libelle_du_champ('rev de la grandeur'),entete_distant_du_champ('rev grandeur'),
            typologie(cht),
            genre(11),
            longueur_du_champ(10.200)
            )
            */
             `cht_rev_grandeur` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_actif_grandeur'),
            nom_bref_du_champ('actif'),libelle_du_champ('la grandeur est active'),entete_distant_du_champ('actif grandeur'),
            typologie(che),
            genre(5)
            )
            */
             `che_actif_grandeur` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_grandeur'),
            nom_bref_du_champ('fld tscrt parnams'),libelle_du_champ('fld tscrt parnams'),entete_distant_du_champ('fld tscrt grandeur'),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_grandeur` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_grandeur'),
            nom_bref_du_champ('fld tsupd parnams'),libelle_du_champ('fld tsupd parnams'),entete_distant_du_champ('grandeur'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_grandeur` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_grandeur'),
            nom_bref_du_champ(' nur'),libelle_du_champ(' nur'),entete_distant_du_champ('grandeur'),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_grandeur` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_verouillee_grandeur'),
            nom_bref_du_champ('verouillée'),libelle_du_champ('verouillée'),
            typologie(che),
            genre(5)
            )
            */
             `che_verouillee_grandeur` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chc_couleur_texte_grandeur'),
            nom_bref_du_champ('couleur texte'),libelle_du_champ('couleur du texte'),
            typologie(chc),
            genre(26),
            longueur_du_champ(7)
            )
            */
             `chc_couleur_texte_grandeur` VARCHAR(7) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chc_couleur_fond_grandeur'),
            nom_bref_du_champ('couleur fond'),libelle_du_champ('couleur du fond'),
            typologie(chc),
            genre(26),
            longueur_du_champ(7)
            )
            */
             `chc_couleur_fond_grandeur` VARCHAR(7) DEFAULT  NULL
    );



