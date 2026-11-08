

/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_projets offset 0 (1) */
INSERT INTO tbl_projets (  chi_id_projet ,  chp_nom_projet ,  cht_commentaire_projet ,  che__nur_projet ,  chd__dtm_projet ,  chd__dtc_projet ) VALUES
('3','ref 3','Projet de référence.
C''est le projet qui permet d''initialiser un nouveau projet','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');
/*================================================================================ FIN BLOC TABLE tbl_projets offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_groupes offset 0 (2) */
INSERT INTO tbl_groupes (  chi_id_groupe ,  chp_nom_groupe ,  chx_parent_groupe ) VALUES
('1',' dev','1'),
('2','admin','2');
/*================================================================================ FIN BLOC TABLE tbl_groupes offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_metiers offset 0 (2) */
INSERT INTO tbl_metiers (  chi_id_metier ,  chp_nom_metier ,  chx_parent_metier ) VALUES
('1','dev','1'),
('2','admin','2');
/*================================================================================ FIN BLOC TABLE tbl_metiers offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_acces offset 0 (3) */
INSERT INTO tbl_acces (  chi_id_acces ,  chp_nom_acces ,  chx_groupe_acces ,  chx_metier_acces ,  cht_parametres_acces ,  che_actif_acces ) VALUES
('0','anonymes','1','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"à propos\",\"attributs\":{\"data-chi_id_source\":\"1000\",\"data-chp_nom_source\":\"x_ecran_a_propos1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"17\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"à propos\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"38\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"1000\" data-chp_nom_source=\"x_ecran_a_propos1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"17\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"à propos\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"38\" data-separateur=\"0\">à propos</li>    "}','1'),
('1','dev_dev','1','1','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"8\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"10\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"1\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"1\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"les tâches\",\"attributs\":{\"data-chi_id_source\":\"991\",\"data-chp_nom_source\":\"taches2_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"les tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"11\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":8,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"paramètres\",\"attributs\":{\"data-chi_id_source\":\"1019\",\"data-chp_nom_source\":\"parametres1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"21\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"paramètres\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"49\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"9\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"9\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métier\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métier\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"5\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"7\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"3\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"1031\",\"data-chp_nom_source\":\"sources3_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"sources\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"43\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":11,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"4\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":12,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"6\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"8\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"10\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"1\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"1\" data-separateur=\"0\">mes tâches</li><li data-chi_id_source=\"991\" data-chp_nom_source=\"taches2_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"les tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"11\" data-separateur=\"0\">les tâches</li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"1019\" data-chp_nom_source=\"parametres1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"21\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"paramètres\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"49\" data-separateur=\"0\">paramètres</li><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"9\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"9\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"5\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"7\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"3\" data-separateur=\"0\">utilisateurs</li><li data-chi_id_source=\"1031\" data-chp_nom_source=\"sources3_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"sources\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"43\" data-separateur=\"0\">sources</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"4\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"6\" data-separateur=\"0\">menus</li></ul></li>    "}','1'),
('2','admin_admin','2','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"12\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"13\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"acteurs\",\"attributs\":{\"data-chi_id_source\":\"1016\",\"data-chp_nom_source\":\"acteurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"20\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"47\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":7,\"contenu\":\"admin\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":11,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"param1\",\"attributs\":{\"data-chi_id_source\":\"1019\",\"data-chp_nom_source\":\"parametres1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"22\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"param1\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"59\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"13\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"25\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métier\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"14\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métier\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"27\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"15\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"29\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"16\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"31\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"18\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"33\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"19\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"36\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"12\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"13\" data-separateur=\"0\">mes tâches</li><li data-chi_id_source=\"1016\" data-chp_nom_source=\"acteurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"20\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"47\" data-separateur=\"0\">acteurs</li><li data-liste_des_menus=\"1\">admin<ul><li data-chi_id_source=\"1019\" data-chp_nom_source=\"parametres1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"22\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"param1\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"59\" data-separateur=\"0\">param1</li><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"13\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"25\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"14\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"27\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"15\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"29\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"16\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"31\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"18\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"33\" data-separateur=\"0\">menus</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"19\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"36\" data-separateur=\"0\">utilisateurs</li></ul></li>"}','1');
/*================================================================================ FIN BLOC TABLE tbl_acces offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_dossiers offset 0 (9) */
INSERT INTO tbl_dossiers (  chi_id_dossier ,  chp_nom_dossier ,  chx_parent_dossier ,  che__nur_dossier ,  chd__dtm_dossier ,  chd__dtc_dossier ) VALUES
('1',NULL,'1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('2','__programmes','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('3','__fichiers_generes','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('4','__sessions','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('5','__bases_de_donnees','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('6','__sqls','3','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('7','bibliotheques_externes','2','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('8','__fichiers_binaires','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('9','__sauvegarde_des_bases','3','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');
/*================================================================================ FIN BLOC TABLE tbl_dossiers offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_sources offset 0 (62) */
INSERT INTO tbl_sources (  chi_id_source ,  chp_nom_source ,  cht_rev_source ,  cht_genere_source ,  che_binaire_source ,  chx_dossier_id_source ,  cht_commentaire_source ,  che_autorisation_globale_source ,  cht_condition_rev_source ,  cht_condition_js_source ,  cht_notification_ko_source ,  che_pour_util_source ,  che_est_fragment_source ,  che_est_verrouille_source ,  cht_import_module_rev_source ,  chd__dtm_source ,  chd__dtc_source ,  che__nur_source ) VALUES
('77','__serveur.js',NULL,NULL,'0','1',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('78','__serveur.ps1',NULL,NULL,'0','1',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('79','_connexion1_c.js',NULL,NULL,'0','2',NULL,'1',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('80','_connexion1_s.js',NULL,NULL,'0','2',NULL,'1',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('83','__ig1_c.js',NULL,NULL,'0','2',NULL,'1',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('84','__ig1_s.js',NULL,NULL,'0','2',NULL,'1',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('85','__rev1_.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('86','__worker1_c.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('88','x_ecran_coordonnees1_c.js',NULL,NULL,'0','2','mes coordonnées','0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('89','x_ecran_coordonnees1_s.js',NULL,NULL,'0','2','mes coordonnées','0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('94','groupes1_c.js',NULL,NULL,'0','2','les groupes','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('95','groupes1_s.js',NULL,NULL,'0','2','les groupes','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('96','metiers1_c.js',NULL,NULL,'0','2','les métiers','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('97','metiers1_s.js',NULL,NULL,'0','2','les métiers','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('98','acces1_s.js',NULL,NULL,'0','2','les accès','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('99','acces1_c.js',NULL,NULL,'0','2','les accès','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('100','_tri_arbre1_c.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('101','utilisateurs1_c.js',NULL,NULL,'0','2','les utilisteurs','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('102','utilisateurs1_s.js',NULL,NULL,'0','2','les utilisteurs','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('105','autorisations1_c.js',NULL,NULL,'0','2','les autorisations','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('106','autorisations1_s.js',NULL,NULL,'0','2','les autorisations','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('107','menus1_c.js',NULL,NULL,'0','2','les menus','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('108','menus1_s.js',NULL,NULL,'0','2','les menus','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('109','w_ast_js_vers_rev1_.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('110','acorn1_c.js',NULL,NULL,'0','7',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('111','__zip1_s.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('112','__serveur_not_watch.ps1',NULL,NULL,'0','1',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('113','__fnt1_c.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('114','__fnt1_s.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('115','__fnts_c_et_s_.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('116','w_rev_vers_js1_.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('991','taches2_c.js',NULL,NULL,'0','2','tâches de tous les utilisateurs','0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('992','taches2_s.js',NULL,NULL,'0','2','taches de tous les utilisateurs','0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1000','x_ecran_a_propos1_c.js',NULL,NULL,'0','2',NULL,'1',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1011','taches1_c.js',NULL,NULL,'0','2','mes tâches','0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1012','taches1_s.js',NULL,NULL,'0','2','mes tâches','0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1013','__navigation1_c.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1014','sources2_c.js',NULL,NULL,'0','2','les sources','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1015','sources2_s.js',NULL,NULL,'0','2','les sources','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1016','acteurs1_c.js',NULL,NULL,'0','2','les acteurs','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1017','acteurs1_s.js',NULL,NULL,'0','2','les acteurs','0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1018','__televersement1_c.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1019','parametres1_c.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1020','parametres1_s.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'1','0','0','importer(bibliotheque_spécifiée(Database),provenance("https://deno.land/x/sqlite3/mod.ts"))','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1021','grandeurs1_c.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1022','grandeurs1_s.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1023','grandeurs2_c.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1024','grandeurs2_s.js',NULL,NULL,'0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1025','acces2_c.js',NULL,'class acces2{
    /*
      ref_liste_ecran=1219;
      ref_select=;
      ref_insert=;
      ref_update=;
      ref_delete=;
      pour_sous_liste_uniquement=1;
    */
    moi=''acces2'';
    DUN_DUNE_ELEMENT_GERE=''d\''un accès'';
    LISTE_DES_ELEMENTS_GERES=''liste des accès'';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "sous_liste2" : {
            "__num_page" : {"nom" : ''__num_page'' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chi_id_acces" : {"nom" : ''id'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chp_nom_acces" : {"nom" : ''nom'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_che_actif_acces" : {"nom" : ''actif'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false ,"genre" : 5} ,
            "T0_chx_groupe_acces" : {"nom" : ''id groupe'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T1_chp_nom_groupe" : {"nom" : ''nom'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chx_metier_acces" : {"nom" : ''id métier'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T2_chp_nom_metier" : {"nom" : ''[n] id métier'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='''';
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case ''xxxxx'' :
                /*
                  this.__ig1.fermer_la_sous_fenetre();
                  this.entree_module( null );
                */
                break;
                
            default:
                return({"__xst" : __xer ,"__xme" : ''dans l\''interface client "'' + mat[d][1] + ''" n\''est pas traitée ou bien comporte une erreur''});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + ''_'' + this.moi );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres[''sous_liste2'']){
                this.filtres[''sous_liste2''][i]=jso[i]??this.tableau_des_filtres[''sous_liste2''][i].défaut;
            }
        }else{
            sessionStorage.setItem( this.__ig1.cle_lst0 + ''_'' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }
        /*
          this.vv_ecran_liste_boutons_avant+=''<div class="yy_svg1 yy__xif" rev_clic1="m1(n1(''+this.moi+''),f1(page_creer1()))" title="création''+this.DUN_DUNE_ELEMENT_GERE +''" >'' + this.__ig1.les_svg.nouveau_document + ''</div>'';
        */
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        this.__ig1.recupere_liste_initiale( mat , d , this );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      ===================== utilisé pour afficher une sous liste dans une page modifier ou creer ==================
    */
    sous_liste2( mat , d , le_colis1 ){
        return(this.__ig1.generique_sous_liste2( mat , d , le_colis1 , this.moi ));
    }
    /*
      =============================================================================================================
    */
    zones_sous_liste2( mat , d , le_colis1 ){
        let o1='''';
        let obj2=this.__ig1.construire_les_zones_filtres2( mat , d , le_colis1 , this , ''grandeurs2'' );
        o1+=obj2.html2;
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( ''sous_liste2'' )){
            let la_methode='''';
            let contient_une_methode=false;
            if(le_colis1.__xva.hasOwnProperty( ''methode_sur_click2'' ) && le_colis1.__xva.methode_sur_click2.trim() !== ''''){
                let methode_sur_click2=le_colis1.__xva.methode_sur_click2.trim();
                methode_sur_click2=''m1('' + methode_sur_click2.substr( methode_sur_click2 , methode_sur_click2.length - 2 );
                la_methode='''' + methode_sur_click2;
                contient_une_methode=true;
            }else{
                la_methode=''m1(n1(__ig1),f1(choisir_dans_sous_fenetre2('';
            }
            let lst='''';
            for(let i in le_colis1.__xva[''sous_liste2''].__xva){
                let tup=le_colis1.__xva[''sous_liste2''].__xva[i];
                lst+=''<tr>'';
                lst+=''<td style="text-wrap-mode: nowrap;">'';
                let parametres='''';
                parametres+=la_methode;
                parametres+='' nom_champ_dans_parent2('' + obj2.nom_champ_dans_parent2 + '')'';
                parametres+='' nom_libelle_dans_parent2('' + obj2.nom_libelle_dans_parent2 + '')'';
                parametres+='' id2('' + tup.T0_chi_id_acces + '')'';
                let libelle2='''';
                libelle2+=''('' + tup.T0_chi_id_acces + '') '';
                libelle2+=tup.T0_chp_nom_acces ? ( '' , '' + this.__ig1.fi2( tup.T0_chp_nom_acces ) ) : ( '''' );
                parametres+='' libelle2(\'''' + this.__ig1.fi1( libelle2 ).replace( /\\/g , ''\\\\'' ).replace( /\''/g , ''\\\'''' ) + ''\'')'';
                parametres+='')))'';
                lst+=''  <div class="yy_b1 yy__2" rev_clic1="'' + parametres + ''">=&gt;</div>'';
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                lst+=this.__ig1.fi2( tup.T0_chi_id_acces );
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                if(tup.T0_che_actif_acces === 0){
                    lst+=''<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">'' + this.__ig1.les_svg.rond_rouge1 + ''</div>'';
                }else{
                    lst+=''<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">'' + this.__ig1.les_svg.rond_vert1 + ''</div>'';
                }
                /* cas liste2 5.4 */
                lst+=''<span class="" style="">'' + this.__ig1.fi2( tup.T0_chp_nom_acces ) + ''</span>'';
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">'';
                /* cas liste2 6.2 */
                lst+=''('' + this.__ig1.fi2( tup.T0_chx_groupe_acces ) + '') '';
                /* cas liste2 6.4 */
                lst+=''<span class="" style="">'' + this.__ig1.fi2( tup.T1_chp_nom_groupe ) + ''</span>'';
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">'';
                /* cas liste2 6.2 */
                lst+=''('' + this.__ig1.fi2( tup.T0_chx_metier_acces ) + '') '';
                /* cas liste2 6.4 */
                lst+=''<span class="" style="">'' + this.__ig1.fi2( tup.T2_chp_nom_metier ) + ''</span>'';
                lst+=''</td>'';
                lst+=''</tr>'';
            }
            if(lst !== ''''){
                o1+=''<div class="yy_conteneur_table">'';
                o1+=''<table>'';
                o1+=''<tr>'';
                o1+=''<th>action</th>'';
                o1+=/* chi_id_acces */''<th>id</th>'';
                o1+=/* combinaison */''<th>actif / nom</th>'';
                o1+=/* combinaison */''<th>groupe</th>'';
                o1+=/* combinaison */''<th>métier</th>'';
                o1+=''</tr>'';
                o1+=lst;
                o1+=''</table>'';
                o1+=''</div>'';
            }else{
                o1+=this.__ig1.la_liste_est_vide();
            }
        }
        this.__ig1.initialisation_filtre_sous_fenetre2( ''sous_liste2'' , o1 , this.DUN_DUNE_ELEMENT_GERE );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{acces2 as acces2};','0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1026','acces2_s.js',NULL,'const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */''__xst'';
const __xva=/* valeurs */''__xva'';
const __xsi=/* signaux */''__xsi'';
const __xac=/* actions */''__xac'';
/*
  =====================================================================================================================
*/
class acces2{
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        let contexte='''';
        let nom_de_variable=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''methode_sur_click2'' && mat[i][2] === ''f''){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][1] === ''f1'' && mat[j][2] === ''f''){
                        for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if(mat[k][1] === ''nom_du_contexte'' && mat[k][2] === ''f''){
                                contexte=''nom_du_contexte'';
                                for( let l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if(mat[l][1] === ''nom_de_variable'' && mat[l][2] === ''f'' && mat[l][8] === 1 && mat[l + 1][2] === ''c''){
                                        nom_de_variable=parseInt( mat[l + 1][1] , 10 );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        const __nbMax=40;
        let __num_page=0;
        let liste2={};
        let criteres_xxxx={};
        criteres_xxxx[''quantitee'']=__nbMax;
        if(true || contexte === ''nom_du_contexte''){
            /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
            liste2=await this.__ig1.generique_sous_liste2( mat , d , 1219 , criteres_xxxx , __nbMax , __db1 );
        }
        if(liste2.__xst === __xsu){
            /* faire éventuellement quelque chose ici avec les éléments contenus dans this.__ig1.donnees_retournees.__xva.sous_liste2.__xva */
            /* voir par exemple dossiers1_s.js */
        }
        return liste2;
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi=''acces2'';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{acces2 as acces2};','0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1027','autorisations2_c.js',NULL,'class autorisations2{
    /*
      ref_liste_ecran=1220;
      ref_select=;
      ref_insert=;
      ref_update=;
      ref_delete=;
      pour_sous_liste_uniquement=1;
    */
    moi=''autorisations2'';
    DUN_DUNE_ELEMENT_GERE=''d\''une autorisation'';
    LISTE_DES_ELEMENTS_GERES=''liste des autorisations'';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "sous_liste2" : {
            "__num_page" : {"nom" : ''__num_page'' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T2_chp_nom_source" : {"nom" : ''nom source'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T1_chp_nom_acces" : {"nom" : ''nom accès'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chx_source_autorisation" : {"nom" : ''id source'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chx_acces_autorisation" : {"nom" : ''id accès'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_che_pour_sous_liste_autorisation" : {"nom" : ''pour s/liste'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false ,"genre" : 5} ,
            "T0_chi_id_autorisation" : {"nom" : ''id'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='''';
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case ''xxxxx'' :
                /*
                  this.__ig1.fermer_la_sous_fenetre();
                  this.entree_module( null );
                */
                break;
                
            default:
                return({"__xst" : __xer ,"__xme" : ''dans l\''interface client "'' + mat[d][1] + ''" n\''est pas traitée ou bien comporte une erreur''});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + ''_'' + this.moi );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres.sous_liste2){
                this.filtres.sous_liste2[i]=jso[i]??this.tableau_des_filtres.sous_liste2[i].défaut;
            }
        }else{
            sessionStorage.setItem( this.__ig1.cle_lst0 + ''_'' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }
        /*
          this.vv_ecran_liste_boutons_avant+=''<div class="yy_svg1 yy__xif" rev_clic1="m1(n1(''+this.moi+''),f1(page_creer1()))" title="création''+this.DUN_DUNE_ELEMENT_GERE +''" >'' + this.__ig1.les_svg.nouveau_document + ''</div>'';
        */
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        this.__ig1.recupere_liste_initiale( mat , d , this );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      ===================== utilisé pour afficher une sous liste dans une page modifier ou creer ==================
    */
    sous_liste2( mat , d , le_colis1 ){
        return(this.__ig1.generique_sous_liste2( mat , d , le_colis1 , this.moi ));
    }
    /*
      =============================================================================================================
    */
    zones_sous_liste2( mat , d , le_colis1 ){
        let o1='''';
        let obj2=this.__ig1.construire_les_zones_filtres2( mat , d , le_colis1 , this , ''grandeurs2'' );
        o1+=obj2.html2;
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( ''sous_liste2'' )){
            let la_methode='''';
            let contient_une_methode=false;
            if(le_colis1.__xva.hasOwnProperty( ''methode_sur_click2'' ) && le_colis1.__xva.methode_sur_click2.trim() !== ''''){
                let methode_sur_click2=le_colis1.__xva.methode_sur_click2.trim();
                methode_sur_click2=''m1('' + methode_sur_click2.substr( methode_sur_click2 , methode_sur_click2.length - 2 );
                la_methode='''' + methode_sur_click2;
                contient_une_methode=true;
            }else{
                la_methode=''m1(n1(__ig1),f1(choisir_dans_sous_fenetre2('';
            }
            let lst='''';
            for(let i in le_colis1.__xva.sous_liste2.__xva){
                let tup=le_colis1.__xva.sous_liste2.__xva[i];
                lst+=''<tr>'';
                lst+=''<td style="text-wrap-mode: nowrap;">'';
                let parametres='''';
                parametres+=la_methode;
                parametres+='' nom_champ_dans_parent2('' + obj2.nom_champ_dans_parent2 + '')'';
                parametres+='' nom_libelle_dans_parent2('' + obj2.nom_libelle_dans_parent2 + '')'';
                parametres+='' id2('' + tup.T0_chi_id_autorisation + '')'';
                let libelle2='''';
                libelle2+=''('' + tup.T0_chi_id_autorisation + '') '';
                libelle2+=''       / '' + this.__ig1.fi2( tup.T2_chp_nom_source );
                libelle2+=''       / '' + this.__ig1.fi2( tup.T1_chp_nom_acces );
                parametres+='' libelle2(\'''' + this.__ig1.fi1( libelle2 ).replace( /\\/g , ''\\\\'' ).replace( /\''/g , ''\\\'''' ) + ''\'')'';
                parametres+='')))'';
                lst+=''  <div class="yy_b1 yy__2" rev_clic1="'' + parametres + ''">=&gt;</div>'';
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                /* cas liste2 4.2 */
                lst+=this.__ig1.fi2( tup.T0_chi_id_autorisation );
                lst+=''</td>'';
                /*
                */
                /* combinaison */
                lst+=''<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">'';
                /* cas liste2 4.1 */
                lst+=''('' + this.__ig1.fi2( tup.T0_chx_source_autorisation ) + '') '';
                /* cas liste2 5.1 */
                lst+=''<span class="" style="">'' + this.__ig1.fi2( tup.T2_chp_nom_source ) + ''</span>'';
                lst+=''</td>'';
                /*
                */
                /* combinaison */
                lst+=''<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">'';
                /* cas liste2 4.1 */
                lst+=''('' + this.__ig1.fi2( tup.T0_chx_acces_autorisation ) + '') '';
                /* cas liste2 5.1 */
                lst+=''<span class="" style="">'' + this.__ig1.fi2( tup.T1_chp_nom_acces ) + ''</span>'';
                lst+=''</td>'';
                /*
                */
                /* cas liste2 3.0 */
                lst+=''<td style="text-align:center;">'';
                if(tup.T0_che_pour_sous_liste_autorisation === 0){
                    lst+=''<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">'' + this.__ig1.les_svg.rond_rouge1 + ''</div>'';
                }else{
                    lst+=''<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">'' + this.__ig1.les_svg.rond_vert1 + ''</div>'';
                }
                lst+=''</td>'';
                lst+=''</tr>'';
            }
            if(lst !== ''''){
                o1+=''<div class="yy_conteneur_table">'';
                o1+=''<table>'';
                o1+=''<tr>'';
                o1+=''<th>action</th>'';
                o1+=/* chi_id_autorisation */''<th>id</th>'';
                o1+=/* combinaison */''<th>source</th>'';
                o1+=/* combinaison */''<th>accès</th>'';
                o1+=/* che_pour_sous_liste_autorisation */''<th>pour s/liste</th>'';
                o1+=''</tr>'';
                o1+=lst;
                o1+=''</table>'';
                o1+=''</div>'';
            }else{
                o1+=this.__ig1.la_liste_est_vide();
            }
        }
        this.__ig1.initialisation_filtre_sous_fenetre2( ''sous_liste2'' , o1 , this.DUN_DUNE_ELEMENT_GERE );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{autorisations2 as autorisations2};','0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1028','autorisations2_s.js',NULL,'const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */''__xst'';
const __xva=/* valeurs */''__xva'';
const __xsi=/* signaux */''__xsi'';
const __xac=/* actions */''__xac'';
/*
  =====================================================================================================================
*/
class autorisations2{
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        let contexte='''';
        let nom_de_variable=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''methode_sur_click2'' && mat[i][2] === ''f''){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][1] === ''f1'' && mat[j][2] === ''f''){
                        for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if(mat[k][1] === ''nom_du_contexte'' && mat[k][2] === ''f''){
                                contexte=''nom_du_contexte'';
                                for( let l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if(mat[l][1] === ''nom_de_variable'' && mat[l][2] === ''f'' && mat[l][8] === 1 && mat[l + 1][2] === ''c''){
                                        nom_de_variable=parseInt( mat[l + 1][1] , 10 );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        const __nbMax=40;
        let __num_page=0;
        let liste2={};
        let criteres_xxxx={};
        criteres_xxxx[''quantitee'']=__nbMax;
        if(true || contexte === ''nom_du_contexte''){
            /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
            liste2=await this.__ig1.generique_sous_liste2( mat , d , 1220 , criteres_xxxx , __nbMax , __db1 );
        }
        if(liste2.__xst === __xsu){
            /* faire éventuellement quelque chose ici avec les éléments contenus dans this.__ig1.donnees_retournees.__xva.sous_liste2.__xva */
            /* voir par exemple dossiers1_s.js */
        }
        return liste2;
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi=''autorisations2'';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{autorisations2 as autorisations2};','0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1029','groupes2_c.js',NULL,'class groupes2{
    /*
      ref_liste_ecran=1216;
      ref_select=;
      ref_insert=;
      ref_update=;
      ref_delete=;
      pour_sous_liste_uniquement=1;
    */
    moi=''groupes2'';
    DUN_DUNE_ELEMENT_GERE=''d\''un groupe'';
    LISTE_DES_ELEMENTS_GERES=''liste des groupes'';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "sous_liste2" : {
            "__num_page" : {"nom" : ''__num_page'' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chi_id_groupe" : {"nom" : ''id'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chp_nom_groupe" : {"nom" : ''nom'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chx_parent_groupe" : {"nom" : ''id parent'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T1_chp_nom_groupe" : {"nom" : ''groupe parent'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case ''xxxxx'' :
                /*
                  this.__ig1.fermer_la_sous_fenetre();
                  this.entree_module( null );
                */
                break;
                
            default:
                return({"__xst" : __xer ,"__xme" : ''dans l\''interface client "'' + mat[d][1] + ''" n\''est pas traitée ou bien comporte une erreur''});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + ''_'' + this.moi );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres.sous_liste2){
                this.filtres.sous_liste2[i]=jso[i]??this.tableau_des_filtres.sous_liste2[i].défaut;
            }
        }else{
            sessionStorage.setItem( this.__ig1.cle_lst0 + ''_'' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        this.__ig1.recupere_liste_initiale( mat , d , this );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zones_sous_liste2( mat , d , le_colis1 ){
        let o1='''';
        let obj2=this.__ig1.construire_les_zones_filtres2( mat , d , le_colis1 , this , ''grandeurs2'' );
        o1+=obj2.html2;
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( ''sous_liste2'' )){
            let la_methode='''';
            let contient_une_methode=false;
            if(le_colis1.__xva.hasOwnProperty( ''methode_sur_click2'' ) && le_colis1.__xva.methode_sur_click2.trim() !== ''''){
                let methode_sur_click2=le_colis1.__xva.methode_sur_click2.trim();
                methode_sur_click2=''m1('' + methode_sur_click2.substr( methode_sur_click2 , methode_sur_click2.length - 2 );
                la_methode='''' + methode_sur_click2;
                contient_une_methode=true;
            }else{
                la_methode=''m1(n1(__ig1),f1(choisir_dans_sous_fenetre2('';
            }
            let lst='''';
            for(let i in le_colis1.__xva.sous_liste2.__xva){
                let tup=le_colis1.__xva.sous_liste2.__xva[i];
                lst+=''<tr>'';
                lst+=''<td style="text-wrap-mode: nowrap;">'';
                let parametres='''';
                parametres+=la_methode;
                parametres+='' nom_champ_dans_parent2('' + obj2.nom_champ_dans_parent2 + '')'';
                parametres+='' nom_libelle_dans_parent2('' + obj2.nom_libelle_dans_parent2 + '')'';
                parametres+='' id2('' + tup.T0_chi_id_groupe + '')'';
                let libelle2='''';
                libelle2+=''('' + tup.T0_chi_id_groupe + '') '';
                libelle2+=tup.T0_chp_nom_groupe ? ( '' , '' + this.__ig1.fi2( tup.T0_chp_nom_groupe ) ) : ( '''' );
                parametres+='' libelle2(\'''' + this.__ig1.fi1( libelle2 ).replace( /\\/g , ''\\\\'' ).replace( /\''/g , ''\\\'''' ) + ''\'')'';
                parametres+='')))'';
                lst+=''  <button class="yy_b1 yy__2" rev_clic1="'' + parametres + ''">=&gt;</button>'';
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                /* cas liste2 4.2 */
                lst+=this.__ig1.fi2( tup.T0_chi_id_groupe );
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                lst+=this.__ig1.fi2( tup.T0_chp_nom_groupe );
                lst+=''</td>'';
                /*
                */
                /* combinaison */
                lst+=''<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">'';
                /* cas liste2 4.1 */
                lst+=''('' + this.__ig1.fi2( tup.T0_chx_parent_groupe ) + '') '';
                /* cas liste2 5.1 */
                lst+='' <span class="" style="">'' + this.__ig1.fi2( tup.T1_chp_nom_groupe ) + ''</span>'';
                lst+=''</td>'';
                lst+=''</tr>'';
            }
            if(lst !== ''''){
                o1+=''<div class="yy_conteneur_table">'';
                o1+=''<table>'';
                o1+=''<tr>'';
                o1+=''<th>action</th>'';
                o1+=/* chi_id_groupe */''<th>id</th>'';
                o1+=/* chp_nom_groupe */''<th>nom</th>'';
                o1+=/* combinaison */''<th>groupe parent</th>'';
                o1+=''</tr>'';
                o1+=lst;
                o1+=''</table>'';
                o1+=''</div>'';
            }else{
                o1+=this.__ig1.la_liste_est_vide();
            }
        }
        this.__ig1.initialisation_filtre_sous_fenetre2( ''sous_liste2'' , o1 , this.DUN_DUNE_ELEMENT_GERE );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{groupes2 as groupes2};','0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1030','groupes2_s.js',NULL,'const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */''__xst'';
const __xva=/* valeurs */''__xva'';
const __xsi=/* signaux */''__xsi'';
const __xac=/* actions */''__xac'';
/*
  =====================================================================================================================
*/
class groupes2{
    /*
      =========================== fragment ========================================================================
    */
    ajoute_criteres_sous_liste2( criteres_xxxx ){
        criteres_xxxx[''groupe_a_exclure'']=''-1'';
        if(this.__ig1.donnees_retournees._CA_ > 2 && this.__ig1.donnees_retournees.chi_id_utilisateur > 1){
            /* on peut sélectionner le groupe admin comme parent */
            criteres_xxxx[''groupe_a_exclure'']=''0,1'';
        }
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        let contexte='''';
        let nom_de_variable=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''methode_sur_click2'' && mat[i][2] === ''f''){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][1] === ''f1'' && mat[j][2] === ''f''){
                        for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if(mat[k][1] === ''nom_du_contexte'' && mat[k][2] === ''f''){
                                contexte=''nom_du_contexte'';
                                for( let l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if(mat[l][1] === ''nom_de_variable'' && mat[l][2] === ''f'' && mat[l][8] === 1 && mat[l + 1][2] === ''c''){
                                        nom_de_variable=parseInt( mat[l + 1][1] , 10 );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_cible_ou_base_un );
        const __nbMax=40;
        let __num_page=0;
        let liste2={};
        let criteres_xxxx={};
        criteres_xxxx[''quantitee'']=__nbMax;
        this.ajoute_criteres_sous_liste2( criteres_xxxx );
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( ''__complements_sous_liste'' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_xxxx[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(true || contexte === ''nom_du_contexte''){
            /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
            liste2=await this.__ig1.generique_sous_liste2( mat , d , 1216 , criteres_xxxx , __nbMax , __db1 );
        }
        if(liste2.__xst === __xsu){
            /* faire éventuellement quelque chose ici avec les éléments contenus dans this.__ig1.donnees_retournees.__xva.sous_liste2.__xva */
            /* voir par exemple dossiers1_s.js */
        }
        return liste2;
    }
    /*
      =============================================================================================================
    */
    moi=''groupes2'';
    __ig1=null;
    __variables_module={};
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{groupes2 as groupes2};','0','2',NULL,'0',NULL,NULL,NULL,'0','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1031','sources3_c.js',NULL,'class sources3{
    /*
      ref_liste_ecran=2011;
      ref_select=2012;
      ref_insert=;
      ref_update=;
      ref_delete=2015;
    */
    moi=''sources3'';
    DUN_DUNE_ELEMENT_GERE=''d\''un source'';
    LISTE_DES_ELEMENTS_GERES=''liste des sources'';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"nom" : ''__num_page'' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chp_nom_source" : {"nom" : ''nom'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chi_id_source" : {"nom" : ''id'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chi_id_source2" : {"nom" : ''id >'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chi_id_source3" : {"nom" : ''id <='' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_che_binaire_source" : {"nom" : ''binaire'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false ,"genre" : 5} ,
            "T0_che_autorisation_globale_source" : {"nom" : ''autorisation globale'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false ,"genre" : 5}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='''';
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case ''xxxxx'' :
                /*
                  this.__ig1.fermer_la_sous_fenetre();
                  this.entree_module( null );
                */
                break;
                
            default:
                return({"__xst" : __xer ,"__xme" : ''dans l\''interface client "'' + mat[d][1] + ''" n\''est pas traitée ou bien comporte une erreur''});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + ''_'' + this.moi + ''_liste1'' );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres[''liste1'']){
                this.filtres[''liste1''][i]=jso[i]??this.tableau_des_filtres[''liste1''][i].défaut;
            }
        }
        /*
          this.vv_ecran_liste_boutons_avant+=''<div class="yy_svg1 yy__xif" data-rev_click="m1(n1(''+this.moi+''),f1(page_creer1()))" title="création''+this.DUN_DUNE_ELEMENT_GERE +''" >'' + this.__ig1.les_svg.nouveau_document + ''</div>'';
        */
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( ''page_confirmation_supprimer1'' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : ''cet élément n\''a pas été trouvé''} ));
        }
        let tup=le_colis1.__xva.page_confirmation_supprimer1.__xva[0];
        if(tup.T0_chi_id_source === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0_chi_id_source n''est pas en sortie dans la requête select "});
        }
        this.__ig1.afficher_le_titre_des_zones( ''vv_ecran_suppression'' , ''entree_module'' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_source , this.moi , ''chi_id_source'' );
        let o1='''';
        /*
          =====================================================================================================
        */
        o1+=''      <input type="hidden" id="chi_id_source" value="'' + tup.T0_chi_id_source + ''" />'';
        /*
          =====================================================================================================
        */
        let cmd='''';
        cmd+=''liste1('';
        for(let i in this.tableau_des_filtres[''liste1'']){
            if(this.filtres[''liste1''][i] !== ''''){
                cmd+=i + ''(\'''' + this.__ig1.fi2( this.filtres[''liste1''][i] ) + ''\'')'';
            }
        }
        cmd+='')'';
        let obj2=this.__ig1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+=''      <input type="hidden" id="__mat_liste_si_ok" value="'' + this.__ig1.fi2( jso ) + ''" />'';
        document.getElementById( ''vv_ecran_suppression_zone_contenu'' ).innerHTML=o1;
        this.__ig1.maj_title_htm1( ''suppression '' + this.DUN_DUNE_ELEMENT_GERE );
        if(this.__ig1.stockage_local[''parametres''][''__deverminage''][''valeur''] > 0){
            this.__ig1.maj_hash( mat , 0 );
        }
        
        this.__ig1.repositionner_les_boutons_action( ''vv_ecran_suppression_zone_boutons'' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    filtre1( mat , d , le_colis1=null ){
        let a=document.getElementById( ''vv_ecran_liste_zone_contenu'' );
        if(a === null){
            return(this.liste1( mat , d , le_colis1 ));
        }
        let tt=this.zones_liste1( le_colis1 );
        document.getElementById( ''vv_ecran_liste_zone_contenu'' ).innerHTML=tt.o1;
        this.vv_ecran_liste_zones_navigation1( le_colis1 , this.vv_ecran_liste_boutons_avant );
        
        let lst=document.getElementById( ''vv_filtre1'' ).querySelectorAll( "input" );
        this.filtres={};
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].id){
                this.filtres[lst[i].id]=lst[i].value;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + ''_'' + this.moi );
        if(aa === null){
            sessionStorage.setItem( this.__ig1.cle_lst0 + ''_'' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }else{
            let jso=JSON.parse( aa );
            jso[''filtres'']=this.filtres;
            sessionStorage.setItem( this.__ig1.cle_lst0 + ''_'' + this.moi , JSON.stringify( jso ) );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    raz_champ_filtre_grandeurs0( mat , d ){
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            this.filtres[''liste1''][mat[i][1]]='''';
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zones_filtres1( mat , d , le_colis1 ){
        this.__ig1.__fnt1.zones_filtres0( mat , d , le_colis1 , this , false , ''grandeurs2'' );
    }
    /*
      =============================================================================================================
    */
    aller_a_la_page( mat , d , ref_zone=null , num_page=null , est_table_virtuelle=false , de_13='''' ){
        return(this.__ig1.aller_a_la_page( mat , d , this.moi , ''liste1'' , this.filtres , ref_zone , num_page , est_table_virtuelle , de_13 ));
    }
    /*
      =============================================================================================================
    */
    supprimer1( mat , d , le_colis1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    creer1( mat , d , le_colis1 ){
        /* redirection vers modification */
        if(le_colis1 && le_colis1.__xva.hasOwnProperty( ''page_modification1'' )){
            this.page_modification1( mat , d , le_colis1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    liste1( mat , d , le_colis1=null ){
        if(le_colis1 === null || !le_colis1.__xva.hasOwnProperty( ''liste1'' )){
            if(le_colis1.__xva.hasOwnProperty( ''__nbEnregs'' )){
            }else{
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : ''il manque les données pour la liste de '' + this.moi} );
                this.__ig1.affiche_les_messages();
                return({"__xst" : __xsu});
            }
        }
        let o1='''';
        let initialisation_fait=false;
        let a=document.getElementById( ''vv_titre_de_la_page'' );
        if(a === null){
            this.__ig1.initialisation_des_zones( this.moi , ''chi_id_source'' );
            initialisation_fait=true;
        }
        a=document.getElementById( ''vv_titre_de_la_page'' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES && a.getAttribute( ''data-contexte'' ) === this.moi){
        }else{
            if(initialisation_fait === false){
                this.__ig1.initialisation_des_zones( this.moi , ''chi_id_source'' );
                a=document.getElementById( ''vv_titre_de_la_page'' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            this.__ig1.afficher_les_zones( ''vv_ecran_liste'' );
        }
        this.zones_filtres1( mat , d , le_colis1 );
        this.__ig1.vv_ecran_liste_zones_navigation1( le_colis1 , this.vv_ecran_liste_boutons_avant , ''liste1'' );
        document.getElementById( ''vv_ecran_liste_zone_contenu'' ).innerHTML=this.zones_liste1( le_colis1 );
        
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( this.LISTE_DES_ELEMENTS_GERES );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        this.__ig1.recupere_liste_initiale( mat , d , this );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    liste_des_boutons_action1( tup , le_colis1 ){
        let lst='''';
        lst+=''<div style="display:inline-flex;">'';
        lst+=''<div class="yy_svg1 yy__2" data-rev_click="pm1(m1(n1('' + this.moi + ''),f1(page_confirmation_supprimer1(chi_id_source('' + tup.T0_chi_id_source + '')))))">'' + this.__ig1.les_svg.poubelle + ''</div>'';
        /*
          lst+=''<div class="yy_svg1 yy__3" data-rev_click="pm1(m1(n1(''+this.moi+''),f1(page_modification1(chi_id_source('' + tup.T0_chi_id_source + '')))))">''+this.__ig1.les_svg.editer+''</div>'';
        */
        /*
          lst+=''<div class="yy_svg1 yy__4" data-rev_click="pm1(m1(n1(''+this.moi+''),f1(page_duplication1(chi_id_source('' + tup.T0_chi_id_source + '')))))">''+this.__ig1.les_svg.dupliquer+''</div>'';
        */
        lst+=''</div>'';
        return lst;
    }
    /*
      =============================================================================================================
    */
    zones_liste1( le_colis1 ){
        let o1='''';
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( ''liste1'' )){
            let lst='''';
            for(let i in le_colis1.__xva[''liste1''].__xva){
                let tup=le_colis1.__xva[''liste1''].__xva[i];
                lst+=''<tr>'';
                lst+=''<td>'';
                lst+=this.liste_des_boutons_action1( tup , le_colis1 );
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                lst+=''<span data-chi_id_source="'' + this.__ig1.fi2( tup.T0_chi_id_source ) + ''">'' + this.__ig1.fi2( tup.T0_chi_id_source ) + ''</span>'';
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                /* cas 3.4 */
                lst+=this.__ig1.fi2( tup.T0_chp_nom_source );
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                /* cas 5 */
                if(tup.T0_che_binaire_source === 0){
                    lst+=''<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">'' + this.__ig1.les_svg.rond_rouge1 + ''</div>'';
                }else{
                    lst+=''<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">'' + this.__ig1.les_svg.rond_vert1 + ''</div>'';
                }
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="max-width:24em;overflow:hidden;">'';
                /* cas 1 */
                lst+=this.__ig1.fi2( tup.T0_cht_commentaire_source ).substr( 0 , 200 );
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                /* cas 5 */
                if(tup.T0_che_autorisation_globale_source === 0){
                    lst+=''<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">'' + this.__ig1.les_svg.rond_rouge1 + ''</div>'';
                }else{
                    lst+=''<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">'' + this.__ig1.les_svg.rond_vert1 + ''</div>'';
                }
                lst+=''</td>'';
                lst+=''</tr>'';
            }
            if(lst !== ''''){
                o1+=''<div class="yy_conteneur_table">'';
                o1+=''<table>'';
                o1+=''<tr>'';
                o1+=''<th>action</th>'';
                o1+=/* chi_id_source */''<th>id</th>'';
                o1+=/* chp_nom_source */''<th>nom</th>'';
                o1+=/* che_binaire_source */''<th>binaire</th>'';
                o1+=/* cht_commentaire_source */''<th>commentaire</th>'';
                o1+=/* che_autorisation_globale_source */''<th>autorisation globale</th>'';
                o1+=''</tr>'';
                o1+=lst;
                o1+=''</table>'';
                o1+=''</div>'';
            }else{
                o1+=this.__ig1.la_liste_est_vide();
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
}
export{sources3 as sources3};','0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1032','sources3_s.js',NULL,'const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */''__xst'';
const __xva=/* valeurs */''__xva'';
const __xsi=/* signaux */''__xsi'';
const __xac=/* actions */''__xac'';
/*
  =====================================================================================================================
*/
class sources3{
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues.__xva[''__co1''];
        let form=this.__ig1.donnees_recues.__xva[''__fo1''][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let criteres_2012={
             /*  */
            "T0_chi_id_source" : form.chi_id_source
        };
        let tt2012=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 2012 , criteres_2012 , __db1 );
        if(tt2012.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt2012.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt2012.__xva[0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_2015={
             /*  */
            "chi_id_source" : form.chi_id_source
        };
        let tt2015=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_sources
        WHERE `chi_id_source` = :chi_id_source ;
        */
        /*sql_inclure_fin*/ 2015 , criteres_2015 , __db1 );
        /*  */
        if(tt2015.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt2015.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt2012.__xva[0] , __db1 );
        if(__aavc.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : __aavc.__xme});
        }
        /*  */
        if(form.__mat_liste_si_ok !== ''''){
            let mat1=JSON.parse( form.__mat_liste_si_ok );
            await this.filtre1( mat1 , 1 , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_source'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let critere_2012={"T0_chi_id_source" : chi_id_source};
        let tt2012=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 2012 , critere_2012 , __db1 );
        this.__ig1.donnees_retournees.__xva[''page_confirmation_supprimer1'']=tt2012;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        const l01=mat.length;
        let option_de_13='''';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''de_13'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                option_de_13=''de_13('' + mat[i + 1][1] + '')'';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        const formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , ''liste1'' );
        if(!formulaire.hasOwnProperty( ''__num_page'' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_2011={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== ''__num_page''){
                criteres_2011[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( ''__complements_sous_liste'' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_2011[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 1 );
        }
        let tt2011=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
        WHERE (`T0`.`chp_nom_source` LIKE :T0_chp_nom_source
           AND `T0`.`chi_id_source` = :T0_chi_id_source
           AND `T0`.`chi_id_source` > :T0_chi_id_source2
           AND `T0`.`chi_id_source` <= :T0_chi_id_source3
           AND `T0`.`che_binaire_source` = :T0_che_binaire_source
           AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
           AND `T0`.`che_pour_util_source` IN (:T0_che_pour_util_source)) 
        ORDER BY `T0`.`chi_id_source` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 2011 , criteres_2011 , __db1 );
        if(tt2011.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt2011.__xme});
        }
        if(tt2011.__xst === __xsu && tt2011.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_2011[''debut'']=__debut;
            tt2011=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source`
             FROM b1.tbl_sources T0
            WHERE (`T0`.`chp_nom_source` LIKE :T0_chp_nom_source
               AND `T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chi_id_source` > :T0_chi_id_source2
               AND `T0`.`chi_id_source` <= :T0_chi_id_source3
               AND `T0`.`che_binaire_source` = :T0_che_binaire_source
               AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
               AND `T0`.`che_pour_util_source` IN (:T0_che_pour_util_source)) 
            ORDER BY `T0`.`chi_id_source` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 2011 , criteres_2011 , __db1 );
        }
        this.__ig1.donnees_retournees.__xva[''__nbMax'']=__nbMax;
        this.__ig1.donnees_retournees.__xva[''__debut'']=__debut;
        this.__ig1.donnees_retournees.__xva[''__num_page'']=__num_page;
        this.__ig1.donnees_retournees.__xac=''pm1(m1(n1('' + this.moi + ''),f1(liste1('' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees.__xac+=''))))'';
        this.__ig1.donnees_retournees.__xva[''liste1'']=tt2011;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi=''sources3'';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{sources3 as sources3};','0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1033','sources4_c.js',NULL,'class sources4{
    /*
      ref_liste_ecran=2011;
      ref_select=;
      ref_insert=;
      ref_update=;
      ref_delete=;
      pour_sous_liste_uniquement=1;
    */
    moi=''sources4'';
    DUN_DUNE_ELEMENT_GERE=''d\''un source'';
    LISTE_DES_ELEMENTS_GERES=''liste des sources'';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "sous_liste2" : {
            "__num_page" : {"nom" : ''__num_page'' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chp_nom_source" : {"nom" : ''nom'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chi_id_source" : {"nom" : ''id'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chi_id_source2" : {"nom" : ''id >'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_chi_id_source3" : {"nom" : ''id <='' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false} ,
            "T0_che_binaire_source" : {"nom" : ''binaire'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false ,"genre" : 5} ,
            "T0_che_autorisation_globale_source" : {"nom" : ''autorisation globale'' ,"taille" : 9 ,"défaut" : '''' ,"masqué" : false ,"genre" : 5}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='''';
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case ''xxxxx'' :
                /*
                  this.__ig1.fermer_la_sous_fenetre();
                  this.entree_module( null );
                */
                break;
                
            default:
                return({"__xst" : __xer ,"__xme" : ''dans l\''interface client "'' + mat[d][1] + ''" n\''est pas traitée ou bien comporte une erreur''});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + ''_'' + this.moi );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres[''sous_liste2'']){
                this.filtres[''sous_liste2''][i]=jso[i]??this.tableau_des_filtres[''sous_liste2''][i].défaut;
            }
        }else{
            sessionStorage.setItem( this.__ig1.cle_lst0 + ''_'' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }
        /*
          this.vv_ecran_liste_boutons_avant+=''<div class="yy_svg1 yy__xif" data-rev_click="m1(n1(''+this.moi+''),f1(page_creer1()))" title="création''+this.DUN_DUNE_ELEMENT_GERE +''" >'' + this.__ig1.les_svg.nouveau_document + ''</div>'';
        */
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        this.__ig1.recupere_liste_initiale( mat , d , this );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zones_sous_liste2( mat , d , le_colis1 ){
        let o1='''';
        let obj2=this.__ig1.construire_les_zones_filtres2( mat , d , le_colis1 , this , ''grandeurs2'' );
        o1+=obj2.html2;
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( ''sous_liste2'' )){
            let la_methode='''';
            let contient_une_methode=false;
            if(le_colis1.__xva.hasOwnProperty( ''methode_sur_click2'' ) && le_colis1.__xva.methode_sur_click2.trim() !== ''''){
                let methode_sur_click2=le_colis1.__xva.methode_sur_click2.trim();
                methode_sur_click2=''m1('' + methode_sur_click2.substr( methode_sur_click2 , methode_sur_click2.length - 2 );
                la_methode='''' + methode_sur_click2;
                contient_une_methode=true;
            }else{
                la_methode=''m1(n1(__ig1),f1(choisir_dans_sous_fenetre2('';
            }
            let lst='''';
            for(let i in le_colis1.__xva[''sous_liste2''].__xva){
                let tup=le_colis1.__xva[''sous_liste2''].__xva[i];
                lst+=''<tr>'';
                lst+=''<td style="text-wrap-mode: nowrap;">'';
                let parametres='''';
                parametres+=la_methode;
                parametres+='' nom_champ_dans_parent2('' + obj2.nom_champ_dans_parent2 + '')'';
                parametres+='' nom_libelle_dans_parent2('' + obj2.nom_libelle_dans_parent2 + '')'';
                parametres+='' id2('' + tup.T0_chi_id_source + '')'';
                let libelle2='''';
                libelle2+=''('' + tup.T0_chi_id_source + '') '';
                libelle2+=tup.T0_chp_nom_source ? ( '' , '' + this.__ig1.fi2( tup.T0_chp_nom_source ) ) : ( '''' );
                parametres+='' libelle2(\'''' + this.__ig1.fi1( libelle2 ).replace( /\\/g , ''\\\\'' ).replace( /\''/g , ''\\\'''' ) + ''\'')'';
                parametres+='')))'';
                lst+=''  <div class="yy_b1 yy__2" data-rev_click="'' + parametres + ''">=&gt;</div>'';
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                lst+=this.__ig1.fi2( tup.T0_chi_id_source );
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                lst+=this.__ig1.fi2( tup.T0_chp_nom_source );
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                if(tup.T0_che_binaire_source === 0){
                    lst+=''<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">'' + this.__ig1.les_svg.rond_rouge1 + ''</div>'';
                }else{
                    lst+=''<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">'' + this.__ig1.les_svg.rond_vert1 + ''</div>'';
                }
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="max-width:24em;overflow:hidden;">'';
                lst+=this.__ig1.fi2( tup.T0_cht_commentaire_source ).substr( 0 , 200 );
                lst+=''</td>'';
                /*
                */
                lst+=''<td style="text-align:center;">'';
                if(tup.T0_che_autorisation_globale_source === 0){
                    lst+=''<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">'' + this.__ig1.les_svg.rond_rouge1 + ''</div>'';
                }else{
                    lst+=''<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">'' + this.__ig1.les_svg.rond_vert1 + ''</div>'';
                }
                lst+=''</td>'';
                lst+=''</tr>'';
            }
            if(lst !== ''''){
                o1+=''<div class="yy_conteneur_table">'';
                o1+=''<table>'';
                o1+=''<tr>'';
                o1+=''<th>action</th>'';
                o1+=/* chi_id_source */''<th>id</th>'';
                o1+=/* chp_nom_source */''<th>nom</th>'';
                o1+=/* che_binaire_source */''<th>binaire</th>'';
                o1+=/* cht_commentaire_source */''<th>commentaire</th>'';
                o1+=/* che_autorisation_globale_source */''<th>autorisation globale</th>'';
                o1+=''</tr>'';
                o1+=lst;
                o1+=''</table>'';
                o1+=''</div>'';
            }else{
                o1+=this.__ig1.la_liste_est_vide();
            }
        }
        this.__ig1.initialisation_filtre_sous_fenetre2( ''sous_liste2'' , o1 , this.DUN_DUNE_ELEMENT_GERE );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{sources4 as sources4};','0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1034','sources4_s.js',NULL,'const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */''__xst'';
const __xva=/* valeurs */''__xva'';
const __xsi=/* signaux */''__xsi'';
const __xac=/* actions */''__xac'';
/*
  =====================================================================================================================
*/
class sources4{
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , nouvel_id , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_source=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_source''
                   && mat[i][2] === ''f''
                   && mat[i][8] === 1
                   && mat[i + 1][2] === ''c''
                   && mat[i + 1][4] === 0
            ){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let critere_2012={"T0_chi_id_source" : chi_id_source};
        let tt2012=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 2012 , critere_2012 , __db1 );
        this.__ig1.donnees_retournees[__xva][''page_voir1'']=tt2012;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva][''__co1''];
        let form=this.__ig1.donnees_recues[__xva][''__fo1''][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let criteres_2012={
             /*  */
            "T0_chi_id_source" : form[''chi_id_source'']
        };
        let tt2012=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 2012 , criteres_2012 , __db1 );
        if(tt2012.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt2012.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt2012[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_2015={
             /*  */
            "chi_id_source" : form[''chi_id_source'']
        };
        let tt2015=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_sources
        WHERE `chi_id_source` = :chi_id_source ;
        */
        /*sql_inclure_fin*/ 2015 , criteres_2015 , __db1 );
        /*  */
        if(tt2015.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt2015.__xme});
        }
        let aac=await this.actions_apres_supprimer( mat , d , form , tt2012[__xva][0] , __db1 );
        if(aac.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : aac.__xme});
        }
        /*  */
        if(form[''__mat_liste_si_ok''] !== ''''){
            let mat1=JSON.parse( form[''__mat_liste_si_ok''] );
            await this.filtre1( mat1 , 1 , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_source=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_source''
                   && mat[i][2] === ''f''
                   && mat[i][8] === 1
                   && mat[i + 1][2] === ''c''
                   && mat[i + 1][4] === 0
            ){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let critere_2012={"T0_chi_id_source" : chi_id_source};
        let tt2012=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`chi_id_source` = :T0_chi_id_source
        ;
        */
        /*sql_inclure_fin*/ 2012 , critere_2012 , __db1 );
        this.__ig1.donnees_retournees[__xva][''page_confirmation_supprimer1'']=tt2012;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        let l01=mat.length;
        let option_de_13='''';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''de_13'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                option_de_13=''de_13('' + mat[i + 1][1] + '')'';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );
        if(!formulaire.hasOwnProperty( ''__num_page'' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_2011={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== ''__num_page''){
                criteres_2011[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( ''__complements_sous_liste'' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_2011[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 1 );
        }
        let tt2011=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source`
         FROM b1.tbl_sources T0
        WHERE (`T0`.`chp_nom_source` LIKE :T0_chp_nom_source
           AND `T0`.`chi_id_source` = :T0_chi_id_source
           AND `T0`.`chi_id_source` > :T0_chi_id_source2
           AND `T0`.`chi_id_source` <= :T0_chi_id_source3
           AND `T0`.`che_binaire_source` = :T0_che_binaire_source
           AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
           AND `T0`.`che_pour_util_source` IN (:T0_che_pour_util_source)) 
        ORDER BY `T0`.`chi_id_source` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 2011 , criteres_2011 , __db1 );
        if(tt2011.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt2011.__xme});
        }
        if(tt2011.__xst === __xsu && tt2011.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_2011[''debut'']=__debut;
            tt2011=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source`
             FROM b1.tbl_sources T0
            WHERE (`T0`.`chp_nom_source` LIKE :T0_chp_nom_source
               AND `T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chi_id_source` > :T0_chi_id_source2
               AND `T0`.`chi_id_source` <= :T0_chi_id_source3
               AND `T0`.`che_binaire_source` = :T0_che_binaire_source
               AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
               AND `T0`.`che_pour_util_source` IN (:T0_che_pour_util_source)) 
            ORDER BY `T0`.`chi_id_source` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 2011 , criteres_2011 , __db1 );
        }
        this.__ig1.donnees_retournees.__xva[''__nbMax'']=__nbMax;
        this.__ig1.donnees_retournees[__xva][''__debut'']=__debut;
        this.__ig1.donnees_retournees[__xva][''__num_page'']=__num_page;
        this.__ig1.donnees_retournees[__xac]=''pm1(m1(n1('' + this.moi + ''),f1('' + this.fonction_liste + ''('' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+=''))))'';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt2011;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        const __nbMax=40;
        let criteres_2011={};
        criteres_2011[''quantitee'']=__nbMax;
        /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let liste2=await this.__ig1.generique_sous_liste2( mat , d , 2011 , criteres_2011 , __nbMax , __db1 );
        if(liste2.__xst === __xsu){
            /* faire éventuellement faire quelque chose ici avec les éléments contenus dans this.__ig1.donnees_retournees.__xva.sous_liste2.__xva */
            /* voir par exemple dossiers1_s.js */
        }
        return liste2;
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        this.fonction_liste=''liste1'';
        await this.filtre1( mat , d );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi=''sources4'';
    __ig1=null;
    fonction_liste=''liste1'';
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{sources4 as sources4};','0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1035','__televersement2_c.js',NULL,'"use strict";
/* CLIENT */
const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */''__xst'';
const __xva=/* valeurs */''__xva'';
const __xsi=/* signaux */''__xsi'';
const __xac=/* actions */''__xac'';
class __televersement2{
    moi=''__televersement2'';
    #les_morceaux_televerses=[];
    #le_colis={};
    /*
      un fichier est découpé en morceaux
      chaque morceau contient la caractéristique du fichier concerné
      car il peut y avoir plusieurs fichiers à télécharger
      #les_morceaux_a_televerser contient tous les morceaux
    */
    #les_morceaux_a_televerser=[];
    /*
      en réalité 802 736 280  : c''est le plus gros fichier que j''ai essayé de télécharger
      ici on met 900 000 000
    */
    #poids_max_televersement=900e6;
    /*
      cette taille de 10 000 000 octets ( 10 millions ) est
      un bon compromis entre la vitesse de téléchargement et la capacité
      du navigateur
      Pour les tests, je le mets à 10e3 ( 10 ko )
    */
    #taille_du_morceau_pour_televersement=10e6;
    /* 10e6; */
    /*
      entre chaque envoi de paquet on attend 20 ms
      pour mes tests, je mets 200
      mettre une valeur plus basse a peu d''intérêt
    */
    #duree_d_attente_televersement=20;
    #televersement_en_cours=false;
    #parametres_televersement='''';
    date_de_reference_televersement='''';
    plusieurs_fichiers_possibles=1;
    __variables_module={};
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        import( ''/f0?n0=_tri_arbre1_c.js&__version='' + this.__ig1.__version ).then( ( m ) => {
                this.__variables_module[''_tri_arbre1'']=new m[''_tri_arbre1'']( this );
        } );
    }
    /*
      =============================================================================================================
    */
    modifier1( mat , d ){
        this.__ig1.executer1( location.hash.substr( 1 ) );
        this.__ig1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    enregister_l_ordre_des_televersements1( mat , d ){
        let recharger_la_page_courante=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === ''recharger_la_page_courante'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                recharger_la_page_courante=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(recharger_la_page_courante === 1){
            this.__ig1.executer1( location.hash.substr( 1 ) );
        }
        this.__ig1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    enregistrer_l_ordre_des_televersements_du_bouton1( evenement , reference_arbre ){
        let tableau_des_ordre=[];
        let ordre=1;
        for(let i in reference_arbre.arbre){
            tableau_des_ordre.push( [parseInt( reference_arbre.arbre[i].attributs.id , 10 ),ordre++] );
        }
        /* let id_original=reference_arbre.reference_zone_triable.getAttribute( ''data-id_original_pour_tri'' ); */
        /* let le_json=JSON.stringify( reference_arbre.arbre ); */
        /* let le_html=document.getElementById( id_original ).innerHTML; */
        let obj={
             /*  */
            "__xac" : ''pm1(m1(n1('' + this.moi + ''),f1(enregister_l_ordre_des_televersements1(recharger_la_page_courante(1)))))'' ,
            "__xva" : {"tableau_des_ordre" : tableau_des_ordre}
        };
        this.__ig1.envoyer_un_colis_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    afficher_la_boite_de_tri(){
        let options={
            "hauteur_max_en_vh" : /* entre 20 et 80 */60 ,
            "largeur_max" : /* ''calc(100% - 50px)'', */''400px'' ,
            "afficher_le_bouton_supprimer" : 0 ,
            "class_du_bouton_supprimer" : ''yy_b1 yy__0'' ,
            "arborescent" : 0 ,
            "class_du_bouton_deplacer" : ''yy_b1'' ,
            "boutons_du_menu" : [] ,
            "class_du_bouton_menu" : ''yy_b1'' ,
            "class_du_bouton_replier" : ''yy_b1 yy__2''
        };
        options.boutons_du_menu.push( {"libelle" : ''💾 enregistrer cet ordre'' ,"fonction" : this.enregistrer_l_ordre_des_televersements_du_bouton1.bind( this )} );
        options[''afficher_le_bouton_editer'']=0;
        options[''class_du_bouton_editer'']=''yy_b1 yy__xif'';
        this.__variables_module[''_tri_arbre1''][''construire_arbre'']( ''trier_les_televersements'' , options );
    }
    /*
      =============================================================================================================
    */
    recupere_les_fichiers_televersements_pour_tri1( mat , d , le_colis1 ){
        if(le_colis1.__xva.length > 0){
            let che_id_element_televersement=0;
            let che_bdd_televersement=0;
            let chp_nom_table_televersement='''';
            let chp_champ_cle_televersement='''';
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][2] === ''f'' && ''che_id_element_televersement'' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                    che_id_element_televersement=parseInt( mat[i + 1][1] , 10 );
                }else if(mat[i][2] === ''f'' && ''che_bdd_televersement'' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                    che_bdd_televersement=parseInt( mat[i + 1][1] , 10 );
                }else if(mat[i][2] === ''f'' && ''chp_nom_table_televersement'' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                    chp_nom_table_televersement=mat[i + 1][1];
                }else if(mat[i][2] === ''f'' && ''chp_champ_cle_televersement'' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                    chp_champ_cle_televersement=mat[i + 1][1];
                }
            }
            let o1='''';
            o1+=''<h1>tri des téléversements</h1>'';
            o1+=''<input type="hidden" id="che_id_element_televersement" value="'' + che_id_element_televersement + ''" />'';
            o1+=''<input type="hidden" id="che_bdd_televersement" value="'' + che_bdd_televersement + ''" />'';
            o1+=''<input type="hidden" id="chp_nom_table_televersement" value="'' + chp_nom_table_televersement + ''" />'';
            o1+=''<input type="hidden" id="chp_champ_cle_televersement" value="'' + chp_champ_cle_televersement + ''" />'';
            o1+=''<ul id="trier_les_televersements">'';
            for(let i in le_colis1.__xva){
                o1+=''<li id="'' + le_colis1.__xva[i].T0_chi_id_televersement + ''">'';
                o1+=this.__ig1.fi2( le_colis1.__xva[i].T0_chp_nom_original_televersement );
                o1+=''</li>'';
            }
            o1+=''</ul>'';
            this.__ig1.affiche_sous_fenetre1( o1 );
            /* on se donne un peu de temps pour charger _tri_arbre1 */
            setTimeout( this.afficher_la_boite_de_tri.bind( this ) , 250 , {} );
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    enregistrer_televersement_standard1( mat , d ){
        let recharger_la_page_courante=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === ''recharger_la_page_courante'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                recharger_la_page_courante=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(recharger_la_page_courante === 1){
            this.__ig1.executer1( location.hash.substr( 1 ) );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    televerser2(){
        /*
          exemple pris de :        
          https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript 
        */
        if(this.#les_morceaux_a_televerser.length > 0){
            let tt=this.#les_morceaux_a_televerser.splice( 0 , 1 );
            tt=tt[0];
            /* console.log(tt); */
            this.#les_morceaux_televerses.push( {
                    "nombre_de_morceaux" : tt.__xva.nombre_de_morceaux ,
                    "numero_morceau_de_fichier" : tt.__xva.numero_morceau_de_fichier ,
                    "nom_du_fichier" : tt.__xva.nom_du_fichier ,
                    "nom_original" : tt.__xva.nom_original ,
                    "poids_du_fichier" : tt.__xva.poids_du_fichier ,
                    "type_mime_detecte_par_navigateur" : tt.__xva.type_mime_detecte_par_navigateur
                } );
            try{
                let header_post={
                    "Content-Type" : ''application/octet-stream'' ,
                    "x-nom_original" : encodeURIComponent( tt.__xva.nom_original ) ,
                    "x-nom_du_fichier" : encodeURIComponent( tt.__xva.nom_du_fichier ) ,
                    "x-_CA_" : encodeURIComponent( tt.__xva._CA_ ) ,
                    "x-chi_id_utilisateur" : encodeURIComponent( tt.__xva.chi_id_utilisateur ) ,
                    "x-chi_id_acces" : encodeURIComponent( tt.__xva.chi_id_acces ) ,
                    "x-chi_id_projet" : encodeURIComponent( tt.__xva.chi_id_projet ) ,
                    "x-numero_morceau_de_fichier" : encodeURIComponent( tt.__xva.numero_morceau_de_fichier ) ,
                    "x-nombre_de_morceaux" : encodeURIComponent( tt.__xva.nombre_de_morceaux ) ,
                    "x-__deverminage" : encodeURIComponent( tt.__xva.__deverminage ) ,
                    "x-date_de_reference_televersement" : this.date_de_reference_televersement ,
                    "x-type_mime_detecte_par_navigateur" : encodeURIComponent( tt.__xva.type_mime_detecte_par_navigateur )
                };
                const response=fetch( ''http://'' + this.__ig1.__le_serveur + '':'' + this.__ig1.__le_port + ''/'' , {
                    "method" : ''POST'' ,
                    "headers" : header_post ,
                     /*
                      on envoie des données binaires brutes
                     */
                    "body" : tt.__xva.fichier_binaire
                } ).then( ( response ) => {
                    tt=null;
                    const reader=response.body.getReader();
                    /*
                      When no more data needs to be consumed, close the stream
                      Enqueue the next data chunk into our target stream
                    */
                    return(new ReadableStream( {
                             start( controller ){
                                return(pump());
                                function pump(){
                                    return(reader.read().then( ( { done  , value } ) => {
                                            if(done){
                                                controller.close();
                                                return;
                                            }
                                            controller.enqueue( value );
                                            return(pump());
                                    } ));
                                }
                            } 
                        
                        } ));
            } ).then( ( stream ) => {
                    return(new Response( stream ));
            } ).then( ( response ) => {
                    return(response.blob());
            } ).then( ( blob ) => {
                    (blob.text()).then( ( val ) => {
                            if(val.substr( 0 , 19 ) === ''erreur_dans_serveur''){
                                console.error( ''val='' , val );
                                let temporaire1=this.__ig1.__rev1.rev_tm( val );
                                if(temporaire1.__xst === __xsu){
                                    let l01=temporaire1.__xva.length;
                                    let message='''';
                                    for( let i=1 ; i < l01 ; i=temporaire1.__xva[i][12] ){
                                        if(temporaire1.__xva[i][1] === ''erreur_dans_serveur'' && temporaire1.__xva[i][2] === ''f''){
                                            for( let j=i + 1 ; j < l01 ; j=temporaire1.__xva[j][12] ){
                                                if(temporaire1.__xva[j][1] === ''message''
                                                       && temporaire1.__xva[j][2] === ''f''
                                                       && temporaire1.__xva[j][8] === 1
                                                       && temporaire1.__xva[j + 1][2] === ''c''
                                                ){
                                                    message=temporaire1.__xva[j + 1][1];
                                                }
                                            }
                                        }
                                    }
                                    this.#televersement_en_cours=false;
                                    this.__ig1.fermer_la_sous_fenetre();
                                    if(message !== ''''){
                                        this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : message} );
                                    }else{
                                        this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : ''il y a eu une erreur lors du téléversement''} );
                                    }
                                    this.__ig1.affiche_les_messages();
                                }
                                return;
                            }else if(val.substr( 0 , 15 ) === ''ok_dans_serveur''){
                                let tt=this.__ig1.__rev1.rev_tm( val );
                                if(tt.__xst === __xsu){
                                    let l01=tt.__xva.length;
                                    let nom_du_fichier='''';
                                    let numero_morceau_de_fichier=0;
                                    let nombre_de_morceaux=0;
                                    let repertoire_fichier1='''';
                                    let nom_fichier_sur_disque1='''';
                                    for( let i=1 ; i < l01 ; i=tt.__xva[i][12] ){
                                        if(tt.__xva[i][1] === ''ok_dans_serveur'' && tt.__xva[i][2] === ''f''){
                                            for( let j=i + 1 ; j < l01 ; j=tt.__xva[j][12] ){
                                                if(tt.__xva[j][1] === ''nom_du_fichier'' && tt.__xva[j][2] === ''f'' && tt.__xva[j][8] === 1 && tt.__xva[j + 1][2] === ''c''){
                                                    nom_du_fichier=tt.__xva[j + 1][1];
                                                }else if(tt.__xva[j][1] === ''numero_morceau_de_fichier''
                                                       && tt.__xva[j][2] === ''f''
                                                       && tt.__xva[j][8] === 1
                                                       && tt.__xva[j + 1][2] === ''c''
                                                ){
                                                    numero_morceau_de_fichier=parseInt( tt.__xva[j + 1][1] , 10 );
                                                }else if(tt.__xva[j][1] === ''nombre_de_morceaux'' && tt.__xva[j][2] === ''f'' && tt.__xva[j][8] === 1 && tt.__xva[j + 1][2] === ''c''){
                                                    nombre_de_morceaux=parseInt( tt.__xva[j + 1][1] , 10 );
                                                }else if(tt.__xva[j][1] === ''repertoire_fichier1'' && tt.__xva[j][2] === ''f'' && tt.__xva[j][8] === 1 && tt.__xva[j + 1][2] === ''c''){
                                                    repertoire_fichier1=tt.__xva[j + 1][1];
                                                    this.#les_morceaux_televerses[this.#les_morceaux_televerses.length - 1][''repertoire_fichier1'']=repertoire_fichier1;
                                                }else if(tt.__xva[j][1] === ''nom_fichier_sur_disque1''
                                                       && tt.__xva[j][2] === ''f''
                                                       && tt.__xva[j][8] === 1
                                                       && tt.__xva[j + 1][2] === ''c''
                                                ){
                                                    nom_fichier_sur_disque1=tt.__xva[j + 1][1];
                                                    this.#les_morceaux_televerses[this.#les_morceaux_televerses.length - 1][''nom_fichier_sur_disque1'']=nom_fichier_sur_disque1;
                                                }
                                            }
                                        }
                                    }
                                    if(nombre_de_morceaux > 0 && numero_morceau_de_fichier > 0 && nom_du_fichier !== ''''){
                                        let pourcent=parseInt( (10 * 100 * numero_morceau_de_fichier) / nombre_de_morceaux , 10 ) / 10;
                                        if(pourcent === 100){
                                            console.log( "%c pourcent=" + pourcent , ''background:lightgreen;'' );
                                        }else{
                                            /* console.log("%c pourcent="+pourcent , ''background:lightblue;''); */
                                        }
                                        try{
                                            document.getElementById( nom_du_fichier + ''_1'' ).innerText=pourcent + '' %'';
                                            document.getElementById( nom_du_fichier + ''_1'' ).style.backgroundColor=''lime'';
                                            if(pourcent <= 10){
                                                document.getElementById( nom_du_fichier + ''_1'' ).style.width=''10%'';
                                            }else{
                                                document.getElementById( nom_du_fichier + ''_1'' ).style.width=pourcent + ''%'';
                                            }
                                        } catch {}
                                    }
                                }
                                setTimeout( this.televerser2.bind( this ) , this.#duree_d_attente_televersement );
                            }else{
                                this.#televersement_en_cours=false;
                                this.__ig1.fermer_la_sous_fenetre();
                                this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : ''erreur non traitée<br />'' + val + ''<br />'' + this.__ig1.nl2()} );
                                return;
                            }
                    } );
            } ).catch( ( e ) => {
                    console.log( e.stack );
                    this.#televersement_en_cours=false;
                    this.__ig1.fermer_la_sous_fenetre();
                    this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : ''erreur non traitée<br />'' + e.stack + ''<br />'' + this.__ig1.nl2()} );
                    return;
            } );
            }catch(err){
                console.log( err.stack );
                this.#televersement_en_cours=false;
                this.__ig1.fermer_la_sous_fenetre();
                this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : ''erreur non traitée '' + err.stack + ''<br />'' + this.__ig1.nl2()} );
                return;
            }
        }else{
            this.#televersement_en_cours=false;
            /* à la fin de tous les téléchargements */
            /* console.log( "this.#les_morceaux_televerses=" , this.#les_morceaux_televerses ); */
            let les_fichiers_reellement_televerses=[];
            for(let i in this.#les_morceaux_televerses){
                if(this.#les_morceaux_televerses[i].nombre_de_morceaux === this.#les_morceaux_televerses[i].numero_morceau_de_fichier){
                    les_fichiers_reellement_televerses.push( {
                            "nom_du_fichier" : this.#les_morceaux_televerses[i].nom_du_fichier ,
                            "nom_fichier_sur_disque1" : this.#les_morceaux_televerses[i].nom_fichier_sur_disque1 ,
                            "nom_original" : this.#les_morceaux_televerses[i].nom_original ,
                            "poids_du_fichier" : this.#les_morceaux_televerses[i].poids_du_fichier ,
                            "repertoire_fichier1" : this.#les_morceaux_televerses[i].repertoire_fichier1 ,
                            "type_mime_detecte_par_navigateur" : this.#les_morceaux_televerses[i].type_mime_detecte_par_navigateur ,
                            "vv_commentaire_global_sur_le_televersement" : document.getElementById( ''vv_commentaire_global_sur_le_televersement'' ).value ,
                            "commentaire_fichier_" : document.getElementById( ''commentaire_fichier_'' + this.#les_morceaux_televerses[i].nom_du_fichier + ''_1'' ).value
                        } );
                }
            }
            this.#les_morceaux_televerses=[];
            console.log( ''les_fichiers_reellement_televerses='' , les_fichiers_reellement_televerses );
            console.log( ''parametres_televersement'' , this.#parametres_televersement );
            /* if(this.#parametres_televersement.indexOf(''enregistrer_reference_fichier__televerse_standard1'')>=0) */
            let obj2=this.__ig1.__rev1.t2m( this.#parametres_televersement );
            if(obj2.__xst !== __xsu){
                this.__ig1.affiche_les_messages( {"__xst" : __xsu ,"__xme" : ''téléversement terminé''} );
            }else{
                /*#
                  traitement_final(
                     pm1(
                        n1(__ig1),
                        f1(enregistrer_reference_fichier__televerse_standard1(nom_de_la_table_referente(''tbl_dessins''),id_element(819),nom_champ_cle(chi_id_dessin)))
                     )
                  ),plusieurs_fichiers_possibles(5)
                */
                let mat3=obj2.__xva;
                let l03=mat3.length;
                let traitement_final='''';
                for( let i=1 ; i < l03 ; i=mat3[i][12] ){
                    if(mat3[i][1] === ''traitement_final'' && mat3[i][8] > 0){
                        let obj4=this.__ig1.__rev1.m2t( mat3 , i );
                        if(obj4.__xst === __xsu){
                            traitement_final=obj4.__xva;
                        }
                        break;
                    }
                }
                if(traitement_final !== ''''){
                    let le_colis={"__xac" : traitement_final ,"__xva" : {"les_fichiers_televerses" : les_fichiers_reellement_televerses}};
                    this.__ig1.envoyer_un_colis_au_worker( le_colis );
                }else{
                    this.__ig1.affiche_les_messages( {"__xst" : __xsu ,"__xme" : ''téléversement terminé''} );
                }
                this.__ig1.fermer_la_sous_fenetre();
                return({"__xst" : __xsu});
            }
        }
    }
    /*
      =============================================================================================================
    */
    initialisation_boucle_sur_televersement4(){
        let les_fichiers=document.getElementById( ''vv_input_fichier_a_telecharger4'' );
        for( let numero_fichier=0 ; numero_fichier < les_fichiers.files.length ; numero_fichier++ ){
            const reader=new FileReader();
            reader.readAsArrayBuffer( les_fichiers.files[numero_fichier] );
            reader.onload=function( {} ){
                let nom_original=arguments[0];
                let nom_du_fichier=arguments[1];
                let type_mime_detecte_par_navigateur=arguments[2];
                let numero_fichier=arguments[3];
                let nombre_de_fichiers=arguments[4];
                let numero_argument_donnees=5;
                let poids_du_fichier=arguments[numero_argument_donnees].target.result.byteLength;
                this.__ig1.ma_trace1( "arguments[numero_argument_donnees]" , arguments[numero_argument_donnees].target );
                document.getElementById( nom_du_fichier + ''_1'' ).innerText=''préparation du morceau '';
                if(arguments[numero_argument_donnees].target.result.byteLength > this.#taille_du_morceau_pour_televersement){
                    /* console.log(arguments[numero_argument_donnees]); */
                    let tt=arguments[numero_argument_donnees].target.result;
                    let nombre_de_morceaux=parseInt( tt.byteLength / this.#taille_du_morceau_pour_televersement , 10 ) + (tt.byteLength% this.#taille_du_morceau_pour_televersement === 0 ? ( 0 ) : ( 1 ));
                    let numero_morceau_de_fichier=1;
                    let poids_cumule=0;
                    let position=0;
                    while(position < tt.byteLength){
                        let aa=tt.slice( position , position + this.#taille_du_morceau_pour_televersement );
                        poids_cumule+=aa.byteLength;
                        let fichier_binaire=aa;
                        let xva={
                             /*  */
                            "fichier_binaire" : fichier_binaire ,
                            "nom_zone" : arguments[0] ,
                            "numero_morceau_de_fichier" : numero_morceau_de_fichier ,
                            "nombre_de_morceaux" : nombre_de_morceaux ,
                            "nom_du_fichier" : nom_du_fichier ,
                            "poids_du_fichier" : poids_du_fichier ,
                            "poids_max_par_paquet" : this.#taille_du_morceau_pour_televersement ,
                            "nom_original" : nom_original ,
                            "poids_cumule" : poids_cumule ,
                            "poids_envoye" : aa.byteLength ,
                            "type_mime_detecte_par_navigateur" : type_mime_detecte_par_navigateur ,
                            "_CA_" : this.__ig1._CA_ ,
                            "chi_id_utilisateur" : this.__ig1.chi_id_utilisateur ,
                            "chi_id_acces" : this.__ig1.chi_id_acces ,
                            "chi_id_projet" : this.__ig1.chi_id_projet ,
                            "__deverminage" : this.__ig1.__deverminage
                        };
                        this.#les_morceaux_a_televerser.push( {
                                 /*  */
                                "__xva" : xva ,
                                "position" : 0 ,
                                "numero_morceau_de_fichier" : numero_morceau_de_fichier ,
                                "__xac" : ''pm1(n1(afr),f1(afr()))''
                            } );
                        numero_morceau_de_fichier++;
                        position+=this.#taille_du_morceau_pour_televersement;
                    }
                }else{
                    let nombre_de_morceaux=1;
                    let numero_morceau_de_fichier=1;
                    let fichier_binaire=arguments[numero_argument_donnees].target.result;
                    let poids_envoye=arguments[numero_argument_donnees].target.result.byteLength;
                    let xva={
                         /*  */
                        "fichier_binaire" : fichier_binaire ,
                        "nom_zone" : arguments[0] ,
                        "numero_morceau_de_fichier" : numero_morceau_de_fichier ,
                        "nombre_de_morceaux" : nombre_de_morceaux ,
                        "nom_du_fichier" : nom_du_fichier ,
                        "poids_du_fichier" : poids_du_fichier ,
                        "poids_max_par_paquet" : this.#taille_du_morceau_pour_televersement ,
                        "nom_original" : nom_original ,
                        "poids_envoye" : poids_envoye ,
                        "poids_cumule" : poids_envoye ,
                        "type_mime_detecte_par_navigateur" : type_mime_detecte_par_navigateur ,
                        "_CA_" : this.__ig1._CA_ ,
                        "chi_id_utilisateur" : this.__ig1.chi_id_utilisateur ,
                        "chi_id_acces" : this.__ig1.chi_id_acces ,
                        "chi_id_projet" : this.__ig1.chi_id_projet ,
                        "__deverminage" : this.__ig1.__deverminage
                    };
                    this.#les_morceaux_a_televerser.push( {
                             /*  */
                            "__xva" : xva ,
                            "position" : 0 ,
                            "numero_morceau_de_fichier" : numero_morceau_de_fichier ,
                            "nombre_de_morceaux" : nombre_de_morceaux ,
                            "__xac" : ''pm1(n1(afr),f1(afr()))''
                        } );
                }
                if(numero_fichier === nombre_de_fichiers - 1){
                    if(this.#televersement_en_cours === false){
                        this.#televersement_en_cours=true;
                        setTimeout( this.televerser2.bind( this ) , this.#duree_d_attente_televersement );
                    }
                    try{
                        document.getElementById( ''vv_message_televersement_th'' ).innerHTML=''Téléversement en cours...'';
                    } catch {}
                }
            }.bind( this , les_fichiers.files[numero_fichier].name , les_fichiers.files[numero_fichier].cle_du_fichier , les_fichiers.files[numero_fichier].type , numero_fichier , les_fichiers.files.length );
        }
    }
    /*
      =============================================================================================================
    */
    action_bouton_envoyer_televersement4( e ){
        setTimeout( this.initialisation_boucle_sur_televersement4.bind( this ) , 50 );
    }
    /*
      =============================================================================================================
    */
    fichiers_ajoutés_pour_téléversement4( mat , d , e ){
        let aa=new Date();
        this.date_de_reference_televersement=aa.getFullYear() + ''/'' + (aa.getMonth() + 1 < 10 ? ( ''0'' + (aa.getMonth() + 1) ) : ( aa.getMonth() + 1 )) + ''/'' + (aa.getDate() < 10 ? ( ''0'' + aa.getDate() ) : ( aa.getDate() ));
        let l01=mat.length;
        let id=null;
        let id_du_bouton=null;
        let la_zone_des_fichiers=0;
        let dans_un_formulaire=false;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === ''id'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                id=mat[i + 1][1];
            }else if(mat[i][1] === ''id_du_bouton'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                id_du_bouton=mat[i + 1][1];
            }else if(mat[i][1] === ''la_zone_des_fichiers'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                la_zone_des_fichiers=mat[i + 1][1];
            }else if(mat[i][1] === ''dans_un_formulaire'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                dans_un_formulaire=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_du_bouton !== null && id !== null && la_zone_des_fichiers !== null){
            let a=null;
            try{
                a=document.getElementById( id_du_bouton );
            } catch {}
            let b=null;
            try{
                b=document.getElementById( id );
            } catch {}
            let c=null;
            try{
                c=document.getElementById( la_zone_des_fichiers );
            } catch {}
            if(a !== null && b !== null && c !== null){
                document.getElementById( ''vv_bouton_pour_selectionner'' ).style.visibility=''hidden'';
                if(b.files.length > 0){
                    let cumul_taille=0;
                    let t='''';
                    t+=''<table style="width:100%;border:1px var(--c_coul_fond5) solid;border-collapse: collapse;">'';
                    t+=''<tr>'';
                    t+=''<th style="width:100%;" id="vv_message_televersement_th">'';
                    t+=''veuillez cliquer sur le bouton'';
                    t+=''</tr>'';
                    t+=''<tr>'';
                    t+=''<td style="width:100%;">'';
                    t+=''<div id="vv_message_televersement" style="height:'' + (this.__ig1.css_dimensions.t_police + 2) + ''px;width:0%;text-align:right;"></div>'';
                    t+=''</td>'';
                    t+=''</th>'';
                    t+=''</tr>'';
                    for( let i=0 ; i < b.files.length ; i++ ){
                        /* console.log(''b.files[i]='' , b.files[i].type ) */
                        b.files[i][''cle_du_fichier'']=self.crypto.randomUUID();
                        t+=''<tr>'';
                        t+=''<td style="width:100%;" id="'' + b.files[i][''cle_du_fichier''] + ''_0">'';
                        cumul_taille+=b.files[i].size;
                        t+=''['' + b.files[i].type + '']  ('' + b.files[i].size + '') '' + b.files[i].name + '''';
                        t+=''</td>'';
                        t+=''</tr>'';
                        t+=''<tr>'';
                        t+=''<td style="width:100%;">'';
                        t+=''<div id="'' + b.files[i][''cle_du_fichier''] + ''_1" style="height:10px;width:100%;"></div>'';
                        t+=''</td>'';
                        t+=''</tr>'';
                        t+=''<tr>'';
                        t+=''<td style="width:100%;">'';
                        t+=''<input id="commentaire_fichier_'' + b.files[i][''cle_du_fichier''] + ''_1" placeholder="commentaire éventuel sur le fichier '' + b.files[i].name.replace( /"/g , ''&quot;'' ) + ''" style="height: var(--t_hauteur_input1);width:100%;" /></div>'';
                        t+=''</td>'';
                        t+=''</tr>'';
                    }
                    t+=''<tr>'';
                    t+=''<td style="width:100%;">'';
                    if(cumul_taille > this.#poids_max_televersement || b.files.length > this.plusieurs_fichiers_possibles){
                        if(cumul_taille > this.#poids_max_televersement){
                            t+=''<span style="background:red;">'' + cumul_taille.toLocaleString( ''fr-FR'' , {"minimumFractionDigits" : 0} ) + ''o</span> &gt; '' + this.#poids_max_televersement + ''o'';
                            t+=''<br />'';
                            t+=''la taille totale est supérieur à la taille limite de téléchargement'';
                            t+=''<br />'';
                            t+=''mettez moins de fichiers'';
                        }else{
                            t+=''<span style="background:red;">vous êtes limité à '' + this.plusieurs_fichiers_possibles + '' fichiers</span>'';
                            t+=''mettez moins de fichiers'';
                        }
                    }else{
                        t+=''<span id="vv_total_a_televerser" data-entier="'' + cumul_taille + ''">'' + cumul_taille.toLocaleString( ''fr-FR'' , {"minimumFractionDigits" : 0} ) + ''</span> octets au total à téléverser'';
                    }
                    t+=''</td>'';
                    t+=''</tr>'';
                    c.innerHTML=t;
                    c.style.display=''block'';
                    if(cumul_taille > this.#poids_max_televersement || b.files.length > this.plusieurs_fichiers_possibles){
                    }else{
                        a.style.visibility=''visible'';
                    }
                    return({"__xst" : __xsu});
                }
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    afficher_la_sous_fenetre_televersement1( mat , d ){
        this.plusieurs_fichiers_possibles=1;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''plusieurs_fichiers_possibles'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                this.plusieurs_fichiers_possibles=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let chi_id_dossier=0;
        let chp_nom_dossier='''';
        let nom_de_la_table='''';
        let id_element=0;
        let nom_champ_cle='''';
        let obj2=this.__ig1.__rev1.m2t( mat , d );
        if(obj2.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        this.#les_morceaux_televerses=[];
        this.#parametres_televersement=obj2.__xva;
        let o1='''';
        if(this.plusieurs_fichiers_possibles > 1){
            o1+=''<h1>téléverser des fichiers ( '' + this.plusieurs_fichiers_possibles + '' max )</h1>'';
        }else{
            o1+=''<h1>téléverser un fichier</h1>'';
        }
        o1+=''<br />'';
        o1+=''<div id="vv_telecharger4">'';
        o1+=''    <label for="vv_commentaire_global_sur_le_televersement">'';
        o1+=''       entrez ici un commentaire éventuel'';
        o1+=''       <textarea rows="5" cols="50" id="vv_commentaire_global_sur_le_televersement"></textarea>'';
        o1+=''    </label>'';
        o1+=''    <form method="post" id="vv_id_televersement4">'';
        o1+=''        <label id="vv_bouton_pour_selectionner" for="vv_input_fichier_a_telecharger4" style="border: 1px solid #ccc;display: inline-block;padding: 6px 12px;">'';
        o1+=''          cliquez ici pour sélectionner les fichiers'';
        o1+=''        </label>'';
        o1+=''        <input type="file" '' + (this.plusieurs_fichiers_possibles > 1 ? ( ''multiple'' ) : ( '''' )) + '' id="vv_input_fichier_a_telecharger4" style="display:none;" '';
        o1+='' rev_change1="m1(n1('' + this.moi + ''),f1(fichiers_ajoutés_pour_téléversement4('';
        o1+=''id(vv_input_fichier_a_telecharger4),'';
        o1+=''id_du_bouton(vv_bouton_téléverser4),'';
        o1+=''la_zone_des_fichiers(vv_la_liste_des_fichiers4))))" />'';
        o1+=''        <button type="submit" style="visibility:hidden;" class="yy_b1" id="vv_bouton_téléverser4">téléverser4</button>'';
        o1+=''    </form>'';
        o1+=''    <br />'';
        o1+=''    <div id="vv_la_liste_des_fichiers4" style="display:none;"></div>'';
        o1+=''</div>'';
        this.__ig1.affiche_sous_fenetre1( o1 );
        let aa=document.getElementById( ''vv_id_televersement4'' );
        aa.addEventListener( "submit" , ( event ) => {
                event.preventDefault();
                this.action_bouton_envoyer_televersement4();
        } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_editer1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( ''page_editer1'' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : ''cet élément n\''a pas été trouvé''} ));
        }
        let tup=le_colis1.__xva.page_editer1.__xva[0];
        let o1='''';
        o1+=''<h1>modifier fichier téléversé</h1>'';
        o1+=''<div id="vv_ecran_modification_commentaire_televersement">'';
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {
            "nom_du_champ" : "chp_comm_fichier_televersement" ,
            "__contexte" : "modification1" ,
            "longueur_du_champ" : 255 ,
            "libelle_du_champ" : "commentaire fichier"
        } );
        /*
          =====================================================================================================
        */
        o1+=''      <input type="hidden" id="chi_id_televersement" value="'' + tup.T0_chi_id_televersement + ''" />'';
        /*
          =====================================================================================================
        */
        o1+=''</div>'';
        o1+=''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_ecran_modification_commentaire_televersement),pm1(m1(n1('' + this.moi + ''),f1(modifier1()))))" title="modifier" >modifier</button>'';
        this.__ig1.affiche_sous_fenetre1( o1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      au retour de la suppression
    */
    supprimer1(){
        this.__ig1.fermer_la_sous_fenetre();
        this.__ig1.executer1( location.hash.substr( 1 ) );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( ''page_confirmation_supprimer1'' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : ''cet élément n\''a pas été trouvé''} ));
        }
        let enreg=le_colis1.__xva.page_confirmation_supprimer1.__xva[0];
        if(enreg[''T0_chi_id_televersement''] === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0.chi_id_televersement n''est pas en sortie dans la requête select "});
        }
        let o1='''';
        o1+=''  <h1>suprimer un fichier téléversé</h1>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>id</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled type="number" size="32" maxlength="32" id="chi_id_televersement"  value="'' + this.__ig1.fi2( enreg[''T0_chi_id_televersement''] ) + ''" />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''chi_id_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>ref bdd</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled type="number" size="32" maxlength="32" id="che_bdd_televersement"  value="'' + this.__ig1.fi2( enreg[''T0_che_bdd_televersement''] ) + ''" />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''che_bdd_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>nom de la table</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled  type="text" id="chp_nom_table_televersement"  size="64"   maxlength="64"  value="'' + this.__ig1.fi2( enreg[''T0_chp_nom_table_televersement''] ) + ''"   />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''chp_nom_table_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>id element</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled type="number" size="32" maxlength="32" id="che_id_element_televersement"  value="'' + this.__ig1.fi2( enreg[''T0_che_id_element_televersement''] ) + ''" />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''che_id_element_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>utilisateur</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''        <input type="hidden" value="'';
        o1+=enreg[''T0_chx_utilisateur_televersement''];
        o1+=''"  id="chx_utilisateur_televersement" />'';
        o1+=''        <span>'';
        o1+=''('' + enreg[''T0_chx_utilisateur_televersement''] + '') '';
        o1+=''</span>'';
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>champ cle</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled  type="text" id="chp_champ_cle_televersement"  size="64"   maxlength="64"  value="'' + this.__ig1.fi2( enreg[''T0_chp_champ_cle_televersement''] ) + ''"   />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''chp_champ_cle_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>nom original</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled  type="text" id="chp_nom_original_televersement"   maxlength="255"  value="'' + this.__ig1.fi2( enreg[''T0_chp_nom_original_televersement''] ) + ''"   />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''chp_nom_original_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>poids</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled type="number" size="32" maxlength="32" id="che_poids_televersement"  value="'' + this.__ig1.fi2( enreg[''T0_che_poids_televersement''] ) + ''" />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''che_poids_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>nom fichier sur disque</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled  type="text" id="chp_nom_fichier_sur_disque_televersement"   maxlength="255"  value="'' + this.__ig1.fi2( enreg[''T0_chp_nom_fichier_sur_disque_televersement''] ) + ''"   />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''chp_nom_fichier_sur_disque_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>nom du dossier</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled  type="text" id="chp_nom_du_dossier_televersement"   maxlength="255"  value="'' + this.__ig1.fi2( enreg[''T0_chp_nom_du_dossier_televersement''] ) + ''"   />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''chp_nom_du_dossier_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>commentaire global</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''        <div class="yy_conteneur_txtara">'';
        o1+=''<div>\r\n'';
        o1+=this.__ig1.__fnt1.boutons_suppression1( ''cht_comm_glob_televersement'' );
        o1+=''</div>\r\n'';
        o1+=''            <textarea disabled id="cht_comm_glob_televersement" rows="2"  cols="50" >'' + this.__ig1.fi2( enreg[''T0_cht_comm_glob_televersement''] ) + ''</textarea>'';
        o1+=''        </div>'';
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''  <div class="yy_edition_champ1">'';
        o1+=''    <div class="yy_edition_libelle1">'';
        o1+=''      <span>commentaire fichier</span>'';
        o1+=''    </div>'';
        o1+=''    <div class="yy_edition_valeur1">'';
        o1+=''      <input disabled  type="text" id="chp_comm_fichier_televersement"   maxlength="255"  value="'' + this.__ig1.fi2( enreg[''T0_chp_comm_fichier_televersement''] ) + ''"   />'';
        o1+=this.__ig1.__fnt1.boutons_suppression2( ''chp_comm_fichier_televersement'' );
        o1+=''    </div>'';
        o1+=''  </div>'';
        /*
          =====================================================================================================
        */
        o1+=''      <input type="hidden" id="chi_id_televersement" value="'' + enreg[''T0_chi_id_televersement''] + ''" />'';
        /*
          =====================================================================================================
        */
        o1+=''<button class="yy_b1 yy__2" rev_clic1="pm1(m1(n1('' + this.moi + ''),f1(supprimer1(chi_id_televersement('' + enreg[''T0_chi_id_televersement''] + '')))))" title="">je confirme la suppression</button>'';
        this.__ig1.affiche_sous_fenetre1( o1 );
        return({"__xst" : __xsu});
    }
}
export{__televersement2 as __televersement2};','0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1036','__televersement2_s.js',NULL,'const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */''__xst'';
const __xva=/* valeurs */''__xva'';
const __xsi=/* signaux */''__xsi'';
const __xac=/* actions */''__xac'';
/*
  =====================================================================================================================
*/
class __televersement2{
    /*
      =============================================================================================================
    */
    moi=''__televersement2'';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =========================== fragment ========================================================================
    */
    async enregister_l_ordre_des_televersements1( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        for(let k1 in this.__ig1.donnees_recues[__xva][''tableau_des_ordre'']){
            let v1=this.__ig1.donnees_recues[__xva][''tableau_des_ordre''][k1];
            let criteres_select_1222={"c_chi_id_televersement" : v1[0] ,"n_che_ordre_televersement" : v1[1]};
            let tt1222=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_televersements SET 
               `che_ordre_televersement` = :n_che_ordre_televersement
            WHERE `chi_id_televersement` = :c_chi_id_televersement ;
            */
            /*sql_inclure_fin*/ 1222 , criteres_select_1222 , __db1 );
            if(tt1222.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt1222.__xme});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recupere_les_fichiers_televersements_pour_tri1( mat , d ){
        let che_id_element_televersement=0;
        let che_bdd_televersement=0;
        let chp_nom_table_televersement='''';
        let chp_champ_cle_televersement='''';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === ''f'' && ''che_id_element_televersement'' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                che_id_element_televersement=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === ''f'' && ''che_bdd_televersement'' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                che_bdd_televersement=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === ''f'' && ''chp_nom_table_televersement'' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chp_nom_table_televersement=mat[i + 1][1];
            }else if(mat[i][2] === ''f'' && ''chp_champ_cle_televersement'' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chp_champ_cle_televersement=mat[i + 1][1];
            }
        }
        let ob1=await this.recuperer_la_liste( che_id_element_televersement , chp_nom_table_televersement , che_bdd_televersement , chp_champ_cle_televersement );
        this.__ig1.ma_trace1( "ob1" , ob1 );
        if(ob1.__xst === __xsu){
            this.__ig1.donnees_retournees.__xva=ob1.__xva;
            return({"__xst" : __xsu});
        }else{
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
    }
    /*
      =============================================================================================================
    */
    async recuperer_la_liste( che_id_element_televersement , chp_nom_table_televersement , che_bdd_televersement , chp_champ_cle_televersement , __db1=null ){
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 1 );
        }
        let criteres_1166={
            "T0_che_id_element_televersement" : che_id_element_televersement ,
            "T0_chp_nom_table_televersement" : chp_nom_table_televersement ,
            "T0_che_bdd_televersement" : che_bdd_televersement ,
            "T0_chp_champ_cle_televersement" : chp_champ_cle_televersement
        };
        let tt1166=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_televersement` , `T0`.`chp_nom_du_dossier_televersement` , `T0`.`chp_nom_fichier_sur_disque_televersement` , `T0`.`chp_nom_original_televersement` , `T0`.`cht_comm_glob_televersement` , 
        `T0`.`chp_comm_fichier_televersement` , `T0`.`chp_mime_televersement`
         FROM b1.tbl_televersements T0
        WHERE (   `T0`.`che_bdd_televersement` = :T0_che_bdd_televersement
           AND `T0`.`chp_nom_table_televersement` = :T0_chp_nom_table_televersement
           AND `T0`.`che_id_element_televersement` = :T0_che_id_element_televersement
           AND `T0`.`chp_champ_cle_televersement` = :T0_chp_champ_cle_televersement) 
        ORDER BY `T0`.`che_ordre_televersement` ASC, `T0`.`chi_id_televersement` DESC  
        LIMIT 500 OFFSET 0 
        ;
        */
        /*sql_inclure_fin*/ 1166 , criteres_1166 , __db1 );
        return tt1166;
    }
    /*
      =============================================================================================================
    */
    async enregistrer_televersement_standard1( mat , d ){
        let chi_id_basedd=0;
        let nom_de_la_table_referente='''';
        let id_element=0;
        let nom_champ_cle='''';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_basedd'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''id_element'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                id_element=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''nom_de_la_table_referente'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                nom_de_la_table_referente=mat[i + 1][1];
            }else if(mat[i][1] === ''nom_champ_cle'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                nom_champ_cle=mat[i + 1][1];
            }
        }
        if(nom_champ_cle !== '''' && nom_de_la_table_referente !== '''' && id_element > 0 && chi_id_basedd > 0){
            let __db1=await this.__ig1.ouvrir_bdd( 1 );
            /* this.__ig1.ma_trace1("this.__ig1.donnees_recues" , this.__ig1.donnees_recues.__xva.les_fichiers_televerses ); */
            /*#
              les_fichiers_televerses: [
                 {
                    nom_du_fichier: "5b5d6bed-c8f3-425d-8c9c-ed7083a1b810",
                    nom_fichier_sur_disque1: "t_C3_A9l_C3_A9charger_20_2__pdf_5b5d6bed_c8f3_425d_8c9c_ed7083a1b810.txt",
                    nom_original: "télécharger (2).pdf",
                    poids_du_fichier: 2306,
                    repertoire_fichier1: "/__fichiers_binaires/televersements/2026/08/03/"
                 },
                 {
                    nom_du_fichier: "63fd2597-23e5-4ade-9598-5dea1074e9c1",
                    nom_fichier_sur_disque1: "t_C3_A9l_C3_A9charger_20_1__pdf_63fd2597_23e5_4ade_9598_5dea1074e9c1.txt",
                    nom_original: "télécharger (1).pdf",
                    poids_du_fichier: 1521,
                    repertoire_fichier1: "/__fichiers_binaires/televersements/2026/08/03/"
                 }
              ],
            */
            for(let i in this.__ig1.donnees_recues.__xva.les_fichiers_televerses){
                let le_fichier_televerse=this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i];
                /* this.__ig1.ma_trace1( "le_fichier_televerse=" , le_fichier_televerse ); */
                /*  */
                let repertoire_fichier1=le_fichier_televerse.repertoire_fichier1.substr( ''/__fichiers_binaires''.length );
                let criteres_1165={
                    "donnees" : [{
                                "che_bdd_televersement" : chi_id_basedd ,
                                "chp_nom_table_televersement" : nom_de_la_table_referente ,
                                "che_id_element_televersement" : id_element ,
                                "chp_champ_cle_televersement" : nom_champ_cle ,
                                "chp_nom_original_televersement" : le_fichier_televerse.nom_original ,
                                "che_poids_televersement" : le_fichier_televerse.poids_du_fichier ,
                                "chp_nom_fichier_sur_disque_televersement" : le_fichier_televerse.nom_fichier_sur_disque1 ,
                                "chp_nom_du_dossier_televersement" : repertoire_fichier1 ,
                                "cht_comm_glob_televersement" : le_fichier_televerse.vv_commentaire_global_sur_le_televersement ,
                                "chp_comm_fichier_televersement" : le_fichier_televerse.commentaire_fichier_ ,
                                "chp_mime_televersement" : le_fichier_televerse.type_mime_detecte_par_navigateur
                            }]
                };
                let tt1165=await this.__ig1.sql_iij(
                /*sql_inclure_deb*/ /*#
                INSERT INTO b1.`tbl_televersements`(
                    `che_bdd_televersement` , 
                    `chp_nom_table_televersement` , 
                    `che_id_element_televersement` , 
                    `chx_utilisateur_televersement` , 
                    `chp_champ_cle_televersement` , 
                    `chp_nom_original_televersement` , 
                    `che_poids_televersement` , 
                    `chp_nom_fichier_sur_disque_televersement` , 
                    `chp_nom_du_dossier_televersement` , 
                    `cht_comm_glob_televersement` , 
                    `chp_comm_fichier_televersement` , 
                    `chp_mime_televersement`
                ) VALUES (
                    :che_bdd_televersement , 
                    :chp_nom_table_televersement , 
                    :che_id_element_televersement , 
                    chi_id_utilisateur , 
                    :chp_champ_cle_televersement , 
                    :chp_nom_original_televersement , 
                    :che_poids_televersement , 
                    :chp_nom_fichier_sur_disque_televersement , 
                    :chp_nom_du_dossier_televersement , 
                    :cht_comm_glob_televersement , 
                    :chp_comm_fichier_televersement , 
                    :chp_mime_televersement
                );
                */
                /*sql_inclure_fin*/ 1165 , criteres_1165 , __db1 );
                if(tt1165.__xst !== __xsu || tt1165[''changements''] !== 1){
                    return({"__xst" : __xer ,"__xme" : tt1165.__xme + '' l\''insertion a échoué ['' + this.__ig1.nl2() + '']''});
                }
                let nouveau_nom='''';
                let ancien_nom=this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_fichier_sur_disque1;
                let cle=this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_du_fichier.replace( /-/g , ''_'' );
                const repl0=new RegExp( cle , ''g'' );
                nouveau_nom=ancien_nom.replace( repl0 , '''' );
                nouveau_nom=''id_'' + tt1165[''nouvel_id''] + ''_b_'' + chi_id_basedd + ''_t_'' + nom_de_la_table_referente.replace( /_/g , '''' ) + ''_e_'' + id_element + ''_'' + nouveau_nom;
                /* console.log(''nouveau_nom="'' + nouveau_nom + ''"\nnom_du_fichier="'' + this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_du_fichier + ''"'' ); */
                /* this.__ig1.ma_trace1("tt1165=",tt1165); */
                let criteres_1171={
                     /*  */
                    "c_chi_id_televersement" : tt1165[''nouvel_id''] ,
                    "n_chp_nom_fichier_sur_disque_televersement" : nouveau_nom
                };
                await __db1.exec( ''BEGIN TRANSACTION;'' );
                let tt1171=await this.__ig1.sql_iij(
                /*sql_inclure_deb*/ /*#
                UPDATE b1.tbl_televersements SET 
                   `chp_nom_fichier_sur_disque_televersement` = :n_chp_nom_fichier_sur_disque_televersement
                WHERE `chi_id_televersement` = :c_chi_id_televersement ;
                */
                /*sql_inclure_fin*/ 1171 , criteres_1171 , __db1 );
                if(tt1171.__xst !== __xsu || tt1171[''changements''] !== 1){
                    await __db1.exec( ''COMMIT;'' );
                    /* pas grave */
                    /* return({"__xst" : __xer ,"__xme" : tt1171.__xme}); */
                }else{
                    try{
                        const currentWorkingDirectory=Deno.cwd().replace( /\\/g , ''/'' );
                        Deno.renameSync( currentWorkingDirectory + this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].repertoire_fichier1 + this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].nom_fichier_sur_disque1 , currentWorkingDirectory + this.__ig1.donnees_recues.__xva.les_fichiers_televerses[i].repertoire_fichier1 + nouveau_nom );
                        await __db1.exec( ''COMMIT;'' );
                    }catch(e){
                        await __db1.exec( ''ROLLBACK;'' );
                        this.__ig1.ma_trace1( "e" , e.stack );
                    }
                }
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async verifier_presence_fichiers_televerses( che_id_element_televersement , chp_nom_table_televersement , che_bdd_televersement , __db1 ){
        /* televersement2 */
        let criteres_select_1172={
             /*  */
            "T0_che_bdd_televersement" : che_bdd_televersement ,
            "T0_chp_nom_table_televersement" : chp_nom_table_televersement ,
            "T0_che_id_element_televersement" : che_id_element_televersement
        };
        let tt1172=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        COUNT( * )
         FROM b1.tbl_televersements T0
        WHERE (`T0`.`che_bdd_televersement` = :T0_che_bdd_televersement
           AND `T0`.`chp_nom_table_televersement` = :T0_chp_nom_table_televersement
           AND `T0`.`che_id_element_televersement` = :T0_che_id_element_televersement)
        ;
        */
        /*sql_inclure_fin*/ 1172 , criteres_select_1172 , __db1 );
        if(tt1172.__xst !== __xsu || tt1172.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé : aucune modification effectuée [1172 '' + this.__ig1.nl2() + '']''});
        }
        this.__ig1.ma_trace1( "tt1172.__xva[0]" , tt1172.__xva[0][''COUNT_____''] );
        if(tt1172.__xva[0][''COUNT_____''] > 0){
            return({"__xst" : __xer ,"__xme" : ''il existe des éléments téléversés attachés '' + this.__ig1.nl2() + '']''});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let chi_id_televersement=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_televersement'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_televersement=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_televersement === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let criteres_1168={
             /*  */
            "T0_chi_id_televersement" : chi_id_televersement
        };
        let tt1168=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_televersement` , `T0`.`che_bdd_televersement` , `T0`.`chp_nom_table_televersement` , `T0`.`che_id_element_televersement` , `T0`.`chx_utilisateur_televersement` , 
        `T0`.`chp_champ_cle_televersement` , `T0`.`chp_nom_original_televersement` , `T0`.`che_poids_televersement` , `T0`.`chp_nom_fichier_sur_disque_televersement` , `T0`.`chp_nom_du_dossier_televersement` , 
        `T0`.`cht_comm_glob_televersement` , `T0`.`chp_comm_fichier_televersement` , `T0`.`chp_mime_televersement`
         FROM b1.tbl_televersements T0
        WHERE `T0`.`chi_id_televersement` = :T0_chi_id_televersement
        ;
        */
        /*sql_inclure_fin*/ 1168 , criteres_1168 , __db1 );
        if(tt1168.__xst !== __xsu || tt1168.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : tt1168.__xme});
        }
        if(!this.__ig1.donnees_retournees.chi_id_utilisateur === tt1168[__xva][0][''T0_chx_utilisateur_televersement'']){
            return({"__xst" : __xer ,"__xme" : "ce n''est pas vous qui avez téléversé ce fichier en conséquence, vous ne pouvez par le supprimer"});
        }
        /* this.__ig1.ma_trace1("tt1168.__xva=",tt1168.__xva); */
        await this.__ig1.__fnt1.supprimer_fichier_sans_sauvegarde( ''/__fichiers_binaires'' + tt1168[__xva][0][''T0_chp_nom_du_dossier_televersement''] + tt1168[__xva][0][''T0_chp_nom_fichier_sur_disque_televersement''] , false );
        /*  */
        let criteres_1170={
             /*  */
            "chi_id_televersement" : chi_id_televersement
        };
        let tt1170=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_televersements
        WHERE `chi_id_televersement` = :chi_id_televersement
        */
        /*sql_inclure_fin*/ 1170 , criteres_1170 , __db1 );
        /*  */
        if(tt1170.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1170.__xme});
        }
        /*  */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recup_chi_id_televersement( criteres_select_1168 , __db1 ){
        let tt1168=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_televersement` , `T0`.`che_bdd_televersement` , `T0`.`chp_nom_table_televersement` , `T0`.`che_id_element_televersement` , `T0`.`chx_utilisateur_televersement` , 
        `T0`.`chp_champ_cle_televersement` , `T0`.`chp_nom_original_televersement` , `T0`.`che_poids_televersement` , `T0`.`chp_nom_fichier_sur_disque_televersement` , `T0`.`chp_nom_du_dossier_televersement` , 
        `T0`.`cht_comm_glob_televersement` , `T0`.`chp_comm_fichier_televersement` , `T0`.`chp_mime_televersement`
         FROM b1.tbl_televersements T0
        WHERE `T0`.`chi_id_televersement` = :T0_chi_id_televersement
        ;
        */
        /*sql_inclure_fin*/ 1168 , criteres_select_1168 , __db1 );
        return tt1168;
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d ){
        this.__ig1.ma_trace1( "this.__ig1.donnees_recues.__xva=" , this.__ig1.donnees_recues.__xva );
        let nom_formulaire=this.__ig1.donnees_recues.__xva.__co1;
        let fo1=this.__ig1.donnees_recues.__xva.__fo1[nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        this.__ig1.ma_trace1( "fo1=" , fo1 );
        let criteres_1223={
             /*  */
            "c_chi_id_televersement" : parseInt( fo1.chi_id_televersement , 10 ) ,
            "n_chp_comm_fichier_televersement" : fo1.chp_comm_fichier_televersement === '''' ? ( null ) : ( fo1.chp_comm_fichier_televersement )
        };
        this.__ig1.ma_trace1( "criteres_1223=" , criteres_1223 );
        let tt1223=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_televersements SET 
           `chp_comm_fichier_televersement` = :n_chp_comm_fichier_televersement
        WHERE `chi_id_televersement` = :c_chi_id_televersement ;
        */
        /*sql_inclure_fin*/ 1223 , criteres_1223 , __db1 );
        if(tt1223.__xst !== __xsu || tt1223[''changements''] !== 1){
            return({"__xst" : __xer ,"__xme" : tt1223.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_editer1( mat , d ){
        let chi_id_televersement=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_televersement'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_televersement=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_televersement === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let criteres_select_1168={"T0_chi_id_televersement" : chi_id_televersement};
        let tt1168=await this.recup_chi_id_televersement( criteres_select_1168 , __db1 );
        if(tt1168.__xst !== __xsu || tt1168.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé :  [1168 '' + this.__ig1.nl2() + '']''});
        }
        this.__ig1.donnees_retournees[__xva][''page_editer1'']=tt1168;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_televersement=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_televersement'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_televersement=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_televersement === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let criteres_select_1168={"T0_chi_id_televersement" : chi_id_televersement};
        let tt1168=await this.recup_chi_id_televersement( criteres_select_1168 , __db1 );
        if(tt1168.__xst !== __xsu || tt1168.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé :  [1168 '' + this.__ig1.nl2() + '']''});
        }
        this.__ig1.donnees_retournees[__xva][''page_confirmation_supprimer1'']=tt1168;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{__televersement2 as __televersement2};','0','2',NULL,'0',NULL,NULL,NULL,'1','0','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1037','parametres1_s.js','definition_de_classe(
   nom_classe(parametres1),
   contenu(
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(signaler_une_erreur_asynchrone),argument(le_message)),
         contenu(
            boucle(
               initialisation(declare_variable(i,0)),
               condition(inf(i,this.__ig1.options_generales.les_clients_du_ws.length)),
               increment(i++),
               faire(
                  declare_variable(
                     le_colis,
                     obj(
                        #(  ),
                        ("__xst",__xsu),
                        (
                           "__xsi",
                           obj(
                              (0,[le_message]),
                              (1,[]),
                              (2,[]),
                              (3,[]),
                              (4,[])
                           )
                        ),
                        ("__xva",obj()),
                        ("__xac",'''')
                     )
                  ),
                  essayer(
                     faire(
                        appelf(
                           element(this.__ig1.options_generales.les_clients_du_ws[i].socket),
                           nomf(send),
                           p(appelf(element(JSON),nomf(stringify),p(le_colis)))
                        )
                     ),
                     sierreur(null(),faire())
                  )
               )
            )
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(
            nom(actions_et_tests_apres_page_voir),
            asynchrone(),
            argument(mat),
            argument(d),
            argument(__xva_avant),
            argument(__db1)
         ),
         contenu(
            declare_variable(
               criteres_select_1186,
               obj(
                  ("T0_chx_parametre_grandeur",tableau(nomt(__xva_avant),p(''T0_chi_id_parametre'')))
               )
            ),
            declare_variable(
               tt1186,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1186),
                     p(criteres_select_1186),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(diffstricte(tt1186.__xst,__xsu)),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''erreur [1186 '',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            affecte(tableau(nomt(this.__ig1.donnees_retournees.__xva),p(''parametres_actuels'')),tt1186.__xva),
            retourner(obj(("__xst",__xsu),("",tt1186.__xva)))
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(
            nom(produire_les_json_des_paramètres),
            asynchrone(),
            argument(mat),
            argument(d),
            argument(chi_id_bdd)
         ),
         contenu(
            #(
              appel asynchrone
            ),
            declare_variable(chemin_bdd_1,concat(''./__bases_de_donnees/bdd_'',chi_id_bdd,''.sqlite'')),
            declare_variable(__db1,null),
            essayer(
               faire(
                  affecte(
                     __db1,
                     new(
                        appelf(
                           nomf(Database),
                           p(chemin_bdd_1),
                           p(obj(("create",false)))
                        )
                     )
                  )
               ),
               sierreur(
                  e,
                  faire(
                     appelf(
                        element(this),
                        nomf(signaler_une_erreur_asynchrone),
                        p(appelf(element(this.__ig1),nomf(nl2),p()))
                     ),
                     retourner(
                        obj(
                           ("__xst",__xer),
                           ("__xme",appelf(element(this.__ig1),nomf(nl2),p(e)))
                        )
                     )
                  )
               )
            ),
            declare_variable(chemin_fichier__liste_des_grandeurs,concat(''./__fichiers_generes/__json_des_grandeurs_de_la_base_'',chi_id_bdd,''_.json'')),
            declare_variable(__json_des_parametres_de_la_base,obj()),
            declare_variable(
               tt1224,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1224),
                     p(obj()),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(diffstricte(tt1224.__xst,__xsu)),
                  alors(
                     appelf(element(__db1),nomf(close),p()),
                     appelf(
                        element(this),
                        nomf(signaler_une_erreur_asynchrone),
                        p(appelf(element(this.__ig1),nomf(nl2),p()))
                     ),
                     retourner(obj(("__xst",__xer),("__xme",tt1224.__xme)))
                  )
               )
            ),
            declare_variable(chx_parametre_grandeur,0),
            declare_variable(__liste_des_grandeurs,obj()),
            declare_variable(liste_des_complements,obj()),
            boucle_sur_objet_dans(
               pourChaque(dans(declare_variable(i,null()),tt1224.__xva)),
               faire(
                  choix(
                     si(
                        condition(diffstricte(tt1224.__xva[i].T0_chx_parametre_grandeur,chx_parametre_grandeur)),
                        alors(
                           affecte(chx_parametre_grandeur,tt1224.__xva[i].T0_chx_parametre_grandeur),
                           affecte(liste_des_complements,obj()),
                           choix(
                              si(
                                 condition(diffstricte(tt1224.__xva[i].T1_cht_rev_parametre,''#()'')),
                                 alors(
                                    declare_variable(le_rev_texte,tt1224.__xva[i].T1_cht_rev_parametre),
                                    declare_variable(obj1,appelf(element(this.__ig1.__rev1),nomf(t2m),p(le_rev_texte))),
                                    choix(
                                       si(
                                          condition(diffstricte(obj1.__xst,__xsu)),
                                          alors(
                                             appelf(element(__db1),nomf(close),p()),
                                             appelf(
                                                element(this),
                                                nomf(signaler_une_erreur_asynchrone),
                                                p(
                                                   concat("erreur de conversion de paramètre \"",le_rev_texte,''"'',appelf(element(this.__ig1),nomf(nl2),p()))
                                                )
                                             ),
                                             retourner(
                                                obj(("__xst",__xer),("__xme",concat("erreur de conversion de paramètre \"",le_rev_texte,''"'')))
                                             )
                                          )
                                       )
                                    ),
                                    declare_variable(mat1,obj1.__xva),
                                    declare_constante(l01,mat1.length),
                                    boucle(
                                       initialisation(declare_variable(j,1)),
                                       condition(inf(j,l01)),
                                       increment(affecte(j,mat1[j][12])),
                                       faire(
                                          choix(
                                             si(
                                                condition(et(egalstricte(mat1[j][1],''champs_des_parametres''),egalstricte(mat1[j][2],''f''))),
                                                alors(
                                                   boucle(
                                                      initialisation(declare_variable(k,plus(j,1))),
                                                      condition(inf(k,l01)),
                                                      increment(affecte(k,mat1[k][12])),
                                                      faire(
                                                         choix(
                                                            si(
                                                               condition(et(egalstricte(mat1[k][1],''#''),egalstricte(mat1[k][2],''f''))),
                                                               alors()
                                                            ),
                                                            sinonsi(
                                                               condition(egalstricte(mat1[k][2],''f'')),
                                                               alors(
                                                                  declare_variable(nom_du_complement,mat1[k][1]),
                                                                  declare_variable(genre_du_parametre,0),
                                                                  declare_variable(libelle,''''),
                                                                  boucle(
                                                                     initialisation(declare_variable(l,plus(k,1))),
                                                                     condition(inf(l,l01)),
                                                                     increment(affecte(l,mat1[l][12])),
                                                                     faire(
                                                                        choix(
                                                                           si(
                                                                              condition(
                                                                                 et(
                                                                                    egalstricte(mat1[l][1],''genre_du_parametre''),
                                                                                    egalstricte(mat1[l][2],''f''),
                                                                                    egalstricte(mat1[l][8],1),
                                                                                    egalstricte(
                                                                                       tableau(
                                                                                          nomt(
                                                                                             tableau(nomt(mat1),p(plus(l,1)))
                                                                                          ),
                                                                                          p(2)
                                                                                       ),
                                                                                       ''c''
                                                                                    )
                                                                                 )
                                                                              ),
                                                                              alors(
                                                                                 affecte(
                                                                                    genre_du_parametre,
                                                                                    appelf(
                                                                                       nomf(parseInt),
                                                                                       p(
                                                                                          tableau(
                                                                                             nomt(
                                                                                                tableau(nomt(mat1),p(plus(l,1)))
                                                                                             ),
                                                                                             p(1)
                                                                                          )
                                                                                       ),
                                                                                       p(10)
                                                                                    )
                                                                                 )
                                                                              )
                                                                           ),
                                                                           sinonsi(
                                                                              condition(et(egalstricte(mat1[l][1],''#''),egalstricte(mat1[l][2],''f''))),
                                                                              alors(affecte(libelle,mat1[l][13]))
                                                                           )
                                                                        )
                                                                     )
                                                                  ),
                                                                  affecte(liste_des_complements[nom_du_complement],obj(("genre_du_parametre",genre_du_parametre),("libelle",libelle)))
                                                               )
                                                            )
                                                         )
                                                      )
                                                   )
                                                )
                                             )
                                          )
                                       )
                                    )
                                 )
                              )
                           )
                        )
                     )
                  ),
                  affecte(
                     __liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur],
                     obj(
                        ("__cle",tt1224.__xva[i].T0_chp_cle_grandeur),
                        ("__rev",tt1224.__xva[i].T0_cht_rev_grandeur),
                        ("__actif",tt1224.__xva[i].T0_che_actif_grandeur),
                        ("__couleur_texte",tt1224.__xva[i].T0_chc_couleur_texte_grandeur),
                        ("__couleur_fond",tt1224.__xva[i].T0_chc_couleur_fond_grandeur),
                        ("__liste_des_parametres",[])
                     )
                  ),
                  choix(
                     si(
                        condition(diffstricte(tt1224.__xva[i].T0_cht_rev_grandeur,''0'')),
                        alors(
                           declare_variable(objt,appelf(element(this.__ig1.__rev1),nomf(t2m),p(tt1224.__xva[i].T0_cht_rev_grandeur))),
                           choix(
                              si(
                                 condition(egalstricte(objt.__xst,__xsu)),
                                 alors(
                                    declare_constante(l01,objt.__xva.length),
                                    boucle(
                                       initialisation(declare_variable(j,1)),
                                       condition(inf(j,l01)),
                                       increment(affecte(j,objt.__xva[j][12])),
                                       faire(
                                          choix(
                                             si(
                                                condition(
                                                   et(
                                                      egalstricte(objt.__xva[j][2],''f''),
                                                      egalstricte(objt.__xva[j][8],1),
                                                      egalstricte(
                                                         tableau(
                                                            nomt(
                                                               tableau(nomt(objt.__xva),p(plus(j,1)))
                                                            ),
                                                            p(2)
                                                         ),
                                                         ''c''
                                                      )
                                                   )
                                                ),
                                                alors(
                                                   choix(
                                                      si(
                                                         condition(appelf(element(liste_des_complements),nomf(hasOwnProperty),p(objt.__xva[j][1]))),
                                                         alors(
                                                            appelf(
                                                               element(tableau(nomt(__liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur]),p(''__liste_des_parametres''))),
                                                               nomf(push),
                                                               p(
                                                                  obj(
                                                                     #(  ),
                                                                     ("__nom",objt.__xva[j][1]),
                                                                     ("genre_du_parametre",tableau(nomt(liste_des_complements),p(objt.__xva[j][1]),prop(genre_du_parametre))),
                                                                     ("libelle",tableau(nomt(liste_des_complements),p(objt.__xva[j][1]),prop(libelle)))
                                                                  )
                                                               )
                                                            )
                                                         )
                                                      )
                                                   ),
                                                   choix(
                                                      si(
                                                         condition(
                                                            appelf(
                                                               element(this.__ig1),
                                                               nomf(est_num),
                                                               p(
                                                                  tableau(
                                                                     nomt(
                                                                        tableau(nomt(objt.__xva),p(plus(j,1)))
                                                                     ),
                                                                     p(1)
                                                                  )
                                                               )
                                                            )
                                                         ),
                                                         alors(
                                                            choix(
                                                               si(
                                                                  condition(
                                                                     appelf(
                                                                        element(this.__ig1),
                                                                        nomf(est_entier_positif),
                                                                        p(
                                                                           tableau(
                                                                              nomt(
                                                                                 tableau(nomt(objt.__xva),p(plus(j,1)))
                                                                              ),
                                                                              p(1)
                                                                           )
                                                                        )
                                                                     )
                                                                  ),
                                                                  alors(
                                                                     affecte(
                                                                        tableau(nomt(__liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur]),p(objt.__xva[j][1])),
                                                                        appelf(
                                                                           nomf(parseInt),
                                                                           p(
                                                                              tableau(
                                                                                 nomt(
                                                                                    tableau(nomt(objt.__xva),p(plus(j,1)))
                                                                                 ),
                                                                                 p(1)
                                                                              )
                                                                           ),
                                                                           p(10)
                                                                        )
                                                                     )
                                                                  )
                                                               ),
                                                               sinon(
                                                                  alors(
                                                                     affecte(
                                                                        tableau(nomt(__liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur]),p(objt.__xva[j][1])),
                                                                        appelf(
                                                                           nomf(parseFloat),
                                                                           p(
                                                                              tableau(
                                                                                 nomt(
                                                                                    tableau(nomt(objt.__xva),p(plus(j,1)))
                                                                                 ),
                                                                                 p(1)
                                                                              )
                                                                           )
                                                                        )
                                                                     )
                                                                  )
                                                               )
                                                            )
                                                         )
                                                      ),
                                                      sinon(
                                                         alors(
                                                            affecte(
                                                               tableau(nomt(__liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur]),p(objt.__xva[j][1])),
                                                               tableau(
                                                                  nomt(
                                                                     tableau(nomt(objt.__xva),p(plus(j,1)))
                                                                  ),
                                                                  p(1)
                                                               )
                                                            )
                                                         )
                                                      )
                                                   )
                                                )
                                             )
                                          )
                                       )
                                    )
                                 )
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(
               contenu_fichier__json_des_parametres_de_la_base,
               concat(
                  '''',
                  appelf(
                     element(JSON),
                     nomf(stringify),
                     p(__liste_des_grandeurs),
                     p(null),
                     p(2)
                  )
               )
            ),
            essayer(
               faire(
                  await(appelf(element(this.__ig1),nomf(file_put_contents),p(chemin_fichier__liste_des_grandeurs),p(contenu_fichier__json_des_parametres_de_la_base)))
               ),
               sierreur(
                  null(),
                  faire(
                     appelf(element(__db1),nomf(close),p()),
                     appelf(
                        element(this),
                        nomf(signaler_une_erreur_asynchrone),
                        p(
                           concat(''erreur d\''écriture du fichier json des genres ['',appelf(element(this.__ig1),nomf(nl2),p(e)),'']'')
                        )
                     ),
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''erreur d\''écriture du fichier json des genres ['',appelf(element(this.__ig1),nomf(nl2),p(e)),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            boucle(
               initialisation(declare_variable(i,0)),
               condition(inf(i,this.__ig1.options_generales.les_clients_du_ws.length)),
               increment(i++),
               faire(
                  declare_variable(
                     le_colis,
                     obj(
                        ("__xst",__xsu),
                        (
                           "__xsi",
                           obj(
                              (0,defTab(p(''maj __liste_des_grandeurs par une autre session''))),
                              (1,[]),
                              (2,[]),
                              (3,[]),
                              (4,[])
                           )
                        ),
                        ("__xva",obj()),
                        ("__xac",''''),
                        ("__liste_des_grandeurs",__liste_des_grandeurs),
                        ("__base_des_grandeurs",chi_id_bdd),
                        ("__maj_interactive_des_grandeurs",1)
                     )
                  ),
                  essayer(
                     faire(
                        appelf(
                           element(this.__ig1.options_generales.les_clients_du_ws[i].socket),
                           nomf(send),
                           p(appelf(element(JSON),nomf(stringify),p(le_colis)))
                        )
                     ),
                     sierreur(null(),faire())
                  )
               )
            ),
            appelf(element(__db1),nomf(close),p())
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(nom(supprimer_une_grandeur1),asynchrone(),argument(mat),argument(d)),
         contenu(
            declare_variable(chi_id_grandeur,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(infeg(chi_id_grandeur,0)),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           ("__xme",appelf(element(this.__ig1),nomf(nl2),p()))
                        )
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(infeg(chi_id_grandeur,20000)),
                  alors(
                     retourner(obj(("__xst",__xer),("__xme",''on ne peut pas supprimer la grandeur 20000'')))
                  )
               )
            ),
            declare_variable(
               __db1,
               await(appelf(element(this.__ig1),nomf(ouvrir_bdd),p(this.__ig1.options_generales.base_de_travail)))
            ),
            declare_variable(
               criteres_1202,
               obj(
                  #(  ),
                  ("T0_chi_id_grandeur",chi_id_grandeur)
               )
            ),
            declare_variable(
               tt1202,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1202),
                     p(criteres_1202),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1202.__xst,__xsu),diffstricte(tt1202.__xva.length,1))),
                  alors(
                     retourner(obj(("__xst",__xer),("__xme",tt1202.__xme)))
                  )
               )
            ),
            declare_variable(
               criteres_1214,
               obj(
                  #(  ),
                  ("chi_id_grandeur",chi_id_grandeur)
               )
            ),
            declare_variable(
               tt1214,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1214),
                     p(criteres_1214),
                     p(__db1)
                  )
               )
            ),
            #(  ),
            choix(
               si(
                  condition(diffstricte(tt1214.__xst,__xsu)),
                  alors(
                     retourner(obj(("__xst",__xer),("__xme",tt1214.__xme)))
                  )
               )
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(nom(vv_grandeurs_nouveau_numero1),asynchrone(),argument(mat),argument(d)),
         contenu(
            declare_variable(chi_id_grandeur_ancienne,0),
            declare_variable(chi_id_grandeur_nouvelle,0),
            declare_variable(nom_formulaire,tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__co1''))),
            declare_variable(
               form,
               tableau(
                  nomt(tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__fo1''))),
                  p(nom_formulaire)
               )
            ),
            choix(
               si(
                  condition(
                     et(
                        tableau(nomt(form),p(''vv_nouveau_numero_de_grandeur'')),
                        appelf(
                           element(this.__ig1),
                           nomf(est_num),
                           p(tableau(nomt(form),p(''vv_nouveau_numero_de_grandeur'')))
                        )
                     )
                  ),
                  alors(
                     affecte(
                        chi_id_grandeur_nouvelle,
                        appelf(
                           nomf(parseInt),
                           p(tableau(nomt(form),p(''vv_nouveau_numero_de_grandeur''))),
                           p(10)
                        )
                     )
                  )
               ),
               sinon(
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat('' le nouveau numéro doit être numérique ['',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(infeg(chi_id_grandeur_nouvelle,20000)),
                  alors(
                     retourner(obj(("__xst",__xer),("__xme",''on ne peut pas donner à une grandeur une valeur inférieure à 20 000'')))
                  )
               )
            ),
            choix(
               si(
                  condition(
                     et(
                        tableau(nomt(form),p(''vv_ancien_numero_de_grandeur'')),
                        appelf(
                           element(this.__ig1),
                           nomf(est_num),
                           p(tableau(nomt(form),p(''vv_ancien_numero_de_grandeur'')))
                        )
                     )
                  ),
                  alors(
                     affecte(
                        chi_id_grandeur_ancienne,
                        appelf(
                           nomf(parseInt),
                           p(tableau(nomt(form),p(''vv_ancien_numero_de_grandeur''))),
                           p(10)
                        )
                     )
                  )
               ),
               sinon(
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''l\''ancien numéro doit être numérique ['',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(infeg(chi_id_grandeur_ancienne,20000)),
                  alors(
                     retourner(obj(("__xst",__xer),("__xme",''on ne peut pas renuméroter la grandeur 20 000'')))
                  )
               )
            ),
            declare_variable(
               __db1,
               await(appelf(element(this.__ig1),nomf(ouvrir_bdd),p(this.__ig1.options_generales.base_de_travail)))
            ),
            #(
              Essai de récupération de la nouvelle grandeur.
            ),
            declare_variable(criteres_1202_2,obj(("T0_chi_id_grandeur",chi_id_grandeur_nouvelle))),
            declare_variable(
               tt1202_2,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1202),
                     p(criteres_1202_2),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(diffstricte(tt1202_2.__xst,__xsu)),
                  alors(
                     appelf(
                        element(this.__ig1.donnees_retournees.__xsi[__xer]),
                        nomf(push),
                        p(
                           concat(''Erreur de sélection de la grandeur nouvelle ['',appelf(element(this.__ig1),nomf(nl2),p()))
                        )
                     ),
                     retourner(obj(("__xst",__xer),("__xme",tt1202_2.__xme)))
                  )
               )
            ),
            choix(
               si(
                  condition(supeg(tt1202_2[__xva].length,1)),
                  alors(
                     #(
                       c''est une erreur si la grandeur existe déjà en base.
                     ),
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''la grandeur portant le numéro '',chi_id_grandeur_nouvelle,'' existe déjà ['',appelf(element(this.__ig1),nomf(nl2),p()))
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(
               criteres_1213,
               obj(
                  #(  ),
                  ("c_chi_id_grandeur",chi_id_grandeur_ancienne),
                  ("n_chi_id_grandeur",chi_id_grandeur_nouvelle)
               )
            ),
            #( =========================== mise à jour effective ======================== ),
            declare_variable(
               tt1213,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1213),
                     p(criteres_1213),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1213.__xst,__xsu),diffstricte(tt1213.changements,1))),
                  alors(
                     retourner(obj(("__xst",__xer),("__xme",tt1213.__xme)))
                  )
               )
            ),
            appelf(
               element(this),
               nomf(produire_les_json_des_paramètres),
               p(mat),
               p(d),
               p(1)
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(nom(enregistrer_l_ordre_des_grandeurs2),asynchrone(),argument(mat),argument(d)),
         contenu(
            declare_variable(
               __db1,
               await(appelf(element(this.__ig1),nomf(ouvrir_bdd),p(this.__ig1.options_generales.base_de_travail)))
            ),
            declare_variable(
               criteres_1189,
               obj(
                  #(  ),
                  ("c_chi_id_parametre",this.__ig1.donnees_recues.__xva.chi_id_parametre_en_cours_de_trie),
                  ("n_cht_ordre_parametre",this.__ig1.donnees_recues.__xva.nouvel_ordre)
               )
            ),
            #( =========================== mise à jour effective ======================== ),
            declare_variable(
               tt1189,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1189),
                     p(criteres_1189),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1189.__xst,__xsu),diffstricte(tt1189.changements,1))),
                  alors(
                     retourner(obj(("__xst",__xer),("__xme",tt1189.__xme)))
                  )
               )
            ),
            appelf(
               element(this),
               nomf(produire_les_json_des_paramètres),
               p(mat),
               p(d),
               p(1)
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(nom(modifier_la_valeur_de2),asynchrone(),argument(mat),argument(d)),
         contenu(
            declare_variable(chi_id_parametre,0),
            declare_variable(chi_id_grandeur,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(nom_formulaire,tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__co1''))),
            declare_variable(
               form,
               tableau(
                  nomt(tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__fo1''))),
                  p(nom_formulaire)
               )
            ),
            declare_variable(
               __db1,
               await(appelf(element(this.__ig1),nomf(ouvrir_bdd),p(this.__ig1.options_generales.base_de_travail)))
            ),
            declare_variable(criteres_select_1182,obj(("T0_chi_id_parametre",chi_id_parametre))),
            declare_variable(
               tt1182,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1182),
                     p(criteres_select_1182),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1182.__xst,__xsu),diffstricte(tt1182.__xva.length,1))),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''enregistrement non trouvé : aucune modification effectuée [1182 '',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(liste_des_champs_a_pourvoir,[]),
            declare_variable(cht_rev_parametre,tableau(nomt(tt1182.__xva[0]),p(''T0_cht_rev_parametre''))),
            choix(
               si(
                  condition(et(diffstricte(cht_rev_parametre,''''),diffstricte(cht_rev_parametre,null))),
                  alors(
                     declare_variable(obj_mat2,appelf(element(this.__ig1.__rev1),nomf(t2m),p(cht_rev_parametre))),
                     choix(
                        si(
                           condition(diffstricte(obj_mat2.__xst,__xsu)),
                           alors(
                              retourner(
                                 obj(
                                    ("__xst",__xer),
                                    (
                                       "__xme",
                                       concat(
                                          ''erreur de conversion de '',
                                          cht_rev_parametre,
                                          '' ['',
                                          appelf(element(this.__ig1),nomf(nl2),p()),
                                          '']''
                                       )
                                    )
                                 )
                              )
                           )
                        )
                     ),
                     declare_variable(mat2,obj_mat2.__xva),
                     declare_variable(l02,mat2.length),
                     boucle(
                        initialisation(declare_variable(i,1)),
                        condition(inf(i,l02)),
                        increment(affecte(i,mat2[i][12])),
                        faire(
                           choix(
                              si(
                                 condition(et(egalstricte(mat2[i][1],''champs_des_parametres''),egalstricte(mat2[i][2],''f''))),
                                 alors(
                                    boucle(
                                       initialisation(declare_variable(j,plus(i,1))),
                                       condition(inf(j,l02)),
                                       increment(affecte(j,mat2[j][12])),
                                       faire(
                                          choix(
                                             si(
                                                condition(egalstricte(mat2[j][2],''f'')),
                                                alors(appelf(element(liste_des_champs_a_pourvoir),nomf(push),p(mat2[j][1])))
                                             )
                                          )
                                       )
                                    )
                                 )
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(criteres_select_1191,obj(("T0_chi_id_grandeur",chi_id_grandeur))),
            declare_variable(
               tt1191,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1191),
                     p(criteres_select_1191),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1191.__xst,__xsu),diffstricte(tt1191.__xva.length,1))),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''enregistrement non trouvé : aucune modification effectuée [1191 '',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(nom_de_la_propriete,''''),
            boucle_sur_objet_dans(
               pourChaque(dans(declare_variable(i,null()),form)),
               faire(
                  choix(
                     si(
                        condition(
                           egalstricte(appelf(element(i),nomf(substr),p(0),p(21)),''__le_nom_de_la_valeur'')
                        ),
                        alors(affecte(nom_de_la_propriete,form[i]),break())
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(
                     et(
                        appelf(element(form),nomf(hasOwnProperty),p(concat(nom_de_la_propriete,''_'',chi_id_grandeur))),
                        diffstricte(
                           tableau(nomt(form),p(concat(nom_de_la_propriete,''_'',chi_id_grandeur))),
                           ''''
                        )
                     )
                  ),
                  alors(
                     declare_variable(
                        nouvelle_valeur,
                        tableau(nomt(form),p(concat(nom_de_la_propriete,''_'',chi_id_grandeur)))
                     ),
                     declare_variable(nouveau_rev_de_la_grandeur,''''),
                     choix(
                        si(
                           condition(
                              egalstricte(tableau(nomt(tt1191.__xva[0]),p(''T0_cht_rev_grandeur'')),''0'')
                           ),
                           alors(
                              #( l''ancien paramètre n''avait pas de valeur ),
                              choix(
                                 si(
                                    condition(diffstricte(nouvelle_valeur,'''')),
                                    alors(
                                       choix(
                                          si(
                                             condition(appelf(element(this.__ig1),nomf(est_num),p(nouvelle_valeur))),
                                             alors(affecte(nouveau_rev_de_la_grandeur,concat(nom_de_la_propriete,''('',nouvelle_valeur,'')'')))
                                          ),
                                          sinon(
                                             alors(
                                                affecte(
                                                   nouveau_rev_de_la_grandeur,
                                                   concat(
                                                      nom_de_la_propriete,
                                                      ''(\'''',
                                                      appelf(
                                                         element(appelf(element(nouvelle_valeur),nomf(replace),p(/\\/g),p(''\\\\''))),
                                                         nomf(replace),
                                                         p(/\''/g),
                                                         p(''\\\'''')
                                                      ),
                                                      ''\'')''
                                                   )
                                                )
                                             )
                                          )
                                       )
                                    )
                                 )
                              )
                           )
                        ),
                        sinon(
                           alors(
                              declare_variable(liste_des_indices_a_supprimer,[]),
                              declare_variable(
                                 obj_ancien_rev,
                                 appelf(
                                    element(this.__ig1.__rev1),
                                    nomf(t2m),
                                    p(tableau(nomt(tt1191.__xva[0]),p(''T0_cht_rev_grandeur'')))
                                 )
                              ),
                              choix(
                                 si(
                                    condition(diffstricte(obj_ancien_rev.__xst,__xsu)),
                                    alors(
                                       retourner(
                                          obj(
                                             ("__xst",__xer),
                                             (
                                                "__xme",
                                                concat(
                                                   ''erreur de conversion de '',
                                                   tableau(nomt(tt1191.__xva[0]),p(''T0_cht_rev_grandeur'')),
                                                   '' [ '',
                                                   appelf(element(this.__ig1),nomf(nl2),p()),
                                                   '']''
                                                )
                                             )
                                          )
                                       )
                                    )
                                 )
                              ),
                              declare_variable(mat2,obj_ancien_rev.__xva),
                              declare_variable(l02,mat2.length),
                              boucle(
                                 initialisation(declare_variable(i,1)),
                                 condition(inf(i,l02)),
                                 increment(affecte(i,mat2[i][12])),
                                 faire(
                                    choix(
                                       si(
                                          condition(
                                             et(
                                                egalstricte(mat2[i][1],nom_de_la_propriete),
                                                egalstricte(mat2[i][2],''f''),
                                                egalstricte(mat2[i][8],1),
                                                egalstricte(
                                                   tableau(
                                                      nomt(
                                                         tableau(nomt(mat2),p(plus(i,1)))
                                                      ),
                                                      p(2)
                                                   ),
                                                   ''c''
                                                )
                                             )
                                          ),
                                          alors(
                                             choix(
                                                si(
                                                   condition(appelf(element(this.__ig1),nomf(est_num),p(nouvelle_valeur))),
                                                   alors(
                                                      affecte(
                                                         tableau(
                                                            nomt(
                                                               tableau(nomt(mat2),p(plus(i,1)))
                                                            ),
                                                            p(1)
                                                         ),
                                                         nouvelle_valeur
                                                      ),
                                                      affecte(
                                                         tableau(
                                                            nomt(
                                                               tableau(nomt(mat2),p(plus(i,1)))
                                                            ),
                                                            p(4)
                                                         ),
                                                         0
                                                      )
                                                   )
                                                ),
                                                sinon(
                                                   alors(
                                                      affecte(
                                                         tableau(
                                                            nomt(
                                                               tableau(nomt(mat2),p(plus(i,1)))
                                                            ),
                                                            p(1)
                                                         ),
                                                         appelf(
                                                            element(appelf(element(nouvelle_valeur),nomf(replace),p(/\\/g),p(''\\\\''))),
                                                            nomf(replace),
                                                            p(/\''/g),
                                                            p(''\\\'''')
                                                         )
                                                      ),
                                                      affecte(
                                                         tableau(
                                                            nomt(
                                                               tableau(nomt(mat2),p(plus(i,1)))
                                                            ),
                                                            p(4)
                                                         ),
                                                         1
                                                      )
                                                   )
                                                )
                                             )
                                          )
                                       ),
                                       sinon(
                                          alors(
                                             choix(
                                                si(
                                                   condition(
                                                      non(appelf(element(liste_des_champs_a_pourvoir),nomf(includes),p(mat2[i][1])))
                                                   ),
                                                   alors(
                                                      #( on a supprimé ce champ ),
                                                      appelf(element(liste_des_indices_a_supprimer),nomf(push),p(i))
                                                   )
                                                )
                                             )
                                          )
                                       )
                                    )
                                 )
                              ),
                              declare_variable(mat3,null),
                              choix(
                                 si(
                                    condition(sup(liste_des_indices_a_supprimer.length,0)),
                                    alors(
                                       #(
                                         il faut enlever de la matrice les champs complémentaires supprimés 
                                         en commençant par la fin
                                       ),
                                       boucle(
                                          initialisation(declare_variable(i,moins(liste_des_indices_a_supprimer.length,1))),
                                          condition(supeg(i,0)),
                                          increment(i--),
                                          faire(
                                             affecte(
                                                mat3,
                                                appelf(
                                                   element(this.__ig1.__rev1),
                                                   nomf(supprimer_un_element_de_la_matrice),
                                                   p(mat2),
                                                   p(liste_des_indices_a_supprimer[i]),
                                                   p(0)
                                                )
                                             )
                                          )
                                       )
                                    )
                                 ),
                                 sinon(alors(affecte(mat3,mat2)))
                              ),
                              declare_variable(obj_nouveau_rev,appelf(element(this.__ig1.__rev1),nomf(m2t),p(mat3),p(0))),
                              choix(
                                 si(
                                    condition(diffstricte(obj_nouveau_rev.__xst,__xsu)),
                                    alors(
                                       retourner(
                                          obj(
                                             ("__xst",__xer),
                                             (
                                                "__xme",
                                                concat(
                                                   ''erreur de conversion de '',
                                                   tableau(nomt(tt1191.__xva[0]),p(''T0_cht_rev_grandeur'')),
                                                   '' [ '',
                                                   appelf(element(this.__ig1),nomf(nl2),p()),
                                                   '']''
                                                )
                                             )
                                          )
                                       )
                                    )
                                 )
                              ),
                              affecte(nouveau_rev_de_la_grandeur,obj_nouveau_rev.__xva)
                           )
                        )
                     ),
                     boucle(
                        initialisation(declare_variable(i,0)),
                        condition(inf(i,liste_des_champs_a_pourvoir.length)),
                        increment(i++),
                        faire(
                           choix(
                              si(
                                 condition(
                                    inf(
                                       appelf(element(nouveau_rev_de_la_grandeur),nomf(indexOf),p(concat(liste_des_champs_a_pourvoir[i],''(''))),
                                       0
                                    )
                                 ),
                                 alors(
                                    #( on a mis un nouveau champ qui n''est pas encore renseigné ),
                                    choix(
                                       si(
                                          condition(egalstricte(liste_des_champs_a_pourvoir[i],nom_de_la_propriete)),
                                          alors(
                                             choix(
                                                si(
                                                   condition(diffstricte(nouvelle_valeur,'''')),
                                                   alors(
                                                      choix(
                                                         si(
                                                            condition(appelf(element(this.__ig1),nomf(est_num),p(nouvelle_valeur))),
                                                            alors(affectop(''+='',nouveau_rev_de_la_grandeur,concat(nom_de_la_propriete,''('',nouvelle_valeur,'')'')))
                                                         ),
                                                         sinon(
                                                            alors(
                                                               affectop(
                                                                  ''+='',
                                                                  nouveau_rev_de_la_grandeur,
                                                                  concat(
                                                                     nom_de_la_propriete,
                                                                     ''(\'''',
                                                                     appelf(
                                                                        element(appelf(element(nouvelle_valeur),nomf(replace),p(/\\/g),p(''\\\\''))),
                                                                        nomf(replace),
                                                                        p(/\''/g),
                                                                        p(''\\\'''')
                                                                     ),
                                                                     ''\'')''
                                                                  )
                                                               )
                                                            )
                                                         )
                                                      )
                                                   )
                                                )
                                             )
                                          )
                                       )
                                    )
                                 )
                              )
                           )
                        )
                     ),
                     choix(
                        si(condition(egalstricte(nouveau_rev_de_la_grandeur,'''')),alors(affecte(nouveau_rev_de_la_grandeur,''0'')))
                     ),
                     declare_variable(
                        criteres_1192,
                        obj(
                           #(  ),
                           ("c_chi_id_grandeur",chi_id_grandeur),
                           ("n_cht_rev_grandeur",nouveau_rev_de_la_grandeur)
                        )
                     ),
                     #( =========================== mise à jour effective ======================== ),
                     declare_variable(
                        tt1192,
                        await(
                           appelf(
                              element(this.__ig1),
                              nomf(sql_iij),
                              p(1192),
                              p(criteres_1192),
                              p(__db1)
                           )
                        )
                     ),
                     choix(
                        si(
                           condition(ou(diffstricte(tt1192.__xst,__xsu),diffstricte(tt1192.changements,1))),
                           alors(
                              retourner(obj(("__xst",__xer),("__xme",tt1192.__xme)))
                           )
                        )
                     ),
                     appelf(
                        element(this),
                        nomf(produire_les_json_des_paramètres),
                        p(mat),
                        p(d),
                        p(1)
                     ),
                     retourner(obj(("__xst",__xsu)))
                  )
               )
            ),
            retourner(obj(("__xst",__xer)))
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(nom(modifier_verouille_de2),asynchrone(),argument(mat),argument(d)),
         contenu(
            choix(
               si(
                  condition(diffstricte(this.__ig1.donnees_retournees.chi_id_utilisateur,1)),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''seul l\''utilisateur principal peut vérouiller ou dévérouiller une grandeur '',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(chi_id_parametre,0),
            declare_variable(chi_id_grandeur,0),
            declare_variable(decallage_vertical,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''decallage_vertical''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              decallage_vertical,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(nom_formulaire,tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__co1''))),
            declare_variable(
               form,
               tableau(
                  nomt(tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__fo1''))),
                  p(nom_formulaire)
               )
            ),
            declare_variable(
               __db1,
               await(appelf(element(this.__ig1),nomf(ouvrir_bdd),p(this.__ig1.options_generales.base_de_travail)))
            ),
            declare_variable(criteres_select_1182,obj(("T0_chi_id_parametre",chi_id_parametre))),
            declare_variable(
               tt1182,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1182),
                     p(criteres_select_1182),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1182.__xst,__xsu),diffstricte(tt1182.__xva.length,1))),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''enregistrement non trouvé : aucune modification effectuée [1182 '',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(
                     et(
                        appelf(element(form),nomf(hasOwnProperty),p(concat(''che_verouillee_grandeur_'',chi_id_grandeur))),
                        diffstricte(
                           tableau(nomt(form),p(concat(''chp_cle_grandeur_'',chi_id_grandeur))),
                           ''''
                        )
                     )
                  ),
                  alors(
                     declare_variable(
                        criteres_1215,
                        obj(
                           #(  ),
                           ("c_chi_id_grandeur",chi_id_grandeur),
                           (
                              "n_che_verouillee_grandeur",
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(nomt(form),p(concat(''che_verouillee_grandeur_'',chi_id_grandeur)))
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     #( =========================== mise à jour effective ======================== ),
                     declare_variable(
                        tt1215,
                        await(
                           appelf(
                              element(this.__ig1),
                              nomf(sql_iij),
                              p(1215),
                              p(criteres_1215),
                              p(__db1)
                           )
                        )
                     ),
                     choix(
                        si(
                           condition(ou(diffstricte(tt1215.__xst,__xsu),diffstricte(tt1215.changements,1))),
                           alors(
                              retourner(obj(("__xst",__xer),("__xme",tt1215.__xme)))
                           )
                        )
                     ),
                     appelf(
                        element(this),
                        nomf(produire_les_json_des_paramètres),
                        p(mat),
                        p(d),
                        p(1)
                     ),
                     retourner(
                        obj(
                           ("__xst",__xsu),
                           ("__xva",obj(("decallage_vertical",decallage_vertical)))
                        )
                     )
                  )
               )
            ),
            retourner(obj(("__xst",__xer)))
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(nom(modifier_actif_de2),asynchrone(),argument(mat),argument(d)),
         contenu(
            declare_variable(chi_id_parametre,0),
            declare_variable(chi_id_grandeur,0),
            declare_variable(decallage_vertical,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''decallage_vertical''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              decallage_vertical,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(nom_formulaire,tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__co1''))),
            declare_variable(
               form,
               tableau(
                  nomt(tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__fo1''))),
                  p(nom_formulaire)
               )
            ),
            declare_variable(
               __db1,
               await(appelf(element(this.__ig1),nomf(ouvrir_bdd),p(this.__ig1.options_generales.base_de_travail)))
            ),
            declare_variable(criteres_select_1182,obj(("T0_chi_id_parametre",chi_id_parametre))),
            declare_variable(
               tt1182,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1182),
                     p(criteres_select_1182),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1182.__xst,__xsu),diffstricte(tt1182.__xva.length,1))),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''enregistrement non trouvé : aucune modification effectuée [1182 '',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(
                     et(
                        appelf(element(form),nomf(hasOwnProperty),p(concat(''che_actif_grandeur_'',chi_id_grandeur))),
                        diffstricte(
                           tableau(nomt(form),p(concat(''chp_cle_grandeur_'',chi_id_grandeur))),
                           ''''
                        )
                     )
                  ),
                  alors(
                     declare_variable(
                        criteres_1190,
                        obj(
                           #(  ),
                           ("c_chi_id_grandeur",chi_id_grandeur),
                           (
                              "n_che_actif_grandeur",
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(nomt(form),p(concat(''che_actif_grandeur_'',chi_id_grandeur)))
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     #( =========================== mise à jour effective ======================== ),
                     declare_variable(
                        tt1190,
                        await(
                           appelf(
                              element(this.__ig1),
                              nomf(sql_iij),
                              p(1190),
                              p(criteres_1190),
                              p(__db1)
                           )
                        )
                     ),
                     choix(
                        si(
                           condition(ou(diffstricte(tt1190.__xst,__xsu),diffstricte(tt1190.changements,1))),
                           alors(
                              retourner(obj(("__xst",__xer),("__xme",tt1190.__xme)))
                           )
                        )
                     ),
                     appelf(
                        element(this),
                        nomf(produire_les_json_des_paramètres),
                        p(mat),
                        p(d),
                        p(1)
                     ),
                     retourner(
                        obj(
                           ("__xst",__xsu),
                           ("__xva",obj(("decallage_vertical",decallage_vertical)))
                        )
                     )
                  )
               )
            ),
            retourner(obj(("__xst",__xer)))
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(nom(modifier_la_cle_de2),asynchrone(),argument(mat),argument(d)),
         contenu(
            declare_variable(chi_id_parametre,0),
            declare_variable(chi_id_grandeur,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(nom_formulaire,tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__co1''))),
            declare_variable(
               form,
               tableau(
                  nomt(tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__fo1''))),
                  p(nom_formulaire)
               )
            ),
            declare_variable(
               __db1,
               await(appelf(element(this.__ig1),nomf(ouvrir_bdd),p(this.__ig1.options_generales.base_de_travail)))
            ),
            declare_variable(criteres_select_1182,obj(("T0_chi_id_parametre",chi_id_parametre))),
            declare_variable(
               tt1182,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1182),
                     p(criteres_select_1182),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1182.__xst,__xsu),diffstricte(tt1182.__xva.length,1))),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''enregistrement non trouvé : aucune modification effectuée [1182 '',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(chc_couleur_texte_grandeur,null),
            choix(
               si(
                  condition(
                     appelf(element(form),nomf(hasOwnProperty),p(concat(''chc_couleur_texte_grandeur_'',chi_id_grandeur)))
                  ),
                  alors(
                     affecte(
                        chc_couleur_texte_grandeur,
                        tableau(nomt(form),p(concat(''chc_couleur_texte_grandeur_'',chi_id_grandeur)))
                     )
                  )
               )
            ),
            declare_variable(chc_couleur_fond_grandeur,null),
            choix(
               si(
                  condition(
                     appelf(element(form),nomf(hasOwnProperty),p(concat(''chc_couleur_fond_grandeur_'',chi_id_grandeur)))
                  ),
                  alors(
                     affecte(
                        chc_couleur_fond_grandeur,
                        tableau(nomt(form),p(concat(''chc_couleur_fond_grandeur_'',chi_id_grandeur)))
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(ou(egalstricte(chc_couleur_fond_grandeur,null),egalstricte(chc_couleur_texte_grandeur,null),egalstricte(chc_couleur_fond_grandeur,''''),egalstricte(chc_couleur_texte_grandeur,''''))),
                  alors(affecte(chc_couleur_fond_grandeur,null),affecte(chc_couleur_texte_grandeur,null))
               )
            ),
            choix(
               si(
                  condition(
                     et(
                        appelf(element(form),nomf(hasOwnProperty),p(concat(''chp_cle_grandeur_'',chi_id_grandeur))),
                        diffstricte(
                           tableau(nomt(form),p(concat(''chp_cle_grandeur_'',chi_id_grandeur))),
                           ''''
                        )
                     )
                  ),
                  alors(
                     declare_variable(
                        criteres_1188,
                        obj(
                           #(  ),
                           ("c_chi_id_grandeur",chi_id_grandeur),
                           (
                              "n_chp_cle_grandeur",
                              tableau(nomt(form),p(concat(''chp_cle_grandeur_'',chi_id_grandeur)))
                           ),
                           ("n_chc_couleur_texte_grandeur",chc_couleur_texte_grandeur),
                           ("n_chc_couleur_fond_grandeur",chc_couleur_fond_grandeur)
                        )
                     ),
                     #( =========================== mise à jour effective ======================== ),
                     declare_variable(
                        tt1188,
                        await(
                           appelf(
                              element(this.__ig1),
                              nomf(sql_iij),
                              p(1188),
                              p(criteres_1188),
                              p(__db1)
                           )
                        )
                     ),
                     choix(
                        si(
                           condition(ou(diffstricte(tt1188.__xst,__xsu),diffstricte(tt1188.changements,1))),
                           alors(
                              retourner(obj(("__xst",__xer),("__xme",tt1188.__xme)))
                           )
                        )
                     ),
                     appelf(
                        element(this),
                        nomf(produire_les_json_des_paramètres),
                        p(mat),
                        p(d),
                        p(1)
                     ),
                     retourner(obj(("__xst",__xsu)))
                  )
               )
            ),
            retourner(obj(("__xst",__xer)))
         )
      ),
      #(
        =========================== fragment ========================================================================
      ),
      méthode(
         definition(nom(enregister_nouveau_parametre1),asynchrone(),argument(mat),argument(d)),
         contenu(
            declare_variable(chi_id_parametre,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(nom_formulaire,tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__co1''))),
            declare_variable(
               form,
               tableau(
                  nomt(tableau(nomt(this.__ig1.donnees_recues[__xva]),p(''__fo1''))),
                  p(nom_formulaire)
               )
            ),
            declare_variable(
               __db1,
               await(appelf(element(this.__ig1),nomf(ouvrir_bdd),p(this.__ig1.options_generales.base_de_travail)))
            ),
            declare_variable(criteres_select_1182,obj(("T0_chi_id_parametre",chi_id_parametre))),
            declare_variable(
               tt1182,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1182),
                     p(criteres_select_1182),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1182.__xst,__xsu),diffstricte(tt1182.__xva.length,1))),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''enregistrement non trouvé : aucune modification effectuée [1182 '',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(
               obj_mat2,
               appelf(
                  element(this.__ig1.__rev1),
                  nomf(t2m),
                  p(tableau(nomt(tt1182.__xva[0]),p(''T0_cht_rev_parametre'')))
               )
            ),
            choix(
               si(
                  condition(diffstricte(obj_mat2.__xst,__xsu)),
                  alors(
                     retourner(obj(("__xst",__xer),("__xme","erreur de conversion de rev")))
                  )
               )
            ),
            declare_variable(mat2,obj_mat2.__xva),
            declare_variable(l02,mat2.length),
            declare_variable(le_tableau_parametre,[]),
            boucle(
               initialisation(declare_variable(i,1)),
               condition(inf(i,l02)),
               increment(affecte(i,mat2[i][12])),
               faire(
                  choix(
                     si(
                        condition(et(egalstricte(mat2[i][1],''champs_des_parametres''),egalstricte(mat2[i][2],''f''))),
                        alors(
                           boucle(
                              initialisation(declare_variable(j,plus(i,1))),
                              condition(inf(j,l02)),
                              increment(affecte(j,mat2[j][12])),
                              faire(
                                 declare_variable(nom_du_parametre,''''),
                                 declare_variable(genre_du_parametre,0),
                                 declare_variable(commentaire_du_parametre,''''),
                                 choix(
                                    si(
                                       condition(egalstricte(mat2[j][2],''f'')),
                                       alors(
                                          affecte(nom_du_parametre,mat2[j][1]),
                                          boucle(
                                             initialisation(declare_variable(k,plus(j,1))),
                                             condition(inf(k,l02)),
                                             increment(affecte(k,mat2[k][12])),
                                             faire(
                                                choix(
                                                   si(
                                                      condition(
                                                         et(
                                                            egalstricte(mat2[k][1],''genre_du_parametre''),
                                                            egalstricte(mat2[k][2],''f''),
                                                            egalstricte(mat2[k][8],1),
                                                            egalstricte(
                                                               tableau(
                                                                  nomt(
                                                                     tableau(nomt(mat2),p(plus(k,1)))
                                                                  ),
                                                                  p(2)
                                                               ),
                                                               ''c''
                                                            )
                                                         )
                                                      ),
                                                      alors(
                                                         affecte(
                                                            genre_du_parametre,
                                                            appelf(
                                                               nomf(parseInt),
                                                               p(
                                                                  tableau(
                                                                     nomt(
                                                                        tableau(nomt(mat2),p(plus(k,1)))
                                                                     ),
                                                                     p(1)
                                                                  )
                                                               ),
                                                               p(10)
                                                            )
                                                         )
                                                      )
                                                   ),
                                                   sinonsi(
                                                      condition(et(egalstricte(mat2[k][1],''#''),egalstricte(mat2[k][2],''f''))),
                                                      alors(
                                                         affecte(commentaire_du_parametre,mat2[k][13]),
                                                         #(  )
                                                      )
                                                   )
                                                )
                                             )
                                          )
                                       )
                                    )
                                 ),
                                 appelf(
                                    element(le_tableau_parametre),
                                    nomf(push),
                                    p(obj(("nom_du_parametre",nom_du_parametre),("genre_du_parametre",genre_du_parametre),("commentaire_du_parametre",commentaire_du_parametre)))
                                 )
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(chemin_fichier__liste_des_genres,concat(''../rev_'',this.__ig1.donnees_retournees.chi_id_projet,''/__fichiers_generes/__liste_des_genres.json'')),
            choix(
               si(condition(egalstricte(this.__ig1.donnees_retournees._CA_,2)),alors(affecte(chemin_fichier__liste_des_genres,''../rev_2/__fichiers_generes/__liste_des_genres.json'')))
            ),
            choix(
               si(
                  condition(
                     non(
                        await(appelf(element(this.__ig1),nomf(is_file),p(chemin_fichier__liste_des_genres)))
                     )
                  ),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           ("__xme",appelf(element(this.__ig1),nomf(nl2),p()))
                        )
                     )
                  )
               )
            ),
            declare_variable(contenu_texte__liste_des_genres,''''),
            essayer(
               faire(
                  affecte(
                     contenu_texte__liste_des_genres,
                     await(appelf(element(this.__ig1),nomf(file_get_contents),p(chemin_fichier__liste_des_genres)))
                  )
               ),
               sierreur(
                  e,
                  faire(appelf(element(this.__ig1),nomf(ma_trace1),p("e="),p(e.stack)))
               )
            ),
            declare_variable(contenu_json__liste_des_genres,appelf(element(JSON),nomf(parse),p(contenu_texte__liste_des_genres))),
            declare_variable(cht_rev_grandeur,''''),
            declare_variable(le_genre_est_numerique,false),
            boucle_sur_objet_dans(
               pourChaque(dans(declare_variable(i,null()),le_tableau_parametre)),
               faire(
                  declare_variable(genre_du_parametre,le_tableau_parametre[i].genre_du_parametre),
                  declare_variable(nom_du_parametre,le_tableau_parametre[i].nom_du_parametre),
                  choix(
                     si(
                        condition(
                           et(appelf(element(form),nomf(hasOwnProperty),p(nom_du_parametre)),diffstricte(form[nom_du_parametre],''''))
                        ),
                        alors(
                           declare_variable(valeur,form[nom_du_parametre]),
                           choix(
                              si(
                                 condition(
                                    non(appelf(element(contenu_json__liste_des_genres),nomf(hasOwnProperty),p(genre_du_parametre)))
                                 ),
                                 alors(
                                    retourner(
                                       obj(
                                          ("__xst",__xer),
                                          (
                                             "__xme",
                                             concat("genre non trouvé ",appelf(element(this.__ig1),nomf(nl2),p()))
                                          )
                                       )
                                    )
                                 )
                              )
                           ),
                           declare_variable(le_genre,contenu_json__liste_des_genres[genre_du_parametre]),
                           declare_variable(chp_espece_genre,appelf(element(le_genre.chp_espece_genre),nomf(toUpperCase),p())),
                           choix(
                              si(
                                 condition(
                                    ou(
                                       supeg(appelf(element(chp_espece_genre),nomf(indexOf),p(''INT'')),0),
                                       supeg(appelf(element(chp_espece_genre),nomf(indexOf),p(''DECIMAL'')),0),
                                       supeg(appelf(element(chp_espece_genre),nomf(indexOf),p(''FLOAT'')),0)
                                    )
                                 ),
                                 alors(affectop(''+='',cht_rev_grandeur,concat(nom_du_parametre,''('',valeur,'')'')))
                              ),
                              sinon(
                                 alors(
                                    affectop(
                                       ''+='',
                                       cht_rev_grandeur,
                                       concat(
                                          nom_du_parametre,
                                          ''(\'''',
                                          appelf(
                                             element(appelf(element(valeur),nomf(replace),p(/\\/g),p(''\\\\''))),
                                             nomf(replace),
                                             p(/\''/g),
                                             p(''\\\'''')
                                          ),
                                          ''\'')''
                                       )
                                    )
                                 )
                              )
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(condition(egalstricte(cht_rev_grandeur,'''')),alors(affecte(cht_rev_grandeur,''0'')))
            ),
            choix(
               si(
                  condition(
                     non(
                        et(
                           appelf(element(form),nomf(hasOwnProperty),p(''che_actif_grandeur'')),
                           appelf(
                              element(this.__ig1),
                              nomf(est_num),
                              p(tableau(nomt(form),p(''che_actif_grandeur'')))
                           )
                        )
                     )
                  ),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''che_actif_grandeur est absent ou non numérique ['',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(
                     non(
                        et(
                           appelf(element(form),nomf(hasOwnProperty),p(''chp_cle_grandeur'')),
                           diffstricte(tableau(nomt(form),p(''chp_cle_grandeur'')),'''')
                        )
                     )
                  ),
                  alors(
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(''chp_cle_grandeur est absent ou vide ['',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            await(appelf(element(__db1),nomf(exec),p(''BEGIN TRANSACTION;''))),
            #(
              on insert avec un rev null et on ira le modifier plus bas
            ),
            declare_variable(
               criteres_1187,
               obj(
                  (
                     "donnees",
                     defTab(
                        p(
                           obj(
                              ("chx_parametre_grandeur",chi_id_parametre),
                              ("chp_cle_grandeur",tableau(nomt(form),p(''chp_cle_grandeur''))),
                              ("cht_rev_grandeur",cht_rev_grandeur),
                              ("che_actif_grandeur",0)
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(
               tt1187,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1187),
                     p(criteres_1187),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(
                     ou(
                        diffstricte(tt1187.__xst,__xsu),
                        diffstricte(tableau(nomt(tt1187),p(''changements'')),1)
                     )
                  ),
                  alors(
                     await(appelf(element(__db1),nomf(exec),p(''ROLLBACK;''))),
                     retourner(
                        obj(
                           ("__xst",__xer),
                           (
                              "__xme",
                              concat(tt1187.__xme,'' l\''insertion a échoué ['',appelf(element(this.__ig1),nomf(nl2),p()),'']'')
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(chi_id_grandeur,tableau(nomt(tt1187),p(''nouvel_id''))),
            declare_variable(che_actif_grandeur,0),
            declare_variable(chp_cle_grandeur,tableau(nomt(form),p(''chp_cle_grandeur''))),
            #(
              on réécrit le rev au bon format
            ),
            affecte(che_actif_grandeur,0),
            #( let cht_rev_grandeur=''''; ),
            declare_variable(
               criteres_1188,
               obj(
                  #(  ),
                  ("c_chi_id_grandeur",chi_id_grandeur),
                  ("n_chp_cle_grandeur",chp_cle_grandeur),
                  ("n_chc_couleur_texte_grandeur",null),
                  ("n_chc_couleur_fond_grandeur",null)
               )
            ),
            declare_variable(
               tt1188,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1188),
                     p(criteres_1188),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1188.__xst,__xsu),diffstricte(tt1188.changements,1))),
                  alors(
                     await(appelf(element(__db1),nomf(exec),p(''ROLLBACK;''))),
                     retourner(obj(("__xst",__xer),("__xme",tt1188.__xme)))
                  )
               )
            ),
            #(
              une fois qu''on a ajouté une grandeur pour ce paramètre,
              il faut aller modifier le rev de tri des paramètres
            ),
            declare_variable(le_rev_ordre,tableau(nomt(tt1182.__xva[0]),p(''T0_cht_ordre_parametre''))),
            choix(
               si(
                  condition(egalstricte(le_rev_ordre,null)),
                  alors(
                     affecte(le_rev_ordre,appelf(nomf(String),p(chi_id_grandeur)))
                  )
               ),
               sinon(
                  alors(affecte(le_rev_ordre,concat(chi_id_grandeur,'','',le_rev_ordre)))
               )
            ),
            declare_variable(
               criteres_1189,
               obj(
                  #(  ),
                  ("c_chi_id_parametre",chi_id_parametre),
                  ("n_cht_ordre_parametre",le_rev_ordre)
               )
            ),
            #( =========================== mise à jour effective ======================== ),
            declare_variable(
               tt1189,
               await(
                  appelf(
                     element(this.__ig1),
                     nomf(sql_iij),
                     p(1189),
                     p(criteres_1189),
                     p(__db1)
                  )
               )
            ),
            choix(
               si(
                  condition(ou(diffstricte(tt1189.__xst,__xsu),diffstricte(tt1189.changements,1))),
                  alors(
                     await(appelf(element(__db1),nomf(exec),p(''ROLLBACK;''))),
                     retourner(obj(("__xst",__xer),("__xme",tt1189.__xme)))
                  )
               )
            ),
            await(appelf(element(__db1),nomf(exec),p(''COMMIT;''))),
            retourner(obj(("__xst",__xsu)))
         )
      )
   )
)','class parametres1{
    /*
      =============================================================================================================
    */
    signaler_une_erreur_asynchrone( le_message ){
        for( let i=0 ; i < this.__ig1.options_generales.les_clients_du_ws.length ; i++ ){
            let le_colis={
                 /*  */
                "__xst" : __xsu ,
                "__xsi" : {0 : [le_message] ,1 : [] ,2 : [] ,3 : [] ,4 : []} ,
                "__xva" : {} ,
                "__xac" : ''''
            };
            try{
                this.__ig1.options_generales.les_clients_du_ws[i].socket.send( JSON.stringify( le_colis ) );
            } catch {}
        }
    }
    /*
      =========================== fragment ========================================================================
    */
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        let criteres_select_1186={"T0_chx_parametre_grandeur" : __xva_avant[''T0_chi_id_parametre'']};
        let tt1186=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T0`.`che_verouillee_grandeur` , 
        `T0`.`chc_couleur_texte_grandeur` , `T0`.`chc_couleur_fond_grandeur`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1186 , criteres_select_1186 , __db1 );
        if(tt1186.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ''erreur [1186 '' + this.__ig1.nl2() + '']''});
        }
        this.__ig1.donnees_retournees.__xva[''parametres_actuels'']=tt1186.__xva;
        return({"__xst" : __xsu ,"" : tt1186.__xva});
    }
    /*
      =========================== fragment ========================================================================
    */
    async produire_les_json_des_paramètres( mat , d , chi_id_bdd ){
        /*
          appel asynchrone
        */
        let chemin_bdd_1=''./__bases_de_donnees/bdd_'' + chi_id_bdd + ''.sqlite'';
        let __db1=null;
        try{
            __db1=new Database( chemin_bdd_1 , {"create" : false} );
        }catch(e){
            this.signaler_une_erreur_asynchrone( this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        let chemin_fichier__liste_des_grandeurs=''./__fichiers_generes/__json_des_grandeurs_de_la_base_'' + chi_id_bdd + ''_.json'';
        let __json_des_parametres_de_la_base={};
        let tt1224=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T0`.`chc_couleur_texte_grandeur` , `T0`.`chc_couleur_fond_grandeur` , `T1`.`cht_rev_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
         ORDER BY  `T0`.`chx_parametre_grandeur` ASC, `T0`.`chi_id_grandeur` ASC
        ;
        */
        /*sql_inclure_fin*/ 1224 , {} , __db1 );
        if(tt1224.__xst !== __xsu){
            __db1.close();
            this.signaler_une_erreur_asynchrone( this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : tt1224.__xme});
        }
        let chx_parametre_grandeur=0;
        let __liste_des_grandeurs={};
        let liste_des_complements={};
        for(let i in tt1224.__xva){
            if(tt1224.__xva[i].T0_chx_parametre_grandeur !== chx_parametre_grandeur){
                chx_parametre_grandeur=tt1224.__xva[i].T0_chx_parametre_grandeur;
                liste_des_complements={};
                if(tt1224.__xva[i].T1_cht_rev_parametre !== ''#()''){
                    let le_rev_texte=tt1224.__xva[i].T1_cht_rev_parametre;
                    let obj1=this.__ig1.__rev1.t2m( le_rev_texte );
                    if(obj1.__xst !== __xsu){
                        __db1.close();
                        this.signaler_une_erreur_asynchrone( "erreur de conversion de paramètre \"" + le_rev_texte + ''"'' + this.__ig1.nl2() );
                        return({"__xst" : __xer ,"__xme" : "erreur de conversion de paramètre \"" + le_rev_texte + ''"''});
                    }
                    let mat1=obj1.__xva;
                    const l01=mat1.length;
                    for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][1] === ''champs_des_parametres'' && mat1[j][2] === ''f''){
                            for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                if(mat1[k][1] === ''#'' && mat1[k][2] === ''f''){
                                }else if(mat1[k][2] === ''f''){
                                    let nom_du_complement=mat1[k][1];
                                    let genre_du_parametre=0;
                                    let libelle='''';
                                    for( let l=k + 1 ; l < l01 ; l=mat1[l][12] ){
                                        if(mat1[l][1] === ''genre_du_parametre'' && mat1[l][2] === ''f'' && mat1[l][8] === 1 && mat1[l + 1][2] === ''c''){
                                            genre_du_parametre=parseInt( mat1[l + 1][1] , 10 );
                                        }else if(mat1[l][1] === ''#'' && mat1[l][2] === ''f''){
                                            libelle=mat1[l][13];
                                        }
                                    }
                                    liste_des_complements[nom_du_complement]={"genre_du_parametre" : genre_du_parametre ,"libelle" : libelle};
                                }
                            }
                        }
                    }
                }
            }
            __liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur]={
                "__cle" : tt1224.__xva[i].T0_chp_cle_grandeur ,
                "__rev" : tt1224.__xva[i].T0_cht_rev_grandeur ,
                "__actif" : tt1224.__xva[i].T0_che_actif_grandeur ,
                "__couleur_texte" : tt1224.__xva[i].T0_chc_couleur_texte_grandeur ,
                "__couleur_fond" : tt1224.__xva[i].T0_chc_couleur_fond_grandeur ,
                "__liste_des_parametres" : []
            };
            if(tt1224.__xva[i].T0_cht_rev_grandeur !== ''0''){
                let objt=this.__ig1.__rev1.t2m( tt1224.__xva[i].T0_cht_rev_grandeur );
                if(objt.__xst === __xsu){
                    const l01=objt.__xva.length;
                    for( let j=1 ; j < l01 ; j=objt.__xva[j][12] ){
                        if(objt.__xva[j][2] === ''f'' && objt.__xva[j][8] === 1 && objt.__xva[j + 1][2] === ''c''){
                            if(liste_des_complements.hasOwnProperty( objt.__xva[j][1] )){
                                __liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur][''__liste_des_parametres''].push( {
                                         /*  */
                                        "__nom" : objt.__xva[j][1] ,
                                        "genre_du_parametre" : liste_des_complements[objt.__xva[j][1]].genre_du_parametre ,
                                        "libelle" : liste_des_complements[objt.__xva[j][1]].libelle
                                    } );
                            }
                            if(this.__ig1.est_num( objt.__xva[j + 1][1] )){
                                if(this.__ig1.est_entier_positif( objt.__xva[j + 1][1] )){
                                    __liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur][objt.__xva[j][1]]=parseInt( objt.__xva[j + 1][1] , 10 );
                                }else{
                                    __liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur][objt.__xva[j][1]]=parseFloat( objt.__xva[j + 1][1] );
                                }
                            }else{
                                __liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur][objt.__xva[j][1]]=objt.__xva[j + 1][1];
                            }
                        }
                    }
                }
            }
        }
        let contenu_fichier__json_des_parametres_de_la_base='''' + JSON.stringify( __liste_des_grandeurs , null , 2 );
        try{
            await this.__ig1.file_put_contents( chemin_fichier__liste_des_grandeurs , contenu_fichier__json_des_parametres_de_la_base );
        }catch{
            __db1.close();
            this.signaler_une_erreur_asynchrone( ''erreur d\''écriture du fichier json des genres ['' + this.__ig1.nl2( e ) + '']'' );
            return({"__xst" : __xer ,"__xme" : ''erreur d\''écriture du fichier json des genres ['' + this.__ig1.nl2( e ) + '']''});
        }
        for( let i=0 ; i < this.__ig1.options_generales.les_clients_du_ws.length ; i++ ){
            let le_colis={
                "__xst" : __xsu ,
                "__xsi" : {0 : [''maj __liste_des_grandeurs par une autre session''] ,1 : [] ,2 : [] ,3 : [] ,4 : []} ,
                "__xva" : {} ,
                "__xac" : '''' ,
                "__liste_des_grandeurs" : __liste_des_grandeurs ,
                "__base_des_grandeurs" : chi_id_bdd ,
                "__maj_interactive_des_grandeurs" : 1
            };
            try{
                this.__ig1.options_generales.les_clients_du_ws[i].socket.send( JSON.stringify( le_colis ) );
            } catch {}
        }
        __db1.close();
    }
    /*
      =========================== fragment ========================================================================
    */
    async supprimer_une_grandeur1( mat , d ){
        let chi_id_grandeur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_grandeur <= 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        if(chi_id_grandeur <= 20000){
            return({"__xst" : __xer ,"__xme" : ''on ne peut pas supprimer la grandeur 20000''});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1202={
             /*  */
            "T0_chi_id_grandeur" : chi_id_grandeur
        };
        let tt1202=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , criteres_1202 , __db1 );
        if(tt1202.__xst !== __xsu || tt1202.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : tt1202.__xme});
        }
        let criteres_1214={
             /*  */
            "chi_id_grandeur" : chi_id_grandeur
        };
        let tt1214=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_grandeurs
        WHERE (   `chi_id_grandeur` = :chi_id_grandeur
           AND `che_verouillee_grandeur` = 0)
        */
        /*sql_inclure_fin*/ 1214 , criteres_1214 , __db1 );
        /*  */
        if(tt1214.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1214.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async vv_grandeurs_nouveau_numero1( mat , d ){
        let chi_id_grandeur_ancienne=0;
        let chi_id_grandeur_nouvelle=0;
        let nom_formulaire=this.__ig1.donnees_recues[__xva][''__co1''];
        let form=this.__ig1.donnees_recues[__xva][''__fo1''][nom_formulaire];
        if(form[''vv_nouveau_numero_de_grandeur''] && this.__ig1.est_num( form[''vv_nouveau_numero_de_grandeur''] )){
            chi_id_grandeur_nouvelle=parseInt( form[''vv_nouveau_numero_de_grandeur''] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : '' le nouveau numéro doit être numérique ['' + this.__ig1.nl2() + '']''});
        }
        if(chi_id_grandeur_nouvelle <= 20000){
            return({"__xst" : __xer ,"__xme" : ''on ne peut pas donner à une grandeur une valeur inférieure à 20 000''});
        }
        if(form[''vv_ancien_numero_de_grandeur''] && this.__ig1.est_num( form[''vv_ancien_numero_de_grandeur''] )){
            chi_id_grandeur_ancienne=parseInt( form[''vv_ancien_numero_de_grandeur''] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : ''l\''ancien numéro doit être numérique ['' + this.__ig1.nl2() + '']''});
        }
        if(chi_id_grandeur_ancienne <= 20000){
            return({"__xst" : __xer ,"__xme" : ''on ne peut pas renuméroter la grandeur 20 000''});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /*
          Essai de récupération de la nouvelle grandeur.
        */
        let criteres_1202_2={"T0_chi_id_grandeur" : chi_id_grandeur_nouvelle};
        let tt1202_2=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , criteres_1202_2 , __db1 );
        if(tt1202_2.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( ''Erreur de sélection de la grandeur nouvelle ['' + this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : tt1202_2.__xme});
        }
        if(tt1202_2[__xva].length >= 1){
            /*
              c''est une erreur si la grandeur existe déjà en base.
            */
            return({"__xst" : __xer ,"__xme" : ''la grandeur portant le numéro '' + chi_id_grandeur_nouvelle + '' existe déjà ['' + this.__ig1.nl2()});
        }
        let criteres_1213={
             /*  */
            "c_chi_id_grandeur" : chi_id_grandeur_ancienne ,
            "n_chi_id_grandeur" : chi_id_grandeur_nouvelle
        };
        /* =========================== mise à jour effective ======================== */
        let tt1213=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_grandeurs SET 
           `chi_id_grandeur` = :n_chi_id_grandeur
        WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
        */
        /*sql_inclure_fin*/ 1213 , criteres_1213 , __db1 );
        if(tt1213.__xst !== __xsu || tt1213.changements !== 1){
            return({"__xst" : __xer ,"__xme" : tt1213.__xme});
        }
        this.produire_les_json_des_paramètres( mat , d , 1 );
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async enregistrer_l_ordre_des_grandeurs2( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1189={
             /*  */
            "c_chi_id_parametre" : this.__ig1.donnees_recues.__xva.chi_id_parametre_en_cours_de_trie ,
            "n_cht_ordre_parametre" : this.__ig1.donnees_recues.__xva.nouvel_ordre
        };
        /* =========================== mise à jour effective ======================== */
        let tt1189=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_parametres SET 
           `cht_ordre_parametre` = :n_cht_ordre_parametre
        WHERE `chi_id_parametre` = :c_chi_id_parametre ;
        */
        /*sql_inclure_fin*/ 1189 , criteres_1189 , __db1 );
        if(tt1189.__xst !== __xsu || tt1189.changements !== 1){
            return({"__xst" : __xer ,"__xme" : tt1189.__xme});
        }
        this.produire_les_json_des_paramètres( mat , d , 1 );
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async modifier_la_valeur_de2( mat , d ){
        let chi_id_parametre=0;
        let chi_id_grandeur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva][''__co1''];
        let form=this.__ig1.donnees_recues[__xva][''__fo1''][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre` , `T0`.`che__nur_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé : aucune modification effectuée [1182 '' + this.__ig1.nl2() + '']''});
        }
        let liste_des_champs_a_pourvoir=[];
        let cht_rev_parametre=tt1182.__xva[0][''T0_cht_rev_parametre''];
        if(cht_rev_parametre !== '''' && cht_rev_parametre !== null){
            let obj_mat2=this.__ig1.__rev1.t2m( cht_rev_parametre );
            if(obj_mat2.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : ''erreur de conversion de '' + cht_rev_parametre + '' ['' + this.__ig1.nl2() + '']''});
            }
            let mat2=obj_mat2.__xva;
            let l02=mat2.length;
            for( let i=1 ; i < l02 ; i=mat2[i][12] ){
                if(mat2[i][1] === ''champs_des_parametres'' && mat2[i][2] === ''f''){
                    for( let j=i + 1 ; j < l02 ; j=mat2[j][12] ){
                        if(mat2[j][2] === ''f''){
                            liste_des_champs_a_pourvoir.push( mat2[j][1] );
                        }
                    }
                }
            }
        }
        let criteres_select_1191={"T0_chi_id_grandeur" : chi_id_grandeur};
        let tt1191=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur`
         FROM b1.tbl_grandeurs T0
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1191 , criteres_select_1191 , __db1 );
        if(tt1191.__xst !== __xsu || tt1191.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé : aucune modification effectuée [1191 '' + this.__ig1.nl2() + '']''});
        }
        let nom_de_la_propriete='''';
        for(let i in form){
            if(i.substr( 0 , 21 ) === ''__le_nom_de_la_valeur''){
                nom_de_la_propriete=form[i];
                break;
            }
        }
        if(form.hasOwnProperty( nom_de_la_propriete + ''_'' + chi_id_grandeur )
               && form[nom_de_la_propriete + ''_'' + chi_id_grandeur] !== ''''
        ){
            let nouvelle_valeur=form[nom_de_la_propriete + ''_'' + chi_id_grandeur];
            let nouveau_rev_de_la_grandeur='''';
            if(tt1191.__xva[0][''T0_cht_rev_grandeur''] === ''0''){
                /* l''ancien paramètre n''avait pas de valeur */
                if(nouvelle_valeur !== ''''){
                    if(this.__ig1.est_num( nouvelle_valeur )){
                        nouveau_rev_de_la_grandeur=nom_de_la_propriete + ''('' + nouvelle_valeur + '')'';
                    }else{
                        nouveau_rev_de_la_grandeur=nom_de_la_propriete + ''(\'''' + nouvelle_valeur.replace( /\\/g , ''\\\\'' ).replace( /\''/g , ''\\\'''' ) + ''\'')'';
                    }
                }
            }else{
                let liste_des_indices_a_supprimer=[];
                let obj_ancien_rev=this.__ig1.__rev1.t2m( tt1191.__xva[0][''T0_cht_rev_grandeur''] );
                if(obj_ancien_rev.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : ''erreur de conversion de '' + tt1191.__xva[0][''T0_cht_rev_grandeur''] + '' [ '' + this.__ig1.nl2() + '']''});
                }
                let mat2=obj_ancien_rev.__xva;
                let l02=mat2.length;
                for( let i=1 ; i < l02 ; i=mat2[i][12] ){
                    if(mat2[i][1] === nom_de_la_propriete && mat2[i][2] === ''f'' && mat2[i][8] === 1 && mat2[i + 1][2] === ''c''){
                        if(this.__ig1.est_num( nouvelle_valeur )){
                            mat2[i + 1][1]=nouvelle_valeur;
                            mat2[i + 1][4]=0;
                        }else{
                            mat2[i + 1][1]=nouvelle_valeur.replace( /\\/g , ''\\\\'' ).replace( /\''/g , ''\\\'''' );
                            mat2[i + 1][4]=1;
                        }
                    }else{
                        if(!liste_des_champs_a_pourvoir.includes( mat2[i][1] )){
                            /* on a supprimé ce champ */
                            liste_des_indices_a_supprimer.push( i );
                        }
                    }
                }
                let mat3=null;
                if(liste_des_indices_a_supprimer.length > 0){
                    /*
                      il faut enlever de la matrice les champs complémentaires supprimés 
                      en commençant par la fin
                    */
                    for( let i=liste_des_indices_a_supprimer.length - 1 ; i >= 0 ; i-- ){
                        mat3=this.__ig1.__rev1.supprimer_un_element_de_la_matrice( mat2 , liste_des_indices_a_supprimer[i] , 0 );
                    }
                }else{
                    mat3=mat2;
                }
                let obj_nouveau_rev=this.__ig1.__rev1.m2t( mat3 , 0 );
                if(obj_nouveau_rev.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : ''erreur de conversion de '' + tt1191.__xva[0][''T0_cht_rev_grandeur''] + '' [ '' + this.__ig1.nl2() + '']''});
                }
                nouveau_rev_de_la_grandeur=obj_nouveau_rev.__xva;
            }
            for( let i=0 ; i < liste_des_champs_a_pourvoir.length ; i++ ){
                if(nouveau_rev_de_la_grandeur.indexOf( liste_des_champs_a_pourvoir[i] + ''('' ) < 0){
                    /* on a mis un nouveau champ qui n''est pas encore renseigné */
                    if(liste_des_champs_a_pourvoir[i] === nom_de_la_propriete){
                        if(nouvelle_valeur !== ''''){
                            if(this.__ig1.est_num( nouvelle_valeur )){
                                nouveau_rev_de_la_grandeur+=nom_de_la_propriete + ''('' + nouvelle_valeur + '')'';
                            }else{
                                nouveau_rev_de_la_grandeur+=nom_de_la_propriete + ''(\'''' + nouvelle_valeur.replace( /\\/g , ''\\\\'' ).replace( /\''/g , ''\\\'''' ) + ''\'')'';
                            }
                        }
                    }
                }
            }
            if(nouveau_rev_de_la_grandeur === ''''){
                nouveau_rev_de_la_grandeur=''0'';
            }
            let criteres_1192={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_cht_rev_grandeur" : nouveau_rev_de_la_grandeur
            };
            /* =========================== mise à jour effective ======================== */
            let tt1192=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_grandeurs SET 
               `cht_rev_grandeur` = :n_cht_rev_grandeur
            WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
            */
            /*sql_inclure_fin*/ 1192 , criteres_1192 , __db1 );
            if(tt1192.__xst !== __xsu || tt1192.changements !== 1){
                return({"__xst" : __xer ,"__xme" : tt1192.__xme});
            }
            this.produire_les_json_des_paramètres( mat , d , 1 );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =========================== fragment ========================================================================
    */
    async modifier_verouille_de2( mat , d ){
        if(this.__ig1.donnees_retournees.chi_id_utilisateur !== 1){
            return({"__xst" : __xer ,"__xme" : ''seul l\''utilisateur principal peut vérouiller ou dévérouiller une grandeur '' + this.__ig1.nl2() + '']''});
        }
        let chi_id_parametre=0;
        let chi_id_grandeur=0;
        let decallage_vertical=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''decallage_vertical'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                decallage_vertical=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva][''__co1''];
        let form=this.__ig1.donnees_recues[__xva][''__fo1''][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre` , `T0`.`che__nur_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé : aucune modification effectuée [1182 '' + this.__ig1.nl2() + '']''});
        }
        if(form.hasOwnProperty( ''che_verouillee_grandeur_'' + chi_id_grandeur )
               && form[''chp_cle_grandeur_'' + chi_id_grandeur] !== ''''
        ){
            let criteres_1215={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_che_verouillee_grandeur" : parseInt( form[''che_verouillee_grandeur_'' + chi_id_grandeur] , 10 )
            };
            /* =========================== mise à jour effective ======================== */
            let tt1215=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_grandeurs SET 
               `che_verouillee_grandeur` = :n_che_verouillee_grandeur
            WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
            */
            /*sql_inclure_fin*/ 1215 , criteres_1215 , __db1 );
            if(tt1215.__xst !== __xsu || tt1215.changements !== 1){
                return({"__xst" : __xer ,"__xme" : tt1215.__xme});
            }
            this.produire_les_json_des_paramètres( mat , d , 1 );
            return({"__xst" : __xsu ,"__xva" : {"decallage_vertical" : decallage_vertical}});
        }
        return({"__xst" : __xer});
    }
    /*
      =========================== fragment ========================================================================
    */
    async modifier_actif_de2( mat , d ){
        let chi_id_parametre=0;
        let chi_id_grandeur=0;
        let decallage_vertical=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''decallage_vertical'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                decallage_vertical=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva][''__co1''];
        let form=this.__ig1.donnees_recues[__xva][''__fo1''][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre` , `T0`.`che__nur_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé : aucune modification effectuée [1182 '' + this.__ig1.nl2() + '']''});
        }
        if(form.hasOwnProperty( ''che_actif_grandeur_'' + chi_id_grandeur ) && form[''chp_cle_grandeur_'' + chi_id_grandeur] !== ''''){
            let criteres_1190={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_che_actif_grandeur" : parseInt( form[''che_actif_grandeur_'' + chi_id_grandeur] , 10 )
            };
            /* =========================== mise à jour effective ======================== */
            let tt1190=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_grandeurs SET 
               `che_actif_grandeur` = :n_che_actif_grandeur
            WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
            */
            /*sql_inclure_fin*/ 1190 , criteres_1190 , __db1 );
            if(tt1190.__xst !== __xsu || tt1190.changements !== 1){
                return({"__xst" : __xer ,"__xme" : tt1190.__xme});
            }
            this.produire_les_json_des_paramètres( mat , d , 1 );
            return({"__xst" : __xsu ,"__xva" : {"decallage_vertical" : decallage_vertical}});
        }
        return({"__xst" : __xer});
    }
    /*
      =========================== fragment ========================================================================
    */
    async modifier_la_cle_de2( mat , d ){
        let chi_id_parametre=0;
        let chi_id_grandeur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva][''__co1''];
        let form=this.__ig1.donnees_recues[__xva][''__fo1''][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre` , `T0`.`che__nur_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé : aucune modification effectuée [1182 '' + this.__ig1.nl2() + '']''});
        }
        let chc_couleur_texte_grandeur=null;
        if(form.hasOwnProperty( ''chc_couleur_texte_grandeur_'' + chi_id_grandeur )){
            chc_couleur_texte_grandeur=form[''chc_couleur_texte_grandeur_'' + chi_id_grandeur];
        }
        let chc_couleur_fond_grandeur=null;
        if(form.hasOwnProperty( ''chc_couleur_fond_grandeur_'' + chi_id_grandeur )){
            chc_couleur_fond_grandeur=form[''chc_couleur_fond_grandeur_'' + chi_id_grandeur];
        }
        if(chc_couleur_fond_grandeur === null
               || chc_couleur_texte_grandeur === null
               || chc_couleur_fond_grandeur === ''''
               || chc_couleur_texte_grandeur === ''''
        ){
            chc_couleur_fond_grandeur=null;
            chc_couleur_texte_grandeur=null;
        }
        if(form.hasOwnProperty( ''chp_cle_grandeur_'' + chi_id_grandeur ) && form[''chp_cle_grandeur_'' + chi_id_grandeur] !== ''''){
            let criteres_1188={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_chp_cle_grandeur" : form[''chp_cle_grandeur_'' + chi_id_grandeur] ,
                "n_chc_couleur_texte_grandeur" : chc_couleur_texte_grandeur ,
                "n_chc_couleur_fond_grandeur" : chc_couleur_fond_grandeur
            };
            /* =========================== mise à jour effective ======================== */
            let tt1188=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_grandeurs SET 
               `chp_cle_grandeur` = :n_chp_cle_grandeur , 
               `chc_couleur_texte_grandeur` = :n_chc_couleur_texte_grandeur , 
               `chc_couleur_fond_grandeur` = :n_chc_couleur_fond_grandeur
            WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
            */
            /*sql_inclure_fin*/ 1188 , criteres_1188 , __db1 );
            if(tt1188.__xst !== __xsu || tt1188.changements !== 1){
                return({"__xst" : __xer ,"__xme" : tt1188.__xme});
            }
            this.produire_les_json_des_paramètres( mat , d , 1 );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =========================== fragment ========================================================================
    */
    async enregister_nouveau_parametre1( mat , d ){
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva][''__co1''];
        let form=this.__ig1.donnees_recues[__xva][''__fo1''][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre` , `T0`.`che__nur_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : ''enregistrement non trouvé : aucune modification effectuée [1182 '' + this.__ig1.nl2() + '']''});
        }
        let obj_mat2=this.__ig1.__rev1.t2m( tt1182.__xva[0][''T0_cht_rev_parametre''] );
        if(obj_mat2.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : "erreur de conversion de rev"});
        }
        let mat2=obj_mat2.__xva;
        let l02=mat2.length;
        let le_tableau_parametre=[];
        for( let i=1 ; i < l02 ; i=mat2[i][12] ){
            if(mat2[i][1] === ''champs_des_parametres'' && mat2[i][2] === ''f''){
                for( let j=i + 1 ; j < l02 ; j=mat2[j][12] ){
                    let nom_du_parametre='''';
                    let genre_du_parametre=0;
                    let commentaire_du_parametre='''';
                    if(mat2[j][2] === ''f''){
                        nom_du_parametre=mat2[j][1];
                        for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                            if(mat2[k][1] === ''genre_du_parametre'' && mat2[k][2] === ''f'' && mat2[k][8] === 1 && mat2[k + 1][2] === ''c''){
                                genre_du_parametre=parseInt( mat2[k + 1][1] , 10 );
                            }else if(mat2[k][1] === ''#'' && mat2[k][2] === ''f''){
                                commentaire_du_parametre=mat2[k][13];
                                /*  */
                            }
                        }
                    }
                    le_tableau_parametre.push( {"nom_du_parametre" : nom_du_parametre ,"genre_du_parametre" : genre_du_parametre ,"commentaire_du_parametre" : commentaire_du_parametre} );
                }
            }
        }
        let chemin_fichier__liste_des_genres=''../rev_'' + this.__ig1.donnees_retournees.chi_id_projet + ''/__fichiers_generes/__liste_des_genres.json'';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier__liste_des_genres=''../rev_2/__fichiers_generes/__liste_des_genres.json'';
        }
        if(!(await this.__ig1.is_file( chemin_fichier__liste_des_genres ))){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let contenu_texte__liste_des_genres='''';
        try{
            contenu_texte__liste_des_genres=await this.__ig1.file_get_contents( chemin_fichier__liste_des_genres );
        }catch(e){
            this.__ig1.ma_trace1( "e=" , e.stack );
        }
        let contenu_json__liste_des_genres=JSON.parse( contenu_texte__liste_des_genres );
        let cht_rev_grandeur='''';
        let le_genre_est_numerique=false;
        for(let i in le_tableau_parametre){
            let genre_du_parametre=le_tableau_parametre[i].genre_du_parametre;
            let nom_du_parametre=le_tableau_parametre[i].nom_du_parametre;
            if(form.hasOwnProperty( nom_du_parametre ) && form[nom_du_parametre] !== ''''){
                let valeur=form[nom_du_parametre];
                if(!contenu_json__liste_des_genres.hasOwnProperty( genre_du_parametre )){
                    return({"__xst" : __xer ,"__xme" : "genre non trouvé " + this.__ig1.nl2()});
                }
                let le_genre=contenu_json__liste_des_genres[genre_du_parametre];
                let chp_espece_genre=le_genre.chp_espece_genre.toUpperCase();
                if(chp_espece_genre.indexOf( ''INT'' ) >= 0
                       || chp_espece_genre.indexOf( ''DECIMAL'' ) >= 0
                       || chp_espece_genre.indexOf( ''FLOAT'' ) >= 0
                ){
                    cht_rev_grandeur+=nom_du_parametre + ''('' + valeur + '')'';
                }else{
                    cht_rev_grandeur+=nom_du_parametre + ''(\'''' + valeur.replace( /\\/g , ''\\\\'' ).replace( /\''/g , ''\\\'''' ) + ''\'')'';
                }
            }
        }
        if(cht_rev_grandeur === ''''){
            cht_rev_grandeur=''0'';
        }
        if(!(form.hasOwnProperty( ''che_actif_grandeur'' ) && this.__ig1.est_num( form[''che_actif_grandeur''] ))){
            return({"__xst" : __xer ,"__xme" : ''che_actif_grandeur est absent ou non numérique ['' + this.__ig1.nl2() + '']''});
        }
        if(!(form.hasOwnProperty( ''chp_cle_grandeur'' ) && form[''chp_cle_grandeur''] !== '''')){
            return({"__xst" : __xer ,"__xme" : ''chp_cle_grandeur est absent ou vide ['' + this.__ig1.nl2() + '']''});
        }
        await __db1.exec( ''BEGIN TRANSACTION;'' );
        /*
          on insert avec un rev null et on ira le modifier plus bas
        */
        let criteres_1187={
            "donnees" : [{
                        "chx_parametre_grandeur" : chi_id_parametre ,
                        "chp_cle_grandeur" : form[''chp_cle_grandeur''] ,
                        "cht_rev_grandeur" : cht_rev_grandeur ,
                        "che_actif_grandeur" : 0
                    }]
        };
        let tt1187=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_grandeurs`(
            `chx_parametre_grandeur` , 
            `chp_cle_grandeur` , 
            `cht_rev_grandeur` , 
            `che_actif_grandeur` , 
            `chd__dtc_grandeur` , 
            `chd__dtm_grandeur` , 
            `che__nur_grandeur`
        ) VALUES (
            :chx_parametre_grandeur , 
            :chp_cle_grandeur , 
            :cht_rev_grandeur , 
            :che_actif_grandeur , 
            :chd__dtc_grandeur , 
            :chd__dtm_grandeur , 
            :che__nur_grandeur
        );
        */
        /*sql_inclure_fin*/ 1187 , criteres_1187 , __db1 );
        if(tt1187.__xst !== __xsu || tt1187[''changements''] !== 1){
            await __db1.exec( ''ROLLBACK;'' );
            return({"__xst" : __xer ,"__xme" : tt1187.__xme + '' l\''insertion a échoué ['' + this.__ig1.nl2() + '']''});
        }
        let chi_id_grandeur=tt1187[''nouvel_id''];
        let che_actif_grandeur=0;
        let chp_cle_grandeur=form[''chp_cle_grandeur''];
        /*
          on réécrit le rev au bon format
        */
        che_actif_grandeur=0;
        /* let cht_rev_grandeur=''''; */
        let criteres_1188={
             /*  */
            "c_chi_id_grandeur" : chi_id_grandeur ,
            "n_chp_cle_grandeur" : chp_cle_grandeur ,
            "n_chc_couleur_texte_grandeur" : null ,
            "n_chc_couleur_fond_grandeur" : null
        };
        let tt1188=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_grandeurs SET 
           `chp_cle_grandeur` = :n_chp_cle_grandeur , 
           `chc_couleur_texte_grandeur` = :n_chc_couleur_texte_grandeur , 
           `chc_couleur_fond_grandeur` = :n_chc_couleur_fond_grandeur
        WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
        */
        /*sql_inclure_fin*/ 1188 , criteres_1188 , __db1 );
        if(tt1188.__xst !== __xsu || tt1188.changements !== 1){
            await __db1.exec( ''ROLLBACK;'' );
            return({"__xst" : __xer ,"__xme" : tt1188.__xme});
        }
        /*
          une fois qu''on a ajouté une grandeur pour ce paramètre,
          il faut aller modifier le rev de tri des paramètres
        */
        let le_rev_ordre=tt1182.__xva[0][''T0_cht_ordre_parametre''];
        if(le_rev_ordre === null){
            le_rev_ordre=String( chi_id_grandeur );
        }else{
            le_rev_ordre=chi_id_grandeur + '','' + le_rev_ordre;
        }
        let criteres_1189={
             /*  */
            "c_chi_id_parametre" : chi_id_parametre ,
            "n_cht_ordre_parametre" : le_rev_ordre
        };
        /* =========================== mise à jour effective ======================== */
        let tt1189=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_parametres SET 
           `cht_ordre_parametre` = :n_cht_ordre_parametre
        WHERE `chi_id_parametre` = :c_chi_id_parametre ;
        */
        /*sql_inclure_fin*/ 1189 , criteres_1189 , __db1 );
        if(tt1189.__xst !== __xsu || tt1189.changements !== 1){
            await __db1.exec( ''ROLLBACK;'' );
            return({"__xst" : __xer ,"__xme" : tt1189.__xme});
        }
        await __db1.exec( ''COMMIT;'' );
        return({"__xst" : __xsu});
    }
}','0',NULL,NULL,'0',NULL,NULL,NULL,'0','1','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('1038','parametres1_c.js','definition_de_classe(
   nom_classe(parametres1),
   contenu(
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(renumeroter_cette_grandeur1),argument(mat),argument(d)),
         contenu(
            declare_variable(l01,mat.length),
            declare_variable(chi_id_grandeur,0),
            declare_variable(chi_id_parametre,0),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,mat.length)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(et(sup(chi_id_grandeur,0),sup(chi_id_parametre,0))),
                  alors(
                     declare_variable(o1,''''),
                     affectop(''+='',o1,''<h1>Attribuer un nouveau numéro à une grandeur</h1>''),
                     affectop(''+='',o1,concat(''le numéro actuel est <b>'',chi_id_grandeur,''</b>'')),
                     affectop(''+='',o1,''<br />''),
                     affectop(''+='',o1,''<div id="vv_grandeurs_nouveau_numero1">''),
                     affectop(''+='',o1,concat(''    <input type="hidden" id="vv_ancien_numero_de_grandeur" value="'',chi_id_grandeur,''" />'')),
                     affectop(''+='',o1,''    le nouveau numéro sera : <input type="text" id="vv_nouveau_numero_de_grandeur" value="" aria-autocomplete="list"/>''),
                     affectop(''+='',o1,''    <br />''),
                     affectop(''+='',o1,''    <button class="yy_b1" rev_clic1="''),
                     affectop(
                        ''+='',
                        o1,
                        concat(
                           ''fo1(co1(vv_grandeurs_nouveau_numero1),pm1(m1(n1('',
                           this.moi,
                           ''),f1(vv_grandeurs_nouveau_numero1(chi_id_parametre('',
                           chi_id_parametre,
                           ''))))))''
                        )
                     ),
                     affectop(''+='',o1,''">attribuer ce nouveau numéro</button>''),
                     affectop(''+='',o1,''</div>''),
                     appelf(element(this.__ig1),nomf(affiche_sous_fenetre1),p(o1)),
                     retourner(obj(("__xst",__xsu)))
                  )
               )
            ),
            retourner(
               obj(
                  ("__xst",__xer),
                  ("__xme",appelf(element(this.__ig1),nomf(nl2),p()))
               )
            )
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(enregistrer_l_ordre_des_grandeurs1),argument(evenement),argument(reference_arbre)),
         contenu(
            declare_variable(chi_id_parametre_en_cours_de_trie,appelf(element(document),nomf(getElementById),p(''chi_id_parametre_en_cours_de_trie''),prop(value))),
            declare_variable(nouvel_ordre,''''),
            boucle_sur_objet_dans(
               pourChaque(dans(declare_variable(i,null()),reference_arbre.arbre)),
               faire(
                  affectop(
                     ''+='',
                     nouvel_ordre,
                     concat('','',tableau(nomt(reference_arbre.arbre[i].attributs),p(''data-chi_id_grandeur'')))
                  )
               )
            ),
            affecte(nouvel_ordre,appelf(element(nouvel_ordre),nomf(substr),p(1))),
            declare_variable(
               obj,
               obj(
                  (
                     "__xac",
                     concat(
                        ''pm1(m1(n1('',
                        this.moi,
                        ''),f1(enregistrer_l_ordre_des_grandeurs2(chi_id_parametre('',
                        chi_id_parametre_en_cours_de_trie,
                        '')))))''
                     )
                  ),
                  ("__xva",obj(("chi_id_parametre_en_cours_de_trie",chi_id_parametre_en_cours_de_trie),("nouvel_ordre",nouvel_ordre)))
               )
            ),
            appelf(element(this.__ig1),nomf(envoyer_un_colis_au_worker),p(obj)),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(modifier_la_valeur_de1),argument(mat),argument(d),argument(données)),
         contenu(
            declare_variable(chi_id_grandeur,0),
            declare_variable(chi_id_parametre,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(co1,données.__co1),
            declare_variable(fo1,données.__fo1[co1]),
            declare_variable(__fo1,obj()),
            affecte(__fo1[co1],fo1),
            appelf(
               element(this.__ig1),
               nomf(envoyer_un_colis_au_worker),
               p(
                  obj(
                     #(  ),
                     (
                        "__xac",
                        concat(
                           ''pm1(m1(n1('',
                           this.moi,
                           ''),f1(modifier_la_valeur_de2(chi_id_grandeur('',
                           chi_id_grandeur,
                           ''),chi_id_parametre('',
                           chi_id_parametre,
                           '')))))''
                        )
                     ),
                     ("__xva",obj(("__fo1",__fo1),("__co1",co1)))
                  )
               )
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(modifier_verouillee_de1),argument(mat),argument(d),argument(données)),
         contenu(
            declare_variable(chi_id_grandeur,0),
            declare_variable(chi_id_parametre,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(co1,données.__co1),
            declare_variable(fo1,données.__fo1[co1]),
            declare_variable(__fo1,obj()),
            affecte(__fo1[co1],fo1),
            appelf(
               element(this.__ig1),
               nomf(envoyer_un_colis_au_worker),
               p(
                  obj(
                     #(  ),
                     (
                        "__xac",
                        concat(
                           ''pm1(m1(n1('',
                           this.moi,
                           ''),f1(modifier_verouille_de2(chi_id_grandeur('',
                           chi_id_grandeur,
                           ''),chi_id_parametre('',
                           chi_id_parametre,
                           '')))))''
                        )
                     ),
                     ("__xva",obj(("__fo1",__fo1),("__co1",co1)))
                  )
               )
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(modifier_actif_de1),argument(mat),argument(d),argument(données)),
         contenu(
            declare_variable(chi_id_grandeur,0),
            declare_variable(chi_id_parametre,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(co1,données.__co1),
            declare_variable(fo1,données.__fo1[co1]),
            declare_variable(__fo1,obj()),
            affecte(__fo1[co1],fo1),
            appelf(
               element(this.__ig1),
               nomf(envoyer_un_colis_au_worker),
               p(
                  obj(
                     #(  ),
                     (
                        "__xac",
                        concat(
                           ''pm1(m1(n1('',
                           this.moi,
                           ''),f1(modifier_actif_de2(chi_id_grandeur('',
                           chi_id_grandeur,
                           ''),chi_id_parametre('',
                           chi_id_parametre,
                           '')))))''
                        )
                     ),
                     ("__xva",obj(("__fo1",__fo1),("__co1",co1)))
                  )
               )
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(modifier_la_cle_de1),argument(mat),argument(d),argument(données)),
         contenu(
            declare_variable(chi_id_grandeur,0),
            declare_variable(chi_id_parametre,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_grandeur''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_grandeur,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     ),
                     sinonsi(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(co1,données.__co1),
            declare_variable(fo1,données.__fo1[co1]),
            declare_variable(__fo1,obj()),
            affecte(__fo1[co1],fo1),
            appelf(
               element(this.__ig1),
               nomf(envoyer_un_colis_au_worker),
               p(
                  obj(
                     #(  ),
                     (
                        "__xac",
                        concat(
                           ''pm1(m1(n1('',
                           this.moi,
                           ''),f1(modifier_la_cle_de2(chi_id_grandeur('',
                           chi_id_grandeur,
                           ''),chi_id_parametre('',
                           chi_id_parametre,
                           '')))))''
                        )
                     ),
                     ("__xva",obj(("__fo1",__fo1),("__co1",co1)))
                  )
               )
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(enregister_nouveau_parametre),argument(mat),argument(d),argument(données)),
         contenu(
            declare_variable(chi_id_parametre,0),
            declare_constante(l01,mat.length),
            boucle(
               initialisation(declare_variable(i,plus(d,1))),
               condition(inf(i,l01)),
               increment(affecte(i,mat[i][12])),
               faire(
                  choix(
                     si(
                        condition(
                           et(
                              egalstricte(mat[i][1],''chi_id_parametre''),
                              egalstricte(mat[i][2],''f''),
                              egalstricte(mat[i][8],1),
                              egalstricte(
                                 tableau(
                                    nomt(
                                       tableau(nomt(mat),p(plus(i,1)))
                                    ),
                                    p(2)
                                 ),
                                 ''c''
                              )
                           )
                        ),
                        alors(
                           affecte(
                              chi_id_parametre,
                              appelf(
                                 nomf(parseInt),
                                 p(
                                    tableau(
                                       nomt(
                                          tableau(nomt(mat),p(plus(i,1)))
                                       ),
                                       p(1)
                                    )
                                 ),
                                 p(10)
                              )
                           )
                        )
                     )
                  )
               )
            ),
            declare_variable(co1,données.__co1),
            declare_variable(fo1,données.__fo1[co1]),
            declare_variable(__fo1,obj()),
            affecte(__fo1[co1],fo1),
            appelf(
               element(this.__ig1),
               nomf(envoyer_un_colis_au_worker),
               p(
                  obj(
                     #(  ),
                     (
                        "__xac",
                        concat(
                           ''pm1(m1(n1('',
                           this.moi,
                           ''),f1(enregister_nouveau_parametre1(chi_id_parametre('',
                           chi_id_parametre,
                           '')))))''
                        )
                     ),
                     ("__xva",obj(("__fo1",__fo1),("__co1",co1)))
                  )
               )
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(f1),argument(mat),argument(d),argument(le_colis1,defaut(null))),
         contenu(
            declare_variable(chi_id_parametre,0),
            declare_constante(l01,mat.length),
            bascule(
               quand(mat[d][1]),
               est(valeur(''enregistrer_l_ordre_des_grandeurs2''),faire()),
               est(valeur(''modifier_la_valeur_de2''),faire()),
               est(valeur(''modifier_actif_de2''),faire()),
               est(valeur(''modifier_verouille_de2''),faire()),
               est(valeur(''modifier_la_cle_de2''),faire()),
               est(valeur(''vv_grandeurs_nouveau_numero1''),faire()),
               est(valeur(''enregister_nouveau_parametre1''),faire()),
               est(
                  valeur(''supprimer_une_grandeur1''),
                  faire(
                     appelf(element(this.__ig1),nomf(fermer_la_sous_fenetre),p()),
                     boucle(
                        initialisation(declare_variable(i,plus(d,1))),
                        condition(inf(i,l01)),
                        increment(affecte(i,mat[i][12])),
                        faire(
                           choix(
                              si(
                                 condition(
                                    et(
                                       egalstricte(mat[i][1],''chi_id_parametre''),
                                       egalstricte(mat[i][2],''f''),
                                       egalstricte(mat[i][8],1),
                                       egalstricte(
                                          tableau(
                                             nomt(
                                                tableau(nomt(mat),p(plus(i,1)))
                                             ),
                                             p(2)
                                          ),
                                          ''c''
                                       )
                                    )
                                 ),
                                 alors(
                                    affecte(
                                       chi_id_parametre,
                                       appelf(
                                          nomf(parseInt),
                                          p(
                                             tableau(
                                                nomt(
                                                   tableau(nomt(mat),p(plus(i,1)))
                                                ),
                                                p(1)
                                             )
                                          ),
                                          p(10)
                                       )
                                    )
                                 )
                              )
                           )
                        )
                     ),
                     choix(
                        si(
                           condition(sup(chi_id_parametre,0)),
                           alors(
                              declare_variable(
                                 cmd,
                                 concat(
                                    ''pm1(m1(n1('',
                                    this.moi,
                                    ''),f1(page_voir1(chi_id_parametre('',
                                    chi_id_parametre,
                                    '')))))''
                                 )
                              ),
                              appelf(
                                 element(this.__ig1),
                                 nomf(executer1),
                                 p(cmd),
                                 p(null),
                                 p(null)
                              )
                           )
                        )
                     ),
                     break()
                  )
               ),
               est(
                  valeurNonPrevue(),
                  faire(
                     retourner(
                        obj(("__xst",__xer),("__xme",concat(''dans l\''interface client "'',mat[d][1],''" n\''est pas traitée ou bien comporte une erreur'')))
                     )
                  )
               )
            ),
            retourner(obj(("__xst",__xsu)))
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(constructor),argument(mat),argument(d),argument(__ig1)),
         contenu(
            affecte(this.__ig1,__ig1),
            boucle_sur_objet_dans(
               pourChaque(dans(declare_variable(i,null()),this.tableau_des_filtres)),
               faire(
                  affecte(this.filtres[i],obj()),
                  boucle_sur_objet_dans(
                     pourChaque(dans(declare_variable(j,null()),this.tableau_des_filtres[i])),
                     faire(
                        affecte(tableau(nomt(this.filtres[i]),p(j)),tableau(nomt(this.tableau_des_filtres[i]),p(j),prop(défaut)))
                     )
                  )
               )
            ),
            declare_variable(
               aa,
               appelf(element(sessionStorage),nomf(getItem),p(concat(this.__ig1.cle_lst0,''_'',this.moi,''_liste1'')))
            ),
            choix(
               si(
                  condition(diffstricte(aa,null)),
                  alors(
                     declare_variable(jso,appelf(element(JSON),nomf(parse),p(aa))),
                     boucle_sur_objet_dans(
                        pourChaque(dans(declare_variable(i,null()),this.tableau_des_filtres.liste1)),
                        faire(affecte(this.filtres.liste1[i],??(jso[i],this.tableau_des_filtres.liste1[i].défaut)))
                     )
                  )
               )
            ),
            choix(
               si(
                  condition(egalstricte(this.__ig1.chi_id_utilisateur,1)),
                  alors(
                     affectop(''+='',this.vv_ecran_liste_boutons_avant,''<button class="yy_svg1 yy__xif" rev_clic1="''),
                     affectop(''+='',this.vv_ecran_liste_boutons_avant,concat(''m1(n1('',this.moi,''),f1(page_creer1()))'')),
                     affectop(
                        ''+='',
                        this.vv_ecran_liste_boutons_avant,
                        concat(
                           ''" title="création '',
                           this.DUN_DUNE_ELEMENT_GERE,
                           ''" >'',
                           this.__ig1.les_svg.nouveau_document,
                           ''</button>''
                        )
                     )
                  )
               )
            )
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(afficher_le_contenu_sous_pg_modif1),argument(mat),argument(d),argument(le_colis1,defaut(null))),
         contenu(
            declare_variable(o1,''''),
            affectop(''+='',o1,''<pre>''),
            affectop(''+='',o1,''champs_des_parametres(\r\n''),
            affectop(''+='',o1,''    un_drapeau(\r\n''),
            affectop(''+='',o1,''        #(un drapeau à 0 ou 1),\r\n''),
            affectop(''+='',o1,''            genre_du_parametre(5)\r\n''),
            affectop(''+='',o1,''        ),\r\n''),
            affectop(''+='',o1,''        un_libellé_complémentaire_de_la_clé(\r\n''),
            affectop(''+='',o1,''            #(un libellé complémentaire de la clé varchar 64 ),\r\n''),
            affectop(''+='',o1,''            genre_du_parametre(12)\r\n''),
            affectop(''+='',o1,''        ),\r\n''),
            affectop(''+='',o1,''        un_texte_complémentaire_de_la_clé(\r\n''),
            affectop(''+='',o1,''            #(un texte complémentaire de la clé TEXT NULL ),\r\n''),
            affectop(''+='',o1,''            genre_du_parametre(6)\r\n''),
            affectop(''+='',o1,''        )\r\n''),
            affectop(''+='',o1,'')</pre>\r\n''),
            choix(
               si(condition(diffstricte(o1,'''')),alors(affectop(''+='',o1,''<div class="yy__bdp1"></div>'')))
            ),
            affecte(appelf(element(document),nomf(getElementById),p(''vv_ecran_modification_zone_complement''),prop(innerHTML)),o1)
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(afficher_le_contenu_sous_pg_voir1),argument(mat),argument(d),argument(le_colis1,defaut(null))),
         contenu(
            declare_variable(tup,le_colis1.__xva.page_voir1.__xva[0]),
            declare_variable(o2,''''),
            choix(
               si(
                  condition(diffstricte(tup.T0_cht_rev_parametre,null)),
                  alors(
                     declare_variable(cht_rev_parametre,tup.T0_cht_rev_parametre),
                     declare_variable(obj_mat2,appelf(element(this.__ig1.__rev1),nomf(t2m),p(cht_rev_parametre))),
                     choix(
                        si(
                           condition(diffstricte(obj_mat2.__xst,__xsu)),
                           alors(
                              retourner(
                                 obj(
                                    ("__xst",__xer),
                                    (
                                       "__xme",
                                       concat("erreur de conversion de cht_rev_parametre [",appelf(element(this.__ig1),nomf(nl2),p()),"]")
                                    )
                                 )
                              )
                           )
                        )
                     ),
                     declare_variable(liste_des_champs_complementaires,[]),
                     declare_variable(mat2,obj_mat2.__xva),
                     affectop(''+='',o2,''<h2>ajouter une grandeur</h2>''),
                     declare_variable(l02,mat2.length),
                     declare_variable(
                        le_tableau_parametre,
                        defTab(
                           #(  ),
                           p(obj(("nom_du_parametre","che_actif_grandeur"),("genre_du_parametre",5),("commentaire_du_parametre",""))),
                           p(obj(("nom_du_parametre","chp_cle_grandeur"),("genre_du_parametre",3),("commentaire_du_parametre","entrez la valeur")))
                        )
                     ),
                     boucle(
                        initialisation(declare_variable(i,1)),
                        condition(inf(i,l02)),
                        increment(affecte(i,mat2[i][12])),
                        faire(
                           choix(
                              si(
                                 condition(et(egalstricte(mat2[i][1],''champs_des_parametres''),egalstricte(mat2[i][2],''f''))),
                                 alors(
                                    boucle(
                                       initialisation(declare_variable(j,plus(i,1))),
                                       condition(inf(j,l02)),
                                       increment(affecte(j,mat2[j][12])),
                                       faire(
                                          declare_variable(nom_du_parametre,''''),
                                          declare_variable(genre_du_parametre,0),
                                          declare_variable(commentaire_du_parametre,''''),
                                          choix(
                                             si(
                                                condition(et(egalstricte(mat2[j][2],''f''),egalstricte(mat2[j][1],''#''))),
                                                alors()
                                             ),
                                             sinonsi(
                                                condition(egalstricte(mat2[j][2],''f'')),
                                                alors(
                                                   affecte(nom_du_parametre,mat2[j][1]),
                                                   boucle(
                                                      initialisation(declare_variable(k,plus(j,1))),
                                                      condition(inf(k,l02)),
                                                      increment(affecte(k,mat2[k][12])),
                                                      faire(
                                                         choix(
                                                            si(
                                                               condition(
                                                                  et(
                                                                     egalstricte(mat2[k][1],''genre_du_parametre''),
                                                                     egalstricte(mat2[k][2],''f''),
                                                                     egalstricte(mat2[k][8],1),
                                                                     egalstricte(
                                                                        tableau(
                                                                           nomt(
                                                                              tableau(nomt(mat2),p(plus(k,1)))
                                                                           ),
                                                                           p(2)
                                                                        ),
                                                                        ''c''
                                                                     )
                                                                  )
                                                               ),
                                                               alors(
                                                                  affecte(
                                                                     genre_du_parametre,
                                                                     appelf(
                                                                        nomf(parseInt),
                                                                        p(
                                                                           tableau(
                                                                              nomt(
                                                                                 tableau(nomt(mat2),p(plus(k,1)))
                                                                              ),
                                                                              p(1)
                                                                           )
                                                                        ),
                                                                        p(10)
                                                                     )
                                                                  )
                                                               )
                                                            ),
                                                            sinonsi(
                                                               condition(et(egalstricte(mat2[k][1],''#''),egalstricte(mat2[k][2],''f''))),
                                                               alors(
                                                                  affecte(commentaire_du_parametre,mat2[k][13]),
                                                                  #(  )
                                                               )
                                                            )
                                                         )
                                                      )
                                                   )
                                                )
                                             )
                                          ),
                                          appelf(element(liste_des_champs_complementaires),nomf(push),p(nom_du_parametre)),
                                          appelf(
                                             element(le_tableau_parametre),
                                             nomf(push),
                                             p(obj(("nom_du_parametre",nom_du_parametre),("genre_du_parametre",genre_du_parametre),("commentaire_du_parametre",commentaire_du_parametre)))
                                          )
                                       )
                                    )
                                 )
                              )
                           )
                        )
                     ),
                     affectop(''+='',o2,''<div id="vv_formulaire_du_parametre" style="text-align:center;">''),
                     affectop(''+='',o2,''<b>clé : </b>''),
                     affectop(''+='',o2,''<input id="chp_cle_grandeur" type="text" class="yy_input1" value="" size="48" style="width:12em;">''),
                     affectop(''+='',o2,''<input id="che_actif_grandeur" type="hidden" value="0">''),
                     affectop(
                        ''+='',
                        o2,
                        concat(
                           ''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_formulaire_du_parametre),m1(n1('',
                           this.moi,
                           ''),f1(enregister_nouveau_parametre(chi_id_parametre('',
                           tup.T0_chi_id_parametre,
                           '')))))" title="ajouter" >ajouter</button>''
                        )
                     ),
                     affectop(''+='',o2,''</div id="vv_formulaire_du_parametre">''),
                     choix(
                        si(
                           condition(diffstricte(tup.T0_cht_ordre_parametre,null)),
                           alors(
                              affectop(''+='',o2,''<h2>grandeurs</h2>''),
                              declare_variable(obj_ordre,appelf(element(this.__ig1.__rev1),nomf(rev_tm),p(tup.T0_cht_ordre_parametre),p(true))),
                              choix(
                                 si(
                                    condition(diffstricte(obj_ordre.__xst,__xsu)),
                                    alors(
                                       retourner(
                                          obj(
                                             ("__xst",__xer),
                                             (
                                                "__xme",
                                                concat("erreur de conversion de cht_ordre_parametre [",appelf(element(this.__ig1),nomf(nl2),p()),"]")
                                             )
                                          )
                                       )
                                    )
                                 )
                              ),
                              declare_variable(mat_ordre,obj_ordre.__xva),
                              declare_variable(les_grandeurs_du_parametre,[]),
                              boucle_sur_objet_dans(
                                 pourChaque(dans(declare_variable(i,null()),le_colis1.__xva.parametres_actuels)),
                                 faire(
                                    appelf(
                                       element(les_grandeurs_du_parametre),
                                       nomf(push),
                                       p(
                                          obj(
                                             (
                                                "ordre_de_tri",
                                                #( ordre de tri = 0 à priori ),
                                                -1
                                             ),
                                             ("chi_id_grandeur",le_colis1.__xva.parametres_actuels[i].T0_chi_id_grandeur),
                                             ("chp_cle_grandeur",le_colis1.__xva.parametres_actuels[i].T0_chp_cle_grandeur),
                                             ("cht_rev_grandeur",le_colis1.__xva.parametres_actuels[i].T0_cht_rev_grandeur),
                                             ("che_actif_grandeur",le_colis1.__xva.parametres_actuels[i].T0_che_actif_grandeur),
                                             ("che_verouillee_grandeur",le_colis1.__xva.parametres_actuels[i].T0_che_verouillee_grandeur),
                                             ("chc_couleur_texte_grandeur",le_colis1.__xva.parametres_actuels[i].T0_chc_couleur_texte_grandeur),
                                             ("chc_couleur_fond_grandeur",le_colis1.__xva.parametres_actuels[i].T0_chc_couleur_fond_grandeur)
                                          )
                                       )
                                    )
                                 )
                              ),
                              boucle(
                                 initialisation(declare_variable(i,0)),
                                 condition(inf(i,les_grandeurs_du_parametre.length)),
                                 increment(i++),
                                 faire(
                                    boucle(
                                       initialisation(declare_variable(j,1)),
                                       condition(inf(j,mat_ordre.length)),
                                       increment(affecte(j,mat_ordre[j][12])),
                                       faire(
                                          choix(
                                             si(
                                                condition(
                                                   egalstricte(appelf(nomf(parseInt),p(mat_ordre[j][1]),p(10)),les_grandeurs_du_parametre[i].chi_id_grandeur)
                                                ),
                                                alors(affecte(les_grandeurs_du_parametre[i].ordre_de_tri,moins(j,1)),break())
                                             )
                                          )
                                       )
                                    )
                                 )
                              ),
                              appelf(
                                 element(les_grandeurs_du_parametre),
                                 nomf(sort),
                                 p(
                                    appelf(
                                       flechee(),
                                       p(a),
                                       p(b),
                                       contenu(
                                          choix(
                                             si(condition(inf(a.ordre_de_tri,b.ordre_de_tri)),alors(retourner(-1))),
                                             sinonsi(condition(sup(a.ordre_de_tri,b.ordre_de_tri)),alors(retourner(1)))
                                          ),
                                          retourner(0)
                                       )
                                    )
                                 )
                              ),
                              affectop(''+='',o2,''<div class="yy_conteneur_table">''),
                              affectop(''+='',o2,''<table border="1"  style="min-width:90%;">''),
                              affectop(''+='',o2,''<tr>''),
                              affectop(''+='',o2,''<th style="min-width:5em;">id</th>''),
                              affectop(''+='',o2,''<th style="max-width:5em;">actif</th>''),
                              choix(
                                 si(condition(egalstricte(this.__ig1.chi_id_utilisateur,1)),alors(affectop(''+='',o2,''<th style="max-width:5em;">vérouillé</th>'')))
                              ),
                              affectop(''+='',o2,''<th>cle / couleurs texte et fond</th>''),
                              affectop(''+='',o2,''<th>valeurs</th>''),
                              affectop(''+='',o2,''</tr>''),
                              boucle(
                                 initialisation(declare_variable(i,0)),
                                 condition(inf(i,les_grandeurs_du_parametre.length)),
                                 increment(i++),
                                 faire(
                                    affectop(''+='',o2,''<tr>''),
                                    #(
                                      colonne id
                                    ),
                                    affectop(''+='',o2,''<td style="max-width:3em;text-align:center;">''),
                                    choix(
                                       si(
                                          condition(egalstricte(this.__ig1.chi_id_utilisateur,1)),
                                          alors(affectop(''+='',o2,concat(''<button class="yy_svg1 yy__3" rev_clic1="m1(n1('',this.moi,''),f1(renumeroter_cette_grandeur1('')),affectop(''+='',o2,concat(''chi_id_grandeur('',les_grandeurs_du_parametre[i].chi_id_grandeur,''),'')),affectop(''+='',o2,concat(''chi_id_parametre('',tup.T0_chi_id_parametre,''),'')),affectop(''+='',o2,concat('')))" title="renumeroter cette grandeur">'',this.__ig1.les_svg.renuméroter,''</button>'')))
                                       )
                                    ),
                                    choix(
                                       si(
                                          condition(egalstricte(les_grandeurs_du_parametre[i].che_verouillee_grandeur,0)),
                                          alors(affectop(''+='',o2,concat(''<button class="yy_svg1 yy__0" rev_clic1="confirmer1(pm1(m1(n1('',this.moi,''),f1(supprimer_une_grandeur1('')),affectop(''+='',o2,concat(''chi_id_grandeur('',les_grandeurs_du_parametre[i].chi_id_grandeur,''),'')),affectop(''+='',o2,concat(''chi_id_parametre('',tup.T0_chi_id_parametre,''),'')),affectop(''+='',o2,concat('')))))" title="supprimer cette grandeur">'',this.__ig1.les_svg.poubelle,''</button>'')))
                                       )
                                    ),
                                    affectop(''+='',o2,concat('' '',les_grandeurs_du_parametre[i].chi_id_grandeur)),
                                    affectop(''+='',o2,''</td>''),
                                    #(
                                      colonne actif
                                    ),
                                    affectop(''+='',o2,''<td style="max-width:5em;">''),
                                    affectop(''+='',o2,concat(''<div id="vv_modifier_actif_de_'',les_grandeurs_du_parametre[i].chi_id_grandeur,''">'')),
                                    affectop(
                                       ''+='',
                                       o2,
                                       concat(
                                          ''<input type="range" id="che_actif_grandeur_'',
                                          les_grandeurs_du_parametre[i].chi_id_grandeur,
                                          ''" class="yy_ouinon" min="0" max="1" step="1" value="'',
                                          les_grandeurs_du_parametre[i].che_actif_grandeur,
                                          ''">''
                                       )
                                    ),
                                    #(  ),
                                    affectop(
                                       ''+='',
                                       o2,
                                       concat(
                                          ''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_actif_de_'',
                                          les_grandeurs_du_parametre[i].chi_id_grandeur,
                                          ''),m1(n1('',
                                          this.moi,
                                          ''),f1(modifier_actif_de1(''
                                       )
                                    ),
                                    affectop(''+='',o2,concat(''chi_id_grandeur('',les_grandeurs_du_parametre[i].chi_id_grandeur,''),'')),
                                    affectop(''+='',o2,concat(''chi_id_parametre('',tup.T0_chi_id_parametre,'')'')),
                                    affectop(''+='',o2,''))))" title="modifier">💾</button>''),
                                    affectop(''+='',o2,''</div>''),
                                    affectop(''+='',o2,''</td>''),
                                    #(
                                      colonne vérouillé si dev
                                    ),
                                    choix(
                                       si(
                                          condition(egalstricte(this.__ig1.chi_id_utilisateur,1)),
                                          alors(
                                             affectop(''+='',o2,''<td style="max-width:3em;text-align:center;">''),
                                             affectop(''+='',o2,concat(''<div id="vv_modifier_verouillee_de_'',les_grandeurs_du_parametre[i].chi_id_grandeur,''">'')),
                                             affectop(
                                                ''+='',
                                                o2,
                                                concat(
                                                   ''<input type="range" id="che_verouillee_grandeur_'',
                                                   les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                   ''" class="yy_ouinon" min="0" max="1" step="1" value="'',
                                                   les_grandeurs_du_parametre[i].che_verouillee_grandeur,
                                                   ''">''
                                                )
                                             ),
                                             #(  ),
                                             affectop(
                                                ''+='',
                                                o2,
                                                concat(
                                                   ''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_verouillee_de_'',
                                                   les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                   ''),m1(n1('',
                                                   this.moi,
                                                   ''),f1(modifier_verouillee_de1(''
                                                )
                                             ),
                                             affectop(''+='',o2,concat(''chi_id_grandeur('',les_grandeurs_du_parametre[i].chi_id_grandeur,''),'')),
                                             affectop(''+='',o2,concat(''chi_id_parametre('',tup.T0_chi_id_parametre,'')'')),
                                             affectop(''+='',o2,''))))" title="modifier">💾</button>''),
                                             affectop(''+='',o2,''</div>''),
                                             affectop(''+='',o2,''</td>'')
                                          )
                                       )
                                    ),
                                    #(
                                      colonne cle et couleur
                                    ),
                                    affectop(''+='',o2,''<td>''),
                                    #( clé ),
                                    affectop(''+='',o2,concat(''<div id="vv_modifier_la_cle_de_'',les_grandeurs_du_parametre[i].chi_id_grandeur,''">'')),
                                    #(  ),
                                    affectop(
                                       ''+='',
                                       o2,
                                       concat(
                                          ''  <button style="" class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_la_cle_de_'',
                                          les_grandeurs_du_parametre[i].chi_id_grandeur,
                                          ''),m1(n1('',
                                          this.moi,
                                          ''),f1(modifier_la_cle_de1(''
                                       )
                                    ),
                                    affectop(''+='',o2,concat(''chi_id_grandeur('',les_grandeurs_du_parametre[i].chi_id_grandeur,''),'')),
                                    affectop(''+='',o2,concat(''chi_id_parametre('',tup.T0_chi_id_parametre,'')'')),
                                    affectop(''+='',o2,''))))" title="modifier">💾</button>''),
                                    #(  ),
                                    affectop(
                                       ''+='',
                                       o2,
                                       concat(
                                          ''<input type="text" class="yy_input1" size="15" maxlength="64" id="chp_cle_grandeur_'',
                                          les_grandeurs_du_parametre[i].chi_id_grandeur,
                                          ''" class="" value="'',
                                          les_grandeurs_du_parametre[i].chp_cle_grandeur,
                                          ''"''
                                       )
                                    ),
                                    choix(
                                       si(
                                          condition(et(diffstricte(les_grandeurs_du_parametre[i].chc_couleur_texte_grandeur,null),diffstricte(les_grandeurs_du_parametre[i].chc_couleur_fond_grandeur,null))),
                                          alors(
                                             affectop(
                                                ''+='',
                                                o2,
                                                concat(
                                                   '' style="background:'',
                                                   les_grandeurs_du_parametre[i].chc_couleur_fond_grandeur,
                                                   '';color:'',
                                                   les_grandeurs_du_parametre[i].chc_couleur_texte_grandeur,
                                                   ''"''
                                                )
                                             )
                                          )
                                       )
                                    ),
                                    affectop(''+='',o2,'' />''),
                                    #(  ),
                                    #( couleur ),
                                    affectop(''+='',o2,''<div style="display:inline-block;">''),
                                    affectop(
                                       ''+='',
                                       o2,
                                       concat(
                                          ''  <input type="hidden" id="chc_couleur_texte_grandeur_'',
                                          les_grandeurs_du_parametre[i].chi_id_grandeur,
                                          ''" value="'',
                                          ??(les_grandeurs_du_parametre[i].chc_couleur_texte_grandeur,''''),
                                          ''" />''
                                       )
                                    ),
                                    affectop(
                                       ''+='',
                                       o2,
                                       concat(
                                          ''  <input type="hidden" id="chc_couleur_fond_grandeur_'',
                                          les_grandeurs_du_parametre[i].chi_id_grandeur,
                                          ''" value="'',
                                          ??(les_grandeurs_du_parametre[i].chc_couleur_fond_grandeur,''''),
                                          ''" />''
                                       )
                                    ),
                                    affectop(''+='',o2,''<div class="">''),
                                    affectop(''+='',o2,''  <button class="yy_svg1 rev_b_ctxt" rev_clic1="m1(n1(__fnt1),f1(maj_couleur1(''),
                                    affectop(''+='',o2,concat(''nom_du_champ1(chc_couleur_fond_grandeur_'',les_grandeurs_du_parametre[i].chi_id_grandeur,'')'')),
                                    affectop(''+='',o2,concat(''nom_du_champ2(chc_couleur_texte_grandeur_'',les_grandeurs_du_parametre[i].chi_id_grandeur,'')'')),
                                    affectop(''+='',o2,concat(''nom_du_champ_a_modifier(chp_cle_grandeur_'',les_grandeurs_du_parametre[i].chi_id_grandeur,'')'')),
                                    affectop(''+='',o2,''format_palette(2_couleurs)''),
                                    affectop(''+='',o2,concat('')))">'',this.__ig1.les_svg.palette,''</button>'')),
                                    affectop(''+='',o2,''  <div class="yy_b1 yy__4" rev_clic1="m1(n1(__fnt1),f1(raz_zone_couleur2(''),
                                    affectop(''+='',o2,concat(''nom_du_champ1(chc_couleur_fond_grandeur_'',les_grandeurs_du_parametre[i].chi_id_grandeur,'')'')),
                                    affectop(''+='',o2,concat(''nom_du_champ2(chc_couleur_texte_grandeur_'',les_grandeurs_du_parametre[i].chi_id_grandeur,'')'')),
                                    affectop(''+='',o2,concat(''nom_du_champ_a_modifier(chp_cle_grandeur_'',les_grandeurs_du_parametre[i].chi_id_grandeur,'')'')),
                                    affectop(''+='',o2,'')))" >x</div>''),
                                    affectop(''+='',o2,''</div>''),
                                    #(  ),
                                    affectop(''+='',o2,''</div>''),
                                    affectop(''+='',o2,''</div>''),
                                    affectop(''+='',o2,''</td>''),
                                    #(
                                    ),
                                    affectop(''+='',o2,''<td>''),
                                    choix(
                                       si(
                                          condition(diffstricte(les_grandeurs_du_parametre[i].cht_rev_grandeur,''0'')),
                                          alors(
                                             affectop(''+='',o2,''<table style="min-width:100%;">''),
                                             declare_variable(obj_cht_rev_grandeur,appelf(element(this.__ig1.__rev1),nomf(t2m),p(les_grandeurs_du_parametre[i].cht_rev_grandeur))),
                                             choix(
                                                si(
                                                   condition(diffstricte(obj_cht_rev_grandeur.__xst,__xsu)),
                                                   alors(
                                                      retourner(
                                                         obj(
                                                            ("__xst",__xer),
                                                            (
                                                               "__xme",
                                                               concat("erreur de conversion de cht_rev_grandeur [",appelf(element(this.__ig1),nomf(nl2),p()),"]")
                                                            )
                                                         )
                                                      )
                                                   )
                                                )
                                             ),
                                             declare_variable(mat3,obj_cht_rev_grandeur.__xva),
                                             declare_variable(l03,mat3.length),
                                             declare_variable(liste_des_noms_affiches,[]),
                                             boucle(
                                                initialisation(declare_variable(j,1)),
                                                condition(inf(j,l03)),
                                                increment(affecte(j,mat3[j][12])),
                                                faire(
                                                   choix(
                                                      si(
                                                         condition(egalstricte(mat3[j][2],''f'')),
                                                         alors(
                                                            declare_variable(nom_d_val,''''),
                                                            declare_variable(valeur_de_val,''''),
                                                            choix(
                                                               si(
                                                                  condition(
                                                                     et(
                                                                        egalstricte(mat3[j][2],''f''),
                                                                        egalstricte(mat3[j][8],1),
                                                                        egalstricte(
                                                                           tableau(
                                                                              nomt(
                                                                                 tableau(nomt(mat3),p(plus(j,1)))
                                                                              ),
                                                                              p(2)
                                                                           ),
                                                                           ''c''
                                                                        )
                                                                     )
                                                                  ),
                                                                  alors(
                                                                     affecte(nom_d_val,mat3[j][1]),
                                                                     affecte(
                                                                        valeur_de_val,
                                                                        tableau(
                                                                           nomt(
                                                                              tableau(nomt(mat3),p(plus(j,1)))
                                                                           ),
                                                                           p(1)
                                                                        )
                                                                     ),
                                                                     i
                                                                  )
                                                               )
                                                            ),
                                                            choix(
                                                               si(
                                                                  condition(
                                                                     et(diffstricte(nom_d_val,''''),appelf(element(liste_des_champs_complementaires),nomf(includes),p(nom_d_val)))
                                                                  ),
                                                                  alors(
                                                                     affectop(''+='',o2,''<tr>''),
                                                                     affectop(''+='',o2,''<td>''),
                                                                     appelf(element(liste_des_noms_affiches),nomf(push),p(nom_d_val)),
                                                                     affectop(''+='',o2,nom_d_val),
                                                                     affectop(''+='',o2,''</td>''),
                                                                     affectop(''+='',o2,''<td>''),
                                                                     #( o2+=valeur_de_val; ),
                                                                     affectop(
                                                                        ''+='',
                                                                        o2,
                                                                        concat(
                                                                           ''<div id="vv_modifier_la_valeur_de_'',
                                                                           les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                           ''_'',
                                                                           j,
                                                                           ''">''
                                                                        )
                                                                     ),
                                                                     #(  ),
                                                                     affectop(
                                                                        ''+='',
                                                                        o2,
                                                                        concat(
                                                                           ''<input type="hidden" id="__le_nom_de_la_valeur_'',
                                                                           les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                           ''_'',
                                                                           j,
                                                                           ''" class="" value="'',
                                                                           nom_d_val,
                                                                           ''" />''
                                                                        )
                                                                     ),
                                                                     declare_variable(genre_de_la_grandeur,0),
                                                                     boucle(
                                                                        initialisation(declare_variable(k,0)),
                                                                        condition(inf(k,le_tableau_parametre.length)),
                                                                        increment(k++),
                                                                        faire(
                                                                           choix(
                                                                              si(condition(egalstricte(le_tableau_parametre[k].nom_du_parametre,nom_d_val)),alors(affecte(genre_de_la_grandeur,le_tableau_parametre[k].genre_du_parametre)))
                                                                           )
                                                                        )
                                                                     ),
                                                                     choix(
                                                                        si(
                                                                           condition(egalstricte(genre_de_la_grandeur,5)),
                                                                           alors(
                                                                              affectop(
                                                                                 ''+='',
                                                                                 o2,
                                                                                 concat(
                                                                                    ''<input type="range" id="'',
                                                                                    nom_d_val,
                                                                                    ''_'',
                                                                                    les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                                    ''" class="yy_ouinon" min="0" max="1" step="1" value="'',
                                                                                    valeur_de_val,
                                                                                    ''" />''
                                                                                 )
                                                                              )
                                                                           )
                                                                        ),
                                                                        sinonsi(
                                                                           condition(egalstricte(genre_de_la_grandeur,6)),
                                                                           alors(
                                                                              affectop(
                                                                                 ''+='',
                                                                                 o2,
                                                                                 concat(
                                                                                    ''<textarea id="'',
                                                                                    nom_d_val,
                                                                                    ''_'',
                                                                                    les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                                    ''">'',
                                                                                    appelf(
                                                                                       element(
                                                                                          appelf(
                                                                                             element(
                                                                                                appelf(
                                                                                                   element(
                                                                                                      appelf(
                                                                                                         element(appelf(element(valeur_de_val),nomf(replace),p(/\\\\/g),p(''\\''))),
                                                                                                         nomf(replace),
                                                                                                         p(/\\\''/g),
                                                                                                         p(''\'''')
                                                                                                      )
                                                                                                   ),
                                                                                                   nomf(replace),
                                                                                                   p(/¶LF¶/g),
                                                                                                   p(''\n'')
                                                                                                )
                                                                                             ),
                                                                                             nomf(replace),
                                                                                             p(/¶CR¶/g),
                                                                                             p(''\r'')
                                                                                          )
                                                                                       ),
                                                                                       nomf(replace),
                                                                                       p(/¶CRLF¶/g),
                                                                                       p(''\r\n'')
                                                                                    ),
                                                                                    ''</textarea>''
                                                                                 )
                                                                              )
                                                                           )
                                                                        ),
                                                                        sinon(
                                                                           alors(
                                                                              affectop(
                                                                                 ''+='',
                                                                                 o2,
                                                                                 concat(
                                                                                    ''<input type="text" id="'',
                                                                                    nom_d_val,
                                                                                    ''_'',
                                                                                    les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                                    ''" class="" value="'',
                                                                                    appelf(
                                                                                       element(appelf(element(valeur_de_val),nomf(replace),p(/\\\\/g),p(''\\''))),
                                                                                       nomf(replace),
                                                                                       p(/\\\''/g),
                                                                                       p(''\'''')
                                                                                    ),
                                                                                    ''" />''
                                                                                 )
                                                                              )
                                                                           )
                                                                        )
                                                                     ),
                                                                     affecte(tableau(nomt(les_grandeurs_du_parametre[i]),p(''valeur_de_val'')),valeur_de_val),
                                                                     #(  ),
                                                                     affectop(
                                                                        ''+='',
                                                                        o2,
                                                                        concat(
                                                                           ''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_la_valeur_de_'',
                                                                           les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                           ''_'',
                                                                           j,
                                                                           ''),m1(n1('',
                                                                           this.moi,
                                                                           ''),f1(modifier_la_valeur_de1(''
                                                                        )
                                                                     ),
                                                                     affectop(''+='',o2,concat(''chi_id_grandeur('',les_grandeurs_du_parametre[i].chi_id_grandeur,''),'')),
                                                                     affectop(''+='',o2,concat(''chi_id_parametre('',tup.T0_chi_id_parametre,'')'')),
                                                                     affectop(''+='',o2,''))))" title="modifier">💾</button>''),
                                                                     #(  ),
                                                                     affectop(''+='',o2,''</div>''),
                                                                     affectop(''+='',o2,''</td>''),
                                                                     affectop(''+='',o2,''</tr>'')
                                                                  )
                                                               )
                                                            )
                                                         )
                                                      )
                                                   )
                                                )
                                             ),
                                             boucle(
                                                initialisation(declare_variable(k,0)),
                                                condition(inf(k,le_tableau_parametre.length)),
                                                increment(k++),
                                                faire(
                                                   #( k ),
                                                   choix(
                                                      si(
                                                         condition(ou(egalstricte(le_tableau_parametre[k].nom_du_parametre,"che_actif_grandeur"),egalstricte(le_tableau_parametre[k].nom_du_parametre,"chp_cle_grandeur"))),
                                                         alors()
                                                      ),
                                                      sinon(
                                                         alors(
                                                            choix(
                                                               si(
                                                                  condition(appelf(element(liste_des_noms_affiches),nomf(includes),p(le_tableau_parametre[k].nom_du_parametre))),
                                                                  alors(
                                                                     #( déjà affiché plus haut )
                                                                  )
                                                               ),
                                                               sinon(
                                                                  alors(
                                                                     affectop(''+='',o2,''<tr>''),
                                                                     affectop(''+='',o2,''<td>''),
                                                                     affectop(''+='',o2,concat(''<span class="yy__0">'',le_tableau_parametre[k].nom_du_parametre,''</span>'')),
                                                                     #( nom_d_val ),
                                                                     affectop(''+='',o2,''</td>''),
                                                                     affectop(''+='',o2,''<td>''),
                                                                     #( debugger ),
                                                                     affectop(
                                                                        ''+='',
                                                                        o2,
                                                                        concat(
                                                                           ''<div id="vv_modifier_la_valeur_de_'',
                                                                           les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                           ''_'',
                                                                           k,
                                                                           ''">''
                                                                        )
                                                                     ),
                                                                     #(  ),
                                                                     affectop(
                                                                        ''+='',
                                                                        o2,
                                                                        concat(
                                                                           ''<input type="hidden" id="__le_nom_de_la_valeur_'',
                                                                           les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                           ''_'',
                                                                           k,
                                                                           ''" class="" value="'',
                                                                           le_tableau_parametre[k].nom_du_parametre,
                                                                           ''" />''
                                                                        )
                                                                     ),
                                                                     declare_variable(genre_de_la_grandeur,le_tableau_parametre[k].genre_du_parametre),
                                                                     choix(
                                                                        si(
                                                                           condition(egalstricte(genre_de_la_grandeur,5)),
                                                                           alors(
                                                                              affectop(
                                                                                 ''+='',
                                                                                 o2,
                                                                                 concat(
                                                                                    ''<input type="range" id="'',
                                                                                    le_tableau_parametre[k].nom_du_parametre,
                                                                                    ''_'',
                                                                                    les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                                    ''" class="yy_ouinon" min="0" max="1" step="1" value="0" />''
                                                                                 )
                                                                              )
                                                                           )
                                                                        ),
                                                                        sinon(
                                                                           alors(
                                                                              affectop(
                                                                                 ''+='',
                                                                                 o2,
                                                                                 concat(
                                                                                    ''<input type="text" id="'',
                                                                                    le_tableau_parametre[k].nom_du_parametre,
                                                                                    ''_'',
                                                                                    les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                                    ''" class="" value="" />''
                                                                                 )
                                                                              )
                                                                           )
                                                                        )
                                                                     ),
                                                                     #(  ),
                                                                     affectop(
                                                                        ''+='',
                                                                        o2,
                                                                        concat(
                                                                           ''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_la_valeur_de_'',
                                                                           les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                           ''_'',
                                                                           k,
                                                                           ''),m1(n1('',
                                                                           this.moi,
                                                                           ''),f1(modifier_la_valeur_de1(''
                                                                        )
                                                                     ),
                                                                     affectop(''+='',o2,concat(''chi_id_grandeur('',les_grandeurs_du_parametre[i].chi_id_grandeur,''),'')),
                                                                     affectop(''+='',o2,concat(''chi_id_parametre('',tup.T0_chi_id_parametre,'')'')),
                                                                     affectop(''+='',o2,''))))" title="modifier">💾</button>''),
                                                                     #(  ),
                                                                     affectop(''+='',o2,''</div>''),
                                                                     affectop(''+='',o2,''</td>''),
                                                                     affectop(''+='',o2,''</tr>'')
                                                                  )
                                                               )
                                                            )
                                                         )
                                                      )
                                                   )
                                                )
                                             ),
                                             affectop(''+='',o2,''</table>'')
                                          )
                                       ),
                                       sinon(
                                          alors(
                                             #( si on modifie le rev du paramètre et que précédamment il est = ''0''; ),
                                             affectop(''+='',o2,''<table style="min-width:100%;">''),
                                             boucle(
                                                initialisation(declare_variable(j,0)),
                                                condition(inf(j,le_tableau_parametre.length)),
                                                increment(j++),
                                                faire(
                                                   choix(
                                                      si(
                                                         condition(ou(egalstricte(le_tableau_parametre[j].nom_du_parametre,''che_actif_grandeur''),egalstricte(le_tableau_parametre[j].nom_du_parametre,''chp_cle_grandeur''))),
                                                         alors(
                                                            #( pas pour les champs toujours présents )
                                                         )
                                                      ),
                                                      sinon(
                                                         alors(
                                                            affectop(''+='',o2,''<tr>''),
                                                            affectop(''+='',o2,''<td>''),
                                                            affectop(''+='',o2,concat(''<span class="yy__2">'',le_tableau_parametre[j].nom_du_parametre,''</span>'')),
                                                            affectop(''+='',o2,''</td>''),
                                                            affectop(''+='',o2,''<td>''),
                                                            #( o2+=valeur_de_val; ),
                                                            affectop(
                                                               ''+='',
                                                               o2,
                                                               concat(
                                                                  ''<div id="vv_modifier_la_valeur_de_'',
                                                                  les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                  ''_'',
                                                                  j,
                                                                  ''">''
                                                               )
                                                            ),
                                                            #(  ),
                                                            affectop(
                                                               ''+='',
                                                               o2,
                                                               concat(
                                                                  ''<input type="hidden" id="__le_nom_de_la_valeur_'',
                                                                  les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                  ''_'',
                                                                  j,
                                                                  ''" class="" value="'',
                                                                  le_tableau_parametre[j].nom_du_parametre,
                                                                  ''" />''
                                                               )
                                                            ),
                                                            choix(
                                                               si(
                                                                  condition(egalstricte(le_tableau_parametre[j].genre_du_parametre,5)),
                                                                  alors(
                                                                     affectop(
                                                                        ''+='',
                                                                        o2,
                                                                        concat(
                                                                           ''<input type="range" id="'',
                                                                           le_tableau_parametre[j].nom_du_parametre,
                                                                           ''_'',
                                                                           les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                           ''" class="yy_ouinon" min="0" max="1" step="1" value="0" >''
                                                                        )
                                                                     )
                                                                  )
                                                               ),
                                                               sinon(
                                                                  alors(
                                                                     affectop(
                                                                        ''+='',
                                                                        o2,
                                                                        concat(
                                                                           ''<input type="text" id="'',
                                                                           le_tableau_parametre[j].nom_du_parametre,
                                                                           ''_'',
                                                                           les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                           ''" class="" value="" />''
                                                                        )
                                                                     )
                                                                  )
                                                               )
                                                            ),
                                                            #(  ),
                                                            affectop(
                                                               ''+='',
                                                               o2,
                                                               concat(
                                                                  ''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_la_valeur_de_'',
                                                                  les_grandeurs_du_parametre[i].chi_id_grandeur,
                                                                  ''_'',
                                                                  j,
                                                                  ''),m1(n1('',
                                                                  this.moi,
                                                                  ''),f1(modifier_la_valeur_de1(''
                                                               )
                                                            ),
                                                            affectop(''+='',o2,concat(''chi_id_grandeur('',les_grandeurs_du_parametre[i].chi_id_grandeur,''),'')),
                                                            affectop(''+='',o2,concat(''chi_id_parametre('',tup.T0_chi_id_parametre,'')'')),
                                                            affectop(''+='',o2,''))))" title="modifier">💾</button>''),
                                                            #(  ),
                                                            affectop(''+='',o2,''</div>''),
                                                            affectop(''+='',o2,''</td>''),
                                                            affectop(''+='',o2,''</tr>'')
                                                         )
                                                      )
                                                   )
                                                )
                                             ),
                                             affectop(''+='',o2,''</table>'')
                                          )
                                       )
                                    ),
                                    affectop(''+='',o2,''</td>''),
                                    #( "1( chp_cle_grandeur(fr) che_actif_grandeur(1) val_1(''français''))" ),
                                    affectop(''+='',o2,''</tr>'')
                                 )
                              ),
                              affectop(''+='',o2,''</table>''),
                              affectop(''+='',o2,''</div>''),
                              #(
                                tri
                              ),
                              choix(
                                 si(
                                    condition(supeg(les_grandeurs_du_parametre.length,1)),
                                    alors(
                                       affectop(''+='',o2,''<hr /><h2>tri des grandeurs</h2>''),
                                       affectop(''+='',o2,concat(''<input type="hidden" id="chi_id_parametre_en_cours_de_trie" value="'',tup.T0_chi_id_parametre,''" />'')),
                                       affectop(''+='',o2,''<div  style="display:flex;padding-bottom:3em;">''),
                                       affectop(''+='',o2,'' <div style="margin : 0 auto 0 auto;">''),
                                       affectop(''+='',o2,concat(''   <ul id="vv_tri_'',this.moi,''">'')),
                                       boucle_sur_objet_dans(
                                          pourChaque(dans(declare_variable(i,null()),les_grandeurs_du_parametre)),
                                          faire(
                                             affectop(''+='',o2,concat(''      <li data-chi_id_grandeur="'',les_grandeurs_du_parametre[i].chi_id_grandeur,''">'')),
                                             affectop(''+='',o2,''      <div>''),
                                             choix(
                                                si(
                                                   condition(egalstricte(les_grandeurs_du_parametre[i].che_actif_grandeur,0)),
                                                   alors(affectop(''+='',o2,concat(''<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">'',this.__ig1.les_svg.rond_rouge1,''</div>'')))
                                                ),
                                                sinon(
                                                   alors(affectop(''+='',o2,concat(''<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">'',this.__ig1.les_svg.rond_vert1,''</div>'')))
                                                )
                                             ),
                                             affectop(''+='',o2,concat(les_grandeurs_du_parametre[i].chp_cle_grandeur,'''')),
                                             affectop(''+='',o2,''      </div>''),
                                             affectop(''+='',o2,''     </li>'')
                                          )
                                       ),
                                       affectop(''+='',o2,''   </ul>''),
                                       affectop(''+='',o2,'' </div>''),
                                       affectop(''+='',o2,''</div>''),
                                       declare_variable(
                                          options1,
                                          obj(
                                             (
                                                "hauteur_max_en_vh",
                                                #( entre 20 et 80 ),
                                                80
                                             ),
                                             (
                                                "largeur_max",
                                                #( ''calc(100% - 50px)'', ),
                                                ''340px''
                                             ),
                                             ("afficher_le_bouton_supprimer",0),
                                             ("class_du_bouton_supprimer",''yy_b1 yy__0''),
                                             ("arborescent",0),
                                             ("class_du_bouton_deplacer",''yy_b1''),
                                             ("boutons_du_menu",[]),
                                             ("class_du_bouton_menu",''yy_b1''),
                                             ("class_du_bouton_replier",''yy_b1 yy__2'')
                                          )
                                       ),
                                       appelf(
                                          element(options1.boutons_du_menu),
                                          nomf(push),
                                          p(
                                             obj(
                                                ("libelle",''💾''),
                                                ("fonction",appelf(element(this.enregistrer_l_ordre_des_grandeurs1),nomf(bind),p(this)))
                                             )
                                          )
                                       ),
                                       affecte(tableau(nomt(options1),p(''afficher_le_bouton_editer'')),0),
                                       affecte(tableau(nomt(options1),p(''class_du_bouton_editer'')),''yy_b1 yy__xif''),
                                       appelf(
                                          element(
                                             appelf(nomf(import),p(concat(''./f0?n0=_tri_arbre1_c.js&__version='',this.__version)))
                                          ),
                                          nomf(then),
                                          p(
                                             appelf(
                                                flechee(),
                                                p(le_module),
                                                contenu(
                                                   declare_variable(
                                                      aa,
                                                      new(
                                                         appelf(
                                                            nomf(tableau(nomt(le_module),p(''_tri_arbre1''))),
                                                            p(this)
                                                         )
                                                      )
                                                   ),
                                                   appelf(element(aa),nomf(construire_arbre),p(concat(''vv_tri_'',this.moi)),p(options1))
                                                )
                                             )
                                          )
                                       )
                                    )
                                 )
                              ),
                              choix(
                                 si(
                                    condition(egalstricte(les_grandeurs_du_parametre.length,0)),
                                    alors(affectop(''+='',o2,concat(''<button class="yy_svg1 yy__2" rev_clic1="pm1(m1(n1(parametres1),f1(page_confirmation_supprimer1(chi_id_parametre('',tup.T0_chi_id_parametre,'')))))" >'')),affectop(''+='',o2,''vous pouvez supprimer ce paramétrage''),affectop(''+='',o2,''</button>''))
                                 )
                              )
                           )
                        )
                     )
                  )
               )
            ),
            choix(
               si(condition(diffstricte(o2,'''')),alors(affectop(''+='',o2,''<div class="yy__bdp1"></div>'')))
            ),
            affecte(appelf(element(document),nomf(getElementById),p(''vv_ecran_visualisation_zone_complement''),prop(innerHTML)),o2),
            choix(
               si(
                  condition(sup(this.__ig1.__decallage_page_avant_envoi,0)),
                  alors(
                     essayer(
                        faire(
                           appelf(
                              nomf(setTimeout),
                              p(
                                 appelf(
                                    flechee(),
                                    p(),
                                    contenu(
                                       appelf(
                                          element(window),
                                          nomf(scrollTo),
                                          p(obj(("top",this.__ig1.__decallage_page_avant_envoi)))
                                       ),
                                       affecte(this.__ig1.__decallage_page_avant_envoi,0)
                                    )
                                 )
                              ),
                              p(50)
                           )
                        ),
                        sierreur(e,faire(debugger()))
                     )
                  )
               )
            )
         )
      ),
      #(
        =========================================================================================================
      ),
      méthode(
         definition(nom(liste_des_boutons_action1),argument(tup),argument(le_colis1)),
         contenu(
            declare_variable(lst,''''),
            affectop(''+='',lst,''<div class="yy_act1">''),
            #( fonctions_spéciales1(ne_pas_supprimer_id_un(...)) ),
            choix(
               si(
                  condition(egalstricte(this.__ig1.chi_id_utilisateur,1)),
                  alors(
                     choix(
                        si(
                           condition(appelf(element([10000]),nomf(includes),p(tup.T0_chi_id_parametre))),
                           alors(affectop(''+='',lst,concat(''<button class="yy_svg1 yy__2 yy__2_inactif" disabled="true">'',this.__ig1.les_svg.poubelle,''</button>'')))
                        ),
                        sinon(
                           alors(
                              affectop(''+='',lst,''<button class="yy_svg1 yy__2" rev_clic1="''),
                              affectop(
                                 ''+='',
                                 lst,
                                 concat(
                                    ''pm1(m1(n1('',
                                    this.moi,
                                    ''),f1(page_confirmation_supprimer1(chi_id_parametre('',
                                    tup.T0_chi_id_parametre,
                                    '')))))''
                                 )
                              ),
                              affectop(''+='',lst,concat(''">'',this.__ig1.les_svg.poubelle,''</button>''))
                           )
                        )
                     ),
                     affectop(
                        ''+='',
                        lst,
                        concat(
                           ''<button class="yy_svg1 yy__2" rev_clic1="pm1(m1(n1('',
                           this.moi,
                           ''),f1(page_voir1(chi_id_parametre('',
                           tup.T0_chi_id_parametre,
                           '')))))">'',
                           this.__ig1.les_svg.voir,
                           ''</button>''
                        )
                     ),
                     affectop(
                        ''+='',
                        lst,
                        concat(
                           ''<button class="yy_svg1 yy__3" rev_clic1="pm1(m1(n1('',
                           this.moi,
                           ''),f1(page_modification1(chi_id_parametre('',
                           tup.T0_chi_id_parametre,
                           '')))))">'',
                           this.__ig1.les_svg.editer,
                           ''</button>''
                        )
                     ),
                     affectop(
                        ''+='',
                        lst,
                        concat(
                           ''<button class="yy_svg1 yy__4" rev_clic1="pm1(m1(n1('',
                           this.moi,
                           ''),f1(page_duplication1(chi_id_parametre('',
                           tup.T0_chi_id_parametre,
                           '')))))">'',
                           this.__ig1.les_svg.dupliquer,
                           ''</button>''
                        )
                     ),
                     affectop(''+='',lst,''<button class="yy_b1 yy__1" rev_clic1="m1(n1(grandeurs1),f1(entree_module()))">grandeurs</button>'')
                  )
               ),
               sinon(
                  alors(
                     affectop(''+='',lst,''<button class="yy_svg1 yy__2" rev_clic1="''),
                     affectop(
                        ''+='',
                        lst,
                        concat(
                           ''pm1(m1(n1('',
                           this.moi,
                           ''),f1(page_voir1(chi_id_parametre('',
                           tup.T0_chi_id_parametre,
                           '')))))''
                        )
                     ),
                     affectop(''+='',lst,concat(''">'',this.__ig1.les_svg.voir,''</button>''))
                  )
               )
            ),
            affectop(''+='',lst,''</div>''),
            retourner(lst)
         )
      )
   )
)','class parametres1{
    /*
      =============================================================================================================
    */
    renumeroter_cette_grandeur1( mat , d ){
        let l01=mat.length;
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_grandeur > 0 && chi_id_parametre > 0){
            let o1='''';
            o1+=''<h1>Attribuer un nouveau numéro à une grandeur</h1>'';
            o1+=''le numéro actuel est <b>'' + chi_id_grandeur + ''</b>'';
            o1+=''<br />'';
            o1+=''<div id="vv_grandeurs_nouveau_numero1">'';
            o1+=''    <input type="hidden" id="vv_ancien_numero_de_grandeur" value="'' + chi_id_grandeur + ''" />'';
            o1+=''    le nouveau numéro sera : <input type="text" id="vv_nouveau_numero_de_grandeur" value="" aria-autocomplete="list"/>'';
            o1+=''    <br />'';
            o1+=''    <button class="yy_b1" rev_clic1="'';
            o1+=''fo1(co1(vv_grandeurs_nouveau_numero1),pm1(m1(n1('' + this.moi + ''),f1(vv_grandeurs_nouveau_numero1(chi_id_parametre('' + chi_id_parametre + ''))))))'';
            o1+=''">attribuer ce nouveau numéro</button>'';
            o1+=''</div>'';
            this.__ig1.affiche_sous_fenetre1( o1 );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    enregistrer_l_ordre_des_grandeurs1( evenement , reference_arbre ){
        let chi_id_parametre_en_cours_de_trie=document.getElementById( ''chi_id_parametre_en_cours_de_trie'' ).value;
        let nouvel_ordre='''';
        for(let i in reference_arbre.arbre){
            nouvel_ordre+='','' + reference_arbre.arbre[i].attributs[''data-chi_id_grandeur''];
        }
        nouvel_ordre=nouvel_ordre.substr( 1 );
        let obj={
            "__xac" : ''pm1(m1(n1('' + this.moi + ''),f1(enregistrer_l_ordre_des_grandeurs2(chi_id_parametre('' + chi_id_parametre_en_cours_de_trie + '')))))'' ,
            "__xva" : {"chi_id_parametre_en_cours_de_trie" : chi_id_parametre_en_cours_de_trie ,"nouvel_ordre" : nouvel_ordre}
        };
        this.__ig1.envoyer_un_colis_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_la_valeur_de1( mat , d , données ){
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : ''pm1(m1(n1('' + this.moi + ''),f1(modifier_la_valeur_de2(chi_id_grandeur('' + chi_id_grandeur + ''),chi_id_parametre('' + chi_id_parametre + '')))))'' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_verouillee_de1( mat , d , données ){
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : ''pm1(m1(n1('' + this.moi + ''),f1(modifier_verouille_de2(chi_id_grandeur('' + chi_id_grandeur + ''),chi_id_parametre('' + chi_id_parametre + '')))))'' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_actif_de1( mat , d , données ){
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : ''pm1(m1(n1('' + this.moi + ''),f1(modifier_actif_de2(chi_id_grandeur('' + chi_id_grandeur + ''),chi_id_parametre('' + chi_id_parametre + '')))))'' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_la_cle_de1( mat , d , données ){
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_grandeur'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : ''pm1(m1(n1('' + this.moi + ''),f1(modifier_la_cle_de2(chi_id_grandeur('' + chi_id_grandeur + ''),chi_id_parametre('' + chi_id_parametre + '')))))'' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    enregister_nouveau_parametre( mat , d , données ){
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : ''pm1(m1(n1('' + this.moi + ''),f1(enregister_nouveau_parametre1(chi_id_parametre('' + chi_id_parametre + '')))))'' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        let chi_id_parametre=0;
        const l01=mat.length;
        switch (mat[d][1]){
            case ''enregistrer_l_ordre_des_grandeurs2'' : 
            case ''modifier_la_valeur_de2'' : 
            case ''modifier_actif_de2'' : 
            case ''modifier_verouille_de2'' : 
            case ''modifier_la_cle_de2'' : 
            case ''vv_grandeurs_nouveau_numero1'' : 
            case ''enregister_nouveau_parametre1'' : 
            case ''supprimer_une_grandeur1'' :
                this.__ig1.fermer_la_sous_fenetre();
                for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                    if(mat[i][1] === ''chi_id_parametre'' && mat[i][2] === ''f'' && mat[i][8] === 1 && mat[i + 1][2] === ''c''){
                        chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
                    }
                }
                if(chi_id_parametre > 0){
                    let cmd=''pm1(m1(n1('' + this.moi + ''),f1(page_voir1(chi_id_parametre('' + chi_id_parametre + '')))))'';
                    this.__ig1.executer1( cmd , null , null );
                }
                break;
                
            default:
                return({"__xst" : __xer ,"__xme" : ''dans l\''interface client "'' + mat[d][1] + ''" n\''est pas traitée ou bien comporte une erreur''});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + ''_'' + this.moi + ''_liste1'' );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres.liste1){
                this.filtres.liste1[i]=jso[i]??this.tableau_des_filtres.liste1[i].défaut;
            }
        }
        if(this.__ig1.chi_id_utilisateur === 1){
            this.vv_ecran_liste_boutons_avant+=''<button class="yy_svg1 yy__xif" rev_clic1="'';
            this.vv_ecran_liste_boutons_avant+=''m1(n1('' + this.moi + ''),f1(page_creer1()))'';
            this.vv_ecran_liste_boutons_avant+=''" title="création '' + this.DUN_DUNE_ELEMENT_GERE + ''" >'' + this.__ig1.les_svg.nouveau_document + ''</button>'';
        }
    }
    /*
      =============================================================================================================
    */
    afficher_le_contenu_sous_pg_modif1( mat , d , le_colis1=null ){
        let o1='''';
        o1+=''<pre>'';
        o1+=''champs_des_parametres(\r\n'';
        o1+=''    un_drapeau(\r\n'';
        o1+=''        #(un drapeau à 0 ou 1),\r\n'';
        o1+=''            genre_du_parametre(5)\r\n'';
        o1+=''        ),\r\n'';
        o1+=''        un_libellé_complémentaire_de_la_clé(\r\n'';
        o1+=''            #(un libellé complémentaire de la clé varchar 64 ),\r\n'';
        o1+=''            genre_du_parametre(12)\r\n'';
        o1+=''        ),\r\n'';
        o1+=''        un_texte_complémentaire_de_la_clé(\r\n'';
        o1+=''            #(un texte complémentaire de la clé TEXT NULL ),\r\n'';
        o1+=''            genre_du_parametre(6)\r\n'';
        o1+=''        )\r\n'';
        o1+='')</pre>\r\n'';
        if(o1 !== ''''){
            o1+=''<div class="yy__bdp1"></div>'';
        }
        document.getElementById( ''vv_ecran_modification_zone_complement'' ).innerHTML=o1;
    }
    /*
      =============================================================================================================
    */
    afficher_le_contenu_sous_pg_voir1( mat , d , le_colis1=null ){
        let tup=le_colis1.__xva.page_voir1.__xva[0];
        let o2='''';
        if(tup.T0_cht_rev_parametre !== null){
            let cht_rev_parametre=tup.T0_cht_rev_parametre;
            let obj_mat2=this.__ig1.__rev1.t2m( cht_rev_parametre );
            if(obj_mat2.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : "erreur de conversion de cht_rev_parametre [" + this.__ig1.nl2() + "]"});
            }
            let liste_des_champs_complementaires=[];
            let mat2=obj_mat2.__xva;
            o2+=''<h2>ajouter une grandeur</h2>'';
            let l02=mat2.length;
            let le_tableau_parametre=[
                /*  */
                {"nom_du_parametre" : "che_actif_grandeur" ,"genre_du_parametre" : 5 ,"commentaire_du_parametre" : ""},
                {"nom_du_parametre" : "chp_cle_grandeur" ,"genre_du_parametre" : 3 ,"commentaire_du_parametre" : "entrez la valeur"}
            ];
            for( let i=1 ; i < l02 ; i=mat2[i][12] ){
                if(mat2[i][1] === ''champs_des_parametres'' && mat2[i][2] === ''f''){
                    for( let j=i + 1 ; j < l02 ; j=mat2[j][12] ){
                        let nom_du_parametre='''';
                        let genre_du_parametre=0;
                        let commentaire_du_parametre='''';
                        if(mat2[j][2] === ''f'' && mat2[j][1] === ''#''){
                        }else if(mat2[j][2] === ''f''){
                            nom_du_parametre=mat2[j][1];
                            for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                                if(mat2[k][1] === ''genre_du_parametre'' && mat2[k][2] === ''f'' && mat2[k][8] === 1 && mat2[k + 1][2] === ''c''){
                                    genre_du_parametre=parseInt( mat2[k + 1][1] , 10 );
                                }else if(mat2[k][1] === ''#'' && mat2[k][2] === ''f''){
                                    commentaire_du_parametre=mat2[k][13];
                                    /*  */
                                }
                            }
                        }
                        liste_des_champs_complementaires.push( nom_du_parametre );
                        le_tableau_parametre.push( {"nom_du_parametre" : nom_du_parametre ,"genre_du_parametre" : genre_du_parametre ,"commentaire_du_parametre" : commentaire_du_parametre} );
                    }
                }
            }
            o2+=''<div id="vv_formulaire_du_parametre" style="text-align:center;">'';
            o2+=''<b>clé : </b>'';
            o2+=''<input id="chp_cle_grandeur" type="text" class="yy_input1" value="" size="48" style="width:12em;">'';
            o2+=''<input id="che_actif_grandeur" type="hidden" value="0">'';
            o2+=''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_formulaire_du_parametre),m1(n1('' + this.moi + ''),f1(enregister_nouveau_parametre(chi_id_parametre('' + tup.T0_chi_id_parametre + '')))))" title="ajouter" >ajouter</button>'';
            o2+=''</div id="vv_formulaire_du_parametre">'';
            if(tup.T0_cht_ordre_parametre !== null){
                o2+=''<h2>grandeurs</h2>'';
                let obj_ordre=this.__ig1.__rev1.rev_tm( tup.T0_cht_ordre_parametre , true );
                if(obj_ordre.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : "erreur de conversion de cht_ordre_parametre [" + this.__ig1.nl2() + "]"});
                }
                let mat_ordre=obj_ordre.__xva;
                let les_grandeurs_du_parametre=[];
                for(let i in le_colis1.__xva.parametres_actuels){
                    les_grandeurs_du_parametre.push( {
                            "ordre_de_tri" : /* ordre de tri = 0 à priori */-1 ,
                            "chi_id_grandeur" : le_colis1.__xva.parametres_actuels[i].T0_chi_id_grandeur ,
                            "chp_cle_grandeur" : le_colis1.__xva.parametres_actuels[i].T0_chp_cle_grandeur ,
                            "cht_rev_grandeur" : le_colis1.__xva.parametres_actuels[i].T0_cht_rev_grandeur ,
                            "che_actif_grandeur" : le_colis1.__xva.parametres_actuels[i].T0_che_actif_grandeur ,
                            "che_verouillee_grandeur" : le_colis1.__xva.parametres_actuels[i].T0_che_verouillee_grandeur ,
                            "chc_couleur_texte_grandeur" : le_colis1.__xva.parametres_actuels[i].T0_chc_couleur_texte_grandeur ,
                            "chc_couleur_fond_grandeur" : le_colis1.__xva.parametres_actuels[i].T0_chc_couleur_fond_grandeur
                        } );
                }
                for( let i=0 ; i < les_grandeurs_du_parametre.length ; i++ ){
                    for( let j=1 ; j < mat_ordre.length ; j=mat_ordre[j][12] ){
                        if(parseInt( mat_ordre[j][1] , 10 ) === les_grandeurs_du_parametre[i].chi_id_grandeur){
                            les_grandeurs_du_parametre[i].ordre_de_tri=j - 1;
                            break;
                        }
                    }
                }
                les_grandeurs_du_parametre.sort( ( a , b ) => {
                        if(a.ordre_de_tri < b.ordre_de_tri){
                            return -1;
                        }else if(a.ordre_de_tri > b.ordre_de_tri){
                            return 1;
                        }
                        return 0;
                    } );
                o2+=''<div class="yy_conteneur_table">'';
                o2+=''<table border="1"  style="min-width:90%;">'';
                o2+=''<tr>'';
                o2+=''<th style="min-width:5em;">id</th>'';
                o2+=''<th style="max-width:5em;">actif</th>'';
                if(this.__ig1.chi_id_utilisateur === 1){
                    o2+=''<th style="max-width:5em;">vérouillé</th>'';
                }
                o2+=''<th>cle / couleurs texte et fond</th>'';
                o2+=''<th>valeurs</th>'';
                o2+=''</tr>'';
                for( let i=0 ; i < les_grandeurs_du_parametre.length ; i++ ){
                    o2+=''<tr>'';
                    /*
                      colonne id
                    */
                    o2+=''<td style="max-width:3em;text-align:center;">'';
                    if(this.__ig1.chi_id_utilisateur === 1){
                        o2+=''<button class="yy_svg1 yy__3" rev_clic1="m1(n1('' + this.moi + ''),f1(renumeroter_cette_grandeur1('';
                        o2+=''chi_id_grandeur('' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),'';
                        o2+=''chi_id_parametre('' + tup.T0_chi_id_parametre + ''),'';
                        o2+='')))" title="renumeroter cette grandeur">'' + this.__ig1.les_svg.renuméroter + ''</button>'';
                    }
                    if(les_grandeurs_du_parametre[i].che_verouillee_grandeur === 0){
                        o2+=''<button class="yy_svg1 yy__0" rev_clic1="confirmer1(pm1(m1(n1('' + this.moi + ''),f1(supprimer_une_grandeur1('';
                        o2+=''chi_id_grandeur('' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),'';
                        o2+=''chi_id_parametre('' + tup.T0_chi_id_parametre + ''),'';
                        o2+='')))))" title="supprimer cette grandeur">'' + this.__ig1.les_svg.poubelle + ''</button>'';
                    }
                    o2+='' '' + les_grandeurs_du_parametre[i].chi_id_grandeur;
                    o2+=''</td>'';
                    /*
                      colonne actif
                    */
                    o2+=''<td style="max-width:5em;">'';
                    o2+=''<div id="vv_modifier_actif_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''">'';
                    o2+=''<input type="range" id="che_actif_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="yy_ouinon" min="0" max="1" step="1" value="'' + les_grandeurs_du_parametre[i].che_actif_grandeur + ''">'';
                    /*  */
                    o2+=''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_actif_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),m1(n1('' + this.moi + ''),f1(modifier_actif_de1('';
                    o2+=''chi_id_grandeur('' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),'';
                    o2+=''chi_id_parametre('' + tup.T0_chi_id_parametre + '')'';
                    o2+=''))))" title="modifier">💾</button>'';
                    o2+=''</div>'';
                    o2+=''</td>'';
                    /*
                      colonne vérouillé si dev
                    */
                    if(this.__ig1.chi_id_utilisateur === 1){
                        o2+=''<td style="max-width:3em;text-align:center;">'';
                        o2+=''<div id="vv_modifier_verouillee_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''">'';
                        o2+=''<input type="range" id="che_verouillee_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="yy_ouinon" min="0" max="1" step="1" value="'' + les_grandeurs_du_parametre[i].che_verouillee_grandeur + ''">'';
                        /*  */
                        o2+=''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_verouillee_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),m1(n1('' + this.moi + ''),f1(modifier_verouillee_de1('';
                        o2+=''chi_id_grandeur('' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),'';
                        o2+=''chi_id_parametre('' + tup.T0_chi_id_parametre + '')'';
                        o2+=''))))" title="modifier">💾</button>'';
                        o2+=''</div>'';
                        o2+=''</td>'';
                    }
                    /*
                      colonne cle et couleur
                    */
                    o2+=''<td>'';
                    /* clé */
                    o2+=''<div id="vv_modifier_la_cle_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''">'';
                    /*  */
                    o2+=''  <button style="" class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_la_cle_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),m1(n1('' + this.moi + ''),f1(modifier_la_cle_de1('';
                    o2+=''chi_id_grandeur('' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),'';
                    o2+=''chi_id_parametre('' + tup.T0_chi_id_parametre + '')'';
                    o2+=''))))" title="modifier">💾</button>'';
                    /*  */
                    o2+=''<input type="text" class="yy_input1" size="15" maxlength="64" id="chp_cle_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="" value="'' + les_grandeurs_du_parametre[i].chp_cle_grandeur + ''"'';
                    if(les_grandeurs_du_parametre[i].chc_couleur_texte_grandeur !== null
                           && les_grandeurs_du_parametre[i].chc_couleur_fond_grandeur !== null
                    ){
                        o2+='' style="background:'' + les_grandeurs_du_parametre[i].chc_couleur_fond_grandeur + '';color:'' + les_grandeurs_du_parametre[i].chc_couleur_texte_grandeur + ''"'';
                    }
                    o2+='' />'';
                    /*  */
                    /* couleur */
                    o2+=''<div style="display:inline-block;">'';
                    o2+=''  <input type="hidden" id="chc_couleur_texte_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" value="'' + (les_grandeurs_du_parametre[i].chc_couleur_texte_grandeur??'''') + ''" />'';
                    o2+=''  <input type="hidden" id="chc_couleur_fond_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" value="'' + (les_grandeurs_du_parametre[i].chc_couleur_fond_grandeur??'''') + ''" />'';
                    o2+=''<div class="">'';
                    o2+=''  <button class="yy_svg1 rev_b_ctxt" rev_clic1="m1(n1(__fnt1),f1(maj_couleur1('';
                    o2+=''nom_du_champ1(chc_couleur_fond_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + '')'';
                    o2+=''nom_du_champ2(chc_couleur_texte_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + '')'';
                    o2+=''nom_du_champ_a_modifier(chp_cle_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + '')'';
                    o2+=''format_palette(2_couleurs)'';
                    o2+='')))">'' + this.__ig1.les_svg.palette + ''</button>'';
                    o2+=''  <div class="yy_b1 yy__4" rev_clic1="m1(n1(__fnt1),f1(raz_zone_couleur2('';
                    o2+=''nom_du_champ1(chc_couleur_fond_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + '')'';
                    o2+=''nom_du_champ2(chc_couleur_texte_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + '')'';
                    o2+=''nom_du_champ_a_modifier(chp_cle_grandeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + '')'';
                    o2+='')))" >x</div>'';
                    o2+=''</div>'';
                    /*  */
                    o2+=''</div>'';
                    o2+=''</div>'';
                    o2+=''</td>'';
                    /*
                    */
                    o2+=''<td>'';
                    if(les_grandeurs_du_parametre[i].cht_rev_grandeur !== ''0''){
                        o2+=''<table style="min-width:100%;">'';
                        let obj_cht_rev_grandeur=this.__ig1.__rev1.t2m( les_grandeurs_du_parametre[i].cht_rev_grandeur );
                        if(obj_cht_rev_grandeur.__xst !== __xsu){
                            return({"__xst" : __xer ,"__xme" : "erreur de conversion de cht_rev_grandeur [" + this.__ig1.nl2() + "]"});
                        }
                        let mat3=obj_cht_rev_grandeur.__xva;
                        let l03=mat3.length;
                        let liste_des_noms_affiches=[];
                        for( let j=1 ; j < l03 ; j=mat3[j][12] ){
                            if(mat3[j][2] === ''f''){
                                let nom_d_val='''';
                                let valeur_de_val='''';
                                if(mat3[j][2] === ''f'' && mat3[j][8] === 1 && mat3[j + 1][2] === ''c''){
                                    nom_d_val=mat3[j][1];
                                    valeur_de_val=mat3[j + 1][1];
                                    i;
                                }
                                if(nom_d_val !== '''' && liste_des_champs_complementaires.includes( nom_d_val )){
                                    o2+=''<tr>'';
                                    o2+=''<td>'';
                                    liste_des_noms_affiches.push( nom_d_val );
                                    o2+=nom_d_val;
                                    o2+=''</td>'';
                                    o2+=''<td>'';
                                    /* o2+=valeur_de_val; */
                                    o2+=''<div id="vv_modifier_la_valeur_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + j + ''">'';
                                    /*  */
                                    o2+=''<input type="hidden" id="__le_nom_de_la_valeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + j + ''" class="" value="'' + nom_d_val + ''" />'';
                                    let genre_de_la_grandeur=0;
                                    for( let k=0 ; k < le_tableau_parametre.length ; k++ ){
                                        if(le_tableau_parametre[k].nom_du_parametre === nom_d_val){
                                            genre_de_la_grandeur=le_tableau_parametre[k].genre_du_parametre;
                                        }
                                    }
                                    if(genre_de_la_grandeur === 5){
                                        o2+=''<input type="range" id="'' + nom_d_val + ''_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="yy_ouinon" min="0" max="1" step="1" value="'' + valeur_de_val + ''" />'';
                                    }else if(genre_de_la_grandeur === 6){
                                        o2+=''<textarea id="'' + nom_d_val + ''_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''">'' + valeur_de_val.replace( /\\\\/g , ''\\'' ).replace( /\\\''/g , ''\'''' ).replace( /¶LF¶/g , ''\n'' ).replace( /¶CR¶/g , ''\r'' ).replace( /¶CRLF¶/g , ''\r\n'' ) + ''</textarea>'';
                                    }else{
                                        o2+=''<input type="text" id="'' + nom_d_val + ''_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="" value="'' + valeur_de_val.replace( /\\\\/g , ''\\'' ).replace( /\\\''/g , ''\'''' ) + ''" />'';
                                    }
                                    les_grandeurs_du_parametre[i][''valeur_de_val'']=valeur_de_val;
                                    /*  */
                                    o2+=''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_la_valeur_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + j + ''),m1(n1('' + this.moi + ''),f1(modifier_la_valeur_de1('';
                                    o2+=''chi_id_grandeur('' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),'';
                                    o2+=''chi_id_parametre('' + tup.T0_chi_id_parametre + '')'';
                                    o2+=''))))" title="modifier">💾</button>'';
                                    /*  */
                                    o2+=''</div>'';
                                    o2+=''</td>'';
                                    o2+=''</tr>'';
                                }
                            }
                        }
                        for( let k=0 ; k < le_tableau_parametre.length ; k++ ){
                            /* k */
                            if(le_tableau_parametre[k].nom_du_parametre === "che_actif_grandeur"
                                   || le_tableau_parametre[k].nom_du_parametre === "chp_cle_grandeur"
                            ){
                            }else{
                                if(liste_des_noms_affiches.includes( le_tableau_parametre[k].nom_du_parametre )){
                                    /* déjà affiché plus haut */
                                }else{
                                    o2+=''<tr>'';
                                    o2+=''<td>'';
                                    o2+=''<span class="yy__0">'' + le_tableau_parametre[k].nom_du_parametre + ''</span>'';
                                    /* nom_d_val */
                                    o2+=''</td>'';
                                    o2+=''<td>'';
                                    /* debugger */
                                    o2+=''<div id="vv_modifier_la_valeur_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + k + ''">'';
                                    /*  */
                                    o2+=''<input type="hidden" id="__le_nom_de_la_valeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + k + ''" class="" value="'' + le_tableau_parametre[k].nom_du_parametre + ''" />'';
                                    let genre_de_la_grandeur=le_tableau_parametre[k].genre_du_parametre;
                                    if(genre_de_la_grandeur === 5){
                                        o2+=''<input type="range" id="'' + le_tableau_parametre[k].nom_du_parametre + ''_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="yy_ouinon" min="0" max="1" step="1" value="0" />'';
                                    }else{
                                        o2+=''<input type="text" id="'' + le_tableau_parametre[k].nom_du_parametre + ''_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="" value="" />'';
                                    }
                                    /*  */
                                    o2+=''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_la_valeur_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + k + ''),m1(n1('' + this.moi + ''),f1(modifier_la_valeur_de1('';
                                    o2+=''chi_id_grandeur('' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),'';
                                    o2+=''chi_id_parametre('' + tup.T0_chi_id_parametre + '')'';
                                    o2+=''))))" title="modifier">💾</button>'';
                                    /*  */
                                    o2+=''</div>'';
                                    o2+=''</td>'';
                                    o2+=''</tr>'';
                                }
                            }
                        }
                        o2+=''</table>'';
                    }else{
                        /* si on modifie le rev du paramètre et que précédamment il est = ''0''; */
                        o2+=''<table style="min-width:100%;">'';
                        for( let j=0 ; j < le_tableau_parametre.length ; j++ ){
                            if(le_tableau_parametre[j].nom_du_parametre === ''che_actif_grandeur''
                                   || le_tableau_parametre[j].nom_du_parametre === ''chp_cle_grandeur''
                            ){
                                /* pas pour les champs toujours présents */
                            }else{
                                o2+=''<tr>'';
                                o2+=''<td>'';
                                o2+=''<span class="yy__2">'' + le_tableau_parametre[j].nom_du_parametre + ''</span>'';
                                o2+=''</td>'';
                                o2+=''<td>'';
                                /* o2+=valeur_de_val; */
                                o2+=''<div id="vv_modifier_la_valeur_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + j + ''">'';
                                /*  */
                                o2+=''<input type="hidden" id="__le_nom_de_la_valeur_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + j + ''" class="" value="'' + le_tableau_parametre[j].nom_du_parametre + ''" />'';
                                if(le_tableau_parametre[j].genre_du_parametre === 5){
                                    o2+=''<input type="range" id="'' + le_tableau_parametre[j].nom_du_parametre + ''_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="yy_ouinon" min="0" max="1" step="1" value="0" >'';
                                }else{
                                    o2+=''<input type="text" id="'' + le_tableau_parametre[j].nom_du_parametre + ''_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''" class="" value="" />'';
                                }
                                /*  */
                                o2+=''<button class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_modifier_la_valeur_de_'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''_'' + j + ''),m1(n1('' + this.moi + ''),f1(modifier_la_valeur_de1('';
                                o2+=''chi_id_grandeur('' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''),'';
                                o2+=''chi_id_parametre('' + tup.T0_chi_id_parametre + '')'';
                                o2+=''))))" title="modifier">💾</button>'';
                                /*  */
                                o2+=''</div>'';
                                o2+=''</td>'';
                                o2+=''</tr>'';
                            }
                        }
                        o2+=''</table>'';
                    }
                    o2+=''</td>'';
                    /* "1( chp_cle_grandeur(fr) che_actif_grandeur(1) val_1(''français''))" */
                    o2+=''</tr>'';
                }
                o2+=''</table>'';
                o2+=''</div>'';
                /*
                  tri
                */
                if(les_grandeurs_du_parametre.length >= 1){
                    o2+=''<hr /><h2>tri des grandeurs</h2>'';
                    o2+=''<input type="hidden" id="chi_id_parametre_en_cours_de_trie" value="'' + tup.T0_chi_id_parametre + ''" />'';
                    o2+=''<div  style="display:flex;padding-bottom:3em;">'';
                    o2+='' <div style="margin : 0 auto 0 auto;">'';
                    o2+=''   <ul id="vv_tri_'' + this.moi + ''">'';
                    for(let i in les_grandeurs_du_parametre){
                        o2+=''      <li data-chi_id_grandeur="'' + les_grandeurs_du_parametre[i].chi_id_grandeur + ''">'';
                        o2+=''      <div>'';
                        if(les_grandeurs_du_parametre[i].che_actif_grandeur === 0){
                            o2+=''<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">'' + this.__ig1.les_svg.rond_rouge1 + ''</div>'';
                        }else{
                            o2+=''<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">'' + this.__ig1.les_svg.rond_vert1 + ''</div>'';
                        }
                        o2+=les_grandeurs_du_parametre[i].chp_cle_grandeur + '''';
                        o2+=''      </div>'';
                        o2+=''     </li>'';
                    }
                    o2+=''   </ul>'';
                    o2+='' </div>'';
                    o2+=''</div>'';
                    let options1={
                        "hauteur_max_en_vh" : /* entre 20 et 80 */80 ,
                        "largeur_max" : /* ''calc(100% - 50px)'', */''340px'' ,
                        "afficher_le_bouton_supprimer" : 0 ,
                        "class_du_bouton_supprimer" : ''yy_b1 yy__0'' ,
                        "arborescent" : 0 ,
                        "class_du_bouton_deplacer" : ''yy_b1'' ,
                        "boutons_du_menu" : [] ,
                        "class_du_bouton_menu" : ''yy_b1'' ,
                        "class_du_bouton_replier" : ''yy_b1 yy__2''
                    };
                    options1.boutons_du_menu.push( {"libelle" : ''💾'' ,"fonction" : this.enregistrer_l_ordre_des_grandeurs1.bind( this )} );
                    options1[''afficher_le_bouton_editer'']=0;
                    options1[''class_du_bouton_editer'']=''yy_b1 yy__xif'';
                    import( ''./f0?n0=_tri_arbre1_c.js&__version='' + this.__version ).then( ( le_module ) => {
                            let aa=new le_module[''_tri_arbre1'']( this );
                            aa.construire_arbre( ''vv_tri_'' + this.moi , options1 );
                    } );
                }
                if(les_grandeurs_du_parametre.length === 0){
                    o2+=''<button class="yy_svg1 yy__2" rev_clic1="pm1(m1(n1(parametres1),f1(page_confirmation_supprimer1(chi_id_parametre('' + tup.T0_chi_id_parametre + '')))))" >'';
                    o2+=''vous pouvez supprimer ce paramétrage'';
                    o2+=''</button>'';
                }
            }
        }
        if(o2 !== ''''){
            o2+=''<div class="yy__bdp1"></div>'';
        }
        document.getElementById( ''vv_ecran_visualisation_zone_complement'' ).innerHTML=o2;
        if(this.__ig1.__decallage_page_avant_envoi > 0){
            try{
                setTimeout( () => {
                        window.scrollTo( {"top" : this.__ig1.__decallage_page_avant_envoi} );
                        this.__ig1.__decallage_page_avant_envoi=0;
                    } , 50 );
            }catch(e){
                debugger;
            }
        }
    }
    /*
      =============================================================================================================
    */
    liste_des_boutons_action1( tup , le_colis1 ){
        let lst='''';
        lst+=''<div class="yy_act1">'';
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(...)) */
        if(this.__ig1.chi_id_utilisateur === 1){
            if([10000].includes( tup.T0_chi_id_parametre )){
                lst+=''<button class="yy_svg1 yy__2 yy__2_inactif" disabled="true">'' + this.__ig1.les_svg.poubelle + ''</button>'';
            }else{
                lst+=''<button class="yy_svg1 yy__2" rev_clic1="'';
                lst+=''pm1(m1(n1('' + this.moi + ''),f1(page_confirmation_supprimer1(chi_id_parametre('' + tup.T0_chi_id_parametre + '')))))'';
                lst+=''">'' + this.__ig1.les_svg.poubelle + ''</button>'';
            }
            lst+=''<button class="yy_svg1 yy__2" rev_clic1="pm1(m1(n1('' + this.moi + ''),f1(page_voir1(chi_id_parametre('' + tup.T0_chi_id_parametre + '')))))">'' + this.__ig1.les_svg.voir + ''</button>'';
            lst+=''<button class="yy_svg1 yy__3" rev_clic1="pm1(m1(n1('' + this.moi + ''),f1(page_modification1(chi_id_parametre('' + tup.T0_chi_id_parametre + '')))))">'' + this.__ig1.les_svg.editer + ''</button>'';
            lst+=''<button class="yy_svg1 yy__4" rev_clic1="pm1(m1(n1('' + this.moi + ''),f1(page_duplication1(chi_id_parametre('' + tup.T0_chi_id_parametre + '')))))">'' + this.__ig1.les_svg.dupliquer + ''</button>'';
            lst+=''<button class="yy_b1 yy__1" rev_clic1="m1(n1(grandeurs1),f1(entree_module()))">grandeurs</button>'';
        }else{
            lst+=''<button class="yy_svg1 yy__2" rev_clic1="'';
            lst+=''pm1(m1(n1('' + this.moi + ''),f1(page_voir1(chi_id_parametre('' + tup.T0_chi_id_parametre + '')))))'';
            lst+=''">'' + this.__ig1.les_svg.voir + ''</button>'';
        }
        lst+=''</div>'';
        return lst;
    }
}','0',NULL,NULL,'0',NULL,NULL,NULL,'0','1','0',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');
/*================================================================================ FIN BLOC TABLE tbl_sources offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_autorisations offset 0 (53) */
INSERT INTO tbl_autorisations (  chi_id_autorisation ,  chx_source_autorisation ,  chx_acces_autorisation ,  che_pour_sous_liste_autorisation ) VALUES
('1','1011','1','0'),
('3','101','1','0'),
('4','105','1','0'),
('5','96','1','0'),
('6','107','1','0'),
('7','99','1','0'),
('9','94','1','0'),
('10','88','1','0'),
('11','991','1','0'),
('12','88','2','0'),
('13','1011','2','0'),
('14','89','2','0'),
('15','1012','2','0'),
('16','98','1','0'),
('17','106','1','0'),
('18','95','1','0'),
('19','108','1','0'),
('20','97','1','0'),
('21','1012','1','0'),
('22','992','1','0'),
('23','102','1','0'),
('24','89','1','0'),
('25','94','2','0'),
('27','96','2','0'),
('28','97','2','0'),
('29','99','2','0'),
('30','98','2','0'),
('31','105','2','0'),
('32','106','2','0'),
('33','107','2','0'),
('34','108','2','0'),
('35','102','2','0'),
('36','101','2','0'),
('38','1000','0','0'),
('41','95','2','0'),
('43','1031','1','0'),
('44','1032','1','0'),
('45','1014','2','1'),
('46','1015','2','1'),
('47','1016','2','0'),
('48','1017','2','0'),
('49','1019','1','0'),
('50','1020','1','0'),
('51','1021','1','0'),
('52','1022','1','0'),
('53','1023','1','0'),
('54','1024','1','0'),
('55','1023','2','0'),
('56','1024','2','0'),
('57','1033','1','1'),
('58','1034','1','1'),
('59','1019','2','0'),
('60','1020','2','0');
/*================================================================================ FIN BLOC TABLE tbl_autorisations offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_menus offset 0 (22) */
INSERT INTO tbl_menus (  chi_id_menu ,  cht_libelle_menu ,  chp_titre_menu ,  chx_autorisation_menu ,  chp_methode_menu ,  cht_initialisation_menu ,  cht_condition_menu ,  cht_condition_js_menu ) VALUES
('1','mes tâches','tâches','1','entree_module',NULL,NULL,NULL),
('2','sources','sources','43','entree_module',NULL,NULL,NULL),
('3','utilisateurs','utilisateurs','3','entree_module',NULL,NULL,NULL),
('4','autorisations','autorisations','4','entree_module',NULL,NULL,NULL),
('5','métier','métier','5','entree_module',NULL,NULL,NULL),
('6','menus','menus','6','entree_module',NULL,NULL,NULL),
('7','accès','accès','7','entree_module',NULL,NULL,NULL),
('8','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg>','mes coordonnées','10','entree_module',NULL,NULL,NULL),
('9','groupes','groupes','9','entree_module',NULL,NULL,NULL),
('10','les tâches','les tâches','11','entree_module',NULL,NULL,NULL),
('11','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg>','mes coordonnées','12','entree_module',NULL,NULL,NULL),
('12','mes tâches','tâches','13','entree_module',NULL,NULL,NULL),
('13','groupes','groupes','25','entree_module',NULL,NULL,NULL),
('14','métier','métier','27','entree_module',NULL,NULL,NULL),
('15','accès','accès','29','entree_module',NULL,NULL,NULL),
('16','autorisations','autorisations','31','entree_module',NULL,NULL,NULL),
('17','à propos','à propos','38','entree_module',NULL,NULL,NULL),
('18','menus','menus','33','entree_module',NULL,NULL,NULL),
('19','utilisateurs','utilisateurs','36','entree_module',NULL,NULL,NULL),
('20','acteurs','utilisateurs','47','entree_module',NULL,NULL,NULL),
('21','paramètres','paramètres','49','entree_module',NULL,NULL,NULL),
('22','param1','param1','59','entree_module',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_menus offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_utilisateurs offset 0 (1) */
INSERT INTO tbl_utilisateurs (  chi_id_utilisateur ,  chp_nom_de_connexion_utilisateur ,  chp_mot_de_passe_utilisateur ,  chp_parametres_utilisateur ,  chi_compteur1_utilisateur ,  chx_acces_utilisateur ,  chd__dtm_utilisateur ,  chd__dtc_utilisateur ,  che__nur_utilisateur ,  che_actif_utilisateur ) VALUES
('1','',NULL,NULL,'0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0');
/*================================================================================ FIN BLOC TABLE tbl_utilisateurs offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_genres offset 0 (30) */
INSERT INTO tbl_genres (  chi_id_genre ,  chp_nom_genre ,  che_ordre_genre ,  chp_prefixe_genre ,  chp_espece_genre ,  che_longueur_genre ,  che_est_primaire_genre ,  che_est_incrément_genre ,  che_est_obligatoire_genre ,  che_a_init_genre ,  che_init_est_mot_genre ,  cht_valeur_init_genre ,  che_est_parmis_genre ,  cht_parmis_genre ,  cht_fonctions_genre ,  che_est_nur_genre ,  che_est_tsm_genre ,  che_est_tsc_genre ,  chd__dtc_genre ,  chd__dtm_genre ,  che__nur_genre ) VALUES
('1','***indéfini***','29','cht','TEXT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('2','id primaire non nulle','1','chi','INTEGER',NULL,'1','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2025-09-25 16:55:08.841','18'),
('3','varchar 64 NON NULLE','2','chp','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('4','lien NON NULL','6','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('5','zero_un non nulle à 0','19','che','INTEGER',NULL,'0','0','1','1','0','0','1','0,1',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('6','texte NULL','13','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('7','entier NULL','10','che','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('8','lien NULL','7','chx','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('9','entier NON NULL','8','che','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('10','entier NON NULL à zéro','9','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('11','texte NON NULL','12','cht','TEXT',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('12','varchar 64 NULL','3','chp','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('13','mot de passe','23','chp','VARCHAR','256','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('14','dt23 création','20','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('15','nur','25','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'1','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('16','dt23 modification','21','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('17','varchar 255 NON NULLE','4','chp','VARCHAR','255','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('18','id utilisateur','27','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2025-09-06 14:10:54.357','2025-10-04 07:03:24.668','8'),
('19','nom technique','24','cht','VARCHAR','128','0','0','1','0','0',NULL,'0',NULL,'test_du_nom_technique1()','0','0','0','2025-11-19 12:07:33.326','2025-11-19 12:07:33.326','0'),
('21','durée_du_travail','11','chn','FLOAT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-02-15 13:48:23.907','2026-02-15 14:10:08.496','1'),
('22','dt10 aaaa_mm_jj','17','chd','VARCHAR','10','0','0','0','1','0','NULL','0',NULL,'date_nulle_ou_comprise_entre(''1000_01_01'',''9999_12_31'')','0','0','0','2026-03-16 12:16:06.262','2026-03-16 12:16:06.262','0'),
('23','tp8 hh_mm_ss','18','chd','VARCHAR','8','0','0','1','1','1','00:00:00','0',NULL,'test_heure_nulle_ou_comprise_entre(''00:00:00'',''23:59:59'')','0','0','0','2026-03-17 15:45:36.973','2026-07-22 11:30:30.103','3'),
('24','varchar 255 NULLE','5','chp','VARCHAR','255','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2026-07-12 14:44:48.369','2026-07-12 14:45:57.613','1'),
('25','nulle_zero_un','15','che','INTEGER',NULL,'0','0','0','1','0','NULL','1','0,1',NULL,'0','0','0','2026-08-08 10:04:11.393','2026-08-09 12:25:48.134','1'),
('26','couleur','26','chc','VARCHAR','7','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2026-11-05 08:18:51.542','2026-11-05 08:18:51.542','0'),
('27','décimal','22','chn','DECIMAL','17,2','0','0','0','1','0','0','0',NULL,NULL,'0','0','0','2026-10-08 13:19:54.803','2026-10-08 13:19:54.803','0'),
('97','texte NULL source_non_rev','16','cht','TEXT','','0','0','0','1','0','NULL','0','','','0','0','0','2025-10-21 10:14:55.512','2025-10-21 10:14:55.512','0'),
('98','texte NULL source_au_format_rev','14','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,'test_est_au_format_rev()','0','0','0','2025-10-20 17:48:22.207','2026-06-08 12:56:45.307','6'),
('99','priorité','28','che','INTEGER','2','0','0','1','1','0','0','0',NULL,'test_entier_compris_entre(0,99)','0','0','0','2025-09-06 09:19:20.196','2026-05-07 09:26:44.793','1'),
('109','id projet','30','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-01-17 12:12:01.759','2026-01-17 12:12:01.759','0');
/*================================================================================ FIN BLOC TABLE tbl_genres offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_bdds offset 0 (2) */
INSERT INTO tbl_bdds (  chi_id_basedd ,  chp_rev_travail_basedd ,  chp_fournisseur_basedd ,  chp_commentaire_basedd ,  chd__dtm_basedd ,  chd__dtc_basedd ,  che__nur_basedd ) VALUES
('1','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''''),
   collate(''''),
   transform_base_sur_svg(translate(-58.5,-57.5))
),
créer_table(
   nom_de_la_table(''tbl_televersements''),
   meta(
      nom_de_la_table(''tbl_televersements''),
      table(''tbl_televersements''),
      genre_meta(table_de_base),
      rang_de_la_table(0),
      permet_la_gestion_de(''televersement''),
      distinction_pour_liste(''liste des televersements''),
      distinction_pour_isad(''d\''un televersement''),
      transform_base_sur_svg(translate(897,553))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_televersement''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_televersement''),
            nom_bref_du_champ(''id''),
            libelle_du_champ(''id''),
            typologie(chi),
            genre(2)
         )
      ),
      champ(
         nom_du_champ(''che_bdd_televersement''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_bdd_televersement''),
            nom_bref_du_champ(''ref bdd''),
            libelle_du_champ(''ref bdd''),
            typologie(che),
            genre(9)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_table_televersement''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_table_televersement''),
            nom_bref_du_champ(''nom de la table''),
            libelle_du_champ(''nom de la table''),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''che_id_element_televersement''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_id_element_televersement''),
            nom_bref_du_champ(''id element''),
            libelle_du_champ(''id element''),
            typologie(che),
            genre(9)
         )
      ),
      champ(
         nom_du_champ(''chx_utilisateur_televersement''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_utilisateurs,chi_id_utilisateur),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_utilisateur_televersement''),
            nom_bref_du_champ(''utilisateur''),
            libelle_du_champ(''utilisateur''),
            typologie(chx),
            genre(4),
            reference_externe(3,''tbl_utilisateurs'',''chi_id_utilisateur'')
         )
      ),
      champ(
         nom_du_champ(''chp_champ_cle_televersement''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_champ_cle_televersement''),
            nom_bref_du_champ(''champ cle''),
            libelle_du_champ(''champ cle''),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_original_televersement''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(255),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_original_televersement''),
            nom_bref_du_champ(''nom original''),
            libelle_du_champ(''nom original''),
            typologie(chp),
            genre(17),
            longueur_du_champ(255)
         )
      ),
      champ(
         nom_du_champ(''che_poids_televersement''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_poids_televersement''),
            nom_bref_du_champ(''poids''),
            libelle_du_champ(''poids''),
            typologie(che),
            genre(9)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_fichier_sur_disque_televersement''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(255),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_fichier_sur_disque_televersement''),
            nom_bref_du_champ(''nom fichier sur disque''),
            libelle_du_champ(''nom fichier sur disque''),
            typologie(chp),
            genre(17),
            longueur_du_champ(255)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_du_dossier_televersement''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(255),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_du_dossier_televersement''),
            nom_bref_du_champ(''nom du dossier''),
            libelle_du_champ(''nom du dossier''),
            typologie(chp),
            genre(17),
            longueur_du_champ(255)
         )
      ),
      champ(
         nom_du_champ(''cht_comm_glob_televersement''),
         espece_du_champ(TEXT),
         longueur_du_champ(3.100),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_comm_glob_televersement''),
            nom_bref_du_champ(''commentaire global''),
            libelle_du_champ(''commentaire global''),
            typologie(cht),
            genre(6),
            longueur_du_champ(3.100)
         )
      ),
      champ(
         nom_du_champ(''chp_comm_fichier_televersement''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(255),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_comm_fichier_televersement''),
            nom_bref_du_champ(''commentaire fichier''),
            libelle_du_champ(''commentaire fichier''),
            typologie(chp),
            genre(24),
            longueur_du_champ(255)
         )
      ),
      champ(
         nom_du_champ(''che_ordre_televersement''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_ordre_televersement''),
            nom_bref_du_champ(''ordre''),
            libelle_du_champ(''ordre''),
            suggestion_du_champ(''''),
            description_du_champ(''''),
            typologie(che),
            genre(9)
         )
      ),
      champ(
         nom_du_champ(''chp_mime_televersement''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(32),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_mime_televersement''),
            nom_bref_du_champ(''mime''),
            libelle_du_champ(''type mime navigateur''),
            suggestion_du_champ(''''),
            typologie(chp),
            genre(12),
            longueur_du_champ(32)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_groupes''),
   meta(
      nom_de_la_table(''tbl_groupes''),
      table(''tbl_groupes''),
      genre_meta(table_de_base),
      rang_de_la_table(10),
      permet_la_gestion_de(''groupe''),
      distinction_pour_liste(''liste des groupes''),
      distinction_pour_isad(''d\''un groupe''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(0,1,2)''),
      transform_base_sur_svg(translate(39,27))
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
            libelle_du_champ(''id''),
            entete_distant_du_champ(''id groupe''),
            typologie(chi),
            genre(2)
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
            libelle_du_champ(''nom''),
            entete_distant_du_champ(''groupe''),
            typologie(cht),
            genre(19),
            est_libelle_lien(1),
            longueur_du_champ(128)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_groupe''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_groupes,chi_id_groupe),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_groupe''),
            nom_bref_du_champ(''id parent''),
            libelle_du_champ(''id parent''),
            entete_distant_du_champ(''groupe''),
            typologie(chx),
            genre(4),
            refe_parent_gauche(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_metiers''),
   meta(
      nom_de_la_table(''tbl_metiers''),
      table(''tbl_metiers''),
      genre_meta(table_de_base),
      rang_de_la_table(20),
      permet_la_gestion_de(''metier''),
      distinction_pour_liste(''liste des metiers''),
      distinction_pour_isad(''d\''un metier''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(0,1,2)''),
      transform_base_sur_svg(translate(38,141))
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
            libelle_du_champ(''id''),
            entete_distant_du_champ(''id metier''),
            typologie(chi),
            genre(2)
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
            libelle_du_champ(''nom''),
            entete_distant_du_champ(''métier''),
            typologie(cht),
            genre(19),
            est_libelle_lien(1),
            longueur_du_champ(128)
         )
      ),
      champ(
         nom_du_champ(''chx_parent_metier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_metiers,chi_id_metier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_metier''),
            nom_bref_du_champ(''id parent''),
            libelle_du_champ(''id parent''),
            entete_distant_du_champ(''metier''),
            typologie(chx),
            genre(4),
            refe_parent_gauche(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_acces''),
   meta(
      nom_de_la_table(''tbl_acces''),
      table(''tbl_acces''),
      genre_meta(table_de_base),
      rang_de_la_table(30),
      permet_la_gestion_de(''accès''),
      distinction_pour_liste(''liste des accès''),
      distinction_pour_isad(''d\''un accès''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(0,1,2),ne_pas_modifier(0)''),
      transform_base_sur_svg(translate(265,271))
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
            libelle_du_champ(''id''),
            entete_distant_du_champ(''id accès''),
            typologie(chi),
            genre(2)
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
            libelle_du_champ(''nom''),
            entete_distant_du_champ(''nom accès''),
            typologie(chp),
            genre(3),
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
            nom_bref_du_champ(''id groupe''),
            libelle_du_champ(''id du groupe''),
            entete_distant_du_champ(''groupe''),
            typologie(chx),
            genre(4)
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
            nom_bref_du_champ(''id métier''),
            libelle_du_champ(''id du métier''),
            entete_distant_du_champ(''métier''),
            typologie(chx),
            genre(4)
         )
      ),
      champ(
         nom_du_champ(''cht_parametres_acces''),
         espece_du_champ(TEXT),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''{}''),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_parametres_acces''),
            nom_bref_du_champ(''parametres''),
            libelle_du_champ(''parametres''),
            entete_distant_du_champ(''parametres accès''),
            typologie(cht),
            genre(11),
            longueur_du_champ(10.200)
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
            nom_bref_du_champ(''actif''),
            libelle_du_champ(''actif''),
            entete_distant_du_champ(''actif accès''),
            typologie(che),
            genre(5)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_sources''),
   meta(
      nom_de_la_table(''tbl_sources''),
      table(''tbl_sources''),
      genre_meta(table_de_base),
      rang_de_la_table(40),
      permet_la_gestion_de(''source''),
      distinction_pour_liste(''liste des sources''),
      distinction_pour_isad(''d\''un source''),
      transform_base_sur_svg(translate(252,6))
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
            libelle_du_champ(''id''),
            entete_distant_du_champ(''id source''),
            typologie(chi),
            genre(2)
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
            libelle_du_champ(''nom''),
            entete_distant_du_champ(''nom source''),
            typologie(chp),
            genre(19),
            est_libelle_lien(1),
            longueur_du_champ(128)
         )
      ),
      champ(
         nom_du_champ(''cht_rev_source''),
         espece_du_champ(TEXT),
         longueur_du_champ(5.50),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_source''),
            nom_bref_du_champ(''rev''),
            libelle_du_champ(''rev''),
            entete_distant_du_champ(''rev source''),
            typologie(cht),
            genre(98),
            longueur_du_champ(5.50)
         )
      ),
      champ(
         nom_du_champ(''cht_genere_source''),
         espece_du_champ(TEXT),
         longueur_du_champ(5.200),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_genere_source''),
            nom_bref_du_champ(''genere''),
            libelle_du_champ(''genere''),
            entete_distant_du_champ(''genere source''),
            typologie(cht),
            genre(97),
            longueur_du_champ(5.200)
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
            libelle_du_champ(''binaire''),
            entete_distant_du_champ(''binaire source''),
            typologie(che),
            genre(5)
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
            libelle_du_champ(''dossier id''),
            entete_distant_du_champ(''dossier id source''),
            typologie(chx),
            genre(4)
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
            libelle_du_champ(''commentaire''),
            entete_distant_du_champ(''commentaire source''),
            typologie(cht),
            genre(6),
            longueur_du_champ(10.200)
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
            libelle_du_champ('' dtm''),
            entete_distant_du_champ('' dtm source''),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
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
            libelle_du_champ('' dtc''),
            entete_distant_du_champ('' dtc source''),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
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
            libelle_du_champ('' nur''),
            entete_distant_du_champ('' nur source''),
            typologie(chi),
            genre(10),
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
            libelle_du_champ(''contient version''),
            entete_distant_du_champ(''contient version source''),
            typologie(che),
            genre(5)
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
            libelle_du_champ(''autorisation globale''),
            entete_distant_du_champ(''autorisation globale source''),
            typologie(che),
            genre(5)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_js_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_js_source''),
            nom_bref_du_champ(''condition js''),
            libelle_du_champ(''condition au format js''),
            entete_distant_du_champ(''condition js source''),
            typologie(cht),
            genre(97),
            longueur_du_champ(10.200)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_rev_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_rev_source''),
            nom_bref_du_champ(''condition rev''),
            libelle_du_champ(''condition au format rev''),
            entete_distant_du_champ(''condition rev source''),
            typologie(cht),
            genre(98),
            longueur_du_champ(10.200)
         )
      ),
      champ(
         nom_du_champ(''cht_notification_ko_source''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_notification_ko_source''),
            nom_bref_du_champ(''notification ko''),
            libelle_du_champ(''notification si condition ko''),
            entete_distant_du_champ(''notification ko source''),
            typologie(cht),
            genre(6),
            longueur_du_champ(10.200)
         )
      ),
      champ(
         nom_du_champ(''che_pour_util_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_pour_util_source''),
            nom_bref_du_champ(''pour util''),
            libelle_du_champ(''pour util''),
            entete_distant_du_champ(''pour util source''),
            typologie(che),
            genre(5)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_autorisations''),
   meta(
      nom_de_la_table(''tbl_autorisations''),
      table(''tbl_autorisations''),
      genre_meta(table_de_base),
      rang_de_la_table(50),
      permet_la_gestion_de(''autorisation''),
      distinction_pour_liste(''liste des autorisations''),
      distinction_pour_isad(''d\''une autorisation''),
      transform_base_sur_svg(translate(557,273))
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
            libelle_du_champ(''id''),
            entete_distant_du_champ(''id autorisation''),
            typologie(chi),
            genre(2)
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
            nom_bref_du_champ(''id source''),
            libelle_du_champ(''id source''),
            typologie(chx),
            genre(4)
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
            nom_bref_du_champ(''id accès''),
            libelle_du_champ(''id accès''),
            typologie(chx),
            genre(4)
         )
      ),
      champ(
         nom_du_champ(''che_pour_sous_liste_autorisation''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_pour_sous_liste_autorisation''),
            nom_bref_du_champ(''pour sous liste''),
            libelle_du_champ(''pour sous liste''),
            typologie(che),
            genre(5)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_menus''),
   meta(
      nom_de_la_table(''tbl_menus''),
      table(''tbl_menus''),
      genre_meta(table_de_base),
      rang_de_la_table(60),
      permet_la_gestion_de(''menu''),
      distinction_pour_liste(''liste des menus''),
      distinction_pour_isad(''d\''un menu''),
      transform_base_sur_svg(translate(875,253))
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
            libelle_du_champ(''id''),
            entete_distant_du_champ(''id menu''),
            typologie(chi),
            genre(2)
         )
      ),
      champ(
         nom_du_champ(''cht_libelle_menu''),
         espece_du_champ(TEXT),
         longueur_du_champ(3.5000),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_libelle_menu''),
            nom_bref_du_champ(''libelle''),
            libelle_du_champ(''libelle''),
            entete_distant_du_champ(''libelle menu''),
            fonction_pour_liste1(''
choix(si(condition(diffstricte(tup.T0_cht_libelle_menu,null)),alors(
      choix(si(condition(egalstricte(appelf(element(appelf(element(tup.T0_cht_libelle_menu),nomf(toLowerCase),p())),nomf(substr),p(0),p(4)),\''<svg\'')),alors(
            affectop(\''+=\'' , lst , concat(\''<div style="width:25px;border:1px white solid;display:inline-block;background:var(--c_coul_fond4);">\'',tup.T0_cht_libelle_menu,\''</div>\''))))sinon(alors(
            affectop(\''+=\'' , lst , concat(\''\'',appelf(element(this.__ig1),nomf(fi2),p(appelf(element(tup.T0_cht_libelle_menu),nomf(substr),p(0),p(100))))))))))))''),
            typologie(cht),
            genre(11),
            longueur_du_champ(3.5000)
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
            libelle_du_champ(''titre''),
            entete_distant_du_champ(''titre menu''),
            typologie(chp),
            genre(3),
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
            nom_bref_du_champ(''id autorisation''),
            libelle_du_champ(''id de l\''autorisation''),
            entete_distant_du_champ(''autorisation''),
            typologie(chx),
            genre(4)
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
            libelle_du_champ(''methode''),
            entete_distant_du_champ(''methode menu''),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''cht_initialisation_menu''),
         espece_du_champ(TEXT),
         longueur_du_champ(3.200),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_initialisation_menu''),
            nom_bref_du_champ(''initialisation''),
            libelle_du_champ(''initialisation''),
            typologie(cht),
            genre(98),
            longueur_du_champ(3.200)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_menu''),
         espece_du_champ(TEXT),
         longueur_du_champ(3.200),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_menu''),
            nom_bref_du_champ(''condition''),
            libelle_du_champ(''condition au format rev''),
            entete_distant_du_champ(''condition menu''),
            typologie(cht),
            genre(98),
            longueur_du_champ(3.200)
         )
      ),
      champ(
         nom_du_champ(''cht_condition_js_menu''),
         espece_du_champ(TEXT),
         longueur_du_champ(3.200),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_js_menu''),
            nom_bref_du_champ(''condition js''),
            libelle_du_champ(''condition au format js''),
            entete_distant_du_champ(''condition php menu''),
            typologie(cht),
            genre(97),
            longueur_du_champ(3.200)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_utilisateurs''),
   meta(
      nom_de_la_table(''tbl_utilisateurs''),
      table(''tbl_utilisateurs''),
      genre_meta(table_de_base),
      rang_de_la_table(70),
      permet_la_gestion_de(''utilisateur''),
      distinction_pour_liste(''liste des utilisateurs''),
      distinction_pour_isad(''d\''un utilisateur''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1,2)''),
      transform_base_sur_svg(translate(561,395))
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
            libelle_du_champ(''id''),
            entete_distant_du_champ(''id utilisateur''),
            typologie(chi),
            genre(2)
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
            libelle_du_champ(''nom de connexion''),
            entete_distant_du_champ(''nom utilisateur''),
            typologie(cht),
            genre(3),
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
            libelle_du_champ(''mot de passe''),
            entete_distant_du_champ(''mot de passe utilisateur''),
            fonction_pour_liste1(''
choix(si(condition(diffstricte(tup.T0_chp_mot_de_passe_utilisateur,null)),alors(
      affectop(\''+=\'' , lst , appelf(element(this.__ig1),nomf(fi2),p(appelf(element(tup.T0_chp_mot_de_passe_utilisateur),nomf(substr),p(7),p(3))))))))''),
            typologie(cht),
            genre(13),
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
            libelle_du_champ(''parametres''),
            entete_distant_du_champ(''parametres utilisateur''),
            typologie(cht),
            genre(6),
            longueur_du_champ(10.200)
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
            libelle_du_champ(''compteur1''),
            entete_distant_du_champ(''compteur1 utilisateur''),
            typologie(chi),
            genre(10)
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
            nom_bref_du_champ(''accès''),
            libelle_du_champ(''accès''),
            entete_distant_du_champ(''acces utilisateur''),
            typologie(chx),
            genre(4)
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
            libelle_du_champ('' nur''),
            entete_distant_du_champ('' nur utilisateur''),
            typologie(chi),
            genre(10),
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
            libelle_du_champ(''actif''),
            entete_distant_du_champ(''actif utilisateur''),
            typologie(che),
            genre(5)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_utilisateur''),
         espece_du_champ(TEXT),
         longueur_du_champ(10.200),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_utilisateur''),
            nom_bref_du_champ(''commentaire''),
            libelle_du_champ(''commentaire''),
            typologie(cht),
            genre(6),
            longueur_du_champ(10.200)
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
            libelle_du_champ('' dtm''),
            entete_distant_du_champ('' dtm utilisateur''),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
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
            libelle_du_champ('' dtc''),
            entete_distant_du_champ('' dtc utilisateur''),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
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
      rang_de_la_table(80),
      permet_la_gestion_de(''tâche''),
      distinction_pour_liste(''liste des tâches''),
      distinction_pour_isad(''d\''une tâche''),
      transform_base_sur_svg(translate(866,414))
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
            libelle_du_champ(''id''),
            entete_distant_du_champ(''id tâche''),
            typologie(chi),
            genre(2)
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
            libelle_du_champ(''utilisateur''),
            entete_distant_du_champ(''utilisateur tâche''),
            typologie(chx),
            genre(18)
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
            libelle_du_champ(''texte''),
            entete_distant_du_champ(''texte tâche''),
            typologie(chi),
            genre(11),
            est_libelle_lien(1),
            longueur_du_champ(10.200)
         )
      ),
      champ(
         nom_du_champ(''che_priorite_tache''),
         espece_du_champ(INTEGER),
         longueur_du_champ(2),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_priorite_tache''),
            nom_bref_du_champ(''priorité''),
            libelle_du_champ(''priorité''),
            suggestion_du_champ(
               ''00'',
               ''20'',
               ''50'',
               ''80'',
               ''99''
            ),
            typologie(chi),
            genre(99),
            longueur_du_champ(2)
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
            libelle_du_champ('' dtm''),
            entete_distant_du_champ('' dtm tâche''),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
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
            libelle_du_champ('' dtc''),
            entete_distant_du_champ('' dtc tâche''),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
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
            libelle_du_champ('' nur''),
            entete_distant_du_champ('' nur tâche''),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_parametres''),
   meta(
      nom_de_la_table(''tbl_parametres''),
      table(''tbl_parametres''),
      genre_meta(table_de_base),
      rang_de_la_table(310),
      permet_la_gestion_de(''paramètre''),
      distinction_pour_liste(''liste des paramètres''),
      distinction_pour_isad(''d\''un paramètre''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(10000)''),
      transform_base_sur_svg(translate(53,425))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_parametre''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_parametre''),
            nom_bref_du_champ(''id''),
            libelle_du_champ(''id du parametre''),
            entete_distant_du_champ(''paramètre''),
            typologie(chi),
            genre(2)
         )
      ),
      champ(
         nom_du_champ(''chp_cle_parametre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64.2),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_cle_parametre''),
            nom_bref_du_champ(''clé''),
            libelle_du_champ(''clé''),
            entete_distant_du_champ(''paramètre''),
            typologie(chp),
            genre(3),
            longueur_du_champ(64.2)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_parametre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64.2),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_parametre''),
            nom_bref_du_champ(''nom''),
            libelle_du_champ(''nom''),
            entete_distant_du_champ(''paramètre''),
            typologie(chp),
            genre(3),
            longueur_du_champ(64.2)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_parametre''),
         espece_du_champ(TEXT),
         longueur_du_champ(2.100),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_parametre''),
            nom_bref_du_champ(''commentaire''),
            libelle_du_champ(''commentaire''),
            entete_distant_du_champ(''commentaire paramètre''),
            typologie(cht),
            genre(11),
            longueur_du_champ(2.100)
         )
      ),
      champ(
         nom_du_champ(''cht_rev_parametre''),
         espece_du_champ(TEXT),
         longueur_du_champ(2.100),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''#()''),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_parametre''),
            nom_bref_du_champ(''rev''),
            libelle_du_champ(''rev''),
            entete_distant_du_champ(''rev paramètre''),
            typologie(cht),
            genre(98),
            longueur_du_champ(2.100)
         )
      ),
      champ(
         nom_du_champ(''cht_ordre_parametre''),
         espece_du_champ(TEXT),
         longueur_du_champ(2.100),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_ordre_parametre''),
            nom_bref_du_champ(''ordre''),
            libelle_du_champ(''ordre''),
            entete_distant_du_champ(''ordre paramètre''),
            typologie(cht),
            genre(6),
            longueur_du_champ(2.100)
         )
      ),
      champ(
         nom_du_champ(''che_pour_admin_parametre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_pour_admin_parametre''),
            nom_bref_du_champ(''pour admin''),
            libelle_du_champ(''pour admin''),
            entete_distant_du_champ(''pour admin paramètre''),
            typologie(che),
            genre(5)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_parametre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_parametre''),
            nom_bref_du_champ(''fld tscrt parnams''),
            libelle_du_champ(''fld tscrt parnams''),
            entete_distant_du_champ(''fld tscrt parnams tbl_parametres''),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_parametre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_parametre''),
            nom_bref_du_champ(''fld tsupd parnams''),
            libelle_du_champ(''fld tsupd parnams''),
            entete_distant_du_champ(''fld tsupd parnams tbl_parametres''),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''che__nur_parametre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_parametre''),
            nom_bref_du_champ(''nur''),
            libelle_du_champ(''nur''),
            entete_distant_du_champ(''fld cntupd parnams tbl_parametres''),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_grandeurs''),
   meta(
      nom_de_la_table(''tbl_grandeurs''),
      table(''tbl_grandeurs''),
      genre_meta(table_de_base),
      rang_de_la_table(320),
      permet_la_gestion_de(''grandeur''),
      distinction_pour_liste(''liste des grandeurs''),
      distinction_pour_isad(''d\''une grandeur''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(20000)''),
      transform_base_sur_svg(translate(314,469))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_grandeur''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_grandeur''),
            nom_bref_du_champ(''id''),
            libelle_du_champ(''id de la grandeur''),
            entete_distant_du_champ(''id grandeur''),
            typologie(chi),
            genre(2)
         )
      ),
      champ(
         nom_du_champ(''chx_parametre_grandeur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_parametres,chi_id_parametre),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parametre_grandeur''),
            nom_bref_du_champ(''id paramètre''),
            libelle_du_champ(''id du paramètre''),
            entete_distant_du_champ(''id paramètre grandeur''),
            typologie(chx),
            genre(4)
         )
      ),
      champ(
         nom_du_champ(''chp_cle_grandeur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64.2),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_cle_grandeur''),
            nom_bref_du_champ(''cle''),
            libelle_du_champ(''cle de la grandeur''),
            entete_distant_du_champ(''grandeur''),
            libelle_grandeur(''voir_champ_dependant''),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            longueur_du_champ(64.2)
         )
      ),
      champ(
         nom_du_champ(''cht_rev_grandeur''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_grandeur''),
            nom_bref_du_champ(''rev''),
            libelle_du_champ(''rev de la grandeur''),
            entete_distant_du_champ(''rev grandeur''),
            typologie(cht),
            genre(11),
            longueur_du_champ(10.200)
         )
      ),
      champ(
         nom_du_champ(''che_actif_grandeur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_actif_grandeur''),
            nom_bref_du_champ(''actif''),
            libelle_du_champ(''la grandeur est active''),
            entete_distant_du_champ(''actif grandeur''),
            typologie(che),
            genre(5)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_grandeur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_grandeur''),
            nom_bref_du_champ(''fld tscrt parnams''),
            libelle_du_champ(''fld tscrt parnams''),
            entete_distant_du_champ(''fld tscrt grandeur''),
            typologie(chd),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_grandeur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_grandeur''),
            nom_bref_du_champ(''fld tsupd parnams''),
            libelle_du_champ(''fld tsupd parnams''),
            entete_distant_du_champ(''grandeur''),
            typologie(chd),
            genre(16),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
         )
      ),
      champ(
         nom_du_champ(''che__nur_grandeur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_grandeur''),
            nom_bref_du_champ('' nur''),
            libelle_du_champ('' nur''),
            entete_distant_du_champ(''grandeur''),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_verouillee_grandeur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_verouillee_grandeur''),
            nom_bref_du_champ(''verouillée''),
            libelle_du_champ(''verouillée''),
            typologie(che),
            genre(5)
         )
      ),
      champ(
         nom_du_champ(''chc_couleur_texte_grandeur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(7),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chc_couleur_texte_grandeur''),
            nom_bref_du_champ(''couleur texte''),
            libelle_du_champ(''couleur du texte''),
            typologie(chc),
            genre(26),
            longueur_du_champ(7)
         )
      ),
      champ(
         nom_du_champ(''chc_couleur_fond_grandeur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(7),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chc_couleur_fond_grandeur''),
            nom_bref_du_champ(''couleur fond''),
            libelle_du_champ(''couleur du fond''),
            typologie(chc),
            genre(26),
            longueur_du_champ(7)
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
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_metiers''),
   nom_de_l_index(''idx_nom_metier''),
   meta(nom_de_l_index(idx_nom_metier),genre_meta(index_de_table),message('''')),
   champs(''chp_nom_metier''),
   unique()
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
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_sources''),
   nom_de_l_index(''idx_source''),
   meta(nom_de_l_index(idx_source),genre_meta(index_de_table),message('''')),
   champs(''chx_dossier_id_source'',''chp_nom_source''),
   unique()
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
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_utilisateurs''),
   nom_de_l_index(''idx_nom_unique_utilisateurs''),
   meta(nom_de_l_index(idx_nom_unique_utilisateurs),genre_meta(index_de_table),message(''Ce nom d\''utilisateur existe déjà'')),
   champs(''chp_nom_de_connexion_utilisateur''),
   unique()
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
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_parametres''),
   nom_de_l_index(''idx_parametre''),
   meta(nom_de_l_index(idx_parametre),genre_meta(index_de_table),message('''')),
   champs(''chp_cle_parametre''),
   unique()
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_grandeurs''),
   nom_de_l_index(''idx_grandeur''),
   meta(nom_de_l_index(idx_grandeur),genre_meta(index_de_table),message('''')),
   champs(''chx_parametre_grandeur'',''chp_cle_grandeur''),
   unique()
)','sqlite',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0'),
('2','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''''),
   collate(''''),
   transform_base_sur_svg(translate(6.5,12.5))
),
créer_table(
   nom_de_la_table(''tbl_acteurs''),
   meta(
      nom_de_la_table(''tbl_acteurs''),
      table(''tbl_acteurs''),
      genre_meta(table_de_base),
      rang_de_la_table(0),
      permet_la_gestion_de(''acteur''),
      distinction_pour_liste(''liste des acteurs''),
      distinction_pour_isad(''d\''un acteur''),
      transform_base_sur_svg(translate(36,41))
   ),
   champs(
      champ(
         nom_du_champ(''chx_utilisateur_acteur''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_utilisateur_acteur''),
            nom_bref_du_champ(''id acteur''),
            libelle_du_champ(''id de l\''acteur''),
            entete_distant_du_champ(''id acteur acteur''),
            typologie(chx),
            genre(4),
            reference_externe(1,''tbl_utilisateurs'',''chi_id_utilisateur'')
         )
      ),
      champ(
         nom_du_champ(''chp_nom_acteur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_acteur''),
            nom_bref_du_champ(''nom''),
            libelle_du_champ(''nom de l\''acteur''),
            entete_distant_du_champ(''nom acteur''),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_prenom_acteur''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_prenom_acteur''),
            nom_bref_du_champ(''prénom''),
            libelle_du_champ(''prénom de l\''acteur''),
            entete_distant_du_champ(''prénom acteur''),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chx_statut_acteur''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(20001),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_statut_acteur''),
            nom_bref_du_champ(''statut''),
            libelle_du_champ(''statut de l\''acteur''),
            entete_distant_du_champ(''statut''),
            libelle_grandeur(''statut''),
            chi_id_parametre(''10000''),
            typologie(chx),
            genre(4),
            reference_externe(1,''tbl_grandeurs'',''chi_id_grandeur'')
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_acteurs''),
   nom_de_l_index(''idx_acteur''),
   meta(nom_de_l_index(idx_acteur),genre_meta(index_de_table),message('''')),
   champs(''chp_nom_acteur'',''chp_prenom_acteur''),
   unique()
)','sqlite',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');
/*================================================================================ FIN BLOC TABLE tbl_bdds offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_requetes offset 0 (101) */
INSERT INTO tbl_requetes (  chi_id_requete ,  cht_commentaire_requete ,  chp_type_requete ,  cht_rev_requete ,  cht_sql_requete ,  cht_matrice_requete ,  che__nur_requete ,  chd__dtm_requete ,  chd__dtc_requete ,  che_est_souche_requete ,  chp_table_reference_requete ,  che_base_reference_requete ) VALUES
('1101','tbl_utilisateurs','select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs','1'),
('1107','utilisateurs','update','modifier(
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs','1'),
('1108','tbl_utilisateurs','select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs','1'),
('1109','utilisateur','update','modifier(
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs','1'),
('1110','tâches','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`che_priorite_tache`),
      champ(`T0`,`chd__dtm_tache`),
      champ(`T0`,`chd__dtc_tache`),
      champ(`T0`,`che__nur_tache`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         comme(champ(`T0`,`chp_texte_tache`),:T0_chp_texte_tache),
         inf(champ(`T0`,`che_priorite_tache`),:T0_che_priorite_tache2),
         egal(champ(`T0`,`che_priorite_tache`),:T0_che_priorite_tache),
         egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),
         egal(champ(`T0`,`chx_utilisateur_tache`),session(chi_id_utilisateur))
      )
   ),
   complements(
      trier_par((champ(`T0`,`che_priorite_tache`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T0`.`chd__dtm_tache` , 
`T0`.`chd__dtc_tache` , `T0`.`che__nur_tache`
 FROM b1.tbl_taches T0
WHERE (`T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
   AND `T0`.`che_priorite_tache` < :T0_che_priorite_tache2
   AND `T0`.`che_priorite_tache` = :T0_che_priorite_tache
   AND `T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = chi_id_utilisateur) 
ORDER BY `T0`.`che_priorite_tache` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('1111','tâches','insert','insérer(
   valeurs(
      affecte(champ(`chx_utilisateur_tache`),session(chi_id_utilisateur)),
      affecte(champ(`chp_texte_tache`),:chp_texte_tache),
      affecte(champ(`che_priorite_tache`),:che_priorite_tache),
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
    `che_priorite_tache` , 
    `chd__dtm_tache` , 
    `chd__dtc_tache`
) VALUES (
    chi_id_utilisateur , 
    :chp_texte_tache , 
    :che_priorite_tache , 
    :chd__dtm_tache , 
    :chd__dtc_tache
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('1112','tâches par id','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`che_priorite_tache`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`che__nur_tache`)
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
      et(egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),egal(champ(`T0`,`chx_utilisateur_tache`),session(chi_id_utilisateur)))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur` , 
`T0`.`che__nur_tache`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = chi_id_utilisateur)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('1113','tâches texte et priorité par id','update','modifier(
   valeurs(affecte(champ(`chp_texte_tache`),:n_chp_texte_tache),affecte(champ(`che_priorite_tache`),:n_che_priorite_tache),affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache),affecte(champ(`che__nur_tache`),plus(che__nur_tache,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),session(chi_id_utilisateur)),
         egal(champ(`che__nur_tache`),:c_che__nur_tache)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `che_priorite_tache` = :n_che_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache , 
   `che__nur_tache` = (che__nur_tache+1)
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = chi_id_utilisateur
   AND `che__nur_tache` = :c_che__nur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('1114','tâches','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_tache`),:chi_id_tache),egal(champ(`chx_utilisateur_tache`),session(chi_id_utilisateur)))
   )
)  ','DELETE FROM b1.tbl_taches
WHERE (`chi_id_tache` = :chi_id_tache
   AND `chx_utilisateur_tache` = chi_id_utilisateur) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('1119',NULL,'liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`che_actif_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T1`,`che_actif_acces`)
   ),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''actif / nom de connexion''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         utiliser(champ(`T0`,`che_actif_utilisateur`)),
         utiliser(htm_pref('' ''),champ(`T0`,`chp_nom_de_connexion_utilisateur`))
      ),
      (
         #(),
         entete_liste(''accès''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         utiliser(champ(`T1`,`che_actif_acces`)),
         utiliser(champ(`T0`,`chx_acces_utilisateur`)),
         utiliser(htm_pref('' ''),champ(`T1`,`chp_nom_acces`))
      )
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
         egal(champ(`T0`,`che_actif_utilisateur`),:T0_che_actif_utilisateur),
         comme(champ(`T0`,`chp_nom_de_connexion_utilisateur`),:T0_chp_nom_de_connexion_utilisateur),
         egal(champ(`T0`,`chx_acces_utilisateur`),:T0_chx_acces_utilisateur),
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces),
         egal(champ(`T1`,`che_actif_acces`),:T1_che_actif_acces),
         supegal(champ(`T0`,`chi_compteur1_utilisateur`),:T0_chi_compteur1_utilisateur),
         pas_dans(champ(`T0`,`chx_acces_utilisateur`),:acces_pas_dans)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_utilisateur`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`che_actif_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , `T1`.`che_actif_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE (`T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`che_actif_utilisateur` = :T0_che_actif_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
   AND `T0`.`chx_acces_utilisateur` = :T0_chx_acces_utilisateur
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T1`.`che_actif_acces` = :T1_che_actif_acces
   AND `T0`.`chi_compteur1_utilisateur` >= :T0_chi_compteur1_utilisateur
   AND `T0`.`chx_acces_utilisateur` NOT IN :acces_pas_dans) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs','1'),
('1120','utilisateurs','insert','insérer(
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs','1'),
('1121','utilisateurs','select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs','1'),
('1122','utilisateurs','update','modifier(
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs','1'),
('1123','utilisateurs','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:chi_id_utilisateur))
)  ','DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs','1'),
('1124','métier','liste_ecran','sélectionner(
   valeurs(champ(`T0`,`chi_id_metier`),champ(`T0`,`chp_nom_metier`),champ(`T0`,`chx_parent_metier`),champ(`T1`,`chp_nom_metier`)),
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
      et(
         #(),
         egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier),
         comme(champ(`T0`,`chp_nom_metier`),:T0_chp_nom_metier),
         egal(champ(`T0`,`chx_parent_metier`),:T0_chx_parent_metier),
         comme(champ(`T1`,`chp_nom_metier`),:T1_chp_nom_metier),
         supegal(champ(`T0`,`chi_id_metier`),:metier_mini)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_metier`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T0`.`chx_parent_metier` , `T1`.`chp_nom_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE ( /* */ `T0`.`chi_id_metier` = :T0_chi_id_metier
   AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier
   AND `T0`.`chx_parent_metier` = :T0_chx_parent_metier
   AND `T1`.`chp_nom_metier` LIKE :T1_chp_nom_metier
   AND `T0`.`chi_id_metier` >= :metier_mini) 
ORDER BY `T0`.`chi_id_metier` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers','1'),
('1125','métier','select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers','1'),
('1126','métier','insert','insérer(
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers','1'),
('1127','métier','update','modifier(

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
WHERE `chi_id_metier` = :c_chi_id_metier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers','1'),
('1129','métier','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:chi_id_metier))
)  ','DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers','1'),
('1130','groupes','liste_ecran','sélectionner(
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
      et(
         egal(champ(`T0`,`chi_id_groupe`),:T0_chi_id_groupe),
         comme(champ(`T0`,`chp_nom_groupe`),:T0_chp_nom_groupe),
         egal(champ(`T0`,`chx_parent_groupe`),:T0_chx_parent_groupe),
         comme(champ(`T1`,`chp_nom_groupe`),:T1_chp_nom_groupe),
         supegal(champ(`T0`,`chi_id_groupe`),:groupe_mini)
      )
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
   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe
   AND `T0`.`chi_id_groupe` >= :groupe_mini) 
ORDER BY `T0`.`chi_id_groupe` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes','1'),
('1131','groupes','select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes','1'),
('1132','groupes','insert','insérer(
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes','1'),
('1133','groupes','update','modifier(
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
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes','1'),
('1134','groupes','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:chi_id_groupe))
)  ','DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes','1'),
('1135','acces','liste_ecran','sélectionner(
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
         comme(champ(`T2`,`chp_nom_metier`),:T2_chp_nom_metier),
         pas_dans(champ(`T0`,`chi_id_acces`),:acces_pas_dans)
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
   AND `T2`.`chp_nom_metier` LIKE :T2_chp_nom_metier
   AND `T0`.`chi_id_acces` NOT IN :acces_pas_dans) 
ORDER BY `T0`.`chi_id_acces` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces','1'),
('1136','acces','select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces','1'),
('1137','acces','insert','insérer(
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces','1'),
('1138','accès','update','modifier(
   valeurs(affecte(champ(`chp_nom_acces`),:n_chp_nom_acces),affecte(champ(`che_actif_acces`),:n_che_actif_acces),affecte(champ(`chx_groupe_acces`),:n_chx_groupe_acces),affecte(champ(`chx_metier_acces`),:n_chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:c_chi_id_acces))
)  ','UPDATE b1.tbl_acces SET 
   `chp_nom_acces` = :n_chp_nom_acces , 
   `che_actif_acces` = :n_che_actif_acces , 
   `chx_groupe_acces` = :n_chx_groupe_acces , 
   `chx_metier_acces` = :n_chx_metier_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces','1'),
('1139','acces','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:chi_id_acces))
)  ','DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces','1'),
('1140',NULL,'liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T2`,`chp_nom_source`),
      champ(`T0`,`che_pour_sous_liste_autorisation`)
   ),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''accès''),
         format_colonne(''text-align: center; overflow-wrap: break-word;''),
         format_entete(''min-width: 12em;''),
         utiliser(champ(`T0`,`chx_acces_autorisation`),htm_pref(''(''),htm_post('') '')),
         utiliser(champ(`T1`,`chp_nom_acces`))
      ),
      (
         #(),
         entete_liste(''source''),
         format_colonne(''text-align: center; overflow-wrap: break-word;''),
         format_entete(''min-width: 12em;''),
         utiliser(champ(`T0`,`chx_source_autorisation`),htm_pref(''(''),htm_post('') '')),
         utiliser(champ(`T2`,`chp_nom_source`))
      )
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
         egal(champ(`T0`,`chx_acces_autorisation`),:T0_chx_acces_autorisation),
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces),
         egal(champ(`T0`,`chx_source_autorisation`),:T0_chx_source_autorisation),
         comme(champ(`T2`,`chp_nom_source`),:T2_chp_nom_source),
         egal(champ(`T0`,`che_pour_sous_liste_autorisation`),:T0_che_pour_sous_liste_autorisation),
         pas_dans(champ(`T0`,`chx_acces_autorisation`),:acces_pas_dans),
         egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_acces_autorisation`),décroissant()),(champ(`T2`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_autorisation`),décroissant()),(champ(`T2`,`chp_nom_source`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T1`.`chp_nom_acces` , `T0`.`chx_source_autorisation` , `T2`.`chp_nom_source` , 
`T0`.`che_pour_sous_liste_autorisation`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE (`T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
   AND `T2`.`chp_nom_source` LIKE :T2_chp_nom_source
   AND `T0`.`che_pour_sous_liste_autorisation` = :T0_che_pour_sous_liste_autorisation
   AND `T0`.`chx_acces_autorisation` NOT IN :acces_pas_dans
   AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation) 
ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations','1'),
('1141','autorisations','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T0`,`che_pour_sous_liste_autorisation`),
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
)','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
`T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations','1'),
('1142','autorisations','insert','insérer(
   valeurs(affecte(champ(`chx_acces_autorisation`),:chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:chx_source_autorisation),affecte(champ(`che_pour_sous_liste_autorisation`),:che_pour_sous_liste_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_autorisations`(
    `chx_acces_autorisation` , 
    `chx_source_autorisation` , 
    `che_pour_sous_liste_autorisation`
) VALUES (
    :chx_acces_autorisation , 
    :chx_source_autorisation , 
    :che_pour_sous_liste_autorisation
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations','1'),
('1143','autorisations','update','modifier(
   valeurs(affecte(champ(`chx_acces_autorisation`),:n_chx_acces_autorisation),affecte(champ(`chx_source_autorisation`),:n_chx_source_autorisation),affecte(champ(`che_pour_sous_liste_autorisation`),:n_che_pour_sous_liste_autorisation)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:c_chi_id_autorisation))
)  ','UPDATE b1.tbl_autorisations SET 
   `chx_acces_autorisation` = :n_chx_acces_autorisation , 
   `chx_source_autorisation` = :n_chx_source_autorisation , 
   `che_pour_sous_liste_autorisation` = :n_che_pour_sous_liste_autorisation
WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations','1'),
('1144','autorisations','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:chi_id_autorisation))
)  ','DELETE FROM b1.tbl_autorisations
WHERE `chi_id_autorisation` = :chi_id_autorisation ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations','1'),
('1145','menus','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`cht_condition_menu`),
      champ(`T1`,`chx_source_autorisation`),
      champ(`T3`,`chp_nom_source`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T1`,`chx_acces_autorisation`),
      champ(`T2`,`chp_nom_acces`)
   ),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''libellé titre<br />condition''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         format_entete(''''),
         utiliser(champ(`T0`,`cht_libelle_menu`)),
         utiliser(htm_pref('' / ''),champ(`T0`,`chp_titre_menu`)),
         utiliser(htm_pref(''<hr />''),champ(`T0`,`cht_condition_menu`))
      ),
      (
         #(),
         entete_liste(''source''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         format_entete(''''),
         utiliser(champ(`T1`,`chx_source_autorisation`)),
         utiliser(champ(`T3`,`chp_nom_source`))
      ),
      (
         #(),
         entete_liste(''accès''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         format_entete(''''),
         utiliser(champ(`T0`,`chx_autorisation_menu`)),
         utiliser(champ(`T1`,`chx_acces_autorisation`)),
         utiliser(champ(`T2`,`chp_nom_acces`))
      )
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
         egal(champ(`T1`,`chx_acces_autorisation`),:T1_chx_acces_autorisation),
         egal(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu),
         comme(champ(`T0`,`cht_libelle_menu`),:T0_cht_libelle_menu),
         comme(champ(`T0`,`chp_titre_menu`),:T0_chp_titre_menu),
         egal(champ(`T0`,`chx_autorisation_menu`),:T0_chx_autorisation_menu),
         comme(champ(`T0`,`chp_methode_menu`),:T0_chp_methode_menu),
         pas_dans(champ(`T1`,`chx_acces_autorisation`),(:acces_pas_dans))
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_menu`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`cht_libelle_menu` , `T0`.`chp_titre_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_source_autorisation` , 
`T3`.`chp_nom_source` , `T0`.`chx_autorisation_menu` , `T1`.`chx_acces_autorisation` , `T2`.`chp_nom_acces`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE (`T3`.`chp_nom_source` LIKE :T3_chp_nom_source
   AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation
   AND `T0`.`chi_id_menu` = :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
   AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
   AND `T1`.`chx_acces_autorisation` NOT IN (:acces_pas_dans)) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus','1'),
('1146','menus','select','sélectionner(
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
`T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus','1'),
('1147','menus','insert','insérer(
   valeurs(
      affecte(champ(`chp_titre_menu`),:chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:chp_methode_menu),
      affecte(champ(`cht_libelle_menu`),:cht_libelle_menu),
      affecte(champ(`cht_condition_menu`),:cht_condition_menu),
      affecte(champ(`cht_condition_js_menu`),:cht_condition_js_menu),
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
    `cht_condition_js_menu` , 
    `cht_initialisation_menu`
) VALUES (
    :chp_titre_menu , 
    :chx_autorisation_menu , 
    :chp_methode_menu , 
    :cht_libelle_menu , 
    :cht_condition_menu , 
    :cht_condition_js_menu , 
    :cht_initialisation_menu
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus','1'),
('1148','menus','update','modifier(
   valeurs(
      affecte(champ(`cht_libelle_menu`),:n_cht_libelle_menu),
      affecte(champ(`chp_titre_menu`),:n_chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:n_chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:n_chp_methode_menu),
      affecte(champ(`cht_condition_menu`),:n_cht_condition_menu),
      affecte(champ(`cht_condition_js_menu`),:n_cht_condition_js_menu),
      affecte(champ(`cht_initialisation_menu`),:n_cht_initialisation_menu)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:c_chi_id_menu))
)  ','UPDATE b1.tbl_menus SET 
   `cht_libelle_menu` = :n_cht_libelle_menu , 
   `chp_titre_menu` = :n_chp_titre_menu , 
   `chx_autorisation_menu` = :n_chx_autorisation_menu , 
   `chp_methode_menu` = :n_chp_methode_menu , 
   `cht_condition_menu` = :n_cht_condition_menu , 
   `cht_condition_js_menu` = :n_cht_condition_js_menu , 
   `cht_initialisation_menu` = :n_cht_initialisation_menu
WHERE `chi_id_menu` = :c_chi_id_menu ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus','1'),
('1149','menus','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:chi_id_menu))
)  ','DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus','1'),
('1150','utilisateurs','update','modifier(
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs','1'),
('1151','sources','select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources','1'),
('1152','autorisations','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T0`,`che_pour_sous_liste_autorisation`),
      champ(`T1`,`chp_nom_source`),
      champ(`T1`,`cht_condition_rev_source`),
      champ(`T1`,`cht_condition_js_source`),
      champ(`T1`,`cht_notification_ko_source`)
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
   conditions(supegal(champ(`T0`,`chx_acces_autorisation`),1)),
   complements(
      trier_par((champ(`T0`,`chx_acces_autorisation`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_source` , 
`T1`.`cht_condition_rev_source` , `T1`.`cht_condition_js_source` , `T1`.`cht_notification_ko_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation

WHERE `T0`.`chx_acces_autorisation` >= 1 
ORDER BY `T0`.`chx_acces_autorisation` ASC
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_autorisations','1'),
('1153','menus','select','sélectionner(
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
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T3`,`cht_condition_js_source`)
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
`T0`.`cht_initialisation_menu` , `T0`.`chi_id_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_js_menu` , `T0`.`chx_autorisation_menu` , 
`T3`.`cht_condition_js_source`
 FROM b1.tbl_menus T0 , 
      b1.tbl_autorisations T1
 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation

WHERE ( /* */ `T2`.`chi_id_acces` = :T2_chi_id_acces
   AND T1.chi_id_autorisation = T0.chx_autorisation_menu)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus','1'),
('1154','acces','update','modifier(
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
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces','1'),
('1155',NULL,'select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`che_priorite_tache`),
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
      et(egal(champ(`T0`,`chx_utilisateur_tache`),session(chi_id_utilisateur)),inf(champ(`T0`,`che_priorite_tache`),:T0_che_priorite_tache))
   ),
   complements(
      trier_par((champ(`T0`,`che_priorite_tache`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE (`T0`.`chx_utilisateur_tache` = chi_id_utilisateur
   AND `T0`.`che_priorite_tache` < :T0_che_priorite_tache) 
ORDER BY `T0`.`che_priorite_tache` ASC
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches','1'),
('1156',NULL,'update','modifier(
   valeurs(affecte(champ(che_priorite_tache),:n_che_priorite_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(chi_id_tache),:c_chi_id_tache),egal(champ(chx_utilisateur_tache),session(chi_id_utilisateur)))
   )
)  ','UPDATE b1.tbl_taches SET 
   `che_priorite_tache` = :n_che_priorite_tache
WHERE (chi_id_tache = :c_chi_id_tache
   AND chx_utilisateur_tache = chi_id_utilisateur) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches','1'),
('1157',NULL,'update','modifier(
   valeurs(affecte(champ(`che_priorite_tache`),:n_che_priorite_tache),affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_tache`),:c_chi_id_tache),egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache))
   )
)  ','UPDATE b1.tbl_taches SET 
   `che_priorite_tache` = :n_che_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches','1'),
('1158',NULL,'update','modifier(
   valeurs(affecte(champ(`che_priorite_tache`),moins(che_priorite_tache,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_tache`),:c_chi_id_tache),egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache),supegal(champ(`che_priorite_tache`),1))
   )
)  ','UPDATE b1.tbl_taches SET 
   `che_priorite_tache` = (che_priorite_tache-1)
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache
   AND `che_priorite_tache` >= 1) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches','1'),
('1159',NULL,'update','modifier(
   valeurs(affecte(champ(`che_priorite_tache`),plus(che_priorite_tache,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_tache`),:c_chi_id_tache),egal(champ(`chx_utilisateur_tache`),session(chi_id_utilisateur)),inf(champ(`che_priorite_tache`),99))
   )
)  ','UPDATE b1.tbl_taches SET 
   `che_priorite_tache` = (che_priorite_tache+1)
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = chi_id_utilisateur
   AND `che_priorite_tache` < 99) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches','1'),
('1162',NULL,'select','sélectionner(
   valeurs(champ(`T0`,`chi_id_acces`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,alias(T0),base(b1)))
      )
   ),
   conditions(supegal(champ(`T0`,`chi_id_acces`),1))
)  ','SELECT 
`T0`.`chi_id_acces`
 FROM b1.tbl_acces T0
WHERE `T0`.`chi_id_acces` >= 1
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces','1'),
('1164',NULL,'select','sélectionner(
   valeurs(
      champ(`T0`,`cht_libelle_menu`),
      champ(`T0`,`chp_titre_menu`),
      champ(`T0`,`chp_methode_menu`),
      champ(`T0`,`chi_id_menu`),
      champ(`T0`,`cht_initialisation_menu`),
      champ(`T1`,`chx_source_autorisation`),
      champ(`T2`,`chp_nom_source`),
      champ(`T0`,`cht_condition_menu`),
      champ(`T0`,`cht_condition_js_menu`),
      champ(`T0`,`chx_autorisation_menu`),
      champ(`T2`,`cht_condition_js_source`),
      champ(`T2`,`cht_notification_ko_source`),
      champ(`T0`,`cht_condition_js_menu`)
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
         source(nom_de_la_table(tbl_sources,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_source),champ(T1,chx_source_autorisation)))
      )
   ),
   conditions(
      et(egal(champ(`T1`,`chx_acces_autorisation`),0))
   )
)  ','SELECT 
`T0`.`cht_libelle_menu` , `T0`.`chp_titre_menu` , `T0`.`chp_methode_menu` , `T0`.`chi_id_menu` , `T0`.`cht_initialisation_menu` , 
`T1`.`chx_source_autorisation` , `T2`.`chp_nom_source` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_js_menu` , `T0`.`chx_autorisation_menu` , 
`T2`.`cht_condition_js_source` , `T2`.`cht_notification_ko_source` , `T0`.`cht_condition_js_menu`
 FROM b1.tbl_menus T0
 LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T1.chx_source_autorisation

WHERE (`T1`.`chx_acces_autorisation` = 0)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus','1'),
('1165',NULL,'insert','insérer(
   valeurs(
      affecte(champ(`che_bdd_televersement`),:che_bdd_televersement),
      affecte(champ(`chp_nom_table_televersement`),:chp_nom_table_televersement),
      affecte(champ(`che_id_element_televersement`),:che_id_element_televersement),
      affecte(champ(`chx_utilisateur_televersement`),session(chi_id_utilisateur)),
      affecte(champ(`chp_champ_cle_televersement`),:chp_champ_cle_televersement),
      affecte(champ(`chp_nom_original_televersement`),:chp_nom_original_televersement),
      affecte(champ(`che_poids_televersement`),:che_poids_televersement),
      affecte(champ(`chp_nom_fichier_sur_disque_televersement`),:chp_nom_fichier_sur_disque_televersement),
      affecte(champ(`chp_nom_du_dossier_televersement`),:chp_nom_du_dossier_televersement),
      affecte(champ(`cht_comm_glob_televersement`),:cht_comm_glob_televersement),
      affecte(champ(`chp_comm_fichier_televersement`),:chp_comm_fichier_televersement),
      affecte(champ(`chp_mime_televersement`),:chp_mime_televersement)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_televersements,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_televersements`(
    `che_bdd_televersement` , 
    `chp_nom_table_televersement` , 
    `che_id_element_televersement` , 
    `chx_utilisateur_televersement` , 
    `chp_champ_cle_televersement` , 
    `chp_nom_original_televersement` , 
    `che_poids_televersement` , 
    `chp_nom_fichier_sur_disque_televersement` , 
    `chp_nom_du_dossier_televersement` , 
    `cht_comm_glob_televersement` , 
    `chp_comm_fichier_televersement` , 
    `chp_mime_televersement`
) VALUES (
    :che_bdd_televersement , 
    :chp_nom_table_televersement , 
    :che_id_element_televersement , 
    chi_id_utilisateur , 
    :chp_champ_cle_televersement , 
    :chp_nom_original_televersement , 
    :che_poids_televersement , 
    :chp_nom_fichier_sur_disque_televersement , 
    :chp_nom_du_dossier_televersement , 
    :cht_comm_glob_televersement , 
    :chp_comm_fichier_televersement , 
    :chp_mime_televersement
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_televersements','1'),
('1166',NULL,'select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_televersement`),
      champ(`T0`,`chp_nom_du_dossier_televersement`),
      champ(`T0`,`chp_nom_fichier_sur_disque_televersement`),
      champ(`T0`,`chp_nom_original_televersement`),
      champ(`T0`,`cht_comm_glob_televersement`),
      champ(`T0`,`chp_comm_fichier_televersement`),
      champ(`T0`,`chp_mime_televersement`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_televersements,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`che_bdd_televersement`),:T0_che_bdd_televersement),
         egal(champ(`T0`,`chp_nom_table_televersement`),:T0_chp_nom_table_televersement),
         egal(champ(`T0`,`che_id_element_televersement`),:T0_che_id_element_televersement),
         egal(champ(`T0`,`chp_champ_cle_televersement`),:T0_chp_champ_cle_televersement)
      )
   ),
   complements(
      trier_par((champ(`T0`,`che_ordre_televersement`),croissant()),(champ(`T0`,`chi_id_televersement`),décroissant())),
      limité_à(quantité(500),début(0))
   )
)  ','SELECT 
`T0`.`chi_id_televersement` , `T0`.`chp_nom_du_dossier_televersement` , `T0`.`chp_nom_fichier_sur_disque_televersement` , `T0`.`chp_nom_original_televersement` , `T0`.`cht_comm_glob_televersement` , 
`T0`.`chp_comm_fichier_televersement` , `T0`.`chp_mime_televersement`
 FROM b1.tbl_televersements T0
WHERE ( /* */ `T0`.`che_bdd_televersement` = :T0_che_bdd_televersement
   AND `T0`.`chp_nom_table_televersement` = :T0_chp_nom_table_televersement
   AND `T0`.`che_id_element_televersement` = :T0_che_id_element_televersement
   AND `T0`.`chp_champ_cle_televersement` = :T0_chp_champ_cle_televersement) 
ORDER BY `T0`.`che_ordre_televersement` ASC, `T0`.`chi_id_televersement` DESC  
LIMIT 500 OFFSET 0 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_televersements','1'),
('1168',NULL,'select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_televersement`),
      champ(`T0`,`che_bdd_televersement`),
      champ(`T0`,`chp_nom_table_televersement`),
      champ(`T0`,`che_id_element_televersement`),
      champ(`T0`,`chx_utilisateur_televersement`),
      champ(`T0`,`chp_champ_cle_televersement`),
      champ(`T0`,`chp_nom_original_televersement`),
      champ(`T0`,`che_poids_televersement`),
      champ(`T0`,`chp_nom_fichier_sur_disque_televersement`),
      champ(`T0`,`chp_nom_du_dossier_televersement`),
      champ(`T0`,`cht_comm_glob_televersement`),
      champ(`T0`,`chp_comm_fichier_televersement`),
      champ(`T0`,`chp_mime_televersement`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_televersements,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_televersement`),:T0_chi_id_televersement))
)  ','SELECT 
`T0`.`chi_id_televersement` , `T0`.`che_bdd_televersement` , `T0`.`chp_nom_table_televersement` , `T0`.`che_id_element_televersement` , `T0`.`chx_utilisateur_televersement` , 
`T0`.`chp_champ_cle_televersement` , `T0`.`chp_nom_original_televersement` , `T0`.`che_poids_televersement` , `T0`.`chp_nom_fichier_sur_disque_televersement` , `T0`.`chp_nom_du_dossier_televersement` , 
`T0`.`cht_comm_glob_televersement` , `T0`.`chp_comm_fichier_televersement` , `T0`.`chp_mime_televersement`
 FROM b1.tbl_televersements T0
WHERE `T0`.`chi_id_televersement` = :T0_chi_id_televersement
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_televersements','1'),
('1170',NULL,'delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_televersements,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_televersement`),:chi_id_televersement))
)  ','DELETE FROM b1.tbl_televersements
WHERE `chi_id_televersement` = :chi_id_televersement',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_televersements','1'),
('1171',NULL,'update','modifier(
   valeurs(affecte(champ(`chp_nom_fichier_sur_disque_televersement`),:n_chp_nom_fichier_sur_disque_televersement)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_televersements,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_televersement`),:c_chi_id_televersement))
)  ','UPDATE b1.tbl_televersements SET 
   `chp_nom_fichier_sur_disque_televersement` = :n_chp_nom_fichier_sur_disque_televersement
WHERE `chi_id_televersement` = :c_chi_id_televersement ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_televersements','1'),
('1172',NULL,'select','sélectionner(
   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_televersements,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`che_bdd_televersement`),:T0_che_bdd_televersement),egal(champ(`T0`,`chp_nom_table_televersement`),:T0_chp_nom_table_televersement),egal(champ(`T0`,`che_id_element_televersement`),:T0_che_id_element_televersement))
   )
)  ','SELECT 
COUNT( * )
 FROM b1.tbl_televersements T0
WHERE (`T0`.`che_bdd_televersement` = :T0_che_bdd_televersement
   AND `T0`.`chp_nom_table_televersement` = :T0_chp_nom_table_televersement
   AND `T0`.`che_id_element_televersement` = :T0_che_id_element_televersement)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_televersements','1'),
('1181',NULL,'liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_parametre`),
      champ(`T0`,`chp_cle_parametre`),
      champ(`T0`,`chp_nom_parametre`),
      champ(`T0`,`che_pour_admin_parametre`),
      champ(`T0`,`cht_commentaire_parametre`),
      champ(`T0`,`cht_rev_parametre`),
      champ(`T0`,`cht_ordre_parametre`)
   ),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''cle<br />nom''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         format_entete(''''),
         utiliser(champ(`T0`,`chp_cle_parametre`)),
         utiliser(champ(`T0`,`chp_nom_parametre`),htm_pref(''<br />''),htm_prop(''color:blue;''))
      )
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_parametres,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         comme(champ(`T0`,`chp_cle_parametre`),:T0_chp_cle_parametre),
         egal(champ(`T0`,`chi_id_parametre`),:T0_chi_id_parametre),
         comme(champ(`T0`,`chp_nom_parametre`),:T0_chp_nom_parametre),
         egal(champ(`T0`,`che_pour_admin_parametre`),:T0_che_pour_admin_parametre),
         comme(champ(`T0`,`cht_commentaire_parametre`),:T0_cht_commentaire_parametre),
         comme(champ(`T0`,`cht_rev_parametre`),:T0_cht_rev_parametre),
         comme(champ(`T0`,`cht_ordre_parametre`),:T0_cht_ordre_parametre)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_parametre`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`che_pour_admin_parametre` , `T0`.`cht_commentaire_parametre` , 
`T0`.`cht_rev_parametre` , `T0`.`cht_ordre_parametre`
 FROM b1.tbl_parametres T0
WHERE (`T0`.`chp_cle_parametre` LIKE :T0_chp_cle_parametre
   AND `T0`.`chi_id_parametre` = :T0_chi_id_parametre
   AND `T0`.`chp_nom_parametre` LIKE :T0_chp_nom_parametre
   AND `T0`.`che_pour_admin_parametre` = :T0_che_pour_admin_parametre
   AND `T0`.`cht_commentaire_parametre` LIKE :T0_cht_commentaire_parametre
   AND `T0`.`cht_rev_parametre` LIKE :T0_cht_rev_parametre
   AND `T0`.`cht_ordre_parametre` LIKE :T0_cht_ordre_parametre) 
ORDER BY `T0`.`chi_id_parametre` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres','1'),
('1182',NULL,'select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_parametre`),
      champ(`T0`,`chp_cle_parametre`),
      champ(`T0`,`chp_nom_parametre`),
      champ(`T0`,`cht_commentaire_parametre`),
      champ(`T0`,`cht_rev_parametre`),
      champ(`T0`,`cht_ordre_parametre`),
      champ(`T0`,`che_pour_admin_parametre`),
      champ(`T0`,`che__nur_parametre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_parametres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_parametre`),:T0_chi_id_parametre)),
   complements(egal(champ(`T0`,`chi_id_parametre`),:T0_chi_id_parametre))
)  ','SELECT 
`T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
`T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre` , `T0`.`che__nur_parametre`
 FROM b1.tbl_parametres T0
WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres','1'),
('1183',NULL,'insert','insérer(
   valeurs(
      affecte(champ(`chp_cle_parametre`),:chp_cle_parametre),
      affecte(champ(`chp_nom_parametre`),:chp_nom_parametre),
      affecte(champ(`che_pour_admin_parametre`),:che_pour_admin_parametre),
      affecte(champ(`cht_commentaire_parametre`),:cht_commentaire_parametre),
      affecte(champ(`chd__dtc_parametre`),:chd__dtc_parametre),
      affecte(champ(`chd__dtm_parametre`),:chd__dtm_parametre),
      affecte(champ(`che__nur_parametre`),:che__nur_parametre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_parametres,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_parametres`(
    `chp_cle_parametre` , 
    `chp_nom_parametre` , 
    `che_pour_admin_parametre` , 
    `cht_commentaire_parametre` , 
    `chd__dtc_parametre` , 
    `chd__dtm_parametre` , 
    `che__nur_parametre`
) VALUES (
    :chp_cle_parametre , 
    :chp_nom_parametre , 
    :che_pour_admin_parametre , 
    :cht_commentaire_parametre , 
    :chd__dtc_parametre , 
    :chd__dtm_parametre , 
    :che__nur_parametre
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres','1'),
('1184',NULL,'update','modifier(
   valeurs(
      affecte(champ(`chp_cle_parametre`),:n_chp_cle_parametre),
      affecte(champ(`chp_nom_parametre`),:n_chp_nom_parametre),
      affecte(champ(`che_pour_admin_parametre`),:n_che_pour_admin_parametre),
      affecte(champ(`cht_rev_parametre`),:n_cht_rev_parametre),
      affecte(champ(`cht_commentaire_parametre`),:n_cht_commentaire_parametre),
      affecte(champ(`chd__dtc_parametre`),:n_chd__dtc_parametre),
      affecte(champ(`chd__dtm_parametre`),:n_chd__dtm_parametre),
      affecte(champ(`che__nur_parametre`),:n_che__nur_parametre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_parametres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_parametre`),:c_chi_id_parametre))
)  ','UPDATE b1.tbl_parametres SET 
   `chp_cle_parametre` = :n_chp_cle_parametre , 
   `chp_nom_parametre` = :n_chp_nom_parametre , 
   `che_pour_admin_parametre` = :n_che_pour_admin_parametre , 
   `cht_rev_parametre` = :n_cht_rev_parametre , 
   `cht_commentaire_parametre` = :n_cht_commentaire_parametre , 
   `chd__dtc_parametre` = :n_chd__dtc_parametre , 
   `chd__dtm_parametre` = :n_chd__dtm_parametre , 
   `che__nur_parametre` = :n_che__nur_parametre
WHERE `chi_id_parametre` = :c_chi_id_parametre ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres','1'),
('1185','','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_parametres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_parametre`),:chi_id_parametre))
)  ','DELETE FROM b1.tbl_parametres
WHERE `chi_id_parametre` = :chi_id_parametre',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres','1'),
('1186',NULL,'select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_grandeur`),
      champ(`T0`,`chx_parametre_grandeur`),
      champ(`T0`,`chp_cle_grandeur`),
      champ(`T0`,`cht_rev_grandeur`),
      champ(`T0`,`che_actif_grandeur`),
      champ(`T1`,`chp_cle_parametre`),
      champ(`T1`,`chp_nom_parametre`),
      champ(`T1`,`cht_rev_parametre`),
      champ(`T1`,`cht_ordre_parametre`),
      champ(`T0`,`che_verouillee_grandeur`),
      champ(`T0`,`chc_couleur_texte_grandeur`),
      champ(`T0`,`chc_couleur_fond_grandeur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_parametres,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_parametre),champ(T0,chx_parametre_grandeur)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_parametre_grandeur`),:T0_chx_parametre_grandeur))
)  ','SELECT 
`T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
`T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T0`.`che_verouillee_grandeur` , 
`T0`.`chc_couleur_texte_grandeur` , `T0`.`chc_couleur_fond_grandeur`
 FROM b1.tbl_grandeurs T0
 LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur

WHERE `T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1187','','insert','insérer(
   valeurs(
      affecte(champ(`chx_parametre_grandeur`),:chx_parametre_grandeur),
      affecte(champ(`chp_cle_grandeur`),:chp_cle_grandeur),
      affecte(champ(`cht_rev_grandeur`),:cht_rev_grandeur),
      affecte(champ(`che_actif_grandeur`),:che_actif_grandeur),
      affecte(champ(`chd__dtc_grandeur`),:chd__dtc_grandeur),
      affecte(champ(`chd__dtm_grandeur`),:chd__dtm_grandeur),
      affecte(champ(`che__nur_grandeur`),:che__nur_grandeur)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_grandeurs`(
    `chx_parametre_grandeur` , 
    `chp_cle_grandeur` , 
    `cht_rev_grandeur` , 
    `che_actif_grandeur` , 
    `chd__dtc_grandeur` , 
    `chd__dtm_grandeur` , 
    `che__nur_grandeur`
) VALUES (
    :chx_parametre_grandeur , 
    :chp_cle_grandeur , 
    :cht_rev_grandeur , 
    :che_actif_grandeur , 
    :chd__dtc_grandeur , 
    :chd__dtm_grandeur , 
    :che__nur_grandeur
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1188',NULL,'update','modifier(
   valeurs(affecte(champ(`chp_cle_grandeur`),:n_chp_cle_grandeur),affecte(champ(`chc_couleur_texte_grandeur`),:n_chc_couleur_texte_grandeur),affecte(champ(`chc_couleur_fond_grandeur`),:n_chc_couleur_fond_grandeur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:c_chi_id_grandeur))
)  ','UPDATE b1.tbl_grandeurs SET 
   `chp_cle_grandeur` = :n_chp_cle_grandeur , 
   `chc_couleur_texte_grandeur` = :n_chc_couleur_texte_grandeur , 
   `chc_couleur_fond_grandeur` = :n_chc_couleur_fond_grandeur
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1189','','update','modifier(
   valeurs(affecte(champ(`cht_ordre_parametre`),:n_cht_ordre_parametre)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_parametres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_parametre`),:c_chi_id_parametre))
)  ','UPDATE b1.tbl_parametres SET 
   `cht_ordre_parametre` = :n_cht_ordre_parametre
WHERE `chi_id_parametre` = :c_chi_id_parametre ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_parametres','1'),
('1190','','update','modifier(
   valeurs(affecte(champ(`che_actif_grandeur`),:n_che_actif_grandeur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:c_chi_id_grandeur))
)  ','UPDATE b1.tbl_grandeurs SET 
   `che_actif_grandeur` = :n_che_actif_grandeur
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1191','','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_grandeur`),
      champ(`T0`,`chx_parametre_grandeur`),
      champ(`T0`,`chp_cle_grandeur`),
      champ(`T0`,`cht_rev_grandeur`),
      champ(`T0`,`che_actif_grandeur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_grandeur`),:T0_chi_id_grandeur))
)  ','SELECT 
`T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur`
 FROM b1.tbl_grandeurs T0
WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1192','','update','modifier(
   valeurs(affecte(champ(`cht_rev_grandeur`),:n_cht_rev_grandeur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:c_chi_id_grandeur))
)  ','UPDATE b1.tbl_grandeurs SET 
   `cht_rev_grandeur` = :n_cht_rev_grandeur
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1201',NULL,'liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_grandeur`),
      champ(`T0`,`chp_cle_grandeur`),
      champ(`T0`,`cht_rev_grandeur`),
      champ(`T0`,`chx_parametre_grandeur`),
      champ(`T0`,`che_actif_grandeur`),
      champ(`T1`,`chp_cle_parametre`),
      champ(`T1`,`chp_nom_parametre`),
      champ(`T1`,`cht_rev_parametre`),
      champ(`T1`,`cht_ordre_parametre`),
      champ(`T1`,`che_pour_admin_parametre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_parametres,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_parametre),champ(T0,chx_parametre_grandeur)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chx_parametre_grandeur`),:T0_chx_parametre_grandeur),
         comme(champ(`T0`,`chp_cle_grandeur`),:T0_chp_cle_grandeur),
         egal(champ(`T0`,`chi_id_grandeur`),:T0_chi_id_grandeur),
         comme(champ(`T0`,`cht_rev_grandeur`),:T0_cht_rev_grandeur),
         egal(champ(`T0`,`che_actif_grandeur`),:T0_che_actif_grandeur)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_grandeur`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`che_actif_grandeur` , 
`T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
 FROM b1.tbl_grandeurs T0
 LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur

WHERE (`T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur
   AND `T0`.`chp_cle_grandeur` LIKE :T0_chp_cle_grandeur
   AND `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
   AND `T0`.`cht_rev_grandeur` LIKE :T0_cht_rev_grandeur
   AND `T0`.`che_actif_grandeur` = :T0_che_actif_grandeur) 
ORDER BY `T0`.`chi_id_grandeur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs','1'),
('1202','','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_grandeur`),
      champ(`T0`,`chx_parametre_grandeur`),
      champ(`T0`,`chp_cle_grandeur`),
      champ(`T0`,`cht_rev_grandeur`),
      champ(`T0`,`che_actif_grandeur`),
      champ(`T1`,`chp_cle_parametre`),
      champ(`T1`,`chp_nom_parametre`),
      champ(`T1`,`cht_rev_parametre`),
      champ(`T1`,`cht_ordre_parametre`),
      champ(`T1`,`che_pour_admin_parametre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_parametres,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_parametre),champ(T0,chx_parametre_grandeur)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_grandeur`),:T0_chi_id_grandeur))
)  ','SELECT 
`T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
`T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
 FROM b1.tbl_grandeurs T0
 LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur

WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs','1'),
('1203','','insert','insérer(
   valeurs(
      affecte(champ(`chx_parametre_grandeur`),:chx_parametre_grandeur),
      affecte(champ(`chp_cle_grandeur`),:chp_cle_grandeur),
      affecte(champ(`cht_rev_grandeur`),:cht_rev_grandeur),
      affecte(champ(`che_actif_grandeur`),:che_actif_grandeur),
      affecte(champ(`chd__dtc_grandeur`),:chd__dtc_grandeur),
      affecte(champ(`chd__dtm_grandeur`),:chd__dtm_grandeur),
      affecte(champ(`che__nur_grandeur`),:che__nur_grandeur)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_grandeurs`(
    `chx_parametre_grandeur` , 
    `chp_cle_grandeur` , 
    `cht_rev_grandeur` , 
    `che_actif_grandeur` , 
    `chd__dtc_grandeur` , 
    `chd__dtm_grandeur` , 
    `che__nur_grandeur`
) VALUES (
    :chx_parametre_grandeur , 
    :chp_cle_grandeur , 
    :cht_rev_grandeur , 
    :che_actif_grandeur , 
    :chd__dtc_grandeur , 
    :chd__dtm_grandeur , 
    :che__nur_grandeur
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs','1'),
('1204','','update','modifier(
   valeurs(
      affecte(champ(`chx_parametre_grandeur`),:n_chx_parametre_grandeur),
      affecte(champ(`chp_cle_grandeur`),:n_chp_cle_grandeur),
      affecte(champ(`cht_rev_grandeur`),:n_cht_rev_grandeur),
      affecte(champ(`che_actif_grandeur`),:n_che_actif_grandeur),
      affecte(champ(`chd__dtc_grandeur`),:n_chd__dtc_grandeur),
      affecte(champ(`chd__dtm_grandeur`),:n_chd__dtm_grandeur),
      affecte(champ(`che__nur_grandeur`),:n_che__nur_grandeur)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:c_chi_id_grandeur))
)  ','UPDATE b1.tbl_grandeurs SET 
   `chx_parametre_grandeur` = :n_chx_parametre_grandeur , 
   `chp_cle_grandeur` = :n_chp_cle_grandeur , 
   `cht_rev_grandeur` = :n_cht_rev_grandeur , 
   `che_actif_grandeur` = :n_che_actif_grandeur , 
   `chd__dtc_grandeur` = :n_chd__dtc_grandeur , 
   `chd__dtm_grandeur` = :n_chd__dtm_grandeur , 
   `che__nur_grandeur` = :n_che__nur_grandeur
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs','1'),
('1205','','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:chi_id_grandeur))
)  ','DELETE FROM b1.tbl_grandeurs
WHERE `chi_id_grandeur` = :chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs','1'),
('1210',NULL,'liste_ecran','sélectionner(
   valeurs(champ(`T0`,`chi_id_grandeur`),champ(`T0`,`chp_cle_grandeur`),champ(`T0`,`cht_rev_grandeur`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_parametres,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_parametre),champ(T0,chx_parametre_grandeur)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chx_parametre_grandeur`),2),
         comme(champ(`T0`,`chp_cle_grandeur`),:T0_chp_cle_grandeur),
         egal(champ(`T0`,`chi_id_grandeur`),:T0_chi_id_grandeur),
         comme(champ(`T0`,`cht_rev_grandeur`),:T0_cht_rev_grandeur),
         egal(champ(`T0`,`che_actif_grandeur`),1)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_grandeur`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur`
 FROM b1.tbl_grandeurs T0
 LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur

WHERE (`T0`.`chx_parametre_grandeur` = 2
   AND `T0`.`chp_cle_grandeur` LIKE :T0_chp_cle_grandeur
   AND `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
   AND `T0`.`cht_rev_grandeur` LIKE :T0_cht_rev_grandeur
   AND `T0`.`che_actif_grandeur` = 1) 
ORDER BY `T0`.`chi_id_grandeur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs','1'),
('1211',NULL,'liste_ecran','sélectionner(
   valeurs(champ(`T0`,`chi_id_grandeur`),champ(`T0`,`chp_cle_grandeur`),champ(`T0`,`cht_rev_grandeur`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`che_actif_grandeur`),1),egal(champ(`T0`,`chx_parametre_grandeur`),:T0_chx_parametre_grandeur))
   ),
   complements(trier_par(:liste_des_tris))
)  ','SELECT 
`T0`.`chi_id_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur`
 FROM b1.tbl_grandeurs T0
WHERE (`T0`.`che_actif_grandeur` = 1
   AND `T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur) 
ORDER BY  :liste_des_tris
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs','1'),
('1212','','liste_ecran','sélectionner(
   valeurs(champ(`T0`,`chi_id_grandeur`),champ(`T0`,`chp_cle_grandeur`),champ(`T0`,`cht_rev_grandeur`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         comme(champ(`T0`,`chp_cle_grandeur`),:T0_chp_cle_grandeur),
         egal(champ(`T0`,`chi_id_grandeur`),:T0_chi_id_grandeur),
         comme(champ(`T0`,`cht_rev_grandeur`),:T0_cht_rev_grandeur),
         egal(champ(`T0`,`chx_parametre_grandeur`),:T0_chx_parametre_grandeur),
         egal(champ(`T0`,`che_actif_grandeur`),1)
      )
   ),
   complements(trier_par(:liste_des_tris),limité_à(quantité(:quantitee),début(:debut)))
)  ','SELECT 
`T0`.`chi_id_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur`
 FROM b1.tbl_grandeurs T0
WHERE (`T0`.`chp_cle_grandeur` LIKE :T0_chp_cle_grandeur
   AND `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
   AND `T0`.`cht_rev_grandeur` LIKE :T0_cht_rev_grandeur
   AND `T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur
   AND `T0`.`che_actif_grandeur` = 1) 
ORDER BY  :liste_des_tris  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1213','','update','modifier(
   valeurs(affecte(champ(`chi_id_grandeur`),:n_chi_id_grandeur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:c_chi_id_grandeur))
)  ','UPDATE b1.tbl_grandeurs SET 
   `chi_id_grandeur` = :n_chi_id_grandeur
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1214',NULL,'delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_grandeur`),:chi_id_grandeur),
         egal(champ(`che_verouillee_grandeur`),0)
      )
   )
)  ','DELETE FROM b1.tbl_grandeurs
WHERE ( /* */ `chi_id_grandeur` = :chi_id_grandeur
   AND `che_verouillee_grandeur` = 0)',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1215',NULL,'update','modifier(
   valeurs(affecte(champ(`che_verouillee_grandeur`),:n_che_verouillee_grandeur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:c_chi_id_grandeur))
)  ','UPDATE b1.tbl_grandeurs SET 
   `che_verouillee_grandeur` = :n_che_verouillee_grandeur
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('1216','pour sous liste','liste_ecran','sélectionner(
   valeurs(champ(`T0`,`chi_id_groupe`),champ(`T0`,`chp_nom_groupe`),champ(`T0`,`chx_parent_groupe`),champ(`T1`,`chp_nom_groupe`)),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''groupe parent''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         format_entete(''''),
         utiliser(champ(`T0`,`chx_parent_groupe`)),
         utiliser(champ(`T1`,`chp_nom_groupe`),htm_pref('' ''))
      )
   ),
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
      et(
         egal(champ(`T0`,`chi_id_groupe`),:T0_chi_id_groupe),
         comme(champ(`T0`,`chp_nom_groupe`),:T0_chp_nom_groupe),
         egal(champ(`T0`,`chx_parent_groupe`),:T0_chx_parent_groupe),
         comme(champ(`T1`,`chp_nom_groupe`),:T1_chp_nom_groupe),
         pas_dans(champ(`T0`,`chi_id_groupe`),(:groupe_a_exclure))
      )
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
   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe
   AND `T0`.`chi_id_groupe` NOT IN (:groupe_a_exclure)) 
ORDER BY `T0`.`chi_id_groupe` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes','1'),
('1217','pour sous_liste','liste_ecran','sélectionner(
   valeurs(champ(`T0`,`chi_id_metier`),champ(`T0`,`chp_nom_metier`),champ(`T0`,`chx_parent_metier`),champ(`T1`,`chp_nom_metier`)),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''parent''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         format_entete(''''),
         utiliser(champ(`T0`,`chx_parent_metier`)),
         utiliser(champ(`T1`,`chp_nom_metier`))
      )
   ),
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
      et(
         #(),
         egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier),
         comme(champ(`T0`,`chp_nom_metier`),:T0_chp_nom_metier),
         egal(champ(`T0`,`chx_parent_metier`),:T0_chx_parent_metier),
         comme(champ(`T1`,`chp_nom_metier`),:T1_chp_nom_metier),
         pas_dans(champ(`T0`,`chi_id_metier`),(:metier_a_exclure))
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_metier`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T0`.`chx_parent_metier` , `T1`.`chp_nom_metier`
 FROM b1.tbl_metiers T0
 LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier

WHERE ( /* */ `T0`.`chi_id_metier` = :T0_chi_id_metier
   AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier
   AND `T0`.`chx_parent_metier` = :T0_chx_parent_metier
   AND `T1`.`chp_nom_metier` LIKE :T1_chp_nom_metier
   AND `T0`.`chi_id_metier` NOT IN (:metier_a_exclure)) 
ORDER BY `T0`.`chi_id_metier` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers','1'),
('1219','pour sous_liste','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_acces`),
      champ(`T0`,`chp_nom_acces`),
      champ(`T0`,`che_actif_acces`),
      champ(`T0`,`chx_groupe_acces`),
      champ(`T0`,`chx_metier_acces`),
      champ(`T1`,`chp_nom_groupe`),
      champ(`T2`,`chp_nom_metier`)
   ),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''actif / nom''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         utiliser(champ(`T0`,`che_actif_acces`)),
         utiliser(champ(`T0`,`chp_nom_acces`))
      ),
      (
         #(),
         entete_liste(''groupe''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         utiliser(htm_pref(''(''),champ(`T0`,`chx_groupe_acces`),htm_post('') '')),
         utiliser(champ(`T1`,`chp_nom_groupe`))
      ),
      (
         #(),
         entete_liste(''métier''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         utiliser(htm_pref(''(''),champ(`T0`,`chx_metier_acces`),htm_post('') '')),
         utiliser(champ(`T2`,`chp_nom_metier`))
      )
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
         comme(champ(`T2`,`chp_nom_metier`),:T2_chp_nom_metier),
         pas_dans(champ(`T0`,`chi_id_acces`),:acces_pas_dans)
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
   AND `T2`.`chp_nom_metier` LIKE :T2_chp_nom_metier
   AND `T0`.`chi_id_acces` NOT IN :acces_pas_dans) 
ORDER BY `T0`.`chi_id_acces` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces','1'),
('1220','pour sous liste','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T2`,`chp_nom_source`),
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T0`,`che_pour_sous_liste_autorisation`)
   ),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''source''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         utiliser(htm_pref(''(''),champ(`T0`,`chx_source_autorisation`),htm_post('') '')),
         utiliser(champ(`T2`,`chp_nom_source`))
      ),
      (
         #(),
         entete_liste(''accès''),
         format_colonne(''text-align: center; max-width: 24em;overflow-wrap: break-word;''),
         utiliser(htm_pref(''(''),champ(`T0`,`chx_acces_autorisation`),htm_post('') '')),
         utiliser(champ(`T1`,`chp_nom_acces`))
      )
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
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces),
         egal(champ(`T0`,`chx_source_autorisation`),:T0_chx_source_autorisation),
         egal(champ(`T0`,`chx_acces_autorisation`),:T0_chx_acces_autorisation),
         egal(champ(`T0`,`che_pour_sous_liste_autorisation`),:T0_che_pour_sous_liste_autorisation),
         pas_dans(champ(`T0`,`chx_acces_autorisation`),:acces_pas_dans),
         egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_acces_autorisation`),décroissant()),(champ(`T2`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_autorisation`),décroissant()),(champ(`T2`,`chp_nom_source`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chx_source_autorisation` , `T2`.`chp_nom_source` , `T0`.`chx_acces_autorisation` , `T1`.`chp_nom_acces` , 
`T0`.`che_pour_sous_liste_autorisation`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE (`T2`.`chp_nom_source` LIKE :T2_chp_nom_source
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
   AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
   AND `T0`.`che_pour_sous_liste_autorisation` = :T0_che_pour_sous_liste_autorisation
   AND `T0`.`chx_acces_autorisation` NOT IN :acces_pas_dans
   AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation) 
ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations','1'),
('1221',NULL,'liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_condition_rev_source`),
      champ(`T0`,`cht_notification_ko_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`cht_rev_source`)
   ),
   champs_combinaison_liste(
      (
         #(),
         entete_liste(''condition rev / message KO ''),
         format_colonne(''text-align: center; max-width: 18em;overflow-wrap: break-word;''),
         format_entete(''''),
         utiliser(champ(`T0`,`cht_condition_rev_source`)),
         utiliser(htm_pref(''<hr />''),champ(`T0`,`cht_notification_ko_source`))
      ),
      (
         #(),
         entete_liste(''commentaire / rev ''),
         format_colonne(''text-align: center; max-width: 10em;overflow-wrap: break-word;''),
         format_entete(''''),
         utiliser(champ(`T0`,`cht_commentaire_source`)),
         utiliser(htm_pref(''<hr />''),champ(`T0`,`cht_rev_source`))
      )
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         comme(champ(`T0`,`chp_nom_source`),:T0_chp_nom_source),
         egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source),
         sup(champ(`T0`,`chi_id_source`),:T0_chi_id_source2),
         infegal(champ(`T0`,`chi_id_source`),:T0_chi_id_source3),
         comme(champ(`T0`,`cht_rev_source`),:T0_cht_rev_source),
         egal(champ(`T0`,`che_autorisation_globale_source`),0),
         egal(champ(`T0`,`che_pour_util_source`),1),
         egal(champ(`T0`,`che_binaire_source`),0),
         egal(champ(`T0`,`che_est_fragment_source`),0)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_source`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_condition_rev_source` , `T0`.`cht_notification_ko_source` , `T0`.`cht_commentaire_source` , 
`T0`.`cht_rev_source`
 FROM b1.tbl_sources T0
WHERE ( /* */ `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
   AND `T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chi_id_source` > :T0_chi_id_source2
   AND `T0`.`chi_id_source` <= :T0_chi_id_source3
   AND `T0`.`cht_rev_source` LIKE :T0_cht_rev_source
   AND `T0`.`che_autorisation_globale_source` = 0
   AND `T0`.`che_pour_util_source` = 1
   AND `T0`.`che_binaire_source` = 0
   AND `T0`.`che_est_fragment_source` = 0) 
ORDER BY `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources','1'),
('1222',NULL,'update','modifier(
   valeurs(affecte(champ(`che_ordre_televersement`),:n_che_ordre_televersement)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_televersements,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_televersement`),:c_chi_id_televersement))
)  ','UPDATE b1.tbl_televersements SET 
   `che_ordre_televersement` = :n_che_ordre_televersement
WHERE `chi_id_televersement` = :c_chi_id_televersement ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_televersements','1'),
('1223',NULL,'update','modifier(
   valeurs(affecte(champ(`chp_comm_fichier_televersement`),:n_chp_comm_fichier_televersement)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_televersements,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_televersement`),:c_chi_id_televersement)),
   complements(trier_par(),limité_à(quantité(500),début(0)))
)  ','UPDATE b1.tbl_televersements SET 
   `chp_comm_fichier_televersement` = :n_chp_comm_fichier_televersement
WHERE `chi_id_televersement` = :c_chi_id_televersement ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_televersements','1'),
('1224',NULL,'select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_grandeur`),
      champ(`T0`,`chx_parametre_grandeur`),
      champ(`T0`,`chp_cle_grandeur`),
      champ(`T0`,`cht_rev_grandeur`),
      champ(`T0`,`che_actif_grandeur`),
      champ(`T0`,`chc_couleur_texte_grandeur`),
      champ(`T0`,`chc_couleur_fond_grandeur`),
      champ(`T1`,`cht_rev_parametre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_parametres,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_parametre),champ(T0,chx_parametre_grandeur)))
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_parametre_grandeur`),croissant()),(champ(`T0`,`chi_id_grandeur`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
`T0`.`chc_couleur_texte_grandeur` , `T0`.`chc_couleur_fond_grandeur` , `T1`.`cht_rev_parametre`
 FROM b1.tbl_grandeurs T0
 LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
 ORDER BY  `T0`.`chx_parametre_grandeur` ASC, `T0`.`chi_id_grandeur` ASC
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs','1'),
('2001',NULL,'liste_ecran','#(meta(inclure_le_prefixe_de_la_base_devant_la_table(1))),
sélectionner(
   valeurs(
      champ(`T0`,`chp_nom_acteur`),
      champ(`T0`,`chp_prenom_acteur`),
      champ(`T0`,`chx_utilisateur_acteur`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`),
      champ(`T2`,`chi_id_acces`),
      champ(`T1`,`chx_acces_utilisateur`),
      champ(`T2`,`chp_nom_acces`),
      champ(`T2`,`chx_groupe_acces`),
      champ(`T2`,`chx_metier_acces`),
      champ(`T3`,`chp_nom_groupe`),
      champ(`T4`,`chp_nom_metier`),
      champ(`T0`,`chx_utilisateur_acteur`),
      champ(`T0`,`chx_statut_acteur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acteurs,alias(T0),base(b2)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_acteur)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_acces),champ(T1,chx_acces_utilisateur)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_groupe),champ(T2,chx_groupe_acces)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T4),base(b1))),
         contrainte(egal(champ(T4,chi_id_metier),champ(T2,chx_metier_acces)))
      )
   ),
   conditions(
      et(
         comme(champ(`T0`,`chp_nom_acteur`),:T0_chp_nom_acteur),
         comme(champ(`T0`,`chp_prenom_acteur`),:T0_chp_prenom_acteur),
         comme(champ(`T1`,`chp_nom_de_connexion_utilisateur`),:T1_chp_nom_de_connexion_utilisateur),
         egal(champ(`T0`,`chx_utilisateur_acteur`),:T0_chx_utilisateur_acteur),
         egal(champ(`T0`,`chx_statut_acteur`),:T0_chx_statut_acteur)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_utilisateur_acteur`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','/*meta(inclure_le_prefixe_de_la_base_devant_la_table(1))*/
SELECT 
`T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T0`.`chx_utilisateur_acteur` , `T1`.`chp_nom_de_connexion_utilisateur` , `T2`.`chi_id_acces` , 
`T1`.`chx_acces_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , `T3`.`chp_nom_groupe` , 
`T4`.`chp_nom_metier` , `T0`.`chx_utilisateur_acteur` , `T0`.`chx_statut_acteur`
 FROM b2.tbl_acteurs T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur

 LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces

WHERE (`T0`.`chp_nom_acteur` LIKE :T0_chp_nom_acteur
   AND `T0`.`chp_prenom_acteur` LIKE :T0_chp_prenom_acteur
   AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur
   AND `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
   AND `T0`.`chx_statut_acteur` = :T0_chx_statut_acteur) 
ORDER BY `T0`.`chx_utilisateur_acteur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs','2'),
('2002',NULL,'select','#(meta(inclure_le_prefixe_de_la_base_devant_la_table(1))),
sélectionner(
   valeurs(
      champ(`T0`,`chx_utilisateur_acteur`),
      champ(`T0`,`chp_nom_acteur`),
      champ(`T0`,`chp_prenom_acteur`),
      champ(`T1`,`chi_id_utilisateur`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`),
      champ(`T1`,`chx_acces_utilisateur`),
      champ(`T1`,`che_actif_utilisateur`),
      champ(`T2`,`chp_nom_acces`),
      champ(`T2`,`chx_groupe_acces`),
      champ(`T2`,`chx_metier_acces`),
      champ(`T3`,`chp_nom_groupe`),
      champ(`T4`,`chp_nom_metier`),
      champ(`T0`,`chx_statut_acteur`),
      champ(`T5`,`chp_cle_grandeur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acteurs,alias(T0),base(b2)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_acteur)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_acces,alias(T2),base(b1))),
         contrainte(egal(champ(T2,chi_id_acces),champ(T1,chx_acces_utilisateur)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_groupes,alias(T3),base(b1))),
         contrainte(egal(champ(T3,chi_id_groupe),champ(T2,chx_groupe_acces)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_metiers,alias(T4),base(b1))),
         contrainte(egal(champ(T4,chi_id_metier),champ(T2,chx_metier_acces)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_grandeurs,alias(T5),base(b1))),
         contrainte(egal(champ(T5,chi_id_grandeur),champ(T0,chx_statut_acteur)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_utilisateur_acteur`),:T0_chx_utilisateur_acteur))
)  ','/*meta(inclure_le_prefixe_de_la_base_devant_la_table(1))*/
SELECT 
`T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
`T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
`T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier` , `T0`.`chx_statut_acteur` , `T5`.`chp_cle_grandeur`
 FROM b2.tbl_acteurs T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur

 LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces

 LEFT JOIN b1.tbl_grandeurs T5 ON T5.chi_id_grandeur = T0.chx_statut_acteur

WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs','2'),
('2003',NULL,'insert','#(meta(inclure_le_prefixe_de_la_base_devant_la_table(1))),
insérer(
   valeurs(affecte(champ(`chx_utilisateur_acteur`),:chx_utilisateur_acteur),affecte(champ(`chp_nom_acteur`),:chp_nom_acteur),affecte(champ(`chp_prenom_acteur`),:chp_prenom_acteur),affecte(champ(`chx_statut_acteur`),:chx_statut_acteur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acteurs,base(b2)))
      )
   )
)  ','/*meta(inclure_le_prefixe_de_la_base_devant_la_table(1))*/

INSERT INTO b2.`tbl_acteurs`(
    `chx_utilisateur_acteur` , 
    `chp_nom_acteur` , 
    `chp_prenom_acteur` , 
    `chx_statut_acteur`
) VALUES (
    :chx_utilisateur_acteur , 
    :chp_nom_acteur , 
    :chp_prenom_acteur , 
    :chx_statut_acteur
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs','2'),
('2004',NULL,'update','modifier(
   valeurs(affecte(champ(`chp_nom_acteur`),:n_chp_nom_acteur),affecte(champ(`chp_prenom_acteur`),:n_chp_prenom_acteur),affecte(champ(`chx_statut_acteur`),:n_chx_statut_acteur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acteurs,alias(T0),base(b2)))
      )
   ),
   conditions(egal(champ(`chx_utilisateur_acteur`),:c_chx_utilisateur_acteur))
)  ','UPDATE b2.tbl_acteurs SET 
   `chp_nom_acteur` = :n_chp_nom_acteur , 
   `chp_prenom_acteur` = :n_chp_prenom_acteur , 
   `chx_statut_acteur` = :n_chx_statut_acteur
WHERE `chx_utilisateur_acteur` = :c_chx_utilisateur_acteur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs','2'),
('2005',NULL,'delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acteurs,base(b2)))
      )
   ),
   conditions(egal(champ(`chx_utilisateur_acteur`),:chx_utilisateur_acteur))
)  ','DELETE FROM b2.tbl_acteurs
WHERE `chx_utilisateur_acteur` = :chx_utilisateur_acteur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs','2'),
('2011','sources','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`che_binaire_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`che_autorisation_globale_source`)
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
         egal(champ(`T0`,`che_autorisation_globale_source`),:T0_che_autorisation_globale_source),
         dans(champ(`T0`,`che_pour_util_source`),(:T0_che_pour_util_source))
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_source`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source`
 FROM b1.tbl_sources T0
WHERE (`T0`.`chp_nom_source` LIKE :T0_chp_nom_source
   AND `T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chi_id_source` > :T0_chi_id_source2
   AND `T0`.`chi_id_source` <= :T0_chi_id_source3
   AND `T0`.`che_binaire_source` = :T0_che_binaire_source
   AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
   AND `T0`.`che_pour_util_source` IN (:T0_che_pour_util_source)) 
ORDER BY `T0`.`chi_id_source` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources','1'),
('2012','sources','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`che_autorisation_globale_source`),
      champ(`T0`,`che_pour_util_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source))
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`che_pour_util_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`chi_id_source` = :T0_chi_id_source
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources','1'),
('2015','sources','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:chi_id_source))
)  ','DELETE FROM b1.tbl_sources
WHERE `chi_id_source` = :chi_id_source ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources','1'),
('2021',NULL,'liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`che_priorite_tache`),
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
         egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),
         egal(champ(`T0`,`chx_utilisateur_tache`),:T0_chx_utilisateur_tache),
         comme(champ(`T0`,`chp_texte_tache`),:T0_chp_texte_tache),
         egal(champ(`T0`,`che_priorite_tache`),:T0_che_priorite_tache),
         inf(champ(`T0`,`che_priorite_tache`),:T0_che_priorite_tache2),
         comme(champ(`T1`,`chp_nom_de_connexion_utilisateur`),:T1_chp_nom_de_connexion_utilisateur)
      )
   ),
   complements(
      trier_par((champ(`T0`,`che_priorite_tache`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T0`.`chd__dtm_tache` , 
`T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
   AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
   AND `T0`.`che_priorite_tache` = :T0_che_priorite_tache
   AND `T0`.`che_priorite_tache` < :T0_che_priorite_tache2
   AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur) 
ORDER BY `T0`.`che_priorite_tache` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('2022','tâches','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_tache`),
      champ(`T0`,`chx_utilisateur_tache`),
      champ(`T0`,`chp_texte_tache`),
      champ(`T0`,`che_priorite_tache`),
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
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('2023','tâches','insert','insérer(
   valeurs(
      affecte(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache),
      affecte(champ(`chp_texte_tache`),:chp_texte_tache),
      affecte(champ(`che_priorite_tache`),:che_priorite_tache),
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
    `che_priorite_tache` , 
    `chd__dtm_tache` , 
    `chd__dtc_tache`
) VALUES (
    :chx_utilisateur_tache , 
    :chp_texte_tache , 
    :che_priorite_tache , 
    :chd__dtm_tache , 
    :chd__dtc_tache
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('2024','taches','update','modifier(
   valeurs(affecte(champ(`chp_texte_tache`),:n_chp_texte_tache),affecte(champ(`che_priorite_tache`),:n_che_priorite_tache),affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache),affecte(champ(`chx_utilisateur_tache`),:n_chx_utilisateur_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_tache`),:c_chi_id_tache))
)  ','UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `che_priorite_tache` = :n_che_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache , 
   `chx_utilisateur_tache` = :n_chx_utilisateur_tache
WHERE `chi_id_tache` = :c_chi_id_tache ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1'),
('2025','tâches','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_tache`),:chi_id_tache))
)  ','DELETE FROM b1.tbl_taches
WHERE `chi_id_tache` = :chi_id_tache ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches','1');
/*================================================================================ FIN BLOC TABLE tbl_requetes offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_taches offset 0 (1) */
INSERT INTO tbl_taches (  chi_id_tache ,  chx_utilisateur_tache ,  chp_texte_tache ,  che_priorite_tache ,  chd__dtm_tache ,  chd__dtc_tache ,  che__nur_tache ) VALUES
('1','1','les tâches des utilisateurs','5','2026-06-06 11:39:42.307','2026-02-09 07:38:23.887','0');
/*================================================================================ FIN BLOC TABLE tbl_taches offset 0 */
