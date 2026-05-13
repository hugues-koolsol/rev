

/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_groupes offset 0 (3) */
INSERT INTO tbl_groupes (  chi_id_groupe ,  chp_nom_groupe ,  chx_parent_groupe ) VALUES
('1','dev','1'),
('2','admin1','2'),
('3','utilisateurs_1','2');
/*================================================================================ FIN BLOC TABLE tbl_groupes offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_metiers offset 0 (3) */
INSERT INTO tbl_metiers (  chi_id_metier ,  chp_nom_metier ,  chx_parent_metier ) VALUES
('1','dev','1'),
('2','admin','1'),
('3','metier_1','3');
/*================================================================================ FIN BLOC TABLE tbl_metiers offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_acces offset 0 (4) */
INSERT INTO tbl_acces (  chi_id_acces ,  chp_nom_acces ,  chx_metier_acces ,  chx_groupe_acces ,  cht_parametres_acces ,  che_actif_acces ) VALUES
('0','anonymes','2','1','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"à propos\",\"attributs\":{\"data-chi_id_source\":\"1000\",\"data-chp_nom_source\":\"x_ecran_a_propos1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"15\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"à propos\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"36\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"1000\" data-chp_nom_source=\"x_ecran_a_propos1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"15\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"à propos\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"36\" data-separateur=\"0\">à propos</li>    "}','1'),
('1','racine_racine','1','1','{}','1'),
('2','admin','2','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes coordonnées\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"4\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"90\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"1\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"5\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":7,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"6\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métiers\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métiers\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"8\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"12\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"23\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"103\",\"data-chp_nom_source\":\"sources1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"sources\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"14\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"10\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"8\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"21\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"4\" data-separateur=\"0\">mes coordonnées</li><li data-chi_id_source=\"90\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"1\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"5\" data-separateur=\"0\">mes tâches</li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"6\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métiers\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"8\" data-separateur=\"0\">métiers</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"12\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"23\" data-separateur=\"0\">utilisateurs</li><li data-chi_id_source=\"103\" data-chp_nom_source=\"sources1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"sources\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"14\" data-separateur=\"0\">sources</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"10\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"8\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"21\" data-separateur=\"0\">menus</li></ul></li>    "}','1'),
('3','u1_m1','3','3','{"le_json_du_menu":"[{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"14\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"34\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes coordonnées\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"19\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"14\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"34\" data-separateur=\"0\">mes tâches</li><li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"19\" data-separateur=\"0\">mes coordonnées</li>"}','1');
/*================================================================================ FIN BLOC TABLE tbl_acces offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_autorisations offset 0 (21) */
INSERT INTO tbl_autorisations (  chi_id_autorisation ,  chx_acces_autorisation ,  chx_source_autorisation ,  che_pour_sous_liste_autorisation ) VALUES
('4','2','88','0'),
('6','2','94','0'),
('8','2','96','0'),
('10','2','105','0'),
('12','2','99','0'),
('14','2','103','0'),
('19','3','88','0'),
('21','2','107','0'),
('23','2','101','0'),
('24','2','95','0'),
('25','2','97','0'),
('26','2','98','0'),
('27','2','102','0'),
('28','2','106','0'),
('29','2','104','0'),
('30','2','108','0'),
('31','2','89','0'),
('33','3','89','0'),
('34','3','1011','0'),
('35','3','1012','0'),
('36','0','1000','0');
/*================================================================================ FIN BLOC TABLE tbl_autorisations offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_menus offset 0 (12) */
INSERT INTO tbl_menus (  chi_id_menu ,  cht_libelle_menu ,  chp_titre_menu ,  chx_autorisation_menu ,  chp_methode_menu ,  cht_initialisation_menu ,  cht_condition_menu ,  cht_condition_js_menu ) VALUES
('2','mes coordonnées','mes coordonnées','4','entree_module',NULL,NULL,NULL),
('3','groupes','groupes','6','entree_module',NULL,NULL,NULL),
('4','métiers','métiers','8','entree_module',NULL,NULL,NULL),
('5','autorisations','autorisations','10','entree_module',NULL,NULL,NULL),
('6','accès','accès','12','entree_module',NULL,NULL,NULL),
('7','sources','sources','14','entree_module',NULL,NULL,NULL),
('8','menus','menus','21','entree_module',NULL,NULL,NULL),
('10','utilisateurs','utilisateurs','23','entree_module',NULL,NULL,NULL),
('12','mes coordonnées','mes coordonnées','19','entree_module',NULL,NULL,NULL),
('13','menus','menus','21','entree_module',NULL,NULL,NULL),
('14','mes tâches','mes tâches','34','entree_module',NULL,NULL,NULL),
('15','à propos','à propos','36','entree_module',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_menus offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_sources offset 0 (19) */
INSERT INTO tbl_sources (  chi_id_source ,  chp_nom_source ,  cht_rev_source ,  cht_genere_source ,  che_binaire_source ,  chx_dossier_id_source ,  cht_commentaire_source ,  chd__dtm_source ,  chd__dtc_source ,  che__nur_source ,  che_contient_version_source ,  che_autorisation_globale_source ,  cht_condition_js_source ,  cht_condition_rev_source ,  cht_notification_ko_source ) VALUES
('88','x_ecran_coordonnees1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('89','x_ecran_coordonnees1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('94','groupes1_c.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('95','groupes1_s.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('96','metiers1_c.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('97','metiers1_s.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('98','acces1_s.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('99','acces1_c.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('101','utilisateurs1_c.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('102','utilisateurs1_s.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('103','sources1_c.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('104','sources1_s.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('105','autorisations1_c.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('106','autorisations1_s.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('107','menus1_c.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('108','menus1_s.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('1000','x_ecran_a_propos1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','1',NULL,NULL,NULL),
('1011','taches1_c.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL),
('1012','taches1_s.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_sources offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_utilisateurs offset 0 (3) */
INSERT INTO tbl_utilisateurs (  chi_id_utilisateur ,  chp_nom_de_connexion_utilisateur ,  chp_mot_de_passe_utilisateur ,  chp_parametres_utilisateur ,  chi_compteur1_utilisateur ,  chx_acces_utilisateur ,  chd__dtm_utilisateur ,  chd__dtc_utilisateur ,  che__nur_utilisateur ,  che_actif_utilisateur ) VALUES
('1','dev','$2a$10$3484.miHmi7ffCX/7AbEVe9XHgIKmi//YPtuB77BFOmTB6/jx3TVG',NULL,'113','1','2025-11-08 11:43:00.312','2025-11-08 11:43:00.312','0','1'),
('2','admin','$2a$10$Z6ff6VhYskADIYnPxKmBJeYigip4dMWsExi5d2glHP6GwmwJYDl6y',NULL,'77','2','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('3','u1','$2a$10$9tcW5wIlXLa9Csrgwrl3UeniOzmp54dXfw.cyxp.lsDJV8Jp77ry6',NULL,'0','3','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1');
/*================================================================================ FIN BLOC TABLE tbl_utilisateurs offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_taches offset 0 (6) */
INSERT INTO tbl_taches (  chi_id_tache ,  chx_utilisateur_tache ,  chp_texte_tache ,  chp_priorite_tache ,  chd__dtm_tache ,  chd__dtc_tache ,  che__nur_tache ) VALUES
('3','2','admin aaaaa','0','2026-05-04 16:36:54.550','2025-11-13 16:51:07.215','0'),
('6','2','admin bbbbb','0','2026-05-04 16:37:02.371','2026-02-17 14:08:16.212','0'),
('8','1','dev aaaaa','0','2026-05-04 16:35:26.535','2026-05-04 16:34:01.581','0'),
('9','1','dev bbbbb','0','2026-05-04 16:35:18.663','2026-05-04 16:35:18.663','0'),
('10','3','u1 aaaaa','0','2026-05-04 16:36:17.726','2026-05-04 16:35:57.680','0'),
('11','3','u1 bbbbb','0','2026-05-04 16:39:07.776','2026-05-04 16:36:29.916','0');
/*================================================================================ FIN BLOC TABLE tbl_taches offset 0 */
