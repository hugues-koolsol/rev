

/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_groupes offset 0 */
INSERT INTO tbl_groupes (  chi_id_groupe ,  chp_nom_groupe ,  chx_parent_groupe ) VALUES
('1',' dev','1'),
('2','admin','2');
/*================================================================================ FIN BLOC TABLE tbl_groupes offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_metiers offset 0 */
INSERT INTO tbl_metiers (  chi_id_metier ,  chp_nom_metier ,  chx_parent_metier ) VALUES
('1','dev','1'),
('2','admin','2');
/*================================================================================ FIN BLOC TABLE tbl_metiers offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_acces offset 0 */
INSERT INTO tbl_acces (  chi_id_acces ,  chp_nom_acces ,  chx_groupe_acces ,  chx_metier_acces ,  cht_parametres_acces ,  che_actif_acces ) VALUES
('1','dev_dev','1','1','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"8\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"10\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"90\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"1\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"1\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"les tâches\",\"attributs\":{\"data-chi_id_source\":\"92\",\"data-chp_nom_source\":\"taches2_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"les tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"11\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":7,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"9\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"9\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métier\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métier\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"5\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"7\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"3\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"103\",\"data-chp_nom_source\":\"sources1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"sources\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"2\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"4\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":11,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"6\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"8\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"10\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"90\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"1\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"1\" data-separateur=\"0\">mes tâches</li><li data-chi_id_source=\"92\" data-chp_nom_source=\"taches2_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"les tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"11\" data-separateur=\"0\">les tâches</li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"9\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"9\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"5\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"7\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"3\" data-separateur=\"0\">utilisateurs</li><li data-chi_id_source=\"103\" data-chp_nom_source=\"sources1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"sources\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"2\" data-separateur=\"0\">sources</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"4\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"6\" data-separateur=\"0\">menus</li></ul></li>    "}','1'),
('2','admin_admin','2','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"12\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"90\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"13\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"12\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"90\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"13\" data-separateur=\"0\">mes tâches</li>    "}','1');
/*================================================================================ FIN BLOC TABLE tbl_acces offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_utilisateurs offset 0 */
INSERT INTO tbl_utilisateurs (  chi_id_utilisateur ,  chp_nom_de_connexion_utilisateur ,  chp_mot_de_passe_utilisateur ,  chp_parametres_utilisateur ,  chi_compteur1_utilisateur ,  chx_acces_utilisateur ,  chd__dtm_utilisateur ,  chd__dtc_utilisateur ,  che__nur_utilisateur ,  che_actif_utilisateur ) VALUES
('1','',NULL,NULL,'0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0');
/*================================================================================ FIN BLOC TABLE tbl_utilisateurs offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_sources offset 0 */
INSERT INTO tbl_sources (  chi_id_source ,  chp_nom_source ,  cht_rev_source ,  cht_genere_source ,  che_binaire_source ,  chx_dossier_id_source ,  cht_commentaire_source ,  chd__dtm_source ,  chd__dtc_source ,  che__nur_source ,  che_contient_version_source ,  che_autorisation_globale_source ) VALUES
('75','__cron1.js',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('76','__cron1.ps1',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('77','__serveur.js',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('78','__serveur.ps1',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('79','_connexion1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('80','_connexion1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','1'),
('81','__cr1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('82','__fnt1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('83','__gi1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('84','__gi1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','1'),
('85','__rev1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('86','__worker1.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('87','menu_arbre1.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('88','x_ecran_coordonnees1_c.js',NULL,NULL,'0','2','mes coordonnées','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('89','x_ecran_coordonnees1_s.js',NULL,NULL,'0','2','mes coordonnées','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('90','taches1_c.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('91','taches1_s.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('92','taches2_c.js',NULL,NULL,'0','2','tâches de tous les utilisateurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('93','taches2_s.js',NULL,NULL,'0','2','taches de tous les utilisateurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('94','groupes1_c.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('95','groupes1_s.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('96','metiers1_c.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('97','metiers1_s.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('98','acces1_s.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('99','acces1_c.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('100','v_tri_arbre1.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('101','utilisateurs1_c.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('102','utilisateurs1_s.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('103','sources1_c.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('104','sources1_s.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('105','autorisations1_c.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('106','autorisations1_s.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('107','menus1_c.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('108','menus1_s.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('109','w_ast_js_vers_rev1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0'),
('110','acorn1.js',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','0');
/*================================================================================ FIN BLOC TABLE tbl_sources offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_bdds offset 0 */
INSERT INTO tbl_bdds (  chi_id_basedd ,  chp_rev_travail_basedd ,  chp_fournisseur_basedd ,  chp_commentaire_basedd ,  chd__dtm_basedd ,  chd__dtc_basedd ,  che__nur_basedd ) VALUES
('1','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''''),
   collate(''''),
   transform_base_sur_svg(translate(2.5,15.5))
),
créer_table(
   nom_de_la_table(''tbl_groupes''),
   meta(
      nom_de_la_table(''tbl_groupes''),
      table(''tbl_groupes''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''groupe''),
      distinction_pour_liste(''liste des groupes''),
      distinction_pour_isad(''d\''un groupe''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2)''),
      transform_table_sur_svg(translate(5.5,27.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_groupe''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_groupe''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_groupe''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(128),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_groupe''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(cht),
            genre(19),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_groupe''),
         espece_du_champ(INTEGER),
         references(tbl_groupes,chi_id_groupe),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_groupe''),
            nom_bref_du_champ(''parent''),
            abrege_du_champ(''parent''),
            typologie(chx),
            genre(8),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_groupes''),
   nom_de_l_index(''idx_nom_groupe''),
   meta(nom_de_l_index(idx_nom_groupe),genre_meta(index_de_table),message(''ce nom de groupe existe'')),
   champs(''chp_nom_groupe''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_metiers''),
   meta(
      nom_de_la_table(''tbl_metiers''),
      table(''tbl_metiers''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''metier''),
      distinction_pour_liste(''liste des metiers''),
      distinction_pour_isad(''d\''un metier''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2)''),
      transform_table_sur_svg(translate(6.5,119.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_metier''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_metier''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_metier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(128),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_metier''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(cht),
            genre(19),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_metier''),
         espece_du_champ(INTEGER),
         references(tbl_metiers,chi_id_metier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_metier''),
            nom_bref_du_champ(''parent''),
            abrege_du_champ(''parent''),
            typologie(chx),
            genre(8),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_metiers''),
   nom_de_l_index(''idx_nom_metier''),
   meta(nom_de_l_index(idx_nom_metier),genre_meta(index_de_table),message('''')),
   champs(''chp_nom_metier''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_acces''),
   meta(
      nom_de_la_table(''tbl_acces''),
      table(''tbl_acces''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''accès''),
      distinction_pour_liste(''liste des accès''),
      distinction_pour_isad(''d\''un accès''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2)''),
      transform_table_sur_svg(translate(225.5,82.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_acces''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_acces''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_acces''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_acces''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_groupe_acces''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_groupes,chi_id_groupe),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_groupe_acces''),
            nom_bref_du_champ(''groupe''),
            abrege_du_champ(''groupe''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_metier_acces''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_metiers,chi_id_metier),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_metier_acces''),
            nom_bref_du_champ(''metier''),
            abrege_du_champ(''metier''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_parametres_acces''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_parametres_acces''),
            nom_bref_du_champ(''parametres''),
            abrege_du_champ(''parametres''),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che_actif_acces''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_actif_acces''),
            espece_du_champ(INTEGER),
            typologie(che),
            genre(5),
            nom_bref_du_champ(''actif''),
            abrege_du_champ(''actif''),
            masquer_champ_dans_svg(0),
            est_en_session(0),
            nom_en_session(''''),
            refe_enfant_droite(0),
            refe_parent_gauche(0),
            est_libelle_lien(0)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_acces''),
   nom_de_l_index(''idx_acces_grp_metier''),
   meta(nom_de_l_index(idx_acces_grp_metier),genre_meta(index_de_table),message('''')),
   champs(''chx_groupe_acces'',''chx_metier_acces''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_utilisateurs''),
   meta(
      nom_de_la_table(''tbl_utilisateurs''),
      table(''tbl_utilisateurs''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''utilisateur''),
      distinction_pour_liste(''liste des utilisateurs''),
      distinction_pour_isad(''d\''un utilisateur''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_table_sur_svg(translate(429.5,300.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_utilisateur''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_utilisateur''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER),
            est_en_session(1)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_de_connexion_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_de_connexion_utilisateur''),
            nom_bref_du_champ(''nom de connexion''),
            abrege_du_champ(''nom de connexion''),
            typologie(cht),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_mot_de_passe_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(256),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_mot_de_passe_utilisateur''),
            nom_bref_du_champ(''mot de passe''),
            abrege_du_champ(''mot de passe''),
            typologie(cht),
            genre(13),
            espece_du_champ(VARCHAR),
            longueur_du_champ(256)
         )
      ),
      champ(
         nom_du_champ(''chp_parametres_utilisateur''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_parametres_utilisateur''),
            nom_bref_du_champ(''parametres''),
            abrege_du_champ(''parametres''),
            typologie(cht),
            genre(6),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chi_compteur1_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_compteur1_utilisateur''),
            nom_bref_du_champ(''compteur1''),
            abrege_du_champ(''compteur1''),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_acces_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_acces,chi_id_acces),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_acces_utilisateur''),
            nom_bref_du_champ(''acces''),
            abrege_du_champ(''acces''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_utilisateur''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_utilisateur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_utilisateur''),
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che__nur_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_utilisateur''),
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_actif_utilisateur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_actif_utilisateur''),
            nom_bref_du_champ(''actif''),
            abrege_du_champ(''actif''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_utilisateurs''),
   nom_de_l_index(''idx_nom_unique_utilisateurs''),
   meta(nom_de_l_index(idx_nom_unique_utilisateurs),genre_meta(index_de_table),message(''Ce nom d\''utilisateur existe déjà'')),
   champs(''chp_nom_de_connexion_utilisateur''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_menus''),
   meta(
      nom_de_la_table(''tbl_menus''),
      table(''tbl_menus''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''menu''),
      distinction_pour_liste(''liste des menus''),
      distinction_pour_isad(''d\''un menu''),
      transform_table_sur_svg(translate(778.5,62.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_menu''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_menu''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_libelle_menu''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_libelle_menu''),
            nom_bref_du_champ(''libelle''),
            abrege_du_champ(''libelle''),
            typologie(cht),
            genre(11),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_titre_menu''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_titre_menu''),
            nom_bref_du_champ(''titre''),
            abrege_du_champ(''titre''),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_autorisation_menu''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_autorisations,chi_id_autorisation),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_autorisation_menu''),
            nom_bref_du_champ(''autorisation''),
            abrege_du_champ(''autorisation''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_methode_menu''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_methode_menu''),
            nom_bref_du_champ(''methode''),
            abrege_du_champ(''methode''),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''cht_initialisation_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_initialisation_menu''),
            nom_bref_du_champ(''initialisation''),
            abrege_du_champ(''initialisation''),
            typologie(cht),
            genre(98),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_menu''),
            nom_bref_du_champ(''condition''),
            abrege_du_champ(''condition''),
            typologie(cht),
            genre(98),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_js_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_js_menu''),
            nom_bref_du_champ(''condition php''),
            abrege_du_champ(''condition php''),
            typologie(cht),
            genre(97),
            espece_du_champ(TEXT)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_taches''),
   meta(
      nom_de_la_table(''tbl_taches''),
      table(''tbl_taches''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''tâche''),
      distinction_pour_liste(''liste des tâches''),
      distinction_pour_isad(''d\''une tâche''),
      transform_table_sur_svg(translate(751.5,437.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_tache''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_tache''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_utilisateur_tache''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_utilisateurs,chi_id_utilisateur),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_utilisateur_tache''),
            nom_bref_du_champ(''utilisateur''),
            abrege_du_champ(''utilisateur''),
            typologie(chx),
            genre(18),
            espece_du_champ(INTEGER),
            est_en_session(1),
            nom_en_session(''chi_id_utilisateur'')
         )
      ),
      champ(
         nom_du_champ(''chp_texte_tache''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_texte_tache''),
            nom_bref_du_champ(''texte''),
            abrege_du_champ(''texte''),
            typologie(),
            genre(11),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
         )
      ),
      champ(
         nom_du_champ(''chp_priorite_tache''),
         espece_du_champ(INTEGER),
         longueur_du_champ(2),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_priorite_tache''),
            nom_bref_du_champ(''priorite''),
            abrege_du_champ(''priorite''),
            typologie(),
            genre(99),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_tache''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_tache''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_tache''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_tache''),
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chi),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che__nur_tache''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_tache''),
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(che),
            genre(15),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_taches''),
   nom_de_l_index(''idx_texte_unique_taches''),
   meta(nom_de_l_index(idx_texte_unique_taches),genre_meta(index_de_table),message(''Cete tache existe déjà'')),
   champs(''chp_texte_tache''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_autorisations''),
   meta(
      nom_de_la_table(''tbl_autorisations''),
      table(''tbl_autorisations''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''autorisation''),
      distinction_pour_liste(''liste des autorisations''),
      distinction_pour_isad(''d\''une autorisation''),
      transform_table_sur_svg(translate(453.5,67.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_autorisation''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_autorisation''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_autorisation''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(255),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_autorisation''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(chp),
            genre(17),
            espece_du_champ(VARCHAR),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_acces_autorisation''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_acces,chi_id_acces),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_acces_autorisation''),
            nom_bref_du_champ(''acces''),
            abrege_du_champ(''acces''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_source_autorisation''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_sources,chi_id_source),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_source_autorisation''),
            nom_bref_du_champ(''source''),
            abrege_du_champ(''source''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER),
            refe_enfant_droite(1),
            refe_parent_gauche(1)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_autorisations''),
   nom_de_l_index(''idx_unique1''),
   meta(nom_de_l_index(idx_unique1),genre_meta(index_de_table),message('''')),
   champs(''chx_acces_autorisation'',''chx_source_autorisation''),
   unique()
),
créer_table(
   nom_de_la_table(''tbl_sources''),
   meta(
      nom_de_la_table(''tbl_sources''),
      table(''tbl_sources''),
      genre_meta(table_de_base),
      permet_la_gestion_de(''source''),
      distinction_pour_liste(''liste des sources''),
      distinction_pour_isad(''d\''un source''),
      transform_table_sur_svg(translate(777.5,234.5))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_source''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_source''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            typologie(),
            genre(2),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(128),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_source''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom''),
            typologie(),
            genre(19),
            espece_du_champ(TEXT),
            est_libelle_lien(1)
         )
      ),
      champ(
         nom_du_champ(''cht_rev_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_source''),
            nom_bref_du_champ(''rev''),
            abrege_du_champ(''rev''),
            typologie(),
            genre(98),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''cht_genere_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_genere_source''),
            nom_bref_du_champ(''genere''),
            abrege_du_champ(''genere''),
            typologie(),
            genre(97),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''che_binaire_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_binaire_source''),
            nom_bref_du_champ(''binaire''),
            abrege_du_champ(''binaire''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_id_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_id_source''),
            nom_bref_du_champ(''dossier id''),
            abrege_du_champ(''dossier id''),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_source''),
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            typologie(),
            genre(6),
            espece_du_champ(TEXT)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_source''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            typologie(chd),
            genre(16),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_source''),
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            typologie(chd),
            genre(14),
            espece_du_champ(VARCHAR),
            longueur_du_champ(23),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che__nur_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_source''),
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            typologie(chi),
            genre(10),
            espece_du_champ(INTEGER),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_contient_version_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_contient_version_source''),
            nom_bref_du_champ(''contient version''),
            abrege_du_champ(''contient version''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      ),
      champ(
         nom_du_champ(''che_autorisation_globale_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_autorisation_globale_source''),
            nom_bref_du_champ(''autorisation globale''),
            abrege_du_champ(''autorisation globale''),
            typologie(che),
            genre(5),
            espece_du_champ(INTEGER)
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_sources''),
   nom_de_l_index(''idx_source''),
   meta(nom_de_l_index(idx_source),genre_meta(index_de_table),message('''')),
   champs(''chx_dossier_id_source'',''chp_nom_source''),
   unique()
)','sqlite',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');
/*================================================================================ FIN BLOC TABLE tbl_bdds offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_menus offset 0 */
INSERT INTO tbl_menus (  chi_id_menu ,  cht_libelle_menu ,  chp_titre_menu ,  chx_autorisation_menu ,  chp_methode_menu ,  cht_initialisation_menu ,  cht_condition_menu ,  cht_condition_js_menu ) VALUES
('1','mes tâches','tâches','1','entree_module',NULL,NULL,NULL),
('2','sources','sources','2','entree_module',NULL,NULL,NULL),
('3','utilisateurs','utilisateurs','3','entree_module',NULL,NULL,NULL),
('4','autorisations','autorisations','4','entree_module',NULL,NULL,NULL),
('5','métier','métier','5','entree_module',NULL,NULL,NULL),
('6','menus','menus','6','entree_module',NULL,NULL,NULL),
('7','accès','accès','7','entree_module',NULL,NULL,NULL),
('8','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg>','mes coordonnées','10','entree_module',NULL,NULL,NULL),
('9','groupes','groupes','9','entree_module',NULL,NULL,NULL),
('10','les tâches','les tâches','11','entree_module',NULL,NULL,NULL),
('11','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg>','mes coordonnées','12','entree_module',NULL,NULL,NULL),
('12','mes tâches','tâches','13','entree_module',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_menus offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_taches offset 0 */
INSERT INTO tbl_taches (  chi_id_tache ,  chx_utilisateur_tache ,  chp_texte_tache ,  chp_priorite_tache ,  chd__dtm_tache ,  chd__dtc_tache ,  che__nur_tache ) VALUES
('1','1','les tâches des utilisateurs','0','2026-02-09 07:38:23.887','2026-02-09 07:38:23.887','0');
/*================================================================================ FIN BLOC TABLE tbl_taches offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_autorisations offset 0 */
INSERT INTO tbl_autorisations (  chi_id_autorisation ,  chp_nom_autorisation ,  chx_acces_autorisation ,  chx_source_autorisation ) VALUES
('1','mes tâches dev','1','90'),
('2','sources','1','103'),
('3','utilisateurs','1','101'),
('4','autorisations','1','105'),
('5','métiers pour dev','1','96'),
('6','menus','1','107'),
('7','accés','1','99'),
('9','groupes','1','94'),
('10','mes coordonnées','1','88'),
('11','les tâches dev','1','92'),
('12','mes coordonnées','2','88'),
('13','mes tâches admin','2','90'),
('14','mes coordonnées','2','89'),
('15','mes tâches admin','2','91');
/*================================================================================ FIN BLOC TABLE tbl_autorisations offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_genres offset 0 */
INSERT INTO tbl_genres (  chi_id_genre ,  chp_nom_genre ,  che_ordre_genre ,  chp_prefixe_genre ,  chp_espece_genre ,  che_longueur_genre ,  che_est_primaire_genre ,  che_est_incrément_genre ,  che_est_obligatoire_genre ,  che_a_init_genre ,  che_init_est_mot_genre ,  cht_valeur_init_genre ,  che_est_parmis_genre ,  cht_parmis_genre ,  cht_fonctions_genre ,  che_est_nur_genre ,  che_est_tsm_genre ,  che_est_tsc_genre ,  chd__dtc_genre ,  chd__dtm_genre ,  che__nur_genre ,  che_est_session_genre ,  chp_nom_en_session_genre ,  che_est_positif_genre ,  cht_particularités_genre ) VALUES
('1','***indéfini***','23','cht','TEXT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('2','id primaire non nulle','1','chi','INTEGER',NULL,'1','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2025-09-25 16:55:08.841','18','0',NULL,'1',NULL),
('3','varchar 64 NON NULLE','2','chp','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('4','lien NON NULL','5','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('5','zero_un non nulle à 0','15','che','INTEGER',NULL,'0','0','1','1','0','0','1','0,1',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('6','texte NULL','12','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('7','entier NULL','9','che','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('8','lien NULL','6','chx','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('9','entier NON NULL','7','che','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('10','entier NON NULL à zéro','8','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('11','texte NON NULL','11','cht','TEXT',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('12','varchar 64 NULL','3','chp','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('13','mot de passe','18','chp','VARCHAR','256','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('14','dt23 création','16','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('15','nur','20','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'1','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('16','dt23 modification','17','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('17','varchar 255 NON NULLE','4','chp','VARCHAR','255','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('18','id utilisateur','21','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2025-09-06 14:10:54.357','2025-10-04 07:03:24.668','8','1','chi_id_utilisateur','0',NULL),
('19','nom technique','19','cht','VARCHAR','128','0','0','1','0','0',NULL,'0',NULL,'test_du_nom_technique1()','0','0','0','2025-11-19 12:07:33.326','2025-11-19 12:07:33.326','0','0',NULL,'0',NULL),
('21','durée_du_travail','10','chn','FLOAT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-02-15 13:48:23.907','2026-02-15 14:10:08.496','1','0',NULL,'0',NULL),
('97','texte NULL source_non_rev','14','cht','TEXT','','0','0','0','1','0','NULL','0','','','0','0','0','2025-10-21 10:14:55.512','2025-10-21 10:14:55.512','0','0','','0','source_non_rev(1)'),
('98','texte NULL source_au_format_rev','13','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2025-10-20 17:48:22.207','2025-10-21 09:41:32.943','5','0',NULL,'0','source_au_format_rev(1)'),
('99','priorité','22','che','INTEGER','2','0','0','1','1','0','0','0',NULL,'entier_compris_entre(0,99)','0','0','0','2025-09-06 09:19:20.196','2025-09-06 09:19:20.196','0','0',NULL,'0',NULL),
('109','id projet','24','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-01-17 12:12:01.759','2026-01-17 12:12:01.759','0','1','chi_id_projet','0',NULL);
/*================================================================================ FIN BLOC TABLE tbl_genres offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_dossiers offset 0 */
INSERT INTO tbl_dossiers (  chi_id_dossier ,  chp_nom_dossier ,  chx_parent_dossier ,  che__nur_dossier ,  chd__dtm_dossier ,  chd__dtc_dossier ) VALUES
('1',NULL,'1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('2','__programmes','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('3','__fichiers_generes','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('4','__sessions','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('5','__bases_de_donnees','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('6','__sqls','3','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('7','bibliotheques_externes','2','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('8','__fichiers_binaires','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');
/*================================================================================ FIN BLOC TABLE tbl_dossiers offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_requetes offset 0 */
INSERT INTO tbl_requetes (  chi_id_requete ,  cht_commentaire_requete ,  chp_type_requete ,  cht_rev_requete ,  cht_sql_requete ,  cht_matrice_requete ,  che__nur_requete ,  chd__dtm_requete ,  chd__dtc_requete ,  che_est_souche_requete ,  chp_table_reference_requete ) VALUES
('101','tbl_utilisateurs','select','sélectionner(
   valeurs(champ(`T0`,`chp_mot_de_passe_utilisateur`),champ(`T0`,`chi_id_utilisateur`),champ(`T0`,`chx_acces_utilisateur`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_utilisateur)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chp_nom_de_connexion_utilisateur`),:T0_chp_nom_de_connexion_utilisateur),egal(champ(`T0`,`che_actif_utilisateur`),1),egal(champ(`T1`,`che_actif_acces`),1))
   ),
   complements(limité_à(quantité(1),début(0)))
)  ','SELECT 
`T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T0`.`chx_acces_utilisateur`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE (`T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur
   AND `T0`.`che_actif_utilisateur` = 1
   AND `T1`.`che_actif_acces` = 1)  
LIMIT 1 OFFSET 0 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('102',NULL,'insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_id_utilisateur`),:chi_id_utilisateur),
      affecte(champ(`chp_nom_de_connexion_utilisateur`),:chp_nom_de_connexion_utilisateur),
      affecte(champ(`chp_mot_de_passe_utilisateur`),:chp_mot_de_passe_utilisateur),
      affecte(champ(`chx_acces_utilisateur`),:chx_acces_utilisateur),
      affecte(champ(`chd__dtm_utilisateur`),:chd__dtm_utilisateur),
      affecte(champ(`chd__dtc_utilisateur`),:chd__dtc_utilisateur)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_utilisateurs`(
    `chi_id_utilisateur` , 
    `chp_nom_de_connexion_utilisateur` , 
    `chp_mot_de_passe_utilisateur` , 
    `chx_acces_utilisateur` , 
    `chd__dtm_utilisateur` , 
    `chd__dtc_utilisateur`
) VALUES (
    :chi_id_utilisateur , 
    :chp_nom_de_connexion_utilisateur , 
    :chp_mot_de_passe_utilisateur , 
    :chx_acces_utilisateur , 
    :chd__dtm_utilisateur , 
    :chd__dtc_utilisateur
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('103',NULL,'select','sélectionner(
   base_de_reference(1),
   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      )
   )
)  ','SELECT 
COUNT( * )
 FROM b1.tbl_utilisateurs T0
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('104',NULL,'insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_groupe`),:chi_id_groupe),affecte(champ(`chp_nom_groupe`),:chp_nom_groupe),affecte(champ(`chx_parent_groupe`),:chx_parent_groupe)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_groupes`(
    `chi_id_groupe` , 
    `chp_nom_groupe` , 
    `chx_parent_groupe`
) VALUES (
    :chi_id_groupe , 
    :chp_nom_groupe , 
    :chx_parent_groupe
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_groupes'),
('105',NULL,'insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_metier`),:chi_id_metier),affecte(champ(`chp_nom_metier`),:chp_nom_metier),affecte(champ(`chx_parent_metier`),:chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_metiers`(
    `chi_id_metier` , 
    `chp_nom_metier` , 
    `chx_parent_metier`
) VALUES (
    :chi_id_metier , 
    :chp_nom_metier , 
    :chx_parent_metier
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_metiers'),
('106',NULL,'insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chi_id_acces`),:chi_id_acces),affecte(champ(`chp_nom_acces`),:chp_nom_acces),affecte(champ(`chx_groupe_acces`),:chx_groupe_acces),affecte(champ(`chx_metier_acces`),:chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_acces`(
    `chi_id_acces` , 
    `chp_nom_acces` , 
    `chx_groupe_acces` , 
    `chx_metier_acces`
) VALUES (
    :chi_id_acces , 
    :chp_nom_acces , 
    :chx_groupe_acces , 
    :chx_metier_acces
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces'),
('107','utilisateurs','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chi_compteur1_utilisateur`),plus(champ(chi_compteur1_utilisateur),1))
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('108','tbl_utilisateurs','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chp_parametres_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_utilisateur)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_utilisateur`),:T0_chi_id_utilisateur))
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('109','utilisateur','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:n_chp_nom_de_connexion_utilisateur),affecte(champ(`chp_mot_de_passe_utilisateur`),:n_chp_mot_de_passe_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('110','tâches','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`chp_priorite_tache`),
      champ(`T0`,`chd__dtm_tache`),
      champ(`T0`,`chd__dtc_tache`),
      champ(`T0`,`che__nur_tache`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_tache)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache),
         comme(champ(`T0`,`chp_texte_tache`),:T0_chp_texte_tache),
         egal(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache),
         inf(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache2)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chp_priorite_tache`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
`T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE ( /* */ `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
   AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
ORDER BY `T0`.`chp_priorite_tache` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('111','tâches','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache),
      affecte(champ(`chp_texte_tache`),:chp_texte_tache),
      affecte(champ(`chp_priorite_tache`),:chp_priorite_tache),
      affecte(champ(`chd__dtm_tache`),:chd__dtm_tache),
      affecte(champ(`chd__dtc_tache`),:chd__dtc_tache)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_taches`(
    `chx_utilisateur_tache` , 
    `chp_texte_tache` , 
    `chp_priorite_tache` , 
    `chd__dtm_tache` , 
    `chd__dtc_tache`
) VALUES (
    :chx_utilisateur_tache , 
    :chp_texte_tache , 
    :chp_priorite_tache , 
    :chd__dtm_tache , 
    :chd__dtc_tache
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('112','tâches','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`chp_priorite_tache`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_tache)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('113','taches','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_texte_tache`),:n_chp_texte_tache),affecte(champ(`chp_priorite_tache`),:n_chp_priorite_tache),affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_tache`),:c_chi_id_tache),egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache))
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('114','tâches','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_tache`),:chi_id_tache),egal(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache))
   )
)  ','DELETE FROM b1.tbl_taches
WHERE (`chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('115','sources','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`che_binaire_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`che_contient_version_source`),
      champ(`T0`,`che_autorisation_globale_source`),
      champ(`T0`,`chx_dossier_id_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         comme(champ(`T0`,`chp_nom_source`),:T0_chp_nom_source),
         egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source),
         sup(champ(`T0`,`chi_id_source`),:T0_chi_id_source2),
         infegal(champ(`T0`,`chi_id_source`),:T0_chi_id_source3),
         egal(champ(`T0`,`che_binaire_source`),:T0_che_binaire_source),
         egal(champ(`T0`,`chx_dossier_id_source`),:T0_chx_dossier_id_source),
         egal(champ(`T0`,`che_contient_version_source`),:T0_che_contient_version_source),
         egal(champ(`T0`,`che_autorisation_globale_source`),:T0_che_autorisation_globale_source)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_source`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , 
`T0`.`che_autorisation_globale_source` , `T0`.`chx_dossier_id_source`
 FROM b1.tbl_sources T0
WHERE (`T0`.`chp_nom_source` LIKE :T0_chp_nom_source
   AND `T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chi_id_source` > :T0_chi_id_source2
   AND `T0`.`chi_id_source` <= :T0_chi_id_source3
   AND `T0`.`che_binaire_source` = :T0_che_binaire_source
   AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
   AND `T0`.`che_contient_version_source` = :T0_che_contient_version_source
   AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source) 
ORDER BY `T0`.`chi_id_source` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('116','sources','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`che_contient_version_source`),
      champ(`T0`,`che_autorisation_globale_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source))
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`chi_id_source` = :T0_chi_id_source
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('117','sources','insert','insérer(
   base_de_reference(),
   valeurs(
      affecte(champ(`chp_nom_source`),:chp_nom_source),
      affecte(champ(`che_binaire_source`),:che_binaire_source),
      affecte(champ(`cht_commentaire_source`),:cht_commentaire_source),
      affecte(champ(`che_contient_version_source`),:che_contient_version_source),
      affecte(champ(`che_autorisation_globale_source`),:che_autorisation_globale_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_sources`(
    `chp_nom_source` , 
    `che_binaire_source` , 
    `cht_commentaire_source` , 
    `che_contient_version_source` , 
    `che_autorisation_globale_source`
) VALUES (
    :chp_nom_source , 
    :che_binaire_source , 
    :cht_commentaire_source , 
    :che_contient_version_source , 
    :che_autorisation_globale_source
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('118','sources','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:chi_id_source))
)  ','DELETE FROM b1.tbl_sources
WHERE `chi_id_source` = :chi_id_source ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('119','utilisateurs','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T0`,`che_actif_utilisateur`),
      champ(`T1`,`che_actif_acces`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_utilisateur)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chi_id_utilisateur`),:T0_chi_id_utilisateur),
         comme(champ(`T0`,`chp_nom_de_connexion_utilisateur`),:T0_chp_nom_de_connexion_utilisateur),
         egal(champ(`T0`,`che_actif_utilisateur`),:T0_che_actif_utilisateur),
         supegal(champ(`T0`,`chi_compteur1_utilisateur`),:T0_chi_compteur1_utilisateur),
         egal(champ(`T0`,`chx_acces_utilisateur`),:T0_chx_acces_utilisateur),
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces),
         egal(champ(`T1`,`che_actif_acces`),:T1_che_actif_acces)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_utilisateur`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , 
`T1`.`chp_nom_acces` , `T0`.`che_actif_utilisateur` , `T1`.`che_actif_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE (`T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
   AND `T0`.`che_actif_utilisateur` = :T0_che_actif_utilisateur
   AND `T0`.`chi_compteur1_utilisateur` >= :T0_chi_compteur1_utilisateur
   AND `T0`.`chx_acces_utilisateur` = :T0_chx_acces_utilisateur
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T1`.`che_actif_acces` = :T1_che_actif_acces) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
('120','utilisateurs','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:chp_nom_de_connexion_utilisateur),affecte(champ(`chx_acces_utilisateur`),:chx_acces_utilisateur),affecte(champ(`che_actif_utilisateur`),:che_actif_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_utilisateurs`(
    `chp_nom_de_connexion_utilisateur` , 
    `chx_acces_utilisateur` , 
    `che_actif_utilisateur`
) VALUES (
    :chp_nom_de_connexion_utilisateur , 
    :chx_acces_utilisateur , 
    :che_actif_utilisateur
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
('121','utilisateurs','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chp_parametres_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`che__nur_utilisateur`),
      champ(`T0`,`chd__dtm_utilisateur`),
      champ(`T0`,`chd__dtc_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T0`,`che_actif_utilisateur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_utilisateur)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_utilisateur`),:T0_chi_id_utilisateur))
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
`T0`.`che_actif_utilisateur`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
('122','utilisateurs','update','modifier(
   base_de_reference(1),
   valeurs(
      #(),
      affecte(champ(`chp_nom_de_connexion_utilisateur`),:n_chp_nom_de_connexion_utilisateur),
      affecte(champ(`chx_acces_utilisateur`),:n_chx_acces_utilisateur),
      affecte(champ(`che_actif_utilisateur`),:n_che_actif_utilisateur)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)','UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chx_acces_utilisateur` = :n_chx_acces_utilisateur , 
   `che_actif_utilisateur` = :n_che_actif_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
('123','utilisateurs','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:chi_id_utilisateur))
)  ','DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
('124','métier','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_metier`),champ(`T0`,`chp_nom_metier`),champ(`T1`,`chp_nom_metier`),champ(`T0`,`chx_parent_metier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_metier),champ(T0,chx_parent_metier)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier),comme(champ(`T0`,`chp_nom_metier`),:T0_chp_nom_metier))
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_metier`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE (`T0`.`chi_id_metier` = :T0_chi_id_metier
   AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier) 
ORDER BY `T0`.`chi_id_metier` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
('125','métier','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_metier`),champ(`T0`,`chp_nom_metier`),champ(`T1`,`chp_nom_metier`),champ(`T0`,`chx_parent_metier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_metier),champ(T0,chx_parent_metier)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier))
)  ','SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
('126','métier','insert','insérer(
   base_de_reference(),
   valeurs(affecte(champ(`chp_nom_metier`),:chp_nom_metier),affecte(champ(`chx_parent_metier`),:chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_metiers`(
    `chp_nom_metier` , 
    `chx_parent_metier`
) VALUES (
    :chp_nom_metier , 
    :chx_parent_metier
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
('127','métier','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_metier`),:n_chp_nom_metier),affecte(champ(`chx_parent_metier`),:n_chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:c_chi_id_metier))
)  ','UPDATE b1.tbl_metiers SET 
   `chp_nom_metier` = :n_chp_nom_metier , 
   `chx_parent_metier` = :n_chx_parent_metier
WHERE `chi_id_metier` = :c_chi_id_metier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
('129','métier','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:chi_id_metier))
)  ','DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
('130','groupes','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_groupe`),champ(`T0`,`chp_nom_groupe`),champ(`T0`,`chx_parent_groupe`),champ(`T1`,`chp_nom_groupe`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_parent_groupe)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_groupe`),:T0_chi_id_groupe),comme(champ(`T0`,`chp_nom_groupe`),:T0_chp_nom_groupe),egal(champ(`T0`,`chx_parent_groupe`),:T0_chx_parent_groupe),comme(champ(`T1`,`chp_nom_groupe`),:T1_chp_nom_groupe))
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_groupe`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
 FROM b1.tbl_groupes T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe

WHERE (`T0`.`chi_id_groupe` = :T0_chi_id_groupe
   AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe
   AND `T0`.`chx_parent_groupe` = :T0_chx_parent_groupe
   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe) 
ORDER BY `T0`.`chi_id_groupe` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
('131','groupes','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_groupe`),champ(`T0`,`chp_nom_groupe`),champ(`T0`,`chx_parent_groupe`),champ(`T1`,`chp_nom_groupe`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_parent_groupe)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_groupe`),:T0_chi_id_groupe))
)  ','SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
 FROM b1.tbl_groupes T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe

WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
('132','groupes','insert','insérer(
   base_de_reference(),
   valeurs(affecte(champ(`chp_nom_groupe`),:chp_nom_groupe),affecte(champ(`chx_parent_groupe`),:chx_parent_groupe)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_groupes`(
    `chp_nom_groupe` , 
    `chx_parent_groupe`
) VALUES (
    :chp_nom_groupe , 
    :chx_parent_groupe
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
('133','groupes','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_nom_groupe`),:n_chp_nom_groupe),affecte(champ(`chx_parent_groupe`),:n_chx_parent_groupe)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:c_chi_id_groupe))
)  ','UPDATE b1.tbl_groupes SET 
   `chp_nom_groupe` = :n_chp_nom_groupe , 
   `chx_parent_groupe` = :n_chx_parent_groupe
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
('134','groupes','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:chi_id_groupe))
)  ','DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
('135','acces','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_acces`),
      champ(`T0`,`chp_nom_acces`),
      champ(`T0`,`che_actif_acces`),
      champ(`T0`,`chx_groupe_acces`),
      champ(`T0`,`chx_metier_acces`),
      champ(`T1`,`chp_nom_groupe`),
      champ(`T2`,`chp_nom_metier`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_groupe_acces)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_metier),champ(T0,chx_metier_acces)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chi_id_acces`),:T0_chi_id_acces),
         comme(champ(`T0`,`chp_nom_acces`),:T0_chp_nom_acces),
         egal(champ(`T0`,`che_actif_acces`),:T0_che_actif_acces),
         egal(champ(`T0`,`chx_groupe_acces`),:T0_chx_groupe_acces),
         comme(champ(`T1`,`chp_nom_groupe`),:T1_chp_nom_groupe),
         egal(champ(`T0`,`chx_metier_acces`),:T0_chx_metier_acces),
         comme(champ(`T2`,`chp_nom_metier`),:T2_chp_nom_metier)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_acces`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`che_actif_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , 
`T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE (`T0`.`chi_id_acces` = :T0_chi_id_acces
   AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces
   AND `T0`.`che_actif_acces` = :T0_che_actif_acces
   AND `T0`.`chx_groupe_acces` = :T0_chx_groupe_acces
   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe
   AND `T0`.`chx_metier_acces` = :T0_chx_metier_acces
   AND `T2`.`chp_nom_metier` LIKE :T2_chp_nom_metier) 
ORDER BY `T0`.`chi_id_acces` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
('136','acces','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_acces`),
      champ(`T0`,`chp_nom_acces`),
      champ(`T0`,`chx_groupe_acces`),
      champ(`T0`,`chx_metier_acces`),
      champ(`T0`,`cht_parametres_acces`),
      champ(`T1`,`chp_nom_groupe`),
      champ(`T2`,`chp_nom_metier`),
      champ(`T0`,`che_actif_acces`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_groupe_acces)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_metier),champ(T0,chx_metier_acces)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_acces`),:T0_chi_id_acces))
)  ','SELECT 
`T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
`T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
 FROM b1.tbl_acces T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces

WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
('137','acces','insert','insérer(
   base_de_reference(),
   valeurs(affecte(champ(`chp_nom_acces`),:chp_nom_acces),affecte(champ(`chx_groupe_acces`),:chx_groupe_acces),affecte(champ(`chx_metier_acces`),:chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
('138','acces','update','modifier(
   valeurs(affecte(champ(`chp_nom_acces`),:n_chp_nom_acces),affecte(champ(`chx_groupe_acces`),:n_chx_groupe_acces),affecte(champ(`chx_metier_acces`),:n_chx_metier_acces),affecte(champ(`che_actif_acces`),:n_che_actif_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:c_chi_id_acces))
)  ','UPDATE b1.tbl_acces SET 
   `chp_nom_acces` = :n_chp_nom_acces , 
   `chx_groupe_acces` = :n_chx_groupe_acces , 
   `chx_metier_acces` = :n_chx_metier_acces , 
   `che_actif_acces` = :n_che_actif_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
('139','acces','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:chi_id_acces))
)  ','DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
('140','autorisations','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chp_nom_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T2`,`chp_nom_source`),
      champ(`T2`,`chx_dossier_id_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_source),champ(T0,chx_source_autorisation)))
      )
   ),
   conditions(
      et(
         comme(champ(`T2`,`chp_nom_source`),:T2_chp_nom_source),
         egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation),
         egal(champ(`T0`,`chx_acces_autorisation`),:T0_chx_acces_autorisation),
         egal(champ(`T0`,`chx_source_autorisation`),:T0_chx_source_autorisation),
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_acces_autorisation`),décroissant()),(champ(`T2`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_autorisation`),décroissant()),(champ(`T2`,`chp_nom_source`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
`T2`.`chp_nom_source` , `T2`.`chx_dossier_id_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE (`T2`.`chp_nom_source` LIKE :T2_chp_nom_source
   AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
   AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
   AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces) 
ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
('141','autorisations','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chp_nom_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T2`,`chp_nom_source`),
      champ(`T2`,`che_binaire_source`),
      champ(`T2`,`chx_dossier_id_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_acces),champ(T0,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_source),champ(T0,chx_source_autorisation)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation))
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
`T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
('142','autorisations','insert','insérer(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_acces_autorisation`),:chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:chx_source_autorisation),affecte(champ(`chp_nom_autorisation`),:chp_nom_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_autorisations`(
    `chx_acces_autorisation` , 
    `chx_source_autorisation` , 
    `chp_nom_autorisation`
) VALUES (
    :chx_acces_autorisation , 
    :chx_source_autorisation , 
    :chp_nom_autorisation
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
('143','autorisations','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chx_acces_autorisation`),:n_chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:n_chx_source_autorisation),affecte(champ(`chp_nom_autorisation`),:n_chp_nom_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:c_chi_id_autorisation))
)  ','UPDATE b1.tbl_autorisations SET 
   `chx_acces_autorisation` = :n_chx_acces_autorisation , 
   `chx_source_autorisation` = :n_chx_source_autorisation , 
   `chp_nom_autorisation` = :n_chp_nom_autorisation
WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
('144','autorisations','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:chi_id_autorisation))
)  ','DELETE FROM b1.tbl_autorisations
WHERE `chi_id_autorisation` = :chi_id_autorisation ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
('145','menus','liste_ecran','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_condition_menu`),
      champ(`T1`,`chx_acces_autorisation`),
      champ(`T1`,`chx_source_autorisation`),
      champ(`T2`,`chp_nom_acces`),
      champ(`T3`,`chp_nom_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_autorisations,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_autorisation),champ(T0,chx_autorisation_menu)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_acces),champ(T1,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_source),champ(T1,chx_source_autorisation)))
      )
   ),
   conditions(
      et(
         comme(champ(`T3`,`chp_nom_source`),:T3_chp_nom_source),
         egal(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu),
         comme(champ(`T0`,`cht_libelle_menu`),:T0_cht_libelle_menu),
         comme(champ(`T0`,`chp_titre_menu`),:T0_chp_titre_menu),
         egal(champ(`T0`,`chx_autorisation_menu`),:T0_chx_autorisation_menu),
         comme(champ(`T1`,`chp_nom_autorisation`),:T1_chp_nom_autorisation),
         comme(champ(`T0`,`chp_methode_menu`),:T0_chp_methode_menu),
         egal(champ(`T1`,`chx_acces_autorisation`),:T1_chx_acces_autorisation)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_menu`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T3`.`chp_nom_source` LIKE :T3_chp_nom_source
   AND `T0`.`chi_id_menu` = :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
   AND `T1`.`chp_nom_autorisation` LIKE :T1_chp_nom_autorisation
   AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
   AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
('146','menus','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_initialisation_menu`),
      champ(`T0`,`cht_condition_menu`),
      champ(`T1`,`chx_acces_autorisation`),
      champ(`T1`,`chx_source_autorisation`),
      champ(`T2`,`chp_nom_acces`),
      champ(`T3`,`chp_nom_source`),
      champ(`T3`,`che_binaire_source`),
      champ(`T0`,`cht_condition_js_menu`),
      champ(`T1`,`chp_nom_autorisation`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_autorisations,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_autorisation),champ(T0,chx_autorisation_menu)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_acces),champ(T1,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_source),champ(T1,chx_source_autorisation)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu))
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
`T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu` , `T1`.`chp_nom_autorisation`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
('147','menus','insert','insérer(
   base_de_reference(1),
   valeurs(
      affecte(champ(`chp_titre_menu`),:chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:chp_methode_menu),
      affecte(champ(`cht_libelle_menu`),:cht_libelle_menu),
      affecte(champ(`cht_condition_menu`),:cht_condition_menu),
      affecte(champ(`cht_initialisation_menu`),:cht_initialisation_menu)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_menus`(
    `chp_titre_menu` , 
    `chx_autorisation_menu` , 
    `chp_methode_menu` , 
    `cht_libelle_menu` , 
    `cht_condition_menu` , 
    `cht_initialisation_menu`
) VALUES (
    :chp_titre_menu , 
    :chx_autorisation_menu , 
    :chp_methode_menu , 
    :cht_libelle_menu , 
    :cht_condition_menu , 
    :cht_initialisation_menu
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
('148','menus','update','modifier(
   base_de_reference(1),
   valeurs(
      affecte(champ(`cht_libelle_menu`),:n_cht_libelle_menu),
      affecte(champ(`chp_titre_menu`),:n_chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:n_chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:n_chp_methode_menu),
      affecte(champ(`cht_condition_menu`),:n_cht_condition_menu),
      affecte(champ(`cht_initialisation_menu`),:n_cht_initialisation_menu),
      affecte(champ(`cht_condition_js_menu`),:n_cht_condition_js_menu)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:c_chi_id_menu))
)  ','UPDATE b1.tbl_menus SET 
   `cht_libelle_menu` = :n_cht_libelle_menu , 
   `chp_titre_menu` = :n_chp_titre_menu , 
   `chx_autorisation_menu` = :n_chx_autorisation_menu , 
   `chp_methode_menu` = :n_chp_methode_menu , 
   `cht_condition_menu` = :n_cht_condition_menu , 
   `cht_initialisation_menu` = :n_cht_initialisation_menu , 
   `cht_condition_js_menu` = :n_cht_condition_js_menu
WHERE `chi_id_menu` = :c_chi_id_menu ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
('149','menus','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:chi_id_menu))
)  ','DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
('150','utilisateurs','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_mot_de_passe_utilisateur`),:n_chp_mot_de_passe_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('151','sources','select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chp_nom_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_autorisation_globale_source`),1))
)  ','SELECT 
`T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`che_autorisation_globale_source` = 1
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
('152','autorisations','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chp_nom_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T1`,`chp_nom_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_source),champ(T0,chx_source_autorisation)))
      )
   ),
   conditions(
      et(equivalent(champ(`T1`,`chp_nom_source`),:T1_chp_nom_source),sup(champ(`T0`,`chx_acces_autorisation`),1))
   ),
   complements(
      trier_par((champ(`T0`,`chx_acces_autorisation`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation

WHERE (`T1`.`chp_nom_source` LIKE :T1_chp_nom_source
   AND `T0`.`chx_acces_autorisation` > 1) 
ORDER BY `T0`.`chx_acces_autorisation` ASC
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_autorisations'),
('153','menus','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T1`,`chx_source_autorisation`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T3`,`chp_nom_source`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`cht_initialisation_menu`),
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`cht_condition_menu`),
      champ(`T0`,`cht_condition_js_menu`),
      champ(`T0`,`chx_autorisation_menu`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      ),
      jointure_croisée(
         source(nom_de_la_table(tbl_autorisations,alias(T1),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_acces),champ(T1,chx_acces_autorisation)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_source),champ(T1,chx_source_autorisation)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T2`,`chi_id_acces`),:T2_chi_id_acces),
         egal(champ(T1,chi_id_autorisation),champ(T0,chx_autorisation_menu))
      )
   )
)  ','SELECT 
`T1`.`chx_source_autorisation` , `T0`.`chp_titre_menu` , `T0`.`chp_methode_menu` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu` , 
`T0`.`cht_initialisation_menu` , `T0`.`chi_id_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_js_menu` , `T0`.`chx_autorisation_menu`
 FROM b1.tbl_menus T0 , 
      b1.tbl_autorisations T1
 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE ( /* */ `T2`.`chi_id_acces` = :T2_chi_id_acces
   AND T1.chi_id_autorisation = T0.chx_autorisation_menu)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus'),
('154','acces','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`cht_parametres_acces`),:n_cht_parametres_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:c_chi_id_acces))
)  ','UPDATE b1.tbl_acces SET 
   `cht_parametres_acces` = :n_cht_parametres_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces'),
('155',NULL,'select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`chp_priorite_tache`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_tache)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache),
         inf(champ(`T0`,`chp_priorite_tache`),:T0_chp_priorite_tache)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chp_priorite_tache`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE ( /* */ `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache) 
ORDER BY `T0`.`chp_priorite_tache` ASC
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
('156',NULL,'update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(chp_priorite_tache),:n_chp_priorite_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(chi_id_tache),:c_chi_id_tache),egal(champ(chx_utilisateur_tache),:c_chx_utilisateur_tache))
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache
WHERE (chi_id_tache = :c_chi_id_tache
   AND chx_utilisateur_tache = :c_chx_utilisateur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
('157',NULL,'update','#(),
modifier(
   base_de_reference(1),
   valeurs(
      #(),
      affecte(champ(`chp_priorite_tache`),:n_chp_priorite_tache),
      affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache)
      )
   )
)','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
('158',NULL,'update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_priorite_tache`),moins(chp_priorite_tache,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache),
         supegal(champ(`chp_priorite_tache`),1)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache-1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` >= 1) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
('159',NULL,'update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_priorite_tache`),plus(chp_priorite_tache,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache),
         inf(champ(`chp_priorite_tache`),99)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_priorite_tache` = (chp_priorite_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `chp_priorite_tache` < 99) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
('160','tâches','select','sélectionner(
   base_de_reference(1),
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`chp_priorite_tache`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_tache)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache))
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('161','taches','update','modifier(
   base_de_reference(1),
   valeurs(affecte(champ(`chp_texte_tache`),:n_chp_texte_tache),affecte(champ(`chp_priorite_tache`),:n_chp_priorite_tache),affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache),affecte(champ(`chx_utilisateur_tache`),:n_chx_utilisateur_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_tache`),:c_chi_id_tache))
)  ','UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `chp_priorite_tache` = :n_chp_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache , 
   `chx_utilisateur_tache` = :n_chx_utilisateur_tache
WHERE `chi_id_tache` = :c_chi_id_tache ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('162',NULL,'select','sélectionner(
   base_de_reference(1),
   valeurs(champ(`T0`,`chi_id_acces`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,alias(T0),base(b1)))
      )
   ),
   conditions(sup(champ(`T0`,`chi_id_acces`),1))
)  ','SELECT 
`T0`.`chi_id_acces`
 FROM b1.tbl_acces T0
WHERE `T0`.`chi_id_acces` > 1
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces');
/*================================================================================ FIN BLOC TABLE tbl_requetes offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_projets offset 0 */
INSERT INTO tbl_projets (  chi_id_projet ,  chp_nom_projet ,  cht_commentaire_projet ,  che__nur_projet ,  chd__dtm_projet ,  chd__dtc_projet ) VALUES
('3','ref 3','projet de référence N°3','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');
/*================================================================================ FIN BLOC TABLE tbl_projets offset 0 */
