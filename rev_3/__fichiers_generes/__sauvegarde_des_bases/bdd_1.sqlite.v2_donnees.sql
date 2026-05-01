

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

/*================================================================================ DEBUT BLOC TABLE tbl_acces offset 0 (3) */
INSERT INTO tbl_acces (  chi_id_acces ,  chp_nom_acces ,  chx_groupe_acces ,  chx_metier_acces ,  cht_parametres_acces ,  che_actif_acces ) VALUES
('1','racine_racine','1','1',NULL,'1'),
('2','admin','2','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes coordonnées\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"4\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"90\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"1\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"5\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":7,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"6\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métiers\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métiers\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"8\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"12\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"23\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"103\",\"data-chp_nom_source\":\"sources1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"sources\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"14\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"10\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"8\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"21\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"4\" data-separateur=\"0\">mes coordonnées</li><li data-chi_id_source=\"90\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"1\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"5\" data-separateur=\"0\">mes tâches</li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"6\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métiers\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"8\" data-separateur=\"0\">métiers</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"12\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"23\" data-separateur=\"0\">utilisateurs</li><li data-chi_id_source=\"103\" data-chp_nom_source=\"sources1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"sources\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"14\" data-separateur=\"0\">sources</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"10\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"8\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"21\" data-separateur=\"0\">menus</li></ul></li>    "}','1'),
('3','u1_m1','3','3','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"90\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"17\",\"data-separateur\":\"undefined\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes coordonnées\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"19\",\"data-separateur\":\"undefined\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"90\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"17\" data-separateur=\"undefined\">mes tâches</li><li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"19\" data-separateur=\"undefined\">mes coordonnées</li>    "}','1');
/*================================================================================ FIN BLOC TABLE tbl_acces offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_autorisations offset 0 (22) */
INSERT INTO tbl_autorisations (  chi_id_autorisation ,  chp_nom_autorisation ,  chx_acces_autorisation ,  chx_source_autorisation ) VALUES
('4','ecran_coordonnees1','2','88'),
('5','taches','2','90'),
('6','groupes','2','94'),
('8','métier','2','96'),
('10','autorisations','2','105'),
('12','accès','2','99'),
('14','sources','2','103'),
('17','tâches','3','90'),
('19','coordonnées','3','88'),
('21','menus','2','107'),
('23','utilisateurs','2','101'),
('24','groupes','2','95'),
('25','métier','2','97'),
('26','accès','2','98'),
('27','utilisateurs','2','102'),
('28','autorisations','2','106'),
('29','sources','2','104'),
('30','menus','2','108'),
('31','ecran_coordonnees1','2','89'),
('32','tâches','3','91'),
('33','coordonnées','3','89'),
('34','taches','2','91');
/*================================================================================ FIN BLOC TABLE tbl_autorisations offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_menus offset 0 (11) */
INSERT INTO tbl_menus (  chi_id_menu ,  cht_libelle_menu ,  chp_titre_menu ,  chx_autorisation_menu ,  chp_methode_menu ,  cht_initialisation_menu ,  cht_condition_menu ,  cht_condition_js_menu ) VALUES
('1','mes tâches','tâches','5','entree_module',NULL,NULL,NULL),
('2','mes coordonnées','mes coordonnées','4','entree_module',NULL,NULL,NULL),
('3','groupes','groupes','6','entree_module',NULL,NULL,NULL),
('4','métiers','métiers','8','entree_module',NULL,NULL,NULL),
('5','autorisations','autorisations','10','entree_module',NULL,NULL,NULL),
('6','accès','accès','12','entree_module',NULL,NULL,NULL),
('7','sources','sources','14','entree_module',NULL,NULL,NULL),
('8','menus','menus','21','entree_module',NULL,NULL,NULL),
('10','utilisateurs','utilisateurs','23','entree_module',NULL,NULL,NULL),
('11','mes tâches','tâches','17','entree_module',NULL,NULL,NULL),
('12','mes coordonnées','mes coordonnées','19','entree_module',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_menus offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_sources offset 0 (20) */
INSERT INTO tbl_sources (  chi_id_source ,  chp_nom_source ,  cht_rev_source ,  cht_genere_source ,  che_binaire_source ,  chx_dossier_id_source ,  cht_commentaire_source ,  chd__dtm_source ,  chd__dtc_source ,  che__nur_source ,  che_contient_version_source ,  che_autorisation_globale_source ) VALUES
('80','_connexion1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','1'),
('84','__gi1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','1'),
('88','x_ecran_coordonnees1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('89','x_ecran_coordonnees1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('90','taches1_c.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('91','taches1_s.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('94','groupes1_c.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('95','groupes1_s.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('96','metiers1_c.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('97','metiers1_s.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('98','acces1_s.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('99','acces1_c.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('101','utilisateurs1_c.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('102','utilisateurs1_s.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('103','sources1_c.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('104','sources1_s.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('105','autorisations1_c.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('106','autorisations1_s.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('107','menus1_c.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('108','menus1_s.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0');
/*================================================================================ FIN BLOC TABLE tbl_sources offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_utilisateurs offset 0 (3) */
INSERT INTO tbl_utilisateurs (  chi_id_utilisateur ,  chp_nom_de_connexion_utilisateur ,  chp_mot_de_passe_utilisateur ,  chp_parametres_utilisateur ,  chi_compteur1_utilisateur ,  chx_acces_utilisateur ,  chd__dtm_utilisateur ,  chd__dtc_utilisateur ,  che__nur_utilisateur ,  che_actif_utilisateur ) VALUES
('1','poipoip','$2a$10$3484.miHmi7ffCX/7AbEVe9XHgIKmi//YPtuB77BFOmTB6/jx3TVG',NULL,'89','1','2025-11-08 11:43:00.312','2025-11-08 11:43:00.312','0','1'),
('2','admin','$2a$10$Z6ff6VhYskADIYnPxKmBJeYigip4dMWsExi5d2glHP6GwmwJYDl6y',NULL,'40','2','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1'),
('3','u1','$2a$10$dG63WjU4q2WxyKOdFIZBcucA34ZoN3Wn0.fS2KJd62RKjVxcmp.eq',NULL,'14','3','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1');
/*================================================================================ FIN BLOC TABLE tbl_utilisateurs offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_taches offset 0 (6) */
INSERT INTO tbl_taches (  chi_id_tache ,  chx_utilisateur_tache ,  chp_texte_tache ,  chp_priorite_tache ,  chd__dtm_tache ,  chd__dtc_tache ,  che__nur_tache ) VALUES
('1','1','dev nnnnnnnn','1','2026-02-17 14:05:02.531','2025-11-10 15:27:03.326','0'),
('2','1','dev bbbbbbbbb','2','2026-02-11 16:33:32.271','2025-11-10 15:27:12.639','0'),
('3','2','admin azrae','0','2026-03-03 10:23:39.476','2025-11-13 16:51:07.215','0'),
('4','3','u1 raaaaaaahhhhh','1','2026-03-03 10:25:20.290','2025-11-15 12:32:28.493','0'),
('5','3','u1 rrrrbbbbbbhhhhhh','2','2026-03-03 10:25:27.718','2025-12-12 12:55:37.381','0'),
('6','2','admin xxxx','0','2026-02-17 14:08:16.212','2026-02-17 14:08:16.212','0');
/*================================================================================ FIN BLOC TABLE tbl_taches offset 0 */
