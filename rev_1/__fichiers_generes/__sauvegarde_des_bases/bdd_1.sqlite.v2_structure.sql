
/*
================================================================================ TABLE tbl_projets 
*/

CREATE TABLE `tbl_projets`(
/*
 meta(nom_de_la_table('tbl_projets'),
   table('tbl_projets'),
   genre_meta(table_de_base),rang_de_la_table(0),permet_la_gestion_de('projet'),
   distinction_pour_liste('liste des projets'),
   distinction_pour_isad('d\'un projet'),fonctions_spéciales1('ne_pas_supprimer_id_un(3)'),transform_base_sur_svg(translate(11,344))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_projet'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id projet'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_projet` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_projet'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom du projet'),entete_distant_du_champ('nom projet'),
            typologie(chi),
            genre(11),
            est_libelle_lien(1)
            )
            */
             `chp_nom_projet` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_projet'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire sur le projet'),entete_distant_du_champ('commentaire projet'),
            typologie(chi),
            genre(6)
            )
            */
             `cht_commentaire_projet` TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_projet'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),entete_distant_du_champ(' nur projet'),
            typologie(chi),
            genre(10),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_projet` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_projet'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),entete_distant_du_champ(' dtm projet'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_projet` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_projet'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),entete_distant_du_champ(' dtc projet'),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_projet` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
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
   distinction_pour_isad('d\'un groupe'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),transform_base_sur_svg(translate(10,33))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_groupe'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id groupe'),
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
            nom_bref_du_champ('nom'),abrege_du_champ('nom du groupe'),entete_distant_du_champ('groupe'),
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
            nom_bref_du_champ('id parent'),abrege_du_champ('id parent du groupe'),entete_distant_du_champ('groupe'),
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
   distinction_pour_isad('d\'un metier'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),transform_base_sur_svg(translate(9,189))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_metier'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id metier'),
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
            nom_bref_du_champ('nom'),abrege_du_champ('nom du métier'),entete_distant_du_champ('métier'),
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
            nom_bref_du_champ('id parent'),abrege_du_champ('id parent du métier'),entete_distant_du_champ('parent métier'),
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
   distinction_pour_isad('d\'un accès'),fonctions_spéciales1('ne_pas_supprimer_id_un(2),ne_pas_modifier(0)'),transform_base_sur_svg(translate(223,211))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_acces'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id accès'),
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
            nom_bref_du_champ('nom'),abrege_du_champ('nom'),entete_distant_du_champ('nom accès'),
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
            nom_bref_du_champ('id groupe'),abrege_du_champ('id du groupe'),entete_distant_du_champ('id groupe accès'),
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
            nom_bref_du_champ('id métier'),abrege_du_champ('id du métier'),entete_distant_du_champ('id métier accès'),
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
            nom_bref_du_champ('parametres'),abrege_du_champ('parametres'),entete_distant_du_champ('parametres accès'),
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
            nom_bref_du_champ('actif'),abrege_du_champ('actif'),entete_distant_du_champ('actif accès'),
            typologie(che),
            genre(5)
            )
            */
             `che_actif_acces` INTEGER NOT NULL DEFAULT  1
    );




/*
================================================================================ TABLE tbl_dossiers 
*/

CREATE TABLE `tbl_dossiers`(
/*
 meta(nom_de_la_table('tbl_dossiers'),
   table('tbl_dossiers'),
   genre_meta(table_de_base),rang_de_la_table(60),permet_la_gestion_de('dossier'),
   distinction_pour_liste('liste des dossiers'),
   distinction_pour_isad('d\'un dossier'),fonctions_spéciales1('ne_pas_supprimer_id_un(9)'),transform_base_sur_svg(translate(232,19))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_dossier'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id dossier'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_dossier` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_dossier'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom du dossier'),entete_distant_du_champ('nom dossier'),
            typologie(chp),
            genre(108),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             `chp_nom_dossier` VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_parent_dossier'),
            nom_bref_du_champ('parent'),abrege_du_champ('parent'),entete_distant_du_champ('parent dossier'),
            typologie(chx),
            genre(4),
            refe_parent_gauche(1)
            )
            */
             `chx_parent_dossier` INTEGER NOT NULL REFERENCES tbl_dossiers(chi_id_dossier) ON UPDATE CASCADE DEFAULT  '1'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_dossier'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),entete_distant_du_champ(' nur dossier'),
            typologie(chi),
            genre(10),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_dossier` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_dossier'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),entete_distant_du_champ(' dtm dossier'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_dossier` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_dossier'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),entete_distant_du_champ(' dtc dossier'),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_dossier` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    );




/*
================================================================================ TABLE tbl_autorisations 
*/

CREATE TABLE `tbl_autorisations`(
/*
 meta(nom_de_la_table('tbl_autorisations'),
   table('tbl_autorisations'),
   genre_meta(table_de_base),rang_de_la_table(75),permet_la_gestion_de('autorisation'),
   distinction_pour_liste('liste des autorisations'),
   distinction_pour_isad('d\'une autorisation'),transform_base_sur_svg(translate(826,278))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_autorisation'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id autorisation'),
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
            nom_bref_du_champ('id source'),abrege_du_champ('id de la source'),entete_distant_du_champ('source'),
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
            nom_bref_du_champ('id accès'),abrege_du_champ('id de l\'accès'),entete_distant_du_champ('accès'),
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
            nom_bref_du_champ('pour sous liste'),abrege_du_champ('pour accès sous liste'),entete_distant_du_champ('pour sous liste autorisation'),
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
   genre_meta(table_de_base),rang_de_la_table(78),permet_la_gestion_de('menu'),
   distinction_pour_liste('liste des menus'),
   distinction_pour_isad('d\'un menu'),transform_base_sur_svg(translate(1101,298))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_menu'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id menu'),
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
            nom_bref_du_champ('libelle'),abrege_du_champ('libelle'),entete_distant_du_champ('libelle menu'),
            typologie(cht),
            genre(11),
            longueur_du_champ(3,100)
            )
            */
             `cht_libelle_menu` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_titre_menu'),
            nom_bref_du_champ('titre'),abrege_du_champ('titre'),entete_distant_du_champ('titre menu'),
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
            nom_bref_du_champ('id autorisation'),abrege_du_champ('id de l\'autorisation'),entete_distant_du_champ('autorisation'),
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
            nom_bref_du_champ('methode'),abrege_du_champ('methode'),entete_distant_du_champ('methode menu'),
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
            nom_bref_du_champ('initialisation'),abrege_du_champ('initialisation'),entete_distant_du_champ('initialisation menu'),
            typologie(cht),
            genre(98),
            longueur_du_champ(3)
            )
            */
             `cht_initialisation_menu` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_menu'),
            nom_bref_du_champ('condition'),abrege_du_champ('condition au format rev'),entete_distant_du_champ('condition menu'),
            typologie(cht),
            genre(98),
            longueur_du_champ(3)
            )
            */
             `cht_condition_menu` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_js_menu'),
            nom_bref_du_champ('condition js'),abrege_du_champ('condition au format js'),entete_distant_du_champ('condition js menu'),
            typologie(cht),
            genre(97),
            longueur_du_champ(3)
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
   genre_meta(table_de_base),rang_de_la_table(80),permet_la_gestion_de('utilisateur'),
   distinction_pour_liste('liste des utilisateurs'),
   distinction_pour_isad('d\'un utilisateur'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),transform_base_sur_svg(translate(441,319))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_utilisateur'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id utilisateur'),
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
            nom_bref_du_champ('nom de connexion'),abrege_du_champ('nom de connexion de l\'utilisateur'),entete_distant_du_champ('utilisateur'),
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
            nom_bref_du_champ('mot de passe'),abrege_du_champ('mot de passe de l\'utilisateur'),entete_distant_du_champ('mot de passe utilisateur'),
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
            nom_bref_du_champ('parametres'),abrege_du_champ('parametres'),entete_distant_du_champ('parametres utilisateur'),
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
            nom_bref_du_champ('compteur1'),abrege_du_champ('compteur1'),entete_distant_du_champ('compteur1 utilisateur'),
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
            nom_bref_du_champ('acces'),abrege_du_champ('acces'),entete_distant_du_champ('acces utilisateur'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_acces_utilisateur` INTEGER NOT NULL REFERENCES tbl_acces(chi_id_acces) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_utilisateur'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),entete_distant_du_champ(' dtm utilisateur'),
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
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),entete_distant_du_champ(' dtc utilisateur'),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_utilisateur` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_utilisateur'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),entete_distant_du_champ(' nur utilisateur'),
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
            nom_bref_du_champ('actif'),abrege_du_champ('actif'),entete_distant_du_champ('actif utilisateur'),
            typologie(che),
            genre(5)
            )
            */
             `che_actif_utilisateur` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_genres 
*/

CREATE TABLE `tbl_genres`(
/*
 meta(nom_de_la_table('tbl_genres'),
   table('tbl_genres'),
   genre_meta(table_de_base),rang_de_la_table(100),permet_la_gestion_de('genre'),
   distinction_pour_liste('liste des genres'),
   distinction_pour_isad('d\'un genre'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),fonctions_coherence1('
choix(si(condition(et(ou(par.chp_espece_genre,par.che_longueur_genre),egalstricte(appelf(element(par.chp_espece_genre),nomf(toUpperCase),p()),\'VARCHAR\'),egalstricte(par.che_longueur_genre,null))),alors(
      throw(new(appelf(nomf(Error),p(\'une longueur doit être indiquée pour le l\\\'espèce VARCHAR\')))))))
choix(si(condition(et(ou(par.chp_espece_genre,par.che_longueur_genre),egalstricte(appelf(element(par.chp_espece_genre),nomf(toUpperCase),p()),\'DECIMAL\'),egalstricte(par.che_longueur_genre,null))),alors(
      throw(new(appelf(nomf(Error),p(\'une longueur doit être indiquée pour le l\\\'espèce DECIMAL\')))))))'),transform_base_sur_svg(translate(17,458))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_genre'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id genre'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_genre` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_genre'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom du genre'),entete_distant_du_champ('nom genre'),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            longueur_du_champ(64)
            )
            */
             `chp_nom_genre` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_ordre_genre'),
            nom_bref_du_champ('ordre'),abrege_du_champ('ordre'),entete_distant_du_champ('ordre genre'),
            typologie(che),
            genre(10)
            )
            */
             `che_ordre_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_prefixe_genre'),
            nom_bref_du_champ('préfixe'),abrege_du_champ('prefixe'),entete_distant_du_champ('préfixe genre'),
            typologie(chp),
            genre(102),
            longueur_du_champ(3)
            )
            */
             `chp_prefixe_genre` VARCHAR(3) NOT NULL DEFAULT  'cht'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_espece_genre'),
            nom_bref_du_champ('espèce'),abrege_du_champ('espece'),entete_distant_du_champ('espèce genre'),
            typologie(chp),
            genre(101),
            longueur_du_champ(64)
            )
            */
             `chp_espece_genre` VARCHAR(64) NOT NULL DEFAULT  'TEXT'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_longueur_genre'),
            nom_bref_du_champ('longueur'),abrege_du_champ('longueur du genre'),entete_distant_du_champ('longueur genre'),
            typologie(chp),
            genre(110),
            longueur_du_champ(20)
            )
            */
             `che_longueur_genre` VARCHAR(20) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_primaire_genre'),
            nom_bref_du_champ('est primaire'),abrege_du_champ('est primaire'),entete_distant_du_champ('est primaire genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_primaire_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_incrément_genre'),
            nom_bref_du_champ('est incrément'),abrege_du_champ('est incrément'),entete_distant_du_champ('est incrément genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_incrément_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_obligatoire_genre'),
            nom_bref_du_champ('est obligatoire'),abrege_du_champ('est obligatoire'),entete_distant_du_champ('est obligatoire genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_obligatoire_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_a_init_genre'),
            nom_bref_du_champ('a init'),abrege_du_champ('a init'),entete_distant_du_champ('a init genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_a_init_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_init_est_mot_genre'),
            nom_bref_du_champ('init est mot'),abrege_du_champ('init est mot'),entete_distant_du_champ('init est mot genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_init_est_mot_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_valeur_init_genre'),
            nom_bref_du_champ('valeur init'),abrege_du_champ('valeur init'),entete_distant_du_champ('valeur init genre'),
            typologie(cht),
            genre(6),
            longueur_du_champ(3)
            )
            */
             `cht_valeur_init_genre` TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_parmis_genre'),
            nom_bref_du_champ('est parmis'),abrege_du_champ('est parmis'),entete_distant_du_champ('est parmis genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_parmis_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_parmis_genre'),
            nom_bref_du_champ('parmis'),abrege_du_champ('parmis'),entete_distant_du_champ('parmis genre'),
            typologie(cht),
            genre(6),
            longueur_du_champ(3)
            )
            */
             `cht_parmis_genre` TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_fonctions_genre'),
            nom_bref_du_champ('fonctions'),abrege_du_champ('fonctions'),entete_distant_du_champ('fonctions genre'),
            typologie(cht),
            genre(107),
            longueur_du_champ(3)
            )
            */
             `cht_fonctions_genre` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_nur_genre'),
            nom_bref_du_champ('est nur'),abrege_du_champ('est nur'),entete_distant_du_champ('est nur genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_nur_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_tsm_genre'),
            nom_bref_du_champ('est tsm'),abrege_du_champ('est tsm'),entete_distant_du_champ('est tsm genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_tsm_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_tsc_genre'),
            nom_bref_du_champ('est tsc'),abrege_du_champ('est tsc'),entete_distant_du_champ('est tsc genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_tsc_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_genre'),
            nom_bref_du_champ('dtc'),abrege_du_champ(' dtc'),entete_distant_du_champ('dtc genre'),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_genre` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_genre'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),entete_distant_du_champ(' dtm genre'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_genre` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_genre'),
            nom_bref_du_champ('nur'),abrege_du_champ(' nur'),entete_distant_du_champ('nur genre'),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_positif_genre'),
            nom_bref_du_champ('est positif'),abrege_du_champ('est positif'),entete_distant_du_champ('est positif genre'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_positif_genre` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_particularités_genre'),
            nom_bref_du_champ('particularités'),abrege_du_champ('particularités'),entete_distant_du_champ('particularités genre'),
            typologie(cht),
            genre(98),
            longueur_du_champ(3)
            )
            */
             `cht_particularités_genre` TEXT DEFAULT  NULL
    );




/*
================================================================================ TABLE tbl_bdds 
*/

CREATE TABLE `tbl_bdds`(
/*
 meta(nom_de_la_table('tbl_bdds'),
   table('tbl_bdds'),
   genre_meta(table_de_base),rang_de_la_table(110),permet_la_gestion_de('base'),
   distinction_pour_liste('liste des bases de données'),
   distinction_pour_isad('d\'une base de donnée'),fonctions_spéciales1('ne_pas_supprimer_id_un(1)'),transform_base_sur_svg(translate(833,15))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_basedd'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id base'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_basedd` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_rev_travail_basedd'),
            nom_bref_du_champ('rev travail'),abrege_du_champ('rev travail'),entete_distant_du_champ('rev travail base'),
            typologie(cht),
            genre(98)
            )
            */
             `chp_rev_travail_basedd` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_fournisseur_basedd'),
            nom_bref_du_champ('fournisseur'),abrege_du_champ('fournisseur'),entete_distant_du_champ('fournisseur base'),
            typologie(chi),
            genre(104),
            longueur_du_champ(64)
            )
            */
             `chp_fournisseur_basedd` VARCHAR(64) NOT NULL DEFAULT  'sqlite'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_commentaire_basedd'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),entete_distant_du_champ('commentaire base'),
            typologie(cht),
            genre(6)
            )
            */
             `chp_commentaire_basedd` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_basedd'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),entete_distant_du_champ(' dtm base'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_basedd` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_basedd'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),entete_distant_du_champ(' dtc base'),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_basedd` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_basedd'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),entete_distant_du_champ(' nur base'),
            typologie(chi),
            genre(10),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_basedd` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_requetes 
*/

CREATE TABLE `tbl_requetes`(
/*
 meta(nom_de_la_table('tbl_requetes'),
   table('tbl_requetes'),
   genre_meta(table_de_base),rang_de_la_table(120),permet_la_gestion_de('requete'),
   distinction_pour_liste('liste des requetes'),
   distinction_pour_isad('d\'une requete'),transform_base_sur_svg(translate(1052,19))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_requete'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id requete'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_requete` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_requete'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),entete_distant_du_champ('commentaire requete'),
            typologie(cht),
            genre(6),
            est_libelle_lien(1)
            )
            */
             `cht_commentaire_requete` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_type_requete'),
            nom_bref_du_champ('type'),abrege_du_champ('type de requête'),entete_distant_du_champ('type requete'),
            typologie(chp),
            genre(103),
            longueur_du_champ(64)
            )
            */
             `chp_type_requete` VARCHAR(64) NOT NULL DEFAULT  'liste_ecran'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_requete'),
            nom_bref_du_champ('rev'),abrege_du_champ('format rev de la requête'),entete_distant_du_champ('rev requete'),
            typologie(cht),
            genre(6)
            )
            */
             `cht_rev_requete` TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_sql_requete'),
            nom_bref_du_champ('sql'),abrege_du_champ('format sql de la requête'),entete_distant_du_champ('sql requete'),
            typologie(cht),
            genre(6)
            )
            */
             `cht_sql_requete` TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_matrice_requete'),
            nom_bref_du_champ('matrice'),abrege_du_champ('format matriciel de la requête'),entete_distant_du_champ('matrice requete'),
            typologie(cht),
            genre(6)
            )
            */
             `cht_matrice_requete` TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che__nur_requete'),
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),entete_distant_du_champ(' nur requete'),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_requete` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_requete'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),entete_distant_du_champ(' dtm requete'),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtm_requete` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtc_requete'),
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),entete_distant_du_champ(' dtc requete'),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
            )
            */
             `chd__dtc_requete` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_est_souche_requete'),
            nom_bref_du_champ('est souche'),abrege_du_champ('requête souche ?'),entete_distant_du_champ('est souche requete'),
            typologie(che),
            genre(5)
            )
            */
             `che_est_souche_requete` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_table_reference_requete'),
            nom_bref_du_champ('table de reference'),abrege_du_champ('table de référence de la requête'),entete_distant_du_champ('table de reference requete'),
            typologie(chp),
            genre(12),
            longueur_du_champ(64)
            )
            */
             `chp_table_reference_requete` VARCHAR(64) DEFAULT  NULL
    );




/*
================================================================================ TABLE tbl_travaux 
*/

CREATE TABLE `tbl_travaux`(
/*
 meta(nom_de_la_table('tbl_travaux'),
   table('tbl_travaux'),
   genre_meta(table_de_base),rang_de_la_table(130),permet_la_gestion_de('travail'),
   distinction_pour_liste('liste des travaux'),
   distinction_pour_isad('d\'un travail'),transform_base_sur_svg(translate(911,390))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_travail'),
            nom_bref_du_champ('id'),abrege_du_champ('id du travail'),entete_distant_du_champ('id travail'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_travail` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_resume_travail'),
            nom_bref_du_champ('resumé'),abrege_du_champ('résumé du travail'),entete_distant_du_champ('resumé travail'),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
            )
            */
             `chp_resume_travail` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_travail'),
            nom_bref_du_champ('rev'),abrege_du_champ('description rev du travail'),entete_distant_du_champ('rev travail'),
            typologie(cht),
            genre(98)
            )
            */
             `cht_rev_travail` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_utilisateur_travail'),
            nom_bref_du_champ('id utilisateur'),abrege_du_champ('id utilisateur du travail'),entete_distant_du_champ('id utilisateur travail'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_utilisateur_travail` INTEGER NOT NULL REFERENCES tbl_utilisateurs(chi_id_utilisateur) ON UPDATE CASCADE
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_utilisateur_travail'),
            nom_bref_du_champ('nom utilisateur'),abrege_du_champ('nom utilisateur'),entete_distant_du_champ('nom utilisateur travail'),
            typologie(cht),
            genre(6)
            )
            */
             `cht_utilisateur_travail` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd_dtc_travail'),
            nom_bref_du_champ('dt création'),abrege_du_champ('date création'),entete_distant_du_champ('dt création travail'),
            typologie(chd),
            genre(16),
            longueur_du_champ(23)
            )
            */
             `chd_dtc_travail` VARCHAR(23) NOT NULL DEFAULT  '2000-01-01 00:00:00.000'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_etat_travail'),
            nom_bref_du_champ('état'),abrege_du_champ('état du travail'),entete_distant_du_champ('état travail'),
            typologie(chp),
            genre(20),
            longueur_du_champ(32)
            )
            */
             `chp_etat_travail` VARCHAR(32) NOT NULL DEFAULT  'en_file_d_attente'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_projet_travail'),
            nom_bref_du_champ('projet'),abrege_du_champ('référence du projet'),entete_distant_du_champ('projet travail'),
            typologie(chx),
            genre(4)
            )
            */
             `chx_projet_travail` INTEGER NOT NULL DEFAULT  1
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_log_travail'),
            nom_bref_du_champ('log'),abrege_du_champ('contenu du log'),entete_distant_du_champ('log travail'),
            typologie(cht),
            genre(6)
            )
            */
             `cht_log_travail` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chn_duree_travail'),
            nom_bref_du_champ('durée'),abrege_du_champ('durée'),entete_distant_du_champ('durée travail'),
            typologie(chn),
            genre(21)
            )
            */
             `chn_duree_travail` FLOAT DEFAULT  0
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
   distinction_pour_isad('d\'un paramètres'),fonctions_spéciales1('ne_pas_supprimer_id_un(2)'),transform_base_sur_svg(translate(573,585))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_parametre'),
            nom_bref_du_champ('id'),abrege_du_champ('id du parametre'),entete_distant_du_champ('paramètre'),
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
            nom_bref_du_champ('cle'),abrege_du_champ('cle du paramètre'),entete_distant_du_champ('paramètre'),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
            )
            */
             `chp_cle_parametre` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_parametre'),
            nom_bref_du_champ('nom'),abrege_du_champ('nom du paramètre'),entete_distant_du_champ('paramètre'),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
            )
            */
             `chp_nom_parametre` VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_parametre'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire du parametre'),entete_distant_du_champ('commentaire paramètre'),
            typologie(cht),
            genre(11)
            )
            */
             `cht_commentaire_parametre` TEXT
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_parametre'),
            nom_bref_du_champ('rev'),abrege_du_champ('rev du parametre'),entete_distant_du_champ('rev paramètre'),
            typologie(cht),
            genre(98)
            )
            */
             `cht_rev_parametre` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_ordre_parametre'),
            nom_bref_du_champ('ordre'),abrege_du_champ('ordre du parametre'),entete_distant_du_champ('ordre paramètre'),
            typologie(cht),
            genre(6)
            )
            */
             `cht_ordre_parametre` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_pour_admin_parametre'),
            nom_bref_du_champ('pour admin'),abrege_du_champ('pour admin du parametre'),entete_distant_du_champ('pour admin paramètre'),
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
            nom_bref_du_champ('fld tscrt parnams'),abrege_du_champ('fld tscrt parnams'),entete_distant_du_champ('fld tscrt parnams tbl_parametres'),
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
            nom_bref_du_champ('fld tsupd parnams'),abrege_du_champ('fld tsupd parnams'),entete_distant_du_champ('fld tsupd parnams tbl_parametres'),
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
            nom_bref_du_champ('fld cntupd parnams'),abrege_du_champ('fld cntupd parnams'),entete_distant_du_champ('fld cntupd parnams tbl_parametres'),
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
   distinction_pour_isad('d\'une grandeur'),fonctions_spéciales1('ne_pas_supprimer_id_un(1,2)'),transform_base_sur_svg(translate(818,725))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_grandeur'),
            nom_bref_du_champ('id'),abrege_du_champ('id de la grandeur'),entete_distant_du_champ('id grandeur'),
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
            nom_bref_du_champ('id paramètre'),abrege_du_champ('id du paramètre'),entete_distant_du_champ('id paramètre grandeur'),
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
            nom_bref_du_champ('cle'),abrege_du_champ('cle de la grandeur'),entete_distant_du_champ('grandeur'),libelle_grandeur('voir_champ_dependant'),
            typologie(cht),
            genre(98),
            est_libelle_lien(1)
            )
            */
             `chp_cle_grandeur` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_rev_grandeur'),
            nom_bref_du_champ('rev'),abrege_du_champ('rev de la grandeur'),entete_distant_du_champ('rev grandeur'),
            typologie(cht),
            genre(11)
            )
            */
             `cht_rev_grandeur` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_actif_grandeur'),
            nom_bref_du_champ('actif'),abrege_du_champ('la grandeur est active'),entete_distant_du_champ('actif grandeur'),
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
            nom_bref_du_champ('fld tscrt parnams'),abrege_du_champ('fld tscrt parnams'),entete_distant_du_champ('fld tscrt grandeur'),
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
            nom_bref_du_champ('fld tsupd parnams'),abrege_du_champ('fld tsupd parnams'),entete_distant_du_champ('grandeur'),
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
            nom_bref_du_champ('fld cntupd parnams'),abrege_du_champ('fld cntupd parnams'),entete_distant_du_champ('grandeur'),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_grandeur` INTEGER NOT NULL DEFAULT  0
    );




/*
================================================================================ TABLE tbl_taches 
*/

CREATE TABLE `tbl_taches`(
/*
 meta(nom_de_la_table('tbl_taches'),
   table('tbl_taches'),
   genre_meta(table_de_base),rang_de_la_table(330),permet_la_gestion_de('tâche'),
   distinction_pour_liste('liste des tâches'),
   distinction_pour_isad('d\'une tâche'),transform_base_sur_svg(translate(1040,693))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_tache'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id tâche'),
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
            nom_bref_du_champ('utilisateur'),abrege_du_champ('utilisateur'),entete_distant_du_champ('utilisateur tâche'),
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
            nom_bref_du_champ('texte'),abrege_du_champ('texte'),entete_distant_du_champ('texte tâche'),
            typologie(cht),
            genre(11),
            est_libelle_lien(1)
            )
            */
             `chp_texte_tache` TEXT NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_priorite_tache'),
            nom_bref_du_champ('priorite'),abrege_du_champ('priorite de la tâche'),entete_distant_du_champ('priorite tâche'),suggestion_du_champ('00,20,50,80,99'),
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
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),entete_distant_du_champ(' dtm tâche'),
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
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),entete_distant_du_champ(' dtc tâche'),
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
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),entete_distant_du_champ(' nur tâche'),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_tache` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_actif_tache'),
            nom_bref_du_champ('actif'),abrege_du_champ('actif'),entete_distant_du_champ('actif'),
            typologie(chx),
            genre(8)
            )
            */
             `chx_actif_tache` INTEGER REFERENCES tbl_grandeurs(chi_id_grandeur) ON UPDATE CASCADE DEFAULT  NULL
    );




/*
================================================================================ TABLE tbl_revs 
*/

CREATE TABLE `tbl_revs`(
/*
 meta(nom_de_la_table('tbl_revs'),
   table('tbl_revs'),
   genre_meta(table_de_base),rang_de_la_table(9999),permet_la_gestion_de('rev'),
   distinction_pour_liste('liste des revs'),
   distinction_pour_isad('d\'un rev'),transform_base_sur_svg(translate(320,528))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_rev'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id rev'),
            typologie(chi),
            genre(2)
            )
            */
             `chi_id_rev` INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_provenance_rev'),
            nom_bref_du_champ('provenance'),abrege_du_champ('provenance'),entete_distant_du_champ('provenance rev'),
            typologie(cho),
            genre(12),
            longueur_du_champ(64)
            )
            */
             `chp_provenance_rev` VARCHAR(64) DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_source_rev'),
            nom_bref_du_champ('source'),abrege_du_champ('source'),entete_distant_du_champ('source rev'),
            typologie(chx),
            genre(7)
            )
            */
             `chx_source_rev` INTEGER DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_id_rev'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_id_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_valeur_rev'),
            nom_bref_du_champ('valeur'),abrege_du_champ('valeur'),entete_distant_du_champ('valeur rev'),
            typologie(cht),
            genre(6)
            )
            */
             `chp_valeur_rev` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_type_rev'),
            nom_bref_du_champ('type'),abrege_du_champ('type'),entete_distant_du_champ('type rev'),
            typologie(cho),
            genre(105),
            longueur_du_champ(1)
            )
            */
             `chp_type_rev` VARCHAR(1) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_niveau_rev'),
            nom_bref_du_champ('niveau'),abrege_du_champ('niveau'),entete_distant_du_champ('niveau rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_niveau_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_quotee_rev'),
            nom_bref_du_champ('quotee'),abrege_du_champ('quotee'),entete_distant_du_champ('quotee rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_quotee_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_premier_rev'),
            nom_bref_du_champ('pos premier'),abrege_du_champ('pos premier'),entete_distant_du_champ('pos premier rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_pos_premier_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_dernier_rev'),
            nom_bref_du_champ('pos dernier'),abrege_du_champ('pos dernier'),entete_distant_du_champ('pos dernier rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_pos_dernier_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_parent_rev'),
            nom_bref_du_champ('parent'),abrege_du_champ('parent'),entete_distant_du_champ('parent rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_parent_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nbr_enfants_rev'),
            nom_bref_du_champ('nbr enfants'),abrege_du_champ('nbr enfants'),entete_distant_du_champ('nbr enfants rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_nbr_enfants_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_num_enfant_rev'),
            nom_bref_du_champ('num enfant'),abrege_du_champ('num enfant'),entete_distant_du_champ('num enfant rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_num_enfant_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_profondeur_rev'),
            nom_bref_du_champ('profondeur'),abrege_du_champ('profondeur'),entete_distant_du_champ('profondeur rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_profondeur_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_pos_ouver_parenthese_rev'),
            nom_bref_du_champ('pos ouver parenthese'),abrege_du_champ('pos ouver parenthese'),entete_distant_du_champ('pos ouver parenthese rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_pos_ouver_parenthese_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_enfant_suivant_rev'),
            nom_bref_du_champ('enfant suivant'),abrege_du_champ('enfant suivant'),entete_distant_du_champ('enfant suivant rev'),
            typologie(che),
            genre(9)
            )
            */
             `chp_enfant_suivant_rev` INTEGER NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_commentaire_rev'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),entete_distant_du_champ('commentaire rev'),
            typologie(cht),
            genre(6)
            )
            */
             `chp_commentaire_rev` TEXT DEFAULT  NULL
    );




/*
================================================================================ TABLE tbl_sources 
*/

CREATE TABLE "tbl_sources"(
/*
 meta(nom_de_la_table('tbl_sources'),
   table('tbl_sources'),
   genre_meta(table_de_base),rang_de_la_table(70),permet_la_gestion_de('source'),
   distinction_pour_liste('liste des sources'),
   distinction_pour_isad('d\'un source'),transform_base_sur_svg(translate(555,8))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_source'),
            nom_bref_du_champ('id'),abrege_du_champ('id'),entete_distant_du_champ('id source'),
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
            nom_bref_du_champ('nom'),abrege_du_champ('nom du source'),entete_distant_du_champ('nom source'),
            typologie(chi),
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
            nom_bref_du_champ('rev'),abrege_du_champ('rev'),entete_distant_du_champ('rev source'),
            typologie(chi),
            genre(98),
            longueur_du_champ(20.200)
            )
            */
             `cht_rev_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_genere_source'),
            nom_bref_du_champ('genere'),abrege_du_champ('genere'),entete_distant_du_champ('genere source'),
            typologie(chi),
            genre(97),
            longueur_du_champ(20.200)
            )
            */
             `cht_genere_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_binaire_source'),
            nom_bref_du_champ('binaire'),abrege_du_champ('binaire'),entete_distant_du_champ('binaire source'),
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
            nom_bref_du_champ('dossier id'),abrege_du_champ('dossier id'),entete_distant_du_champ('dossier id source'),
            typologie(chx),
            genre(8)
            )
            */
             `chx_dossier_id_source` INTEGER REFERENCES tbl_dossiers(chi_id_dossier) ON UPDATE CASCADE DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_commentaire_source'),
            nom_bref_du_champ('commentaire'),abrege_du_champ('commentaire'),entete_distant_du_champ('commentaire source'),
            typologie(cht),
            genre(6),
            longueur_du_champ(3)
            )
            */
             `cht_commentaire_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_autorisation_globale_source'),
            nom_bref_du_champ('autorisation globale'),abrege_du_champ('autorisation globale'),entete_distant_du_champ('autorisation globale source'),
            typologie(che),
            genre(5)
            )
            */
             `che_autorisation_globale_source` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_rev_source'),
            nom_bref_du_champ('condition rev'),abrege_du_champ('condition au format rev'),entete_distant_du_champ('condition rev source'),
            typologie(cht),
            genre(98),
            longueur_du_champ(3)
            )
            */
             `cht_condition_rev_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_condition_js_source'),
            nom_bref_du_champ('condition js'),abrege_du_champ('condition au format js'),entete_distant_du_champ('condition js source'),
            typologie(cht),
            genre(97),
            longueur_du_champ(3)
            )
            */
             `cht_condition_js_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_notification_ko_source'),
            nom_bref_du_champ('notification ko'),abrege_du_champ('notification si condition ko'),entete_distant_du_champ('notification ko source'),
            typologie(cht),
            genre(6),
            longueur_du_champ(3)
            )
            */
             `cht_notification_ko_source` TEXT DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_pour_util_source'),
            nom_bref_du_champ('pour util'),abrege_du_champ('pour util'),entete_distant_du_champ('pour util source'),
            typologie(che),
            genre(5)
            )
            */
             `che_pour_util_source` INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_usage_source'),
            nom_bref_du_champ('usage'),abrege_du_champ('usage du source'),entete_distant_du_champ('usage source'),
            typologie(chp),
            genre(112),
            longueur_du_champ(32)
            )
            */
             `chp_usage_source` VARCHAR(32) NOT NULL DEFAULT  'fichier'
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('che_verrouiller_source'),
            espece_du_champ(INTEGER),
            typologie(che),
            genre(5),
            nom_bref_du_champ('vérrouiller'),abrege_du_champ('vérrouiller le source'),entete_distant_du_champ(''),suggestion_du_champ(''),description_du_champ('vérrouiller le source pour empêcher une maj à partir de l\'écran de génération de programme.
'),libelle_grandeur(''),chi_id_parametre([object,HTMLInputElement]),
            masquer_champ_dans_svg(0),est_pas_cascade_quand_maj(0),
            refe_enfant_droite(0),
            refe_parent_gauche(0),
            est_libelle_lien(0)
            )
            */
             "che_est_verrouille_source" INTEGER NOT NULL DEFAULT  0
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chd__dtm_source'),
            nom_bref_du_champ(' dtm'),abrege_du_champ(' dtm'),entete_distant_du_champ(' dtm source'),
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
            nom_bref_du_champ(' dtc'),abrege_du_champ(' dtc'),entete_distant_du_champ(' dtc source'),
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
            nom_bref_du_champ(' nur'),abrege_du_champ(' nur'),entete_distant_du_champ(' nur source'),
            typologie(chi),
            genre(10),
            masquer_champ_dans_svg(1)
            )
            */
             `che__nur_source` INTEGER NOT NULL DEFAULT  0
    );



